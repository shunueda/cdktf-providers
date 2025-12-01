// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#metadata DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#metadata}
  */
  readonly metadata: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#priority_class_name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#scheduler_name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#spec DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#spec}
  */
  readonly spec?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec;
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#annotations DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#labels DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#namespace DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadataToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadataToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#xbcloud DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#xbcloud}
  */
  readonly xbcloud?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#xbstream DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#xbstream}
  */
  readonly xbstream?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#xtrabackup DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#xtrabackup}
  */
  readonly xtrabackup?: string[];
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    xbcloud: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xbcloud),
    xbstream: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xbstream),
    xtrabackup: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.xtrabackup),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    xbcloud: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xbcloud),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    xbstream: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xbstream),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    xtrabackup: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.xtrabackup),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._xbcloud !== undefined) {
      hasAnyValues = true;
      internalValueResult.xbcloud = this._xbcloud;
    }
    if (this._xbstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.xbstream = this._xbstream;
    }
    if (this._xtrabackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.xtrabackup = this._xtrabackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._xbcloud = undefined;
      this._xbstream = undefined;
      this._xtrabackup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._xbcloud = value.xbcloud;
      this._xbstream = value.xbstream;
      this._xtrabackup = value.xtrabackup;
    }
  }

  // xbcloud - computed: false, optional: true, required: false
  private _xbcloud?: string[]; 
  public get xbcloud() {
    return this.getListAttribute('xbcloud');
  }
  public set xbcloud(value: string[]) {
    this._xbcloud = value;
  }
  public resetXbcloud() {
    this._xbcloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xbcloudInput() {
    return this._xbcloud;
  }

  // xbstream - computed: false, optional: true, required: false
  private _xbstream?: string[]; 
  public get xbstream() {
    return this.getListAttribute('xbstream');
  }
  public set xbstream(value: string[]) {
    this._xbstream = value;
  }
  public resetXbstream() {
    this._xbstream = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xbstreamInput() {
    return this._xbstream;
  }

  // xtrabackup - computed: false, optional: true, required: false
  private _xtrabackup?: string[]; 
  public get xtrabackup() {
    return this.getListAttribute('xtrabackup');
  }
  public set xtrabackup(value: string[]) {
    this._xtrabackup = value;
  }
  public resetXtrabackup() {
    this._xtrabackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xtrabackupInput() {
    return this._xtrabackup;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#key DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#optional DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#api_version DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#field_path DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#field_path}
  */
  readonly fieldPath: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    field_path: cdktf.stringToTerraform(struct!.fieldPath),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
    }
    if (this._fieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldPath = this._fieldPath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._fieldPath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._fieldPath = value.fieldPath;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
  }

  // field_path - computed: false, optional: false, required: true
  private _fieldPath?: string; 
  public get fieldPath() {
    return this.getStringAttribute('field_path');
  }
  public set fieldPath(value: string) {
    this._fieldPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldPathInput() {
    return this._fieldPath;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#container_name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#container_name}
  */
  readonly containerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#divisor DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#divisor}
  */
  readonly divisor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#resource DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#resource}
  */
  readonly resource: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_name: cdktf.stringToTerraform(struct!.containerName),
    divisor: cdktf.stringToTerraform(struct!.divisor),
    resource: cdktf.stringToTerraform(struct!.resource),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_name: {
      value: cdktf.stringToHclTerraform(struct!.containerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    divisor: {
      value: cdktf.stringToHclTerraform(struct!.divisor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerName = this._containerName;
    }
    if (this._divisor !== undefined) {
      hasAnyValues = true;
      internalValueResult.divisor = this._divisor;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerName = undefined;
      this._divisor = undefined;
      this._resource = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerName = value.containerName;
      this._divisor = value.divisor;
      this._resource = value.resource;
    }
  }

  // container_name - computed: false, optional: true, required: false
  private _containerName?: string; 
  public get containerName() {
    return this.getStringAttribute('container_name');
  }
  public set containerName(value: string) {
    this._containerName = value;
  }
  public resetContainerName() {
    this._containerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerNameInput() {
    return this._containerName;
  }

  // divisor - computed: false, optional: true, required: false
  private _divisor?: string; 
  public get divisor() {
    return this.getStringAttribute('divisor');
  }
  public set divisor(value: string) {
    this._divisor = value;
  }
  public resetDivisor() {
    this._divisor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get divisorInput() {
    return this._divisor;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#key DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#optional DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable): any {
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
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._name = value.name;
      this._optional = value.optional;
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

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#config_map_key_ref DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#config_map_key_ref}
  */
  readonly configMapKeyRef?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#field_ref DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#field_ref}
  */
  readonly fieldRef?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#resource_field_ref DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#resource_field_ref}
  */
  readonly resourceFieldRef?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#secret_key_ref DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#secret_key_ref}
  */
  readonly secretKeyRef?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config_map_key_ref: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToTerraform(struct!.configMapKeyRef),
    field_ref: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRefToTerraform(struct!.fieldRef),
    resource_field_ref: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToTerraform(struct!.resourceFieldRef),
    secret_key_ref: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToTerraform(struct!.secretKeyRef),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config_map_key_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefToHclTerraform(struct!.configMapKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef",
    },
    field_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRefToHclTerraform(struct!.fieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef",
    },
    resource_field_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefToHclTerraform(struct!.resourceFieldRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef",
    },
    secret_key_ref: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefToHclTerraform(struct!.secretKeyRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configMapKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMapKeyRef = this._configMapKeyRef?.internalValue;
    }
    if (this._fieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRef = this._fieldRef?.internalValue;
    }
    if (this._resourceFieldRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceFieldRef = this._resourceFieldRef?.internalValue;
    }
    if (this._secretKeyRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKeyRef = this._secretKeyRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = undefined;
      this._fieldRef.internalValue = undefined;
      this._resourceFieldRef.internalValue = undefined;
      this._secretKeyRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._configMapKeyRef.internalValue = value.configMapKeyRef;
      this._fieldRef.internalValue = value.fieldRef;
      this._resourceFieldRef.internalValue = value.resourceFieldRef;
      this._secretKeyRef.internalValue = value.secretKeyRef;
    }
  }

  // config_map_key_ref - computed: false, optional: true, required: false
  private _configMapKeyRef = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRefOutputReference(this, "config_map_key_ref");
  public get configMapKeyRef() {
    return this._configMapKeyRef;
  }
  public putConfigMapKeyRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromConfigMapKeyRef) {
    this._configMapKeyRef.internalValue = value;
  }
  public resetConfigMapKeyRef() {
    this._configMapKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapKeyRefInput() {
    return this._configMapKeyRef.internalValue;
  }

  // field_ref - computed: false, optional: true, required: false
  private _fieldRef = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRefOutputReference(this, "field_ref");
  public get fieldRef() {
    return this._fieldRef;
  }
  public putFieldRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromFieldRef) {
    this._fieldRef.internalValue = value;
  }
  public resetFieldRef() {
    this._fieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefInput() {
    return this._fieldRef.internalValue;
  }

  // resource_field_ref - computed: false, optional: true, required: false
  private _resourceFieldRef = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRefOutputReference(this, "resource_field_ref");
  public get resourceFieldRef() {
    return this._resourceFieldRef;
  }
  public putResourceFieldRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromResourceFieldRef) {
    this._resourceFieldRef.internalValue = value;
  }
  public resetResourceFieldRef() {
    this._resourceFieldRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFieldRefInput() {
    return this._resourceFieldRef.internalValue;
  }

  // secret_key_ref - computed: false, optional: true, required: false
  private _secretKeyRef = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRefOutputReference(this, "secret_key_ref");
  public get secretKeyRef() {
    return this._secretKeyRef;
  }
  public putSecretKeyRef(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromSecretKeyRef) {
    this._secretKeyRef.internalValue = value;
  }
  public resetSecretKeyRef() {
    this._secretKeyRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyRefInput() {
    return this._secretKeyRef.internalValue;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#value DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#value}
  */
  readonly value?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#value_from DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#value_from}
  */
  readonly valueFrom?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
    value_from: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromToTerraform(struct!.valueFrom),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable): any {
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
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value_from: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromToHclTerraform(struct!.valueFrom),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._valueFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFrom = this._valueFrom?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
      this._valueFrom.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
      this._valueFrom.internalValue = value.valueFrom;
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

  // value_from - computed: false, optional: true, required: false
  private _valueFrom = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFromOutputReference(this, "value_from");
  public get valueFrom() {
    return this._valueFrom;
  }
  public putValueFrom(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvValueFrom) {
    this._valueFrom.internalValue = value;
  }
  public resetValueFrom() {
    this._valueFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFromInput() {
    return this._valueFrom.internalValue;
  }
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvOutputReference {
    return new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#args DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#args}
  */
  readonly args?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#env DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#env}
  */
  readonly env?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv[] | cdktf.IResolvable;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgsToTerraform(struct!.args),
    env: cdktf.listMapper(dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvToTerraform, false)(struct!.env),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgsToHclTerraform(struct!.args),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args?.internalValue;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args.internalValue = undefined;
      this._env.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args.internalValue = value.args;
      this._env.internalValue = value.env;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgsOutputReference(this, "args");
  public get args() {
    return this._args;
  }
  public putArgs(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsArgs) {
    this._args.internalValue = value;
  }
  public resetArgs() {
    this._args.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args.internalValue;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }
}
export interface DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#container_options DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#container_options}
  */
  readonly containerOptions?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#pxc_cluster DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#pxc_cluster}
  */
  readonly pxcCluster?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#storage_name DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest#storage_name}
  */
  readonly storageName?: string;
}

export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecToTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container_options: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsToTerraform(struct!.containerOptions),
    pxc_cluster: cdktf.stringToTerraform(struct!.pxcCluster),
    storage_name: cdktf.stringToTerraform(struct!.storageName),
  }
}


export function dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecToHclTerraform(struct?: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container_options: {
      value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsToHclTerraform(struct!.containerOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions",
    },
    pxc_cluster: {
      value: cdktf.stringToHclTerraform(struct!.pxcCluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage_name: {
      value: cdktf.stringToHclTerraform(struct!.storageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containerOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.containerOptions = this._containerOptions?.internalValue;
    }
    if (this._pxcCluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.pxcCluster = this._pxcCluster;
    }
    if (this._storageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageName = this._storageName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containerOptions.internalValue = undefined;
      this._pxcCluster = undefined;
      this._storageName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containerOptions.internalValue = value.containerOptions;
      this._pxcCluster = value.pxcCluster;
      this._storageName = value.storageName;
    }
  }

  // container_options - computed: false, optional: true, required: false
  private _containerOptions = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptionsOutputReference(this, "container_options");
  public get containerOptions() {
    return this._containerOptions;
  }
  public putContainerOptions(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecContainerOptions) {
    this._containerOptions.internalValue = value;
  }
  public resetContainerOptions() {
    this._containerOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerOptionsInput() {
    return this._containerOptions.internalValue;
  }

  // pxc_cluster - computed: false, optional: true, required: false
  private _pxcCluster?: string; 
  public get pxcCluster() {
    return this.getStringAttribute('pxc_cluster');
  }
  public set pxcCluster(value: string) {
    this._pxcCluster = value;
  }
  public resetPxcCluster() {
    this._pxcCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pxcClusterInput() {
    return this._pxcCluster;
  }

  // storage_name - computed: false, optional: true, required: false
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  public resetStorageName() {
    this._storageName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest k8s_pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest}
*/
export class DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest to import
  * @param importFromId The id of the existing DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest k8s_pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_pxc_percona_com_percona_xtra_db_cluster_backup_v1_manifest',
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
    this._priorityClassName = config.priorityClassName;
    this._schedulerName = config.schedulerName;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // priority_class_name - computed: false, optional: true, required: false
  private _priorityClassName?: string; 
  public get priorityClassName() {
    return this.getStringAttribute('priority_class_name');
  }
  public set priorityClassName(value: string) {
    this._priorityClassName = value;
  }
  public resetPriorityClassName() {
    this._priorityClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityClassNameInput() {
    return this._priorityClassName;
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

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec) {
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
      metadata: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      priority_class_name: cdktf.stringToTerraform(this._priorityClassName),
      scheduler_name: cdktf.stringToTerraform(this._schedulerName),
      spec: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestMetadata",
      },
      priority_class_name: {
        value: cdktf.stringToHclTerraform(this._priorityClassName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scheduler_name: {
        value: cdktf.stringToHclTerraform(this._schedulerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spec: {
        value: dataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPxcPerconaComPerconaXtraDbClusterBackupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
