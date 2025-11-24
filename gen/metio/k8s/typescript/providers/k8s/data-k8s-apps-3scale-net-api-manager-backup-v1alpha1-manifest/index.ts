// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#metadata DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata;
  /**
  * APIManagerBackupSpec defines the desired state of APIManagerBackup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#spec DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec;
}
export interface DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#annotations DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#labels DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#name DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#namespace DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources {
  /**
  * Storage Resource requests to be used on the PersistentVolumeClaim. To learn more about resource requests see: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#requests DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#requests}
  */
  readonly requests: string;
}

export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResourcesToTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    requests: cdktf.stringToTerraform(struct!.requests),
  }
}


export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResourcesToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requests = value.requests;
    }
  }

  // requests - computed: false, optional: false, required: true
  private _requests?: string; 
  public get requests() {
    return this.getStringAttribute('requests');
  }
  public set requests(value: string) {
    this._requests = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim {
  /**
  * Resources configuration for the backup data PersistentVolumeClaim. Ignored when VolumeName field is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#resources DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources;
  /**
  * Storage class to be used by the PersistentVolumeClaim. Ignored when VolumeName field is set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#storage_class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Name of an existing PersistentVolume to be bound to the backup data PersistentVolumeClaim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#volume_name DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimToTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resources: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResourcesToTerraform(struct!.resources),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resources: {
      value: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resources.internalValue = undefined;
      this._storageClass = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resources.internalValue = value.resources;
      this._storageClass = value.storageClass;
      this._volumeName = value.volumeName;
    }
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimResources) {
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

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination {
  /**
  * PersistentVolumeClaim as backup data destination configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#persistent_volume_claim DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim;
}

export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationToTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_volume_claim: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
  }
}


export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_volume_claim: {
      value: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persistentVolumeClaim?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistentVolumeClaim = this._persistentVolumeClaim?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._persistentVolumeClaim.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._persistentVolumeClaim.internalValue = value.persistentVolumeClaim;
    }
  }

  // persistent_volume_claim - computed: false, optional: true, required: false
  private _persistentVolumeClaim = new DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationPersistentVolumeClaim) {
    this._persistentVolumeClaim.internalValue = value;
  }
  public resetPersistentVolumeClaim() {
    this._persistentVolumeClaim.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentVolumeClaimInput() {
    return this._persistentVolumeClaim.internalValue;
  }
}
export interface DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec {
  /**
  * Backup data destination configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#backup_destination DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest#backup_destination}
  */
  readonly backupDestination: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination;
}

export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_destination: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationToTerraform(struct!.backupDestination),
  }
}


export function dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_destination: {
      value: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationToHclTerraform(struct!.backupDestination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDestination = this._backupDestination?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupDestination.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupDestination.internalValue = value.backupDestination;
    }
  }

  // backup_destination - computed: false, optional: false, required: true
  private _backupDestination = new DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestinationOutputReference(this, "backup_destination");
  public get backupDestination() {
    return this._backupDestination;
  }
  public putBackupDestination(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecBackupDestination) {
    this._backupDestination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDestinationInput() {
    return this._backupDestination.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest k8s_apps_3scale_net_api_manager_backup_v1alpha1_manifest}
*/
export class DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_3scale_net_api_manager_backup_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApps3ScaleNetApiManagerBackupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_3scale_net_api_manager_backup_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/apps_3scale_net_api_manager_backup_v1alpha1_manifest k8s_apps_3scale_net_api_manager_backup_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_3scale_net_api_manager_backup_v1alpha1_manifest',
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
  private _metadata = new DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApps3ScaleNetApiManagerBackupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
