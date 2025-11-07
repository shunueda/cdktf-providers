// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata;
  /**
  * RestoreSpec defines the desired state of Restore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#spec DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec;
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup {
  /**
  * Specifies the backup name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the backup namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
  /**
  * Specifies the source target for restoration, identified by its name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#source_target_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#source_target_name}
  */
  readonly sourceTargetName?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackupToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    source_target_name: cdktf.stringToTerraform(struct!.sourceTargetName),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackupToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_target_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceTargetName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._sourceTargetName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceTargetName = this._sourceTargetName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._sourceTargetName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._sourceTargetName = value.sourceTargetName;
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

  // source_target_name - computed: false, optional: true, required: false
  private _sourceTargetName?: string; 
  public get sourceTargetName() {
    return this.getStringAttribute('source_target_name');
  }
  public set sourceTargetName(value: string) {
    this._sourceTargetName = value;
  }
  public resetSourceTargetName() {
    this._sourceTargetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTargetNameInput() {
    return this._sourceTargetName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#claims DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#limits DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#requests DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsList",
    },
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
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
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef {
  /**
  * Specifies the path within the restoring container at which the volume should be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mount_path DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Describes the volume that will be restored from the specified volume of the backup targetVolumes. This is required if the backup uses a volume snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_source DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_source}
  */
  readonly volumeSource?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    volume_source: cdktf.stringToTerraform(struct!.volumeSource),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_source: {
      value: cdktf.stringToHclTerraform(struct!.volumeSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._volumeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._volumeSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._volumeSource = value.volumeSource;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // volume_source - computed: false, optional: true, required: false
  private _volumeSource?: string; 
  public get volumeSource() {
    return this.getStringAttribute('volume_source');
  }
  public set volumeSource(value: string) {
    this._volumeSource = value;
  }
  public resetVolumeSource() {
    this._volumeSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany {
  /**
  * Specifies the name of the source target pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#target_pod_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#target_pod_name}
  */
  readonly targetPodName: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToManyToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_pod_name: cdktf.stringToTerraform(struct!.targetPodName),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToManyToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_pod_name: {
      value: cdktf.stringToHclTerraform(struct!.targetPodName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToManyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetPodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPodName = this._targetPodName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetPodName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetPodName = value.targetPodName;
    }
  }

  // target_pod_name - computed: false, optional: false, required: true
  private _targetPodName?: string; 
  public get targetPodName() {
    return this.getStringAttribute('target_pod_name');
  }
  public set targetPodName(value: string) {
    this._targetPodName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPodNameInput() {
    return this._targetPodName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection {
  /**
  * Specifies the data restore policy. Options include: - OneToMany: Enables restoration of all volumes from a single data copy of the original target instance. The 'sourceOfOneToMany' field must be set when using this policy. - OneToOne: Restricts data restoration such that each data piece can only be restored to a single target instance. This is the default policy. When the number of target instances specified for restoration surpasses the count of original backup target instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_restore_policy DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_restore_policy}
  */
  readonly dataRestorePolicy: string;
  /**
  * Specifies the name of the source target pod. This field is mandatory when the DataRestorePolicy is configured to 'OneToMany'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#source_of_one_to_many DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#source_of_one_to_many}
  */
  readonly sourceOfOneToMany?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_restore_policy: cdktf.stringToTerraform(struct!.dataRestorePolicy),
    source_of_one_to_many: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToManyToTerraform(struct!.sourceOfOneToMany),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_restore_policy: {
      value: cdktf.stringToHclTerraform(struct!.dataRestorePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_of_one_to_many: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToManyToHclTerraform(struct!.sourceOfOneToMany),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRestorePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRestorePolicy = this._dataRestorePolicy;
    }
    if (this._sourceOfOneToMany?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceOfOneToMany = this._sourceOfOneToMany?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRestorePolicy = undefined;
      this._sourceOfOneToMany.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRestorePolicy = value.dataRestorePolicy;
      this._sourceOfOneToMany.internalValue = value.sourceOfOneToMany;
    }
  }

  // data_restore_policy - computed: false, optional: false, required: true
  private _dataRestorePolicy?: string; 
  public get dataRestorePolicy() {
    return this.getStringAttribute('data_restore_policy');
  }
  public set dataRestorePolicy(value: string) {
    this._dataRestorePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRestorePolicyInput() {
    return this._dataRestorePolicy;
  }

  // source_of_one_to_many - computed: false, optional: true, required: false
  private _sourceOfOneToMany = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToManyOutputReference(this, "source_of_one_to_many");
  public get sourceOfOneToMany() {
    return this._sourceOfOneToMany;
  }
  public putSourceOfOneToMany(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionSourceOfOneToMany) {
    this._sourceOfOneToMany.internalValue = value;
  }
  public resetSourceOfOneToMany() {
    this._sourceOfOneToMany.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOfOneToManyInput() {
    return this._sourceOfOneToMany.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_fields DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * A node selector term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#preference DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#preference}
  */
  readonly preference: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Weight associated with matching the corresponding nodeSelectorTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#weight DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preference?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preference = this._preference?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preference.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preference.internalValue = value.preference;
      this._weight = value.weight;
    }
  }

  // preference - computed: false, optional: false, required: true
  private _preference = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
    this._preference.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferenceInput() {
    return this._preference.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * The label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * Represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists, DoesNotExist. Gt, and Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * An array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. If the operator is Gt or Lt, the values array must have a single element, which will be interpreted as an integer. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * A list of node selector requirements by node's labels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * A list of node selector requirements by node's fields.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_fields DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchFields?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchFields = this._matchFields?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchFields.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchFields.internalValue = value.matchFields;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_fields - computed: false, optional: true, required: false
  private _matchFields = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
    this._matchFields.internalValue = value;
  }
  public resetMatchFields() {
    this._matchFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchFieldsInput() {
    return this._matchFields.internalValue;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A list of node selector terms. The terms are ORed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#node_selector_terms DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeSelectorTerms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelectorTerms = this._nodeSelectorTerms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeSelectorTerms.internalValue = value.nodeSelectorTerms;
    }
  }

  // node_selector_terms - computed: false, optional: false, required: true
  private _nodeSelectorTerms = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node matches the corresponding matchExpressions; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to an update), the system may or may not try to eventually evict the pod from its node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mismatch_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespaces DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#topology_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#pod_affinity_term DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#weight DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mismatch_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespaces DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#topology_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mismatch_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespaces DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#topology_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Required. A pod affinity term, associated with the corresponding weight.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#pod_affinity_term DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#pod_affinity_term}
  */
  readonly podAffinityTerm: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm;
  /**
  * weight associated with matching the corresponding podAffinityTerm, in the range 1-100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#weight DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_affinity_term: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToTerraform(struct!.podAffinityTerm),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_affinity_term: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermToHclTerraform(struct!.podAffinityTerm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podAffinityTerm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinityTerm = this._podAffinityTerm?.internalValue;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podAffinityTerm.internalValue = value.podAffinityTerm;
      this._weight = value.weight;
    }
  }

  // pod_affinity_term - computed: false, optional: false, required: true
  private _podAffinityTerm = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTermOutputReference(this, "pod_affinity_term");
  public get podAffinityTerm() {
    return this._podAffinityTerm;
  }
  public putPodAffinityTerm(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionPodAffinityTerm) {
    this._podAffinityTerm.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityTermInput() {
    return this._podAffinityTerm.internalValue;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * A label query over a set of resources, in this case pods. If it's null, this PodAffinityTerm matches with no Pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key in (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. Also, MatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MismatchLabelKeys is a set of pod label keys to select which pods will be taken into consideration. The keys are used to lookup values from the incoming pod labels, those key-value labels are merged with 'LabelSelector' as 'key notin (value)' to select the group of existing pods which pods will be taken into consideration for the incoming pod's pod (anti) affinity. Keys that don't exist in the incoming pod labels will be ignored. The default value is empty. The same key is forbidden to exist in both MismatchLabelKeys and LabelSelector. Also, MismatchLabelKeys cannot be set when LabelSelector isn't set. This is an alpha field and requires enabling MatchLabelKeysInPodAffinity feature gate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mismatch_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mismatch_label_keys}
  */
  readonly mismatchLabelKeys?: string[];
  /**
  * A label query over the set of namespaces that the term applies to. The term is applied to the union of the namespaces selected by this field and the ones listed in the namespaces field. null selector and null or empty namespaces list means 'this pod's namespace'. An empty selector ({}) matches all namespaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace_selector}
  */
  readonly namespaceSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector;
  /**
  * namespaces specifies a static list of namespace names that the term applies to. The term is applied to the union of the namespaces listed in this field and the ones selected by namespaceSelector. null or empty namespaces list and null namespaceSelector means 'this pod's namespace'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespaces DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This pod should be co-located (affinity) or not co-located (anti-affinity) with the pods matching the labelSelector in the specified namespaces, where co-located is defined as running on a node whose value of the label with key topologyKey matches that of any node on which any of the selected pods is running. Empty topologyKey is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#topology_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    mismatch_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.mismatchLabelKeys),
    namespace_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToTerraform(struct!.namespaceSelector),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    mismatch_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.mismatchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespace_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorToHclTerraform(struct!.namespaceSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector",
    },
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._mismatchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.mismatchLabelKeys = this._mismatchLabelKeys;
    }
    if (this._namespaceSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaceSelector = this._namespaceSelector?.internalValue;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._mismatchLabelKeys = undefined;
      this._namespaceSelector.internalValue = undefined;
      this._namespaces = undefined;
      this._topologyKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._mismatchLabelKeys = value.mismatchLabelKeys;
      this._namespaceSelector.internalValue = value.namespaceSelector;
      this._namespaces = value.namespaces;
      this._topologyKey = value.topologyKey;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // mismatch_label_keys - computed: false, optional: true, required: false
  private _mismatchLabelKeys?: string[]; 
  public get mismatchLabelKeys() {
    return this.getListAttribute('mismatch_label_keys');
  }
  public set mismatchLabelKeys(value: string[]) {
    this._mismatchLabelKeys = value;
  }
  public resetMismatchLabelKeys() {
    this._mismatchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mismatchLabelKeysInput() {
    return this._mismatchLabelKeys;
  }

  // namespace_selector - computed: false, optional: true, required: false
  private _namespaceSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelectorOutputReference(this, "namespace_selector");
  public get namespaceSelector() {
    return this._namespaceSelector;
  }
  public putNamespaceSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionNamespaceSelector) {
    this._namespaceSelector.internalValue = value;
  }
  public resetNamespaceSelector() {
    this._namespaceSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceSelectorInput() {
    return this._namespaceSelector.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity {
  /**
  * The scheduler will prefer to schedule pods to nodes that satisfy the anti-affinity expressions specified by this field, but it may choose a node that violates one or more of the expressions. The node that is most preferred is the one with the greatest sum of weights, i.e. for each node that meets all of the scheduling requirements (resource request, requiredDuringScheduling anti-affinity expressions, etc.), compute a sum by iterating through the elements of this field and adding 'weight' to the sum if the node has pods which matches the corresponding podAffinityTerm; the node(s) with the highest sum are the most preferred.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * If the anti-affinity requirements specified by this field are not met at scheduling time, the pod will not be scheduled onto the node. If the anti-affinity requirements specified by this field cease to be met at some point during pod execution (e.g. due to a pod label update), the system may or may not try to eventually evict the pod from its node. When there are multiple elements, the lists of nodes corresponding to each podAffinityTerm are intersected, i.e. all terms must be satisfied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#required_during_scheduling_ignored_during_execution DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredDuringSchedulingIgnoredDuringExecution = this._preferredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    if (this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredDuringSchedulingIgnoredDuringExecution = this._requiredDuringSchedulingIgnoredDuringExecution?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value.preferredDuringSchedulingIgnoredDuringExecution;
      this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value.requiredDuringSchedulingIgnoredDuringExecution;
    }
  }

  // preferred_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetPreferredDuringSchedulingIgnoredDuringExecution() {
    this._preferredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._preferredDuringSchedulingIgnoredDuringExecution.internalValue;
  }

  // required_during_scheduling_ignored_during_execution - computed: false, optional: true, required: false
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecutionList(this, "required_during_scheduling_ignored_during_execution", false);
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityRequiredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = value;
  }
  public resetRequiredDuringSchedulingIgnoredDuringExecution() {
    this._requiredDuringSchedulingIgnoredDuringExecution.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredDuringSchedulingIgnoredDuringExecutionInput() {
    return this._requiredDuringSchedulingIgnoredDuringExecution.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity {
  /**
  * Describes node affinity scheduling rules for the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#node_affinity DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity;
  /**
  * Describes pod affinity scheduling rules (e.g. co-locate this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#pod_affinity DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#pod_affinity}
  */
  readonly podAffinity?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity;
  /**
  * Describes pod anti-affinity scheduling rules (e.g. avoid putting this pod in the same node, zone, etc. as some other pod(s)).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#pod_anti_affinity DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#pod_anti_affinity}
  */
  readonly podAntiAffinity?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_affinity: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityToTerraform(struct!.nodeAffinity),
    pod_affinity: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityToTerraform(struct!.podAffinity),
    pod_anti_affinity: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityToTerraform(struct!.podAntiAffinity),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_affinity: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity",
    },
    pod_affinity: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityToHclTerraform(struct!.podAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity",
    },
    pod_anti_affinity: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityToHclTerraform(struct!.podAntiAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._podAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAffinity = this._podAffinity?.internalValue;
    }
    if (this._podAntiAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAntiAffinity = this._podAntiAffinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._podAffinity.internalValue = undefined;
      this._podAntiAffinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._podAffinity.internalValue = value.podAffinity;
      this._podAntiAffinity.internalValue = value.podAntiAffinity;
    }
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // pod_affinity - computed: false, optional: true, required: false
  private _podAffinity = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinityOutputReference(this, "pod_affinity");
  public get podAffinity() {
    return this._podAffinity;
  }
  public putPodAffinity(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAffinity) {
    this._podAffinity.internalValue = value;
  }
  public resetPodAffinity() {
    this._podAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAffinityInput() {
    return this._podAffinity.internalValue;
  }

  // pod_anti_affinity - computed: false, optional: true, required: false
  private _podAntiAffinity = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinityOutputReference(this, "pod_anti_affinity");
  public get podAntiAffinity() {
    return this._podAntiAffinity;
  }
  public putPodAntiAffinity(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityPodAntiAffinity) {
    this._podAntiAffinity.internalValue = value;
  }
  public resetPodAntiAffinity() {
    this._podAntiAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAntiAffinityInput() {
    return this._podAntiAffinity.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations {
  /**
  * Effect indicates the taint effect to match. Empty means match all taint effects. When specified, allowed values are NoSchedule, PreferNoSchedule and NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#effect DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Key is the taint key that the toleration applies to. Empty means match all taint keys. If the key is empty, operator must be Exists; this combination means to match all values and all keys.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Operator represents a key's relationship to the value. Valid operators are Exists and Equal. Defaults to Equal. Exists is equivalent to wildcard for value, so that a pod can tolerate all taints of a particular category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * TolerationSeconds represents the period of time the toleration (which must be of effect NoExecute, otherwise this field is ignored) tolerates the taint. By default, it is not set, which means tolerate the taint forever (do not evict). Zero and negative values will be treated as 0 (evict immediately) by the system.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#toleration_seconds DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Value is the taint value the toleration matches to. If the operator is Exists, the value should be empty, otherwise just a regular string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#value DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    toleration_seconds: cdktf.numberToTerraform(struct!.tolerationSeconds),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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
    toleration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.tolerationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tolerationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerationSeconds = this._tolerationSeconds;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
      this._key = undefined;
      this._operator = undefined;
      this._tolerationSeconds = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._effect = value.effect;
      this._key = value.key;
      this._operator = value.operator;
      this._tolerationSeconds = value.tolerationSeconds;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // toleration_seconds - computed: false, optional: true, required: false
  private _tolerationSeconds?: number; 
  public get tolerationSeconds() {
    return this.getNumberAttribute('toleration_seconds');
  }
  public set tolerationSeconds(value: number) {
    this._tolerationSeconds = value;
  }
  public resetTolerationSeconds() {
    this._tolerationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationSecondsInput() {
    return this._tolerationSeconds;
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
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_label_keys DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#max_skew DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew. This is a beta field and requires the MinDomainsInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#min_domains DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#node_affinity_policy DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#node_taints_policy DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#topology_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#when_unsatisfiable DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec {
  /**
  * Contains a group of affinity scheduling rules. Refer to https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#affinity DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#affinity}
  */
  readonly affinity?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity;
  /**
  * Specifies a request to schedule this pod onto a specific node. If it is non-empty, the scheduler simply schedules this pod onto that node, assuming that it fits resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#node_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Defines a selector which must be true for the pod to fit on a node. The selector must match a node's labels for the pod to be scheduled on that node. More info: https://kubernetes.io/docs/concepts/configuration/assign-pod-node/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#node_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#node_selector}
  */
  readonly nodeSelector?: { [key: string]: string };
  /**
  * Specifies the scheduler to dispatch the pod. If not specified, the pod will be dispatched by the default scheduler.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#scheduler_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Specifies the tolerations for the restoring pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#tolerations DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations[] | cdktf.IResolvable;
  /**
  * Describes how a group of pods ought to spread across topology domains. The scheduler will schedule pods in a way which abides by the constraints. Refer to https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#topology_spread_constraints DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityToTerraform(struct!.affinity),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    node_selector: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.nodeSelector),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    tolerations: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsToTerraform, false)(struct!.tolerations),
    topology_spread_constraints: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_selector: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.nodeSelector),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._nodeSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeSelector = this._nodeSelector;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._nodeName = undefined;
      this._nodeSelector = undefined;
      this._schedulerName = undefined;
      this._tolerations.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._nodeName = value.nodeName;
      this._nodeSelector = value.nodeSelector;
      this._schedulerName = value.schedulerName;
      this._tolerations.internalValue = value.tolerations;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // node_selector - computed: false, optional: true, required: false
  private _nodeSelector?: { [key: string]: string }; 
  public get nodeSelector() {
    return this.getStringMapAttribute('node_selector');
  }
  public set nodeSelector(value: { [key: string]: string }) {
    this._nodeSelector = value;
  }
  public resetNodeSelector() {
    this._nodeSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorInput() {
    return this._nodeSelector;
  }

  // scheduler_name - computed: false, optional: true, required: false
  private _schedulerName?: string; 
  public get schedulerName() {
    return this.getStringAttribute('scheduler_name');
  }
  public set schedulerName(value: string) {
    this._schedulerName = value;
  }
  public resetSchedulerName() {
    this._schedulerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulerNameInput() {
    return this._schedulerName;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#finalizers DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#api_group DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#kind DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#api_group DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#kind DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#limits DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#requests DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#access_modes DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_source DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_source_ref DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#storage_class_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_attributes_class_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_mode DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources",
    },
    selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims {
  /**
  * Specifies the standard metadata for the object. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata;
  /**
  * Specifies the path within the restoring container at which the volume should be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mount_path DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Defines the desired characteristics of a persistent volume claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_claim_spec DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_claim_spec}
  */
  readonly volumeClaimSpec: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec;
  /**
  * Describes the volume that will be restored from the specified volume of the backup targetVolumes. This is required if the backup uses a volume snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_source DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_source}
  */
  readonly volumeSource?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadataToTerraform(struct!.metadata),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    volume_claim_spec: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecToTerraform(struct!.volumeClaimSpec),
    volume_source: cdktf.stringToTerraform(struct!.volumeSource),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_claim_spec: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecToHclTerraform(struct!.volumeClaimSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec",
    },
    volume_source: {
      value: cdktf.stringToHclTerraform(struct!.volumeSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._volumeClaimSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimSpec = this._volumeClaimSpec?.internalValue;
    }
    if (this._volumeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._mountPath = undefined;
      this._volumeClaimSpec.internalValue = undefined;
      this._volumeSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._mountPath = value.mountPath;
      this._volumeClaimSpec.internalValue = value.volumeClaimSpec;
      this._volumeSource = value.volumeSource;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // volume_claim_spec - computed: false, optional: false, required: true
  private _volumeClaimSpec = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpecOutputReference(this, "volume_claim_spec");
  public get volumeClaimSpec() {
    return this._volumeClaimSpec;
  }
  public putVolumeClaimSpec(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsVolumeClaimSpec) {
    this._volumeClaimSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimSpecInput() {
    return this._volumeClaimSpec.internalValue;
  }

  // volume_source - computed: false, optional: true, required: false
  private _volumeSource?: string; 
  public get volumeSource() {
    return this.getStringAttribute('volume_source');
  }
  public set volumeSource(value: string) {
    this._volumeSource = value;
  }
  public resetVolumeSource() {
    this._volumeSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#finalizers DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#finalizers}
  */
  readonly finalizers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    finalizers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.finalizers),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata | cdktf.IResolvable): any {
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
    finalizers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.finalizers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._finalizers !== undefined) {
      hasAnyValues = true;
      internalValueResult.finalizers = this._finalizers;
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._finalizers = undefined;
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
      this._finalizers = value.finalizers;
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

  // finalizers - computed: false, optional: true, required: false
  private _finalizers?: string[]; 
  public get finalizers() {
    return this.getListAttribute('finalizers');
  }
  public set finalizers(value: string[]) {
    this._finalizers = value;
  }
  public resetFinalizers() {
    this._finalizers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizersInput() {
    return this._finalizers;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#api_group DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#kind DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#api_group DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#kind DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRefToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRefToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#limits DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#requests DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#access_modes DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_source DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_source}
  */
  readonly dataSource?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_source_ref DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#selector}
  */
  readonly selector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#storage_class_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#volumeattributesclass (Alpha) Using this field requires the VolumeAttributesClass feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_attributes_class_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_mode DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResourcesToTerraform(struct!.resources),
    selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource",
    },
    data_source_ref: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources",
    },
    selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates {
  /**
  * Specifies the standard metadata for the object. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#metadata
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata;
  /**
  * Specifies the path within the restoring container at which the volume should be mounted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mount_path DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Defines the desired characteristics of a persistent volume claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_claim_spec DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_claim_spec}
  */
  readonly volumeClaimSpec: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec;
  /**
  * Describes the volume that will be restored from the specified volume of the backup targetVolumes. This is required if the backup uses a volume snapshot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_source DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_source}
  */
  readonly volumeSource?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadataToTerraform(struct!.metadata),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    volume_claim_spec: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecToTerraform(struct!.volumeClaimSpec),
    volume_source: cdktf.stringToTerraform(struct!.volumeSource),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_claim_spec: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecToHclTerraform(struct!.volumeClaimSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec",
    },
    volume_source: {
      value: cdktf.stringToHclTerraform(struct!.volumeSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._volumeClaimSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimSpec = this._volumeClaimSpec?.internalValue;
    }
    if (this._volumeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._mountPath = undefined;
      this._volumeClaimSpec.internalValue = undefined;
      this._volumeSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._mountPath = value.mountPath;
      this._volumeClaimSpec.internalValue = value.volumeClaimSpec;
      this._volumeSource = value.volumeSource;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // volume_claim_spec - computed: false, optional: false, required: true
  private _volumeClaimSpec = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpecOutputReference(this, "volume_claim_spec");
  public get volumeClaimSpec() {
    return this._volumeClaimSpec;
  }
  public putVolumeClaimSpec(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesVolumeClaimSpec) {
    this._volumeClaimSpec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimSpecInput() {
    return this._volumeClaimSpec.internalValue;
  }

  // volume_source - computed: false, optional: true, required: false
  private _volumeSource?: string; 
  public get volumeSource() {
    return this.getStringAttribute('volume_source');
  }
  public set volumeSource(value: string) {
    this._volumeSource = value;
  }
  public resetVolumeSource() {
    this._volumeSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate {
  /**
  * Specifies the replicas of persistent volume claim that need to be created and restored. The format of the created claim name is '$(template-name)-$(index)'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#replicas DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#replicas}
  */
  readonly replicas: number;
  /**
  * Specifies the starting index for the created persistent volume claim according to the template. The minimum value is 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#starting_index DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#starting_index}
  */
  readonly startingIndex?: number;
  /**
  * Contains a list of volume claims.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#templates DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#templates}
  */
  readonly templates: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    replicas: cdktf.numberToTerraform(struct!.replicas),
    starting_index: cdktf.numberToTerraform(struct!.startingIndex),
    templates: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesToTerraform, false)(struct!.templates),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    starting_index: {
      value: cdktf.numberToHclTerraform(struct!.startingIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    templates: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesToHclTerraform, false)(struct!.templates),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._startingIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.startingIndex = this._startingIndex;
    }
    if (this._templates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.templates = this._templates?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._replicas = undefined;
      this._startingIndex = undefined;
      this._templates.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._replicas = value.replicas;
      this._startingIndex = value.startingIndex;
      this._templates.internalValue = value.templates;
    }
  }

  // replicas - computed: false, optional: false, required: true
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // starting_index - computed: false, optional: true, required: false
  private _startingIndex?: number; 
  public get startingIndex() {
    return this.getNumberAttribute('starting_index');
  }
  public set startingIndex(value: number) {
    this._startingIndex = value;
  }
  public resetStartingIndex() {
    this._startingIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startingIndexInput() {
    return this._startingIndex;
  }

  // templates - computed: false, optional: false, required: true
  private _templates = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplatesList(this, "templates", false);
  public get templates() {
    return this._templates;
  }
  public putTemplates(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateTemplates[] | cdktf.IResolvable) {
    this._templates.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig {
  /**
  * Specifies the configuration when using 'persistentVolumeClaim.spec.dataSourceRef' method for restoring. Describes the source volume of the backup targetVolumes and the mount path in the restoring container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_source_ref DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef;
  /**
  * Specifies the restore policy, which is required when the pod selection strategy for the source target is 'All'. This field is ignored if the pod selection strategy is 'Any'. optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#required_policy_for_all_pod_selection DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#required_policy_for_all_pod_selection}
  */
  readonly requiredPolicyForAllPodSelection?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection;
  /**
  * Specifies the scheduling spec for the restoring pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#scheduling_spec DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#scheduling_spec}
  */
  readonly schedulingSpec?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec;
  /**
  * Defines restore policy for persistent volume claim. Supported policies are as follows: - 'Parallel': parallel recovery of persistent volume claim. - 'Serial': restore the persistent volume claim in sequence, and wait until the previous persistent volume claim is restored before restoring a new one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_claim_restore_policy DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_claim_restore_policy}
  */
  readonly volumeClaimRestorePolicy: string;
  /**
  * Defines the persistent Volume claims that need to be restored and mounted together into the restore job. These persistent Volume claims will be created if they do not exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_claims DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_claims}
  */
  readonly volumeClaims?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims[] | cdktf.IResolvable;
  /**
  * Defines a template to build persistent Volume claims that need to be restored. These claims will be created in an orderly manner based on the number of replicas or reused if they already exist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_claims_template DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_claims_template}
  */
  readonly volumeClaimsTemplate?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_source_ref: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRefToTerraform(struct!.dataSourceRef),
    required_policy_for_all_pod_selection: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionToTerraform(struct!.requiredPolicyForAllPodSelection),
    scheduling_spec: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecToTerraform(struct!.schedulingSpec),
    volume_claim_restore_policy: cdktf.stringToTerraform(struct!.volumeClaimRestorePolicy),
    volume_claims: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsToTerraform, false)(struct!.volumeClaims),
    volume_claims_template: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateToTerraform(struct!.volumeClaimsTemplate),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_source_ref: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef",
    },
    required_policy_for_all_pod_selection: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionToHclTerraform(struct!.requiredPolicyForAllPodSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection",
    },
    scheduling_spec: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecToHclTerraform(struct!.schedulingSpec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec",
    },
    volume_claim_restore_policy: {
      value: cdktf.stringToHclTerraform(struct!.volumeClaimRestorePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_claims: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsToHclTerraform, false)(struct!.volumeClaims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsList",
    },
    volume_claims_template: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateToHclTerraform(struct!.volumeClaimsTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._requiredPolicyForAllPodSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPolicyForAllPodSelection = this._requiredPolicyForAllPodSelection?.internalValue;
    }
    if (this._schedulingSpec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulingSpec = this._schedulingSpec?.internalValue;
    }
    if (this._volumeClaimRestorePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimRestorePolicy = this._volumeClaimRestorePolicy;
    }
    if (this._volumeClaims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaims = this._volumeClaims?.internalValue;
    }
    if (this._volumeClaimsTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeClaimsTemplate = this._volumeClaimsTemplate?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._requiredPolicyForAllPodSelection.internalValue = undefined;
      this._schedulingSpec.internalValue = undefined;
      this._volumeClaimRestorePolicy = undefined;
      this._volumeClaims.internalValue = undefined;
      this._volumeClaimsTemplate.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._requiredPolicyForAllPodSelection.internalValue = value.requiredPolicyForAllPodSelection;
      this._schedulingSpec.internalValue = value.schedulingSpec;
      this._volumeClaimRestorePolicy = value.volumeClaimRestorePolicy;
      this._volumeClaims.internalValue = value.volumeClaims;
      this._volumeClaimsTemplate.internalValue = value.volumeClaimsTemplate;
    }
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // required_policy_for_all_pod_selection - computed: false, optional: true, required: false
  private _requiredPolicyForAllPodSelection = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelectionOutputReference(this, "required_policy_for_all_pod_selection");
  public get requiredPolicyForAllPodSelection() {
    return this._requiredPolicyForAllPodSelection;
  }
  public putRequiredPolicyForAllPodSelection(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigRequiredPolicyForAllPodSelection) {
    this._requiredPolicyForAllPodSelection.internalValue = value;
  }
  public resetRequiredPolicyForAllPodSelection() {
    this._requiredPolicyForAllPodSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPolicyForAllPodSelectionInput() {
    return this._requiredPolicyForAllPodSelection.internalValue;
  }

  // scheduling_spec - computed: false, optional: true, required: false
  private _schedulingSpec = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpecOutputReference(this, "scheduling_spec");
  public get schedulingSpec() {
    return this._schedulingSpec;
  }
  public putSchedulingSpec(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigSchedulingSpec) {
    this._schedulingSpec.internalValue = value;
  }
  public resetSchedulingSpec() {
    this._schedulingSpec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulingSpecInput() {
    return this._schedulingSpec.internalValue;
  }

  // volume_claim_restore_policy - computed: false, optional: false, required: true
  private _volumeClaimRestorePolicy?: string; 
  public get volumeClaimRestorePolicy() {
    return this.getStringAttribute('volume_claim_restore_policy');
  }
  public set volumeClaimRestorePolicy(value: string) {
    this._volumeClaimRestorePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimRestorePolicyInput() {
    return this._volumeClaimRestorePolicy;
  }

  // volume_claims - computed: false, optional: true, required: false
  private _volumeClaims = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsList(this, "volume_claims", false);
  public get volumeClaims() {
    return this._volumeClaims;
  }
  public putVolumeClaims(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaims[] | cdktf.IResolvable) {
    this._volumeClaims.internalValue = value;
  }
  public resetVolumeClaims() {
    this._volumeClaims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimsInput() {
    return this._volumeClaims.internalValue;
  }

  // volume_claims_template - computed: false, optional: true, required: false
  private _volumeClaimsTemplate = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplateOutputReference(this, "volume_claims_template");
  public get volumeClaimsTemplate() {
    return this._volumeClaimsTemplate;
  }
  public putVolumeClaimsTemplate(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigVolumeClaimsTemplate) {
    this._volumeClaimsTemplate.internalValue = value;
  }
  public resetVolumeClaimsTemplate() {
    this._volumeClaimsTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeClaimsTemplateInput() {
    return this._volumeClaimsTemplate.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential {
  /**
  * Specifies the map key of the host in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#host_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#host_key}
  */
  readonly hostKey?: string;
  /**
  * Specifies the map key of the password in the connection credential secret. This password will be saved in the backup annotation for full backup. You can use the environment variable DP_ENCRYPTION_KEY to specify encryption key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#password_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#password_key}
  */
  readonly passwordKey?: string;
  /**
  * Specifies the map key of the port in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#port_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#port_key}
  */
  readonly portKey?: string;
  /**
  * Refers to the Secret object that contains the connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#secret_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#secret_name}
  */
  readonly secretName: string;
  /**
  * Specifies the map key of the user in the connection credential secret.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#username_key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#username_key}
  */
  readonly usernameKey?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredentialToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_key: cdktf.stringToTerraform(struct!.hostKey),
    password_key: cdktf.stringToTerraform(struct!.passwordKey),
    port_key: cdktf.stringToTerraform(struct!.portKey),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
    username_key: cdktf.stringToTerraform(struct!.usernameKey),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredentialToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_key: {
      value: cdktf.stringToHclTerraform(struct!.hostKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_key: {
      value: cdktf.stringToHclTerraform(struct!.passwordKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_key: {
      value: cdktf.stringToHclTerraform(struct!.portKey),
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
    username_key: {
      value: cdktf.stringToHclTerraform(struct!.usernameKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredentialOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostKey = this._hostKey;
    }
    if (this._passwordKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordKey = this._passwordKey;
    }
    if (this._portKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.portKey = this._portKey;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    if (this._usernameKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameKey = this._usernameKey;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostKey = undefined;
      this._passwordKey = undefined;
      this._portKey = undefined;
      this._secretName = undefined;
      this._usernameKey = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._hostKey = value.hostKey;
      this._passwordKey = value.passwordKey;
      this._portKey = value.portKey;
      this._secretName = value.secretName;
      this._usernameKey = value.usernameKey;
    }
  }

  // host_key - computed: false, optional: true, required: false
  private _hostKey?: string; 
  public get hostKey() {
    return this.getStringAttribute('host_key');
  }
  public set hostKey(value: string) {
    this._hostKey = value;
  }
  public resetHostKey() {
    this._hostKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostKeyInput() {
    return this._hostKey;
  }

  // password_key - computed: false, optional: true, required: false
  private _passwordKey?: string; 
  public get passwordKey() {
    return this.getStringAttribute('password_key');
  }
  public set passwordKey(value: string) {
    this._passwordKey = value;
  }
  public resetPasswordKey() {
    this._passwordKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordKeyInput() {
    return this._passwordKey;
  }

  // port_key - computed: false, optional: true, required: false
  private _portKey?: string; 
  public get portKey() {
    return this.getStringAttribute('port_key');
  }
  public set portKey(value: string) {
    this._portKey = value;
  }
  public resetPortKey() {
    this._portKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portKeyInput() {
    return this._portKey;
  }

  // secret_name - computed: false, optional: false, required: true
  private _secretName?: string; 
  public get secretName() {
    return this.getStringAttribute('secret_name');
  }
  public set secretName(value: string) {
    this._secretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNameInput() {
    return this._secretName;
  }

  // username_key - computed: false, optional: true, required: false
  private _usernameKey?: string; 
  public get usernameKey() {
    return this.getStringAttribute('username_key');
  }
  public set usernameKey(value: string) {
    this._usernameKey = value;
  }
  public resetUsernameKey() {
    this._usernameKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameKeyInput() {
    return this._usernameKey;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget {
  /**
  * Executes kubectl in all selected pods.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#pod_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorToTerraform(struct!.podSelector),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = value.podSelector;
    }
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction {
  /**
  * Defines the pods that need to be executed for the exec action. Execution will occur on all pods that meet the conditions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#target DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetToTerraform(struct!.target),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._target.internalValue = value.target;
    }
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany {
  /**
  * Specifies the name of the source target pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#target_pod_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#target_pod_name}
  */
  readonly targetPodName: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToManyToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    target_pod_name: cdktf.stringToTerraform(struct!.targetPodName),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToManyToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    target_pod_name: {
      value: cdktf.stringToHclTerraform(struct!.targetPodName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToManyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._targetPodName !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetPodName = this._targetPodName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._targetPodName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._targetPodName = value.targetPodName;
    }
  }

  // target_pod_name - computed: false, optional: false, required: true
  private _targetPodName?: string; 
  public get targetPodName() {
    return this.getStringAttribute('target_pod_name');
  }
  public set targetPodName(value: string) {
    this._targetPodName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetPodNameInput() {
    return this._targetPodName;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection {
  /**
  * Specifies the data restore policy. Options include: - OneToMany: Enables restoration of all volumes from a single data copy of the original target instance. The 'sourceOfOneToMany' field must be set when using this policy. - OneToOne: Restricts data restoration such that each data piece can only be restored to a single target instance. This is the default policy. When the number of target instances specified for restoration surpasses the count of original backup target instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#data_restore_policy DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#data_restore_policy}
  */
  readonly dataRestorePolicy: string;
  /**
  * Specifies the name of the source target pod. This field is mandatory when the DataRestorePolicy is configured to 'OneToMany'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#source_of_one_to_many DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#source_of_one_to_many}
  */
  readonly sourceOfOneToMany?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_restore_policy: cdktf.stringToTerraform(struct!.dataRestorePolicy),
    source_of_one_to_many: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToManyToTerraform(struct!.sourceOfOneToMany),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_restore_policy: {
      value: cdktf.stringToHclTerraform(struct!.dataRestorePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_of_one_to_many: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToManyToHclTerraform(struct!.sourceOfOneToMany),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataRestorePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataRestorePolicy = this._dataRestorePolicy;
    }
    if (this._sourceOfOneToMany?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceOfOneToMany = this._sourceOfOneToMany?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataRestorePolicy = undefined;
      this._sourceOfOneToMany.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataRestorePolicy = value.dataRestorePolicy;
      this._sourceOfOneToMany.internalValue = value.sourceOfOneToMany;
    }
  }

  // data_restore_policy - computed: false, optional: false, required: true
  private _dataRestorePolicy?: string; 
  public get dataRestorePolicy() {
    return this.getStringAttribute('data_restore_policy');
  }
  public set dataRestorePolicy(value: string) {
    this._dataRestorePolicy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRestorePolicyInput() {
    return this._dataRestorePolicy;
  }

  // source_of_one_to_many - computed: false, optional: true, required: false
  private _sourceOfOneToMany = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToManyOutputReference(this, "source_of_one_to_many");
  public get sourceOfOneToMany() {
    return this._sourceOfOneToMany;
  }
  public putSourceOfOneToMany(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionSourceOfOneToMany) {
    this._sourceOfOneToMany.internalValue = value;
  }
  public resetSourceOfOneToMany() {
    this._sourceOfOneToMany.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceOfOneToManyInput() {
    return this._sourceOfOneToMany.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector {
  /**
  * fallbackLabelSelector is used to filter available pods when the labelSelector fails. This only takes effect when the 'strategy' field below is set to 'Any'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#fallback_label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#fallback_label_selector}
  */
  readonly fallbackLabelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector;
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
  /**
  * Specifies the strategy to select the target pod when multiple pods are selected. Valid values are: - 'Any': select any one pod that match the labelsSelector. - 'All': select all pods that match the labelsSelector. The backup data for the current pod will be stored in a subdirectory named after the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#strategy DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#strategy}
  */
  readonly strategy?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback_label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorToTerraform(struct!.fallbackLabelSelector),
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback_label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorToHclTerraform(struct!.fallbackLabelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector",
    },
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallbackLabelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackLabelSelector = this._fallbackLabelSelector?.internalValue;
    }
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
      this._strategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fallbackLabelSelector.internalValue = value.fallbackLabelSelector;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
      this._strategy = value.strategy;
    }
  }

  // fallback_label_selector - computed: false, optional: true, required: false
  private _fallbackLabelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelectorOutputReference(this, "fallback_label_selector");
  public get fallbackLabelSelector() {
    return this._fallbackLabelSelector;
  }
  public putFallbackLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorFallbackLabelSelector) {
    this._fallbackLabelSelector.internalValue = value;
  }
  public resetFallbackLabelSelector() {
    this._fallbackLabelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackLabelSelectorInput() {
    return this._fallbackLabelSelector.internalValue;
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts {
  /**
  * Path within the container at which the volume should be mounted. Must not contain ':'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mount_path DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * mountPropagation determines how mounts are propagated from the host to container and the other way around. When not set, MountPropagationNone is used. This field is beta in 1.10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#mount_propagation DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#mount_propagation}
  */
  readonly mountPropagation?: string;
  /**
  * This must match the Name of a Volume.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Mounted read-only if true, read-write otherwise (false or unspecified). Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#read_only DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#read_only}
  */
  readonly readOnly?: boolean | cdktf.IResolvable;
  /**
  * Path within the volume from which the container's volume should be mounted. Defaults to '' (volume's root).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#sub_path DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Expanded path within the volume from which the container's volume should be mounted. Behaves similarly to SubPath but environment variable references $(VAR_NAME) are expanded using the container's environment. Defaults to '' (volume's root). SubPathExpr and SubPath are mutually exclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#sub_path_expr DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#sub_path_expr}
  */
  readonly subPathExpr?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    mount_propagation: cdktf.stringToTerraform(struct!.mountPropagation),
    name: cdktf.stringToTerraform(struct!.name),
    read_only: cdktf.booleanToTerraform(struct!.readOnly),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    sub_path_expr: cdktf.stringToTerraform(struct!.subPathExpr),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mount_propagation: {
      value: cdktf.stringToHclTerraform(struct!.mountPropagation),
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
    read_only: {
      value: cdktf.booleanToHclTerraform(struct!.readOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path_expr: {
      value: cdktf.stringToHclTerraform(struct!.subPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._mountPropagation !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPropagation = this._mountPropagation;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._readOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnly = this._readOnly;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._subPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPathExpr = this._subPathExpr;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._mountPropagation = undefined;
      this._name = undefined;
      this._readOnly = undefined;
      this._subPath = undefined;
      this._subPathExpr = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._mountPropagation = value.mountPropagation;
      this._name = value.name;
      this._readOnly = value.readOnly;
      this._subPath = value.subPath;
      this._subPathExpr = value.subPathExpr;
    }
  }

  // mount_path - computed: false, optional: false, required: true
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // mount_propagation - computed: false, optional: true, required: false
  private _mountPropagation?: string; 
  public get mountPropagation() {
    return this.getStringAttribute('mount_propagation');
  }
  public set mountPropagation(value: string) {
    this._mountPropagation = value;
  }
  public resetMountPropagation() {
    this._mountPropagation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPropagationInput() {
    return this._mountPropagation;
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

  // sub_path - computed: false, optional: true, required: false
  private _subPath?: string; 
  public get subPath() {
    return this.getStringAttribute('sub_path');
  }
  public set subPath(value: string) {
    this._subPath = value;
  }
  public resetSubPath() {
    this._subPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathInput() {
    return this._subPath;
  }

  // sub_path_expr - computed: false, optional: true, required: false
  private _subPathExpr?: string; 
  public get subPathExpr() {
    return this.getStringAttribute('sub_path_expr');
  }
  public set subPathExpr(value: string) {
    this._subPathExpr = value;
  }
  public resetSubPathExpr() {
    this._subPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subPathExprInput() {
    return this._subPathExpr;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget {
  /**
  * Selects one of the pods, identified by labels, to build the job spec. This includes mounting required volumes and injecting built-in environment variables of the selected pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#pod_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector;
  /**
  * Defines which volumes of the selected pod need to be mounted on the restoring pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#volume_mounts DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#volume_mounts}
  */
  readonly volumeMounts?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorToTerraform(struct!.podSelector),
    volume_mounts: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsToTerraform, false)(struct!.volumeMounts),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector",
    },
    volume_mounts: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsToHclTerraform, false)(struct!.volumeMounts),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._volumeMounts?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMounts = this._volumeMounts?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = undefined;
      this._volumeMounts.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podSelector.internalValue = value.podSelector;
      this._volumeMounts.internalValue = value.volumeMounts;
    }
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // volume_mounts - computed: false, optional: true, required: false
  private _volumeMounts = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMountsList(this, "volume_mounts", false);
  public get volumeMounts() {
    return this._volumeMounts;
  }
  public putVolumeMounts(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetVolumeMounts[] | cdktf.IResolvable) {
    this._volumeMounts.internalValue = value;
  }
  public resetVolumeMounts() {
    this._volumeMounts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeMountsInput() {
    return this._volumeMounts.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction {
  /**
  * Specifies the restore policy, which is required when the pod selection strategy for the source target is 'All'. This field is ignored if the pod selection strategy is 'Any'. optional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#required_policy_for_all_pod_selection DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#required_policy_for_all_pod_selection}
  */
  readonly requiredPolicyForAllPodSelection?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection;
  /**
  * Defines the pods that needs to be executed for the job action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#target DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#target}
  */
  readonly target: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    required_policy_for_all_pod_selection: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionToTerraform(struct!.requiredPolicyForAllPodSelection),
    target: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetToTerraform(struct!.target),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    required_policy_for_all_pod_selection: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionToHclTerraform(struct!.requiredPolicyForAllPodSelection),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection",
    },
    target: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requiredPolicyForAllPodSelection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredPolicyForAllPodSelection = this._requiredPolicyForAllPodSelection?.internalValue;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._requiredPolicyForAllPodSelection.internalValue = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._requiredPolicyForAllPodSelection.internalValue = value.requiredPolicyForAllPodSelection;
      this._target.internalValue = value.target;
    }
  }

  // required_policy_for_all_pod_selection - computed: false, optional: true, required: false
  private _requiredPolicyForAllPodSelection = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelectionOutputReference(this, "required_policy_for_all_pod_selection");
  public get requiredPolicyForAllPodSelection() {
    return this._requiredPolicyForAllPodSelection;
  }
  public putRequiredPolicyForAllPodSelection(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionRequiredPolicyForAllPodSelection) {
    this._requiredPolicyForAllPodSelection.internalValue = value;
  }
  public resetRequiredPolicyForAllPodSelection() {
    this._requiredPolicyForAllPodSelection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredPolicyForAllPodSelectionInput() {
    return this._requiredPolicyForAllPodSelection.internalValue;
  }

  // target - computed: false, optional: false, required: true
  private _target = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionTarget) {
    this._target.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec {
  /**
  * Refers to the container command.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#command DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#command}
  */
  readonly command: string[];
  /**
  * Refers to the container image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#image DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#image}
  */
  readonly image: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    command: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.command),
    image: cdktf.stringToTerraform(struct!.image),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    command: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.command),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._command !== undefined) {
      hasAnyValues = true;
      internalValueResult.command = this._command;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._command = undefined;
      this._image = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._command = value.command;
      this._image = value.image;
    }
  }

  // command - computed: false, optional: false, required: true
  private _command?: string[]; 
  public get command() {
    return this.getListAttribute('command');
  }
  public set command(value: string[]) {
    this._command = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
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
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe {
  /**
  * Specifies the action to take.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#exec DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#exec}
  */
  readonly exec: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec;
  /**
  * Specifies the number of seconds after the container has started before the probe is initiated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#initial_delay_seconds DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#initial_delay_seconds}
  */
  readonly initialDelaySeconds?: number;
  /**
  * Specifies how often (in seconds) to perform the probe. The default value is 5 seconds, and the minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#period_seconds DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#period_seconds}
  */
  readonly periodSeconds?: number;
  /**
  * Specifies the number of seconds after which the probe times out. The default value is 30 seconds, and the minimum value is 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#timeout_seconds DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#timeout_seconds}
  */
  readonly timeoutSeconds?: number;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exec: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExecToTerraform(struct!.exec),
    initial_delay_seconds: cdktf.numberToTerraform(struct!.initialDelaySeconds),
    period_seconds: cdktf.numberToTerraform(struct!.periodSeconds),
    timeout_seconds: cdktf.numberToTerraform(struct!.timeoutSeconds),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exec: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExecToHclTerraform(struct!.exec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec",
    },
    initial_delay_seconds: {
      value: cdktf.numberToHclTerraform(struct!.initialDelaySeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    period_seconds: {
      value: cdktf.numberToHclTerraform(struct!.periodSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeoutSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.exec = this._exec?.internalValue;
    }
    if (this._initialDelaySeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialDelaySeconds = this._initialDelaySeconds;
    }
    if (this._periodSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.periodSeconds = this._periodSeconds;
    }
    if (this._timeoutSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutSeconds = this._timeoutSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exec.internalValue = undefined;
      this._initialDelaySeconds = undefined;
      this._periodSeconds = undefined;
      this._timeoutSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exec.internalValue = value.exec;
      this._initialDelaySeconds = value.initialDelaySeconds;
      this._periodSeconds = value.periodSeconds;
      this._timeoutSeconds = value.timeoutSeconds;
    }
  }

  // exec - computed: false, optional: false, required: true
  private _exec = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExecOutputReference(this, "exec");
  public get exec() {
    return this._exec;
  }
  public putExec(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeExec) {
    this._exec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get execInput() {
    return this._exec.internalValue;
  }

  // initial_delay_seconds - computed: false, optional: true, required: false
  private _initialDelaySeconds?: number; 
  public get initialDelaySeconds() {
    return this.getNumberAttribute('initial_delay_seconds');
  }
  public set initialDelaySeconds(value: number) {
    this._initialDelaySeconds = value;
  }
  public resetInitialDelaySeconds() {
    this._initialDelaySeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialDelaySecondsInput() {
    return this._initialDelaySeconds;
  }

  // period_seconds - computed: false, optional: true, required: false
  private _periodSeconds?: number; 
  public get periodSeconds() {
    return this.getNumberAttribute('period_seconds');
  }
  public set periodSeconds(value: number) {
    this._periodSeconds = value;
  }
  public resetPeriodSeconds() {
    this._periodSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodSecondsInput() {
    return this._periodSeconds;
  }

  // timeout_seconds - computed: false, optional: true, required: false
  private _timeoutSeconds?: number; 
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }
  public set timeoutSeconds(value: number) {
    this._timeoutSeconds = value;
  }
  public resetTimeoutSeconds() {
    this._timeoutSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutSecondsInput() {
    return this._timeoutSeconds;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig {
  /**
  * Defines the credential template used to create a connection credential.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#connection_credential DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#connection_credential}
  */
  readonly connectionCredential?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential;
  /**
  * Specifies the configuration for an exec action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#exec_action DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#exec_action}
  */
  readonly execAction?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction;
  /**
  * Specifies the configuration for a job action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#job_action DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#job_action}
  */
  readonly jobAction?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction;
  /**
  * Defines a periodic probe of the service readiness. The controller will perform postReadyHooks of BackupScript.spec.restore after the service readiness when readinessProbe is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#readiness_probe DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#readiness_probe}
  */
  readonly readinessProbe?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_credential: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredentialToTerraform(struct!.connectionCredential),
    exec_action: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionToTerraform(struct!.execAction),
    job_action: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionToTerraform(struct!.jobAction),
    readiness_probe: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeToTerraform(struct!.readinessProbe),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_credential: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredentialToHclTerraform(struct!.connectionCredential),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential",
    },
    exec_action: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionToHclTerraform(struct!.execAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction",
    },
    job_action: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionToHclTerraform(struct!.jobAction),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction",
    },
    readiness_probe: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeToHclTerraform(struct!.readinessProbe),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionCredential?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionCredential = this._connectionCredential?.internalValue;
    }
    if (this._execAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.execAction = this._execAction?.internalValue;
    }
    if (this._jobAction?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jobAction = this._jobAction?.internalValue;
    }
    if (this._readinessProbe?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readinessProbe = this._readinessProbe?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = undefined;
      this._execAction.internalValue = undefined;
      this._jobAction.internalValue = undefined;
      this._readinessProbe.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionCredential.internalValue = value.connectionCredential;
      this._execAction.internalValue = value.execAction;
      this._jobAction.internalValue = value.jobAction;
      this._readinessProbe.internalValue = value.readinessProbe;
    }
  }

  // connection_credential - computed: false, optional: true, required: false
  private _connectionCredential = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredentialOutputReference(this, "connection_credential");
  public get connectionCredential() {
    return this._connectionCredential;
  }
  public putConnectionCredential(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigConnectionCredential) {
    this._connectionCredential.internalValue = value;
  }
  public resetConnectionCredential() {
    this._connectionCredential.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionCredentialInput() {
    return this._connectionCredential.internalValue;
  }

  // exec_action - computed: false, optional: true, required: false
  private _execAction = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecActionOutputReference(this, "exec_action");
  public get execAction() {
    return this._execAction;
  }
  public putExecAction(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigExecAction) {
    this._execAction.internalValue = value;
  }
  public resetExecAction() {
    this._execAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get execActionInput() {
    return this._execAction.internalValue;
  }

  // job_action - computed: false, optional: true, required: false
  private _jobAction = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobActionOutputReference(this, "job_action");
  public get jobAction() {
    return this._jobAction;
  }
  public putJobAction(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigJobAction) {
    this._jobAction.internalValue = value;
  }
  public resetJobAction() {
    this._jobAction.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobActionInput() {
    return this._jobAction.internalValue;
  }

  // readiness_probe - computed: false, optional: true, required: false
  private _readinessProbe = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbeOutputReference(this, "readiness_probe");
  public get readinessProbe() {
    return this._readinessProbe;
  }
  public putReadinessProbe(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigReadinessProbe) {
    this._readinessProbe.internalValue = value;
  }
  public resetReadinessProbe() {
    this._readinessProbe.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessProbeInput() {
    return this._readinessProbe.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#key DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#operator DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#values DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_expressions DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#match_labels DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#group_resource DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#group_resource}
  */
  readonly groupResource: string;
  /**
  * Selects the specified resource for recovery by label.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#label_selector DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_resource: cdktf.stringToTerraform(struct!.groupResource),
    label_selector: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorToTerraform(struct!.labelSelector),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_resource: {
      value: cdktf.stringToHclTerraform(struct!.groupResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupResource = this._groupResource;
    }
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupResource = undefined;
      this._labelSelector.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupResource = value.groupResource;
      this._labelSelector.internalValue = value.labelSelector;
    }
  }

  // group_resource - computed: false, optional: false, required: true
  private _groupResource?: string; 
  public get groupResource() {
    return this.getStringAttribute('group_resource');
  }
  public set groupResource(value: string) {
    this._groupResource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupResourceInput() {
    return this._groupResource;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedList extends cdktf.ComplexList {
  public internalValue? : DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded[] | cdktf.IResolvable

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
  public get(index: number): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedOutputReference {
    return new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources {
  /**
  * Restores the specified resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#included DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#included}
  */
  readonly included?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded[] | cdktf.IResolvable;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    included: cdktf.listMapper(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedToTerraform, false)(struct!.included),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    included: {
      value: cdktf.listMapperHcl(dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedToHclTerraform, false)(struct!.included),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._included?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.included = this._included?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._included.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._included.internalValue = value.included;
    }
  }

  // included - computed: false, optional: true, required: false
  private _included = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncludedList(this, "included", false);
  public get included() {
    return this._included;
  }
  public putIncluded(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesIncluded[] | cdktf.IResolvable) {
    this._included.internalValue = value;
  }
  public resetIncluded() {
    this._included.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includedInput() {
    return this._included.internalValue;
  }
}
export interface DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec {
  /**
  * Specifies the number of retries before marking the restore failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#backoff_limit DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#backoff_limit}
  */
  readonly backoffLimit?: number;
  /**
  * Specifies the backup to be restored. The restore behavior is based on the backup type: 1. Full: will be restored the full backup directly. 2. Incremental: will be restored sequentially from the most recent full backup of this incremental backup. 3. Differential: will be restored sequentially from the parent backup of the differential backup. 4. Continuous: will find the most recent full backup at this time point and the continuous backups after it to restore.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#backup DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#backup}
  */
  readonly backup: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup;
  /**
  * Specifies the required resources of restore job's container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#container_resources DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#container_resources}
  */
  readonly containerResources?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources;
  /**
  * List of environment variables to set in the container for restore. These will be merged with the env of Backup and ActionSet. The priority of merging is as follows: 'Restore env > Backup env > ActionSet env'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#env DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#env}
  */
  readonly env?: { [key: string]: string };
  /**
  * Configuration for the action of 'prepareData' phase, including the persistent volume claims that need to be restored and scheduling strategy of temporary recovery pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#prepare_data_config DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#prepare_data_config}
  */
  readonly prepareDataConfig?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig;
  /**
  * Configuration for the action of 'postReady' phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#ready_config DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#ready_config}
  */
  readonly readyConfig?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig;
  /**
  * Restores the specified resources of Kubernetes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#resources DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources;
  /**
  * Specifies the point in time for restoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#restore_time DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#restore_time}
  */
  readonly restoreTime?: string;
  /**
  * Specifies the service account name needed for recovery pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#service_account_name DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff_limit: cdktf.numberToTerraform(struct!.backoffLimit),
    backup: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackupToTerraform(struct!.backup),
    container_resources: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesToTerraform(struct!.containerResources),
    env: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.env),
    prepare_data_config: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigToTerraform(struct!.prepareDataConfig),
    ready_config: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigToTerraform(struct!.readyConfig),
    resources: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    restore_time: cdktf.stringToTerraform(struct!.restoreTime),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff_limit: {
      value: cdktf.numberToHclTerraform(struct!.backoffLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup",
    },
    container_resources: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesToHclTerraform(struct!.containerResources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources",
    },
    env: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.env),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    prepare_data_config: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigToHclTerraform(struct!.prepareDataConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig",
    },
    ready_config: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigToHclTerraform(struct!.readyConfig),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig",
    },
    resources: {
      value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources",
    },
    restore_time: {
      value: cdktf.stringToHclTerraform(struct!.restoreTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoffLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoffLimit = this._backoffLimit;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._containerResources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerResources = this._containerResources?.internalValue;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._prepareDataConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prepareDataConfig = this._prepareDataConfig?.internalValue;
    }
    if (this._readyConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.readyConfig = this._readyConfig?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._restoreTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreTime = this._restoreTime;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoffLimit = undefined;
      this._backup.internalValue = undefined;
      this._containerResources.internalValue = undefined;
      this._env = undefined;
      this._prepareDataConfig.internalValue = undefined;
      this._readyConfig.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._restoreTime = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoffLimit = value.backoffLimit;
      this._backup.internalValue = value.backup;
      this._containerResources.internalValue = value.containerResources;
      this._env = value.env;
      this._prepareDataConfig.internalValue = value.prepareDataConfig;
      this._readyConfig.internalValue = value.readyConfig;
      this._resources.internalValue = value.resources;
      this._restoreTime = value.restoreTime;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // backoff_limit - computed: false, optional: true, required: false
  private _backoffLimit?: number; 
  public get backoffLimit() {
    return this.getNumberAttribute('backoff_limit');
  }
  public set backoffLimit(value: number) {
    this._backoffLimit = value;
  }
  public resetBackoffLimit() {
    this._backoffLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffLimitInput() {
    return this._backoffLimit;
  }

  // backup - computed: false, optional: false, required: true
  private _backup = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // container_resources - computed: false, optional: true, required: false
  private _containerResources = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResourcesOutputReference(this, "container_resources");
  public get containerResources() {
    return this._containerResources;
  }
  public putContainerResources(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecContainerResources) {
    this._containerResources.internalValue = value;
  }
  public resetContainerResources() {
    this._containerResources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerResourcesInput() {
    return this._containerResources.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }; 
  public get env() {
    return this.getStringMapAttribute('env');
  }
  public set env(value: { [key: string]: string }) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // prepare_data_config - computed: false, optional: true, required: false
  private _prepareDataConfig = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfigOutputReference(this, "prepare_data_config");
  public get prepareDataConfig() {
    return this._prepareDataConfig;
  }
  public putPrepareDataConfig(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecPrepareDataConfig) {
    this._prepareDataConfig.internalValue = value;
  }
  public resetPrepareDataConfig() {
    this._prepareDataConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prepareDataConfigInput() {
    return this._prepareDataConfig.internalValue;
  }

  // ready_config - computed: false, optional: true, required: false
  private _readyConfig = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfigOutputReference(this, "ready_config");
  public get readyConfig() {
    return this._readyConfig;
  }
  public putReadyConfig(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecReadyConfig) {
    this._readyConfig.internalValue = value;
  }
  public resetReadyConfig() {
    this._readyConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readyConfigInput() {
    return this._readyConfig.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // restore_time - computed: false, optional: true, required: false
  private _restoreTime?: string; 
  public get restoreTime() {
    return this.getStringAttribute('restore_time');
  }
  public set restoreTime(value: string) {
    this._restoreTime = value;
  }
  public resetRestoreTime() {
    this._restoreTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreTimeInput() {
    return this._restoreTime;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_restore_v1alpha1_manifest}
*/
export class DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dataprotection_kubeblocks_io_restore_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dataprotection_kubeblocks_io_restore_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_restore_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_restore_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dataprotection_kubeblocks_io_restore_v1alpha1_manifest',
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
  private _metadata = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoRestoreV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
