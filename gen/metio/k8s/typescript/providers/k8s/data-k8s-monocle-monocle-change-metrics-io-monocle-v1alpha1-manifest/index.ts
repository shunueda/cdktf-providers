// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#metadata DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata;
  /**
  * MonocleSpec defines the desired state of Monocle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#spec DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec;
}
export interface DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#annotations DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#labels DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#name DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#namespace DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute {
  /**
  * Hostname to use for setting the Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#host DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#host}
  */
  readonly host?: string;
  /**
  * Labels to add to the Route resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#labels DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRouteToTerraform(struct?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host: cdktf.stringToTerraform(struct!.host),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRouteToHclTerraform(struct?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRouteOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._host = undefined;
      this._labels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._host = value.host;
      this._labels = value.labels;
    }
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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
export interface DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec {
  /**
  * Monocle container image
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#image DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#image}
  */
  readonly image?: string;
  /**
  * Public URL to access the Monocle API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#public_url DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#public_url}
  */
  readonly publicUrl?: string;
  /**
  * If set a Route (Openshift) resource will be spawned
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#route DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#route}
  */
  readonly route?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute;
  /**
  * Storage class name when creating the PVC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#storage_class_name DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * Initial Storage Size for the database storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#storage_size DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest#storage_size}
  */
  readonly storageSize?: string;
}

export function dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
    public_url: cdktf.stringToTerraform(struct!.publicUrl),
    route: dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRouteToTerraform(struct!.route),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    storage_size: cdktf.stringToTerraform(struct!.storageSize),
  }
}


export function dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    public_url: {
      value: cdktf.stringToHclTerraform(struct!.publicUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route: {
      value: dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRouteToHclTerraform(struct!.route),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_size: {
      value: cdktf.stringToHclTerraform(struct!.storageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._publicUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicUrl = this._publicUrl;
    }
    if (this._route?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.route = this._route?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._storageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageSize = this._storageSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
      this._publicUrl = undefined;
      this._route.internalValue = undefined;
      this._storageClassName = undefined;
      this._storageSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
      this._publicUrl = value.publicUrl;
      this._route.internalValue = value.route;
      this._storageClassName = value.storageClassName;
      this._storageSize = value.storageSize;
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

  // public_url - computed: false, optional: true, required: false
  private _publicUrl?: string; 
  public get publicUrl() {
    return this.getStringAttribute('public_url');
  }
  public set publicUrl(value: string) {
    this._publicUrl = value;
  }
  public resetPublicUrl() {
    this._publicUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicUrlInput() {
    return this._publicUrl;
  }

  // route - computed: false, optional: true, required: false
  private _route = new DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRouteOutputReference(this, "route");
  public get route() {
    return this._route;
  }
  public putRoute(value: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecRoute) {
    this._route.internalValue = value;
  }
  public resetRoute() {
    this._route.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeInput() {
    return this._route.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // storage_size - computed: false, optional: true, required: false
  private _storageSize?: string; 
  public get storageSize() {
    return this.getStringAttribute('storage_size');
  }
  public set storageSize(value: string) {
    this._storageSize = value;
  }
  public resetStorageSize() {
    this._storageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSizeInput() {
    return this._storageSize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest k8s_monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest}
*/
export class DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest k8s_monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_monocle_monocle_change_metrics_io_monocle_v1alpha1_manifest',
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
  private _metadata = new DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMonocleMonocleChangeMetricsIoMonocleV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
