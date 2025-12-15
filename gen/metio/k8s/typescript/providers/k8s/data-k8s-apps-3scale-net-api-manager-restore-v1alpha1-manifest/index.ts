// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#metadata DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata;
  /**
  * APIManagerRestoreSpec defines the desired state of APIManagerRestore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#spec DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec;
}
export interface DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#annotations DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#labels DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#name DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#namespace DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource {
  /**
  * claimName is the name of a PersistentVolumeClaim in the same namespace as the pod using this volume. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#persistentvolumeclaims
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#claim_name DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#claim_name}
  */
  readonly claimName: string;
  /**
  * readOnly Will force the ReadOnly setting in VolumeMounts. Default false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#read_only DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
}

export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSourceToTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_name: cdktf.stringToTerraform(struct!.claimName),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
  }
}


export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSourceToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_name: {
      value: cdktf.stringToHclTerraform(struct!.claimName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimName !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimName = this._claimName;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimName = undefined;
      this._readOnly = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimName = value.claimName;
      this._readOnly = value.readOnly;
    }
  }

  // claim_name - computed: false, optional: false, required: true
  private _claimName?: string; 
  public get claimName() {
    return this.getStringAttribute('claim_name');
  }
  public set claimName(value: string) {
    this._claimName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimNameInput() {
    return this._claimName;
  }

  // read_only - computed: false, optional: true, required: false
  private _readOnly?: boolean | cdktf.IResolvable; 
  public get readOnly() {
    return this.getBooleanAttribute('read_only');
  }
  public set readOnly(value: boolean | cdktf.IResolvable) {
    this._readOnly = value;
  }
  public resetReadOnly() {
    this._readOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInput() {
    return this._readOnly;
  }
}
export interface DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim {
  /**
  * PersistentVolumeClaim source of an existing PersistentVolumeClaim. See
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#claim_source DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#claim_source}
  */
  readonly claimSource: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource;
}

export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimToTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claim_source: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSourceToTerraform(struct!.claimSource),
  }
}


export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claim_source: {
      value: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSourceToHclTerraform(struct!.claimSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claimSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claimSource = this._claimSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claimSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claimSource.internalValue = value.claimSource;
    }
  }

  // claim_source - computed: false, optional: false, required: true
  private _claimSource = new DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSourceOutputReference(this, "claim_source");
  public get claimSource() {
    return this._claimSource;
  }
  public putClaimSource(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimClaimSource) {
    this._claimSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get claimSourceInput() {
    return this._claimSource.internalValue;
  }
}
export interface DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource {
  /**
  * Restore data soure configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#persistent_volume_claim DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#persistent_volume_claim}
  */
  readonly persistentVolumeClaim?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim;
}

export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourceToTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persistent_volume_claim: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimToTerraform(struct!.persistentVolumeClaim),
  }
}


export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourceToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    persistent_volume_claim: {
      value: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimToHclTerraform(struct!.persistentVolumeClaim),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource | cdktf.IResolvable | undefined) {
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
  private _persistentVolumeClaim = new DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaimOutputReference(this, "persistent_volume_claim");
  public get persistentVolumeClaim() {
    return this._persistentVolumeClaim;
  }
  public putPersistentVolumeClaim(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourcePersistentVolumeClaim) {
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
export interface DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec {
  /**
  * APIManagerRestoreSource defines the backup data restore source configurability. It is a union type. Only one of the fields can be set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#restore_source DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest#restore_source}
  */
  readonly restoreSource: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource;
}

export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    restore_source: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourceToTerraform(struct!.restoreSource),
  }
}


export function dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    restore_source: {
      value: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourceToHclTerraform(struct!.restoreSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._restoreSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreSource = this._restoreSource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._restoreSource.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._restoreSource.internalValue = value.restoreSource;
    }
  }

  // restore_source - computed: false, optional: false, required: true
  private _restoreSource = new DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSourceOutputReference(this, "restore_source");
  public get restoreSource() {
    return this._restoreSource;
  }
  public putRestoreSource(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecRestoreSource) {
    this._restoreSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreSourceInput() {
    return this._restoreSource.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest k8s_apps_3scale_net_api_manager_restore_v1alpha1_manifest}
*/
export class DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_3scale_net_api_manager_restore_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_3scale_net_api_manager_restore_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/apps_3scale_net_api_manager_restore_v1alpha1_manifest k8s_apps_3scale_net_api_manager_restore_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_3scale_net_api_manager_restore_v1alpha1_manifest',
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
  private _metadata = new DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SApps3ScaleNetApiManagerRestoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
