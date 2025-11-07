// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#metadata DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#metadata}
  */
  readonly metadata: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata;
  /**
  * Specification of the desired behavior of the ScheduledBackup. More info: https://git.k8s.io/community/contributors/devel/sig-architecture/api-conventions.md#spec-and-status
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#spec DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#spec}
  */
  readonly spec: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec;
}
export interface DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#annotations DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#labels DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#name DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#namespace DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadataToTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadataToHclTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#name DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecClusterToTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecClusterToHclTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecClusterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration {
  /**
  * Control whether the I/O workload for the backup initial checkpoint will be limited, according to the 'checkpoint_completion_target' setting on the PostgreSQL server. If set to true, an immediate checkpoint will be used, meaning PostgreSQL will complete the checkpoint as soon as possible. 'false' by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#immediate_checkpoint DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#immediate_checkpoint}
  */
  readonly immediateCheckpoint?: boolean | cdktf.IResolvable;
  /**
  * If false, the function will return immediately after the backup is completed, without waiting for WAL to be archived. This behavior is only useful with backup software that independently monitors WAL archiving. Otherwise, WAL required to make the backup consistent might be missing and make the backup useless. By default, or when this parameter is true, pg_backup_stop will wait for WAL to be archived when archiving is enabled. On a standby, this means that it will wait only when archive_mode = always. If write activity on the primary is low, it may be useful to run pg_switch_wal on the primary in order to trigger an immediate segment switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#wait_for_archive DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#wait_for_archive}
  */
  readonly waitForArchive?: boolean | cdktf.IResolvable;
}

export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfigurationToTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    immediate_checkpoint: cdktf.booleanToTerraform(struct!.immediateCheckpoint),
    wait_for_archive: cdktf.booleanToTerraform(struct!.waitForArchive),
  }
}


export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfigurationToHclTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    immediate_checkpoint: {
      value: cdktf.booleanToHclTerraform(struct!.immediateCheckpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    wait_for_archive: {
      value: cdktf.booleanToHclTerraform(struct!.waitForArchive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._immediateCheckpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediateCheckpoint = this._immediateCheckpoint;
    }
    if (this._waitForArchive !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitForArchive = this._waitForArchive;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._immediateCheckpoint = undefined;
      this._waitForArchive = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._immediateCheckpoint = value.immediateCheckpoint;
      this._waitForArchive = value.waitForArchive;
    }
  }

  // immediate_checkpoint - computed: false, optional: true, required: false
  private _immediateCheckpoint?: boolean | cdktf.IResolvable; 
  public get immediateCheckpoint() {
    return this.getBooleanAttribute('immediate_checkpoint');
  }
  public set immediateCheckpoint(value: boolean | cdktf.IResolvable) {
    this._immediateCheckpoint = value;
  }
  public resetImmediateCheckpoint() {
    this._immediateCheckpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateCheckpointInput() {
    return this._immediateCheckpoint;
  }

  // wait_for_archive - computed: false, optional: true, required: false
  private _waitForArchive?: boolean | cdktf.IResolvable; 
  public get waitForArchive() {
    return this.getBooleanAttribute('wait_for_archive');
  }
  public set waitForArchive(value: boolean | cdktf.IResolvable) {
    this._waitForArchive = value;
  }
  public resetWaitForArchive() {
    this._waitForArchive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForArchiveInput() {
    return this._waitForArchive;
  }
}
export interface DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration {
  /**
  * Name is the name of the plugin managing this backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#name DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#name}
  */
  readonly name: string;
  /**
  * Parameters are the configuration parameters passed to the backup plugin for this backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#parameters DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#parameters}
  */
  readonly parameters?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfigurationToTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.parameters),
  }
}


export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfigurationToHclTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration | cdktf.IResolvable): any {
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
    parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.parameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._parameters = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._parameters = value.parameters;
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
}
export interface DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec {
  /**
  * Indicates which ownerReference should be put inside the created backup resources.<br /> - none: no owner reference for created backup objects (same behavior as before the field was introduced)<br /> - self: sets the Scheduled backup object as owner of the backup<br /> - cluster: set the cluster as owner of the backup<br />
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#backup_owner_reference DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#backup_owner_reference}
  */
  readonly backupOwnerReference?: string;
  /**
  * The cluster to backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#cluster DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#cluster}
  */
  readonly cluster: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster;
  /**
  * If the first backup has to be immediately start after creation or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#immediate DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#immediate}
  */
  readonly immediate?: boolean | cdktf.IResolvable;
  /**
  * The backup method to be used, possible options are 'barmanObjectStore', 'volumeSnapshot' or 'plugin'. Defaults to: 'barmanObjectStore'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#method DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#method}
  */
  readonly method?: string;
  /**
  * Whether the default type of backup with volume snapshots is online/hot ('true', default) or offline/cold ('false') Overrides the default setting specified in the cluster field '.spec.backup.volumeSnapshot.online'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#online DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#online}
  */
  readonly online?: boolean | cdktf.IResolvable;
  /**
  * Configuration parameters to control the online/hot backup with volume snapshots Overrides the default settings specified in the cluster '.backup.volumeSnapshot.onlineConfiguration' stanza
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#online_configuration DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#online_configuration}
  */
  readonly onlineConfiguration?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration;
  /**
  * Configuration parameters passed to the plugin managing this backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#plugin_configuration DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#plugin_configuration}
  */
  readonly pluginConfiguration?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration;
  /**
  * The schedule does not follow the same format used in Kubernetes CronJobs as it includes an additional seconds specifier, see https://pkg.go.dev/github.com/robfig/cron#hdr-CRON_Expression_Format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#schedule DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#schedule}
  */
  readonly schedule: string;
  /**
  * If this backup is suspended or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#suspend DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#suspend}
  */
  readonly suspend?: boolean | cdktf.IResolvable;
  /**
  * The policy to decide which instance should perform this backup. If empty, it defaults to 'cluster.spec.backup.target'. Available options are empty string, 'primary' and 'prefer-standby'. 'primary' to have backups run always on primary instances, 'prefer-standby' to have backups run preferably on the most updated standby, if available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#target DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest#target}
  */
  readonly target?: string;
}

