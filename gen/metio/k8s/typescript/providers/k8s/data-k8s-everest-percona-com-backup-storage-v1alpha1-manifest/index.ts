// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#metadata DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata;
  /**
  * BackupStorageSpec defines the desired state of BackupStorage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#spec DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec;
}
export interface DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#annotations DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#labels DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#name DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#namespace DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec {
  /**
  * AllowedNamespaces is the list of namespaces where the operator will copy secrets provided in the CredentialsSecretsName. Deprecated: BackupStorages are now used only in the namespaces where they are created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#allowed_namespaces DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#allowed_namespaces}
  */
  readonly allowedNamespaces?: string[];
  /**
  * Bucket is a name of bucket.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#bucket DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#bucket}
  */
  readonly bucket: string;
  /**
  * CredentialsSecretName is the name of the secret with credentials.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#credentials_secret_name DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#credentials_secret_name}
  */
  readonly credentialsSecretName: string;
  /**
  * Description stores description of a backup storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#description DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#description}
  */
  readonly description?: string;
  /**
  * EndpointURL is an endpoint URL of backup storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#endpoint_url DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#endpoint_url}
  */
  readonly endpointUrl?: string;
  /**
  * ForcePathStyle is set to use path-style URLs. If unspecified, the default value is false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#force_path_style DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#force_path_style}
  */
  readonly forcePathStyle?: boolean | cdktf.IResolvable;
  /**
  * Region is a region where the bucket is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#region DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#region}
  */
  readonly region?: string;
  /**
  * Type is a type of backup storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#type DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#type}
  */
  readonly type: string;
  /**
  * VerifyTLS is set to ensure TLS/SSL verification. If unspecified, the default value is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#verify_tls DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest#verify_tls}
  */
  readonly verifyTls?: boolean | cdktf.IResolvable;
}

export function dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpecToTerraform(struct?: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedNamespaces),
    bucket: cdktf.stringToTerraform(struct!.bucket),
    credentials_secret_name: cdktf.stringToTerraform(struct!.credentialsSecretName),
    description: cdktf.stringToTerraform(struct!.description),
    endpoint_url: cdktf.stringToTerraform(struct!.endpointUrl),
    force_path_style: cdktf.booleanToTerraform(struct!.forcePathStyle),
    region: cdktf.stringToTerraform(struct!.region),
    type: cdktf.stringToTerraform(struct!.type),
    verify_tls: cdktf.booleanToTerraform(struct!.verifyTls),
  }
}


export function dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedNamespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bucket: {
      value: cdktf.stringToHclTerraform(struct!.bucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    credentials_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.credentialsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    force_path_style: {
      value: cdktf.booleanToHclTerraform(struct!.forcePathStyle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    region: {
      value: cdktf.stringToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_tls: {
      value: cdktf.booleanToHclTerraform(struct!.verifyTls),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedNamespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedNamespaces = this._allowedNamespaces;
    }
    if (this._bucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.bucket = this._bucket;
    }
    if (this._credentialsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.credentialsSecretName = this._credentialsSecretName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._endpointUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointUrl = this._endpointUrl;
    }
    if (this._forcePathStyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.forcePathStyle = this._forcePathStyle;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._verifyTls !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyTls = this._verifyTls;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedNamespaces = undefined;
      this._bucket = undefined;
      this._credentialsSecretName = undefined;
      this._description = undefined;
      this._endpointUrl = undefined;
      this._forcePathStyle = undefined;
      this._region = undefined;
      this._type = undefined;
      this._verifyTls = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedNamespaces = value.allowedNamespaces;
      this._bucket = value.bucket;
      this._credentialsSecretName = value.credentialsSecretName;
      this._description = value.description;
      this._endpointUrl = value.endpointUrl;
      this._forcePathStyle = value.forcePathStyle;
      this._region = value.region;
      this._type = value.type;
      this._verifyTls = value.verifyTls;
    }
  }

  // allowed_namespaces - computed: false, optional: true, required: false
  private _allowedNamespaces?: string[]; 
  public get allowedNamespaces() {
    return this.getListAttribute('allowed_namespaces');
  }
  public set allowedNamespaces(value: string[]) {
    this._allowedNamespaces = value;
  }
  public resetAllowedNamespaces() {
    this._allowedNamespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamespacesInput() {
    return this._allowedNamespaces;
  }

  // bucket - computed: false, optional: false, required: true
  private _bucket?: string; 
  public get bucket() {
    return this.getStringAttribute('bucket');
  }
  public set bucket(value: string) {
    this._bucket = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bucketInput() {
    return this._bucket;
  }

  // credentials_secret_name - computed: false, optional: false, required: true
  private _credentialsSecretName?: string; 
  public get credentialsSecretName() {
    return this.getStringAttribute('credentials_secret_name');
  }
  public set credentialsSecretName(value: string) {
    this._credentialsSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsSecretNameInput() {
    return this._credentialsSecretName;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // endpoint_url - computed: false, optional: true, required: false
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  public resetEndpointUrl() {
    this._endpointUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
  }

  // force_path_style - computed: false, optional: true, required: false
  private _forcePathStyle?: boolean | cdktf.IResolvable; 
  public get forcePathStyle() {
    return this.getBooleanAttribute('force_path_style');
  }
  public set forcePathStyle(value: boolean | cdktf.IResolvable) {
    this._forcePathStyle = value;
  }
  public resetForcePathStyle() {
    this._forcePathStyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forcePathStyleInput() {
    return this._forcePathStyle;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // verify_tls - computed: false, optional: true, required: false
  private _verifyTls?: boolean | cdktf.IResolvable; 
  public get verifyTls() {
    return this.getBooleanAttribute('verify_tls');
  }
  public set verifyTls(value: boolean | cdktf.IResolvable) {
    this._verifyTls = value;
  }
  public resetVerifyTls() {
    this._verifyTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyTlsInput() {
    return this._verifyTls;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest k8s_everest_percona_com_backup_storage_v1alpha1_manifest}
*/
export class DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_everest_percona_com_backup_storage_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SEverestPerconaComBackupStorageV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_everest_percona_com_backup_storage_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/everest_percona_com_backup_storage_v1alpha1_manifest k8s_everest_percona_com_backup_storage_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_everest_percona_com_backup_storage_v1alpha1_manifest',
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec) {
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
      metadata: dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SEverestPerconaComBackupStorageV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
