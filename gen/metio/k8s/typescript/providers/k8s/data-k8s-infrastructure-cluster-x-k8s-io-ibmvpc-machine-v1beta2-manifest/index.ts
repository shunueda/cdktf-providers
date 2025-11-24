// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata;
  /**
  * IBMVPCMachineSpec defines the desired state of IBMVPCMachine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume {
  /**
  * DeleteVolumeOnInstanceDelete If set to true, when deleting the instance the volume will also be deleted. Default is set as true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#delete_volume_on_instance_delete DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#delete_volume_on_instance_delete}
  */
  readonly deleteVolumeOnInstanceDelete?: boolean | cdktf.IResolvable;
  /**
  * EncryptionKey is the root key to use to wrap the data encryption key for the volume and this points to the CRN and possible values are as follows. The CRN of the [Key Protect Root Key](https://cloud.ibm.com/docs/key-protect?topic=key-protect-getting-started-tutorial) or [Hyper Protect Crypto Service Root Key](https://cloud.ibm.com/docs/hs-crypto?topic=hs-crypto-get-started) for this resource. If unspecified, the 'encryption' type for the volume will be 'provider_managed'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#encryption_key_crn DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#encryption_key_crn}
  */
  readonly encryptionKeyCrn?: string;
  /**
  * Iops is the maximum I/O operations per second (IOPS) to use for the volume. Applicable only to volumes using a profile family of 'custom'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#iops DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#iops}
  */
  readonly iops?: number;
  /**
  * Name is the unique user-defined name for this volume. Default will be autogenerated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * Profile is the volume profile for the bootdisk, refer https://cloud.ibm.com/docs/vpc?topic=vpc-block-storage-profiles for more information. Default to general-purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#profile DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#profile}
  */
  readonly profile?: string;
  /**
  * SizeGiB is the size of the virtual server's boot disk in GiB. Default to the size of the image's 'minimum_provisioned_size'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#size_gi_b DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#size_gi_b}
  */
  readonly sizeGiB?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolumeToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete_volume_on_instance_delete: cdktf.booleanToTerraform(struct!.deleteVolumeOnInstanceDelete),
    encryption_key_crn: cdktf.stringToTerraform(struct!.encryptionKeyCrn),
    iops: cdktf.numberToTerraform(struct!.iops),
    name: cdktf.stringToTerraform(struct!.name),
    profile: cdktf.stringToTerraform(struct!.profile),
    size_gi_b: cdktf.numberToTerraform(struct!.sizeGiB),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolumeToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete_volume_on_instance_delete: {
      value: cdktf.booleanToHclTerraform(struct!.deleteVolumeOnInstanceDelete),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    encryption_key_crn: {
      value: cdktf.stringToHclTerraform(struct!.encryptionKeyCrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    size_gi_b: {
      value: cdktf.numberToHclTerraform(struct!.sizeGiB),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deleteVolumeOnInstanceDelete !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteVolumeOnInstanceDelete = this._deleteVolumeOnInstanceDelete;
    }
    if (this._encryptionKeyCrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyCrn = this._encryptionKeyCrn;
    }
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._sizeGiB !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeGiB = this._sizeGiB;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._deleteVolumeOnInstanceDelete = undefined;
      this._encryptionKeyCrn = undefined;
      this._iops = undefined;
      this._name = undefined;
      this._profile = undefined;
      this._sizeGiB = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._deleteVolumeOnInstanceDelete = value.deleteVolumeOnInstanceDelete;
      this._encryptionKeyCrn = value.encryptionKeyCrn;
      this._iops = value.iops;
      this._name = value.name;
      this._profile = value.profile;
      this._sizeGiB = value.sizeGiB;
    }
  }

  // delete_volume_on_instance_delete - computed: false, optional: true, required: false
  private _deleteVolumeOnInstanceDelete?: boolean | cdktf.IResolvable; 
  public get deleteVolumeOnInstanceDelete() {
    return this.getBooleanAttribute('delete_volume_on_instance_delete');
  }
  public set deleteVolumeOnInstanceDelete(value: boolean | cdktf.IResolvable) {
    this._deleteVolumeOnInstanceDelete = value;
  }
  public resetDeleteVolumeOnInstanceDelete() {
    this._deleteVolumeOnInstanceDelete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteVolumeOnInstanceDeleteInput() {
    return this._deleteVolumeOnInstanceDelete;
  }

  // encryption_key_crn - computed: false, optional: true, required: false
  private _encryptionKeyCrn?: string; 
  public get encryptionKeyCrn() {
    return this.getStringAttribute('encryption_key_crn');
  }
  public set encryptionKeyCrn(value: string) {
    this._encryptionKeyCrn = value;
  }
  public resetEncryptionKeyCrn() {
    this._encryptionKeyCrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyCrnInput() {
    return this._encryptionKeyCrn;
  }

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
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

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // size_gi_b - computed: false, optional: true, required: false
  private _sizeGiB?: number; 
  public get sizeGiB() {
    return this.getNumberAttribute('size_gi_b');
  }
  public set sizeGiB(value: number) {
    this._sizeGiB = value;
  }
  public resetSizeGiB() {
    this._sizeGiB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeGiBInput() {
    return this._sizeGiB;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering {
  /**
  * OfferingCRN defines the IBM Cloud Catalog Offering CRN. Using the OfferingCRN expects that the latest version of the Offering will be used. If a specific version should be used instead, rely on VersionCRN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#offering_crn DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#offering_crn}
  */
  readonly offeringCrn?: string;
  /**
  * PlanCRN defines the IBM Cloud Catalog Offering Plan CRN to use for the Offering.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#plan_crn DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#plan_crn}
  */
  readonly planCrn?: string;
  /**
  * VersionCRN defines the IBM Cloud Catalog Offering Version CRN. A specific version of the Catalog Offering will be used, as defined by this CRN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#version_crn DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#version_crn}
  */
  readonly versionCrn?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOfferingToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    offering_crn: cdktf.stringToTerraform(struct!.offeringCrn),
    plan_crn: cdktf.stringToTerraform(struct!.planCrn),
    version_crn: cdktf.stringToTerraform(struct!.versionCrn),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOfferingToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    offering_crn: {
      value: cdktf.stringToHclTerraform(struct!.offeringCrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plan_crn: {
      value: cdktf.stringToHclTerraform(struct!.planCrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version_crn: {
      value: cdktf.stringToHclTerraform(struct!.versionCrn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOfferingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._offeringCrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.offeringCrn = this._offeringCrn;
    }
    if (this._planCrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.planCrn = this._planCrn;
    }
    if (this._versionCrn !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionCrn = this._versionCrn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._offeringCrn = undefined;
      this._planCrn = undefined;
      this._versionCrn = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._offeringCrn = value.offeringCrn;
      this._planCrn = value.planCrn;
      this._versionCrn = value.versionCrn;
    }
  }

  // offering_crn - computed: false, optional: true, required: false
  private _offeringCrn?: string; 
  public get offeringCrn() {
    return this.getStringAttribute('offering_crn');
  }
  public set offeringCrn(value: string) {
    this._offeringCrn = value;
  }
  public resetOfferingCrn() {
    this._offeringCrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offeringCrnInput() {
    return this._offeringCrn;
  }

  // plan_crn - computed: false, optional: true, required: false
  private _planCrn?: string; 
  public get planCrn() {
    return this.getStringAttribute('plan_crn');
  }
  public set planCrn(value: string) {
    this._planCrn = value;
  }
  public resetPlanCrn() {
    this._planCrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get planCrnInput() {
    return this._planCrn;
  }

  // version_crn - computed: false, optional: true, required: false
  private _versionCrn?: string; 
  public get versionCrn() {
    return this.getStringAttribute('version_crn');
  }
  public set versionCrn(value: string) {
    this._versionCrn = value;
  }
  public resetVersionCrn() {
    this._versionCrn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionCrnInput() {
    return this._versionCrn;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImageToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImageToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancerToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancerToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPoolToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPoolToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPoolOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers {
  /**
  * LoadBalancer defines the Load Balancer the Pool Member is for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#load_balancer DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#load_balancer}
  */
  readonly loadBalancer: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer;
  /**
  * Pool defines the Load Balancer Pool the Pool Member should be in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#pool DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#pool}
  */
  readonly pool: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool;
  /**
  * Port defines the Port the Load Balancer Pool Member listens for traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#port DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#port}
  */
  readonly port: number;
  /**
  * Weight of the service member. Only applicable if the pool algorithm is 'weighted_round_robin'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#weight DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#weight}
  */
  readonly weight?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancerToTerraform(struct!.loadBalancer),
    pool: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPoolToTerraform(struct!.pool),
    port: cdktf.numberToTerraform(struct!.port),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancerToHclTerraform(struct!.loadBalancer),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer",
    },
    pool: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPoolToHclTerraform(struct!.pool),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancer = this._loadBalancer?.internalValue;
    }
    if (this._pool?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pool = this._pool?.internalValue;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancer.internalValue = undefined;
      this._pool.internalValue = undefined;
      this._port = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancer.internalValue = value.loadBalancer;
      this._pool.internalValue = value.pool;
      this._port = value.port;
      this._weight = value.weight;
    }
  }

  // load_balancer - computed: false, optional: false, required: true
  private _loadBalancer = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancerOutputReference(this, "load_balancer");
  public get loadBalancer() {
    return this._loadBalancer;
  }
  public putLoadBalancer(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersLoadBalancer) {
    this._loadBalancer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerInput() {
    return this._loadBalancer.internalValue;
  }

  // pool - computed: false, optional: false, required: true
  private _pool = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPoolOutputReference(this, "pool");
  public get pool() {
    return this._pool;
  }
  public putPool(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersPool) {
    this._pool.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get poolInput() {
    return this._pool.internalValue;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // weight - computed: false, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroupToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroupToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroupToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroupToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget {
  /**
  * DedicatedHost defines the Dedicated Host to place a VPC Machine (Instance) on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#dedicated_host DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#dedicated_host}
  */
  readonly dedicatedHost?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost;
  /**
  * DedicatedHostGroup defines the Dedicated Host Group to use when placing a VPC Machine (Instance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#dedicated_host_group DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#dedicated_host_group}
  */
  readonly dedicatedHostGroup?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup;
  /**
  * PlacementGroup defines the Placement Group to use when placing a VPC Machine (Instance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#placement_group DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#placement_group}
  */
  readonly placementGroup?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dedicated_host: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostToTerraform(struct!.dedicatedHost),
    dedicated_host_group: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroupToTerraform(struct!.dedicatedHostGroup),
    placement_group: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroupToTerraform(struct!.placementGroup),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dedicated_host: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostToHclTerraform(struct!.dedicatedHost),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost",
    },
    dedicated_host_group: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroupToHclTerraform(struct!.dedicatedHostGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup",
    },
    placement_group: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroupToHclTerraform(struct!.placementGroup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dedicatedHost?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedHost = this._dedicatedHost?.internalValue;
    }
    if (this._dedicatedHostGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedHostGroup = this._dedicatedHostGroup?.internalValue;
    }
    if (this._placementGroup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementGroup = this._placementGroup?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dedicatedHost.internalValue = undefined;
      this._dedicatedHostGroup.internalValue = undefined;
      this._placementGroup.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dedicatedHost.internalValue = value.dedicatedHost;
      this._dedicatedHostGroup.internalValue = value.dedicatedHostGroup;
      this._placementGroup.internalValue = value.placementGroup;
    }
  }

  // dedicated_host - computed: false, optional: true, required: false
  private _dedicatedHost = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostOutputReference(this, "dedicated_host");
  public get dedicatedHost() {
    return this._dedicatedHost;
  }
  public putDedicatedHost(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHost) {
    this._dedicatedHost.internalValue = value;
  }
  public resetDedicatedHost() {
    this._dedicatedHost.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostInput() {
    return this._dedicatedHost.internalValue;
  }

  // dedicated_host_group - computed: false, optional: true, required: false
  private _dedicatedHostGroup = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroupOutputReference(this, "dedicated_host_group");
  public get dedicatedHostGroup() {
    return this._dedicatedHostGroup;
  }
  public putDedicatedHostGroup(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetDedicatedHostGroup) {
    this._dedicatedHostGroup.internalValue = value;
  }
  public resetDedicatedHostGroup() {
    this._dedicatedHostGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedHostGroupInput() {
    return this._dedicatedHostGroup.internalValue;
  }

  // placement_group - computed: false, optional: true, required: false
  private _placementGroup = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroupOutputReference(this, "placement_group");
  public get placementGroup() {
    return this._placementGroup;
  }
  public putPlacementGroup(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetPlacementGroup) {
    this._placementGroup.internalValue = value;
  }
  public resetPlacementGroup() {
    this._placementGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementGroupInput() {
    return this._placementGroup.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups {
  /**
  * id of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * name of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface {
  /**
  * SecurityGroups defines a set of IBM Cloud VPC Security Groups to attach to the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#security_groups DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#security_groups}
  */
  readonly securityGroups?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups[] | cdktf.IResolvable;
  /**
  * Subnet ID of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#subnet DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#subnet}
  */
  readonly subnet?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_groups: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsToTerraform, false)(struct!.securityGroups),
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_groups: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsToHclTerraform, false)(struct!.securityGroups),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsList",
    },
    subnet: {
      value: cdktf.stringToHclTerraform(struct!.subnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityGroups = this._securityGroups?.internalValue;
    }
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityGroups.internalValue = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityGroups.internalValue = value.securityGroups;
      this._subnet = value.subnet;
    }
  }

  // security_groups - computed: false, optional: true, required: false
  private _securityGroups = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroupsList(this, "security_groups", false);
  public get securityGroups() {
    return this._securityGroups;
  }
  public putSecurityGroups(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceSecurityGroups[] | cdktf.IResolvable) {
    this._securityGroups.internalValue = value;
  }
  public resetSecurityGroups() {
    this._securityGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupsInput() {
    return this._securityGroups.internalValue;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys {
  /**
  * ID of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
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
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysList extends cdktf.ComplexList {
  public internalValue? : DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys[] | cdktf.IResolvable

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
  public get(index: number): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysOutputReference {
    return new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec {
  /**
  * BootVolume contains machines's boot volume configurations like size, iops etc..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#boot_volume DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#boot_volume}
  */
  readonly bootVolume?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume;
  /**
  * CatalogOffering is the Catalog Offering OS image which would be installed on the instance. An OfferingCRN or VersionCRN is required, the PlanCRN is optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#catalog_offering DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#catalog_offering}
  */
  readonly catalogOffering?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering;
  /**
  * Image is the OS image which would be install on the instance. ID will take higher precedence over Name if both specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#image DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#image}
  */
  readonly image: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage;
  /**
  * LoadBalancerPoolMembers is the set of IBM Cloud VPC Load Balancer Backend Pools the machine should be added to as a member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#load_balancer_pool_members DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#load_balancer_pool_members}
  */
  readonly loadBalancerPoolMembers?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers[] | cdktf.IResolvable;
  /**
  * Name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#name}
  */
  readonly name?: string;
  /**
  * PlacementTarget is the placement restrictions to use for the virtual server instance. No restrictions are used when this field is not defined.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#placement_target DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#placement_target}
  */
  readonly placementTarget?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget;
  /**
  * PrimaryNetworkInterface is required to specify subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#primary_network_interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#primary_network_interface}
  */
  readonly primaryNetworkInterface?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface;
  /**
  * Profile indicates the flavor of instance. Example: bx2-8x32 means 8 vCPUs 32 GB RAM 16 Gbps TODO: add a reference link of profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#profile DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#profile}
  */
  readonly profile?: string;
  /**
  * ProviderID is the unique identifier as specified by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#provider_id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * SSHKeys is the SSH pub keys that will be used to access VM. ID will take higher precedence over Name if both specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#ssh_keys DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#ssh_keys}
  */
  readonly sshKeys?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys[] | cdktf.IResolvable;
  /**
  * Zone is the place where the instance should be created. Example: us-south-3 TODO: Actually zone is transparent to user. The field user can access is location. Example: Dallas 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest#zone}
  */
  readonly zone: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolumeToTerraform(struct!.bootVolume),
    catalog_offering: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOfferingToTerraform(struct!.catalogOffering),
    image: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImageToTerraform(struct!.image),
    load_balancer_pool_members: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersToTerraform, false)(struct!.loadBalancerPoolMembers),
    name: cdktf.stringToTerraform(struct!.name),
    placement_target: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetToTerraform(struct!.placementTarget),
    primary_network_interface: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceToTerraform(struct!.primaryNetworkInterface),
    profile: cdktf.stringToTerraform(struct!.profile),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    ssh_keys: cdktf.listMapper(dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysToTerraform, false)(struct!.sshKeys),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolumeToHclTerraform(struct!.bootVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume",
    },
    catalog_offering: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOfferingToHclTerraform(struct!.catalogOffering),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering",
    },
    image: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImageToHclTerraform(struct!.image),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage",
    },
    load_balancer_pool_members: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersToHclTerraform, false)(struct!.loadBalancerPoolMembers),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    placement_target: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetToHclTerraform(struct!.placementTarget),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget",
    },
    primary_network_interface: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceToHclTerraform(struct!.primaryNetworkInterface),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_id: {
      value: cdktf.stringToHclTerraform(struct!.providerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysToHclTerraform, false)(struct!.sshKeys),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysList",
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolume = this._bootVolume?.internalValue;
    }
    if (this._catalogOffering?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.catalogOffering = this._catalogOffering?.internalValue;
    }
    if (this._image?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image?.internalValue;
    }
    if (this._loadBalancerPoolMembers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerPoolMembers = this._loadBalancerPoolMembers?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._placementTarget?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementTarget = this._placementTarget?.internalValue;
    }
    if (this._primaryNetworkInterface?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryNetworkInterface = this._primaryNetworkInterface?.internalValue;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    if (this._providerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerId = this._providerId;
    }
    if (this._sshKeys?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys?.internalValue;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootVolume.internalValue = undefined;
      this._catalogOffering.internalValue = undefined;
      this._image.internalValue = undefined;
      this._loadBalancerPoolMembers.internalValue = undefined;
      this._name = undefined;
      this._placementTarget.internalValue = undefined;
      this._primaryNetworkInterface.internalValue = undefined;
      this._profile = undefined;
      this._providerId = undefined;
      this._sshKeys.internalValue = undefined;
      this._zone = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bootVolume.internalValue = value.bootVolume;
      this._catalogOffering.internalValue = value.catalogOffering;
      this._image.internalValue = value.image;
      this._loadBalancerPoolMembers.internalValue = value.loadBalancerPoolMembers;
      this._name = value.name;
      this._placementTarget.internalValue = value.placementTarget;
      this._primaryNetworkInterface.internalValue = value.primaryNetworkInterface;
      this._profile = value.profile;
      this._providerId = value.providerId;
      this._sshKeys.internalValue = value.sshKeys;
      this._zone = value.zone;
    }
  }

  // boot_volume - computed: false, optional: true, required: false
  private _bootVolume = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolumeOutputReference(this, "boot_volume");
  public get bootVolume() {
    return this._bootVolume;
  }
  public putBootVolume(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecBootVolume) {
    this._bootVolume.internalValue = value;
  }
  public resetBootVolume() {
    this._bootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeInput() {
    return this._bootVolume.internalValue;
  }

  // catalog_offering - computed: false, optional: true, required: false
  private _catalogOffering = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOfferingOutputReference(this, "catalog_offering");
  public get catalogOffering() {
    return this._catalogOffering;
  }
  public putCatalogOffering(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecCatalogOffering) {
    this._catalogOffering.internalValue = value;
  }
  public resetCatalogOffering() {
    this._catalogOffering.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogOfferingInput() {
    return this._catalogOffering.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImageOutputReference(this, "image");
  public get image() {
    return this._image;
  }
  public putImage(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecImage) {
    this._image.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image.internalValue;
  }

  // load_balancer_pool_members - computed: false, optional: true, required: false
  private _loadBalancerPoolMembers = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembersList(this, "load_balancer_pool_members", false);
  public get loadBalancerPoolMembers() {
    return this._loadBalancerPoolMembers;
  }
  public putLoadBalancerPoolMembers(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecLoadBalancerPoolMembers[] | cdktf.IResolvable) {
    this._loadBalancerPoolMembers.internalValue = value;
  }
  public resetLoadBalancerPoolMembers() {
    this._loadBalancerPoolMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerPoolMembersInput() {
    return this._loadBalancerPoolMembers.internalValue;
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

  // placement_target - computed: false, optional: true, required: false
  private _placementTarget = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTargetOutputReference(this, "placement_target");
  public get placementTarget() {
    return this._placementTarget;
  }
  public putPlacementTarget(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPlacementTarget) {
    this._placementTarget.internalValue = value;
  }
  public resetPlacementTarget() {
    this._placementTarget.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTargetInput() {
    return this._placementTarget.internalValue;
  }

  // primary_network_interface - computed: false, optional: true, required: false
  private _primaryNetworkInterface = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterfaceOutputReference(this, "primary_network_interface");
  public get primaryNetworkInterface() {
    return this._primaryNetworkInterface;
  }
  public putPrimaryNetworkInterface(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecPrimaryNetworkInterface) {
    this._primaryNetworkInterface.internalValue = value;
  }
  public resetPrimaryNetworkInterface() {
    this._primaryNetworkInterface.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryNetworkInterfaceInput() {
    return this._primaryNetworkInterface.internalValue;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // provider_id - computed: false, optional: true, required: false
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  public resetProviderId() {
    this._providerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeysList(this, "ssh_keys", false);
  public get sshKeys() {
    return this._sshKeys;
  }
  public putSshKeys(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecSshKeys[] | cdktf.IResolvable) {
    this._sshKeys.internalValue = value;
  }
  public resetSshKeys() {
    this._sshKeys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys.internalValue;
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
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_v1beta2_manifest',
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
