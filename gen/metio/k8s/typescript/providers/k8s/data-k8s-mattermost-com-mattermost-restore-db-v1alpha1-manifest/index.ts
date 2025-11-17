// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#metadata DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata;
  /**
  * MattermostRestoreDBSpec defines the desired state of MattermostRestoreDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#spec DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec;
}
export interface DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#annotations DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#labels DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#name DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#namespace DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec {
  /**
  * InitBucketURL defines where the DB backup file is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#init_bucket_url DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#init_bucket_url}
  */
  readonly initBucketUrl?: string;
  /**
  * MattermostClusterName defines the ClusterInstallation name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#mattermost_cluster_name DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#mattermost_cluster_name}
  */
  readonly mattermostClusterName?: string;
  /**
  * MattermostDBName defines the database name. Need to set if different from 'mattermost'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#mattermost_db_name DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#mattermost_db_name}
  */
  readonly mattermostDbName?: string;
  /**
  * MattermostDBPassword defines the user password to access the database. Need to set if the user is different from the one created by the operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#mattermost_db_password DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#mattermost_db_password}
  */
  readonly mattermostDbPassword?: string;
  /**
  * MattermostDBUser defines the user to access the database. Need to set if the user is different from 'mmuser'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#mattermost_db_user DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#mattermost_db_user}
  */
  readonly mattermostDbUser?: string;
  /**
  * RestoreSecret defines the secret that holds the credentials to MySQL Operator be able to download the DB backup file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#restore_secret DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest#restore_secret}
  */
  readonly restoreSecret?: string;
}

export function dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpecToTerraform(struct?: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    init_bucket_url: cdktf.stringToTerraform(struct!.initBucketUrl),
    mattermost_cluster_name: cdktf.stringToTerraform(struct!.mattermostClusterName),
    mattermost_db_name: cdktf.stringToTerraform(struct!.mattermostDbName),
    mattermost_db_password: cdktf.stringToTerraform(struct!.mattermostDbPassword),
    mattermost_db_user: cdktf.stringToTerraform(struct!.mattermostDbUser),
    restore_secret: cdktf.stringToTerraform(struct!.restoreSecret),
  }
}


export function dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    init_bucket_url: {
      value: cdktf.stringToHclTerraform(struct!.initBucketUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mattermost_cluster_name: {
      value: cdktf.stringToHclTerraform(struct!.mattermostClusterName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mattermost_db_name: {
      value: cdktf.stringToHclTerraform(struct!.mattermostDbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mattermost_db_password: {
      value: cdktf.stringToHclTerraform(struct!.mattermostDbPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mattermost_db_user: {
      value: cdktf.stringToHclTerraform(struct!.mattermostDbUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    restore_secret: {
      value: cdktf.stringToHclTerraform(struct!.restoreSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._initBucketUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.initBucketUrl = this._initBucketUrl;
    }
    if (this._mattermostClusterName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mattermostClusterName = this._mattermostClusterName;
    }
    if (this._mattermostDbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mattermostDbName = this._mattermostDbName;
    }
    if (this._mattermostDbPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.mattermostDbPassword = this._mattermostDbPassword;
    }
    if (this._mattermostDbUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.mattermostDbUser = this._mattermostDbUser;
    }
    if (this._restoreSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.restoreSecret = this._restoreSecret;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._initBucketUrl = undefined;
      this._mattermostClusterName = undefined;
      this._mattermostDbName = undefined;
      this._mattermostDbPassword = undefined;
      this._mattermostDbUser = undefined;
      this._restoreSecret = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._initBucketUrl = value.initBucketUrl;
      this._mattermostClusterName = value.mattermostClusterName;
      this._mattermostDbName = value.mattermostDbName;
      this._mattermostDbPassword = value.mattermostDbPassword;
      this._mattermostDbUser = value.mattermostDbUser;
      this._restoreSecret = value.restoreSecret;
    }
  }

  // init_bucket_url - computed: false, optional: true, required: false
  private _initBucketUrl?: string; 
  public get initBucketUrl() {
    return this.getStringAttribute('init_bucket_url');
  }
  public set initBucketUrl(value: string) {
    this._initBucketUrl = value;
  }
  public resetInitBucketUrl() {
    this._initBucketUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initBucketUrlInput() {
    return this._initBucketUrl;
  }

  // mattermost_cluster_name - computed: false, optional: true, required: false
  private _mattermostClusterName?: string; 
  public get mattermostClusterName() {
    return this.getStringAttribute('mattermost_cluster_name');
  }
  public set mattermostClusterName(value: string) {
    this._mattermostClusterName = value;
  }
  public resetMattermostClusterName() {
    this._mattermostClusterName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mattermostClusterNameInput() {
    return this._mattermostClusterName;
  }

  // mattermost_db_name - computed: false, optional: true, required: false
  private _mattermostDbName?: string; 
  public get mattermostDbName() {
    return this.getStringAttribute('mattermost_db_name');
  }
  public set mattermostDbName(value: string) {
    this._mattermostDbName = value;
  }
  public resetMattermostDbName() {
    this._mattermostDbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mattermostDbNameInput() {
    return this._mattermostDbName;
  }

  // mattermost_db_password - computed: false, optional: true, required: false
  private _mattermostDbPassword?: string; 
  public get mattermostDbPassword() {
    return this.getStringAttribute('mattermost_db_password');
  }
  public set mattermostDbPassword(value: string) {
    this._mattermostDbPassword = value;
  }
  public resetMattermostDbPassword() {
    this._mattermostDbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mattermostDbPasswordInput() {
    return this._mattermostDbPassword;
  }

  // mattermost_db_user - computed: false, optional: true, required: false
  private _mattermostDbUser?: string; 
  public get mattermostDbUser() {
    return this.getStringAttribute('mattermost_db_user');
  }
  public set mattermostDbUser(value: string) {
    this._mattermostDbUser = value;
  }
  public resetMattermostDbUser() {
    this._mattermostDbUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mattermostDbUserInput() {
    return this._mattermostDbUser;
  }

  // restore_secret - computed: false, optional: true, required: false
  private _restoreSecret?: string; 
  public get restoreSecret() {
    return this.getStringAttribute('restore_secret');
  }
  public set restoreSecret(value: string) {
    this._restoreSecret = value;
  }
  public resetRestoreSecret() {
    this._restoreSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restoreSecretInput() {
    return this._restoreSecret;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest k8s_mattermost_com_mattermost_restore_db_v1alpha1_manifest}
*/
export class DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_mattermost_com_mattermost_restore_db_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SMattermostComMattermostRestoreDbV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_mattermost_com_mattermost_restore_db_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/mattermost_com_mattermost_restore_db_v1alpha1_manifest k8s_mattermost_com_mattermost_restore_db_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_mattermost_com_mattermost_restore_db_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec) {
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
      metadata: dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SMattermostComMattermostRestoreDbV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
