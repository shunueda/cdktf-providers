// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata;
  /**
  * GCPChaosSpec is the content of the specification for a GCPChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec {
  /**
  * Action defines the specific gcp chaos action. Supported action: node-stop / node-reset / disk-loss Default action: node-stop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#action DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * The device name of disks to detach. Needed in disk-loss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#device_names DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#device_names}
  */
  readonly deviceNames?: string[];
  /**
  * Duration represents the duration of the chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Instance defines the name of the instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#instance DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#instance}
  */
  readonly instance: string;
  /**
  * Project defines the ID of gcp project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#project DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#project}
  */
  readonly project: string;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * SecretName defines the name of kubernetes secret. It is used for GCP credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#secret_name DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * Zone defines the zone of gcp project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#zone DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest#zone}
  */
  readonly zone: string;
}

export function dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    device_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deviceNames),
    duration: cdktf.stringToTerraform(struct!.duration),
    instance: cdktf.stringToTerraform(struct!.instance),
    project: cdktf.stringToTerraform(struct!.project),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deviceNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance: {
      value: cdktf.stringToHclTerraform(struct!.instance),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_name: {
      value: cdktf.stringToHclTerraform(struct!.secretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zone: {
      value: cdktf.stringToHclTerraform(struct!.zone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._deviceNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceNames = this._deviceNames;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._instance !== undefined) {
      hasAnyValues = true;
      internalValueResult.instance = this._instance;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._deviceNames = undefined;
      this._duration = undefined;
      this._instance = undefined;
      this._project = undefined;
      this._remoteCluster = undefined;
      this._secretName = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._deviceNames = value.deviceNames;
      this._duration = value.duration;
      this._instance = value.instance;
      this._project = value.project;
      this._remoteCluster = value.remoteCluster;
      this._secretName = value.secretName;
      this._zone = value.zone;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // device_names - computed: false, optional: true, required: false
  private _deviceNames?: string[]; 
  public get deviceNames() {
    return this.getListAttribute('device_names');
  }
  public set deviceNames(value: string[]) {
    this._deviceNames = value;
  }
  public resetDeviceNames() {
    this._deviceNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNamesInput() {
    return this._deviceNames;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // instance - computed: false, optional: false, required: true
  private _instance?: string; 
  public get instance() {
    return this.getStringAttribute('instance');
  }
  public set instance(value: string) {
    this._instance = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceInput() {
    return this._instance;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // remote_cluster - computed: false, optional: true, required: false
  private _remoteCluster?: string; 
  public get remoteCluster() {
    return this.getStringAttribute('remote_cluster');
  }
  public set remoteCluster(value: string) {
    this._remoteCluster = value;
  }
  public resetRemoteCluster() {
    this._remoteCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteClusterInput() {
    return this._remoteCluster;
  }

  // secret_name - computed: false, optional: true, required: false
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  public resetSecretName() {
    this._secretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest k8s_chaos_mesh_org_gcp_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_gcp_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgGcpChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_gcp_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/chaos_mesh_org_gcp_chaos_v1alpha1_manifest k8s_chaos_mesh_org_gcp_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_gcp_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgGcpChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
