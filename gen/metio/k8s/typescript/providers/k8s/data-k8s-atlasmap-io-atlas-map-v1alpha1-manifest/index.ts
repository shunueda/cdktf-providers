// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#metadata DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata;
  /**
  * AtlasMapSpec defines the desired state of AtlasMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#spec DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec;
}
export interface DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#annotations DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#labels DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#name DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#namespace DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec {
  /**
  * The amount of CPU to limit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#limit_cpu DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#limit_cpu}
  */
  readonly limitCpu?: string;
  /**
  * The amount of memory to request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#limit_memory DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#limit_memory}
  */
  readonly limitMemory?: string;
  /**
  * Replicas determines the desired number of running AtlasMap pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#replicas DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * The amount of CPU to request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#request_cpu DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#request_cpu}
  */
  readonly requestCpu?: string;
  /**
  * The amount of memory to request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#request_memory DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#request_memory}
  */
  readonly requestMemory?: string;
  /**
  * RouteHostName sets the host name to use on the Ingress or OpenShift Route
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#route_host_name DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#route_host_name}
  */
  readonly routeHostName?: string;
  /**
  * Version sets the version of the container image used for AtlasMap
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#version DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpecToTerraform(struct?: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limit_cpu: cdktf.stringToTerraform(struct!.limitCpu),
    limit_memory: cdktf.stringToTerraform(struct!.limitMemory),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    request_cpu: cdktf.stringToTerraform(struct!.requestCpu),
    request_memory: cdktf.stringToTerraform(struct!.requestMemory),
    route_host_name: cdktf.stringToTerraform(struct!.routeHostName),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limit_cpu: {
      value: cdktf.stringToHclTerraform(struct!.limitCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    limit_memory: {
      value: cdktf.stringToHclTerraform(struct!.limitMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    request_cpu: {
      value: cdktf.stringToHclTerraform(struct!.requestCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_memory: {
      value: cdktf.stringToHclTerraform(struct!.requestMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_host_name: {
      value: cdktf.stringToHclTerraform(struct!.routeHostName),
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

export class DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limitCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitCpu = this._limitCpu;
    }
    if (this._limitMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.limitMemory = this._limitMemory;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._requestCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestCpu = this._requestCpu;
    }
    if (this._requestMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestMemory = this._requestMemory;
    }
    if (this._routeHostName !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeHostName = this._routeHostName;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limitCpu = undefined;
      this._limitMemory = undefined;
      this._replicas = undefined;
      this._requestCpu = undefined;
      this._requestMemory = undefined;
      this._routeHostName = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limitCpu = value.limitCpu;
      this._limitMemory = value.limitMemory;
      this._replicas = value.replicas;
      this._requestCpu = value.requestCpu;
      this._requestMemory = value.requestMemory;
      this._routeHostName = value.routeHostName;
      this._version = value.version;
    }
  }

  // limit_cpu - computed: false, optional: true, required: false
  private _limitCpu?: string; 
  public get limitCpu() {
    return this.getStringAttribute('limit_cpu');
  }
  public set limitCpu(value: string) {
    this._limitCpu = value;
  }
  public resetLimitCpu() {
    this._limitCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitCpuInput() {
    return this._limitCpu;
  }

  // limit_memory - computed: false, optional: true, required: false
  private _limitMemory?: string; 
  public get limitMemory() {
    return this.getStringAttribute('limit_memory');
  }
  public set limitMemory(value: string) {
    this._limitMemory = value;
  }
  public resetLimitMemory() {
    this._limitMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemoryInput() {
    return this._limitMemory;
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

  // request_cpu - computed: false, optional: true, required: false
  private _requestCpu?: string; 
  public get requestCpu() {
    return this.getStringAttribute('request_cpu');
  }
  public set requestCpu(value: string) {
    this._requestCpu = value;
  }
  public resetRequestCpu() {
    this._requestCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestCpuInput() {
    return this._requestCpu;
  }

  // request_memory - computed: false, optional: true, required: false
  private _requestMemory?: string; 
  public get requestMemory() {
    return this.getStringAttribute('request_memory');
  }
  public set requestMemory(value: string) {
    this._requestMemory = value;
  }
  public resetRequestMemory() {
    this._requestMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestMemoryInput() {
    return this._requestMemory;
  }

  // route_host_name - computed: false, optional: true, required: false
  private _routeHostName?: string; 
  public get routeHostName() {
    return this.getStringAttribute('route_host_name');
  }
  public set routeHostName(value: string) {
    this._routeHostName = value;
  }
  public resetRouteHostName() {
    this._routeHostName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeHostNameInput() {
    return this._routeHostName;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest k8s_atlasmap_io_atlas_map_v1alpha1_manifest}
*/
export class DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_atlasmap_io_atlas_map_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAtlasmapIoAtlasMapV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_atlasmap_io_atlas_map_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/atlasmap_io_atlas_map_v1alpha1_manifest k8s_atlasmap_io_atlas_map_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_atlasmap_io_atlas_map_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3',
        providerVersionConstraint: '2025.11.3'
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
  private _metadata = new DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec) {
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
      metadata: dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAtlasmapIoAtlasMapV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
