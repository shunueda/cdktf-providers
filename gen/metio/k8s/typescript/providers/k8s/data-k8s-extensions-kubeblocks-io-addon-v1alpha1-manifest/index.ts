// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#metadata DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata;
  /**
  * AddonSpec defines the desired state of an add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#spec DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec;
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#annotations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#labels DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins {
  /**
  * Provides a brief description of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#description DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Defines the index repository of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#index_repository DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#index_repository}
  */
  readonly indexRepository: string;
  /**
  * Specifies the name of the plugin.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    index_repository: cdktf.stringToTerraform(struct!.indexRepository),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    index_repository: {
      value: cdktf.stringToHclTerraform(struct!.indexRepository),
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._indexRepository !== undefined) {
      hasAnyValues = true;
      internalValueResult.indexRepository = this._indexRepository;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._indexRepository = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._indexRepository = value.indexRepository;
      this._name = value.name;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // index_repository - computed: false, optional: false, required: true
  private _indexRepository?: string; 
  public get indexRepository() {
    return this.getStringAttribute('index_repository');
  }
  public set indexRepository(value: string) {
    this._indexRepository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get indexRepositoryInput() {
    return this._indexRepository;
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified; otherwise, it defaults to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResourcesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResourcesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras {
  /**
  * Specifies the name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Indicates whether the Persistent Volume is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#persistent_volume_enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#persistent_volume_enabled}
  */
  readonly persistentVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#replicas DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Specifies the resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#resources DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources;
  /**
  * Specifies the name of the storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage_class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies the tolerations in a JSON array string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#tolerations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_enabled: cdktf.booleanToTerraform(struct!.persistentVolumeEnabled),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResourcesToTerraform(struct!.resources),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras | cdktf.IResolvable): any {
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
    persistent_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeEnabled = this._persistentVolumeEnabled;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._persistentVolumeEnabled = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._storageClass = undefined;
      this._tolerations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._persistentVolumeEnabled = value.persistentVolumeEnabled;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._storageClass = value.storageClass;
      this._tolerations = value.tolerations;
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

  // persistent_volume_enabled - computed: false, optional: true, required: false
  private _persistentVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get persistentVolumeEnabled() {
    return this.getBooleanAttribute('persistent_volume_enabled');
  }
  public set persistentVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentVolumeEnabled = value;
  }
  public resetPersistentVolumeEnabled() {
    this._persistentVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeEnabledInput() {
    return this._persistentVolumeEnabled;
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
  private _resources = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified; otherwise, it defaults to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResourcesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResourcesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors {
  /**
  * The selector key. Valid values are KubeVersion, KubeGitVersion and KubeProvider. - 'KubeVersion' the semver expression of Kubernetes versions, i.e., v1.24. - 'KubeGitVersion' may contain distro. info., i.e., v1.24.4+eks. - 'KubeProvider' the Kubernetes provider, i.e., aws, gcp, azure, huaweiCloud, tencentCloud etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#key DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are Contains, NotIn, DoesNotContain, MatchRegex, and DoesNoteMatchRegex. Possible enum values: - 'Contains' line contains a string. - 'DoesNotContain' line does not contain a string. - 'MatchRegex' line contains a match to the regular expression. - 'DoesNotMatchRegex' line does not contain a match to the regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#operator DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Represents an array of string values. This serves as an 'OR' expression to the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#values DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors | cdktf.IResolvable): any {
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


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors | cdktf.IResolvable): any {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues {
  /**
  * Can be set to true if there are no specific installation attributes to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the installation specifications for extra items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#extras DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#extras}
  */
  readonly extras?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras[] | cdktf.IResolvable;
  /**
  * Indicates whether the Persistent Volume is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#persistent_volume_enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#persistent_volume_enabled}
  */
  readonly persistentVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#replicas DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Specifies the resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#resources DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources;
  /**
  * Indicates the default selectors for add-on installations. If multiple selectors are provided, all selectors must evaluate to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#selectors DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors[] | cdktf.IResolvable;
  /**
  * Specifies the name of the storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage_class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies the tolerations in a JSON array string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#tolerations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extras: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasToTerraform, false)(struct!.extras),
    persistent_volume_enabled: cdktf.booleanToTerraform(struct!.persistentVolumeEnabled),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResourcesToTerraform(struct!.resources),
    selectors: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsToTerraform, false)(struct!.selectors),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extras: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasToHclTerraform, false)(struct!.extras),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasList",
    },
    persistent_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources",
    },
    selectors: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsList",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extras?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extras = this._extras?.internalValue;
    }
    if (this._persistentVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeEnabled = this._persistentVolumeEnabled;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._extras.internalValue = undefined;
      this._persistentVolumeEnabled = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._selectors.internalValue = undefined;
      this._storageClass = undefined;
      this._tolerations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._extras.internalValue = value.extras;
      this._persistentVolumeEnabled = value.persistentVolumeEnabled;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._selectors.internalValue = value.selectors;
      this._storageClass = value.storageClass;
      this._tolerations = value.tolerations;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extras - computed: false, optional: true, required: false
  private _extras = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtrasList(this, "extras", false);
  public get extras() {
    return this._extras;
  }
  public putExtras(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesExtras[] | cdktf.IResolvable) {
    this._extras.internalValue = value;
  }
  public resetExtras() {
    this._extras.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extrasInput() {
    return this._extras.internalValue;
  }

  // persistent_volume_enabled - computed: false, optional: true, required: false
  private _persistentVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get persistentVolumeEnabled() {
    return this.getBooleanAttribute('persistent_volume_enabled');
  }
  public set persistentVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentVolumeEnabled = value;
  }
  public resetPersistentVolumeEnabled() {
    this._persistentVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeEnabledInput() {
    return this._persistentVolumeEnabled;
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
  private _resources = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs {
  /**
  * Specifies the key to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#key DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Defines the name of the object being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs | cdktf.IResolvable): any {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs {
  /**
  * Specifies the key to be selected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#key DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Defines the name of the object being referred to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs | cdktf.IResolvable): any {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues {
  /**
  * Selects a key from a ConfigMap item list. The value can be a JSON or YAML string content. Use a key name with '.json', '.yaml', or '.yml' extension to specify a content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#config_map_refs DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#config_map_refs}
  */
  readonly configMapRefs?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs[] | cdktf.IResolvable;
  /**
  * Selects a key from a Secrets item list. The value can be a JSON or YAML string content. Use a key name with '.json', '.yaml', or '.yml' extension to specify a content type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#secret_refs DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#secret_refs}
  */
  readonly secretRefs?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs[] | cdktf.IResolvable;
  /**
  * JSON values set during Helm installation. Multiple or separate values can be specified with commas (key1=jsonval1,key2=jsonval2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#set_json_values DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#set_json_values}
  */
  readonly setJsonValues?: string[];
  /**
  * Values set during Helm installation. Multiple or separate values can be specified with commas (key1=val1,key2=val2).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#set_values DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#set_values}
  */
  readonly setValues?: string[];
  /**
  * Specifies the URL location of the values file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#urls DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#urls}
  */
  readonly urls?: string[];
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_refs: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsToTerraform, false)(struct!.configMapRefs),
    secret_refs: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsToTerraform, false)(struct!.secretRefs),
    set_json_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setJsonValues),
    set_values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.setValues),
    urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urls),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_refs: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsToHclTerraform, false)(struct!.configMapRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsList",
    },
    secret_refs: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsToHclTerraform, false)(struct!.secretRefs),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsList",
    },
    set_json_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setJsonValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    set_values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.setValues),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urls),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapRefs = this._configMapRefs?.internalValue;
    }
    if (this._secretRefs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretRefs = this._secretRefs?.internalValue;
    }
    if (this._setJsonValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.setJsonValues = this._setJsonValues;
    }
    if (this._setValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.setValues = this._setValues;
    }
    if (this._urls !== undefined) {
      hasAnyValues = true;
      internalValueResult.urls = this._urls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapRefs.internalValue = undefined;
      this._secretRefs.internalValue = undefined;
      this._setJsonValues = undefined;
      this._setValues = undefined;
      this._urls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapRefs.internalValue = value.configMapRefs;
      this._secretRefs.internalValue = value.secretRefs;
      this._setJsonValues = value.setJsonValues;
      this._setValues = value.setValues;
      this._urls = value.urls;
    }
  }

  // config_map_refs - computed: false, optional: true, required: false
  private _configMapRefs = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefsList(this, "config_map_refs", false);
  public get configMapRefs() {
    return this._configMapRefs;
  }
  public putConfigMapRefs(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesConfigMapRefs[] | cdktf.IResolvable) {
    this._configMapRefs.internalValue = value;
  }
  public resetConfigMapRefs() {
    this._configMapRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapRefsInput() {
    return this._configMapRefs.internalValue;
  }

  // secret_refs - computed: false, optional: true, required: false
  private _secretRefs = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefsList(this, "secret_refs", false);
  public get secretRefs() {
    return this._secretRefs;
  }
  public putSecretRefs(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesSecretRefs[] | cdktf.IResolvable) {
    this._secretRefs.internalValue = value;
  }
  public resetSecretRefs() {
    this._secretRefs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretRefsInput() {
    return this._secretRefs.internalValue;
  }

  // set_json_values - computed: false, optional: true, required: false
  private _setJsonValues?: string[]; 
  public get setJsonValues() {
    return this.getListAttribute('set_json_values');
  }
  public set setJsonValues(value: string[]) {
    this._setJsonValues = value;
  }
  public resetSetJsonValues() {
    this._setJsonValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setJsonValuesInput() {
    return this._setJsonValues;
  }

  // set_values - computed: false, optional: true, required: false
  private _setValues?: string[]; 
  public get setValues() {
    return this.getListAttribute('set_values');
  }
  public set setValues(value: string[]) {
    this._setValues = value;
  }
  public resetSetValues() {
    this._setValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setValuesInput() {
    return this._setValues;
  }

  // urls - computed: false, optional: true, required: false
  private _urls?: string[]; 
  public get urls() {
    return this.getListAttribute('urls');
  }
  public set urls(value: string[]) {
    this._urls = value;
  }
  public resetUrls() {
    this._urls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlsInput() {
    return this._urls;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap {
  /**
  * Specifies the toleration mapping key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#tolerations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMapToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMapToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tolerations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tolerations = value.tolerations;
    }
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu {
  /**
  * Specifies the mapping key for the limit value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: string;
  /**
  * Specifies the mapping key for the request value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpuToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.stringToTerraform(struct!.limits),
    requests: cdktf.stringToTerraform(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpuToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.stringToHclTerraform(struct!.limits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktf.stringToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: string; 
  public get limits() {
    return this.getStringAttribute('limits');
  }
  public set limits(value: string) {
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
  private _requests?: string; 
  public get requests() {
    return this.getStringAttribute('requests');
  }
  public set requests(value: string) {
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory {
  /**
  * Specifies the mapping key for the limit value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: string;
  /**
  * Specifies the mapping key for the request value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemoryToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.stringToTerraform(struct!.limits),
    requests: cdktf.stringToTerraform(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemoryToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.stringToHclTerraform(struct!.limits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktf.stringToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: string; 
  public get limits() {
    return this.getStringAttribute('limits');
  }
  public set limits(value: string) {
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
  private _requests?: string; 
  public get requests() {
    return this.getStringAttribute('requests');
  }
  public set requests(value: string) {
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources {
  /**
  * Specifies the key used for mapping both CPU requests and limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#cpu DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu;
  /**
  * Specifies the key used for mapping both Memory requests and limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#memory DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory;
  /**
  * Specifies the key used for mapping the storage size value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage}
  */
  readonly storage?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu",
    },
    memory: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap {
  /**
  * Indicates whether the persistent volume is enabled in the Helm values map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#persistent_volume_enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#persistent_volume_enabled}
  */
  readonly persistentVolumeEnabled?: string;
  /**
  * Defines the key for setting the replica count in the Helm values map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#replica_count DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#replica_count}
  */
  readonly replicaCount?: string;
  /**
  * Specifies the key for setting the storage class in the Helm values map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage_class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMapToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_volume_enabled: cdktf.stringToTerraform(struct!.persistentVolumeEnabled),
    replica_count: cdktf.stringToTerraform(struct!.replicaCount),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMapToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_volume_enabled: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.stringToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeEnabled = this._persistentVolumeEnabled;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistentVolumeEnabled = undefined;
      this._replicaCount = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistentVolumeEnabled = value.persistentVolumeEnabled;
      this._replicaCount = value.replicaCount;
      this._storageClass = value.storageClass;
    }
  }

  // persistent_volume_enabled - computed: false, optional: true, required: false
  private _persistentVolumeEnabled?: string; 
  public get persistentVolumeEnabled() {
    return this.getStringAttribute('persistent_volume_enabled');
  }
  public set persistentVolumeEnabled(value: string) {
    this._persistentVolumeEnabled = value;
  }
  public resetPersistentVolumeEnabled() {
    this._persistentVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeEnabledInput() {
    return this._persistentVolumeEnabled;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: string; 
  public get replicaCount() {
    return this.getStringAttribute('replica_count');
  }
  public set replicaCount(value: string) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras {
  /**
  * Defines the 'key' mapping values. The valid key is tolerations. Enum values explained: - 'tolerations' sets the toleration mapping key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#json_map DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#json_map}
  */
  readonly jsonMap?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap;
  /**
  * Name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Sets resources related mapping keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#resources DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources;
  /**
  * Defines the 'key' mapping values. Valid keys include 'replicaCount', 'persistentVolumeEnabled', and 'storageClass'. Enum values explained: - 'replicaCount' sets the replicaCount value mapping key. - 'persistentVolumeEnabled' sets the persistent volume enabled mapping key. - 'storageClass' sets the storageClass mapping key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#value_map DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#value_map}
  */
  readonly valueMap?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    json_map: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMapToTerraform(struct!.jsonMap),
    name: cdktf.stringToTerraform(struct!.name),
    resources: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesToTerraform(struct!.resources),
    value_map: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMapToTerraform(struct!.valueMap),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    json_map: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMapToHclTerraform(struct!.jsonMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resources: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources",
    },
    value_map: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMapToHclTerraform(struct!.valueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._jsonMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonMap = this._jsonMap?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._valueMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._jsonMap.internalValue = undefined;
      this._name = undefined;
      this._resources.internalValue = undefined;
      this._valueMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._jsonMap.internalValue = value.jsonMap;
      this._name = value.name;
      this._resources.internalValue = value.resources;
      this._valueMap.internalValue = value.valueMap;
    }
  }

  // json_map - computed: false, optional: true, required: false
  private _jsonMap = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMapOutputReference(this, "json_map");
  public get jsonMap() {
    return this._jsonMap;
  }
  public putJsonMap(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasJsonMap) {
    this._jsonMap.internalValue = value;
  }
  public resetJsonMap() {
    this._jsonMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonMapInput() {
    return this._jsonMap.internalValue;
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

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMapOutputReference(this, "value_map");
  public get valueMap() {
    return this._valueMap;
  }
  public putValueMap(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasValueMap) {
    this._valueMap.internalValue = value;
  }
  public resetValueMap() {
    this._valueMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap.internalValue;
  }
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap {
  /**
  * Specifies the toleration mapping key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#tolerations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMapToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMapToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tolerations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tolerations = value.tolerations;
    }
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu {
  /**
  * Specifies the mapping key for the limit value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: string;
  /**
  * Specifies the mapping key for the request value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpuToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.stringToTerraform(struct!.limits),
    requests: cdktf.stringToTerraform(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpuToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.stringToHclTerraform(struct!.limits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktf.stringToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: string; 
  public get limits() {
    return this.getStringAttribute('limits');
  }
  public set limits(value: string) {
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
  private _requests?: string; 
  public get requests() {
    return this.getStringAttribute('requests');
  }
  public set requests(value: string) {
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory {
  /**
  * Specifies the mapping key for the limit value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: string;
  /**
  * Specifies the mapping key for the request value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemoryToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.stringToTerraform(struct!.limits),
    requests: cdktf.stringToTerraform(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemoryToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.stringToHclTerraform(struct!.limits),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    requests: {
      value: cdktf.stringToHclTerraform(struct!.requests),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: string; 
  public get limits() {
    return this.getStringAttribute('limits');
  }
  public set limits(value: string) {
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
  private _requests?: string; 
  public get requests() {
    return this.getStringAttribute('requests');
  }
  public set requests(value: string) {
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources {
  /**
  * Specifies the key used for mapping both CPU requests and limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#cpu DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#cpu}
  */
  readonly cpu?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu;
  /**
  * Specifies the key used for mapping both Memory requests and limits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#memory DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#memory}
  */
  readonly memory?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory;
  /**
  * Specifies the key used for mapping the storage size value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage}
  */
  readonly storage?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpuToTerraform(struct!.cpu),
    memory: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemoryToTerraform(struct!.memory),
    storage: cdktf.stringToTerraform(struct!.storage),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpuToHclTerraform(struct!.cpu),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu",
    },
    memory: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemoryToHclTerraform(struct!.memory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory",
    },
    storage: {
      value: cdktf.stringToHclTerraform(struct!.storage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu?.internalValue;
    }
    if (this._memory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory?.internalValue;
    }
    if (this._storage !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu.internalValue = undefined;
      this._memory.internalValue = undefined;
      this._storage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu.internalValue = value.cpu;
      this._memory.internalValue = value.memory;
      this._storage = value.storage;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpuOutputReference(this, "cpu");
  public get cpu() {
    return this._cpu;
  }
  public putCpu(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesCpu) {
    this._cpu.internalValue = value;
  }
  public resetCpu() {
    this._cpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu.internalValue;
  }

  // memory - computed: false, optional: true, required: false
  private _memory = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemoryOutputReference(this, "memory");
  public get memory() {
    return this._memory;
  }
  public putMemory(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesMemory) {
    this._memory.internalValue = value;
  }
  public resetMemory() {
    this._memory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory.internalValue;
  }

  // storage - computed: false, optional: true, required: false
  private _storage?: string; 
  public get storage() {
    return this.getStringAttribute('storage');
  }
  public set storage(value: string) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap {
  /**
  * Indicates whether the persistent volume is enabled in the Helm values map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#persistent_volume_enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#persistent_volume_enabled}
  */
  readonly persistentVolumeEnabled?: string;
  /**
  * Defines the key for setting the replica count in the Helm values map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#replica_count DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#replica_count}
  */
  readonly replicaCount?: string;
  /**
  * Specifies the key for setting the storage class in the Helm values map.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage_class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMapToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_volume_enabled: cdktf.stringToTerraform(struct!.persistentVolumeEnabled),
    replica_count: cdktf.stringToTerraform(struct!.replicaCount),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMapToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_volume_enabled: {
      value: cdktf.stringToHclTerraform(struct!.persistentVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replica_count: {
      value: cdktf.stringToHclTerraform(struct!.replicaCount),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeEnabled = this._persistentVolumeEnabled;
    }
    if (this._replicaCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaCount = this._replicaCount;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistentVolumeEnabled = undefined;
      this._replicaCount = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistentVolumeEnabled = value.persistentVolumeEnabled;
      this._replicaCount = value.replicaCount;
      this._storageClass = value.storageClass;
    }
  }

  // persistent_volume_enabled - computed: false, optional: true, required: false
  private _persistentVolumeEnabled?: string; 
  public get persistentVolumeEnabled() {
    return this.getStringAttribute('persistent_volume_enabled');
  }
  public set persistentVolumeEnabled(value: string) {
    this._persistentVolumeEnabled = value;
  }
  public resetPersistentVolumeEnabled() {
    this._persistentVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeEnabledInput() {
    return this._persistentVolumeEnabled;
  }

  // replica_count - computed: false, optional: true, required: false
  private _replicaCount?: string; 
  public get replicaCount() {
    return this.getStringAttribute('replica_count');
  }
  public set replicaCount(value: string) {
    this._replicaCount = value;
  }
  public resetReplicaCount() {
    this._replicaCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaCountInput() {
    return this._replicaCount;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping {
  /**
  * Helm value mapping items for extra items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#extras DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#extras}
  */
  readonly extras?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras[] | cdktf.IResolvable;
  /**
  * Defines the 'key' mapping values. The valid key is tolerations. Enum values explained: - 'tolerations' sets the toleration mapping key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#json_map DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#json_map}
  */
  readonly jsonMap?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap;
  /**
  * Sets resources related mapping keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#resources DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources;
  /**
  * Defines the 'key' mapping values. Valid keys include 'replicaCount', 'persistentVolumeEnabled', and 'storageClass'. Enum values explained: - 'replicaCount' sets the replicaCount value mapping key. - 'persistentVolumeEnabled' sets the persistent volume enabled mapping key. - 'storageClass' sets the storageClass mapping key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#value_map DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#value_map}
  */
  readonly valueMap?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extras: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasToTerraform, false)(struct!.extras),
    json_map: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMapToTerraform(struct!.jsonMap),
    resources: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesToTerraform(struct!.resources),
    value_map: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMapToTerraform(struct!.valueMap),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extras: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasToHclTerraform, false)(struct!.extras),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasList",
    },
    json_map: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMapToHclTerraform(struct!.jsonMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap",
    },
    resources: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources",
    },
    value_map: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMapToHclTerraform(struct!.valueMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extras?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extras = this._extras?.internalValue;
    }
    if (this._jsonMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonMap = this._jsonMap?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._valueMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueMap = this._valueMap?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extras.internalValue = undefined;
      this._jsonMap.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._valueMap.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extras.internalValue = value.extras;
      this._jsonMap.internalValue = value.jsonMap;
      this._resources.internalValue = value.resources;
      this._valueMap.internalValue = value.valueMap;
    }
  }

  // extras - computed: false, optional: true, required: false
  private _extras = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtrasList(this, "extras", false);
  public get extras() {
    return this._extras;
  }
  public putExtras(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingExtras[] | cdktf.IResolvable) {
    this._extras.internalValue = value;
  }
  public resetExtras() {
    this._extras.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extrasInput() {
    return this._extras.internalValue;
  }

  // json_map - computed: false, optional: true, required: false
  private _jsonMap = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMapOutputReference(this, "json_map");
  public get jsonMap() {
    return this._jsonMap;
  }
  public putJsonMap(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingJsonMap) {
    this._jsonMap.internalValue = value;
  }
  public resetJsonMap() {
    this._jsonMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonMapInput() {
    return this._jsonMap.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // value_map - computed: false, optional: true, required: false
  private _valueMap = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMapOutputReference(this, "value_map");
  public get valueMap() {
    return this._valueMap;
  }
  public putValueMap(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingValueMap) {
    this._valueMap.internalValue = value;
  }
  public resetValueMap() {
    this._valueMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueMapInput() {
    return this._valueMap.internalValue;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm {
  /**
  * Specifies the URL location of the Helm Chart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#chart_location_url DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#chart_location_url}
  */
  readonly chartLocationUrl: string;
  /**
  * Defines the image of Helm charts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#charts_image DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#charts_image}
  */
  readonly chartsImage?: string;
  /**
  * Defines the path of Helm charts in the image. This path is used to copy Helm charts from the image to the shared volume. The default path is '/charts'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#charts_path_in_image DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#charts_path_in_image}
  */
  readonly chartsPathInImage?: string;
  /**
  * Defines the options for Helm release installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#install_options DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#install_options}
  */
  readonly installOptions?: { [key: string]: string };
  /**
  * Defines the set values for Helm release installation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#install_values DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#install_values}
  */
  readonly installValues?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues;
  /**
  * Defines the mapping of add-on normalized resources parameters to Helm values' keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#values_mapping DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#values_mapping}
  */
  readonly valuesMapping?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_location_url: cdktf.stringToTerraform(struct!.chartLocationUrl),
    charts_image: cdktf.stringToTerraform(struct!.chartsImage),
    charts_path_in_image: cdktf.stringToTerraform(struct!.chartsPathInImage),
    install_options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.installOptions),
    install_values: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesToTerraform(struct!.installValues),
    values_mapping: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingToTerraform(struct!.valuesMapping),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_location_url: {
      value: cdktf.stringToHclTerraform(struct!.chartLocationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charts_image: {
      value: cdktf.stringToHclTerraform(struct!.chartsImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    charts_path_in_image: {
      value: cdktf.stringToHclTerraform(struct!.chartsPathInImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    install_options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.installOptions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    install_values: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesToHclTerraform(struct!.installValues),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues",
    },
    values_mapping: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingToHclTerraform(struct!.valuesMapping),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartLocationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartLocationUrl = this._chartLocationUrl;
    }
    if (this._chartsImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartsImage = this._chartsImage;
    }
    if (this._chartsPathInImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartsPathInImage = this._chartsPathInImage;
    }
    if (this._installOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.installOptions = this._installOptions;
    }
    if (this._installValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installValues = this._installValues?.internalValue;
    }
    if (this._valuesMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesMapping = this._valuesMapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartLocationUrl = undefined;
      this._chartsImage = undefined;
      this._chartsPathInImage = undefined;
      this._installOptions = undefined;
      this._installValues.internalValue = undefined;
      this._valuesMapping.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartLocationUrl = value.chartLocationUrl;
      this._chartsImage = value.chartsImage;
      this._chartsPathInImage = value.chartsPathInImage;
      this._installOptions = value.installOptions;
      this._installValues.internalValue = value.installValues;
      this._valuesMapping.internalValue = value.valuesMapping;
    }
  }

  // chart_location_url - computed: false, optional: false, required: true
  private _chartLocationUrl?: string; 
  public get chartLocationUrl() {
    return this.getStringAttribute('chart_location_url');
  }
  public set chartLocationUrl(value: string) {
    this._chartLocationUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get chartLocationUrlInput() {
    return this._chartLocationUrl;
  }

  // charts_image - computed: false, optional: true, required: false
  private _chartsImage?: string; 
  public get chartsImage() {
    return this.getStringAttribute('charts_image');
  }
  public set chartsImage(value: string) {
    this._chartsImage = value;
  }
  public resetChartsImage() {
    this._chartsImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsImageInput() {
    return this._chartsImage;
  }

  // charts_path_in_image - computed: false, optional: true, required: false
  private _chartsPathInImage?: string; 
  public get chartsPathInImage() {
    return this.getStringAttribute('charts_path_in_image');
  }
  public set chartsPathInImage(value: string) {
    this._chartsPathInImage = value;
  }
  public resetChartsPathInImage() {
    this._chartsPathInImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartsPathInImageInput() {
    return this._chartsPathInImage;
  }

  // install_options - computed: false, optional: true, required: false
  private _installOptions?: { [key: string]: string }; 
  public get installOptions() {
    return this.getStringMapAttribute('install_options');
  }
  public set installOptions(value: { [key: string]: string }) {
    this._installOptions = value;
  }
  public resetInstallOptions() {
    this._installOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installOptionsInput() {
    return this._installOptions;
  }

  // install_values - computed: false, optional: true, required: false
  private _installValues = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValuesOutputReference(this, "install_values");
  public get installValues() {
    return this._installValues;
  }
  public putInstallValues(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmInstallValues) {
    this._installValues.internalValue = value;
  }
  public resetInstallValues() {
    this._installValues.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installValuesInput() {
    return this._installValues.internalValue;
  }

  // values_mapping - computed: false, optional: true, required: false
  private _valuesMapping = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMappingOutputReference(this, "values_mapping");
  public get valuesMapping() {
    return this._valuesMapping;
  }
  public putValuesMapping(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmValuesMapping) {
    this._valuesMapping.internalValue = value;
  }
  public resetValuesMapping() {
    this._valuesMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesMappingInput() {
    return this._valuesMapping.internalValue;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified; otherwise, it defaults to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResourcesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResourcesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras {
  /**
  * Specifies the name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#name DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Indicates whether the Persistent Volume is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#persistent_volume_enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#persistent_volume_enabled}
  */
  readonly persistentVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#replicas DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Specifies the resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#resources DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources;
  /**
  * Specifies the name of the storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage_class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies the tolerations in a JSON array string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#tolerations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    persistent_volume_enabled: cdktf.booleanToTerraform(struct!.persistentVolumeEnabled),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResourcesToTerraform(struct!.resources),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras | cdktf.IResolvable): any {
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
    persistent_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._persistentVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeEnabled = this._persistentVolumeEnabled;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._persistentVolumeEnabled = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._storageClass = undefined;
      this._tolerations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._persistentVolumeEnabled = value.persistentVolumeEnabled;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._storageClass = value.storageClass;
      this._tolerations = value.tolerations;
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

  // persistent_volume_enabled - computed: false, optional: true, required: false
  private _persistentVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get persistentVolumeEnabled() {
    return this.getBooleanAttribute('persistent_volume_enabled');
  }
  public set persistentVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentVolumeEnabled = value;
  }
  public resetPersistentVolumeEnabled() {
    this._persistentVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeEnabledInput() {
    return this._persistentVolumeEnabled;
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
  private _resources = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#limits DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified; otherwise, it defaults to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#requests DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResourcesToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResourcesToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._limits = value.limits;
      this._requests = value.requests;
    }
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
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall {
  /**
  * Can be set to true if there are no specific installation attributes to be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the installation specifications for extra items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#extras DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#extras}
  */
  readonly extras?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras[] | cdktf.IResolvable;
  /**
  * Indicates whether the Persistent Volume is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#persistent_volume_enabled DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#persistent_volume_enabled}
  */
  readonly persistentVolumeEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#replicas DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Specifies the resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#resources DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources;
  /**
  * Specifies the name of the storage class.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#storage_class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Specifies the tolerations in a JSON array string format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#tolerations DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    extras: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasToTerraform, false)(struct!.extras),
    persistent_volume_enabled: cdktf.booleanToTerraform(struct!.persistentVolumeEnabled),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResourcesToTerraform(struct!.resources),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    tolerations: cdktf.stringToTerraform(struct!.tolerations),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extras: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasToHclTerraform, false)(struct!.extras),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasList",
    },
    persistent_volume_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.persistentVolumeEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.stringToHclTerraform(struct!.tolerations),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._extras?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extras = this._extras?.internalValue;
    }
    if (this._persistentVolumeEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeEnabled = this._persistentVolumeEnabled;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._tolerations !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._extras.internalValue = undefined;
      this._persistentVolumeEnabled = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._storageClass = undefined;
      this._tolerations = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._extras.internalValue = value.extras;
      this._persistentVolumeEnabled = value.persistentVolumeEnabled;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._storageClass = value.storageClass;
      this._tolerations = value.tolerations;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // extras - computed: false, optional: true, required: false
  private _extras = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtrasList(this, "extras", false);
  public get extras() {
    return this._extras;
  }
  public putExtras(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallExtras[] | cdktf.IResolvable) {
    this._extras.internalValue = value;
  }
  public resetExtras() {
    this._extras.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extrasInput() {
    return this._extras.internalValue;
  }

  // persistent_volume_enabled - computed: false, optional: true, required: false
  private _persistentVolumeEnabled?: boolean | cdktf.IResolvable; 
  public get persistentVolumeEnabled() {
    return this.getBooleanAttribute('persistent_volume_enabled');
  }
  public set persistentVolumeEnabled(value: boolean | cdktf.IResolvable) {
    this._persistentVolumeEnabled = value;
  }
  public resetPersistentVolumeEnabled() {
    this._persistentVolumeEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeEnabledInput() {
    return this._persistentVolumeEnabled;
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
  private _resources = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // storage_class - computed: false, optional: true, required: false
  private _storageClass?: string; 
  public get storageClass() {
    return this.getStringAttribute('storage_class');
  }
  public set storageClass(value: string) {
    this._storageClass = value;
  }
  public resetStorageClass() {
    this._storageClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassInput() {
    return this._storageClass;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations?: string; 
  public get tolerations() {
    return this.getStringAttribute('tolerations');
  }
  public set tolerations(value: string) {
    this._tolerations = value;
  }
  public resetTolerations() {
    this._tolerations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors {
  /**
  * The selector key. Valid values are KubeVersion, KubeGitVersion and KubeProvider. - 'KubeVersion' the semver expression of Kubernetes versions, i.e., v1.24. - 'KubeGitVersion' may contain distro. info., i.e., v1.24.4+eks. - 'KubeProvider' the Kubernetes provider, i.e., aws, gcp, azure, huaweiCloud, tencentCloud etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#key DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are Contains, NotIn, DoesNotContain, MatchRegex, and DoesNoteMatchRegex. Possible enum values: - 'Contains' line contains a string. - 'DoesNotContain' line does not contain a string. - 'MatchRegex' line contains a match to the regular expression. - 'DoesNotMatchRegex' line does not contain a match to the regular expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#operator DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Represents an array of string values. This serves as an 'OR' expression to the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#values DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors | cdktf.IResolvable): any {
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


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors | cdktf.IResolvable): any {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors | cdktf.IResolvable | undefined) {
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsList extends cdktf.ComplexList {
  public internalValue? : DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors[] | cdktf.IResolvable

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
  public get(index: number): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsOutputReference {
    return new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable {
  /**
  * Indicates whether an add-on should be installed automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#auto_install DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#auto_install}
  */
  readonly autoInstall: boolean | cdktf.IResolvable;
  /**
  * Specifies the selectors for add-on installation. If multiple selectors are provided, they must all evaluate to true for the add-on to be installed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#selectors DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#selectors}
  */
  readonly selectors?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors[] | cdktf.IResolvable;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_install: cdktf.booleanToTerraform(struct!.autoInstall),
    selectors: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsToTerraform, false)(struct!.selectors),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_install: {
      value: cdktf.booleanToHclTerraform(struct!.autoInstall),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selectors: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsToHclTerraform, false)(struct!.selectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoInstall !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoInstall = this._autoInstall;
    }
    if (this._selectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectors = this._selectors?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoInstall = undefined;
      this._selectors.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoInstall = value.autoInstall;
      this._selectors.internalValue = value.selectors;
    }
  }

  // auto_install - computed: false, optional: false, required: true
  private _autoInstall?: boolean | cdktf.IResolvable; 
  public get autoInstall() {
    return this.getBooleanAttribute('auto_install');
  }
  public set autoInstall(value: boolean | cdktf.IResolvable) {
    this._autoInstall = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoInstallInput() {
    return this._autoInstall;
  }

  // selectors - computed: false, optional: true, required: false
  private _selectors = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectorsList(this, "selectors", false);
  public get selectors() {
    return this._selectors;
  }
  public putSelectors(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableSelectors[] | cdktf.IResolvable) {
    this._selectors.internalValue = value;
  }
  public resetSelectors() {
    this._selectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorsInput() {
    return this._selectors.internalValue;
  }
}
export interface DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec {
  /**
  * Specifies the CLI plugin installation specifications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#cli_plugins DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#cli_plugins}
  */
  readonly cliPlugins?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins[] | cdktf.IResolvable;
  /**
  * Specifies the default installation parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#default_install_values DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#default_install_values}
  */
  readonly defaultInstallValues: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues[] | cdktf.IResolvable;
  /**
  * Specifies the description of the add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#description DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * Represents the Helm installation specifications. This is only processed when the type is set to 'helm'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#helm DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm;
  /**
  * Defines the installation parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#install DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#install}
  */
  readonly install?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall;
  /**
  * Represents the installable specifications of the add-on. This includes the selector and auto-install settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#installable DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#installable}
  */
  readonly installable?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable;
  /**
  * Specifies the provider of the add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#provider DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#provider}
  */
  readonly provider?: string;
  /**
  * Defines the type of the add-on. The only valid value is 'helm'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#type DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * Indicates the version of the add-on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#version DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecToTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cli_plugins: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsToTerraform, false)(struct!.cliPlugins),
    default_install_values: cdktf.listMapper(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesToTerraform, false)(struct!.defaultInstallValues),
    description: cdktf.stringToTerraform(struct!.description),
    helm: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmToTerraform(struct!.helm),
    install: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallToTerraform(struct!.install),
    installable: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableToTerraform(struct!.installable),
    provider: cdktf.stringToTerraform(struct!.provider),
    type: cdktf.stringToTerraform(struct!.type),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cli_plugins: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsToHclTerraform, false)(struct!.cliPlugins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsList",
    },
    default_install_values: {
      value: cdktf.listMapperHcl(dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesToHclTerraform, false)(struct!.defaultInstallValues),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm",
    },
    install: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallToHclTerraform(struct!.install),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall",
    },
    installable: {
      value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableToHclTerraform(struct!.installable),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable",
    },
    provider: {
      value: cdktf.stringToHclTerraform(struct!.provider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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

export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cliPlugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cliPlugins = this._cliPlugins?.internalValue;
    }
    if (this._defaultInstallValues?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultInstallValues = this._defaultInstallValues?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._install?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.install = this._install?.internalValue;
    }
    if (this._installable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.installable = this._installable?.internalValue;
    }
    if (this._provider !== undefined) {
      hasAnyValues = true;
      internalValueResult.provider = this._provider;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cliPlugins.internalValue = undefined;
      this._defaultInstallValues.internalValue = undefined;
      this._description = undefined;
      this._helm.internalValue = undefined;
      this._install.internalValue = undefined;
      this._installable.internalValue = undefined;
      this._provider = undefined;
      this._type = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cliPlugins.internalValue = value.cliPlugins;
      this._defaultInstallValues.internalValue = value.defaultInstallValues;
      this._description = value.description;
      this._helm.internalValue = value.helm;
      this._install.internalValue = value.install;
      this._installable.internalValue = value.installable;
      this._provider = value.provider;
      this._type = value.type;
      this._version = value.version;
    }
  }

  // cli_plugins - computed: false, optional: true, required: false
  private _cliPlugins = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPluginsList(this, "cli_plugins", false);
  public get cliPlugins() {
    return this._cliPlugins;
  }
  public putCliPlugins(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecCliPlugins[] | cdktf.IResolvable) {
    this._cliPlugins.internalValue = value;
  }
  public resetCliPlugins() {
    this._cliPlugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliPluginsInput() {
    return this._cliPlugins.internalValue;
  }

  // default_install_values - computed: false, optional: false, required: true
  private _defaultInstallValues = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValuesList(this, "default_install_values", false);
  public get defaultInstallValues() {
    return this._defaultInstallValues;
  }
  public putDefaultInstallValues(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecDefaultInstallValues[] | cdktf.IResolvable) {
    this._defaultInstallValues.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInstallValuesInput() {
    return this._defaultInstallValues.internalValue;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // install - computed: false, optional: true, required: false
  private _install = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallOutputReference(this, "install");
  public get install() {
    return this._install;
  }
  public putInstall(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstall) {
    this._install.internalValue = value;
  }
  public resetInstall() {
    this._install.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installInput() {
    return this._install.internalValue;
  }

  // installable - computed: false, optional: true, required: false
  private _installable = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallableOutputReference(this, "installable");
  public get installable() {
    return this._installable;
  }
  public putInstallable(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecInstallable) {
    this._installable.internalValue = value;
  }
  public resetInstallable() {
    this._installable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installableInput() {
    return this._installable.internalValue;
  }

  // provider - computed: false, optional: true, required: false
  private _provider?: string; 
  public get provider() {
    return this.getStringAttribute('provider');
  }
  public set provider(value: string) {
    this._provider = value;
  }
  public resetProvider() {
    this._provider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerInput() {
    return this._provider;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest k8s_extensions_kubeblocks_io_addon_v1alpha1_manifest}
*/
export class DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_extensions_kubeblocks_io_addon_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SExtensionsKubeblocksIoAddonV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_extensions_kubeblocks_io_addon_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/extensions_kubeblocks_io_addon_v1alpha1_manifest k8s_extensions_kubeblocks_io_addon_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_extensions_kubeblocks_io_addon_v1alpha1_manifest',
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
  private _metadata = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec) {
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
      metadata: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SExtensionsKubeblocksIoAddonV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
