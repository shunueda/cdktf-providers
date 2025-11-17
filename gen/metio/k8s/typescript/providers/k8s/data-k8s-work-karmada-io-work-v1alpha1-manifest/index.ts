// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SWorkKarmadaIoWorkV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#metadata DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata;
  /**
  * Spec represents the desired behavior of Work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#spec DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec;
}
export interface DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#annotations DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#labels DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#name DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#namespace DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload {
  /**
  * Manifests represents a list of Kubernetes resources to be deployed on the managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#manifests DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#manifests}
  */
  readonly manifests?: { [key: string]: string }[] | cdktf.IResolvable;
}

export function dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkloadToTerraform(struct?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    manifests: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.manifests),
  }
}


export function dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkloadToHclTerraform(struct?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    manifests: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.manifests),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkloadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._manifests !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifests = this._manifests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._manifests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._manifests = value.manifests;
    }
  }

  // manifests - computed: false, optional: true, required: false
  private _manifests?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get manifests() {
    return this.interpolationForAttribute('manifests');
  }
  public set manifests(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._manifests = value;
  }
  public resetManifests() {
    this._manifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests;
  }
}
export interface DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec {
  /**
  * PreserveResourcesOnDeletion controls whether resources should be preserved on the member cluster when the Work object is deleted. If set to true, resources will be preserved on the member cluster. Default is false, which means resources will be deleted along with the Work object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#preserve_resources_on_deletion DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#preserve_resources_on_deletion}
  */
  readonly preserveResourcesOnDeletion?: boolean | cdktf.IResolvable;
  /**
  * SuspendDispatching controls whether dispatching should be suspended, nil means not suspend. Note: true means stop propagating to the corresponding member cluster, and does not prevent status collection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#suspend_dispatching DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#suspend_dispatching}
  */
  readonly suspendDispatching?: boolean | cdktf.IResolvable;
  /**
  * Workload represents the manifest workload to be deployed on managed cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#workload DataK8SWorkKarmadaIoWorkV1Alpha1Manifest#workload}
  */
  readonly workload?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload;
}

export function dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecToTerraform(struct?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preserve_resources_on_deletion: cdktf.booleanToTerraform(struct!.preserveResourcesOnDeletion),
    suspend_dispatching: cdktf.booleanToTerraform(struct!.suspendDispatching),
    workload: dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkloadToTerraform(struct!.workload),
  }
}


export function dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preserve_resources_on_deletion: {
      value: cdktf.booleanToHclTerraform(struct!.preserveResourcesOnDeletion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    suspend_dispatching: {
      value: cdktf.booleanToHclTerraform(struct!.suspendDispatching),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    workload: {
      value: dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkloadToHclTerraform(struct!.workload),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preserveResourcesOnDeletion !== undefined) {
      hasAnyValues = true;
      internalValueResult.preserveResourcesOnDeletion = this._preserveResourcesOnDeletion;
    }
    if (this._suspendDispatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspendDispatching = this._suspendDispatching;
    }
    if (this._workload?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.workload = this._workload?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preserveResourcesOnDeletion = undefined;
      this._suspendDispatching = undefined;
      this._workload.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preserveResourcesOnDeletion = value.preserveResourcesOnDeletion;
      this._suspendDispatching = value.suspendDispatching;
      this._workload.internalValue = value.workload;
    }
  }

  // preserve_resources_on_deletion - computed: false, optional: true, required: false
  private _preserveResourcesOnDeletion?: boolean | cdktf.IResolvable; 
  public get preserveResourcesOnDeletion() {
    return this.getBooleanAttribute('preserve_resources_on_deletion');
  }
  public set preserveResourcesOnDeletion(value: boolean | cdktf.IResolvable) {
    this._preserveResourcesOnDeletion = value;
  }
  public resetPreserveResourcesOnDeletion() {
    this._preserveResourcesOnDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preserveResourcesOnDeletionInput() {
    return this._preserveResourcesOnDeletion;
  }

  // suspend_dispatching - computed: false, optional: true, required: false
  private _suspendDispatching?: boolean | cdktf.IResolvable; 
  public get suspendDispatching() {
    return this.getBooleanAttribute('suspend_dispatching');
  }
  public set suspendDispatching(value: boolean | cdktf.IResolvable) {
    this._suspendDispatching = value;
  }
  public resetSuspendDispatching() {
    this._suspendDispatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendDispatchingInput() {
    return this._suspendDispatching;
  }

  // workload - computed: false, optional: true, required: false
  private _workload = new DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkloadOutputReference(this, "workload");
  public get workload() {
    return this._workload;
  }
  public putWorkload(value: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecWorkload) {
    this._workload.internalValue = value;
  }
  public resetWorkload() {
    this._workload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workloadInput() {
    return this._workload.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest k8s_work_karmada_io_work_v1alpha1_manifest}
*/
export class DataK8SWorkKarmadaIoWorkV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_work_karmada_io_work_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SWorkKarmadaIoWorkV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SWorkKarmadaIoWorkV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SWorkKarmadaIoWorkV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SWorkKarmadaIoWorkV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_work_karmada_io_work_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/work_karmada_io_work_v1alpha1_manifest k8s_work_karmada_io_work_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SWorkKarmadaIoWorkV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_work_karmada_io_work_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec) {
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
      metadata: dataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkKarmadaIoWorkV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SWorkKarmadaIoWorkV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
