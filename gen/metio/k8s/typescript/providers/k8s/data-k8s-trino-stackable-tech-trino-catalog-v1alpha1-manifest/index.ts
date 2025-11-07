// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#metadata DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata;
  /**
  * The TrinoCatalog resource can be used to define catalogs in Kubernetes objects. Read more about it in the [Trino operator concept docs](https://docs.stackable.tech/home/nightly/trino/concepts) and the [Trino operator usage guide](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/). The documentation also contains a list of all the supported backends.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#spec DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec;
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#annotations DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#labels DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#name DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#namespace DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadataToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs {
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) providing information about the HDFS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_map}
  */
  readonly configMap: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore {
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) providing information about the Hive metastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_map}
  */
  readonly configMap: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastoreToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastoreToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope {
  /**
  * The listener volume scope allows Node and Service scopes to be inferred from the applicable listeners. This must correspond to Volume names in the Pod that mount Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#listener_volumes DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#listener_volumes}
  */
  readonly listenerVolumes?: string[];
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#node DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#pod DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#services DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScopeToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerVolumes),
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScopeToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerVolumes = this._listenerVolumes;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerVolumes = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerVolumes = value.listenerVolumes;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // listener_volumes - computed: false, optional: true, required: false
  private _listenerVolumes?: string[]; 
  public get listenerVolumes() {
    return this.getListAttribute('listener_volumes');
  }
  public set listenerVolumes(value: string[]) {
    this._listenerVolumes = value;
  }
  public resetListenerVolumes() {
    this._listenerVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerVolumesInput() {
    return this._listenerVolumes;
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#scope DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#secret_class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#secret_class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#web_pki DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCertToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#ca_cert DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#none DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#server DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#server}
  */
  readonly server?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#verification DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#access_style DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#credentials DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials;
  /**
  * Host of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#host DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#port DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#tls DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3 {
  /**
  * S3 connection definition as a resource. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#inline DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#reference DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3ToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3ToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3InlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3Inline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake {
  /**
  * Connection to an HDFS cluster. Please make sure that the underlying Hive metastore also has access to the HDFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#hdfs DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#hdfs}
  */
  readonly hdfs?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs;
  /**
  * Mandatory connection to a Hive Metastore, which will be used as a storage for metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#metastore DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#metastore}
  */
  readonly metastore: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore;
  /**
  * Connection to an S3 store. Please make sure that the underlying Hive metastore also has access to the S3 store. Learn more about S3 configuration in the [S3 concept docs](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#s3 DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdfs: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfsToTerraform(struct!.hdfs),
    metastore: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastoreToTerraform(struct!.metastore),
    s3: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3ToTerraform(struct!.s3),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdfs: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfsToHclTerraform(struct!.hdfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs",
    },
    metastore: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore",
    },
    s3: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfs = this._hdfs?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdfs.internalValue = undefined;
      this._metastore.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdfs.internalValue = value.hdfs;
      this._metastore.internalValue = value.metastore;
      this._s3.internalValue = value.s3;
    }
  }

  // hdfs - computed: false, optional: true, required: false
  private _hdfs = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfsOutputReference(this, "hdfs");
  public get hdfs() {
    return this._hdfs;
  }
  public putHdfs(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeHdfs) {
    this._hdfs.internalValue = value;
  }
  public resetHdfs() {
    this._hdfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsInput() {
    return this._hdfs.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap {
  /**
  * The key to select.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#key DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#name DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether the ConfigMap or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#optional DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMapToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMapToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret {
  /**
  * The key of the secret to select from. Must be a valid secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#key DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#name DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#optional DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecretToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecretToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret | cdktf.IResolvable): any {
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
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret | cdktf.IResolvable | undefined {
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
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
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
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#value DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#value}
  */
  readonly value?: string;
  /**
  * Selects a key from a ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#value_from_config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#value_from_config_map}
  */
  readonly valueFromConfigMap?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap;
  /**
  * SecretKeySelector selects a key of a Secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#value_from_secret DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#value_from_secret}
  */
  readonly valueFromSecret?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    value: cdktf.stringToTerraform(struct!.value),
    value_from_config_map: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMapToTerraform(struct!.valueFromConfigMap),
    value_from_secret: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecretToTerraform(struct!.valueFromSecret),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from_config_map: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMapToHclTerraform(struct!.valueFromConfigMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap",
    },
    value_from_secret: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecretToHclTerraform(struct!.valueFromSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFromConfigMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFromConfigMap = this._valueFromConfigMap?.internalValue;
    }
    if (this._valueFromSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFromSecret = this._valueFromSecret?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._value = undefined;
      this._valueFromConfigMap.internalValue = undefined;
      this._valueFromSecret.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._value = value.value;
      this._valueFromConfigMap.internalValue = value.valueFromConfigMap;
      this._valueFromSecret.internalValue = value.valueFromSecret;
    }
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // value_from_config_map - computed: false, optional: true, required: false
  private _valueFromConfigMap = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMapOutputReference(this, "value_from_config_map");
  public get valueFromConfigMap() {
    return this._valueFromConfigMap;
  }
  public putValueFromConfigMap(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromConfigMap) {
    this._valueFromConfigMap.internalValue = value;
  }
  public resetValueFromConfigMap() {
    this._valueFromConfigMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromConfigMapInput() {
    return this._valueFromConfigMap.internalValue;
  }

  // value_from_secret - computed: false, optional: true, required: false
  private _valueFromSecret = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecretOutputReference(this, "value_from_secret");
  public get valueFromSecret() {
    return this._valueFromSecret;
  }
  public putValueFromSecret(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesValueFromSecret) {
    this._valueFromSecret.internalValue = value;
  }
  public resetValueFromSecret() {
    this._valueFromSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromSecretInput() {
    return this._valueFromSecret.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric {
  /**
  * Name of the Trino connector. Will be passed to 'connector.name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#connector_name DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#connector_name}
  */
  readonly connectorName: string;
  /**
  * A map of properties to put in the connector configuration file. They can be specified either as a raw value or be read from a Secret or ConfigMap.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#properties DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#properties}
  */
  readonly properties?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_name: cdktf.stringToTerraform(struct!.connectorName),
    properties: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesToTerraform(struct!.properties),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_name: {
      value: cdktf.stringToHclTerraform(struct!.connectorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesToHclTerraform(struct!.properties),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorName = this._connectorName;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorName = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorName = value.connectorName;
      this._properties.internalValue = value.properties;
    }
  }

  // connector_name - computed: false, optional: false, required: true
  private _connectorName?: string; 
  public get connectorName() {
    return this.getStringAttribute('connector_name');
  }
  public set connectorName(value: string) {
    this._connectorName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorNameInput() {
    return this._connectorName;
  }

  // properties - computed: false, optional: true, required: false
  private _properties = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericPropertiesOutputReference(this, "properties");
  public get properties() {
    return this._properties;
  }
  public putProperties(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericProperties) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache {
  /**
  * How long to cache spreadsheet data or metadata, defaults to '5m'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#sheets_data_expire_after_write DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#sheets_data_expire_after_write}
  */
  readonly sheetsDataExpireAfterWrite?: string;
  /**
  * Maximum number of spreadsheets to cache, defaults to 1000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#sheets_data_max_cache_size DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#sheets_data_max_cache_size}
  */
  readonly sheetsDataMaxCacheSize?: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCacheToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sheets_data_expire_after_write: cdktf.stringToTerraform(struct!.sheetsDataExpireAfterWrite),
    sheets_data_max_cache_size: cdktf.stringToTerraform(struct!.sheetsDataMaxCacheSize),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCacheToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sheets_data_expire_after_write: {
      value: cdktf.stringToHclTerraform(struct!.sheetsDataExpireAfterWrite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sheets_data_max_cache_size: {
      value: cdktf.stringToHclTerraform(struct!.sheetsDataMaxCacheSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCacheOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sheetsDataExpireAfterWrite !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetsDataExpireAfterWrite = this._sheetsDataExpireAfterWrite;
    }
    if (this._sheetsDataMaxCacheSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sheetsDataMaxCacheSize = this._sheetsDataMaxCacheSize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sheetsDataExpireAfterWrite = undefined;
      this._sheetsDataMaxCacheSize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sheetsDataExpireAfterWrite = value.sheetsDataExpireAfterWrite;
      this._sheetsDataMaxCacheSize = value.sheetsDataMaxCacheSize;
    }
  }

  // sheets_data_expire_after_write - computed: false, optional: true, required: false
  private _sheetsDataExpireAfterWrite?: string; 
  public get sheetsDataExpireAfterWrite() {
    return this.getStringAttribute('sheets_data_expire_after_write');
  }
  public set sheetsDataExpireAfterWrite(value: string) {
    this._sheetsDataExpireAfterWrite = value;
  }
  public resetSheetsDataExpireAfterWrite() {
    this._sheetsDataExpireAfterWrite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetsDataExpireAfterWriteInput() {
    return this._sheetsDataExpireAfterWrite;
  }

  // sheets_data_max_cache_size - computed: false, optional: true, required: false
  private _sheetsDataMaxCacheSize?: string; 
  public get sheetsDataMaxCacheSize() {
    return this.getStringAttribute('sheets_data_max_cache_size');
  }
  public set sheetsDataMaxCacheSize(value: string) {
    this._sheetsDataMaxCacheSize = value;
  }
  public resetSheetsDataMaxCacheSize() {
    this._sheetsDataMaxCacheSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sheetsDataMaxCacheSizeInput() {
    return this._sheetsDataMaxCacheSize;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet {
  /**
  * Cache the contents of sheets. This is used to reduce Google Sheets API usage and latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#cache DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#cache}
  */
  readonly cache?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache;
  /**
  * The Secret containing the Google API JSON key file. The key used from the Secret is 'credentials'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#credentials_secret DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#credentials_secret}
  */
  readonly credentialsSecret: string;
  /**
  * Sheet ID of the spreadsheet, that contains the table mapping.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#metadata_sheet_id DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#metadata_sheet_id}
  */
  readonly metadataSheetId: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCacheToTerraform(struct!.cache),
    credentials_secret: cdktf.stringToTerraform(struct!.credentialsSecret),
    metadata_sheet_id: cdktf.stringToTerraform(struct!.metadataSheetId),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCacheToHclTerraform(struct!.cache),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache",
    },
    credentials_secret: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata_sheet_id: {
      value: cdktf.stringToHclTerraform(struct!.metadataSheetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cache?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cache = this._cache?.internalValue;
    }
    if (this._credentialsSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecret = this._credentialsSecret;
    }
    if (this._metadataSheetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadataSheetId = this._metadataSheetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cache.internalValue = undefined;
      this._credentialsSecret = undefined;
      this._metadataSheetId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cache.internalValue = value.cache;
      this._credentialsSecret = value.credentialsSecret;
      this._metadataSheetId = value.metadataSheetId;
    }
  }

  // cache - computed: false, optional: true, required: false
  private _cache = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCacheOutputReference(this, "cache");
  public get cache() {
    return this._cache;
  }
  public putCache(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetCache) {
    this._cache.internalValue = value;
  }
  public resetCache() {
    this._cache.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInput() {
    return this._cache.internalValue;
  }

  // credentials_secret - computed: false, optional: false, required: true
  private _credentialsSecret?: string; 
  public get credentialsSecret() {
    return this.getStringAttribute('credentials_secret');
  }
  public set credentialsSecret(value: string) {
    this._credentialsSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretInput() {
    return this._credentialsSecret;
  }

  // metadata_sheet_id - computed: false, optional: false, required: true
  private _metadataSheetId?: string; 
  public get metadataSheetId() {
    return this.getStringAttribute('metadata_sheet_id');
  }
  public set metadataSheetId(value: string) {
    this._metadataSheetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataSheetIdInput() {
    return this._metadataSheetId;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs {
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) providing information about the HDFS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_map}
  */
  readonly configMap: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore {
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) providing information about the Hive metastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_map}
  */
  readonly configMap: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastoreToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastoreToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope {
  /**
  * The listener volume scope allows Node and Service scopes to be inferred from the applicable listeners. This must correspond to Volume names in the Pod that mount Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#listener_volumes DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#listener_volumes}
  */
  readonly listenerVolumes?: string[];
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#node DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#pod DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#services DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScopeToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerVolumes),
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScopeToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerVolumes = this._listenerVolumes;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerVolumes = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerVolumes = value.listenerVolumes;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // listener_volumes - computed: false, optional: true, required: false
  private _listenerVolumes?: string[]; 
  public get listenerVolumes() {
    return this.getListAttribute('listener_volumes');
  }
  public set listenerVolumes(value: string[]) {
    this._listenerVolumes = value;
  }
  public resetListenerVolumes() {
    this._listenerVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerVolumesInput() {
    return this._listenerVolumes;
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#scope DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#secret_class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#secret_class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#web_pki DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCertToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#ca_cert DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#none DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#server DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#server}
  */
  readonly server?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#verification DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#access_style DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#credentials DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials;
  /**
  * Host of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#host DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#port DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#tls DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3 {
  /**
  * S3 connection definition as a resource. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#inline DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#reference DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3ToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3ToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3InlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3Inline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive {
  /**
  * Connection to an HDFS cluster. Please make sure that the underlying Hive metastore also has access to the HDFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#hdfs DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#hdfs}
  */
  readonly hdfs?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs;
  /**
  * Mandatory connection to a Hive Metastore, which will be used as a storage for metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#metastore DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#metastore}
  */
  readonly metastore: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore;
  /**
  * Connection to an S3 store. Please make sure that the underlying Hive metastore also has access to the S3 store. Learn more about S3 configuration in the [S3 concept docs](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#s3 DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdfs: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfsToTerraform(struct!.hdfs),
    metastore: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastoreToTerraform(struct!.metastore),
    s3: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3ToTerraform(struct!.s3),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdfs: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfsToHclTerraform(struct!.hdfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs",
    },
    metastore: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore",
    },
    s3: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfs = this._hdfs?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdfs.internalValue = undefined;
      this._metastore.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdfs.internalValue = value.hdfs;
      this._metastore.internalValue = value.metastore;
      this._s3.internalValue = value.s3;
    }
  }

  // hdfs - computed: false, optional: true, required: false
  private _hdfs = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfsOutputReference(this, "hdfs");
  public get hdfs() {
    return this._hdfs;
  }
  public putHdfs(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveHdfs) {
    this._hdfs.internalValue = value;
  }
  public resetHdfs() {
    this._hdfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsInput() {
    return this._hdfs.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs {
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) providing information about the HDFS cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_map}
  */
  readonly configMap: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore {
  /**
  * Name of the [discovery ConfigMap](https://docs.stackable.tech/home/nightly/concepts/service_discovery) providing information about the Hive metastore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_map DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_map}
  */
  readonly configMap: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastoreToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map: cdktf.stringToTerraform(struct!.configMap),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastoreToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map: {
      value: cdktf.stringToHclTerraform(struct!.configMap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastoreOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMap = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMap = value.configMap;
    }
  }

  // config_map - computed: false, optional: false, required: true
  private _configMap?: string; 
  public get configMap() {
    return this.getStringAttribute('config_map');
  }
  public set configMap(value: string) {
    this._configMap = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope {
  /**
  * The listener volume scope allows Node and Service scopes to be inferred from the applicable listeners. This must correspond to Volume names in the Pod that mount Listeners.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#listener_volumes DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#listener_volumes}
  */
  readonly listenerVolumes?: string[];
  /**
  * The node scope is resolved to the name of the Kubernetes Node object that the Pod is running on. This will typically be the DNS name of the node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#node DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#node}
  */
  readonly nodeAttribute?: boolean | cdktf.IResolvable;
  /**
  * The pod scope is resolved to the name of the Kubernetes Pod. This allows the secret to differentiate between StatefulSet replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#pod DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#pod}
  */
  readonly pod?: boolean | cdktf.IResolvable;
  /**
  * The service scope allows Pod objects to specify custom scopes. This should typically correspond to Service objects that the Pod participates in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#services DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#services}
  */
  readonly services?: string[];
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScopeToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listener_volumes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.listenerVolumes),
    node: cdktf.booleanToTerraform(struct!.nodeAttribute),
    pod: cdktf.booleanToTerraform(struct!.pod),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScopeToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listener_volumes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.listenerVolumes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    node: {
      value: cdktf.booleanToHclTerraform(struct!.nodeAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pod: {
      value: cdktf.booleanToHclTerraform(struct!.pod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScopeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listenerVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.listenerVolumes = this._listenerVolumes;
    }
    if (this._node !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAttribute = this._node;
    }
    if (this._pod !== undefined) {
      hasAnyValues = true;
      internalValueResult.pod = this._pod;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._listenerVolumes = undefined;
      this._node = undefined;
      this._pod = undefined;
      this._services = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._listenerVolumes = value.listenerVolumes;
      this._node = value.nodeAttribute;
      this._pod = value.pod;
      this._services = value.services;
    }
  }

  // listener_volumes - computed: false, optional: true, required: false
  private _listenerVolumes?: string[]; 
  public get listenerVolumes() {
    return this.getListAttribute('listener_volumes');
  }
  public set listenerVolumes(value: string[]) {
    this._listenerVolumes = value;
  }
  public resetListenerVolumes() {
    this._listenerVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerVolumesInput() {
    return this._listenerVolumes;
  }

  // node - computed: false, optional: true, required: false
  private _node?: boolean | cdktf.IResolvable; 
  public get nodeAttribute() {
    return this.getBooleanAttribute('node');
  }
  public set nodeAttribute(value: boolean | cdktf.IResolvable) {
    this._node = value;
  }
  public resetNodeAttribute() {
    this._node = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAttributeInput() {
    return this._node;
  }

  // pod - computed: false, optional: true, required: false
  private _pod?: boolean | cdktf.IResolvable; 
  public get pod() {
    return this.getBooleanAttribute('pod');
  }
  public set pod(value: boolean | cdktf.IResolvable) {
    this._pod = value;
  }
  public resetPod() {
    this._pod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podInput() {
    return this._pod;
  }

  // services - computed: false, optional: true, required: false
  private _services?: string[]; 
  public get services() {
    return this.getListAttribute('services');
  }
  public set services(value: string[]) {
    this._services = value;
  }
  public resetServices() {
    this._services = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials {
  /**
  * [Scope](https://docs.stackable.tech/home/nightly/secret-operator/scope) of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#scope DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#scope}
  */
  readonly scope?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope;
  /**
  * [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) containing the LDAP bind credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#secret_class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#secret_class}
  */
  readonly secretClass: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScopeToTerraform(struct!.scope),
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScopeToHclTerraform(struct!.scope),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope",
    },
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope?.internalValue;
    }
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope.internalValue = undefined;
      this._secretClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope.internalValue = value.scope;
      this._secretClass = value.secretClass;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScopeOutputReference(this, "scope");
  public get scope() {
    return this._scope;
  }
  public putScope(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsScope) {
    this._scope.internalValue = value;
  }
  public resetScope() {
    this._scope.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope.internalValue;
  }

  // secret_class - computed: false, optional: false, required: true
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert {
  /**
  * Name of the [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) which will provide the CA certificate. Note that a SecretClass does not need to have a key but can also work with just a CA certificate, so if you got provided with a CA cert but don't have access to the key you can still use this method.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#secret_class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#secret_class}
  */
  readonly secretClass?: string;
  /**
  * Use TLS and the CA certificates trusted by the common web browsers to verify the server. This can be useful when you e.g. use public AWS S3 or other public available services.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#web_pki DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#web_pki}
  */
  readonly webPki?: { [key: string]: string };
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCertToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    secret_class: cdktf.stringToTerraform(struct!.secretClass),
    web_pki: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.webPki),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCertToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    secret_class: {
      value: cdktf.stringToHclTerraform(struct!.secretClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_pki: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.webPki),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._secretClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretClass = this._secretClass;
    }
    if (this._webPki !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPki = this._webPki;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._secretClass = undefined;
      this._webPki = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._secretClass = value.secretClass;
      this._webPki = value.webPki;
    }
  }

  // secret_class - computed: false, optional: true, required: false
  private _secretClass?: string; 
  public get secretClass() {
    return this.getStringAttribute('secret_class');
  }
  public set secretClass(value: string) {
    this._secretClass = value;
  }
  public resetSecretClass() {
    this._secretClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretClassInput() {
    return this._secretClass;
  }

  // web_pki - computed: false, optional: true, required: false
  private _webPki?: { [key: string]: string }; 
  public get webPki() {
    return this.getStringMapAttribute('web_pki');
  }
  public set webPki(value: { [key: string]: string }) {
    this._webPki = value;
  }
  public resetWebPki() {
    this._webPki = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPkiInput() {
    return this._webPki;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer {
  /**
  * CA cert to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#ca_cert DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#ca_cert}
  */
  readonly caCert: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_cert: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCertToTerraform(struct!.caCert),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_cert: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCertToHclTerraform(struct!.caCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCert = this._caCert?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caCert.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caCert.internalValue = value.caCert;
    }
  }

  // ca_cert - computed: false, optional: false, required: true
  private _caCert = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCertOutputReference(this, "ca_cert");
  public get caCert() {
    return this._caCert;
  }
  public putCaCert(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerCaCert) {
    this._caCert.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertInput() {
    return this._caCert.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification {
  /**
  * Use TLS but don't verify certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#none DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#none}
  */
  readonly none?: { [key: string]: string };
  /**
  * Use TLS and a CA certificate to verify the server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#server DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#server}
  */
  readonly server?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.none),
    server: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerToTerraform(struct!.server),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.none),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    server: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerToHclTerraform(struct!.server),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._server?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._none = undefined;
      this._server.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._none = value.none;
      this._server.internalValue = value.server;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: { [key: string]: string }; 
  public get none() {
    return this.getStringMapAttribute('none');
  }
  public set none(value: { [key: string]: string }) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // server - computed: false, optional: true, required: false
  private _server = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServerOutputReference(this, "server");
  public get server() {
    return this._server;
  }
  public putServer(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationServer) {
    this._server.internalValue = value;
  }
  public resetServer() {
    this._server.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls {
  /**
  * The verification method used to verify the certificates of the server and/or the client.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#verification DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#verification}
  */
  readonly verification: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    verification: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationToTerraform(struct!.verification),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    verification: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationToHclTerraform(struct!.verification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._verification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.verification = this._verification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._verification.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._verification.internalValue = value.verification;
    }
  }

  // verification - computed: false, optional: false, required: true
  private _verification = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerificationOutputReference(this, "verification");
  public get verification() {
    return this._verification;
  }
  public putVerification(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsVerification) {
    this._verification.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationInput() {
    return this._verification.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline {
  /**
  * Which access style to use. Defaults to virtual hosted-style as most of the data products out there. Have a look at the [AWS documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/VirtualHosting.html).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#access_style DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#access_style}
  */
  readonly accessStyle?: string;
  /**
  * If the S3 uses authentication you have to specify you S3 credentials. In the most cases a [SecretClass](https://docs.stackable.tech/home/nightly/secret-operator/secretclass) providing 'accessKey' and 'secretKey' is sufficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#credentials DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#credentials}
  */
  readonly credentials?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials;
  /**
  * Host of the S3 server without any protocol or port. For example: 'west1.my-cloud.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#host DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#host}
  */
  readonly host: string;
  /**
  * Port the S3 server listens on. If not specified the product will determine the port to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#port DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#port}
  */
  readonly port?: number;
  /**
  * Use a TLS connection. If not specified no TLS will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#tls DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#tls}
  */
  readonly tls?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_style: cdktf.stringToTerraform(struct!.accessStyle),
    credentials: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsToTerraform(struct!.credentials),
    host: cdktf.stringToTerraform(struct!.host),
    port: cdktf.numberToTerraform(struct!.port),
    tls: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsToTerraform(struct!.tls),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_style: {
      value: cdktf.stringToHclTerraform(struct!.accessStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsToHclTerraform(struct!.credentials),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tls: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessStyle = this._accessStyle;
    }
    if (this._credentials?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentials = this._credentials?.internalValue;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessStyle = undefined;
      this._credentials.internalValue = undefined;
      this._host = undefined;
      this._port = undefined;
      this._tls.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessStyle = value.accessStyle;
      this._credentials.internalValue = value.credentials;
      this._host = value.host;
      this._port = value.port;
      this._tls.internalValue = value.tls;
    }
  }

  // access_style - computed: false, optional: true, required: false
  private _accessStyle?: string; 
  public get accessStyle() {
    return this.getStringAttribute('access_style');
  }
  public set accessStyle(value: string) {
    this._accessStyle = value;
  }
  public resetAccessStyle() {
    this._accessStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessStyleInput() {
    return this._accessStyle;
  }

  // credentials - computed: false, optional: true, required: false
  private _credentials = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentialsOutputReference(this, "credentials");
  public get credentials() {
    return this._credentials;
  }
  public putCredentials(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineCredentials) {
    this._credentials.internalValue = value;
  }
  public resetCredentials() {
    this._credentials.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsInput() {
    return this._credentials.internalValue;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3 {
  /**
  * S3 connection definition as a resource. Learn more on the [S3 concept documentation](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#inline DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#inline}
  */
  readonly inline?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#reference DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#reference}
  */
  readonly reference?: string;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3ToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineToTerraform(struct!.inline),
    reference: cdktf.stringToTerraform(struct!.reference),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3ToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineToHclTerraform(struct!.inline),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline",
    },
    reference: {
      value: cdktf.stringToHclTerraform(struct!.reference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inline?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inline = this._inline?.internalValue;
    }
    if (this._reference !== undefined) {
      hasAnyValues = true;
      internalValueResult.reference = this._reference;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._inline.internalValue = undefined;
      this._reference = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._inline.internalValue = value.inline;
      this._reference = value.reference;
    }
  }

  // inline - computed: false, optional: true, required: false
  private _inline = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3InlineOutputReference(this, "inline");
  public get inline() {
    return this._inline;
  }
  public putInline(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3Inline) {
    this._inline.internalValue = value;
  }
  public resetInline() {
    this._inline.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineInput() {
    return this._inline.internalValue;
  }

  // reference - computed: false, optional: true, required: false
  private _reference?: string; 
  public get reference() {
    return this.getStringAttribute('reference');
  }
  public set reference(value: string) {
    this._reference = value;
  }
  public resetReference() {
    this._reference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get referenceInput() {
    return this._reference;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg {
  /**
  * Connection to an HDFS cluster. Please make sure that the underlying Hive metastore also has access to the HDFS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#hdfs DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#hdfs}
  */
  readonly hdfs?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs;
  /**
  * Mandatory connection to a Hive Metastore, which will be used as a storage for metadata.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#metastore DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#metastore}
  */
  readonly metastore: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore;
  /**
  * Connection to an S3 store. Please make sure that the underlying Hive metastore also has access to the S3 store. Learn more about S3 configuration in the [S3 concept docs](https://docs.stackable.tech/home/nightly/concepts/s3).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#s3 DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#s3}
  */
  readonly s3?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hdfs: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfsToTerraform(struct!.hdfs),
    metastore: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastoreToTerraform(struct!.metastore),
    s3: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3ToTerraform(struct!.s3),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hdfs: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfsToHclTerraform(struct!.hdfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs",
    },
    metastore: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastoreToHclTerraform(struct!.metastore),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore",
    },
    s3: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3ToHclTerraform(struct!.s3),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hdfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfs = this._hdfs?.internalValue;
    }
    if (this._metastore?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metastore = this._metastore?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hdfs.internalValue = undefined;
      this._metastore.internalValue = undefined;
      this._s3.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hdfs.internalValue = value.hdfs;
      this._metastore.internalValue = value.metastore;
      this._s3.internalValue = value.s3;
    }
  }

  // hdfs - computed: false, optional: true, required: false
  private _hdfs = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfsOutputReference(this, "hdfs");
  public get hdfs() {
    return this._hdfs;
  }
  public putHdfs(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergHdfs) {
    this._hdfs.internalValue = value;
  }
  public resetHdfs() {
    this._hdfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsInput() {
    return this._hdfs.internalValue;
  }

  // metastore - computed: false, optional: false, required: true
  private _metastore = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastoreOutputReference(this, "metastore");
  public get metastore() {
    return this._metastore;
  }
  public putMetastore(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergMetastore) {
    this._metastore.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metastoreInput() {
    return this._metastore.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3OutputReference(this, "s3");
  public get s3() {
    return this._s3;
  }
  public putS3(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergS3) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector {
  /**
  * A [Black Hole](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/black-hole) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#black_hole DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#black_hole}
  */
  readonly blackHole?: { [key: string]: string };
  /**
  * An [Delta Lake](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/delta-lake) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#delta_lake DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#delta_lake}
  */
  readonly deltaLake?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake;
  /**
  * A [generic](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/generic) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#generic DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#generic}
  */
  readonly generic?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric;
  /**
  * A [Google sheets](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/google-sheets) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#google_sheet DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#google_sheet}
  */
  readonly googleSheet?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet;
  /**
  * An [Apache Hive](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/hive) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#hive DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#hive}
  */
  readonly hive?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive;
  /**
  * An [Apache Iceberg](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/iceberg) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#iceberg DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#iceberg}
  */
  readonly iceberg?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg;
  /**
  * A [TPC-DS](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/tpcds) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#tpcds DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#tpcds}
  */
  readonly tpcds?: { [key: string]: string };
  /**
  * A [TPC-H](https://docs.stackable.tech/home/nightly/trino/usage-guide/catalogs/tpch) connector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#tpch DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#tpch}
  */
  readonly tpch?: { [key: string]: string };
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    black_hole: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.blackHole),
    delta_lake: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeToTerraform(struct!.deltaLake),
    generic: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericToTerraform(struct!.generic),
    google_sheet: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetToTerraform(struct!.googleSheet),
    hive: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveToTerraform(struct!.hive),
    iceberg: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergToTerraform(struct!.iceberg),
    tpcds: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tpcds),
    tpch: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tpch),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    black_hole: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.blackHole),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    delta_lake: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeToHclTerraform(struct!.deltaLake),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake",
    },
    generic: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericToHclTerraform(struct!.generic),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric",
    },
    google_sheet: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetToHclTerraform(struct!.googleSheet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet",
    },
    hive: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveToHclTerraform(struct!.hive),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive",
    },
    iceberg: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergToHclTerraform(struct!.iceberg),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg",
    },
    tpcds: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tpcds),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tpch: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tpch),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blackHole !== undefined) {
      hasAnyValues = true;
      internalValueResult.blackHole = this._blackHole;
    }
    if (this._deltaLake?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deltaLake = this._deltaLake?.internalValue;
    }
    if (this._generic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.generic = this._generic?.internalValue;
    }
    if (this._googleSheet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.googleSheet = this._googleSheet?.internalValue;
    }
    if (this._hive?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hive = this._hive?.internalValue;
    }
    if (this._iceberg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.iceberg = this._iceberg?.internalValue;
    }
    if (this._tpcds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpcds = this._tpcds;
    }
    if (this._tpch !== undefined) {
      hasAnyValues = true;
      internalValueResult.tpch = this._tpch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blackHole = undefined;
      this._deltaLake.internalValue = undefined;
      this._generic.internalValue = undefined;
      this._googleSheet.internalValue = undefined;
      this._hive.internalValue = undefined;
      this._iceberg.internalValue = undefined;
      this._tpcds = undefined;
      this._tpch = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blackHole = value.blackHole;
      this._deltaLake.internalValue = value.deltaLake;
      this._generic.internalValue = value.generic;
      this._googleSheet.internalValue = value.googleSheet;
      this._hive.internalValue = value.hive;
      this._iceberg.internalValue = value.iceberg;
      this._tpcds = value.tpcds;
      this._tpch = value.tpch;
    }
  }

  // black_hole - computed: false, optional: true, required: false
  private _blackHole?: { [key: string]: string }; 
  public get blackHole() {
    return this.getStringMapAttribute('black_hole');
  }
  public set blackHole(value: { [key: string]: string }) {
    this._blackHole = value;
  }
  public resetBlackHole() {
    this._blackHole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blackHoleInput() {
    return this._blackHole;
  }

  // delta_lake - computed: false, optional: true, required: false
  private _deltaLake = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLakeOutputReference(this, "delta_lake");
  public get deltaLake() {
    return this._deltaLake;
  }
  public putDeltaLake(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorDeltaLake) {
    this._deltaLake.internalValue = value;
  }
  public resetDeltaLake() {
    this._deltaLake.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deltaLakeInput() {
    return this._deltaLake.internalValue;
  }

  // generic - computed: false, optional: true, required: false
  private _generic = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGenericOutputReference(this, "generic");
  public get generic() {
    return this._generic;
  }
  public putGeneric(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGeneric) {
    this._generic.internalValue = value;
  }
  public resetGeneric() {
    this._generic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genericInput() {
    return this._generic.internalValue;
  }

  // google_sheet - computed: false, optional: true, required: false
  private _googleSheet = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheetOutputReference(this, "google_sheet");
  public get googleSheet() {
    return this._googleSheet;
  }
  public putGoogleSheet(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorGoogleSheet) {
    this._googleSheet.internalValue = value;
  }
  public resetGoogleSheet() {
    this._googleSheet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleSheetInput() {
    return this._googleSheet.internalValue;
  }

  // hive - computed: false, optional: true, required: false
  private _hive = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHiveOutputReference(this, "hive");
  public get hive() {
    return this._hive;
  }
  public putHive(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorHive) {
    this._hive.internalValue = value;
  }
  public resetHive() {
    this._hive.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveInput() {
    return this._hive.internalValue;
  }

  // iceberg - computed: false, optional: true, required: false
  private _iceberg = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIcebergOutputReference(this, "iceberg");
  public get iceberg() {
    return this._iceberg;
  }
  public putIceberg(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorIceberg) {
    this._iceberg.internalValue = value;
  }
  public resetIceberg() {
    this._iceberg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icebergInput() {
    return this._iceberg.internalValue;
  }

  // tpcds - computed: false, optional: true, required: false
  private _tpcds?: { [key: string]: string }; 
  public get tpcds() {
    return this.getStringMapAttribute('tpcds');
  }
  public set tpcds(value: { [key: string]: string }) {
    this._tpcds = value;
  }
  public resetTpcds() {
    this._tpcds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpcdsInput() {
    return this._tpcds;
  }

  // tpch - computed: false, optional: true, required: false
  private _tpch?: { [key: string]: string }; 
  public get tpch() {
    return this.getStringMapAttribute('tpch');
  }
  public set tpch(value: { [key: string]: string }) {
    this._tpch = value;
  }
  public resetTpch() {
    this._tpch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tpchInput() {
    return this._tpch;
  }
}
export interface DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec {
  /**
  * The 'configOverrides' allow overriding arbitrary Trino settings. For example, for Hive you could add 'hive.metastore.username: trino'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#config_overrides DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#config_overrides}
  */
  readonly configOverrides?: { [key: string]: string };
  /**
  * The 'connector' defines which connector is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#connector DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest#connector}
  */
  readonly connector: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector;
}

export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecToTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_overrides: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.configOverrides),
    connector: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorToTerraform(struct!.connector),
  }
}


export function dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_overrides: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.configOverrides),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    connector: {
      value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorToHclTerraform(struct!.connector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configOverrides !== undefined) {
      hasAnyValues = true;
      internalValueResult.configOverrides = this._configOverrides;
    }
    if (this._connector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connector = this._connector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configOverrides = undefined;
      this._connector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configOverrides = value.configOverrides;
      this._connector.internalValue = value.connector;
    }
  }

  // config_overrides - computed: false, optional: true, required: false
  private _configOverrides?: { [key: string]: string }; 
  public get configOverrides() {
    return this.getStringMapAttribute('config_overrides');
  }
  public set configOverrides(value: { [key: string]: string }) {
    this._configOverrides = value;
  }
  public resetConfigOverrides() {
    this._configOverrides = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configOverridesInput() {
    return this._configOverrides;
  }

  // connector - computed: false, optional: false, required: true
  private _connector = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnectorOutputReference(this, "connector");
  public get connector() {
    return this._connector;
  }
  public putConnector(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecConnector) {
    this._connector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorInput() {
    return this._connector.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest k8s_trino_stackable_tech_trino_catalog_v1alpha1_manifest}
*/
export class DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_trino_stackable_tech_trino_catalog_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8STrinoStackableTechTrinoCatalogV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_trino_stackable_tech_trino_catalog_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/trino_stackable_tech_trino_catalog_v1alpha1_manifest k8s_trino_stackable_tech_trino_catalog_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_trino_stackable_tech_trino_catalog_v1alpha1_manifest',
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
  private _metadata = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec) {
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
      metadata: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8STrinoStackableTechTrinoCatalogV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
