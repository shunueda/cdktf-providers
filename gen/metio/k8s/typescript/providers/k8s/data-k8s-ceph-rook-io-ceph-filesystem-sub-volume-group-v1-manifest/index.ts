// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#metadata DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#metadata}
  */
  readonly metadata: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata;
  /**
  * Spec represents the specification of a Ceph Filesystem SubVolumeGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#spec DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#spec}
  */
  readonly spec: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec;
}
export interface DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#annotations DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#labels DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#name DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#namespace DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadataToTerraform(struct?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadataToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#distributed DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#distributed}
  */
  readonly distributed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#export DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#export}
  */
  readonly export?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#random DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#random}
  */
  readonly random?: number;
}

export function dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinningToTerraform(struct?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    distributed: cdktf.numberToTerraform(struct!.distributed),
    export: cdktf.numberToTerraform(struct!.export),
    random: cdktf.numberToTerraform(struct!.random),
  }
}


export function dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinningToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    distributed: {
      value: cdktf.numberToHclTerraform(struct!.distributed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    export: {
      value: cdktf.numberToHclTerraform(struct!.export),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    random: {
      value: cdktf.numberToHclTerraform(struct!.random),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinningOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._distributed !== undefined) {
      hasAnyValues = true;
      internalValueResult.distributed = this._distributed;
    }
    if (this._export !== undefined) {
      hasAnyValues = true;
      internalValueResult.export = this._export;
    }
    if (this._random !== undefined) {
      hasAnyValues = true;
      internalValueResult.random = this._random;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._distributed = undefined;
      this._export = undefined;
      this._random = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._distributed = value.distributed;
      this._export = value.export;
      this._random = value.random;
    }
  }

  // distributed - computed: false, optional: true, required: false
  private _distributed?: number; 
  public get distributed() {
    return this.getNumberAttribute('distributed');
  }
  public set distributed(value: number) {
    this._distributed = value;
  }
  public resetDistributed() {
    this._distributed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributedInput() {
    return this._distributed;
  }

  // export - computed: false, optional: true, required: false
  private _export?: number; 
  public get export() {
    return this.getNumberAttribute('export');
  }
  public set export(value: number) {
    this._export = value;
  }
  public resetExport() {
    this._export = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportInput() {
    return this._export;
  }

  // random - computed: false, optional: true, required: false
  private _random?: number; 
  public get random() {
    return this.getNumberAttribute('random');
  }
  public set random(value: number) {
    this._random = value;
  }
  public resetRandom() {
    this._random = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get randomInput() {
    return this._random;
  }
}
export interface DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec {
  /**
  * The data pool name for the Ceph Filesystem subvolume group layout, if the default CephFS pool is not desired.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#data_pool_name DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#data_pool_name}
  */
  readonly dataPoolName?: string;
  /**
  * FilesystemName is the name of Ceph Filesystem SubVolumeGroup volume name. Typically it's the name of the CephFilesystem CR. If not coming from the CephFilesystem CR, it can be retrieved from the list of Ceph Filesystem volumes with 'ceph fs volume ls'. To learn more about Ceph Filesystem abstractions see https://docs.ceph.com/en/latest/cephfs/fs-volumes/#fs-volumes-and-subvolumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#filesystem_name DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#filesystem_name}
  */
  readonly filesystemName: string;
  /**
  * The name of the subvolume group. If not set, the default is the name of the subvolumeGroup CR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#name DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Pinning configuration of CephFilesystemSubVolumeGroup, reference https://docs.ceph.com/en/latest/cephfs/fs-volumes/#pinning-subvolumes-and-subvolume-groups only one out of (export, distributed, random) can be set at a time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#pinning DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#pinning}
  */
  readonly pinning?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning;
  /**
  * Quota size of the Ceph Filesystem subvolume group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#quota DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest#quota}
  */
  readonly quota?: string;
}

export function dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecToTerraform(struct?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    data_pool_name: cdktf.stringToTerraform(struct!.dataPoolName),
    filesystem_name: cdktf.stringToTerraform(struct!.filesystemName),
    name: cdktf.stringToTerraform(struct!.name),
    pinning: dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinningToTerraform(struct!.pinning),
    quota: cdktf.stringToTerraform(struct!.quota),
  }
}


export function dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecToHclTerraform(struct?: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    data_pool_name: {
      value: cdktf.stringToHclTerraform(struct!.dataPoolName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filesystem_name: {
      value: cdktf.stringToHclTerraform(struct!.filesystemName),
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
    pinning: {
      value: dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinningToHclTerraform(struct!.pinning),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning",
    },
    quota: {
      value: cdktf.stringToHclTerraform(struct!.quota),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataPoolName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataPoolName = this._dataPoolName;
    }
    if (this._filesystemName !== undefined) {
      hasAnyValues = true;
      internalValueResult.filesystemName = this._filesystemName;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._pinning?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pinning = this._pinning?.internalValue;
    }
    if (this._quota !== undefined) {
      hasAnyValues = true;
      internalValueResult.quota = this._quota;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dataPoolName = undefined;
      this._filesystemName = undefined;
      this._name = undefined;
      this._pinning.internalValue = undefined;
      this._quota = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dataPoolName = value.dataPoolName;
      this._filesystemName = value.filesystemName;
      this._name = value.name;
      this._pinning.internalValue = value.pinning;
      this._quota = value.quota;
    }
  }

  // data_pool_name - computed: false, optional: true, required: false
  private _dataPoolName?: string; 
  public get dataPoolName() {
    return this.getStringAttribute('data_pool_name');
  }
  public set dataPoolName(value: string) {
    this._dataPoolName = value;
  }
  public resetDataPoolName() {
    this._dataPoolName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataPoolNameInput() {
    return this._dataPoolName;
  }

  // filesystem_name - computed: false, optional: false, required: true
  private _filesystemName?: string; 
  public get filesystemName() {
    return this.getStringAttribute('filesystem_name');
  }
  public set filesystemName(value: string) {
    this._filesystemName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filesystemNameInput() {
    return this._filesystemName;
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

  // pinning - computed: false, optional: true, required: false
  private _pinning = new DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinningOutputReference(this, "pinning");
  public get pinning() {
    return this._pinning;
  }
  public putPinning(value: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecPinning) {
    this._pinning.internalValue = value;
  }
  public resetPinning() {
    this._pinning.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinningInput() {
    return this._pinning.internalValue;
  }

  // quota - computed: false, optional: true, required: false
  private _quota?: string; 
  public get quota() {
    return this.getStringAttribute('quota');
  }
  public set quota(value: string) {
    this._quota = value;
  }
  public resetQuota() {
    this._quota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotaInput() {
    return this._quota;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest k8s_ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest}
*/
export class DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest to import
  * @param importFromId The id of the existing DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCephRookIoCephFilesystemSubVolumeGroupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest k8s_ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_ceph_rook_io_ceph_filesystem_sub_volume_group_v1_manifest',
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
  private _metadata = new DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec) {
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
      metadata: dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestMetadata",
      },
      spec: {
        value: dataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCephRookIoCephFilesystemSubVolumeGroupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
