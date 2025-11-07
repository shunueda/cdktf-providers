// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#metadata DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata;
  /**
  * BackupSpec defines the desired state of Backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#spec DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec;
}
export interface DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#annotations DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#labels DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#name DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#namespace DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec {
  /**
  * Specifies the backup method name that is defined in the backup policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#backup_method DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#backup_method}
  */
  readonly backupMethod: string;
  /**
  * Specifies the backup policy to be applied for this backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#backup_policy_name DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#backup_policy_name}
  */
  readonly backupPolicyName: string;
  /**
  * Determines whether the backup contents stored in the backup repository should be deleted when the backup custom resource(CR) is deleted. Supported values are 'Retain' and 'Delete'. - 'Retain' means that the backup content and its physical snapshot on backup repository are kept. - 'Delete' means that the backup content and its physical snapshot on backup repository are deleted. TODO: for the retain policy, we should support in the future for only deleting the backup CR but retaining the backup contents in backup repository. The current implementation only prevent accidental deletion of backup data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#deletion_policy DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Determines the parent backup name for incremental or differential backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#parent_backup_name DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#parent_backup_name}
  */
  readonly parentBackupName?: string;
  /**
  * Determines a duration up to which the backup should be kept. Controller will remove all backups that are older than the RetentionPeriod. If not set, the backup will be kept forever. For example, RetentionPeriod of '30d' will keep only the backups of last 30 days. Sample duration format: - years: 2y - months: 6mo - days: 30d - hours: 12h - minutes: 30m You can also combine the above durations. For example: 30d12h30m.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#retention_period DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest#retention_period}
  */
  readonly retentionPeriod?: string;
}

export function dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpecToTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_method: cdktf.stringToTerraform(struct!.backupMethod),
    backup_policy_name: cdktf.stringToTerraform(struct!.backupPolicyName),
    deletion_policy: cdktf.stringToTerraform(struct!.deletionPolicy),
    parent_backup_name: cdktf.stringToTerraform(struct!.parentBackupName),
    retention_period: cdktf.stringToTerraform(struct!.retentionPeriod),
  }
}


export function dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_method: {
      value: cdktf.stringToHclTerraform(struct!.backupMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.backupPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deletion_policy: {
      value: cdktf.stringToHclTerraform(struct!.deletionPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_backup_name: {
      value: cdktf.stringToHclTerraform(struct!.parentBackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMethod = this._backupMethod;
    }
    if (this._backupPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPolicyName = this._backupPolicyName;
    }
    if (this._deletionPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.deletionPolicy = this._deletionPolicy;
    }
    if (this._parentBackupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentBackupName = this._parentBackupName;
    }
    if (this._retentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriod = this._retentionPeriod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupMethod = undefined;
      this._backupPolicyName = undefined;
      this._deletionPolicy = undefined;
      this._parentBackupName = undefined;
      this._retentionPeriod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupMethod = value.backupMethod;
      this._backupPolicyName = value.backupPolicyName;
      this._deletionPolicy = value.deletionPolicy;
      this._parentBackupName = value.parentBackupName;
      this._retentionPeriod = value.retentionPeriod;
    }
  }

  // backup_method - computed: false, optional: false, required: true
  private _backupMethod?: string; 
  public get backupMethod() {
    return this.getStringAttribute('backup_method');
  }
  public set backupMethod(value: string) {
    this._backupMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMethodInput() {
    return this._backupMethod;
  }

  // backup_policy_name - computed: false, optional: false, required: true
  private _backupPolicyName?: string; 
  public get backupPolicyName() {
    return this.getStringAttribute('backup_policy_name');
  }
  public set backupPolicyName(value: string) {
    this._backupPolicyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPolicyNameInput() {
    return this._backupPolicyName;
  }

  // deletion_policy - computed: false, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // parent_backup_name - computed: false, optional: true, required: false
  private _parentBackupName?: string; 
  public get parentBackupName() {
    return this.getStringAttribute('parent_backup_name');
  }
  public set parentBackupName(value: string) {
    this._parentBackupName = value;
  }
  public resetParentBackupName() {
    this._parentBackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentBackupNameInput() {
    return this._parentBackupName;
  }

  // retention_period - computed: false, optional: true, required: false
  private _retentionPeriod?: string; 
  public get retentionPeriod() {
    return this.getStringAttribute('retention_period');
  }
  public set retentionPeriod(value: string) {
    this._retentionPeriod = value;
  }
  public resetRetentionPeriod() {
    this._retentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodInput() {
    return this._retentionPeriod;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_v1alpha1_manifest}
*/
export class DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_dataprotection_kubeblocks_io_backup_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SDataprotectionKubeblocksIoBackupV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_dataprotection_kubeblocks_io_backup_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/dataprotection_kubeblocks_io_backup_v1alpha1_manifest k8s_dataprotection_kubeblocks_io_backup_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_dataprotection_kubeblocks_io_backup_v1alpha1_manifest',
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
  private _metadata = new DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec) {
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
      metadata: dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SDataprotectionKubeblocksIoBackupV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
