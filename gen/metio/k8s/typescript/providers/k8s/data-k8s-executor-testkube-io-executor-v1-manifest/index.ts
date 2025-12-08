// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExecutorTestkubeIoExecutorV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#metadata DataK8SExecutorTestkubeIoExecutorV1Manifest#metadata}
  */
  readonly metadata: DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata;
  /**
  * ExecutorSpec defines the desired state of Executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#spec DataK8SExecutorTestkubeIoExecutorV1Manifest#spec}
  */
  readonly spec?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpec;
}
export interface DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#annotations DataK8SExecutorTestkubeIoExecutorV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#labels DataK8SExecutorTestkubeIoExecutorV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#name DataK8SExecutorTestkubeIoExecutorV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#namespace DataK8SExecutorTestkubeIoExecutorV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SExecutorTestkubeIoExecutorV1ManifestMetadataToTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExecutorTestkubeIoExecutorV1ManifestMetadataToHclTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExecutorTestkubeIoExecutorV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets {
  /**
  * Name of the referent. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names TODO: Add other useful fields. apiVersion, kind, uid?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#name DataK8SExecutorTestkubeIoExecutorV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsToTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsToHclTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets | cdktf.IResolvable): any {
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

export class DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets | cdktf.IResolvable | undefined) {
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
}

export class DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsOutputReference {
    return new DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta {
  /**
  * URI for executor docs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#docs_uri DataK8SExecutorTestkubeIoExecutorV1Manifest#docs_uri}
  */
  readonly docsUri?: string;
  /**
  * URI for executor icon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#icon_uri DataK8SExecutorTestkubeIoExecutorV1Manifest#icon_uri}
  */
  readonly iconUri?: string;
  /**
  * executor tooltips
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#tooltips DataK8SExecutorTestkubeIoExecutorV1Manifest#tooltips}
  */
  readonly tooltips?: { [key: string]: string };
}

export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecMetaToTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docs_uri: cdktf.stringToTerraform(struct!.docsUri),
    icon_uri: cdktf.stringToTerraform(struct!.iconUri),
    tooltips: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tooltips),
  }
}


export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecMetaToHclTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docs_uri: {
      value: cdktf.stringToHclTerraform(struct!.docsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icon_uri: {
      value: cdktf.stringToHclTerraform(struct!.iconUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tooltips: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tooltips),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._docsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.docsUri = this._docsUri;
    }
    if (this._iconUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.iconUri = this._iconUri;
    }
    if (this._tooltips !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooltips = this._tooltips;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._docsUri = undefined;
      this._iconUri = undefined;
      this._tooltips = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._docsUri = value.docsUri;
      this._iconUri = value.iconUri;
      this._tooltips = value.tooltips;
    }
  }

  // docs_uri - computed: false, optional: true, required: false
  private _docsUri?: string; 
  public get docsUri() {
    return this.getStringAttribute('docs_uri');
  }
  public set docsUri(value: string) {
    this._docsUri = value;
  }
  public resetDocsUri() {
    this._docsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get docsUriInput() {
    return this._docsUri;
  }

  // icon_uri - computed: false, optional: true, required: false
  private _iconUri?: string; 
  public get iconUri() {
    return this.getStringAttribute('icon_uri');
  }
  public set iconUri(value: string) {
    this._iconUri = value;
  }
  public resetIconUri() {
    this._iconUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconUriInput() {
    return this._iconUri;
  }

  // tooltips - computed: false, optional: true, required: false
  private _tooltips?: { [key: string]: string }; 
  public get tooltips() {
    return this.getStringMapAttribute('tooltips');
  }
  public set tooltips(value: { [key: string]: string }) {
    this._tooltips = value;
  }
  public resetTooltips() {
    this._tooltips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooltipsInput() {
    return this._tooltips;
  }
}
export interface DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#image DataK8SExecutorTestkubeIoExecutorV1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlavesToTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlavesToHclTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlavesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._image = value.image;
    }
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
}
export interface DataK8SExecutorTestkubeIoExecutorV1ManifestSpec {
  /**
  * executor binary arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#args DataK8SExecutorTestkubeIoExecutorV1Manifest#args}
  */
  readonly args?: string[];
  /**
  * executor default binary command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#command DataK8SExecutorTestkubeIoExecutorV1Manifest#command}
  */
  readonly command?: string[];
  /**
  * ContentTypes list of handled content types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#content_types DataK8SExecutorTestkubeIoExecutorV1Manifest#content_types}
  */
  readonly contentTypes?: string[];
  /**
  * ExecutorType one of 'rest' for rest openapi based executors or 'job' which will be default runners for testkube or 'container' for container executors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#executor_type DataK8SExecutorTestkubeIoExecutorV1Manifest#executor_type}
  */
  readonly executorType?: string;
  /**
  * Features list of possible features which executor handles
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#features DataK8SExecutorTestkubeIoExecutorV1Manifest#features}
  */
  readonly features?: string[];
  /**
  * Image for kube-job
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#image DataK8SExecutorTestkubeIoExecutorV1Manifest#image}
  */
  readonly image?: string;
  /**
  * container executor default image pull secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#image_pull_secrets DataK8SExecutorTestkubeIoExecutorV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Job template to launch executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#job_template DataK8SExecutorTestkubeIoExecutorV1Manifest#job_template}
  */
  readonly jobTemplate?: string;
  /**
  * name of the template resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#job_template_reference DataK8SExecutorTestkubeIoExecutorV1Manifest#job_template_reference}
  */
  readonly jobTemplateReference?: string;
  /**
  * Meta data about executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#meta DataK8SExecutorTestkubeIoExecutorV1Manifest#meta}
  */
  readonly meta?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta;
  /**
  * Slaves data to run test in distributed environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#slaves DataK8SExecutorTestkubeIoExecutorV1Manifest#slaves}
  */
  readonly slaves?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves;
  /**
  * Types defines what types can be handled by executor e.g. 'postman/collection', ':curl/command' etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#types DataK8SExecutorTestkubeIoExecutorV1Manifest#types}
  */
  readonly types?: string[];
  /**
  * URI for rest based executors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#uri DataK8SExecutorTestkubeIoExecutorV1Manifest#uri}
  */
  readonly uri?: string;
  /**
  * use data dir as working dir for executor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#use_data_dir_as_working_dir DataK8SExecutorTestkubeIoExecutorV1Manifest#use_data_dir_as_working_dir}
  */
  readonly useDataDirAsWorkingDir?: boolean | cdktf.IResolvable;
}

export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecToTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    content_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.contentTypes),
    executor_type: cdktf.stringToTerraform(struct!.executorType),
    features: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.features),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_secrets: cdktf.listMapper(dataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    job_template: cdktf.stringToTerraform(struct!.jobTemplate),
    job_template_reference: cdktf.stringToTerraform(struct!.jobTemplateReference),
    meta: dataK8SExecutorTestkubeIoExecutorV1ManifestSpecMetaToTerraform(struct!.meta),
    slaves: dataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlavesToTerraform(struct!.slaves),
    types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.types),
    uri: cdktf.stringToTerraform(struct!.uri),
    use_data_dir_as_working_dir: cdktf.booleanToTerraform(struct!.useDataDirAsWorkingDir),
  }
}


