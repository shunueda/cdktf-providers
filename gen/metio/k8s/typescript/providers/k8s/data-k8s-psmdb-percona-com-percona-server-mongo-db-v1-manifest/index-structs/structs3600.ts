import * as cdktf from 'cdktf';
import { DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackup,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackupToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackupToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackupOutputReference,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecrets,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsList,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContext,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContextToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContextToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContextOutputReference,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiCluster,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiClusterToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiClusterToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiClusterOutputReference,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmm,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmmToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmmToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmmOutputReference } from './structs0'
import { DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsets,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsList } from './structs1200'
import { DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRoles,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesList,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecrets,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecretsToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecretsToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecretsOutputReference } from './structs1600'
import { DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSharding,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecShardingToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecShardingToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecShardingOutputReference,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTls,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTlsToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTlsToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTlsOutputReference,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlags,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlagsToTerraform,
dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlagsToHclTerraform,
DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlagsOutputReference } from './structs3200'
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#apply DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#apply}
  */
  readonly apply?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#schedule DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#set_fcv DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#set_fcv}
  */
  readonly setFcv?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#version_service_endpoint DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#version_service_endpoint}
  */
  readonly versionServiceEndpoint?: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptionsToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: cdktf.stringToTerraform(struct!.apply),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    set_fcv: cdktf.booleanToTerraform(struct!.setFcv),
    version_service_endpoint: cdktf.stringToTerraform(struct!.versionServiceEndpoint),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptionsToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: cdktf.stringToHclTerraform(struct!.apply),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_fcv: {
      value: cdktf.booleanToHclTerraform(struct!.setFcv),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    version_service_endpoint: {
      value: cdktf.stringToHclTerraform(struct!.versionServiceEndpoint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._setFcv !== undefined) {
      hasAnyValues = true;
      internalValueResult.setFcv = this._setFcv;
    }
    if (this._versionServiceEndpoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.versionServiceEndpoint = this._versionServiceEndpoint;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply = undefined;
      this._schedule = undefined;
      this._setFcv = undefined;
      this._versionServiceEndpoint = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply = value.apply;
      this._schedule = value.schedule;
      this._setFcv = value.setFcv;
      this._versionServiceEndpoint = value.versionServiceEndpoint;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply?: string; 
  public get apply() {
    return this.getStringAttribute('apply');
  }
  public set apply(value: string) {
    this._apply = value;
  }
  public resetApply() {
    this._apply = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // set_fcv - computed: false, optional: true, required: false
  private _setFcv?: boolean | cdktf.IResolvable; 
  public get setFcv() {
    return this.getBooleanAttribute('set_fcv');
  }
  public set setFcv(value: boolean | cdktf.IResolvable) {
    this._setFcv = value;
  }
  public resetSetFcv() {
    this._setFcv = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setFcvInput() {
    return this._setFcv;
  }

  // version_service_endpoint - computed: false, optional: true, required: false
  private _versionServiceEndpoint?: string; 
  public get versionServiceEndpoint() {
    return this.getStringAttribute('version_service_endpoint');
  }
  public set versionServiceEndpoint(value: string) {
    this._versionServiceEndpoint = value;
  }
  public resetVersionServiceEndpoint() {
    this._versionServiceEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionServiceEndpointInput() {
    return this._versionServiceEndpoint;
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#key DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#name DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRefToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRefToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._name = undefined;
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
    }
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
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#db DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#db}
  */
  readonly db: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#name DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._name = value.name;
    }
  }

  // db - computed: false, optional: false, required: true
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
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

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesList extends cdktf.ComplexList {
  public internalValue? : DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesOutputReference {
    return new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#db DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#db}
  */
  readonly db?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#name DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#password_secret_ref DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#password_secret_ref}
  */
  readonly passwordSecretRef: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#roles DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#roles}
  */
  readonly roles: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles[] | cdktf.IResolvable;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db: cdktf.stringToTerraform(struct!.db),
    name: cdktf.stringToTerraform(struct!.name),
    password_secret_ref: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRefToTerraform(struct!.passwordSecretRef),
    roles: cdktf.listMapper(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesToTerraform, false)(struct!.roles),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db: {
      value: cdktf.stringToHclTerraform(struct!.db),
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
    password_secret_ref: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRefToHclTerraform(struct!.passwordSecretRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._db !== undefined) {
      hasAnyValues = true;
      internalValueResult.db = this._db;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._passwordSecretRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordSecretRef = this._passwordSecretRef?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._db = undefined;
      this._name = undefined;
      this._passwordSecretRef.internalValue = undefined;
      this._roles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._db = value.db;
      this._name = value.name;
      this._passwordSecretRef.internalValue = value.passwordSecretRef;
      this._roles.internalValue = value.roles;
    }
  }

  // db - computed: false, optional: true, required: false
  private _db?: string; 
  public get db() {
    return this.getStringAttribute('db');
  }
  public set db(value: string) {
    this._db = value;
  }
  public resetDb() {
    this._db = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInput() {
    return this._db;
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

  // password_secret_ref - computed: false, optional: false, required: true
  private _passwordSecretRef = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRefOutputReference(this, "password_secret_ref");
  public get passwordSecretRef() {
    return this._passwordSecretRef;
  }
  public putPasswordSecretRef(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersPasswordSecretRef) {
    this._passwordSecretRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordSecretRefInput() {
    return this._passwordSecretRef.internalValue;
  }

  // roles - computed: false, optional: false, required: true
  private _roles = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
  }
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersList extends cdktf.ComplexList {
  public internalValue? : DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers[] | cdktf.IResolvable

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
  public get(index: number): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersOutputReference {
    return new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#allow_unsafe_configurations DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#allow_unsafe_configurations}
  */
  readonly allowUnsafeConfigurations?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#backup DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#backup}
  */
  readonly backup?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackup;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#cluster_service_dns_mode DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#cluster_service_dns_mode}
  */
  readonly clusterServiceDnsMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#cluster_service_dns_suffix DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#cluster_service_dns_suffix}
  */
  readonly clusterServiceDnsSuffix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#cr_version DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#cr_version}
  */
  readonly crVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#enable_volume_expansion DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#enable_volume_expansion}
  */
  readonly enableVolumeExpansion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#ignore_annotations DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#ignore_annotations}
  */
  readonly ignoreAnnotations?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#ignore_labels DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#ignore_labels}
  */
  readonly ignoreLabels?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#image DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#image_pull_policy DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#image_pull_policy}
  */
  readonly imagePullPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#image_pull_secrets DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#image_pull_secrets}
  */
  readonly imagePullSecrets?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#init_container_security_context DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#init_container_security_context}
  */
  readonly initContainerSecurityContext?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContext;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#init_image DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#init_image}
  */
  readonly initImage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#multi_cluster DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#multi_cluster}
  */
  readonly multiCluster?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiCluster;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#pause DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#pause}
  */
  readonly pause?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#platform DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#pmm DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#pmm}
  */
  readonly pmm?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmm;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#replsets DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#replsets}
  */
  readonly replsets?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsets[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#roles DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#roles}
  */
  readonly roles?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRoles[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#scheduler_name DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#scheduler_name}
  */
  readonly schedulerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#secrets DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#secrets}
  */
  readonly secrets?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecrets;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#sharding DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#sharding}
  */
  readonly sharding?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSharding;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#tls DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#tls}
  */
  readonly tls?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTls;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#unmanaged DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#unmanaged}
  */
  readonly unmanaged?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#unsafe_flags DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#unsafe_flags}
  */
  readonly unsafeFlags?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlags;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#update_strategy DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#update_strategy}
  */
  readonly updateStrategy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#upgrade_options DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#upgrade_options}
  */
  readonly upgradeOptions?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.22/docs/data-sources/psmdb_percona_com_percona_server_mongo_db_v1_manifest#users DataK8SPsmdbPerconaComPerconaServerMongoDbV1Manifest#users}
  */
  readonly users?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers[] | cdktf.IResolvable;
}

export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecToTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_unsafe_configurations: cdktf.booleanToTerraform(struct!.allowUnsafeConfigurations),
    backup: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackupToTerraform(struct!.backup),
    cluster_service_dns_mode: cdktf.stringToTerraform(struct!.clusterServiceDnsMode),
    cluster_service_dns_suffix: cdktf.stringToTerraform(struct!.clusterServiceDnsSuffix),
    cr_version: cdktf.stringToTerraform(struct!.crVersion),
    enable_volume_expansion: cdktf.booleanToTerraform(struct!.enableVolumeExpansion),
    ignore_annotations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreAnnotations),
    ignore_labels: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreLabels),
    image: cdktf.stringToTerraform(struct!.image),
    image_pull_policy: cdktf.stringToTerraform(struct!.imagePullPolicy),
    image_pull_secrets: cdktf.listMapper(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsToTerraform, false)(struct!.imagePullSecrets),
    init_container_security_context: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContextToTerraform(struct!.initContainerSecurityContext),
    init_image: cdktf.stringToTerraform(struct!.initImage),
    multi_cluster: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiClusterToTerraform(struct!.multiCluster),
    pause: cdktf.booleanToTerraform(struct!.pause),
    platform: cdktf.stringToTerraform(struct!.platform),
    pmm: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmmToTerraform(struct!.pmm),
    replsets: cdktf.listMapper(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsToTerraform, false)(struct!.replsets),
    roles: cdktf.listMapper(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesToTerraform, false)(struct!.roles),
    scheduler_name: cdktf.stringToTerraform(struct!.schedulerName),
    secrets: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecretsToTerraform(struct!.secrets),
    sharding: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecShardingToTerraform(struct!.sharding),
    tls: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTlsToTerraform(struct!.tls),
    unmanaged: cdktf.booleanToTerraform(struct!.unmanaged),
    unsafe_flags: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlagsToTerraform(struct!.unsafeFlags),
    update_strategy: cdktf.stringToTerraform(struct!.updateStrategy),
    upgrade_options: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptionsToTerraform(struct!.upgradeOptions),
    users: cdktf.listMapper(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersToTerraform, false)(struct!.users),
  }
}


export function dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecToHclTerraform(struct?: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_unsafe_configurations: {
      value: cdktf.booleanToHclTerraform(struct!.allowUnsafeConfigurations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    backup: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackupToHclTerraform(struct!.backup),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackup",
    },
    cluster_service_dns_mode: {
      value: cdktf.stringToHclTerraform(struct!.clusterServiceDnsMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_service_dns_suffix: {
      value: cdktf.stringToHclTerraform(struct!.clusterServiceDnsSuffix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cr_version: {
      value: cdktf.stringToHclTerraform(struct!.crVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_volume_expansion: {
      value: cdktf.booleanToHclTerraform(struct!.enableVolumeExpansion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ignore_annotations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreAnnotations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ignore_labels: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreLabels),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
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
      value: cdktf.listMapperHcl(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsToHclTerraform, false)(struct!.imagePullSecrets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsList",
    },
    init_container_security_context: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContextToHclTerraform(struct!.initContainerSecurityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContext",
    },
    init_image: {
      value: cdktf.stringToHclTerraform(struct!.initImage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multi_cluster: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiClusterToHclTerraform(struct!.multiCluster),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiCluster",
    },
    pause: {
      value: cdktf.booleanToHclTerraform(struct!.pause),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    platform: {
      value: cdktf.stringToHclTerraform(struct!.platform),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pmm: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmmToHclTerraform(struct!.pmm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmm",
    },
    replsets: {
      value: cdktf.listMapperHcl(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsToHclTerraform, false)(struct!.replsets),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsList",
    },
    roles: {
      value: cdktf.listMapperHcl(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesToHclTerraform, false)(struct!.roles),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesList",
    },
    scheduler_name: {
      value: cdktf.stringToHclTerraform(struct!.schedulerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secrets: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecretsToHclTerraform(struct!.secrets),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecrets",
    },
    sharding: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecShardingToHclTerraform(struct!.sharding),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSharding",
    },
    tls: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTlsToHclTerraform(struct!.tls),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTls",
    },
    unmanaged: {
      value: cdktf.booleanToHclTerraform(struct!.unmanaged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unsafe_flags: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlagsToHclTerraform(struct!.unsafeFlags),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlags",
    },
    update_strategy: {
      value: cdktf.stringToHclTerraform(struct!.updateStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upgrade_options: {
      value: dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptionsToHclTerraform(struct!.upgradeOptions),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions",
    },
    users: {
      value: cdktf.listMapperHcl(dataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersToHclTerraform, false)(struct!.users),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUnsafeConfigurations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUnsafeConfigurations = this._allowUnsafeConfigurations;
    }
    if (this._backup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backup = this._backup?.internalValue;
    }
    if (this._clusterServiceDnsMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterServiceDnsMode = this._clusterServiceDnsMode;
    }
    if (this._clusterServiceDnsSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterServiceDnsSuffix = this._clusterServiceDnsSuffix;
    }
    if (this._crVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.crVersion = this._crVersion;
    }
    if (this._enableVolumeExpansion !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableVolumeExpansion = this._enableVolumeExpansion;
    }
    if (this._ignoreAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreAnnotations = this._ignoreAnnotations;
    }
    if (this._ignoreLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreLabels = this._ignoreLabels;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._imagePullPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullPolicy = this._imagePullPolicy;
    }
    if (this._imagePullSecrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imagePullSecrets = this._imagePullSecrets?.internalValue;
    }
    if (this._initContainerSecurityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initContainerSecurityContext = this._initContainerSecurityContext?.internalValue;
    }
    if (this._initImage !== undefined) {
      hasAnyValues = true;
      internalValueResult.initImage = this._initImage;
    }
    if (this._multiCluster?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiCluster = this._multiCluster?.internalValue;
    }
    if (this._pause !== undefined) {
      hasAnyValues = true;
      internalValueResult.pause = this._pause;
    }
    if (this._platform !== undefined) {
      hasAnyValues = true;
      internalValueResult.platform = this._platform;
    }
    if (this._pmm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pmm = this._pmm?.internalValue;
    }
    if (this._replsets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replsets = this._replsets?.internalValue;
    }
    if (this._roles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles?.internalValue;
    }
    if (this._schedulerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedulerName = this._schedulerName;
    }
    if (this._secrets?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.secrets = this._secrets?.internalValue;
    }
    if (this._sharding?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharding = this._sharding?.internalValue;
    }
    if (this._tls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tls = this._tls?.internalValue;
    }
    if (this._unmanaged !== undefined) {
      hasAnyValues = true;
      internalValueResult.unmanaged = this._unmanaged;
    }
    if (this._unsafeFlags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsafeFlags = this._unsafeFlags?.internalValue;
    }
    if (this._updateStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateStrategy = this._updateStrategy;
    }
    if (this._upgradeOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.upgradeOptions = this._upgradeOptions?.internalValue;
    }
    if (this._users?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.users = this._users?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowUnsafeConfigurations = undefined;
      this._backup.internalValue = undefined;
      this._clusterServiceDnsMode = undefined;
      this._clusterServiceDnsSuffix = undefined;
      this._crVersion = undefined;
      this._enableVolumeExpansion = undefined;
      this._ignoreAnnotations = undefined;
      this._ignoreLabels = undefined;
      this._image = undefined;
      this._imagePullPolicy = undefined;
      this._imagePullSecrets.internalValue = undefined;
      this._initContainerSecurityContext.internalValue = undefined;
      this._initImage = undefined;
      this._multiCluster.internalValue = undefined;
      this._pause = undefined;
      this._platform = undefined;
      this._pmm.internalValue = undefined;
      this._replsets.internalValue = undefined;
      this._roles.internalValue = undefined;
      this._schedulerName = undefined;
      this._secrets.internalValue = undefined;
      this._sharding.internalValue = undefined;
      this._tls.internalValue = undefined;
      this._unmanaged = undefined;
      this._unsafeFlags.internalValue = undefined;
      this._updateStrategy = undefined;
      this._upgradeOptions.internalValue = undefined;
      this._users.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowUnsafeConfigurations = value.allowUnsafeConfigurations;
      this._backup.internalValue = value.backup;
      this._clusterServiceDnsMode = value.clusterServiceDnsMode;
      this._clusterServiceDnsSuffix = value.clusterServiceDnsSuffix;
      this._crVersion = value.crVersion;
      this._enableVolumeExpansion = value.enableVolumeExpansion;
      this._ignoreAnnotations = value.ignoreAnnotations;
      this._ignoreLabels = value.ignoreLabels;
      this._image = value.image;
      this._imagePullPolicy = value.imagePullPolicy;
      this._imagePullSecrets.internalValue = value.imagePullSecrets;
      this._initContainerSecurityContext.internalValue = value.initContainerSecurityContext;
      this._initImage = value.initImage;
      this._multiCluster.internalValue = value.multiCluster;
      this._pause = value.pause;
      this._platform = value.platform;
      this._pmm.internalValue = value.pmm;
      this._replsets.internalValue = value.replsets;
      this._roles.internalValue = value.roles;
      this._schedulerName = value.schedulerName;
      this._secrets.internalValue = value.secrets;
      this._sharding.internalValue = value.sharding;
      this._tls.internalValue = value.tls;
      this._unmanaged = value.unmanaged;
      this._unsafeFlags.internalValue = value.unsafeFlags;
      this._updateStrategy = value.updateStrategy;
      this._upgradeOptions.internalValue = value.upgradeOptions;
      this._users.internalValue = value.users;
    }
  }

  // allow_unsafe_configurations - computed: false, optional: true, required: false
  private _allowUnsafeConfigurations?: boolean | cdktf.IResolvable; 
  public get allowUnsafeConfigurations() {
    return this.getBooleanAttribute('allow_unsafe_configurations');
  }
  public set allowUnsafeConfigurations(value: boolean | cdktf.IResolvable) {
    this._allowUnsafeConfigurations = value;
  }
  public resetAllowUnsafeConfigurations() {
    this._allowUnsafeConfigurations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUnsafeConfigurationsInput() {
    return this._allowUnsafeConfigurations;
  }

  // backup - computed: false, optional: true, required: false
  private _backup = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackupOutputReference(this, "backup");
  public get backup() {
    return this._backup;
  }
  public putBackup(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecBackup) {
    this._backup.internalValue = value;
  }
  public resetBackup() {
    this._backup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInput() {
    return this._backup.internalValue;
  }

  // cluster_service_dns_mode - computed: false, optional: true, required: false
  private _clusterServiceDnsMode?: string; 
  public get clusterServiceDnsMode() {
    return this.getStringAttribute('cluster_service_dns_mode');
  }
  public set clusterServiceDnsMode(value: string) {
    this._clusterServiceDnsMode = value;
  }
  public resetClusterServiceDnsMode() {
    this._clusterServiceDnsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterServiceDnsModeInput() {
    return this._clusterServiceDnsMode;
  }

  // cluster_service_dns_suffix - computed: false, optional: true, required: false
  private _clusterServiceDnsSuffix?: string; 
  public get clusterServiceDnsSuffix() {
    return this.getStringAttribute('cluster_service_dns_suffix');
  }
  public set clusterServiceDnsSuffix(value: string) {
    this._clusterServiceDnsSuffix = value;
  }
  public resetClusterServiceDnsSuffix() {
    this._clusterServiceDnsSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterServiceDnsSuffixInput() {
    return this._clusterServiceDnsSuffix;
  }

  // cr_version - computed: false, optional: true, required: false
  private _crVersion?: string; 
  public get crVersion() {
    return this.getStringAttribute('cr_version');
  }
  public set crVersion(value: string) {
    this._crVersion = value;
  }
  public resetCrVersion() {
    this._crVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crVersionInput() {
    return this._crVersion;
  }

  // enable_volume_expansion - computed: false, optional: true, required: false
  private _enableVolumeExpansion?: boolean | cdktf.IResolvable; 
  public get enableVolumeExpansion() {
    return this.getBooleanAttribute('enable_volume_expansion');
  }
  public set enableVolumeExpansion(value: boolean | cdktf.IResolvable) {
    this._enableVolumeExpansion = value;
  }
  public resetEnableVolumeExpansion() {
    this._enableVolumeExpansion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableVolumeExpansionInput() {
    return this._enableVolumeExpansion;
  }

  // ignore_annotations - computed: false, optional: true, required: false
  private _ignoreAnnotations?: string[]; 
  public get ignoreAnnotations() {
    return this.getListAttribute('ignore_annotations');
  }
  public set ignoreAnnotations(value: string[]) {
    this._ignoreAnnotations = value;
  }
  public resetIgnoreAnnotations() {
    this._ignoreAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreAnnotationsInput() {
    return this._ignoreAnnotations;
  }

  // ignore_labels - computed: false, optional: true, required: false
  private _ignoreLabels?: string[]; 
  public get ignoreLabels() {
    return this.getListAttribute('ignore_labels');
  }
  public set ignoreLabels(value: string[]) {
    this._ignoreLabels = value;
  }
  public resetIgnoreLabels() {
    this._ignoreLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreLabelsInput() {
    return this._ignoreLabels;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
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
  private _imagePullSecrets = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecretsList(this, "image_pull_secrets", false);
  public get imagePullSecrets() {
    return this._imagePullSecrets;
  }
  public putImagePullSecrets(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecImagePullSecrets[] | cdktf.IResolvable) {
    this._imagePullSecrets.internalValue = value;
  }
  public resetImagePullSecrets() {
    this._imagePullSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagePullSecretsInput() {
    return this._imagePullSecrets.internalValue;
  }

  // init_container_security_context - computed: false, optional: true, required: false
  private _initContainerSecurityContext = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContextOutputReference(this, "init_container_security_context");
  public get initContainerSecurityContext() {
    return this._initContainerSecurityContext;
  }
  public putInitContainerSecurityContext(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecInitContainerSecurityContext) {
    this._initContainerSecurityContext.internalValue = value;
  }
  public resetInitContainerSecurityContext() {
    this._initContainerSecurityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initContainerSecurityContextInput() {
    return this._initContainerSecurityContext.internalValue;
  }

  // init_image - computed: false, optional: true, required: false
  private _initImage?: string; 
  public get initImage() {
    return this.getStringAttribute('init_image');
  }
  public set initImage(value: string) {
    this._initImage = value;
  }
  public resetInitImage() {
    this._initImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initImageInput() {
    return this._initImage;
  }

  // multi_cluster - computed: false, optional: true, required: false
  private _multiCluster = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiClusterOutputReference(this, "multi_cluster");
  public get multiCluster() {
    return this._multiCluster;
  }
  public putMultiCluster(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecMultiCluster) {
    this._multiCluster.internalValue = value;
  }
  public resetMultiCluster() {
    this._multiCluster.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiClusterInput() {
    return this._multiCluster.internalValue;
  }

  // pause - computed: false, optional: true, required: false
  private _pause?: boolean | cdktf.IResolvable; 
  public get pause() {
    return this.getBooleanAttribute('pause');
  }
  public set pause(value: boolean | cdktf.IResolvable) {
    this._pause = value;
  }
  public resetPause() {
    this._pause = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pauseInput() {
    return this._pause;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // pmm - computed: false, optional: true, required: false
  private _pmm = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmmOutputReference(this, "pmm");
  public get pmm() {
    return this._pmm;
  }
  public putPmm(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecPmm) {
    this._pmm.internalValue = value;
  }
  public resetPmm() {
    this._pmm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmmInput() {
    return this._pmm.internalValue;
  }

  // replsets - computed: false, optional: true, required: false
  private _replsets = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsetsList(this, "replsets", false);
  public get replsets() {
    return this._replsets;
  }
  public putReplsets(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecReplsets[] | cdktf.IResolvable) {
    this._replsets.internalValue = value;
  }
  public resetReplsets() {
    this._replsets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replsetsInput() {
    return this._replsets.internalValue;
  }

  // roles - computed: false, optional: true, required: false
  private _roles = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRolesList(this, "roles", false);
  public get roles() {
    return this._roles;
  }
  public putRoles(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecRoles[] | cdktf.IResolvable) {
    this._roles.internalValue = value;
  }
  public resetRoles() {
    this._roles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles.internalValue;
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

  // secrets - computed: false, optional: true, required: false
  private _secrets = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecretsOutputReference(this, "secrets");
  public get secrets() {
    return this._secrets;
  }
  public putSecrets(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSecrets) {
    this._secrets.internalValue = value;
  }
  public resetSecrets() {
    this._secrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretsInput() {
    return this._secrets.internalValue;
  }

  // sharding - computed: false, optional: true, required: false
  private _sharding = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecShardingOutputReference(this, "sharding");
  public get sharding() {
    return this._sharding;
  }
  public putSharding(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecSharding) {
    this._sharding.internalValue = value;
  }
  public resetSharding() {
    this._sharding.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingInput() {
    return this._sharding.internalValue;
  }

  // tls - computed: false, optional: true, required: false
  private _tls = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTlsOutputReference(this, "tls");
  public get tls() {
    return this._tls;
  }
  public putTls(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecTls) {
    this._tls.internalValue = value;
  }
  public resetTls() {
    this._tls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsInput() {
    return this._tls.internalValue;
  }

  // unmanaged - computed: false, optional: true, required: false
  private _unmanaged?: boolean | cdktf.IResolvable; 
  public get unmanaged() {
    return this.getBooleanAttribute('unmanaged');
  }
  public set unmanaged(value: boolean | cdktf.IResolvable) {
    this._unmanaged = value;
  }
  public resetUnmanaged() {
    this._unmanaged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unmanagedInput() {
    return this._unmanaged;
  }

  // unsafe_flags - computed: false, optional: true, required: false
  private _unsafeFlags = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlagsOutputReference(this, "unsafe_flags");
  public get unsafeFlags() {
    return this._unsafeFlags;
  }
  public putUnsafeFlags(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUnsafeFlags) {
    this._unsafeFlags.internalValue = value;
  }
  public resetUnsafeFlags() {
    this._unsafeFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsafeFlagsInput() {
    return this._unsafeFlags.internalValue;
  }

  // update_strategy - computed: false, optional: true, required: false
  private _updateStrategy?: string; 
  public get updateStrategy() {
    return this.getStringAttribute('update_strategy');
  }
  public set updateStrategy(value: string) {
    this._updateStrategy = value;
  }
  public resetUpdateStrategy() {
    this._updateStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStrategyInput() {
    return this._updateStrategy;
  }

  // upgrade_options - computed: false, optional: true, required: false
  private _upgradeOptions = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptionsOutputReference(this, "upgrade_options");
  public get upgradeOptions() {
    return this._upgradeOptions;
  }
  public putUpgradeOptions(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUpgradeOptions) {
    this._upgradeOptions.internalValue = value;
  }
  public resetUpgradeOptions() {
    this._upgradeOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upgradeOptionsInput() {
    return this._upgradeOptions.internalValue;
  }

  // users - computed: false, optional: true, required: false
  private _users = new DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsersList(this, "users", false);
  public get users() {
    return this._users;
  }
  public putUsers(value: DataK8SPsmdbPerconaComPerconaServerMongoDbV1ManifestSpecUsers[] | cdktf.IResolvable) {
    this._users.internalValue = value;
  }
  public resetUsers() {
    this._users.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usersInput() {
    return this._users.internalValue;
  }
}
