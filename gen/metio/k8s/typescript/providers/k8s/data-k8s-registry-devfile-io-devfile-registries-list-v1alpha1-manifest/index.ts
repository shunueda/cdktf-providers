// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#metadata DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata;
  /**
  * DevfileRegistriesListSpec defines the desired state of DevfileRegistriesList
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#spec DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec;
}
export interface DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#annotations DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#labels DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#name DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#namespace DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries {
  /**
  * Name is the unique Name of the devfile registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#name DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * SkipTLSVerify defaults to false. Set to true in a non-production environment to bypass certificate checking
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#skip_tls_verify DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#skip_tls_verify}
  */
  readonly skipTlsVerify?: boolean | cdktf.IResolvable;
  /**
  * URL is the unique URL of the devfile registry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#url DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#url}
  */
  readonly url: string;
}

export function dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    skip_tls_verify: cdktf.booleanToTerraform(struct!.skipTlsVerify),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries | cdktf.IResolvable): any {
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
    skip_tls_verify: {
      value: cdktf.booleanToHclTerraform(struct!.skipTlsVerify),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._skipTlsVerify !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipTlsVerify = this._skipTlsVerify;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._skipTlsVerify = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._skipTlsVerify = value.skipTlsVerify;
      this._url = value.url;
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

  // skip_tls_verify - computed: false, optional: true, required: false
  private _skipTlsVerify?: boolean | cdktf.IResolvable; 
  public get skipTlsVerify() {
    return this.getBooleanAttribute('skip_tls_verify');
  }
  public set skipTlsVerify(value: boolean | cdktf.IResolvable) {
    this._skipTlsVerify = value;
  }
  public resetSkipTlsVerify() {
    this._skipTlsVerify = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipTlsVerifyInput() {
    return this._skipTlsVerify;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}

export class DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesList extends cdktf.ComplexList {
  public internalValue? : DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries[] | cdktf.IResolvable

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
  public get(index: number): DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesOutputReference {
    return new DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec {
  /**
  * DevfileRegistries is a list of devfile registry services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#devfile_registries DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest#devfile_registries}
  */
  readonly devfileRegistries?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries[] | cdktf.IResolvable;
}

export function dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecToTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    devfile_registries: cdktf.listMapper(dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesToTerraform, false)(struct!.devfileRegistries),
  }
}


export function dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    devfile_registries: {
      value: cdktf.listMapperHcl(dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesToHclTerraform, false)(struct!.devfileRegistries),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devfileRegistries?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devfileRegistries = this._devfileRegistries?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devfileRegistries.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devfileRegistries.internalValue = value.devfileRegistries;
    }
  }

  // devfile_registries - computed: false, optional: true, required: false
  private _devfileRegistries = new DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistriesList(this, "devfile_registries", false);
  public get devfileRegistries() {
    return this._devfileRegistries;
  }
  public putDevfileRegistries(value: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecDevfileRegistries[] | cdktf.IResolvable) {
    this._devfileRegistries.internalValue = value;
  }
  public resetDevfileRegistries() {
    this._devfileRegistries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devfileRegistriesInput() {
    return this._devfileRegistries.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest k8s_registry_devfile_io_devfile_registries_list_v1alpha1_manifest}
*/
export class DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_registry_devfile_io_devfile_registries_list_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_registry_devfile_io_devfile_registries_list_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/registry_devfile_io_devfile_registries_list_v1alpha1_manifest k8s_registry_devfile_io_devfile_registries_list_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_registry_devfile_io_devfile_registries_list_v1alpha1_manifest',
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
  private _metadata = new DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec) {
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
      metadata: dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRegistryDevfileIoDevfileRegistriesListV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