export function dataK8SExecutorTestkubeIoExecutorV1ManifestSpecToHclTerraform(struct?: DataK8SExecutorTestkubeIoExecutorV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    content_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.contentTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    executor_type: {
      value: cdktf.stringToHclTerraform(struct!.executorType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    features: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.features),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsList",
    },
    job_template: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    job_template_reference: {
      value: cdktf.stringToHclTerraform(struct!.jobTemplateReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    meta: {
      value: dataK8SExecutorTestkubeIoExecutorV1ManifestSpecMetaToHclTerraform(struct!.meta),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta",
    },
    slaves: {
      value: dataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlavesToHclTerraform(struct!.slaves),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves",
    },
    types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.types),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_data_dir_as_working_dir: {
      value: cdktf.booleanToHclTerraform(struct!.useDataDirAsWorkingDir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExecutorTestkubeIoExecutorV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExecutorTestkubeIoExecutorV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._contentTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.contentTypes = this._contentTypes;
    }
    if (this._executorType !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorType = this._executorType;
    }
    if (this._features !== undefined) {
      hasAnyValues = true;
      internalValueResult.features = this._features;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._jobTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplate = this._jobTemplate;
    }
    if (this._jobTemplateReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobTemplateReference = this._jobTemplateReference;
    }
    if (this._meta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.meta = this._meta?.internalValue;
    }
    if (this._slaves?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaves = this._slaves?.internalValue;
    }
    if (this._types !== undefined) {
      hasAnyValues = true;
      internalValueResult.types = this._types;
    }
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    if (this._useDataDirAsWorkingDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDataDirAsWorkingDir = this._useDataDirAsWorkingDir;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._command = undefined;
      this._contentTypes = undefined;
      this._executorType = undefined;
      this._features = undefined;
      this._image = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._jobTemplate = undefined;
      this._jobTemplateReference = undefined;
      this._meta.internalValue = undefined;
      this._slaves.internalValue = undefined;
      this._types = undefined;
      this._uri = undefined;
      this._useDataDirAsWorkingDir = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._command = value.command;
      this._contentTypes = value.contentTypes;
      this._executorType = value.executorType;
      this._features = value.features;
      this._image = value.image;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._jobTemplate = value.jobTemplate;
      this._jobTemplateReference = value.jobTemplateReference;
      this._meta.internalValue = value.meta;
      this._slaves.internalValue = value.slaves;
      this._types = value.types;
      this._uri = value.uri;
      this._useDataDirAsWorkingDir = value.useDataDirAsWorkingDir;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // content_types - computed: false, optional: true, required: false
  private _contentTypes?: string[]; 
  public get contentTypes() {
    return this.getListAttribute('content_types');
  }
  public set contentTypes(value: string[]) {
    this._contentTypes = value;
  }
  public resetContentTypes() {
    this._contentTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypesInput() {
    return this._contentTypes;
  }

  // executor_type - computed: false, optional: true, required: false
  private _executorType?: string; 
  public get executorType() {
    return this.getStringAttribute('executor_type');
  }
  public set executorType(value: string) {
    this._executorType = value;
  }
  public resetExecutorType() {
    this._executorType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorTypeInput() {
    return this._executorType;
  }

  // features - computed: false, optional: true, required: false
  private _features?: string[]; 
  public get features() {
    return this.getListAttribute('features');
  }
  public set features(value: string[]) {
    this._features = value;
  }
  public resetFeatures() {
    this._features = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featuresInput() {
    return this._features;
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

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // job_template - computed: false, optional: true, required: false
  private _jobTemplate?: string; 
  public get jobTemplate() {
    return this.getStringAttribute('job_template');
  }
  public set jobTemplate(value: string) {
    this._jobTemplate = value;
  }
  public resetJobTemplate() {
    this._jobTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateInput() {
    return this._jobTemplate;
  }

  // job_template_reference - computed: false, optional: true, required: false
  private _jobTemplateReference?: string; 
  public get jobTemplateReference() {
    return this.getStringAttribute('job_template_reference');
  }
  public set jobTemplateReference(value: string) {
    this._jobTemplateReference = value;
  }
  public resetJobTemplateReference() {
    this._jobTemplateReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobTemplateReferenceInput() {
    return this._jobTemplateReference;
  }

  // meta - computed: false, optional: true, required: false
  private _meta = new DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMetaOutputReference(this, "meta");
  public get meta() {
    return this._meta;
  }
  public putMeta(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecMeta) {
    this._meta.internalValue = value;
  }
  public resetMeta() {
    this._meta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta.internalValue;
  }

  // slaves - computed: false, optional: true, required: false
  private _slaves = new DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlavesOutputReference(this, "slaves");
  public get slaves() {
    return this._slaves;
  }
  public putSlaves(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpecSlaves) {
    this._slaves.internalValue = value;
  }
  public resetSlaves() {
    this._slaves.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slavesInput() {
    return this._slaves.internalValue;
  }

  // types - computed: false, optional: true, required: false
  private _types?: string[]; 
  public get types() {
    return this.getListAttribute('types');
  }
  public set types(value: string[]) {
    this._types = value;
  }
  public resetTypes() {
    this._types = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typesInput() {
    return this._types;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // use_data_dir_as_working_dir - computed: false, optional: true, required: false
  private _useDataDirAsWorkingDir?: boolean | cdktf.IResolvable; 
  public get useDataDirAsWorkingDir() {
    return this.getBooleanAttribute('use_data_dir_as_working_dir');
  }
  public set useDataDirAsWorkingDir(value: boolean | cdktf.IResolvable) {
    this._useDataDirAsWorkingDir = value;
  }
  public resetUseDataDirAsWorkingDir() {
    this._useDataDirAsWorkingDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDataDirAsWorkingDirInput() {
    return this._useDataDirAsWorkingDir;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest k8s_executor_testkube_io_executor_v1_manifest}
*/
export class DataK8SExecutorTestkubeIoExecutorV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_executor_testkube_io_executor_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExecutorTestkubeIoExecutorV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExecutorTestkubeIoExecutorV1Manifest to import
  * @param importFromId The id of the existing DataK8SExecutorTestkubeIoExecutorV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExecutorTestkubeIoExecutorV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_executor_testkube_io_executor_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/executor_testkube_io_executor_v1_manifest k8s_executor_testkube_io_executor_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExecutorTestkubeIoExecutorV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExecutorTestkubeIoExecutorV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_executor_testkube_io_executor_v1_manifest',
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
  private _metadata = new DataK8SExecutorTestkubeIoExecutorV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExecutorTestkubeIoExecutorV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExecutorTestkubeIoExecutorV1ManifestSpec) {
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
      metadata: dataK8SExecutorTestkubeIoExecutorV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExecutorTestkubeIoExecutorV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExecutorTestkubeIoExecutorV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutorTestkubeIoExecutorV1ManifestMetadata",
      },
      spec: {
        value: dataK8SExecutorTestkubeIoExecutorV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExecutorTestkubeIoExecutorV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
