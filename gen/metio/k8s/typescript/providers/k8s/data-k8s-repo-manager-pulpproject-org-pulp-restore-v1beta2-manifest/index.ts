// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#metadata DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata;
  /**
  * PulpRestoreSpec defines the desired state of PulpRestore
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#spec DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec;
}
export interface DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#annotations DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#labels DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#name DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#namespace DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadataToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec {
  /**
  * Backup directory name, set as a status found on the backup object (backupDirectory)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#backup_dir DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#backup_dir}
  */
  readonly backupDir?: string;
  /**
  * Name of the backup custom resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#backup_name DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#backup_name}
  */
  readonly backupName: string;
  /**
  * Name of the PVC to be restored from, set as a status found on the backup object (backupClaim)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#backup_pvc DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#backup_pvc}
  */
  readonly backupPvc?: string;
  /**
  * Name of the deployment to be restored to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#deployment_name DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#deployment_name}
  */
  readonly deploymentName?: string;
  /**
  * Name of the deployment type. Can be one of {galaxy,pulp}.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#deployment_type DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * KeepBackupReplicasCount allows to define if the restore controller should restore the components with the same number of replicas from backup or restore only a single replica each.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#keep_replicas DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest#keep_replicas}
  */
  readonly keepReplicas?: boolean | cdktf.IResolvable;
}

export function dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpecToTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backup_dir: cdktf.stringToTerraform(struct!.backupDir),
    backup_name: cdktf.stringToTerraform(struct!.backupName),
    backup_pvc: cdktf.stringToTerraform(struct!.backupPvc),
    deployment_name: cdktf.stringToTerraform(struct!.deploymentName),
    deployment_type: cdktf.stringToTerraform(struct!.deploymentType),
    keep_replicas: cdktf.booleanToTerraform(struct!.keepReplicas),
  }
}


export function dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backup_dir: {
      value: cdktf.stringToHclTerraform(struct!.backupDir),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_name: {
      value: cdktf.stringToHclTerraform(struct!.backupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_pvc: {
      value: cdktf.stringToHclTerraform(struct!.backupPvc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_name: {
      value: cdktf.stringToHclTerraform(struct!.deploymentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deployment_type: {
      value: cdktf.stringToHclTerraform(struct!.deploymentType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keep_replicas: {
      value: cdktf.booleanToHclTerraform(struct!.keepReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backupDir !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupDir = this._backupDir;
    }
    if (this._backupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupName = this._backupName;
    }
    if (this._backupPvc !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupPvc = this._backupPvc;
    }
    if (this._deploymentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentName = this._deploymentName;
    }
    if (this._deploymentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deploymentType = this._deploymentType;
    }
    if (this._keepReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepReplicas = this._keepReplicas;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backupDir = undefined;
      this._backupName = undefined;
      this._backupPvc = undefined;
      this._deploymentName = undefined;
      this._deploymentType = undefined;
      this._keepReplicas = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backupDir = value.backupDir;
      this._backupName = value.backupName;
      this._backupPvc = value.backupPvc;
      this._deploymentName = value.deploymentName;
      this._deploymentType = value.deploymentType;
      this._keepReplicas = value.keepReplicas;
    }
  }

  // backup_dir - computed: false, optional: true, required: false
  private _backupDir?: string; 
  public get backupDir() {
    return this.getStringAttribute('backup_dir');
  }
  public set backupDir(value: string) {
    this._backupDir = value;
  }
  public resetBackupDir() {
    this._backupDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDirInput() {
    return this._backupDir;
  }

  // backup_name - computed: false, optional: false, required: true
  private _backupName?: string; 
  public get backupName() {
    return this.getStringAttribute('backup_name');
  }
  public set backupName(value: string) {
    this._backupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupNameInput() {
    return this._backupName;
  }

  // backup_pvc - computed: false, optional: true, required: false
  private _backupPvc?: string; 
  public get backupPvc() {
    return this.getStringAttribute('backup_pvc');
  }
  public set backupPvc(value: string) {
    this._backupPvc = value;
  }
  public resetBackupPvc() {
    this._backupPvc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPvcInput() {
    return this._backupPvc;
  }

  // deployment_name - computed: false, optional: true, required: false
  private _deploymentName?: string; 
  public get deploymentName() {
    return this.getStringAttribute('deployment_name');
  }
  public set deploymentName(value: string) {
    this._deploymentName = value;
  }
  public resetDeploymentName() {
    this._deploymentName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentNameInput() {
    return this._deploymentName;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // keep_replicas - computed: false, optional: true, required: false
  private _keepReplicas?: boolean | cdktf.IResolvable; 
  public get keepReplicas() {
    return this.getBooleanAttribute('keep_replicas');
  }
  public set keepReplicas(value: boolean | cdktf.IResolvable) {
    this._keepReplicas = value;
  }
  public resetKeepReplicas() {
    this._keepReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepReplicasInput() {
    return this._keepReplicas;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest k8s_repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest}
*/
export class DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest k8s_repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_repo_manager_pulpproject_org_pulp_restore_v1beta2_manifest',
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
  private _metadata = new DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec) {
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
      metadata: dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SRepoManagerPulpprojectOrgPulpRestoreV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
