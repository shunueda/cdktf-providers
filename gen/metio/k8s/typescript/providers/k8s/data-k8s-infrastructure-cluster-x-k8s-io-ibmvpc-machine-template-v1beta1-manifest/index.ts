// https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#metadata DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata;
  /**
  * IBMVPCMachineTemplateSpec defines the desired state of IBMVPCMachineTemplate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec;
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#annotations DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#labels DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#namespace DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadataToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume {
  /**
  * DeleteVolumeOnInstanceDelete If set to true, when deleting the instance the volume will also be deleted. Default is set as true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#delete_volume_on_instance_delete DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#delete_volume_on_instance_delete}
  */
  readonly deleteVolumeOnInstanceDelete?: boolean | cdktf.IResolvable;
  /**
  * EncryptionKey is the root key to use to wrap the data encryption key for the volume and this points to the CRN and possible values are as follows. The CRN of the [Key Protect Root Key](https://cloud.ibm.com/docs/key-protect?topic=key-protect-getting-started-tutorial) or [Hyper Protect Crypto Service Root Key](https://cloud.ibm.com/docs/hs-crypto?topic=hs-crypto-get-started) for this resource. If unspecified, the 'encryption' type for the volume will be 'provider_managed'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#encryption_key_crn DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#encryption_key_crn}
  */
  readonly encryptionKeyCrn?: string;
  /**
  * Iops is the maximum I/O operations per second (IOPS) to use for the volume. Applicable only to volumes using a profile family of 'custom'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#iops DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * Name is the unique user-defined name for this volume. Default will be autogenerated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Profile is the volume profile for the bootdisk, refer https://cloud.ibm.com/docs/vpc?topic=vpc-block-storage-profiles for more information. Default to general-purpose
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#profile DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#profile}
  */
  readonly profile?: string;
  /**
  * SizeGiB is the size of the virtual server's boot disk in GiB. Default to the size of the image's 'minimum_provisioned_size'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#size_gi_b DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#size_gi_b}
  */
  readonly sizeGiB?: number;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolumeToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume | cdktf.IResolvable): any {
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


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolumeToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume | cdktf.IResolvable): any {
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume | cdktf.IResolvable | undefined) {
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface {
  /**
  * Subnet ID of the network interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#subnet DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#subnet}
  */
  readonly subnet?: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterfaceToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet: cdktf.stringToTerraform(struct!.subnet),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterfaceToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterfaceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnet = this._subnet;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnet = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnet = value.subnet;
    }
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec {
  /**
  * BootVolume contains machines's boot volume configurations like size, iops etc..
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#boot_volume DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#boot_volume}
  */
  readonly bootVolume?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume;
  /**
  * Image is the id of OS image which would be install on the instance. Example: r134-ed3f775f-ad7e-4e37-ae62-7199b4988b00
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#image DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#image}
  */
  readonly image?: string;
  /**
  * ImageName is the name of OS image which would be install on the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#image_name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * Name of the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#name DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * PrimaryNetworkInterface is required to specify subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#primary_network_interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#primary_network_interface}
  */
  readonly primaryNetworkInterface?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface;
  /**
  * Profile indicates the flavor of instance. Example: bx2-8x32 means 8 vCPUs 32 GB RAM 16 Gbps TODO: add a reference link of profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#profile DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#profile}
  */
  readonly profile?: string;
  /**
  * ProviderID is the unique identifier as specified by the cloud provider.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#provider_id DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#provider_id}
  */
  readonly providerId?: string;
  /**
  * SSHKeysNames is the SSH pub key names that will be used to access VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#ssh_key_names DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#ssh_key_names}
  */
  readonly sshKeyNames?: string[];
  /**
  * SSHKeys is the SSH pub keys that will be used to access VM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#ssh_keys DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#ssh_keys}
  */
  readonly sshKeys?: string[];
  /**
  * Zone is the place where the instance should be created. Example: us-south-3 TODO: Actually zone is transparent to user. The field user can access is location. Example: Dallas 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#zone DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#zone}
  */
  readonly zone: string;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    boot_volume: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolumeToTerraform(struct!.bootVolume),
    image: cdktf.stringToTerraform(struct!.image),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    name: cdktf.stringToTerraform(struct!.name),
    primary_network_interface: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterfaceToTerraform(struct!.primaryNetworkInterface),
    profile: cdktf.stringToTerraform(struct!.profile),
    provider_id: cdktf.stringToTerraform(struct!.providerId),
    ssh_key_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeyNames),
    ssh_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sshKeys),
    zone: cdktf.stringToTerraform(struct!.zone),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    boot_volume: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolumeToHclTerraform(struct!.bootVolume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
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
    primary_network_interface: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterfaceToHclTerraform(struct!.primaryNetworkInterface),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface",
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
    ssh_key_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeyNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ssh_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sshKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
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

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bootVolume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootVolume = this._bootVolume?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
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
    if (this._sshKeyNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeyNames = this._sshKeyNames;
    }
    if (this._sshKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshKeys = this._sshKeys;
    }
    if (this._zone !== undefined) {
      hasAnyValues = true;
      internalValueResult.zone = this._zone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bootVolume.internalValue = undefined;
      this._image = undefined;
      this._imageName = undefined;
      this._name = undefined;
      this._primaryNetworkInterface.internalValue = undefined;
      this._profile = undefined;
      this._providerId = undefined;
      this._sshKeyNames = undefined;
      this._sshKeys = undefined;
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
      this._image = value.image;
      this._imageName = value.imageName;
      this._name = value.name;
      this._primaryNetworkInterface.internalValue = value.primaryNetworkInterface;
      this._profile = value.profile;
      this._providerId = value.providerId;
      this._sshKeyNames = value.sshKeyNames;
      this._sshKeys = value.sshKeys;
      this._zone = value.zone;
    }
  }

  // boot_volume - computed: false, optional: true, required: false
  private _bootVolume = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolumeOutputReference(this, "boot_volume");
  public get bootVolume() {
    return this._bootVolume;
  }
  public putBootVolume(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecBootVolume) {
    this._bootVolume.internalValue = value;
  }
  public resetBootVolume() {
    this._bootVolume.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootVolumeInput() {
    return this._bootVolume.internalValue;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // image_name - computed: false, optional: true, required: false
  private _imageName?: string; 
  public get imageName() {
    return this.getStringAttribute('image_name');
  }
  public set imageName(value: string) {
    this._imageName = value;
  }
  public resetImageName() {
    this._imageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageNameInput() {
    return this._imageName;
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

  // primary_network_interface - computed: false, optional: true, required: false
  private _primaryNetworkInterface = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterfaceOutputReference(this, "primary_network_interface");
  public get primaryNetworkInterface() {
    return this._primaryNetworkInterface;
  }
  public putPrimaryNetworkInterface(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecPrimaryNetworkInterface) {
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

  // ssh_key_names - computed: false, optional: true, required: false
  private _sshKeyNames?: string[]; 
  public get sshKeyNames() {
    return this.getListAttribute('ssh_key_names');
  }
  public set sshKeyNames(value: string[]) {
    this._sshKeyNames = value;
  }
  public resetSshKeyNames() {
    this._sshKeyNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyNamesInput() {
    return this._sshKeyNames;
  }

  // ssh_keys - computed: false, optional: true, required: false
  private _sshKeys?: string[]; 
  public get sshKeys() {
    return this.getListAttribute('ssh_keys');
  }
  public set sshKeys(value: string[]) {
    this._sshKeys = value;
  }
  public resetSshKeys() {
    this._sshKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeysInput() {
    return this._sshKeys;
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
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate {
  /**
  * Spec is the specification of the desired behavior of the machine.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#spec DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#spec}
  */
  readonly spec: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    spec: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    spec: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._spec.internalValue = value.spec;
    }
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateSpec) {
    this._spec.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec {
  /**
  * IBMVPCMachineTemplateResource describes the data needed to create am IBMVPCMachine from a template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#template DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest#template}
  */
  readonly template: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate;
}

export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecToTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    template: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateToTerraform(struct!.template),
  }
}


export function dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    template: {
      value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._template.internalValue = value.template;
    }
  }

  // template - computed: false, optional: false, required: true
  private _template = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecTemplate) {
    this._template.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest}
*/
export class DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_infrastructure_cluster_x_k8s_io_ibmvpc_machine_template_v1beta1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.22',
        providerVersionConstraint: '2025.12.22'
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
  private _metadata = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec) {
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
      metadata: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SInfrastructureClusterXK8SIoIbmvpcMachineTemplateV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
