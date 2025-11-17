import * as cdktf from 'cdktf';
import { DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundle,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundleToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundleToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundleOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMap,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMapToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMapToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMapOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApi,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApiToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApiToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApiOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinity,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinityToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinityToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinityOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackup,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackupToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackupToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackupOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrap,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrapToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrapToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrapOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificates,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificatesToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificatesToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificatesOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnv,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvList,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFrom,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromList,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSource,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSourceToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSourceToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSourceOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimit,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimitToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimitToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimitOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClusters,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersList,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRef,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRefToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRefToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRefOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecrets,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsList,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadata,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadataToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadataToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadataOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecManaged,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecManagedToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecManagedToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecManagedOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoring,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoringToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoringToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoringOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindow,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindowToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindowToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindowOutputReference,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPlugins,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsList,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresql,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresqlToTerraform,
dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresqlToHclTerraform,
DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresqlOutputReference } from './structs0'
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems {
  /**
  * key is the key to project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#key DataK8SPostgresqlCnpgIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * mode is Optional: mode bits used to set permissions on this file. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. If not specified, the volume defaultMode will be used. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#mode DataK8SPostgresqlCnpgIoClusterV1Manifest#mode}
  */
  readonly mode?: number;
  /**
  * path is the relative path of the file to map the key to. May not be an absolute path. May not contain the path element '..'. May not start with the string '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#path DataK8SPostgresqlCnpgIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    mode: cdktf.numberToTerraform(struct!.mode),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems | cdktf.IResolvable): any {
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
    mode: {
      value: cdktf.numberToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._mode = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._mode = value.mode;
      this._path = value.path;
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

  // mode - computed: false, optional: true, required: false
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret {
  /**
  * items if unspecified, each key-value pair in the Data field of the referenced Secret will be projected into the volume as a file whose name is the key and content is the value. If specified, the listed keys will be projected into the specified paths, and unlisted keys will not be present. If a key is specified which is not present in the Secret, the volume setup will error unless it is marked optional. Paths must be relative and may not contain the '..' path or start with '..'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#items DataK8SPostgresqlCnpgIoClusterV1Manifest#items}
  */
  readonly items?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems[] | cdktf.IResolvable;
  /**
  * Name of the referent. This field is effectively required, but due to backwards compatibility is allowed to be empty. Instances of this type with an empty value here are almost certainly wrong. More info: https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name?: string;
  /**
  * optional field specify whether the Secret or its key must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#optional DataK8SPostgresqlCnpgIoClusterV1Manifest#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    items: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsToTerraform, false)(struct!.items),
    name: cdktf.stringToTerraform(struct!.name),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    items: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsToHclTerraform, false)(struct!.items),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsList",
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._items?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items?.internalValue;
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._items.internalValue = undefined;
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
      this._items.internalValue = value.items;
      this._name = value.name;
      this._optional = value.optional;
    }
  }

  // items - computed: false, optional: true, required: false
  private _items = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItemsList(this, "items", false);
  public get items() {
    return this._items;
  }
  public putItems(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretItems[] | cdktf.IResolvable) {
    this._items.internalValue = value;
  }
  public resetItems() {
    this._items.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items.internalValue;
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken {
  /**
  * audience is the intended audience of the token. A recipient of a token must identify itself with an identifier specified in the audience of the token, and otherwise should reject the token. The audience defaults to the identifier of the apiserver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#audience DataK8SPostgresqlCnpgIoClusterV1Manifest#audience}
  */
  readonly audience?: string;
  /**
  * expirationSeconds is the requested duration of validity of the service account token. As the token approaches expiration, the kubelet volume plugin will proactively rotate the service account token. The kubelet will start trying to rotate the token if the token is older than 80 percent of its time to live or if the token is older than 24 hours.Defaults to 1 hour and must be at least 10 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#expiration_seconds DataK8SPostgresqlCnpgIoClusterV1Manifest#expiration_seconds}
  */
  readonly expirationSeconds?: number;
  /**
  * path is the path relative to the mount point of the file to project the token into.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#path DataK8SPostgresqlCnpgIoClusterV1Manifest#path}
  */
  readonly path: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountTokenToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    expiration_seconds: cdktf.numberToTerraform(struct!.expirationSeconds),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountTokenToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration_seconds: {
      value: cdktf.numberToHclTerraform(struct!.expirationSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountTokenOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._expirationSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.expirationSeconds = this._expirationSeconds;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._expirationSeconds = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._expirationSeconds = value.expirationSeconds;
      this._path = value.path;
    }
  }

  // audience - computed: false, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // expiration_seconds - computed: false, optional: true, required: false
  private _expirationSeconds?: number; 
  public get expirationSeconds() {
    return this.getNumberAttribute('expiration_seconds');
  }
  public set expirationSeconds(value: number) {
    this._expirationSeconds = value;
  }
  public resetExpirationSeconds() {
    this._expirationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationSecondsInput() {
    return this._expirationSeconds;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources {
  /**
  * ClusterTrustBundle allows a pod to access the '.spec.trustBundle' field of ClusterTrustBundle objects in an auto-updating file. Alpha, gated by the ClusterTrustBundleProjection feature gate. ClusterTrustBundle objects can either be selected by name, or by the combination of signer name and a label selector. Kubelet performs aggressive normalization of the PEM contents written into the pod filesystem. Esoteric PEM features such as inter-block comments and block headers are stripped. Certificates are deduplicated. The ordering of certificates within the file is arbitrary, and Kubelet may change the order over time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#cluster_trust_bundle DataK8SPostgresqlCnpgIoClusterV1Manifest#cluster_trust_bundle}
  */
  readonly clusterTrustBundle?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundle;
  /**
  * configMap information about the configMap data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#config_map DataK8SPostgresqlCnpgIoClusterV1Manifest#config_map}
  */
  readonly configMap?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMap;
  /**
  * downwardAPI information about the downwardAPI data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#downward_api DataK8SPostgresqlCnpgIoClusterV1Manifest#downward_api}
  */
  readonly downwardApi?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApi;
  /**
  * secret information about the secret data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#secret DataK8SPostgresqlCnpgIoClusterV1Manifest#secret}
  */
  readonly secret?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret;
  /**
  * serviceAccountToken is information about the serviceAccountToken data to project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#service_account_token DataK8SPostgresqlCnpgIoClusterV1Manifest#service_account_token}
  */
  readonly serviceAccountToken?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_trust_bundle: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundleToTerraform(struct!.clusterTrustBundle),
    config_map: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMapToTerraform(struct!.configMap),
    downward_api: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApiToTerraform(struct!.downwardApi),
    secret: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretToTerraform(struct!.secret),
    service_account_token: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountTokenToTerraform(struct!.serviceAccountToken),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_trust_bundle: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundleToHclTerraform(struct!.clusterTrustBundle),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundle",
    },
    config_map: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMapToHclTerraform(struct!.configMap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMap",
    },
    downward_api: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApiToHclTerraform(struct!.downwardApi),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApi",
    },
    secret: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretToHclTerraform(struct!.secret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret",
    },
    service_account_token: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountTokenToHclTerraform(struct!.serviceAccountToken),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterTrustBundle?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterTrustBundle = this._clusterTrustBundle?.internalValue;
    }
    if (this._configMap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.configMap = this._configMap?.internalValue;
    }
    if (this._downwardApi?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.downwardApi = this._downwardApi?.internalValue;
    }
    if (this._secret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret?.internalValue;
    }
    if (this._serviceAccountToken?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountToken = this._serviceAccountToken?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = undefined;
      this._configMap.internalValue = undefined;
      this._downwardApi.internalValue = undefined;
      this._secret.internalValue = undefined;
      this._serviceAccountToken.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterTrustBundle.internalValue = value.clusterTrustBundle;
      this._configMap.internalValue = value.configMap;
      this._downwardApi.internalValue = value.downwardApi;
      this._secret.internalValue = value.secret;
      this._serviceAccountToken.internalValue = value.serviceAccountToken;
    }
  }

  // cluster_trust_bundle - computed: false, optional: true, required: false
  private _clusterTrustBundle = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundleOutputReference(this, "cluster_trust_bundle");
  public get clusterTrustBundle() {
    return this._clusterTrustBundle;
  }
  public putClusterTrustBundle(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesClusterTrustBundle) {
    this._clusterTrustBundle.internalValue = value;
  }
  public resetClusterTrustBundle() {
    this._clusterTrustBundle.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterTrustBundleInput() {
    return this._clusterTrustBundle.internalValue;
  }

  // config_map - computed: false, optional: true, required: false
  private _configMap = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMapOutputReference(this, "config_map");
  public get configMap() {
    return this._configMap;
  }
  public putConfigMap(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesConfigMap) {
    this._configMap.internalValue = value;
  }
  public resetConfigMap() {
    this._configMap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configMapInput() {
    return this._configMap.internalValue;
  }

  // downward_api - computed: false, optional: true, required: false
  private _downwardApi = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApiOutputReference(this, "downward_api");
  public get downwardApi() {
    return this._downwardApi;
  }
  public putDownwardApi(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesDownwardApi) {
    this._downwardApi.internalValue = value;
  }
  public resetDownwardApi() {
    this._downwardApi.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downwardApiInput() {
    return this._downwardApi.internalValue;
  }

  // secret - computed: false, optional: true, required: false
  private _secret = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecretOutputReference(this, "secret");
  public get secret() {
    return this._secret;
  }
  public putSecret(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesSecret) {
    this._secret.internalValue = value;
  }
  public resetSecret() {
    this._secret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret.internalValue;
  }

  // service_account_token - computed: false, optional: true, required: false
  private _serviceAccountToken = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountTokenOutputReference(this, "service_account_token");
  public get serviceAccountToken() {
    return this._serviceAccountToken;
  }
  public putServiceAccountToken(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesServiceAccountToken) {
    this._serviceAccountToken.internalValue = value;
  }
  public resetServiceAccountToken() {
    this._serviceAccountToken.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTokenInput() {
    return this._serviceAccountToken.internalValue;
  }
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate {
  /**
  * defaultMode are the mode bits used to set permissions on created files by default. Must be an octal value between 0000 and 0777 or a decimal value between 0 and 511. YAML accepts both octal and decimal values, JSON requires decimal values for mode bits. Directories within the path are not affected by this setting. This might be in conflict with other options that affect the file mode, like fsGroup, and the result can be other mode bits set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#default_mode DataK8SPostgresqlCnpgIoClusterV1Manifest#default_mode}
  */
  readonly defaultMode?: number;
  /**
  * sources is the list of volume projections. Each entry in this list handles one source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#sources DataK8SPostgresqlCnpgIoClusterV1Manifest#sources}
  */
  readonly sources?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources[] | cdktf.IResolvable;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_mode: cdktf.numberToTerraform(struct!.defaultMode),
    sources: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesToTerraform, false)(struct!.sources),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_mode: {
      value: cdktf.numberToHclTerraform(struct!.defaultMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultMode = this._defaultMode;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._defaultMode = undefined;
      this._sources.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._defaultMode = value.defaultMode;
      this._sources.internalValue = value.sources;
    }
  }

  // default_mode - computed: false, optional: true, required: false
  private _defaultMode?: number; 
  public get defaultMode() {
    return this.getNumberAttribute('default_mode');
  }
  public set defaultMode(value: number) {
    this._defaultMode = value;
  }
  public resetDefaultMode() {
    this._defaultMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultModeInput() {
    return this._defaultMode;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica {
  /**
  * If replica mode is enabled, this cluster will be a replica of an existing cluster. Replica cluster can be created from a recovery object store or via streaming through pg_basebackup. Refer to the Replica clusters page of the documentation for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#enabled DataK8SPostgresqlCnpgIoClusterV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * When replica mode is enabled, this parameter allows you to replay transactions only when the system time is at least the configured time past the commit time. This provides an opportunity to correct data loss errors. Note that when this parameter is set, a promotion token cannot be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#min_apply_delay DataK8SPostgresqlCnpgIoClusterV1Manifest#min_apply_delay}
  */
  readonly minApplyDelay?: string;
  /**
  * Primary defines which Cluster is defined to be the primary in the distributed PostgreSQL cluster, based on the topology specified in externalClusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#primary DataK8SPostgresqlCnpgIoClusterV1Manifest#primary}
  */
  readonly primary?: string;
  /**
  * A demotion token generated by an external cluster used to check if the promotion requirements are met.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#promotion_token DataK8SPostgresqlCnpgIoClusterV1Manifest#promotion_token}
  */
  readonly promotionToken?: string;
  /**
  * Self defines the name of this cluster. It is used to determine if this is a primary or a replica cluster, comparing it with 'primary'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#self DataK8SPostgresqlCnpgIoClusterV1Manifest#self}
  */
  readonly selfAttribute?: string;
  /**
  * The name of the external cluster which is the replication origin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#source DataK8SPostgresqlCnpgIoClusterV1Manifest#source}
  */
  readonly source: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicaToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    min_apply_delay: cdktf.stringToTerraform(struct!.minApplyDelay),
    primary: cdktf.stringToTerraform(struct!.primary),
    promotion_token: cdktf.stringToTerraform(struct!.promotionToken),
    self: cdktf.stringToTerraform(struct!.selfAttribute),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicaToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    min_apply_delay: {
      value: cdktf.stringToHclTerraform(struct!.minApplyDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary: {
      value: cdktf.stringToHclTerraform(struct!.primary),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    promotion_token: {
      value: cdktf.stringToHclTerraform(struct!.promotionToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self: {
      value: cdktf.stringToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minApplyDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.minApplyDelay = this._minApplyDelay;
    }
    if (this._primary !== undefined) {
      hasAnyValues = true;
      internalValueResult.primary = this._primary;
    }
    if (this._promotionToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.promotionToken = this._promotionToken;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._minApplyDelay = undefined;
      this._primary = undefined;
      this._promotionToken = undefined;
      this._self = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._minApplyDelay = value.minApplyDelay;
      this._primary = value.primary;
      this._promotionToken = value.promotionToken;
      this._self = value.selfAttribute;
      this._source = value.source;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_apply_delay - computed: false, optional: true, required: false
  private _minApplyDelay?: string; 
  public get minApplyDelay() {
    return this.getStringAttribute('min_apply_delay');
  }
  public set minApplyDelay(value: string) {
    this._minApplyDelay = value;
  }
  public resetMinApplyDelay() {
    this._minApplyDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minApplyDelayInput() {
    return this._minApplyDelay;
  }

  // primary - computed: false, optional: true, required: false
  private _primary?: string; 
  public get primary() {
    return this.getStringAttribute('primary');
  }
  public set primary(value: string) {
    this._primary = value;
  }
  public resetPrimary() {
    this._primary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryInput() {
    return this._primary;
  }

  // promotion_token - computed: false, optional: true, required: false
  private _promotionToken?: string; 
  public get promotionToken() {
    return this.getStringAttribute('promotion_token');
  }
  public set promotionToken(value: string) {
    this._promotionToken = value;
  }
  public resetPromotionToken() {
    this._promotionToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get promotionTokenInput() {
    return this._promotionToken;
  }

  // self - computed: false, optional: true, required: false
  private _self?: string; 
  public get selfAttribute() {
    return this.getStringAttribute('self');
  }
  public set selfAttribute(value: string) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability {
  /**
  * If enabled (default), the operator will automatically manage replication slots on the primary instance and use them in streaming replication connections with all the standby instances that are part of the HA cluster. If disabled, the operator will not take advantage of replication slots in streaming connections with the replicas. This feature also controls replication slots in replica cluster, from the designated primary to its cascading replicas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#enabled DataK8SPostgresqlCnpgIoClusterV1Manifest#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Prefix for replication slots managed by the operator for HA. It may only contain lower case letters, numbers, and the underscore character. This can only be set at creation time. By default set to '_cnpg_'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#slot_prefix DataK8SPostgresqlCnpgIoClusterV1Manifest#slot_prefix}
  */
  readonly slotPrefix?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailabilityToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    slot_prefix: cdktf.stringToTerraform(struct!.slotPrefix),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailabilityToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    slot_prefix: {
      value: cdktf.stringToHclTerraform(struct!.slotPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailabilityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._slotPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.slotPrefix = this._slotPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._slotPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._slotPrefix = value.slotPrefix;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // slot_prefix - computed: false, optional: true, required: false
  private _slotPrefix?: string; 
  public get slotPrefix() {
    return this.getStringAttribute('slot_prefix');
  }
  public set slotPrefix(value: string) {
    this._slotPrefix = value;
  }
  public resetSlotPrefix() {
    this._slotPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slotPrefixInput() {
    return this._slotPrefix;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas {
  /**
  * When set to true, every replication slot that is on the primary is synchronized on each standby
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#enabled DataK8SPostgresqlCnpgIoClusterV1Manifest#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * List of regular expression patterns to match the names of replication slots to be excluded (by default empty)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#exclude_patterns DataK8SPostgresqlCnpgIoClusterV1Manifest#exclude_patterns}
  */
  readonly excludePatterns?: string[];
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicasToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    exclude_patterns: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludePatterns),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicasToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    exclude_patterns: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludePatterns),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._excludePatterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludePatterns = this._excludePatterns;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._excludePatterns = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._excludePatterns = value.excludePatterns;
    }
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exclude_patterns - computed: false, optional: true, required: false
  private _excludePatterns?: string[]; 
  public get excludePatterns() {
    return this.getListAttribute('exclude_patterns');
  }
  public set excludePatterns(value: string[]) {
    this._excludePatterns = value;
  }
  public resetExcludePatterns() {
    this._excludePatterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludePatternsInput() {
    return this._excludePatterns;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots {
  /**
  * Replication slots for high availability configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#high_availability DataK8SPostgresqlCnpgIoClusterV1Manifest#high_availability}
  */
  readonly highAvailability?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability;
  /**
  * Configures the synchronization of the user defined physical replication slots
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#synchronize_replicas DataK8SPostgresqlCnpgIoClusterV1Manifest#synchronize_replicas}
  */
  readonly synchronizeReplicas?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas;
  /**
  * Standby will update the status of the local replication slots every 'updateInterval' seconds (default 30).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#update_interval DataK8SPostgresqlCnpgIoClusterV1Manifest#update_interval}
  */
  readonly updateInterval?: number;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high_availability: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailabilityToTerraform(struct!.highAvailability),
    synchronize_replicas: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicasToTerraform(struct!.synchronizeReplicas),
    update_interval: cdktf.numberToTerraform(struct!.updateInterval),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high_availability: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailabilityToHclTerraform(struct!.highAvailability),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability",
    },
    synchronize_replicas: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicasToHclTerraform(struct!.synchronizeReplicas),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas",
    },
    update_interval: {
      value: cdktf.numberToHclTerraform(struct!.updateInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._highAvailability?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.highAvailability = this._highAvailability?.internalValue;
    }
    if (this._synchronizeReplicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronizeReplicas = this._synchronizeReplicas?.internalValue;
    }
    if (this._updateInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateInterval = this._updateInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._highAvailability.internalValue = undefined;
      this._synchronizeReplicas.internalValue = undefined;
      this._updateInterval = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._highAvailability.internalValue = value.highAvailability;
      this._synchronizeReplicas.internalValue = value.synchronizeReplicas;
      this._updateInterval = value.updateInterval;
    }
  }

  // high_availability - computed: false, optional: true, required: false
  private _highAvailability = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailabilityOutputReference(this, "high_availability");
  public get highAvailability() {
    return this._highAvailability;
  }
  public putHighAvailability(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsHighAvailability) {
    this._highAvailability.internalValue = value;
  }
  public resetHighAvailability() {
    this._highAvailability.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highAvailabilityInput() {
    return this._highAvailability.internalValue;
  }

  // synchronize_replicas - computed: false, optional: true, required: false
  private _synchronizeReplicas = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicasOutputReference(this, "synchronize_replicas");
  public get synchronizeReplicas() {
    return this._synchronizeReplicas;
  }
  public putSynchronizeReplicas(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsSynchronizeReplicas) {
    this._synchronizeReplicas.internalValue = value;
  }
  public resetSynchronizeReplicas() {
    this._synchronizeReplicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizeReplicasInput() {
    return this._synchronizeReplicas.internalValue;
  }

  // update_interval - computed: false, optional: true, required: false
  private _updateInterval?: number; 
  public get updateInterval() {
    return this.getNumberAttribute('update_interval');
  }
  public set updateInterval(value: number) {
    this._updateInterval = value;
  }
  public resetUpdateInterval() {
    this._updateInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateIntervalInput() {
    return this._updateInterval;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#request DataK8SPostgresqlCnpgIoClusterV1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#claims DataK8SPostgresqlCnpgIoClusterV1Manifest#claims}
  */
  readonly claims?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#limits DataK8SPostgresqlCnpgIoClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#requests DataK8SPostgresqlCnpgIoClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile {
  /**
  * localhostProfile indicates a profile defined in a file on the node should be used. The profile must be preconfigured on the node to work. Must be a descending path, relative to the kubelet's configured seccomp profile location. Must be set if type is 'Localhost'. Must NOT be set for any other type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#localhost_profile DataK8SPostgresqlCnpgIoClusterV1Manifest#localhost_profile}
  */
  readonly localhostProfile?: string;
  /**
  * type indicates which kind of seccomp profile will be applied. Valid options are: Localhost - a profile defined in a file on the node should be used. RuntimeDefault - the container runtime default profile should be used. Unconfined - no profile should be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#type DataK8SPostgresqlCnpgIoClusterV1Manifest#type}
  */
  readonly type: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfileToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    localhost_profile: cdktf.stringToTerraform(struct!.localhostProfile),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfileToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    localhost_profile: {
      value: cdktf.stringToHclTerraform(struct!.localhostProfile),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfileOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localhostProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.localhostProfile = this._localhostProfile;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._localhostProfile = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._localhostProfile = value.localhostProfile;
      this._type = value.type;
    }
  }

  // localhost_profile - computed: false, optional: true, required: false
  private _localhostProfile?: string; 
  public get localhostProfile() {
    return this.getStringAttribute('localhost_profile');
  }
  public set localhostProfile(value: string) {
    this._localhostProfile = value;
  }
  public resetLocalhostProfile() {
    this._localhostProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localhostProfileInput() {
    return this._localhostProfile;
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
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata {
  /**
  * Annotations is an unstructured key value map stored with a resource that may be set by external tools to store and retrieve arbitrary metadata. They are not queryable and should be preserved when modifying objects. More info: http://kubernetes.io/docs/user-guide/annotations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#annotations DataK8SPostgresqlCnpgIoClusterV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Map of string keys and values that can be used to organize and categorize (scope and select) objects. May match selectors of replication controllers and services. More info: http://kubernetes.io/docs/user-guide/labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#labels DataK8SPostgresqlCnpgIoClusterV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the resource. Only supported for certain types
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadataToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadataToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate {
  /**
  * Metadata are the metadata to be used for the generated service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#metadata DataK8SPostgresqlCnpgIoClusterV1Manifest#metadata}
  */
  readonly metadata: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadataToTerraform(struct!.metadata),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
    }
  }

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#api_group DataK8SPostgresqlCnpgIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#kind DataK8SPostgresqlCnpgIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#api_group DataK8SPostgresqlCnpgIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#kind DataK8SPostgresqlCnpgIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#namespace DataK8SPostgresqlCnpgIoClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRefToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRefToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#limits DataK8SPostgresqlCnpgIoClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#requests DataK8SPostgresqlCnpgIoClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResourcesToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResourcesToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#key DataK8SPostgresqlCnpgIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#operator DataK8SPostgresqlCnpgIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#values DataK8SPostgresqlCnpgIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_expressions DataK8SPostgresqlCnpgIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_labels DataK8SPostgresqlCnpgIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsList",
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#access_modes DataK8SPostgresqlCnpgIoClusterV1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#data_source DataK8SPostgresqlCnpgIoClusterV1Manifest#data_source}
  */
  readonly dataSource?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#data_source_ref DataK8SPostgresqlCnpgIoClusterV1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resources DataK8SPostgresqlCnpgIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#selector DataK8SPostgresqlCnpgIoClusterV1Manifest#selector}
  */
  readonly selector?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_attributes_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_mode DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_name DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResourcesToTerraform(struct!.resources),
    selector: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource",
    },
    data_source_ref: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef",
    },
    resources: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources",
    },
    selector: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage {
  /**
  * Template to be used to generate the Persistent Volume Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#pvc_template DataK8SPostgresqlCnpgIoClusterV1Manifest#pvc_template}
  */
  readonly pvcTemplate?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate;
  /**
  * Resize existent PVCs, defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resize_in_use_volumes DataK8SPostgresqlCnpgIoClusterV1Manifest#resize_in_use_volumes}
  */
  readonly resizeInUseVolumes?: boolean | cdktf.IResolvable;
  /**
  * Size of the storage. Required if not already specified in the PVC template. Changes to this field are automatically reapplied to the created PVCs. Size cannot be decreased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#size DataK8SPostgresqlCnpgIoClusterV1Manifest#size}
  */
  readonly size?: string;
  /**
  * StorageClass to use for PVCs. Applied after evaluating the PVC template, if available. If not specified, the generated PVCs will use the default storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage_class DataK8SPostgresqlCnpgIoClusterV1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorageToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pvc_template: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateToTerraform(struct!.pvcTemplate),
    resize_in_use_volumes: cdktf.booleanToTerraform(struct!.resizeInUseVolumes),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorageToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pvc_template: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateToHclTerraform(struct!.pvcTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate",
    },
    resize_in_use_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.resizeInUseVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pvcTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate?.internalValue;
    }
    if (this._resizeInUseVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeInUseVolumes = this._resizeInUseVolumes;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pvcTemplate.internalValue = undefined;
      this._resizeInUseVolumes = undefined;
      this._size = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pvcTemplate.internalValue = value.pvcTemplate;
      this._resizeInUseVolumes = value.resizeInUseVolumes;
      this._size = value.size;
      this._storageClass = value.storageClass;
    }
  }

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplateOutputReference(this, "pvc_template");
  public get pvcTemplate() {
    return this._pvcTemplate;
  }
  public putPvcTemplate(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStoragePvcTemplate) {
    this._pvcTemplate.internalValue = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate.internalValue;
  }

  // resize_in_use_volumes - computed: false, optional: true, required: false
  private _resizeInUseVolumes?: boolean | cdktf.IResolvable; 
  public get resizeInUseVolumes() {
    return this.getBooleanAttribute('resize_in_use_volumes');
  }
  public set resizeInUseVolumes(value: boolean | cdktf.IResolvable) {
    this._resizeInUseVolumes = value;
  }
  public resetResizeInUseVolumes() {
    this._resizeInUseVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInUseVolumesInput() {
    return this._resizeInUseVolumes;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
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
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret {
  /**
  * Name of the referent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecretToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecretToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwnerToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwnerToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwnerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner | cdktf.IResolvable | undefined) {
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#api_group DataK8SPostgresqlCnpgIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#kind DataK8SPostgresqlCnpgIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#api_group DataK8SPostgresqlCnpgIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#kind DataK8SPostgresqlCnpgIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#namespace DataK8SPostgresqlCnpgIoClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRefToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRefToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#limits DataK8SPostgresqlCnpgIoClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#requests DataK8SPostgresqlCnpgIoClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResourcesToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResourcesToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#key DataK8SPostgresqlCnpgIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#operator DataK8SPostgresqlCnpgIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#values DataK8SPostgresqlCnpgIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_expressions DataK8SPostgresqlCnpgIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_labels DataK8SPostgresqlCnpgIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsList",
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#access_modes DataK8SPostgresqlCnpgIoClusterV1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#data_source DataK8SPostgresqlCnpgIoClusterV1Manifest#data_source}
  */
  readonly dataSource?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#data_source_ref DataK8SPostgresqlCnpgIoClusterV1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resources DataK8SPostgresqlCnpgIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#selector DataK8SPostgresqlCnpgIoClusterV1Manifest#selector}
  */
  readonly selector?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_attributes_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_mode DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_name DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResourcesToTerraform(struct!.resources),
    selector: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource",
    },
    data_source_ref: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef",
    },
    resources: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources",
    },
    selector: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage {
  /**
  * Template to be used to generate the Persistent Volume Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#pvc_template DataK8SPostgresqlCnpgIoClusterV1Manifest#pvc_template}
  */
  readonly pvcTemplate?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate;
  /**
  * Resize existent PVCs, defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resize_in_use_volumes DataK8SPostgresqlCnpgIoClusterV1Manifest#resize_in_use_volumes}
  */
  readonly resizeInUseVolumes?: boolean | cdktf.IResolvable;
  /**
  * Size of the storage. Required if not already specified in the PVC template. Changes to this field are automatically reapplied to the created PVCs. Size cannot be decreased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#size DataK8SPostgresqlCnpgIoClusterV1Manifest#size}
  */
  readonly size?: string;
  /**
  * StorageClass to use for PVCs. Applied after evaluating the PVC template, if available. If not specified, the generated PVCs will use the default storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage_class DataK8SPostgresqlCnpgIoClusterV1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorageToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pvc_template: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateToTerraform(struct!.pvcTemplate),
    resize_in_use_volumes: cdktf.booleanToTerraform(struct!.resizeInUseVolumes),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorageToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pvc_template: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateToHclTerraform(struct!.pvcTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate",
    },
    resize_in_use_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.resizeInUseVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pvcTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate?.internalValue;
    }
    if (this._resizeInUseVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeInUseVolumes = this._resizeInUseVolumes;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pvcTemplate.internalValue = undefined;
      this._resizeInUseVolumes = undefined;
      this._size = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pvcTemplate.internalValue = value.pvcTemplate;
      this._resizeInUseVolumes = value.resizeInUseVolumes;
      this._size = value.size;
      this._storageClass = value.storageClass;
    }
  }

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplateOutputReference(this, "pvc_template");
  public get pvcTemplate() {
    return this._pvcTemplate;
  }
  public putPvcTemplate(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStoragePvcTemplate) {
    this._pvcTemplate.internalValue = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate.internalValue;
  }

  // resize_in_use_volumes - computed: false, optional: true, required: false
  private _resizeInUseVolumes?: boolean | cdktf.IResolvable; 
  public get resizeInUseVolumes() {
    return this.getBooleanAttribute('resize_in_use_volumes');
  }
  public set resizeInUseVolumes(value: boolean | cdktf.IResolvable) {
    this._resizeInUseVolumes = value;
  }
  public resetResizeInUseVolumes() {
    this._resizeInUseVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInUseVolumesInput() {
    return this._resizeInUseVolumes;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
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
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces {
  /**
  * The name of the tablespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Owner is the PostgreSQL user owning the tablespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#owner DataK8SPostgresqlCnpgIoClusterV1Manifest#owner}
  */
  readonly owner?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner;
  /**
  * The storage configuration for the tablespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage DataK8SPostgresqlCnpgIoClusterV1Manifest#storage}
  */
  readonly storage: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage;
  /**
  * When set to true, the tablespace will be added as a 'temp_tablespaces' entry in PostgreSQL, and will be available to automatically house temp database objects, or other temporary files. Please refer to PostgreSQL documentation for more information on the 'temp_tablespaces' GUC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#temporary DataK8SPostgresqlCnpgIoClusterV1Manifest#temporary}
  */
  readonly temporary?: boolean | cdktf.IResolvable;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    owner: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwnerToTerraform(struct!.owner),
    storage: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorageToTerraform(struct!.storage),
    temporary: cdktf.booleanToTerraform(struct!.temporary),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces | cdktf.IResolvable): any {
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
    owner: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwnerToHclTerraform(struct!.owner),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner",
    },
    storage: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage",
    },
    temporary: {
      value: cdktf.booleanToHclTerraform(struct!.temporary),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._owner?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner?.internalValue;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._temporary !== undefined) {
      hasAnyValues = true;
      internalValueResult.temporary = this._temporary;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._owner.internalValue = undefined;
      this._storage.internalValue = undefined;
      this._temporary = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._owner.internalValue = value.owner;
      this._storage.internalValue = value.storage;
      this._temporary = value.temporary;
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

  // owner - computed: false, optional: true, required: false
  private _owner = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwnerOutputReference(this, "owner");
  public get owner() {
    return this._owner;
  }
  public putOwner(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOwner) {
    this._owner.internalValue = value;
  }
  public resetOwner() {
    this._owner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner.internalValue;
  }

  // storage - computed: false, optional: false, required: true
  private _storage = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesStorage) {
    this._storage.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // temporary - computed: false, optional: true, required: false
  private _temporary?: boolean | cdktf.IResolvable; 
  public get temporary() {
    return this.getBooleanAttribute('temporary');
  }
  public set temporary(value: boolean | cdktf.IResolvable) {
    this._temporary = value;
  }
  public resetTemporary() {
    this._temporary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temporaryInput() {
    return this._temporary;
  }
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#key DataK8SPostgresqlCnpgIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#operator DataK8SPostgresqlCnpgIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#values DataK8SPostgresqlCnpgIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_expressions DataK8SPostgresqlCnpgIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_labels DataK8SPostgresqlCnpgIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList",
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints {
  /**
  * LabelSelector is used to find matching pods. Pods that match this label selector are counted to determine the number of pods in their corresponding topology domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#label_selector DataK8SPostgresqlCnpgIoClusterV1Manifest#label_selector}
  */
  readonly labelSelector?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector;
  /**
  * MatchLabelKeys is a set of pod label keys to select the pods over which spreading will be calculated. The keys are used to lookup values from the incoming pod labels, those key-value labels are ANDed with labelSelector to select the group of existing pods over which spreading will be calculated for the incoming pod. The same key is forbidden to exist in both MatchLabelKeys and LabelSelector. MatchLabelKeys cannot be set when LabelSelector isn't set. Keys that don't exist in the incoming pod labels will be ignored. A null or empty list means only match against labelSelector. This is a beta field and requires the MatchLabelKeysInPodTopologySpread feature gate to be enabled (enabled by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_label_keys DataK8SPostgresqlCnpgIoClusterV1Manifest#match_label_keys}
  */
  readonly matchLabelKeys?: string[];
  /**
  * MaxSkew describes the degree to which pods may be unevenly distributed. When 'whenUnsatisfiable=DoNotSchedule', it is the maximum permitted difference between the number of matching pods in the target topology and the global minimum. The global minimum is the minimum number of matching pods in an eligible domain or zero if the number of eligible domains is less than MinDomains. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 2/2/1: In this case, the global minimum is 1. | zone1 | zone2 | zone3 | | P P | P P | P | - if MaxSkew is 1, incoming pod can only be scheduled to zone3 to become 2/2/2; scheduling it onto zone1(zone2) would make the ActualSkew(3-1) on zone1(zone2) violate MaxSkew(1). - if MaxSkew is 2, incoming pod can be scheduled onto any zone. When 'whenUnsatisfiable=ScheduleAnyway', it is used to give higher precedence to topologies that satisfy it. It's a required field. Default value is 1 and 0 is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#max_skew DataK8SPostgresqlCnpgIoClusterV1Manifest#max_skew}
  */
  readonly maxSkew: number;
  /**
  * MinDomains indicates a minimum number of eligible domains. When the number of eligible domains with matching topology keys is less than minDomains, Pod Topology Spread treats 'global minimum' as 0, and then the calculation of Skew is performed. And when the number of eligible domains with matching topology keys equals or greater than minDomains, this value has no effect on scheduling. As a result, when the number of eligible domains is less than minDomains, scheduler won't schedule more than maxSkew Pods to those domains. If value is nil, the constraint behaves as if MinDomains is equal to 1. Valid values are integers greater than 0. When value is not nil, WhenUnsatisfiable must be DoNotSchedule. For example, in a 3-zone cluster, MaxSkew is set to 2, MinDomains is set to 5 and pods with the same labelSelector spread as 2/2/2: | zone1 | zone2 | zone3 | | P P | P P | P P | The number of domains is less than 5(MinDomains), so 'global minimum' is treated as 0. In this situation, new pod with the same labelSelector cannot be scheduled, because computed skew will be 3(3 - 0) if new Pod is scheduled to any of the three zones, it will violate MaxSkew.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#min_domains DataK8SPostgresqlCnpgIoClusterV1Manifest#min_domains}
  */
  readonly minDomains?: number;
  /**
  * NodeAffinityPolicy indicates how we will treat Pod's nodeAffinity/nodeSelector when calculating pod topology spread skew. Options are: - Honor: only nodes matching nodeAffinity/nodeSelector are included in the calculations. - Ignore: nodeAffinity/nodeSelector are ignored. All nodes are included in the calculations. If this value is nil, the behavior is equivalent to the Honor policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#node_affinity_policy DataK8SPostgresqlCnpgIoClusterV1Manifest#node_affinity_policy}
  */
  readonly nodeAffinityPolicy?: string;
  /**
  * NodeTaintsPolicy indicates how we will treat node taints when calculating pod topology spread skew. Options are: - Honor: nodes without taints, along with tainted nodes for which the incoming pod has a toleration, are included. - Ignore: node taints are ignored. All nodes are included. If this value is nil, the behavior is equivalent to the Ignore policy. This is a beta-level feature default enabled by the NodeInclusionPolicyInPodTopologySpread feature flag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#node_taints_policy DataK8SPostgresqlCnpgIoClusterV1Manifest#node_taints_policy}
  */
  readonly nodeTaintsPolicy?: string;
  /**
  * TopologyKey is the key of node labels. Nodes that have a label with this key and identical values are considered to be in the same topology. We consider each <key, value> as a 'bucket', and try to put balanced number of pods into each bucket. We define a domain as a particular instance of a topology. Also, we define an eligible domain as a domain whose nodes meet the requirements of nodeAffinityPolicy and nodeTaintsPolicy. e.g. If TopologyKey is 'kubernetes.io/hostname', each Node is a domain of that topology. And, if TopologyKey is 'topology.kubernetes.io/zone', each zone is a domain of that topology. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#topology_key DataK8SPostgresqlCnpgIoClusterV1Manifest#topology_key}
  */
  readonly topologyKey: string;
  /**
  * WhenUnsatisfiable indicates how to deal with a pod if it doesn't satisfy the spread constraint. - DoNotSchedule (default) tells the scheduler not to schedule it. - ScheduleAnyway tells the scheduler to schedule the pod in any location, but giving higher precedence to topologies that would help reduce the skew. A constraint is considered 'Unsatisfiable' for an incoming pod if and only if every possible node assignment for that pod would violate 'MaxSkew' on some topology. For example, in a 3-zone cluster, MaxSkew is set to 1, and pods with the same labelSelector spread as 3/1/1: | zone1 | zone2 | zone3 | | P P P | P | P | If WhenUnsatisfiable is set to DoNotSchedule, incoming pod can only be scheduled to zone2(zone3) to become 3/2/1(3/1/2) as ActualSkew(2-1) on zone2(zone3) satisfies MaxSkew(1). In other words, the cluster can still be imbalanced, but scheduler won't make it *more* imbalanced. It's a required field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#when_unsatisfiable DataK8SPostgresqlCnpgIoClusterV1Manifest#when_unsatisfiable}
  */
  readonly whenUnsatisfiable: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    label_selector: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorToTerraform(struct!.labelSelector),
    match_label_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.matchLabelKeys),
    max_skew: cdktf.numberToTerraform(struct!.maxSkew),
    min_domains: cdktf.numberToTerraform(struct!.minDomains),
    node_affinity_policy: cdktf.stringToTerraform(struct!.nodeAffinityPolicy),
    node_taints_policy: cdktf.stringToTerraform(struct!.nodeTaintsPolicy),
    topology_key: cdktf.stringToTerraform(struct!.topologyKey),
    when_unsatisfiable: cdktf.stringToTerraform(struct!.whenUnsatisfiable),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    label_selector: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorToHclTerraform(struct!.labelSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector",
    },
    match_label_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.matchLabelKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_skew: {
      value: cdktf.numberToHclTerraform(struct!.maxSkew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_domains: {
      value: cdktf.numberToHclTerraform(struct!.minDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_affinity_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeAffinityPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_taints_policy: {
      value: cdktf.stringToHclTerraform(struct!.nodeTaintsPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topology_key: {
      value: cdktf.stringToHclTerraform(struct!.topologyKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    when_unsatisfiable: {
      value: cdktf.stringToHclTerraform(struct!.whenUnsatisfiable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labelSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector?.internalValue;
    }
    if (this._matchLabelKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabelKeys = this._matchLabelKeys;
    }
    if (this._maxSkew !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSkew = this._maxSkew;
    }
    if (this._minDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.minDomains = this._minDomains;
    }
    if (this._nodeAffinityPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeAffinityPolicy = this._nodeAffinityPolicy;
    }
    if (this._nodeTaintsPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeTaintsPolicy = this._nodeTaintsPolicy;
    }
    if (this._topologyKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologyKey = this._topologyKey;
    }
    if (this._whenUnsatisfiable !== undefined) {
      hasAnyValues = true;
      internalValueResult.whenUnsatisfiable = this._whenUnsatisfiable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = undefined;
      this._matchLabelKeys = undefined;
      this._maxSkew = undefined;
      this._minDomains = undefined;
      this._nodeAffinityPolicy = undefined;
      this._nodeTaintsPolicy = undefined;
      this._topologyKey = undefined;
      this._whenUnsatisfiable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labelSelector.internalValue = value.labelSelector;
      this._matchLabelKeys = value.matchLabelKeys;
      this._maxSkew = value.maxSkew;
      this._minDomains = value.minDomains;
      this._nodeAffinityPolicy = value.nodeAffinityPolicy;
      this._nodeTaintsPolicy = value.nodeTaintsPolicy;
      this._topologyKey = value.topologyKey;
      this._whenUnsatisfiable = value.whenUnsatisfiable;
    }
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelectorOutputReference(this, "label_selector");
  public get labelSelector() {
    return this._labelSelector;
  }
  public putLabelSelector(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsLabelSelector) {
    this._labelSelector.internalValue = value;
  }
  public resetLabelSelector() {
    this._labelSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector.internalValue;
  }

  // match_label_keys - computed: false, optional: true, required: false
  private _matchLabelKeys?: string[]; 
  public get matchLabelKeys() {
    return this.getListAttribute('match_label_keys');
  }
  public set matchLabelKeys(value: string[]) {
    this._matchLabelKeys = value;
  }
  public resetMatchLabelKeys() {
    this._matchLabelKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelKeysInput() {
    return this._matchLabelKeys;
  }

  // max_skew - computed: false, optional: false, required: true
  private _maxSkew?: number; 
  public get maxSkew() {
    return this.getNumberAttribute('max_skew');
  }
  public set maxSkew(value: number) {
    this._maxSkew = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSkewInput() {
    return this._maxSkew;
  }

  // min_domains - computed: false, optional: true, required: false
  private _minDomains?: number; 
  public get minDomains() {
    return this.getNumberAttribute('min_domains');
  }
  public set minDomains(value: number) {
    this._minDomains = value;
  }
  public resetMinDomains() {
    this._minDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDomainsInput() {
    return this._minDomains;
  }

  // node_affinity_policy - computed: false, optional: true, required: false
  private _nodeAffinityPolicy?: string; 
  public get nodeAffinityPolicy() {
    return this.getStringAttribute('node_affinity_policy');
  }
  public set nodeAffinityPolicy(value: string) {
    this._nodeAffinityPolicy = value;
  }
  public resetNodeAffinityPolicy() {
    this._nodeAffinityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeAffinityPolicyInput() {
    return this._nodeAffinityPolicy;
  }

  // node_taints_policy - computed: false, optional: true, required: false
  private _nodeTaintsPolicy?: string; 
  public get nodeTaintsPolicy() {
    return this.getStringAttribute('node_taints_policy');
  }
  public set nodeTaintsPolicy(value: string) {
    this._nodeTaintsPolicy = value;
  }
  public resetNodeTaintsPolicy() {
    this._nodeTaintsPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTaintsPolicyInput() {
    return this._nodeTaintsPolicy;
  }

  // topology_key - computed: false, optional: false, required: true
  private _topologyKey?: string; 
  public get topologyKey() {
    return this.getStringAttribute('topology_key');
  }
  public set topologyKey(value: string) {
    this._topologyKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyKeyInput() {
    return this._topologyKey;
  }

  // when_unsatisfiable - computed: false, optional: false, required: true
  private _whenUnsatisfiable?: string; 
  public get whenUnsatisfiable() {
    return this.getStringAttribute('when_unsatisfiable');
  }
  public set whenUnsatisfiable(value: string) {
    this._whenUnsatisfiable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get whenUnsatisfiableInput() {
    return this._whenUnsatisfiable;
  }
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#api_group DataK8SPostgresqlCnpgIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#kind DataK8SPostgresqlCnpgIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef {
  /**
  * APIGroup is the group for the resource being referenced. If APIGroup is not specified, the specified Kind must be in the core API group. For any other third-party types, APIGroup is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#api_group DataK8SPostgresqlCnpgIoClusterV1Manifest#api_group}
  */
  readonly apiGroup?: string;
  /**
  * Kind is the type of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#kind DataK8SPostgresqlCnpgIoClusterV1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Name is the name of resource being referenced
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#name DataK8SPostgresqlCnpgIoClusterV1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespace is the namespace of resource being referenced Note that when a namespace is specified, a gateway.networking.k8s.io/ReferenceGrant object is required in the referent namespace to allow that namespace's owner to accept the reference. See the ReferenceGrant documentation for details. (Alpha) This field requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#namespace DataK8SPostgresqlCnpgIoClusterV1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRefToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_group: cdktf.stringToTerraform(struct!.apiGroup),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRefToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_group: {
      value: cdktf.stringToHclTerraform(struct!.apiGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGroup = this._apiGroup;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiGroup = undefined;
      this._kind = undefined;
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
      this._apiGroup = value.apiGroup;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // api_group - computed: false, optional: true, required: false
  private _apiGroup?: string; 
  public get apiGroup() {
    return this.getStringAttribute('api_group');
  }
  public set apiGroup(value: string) {
    this._apiGroup = value;
  }
  public resetApiGroup() {
    this._apiGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGroupInput() {
    return this._apiGroup;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources {
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#limits DataK8SPostgresqlCnpgIoClusterV1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#requests DataK8SPostgresqlCnpgIoClusterV1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResourcesToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResourcesToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#key DataK8SPostgresqlCnpgIoClusterV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#operator DataK8SPostgresqlCnpgIoClusterV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#values DataK8SPostgresqlCnpgIoClusterV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsOutputReference {
    return new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_expressions DataK8SPostgresqlCnpgIoClusterV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#match_labels DataK8SPostgresqlCnpgIoClusterV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsList",
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

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate {
  /**
  * accessModes contains the desired access modes the volume should have. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#access-modes-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#access_modes DataK8SPostgresqlCnpgIoClusterV1Manifest#access_modes}
  */
  readonly accessModes?: string[];
  /**
  * dataSource field can be used to specify either: * An existing VolumeSnapshot object (snapshot.storage.k8s.io/VolumeSnapshot) * An existing PVC (PersistentVolumeClaim) If the provisioner or an external controller can support the specified data source, it will create a new volume based on the contents of the specified data source. When the AnyVolumeDataSource feature gate is enabled, dataSource contents will be copied to dataSourceRef, and dataSourceRef contents will be copied to dataSource when dataSourceRef.namespace is not specified. If the namespace is specified, then dataSourceRef will not be copied to dataSource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#data_source DataK8SPostgresqlCnpgIoClusterV1Manifest#data_source}
  */
  readonly dataSource?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource;
  /**
  * dataSourceRef specifies the object from which to populate the volume with data, if a non-empty volume is desired. This may be any object from a non-empty API group (non core object) or a PersistentVolumeClaim object. When this field is specified, volume binding will only succeed if the type of the specified object matches some installed volume populator or dynamic provisioner. This field will replace the functionality of the dataSource field and as such if both fields are non-empty, they must have the same value. For backwards compatibility, when namespace isn't specified in dataSourceRef, both fields (dataSource and dataSourceRef) will be set to the same value automatically if one of them is empty and the other is non-empty. When namespace is specified in dataSourceRef, dataSource isn't set to the same value and must be empty. There are three important differences between dataSource and dataSourceRef: * While dataSource only allows two specific types of objects, dataSourceRef allows any non-core object, as well as PersistentVolumeClaim objects. * While dataSource ignores disallowed values (dropping them), dataSourceRef preserves all values, and generates an error if a disallowed value is specified. * While dataSource only allows local objects, dataSourceRef allows objects in any namespaces. (Beta) Using this field requires the AnyVolumeDataSource feature gate to be enabled. (Alpha) Using the namespace field of dataSourceRef requires the CrossNamespaceVolumeDataSource feature gate to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#data_source_ref DataK8SPostgresqlCnpgIoClusterV1Manifest#data_source_ref}
  */
  readonly dataSourceRef?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef;
  /**
  * resources represents the minimum resources the volume should have. If RecoverVolumeExpansionFailure feature is enabled users are allowed to specify resource requirements that are lower than previous value but must still be higher than capacity recorded in the status field of the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resources DataK8SPostgresqlCnpgIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources;
  /**
  * selector is a label query over volumes to consider for binding.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#selector DataK8SPostgresqlCnpgIoClusterV1Manifest#selector}
  */
  readonly selector?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector;
  /**
  * storageClassName is the name of the StorageClass required by the claim. More info: https://kubernetes.io/docs/concepts/storage/persistent-volumes#class-1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#storage_class_name}
  */
  readonly storageClassName?: string;
  /**
  * volumeAttributesClassName may be used to set the VolumeAttributesClass used by this claim. If specified, the CSI driver will create or update the volume with the attributes defined in the corresponding VolumeAttributesClass. This has a different purpose than storageClassName, it can be changed after the claim is created. An empty string value means that no VolumeAttributesClass will be applied to the claim but it's not allowed to reset this field to empty string once it is set. If unspecified and the PersistentVolumeClaim is unbound, the default VolumeAttributesClass will be set by the persistentvolume controller if it exists. If the resource referred to by volumeAttributesClass does not exist, this PersistentVolumeClaim will be set to a Pending state, as reflected by the modifyVolumeStatus field, until such as a resource exists. More info: https://kubernetes.io/docs/concepts/storage/volume-attributes-classes/ (Beta) Using this field requires the VolumeAttributesClass feature gate to be enabled (off by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_attributes_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_attributes_class_name}
  */
  readonly volumeAttributesClassName?: string;
  /**
  * volumeMode defines what type of volume is required by the claim. Value of Filesystem is implied when not included in claim spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_mode DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_mode}
  */
  readonly volumeMode?: string;
  /**
  * volumeName is the binding reference to the PersistentVolume backing this claim.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#volume_name DataK8SPostgresqlCnpgIoClusterV1Manifest#volume_name}
  */
  readonly volumeName?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_modes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.accessModes),
    data_source: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceToTerraform(struct!.dataSource),
    data_source_ref: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRefToTerraform(struct!.dataSourceRef),
    resources: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResourcesToTerraform(struct!.resources),
    selector: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorToTerraform(struct!.selector),
    storage_class_name: cdktf.stringToTerraform(struct!.storageClassName),
    volume_attributes_class_name: cdktf.stringToTerraform(struct!.volumeAttributesClassName),
    volume_mode: cdktf.stringToTerraform(struct!.volumeMode),
    volume_name: cdktf.stringToTerraform(struct!.volumeName),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_modes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.accessModes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    data_source: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceToHclTerraform(struct!.dataSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource",
    },
    data_source_ref: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRefToHclTerraform(struct!.dataSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef",
    },
    resources: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources",
    },
    selector: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorToHclTerraform(struct!.selector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector",
    },
    storage_class_name: {
      value: cdktf.stringToHclTerraform(struct!.storageClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_attributes_class_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeAttributesClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_mode: {
      value: cdktf.stringToHclTerraform(struct!.volumeMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_name: {
      value: cdktf.stringToHclTerraform(struct!.volumeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessModes !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessModes = this._accessModes;
    }
    if (this._dataSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSource = this._dataSource?.internalValue;
    }
    if (this._dataSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceRef = this._dataSourceRef?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._selector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.selector = this._selector?.internalValue;
    }
    if (this._storageClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClassName = this._storageClassName;
    }
    if (this._volumeAttributesClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeAttributesClassName = this._volumeAttributesClassName;
    }
    if (this._volumeMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeMode = this._volumeMode;
    }
    if (this._volumeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeName = this._volumeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessModes = undefined;
      this._dataSource.internalValue = undefined;
      this._dataSourceRef.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._selector.internalValue = undefined;
      this._storageClassName = undefined;
      this._volumeAttributesClassName = undefined;
      this._volumeMode = undefined;
      this._volumeName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessModes = value.accessModes;
      this._dataSource.internalValue = value.dataSource;
      this._dataSourceRef.internalValue = value.dataSourceRef;
      this._resources.internalValue = value.resources;
      this._selector.internalValue = value.selector;
      this._storageClassName = value.storageClassName;
      this._volumeAttributesClassName = value.volumeAttributesClassName;
      this._volumeMode = value.volumeMode;
      this._volumeName = value.volumeName;
    }
  }

  // access_modes - computed: false, optional: true, required: false
  private _accessModes?: string[]; 
  public get accessModes() {
    return this.getListAttribute('access_modes');
  }
  public set accessModes(value: string[]) {
    this._accessModes = value;
  }
  public resetAccessModes() {
    this._accessModes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessModesInput() {
    return this._accessModes;
  }

  // data_source - computed: false, optional: true, required: false
  private _dataSource = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceOutputReference(this, "data_source");
  public get dataSource() {
    return this._dataSource;
  }
  public putDataSource(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSource) {
    this._dataSource.internalValue = value;
  }
  public resetDataSource() {
    this._dataSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceInput() {
    return this._dataSource.internalValue;
  }

  // data_source_ref - computed: false, optional: true, required: false
  private _dataSourceRef = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRefOutputReference(this, "data_source_ref");
  public get dataSourceRef() {
    return this._dataSourceRef;
  }
  public putDataSourceRef(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateDataSourceRef) {
    this._dataSourceRef.internalValue = value;
  }
  public resetDataSourceRef() {
    this._dataSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceRefInput() {
    return this._dataSourceRef.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // selector - computed: false, optional: true, required: false
  private _selector = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelectorOutputReference(this, "selector");
  public get selector() {
    return this._selector;
  }
  public putSelector(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateSelector) {
    this._selector.internalValue = value;
  }
  public resetSelector() {
    this._selector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectorInput() {
    return this._selector.internalValue;
  }

  // storage_class_name - computed: false, optional: true, required: false
  private _storageClassName?: string; 
  public get storageClassName() {
    return this.getStringAttribute('storage_class_name');
  }
  public set storageClassName(value: string) {
    this._storageClassName = value;
  }
  public resetStorageClassName() {
    this._storageClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageClassNameInput() {
    return this._storageClassName;
  }

  // volume_attributes_class_name - computed: false, optional: true, required: false
  private _volumeAttributesClassName?: string; 
  public get volumeAttributesClassName() {
    return this.getStringAttribute('volume_attributes_class_name');
  }
  public set volumeAttributesClassName(value: string) {
    this._volumeAttributesClassName = value;
  }
  public resetVolumeAttributesClassName() {
    this._volumeAttributesClassName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeAttributesClassNameInput() {
    return this._volumeAttributesClassName;
  }

  // volume_mode - computed: false, optional: true, required: false
  private _volumeMode?: string; 
  public get volumeMode() {
    return this.getStringAttribute('volume_mode');
  }
  public set volumeMode(value: string) {
    this._volumeMode = value;
  }
  public resetVolumeMode() {
    this._volumeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeModeInput() {
    return this._volumeMode;
  }

  // volume_name - computed: false, optional: true, required: false
  private _volumeName?: string; 
  public get volumeName() {
    return this.getStringAttribute('volume_name');
  }
  public set volumeName(value: string) {
    this._volumeName = value;
  }
  public resetVolumeName() {
    this._volumeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeNameInput() {
    return this._volumeName;
  }
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage {
  /**
  * Template to be used to generate the Persistent Volume Claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#pvc_template DataK8SPostgresqlCnpgIoClusterV1Manifest#pvc_template}
  */
  readonly pvcTemplate?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate;
  /**
  * Resize existent PVCs, defaults to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resize_in_use_volumes DataK8SPostgresqlCnpgIoClusterV1Manifest#resize_in_use_volumes}
  */
  readonly resizeInUseVolumes?: boolean | cdktf.IResolvable;
  /**
  * Size of the storage. Required if not already specified in the PVC template. Changes to this field are automatically reapplied to the created PVCs. Size cannot be decreased.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#size DataK8SPostgresqlCnpgIoClusterV1Manifest#size}
  */
  readonly size?: string;
  /**
  * StorageClass to use for PVCs. Applied after evaluating the PVC template, if available. If not specified, the generated PVCs will use the default storage class
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage_class DataK8SPostgresqlCnpgIoClusterV1Manifest#storage_class}
  */
  readonly storageClass?: string;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorageToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pvc_template: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateToTerraform(struct!.pvcTemplate),
    resize_in_use_volumes: cdktf.booleanToTerraform(struct!.resizeInUseVolumes),
    size: cdktf.stringToTerraform(struct!.size),
    storage_class: cdktf.stringToTerraform(struct!.storageClass),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorageToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pvc_template: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateToHclTerraform(struct!.pvcTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate",
    },
    resize_in_use_volumes: {
      value: cdktf.booleanToHclTerraform(struct!.resizeInUseVolumes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pvcTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pvcTemplate = this._pvcTemplate?.internalValue;
    }
    if (this._resizeInUseVolumes !== undefined) {
      hasAnyValues = true;
      internalValueResult.resizeInUseVolumes = this._resizeInUseVolumes;
    }
    if (this._size !== undefined) {
      hasAnyValues = true;
      internalValueResult.size = this._size;
    }
    if (this._storageClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageClass = this._storageClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._pvcTemplate.internalValue = undefined;
      this._resizeInUseVolumes = undefined;
      this._size = undefined;
      this._storageClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._pvcTemplate.internalValue = value.pvcTemplate;
      this._resizeInUseVolumes = value.resizeInUseVolumes;
      this._size = value.size;
      this._storageClass = value.storageClass;
    }
  }

  // pvc_template - computed: false, optional: true, required: false
  private _pvcTemplate = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplateOutputReference(this, "pvc_template");
  public get pvcTemplate() {
    return this._pvcTemplate;
  }
  public putPvcTemplate(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStoragePvcTemplate) {
    this._pvcTemplate.internalValue = value;
  }
  public resetPvcTemplate() {
    this._pvcTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pvcTemplateInput() {
    return this._pvcTemplate.internalValue;
  }

  // resize_in_use_volumes - computed: false, optional: true, required: false
  private _resizeInUseVolumes?: boolean | cdktf.IResolvable; 
  public get resizeInUseVolumes() {
    return this.getBooleanAttribute('resize_in_use_volumes');
  }
  public set resizeInUseVolumes(value: boolean | cdktf.IResolvable) {
    this._resizeInUseVolumes = value;
  }
  public resetResizeInUseVolumes() {
    this._resizeInUseVolumes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resizeInUseVolumesInput() {
    return this._resizeInUseVolumes;
  }

  // size - computed: false, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
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
}
export interface DataK8SPostgresqlCnpgIoClusterV1ManifestSpec {
  /**
  * Affinity/Anti-affinity rules for Pods
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#affinity DataK8SPostgresqlCnpgIoClusterV1Manifest#affinity}
  */
  readonly affinity?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinity;
  /**
  * The configuration to be used for backups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#backup DataK8SPostgresqlCnpgIoClusterV1Manifest#backup}
  */
  readonly backup?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackup;
  /**
  * Instructions to bootstrap this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#bootstrap DataK8SPostgresqlCnpgIoClusterV1Manifest#bootstrap}
  */
  readonly bootstrap?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrap;
  /**
  * The configuration for the CA and related certificates
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#certificates DataK8SPostgresqlCnpgIoClusterV1Manifest#certificates}
  */
  readonly certificates?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificates;
  /**
  * Description of this PostgreSQL cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#description DataK8SPostgresqlCnpgIoClusterV1Manifest#description}
  */
  readonly description?: string;
  /**
  * Manage the 'PodDisruptionBudget' resources within the cluster. When configured as 'true' (default setting), the pod disruption budgets will safeguard the primary node from being terminated. Conversely, setting it to 'false' will result in the absence of any 'PodDisruptionBudget' resource, permitting the shutdown of all nodes hosting the PostgreSQL cluster. This latter configuration is advisable for any PostgreSQL cluster employed for development/staging purposes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#enable_pdb DataK8SPostgresqlCnpgIoClusterV1Manifest#enable_pdb}
  */
  readonly enablePdb?: boolean | cdktf.IResolvable;
  /**
  * When this option is enabled, the operator will use the 'SuperuserSecret' to update the 'postgres' user password (if the secret is not present, the operator will automatically create one). When this option is disabled, the operator will ignore the 'SuperuserSecret' content, delete it when automatically created, and then blank the password of the 'postgres' user by setting it to 'NULL'. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#enable_superuser_access DataK8SPostgresqlCnpgIoClusterV1Manifest#enable_superuser_access}
  */
  readonly enableSuperuserAccess?: boolean | cdktf.IResolvable;
  /**
  * Env follows the Env format to pass environment variables to the pods created in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#env DataK8SPostgresqlCnpgIoClusterV1Manifest#env}
  */
  readonly env?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnv[] | cdktf.IResolvable;
  /**
  * EnvFrom follows the EnvFrom format to pass environment variables sources to the pods to be used by Env
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#env_from DataK8SPostgresqlCnpgIoClusterV1Manifest#env_from}
  */
  readonly envFrom?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFrom[] | cdktf.IResolvable;
  /**
  * EphemeralVolumeSource allows the user to configure the source of ephemeral volumes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#ephemeral_volume_source DataK8SPostgresqlCnpgIoClusterV1Manifest#ephemeral_volume_source}
  */
  readonly ephemeralVolumeSource?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSource;
  /**
  * EphemeralVolumesSizeLimit allows the user to set the limits for the ephemeral volumes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#ephemeral_volumes_size_limit DataK8SPostgresqlCnpgIoClusterV1Manifest#ephemeral_volumes_size_limit}
  */
  readonly ephemeralVolumesSizeLimit?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimit;
  /**
  * The list of external clusters which are used in the configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#external_clusters DataK8SPostgresqlCnpgIoClusterV1Manifest#external_clusters}
  */
  readonly externalClusters?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClusters[] | cdktf.IResolvable;
  /**
  * The amount of time (in seconds) to wait before triggering a failover after the primary PostgreSQL instance in the cluster was detected to be unhealthy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#failover_delay DataK8SPostgresqlCnpgIoClusterV1Manifest#failover_delay}
  */
  readonly failoverDelay?: number;
  /**
  * Defines the major PostgreSQL version we want to use within an ImageCatalog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#image_catalog_ref DataK8SPostgresqlCnpgIoClusterV1Manifest#image_catalog_ref}
  */
  readonly imageCatalogRef?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRef;
  /**
  * Name of the container image, supporting both tags ('<image>:<tag>') and digests for deterministic and repeatable deployments ('<image>:<tag>@sha256:<digestValue>')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#image_name DataK8SPostgresqlCnpgIoClusterV1Manifest#image_name}
  */
  readonly imageName?: string;
  /**
  * Image pull policy. One of 'Always', 'Never' or 'IfNotPresent'. If not defined, it defaults to 'IfNotPresent'. Cannot be updated. More info: https://kubernetes.io/docs/concepts/containers/images#updating-images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#image_pull_policy DataK8SPostgresqlCnpgIoClusterV1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * The list of pull secrets to be used to pull the images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#image_pull_secrets DataK8SPostgresqlCnpgIoClusterV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Metadata that will be inherited by all objects related to the Cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#inherited_metadata DataK8SPostgresqlCnpgIoClusterV1Manifest#inherited_metadata}
  */
  readonly inheritedMetadata?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadata;
  /**
  * Number of instances required in the cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#instances DataK8SPostgresqlCnpgIoClusterV1Manifest#instances}
  */
  readonly instances: number;
  /**
  * LivenessProbeTimeout is the time (in seconds) that is allowed for a PostgreSQL instance to successfully respond to the liveness probe (default 30). The Liveness probe failure threshold is derived from this value using the formula: ceiling(livenessProbe / 10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#liveness_probe_timeout DataK8SPostgresqlCnpgIoClusterV1Manifest#liveness_probe_timeout}
  */
  readonly livenessProbeTimeout?: number;
  /**
  * The instances' log level, one of the following values: error, warning, info (default), debug, trace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#log_level DataK8SPostgresqlCnpgIoClusterV1Manifest#log_level}
  */
  readonly logLevel?: string;
  /**
  * The configuration that is used by the portions of PostgreSQL that are managed by the instance manager
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#managed DataK8SPostgresqlCnpgIoClusterV1Manifest#managed}
  */
  readonly managed?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecManaged;
  /**
  * The target value for the synchronous replication quorum, that can be decreased if the number of ready standbys is lower than this. Undefined or 0 disable synchronous replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#max_sync_replicas DataK8SPostgresqlCnpgIoClusterV1Manifest#max_sync_replicas}
  */
  readonly maxSyncReplicas?: number;
  /**
  * Minimum number of instances required in synchronous replication with the primary. Undefined or 0 allow writes to complete when no standby is available.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#min_sync_replicas DataK8SPostgresqlCnpgIoClusterV1Manifest#min_sync_replicas}
  */
  readonly minSyncReplicas?: number;
  /**
  * The configuration of the monitoring infrastructure of this cluster
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#monitoring DataK8SPostgresqlCnpgIoClusterV1Manifest#monitoring}
  */
  readonly monitoring?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoring;
  /**
  * Define a maintenance window for the Kubernetes nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#node_maintenance_window DataK8SPostgresqlCnpgIoClusterV1Manifest#node_maintenance_window}
  */
  readonly nodeMaintenanceWindow?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindow;
  /**
  * The plugins configuration, containing any plugin to be loaded with the corresponding configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#plugins DataK8SPostgresqlCnpgIoClusterV1Manifest#plugins}
  */
  readonly plugins?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPlugins[] | cdktf.IResolvable;
  /**
  * The GID of the 'postgres' user inside the image, defaults to '26'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#postgres_gid DataK8SPostgresqlCnpgIoClusterV1Manifest#postgres_gid}
  */
  readonly postgresGid?: number;
  /**
  * The UID of the 'postgres' user inside the image, defaults to '26'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#postgres_uid DataK8SPostgresqlCnpgIoClusterV1Manifest#postgres_uid}
  */
  readonly postgresUid?: number;
  /**
  * Configuration of the PostgreSQL server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#postgresql DataK8SPostgresqlCnpgIoClusterV1Manifest#postgresql}
  */
  readonly postgresql?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresql;
  /**
  * Method to follow to upgrade the primary server during a rolling update procedure, after all replicas have been successfully updated: it can be with a switchover ('switchover') or in-place ('restart' - default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#primary_update_method DataK8SPostgresqlCnpgIoClusterV1Manifest#primary_update_method}
  */
  readonly primaryUpdateMethod?: string;
  /**
  * Deployment strategy to follow to upgrade the primary server during a rolling update procedure, after all replicas have been successfully updated: it can be automated ('unsupervised' - default) or manual ('supervised')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#primary_update_strategy DataK8SPostgresqlCnpgIoClusterV1Manifest#primary_update_strategy}
  */
  readonly primaryUpdateStrategy?: string;
  /**
  * Name of the priority class which will be used in every generated Pod, if the PriorityClass specified does not exist, the pod will not be able to schedule. Please refer to https://kubernetes.io/docs/concepts/scheduling-eviction/pod-priority-preemption/#priorityclass for more information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#priority_class_name DataK8SPostgresqlCnpgIoClusterV1Manifest#priority_class_name}
  */
  readonly priorityClassName?: string;
  /**
  * Template to be used to define projected volumes, projected volumes will be mounted under '/projected' base folder
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#projected_volume_template DataK8SPostgresqlCnpgIoClusterV1Manifest#projected_volume_template}
  */
  readonly projectedVolumeTemplate?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate;
  /**
  * Replica cluster configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#replica DataK8SPostgresqlCnpgIoClusterV1Manifest#replica}
  */
  readonly replica?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica;
  /**
  * Replication slots management configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#replication_slots DataK8SPostgresqlCnpgIoClusterV1Manifest#replication_slots}
  */
  readonly replicationSlots?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots;
  /**
  * Resources requirements of every generated Pod. Please refer to https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/ for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#resources DataK8SPostgresqlCnpgIoClusterV1Manifest#resources}
  */
  readonly resources?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources;
  /**
  * If specified, the pod will be dispatched by specified Kubernetes scheduler. If not specified, the pod will be dispatched by the default scheduler. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/kube-scheduler/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#scheduler_name DataK8SPostgresqlCnpgIoClusterV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * The SeccompProfile applied to every Pod and Container. Defaults to: 'RuntimeDefault'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#seccomp_profile DataK8SPostgresqlCnpgIoClusterV1Manifest#seccomp_profile}
  */
  readonly seccompProfile?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile;
  /**
  * Configure the generation of the service account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#service_account_template DataK8SPostgresqlCnpgIoClusterV1Manifest#service_account_template}
  */
  readonly serviceAccountTemplate?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate;
  /**
  * The time in seconds that controls the window of time reserved for the smart shutdown of Postgres to complete. Make sure you reserve enough time for the operator to request a fast shutdown of Postgres (that is: 'stopDelay' - 'smartShutdownTimeout').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#smart_shutdown_timeout DataK8SPostgresqlCnpgIoClusterV1Manifest#smart_shutdown_timeout}
  */
  readonly smartShutdownTimeout?: number;
  /**
  * The time in seconds that is allowed for a PostgreSQL instance to successfully start up (default 3600). The startup probe failure threshold is derived from this value using the formula: ceiling(startDelay / 10).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#start_delay DataK8SPostgresqlCnpgIoClusterV1Manifest#start_delay}
  */
  readonly startDelay?: number;
  /**
  * The time in seconds that is allowed for a PostgreSQL instance to gracefully shutdown (default 1800)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#stop_delay DataK8SPostgresqlCnpgIoClusterV1Manifest#stop_delay}
  */
  readonly stopDelay?: number;
  /**
  * Configuration of the storage of the instances
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#storage DataK8SPostgresqlCnpgIoClusterV1Manifest#storage}
  */
  readonly storage?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage;
  /**
  * The secret containing the superuser password. If not defined a new secret will be created with a randomly generated password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#superuser_secret DataK8SPostgresqlCnpgIoClusterV1Manifest#superuser_secret}
  */
  readonly superuserSecret?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret;
  /**
  * The time in seconds that is allowed for a primary PostgreSQL instance to gracefully shutdown during a switchover. Default value is 3600 seconds (1 hour).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#switchover_delay DataK8SPostgresqlCnpgIoClusterV1Manifest#switchover_delay}
  */
  readonly switchoverDelay?: number;
  /**
  * The tablespaces configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#tablespaces DataK8SPostgresqlCnpgIoClusterV1Manifest#tablespaces}
  */
  readonly tablespaces?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces[] | cdktf.IResolvable;
  /**
  * TopologySpreadConstraints specifies how to spread matching pods among the given topology. More info: https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#topology_spread_constraints DataK8SPostgresqlCnpgIoClusterV1Manifest#topology_spread_constraints}
  */
  readonly topologySpreadConstraints?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable;
  /**
  * Configuration of the storage for PostgreSQL WAL (Write-Ahead Log)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/postgresql_cnpg_io_cluster_v1_manifest#wal_storage DataK8SPostgresqlCnpgIoClusterV1Manifest#wal_storage}
  */
  readonly walStorage?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage;
}

export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecToTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    affinity: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinityToTerraform(struct!.affinity),
    backup: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackupToTerraform(struct!.backup),
    bootstrap: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrapToTerraform(struct!.bootstrap),
    certificates: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificatesToTerraform(struct!.certificates),
    description: cdktf.stringToTerraform(struct!.description),
    enable_pdb: cdktf.booleanToTerraform(struct!.enablePdb),
    enable_superuser_access: cdktf.booleanToTerraform(struct!.enableSuperuserAccess),
    env: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvToTerraform, false)(struct!.env),
    env_from: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromToTerraform, false)(struct!.envFrom),
    ephemeral_volume_source: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSourceToTerraform(struct!.ephemeralVolumeSource),
    ephemeral_volumes_size_limit: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimitToTerraform(struct!.ephemeralVolumesSizeLimit),
    external_clusters: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersToTerraform, false)(struct!.externalClusters),
    failover_delay: cdktf.numberToTerraform(struct!.failoverDelay),
    image_catalog_ref: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRefToTerraform(struct!.imageCatalogRef),
    image_name: cdktf.stringToTerraform(struct!.imageName),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    inherited_metadata: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadataToTerraform(struct!.inheritedMetadata),
    instances: cdktf.numberToTerraform(struct!.instances),
    liveness_probe_timeout: cdktf.numberToTerraform(struct!.livenessProbeTimeout),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    managed: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecManagedToTerraform(struct!.managed),
    max_sync_replicas: cdktf.numberToTerraform(struct!.maxSyncReplicas),
    min_sync_replicas: cdktf.numberToTerraform(struct!.minSyncReplicas),
    monitoring: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoringToTerraform(struct!.monitoring),
    node_maintenance_window: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindowToTerraform(struct!.nodeMaintenanceWindow),
    plugins: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsToTerraform, false)(struct!.plugins),
    postgres_gid: cdktf.numberToTerraform(struct!.postgresGid),
    postgres_uid: cdktf.numberToTerraform(struct!.postgresUid),
    postgresql: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresqlToTerraform(struct!.postgresql),
    primary_update_method: cdktf.stringToTerraform(struct!.primaryUpdateMethod),
    primary_update_strategy: cdktf.stringToTerraform(struct!.primaryUpdateStrategy),
    priority_class_name: cdktf.stringToTerraform(struct!.priorityClassName),
    projected_volume_template: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateToTerraform(struct!.projectedVolumeTemplate),
    replica: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicaToTerraform(struct!.replica),
    replication_slots: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsToTerraform(struct!.replicationSlots),
    resources: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesToTerraform(struct!.resources),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    seccomp_profile: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfileToTerraform(struct!.seccompProfile),
    service_account_template: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateToTerraform(struct!.serviceAccountTemplate),
    smart_shutdown_timeout: cdktf.numberToTerraform(struct!.smartShutdownTimeout),
    start_delay: cdktf.numberToTerraform(struct!.startDelay),
    stop_delay: cdktf.numberToTerraform(struct!.stopDelay),
    storage: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorageToTerraform(struct!.storage),
    superuser_secret: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecretToTerraform(struct!.superuserSecret),
    switchover_delay: cdktf.numberToTerraform(struct!.switchoverDelay),
    tablespaces: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesToTerraform, false)(struct!.tablespaces),
    topology_spread_constraints: cdktf.listMapper(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsToTerraform, false)(struct!.topologySpreadConstraints),
    wal_storage: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorageToTerraform(struct!.walStorage),
  }
}


export function dataK8SPostgresqlCnpgIoClusterV1ManifestSpecToHclTerraform(struct?: DataK8SPostgresqlCnpgIoClusterV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    affinity: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinityToHclTerraform(struct!.affinity),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinity",
    },
    backup: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackup",
    },
    bootstrap: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrapToHclTerraform(struct!.bootstrap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrap",
    },
    certificates: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificatesToHclTerraform(struct!.certificates),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificates",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_pdb: {
      value: cdktf.booleanToHclTerraform(struct!.enablePdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_superuser_access: {
      value: cdktf.booleanToHclTerraform(struct!.enableSuperuserAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    env: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvList",
    },
    env_from: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromToHclTerraform, false)(struct!.envFrom),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromList",
    },
    ephemeral_volume_source: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSourceToHclTerraform(struct!.ephemeralVolumeSource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSource",
    },
    ephemeral_volumes_size_limit: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimitToHclTerraform(struct!.ephemeralVolumesSizeLimit),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimit",
    },
    external_clusters: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersToHclTerraform, false)(struct!.externalClusters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersList",
    },
    failover_delay: {
      value: cdktf.numberToHclTerraform(struct!.failoverDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    image_catalog_ref: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRefToHclTerraform(struct!.imageCatalogRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRef",
    },
    image_name: {
      value: cdktf.stringToHclTerraform(struct!.imageName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_policy: {
      value: cdktf.stringToHclTerraform(struct!.imagePullPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_pull_secrets: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsList",
    },
    inherited_metadata: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadataToHclTerraform(struct!.inheritedMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadata",
    },
    instances: {
      value: cdktf.numberToHclTerraform(struct!.instances),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    liveness_probe_timeout: {
      value: cdktf.numberToHclTerraform(struct!.livenessProbeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecManagedToHclTerraform(struct!.managed),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecManaged",
    },
    max_sync_replicas: {
      value: cdktf.numberToHclTerraform(struct!.maxSyncReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_sync_replicas: {
      value: cdktf.numberToHclTerraform(struct!.minSyncReplicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitoring: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoringToHclTerraform(struct!.monitoring),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoring",
    },
    node_maintenance_window: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindowToHclTerraform(struct!.nodeMaintenanceWindow),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindow",
    },
    plugins: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsToHclTerraform, false)(struct!.plugins),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsList",
    },
    postgres_gid: {
      value: cdktf.numberToHclTerraform(struct!.postgresGid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgres_uid: {
      value: cdktf.numberToHclTerraform(struct!.postgresUid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    postgresql: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresqlToHclTerraform(struct!.postgresql),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresql",
    },
    primary_update_method: {
      value: cdktf.stringToHclTerraform(struct!.primaryUpdateMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    primary_update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.primaryUpdateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    priority_class_name: {
      value: cdktf.stringToHclTerraform(struct!.priorityClassName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    projected_volume_template: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateToHclTerraform(struct!.projectedVolumeTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate",
    },
    replica: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicaToHclTerraform(struct!.replica),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica",
    },
    replication_slots: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsToHclTerraform(struct!.replicationSlots),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots",
    },
    resources: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    seccomp_profile: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfileToHclTerraform(struct!.seccompProfile),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile",
    },
    service_account_template: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateToHclTerraform(struct!.serviceAccountTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate",
    },
    smart_shutdown_timeout: {
      value: cdktf.numberToHclTerraform(struct!.smartShutdownTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start_delay: {
      value: cdktf.numberToHclTerraform(struct!.startDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_delay: {
      value: cdktf.numberToHclTerraform(struct!.stopDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage",
    },
    superuser_secret: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecretToHclTerraform(struct!.superuserSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret",
    },
    switchover_delay: {
      value: cdktf.numberToHclTerraform(struct!.switchoverDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tablespaces: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesToHclTerraform, false)(struct!.tablespaces),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesList",
    },
    topology_spread_constraints: {
      value: cdktf.listMapperHcl(dataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsToHclTerraform, false)(struct!.topologySpreadConstraints),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsList",
    },
    wal_storage: {
      value: dataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorageToHclTerraform(struct!.walStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPostgresqlCnpgIoClusterV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPostgresqlCnpgIoClusterV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._bootstrap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bootstrap = this._bootstrap?.internalValue;
    }
    if (this._certificates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificates = this._certificates?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enablePdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePdb = this._enablePdb;
    }
    if (this._enableSuperuserAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSuperuserAccess = this._enableSuperuserAccess;
    }
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._envFrom?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.envFrom = this._envFrom?.internalValue;
    }
    if (this._ephemeralVolumeSource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralVolumeSource = this._ephemeralVolumeSource?.internalValue;
    }
    if (this._ephemeralVolumesSizeLimit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ephemeralVolumesSizeLimit = this._ephemeralVolumesSizeLimit?.internalValue;
    }
    if (this._externalClusters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalClusters = this._externalClusters?.internalValue;
    }
    if (this._failoverDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.failoverDelay = this._failoverDelay;
    }
    if (this._imageCatalogRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageCatalogRef = this._imageCatalogRef?.internalValue;
    }
    if (this._imageName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageName = this._imageName;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._inheritedMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.inheritedMetadata = this._inheritedMetadata?.internalValue;
    }
    if (this._instances !== undefined) {
      hasAnyValues = true;
      internalValueResult.instances = this._instances;
    }
    if (this._livenessProbeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.livenessProbeTimeout = this._livenessProbeTimeout;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._managed?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managed = this._managed?.internalValue;
    }
    if (this._maxSyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSyncReplicas = this._maxSyncReplicas;
    }
    if (this._minSyncReplicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.minSyncReplicas = this._minSyncReplicas;
    }
    if (this._monitoring?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoring = this._monitoring?.internalValue;
    }
    if (this._nodeMaintenanceWindow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMaintenanceWindow = this._nodeMaintenanceWindow?.internalValue;
    }
    if (this._plugins?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins?.internalValue;
    }
    if (this._postgresGid !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresGid = this._postgresGid;
    }
    if (this._postgresUid !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresUid = this._postgresUid;
    }
    if (this._postgresql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postgresql = this._postgresql?.internalValue;
    }
    if (this._primaryUpdateMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryUpdateMethod = this._primaryUpdateMethod;
    }
    if (this._primaryUpdateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.primaryUpdateStrategy = this._primaryUpdateStrategy;
    }
    if (this._priorityClassName !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityClassName = this._priorityClassName;
    }
    if (this._projectedVolumeTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectedVolumeTemplate = this._projectedVolumeTemplate?.internalValue;
    }
    if (this._replica?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replica = this._replica?.internalValue;
    }
    if (this._replicationSlots?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSlots = this._replicationSlots?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._seccompProfile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.seccompProfile = this._seccompProfile?.internalValue;
    }
    if (this._serviceAccountTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountTemplate = this._serviceAccountTemplate?.internalValue;
    }
    if (this._smartShutdownTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.smartShutdownTimeout = this._smartShutdownTimeout;
    }
    if (this._startDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDelay = this._startDelay;
    }
    if (this._stopDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopDelay = this._stopDelay;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    if (this._superuserSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.superuserSecret = this._superuserSecret?.internalValue;
    }
    if (this._switchoverDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchoverDelay = this._switchoverDelay;
    }
    if (this._tablespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tablespaces = this._tablespaces?.internalValue;
    }
    if (this._topologySpreadConstraints?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologySpreadConstraints = this._topologySpreadConstraints?.internalValue;
    }
    if (this._walStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.walStorage = this._walStorage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._affinity.internalValue = undefined;
      this._backup.internalValue = undefined;
      this._bootstrap.internalValue = undefined;
      this._certificates.internalValue = undefined;
      this._description = undefined;
      this._enablePdb = undefined;
      this._enableSuperuserAccess = undefined;
      this._env.internalValue = undefined;
      this._envFrom.internalValue = undefined;
      this._ephemeralVolumeSource.internalValue = undefined;
      this._ephemeralVolumesSizeLimit.internalValue = undefined;
      this._externalClusters.internalValue = undefined;
      this._failoverDelay = undefined;
      this._imageCatalogRef.internalValue = undefined;
      this._imageName = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._inheritedMetadata.internalValue = undefined;
      this._instances = undefined;
      this._livenessProbeTimeout = undefined;
      this._logLevel = undefined;
      this._managed.internalValue = undefined;
      this._maxSyncReplicas = undefined;
      this._minSyncReplicas = undefined;
      this._monitoring.internalValue = undefined;
      this._nodeMaintenanceWindow.internalValue = undefined;
      this._plugins.internalValue = undefined;
      this._postgresGid = undefined;
      this._postgresUid = undefined;
      this._postgresql.internalValue = undefined;
      this._primaryUpdateMethod = undefined;
      this._primaryUpdateStrategy = undefined;
      this._priorityClassName = undefined;
      this._projectedVolumeTemplate.internalValue = undefined;
      this._replica.internalValue = undefined;
      this._replicationSlots.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._schedulerName = undefined;
      this._seccompProfile.internalValue = undefined;
      this._serviceAccountTemplate.internalValue = undefined;
      this._smartShutdownTimeout = undefined;
      this._startDelay = undefined;
      this._stopDelay = undefined;
      this._storage.internalValue = undefined;
      this._superuserSecret.internalValue = undefined;
      this._switchoverDelay = undefined;
      this._tablespaces.internalValue = undefined;
      this._topologySpreadConstraints.internalValue = undefined;
      this._walStorage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._affinity.internalValue = value.affinity;
      this._backup.internalValue = value.backup;
      this._bootstrap.internalValue = value.bootstrap;
      this._certificates.internalValue = value.certificates;
      this._description = value.description;
      this._enablePdb = value.enablePdb;
      this._enableSuperuserAccess = value.enableSuperuserAccess;
      this._env.internalValue = value.env;
      this._envFrom.internalValue = value.envFrom;
      this._ephemeralVolumeSource.internalValue = value.ephemeralVolumeSource;
      this._ephemeralVolumesSizeLimit.internalValue = value.ephemeralVolumesSizeLimit;
      this._externalClusters.internalValue = value.externalClusters;
      this._failoverDelay = value.failoverDelay;
      this._imageCatalogRef.internalValue = value.imageCatalogRef;
      this._imageName = value.imageName;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._inheritedMetadata.internalValue = value.inheritedMetadata;
      this._instances = value.instances;
      this._livenessProbeTimeout = value.livenessProbeTimeout;
      this._logLevel = value.logLevel;
      this._managed.internalValue = value.managed;
      this._maxSyncReplicas = value.maxSyncReplicas;
      this._minSyncReplicas = value.minSyncReplicas;
      this._monitoring.internalValue = value.monitoring;
      this._nodeMaintenanceWindow.internalValue = value.nodeMaintenanceWindow;
      this._plugins.internalValue = value.plugins;
      this._postgresGid = value.postgresGid;
      this._postgresUid = value.postgresUid;
      this._postgresql.internalValue = value.postgresql;
      this._primaryUpdateMethod = value.primaryUpdateMethod;
      this._primaryUpdateStrategy = value.primaryUpdateStrategy;
      this._priorityClassName = value.priorityClassName;
      this._projectedVolumeTemplate.internalValue = value.projectedVolumeTemplate;
      this._replica.internalValue = value.replica;
      this._replicationSlots.internalValue = value.replicationSlots;
      this._resources.internalValue = value.resources;
      this._schedulerName = value.schedulerName;
      this._seccompProfile.internalValue = value.seccompProfile;
      this._serviceAccountTemplate.internalValue = value.serviceAccountTemplate;
      this._smartShutdownTimeout = value.smartShutdownTimeout;
      this._startDelay = value.startDelay;
      this._stopDelay = value.stopDelay;
      this._storage.internalValue = value.storage;
      this._superuserSecret.internalValue = value.superuserSecret;
      this._switchoverDelay = value.switchoverDelay;
      this._tablespaces.internalValue = value.tablespaces;
      this._topologySpreadConstraints.internalValue = value.topologySpreadConstraints;
      this._walStorage.internalValue = value.walStorage;
    }
  }

  // affinity - computed: false, optional: true, required: false
  private _affinity = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinityOutputReference(this, "affinity");
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecAffinity) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // bootstrap - computed: false, optional: true, required: false
  private _bootstrap = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrapOutputReference(this, "bootstrap");
  public get bootstrap() {
    return this._bootstrap;
  }
  public putBootstrap(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecBootstrap) {
    this._bootstrap.internalValue = value;
  }
  public resetBootstrap() {
    this._bootstrap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bootstrapInput() {
    return this._bootstrap.internalValue;
  }

  // certificates - computed: false, optional: true, required: false
  private _certificates = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificatesOutputReference(this, "certificates");
  public get certificates() {
    return this._certificates;
  }
  public putCertificates(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecCertificates) {
    this._certificates.internalValue = value;
  }
  public resetCertificates() {
    this._certificates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificatesInput() {
    return this._certificates.internalValue;
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

  // enable_pdb - computed: false, optional: true, required: false
  private _enablePdb?: boolean | cdktf.IResolvable; 
  public get enablePdb() {
    return this.getBooleanAttribute('enable_pdb');
  }
  public set enablePdb(value: boolean | cdktf.IResolvable) {
    this._enablePdb = value;
  }
  public resetEnablePdb() {
    this._enablePdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePdbInput() {
    return this._enablePdb;
  }

  // enable_superuser_access - computed: false, optional: true, required: false
  private _enableSuperuserAccess?: boolean | cdktf.IResolvable; 
  public get enableSuperuserAccess() {
    return this.getBooleanAttribute('enable_superuser_access');
  }
  public set enableSuperuserAccess(value: boolean | cdktf.IResolvable) {
    this._enableSuperuserAccess = value;
  }
  public resetEnableSuperuserAccess() {
    this._enableSuperuserAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSuperuserAccessInput() {
    return this._enableSuperuserAccess;
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
  }

  // env_from - computed: false, optional: true, required: false
  private _envFrom = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFromList(this, "env_from", false);
  public get envFrom() {
    return this._envFrom;
  }
  public putEnvFrom(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEnvFrom[] | cdktf.IResolvable) {
    this._envFrom.internalValue = value;
  }
  public resetEnvFrom() {
    this._envFrom.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envFromInput() {
    return this._envFrom.internalValue;
  }

  // ephemeral_volume_source - computed: false, optional: true, required: false
  private _ephemeralVolumeSource = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSourceOutputReference(this, "ephemeral_volume_source");
  public get ephemeralVolumeSource() {
    return this._ephemeralVolumeSource;
  }
  public putEphemeralVolumeSource(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumeSource) {
    this._ephemeralVolumeSource.internalValue = value;
  }
  public resetEphemeralVolumeSource() {
    this._ephemeralVolumeSource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralVolumeSourceInput() {
    return this._ephemeralVolumeSource.internalValue;
  }

  // ephemeral_volumes_size_limit - computed: false, optional: true, required: false
  private _ephemeralVolumesSizeLimit = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimitOutputReference(this, "ephemeral_volumes_size_limit");
  public get ephemeralVolumesSizeLimit() {
    return this._ephemeralVolumesSizeLimit;
  }
  public putEphemeralVolumesSizeLimit(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecEphemeralVolumesSizeLimit) {
    this._ephemeralVolumesSizeLimit.internalValue = value;
  }
  public resetEphemeralVolumesSizeLimit() {
    this._ephemeralVolumesSizeLimit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ephemeralVolumesSizeLimitInput() {
    return this._ephemeralVolumesSizeLimit.internalValue;
  }

  // external_clusters - computed: false, optional: true, required: false
  private _externalClusters = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClustersList(this, "external_clusters", false);
  public get externalClusters() {
    return this._externalClusters;
  }
  public putExternalClusters(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecExternalClusters[] | cdktf.IResolvable) {
    this._externalClusters.internalValue = value;
  }
  public resetExternalClusters() {
    this._externalClusters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalClustersInput() {
    return this._externalClusters.internalValue;
  }

  // failover_delay - computed: false, optional: true, required: false
  private _failoverDelay?: number; 
  public get failoverDelay() {
    return this.getNumberAttribute('failover_delay');
  }
  public set failoverDelay(value: number) {
    this._failoverDelay = value;
  }
  public resetFailoverDelay() {
    this._failoverDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failoverDelayInput() {
    return this._failoverDelay;
  }

  // image_catalog_ref - computed: false, optional: true, required: false
  private _imageCatalogRef = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRefOutputReference(this, "image_catalog_ref");
  public get imageCatalogRef() {
    return this._imageCatalogRef;
  }
  public putImageCatalogRef(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImageCatalogRef) {
    this._imageCatalogRef.internalValue = value;
  }
  public resetImageCatalogRef() {
    this._imageCatalogRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageCatalogRefInput() {
    return this._imageCatalogRef.internalValue;
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

  // image_pull_policy - computed: false, optional: true, required: false
  private _imagePullPolicy?: string; 
  public get imagePullPolicy() {
    return this.getStringAttribute('image_pull_policy');
  }
  public set imagePullPolicy(value: string) {
    this._imagePullPolicy = value;
  }
  public resetImagePullPolicy() {
    this._imagePullPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullPolicyInput() {
    return this._imagePullPolicy;
  }

  // image_pull_secrets - computed: false, optional: true, required: false
  private _imagePullSecrets = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // inherited_metadata - computed: false, optional: true, required: false
  private _inheritedMetadata = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadataOutputReference(this, "inherited_metadata");
  public get inheritedMetadata() {
    return this._inheritedMetadata;
  }
  public putInheritedMetadata(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecInheritedMetadata) {
    this._inheritedMetadata.internalValue = value;
  }
  public resetInheritedMetadata() {
    this._inheritedMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inheritedMetadataInput() {
    return this._inheritedMetadata.internalValue;
  }

  // instances - computed: false, optional: false, required: true
  private _instances?: number; 
  public get instances() {
    return this.getNumberAttribute('instances');
  }
  public set instances(value: number) {
    this._instances = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances;
  }

  // liveness_probe_timeout - computed: false, optional: true, required: false
  private _livenessProbeTimeout?: number; 
  public get livenessProbeTimeout() {
    return this.getNumberAttribute('liveness_probe_timeout');
  }
  public set livenessProbeTimeout(value: number) {
    this._livenessProbeTimeout = value;
  }
  public resetLivenessProbeTimeout() {
    this._livenessProbeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessProbeTimeoutInput() {
    return this._livenessProbeTimeout;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // managed - computed: false, optional: true, required: false
  private _managed = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecManagedOutputReference(this, "managed");
  public get managed() {
    return this._managed;
  }
  public putManaged(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecManaged) {
    this._managed.internalValue = value;
  }
  public resetManaged() {
    this._managed.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedInput() {
    return this._managed.internalValue;
  }

  // max_sync_replicas - computed: false, optional: true, required: false
  private _maxSyncReplicas?: number; 
  public get maxSyncReplicas() {
    return this.getNumberAttribute('max_sync_replicas');
  }
  public set maxSyncReplicas(value: number) {
    this._maxSyncReplicas = value;
  }
  public resetMaxSyncReplicas() {
    this._maxSyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSyncReplicasInput() {
    return this._maxSyncReplicas;
  }

  // min_sync_replicas - computed: false, optional: true, required: false
  private _minSyncReplicas?: number; 
  public get minSyncReplicas() {
    return this.getNumberAttribute('min_sync_replicas');
  }
  public set minSyncReplicas(value: number) {
    this._minSyncReplicas = value;
  }
  public resetMinSyncReplicas() {
    this._minSyncReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSyncReplicasInput() {
    return this._minSyncReplicas;
  }

  // monitoring - computed: false, optional: true, required: false
  private _monitoring = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoringOutputReference(this, "monitoring");
  public get monitoring() {
    return this._monitoring;
  }
  public putMonitoring(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecMonitoring) {
    this._monitoring.internalValue = value;
  }
  public resetMonitoring() {
    this._monitoring.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInput() {
    return this._monitoring.internalValue;
  }

  // node_maintenance_window - computed: false, optional: true, required: false
  private _nodeMaintenanceWindow = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindowOutputReference(this, "node_maintenance_window");
  public get nodeMaintenanceWindow() {
    return this._nodeMaintenanceWindow;
  }
  public putNodeMaintenanceWindow(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecNodeMaintenanceWindow) {
    this._nodeMaintenanceWindow.internalValue = value;
  }
  public resetNodeMaintenanceWindow() {
    this._nodeMaintenanceWindow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMaintenanceWindowInput() {
    return this._nodeMaintenanceWindow.internalValue;
  }

  // plugins - computed: false, optional: true, required: false
  private _plugins = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPluginsList(this, "plugins", false);
  public get plugins() {
    return this._plugins;
  }
  public putPlugins(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPlugins[] | cdktf.IResolvable) {
    this._plugins.internalValue = value;
  }
  public resetPlugins() {
    this._plugins.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins.internalValue;
  }

  // postgres_gid - computed: false, optional: true, required: false
  private _postgresGid?: number; 
  public get postgresGid() {
    return this.getNumberAttribute('postgres_gid');
  }
  public set postgresGid(value: number) {
    this._postgresGid = value;
  }
  public resetPostgresGid() {
    this._postgresGid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresGidInput() {
    return this._postgresGid;
  }

  // postgres_uid - computed: false, optional: true, required: false
  private _postgresUid?: number; 
  public get postgresUid() {
    return this.getNumberAttribute('postgres_uid');
  }
  public set postgresUid(value: number) {
    this._postgresUid = value;
  }
  public resetPostgresUid() {
    this._postgresUid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresUidInput() {
    return this._postgresUid;
  }

  // postgresql - computed: false, optional: true, required: false
  private _postgresql = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresqlOutputReference(this, "postgresql");
  public get postgresql() {
    return this._postgresql;
  }
  public putPostgresql(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecPostgresql) {
    this._postgresql.internalValue = value;
  }
  public resetPostgresql() {
    this._postgresql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postgresqlInput() {
    return this._postgresql.internalValue;
  }

  // primary_update_method - computed: false, optional: true, required: false
  private _primaryUpdateMethod?: string; 
  public get primaryUpdateMethod() {
    return this.getStringAttribute('primary_update_method');
  }
  public set primaryUpdateMethod(value: string) {
    this._primaryUpdateMethod = value;
  }
  public resetPrimaryUpdateMethod() {
    this._primaryUpdateMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUpdateMethodInput() {
    return this._primaryUpdateMethod;
  }

  // primary_update_strategy - computed: false, optional: true, required: false
  private _primaryUpdateStrategy?: string; 
  public get primaryUpdateStrategy() {
    return this.getStringAttribute('primary_update_strategy');
  }
  public set primaryUpdateStrategy(value: string) {
    this._primaryUpdateStrategy = value;
  }
  public resetPrimaryUpdateStrategy() {
    this._primaryUpdateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUpdateStrategyInput() {
    return this._primaryUpdateStrategy;
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

  // projected_volume_template - computed: false, optional: true, required: false
  private _projectedVolumeTemplate = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplateOutputReference(this, "projected_volume_template");
  public get projectedVolumeTemplate() {
    return this._projectedVolumeTemplate;
  }
  public putProjectedVolumeTemplate(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecProjectedVolumeTemplate) {
    this._projectedVolumeTemplate.internalValue = value;
  }
  public resetProjectedVolumeTemplate() {
    this._projectedVolumeTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectedVolumeTemplateInput() {
    return this._projectedVolumeTemplate.internalValue;
  }

  // replica - computed: false, optional: true, required: false
  private _replica = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicaOutputReference(this, "replica");
  public get replica() {
    return this._replica;
  }
  public putReplica(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplica) {
    this._replica.internalValue = value;
  }
  public resetReplica() {
    this._replica.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicaInput() {
    return this._replica.internalValue;
  }

  // replication_slots - computed: false, optional: true, required: false
  private _replicationSlots = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlotsOutputReference(this, "replication_slots");
  public get replicationSlots() {
    return this._replicationSlots;
  }
  public putReplicationSlots(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecReplicationSlots) {
    this._replicationSlots.internalValue = value;
  }
  public resetReplicationSlots() {
    this._replicationSlots.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSlotsInput() {
    return this._replicationSlots.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecResources) {
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

  // seccomp_profile - computed: false, optional: true, required: false
  private _seccompProfile = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfileOutputReference(this, "seccomp_profile");
  public get seccompProfile() {
    return this._seccompProfile;
  }
  public putSeccompProfile(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSeccompProfile) {
    this._seccompProfile.internalValue = value;
  }
  public resetSeccompProfile() {
    this._seccompProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get seccompProfileInput() {
    return this._seccompProfile.internalValue;
  }

  // service_account_template - computed: false, optional: true, required: false
  private _serviceAccountTemplate = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplateOutputReference(this, "service_account_template");
  public get serviceAccountTemplate() {
    return this._serviceAccountTemplate;
  }
  public putServiceAccountTemplate(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecServiceAccountTemplate) {
    this._serviceAccountTemplate.internalValue = value;
  }
  public resetServiceAccountTemplate() {
    this._serviceAccountTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountTemplateInput() {
    return this._serviceAccountTemplate.internalValue;
  }

  // smart_shutdown_timeout - computed: false, optional: true, required: false
  private _smartShutdownTimeout?: number; 
  public get smartShutdownTimeout() {
    return this.getNumberAttribute('smart_shutdown_timeout');
  }
  public set smartShutdownTimeout(value: number) {
    this._smartShutdownTimeout = value;
  }
  public resetSmartShutdownTimeout() {
    this._smartShutdownTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smartShutdownTimeoutInput() {
    return this._smartShutdownTimeout;
  }

  // start_delay - computed: false, optional: true, required: false
  private _startDelay?: number; 
  public get startDelay() {
    return this.getNumberAttribute('start_delay');
  }
  public set startDelay(value: number) {
    this._startDelay = value;
  }
  public resetStartDelay() {
    this._startDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDelayInput() {
    return this._startDelay;
  }

  // stop_delay - computed: false, optional: true, required: false
  private _stopDelay?: number; 
  public get stopDelay() {
    return this.getNumberAttribute('stop_delay');
  }
  public set stopDelay(value: number) {
    this._stopDelay = value;
  }
  public resetStopDelay() {
    this._stopDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopDelayInput() {
    return this._stopDelay;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }

  // superuser_secret - computed: false, optional: true, required: false
  private _superuserSecret = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecretOutputReference(this, "superuser_secret");
  public get superuserSecret() {
    return this._superuserSecret;
  }
  public putSuperuserSecret(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecSuperuserSecret) {
    this._superuserSecret.internalValue = value;
  }
  public resetSuperuserSecret() {
    this._superuserSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get superuserSecretInput() {
    return this._superuserSecret.internalValue;
  }

  // switchover_delay - computed: false, optional: true, required: false
  private _switchoverDelay?: number; 
  public get switchoverDelay() {
    return this.getNumberAttribute('switchover_delay');
  }
  public set switchoverDelay(value: number) {
    this._switchoverDelay = value;
  }
  public resetSwitchoverDelay() {
    this._switchoverDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchoverDelayInput() {
    return this._switchoverDelay;
  }

  // tablespaces - computed: false, optional: true, required: false
  private _tablespaces = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespacesList(this, "tablespaces", false);
  public get tablespaces() {
    return this._tablespaces;
  }
  public putTablespaces(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTablespaces[] | cdktf.IResolvable) {
    this._tablespaces.internalValue = value;
  }
  public resetTablespaces() {
    this._tablespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tablespacesInput() {
    return this._tablespaces.internalValue;
  }

  // topology_spread_constraints - computed: false, optional: true, required: false
  private _topologySpreadConstraints = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraintsList(this, "topology_spread_constraints", false);
  public get topologySpreadConstraints() {
    return this._topologySpreadConstraints;
  }
  public putTopologySpreadConstraints(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecTopologySpreadConstraints[] | cdktf.IResolvable) {
    this._topologySpreadConstraints.internalValue = value;
  }
  public resetTopologySpreadConstraints() {
    this._topologySpreadConstraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologySpreadConstraintsInput() {
    return this._topologySpreadConstraints.internalValue;
  }

  // wal_storage - computed: false, optional: true, required: false
  private _walStorage = new DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorageOutputReference(this, "wal_storage");
  public get walStorage() {
    return this._walStorage;
  }
  public putWalStorage(value: DataK8SPostgresqlCnpgIoClusterV1ManifestSpecWalStorage) {
    this._walStorage.internalValue = value;
  }
  public resetWalStorage() {
    this._walStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walStorageInput() {
    return this._walStorage.internalValue;
  }
}
