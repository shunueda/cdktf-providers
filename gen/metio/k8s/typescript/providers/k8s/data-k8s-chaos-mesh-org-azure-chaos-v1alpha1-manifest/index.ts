// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#metadata DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata;
  /**
  * AzureChaosSpec is the content of the specification for an AzureChaos
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#spec DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec;
}
export interface DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#annotations DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#labels DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#name DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#namespace DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec {
  /**
  * Action defines the specific azure chaos action. Supported action: vm-stop / vm-restart / disk-detach Default action: vm-stop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#action DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * DiskName indicates the name of the disk. Needed in disk-detach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#disk_name DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#disk_name}
  */
  readonly diskName?: string;
  /**
  * Duration represents the duration of the chaos action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#duration DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * LUN indicates the Logical Unit Number of the data disk. Needed in disk-detach.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#lun DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#lun}
  */
  readonly lun?: number;
  /**
  * RemoteCluster represents the remote cluster where the chaos will be deployed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#remote_cluster DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#remote_cluster}
  */
  readonly remoteCluster?: string;
  /**
  * ResourceGroupName defines the name of ResourceGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#resource_group_name DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#resource_group_name}
  */
  readonly resourceGroupName: string;
  /**
  * SecretName defines the name of kubernetes secret. It is used for Azure credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#secret_name DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#secret_name}
  */
  readonly secretName?: string;
  /**
  * SubscriptionID defines the id of Azure subscription.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#subscription_id DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#subscription_id}
  */
  readonly subscriptionId: string;
  /**
  * VMName defines the name of Virtual Machine
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#vm_name DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest#vm_name}
  */
  readonly vmName: string;
}

export function dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpecToTerraform(struct?: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    disk_name: cdktf.stringToTerraform(struct!.diskName),
    duration: cdktf.stringToTerraform(struct!.duration),
    lun: cdktf.numberToTerraform(struct!.lun),
    remote_cluster: cdktf.stringToTerraform(struct!.remoteCluster),
    resource_group_name: cdktf.stringToTerraform(struct!.resourceGroupName),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    subscription_id: cdktf.stringToTerraform(struct!.subscriptionId),
    vm_name: cdktf.stringToTerraform(struct!.vmName),
  }
}


export function dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec | cdktf.IResolvable): any {
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
    disk_name: {
      value: cdktf.stringToHclTerraform(struct!.diskName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lun: {
      value: cdktf.numberToHclTerraform(struct!.lun),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_cluster: {
      value: cdktf.stringToHclTerraform(struct!.remoteCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroupName),
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
    subscription_id: {
      value: cdktf.stringToHclTerraform(struct!.subscriptionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_name: {
      value: cdktf.stringToHclTerraform(struct!.vmName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._diskName !== undefined) {
      hasAnyValues = true;
      internalValueResult.diskName = this._diskName;
    }
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._lun !== undefined) {
      hasAnyValues = true;
      internalValueResult.lun = this._lun;
    }
    if (this._remoteCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteCluster = this._remoteCluster;
    }
    if (this._resourceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroupName = this._resourceGroupName;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._subscriptionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subscriptionId = this._subscriptionId;
    }
    if (this._vmName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmName = this._vmName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._diskName = undefined;
      this._duration = undefined;
      this._lun = undefined;
      this._remoteCluster = undefined;
      this._resourceGroupName = undefined;
      this._secretName = undefined;
      this._subscriptionId = undefined;
      this._vmName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._diskName = value.diskName;
      this._duration = value.duration;
      this._lun = value.lun;
      this._remoteCluster = value.remoteCluster;
      this._resourceGroupName = value.resourceGroupName;
      this._secretName = value.secretName;
      this._subscriptionId = value.subscriptionId;
      this._vmName = value.vmName;
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

  // disk_name - computed: false, optional: true, required: false
  private _diskName?: string; 
  public get diskName() {
    return this.getStringAttribute('disk_name');
  }
  public set diskName(value: string) {
    this._diskName = value;
  }
  public resetDiskName() {
    this._diskName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskNameInput() {
    return this._diskName;
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

  // lun - computed: false, optional: true, required: false
  private _lun?: number; 
  public get lun() {
    return this.getNumberAttribute('lun');
  }
  public set lun(value: number) {
    this._lun = value;
  }
  public resetLun() {
    this._lun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lunInput() {
    return this._lun;
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

  // resource_group_name - computed: false, optional: false, required: true
  private _resourceGroupName?: string; 
  public get resourceGroupName() {
    return this.getStringAttribute('resource_group_name');
  }
  public set resourceGroupName(value: string) {
    this._resourceGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupNameInput() {
    return this._resourceGroupName;
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

  // subscription_id - computed: false, optional: false, required: true
  private _subscriptionId?: string; 
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }
  public set subscriptionId(value: string) {
    this._subscriptionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionIdInput() {
    return this._subscriptionId;
  }

  // vm_name - computed: false, optional: false, required: true
  private _vmName?: string; 
  public get vmName() {
    return this.getStringAttribute('vm_name');
  }
  public set vmName(value: string) {
    this._vmName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNameInput() {
    return this._vmName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest k8s_chaos_mesh_org_azure_chaos_v1alpha1_manifest}
*/
export class DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_chaos_mesh_org_azure_chaos_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SChaosMeshOrgAzureChaosV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_chaos_mesh_org_azure_chaos_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/chaos_mesh_org_azure_chaos_v1alpha1_manifest k8s_chaos_mesh_org_azure_chaos_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_chaos_mesh_org_azure_chaos_v1alpha1_manifest',
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
  private _metadata = new DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec) {
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
      metadata: dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SChaosMeshOrgAzureChaosV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
