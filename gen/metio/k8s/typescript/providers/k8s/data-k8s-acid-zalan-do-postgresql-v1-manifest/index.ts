// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAcidZalanDoPostgresqlV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#metadata DataK8SAcidZalanDoPostgresqlV1Manifest#metadata}
  */
  readonly metadata: DataK8SAcidZalanDoPostgresqlV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#spec DataK8SAcidZalanDoPostgresqlV1Manifest#spec}
  */
  readonly spec: DataK8SAcidZalanDoPostgresqlV1ManifestSpec;
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#annotations DataK8SAcidZalanDoPostgresqlV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#labels DataK8SAcidZalanDoPostgresqlV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#name DataK8SAcidZalanDoPostgresqlV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#namespace DataK8SAcidZalanDoPostgresqlV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestMetadataToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestMetadataToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#is_sub_path_expr DataK8SAcidZalanDoPostgresqlV1Manifest#is_sub_path_expr}
  */
  readonly isSubPathExpr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#mount_path DataK8SAcidZalanDoPostgresqlV1Manifest#mount_path}
  */
  readonly mountPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#name DataK8SAcidZalanDoPostgresqlV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#sub_path DataK8SAcidZalanDoPostgresqlV1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#target_containers DataK8SAcidZalanDoPostgresqlV1Manifest#target_containers}
  */
  readonly targetContainers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#volume_source DataK8SAcidZalanDoPostgresqlV1Manifest#volume_source}
  */
  readonly volumeSource: { [key: string]: string };
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    is_sub_path_expr: cdktf.booleanToTerraform(struct!.isSubPathExpr),
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    name: cdktf.stringToTerraform(struct!.name),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    target_containers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.targetContainers),
    volume_source: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.volumeSource),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    is_sub_path_expr: {
      value: cdktf.booleanToHclTerraform(struct!.isSubPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_containers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.targetContainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume_source: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.volumeSource),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._isSubPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSubPathExpr = this._isSubPathExpr;
    }
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._targetContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetContainers = this._targetContainers;
    }
    if (this._volumeSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeSource = this._volumeSource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._isSubPathExpr = undefined;
      this._mountPath = undefined;
      this._name = undefined;
      this._subPath = undefined;
      this._targetContainers = undefined;
      this._volumeSource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._isSubPathExpr = value.isSubPathExpr;
      this._mountPath = value.mountPath;
      this._name = value.name;
      this._subPath = value.subPath;
      this._targetContainers = value.targetContainers;
      this._volumeSource = value.volumeSource;
    }
  }

  // is_sub_path_expr - computed: false, optional: true, required: false
  private _isSubPathExpr?: boolean | cdktf.IResolvable; 
  public get isSubPathExpr() {
    return this.getBooleanAttribute('is_sub_path_expr');
  }
  public set isSubPathExpr(value: boolean | cdktf.IResolvable) {
    this._isSubPathExpr = value;
  }
  public resetIsSubPathExpr() {
    this._isSubPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSubPathExprInput() {
    return this._isSubPathExpr;
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

  // target_containers - computed: false, optional: true, required: false
  private _targetContainers?: string[]; 
  public get targetContainers() {
    return this.getListAttribute('target_containers');
  }
  public set targetContainers(value: string[]) {
    this._targetContainers = value;
  }
  public resetTargetContainers() {
    this._targetContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetContainersInput() {
    return this._targetContainers;
  }

  // volume_source - computed: false, optional: false, required: true
  private _volumeSource?: { [key: string]: string }; 
  public get volumeSource() {
    return this.getStringMapAttribute('volume_source');
  }
  public set volumeSource(value: { [key: string]: string }) {
    this._volumeSource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeSourceInput() {
    return this._volumeSource;
  }
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#cluster DataK8SAcidZalanDoPostgresqlV1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#s3_access_key_id DataK8SAcidZalanDoPostgresqlV1Manifest#s3_access_key_id}
  */
  readonly s3AccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#s3_endpoint DataK8SAcidZalanDoPostgresqlV1Manifest#s3_endpoint}
  */
  readonly s3Endpoint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#s3_force_path_style DataK8SAcidZalanDoPostgresqlV1Manifest#s3_force_path_style}
  */
  readonly s3ForcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#s3_secret_access_key DataK8SAcidZalanDoPostgresqlV1Manifest#s3_secret_access_key}
  */
  readonly s3SecretAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#s3_wal_path DataK8SAcidZalanDoPostgresqlV1Manifest#s3_wal_path}
  */
  readonly s3WalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#timestamp DataK8SAcidZalanDoPostgresqlV1Manifest#timestamp}
  */
  readonly timestamp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#uid DataK8SAcidZalanDoPostgresqlV1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecCloneToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster: cdktf.stringToTerraform(struct!.cluster),
    s3_access_key_id: cdktf.stringToTerraform(struct!.s3AccessKeyId),
    s3_endpoint: cdktf.stringToTerraform(struct!.s3Endpoint),
    s3_force_path_style: cdktf.booleanToTerraform(struct!.s3ForcePathStyle),
    s3_secret_access_key: cdktf.stringToTerraform(struct!.s3SecretAccessKey),
    s3_wal_path: cdktf.stringToTerraform(struct!.s3WalPath),
    timestamp: cdktf.stringToTerraform(struct!.timestamp),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecCloneToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_access_key_id: {
      value: cdktf.stringToHclTerraform(struct!.s3AccessKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.s3Endpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.s3ForcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    s3_secret_access_key: {
      value: cdktf.stringToHclTerraform(struct!.s3SecretAccessKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_wal_path: {
      value: cdktf.stringToHclTerraform(struct!.s3WalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timestamp: {
      value: cdktf.stringToHclTerraform(struct!.timestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecCloneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._s3AccessKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3AccessKeyId = this._s3AccessKeyId;
    }
    if (this._s3Endpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3Endpoint = this._s3Endpoint;
    }
    if (this._s3ForcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3ForcePathStyle = this._s3ForcePathStyle;
    }
    if (this._s3SecretAccessKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3SecretAccessKey = this._s3SecretAccessKey;
    }
    if (this._s3WalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3WalPath = this._s3WalPath;
    }
    if (this._timestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.timestamp = this._timestamp;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cluster = undefined;
      this._s3AccessKeyId = undefined;
      this._s3Endpoint = undefined;
      this._s3ForcePathStyle = undefined;
      this._s3SecretAccessKey = undefined;
      this._s3WalPath = undefined;
      this._timestamp = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cluster = value.cluster;
      this._s3AccessKeyId = value.s3AccessKeyId;
      this._s3Endpoint = value.s3Endpoint;
      this._s3ForcePathStyle = value.s3ForcePathStyle;
      this._s3SecretAccessKey = value.s3SecretAccessKey;
      this._s3WalPath = value.s3WalPath;
      this._timestamp = value.timestamp;
      this._uid = value.uid;
    }
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // s3_access_key_id - computed: false, optional: true, required: false
  private _s3AccessKeyId?: string; 
  public get s3AccessKeyId() {
    return this.getStringAttribute('s3_access_key_id');
  }
  public set s3AccessKeyId(value: string) {
    this._s3AccessKeyId = value;
  }
  public resetS3AccessKeyId() {
    this._s3AccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3AccessKeyIdInput() {
    return this._s3AccessKeyId;
  }

  // s3_endpoint - computed: false, optional: true, required: false
  private _s3Endpoint?: string; 
  public get s3Endpoint() {
    return this.getStringAttribute('s3_endpoint');
  }
  public set s3Endpoint(value: string) {
    this._s3Endpoint = value;
  }
  public resetS3Endpoint() {
    this._s3Endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3EndpointInput() {
    return this._s3Endpoint;
  }

  // s3_force_path_style - computed: false, optional: true, required: false
  private _s3ForcePathStyle?: boolean | cdktf.IResolvable; 
  public get s3ForcePathStyle() {
    return this.getBooleanAttribute('s3_force_path_style');
  }
  public set s3ForcePathStyle(value: boolean | cdktf.IResolvable) {
    this._s3ForcePathStyle = value;
  }
  public resetS3ForcePathStyle() {
    this._s3ForcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ForcePathStyleInput() {
    return this._s3ForcePathStyle;
  }

  // s3_secret_access_key - computed: false, optional: true, required: false
  private _s3SecretAccessKey?: string; 
  public get s3SecretAccessKey() {
    return this.getStringAttribute('s3_secret_access_key');
  }
  public set s3SecretAccessKey(value: string) {
    this._s3SecretAccessKey = value;
  }
  public resetS3SecretAccessKey() {
    this._s3SecretAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3SecretAccessKeyInput() {
    return this._s3SecretAccessKey;
  }

  // s3_wal_path - computed: false, optional: true, required: false
  private _s3WalPath?: string; 
  public get s3WalPath() {
    return this.getStringAttribute('s3_wal_path');
  }
  public set s3WalPath(value: string) {
    this._s3WalPath = value;
  }
  public resetS3WalPath() {
    this._s3WalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3WalPathInput() {
    return this._s3WalPath;
  }

  // timestamp - computed: false, optional: true, required: false
  private _timestamp?: string; 
  public get timestamp() {
    return this.getStringAttribute('timestamp');
  }
  public set timestamp(value: string) {
    this._timestamp = value;
  }
  public resetTimestamp() {
    this._timestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInput() {
    return this._timestamp;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#cpu DataK8SAcidZalanDoPostgresqlV1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#memory DataK8SAcidZalanDoPostgresqlV1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimitsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimitsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#cpu DataK8SAcidZalanDoPostgresqlV1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#memory DataK8SAcidZalanDoPostgresqlV1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequestsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequestsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#limits DataK8SAcidZalanDoPostgresqlV1Manifest#limits}
  */
  readonly limits?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#requests DataK8SAcidZalanDoPostgresqlV1Manifest#requests}
  */
  readonly requests?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimitsToTerraform(struct!.limits),
    requests: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequestsToTerraform(struct!.requests),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits",
    },
    requests: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#docker_image DataK8SAcidZalanDoPostgresqlV1Manifest#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#max_db_connections DataK8SAcidZalanDoPostgresqlV1Manifest#max_db_connections}
  */
  readonly maxDbConnections?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#mode DataK8SAcidZalanDoPostgresqlV1Manifest#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#number_of_instances DataK8SAcidZalanDoPostgresqlV1Manifest#number_of_instances}
  */
  readonly numberOfInstances?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#resources DataK8SAcidZalanDoPostgresqlV1Manifest#resources}
  */
  readonly resources?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#schema DataK8SAcidZalanDoPostgresqlV1Manifest#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#user DataK8SAcidZalanDoPostgresqlV1Manifest#user}
  */
  readonly user?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    max_db_connections: cdktf.numberToTerraform(struct!.maxDbConnections),
    mode: cdktf.stringToTerraform(struct!.mode),
    number_of_instances: cdktf.numberToTerraform(struct!.numberOfInstances),
    resources: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesToTerraform(struct!.resources),
    schema: cdktf.stringToTerraform(struct!.schema),
    user: cdktf.stringToTerraform(struct!.user),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_db_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxDbConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_instances: {
      value: cdktf.numberToHclTerraform(struct!.numberOfInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user: {
      value: cdktf.stringToHclTerraform(struct!.user),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._maxDbConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDbConnections = this._maxDbConnections;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._numberOfInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfInstances = this._numberOfInstances;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._user !== undefined) {
      hasAnyValues = true;
      internalValueResult.user = this._user;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dockerImage = undefined;
      this._maxDbConnections = undefined;
      this._mode = undefined;
      this._numberOfInstances = undefined;
      this._resources.internalValue = undefined;
      this._schema = undefined;
      this._user = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dockerImage = value.dockerImage;
      this._maxDbConnections = value.maxDbConnections;
      this._mode = value.mode;
      this._numberOfInstances = value.numberOfInstances;
      this._resources.internalValue = value.resources;
      this._schema = value.schema;
      this._user = value.user;
    }
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // max_db_connections - computed: false, optional: true, required: false
  private _maxDbConnections?: number; 
  public get maxDbConnections() {
    return this.getNumberAttribute('max_db_connections');
  }
  public set maxDbConnections(value: number) {
    this._maxDbConnections = value;
  }
  public resetMaxDbConnections() {
    this._maxDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDbConnectionsInput() {
    return this._maxDbConnections;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // number_of_instances - computed: false, optional: true, required: false
  private _numberOfInstances?: number; 
  public get numberOfInstances() {
    return this.getNumberAttribute('number_of_instances');
  }
  public set numberOfInstances(value: number) {
    this._numberOfInstances = value;
  }
  public resetNumberOfInstances() {
    this._numberOfInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfInstancesInput() {
    return this._numberOfInstances;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // user - computed: false, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#key DataK8SAcidZalanDoPostgresqlV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#operator DataK8SAcidZalanDoPostgresqlV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#values DataK8SAcidZalanDoPostgresqlV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#key DataK8SAcidZalanDoPostgresqlV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#operator DataK8SAcidZalanDoPostgresqlV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#values DataK8SAcidZalanDoPostgresqlV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#match_expressions DataK8SAcidZalanDoPostgresqlV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#match_fields DataK8SAcidZalanDoPostgresqlV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceMatchFields[] | cdktf.IResolvable) {
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
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#preference DataK8SAcidZalanDoPostgresqlV1Manifest#preference}
  */
  readonly preference: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#weight DataK8SAcidZalanDoPostgresqlV1Manifest#weight}
  */
  readonly weight: number;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preference: dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToTerraform(struct!.preference),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preference: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceToHclTerraform(struct!.preference),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference",
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _preference = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreferenceOutputReference(this, "preference");
  public get preference() {
    return this._preference;
  }
  public putPreference(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionPreference) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#key DataK8SAcidZalanDoPostgresqlV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#operator DataK8SAcidZalanDoPostgresqlV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#values DataK8SAcidZalanDoPostgresqlV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#key DataK8SAcidZalanDoPostgresqlV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#operator DataK8SAcidZalanDoPostgresqlV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#values DataK8SAcidZalanDoPostgresqlV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields | cdktf.IResolvable | undefined) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#match_expressions DataK8SAcidZalanDoPostgresqlV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#match_fields DataK8SAcidZalanDoPostgresqlV1Manifest#match_fields}
  */
  readonly matchFields?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_fields: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToTerraform, false)(struct!.matchFields),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList",
    },
    match_fields: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsToHclTerraform, false)(struct!.matchFields),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchExpressions[] | cdktf.IResolvable) {
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
  private _matchFields = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFieldsList(this, "match_fields", false);
  public get matchFields() {
    return this._matchFields;
  }
  public putMatchFields(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsMatchFields[] | cdktf.IResolvable) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#node_selector_terms DataK8SAcidZalanDoPostgresqlV1Manifest#node_selector_terms}
  */
  readonly nodeSelectorTerms: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    node_selector_terms: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToTerraform, false)(struct!.nodeSelectorTerms),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    node_selector_terms: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsToHclTerraform, false)(struct!.nodeSelectorTerms),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution | cdktf.IResolvable | undefined) {
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
  private _nodeSelectorTerms = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTermsList(this, "node_selector_terms", false);
  public get nodeSelectorTerms() {
    return this._nodeSelectorTerms;
  }
  public putNodeSelectorTerms(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionNodeSelectorTerms[] | cdktf.IResolvable) {
    this._nodeSelectorTerms.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeSelectorTermsInput() {
    return this._nodeSelectorTerms.internalValue;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#preferred_during_scheduling_ignored_during_execution DataK8SAcidZalanDoPostgresqlV1Manifest#preferred_during_scheduling_ignored_during_execution}
  */
  readonly preferredDuringSchedulingIgnoredDuringExecution?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#required_during_scheduling_ignored_during_execution DataK8SAcidZalanDoPostgresqlV1Manifest#required_during_scheduling_ignored_during_execution}
  */
  readonly requiredDuringSchedulingIgnoredDuringExecution?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    preferred_during_scheduling_ignored_during_execution: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
    required_during_scheduling_ignored_during_execution: dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    preferred_during_scheduling_ignored_during_execution: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionToHclTerraform, false)(struct!.preferredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList",
    },
    required_during_scheduling_ignored_during_execution: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionToHclTerraform(struct!.requiredDuringSchedulingIgnoredDuringExecution),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity | cdktf.IResolvable | undefined) {
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
  private _preferredDuringSchedulingIgnoredDuringExecution = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecutionList(this, "preferred_during_scheduling_ignored_during_execution", false);
  public get preferredDuringSchedulingIgnoredDuringExecution() {
    return this._preferredDuringSchedulingIgnoredDuringExecution;
  }
  public putPreferredDuringSchedulingIgnoredDuringExecution(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityPreferredDuringSchedulingIgnoredDuringExecution[] | cdktf.IResolvable) {
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
  private _requiredDuringSchedulingIgnoredDuringExecution = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecutionOutputReference(this, "required_during_scheduling_ignored_during_execution");
  public get requiredDuringSchedulingIgnoredDuringExecution() {
    return this._requiredDuringSchedulingIgnoredDuringExecution;
  }
  public putRequiredDuringSchedulingIgnoredDuringExecution(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityRequiredDuringSchedulingIgnoredDuringExecution) {
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
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#failsafe_mode DataK8SAcidZalanDoPostgresqlV1Manifest#failsafe_mode}
  */
  readonly failsafeMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#initdb DataK8SAcidZalanDoPostgresqlV1Manifest#initdb}
  */
  readonly initdb?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#loop_wait DataK8SAcidZalanDoPostgresqlV1Manifest#loop_wait}
  */
  readonly loopWait?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#maximum_lag_on_failover DataK8SAcidZalanDoPostgresqlV1Manifest#maximum_lag_on_failover}
  */
  readonly maximumLagOnFailover?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#pg_hba DataK8SAcidZalanDoPostgresqlV1Manifest#pg_hba}
  */
  readonly pgHba?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#retry_timeout DataK8SAcidZalanDoPostgresqlV1Manifest#retry_timeout}
  */
  readonly retryTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#slots DataK8SAcidZalanDoPostgresqlV1Manifest#slots}
  */
  readonly slots?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#synchronous_mode DataK8SAcidZalanDoPostgresqlV1Manifest#synchronous_mode}
  */
  readonly synchronousMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#synchronous_mode_strict DataK8SAcidZalanDoPostgresqlV1Manifest#synchronous_mode_strict}
  */
  readonly synchronousModeStrict?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#synchronous_node_count DataK8SAcidZalanDoPostgresqlV1Manifest#synchronous_node_count}
  */
  readonly synchronousNodeCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#ttl DataK8SAcidZalanDoPostgresqlV1Manifest#ttl}
  */
  readonly ttl?: number;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroniToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failsafe_mode: cdktf.booleanToTerraform(struct!.failsafeMode),
    initdb: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.initdb),
    loop_wait: cdktf.numberToTerraform(struct!.loopWait),
    maximum_lag_on_failover: cdktf.numberToTerraform(struct!.maximumLagOnFailover),
    pg_hba: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.pgHba),
    retry_timeout: cdktf.numberToTerraform(struct!.retryTimeout),
    slots: cdktf.hashMapper(cdktf.hashMapper(cdktf.stringToTerraform))(struct!.slots),
    synchronous_mode: cdktf.booleanToTerraform(struct!.synchronousMode),
    synchronous_mode_strict: cdktf.booleanToTerraform(struct!.synchronousModeStrict),
    synchronous_node_count: cdktf.numberToTerraform(struct!.synchronousNodeCount),
    ttl: cdktf.numberToTerraform(struct!.ttl),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroniToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failsafe_mode: {
      value: cdktf.booleanToHclTerraform(struct!.failsafeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    initdb: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.initdb),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    loop_wait: {
      value: cdktf.numberToHclTerraform(struct!.loopWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maximum_lag_on_failover: {
      value: cdktf.numberToHclTerraform(struct!.maximumLagOnFailover),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pg_hba: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.pgHba),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    retry_timeout: {
      value: cdktf.numberToHclTerraform(struct!.retryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slots: {
      value: cdktf.hashMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform))(struct!.slots),
      isBlock: false,
      type: "map",
      storageClassType: "stringMapMap",
    },
    synchronous_mode: {
      value: cdktf.booleanToHclTerraform(struct!.synchronousMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synchronous_mode_strict: {
      value: cdktf.booleanToHclTerraform(struct!.synchronousModeStrict),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synchronous_node_count: {
      value: cdktf.numberToHclTerraform(struct!.synchronousNodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl: {
      value: cdktf.numberToHclTerraform(struct!.ttl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroniOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failsafeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.failsafeMode = this._failsafeMode;
    }
    if (this._initdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.initdb = this._initdb;
    }
    if (this._loopWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.loopWait = this._loopWait;
    }
    if (this._maximumLagOnFailover !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumLagOnFailover = this._maximumLagOnFailover;
    }
    if (this._pgHba !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgHba = this._pgHba;
    }
    if (this._retryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryTimeout = this._retryTimeout;
    }
    if (this._slots !== undefined) {
      hasAnyValues = true;
      internalValueResult.slots = this._slots;
    }
    if (this._synchronousMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousMode = this._synchronousMode;
    }
    if (this._synchronousModeStrict !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousModeStrict = this._synchronousModeStrict;
    }
    if (this._synchronousNodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousNodeCount = this._synchronousNodeCount;
    }
    if (this._ttl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttl = this._ttl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._failsafeMode = undefined;
      this._initdb = undefined;
      this._loopWait = undefined;
      this._maximumLagOnFailover = undefined;
      this._pgHba = undefined;
      this._retryTimeout = undefined;
      this._slots = undefined;
      this._synchronousMode = undefined;
      this._synchronousModeStrict = undefined;
      this._synchronousNodeCount = undefined;
      this._ttl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._failsafeMode = value.failsafeMode;
      this._initdb = value.initdb;
      this._loopWait = value.loopWait;
      this._maximumLagOnFailover = value.maximumLagOnFailover;
      this._pgHba = value.pgHba;
      this._retryTimeout = value.retryTimeout;
      this._slots = value.slots;
      this._synchronousMode = value.synchronousMode;
      this._synchronousModeStrict = value.synchronousModeStrict;
      this._synchronousNodeCount = value.synchronousNodeCount;
      this._ttl = value.ttl;
    }
  }

  // failsafe_mode - computed: false, optional: true, required: false
  private _failsafeMode?: boolean | cdktf.IResolvable; 
  public get failsafeMode() {
    return this.getBooleanAttribute('failsafe_mode');
  }
  public set failsafeMode(value: boolean | cdktf.IResolvable) {
    this._failsafeMode = value;
  }
  public resetFailsafeMode() {
    this._failsafeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failsafeModeInput() {
    return this._failsafeMode;
  }

  // initdb - computed: false, optional: true, required: false
  private _initdb?: { [key: string]: string }; 
  public get initdb() {
    return this.getStringMapAttribute('initdb');
  }
  public set initdb(value: { [key: string]: string }) {
    this._initdb = value;
  }
  public resetInitdb() {
    this._initdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initdbInput() {
    return this._initdb;
  }

  // loop_wait - computed: false, optional: true, required: false
  private _loopWait?: number; 
  public get loopWait() {
    return this.getNumberAttribute('loop_wait');
  }
  public set loopWait(value: number) {
    this._loopWait = value;
  }
  public resetLoopWait() {
    this._loopWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loopWaitInput() {
    return this._loopWait;
  }

  // maximum_lag_on_failover - computed: false, optional: true, required: false
  private _maximumLagOnFailover?: number; 
  public get maximumLagOnFailover() {
    return this.getNumberAttribute('maximum_lag_on_failover');
  }
  public set maximumLagOnFailover(value: number) {
    this._maximumLagOnFailover = value;
  }
  public resetMaximumLagOnFailover() {
    this._maximumLagOnFailover = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumLagOnFailoverInput() {
    return this._maximumLagOnFailover;
  }

  // pg_hba - computed: false, optional: true, required: false
  private _pgHba?: string[]; 
  public get pgHba() {
    return this.getListAttribute('pg_hba');
  }
  public set pgHba(value: string[]) {
    this._pgHba = value;
  }
  public resetPgHba() {
    this._pgHba = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgHbaInput() {
    return this._pgHba;
  }

  // retry_timeout - computed: false, optional: true, required: false
  private _retryTimeout?: number; 
  public get retryTimeout() {
    return this.getNumberAttribute('retry_timeout');
  }
  public set retryTimeout(value: number) {
    this._retryTimeout = value;
  }
  public resetRetryTimeout() {
    this._retryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryTimeoutInput() {
    return this._retryTimeout;
  }

  // slots - computed: false, optional: true, required: false
  private _slots?: { [key: string]: { [key: string]: string } } | cdktf.IResolvable; 
  public get slots() {
    return this.interpolationForAttribute('slots');
  }
  public set slots(value: { [key: string]: { [key: string]: string } } | cdktf.IResolvable) {
    this._slots = value;
  }
  public resetSlots() {
    this._slots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotsInput() {
    return this._slots;
  }

  // synchronous_mode - computed: false, optional: true, required: false
  private _synchronousMode?: boolean | cdktf.IResolvable; 
  public get synchronousMode() {
    return this.getBooleanAttribute('synchronous_mode');
  }
  public set synchronousMode(value: boolean | cdktf.IResolvable) {
    this._synchronousMode = value;
  }
  public resetSynchronousMode() {
    this._synchronousMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousModeInput() {
    return this._synchronousMode;
  }

  // synchronous_mode_strict - computed: false, optional: true, required: false
  private _synchronousModeStrict?: boolean | cdktf.IResolvable; 
  public get synchronousModeStrict() {
    return this.getBooleanAttribute('synchronous_mode_strict');
  }
  public set synchronousModeStrict(value: boolean | cdktf.IResolvable) {
    this._synchronousModeStrict = value;
  }
  public resetSynchronousModeStrict() {
    this._synchronousModeStrict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousModeStrictInput() {
    return this._synchronousModeStrict;
  }

  // synchronous_node_count - computed: false, optional: true, required: false
  private _synchronousNodeCount?: number; 
  public get synchronousNodeCount() {
    return this.getNumberAttribute('synchronous_node_count');
  }
  public set synchronousNodeCount(value: number) {
    this._synchronousNodeCount = value;
  }
  public resetSynchronousNodeCount() {
    this._synchronousNodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousNodeCountInput() {
    return this._synchronousNodeCount;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#parameters DataK8SAcidZalanDoPostgresqlV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#version DataK8SAcidZalanDoPostgresqlV1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresqlToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresqlToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameters = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameters = value.parameters;
      this._version = value.version;
    }
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters?: { [key: string]: string }; 
  public get parameters() {
    return this.getStringMapAttribute('parameters');
  }
  public set parameters(value: { [key: string]: string }) {
    this._parameters = value;
  }
  public resetParameters() {
    this._parameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#default_roles DataK8SAcidZalanDoPostgresqlV1Manifest#default_roles}
  */
  readonly defaultRoles?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#default_users DataK8SAcidZalanDoPostgresqlV1Manifest#default_users}
  */
  readonly defaultUsers?: boolean | cdktf.IResolvable;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemasToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_roles: cdktf.booleanToTerraform(struct!.defaultRoles),
    default_users: cdktf.booleanToTerraform(struct!.defaultUsers),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemasToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_roles: {
      value: cdktf.booleanToHclTerraform(struct!.defaultRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_users: {
      value: cdktf.booleanToHclTerraform(struct!.defaultUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultRoles = this._defaultRoles;
    }
    if (this._defaultUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUsers = this._defaultUsers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultRoles = undefined;
      this._defaultUsers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultRoles = value.defaultRoles;
      this._defaultUsers = value.defaultUsers;
    }
  }

  // default_roles - computed: false, optional: true, required: false
  private _defaultRoles?: boolean | cdktf.IResolvable; 
  public get defaultRoles() {
    return this.getBooleanAttribute('default_roles');
  }
  public set defaultRoles(value: boolean | cdktf.IResolvable) {
    this._defaultRoles = value;
  }
  public resetDefaultRoles() {
    this._defaultRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRolesInput() {
    return this._defaultRoles;
  }

  // default_users - computed: false, optional: true, required: false
  private _defaultUsers?: boolean | cdktf.IResolvable; 
  public get defaultUsers() {
    return this.getBooleanAttribute('default_users');
  }
  public set defaultUsers(value: boolean | cdktf.IResolvable) {
    this._defaultUsers = value;
  }
  public resetDefaultUsers() {
    this._defaultUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUsersInput() {
    return this._defaultUsers;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#default_users DataK8SAcidZalanDoPostgresqlV1Manifest#default_users}
  */
  readonly defaultUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#extensions DataK8SAcidZalanDoPostgresqlV1Manifest#extensions}
  */
  readonly extensions?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#schemas DataK8SAcidZalanDoPostgresqlV1Manifest#schemas}
  */
  readonly schemas?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#secret_namespace DataK8SAcidZalanDoPostgresqlV1Manifest#secret_namespace}
  */
  readonly secretNamespace?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_users: cdktf.booleanToTerraform(struct!.defaultUsers),
    extensions: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extensions),
    schemas: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemasToTerraform(struct!.schemas),
    secret_namespace: cdktf.stringToTerraform(struct!.secretNamespace),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_users: {
      value: cdktf.booleanToHclTerraform(struct!.defaultUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    extensions: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extensions),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    schemas: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemasToHclTerraform(struct!.schemas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas",
    },
    secret_namespace: {
      value: cdktf.stringToHclTerraform(struct!.secretNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultUsers = this._defaultUsers;
    }
    if (this._extensions !== undefined) {
      hasAnyValues = true;
      internalValueResult.extensions = this._extensions;
    }
    if (this._schemas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemas = this._schemas?.internalValue;
    }
    if (this._secretNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretNamespace = this._secretNamespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultUsers = undefined;
      this._extensions = undefined;
      this._schemas.internalValue = undefined;
      this._secretNamespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultUsers = value.defaultUsers;
      this._extensions = value.extensions;
      this._schemas.internalValue = value.schemas;
      this._secretNamespace = value.secretNamespace;
    }
  }

  // default_users - computed: false, optional: true, required: false
  private _defaultUsers?: boolean | cdktf.IResolvable; 
  public get defaultUsers() {
    return this.getBooleanAttribute('default_users');
  }
  public set defaultUsers(value: boolean | cdktf.IResolvable) {
    this._defaultUsers = value;
  }
  public resetDefaultUsers() {
    this._defaultUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultUsersInput() {
    return this._defaultUsers;
  }

  // extensions - computed: false, optional: true, required: false
  private _extensions?: { [key: string]: string }; 
  public get extensions() {
    return this.getStringMapAttribute('extensions');
  }
  public set extensions(value: { [key: string]: string }) {
    this._extensions = value;
  }
  public resetExtensions() {
    this._extensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionsInput() {
    return this._extensions;
  }

  // schemas - computed: false, optional: true, required: false
  private _schemas = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemasOutputReference(this, "schemas");
  public get schemas() {
    return this._schemas;
  }
  public putSchemas(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesSchemas) {
    this._schemas.internalValue = value;
  }
  public resetSchemas() {
    this._schemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemasInput() {
    return this._schemas.internalValue;
  }

  // secret_namespace - computed: false, optional: true, required: false
  private _secretNamespace?: string; 
  public get secretNamespace() {
    return this.getStringAttribute('secret_namespace');
  }
  public set secretNamespace(value: string) {
    this._secretNamespace = value;
  }
  public resetSecretNamespace() {
    this._secretNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretNamespaceInput() {
    return this._secretNamespace;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#cpu DataK8SAcidZalanDoPostgresqlV1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#hugepages_1_gi DataK8SAcidZalanDoPostgresqlV1Manifest#hugepages_1_gi}
  */
  readonly hugepages1Gi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#hugepages_2_mi DataK8SAcidZalanDoPostgresqlV1Manifest#hugepages_2_mi}
  */
  readonly hugepages2Mi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#memory DataK8SAcidZalanDoPostgresqlV1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimitsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    hugepages_1_gi: cdktf.stringToTerraform(struct!.hugepages1Gi),
    hugepages_2_mi: cdktf.stringToTerraform(struct!.hugepages2Mi),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimitsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hugepages_1_gi: {
      value: cdktf.stringToHclTerraform(struct!.hugepages1Gi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hugepages_2_mi: {
      value: cdktf.stringToHclTerraform(struct!.hugepages2Mi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._hugepages1Gi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepages1Gi = this._hugepages1Gi;
    }
    if (this._hugepages2Mi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepages2Mi = this._hugepages2Mi;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._hugepages1Gi = undefined;
      this._hugepages2Mi = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._hugepages1Gi = value.hugepages1Gi;
      this._hugepages2Mi = value.hugepages2Mi;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // hugepages_1_gi - computed: false, optional: true, required: false
  private _hugepages1Gi?: string; 
  public get hugepages1Gi() {
    return this.getStringAttribute('hugepages_1_gi');
  }
  public set hugepages1Gi(value: string) {
    this._hugepages1Gi = value;
  }
  public resetHugepages1Gi() {
    this._hugepages1Gi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepages1GiInput() {
    return this._hugepages1Gi;
  }

  // hugepages_2_mi - computed: false, optional: true, required: false
  private _hugepages2Mi?: string; 
  public get hugepages2Mi() {
    return this.getStringAttribute('hugepages_2_mi');
  }
  public set hugepages2Mi(value: string) {
    this._hugepages2Mi = value;
  }
  public resetHugepages2Mi() {
    this._hugepages2Mi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepages2MiInput() {
    return this._hugepages2Mi;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#cpu DataK8SAcidZalanDoPostgresqlV1Manifest#cpu}
  */
  readonly cpu?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#hugepages_1_gi DataK8SAcidZalanDoPostgresqlV1Manifest#hugepages_1_gi}
  */
  readonly hugepages1Gi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#hugepages_2_mi DataK8SAcidZalanDoPostgresqlV1Manifest#hugepages_2_mi}
  */
  readonly hugepages2Mi?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#memory DataK8SAcidZalanDoPostgresqlV1Manifest#memory}
  */
  readonly memory?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequestsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu: cdktf.stringToTerraform(struct!.cpu),
    hugepages_1_gi: cdktf.stringToTerraform(struct!.hugepages1Gi),
    hugepages_2_mi: cdktf.stringToTerraform(struct!.hugepages2Mi),
    memory: cdktf.stringToTerraform(struct!.memory),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequestsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu: {
      value: cdktf.stringToHclTerraform(struct!.cpu),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hugepages_1_gi: {
      value: cdktf.stringToHclTerraform(struct!.hugepages1Gi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hugepages_2_mi: {
      value: cdktf.stringToHclTerraform(struct!.hugepages2Mi),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    memory: {
      value: cdktf.stringToHclTerraform(struct!.memory),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequestsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpu = this._cpu;
    }
    if (this._hugepages1Gi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepages1Gi = this._hugepages1Gi;
    }
    if (this._hugepages2Mi !== undefined) {
      hasAnyValues = true;
      internalValueResult.hugepages2Mi = this._hugepages2Mi;
    }
    if (this._memory !== undefined) {
      hasAnyValues = true;
      internalValueResult.memory = this._memory;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cpu = undefined;
      this._hugepages1Gi = undefined;
      this._hugepages2Mi = undefined;
      this._memory = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cpu = value.cpu;
      this._hugepages1Gi = value.hugepages1Gi;
      this._hugepages2Mi = value.hugepages2Mi;
      this._memory = value.memory;
    }
  }

  // cpu - computed: false, optional: true, required: false
  private _cpu?: string; 
  public get cpu() {
    return this.getStringAttribute('cpu');
  }
  public set cpu(value: string) {
    this._cpu = value;
  }
  public resetCpu() {
    this._cpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuInput() {
    return this._cpu;
  }

  // hugepages_1_gi - computed: false, optional: true, required: false
  private _hugepages1Gi?: string; 
  public get hugepages1Gi() {
    return this.getStringAttribute('hugepages_1_gi');
  }
  public set hugepages1Gi(value: string) {
    this._hugepages1Gi = value;
  }
  public resetHugepages1Gi() {
    this._hugepages1Gi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepages1GiInput() {
    return this._hugepages1Gi;
  }

  // hugepages_2_mi - computed: false, optional: true, required: false
  private _hugepages2Mi?: string; 
  public get hugepages2Mi() {
    return this.getStringAttribute('hugepages_2_mi');
  }
  public set hugepages2Mi(value: string) {
    this._hugepages2Mi = value;
  }
  public resetHugepages2Mi() {
    this._hugepages2Mi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hugepages2MiInput() {
    return this._hugepages2Mi;
  }

  // memory - computed: false, optional: true, required: false
  private _memory?: string; 
  public get memory() {
    return this.getStringAttribute('memory');
  }
  public set memory(value: string) {
    this._memory = value;
  }
  public resetMemory() {
    this._memory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInput() {
    return this._memory;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#limits DataK8SAcidZalanDoPostgresqlV1Manifest#limits}
  */
  readonly limits?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#requests DataK8SAcidZalanDoPostgresqlV1Manifest#requests}
  */
  readonly requests?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimitsToTerraform(struct!.limits),
    requests: dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequestsToTerraform(struct!.requests),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits",
    },
    requests: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequestsToHclTerraform(struct!.requests),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._requests?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits.internalValue = undefined;
      this._requests.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits.internalValue = value.limits;
      this._requests.internalValue = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // requests - computed: false, optional: true, required: false
  private _requests = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequestsOutputReference(this, "requests");
  public get requests() {
    return this._requests;
  }
  public putRequests(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesRequests) {
    this._requests.internalValue = value;
  }
  public resetRequests() {
    this._requests.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests.internalValue;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#gs_wal_path DataK8SAcidZalanDoPostgresqlV1Manifest#gs_wal_path}
  */
  readonly gsWalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#s3_wal_path DataK8SAcidZalanDoPostgresqlV1Manifest#s3_wal_path}
  */
  readonly s3WalPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#standby_host DataK8SAcidZalanDoPostgresqlV1Manifest#standby_host}
  */
  readonly standbyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#standby_port DataK8SAcidZalanDoPostgresqlV1Manifest#standby_port}
  */
  readonly standbyPort?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecStandbyToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gs_wal_path: cdktf.stringToTerraform(struct!.gsWalPath),
    s3_wal_path: cdktf.stringToTerraform(struct!.s3WalPath),
    standby_host: cdktf.stringToTerraform(struct!.standbyHost),
    standby_port: cdktf.stringToTerraform(struct!.standbyPort),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecStandbyToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gs_wal_path: {
      value: cdktf.stringToHclTerraform(struct!.gsWalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    s3_wal_path: {
      value: cdktf.stringToHclTerraform(struct!.s3WalPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_host: {
      value: cdktf.stringToHclTerraform(struct!.standbyHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standby_port: {
      value: cdktf.stringToHclTerraform(struct!.standbyPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandbyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gsWalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.gsWalPath = this._gsWalPath;
    }
    if (this._s3WalPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3WalPath = this._s3WalPath;
    }
    if (this._standbyHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyHost = this._standbyHost;
    }
    if (this._standbyPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyPort = this._standbyPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gsWalPath = undefined;
      this._s3WalPath = undefined;
      this._standbyHost = undefined;
      this._standbyPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gsWalPath = value.gsWalPath;
      this._s3WalPath = value.s3WalPath;
      this._standbyHost = value.standbyHost;
      this._standbyPort = value.standbyPort;
    }
  }

  // gs_wal_path - computed: false, optional: true, required: false
  private _gsWalPath?: string; 
  public get gsWalPath() {
    return this.getStringAttribute('gs_wal_path');
  }
  public set gsWalPath(value: string) {
    this._gsWalPath = value;
  }
  public resetGsWalPath() {
    this._gsWalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gsWalPathInput() {
    return this._gsWalPath;
  }

  // s3_wal_path - computed: false, optional: true, required: false
  private _s3WalPath?: string; 
  public get s3WalPath() {
    return this.getStringAttribute('s3_wal_path');
  }
  public set s3WalPath(value: string) {
    this._s3WalPath = value;
  }
  public resetS3WalPath() {
    this._s3WalPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3WalPathInput() {
    return this._s3WalPath;
  }

  // standby_host - computed: false, optional: true, required: false
  private _standbyHost?: string; 
  public get standbyHost() {
    return this.getStringAttribute('standby_host');
  }
  public set standbyHost(value: string) {
    this._standbyHost = value;
  }
  public resetStandbyHost() {
    this._standbyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyHostInput() {
    return this._standbyHost;
  }

  // standby_port - computed: false, optional: true, required: false
  private _standbyPort?: string; 
  public get standbyPort() {
    return this.getStringAttribute('standby_port');
  }
  public set standbyPort(value: string) {
    this._standbyPort = value;
  }
  public resetStandbyPort() {
    this._standbyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyPortInput() {
    return this._standbyPort;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#event_type DataK8SAcidZalanDoPostgresqlV1Manifest#event_type}
  */
  readonly eventType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#id_column DataK8SAcidZalanDoPostgresqlV1Manifest#id_column}
  */
  readonly idColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#payload_column DataK8SAcidZalanDoPostgresqlV1Manifest#payload_column}
  */
  readonly payloadColumn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#recovery_event_type DataK8SAcidZalanDoPostgresqlV1Manifest#recovery_event_type}
  */
  readonly recoveryEventType?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTablesToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    event_type: cdktf.stringToTerraform(struct!.eventType),
    id_column: cdktf.stringToTerraform(struct!.idColumn),
    payload_column: cdktf.stringToTerraform(struct!.payloadColumn),
    recovery_event_type: cdktf.stringToTerraform(struct!.recoveryEventType),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTablesToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    event_type: {
      value: cdktf.stringToHclTerraform(struct!.eventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_column: {
      value: cdktf.stringToHclTerraform(struct!.idColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    payload_column: {
      value: cdktf.stringToHclTerraform(struct!.payloadColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_event_type: {
      value: cdktf.stringToHclTerraform(struct!.recoveryEventType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTablesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._eventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.eventType = this._eventType;
    }
    if (this._idColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.idColumn = this._idColumn;
    }
    if (this._payloadColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.payloadColumn = this._payloadColumn;
    }
    if (this._recoveryEventType !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryEventType = this._recoveryEventType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._eventType = undefined;
      this._idColumn = undefined;
      this._payloadColumn = undefined;
      this._recoveryEventType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._eventType = value.eventType;
      this._idColumn = value.idColumn;
      this._payloadColumn = value.payloadColumn;
      this._recoveryEventType = value.recoveryEventType;
    }
  }

  // event_type - computed: false, optional: false, required: true
  private _eventType?: string; 
  public get eventType() {
    return this.getStringAttribute('event_type');
  }
  public set eventType(value: string) {
    this._eventType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTypeInput() {
    return this._eventType;
  }

  // id_column - computed: false, optional: true, required: false
  private _idColumn?: string; 
  public get idColumn() {
    return this.getStringAttribute('id_column');
  }
  public set idColumn(value: string) {
    this._idColumn = value;
  }
  public resetIdColumn() {
    this._idColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idColumnInput() {
    return this._idColumn;
  }

  // payload_column - computed: false, optional: true, required: false
  private _payloadColumn?: string; 
  public get payloadColumn() {
    return this.getStringAttribute('payload_column');
  }
  public set payloadColumn(value: string) {
    this._payloadColumn = value;
  }
  public resetPayloadColumn() {
    this._payloadColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get payloadColumnInput() {
    return this._payloadColumn;
  }

  // recovery_event_type - computed: false, optional: true, required: false
  private _recoveryEventType?: string; 
  public get recoveryEventType() {
    return this.getStringAttribute('recovery_event_type');
  }
  public set recoveryEventType(value: string) {
    this._recoveryEventType = value;
  }
  public resetRecoveryEventType() {
    this._recoveryEventType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryEventTypeInput() {
    return this._recoveryEventType;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#application_id DataK8SAcidZalanDoPostgresqlV1Manifest#application_id}
  */
  readonly applicationId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#batch_size DataK8SAcidZalanDoPostgresqlV1Manifest#batch_size}
  */
  readonly batchSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#database DataK8SAcidZalanDoPostgresqlV1Manifest#database}
  */
  readonly database: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_recovery DataK8SAcidZalanDoPostgresqlV1Manifest#enable_recovery}
  */
  readonly enableRecovery?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#filter DataK8SAcidZalanDoPostgresqlV1Manifest#filter}
  */
  readonly filter?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#tables DataK8SAcidZalanDoPostgresqlV1Manifest#tables}
  */
  readonly tables: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    batch_size: cdktf.numberToTerraform(struct!.batchSize),
    database: cdktf.stringToTerraform(struct!.database),
    enable_recovery: cdktf.booleanToTerraform(struct!.enableRecovery),
    filter: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.filter),
    tables: dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTablesToTerraform(struct!.tables),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    batch_size: {
      value: cdktf.numberToHclTerraform(struct!.batchSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database: {
      value: cdktf.stringToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_recovery: {
      value: cdktf.booleanToHclTerraform(struct!.enableRecovery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.filter),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    tables: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTablesToHclTerraform(struct!.tables),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._batchSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSize = this._batchSize;
    }
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._enableRecovery !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRecovery = this._enableRecovery;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._tables?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tables = this._tables?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._batchSize = undefined;
      this._database = undefined;
      this._enableRecovery = undefined;
      this._filter = undefined;
      this._tables.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._batchSize = value.batchSize;
      this._database = value.database;
      this._enableRecovery = value.enableRecovery;
      this._filter = value.filter;
      this._tables.internalValue = value.tables;
    }
  }

  // application_id - computed: false, optional: false, required: true
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // batch_size - computed: false, optional: true, required: false
  private _batchSize?: number; 
  public get batchSize() {
    return this.getNumberAttribute('batch_size');
  }
  public set batchSize(value: number) {
    this._batchSize = value;
  }
  public resetBatchSize() {
    this._batchSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeInput() {
    return this._batchSize;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // enable_recovery - computed: false, optional: true, required: false
  private _enableRecovery?: boolean | cdktf.IResolvable; 
  public get enableRecovery() {
    return this.getBooleanAttribute('enable_recovery');
  }
  public set enableRecovery(value: boolean | cdktf.IResolvable) {
    this._enableRecovery = value;
  }
  public resetEnableRecovery() {
    this._enableRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRecoveryInput() {
    return this._enableRecovery;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: { [key: string]: string }; 
  public get filter() {
    return this.getStringMapAttribute('filter');
  }
  public set filter(value: { [key: string]: string }) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // tables - computed: false, optional: false, required: true
  private _tables = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTablesOutputReference(this, "tables");
  public get tables() {
    return this._tables;
  }
  public putTables(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsTables) {
    this._tables.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tablesInput() {
    return this._tables.internalValue;
  }
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#ca_file DataK8SAcidZalanDoPostgresqlV1Manifest#ca_file}
  */
  readonly caFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#ca_secret_name DataK8SAcidZalanDoPostgresqlV1Manifest#ca_secret_name}
  */
  readonly caSecretName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#certificate_file DataK8SAcidZalanDoPostgresqlV1Manifest#certificate_file}
  */
  readonly certificateFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#private_key_file DataK8SAcidZalanDoPostgresqlV1Manifest#private_key_file}
  */
  readonly privateKeyFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#secret_name DataK8SAcidZalanDoPostgresqlV1Manifest#secret_name}
  */
  readonly secretName: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecTlsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_file: cdktf.stringToTerraform(struct!.caFile),
    ca_secret_name: cdktf.stringToTerraform(struct!.caSecretName),
    certificate_file: cdktf.stringToTerraform(struct!.certificateFile),
    private_key_file: cdktf.stringToTerraform(struct!.privateKeyFile),
    secret_name: cdktf.stringToTerraform(struct!.secretName),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecTlsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_file: {
      value: cdktf.stringToHclTerraform(struct!.caFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ca_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.caSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_file: {
      value: cdktf.stringToHclTerraform(struct!.certificateFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key_file: {
      value: cdktf.stringToHclTerraform(struct!.privateKeyFile),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecTlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.caFile = this._caFile;
    }
    if (this._caSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.caSecretName = this._caSecretName;
    }
    if (this._certificateFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateFile = this._certificateFile;
    }
    if (this._privateKeyFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKeyFile = this._privateKeyFile;
    }
    if (this._secretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretName = this._secretName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._caFile = undefined;
      this._caSecretName = undefined;
      this._certificateFile = undefined;
      this._privateKeyFile = undefined;
      this._secretName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._caFile = value.caFile;
      this._caSecretName = value.caSecretName;
      this._certificateFile = value.certificateFile;
      this._privateKeyFile = value.privateKeyFile;
      this._secretName = value.secretName;
    }
  }

  // ca_file - computed: false, optional: true, required: false
  private _caFile?: string; 
  public get caFile() {
    return this.getStringAttribute('ca_file');
  }
  public set caFile(value: string) {
    this._caFile = value;
  }
  public resetCaFile() {
    this._caFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caFileInput() {
    return this._caFile;
  }

  // ca_secret_name - computed: false, optional: true, required: false
  private _caSecretName?: string; 
  public get caSecretName() {
    return this.getStringAttribute('ca_secret_name');
  }
  public set caSecretName(value: string) {
    this._caSecretName = value;
  }
  public resetCaSecretName() {
    this._caSecretName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSecretNameInput() {
    return this._caSecretName;
  }

  // certificate_file - computed: false, optional: true, required: false
  private _certificateFile?: string; 
  public get certificateFile() {
    return this.getStringAttribute('certificate_file');
  }
  public set certificateFile(value: string) {
    this._certificateFile = value;
  }
  public resetCertificateFile() {
    this._certificateFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateFileInput() {
    return this._certificateFile;
  }

  // private_key_file - computed: false, optional: true, required: false
  private _privateKeyFile?: string; 
  public get privateKeyFile() {
    return this.getStringAttribute('private_key_file');
  }
  public set privateKeyFile(value: string) {
    this._privateKeyFile = value;
  }
  public resetPrivateKeyFile() {
    this._privateKeyFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyFileInput() {
    return this._privateKeyFile;
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
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#effect DataK8SAcidZalanDoPostgresqlV1Manifest#effect}
  */
  readonly effect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#key DataK8SAcidZalanDoPostgresqlV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#operator DataK8SAcidZalanDoPostgresqlV1Manifest#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#toleration_seconds DataK8SAcidZalanDoPostgresqlV1Manifest#toleration_seconds}
  */
  readonly tolerationSeconds?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#value DataK8SAcidZalanDoPostgresqlV1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations | cdktf.IResolvable | undefined) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#key DataK8SAcidZalanDoPostgresqlV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#operator DataK8SAcidZalanDoPostgresqlV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#values DataK8SAcidZalanDoPostgresqlV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsOutputReference {
    return new DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#match_expressions DataK8SAcidZalanDoPostgresqlV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#match_labels DataK8SAcidZalanDoPostgresqlV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsList",
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

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#iops DataK8SAcidZalanDoPostgresqlV1Manifest#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#is_sub_path_expr DataK8SAcidZalanDoPostgresqlV1Manifest#is_sub_path_expr}
  */
  readonly isSubPathExpr?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#selector DataK8SAcidZalanDoPostgresqlV1Manifest#selector}
  */
  readonly selector?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#size DataK8SAcidZalanDoPostgresqlV1Manifest#size}
  */
  readonly size: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#storage_class DataK8SAcidZalanDoPostgresqlV1Manifest#storage_class}
  */
  readonly storageClass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#sub_path DataK8SAcidZalanDoPostgresqlV1Manifest#sub_path}
  */
  readonly subPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#throughput DataK8SAcidZalanDoPostgresqlV1Manifest#throughput}
  */
  readonly throughput?: number;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    iops: cdktf.numberToTerraform(struct!.iops),
    is_sub_path_expr: cdktf.booleanToTerraform(struct!.isSubPathExpr),
    selector: dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorToTerraform(struct!.selector),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
    sub_path: cdktf.stringToTerraform(struct!.subPath),
    throughput: cdktf.numberToTerraform(struct!.throughput),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    iops: {
      value: cdktf.numberToHclTerraform(struct!.iops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_sub_path_expr: {
      value: cdktf.booleanToHclTerraform(struct!.isSubPathExpr),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    selector: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector",
    },
    size: {
      value: cdktf.stringToHclTerraform(struct!.size),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_class: {
      value: cdktf.stringToHclTerraform(struct!.storageClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sub_path: {
      value: cdktf.stringToHclTerraform(struct!.subPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    throughput: {
      value: cdktf.numberToHclTerraform(struct!.throughput),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._iops !== undefined) {
      hasAnyValues = true;
      internalValueResult.iops = this._iops;
    }
    if (this._isSubPathExpr !== undefined) {
      hasAnyValues = true;
      internalValueResult.isSubPathExpr = this._isSubPathExpr;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    if (this._subPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.subPath = this._subPath;
    }
    if (this._throughput !== undefined) {
      hasAnyValues = true;
      internalValueResult.throughput = this._throughput;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._iops = undefined;
      this._isSubPathExpr = undefined;
      this._selector.internalValue = undefined;
      this._size = undefined;
      this._storageClass = undefined;
      this._subPath = undefined;
      this._throughput = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._iops = value.iops;
      this._isSubPathExpr = value.isSubPathExpr;
      this._selector.internalValue = value.selector;
      this._size = value.size;
      this._storageClass = value.storageClass;
      this._subPath = value.subPath;
      this._throughput = value.throughput;
    }
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

  // is_sub_path_expr - computed: false, optional: true, required: false
  private _isSubPathExpr?: boolean | cdktf.IResolvable; 
  public get isSubPathExpr() {
    return this.getBooleanAttribute('is_sub_path_expr');
  }
  public set isSubPathExpr(value: boolean | cdktf.IResolvable) {
    this._isSubPathExpr = value;
  }
  public resetIsSubPathExpr() {
    this._isSubPathExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isSubPathExprInput() {
    return this._isSubPathExpr;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // size - computed: false, optional: false, required: true
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
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

  // throughput - computed: false, optional: true, required: false
  private _throughput?: number; 
  public get throughput() {
    return this.getNumberAttribute('throughput');
  }
  public set throughput(value: number) {
    this._throughput = value;
  }
  public resetThroughput() {
    this._throughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get throughputInput() {
    return this._throughput;
  }
}
export interface DataK8SAcidZalanDoPostgresqlV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#additional_volumes DataK8SAcidZalanDoPostgresqlV1Manifest#additional_volumes}
  */
  readonly additionalVolumes?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#allowed_source_ranges DataK8SAcidZalanDoPostgresqlV1Manifest#allowed_source_ranges}
  */
  readonly allowedSourceRanges?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#clone DataK8SAcidZalanDoPostgresqlV1Manifest#clone}
  */
  readonly clone?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#connection_pooler DataK8SAcidZalanDoPostgresqlV1Manifest#connection_pooler}
  */
  readonly connectionPooler?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#databases DataK8SAcidZalanDoPostgresqlV1Manifest#databases}
  */
  readonly databases?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#docker_image DataK8SAcidZalanDoPostgresqlV1Manifest#docker_image}
  */
  readonly dockerImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_connection_pooler DataK8SAcidZalanDoPostgresqlV1Manifest#enable_connection_pooler}
  */
  readonly enableConnectionPooler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_logical_backup DataK8SAcidZalanDoPostgresqlV1Manifest#enable_logical_backup}
  */
  readonly enableLogicalBackup?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_master_load_balancer DataK8SAcidZalanDoPostgresqlV1Manifest#enable_master_load_balancer}
  */
  readonly enableMasterLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_master_pooler_load_balancer DataK8SAcidZalanDoPostgresqlV1Manifest#enable_master_pooler_load_balancer}
  */
  readonly enableMasterPoolerLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_replica_connection_pooler DataK8SAcidZalanDoPostgresqlV1Manifest#enable_replica_connection_pooler}
  */
  readonly enableReplicaConnectionPooler?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_replica_load_balancer DataK8SAcidZalanDoPostgresqlV1Manifest#enable_replica_load_balancer}
  */
  readonly enableReplicaLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_replica_pooler_load_balancer DataK8SAcidZalanDoPostgresqlV1Manifest#enable_replica_pooler_load_balancer}
  */
  readonly enableReplicaPoolerLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#enable_shm_volume DataK8SAcidZalanDoPostgresqlV1Manifest#enable_shm_volume}
  */
  readonly enableShmVolume?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#env DataK8SAcidZalanDoPostgresqlV1Manifest#env}
  */
  readonly env?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#init_containers DataK8SAcidZalanDoPostgresqlV1Manifest#init_containers}
  */
  readonly initContainers?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#logical_backup_retention DataK8SAcidZalanDoPostgresqlV1Manifest#logical_backup_retention}
  */
  readonly logicalBackupRetention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#logical_backup_schedule DataK8SAcidZalanDoPostgresqlV1Manifest#logical_backup_schedule}
  */
  readonly logicalBackupSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#maintenance_windows DataK8SAcidZalanDoPostgresqlV1Manifest#maintenance_windows}
  */
  readonly maintenanceWindows?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#master_service_annotations DataK8SAcidZalanDoPostgresqlV1Manifest#master_service_annotations}
  */
  readonly masterServiceAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#node_affinity DataK8SAcidZalanDoPostgresqlV1Manifest#node_affinity}
  */
  readonly nodeAffinity?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#number_of_instances DataK8SAcidZalanDoPostgresqlV1Manifest#number_of_instances}
  */
  readonly numberOfInstances: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#patroni DataK8SAcidZalanDoPostgresqlV1Manifest#patroni}
  */
  readonly patroni?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#pod_annotations DataK8SAcidZalanDoPostgresqlV1Manifest#pod_annotations}
  */
  readonly podAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#pod_priority_class_name DataK8SAcidZalanDoPostgresqlV1Manifest#pod_priority_class_name}
  */
  readonly podPriorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#postgresql DataK8SAcidZalanDoPostgresqlV1Manifest#postgresql}
  */
  readonly postgresql: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#prepared_databases DataK8SAcidZalanDoPostgresqlV1Manifest#prepared_databases}
  */
  readonly preparedDatabases?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases;
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#replica_load_balancer DataK8SAcidZalanDoPostgresqlV1Manifest#replica_load_balancer}
  */
  readonly replicaLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#replica_service_annotations DataK8SAcidZalanDoPostgresqlV1Manifest#replica_service_annotations}
  */
  readonly replicaServiceAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#resources DataK8SAcidZalanDoPostgresqlV1Manifest#resources}
  */
  readonly resources?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#scheduler_name DataK8SAcidZalanDoPostgresqlV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#service_annotations DataK8SAcidZalanDoPostgresqlV1Manifest#service_annotations}
  */
  readonly serviceAnnotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#sidecars DataK8SAcidZalanDoPostgresqlV1Manifest#sidecars}
  */
  readonly sidecars?: { [key: string]: string }[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#spilo_fs_group DataK8SAcidZalanDoPostgresqlV1Manifest#spilo_fs_group}
  */
  readonly spiloFsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#spilo_run_as_group DataK8SAcidZalanDoPostgresqlV1Manifest#spilo_run_as_group}
  */
  readonly spiloRunAsGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#spilo_run_as_user DataK8SAcidZalanDoPostgresqlV1Manifest#spilo_run_as_user}
  */
  readonly spiloRunAsUser?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#standby DataK8SAcidZalanDoPostgresqlV1Manifest#standby}
  */
  readonly standby?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#streams DataK8SAcidZalanDoPostgresqlV1Manifest#streams}
  */
  readonly streams?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#team_id DataK8SAcidZalanDoPostgresqlV1Manifest#team_id}
  */
  readonly teamId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#tls DataK8SAcidZalanDoPostgresqlV1Manifest#tls}
  */
  readonly tls?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#tolerations DataK8SAcidZalanDoPostgresqlV1Manifest#tolerations}
  */
  readonly tolerations?: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations[] | cdktf.IResolvable;
  /**
  * deprecated
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#use_load_balancer DataK8SAcidZalanDoPostgresqlV1Manifest#use_load_balancer}
  */
  readonly useLoadBalancer?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#users DataK8SAcidZalanDoPostgresqlV1Manifest#users}
  */
  readonly users?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#users_ignoring_secret_rotation DataK8SAcidZalanDoPostgresqlV1Manifest#users_ignoring_secret_rotation}
  */
  readonly usersIgnoringSecretRotation?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#users_with_in_place_secret_rotation DataK8SAcidZalanDoPostgresqlV1Manifest#users_with_in_place_secret_rotation}
  */
  readonly usersWithInPlaceSecretRotation?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#users_with_secret_rotation DataK8SAcidZalanDoPostgresqlV1Manifest#users_with_secret_rotation}
  */
  readonly usersWithSecretRotation?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#volume DataK8SAcidZalanDoPostgresqlV1Manifest#volume}
  */
  readonly volume: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume;
}

export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecToTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_volumes: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesToTerraform, false)(struct!.additionalVolumes),
    allowed_source_ranges: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedSourceRanges),
    clone: dataK8SAcidZalanDoPostgresqlV1ManifestSpecCloneToTerraform(struct!.clone),
    connection_pooler: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerToTerraform(struct!.connectionPooler),
    databases: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.databases),
    docker_image: cdktf.stringToTerraform(struct!.dockerImage),
    enable_connection_pooler: cdktf.booleanToTerraform(struct!.enableConnectionPooler),
    enable_logical_backup: cdktf.booleanToTerraform(struct!.enableLogicalBackup),
    enable_master_load_balancer: cdktf.booleanToTerraform(struct!.enableMasterLoadBalancer),
    enable_master_pooler_load_balancer: cdktf.booleanToTerraform(struct!.enableMasterPoolerLoadBalancer),
    enable_replica_connection_pooler: cdktf.booleanToTerraform(struct!.enableReplicaConnectionPooler),
    enable_replica_load_balancer: cdktf.booleanToTerraform(struct!.enableReplicaLoadBalancer),
    enable_replica_pooler_load_balancer: cdktf.booleanToTerraform(struct!.enableReplicaPoolerLoadBalancer),
    enable_shm_volume: cdktf.booleanToTerraform(struct!.enableShmVolume),
    env: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.env),
    init_containers: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.initContainers),
    logical_backup_retention: cdktf.stringToTerraform(struct!.logicalBackupRetention),
    logical_backup_schedule: cdktf.stringToTerraform(struct!.logicalBackupSchedule),
    maintenance_windows: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.maintenanceWindows),
    master_service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.masterServiceAnnotations),
    node_affinity: dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityToTerraform(struct!.nodeAffinity),
    number_of_instances: cdktf.numberToTerraform(struct!.numberOfInstances),
    patroni: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroniToTerraform(struct!.patroni),
    pod_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.podAnnotations),
    pod_priority_class_name: cdktf.stringToTerraform(struct!.podPriorityClassName),
    postgresql: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresqlToTerraform(struct!.postgresql),
    prepared_databases: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesToTerraform(struct!.preparedDatabases),
    replica_load_balancer: cdktf.booleanToTerraform(struct!.replicaLoadBalancer),
    replica_service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.replicaServiceAnnotations),
    resources: dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesToTerraform(struct!.resources),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    service_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.serviceAnnotations),
    sidecars: cdktf.listMapper(cdktf.hashMapper(cdktf.stringToTerraform), false)(struct!.sidecars),
    spilo_fs_group: cdktf.numberToTerraform(struct!.spiloFsGroup),
    spilo_run_as_group: cdktf.numberToTerraform(struct!.spiloRunAsGroup),
    spilo_run_as_user: cdktf.numberToTerraform(struct!.spiloRunAsUser),
    standby: dataK8SAcidZalanDoPostgresqlV1ManifestSpecStandbyToTerraform(struct!.standby),
    streams: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsToTerraform, false)(struct!.streams),
    team_id: cdktf.stringToTerraform(struct!.teamId),
    tls: dataK8SAcidZalanDoPostgresqlV1ManifestSpecTlsToTerraform(struct!.tls),
    tolerations: cdktf.listMapper(dataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsToTerraform, false)(struct!.tolerations),
    use_load_balancer: cdktf.booleanToTerraform(struct!.useLoadBalancer),
    users: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.users),
    users_ignoring_secret_rotation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usersIgnoringSecretRotation),
    users_with_in_place_secret_rotation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usersWithInPlaceSecretRotation),
    users_with_secret_rotation: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.usersWithSecretRotation),
    volume: dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeToTerraform(struct!.volume),
  }
}


export function dataK8SAcidZalanDoPostgresqlV1ManifestSpecToHclTerraform(struct?: DataK8SAcidZalanDoPostgresqlV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_volumes: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesToHclTerraform, false)(struct!.additionalVolumes),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesList",
    },
    allowed_source_ranges: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedSourceRanges),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    clone: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecCloneToHclTerraform(struct!.clone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone",
    },
    connection_pooler: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerToHclTerraform(struct!.connectionPooler),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler",
    },
    databases: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.databases),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    docker_image: {
      value: cdktf.stringToHclTerraform(struct!.dockerImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_connection_pooler: {
      value: cdktf.booleanToHclTerraform(struct!.enableConnectionPooler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_logical_backup: {
      value: cdktf.booleanToHclTerraform(struct!.enableLogicalBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_master_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableMasterLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_master_pooler_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableMasterPoolerLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_replica_connection_pooler: {
      value: cdktf.booleanToHclTerraform(struct!.enableReplicaConnectionPooler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_replica_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableReplicaLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_replica_pooler_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.enableReplicaPoolerLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_shm_volume: {
      value: cdktf.booleanToHclTerraform(struct!.enableShmVolume),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.env),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    init_containers: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.initContainers),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    logical_backup_retention: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupRetention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logical_backup_schedule: {
      value: cdktf.stringToHclTerraform(struct!.logicalBackupSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_windows: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.maintenanceWindows),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    master_service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.masterServiceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    node_affinity: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityToHclTerraform(struct!.nodeAffinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity",
    },
    number_of_instances: {
      value: cdktf.numberToHclTerraform(struct!.numberOfInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    patroni: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroniToHclTerraform(struct!.patroni),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni",
    },
    pod_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.podAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    pod_priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.podPriorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    postgresql: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresqlToHclTerraform(struct!.postgresql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql",
    },
    prepared_databases: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesToHclTerraform(struct!.preparedDatabases),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases",
    },
    replica_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.replicaLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    replica_service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.replicaServiceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    resources: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.serviceAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    sidecars: {
      value: cdktf.listMapperHcl(cdktf.hashMapperHcl(cdktf.stringToHclTerraform), false)(struct!.sidecars),
      isBlock: false,
      type: "list",
      storageClassType: "stringMapList",
    },
    spilo_fs_group: {
      value: cdktf.numberToHclTerraform(struct!.spiloFsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spilo_run_as_group: {
      value: cdktf.numberToHclTerraform(struct!.spiloRunAsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spilo_run_as_user: {
      value: cdktf.numberToHclTerraform(struct!.spiloRunAsUser),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    standby: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecStandbyToHclTerraform(struct!.standby),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby",
    },
    streams: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsToHclTerraform, false)(struct!.streams),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsList",
    },
    team_id: {
      value: cdktf.stringToHclTerraform(struct!.teamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls",
    },
    tolerations: {
      value: cdktf.listMapperHcl(dataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsToHclTerraform, false)(struct!.tolerations),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsList",
    },
    use_load_balancer: {
      value: cdktf.booleanToHclTerraform(struct!.useLoadBalancer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    users: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.users),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    users_ignoring_secret_rotation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usersIgnoringSecretRotation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users_with_in_place_secret_rotation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usersWithInPlaceSecretRotation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    users_with_secret_rotation: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.usersWithSecretRotation),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    volume: {
      value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeToHclTerraform(struct!.volume),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAcidZalanDoPostgresqlV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAcidZalanDoPostgresqlV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalVolumes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalVolumes = this._additionalVolumes?.internalValue;
    }
    if (this._allowedSourceRanges !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedSourceRanges = this._allowedSourceRanges;
    }
    if (this._clone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clone = this._clone?.internalValue;
    }
    if (this._connectionPooler?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionPooler = this._connectionPooler?.internalValue;
    }
    if (this._databases !== undefined) {
      hasAnyValues = true;
      internalValueResult.databases = this._databases;
    }
    if (this._dockerImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.dockerImage = this._dockerImage;
    }
    if (this._enableConnectionPooler !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConnectionPooler = this._enableConnectionPooler;
    }
    if (this._enableLogicalBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableLogicalBackup = this._enableLogicalBackup;
    }
    if (this._enableMasterLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMasterLoadBalancer = this._enableMasterLoadBalancer;
    }
    if (this._enableMasterPoolerLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMasterPoolerLoadBalancer = this._enableMasterPoolerLoadBalancer;
    }
    if (this._enableReplicaConnectionPooler !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReplicaConnectionPooler = this._enableReplicaConnectionPooler;
    }
    if (this._enableReplicaLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReplicaLoadBalancer = this._enableReplicaLoadBalancer;
    }
    if (this._enableReplicaPoolerLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableReplicaPoolerLoadBalancer = this._enableReplicaPoolerLoadBalancer;
    }
    if (this._enableShmVolume !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableShmVolume = this._enableShmVolume;
    }
    if (this._env !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env;
    }
    if (this._initContainers !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainers = this._initContainers;
    }
    if (this._logicalBackupRetention !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupRetention = this._logicalBackupRetention;
    }
    if (this._logicalBackupSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.logicalBackupSchedule = this._logicalBackupSchedule;
    }
    if (this._maintenanceWindows !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceWindows = this._maintenanceWindows;
    }
    if (this._masterServiceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.masterServiceAnnotations = this._masterServiceAnnotations;
    }
    if (this._nodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinity = this._nodeAffinity?.internalValue;
    }
    if (this._numberOfInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfInstances = this._numberOfInstances;
    }
    if (this._patroni?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patroni = this._patroni?.internalValue;
    }
    if (this._podAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.podAnnotations = this._podAnnotations;
    }
    if (this._podPriorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.podPriorityClassName = this._podPriorityClassName;
    }
    if (this._postgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresql = this._postgresql?.internalValue;
    }
    if (this._preparedDatabases?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preparedDatabases = this._preparedDatabases?.internalValue;
    }
    if (this._replicaLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaLoadBalancer = this._replicaLoadBalancer;
    }
    if (this._replicaServiceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicaServiceAnnotations = this._replicaServiceAnnotations;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._serviceAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAnnotations = this._serviceAnnotations;
    }
    if (this._sidecars !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecars = this._sidecars;
    }
    if (this._spiloFsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloFsGroup = this._spiloFsGroup;
    }
    if (this._spiloRunAsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloRunAsGroup = this._spiloRunAsGroup;
    }
    if (this._spiloRunAsUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.spiloRunAsUser = this._spiloRunAsUser;
    }
    if (this._standby?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby?.internalValue;
    }
    if (this._streams?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.streams = this._streams?.internalValue;
    }
    if (this._teamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.teamId = this._teamId;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._tolerations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tolerations = this._tolerations?.internalValue;
    }
    if (this._useLoadBalancer !== undefined) {
      hasAnyValues = true;
      internalValueResult.useLoadBalancer = this._useLoadBalancer;
    }
    if (this._users !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users;
    }
    if (this._usersIgnoringSecretRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersIgnoringSecretRotation = this._usersIgnoringSecretRotation;
    }
    if (this._usersWithInPlaceSecretRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersWithInPlaceSecretRotation = this._usersWithInPlaceSecretRotation;
    }
    if (this._usersWithSecretRotation !== undefined) {
      hasAnyValues = true;
      internalValueResult.usersWithSecretRotation = this._usersWithSecretRotation;
    }
    if (this._volume?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.volume = this._volume?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalVolumes.internalValue = undefined;
      this._allowedSourceRanges = undefined;
      this._clone.internalValue = undefined;
      this._connectionPooler.internalValue = undefined;
      this._databases = undefined;
      this._dockerImage = undefined;
      this._enableConnectionPooler = undefined;
      this._enableLogicalBackup = undefined;
      this._enableMasterLoadBalancer = undefined;
      this._enableMasterPoolerLoadBalancer = undefined;
      this._enableReplicaConnectionPooler = undefined;
      this._enableReplicaLoadBalancer = undefined;
      this._enableReplicaPoolerLoadBalancer = undefined;
      this._enableShmVolume = undefined;
      this._env = undefined;
      this._initContainers = undefined;
      this._logicalBackupRetention = undefined;
      this._logicalBackupSchedule = undefined;
      this._maintenanceWindows = undefined;
      this._masterServiceAnnotations = undefined;
      this._nodeAffinity.internalValue = undefined;
      this._numberOfInstances = undefined;
      this._patroni.internalValue = undefined;
      this._podAnnotations = undefined;
      this._podPriorityClassName = undefined;
      this._postgresql.internalValue = undefined;
      this._preparedDatabases.internalValue = undefined;
      this._replicaLoadBalancer = undefined;
      this._replicaServiceAnnotations = undefined;
      this._resources.internalValue = undefined;
      this._schedulerName = undefined;
      this._serviceAnnotations = undefined;
      this._sidecars = undefined;
      this._spiloFsGroup = undefined;
      this._spiloRunAsGroup = undefined;
      this._spiloRunAsUser = undefined;
      this._standby.internalValue = undefined;
      this._streams.internalValue = undefined;
      this._teamId = undefined;
      this._tls.internalValue = undefined;
      this._tolerations.internalValue = undefined;
      this._useLoadBalancer = undefined;
      this._users = undefined;
      this._usersIgnoringSecretRotation = undefined;
      this._usersWithInPlaceSecretRotation = undefined;
      this._usersWithSecretRotation = undefined;
      this._volume.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalVolumes.internalValue = value.additionalVolumes;
      this._allowedSourceRanges = value.allowedSourceRanges;
      this._clone.internalValue = value.clone;
      this._connectionPooler.internalValue = value.connectionPooler;
      this._databases = value.databases;
      this._dockerImage = value.dockerImage;
      this._enableConnectionPooler = value.enableConnectionPooler;
      this._enableLogicalBackup = value.enableLogicalBackup;
      this._enableMasterLoadBalancer = value.enableMasterLoadBalancer;
      this._enableMasterPoolerLoadBalancer = value.enableMasterPoolerLoadBalancer;
      this._enableReplicaConnectionPooler = value.enableReplicaConnectionPooler;
      this._enableReplicaLoadBalancer = value.enableReplicaLoadBalancer;
      this._enableReplicaPoolerLoadBalancer = value.enableReplicaPoolerLoadBalancer;
      this._enableShmVolume = value.enableShmVolume;
      this._env = value.env;
      this._initContainers = value.initContainers;
      this._logicalBackupRetention = value.logicalBackupRetention;
      this._logicalBackupSchedule = value.logicalBackupSchedule;
      this._maintenanceWindows = value.maintenanceWindows;
      this._masterServiceAnnotations = value.masterServiceAnnotations;
      this._nodeAffinity.internalValue = value.nodeAffinity;
      this._numberOfInstances = value.numberOfInstances;
      this._patroni.internalValue = value.patroni;
      this._podAnnotations = value.podAnnotations;
      this._podPriorityClassName = value.podPriorityClassName;
      this._postgresql.internalValue = value.postgresql;
      this._preparedDatabases.internalValue = value.preparedDatabases;
      this._replicaLoadBalancer = value.replicaLoadBalancer;
      this._replicaServiceAnnotations = value.replicaServiceAnnotations;
      this._resources.internalValue = value.resources;
      this._schedulerName = value.schedulerName;
      this._serviceAnnotations = value.serviceAnnotations;
      this._sidecars = value.sidecars;
      this._spiloFsGroup = value.spiloFsGroup;
      this._spiloRunAsGroup = value.spiloRunAsGroup;
      this._spiloRunAsUser = value.spiloRunAsUser;
      this._standby.internalValue = value.standby;
      this._streams.internalValue = value.streams;
      this._teamId = value.teamId;
      this._tls.internalValue = value.tls;
      this._tolerations.internalValue = value.tolerations;
      this._useLoadBalancer = value.useLoadBalancer;
      this._users = value.users;
      this._usersIgnoringSecretRotation = value.usersIgnoringSecretRotation;
      this._usersWithInPlaceSecretRotation = value.usersWithInPlaceSecretRotation;
      this._usersWithSecretRotation = value.usersWithSecretRotation;
      this._volume.internalValue = value.volume;
    }
  }

  // additional_volumes - computed: false, optional: true, required: false
  private _additionalVolumes = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumesList(this, "additional_volumes", false);
  public get additionalVolumes() {
    return this._additionalVolumes;
  }
  public putAdditionalVolumes(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecAdditionalVolumes[] | cdktf.IResolvable) {
    this._additionalVolumes.internalValue = value;
  }
  public resetAdditionalVolumes() {
    this._additionalVolumes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalVolumesInput() {
    return this._additionalVolumes.internalValue;
  }

  // allowed_source_ranges - computed: false, optional: true, required: false
  private _allowedSourceRanges?: string[]; 
  public get allowedSourceRanges() {
    return this.getListAttribute('allowed_source_ranges');
  }
  public set allowedSourceRanges(value: string[]) {
    this._allowedSourceRanges = value;
  }
  public resetAllowedSourceRanges() {
    this._allowedSourceRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedSourceRangesInput() {
    return this._allowedSourceRanges;
  }

  // clone - computed: false, optional: true, required: false
  private _clone = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecCloneOutputReference(this, "clone");
  public get clone() {
    return this._clone;
  }
  public putClone(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecClone) {
    this._clone.internalValue = value;
  }
  public resetClone() {
    this._clone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloneInput() {
    return this._clone.internalValue;
  }

  // connection_pooler - computed: false, optional: true, required: false
  private _connectionPooler = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPoolerOutputReference(this, "connection_pooler");
  public get connectionPooler() {
    return this._connectionPooler;
  }
  public putConnectionPooler(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecConnectionPooler) {
    this._connectionPooler.internalValue = value;
  }
  public resetConnectionPooler() {
    this._connectionPooler.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPoolerInput() {
    return this._connectionPooler.internalValue;
  }

  // databases - computed: false, optional: true, required: false
  private _databases?: { [key: string]: string }; 
  public get databases() {
    return this.getStringMapAttribute('databases');
  }
  public set databases(value: { [key: string]: string }) {
    this._databases = value;
  }
  public resetDatabases() {
    this._databases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databasesInput() {
    return this._databases;
  }

  // docker_image - computed: false, optional: true, required: false
  private _dockerImage?: string; 
  public get dockerImage() {
    return this.getStringAttribute('docker_image');
  }
  public set dockerImage(value: string) {
    this._dockerImage = value;
  }
  public resetDockerImage() {
    this._dockerImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerImageInput() {
    return this._dockerImage;
  }

  // enable_connection_pooler - computed: false, optional: true, required: false
  private _enableConnectionPooler?: boolean | cdktf.IResolvable; 
  public get enableConnectionPooler() {
    return this.getBooleanAttribute('enable_connection_pooler');
  }
  public set enableConnectionPooler(value: boolean | cdktf.IResolvable) {
    this._enableConnectionPooler = value;
  }
  public resetEnableConnectionPooler() {
    this._enableConnectionPooler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConnectionPoolerInput() {
    return this._enableConnectionPooler;
  }

  // enable_logical_backup - computed: false, optional: true, required: false
  private _enableLogicalBackup?: boolean | cdktf.IResolvable; 
  public get enableLogicalBackup() {
    return this.getBooleanAttribute('enable_logical_backup');
  }
  public set enableLogicalBackup(value: boolean | cdktf.IResolvable) {
    this._enableLogicalBackup = value;
  }
  public resetEnableLogicalBackup() {
    this._enableLogicalBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLogicalBackupInput() {
    return this._enableLogicalBackup;
  }

  // enable_master_load_balancer - computed: false, optional: true, required: false
  private _enableMasterLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableMasterLoadBalancer() {
    return this.getBooleanAttribute('enable_master_load_balancer');
  }
  public set enableMasterLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableMasterLoadBalancer = value;
  }
  public resetEnableMasterLoadBalancer() {
    this._enableMasterLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMasterLoadBalancerInput() {
    return this._enableMasterLoadBalancer;
  }

  // enable_master_pooler_load_balancer - computed: false, optional: true, required: false
  private _enableMasterPoolerLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableMasterPoolerLoadBalancer() {
    return this.getBooleanAttribute('enable_master_pooler_load_balancer');
  }
  public set enableMasterPoolerLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableMasterPoolerLoadBalancer = value;
  }
  public resetEnableMasterPoolerLoadBalancer() {
    this._enableMasterPoolerLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMasterPoolerLoadBalancerInput() {
    return this._enableMasterPoolerLoadBalancer;
  }

  // enable_replica_connection_pooler - computed: false, optional: true, required: false
  private _enableReplicaConnectionPooler?: boolean | cdktf.IResolvable; 
  public get enableReplicaConnectionPooler() {
    return this.getBooleanAttribute('enable_replica_connection_pooler');
  }
  public set enableReplicaConnectionPooler(value: boolean | cdktf.IResolvable) {
    this._enableReplicaConnectionPooler = value;
  }
  public resetEnableReplicaConnectionPooler() {
    this._enableReplicaConnectionPooler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReplicaConnectionPoolerInput() {
    return this._enableReplicaConnectionPooler;
  }

  // enable_replica_load_balancer - computed: false, optional: true, required: false
  private _enableReplicaLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableReplicaLoadBalancer() {
    return this.getBooleanAttribute('enable_replica_load_balancer');
  }
  public set enableReplicaLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableReplicaLoadBalancer = value;
  }
  public resetEnableReplicaLoadBalancer() {
    this._enableReplicaLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReplicaLoadBalancerInput() {
    return this._enableReplicaLoadBalancer;
  }

  // enable_replica_pooler_load_balancer - computed: false, optional: true, required: false
  private _enableReplicaPoolerLoadBalancer?: boolean | cdktf.IResolvable; 
  public get enableReplicaPoolerLoadBalancer() {
    return this.getBooleanAttribute('enable_replica_pooler_load_balancer');
  }
  public set enableReplicaPoolerLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._enableReplicaPoolerLoadBalancer = value;
  }
  public resetEnableReplicaPoolerLoadBalancer() {
    this._enableReplicaPoolerLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableReplicaPoolerLoadBalancerInput() {
    return this._enableReplicaPoolerLoadBalancer;
  }

  // enable_shm_volume - computed: false, optional: true, required: false
  private _enableShmVolume?: boolean | cdktf.IResolvable; 
  public get enableShmVolume() {
    return this.getBooleanAttribute('enable_shm_volume');
  }
  public set enableShmVolume(value: boolean | cdktf.IResolvable) {
    this._enableShmVolume = value;
  }
  public resetEnableShmVolume() {
    this._enableShmVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableShmVolumeInput() {
    return this._enableShmVolume;
  }

  // env - computed: false, optional: true, required: false
  private _env?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get env() {
    return this.interpolationForAttribute('env');
  }
  public set env(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._env = value;
  }
  public resetEnv() {
    this._env = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env;
  }

  // init_containers - computed: false, optional: true, required: false
  private _initContainers?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get initContainers() {
    return this.interpolationForAttribute('init_containers');
  }
  public set initContainers(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._initContainers = value;
  }
  public resetInitContainers() {
    this._initContainers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainersInput() {
    return this._initContainers;
  }

  // logical_backup_retention - computed: false, optional: true, required: false
  private _logicalBackupRetention?: string; 
  public get logicalBackupRetention() {
    return this.getStringAttribute('logical_backup_retention');
  }
  public set logicalBackupRetention(value: string) {
    this._logicalBackupRetention = value;
  }
  public resetLogicalBackupRetention() {
    this._logicalBackupRetention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupRetentionInput() {
    return this._logicalBackupRetention;
  }

  // logical_backup_schedule - computed: false, optional: true, required: false
  private _logicalBackupSchedule?: string; 
  public get logicalBackupSchedule() {
    return this.getStringAttribute('logical_backup_schedule');
  }
  public set logicalBackupSchedule(value: string) {
    this._logicalBackupSchedule = value;
  }
  public resetLogicalBackupSchedule() {
    this._logicalBackupSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalBackupScheduleInput() {
    return this._logicalBackupSchedule;
  }

  // maintenance_windows - computed: false, optional: true, required: false
  private _maintenanceWindows?: string[]; 
  public get maintenanceWindows() {
    return this.getListAttribute('maintenance_windows');
  }
  public set maintenanceWindows(value: string[]) {
    this._maintenanceWindows = value;
  }
  public resetMaintenanceWindows() {
    this._maintenanceWindows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowsInput() {
    return this._maintenanceWindows;
  }

  // master_service_annotations - computed: false, optional: true, required: false
  private _masterServiceAnnotations?: { [key: string]: string }; 
  public get masterServiceAnnotations() {
    return this.getStringMapAttribute('master_service_annotations');
  }
  public set masterServiceAnnotations(value: { [key: string]: string }) {
    this._masterServiceAnnotations = value;
  }
  public resetMasterServiceAnnotations() {
    this._masterServiceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterServiceAnnotationsInput() {
    return this._masterServiceAnnotations;
  }

  // node_affinity - computed: false, optional: true, required: false
  private _nodeAffinity = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinityOutputReference(this, "node_affinity");
  public get nodeAffinity() {
    return this._nodeAffinity;
  }
  public putNodeAffinity(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecNodeAffinity) {
    this._nodeAffinity.internalValue = value;
  }
  public resetNodeAffinity() {
    this._nodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityInput() {
    return this._nodeAffinity.internalValue;
  }

  // number_of_instances - computed: false, optional: false, required: true
  private _numberOfInstances?: number; 
  public get numberOfInstances() {
    return this.getNumberAttribute('number_of_instances');
  }
  public set numberOfInstances(value: number) {
    this._numberOfInstances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfInstancesInput() {
    return this._numberOfInstances;
  }

  // patroni - computed: false, optional: true, required: false
  private _patroni = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroniOutputReference(this, "patroni");
  public get patroni() {
    return this._patroni;
  }
  public putPatroni(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPatroni) {
    this._patroni.internalValue = value;
  }
  public resetPatroni() {
    this._patroni.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patroniInput() {
    return this._patroni.internalValue;
  }

  // pod_annotations - computed: false, optional: true, required: false
  private _podAnnotations?: { [key: string]: string }; 
  public get podAnnotations() {
    return this.getStringMapAttribute('pod_annotations');
  }
  public set podAnnotations(value: { [key: string]: string }) {
    this._podAnnotations = value;
  }
  public resetPodAnnotations() {
    this._podAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podAnnotationsInput() {
    return this._podAnnotations;
  }

  // pod_priority_class_name - computed: false, optional: true, required: false
  private _podPriorityClassName?: string; 
  public get podPriorityClassName() {
    return this.getStringAttribute('pod_priority_class_name');
  }
  public set podPriorityClassName(value: string) {
    this._podPriorityClassName = value;
  }
  public resetPodPriorityClassName() {
    this._podPriorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podPriorityClassNameInput() {
    return this._podPriorityClassName;
  }

  // postgresql - computed: false, optional: false, required: true
  private _postgresql = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPostgresql) {
    this._postgresql.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // prepared_databases - computed: false, optional: true, required: false
  private _preparedDatabases = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabasesOutputReference(this, "prepared_databases");
  public get preparedDatabases() {
    return this._preparedDatabases;
  }
  public putPreparedDatabases(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecPreparedDatabases) {
    this._preparedDatabases.internalValue = value;
  }
  public resetPreparedDatabases() {
    this._preparedDatabases.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preparedDatabasesInput() {
    return this._preparedDatabases.internalValue;
  }

  // replica_load_balancer - computed: false, optional: true, required: false
  private _replicaLoadBalancer?: boolean | cdktf.IResolvable; 
  public get replicaLoadBalancer() {
    return this.getBooleanAttribute('replica_load_balancer');
  }
  public set replicaLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._replicaLoadBalancer = value;
  }
  public resetReplicaLoadBalancer() {
    this._replicaLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaLoadBalancerInput() {
    return this._replicaLoadBalancer;
  }

  // replica_service_annotations - computed: false, optional: true, required: false
  private _replicaServiceAnnotations?: { [key: string]: string }; 
  public get replicaServiceAnnotations() {
    return this.getStringMapAttribute('replica_service_annotations');
  }
  public set replicaServiceAnnotations(value: { [key: string]: string }) {
    this._replicaServiceAnnotations = value;
  }
  public resetReplicaServiceAnnotations() {
    this._replicaServiceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaServiceAnnotationsInput() {
    return this._replicaServiceAnnotations;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // service_annotations - computed: false, optional: true, required: false
  private _serviceAnnotations?: { [key: string]: string }; 
  public get serviceAnnotations() {
    return this.getStringMapAttribute('service_annotations');
  }
  public set serviceAnnotations(value: { [key: string]: string }) {
    this._serviceAnnotations = value;
  }
  public resetServiceAnnotations() {
    this._serviceAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAnnotationsInput() {
    return this._serviceAnnotations;
  }

  // sidecars - computed: false, optional: true, required: false
  private _sidecars?: { [key: string]: string }[] | cdktf.IResolvable; 
  public get sidecars() {
    return this.interpolationForAttribute('sidecars');
  }
  public set sidecars(value: { [key: string]: string }[] | cdktf.IResolvable) {
    this._sidecars = value;
  }
  public resetSidecars() {
    this._sidecars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarsInput() {
    return this._sidecars;
  }

  // spilo_fs_group - computed: false, optional: true, required: false
  private _spiloFsGroup?: number; 
  public get spiloFsGroup() {
    return this.getNumberAttribute('spilo_fs_group');
  }
  public set spiloFsGroup(value: number) {
    this._spiloFsGroup = value;
  }
  public resetSpiloFsGroup() {
    this._spiloFsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloFsGroupInput() {
    return this._spiloFsGroup;
  }

  // spilo_run_as_group - computed: false, optional: true, required: false
  private _spiloRunAsGroup?: number; 
  public get spiloRunAsGroup() {
    return this.getNumberAttribute('spilo_run_as_group');
  }
  public set spiloRunAsGroup(value: number) {
    this._spiloRunAsGroup = value;
  }
  public resetSpiloRunAsGroup() {
    this._spiloRunAsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloRunAsGroupInput() {
    return this._spiloRunAsGroup;
  }

  // spilo_run_as_user - computed: false, optional: true, required: false
  private _spiloRunAsUser?: number; 
  public get spiloRunAsUser() {
    return this.getNumberAttribute('spilo_run_as_user');
  }
  public set spiloRunAsUser(value: number) {
    this._spiloRunAsUser = value;
  }
  public resetSpiloRunAsUser() {
    this._spiloRunAsUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spiloRunAsUserInput() {
    return this._spiloRunAsUser;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandbyOutputReference(this, "standby");
  public get standby() {
    return this._standby;
  }
  public putStandby(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStandby) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
  }

  // streams - computed: false, optional: true, required: false
  private _streams = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreamsList(this, "streams", false);
  public get streams() {
    return this._streams;
  }
  public putStreams(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecStreams[] | cdktf.IResolvable) {
    this._streams.internalValue = value;
  }
  public resetStreams() {
    this._streams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get streamsInput() {
    return this._streams.internalValue;
  }

  // team_id - computed: false, optional: false, required: true
  private _teamId?: string; 
  public get teamId() {
    return this.getStringAttribute('team_id');
  }
  public set teamId(value: string) {
    this._teamId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamIdInput() {
    return this._teamId;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // tolerations - computed: false, optional: true, required: false
  private _tolerations = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerationsList(this, "tolerations", false);
  public get tolerations() {
    return this._tolerations;
  }
  public putTolerations(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecTolerations[] | cdktf.IResolvable) {
    this._tolerations.internalValue = value;
  }
  public resetTolerations() {
    this._tolerations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tolerationsInput() {
    return this._tolerations.internalValue;
  }

  // use_load_balancer - computed: false, optional: true, required: false
  private _useLoadBalancer?: boolean | cdktf.IResolvable; 
  public get useLoadBalancer() {
    return this.getBooleanAttribute('use_load_balancer');
  }
  public set useLoadBalancer(value: boolean | cdktf.IResolvable) {
    this._useLoadBalancer = value;
  }
  public resetUseLoadBalancer() {
    this._useLoadBalancer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useLoadBalancerInput() {
    return this._useLoadBalancer;
  }

  // users - computed: false, optional: true, required: false
  private _users?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get users() {
    return this.interpolationForAttribute('users');
  }
  public set users(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._users = value;
  }
  public resetUsers() {
    this._users = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users;
  }

  // users_ignoring_secret_rotation - computed: false, optional: true, required: false
  private _usersIgnoringSecretRotation?: string[]; 
  public get usersIgnoringSecretRotation() {
    return this.getListAttribute('users_ignoring_secret_rotation');
  }
  public set usersIgnoringSecretRotation(value: string[]) {
    this._usersIgnoringSecretRotation = value;
  }
  public resetUsersIgnoringSecretRotation() {
    this._usersIgnoringSecretRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersIgnoringSecretRotationInput() {
    return this._usersIgnoringSecretRotation;
  }

  // users_with_in_place_secret_rotation - computed: false, optional: true, required: false
  private _usersWithInPlaceSecretRotation?: string[]; 
  public get usersWithInPlaceSecretRotation() {
    return this.getListAttribute('users_with_in_place_secret_rotation');
  }
  public set usersWithInPlaceSecretRotation(value: string[]) {
    this._usersWithInPlaceSecretRotation = value;
  }
  public resetUsersWithInPlaceSecretRotation() {
    this._usersWithInPlaceSecretRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersWithInPlaceSecretRotationInput() {
    return this._usersWithInPlaceSecretRotation;
  }

  // users_with_secret_rotation - computed: false, optional: true, required: false
  private _usersWithSecretRotation?: string[]; 
  public get usersWithSecretRotation() {
    return this.getListAttribute('users_with_secret_rotation');
  }
  public set usersWithSecretRotation(value: string[]) {
    this._usersWithSecretRotation = value;
  }
  public resetUsersWithSecretRotation() {
    this._usersWithSecretRotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersWithSecretRotationInput() {
    return this._usersWithSecretRotation;
  }

  // volume - computed: false, optional: false, required: true
  private _volume = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolumeOutputReference(this, "volume");
  public get volume() {
    return this._volume;
  }
  public putVolume(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpecVolume) {
    this._volume.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeInput() {
    return this._volume.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest k8s_acid_zalan_do_postgresql_v1_manifest}
*/
export class DataK8SAcidZalanDoPostgresqlV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_acid_zalan_do_postgresql_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAcidZalanDoPostgresqlV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAcidZalanDoPostgresqlV1Manifest to import
  * @param importFromId The id of the existing DataK8SAcidZalanDoPostgresqlV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAcidZalanDoPostgresqlV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_acid_zalan_do_postgresql_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/acid_zalan_do_postgresql_v1_manifest k8s_acid_zalan_do_postgresql_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAcidZalanDoPostgresqlV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAcidZalanDoPostgresqlV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_acid_zalan_do_postgresql_v1_manifest',
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
  private _metadata = new DataK8SAcidZalanDoPostgresqlV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAcidZalanDoPostgresqlV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SAcidZalanDoPostgresqlV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAcidZalanDoPostgresqlV1ManifestSpec) {
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
      metadata: dataK8SAcidZalanDoPostgresqlV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAcidZalanDoPostgresqlV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAcidZalanDoPostgresqlV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestMetadata",
      },
      spec: {
        value: dataK8SAcidZalanDoPostgresqlV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAcidZalanDoPostgresqlV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