export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecToTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_owner_reference: cdktf.stringToTerraform(struct!.backupOwnerReference),
    cluster: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecClusterToTerraform(struct!.cluster),
    immediate: cdktf.booleanToTerraform(struct!.immediate),
    method: cdktf.stringToTerraform(struct!.method),
    online: cdktf.booleanToTerraform(struct!.online),
    online_configuration: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfigurationToTerraform(struct!.onlineConfiguration),
    plugin_configuration: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfigurationToTerraform(struct!.pluginConfiguration),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    suspend: cdktf.booleanToTerraform(struct!.suspend),
    target: cdktf.stringToTerraform(struct!.target),
  }
}


export function dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecToHclTerraform(struct?: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_owner_reference: {
      value: cdktf.stringToHclTerraform(struct!.backupOwnerReference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster: {
      value: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecClusterToHclTerraform(struct!.cluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster",
    },
    immediate: {
      value: cdktf.booleanToHclTerraform(struct!.immediate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    online: {
      value: cdktf.booleanToHclTerraform(struct!.online),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    online_configuration: {
      value: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfigurationToHclTerraform(struct!.onlineConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration",
    },
    plugin_configuration: {
      value: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfigurationToHclTerraform(struct!.pluginConfiguration),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    suspend: {
      value: cdktf.booleanToHclTerraform(struct!.suspend),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    target: {
      value: cdktf.stringToHclTerraform(struct!.target),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupOwnerReference !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupOwnerReference = this._backupOwnerReference;
    }
    if (this._cluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster?.internalValue;
    }
    if (this._immediate !== undefined) {
      hasAnyValues = true;
      internalValueResult.immediate = this._immediate;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._online !== undefined) {
      hasAnyValues = true;
      internalValueResult.online = this._online;
    }
    if (this._onlineConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.onlineConfiguration = this._onlineConfiguration?.internalValue;
    }
    if (this._pluginConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pluginConfiguration = this._pluginConfiguration?.internalValue;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._suspend !== undefined) {
      hasAnyValues = true;
      internalValueResult.suspend = this._suspend;
    }
    if (this._target !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupOwnerReference = undefined;
      this._cluster.internalValue = undefined;
      this._immediate = undefined;
      this._method = undefined;
      this._online = undefined;
      this._onlineConfiguration.internalValue = undefined;
      this._pluginConfiguration.internalValue = undefined;
      this._schedule = undefined;
      this._suspend = undefined;
      this._target = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupOwnerReference = value.backupOwnerReference;
      this._cluster.internalValue = value.cluster;
      this._immediate = value.immediate;
      this._method = value.method;
      this._online = value.online;
      this._onlineConfiguration.internalValue = value.onlineConfiguration;
      this._pluginConfiguration.internalValue = value.pluginConfiguration;
      this._schedule = value.schedule;
      this._suspend = value.suspend;
      this._target = value.target;
    }
  }

  // backup_owner_reference - computed: false, optional: true, required: false
  private _backupOwnerReference?: string; 
  public get backupOwnerReference() {
    return this.getStringAttribute('backup_owner_reference');
  }
  public set backupOwnerReference(value: string) {
    this._backupOwnerReference = value;
  }
  public resetBackupOwnerReference() {
    this._backupOwnerReference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupOwnerReferenceInput() {
    return this._backupOwnerReference;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster = new DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecClusterOutputReference(this, "cluster");
  public get cluster() {
    return this._cluster;
  }
  public putCluster(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecCluster) {
    this._cluster.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster.internalValue;
  }

  // immediate - computed: false, optional: true, required: false
  private _immediate?: boolean | cdktf.IResolvable; 
  public get immediate() {
    return this.getBooleanAttribute('immediate');
  }
  public set immediate(value: boolean | cdktf.IResolvable) {
    this._immediate = value;
  }
  public resetImmediate() {
    this._immediate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateInput() {
    return this._immediate;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // online - computed: false, optional: true, required: false
  private _online?: boolean | cdktf.IResolvable; 
  public get online() {
    return this.getBooleanAttribute('online');
  }
  public set online(value: boolean | cdktf.IResolvable) {
    this._online = value;
  }
  public resetOnline() {
    this._online = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineInput() {
    return this._online;
  }

  // online_configuration - computed: false, optional: true, required: false
  private _onlineConfiguration = new DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfigurationOutputReference(this, "online_configuration");
  public get onlineConfiguration() {
    return this._onlineConfiguration;
  }
  public putOnlineConfiguration(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOnlineConfiguration) {
    this._onlineConfiguration.internalValue = value;
  }
  public resetOnlineConfiguration() {
    this._onlineConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlineConfigurationInput() {
    return this._onlineConfiguration.internalValue;
  }

  // plugin_configuration - computed: false, optional: true, required: false
  private _pluginConfiguration = new DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfigurationOutputReference(this, "plugin_configuration");
  public get pluginConfiguration() {
    return this._pluginConfiguration;
  }
  public putPluginConfiguration(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecPluginConfiguration) {
    this._pluginConfiguration.internalValue = value;
  }
  public resetPluginConfiguration() {
    this._pluginConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginConfigurationInput() {
    return this._pluginConfiguration.internalValue;
  }

  // schedule - computed: false, optional: false, required: true
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // suspend - computed: false, optional: true, required: false
  private _suspend?: boolean | cdktf.IResolvable; 
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }
  public set suspend(value: boolean | cdktf.IResolvable) {
    this._suspend = value;
  }
  public resetSuspend() {
    this._suspend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendInput() {
    return this._suspend;
  }

  // target - computed: false, optional: true, required: false
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  public resetTarget() {
    this._target = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest k8s_postgresql_cnpg_io_scheduled_backup_v1_manifest}
*/
export class DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_postgresql_cnpg_io_scheduled_backup_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest to import
  * @param importFromId The id of the existing DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SPostgresqlCnpgIoScheduledBackupV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_postgresql_cnpg_io_scheduled_backup_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/postgresql_cnpg_io_scheduled_backup_v1_manifest k8s_postgresql_cnpg_io_scheduled_backup_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_postgresql_cnpg_io_scheduled_backup_v1_manifest',
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
  private _metadata = new DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec) {
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
      metadata: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestMetadata",
      },
      spec: {
        value: dataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SPostgresqlCnpgIoScheduledBackupV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
