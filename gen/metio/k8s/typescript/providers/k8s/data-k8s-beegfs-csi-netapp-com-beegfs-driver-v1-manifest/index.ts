// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#metadata DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#metadata}
  */
  readonly metadata: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata;
  /**
  * BeegfsDriverSpec defines the desired state of BeegfsDriver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#spec DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#spec}
  */
  readonly spec?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec;
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#annotations DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#labels DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#name DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#namespace DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadataToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadataToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver {
  /**
  * A combination of registry and image (e.g. registry.k8s.io/csi-provisioner or ghcr.io/thinkparq/beegfs-csi-driver).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#image DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#image}
  */
  readonly image?: string;
  /**
  * A tag (e.g. v2.2.2 or latest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#tag DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriverToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriverToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriverOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._tag = value.tag;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar {
  /**
  * A combination of registry and image (e.g. registry.k8s.io/csi-provisioner or ghcr.io/thinkparq/beegfs-csi-driver).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#image DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#image}
  */
  readonly image?: string;
  /**
  * A tag (e.g. v2.2.2 or latest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#tag DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrarToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrarToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._tag = value.tag;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner {
  /**
  * A combination of registry and image (e.g. registry.k8s.io/csi-provisioner or ghcr.io/thinkparq/beegfs-csi-driver).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#image DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#image}
  */
  readonly image?: string;
  /**
  * A tag (e.g. v2.2.2 or latest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#tag DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisionerToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisionerToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisionerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._tag = value.tag;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer {
  /**
  * A combination of registry and image (e.g. registry.k8s.io/csi-provisioner or ghcr.io/thinkparq/beegfs-csi-driver).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#image DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#image}
  */
  readonly image?: string;
  /**
  * A tag (e.g. v2.2.2 or latest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#tag DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizerToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizerToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._tag = value.tag;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe {
  /**
  * A combination of registry and image (e.g. registry.k8s.io/csi-provisioner or ghcr.io/thinkparq/beegfs-csi-driver).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#image DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#image}
  */
  readonly image?: string;
  /**
  * A tag (e.g. v2.2.2 or latest).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#tag DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#tag}
  */
  readonly tag?: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbeToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbeToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._tag = value.tag;
    }
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides {
  /**
  * Defaults to ghcr.io/thinkparq/beegfs-csi-driver:<the operator version>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#beegfs_csi_driver DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#beegfs_csi_driver}
  */
  readonly beegfsCsiDriver?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver;
  /**
  * Defaults to registry.k8s.io/sig-storage/csi-node-driver-registrar:<the most current version at operator release>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#csi_node_driver_registrar DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#csi_node_driver_registrar}
  */
  readonly csiNodeDriverRegistrar?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar;
  /**
  * Defaults to registry.k8s.io/sig-storage/csi-provisioner:<the most current version at operator release>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#csi_provisioner DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#csi_provisioner}
  */
  readonly csiProvisioner?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner;
  /**
  * Defaults to registry.k8s.io/sig-storage/csi-resizer:<the most current version at operator release>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#csi_resizer DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#csi_resizer}
  */
  readonly csiResizer?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer;
  /**
  * Defaults to registry.k8s.io/sig-storage/livenessprobe:<the most current version at operator release>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#liveness_probe DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#liveness_probe}
  */
  readonly livenessProbe?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beegfs_csi_driver: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriverToTerraform(struct!.beegfsCsiDriver),
    csi_node_driver_registrar: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrarToTerraform(struct!.csiNodeDriverRegistrar),
    csi_provisioner: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisionerToTerraform(struct!.csiProvisioner),
    csi_resizer: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizerToTerraform(struct!.csiResizer),
    liveness_probe: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbeToTerraform(struct!.livenessProbe),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beegfs_csi_driver: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriverToHclTerraform(struct!.beegfsCsiDriver),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver",
    },
    csi_node_driver_registrar: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrarToHclTerraform(struct!.csiNodeDriverRegistrar),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar",
    },
    csi_provisioner: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisionerToHclTerraform(struct!.csiProvisioner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner",
    },
    csi_resizer: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizerToHclTerraform(struct!.csiResizer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer",
    },
    liveness_probe: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbeToHclTerraform(struct!.livenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beegfsCsiDriver?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.beegfsCsiDriver = this._beegfsCsiDriver?.internalValue;
    }
    if (this._csiNodeDriverRegistrar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiNodeDriverRegistrar = this._csiNodeDriverRegistrar?.internalValue;
    }
    if (this._csiProvisioner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiProvisioner = this._csiProvisioner?.internalValue;
    }
    if (this._csiResizer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.csiResizer = this._csiResizer?.internalValue;
    }
    if (this._livenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbe = this._livenessProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beegfsCsiDriver.internalValue = undefined;
      this._csiNodeDriverRegistrar.internalValue = undefined;
      this._csiProvisioner.internalValue = undefined;
      this._csiResizer.internalValue = undefined;
      this._livenessProbe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beegfsCsiDriver.internalValue = value.beegfsCsiDriver;
      this._csiNodeDriverRegistrar.internalValue = value.csiNodeDriverRegistrar;
      this._csiProvisioner.internalValue = value.csiProvisioner;
      this._csiResizer.internalValue = value.csiResizer;
      this._livenessProbe.internalValue = value.livenessProbe;
    }
  }

  // beegfs_csi_driver - computed: false, optional: true, required: false
  private _beegfsCsiDriver = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriverOutputReference(this, "beegfs_csi_driver");
  public get beegfsCsiDriver() {
    return this._beegfsCsiDriver;
  }
  public putBeegfsCsiDriver(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesBeegfsCsiDriver) {
    this._beegfsCsiDriver.internalValue = value;
  }
  public resetBeegfsCsiDriver() {
    this._beegfsCsiDriver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beegfsCsiDriverInput() {
    return this._beegfsCsiDriver.internalValue;
  }

  // csi_node_driver_registrar - computed: false, optional: true, required: false
  private _csiNodeDriverRegistrar = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrarOutputReference(this, "csi_node_driver_registrar");
  public get csiNodeDriverRegistrar() {
    return this._csiNodeDriverRegistrar;
  }
  public putCsiNodeDriverRegistrar(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiNodeDriverRegistrar) {
    this._csiNodeDriverRegistrar.internalValue = value;
  }
  public resetCsiNodeDriverRegistrar() {
    this._csiNodeDriverRegistrar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiNodeDriverRegistrarInput() {
    return this._csiNodeDriverRegistrar.internalValue;
  }

  // csi_provisioner - computed: false, optional: true, required: false
  private _csiProvisioner = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisionerOutputReference(this, "csi_provisioner");
  public get csiProvisioner() {
    return this._csiProvisioner;
  }
  public putCsiProvisioner(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiProvisioner) {
    this._csiProvisioner.internalValue = value;
  }
  public resetCsiProvisioner() {
    this._csiProvisioner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiProvisionerInput() {
    return this._csiProvisioner.internalValue;
  }

  // csi_resizer - computed: false, optional: true, required: false
  private _csiResizer = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizerOutputReference(this, "csi_resizer");
  public get csiResizer() {
    return this._csiResizer;
  }
  public putCsiResizer(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesCsiResizer) {
    this._csiResizer.internalValue = value;
  }
  public resetCsiResizer() {
    this._csiResizer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csiResizerInput() {
    return this._csiResizer.internalValue;
  }

  // liveness_probe - computed: false, optional: true, required: false
  private _livenessProbe = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbeOutputReference(this, "liveness_probe");
  public get livenessProbe() {
    return this._livenessProbe;
  }
  public putLivenessProbe(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesLivenessProbe) {
    this._livenessProbe.internalValue = value;
  }
  public resetLivenessProbe() {
    this._livenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeInput() {
    return this._livenessProbe.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#name DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#claims DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#claims}
  */
  readonly claims?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#limits DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#requests DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsList",
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#name DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#claims DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#claims}
  */
  readonly claims?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#limits DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#requests DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsList",
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerClaims[] | cdktf.IResolvable) {
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
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#name DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#claims DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#claims}
  */
  readonly claims?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#limits DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#requests DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsList",
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsClaims[] | cdktf.IResolvable) {
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
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#name DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#claims DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#claims}
  */
  readonly claims?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#limits DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#requests DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsList",
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarClaims[] | cdktf.IResolvable) {
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
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#name DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#claims DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#claims}
  */
  readonly claims?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#limits DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#requests DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsList",
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeClaims[] | cdktf.IResolvable) {
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
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides {
  /**
  * The resource specifications for the beegfs container of the BeeGFS driver controller pod. The default values for requests are (cpu: 100m, memory: 16Mi). The default values for limits are (cpu: None, memory: 256Mi).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#controller_beegfs DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#controller_beegfs}
  */
  readonly controllerBeegfs?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs;
  /**
  * The resource specifications for the csi-provisioner container of the BeeGFS driver controller pod. The default values for requests are (cpu: 80m, memory: 24Mi) The default values for limits are (cpu: None, memory 256Mi)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#controller_csi_provisioner DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#controller_csi_provisioner}
  */
  readonly controllerCsiProvisioner?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner;
  /**
  * The resource specifications for the beegfs container of the BeeGFS driver node pod. The default values for requests are (cpu: 100m, memory: 20Mi) The default values for limits are (cpu: None, memory: 128Mi)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_beegfs DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_beegfs}
  */
  readonly nodeBeegfs?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs;
  /**
  * The resource specifications for the node-driver-registrar container of the BeeGFS driver node pod. The default values for requests are (cpu: 80m, memory: 10Mi) The default values for limits are (cpu: None, memory 128Mi)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_driver_registrar DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_driver_registrar}
  */
  readonly nodeDriverRegistrar?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar;
  /**
  * The resource specifications for the liveness-probe container of the BeeGFS driver node pod. The default values for requests are (cpu: 60m, memory: 20Mi) The default values for limits are (cpu: None, memory: 128Mi)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_liveness_probe DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_liveness_probe}
  */
  readonly nodeLivenessProbe?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    controller_beegfs: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsToTerraform(struct!.controllerBeegfs),
    controller_csi_provisioner: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerToTerraform(struct!.controllerCsiProvisioner),
    node_beegfs: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsToTerraform(struct!.nodeBeegfs),
    node_driver_registrar: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarToTerraform(struct!.nodeDriverRegistrar),
    node_liveness_probe: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeToTerraform(struct!.nodeLivenessProbe),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    controller_beegfs: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsToHclTerraform(struct!.controllerBeegfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs",
    },
    controller_csi_provisioner: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerToHclTerraform(struct!.controllerCsiProvisioner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner",
    },
    node_beegfs: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsToHclTerraform(struct!.nodeBeegfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs",
    },
    node_driver_registrar: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarToHclTerraform(struct!.nodeDriverRegistrar),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar",
    },
    node_liveness_probe: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeToHclTerraform(struct!.nodeLivenessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._controllerBeegfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerBeegfs = this._controllerBeegfs?.internalValue;
    }
    if (this._controllerCsiProvisioner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.controllerCsiProvisioner = this._controllerCsiProvisioner?.internalValue;
    }
    if (this._nodeBeegfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeBeegfs = this._nodeBeegfs?.internalValue;
    }
    if (this._nodeDriverRegistrar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeDriverRegistrar = this._nodeDriverRegistrar?.internalValue;
    }
    if (this._nodeLivenessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeLivenessProbe = this._nodeLivenessProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._controllerBeegfs.internalValue = undefined;
      this._controllerCsiProvisioner.internalValue = undefined;
      this._nodeBeegfs.internalValue = undefined;
      this._nodeDriverRegistrar.internalValue = undefined;
      this._nodeLivenessProbe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._controllerBeegfs.internalValue = value.controllerBeegfs;
      this._controllerCsiProvisioner.internalValue = value.controllerCsiProvisioner;
      this._nodeBeegfs.internalValue = value.nodeBeegfs;
      this._nodeDriverRegistrar.internalValue = value.nodeDriverRegistrar;
      this._nodeLivenessProbe.internalValue = value.nodeLivenessProbe;
    }
  }

  // controller_beegfs - computed: false, optional: true, required: false
  private _controllerBeegfs = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfsOutputReference(this, "controller_beegfs");
  public get controllerBeegfs() {
    return this._controllerBeegfs;
  }
  public putControllerBeegfs(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerBeegfs) {
    this._controllerBeegfs.internalValue = value;
  }
  public resetControllerBeegfs() {
    this._controllerBeegfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerBeegfsInput() {
    return this._controllerBeegfs.internalValue;
  }

  // controller_csi_provisioner - computed: false, optional: true, required: false
  private _controllerCsiProvisioner = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisionerOutputReference(this, "controller_csi_provisioner");
  public get controllerCsiProvisioner() {
    return this._controllerCsiProvisioner;
  }
  public putControllerCsiProvisioner(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesControllerCsiProvisioner) {
    this._controllerCsiProvisioner.internalValue = value;
  }
  public resetControllerCsiProvisioner() {
    this._controllerCsiProvisioner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get controllerCsiProvisionerInput() {
    return this._controllerCsiProvisioner.internalValue;
  }

  // node_beegfs - computed: false, optional: true, required: false
  private _nodeBeegfs = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfsOutputReference(this, "node_beegfs");
  public get nodeBeegfs() {
    return this._nodeBeegfs;
  }
  public putNodeBeegfs(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeBeegfs) {
    this._nodeBeegfs.internalValue = value;
  }
  public resetNodeBeegfs() {
    this._nodeBeegfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBeegfsInput() {
    return this._nodeBeegfs.internalValue;
  }

  // node_driver_registrar - computed: false, optional: true, required: false
  private _nodeDriverRegistrar = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrarOutputReference(this, "node_driver_registrar");
  public get nodeDriverRegistrar() {
    return this._nodeDriverRegistrar;
  }
  public putNodeDriverRegistrar(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeDriverRegistrar) {
    this._nodeDriverRegistrar.internalValue = value;
  }
  public resetNodeDriverRegistrar() {
    this._nodeDriverRegistrar.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeDriverRegistrarInput() {
    return this._nodeDriverRegistrar.internalValue;
  }

  // node_liveness_probe - computed: false, optional: true, required: false
  private _nodeLivenessProbe = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbeOutputReference(this, "node_liveness_probe");
  public get nodeLivenessProbe() {
    return this._nodeLivenessProbe;
  }
  public putNodeLivenessProbe(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesNodeLivenessProbe) {
    this._nodeLivenessProbe.internalValue = value;
  }
  public resetNodeLivenessProbe() {
    this._nodeLivenessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeLivenessProbeInput() {
    return this._nodeLivenessProbe.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_expressions DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_fields DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#preference DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#preference}
  */
  readonly preference: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#weight DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_expressions DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_fields DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_selector_terms DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServicePreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_expressions DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_fields DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#preference DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#preference}
  */
  readonly preference: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#weight DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#key DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#operator DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#values DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_expressions DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#match_fields DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_selector_terms DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServicePreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig {
  /**
  * A map of additional key value pairs matching key value pairs in the beegfs-client.conf file. See beegfs-client.conf for more details. Values MUST be specified as strings, even if they appear to be integers or booleans (e.g. '8000', not 8000 and 'true', not true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#beegfs_client_conf DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#beegfs_client_conf}
  */
  readonly beegfsClientConf?: { [key: string]: string };
  /**
  * A list of interfaces the BeeGFS client service can communicate over (e.g. 'ib0' or 'eth0'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_interfaces}
  */
  readonly connInterfaces?: string[];
  /**
  * A list of subnets the BeeGFS client service can use for outgoing communication (e.g. '10.10.10.10/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_net_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_net_filter}
  */
  readonly connNetFilter?: string[];
  /**
  * A list of interfaces the BeeGFS client will use for outbound RDMA connections. This is used in support of the BeeGFS multi-rail feature. This feature does not depend on or use the connInterfaces parameter. This feature requires the BeeGFS client version 7.3.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_rdma_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_rdma_interfaces}
  */
  readonly connRdmaInterfaces?: string[];
  /**
  * A list of subnets in which RDMA communication cannot or should not be established (e.g. '10.10.10.11/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_tcp_only_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_tcp_only_filter}
  */
  readonly connTcpOnlyFilter?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfigToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beegfs_client_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.beegfsClientConf),
    conn_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connInterfaces),
    conn_net_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connNetFilter),
    conn_rdma_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connRdmaInterfaces),
    conn_tcp_only_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connTcpOnlyFilter),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfigToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beegfs_client_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.beegfsClientConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conn_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_net_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connNetFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_rdma_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connRdmaInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_tcp_only_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connTcpOnlyFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beegfsClientConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.beegfsClientConf = this._beegfsClientConf;
    }
    if (this._connInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connInterfaces = this._connInterfaces;
    }
    if (this._connNetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNetFilter = this._connNetFilter;
    }
    if (this._connRdmaInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRdmaInterfaces = this._connRdmaInterfaces;
    }
    if (this._connTcpOnlyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpOnlyFilter = this._connTcpOnlyFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beegfsClientConf = undefined;
      this._connInterfaces = undefined;
      this._connNetFilter = undefined;
      this._connRdmaInterfaces = undefined;
      this._connTcpOnlyFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beegfsClientConf = value.beegfsClientConf;
      this._connInterfaces = value.connInterfaces;
      this._connNetFilter = value.connNetFilter;
      this._connRdmaInterfaces = value.connRdmaInterfaces;
      this._connTcpOnlyFilter = value.connTcpOnlyFilter;
    }
  }

  // beegfs_client_conf - computed: false, optional: true, required: false
  private _beegfsClientConf?: { [key: string]: string }; 
  public get beegfsClientConf() {
    return this.getStringMapAttribute('beegfs_client_conf');
  }
  public set beegfsClientConf(value: { [key: string]: string }) {
    this._beegfsClientConf = value;
  }
  public resetBeegfsClientConf() {
    this._beegfsClientConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beegfsClientConfInput() {
    return this._beegfsClientConf;
  }

  // conn_interfaces - computed: false, optional: true, required: false
  private _connInterfaces?: string[]; 
  public get connInterfaces() {
    return this.getListAttribute('conn_interfaces');
  }
  public set connInterfaces(value: string[]) {
    this._connInterfaces = value;
  }
  public resetConnInterfaces() {
    this._connInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInterfacesInput() {
    return this._connInterfaces;
  }

  // conn_net_filter - computed: false, optional: true, required: false
  private _connNetFilter?: string[]; 
  public get connNetFilter() {
    return this.getListAttribute('conn_net_filter');
  }
  public set connNetFilter(value: string[]) {
    this._connNetFilter = value;
  }
  public resetConnNetFilter() {
    this._connNetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNetFilterInput() {
    return this._connNetFilter;
  }

  // conn_rdma_interfaces - computed: false, optional: true, required: false
  private _connRdmaInterfaces?: string[]; 
  public get connRdmaInterfaces() {
    return this.getListAttribute('conn_rdma_interfaces');
  }
  public set connRdmaInterfaces(value: string[]) {
    this._connRdmaInterfaces = value;
  }
  public resetConnRdmaInterfaces() {
    this._connRdmaInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRdmaInterfacesInput() {
    return this._connRdmaInterfaces;
  }

  // conn_tcp_only_filter - computed: false, optional: true, required: false
  private _connTcpOnlyFilter?: string[]; 
  public get connTcpOnlyFilter() {
    return this.getListAttribute('conn_tcp_only_filter');
  }
  public set connTcpOnlyFilter(value: string[]) {
    this._connTcpOnlyFilter = value;
  }
  public resetConnTcpOnlyFilter() {
    this._connTcpOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpOnlyFilterInput() {
    return this._connTcpOnlyFilter;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig {
  /**
  * A map of additional key value pairs matching key value pairs in the beegfs-client.conf file. See beegfs-client.conf for more details. Values MUST be specified as strings, even if they appear to be integers or booleans (e.g. '8000', not 8000 and 'true', not true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#beegfs_client_conf DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#beegfs_client_conf}
  */
  readonly beegfsClientConf?: { [key: string]: string };
  /**
  * A list of interfaces the BeeGFS client service can communicate over (e.g. 'ib0' or 'eth0'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_interfaces}
  */
  readonly connInterfaces?: string[];
  /**
  * A list of subnets the BeeGFS client service can use for outgoing communication (e.g. '10.10.10.10/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_net_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_net_filter}
  */
  readonly connNetFilter?: string[];
  /**
  * A list of interfaces the BeeGFS client will use for outbound RDMA connections. This is used in support of the BeeGFS multi-rail feature. This feature does not depend on or use the connInterfaces parameter. This feature requires the BeeGFS client version 7.3.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_rdma_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_rdma_interfaces}
  */
  readonly connRdmaInterfaces?: string[];
  /**
  * A list of subnets in which RDMA communication cannot or should not be established (e.g. '10.10.10.11/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_tcp_only_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_tcp_only_filter}
  */
  readonly connTcpOnlyFilter?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfigToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beegfs_client_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.beegfsClientConf),
    conn_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connInterfaces),
    conn_net_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connNetFilter),
    conn_rdma_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connRdmaInterfaces),
    conn_tcp_only_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connTcpOnlyFilter),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfigToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beegfs_client_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.beegfsClientConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conn_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_net_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connNetFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_rdma_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connRdmaInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_tcp_only_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connTcpOnlyFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beegfsClientConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.beegfsClientConf = this._beegfsClientConf;
    }
    if (this._connInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connInterfaces = this._connInterfaces;
    }
    if (this._connNetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNetFilter = this._connNetFilter;
    }
    if (this._connRdmaInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRdmaInterfaces = this._connRdmaInterfaces;
    }
    if (this._connTcpOnlyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpOnlyFilter = this._connTcpOnlyFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beegfsClientConf = undefined;
      this._connInterfaces = undefined;
      this._connNetFilter = undefined;
      this._connRdmaInterfaces = undefined;
      this._connTcpOnlyFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beegfsClientConf = value.beegfsClientConf;
      this._connInterfaces = value.connInterfaces;
      this._connNetFilter = value.connNetFilter;
      this._connRdmaInterfaces = value.connRdmaInterfaces;
      this._connTcpOnlyFilter = value.connTcpOnlyFilter;
    }
  }

  // beegfs_client_conf - computed: false, optional: true, required: false
  private _beegfsClientConf?: { [key: string]: string }; 
  public get beegfsClientConf() {
    return this.getStringMapAttribute('beegfs_client_conf');
  }
  public set beegfsClientConf(value: { [key: string]: string }) {
    this._beegfsClientConf = value;
  }
  public resetBeegfsClientConf() {
    this._beegfsClientConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beegfsClientConfInput() {
    return this._beegfsClientConf;
  }

  // conn_interfaces - computed: false, optional: true, required: false
  private _connInterfaces?: string[]; 
  public get connInterfaces() {
    return this.getListAttribute('conn_interfaces');
  }
  public set connInterfaces(value: string[]) {
    this._connInterfaces = value;
  }
  public resetConnInterfaces() {
    this._connInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInterfacesInput() {
    return this._connInterfaces;
  }

  // conn_net_filter - computed: false, optional: true, required: false
  private _connNetFilter?: string[]; 
  public get connNetFilter() {
    return this.getListAttribute('conn_net_filter');
  }
  public set connNetFilter(value: string[]) {
    this._connNetFilter = value;
  }
  public resetConnNetFilter() {
    this._connNetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNetFilterInput() {
    return this._connNetFilter;
  }

  // conn_rdma_interfaces - computed: false, optional: true, required: false
  private _connRdmaInterfaces?: string[]; 
  public get connRdmaInterfaces() {
    return this.getListAttribute('conn_rdma_interfaces');
  }
  public set connRdmaInterfaces(value: string[]) {
    this._connRdmaInterfaces = value;
  }
  public resetConnRdmaInterfaces() {
    this._connRdmaInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRdmaInterfacesInput() {
    return this._connRdmaInterfaces;
  }

  // conn_tcp_only_filter - computed: false, optional: true, required: false
  private _connTcpOnlyFilter?: string[]; 
  public get connTcpOnlyFilter() {
    return this.getListAttribute('conn_tcp_only_filter');
  }
  public set connTcpOnlyFilter(value: string[]) {
    this._connTcpOnlyFilter = value;
  }
  public resetConnTcpOnlyFilter() {
    this._connTcpOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpOnlyFilterInput() {
    return this._connTcpOnlyFilter;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs {
  /**
  * The primary configuration structure containing all of the custom configuration (beegfs-client.conf keys/values and additional CSI driver specific fields) associated with a single BeeGFS file system except for sysMgmtdHost, which is specified elsewhere. WARNING: This structure includes a beegfsClientConf field. This field may not be rendered in form view by OpenShift or other graphical interfaces, but it can be critical in some environments. Add or modify it in YAML view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#config DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#config}
  */
  readonly config?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig;
  /**
  * The sysMgmtdHost used by the BeeGFS client service to make initial contact with the BeeGFS mgmtd service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#sys_mgmtd_host DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#sys_mgmtd_host}
  */
  readonly sysMgmtdHost: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfigToTerraform(struct!.config),
    sys_mgmtd_host: cdktf.stringToTerraform(struct!.sysMgmtdHost),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig",
    },
    sys_mgmtd_host: {
      value: cdktf.stringToHclTerraform(struct!.sysMgmtdHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._sysMgmtdHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysMgmtdHost = this._sysMgmtdHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._sysMgmtdHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._sysMgmtdHost = value.sysMgmtdHost;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // sys_mgmtd_host - computed: false, optional: false, required: true
  private _sysMgmtdHost?: string; 
  public get sysMgmtdHost() {
    return this.getStringAttribute('sys_mgmtd_host');
  }
  public set sysMgmtdHost(value: string) {
    this._sysMgmtdHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sysMgmtdHostInput() {
    return this._sysMgmtdHost;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig {
  /**
  * A map of additional key value pairs matching key value pairs in the beegfs-client.conf file. See beegfs-client.conf for more details. Values MUST be specified as strings, even if they appear to be integers or booleans (e.g. '8000', not 8000 and 'true', not true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#beegfs_client_conf DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#beegfs_client_conf}
  */
  readonly beegfsClientConf?: { [key: string]: string };
  /**
  * A list of interfaces the BeeGFS client service can communicate over (e.g. 'ib0' or 'eth0'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_interfaces}
  */
  readonly connInterfaces?: string[];
  /**
  * A list of subnets the BeeGFS client service can use for outgoing communication (e.g. '10.10.10.10/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_net_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_net_filter}
  */
  readonly connNetFilter?: string[];
  /**
  * A list of interfaces the BeeGFS client will use for outbound RDMA connections. This is used in support of the BeeGFS multi-rail feature. This feature does not depend on or use the connInterfaces parameter. This feature requires the BeeGFS client version 7.3.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_rdma_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_rdma_interfaces}
  */
  readonly connRdmaInterfaces?: string[];
  /**
  * A list of subnets in which RDMA communication cannot or should not be established (e.g. '10.10.10.11/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_tcp_only_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_tcp_only_filter}
  */
  readonly connTcpOnlyFilter?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfigToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beegfs_client_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.beegfsClientConf),
    conn_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connInterfaces),
    conn_net_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connNetFilter),
    conn_rdma_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connRdmaInterfaces),
    conn_tcp_only_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connTcpOnlyFilter),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfigToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beegfs_client_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.beegfsClientConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conn_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_net_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connNetFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_rdma_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connRdmaInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_tcp_only_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connTcpOnlyFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beegfsClientConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.beegfsClientConf = this._beegfsClientConf;
    }
    if (this._connInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connInterfaces = this._connInterfaces;
    }
    if (this._connNetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNetFilter = this._connNetFilter;
    }
    if (this._connRdmaInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRdmaInterfaces = this._connRdmaInterfaces;
    }
    if (this._connTcpOnlyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpOnlyFilter = this._connTcpOnlyFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beegfsClientConf = undefined;
      this._connInterfaces = undefined;
      this._connNetFilter = undefined;
      this._connRdmaInterfaces = undefined;
      this._connTcpOnlyFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beegfsClientConf = value.beegfsClientConf;
      this._connInterfaces = value.connInterfaces;
      this._connNetFilter = value.connNetFilter;
      this._connRdmaInterfaces = value.connRdmaInterfaces;
      this._connTcpOnlyFilter = value.connTcpOnlyFilter;
    }
  }

  // beegfs_client_conf - computed: false, optional: true, required: false
  private _beegfsClientConf?: { [key: string]: string }; 
  public get beegfsClientConf() {
    return this.getStringMapAttribute('beegfs_client_conf');
  }
  public set beegfsClientConf(value: { [key: string]: string }) {
    this._beegfsClientConf = value;
  }
  public resetBeegfsClientConf() {
    this._beegfsClientConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beegfsClientConfInput() {
    return this._beegfsClientConf;
  }

  // conn_interfaces - computed: false, optional: true, required: false
  private _connInterfaces?: string[]; 
  public get connInterfaces() {
    return this.getListAttribute('conn_interfaces');
  }
  public set connInterfaces(value: string[]) {
    this._connInterfaces = value;
  }
  public resetConnInterfaces() {
    this._connInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInterfacesInput() {
    return this._connInterfaces;
  }

  // conn_net_filter - computed: false, optional: true, required: false
  private _connNetFilter?: string[]; 
  public get connNetFilter() {
    return this.getListAttribute('conn_net_filter');
  }
  public set connNetFilter(value: string[]) {
    this._connNetFilter = value;
  }
  public resetConnNetFilter() {
    this._connNetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNetFilterInput() {
    return this._connNetFilter;
  }

  // conn_rdma_interfaces - computed: false, optional: true, required: false
  private _connRdmaInterfaces?: string[]; 
  public get connRdmaInterfaces() {
    return this.getListAttribute('conn_rdma_interfaces');
  }
  public set connRdmaInterfaces(value: string[]) {
    this._connRdmaInterfaces = value;
  }
  public resetConnRdmaInterfaces() {
    this._connRdmaInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRdmaInterfacesInput() {
    return this._connRdmaInterfaces;
  }

  // conn_tcp_only_filter - computed: false, optional: true, required: false
  private _connTcpOnlyFilter?: string[]; 
  public get connTcpOnlyFilter() {
    return this.getListAttribute('conn_tcp_only_filter');
  }
  public set connTcpOnlyFilter(value: string[]) {
    this._connTcpOnlyFilter = value;
  }
  public resetConnTcpOnlyFilter() {
    this._connTcpOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpOnlyFilterInput() {
    return this._connTcpOnlyFilter;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig {
  /**
  * A map of additional key value pairs matching key value pairs in the beegfs-client.conf file. See beegfs-client.conf for more details. Values MUST be specified as strings, even if they appear to be integers or booleans (e.g. '8000', not 8000 and 'true', not true).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#beegfs_client_conf DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#beegfs_client_conf}
  */
  readonly beegfsClientConf?: { [key: string]: string };
  /**
  * A list of interfaces the BeeGFS client service can communicate over (e.g. 'ib0' or 'eth0'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_interfaces}
  */
  readonly connInterfaces?: string[];
  /**
  * A list of subnets the BeeGFS client service can use for outgoing communication (e.g. '10.10.10.10/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_net_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_net_filter}
  */
  readonly connNetFilter?: string[];
  /**
  * A list of interfaces the BeeGFS client will use for outbound RDMA connections. This is used in support of the BeeGFS multi-rail feature. This feature does not depend on or use the connInterfaces parameter. This feature requires the BeeGFS client version 7.3.0 or later.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_rdma_interfaces DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_rdma_interfaces}
  */
  readonly connRdmaInterfaces?: string[];
  /**
  * A list of subnets in which RDMA communication cannot or should not be established (e.g. '10.10.10.11/24'). Often not required. See beegfs-client.conf for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#conn_tcp_only_filter DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#conn_tcp_only_filter}
  */
  readonly connTcpOnlyFilter?: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfigToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    beegfs_client_conf: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.beegfsClientConf),
    conn_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connInterfaces),
    conn_net_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connNetFilter),
    conn_rdma_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connRdmaInterfaces),
    conn_tcp_only_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.connTcpOnlyFilter),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfigToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    beegfs_client_conf: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.beegfsClientConf),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    conn_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_net_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connNetFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_rdma_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connRdmaInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    conn_tcp_only_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.connTcpOnlyFilter),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._beegfsClientConf !== undefined) {
      hasAnyValues = true;
      internalValueResult.beegfsClientConf = this._beegfsClientConf;
    }
    if (this._connInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connInterfaces = this._connInterfaces;
    }
    if (this._connNetFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connNetFilter = this._connNetFilter;
    }
    if (this._connRdmaInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.connRdmaInterfaces = this._connRdmaInterfaces;
    }
    if (this._connTcpOnlyFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTcpOnlyFilter = this._connTcpOnlyFilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._beegfsClientConf = undefined;
      this._connInterfaces = undefined;
      this._connNetFilter = undefined;
      this._connRdmaInterfaces = undefined;
      this._connTcpOnlyFilter = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._beegfsClientConf = value.beegfsClientConf;
      this._connInterfaces = value.connInterfaces;
      this._connNetFilter = value.connNetFilter;
      this._connRdmaInterfaces = value.connRdmaInterfaces;
      this._connTcpOnlyFilter = value.connTcpOnlyFilter;
    }
  }

  // beegfs_client_conf - computed: false, optional: true, required: false
  private _beegfsClientConf?: { [key: string]: string }; 
  public get beegfsClientConf() {
    return this.getStringMapAttribute('beegfs_client_conf');
  }
  public set beegfsClientConf(value: { [key: string]: string }) {
    this._beegfsClientConf = value;
  }
  public resetBeegfsClientConf() {
    this._beegfsClientConf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get beegfsClientConfInput() {
    return this._beegfsClientConf;
  }

  // conn_interfaces - computed: false, optional: true, required: false
  private _connInterfaces?: string[]; 
  public get connInterfaces() {
    return this.getListAttribute('conn_interfaces');
  }
  public set connInterfaces(value: string[]) {
    this._connInterfaces = value;
  }
  public resetConnInterfaces() {
    this._connInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connInterfacesInput() {
    return this._connInterfaces;
  }

  // conn_net_filter - computed: false, optional: true, required: false
  private _connNetFilter?: string[]; 
  public get connNetFilter() {
    return this.getListAttribute('conn_net_filter');
  }
  public set connNetFilter(value: string[]) {
    this._connNetFilter = value;
  }
  public resetConnNetFilter() {
    this._connNetFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connNetFilterInput() {
    return this._connNetFilter;
  }

  // conn_rdma_interfaces - computed: false, optional: true, required: false
  private _connRdmaInterfaces?: string[]; 
  public get connRdmaInterfaces() {
    return this.getListAttribute('conn_rdma_interfaces');
  }
  public set connRdmaInterfaces(value: string[]) {
    this._connRdmaInterfaces = value;
  }
  public resetConnRdmaInterfaces() {
    this._connRdmaInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connRdmaInterfacesInput() {
    return this._connRdmaInterfaces;
  }

  // conn_tcp_only_filter - computed: false, optional: true, required: false
  private _connTcpOnlyFilter?: string[]; 
  public get connTcpOnlyFilter() {
    return this.getListAttribute('conn_tcp_only_filter');
  }
  public set connTcpOnlyFilter(value: string[]) {
    this._connTcpOnlyFilter = value;
  }
  public resetConnTcpOnlyFilter() {
    this._connTcpOnlyFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTcpOnlyFilterInput() {
    return this._connTcpOnlyFilter;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs {
  /**
  * The primary configuration structure containing all of the custom configuration (beegfs-client.conf keys/values and additional CSI driver specific fields) associated with a single BeeGFS file system except for sysMgmtdHost, which is specified elsewhere. WARNING: This structure includes a beegfsClientConf field. This field may not be rendered in form view by OpenShift or other graphical interfaces, but it can be critical in some environments. Add or modify it in YAML view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#config DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#config}
  */
  readonly config?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig;
  /**
  * The sysMgmtdHost used by the BeeGFS client service to make initial contact with the BeeGFS mgmtd service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#sys_mgmtd_host DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#sys_mgmtd_host}
  */
  readonly sysMgmtdHost: string;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfigToTerraform(struct!.config),
    sys_mgmtd_host: cdktf.stringToTerraform(struct!.sysMgmtdHost),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig",
    },
    sys_mgmtd_host: {
      value: cdktf.stringToHclTerraform(struct!.sysMgmtdHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._sysMgmtdHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.sysMgmtdHost = this._sysMgmtdHost;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._sysMgmtdHost = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._sysMgmtdHost = value.sysMgmtdHost;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // sys_mgmtd_host - computed: false, optional: false, required: true
  private _sysMgmtdHost?: string; 
  public get sysMgmtdHost() {
    return this.getStringAttribute('sys_mgmtd_host');
  }
  public set sysMgmtdHost(value: string) {
    this._sysMgmtdHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sysMgmtdHostInput() {
    return this._sysMgmtdHost;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs {
  /**
  * The primary configuration structure containing all of the custom configuration (beegfs-client.conf keys/values and additional CSI driver specific fields) associated with a single BeeGFS file system except for sysMgmtdHost, which is specified elsewhere. WARNING: This structure includes a beegfsClientConf field. This field may not be rendered in form view by OpenShift or other graphical interfaces, but it can be critical in some environments. Add or modify it in YAML view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#config DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#config}
  */
  readonly config?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig;
  /**
  * A list of file system specific configurations that override the default configuration for specific file systems on these nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#file_system_specific_configs DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#file_system_specific_configs}
  */
  readonly fileSystemSpecificConfigs?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs[] | cdktf.IResolvable;
  /**
  * The list of nodes this configuration should be applied on. Each entry is the hostname of the node or the name assigned to the node by the container orchestrator (e.g. 'node1' or 'cluster05-node03').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_list DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_list}
  */
  readonly nodeList: string[];
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfigToTerraform(struct!.config),
    file_system_specific_configs: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsToTerraform, false)(struct!.fileSystemSpecificConfigs),
    node_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeList),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig",
    },
    file_system_specific_configs: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsToHclTerraform, false)(struct!.fileSystemSpecificConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsList",
    },
    node_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._fileSystemSpecificConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemSpecificConfigs = this._fileSystemSpecificConfigs?.internalValue;
    }
    if (this._nodeList !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeList = this._nodeList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._fileSystemSpecificConfigs.internalValue = undefined;
      this._nodeList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._fileSystemSpecificConfigs.internalValue = value.fileSystemSpecificConfigs;
      this._nodeList = value.nodeList;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // file_system_specific_configs - computed: false, optional: true, required: false
  private _fileSystemSpecificConfigs = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigsList(this, "file_system_specific_configs", false);
  public get fileSystemSpecificConfigs() {
    return this._fileSystemSpecificConfigs;
  }
  public putFileSystemSpecificConfigs(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsFileSystemSpecificConfigs[] | cdktf.IResolvable) {
    this._fileSystemSpecificConfigs.internalValue = value;
  }
  public resetFileSystemSpecificConfigs() {
    this._fileSystemSpecificConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemSpecificConfigsInput() {
    return this._fileSystemSpecificConfigs.internalValue;
  }

  // node_list - computed: false, optional: false, required: true
  private _nodeList?: string[]; 
  public get nodeList() {
    return this.getListAttribute('node_list');
  }
  public set nodeList(value: string[]) {
    this._nodeList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeListInput() {
    return this._nodeList;
  }
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsList extends cdktf.ComplexList {
  public internalValue? : DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsOutputReference {
    return new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig {
  /**
  * The primary configuration structure containing all of the custom configuration (beegfs-client.conf keys/values and additional CSI driver specific fields) associated with a single BeeGFS file system except for sysMgmtdHost, which is specified elsewhere. WARNING: This structure includes a beegfsClientConf field. This field may not be rendered in form view by OpenShift or other graphical interfaces, but it can be critical in some environments. Add or modify it in YAML view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#config DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#config}
  */
  readonly config?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig;
  /**
  * A list of file system specific configurations that override the default configuration for specific file systems.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#file_system_specific_configs DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#file_system_specific_configs}
  */
  readonly fileSystemSpecificConfigs?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs[] | cdktf.IResolvable;
  /**
  * A list of node specific configurations that override file system specific configurations and the default configuration on specific nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_specific_configs DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_specific_configs}
  */
  readonly nodeSpecificConfigs?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs[] | cdktf.IResolvable;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfigToTerraform(struct!.config),
    file_system_specific_configs: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsToTerraform, false)(struct!.fileSystemSpecificConfigs),
    node_specific_configs: cdktf.listMapper(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsToTerraform, false)(struct!.nodeSpecificConfigs),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfigToHclTerraform(struct!.config),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig",
    },
    file_system_specific_configs: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsToHclTerraform, false)(struct!.fileSystemSpecificConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsList",
    },
    node_specific_configs: {
      value: cdktf.listMapperHcl(dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsToHclTerraform, false)(struct!.nodeSpecificConfigs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._fileSystemSpecificConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileSystemSpecificConfigs = this._fileSystemSpecificConfigs?.internalValue;
    }
    if (this._nodeSpecificConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSpecificConfigs = this._nodeSpecificConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._config.internalValue = undefined;
      this._fileSystemSpecificConfigs.internalValue = undefined;
      this._nodeSpecificConfigs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._config.internalValue = value.config;
      this._fileSystemSpecificConfigs.internalValue = value.fileSystemSpecificConfigs;
      this._nodeSpecificConfigs.internalValue = value.nodeSpecificConfigs;
    }
  }

  // config - computed: false, optional: true, required: false
  private _config = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfigOutputReference(this, "config");
  public get config() {
    return this._config;
  }
  public putConfig(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigConfig) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // file_system_specific_configs - computed: false, optional: true, required: false
  private _fileSystemSpecificConfigs = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigsList(this, "file_system_specific_configs", false);
  public get fileSystemSpecificConfigs() {
    return this._fileSystemSpecificConfigs;
  }
  public putFileSystemSpecificConfigs(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigFileSystemSpecificConfigs[] | cdktf.IResolvable) {
    this._fileSystemSpecificConfigs.internalValue = value;
  }
  public resetFileSystemSpecificConfigs() {
    this._fileSystemSpecificConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileSystemSpecificConfigsInput() {
    return this._fileSystemSpecificConfigs.internalValue;
  }

  // node_specific_configs - computed: false, optional: true, required: false
  private _nodeSpecificConfigs = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigsList(this, "node_specific_configs", false);
  public get nodeSpecificConfigs() {
    return this._nodeSpecificConfigs;
  }
  public putNodeSpecificConfigs(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigNodeSpecificConfigs[] | cdktf.IResolvable) {
    this._nodeSpecificConfigs.internalValue = value;
  }
  public resetNodeSpecificConfigs() {
    this._nodeSpecificConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSpecificConfigsInput() {
    return this._nodeSpecificConfigs.internalValue;
  }
}
export interface DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec {
  /**
  * A structure that allows for default container images and tags to be overridden. Use it in air-gapped networks, networks with private registry mirrors, or to pin a particular container version. Unless otherwise noted, versions other than the default are not supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#container_image_overrides DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#container_image_overrides}
  */
  readonly containerImageOverrides?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides;
  /**
  * The ContainerResourceOverrides allow for customization of the container resource limits and requests. Each container has default requests and limits for both cpu and memory resources. Only explicitly defined overrides will be applied, otherwise the default values will be used. For example, if the cpu limit for the controller's beegfs container is the only resource with an override set, only the controller's beegfs container cpu limit setting will be overridden. Every other value will use the default setting. Storage resources are not used by the BeeGFS CSI driver. Any storage resource values configured will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#container_resource_overrides DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#container_resource_overrides}
  */
  readonly containerResourceOverrides?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides;
  /**
  * The logging level of deployed containers expressed as an integer from 0 (low detail) to 5 (high detail). 0 only logs errors. 3 logs most RPC requests/responses and some detail about driver actions. 5 logs all RPC requests/responses, including redundant/frequently occurring ones. Empty defaults to level 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#log_level DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#log_level}
  */
  readonly logLevel?: number;
  /**
  * The controller service consists of a single Pod. It preferably runs on an infrastructure/master node, but the running node must have the beegfs-utils and beegfs-client packages installed. E.g. 'preferred: node-role.kubernetes.io/master Exists' and/or 'required: node.openshift.io/os_id NotIn rhcos'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_affinity_controller_service DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_affinity_controller_service}
  */
  readonly nodeAffinityControllerService?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService;
  /**
  * The node service consists of one Pod running on each eligible node. It runs on every node expected to host a workload that requires BeeGFS. Running nodes must have the beegfs-utils and beegfs-client packages installed. E.g. 'required: node.openshift.io/os_id NotIn rhcos'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#node_affinity_node_service DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#node_affinity_node_service}
  */
  readonly nodeAffinityNodeService?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService;
  /**
  * The top level configuration structure containing default configuration (applied to all file systems on all nodes), file system specific configuration, and node specific configuration. Fields from node and file system specific configurations override fields from the default configuration. Often not required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#plugin_config DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest#plugin_config}
  */
  readonly pluginConfig?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig;
}

export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecToTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_image_overrides: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesToTerraform(struct!.containerImageOverrides),
    container_resource_overrides: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesToTerraform(struct!.containerResourceOverrides),
    log_level: cdktf.numberToTerraform(struct!.logLevel),
    node_affinity_controller_service: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceToTerraform(struct!.nodeAffinityControllerService),
    node_affinity_node_service: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceToTerraform(struct!.nodeAffinityNodeService),
    plugin_config: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigToTerraform(struct!.pluginConfig),
  }
}


export function dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecToHclTerraform(struct?: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_image_overrides: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesToHclTerraform(struct!.containerImageOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides",
    },
    container_resource_overrides: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesToHclTerraform(struct!.containerResourceOverrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides",
    },
    log_level: {
      value: cdktf.numberToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_controller_service: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceToHclTerraform(struct!.nodeAffinityControllerService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService",
    },
    node_affinity_node_service: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceToHclTerraform(struct!.nodeAffinityNodeService),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService",
    },
    plugin_config: {
      value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigToHclTerraform(struct!.pluginConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerImageOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerImageOverrides = this._containerImageOverrides?.internalValue;
    }
    if (this._containerResourceOverrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResourceOverrides = this._containerResourceOverrides?.internalValue;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._nodeAffinityControllerService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityControllerService = this._nodeAffinityControllerService?.internalValue;
    }
    if (this._nodeAffinityNodeService?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityNodeService = this._nodeAffinityNodeService?.internalValue;
    }
    if (this._pluginConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginConfig = this._pluginConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerImageOverrides.internalValue = undefined;
      this._containerResourceOverrides.internalValue = undefined;
      this._logLevel = undefined;
      this._nodeAffinityControllerService.internalValue = undefined;
      this._nodeAffinityNodeService.internalValue = undefined;
      this._pluginConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerImageOverrides.internalValue = value.containerImageOverrides;
      this._containerResourceOverrides.internalValue = value.containerResourceOverrides;
      this._logLevel = value.logLevel;
      this._nodeAffinityControllerService.internalValue = value.nodeAffinityControllerService;
      this._nodeAffinityNodeService.internalValue = value.nodeAffinityNodeService;
      this._pluginConfig.internalValue = value.pluginConfig;
    }
  }

  // container_image_overrides - computed: false, optional: true, required: false
  private _containerImageOverrides = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverridesOutputReference(this, "container_image_overrides");
  public get containerImageOverrides() {
    return this._containerImageOverrides;
  }
  public putContainerImageOverrides(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerImageOverrides) {
    this._containerImageOverrides.internalValue = value;
  }
  public resetContainerImageOverrides() {
    this._containerImageOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerImageOverridesInput() {
    return this._containerImageOverrides.internalValue;
  }

  // container_resource_overrides - computed: false, optional: true, required: false
  private _containerResourceOverrides = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverridesOutputReference(this, "container_resource_overrides");
  public get containerResourceOverrides() {
    return this._containerResourceOverrides;
  }
  public putContainerResourceOverrides(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecContainerResourceOverrides) {
    this._containerResourceOverrides.internalValue = value;
  }
  public resetContainerResourceOverrides() {
    this._containerResourceOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourceOverridesInput() {
    return this._containerResourceOverrides.internalValue;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: number; 
  public get logLevel() {
    return this.getNumberAttribute('log_level');
  }
  public set logLevel(value: number) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // node_affinity_controller_service - computed: false, optional: true, required: false
  private _nodeAffinityControllerService = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerServiceOutputReference(this, "node_affinity_controller_service");
  public get nodeAffinityControllerService() {
    return this._nodeAffinityControllerService;
  }
  public putNodeAffinityControllerService(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityControllerService) {
    this._nodeAffinityControllerService.internalValue = value;
  }
  public resetNodeAffinityControllerService() {
    this._nodeAffinityControllerService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityControllerServiceInput() {
    return this._nodeAffinityControllerService.internalValue;
  }

  // node_affinity_node_service - computed: false, optional: true, required: false
  private _nodeAffinityNodeService = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeServiceOutputReference(this, "node_affinity_node_service");
  public get nodeAffinityNodeService() {
    return this._nodeAffinityNodeService;
  }
  public putNodeAffinityNodeService(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecNodeAffinityNodeService) {
    this._nodeAffinityNodeService.internalValue = value;
  }
  public resetNodeAffinityNodeService() {
    this._nodeAffinityNodeService.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityNodeServiceInput() {
    return this._nodeAffinityNodeService.internalValue;
  }

  // plugin_config - computed: false, optional: true, required: false
  private _pluginConfig = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfigOutputReference(this, "plugin_config");
  public get pluginConfig() {
    return this._pluginConfig;
  }
  public putPluginConfig(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecPluginConfig) {
    this._pluginConfig.internalValue = value;
  }
  public resetPluginConfig() {
    this._pluginConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigInput() {
    return this._pluginConfig.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest k8s_beegfs_csi_netapp_com_beegfs_driver_v1_manifest}
*/
export class DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_beegfs_csi_netapp_com_beegfs_driver_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest to import
  * @param importFromId The id of the existing DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SBeegfsCsiNetappComBeegfsDriverV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_beegfs_csi_netapp_com_beegfs_driver_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/beegfs_csi_netapp_com_beegfs_driver_v1_manifest k8s_beegfs_csi_netapp_com_beegfs_driver_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_beegfs_csi_netapp_com_beegfs_driver_v1_manifest',
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
  private _metadata = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec) {
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
      metadata: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestMetadata",
      },
      spec: {
        value: dataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SBeegfsCsiNetappComBeegfsDriverV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
