// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GloballyDistributedDatabaseShardedDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#ca_signed_certificate GloballyDistributedDatabaseShardedDatabase#ca_signed_certificate}
  */
  readonly caSignedCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#character_set GloballyDistributedDatabaseShardedDatabase#character_set}
  */
  readonly characterSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#chunks GloballyDistributedDatabaseShardedDatabase#chunks}
  */
  readonly chunks?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#cluster_certificate_common_name GloballyDistributedDatabaseShardedDatabase#cluster_certificate_common_name}
  */
  readonly clusterCertificateCommonName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#compartment_id GloballyDistributedDatabaseShardedDatabase#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger}
  */
  readonly configureGsmsTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_is_latest_gsm_image GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_is_latest_gsm_image}
  */
  readonly configureGsmsTriggerIsLatestGsmImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#configure_gsms_trigger_old_gsm_names GloballyDistributedDatabaseShardedDatabase#configure_gsms_trigger_old_gsm_names}
  */
  readonly configureGsmsTriggerOldGsmNames?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#configure_sharding_trigger GloballyDistributedDatabaseShardedDatabase#configure_sharding_trigger}
  */
  readonly configureShardingTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#db_deployment_type GloballyDistributedDatabaseShardedDatabase#db_deployment_type}
  */
  readonly dbDeploymentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#db_version GloballyDistributedDatabaseShardedDatabase#db_version}
  */
  readonly dbVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#db_workload GloballyDistributedDatabaseShardedDatabase#db_workload}
  */
  readonly dbWorkload: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#defined_tags GloballyDistributedDatabaseShardedDatabase#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#display_name GloballyDistributedDatabaseShardedDatabase#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#download_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#download_gsm_certificate_signing_request_trigger}
  */
  readonly downloadGsmCertificateSigningRequestTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#freeform_tags GloballyDistributedDatabaseShardedDatabase#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#generate_gsm_certificate_signing_request_trigger GloballyDistributedDatabaseShardedDatabase#generate_gsm_certificate_signing_request_trigger}
  */
  readonly generateGsmCertificateSigningRequestTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_password GloballyDistributedDatabaseShardedDatabase#generate_wallet_password}
  */
  readonly generateWalletPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#generate_wallet_trigger}
  */
  readonly generateWalletTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#get_connection_string_trigger GloballyDistributedDatabaseShardedDatabase#get_connection_string_trigger}
  */
  readonly fetchConnectionStringTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#id GloballyDistributedDatabaseShardedDatabase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#listener_port GloballyDistributedDatabaseShardedDatabase#listener_port}
  */
  readonly listenerPort: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#listener_port_tls GloballyDistributedDatabaseShardedDatabase#listener_port_tls}
  */
  readonly listenerPortTls: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#ncharacter_set GloballyDistributedDatabaseShardedDatabase#ncharacter_set}
  */
  readonly ncharacterSet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#ons_port_local GloballyDistributedDatabaseShardedDatabase#ons_port_local}
  */
  readonly onsPortLocal: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#ons_port_remote GloballyDistributedDatabaseShardedDatabase#ons_port_remote}
  */
  readonly onsPortRemote: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#prefix GloballyDistributedDatabaseShardedDatabase#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#replication_factor GloballyDistributedDatabaseShardedDatabase#replication_factor}
  */
  readonly replicationFactor?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#replication_method GloballyDistributedDatabaseShardedDatabase#replication_method}
  */
  readonly replicationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#replication_unit GloballyDistributedDatabaseShardedDatabase#replication_unit}
  */
  readonly replicationUnit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#sharding_method GloballyDistributedDatabaseShardedDatabase#sharding_method}
  */
  readonly shardingMethod: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#start_database_trigger GloballyDistributedDatabaseShardedDatabase#start_database_trigger}
  */
  readonly startDatabaseTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#stop_database_trigger GloballyDistributedDatabaseShardedDatabase#stop_database_trigger}
  */
  readonly stopDatabaseTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#upload_signed_certificate_and_generate_wallet_trigger GloballyDistributedDatabaseShardedDatabase#upload_signed_certificate_and_generate_wallet_trigger}
  */
  readonly uploadSignedCertificateAndGenerateWalletTrigger?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#validate_network_trigger GloballyDistributedDatabaseShardedDatabase#validate_network_trigger}
  */
  readonly validateNetworkTrigger?: number;
  /**
  * catalog_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#catalog_details GloballyDistributedDatabaseShardedDatabase#catalog_details}
  */
  readonly catalogDetails: GloballyDistributedDatabaseShardedDatabaseCatalogDetails[] | cdktf.IResolvable;
  /**
  * patch_operations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#patch_operations GloballyDistributedDatabaseShardedDatabase#patch_operations}
  */
  readonly patchOperations?: GloballyDistributedDatabaseShardedDatabasePatchOperations[] | cdktf.IResolvable;
  /**
  * shard_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#shard_details GloballyDistributedDatabaseShardedDatabase#shard_details}
  */
  readonly shardDetails: GloballyDistributedDatabaseShardedDatabaseShardDetails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#timeouts GloballyDistributedDatabaseShardedDatabase#timeouts}
  */
  readonly timeouts?: GloballyDistributedDatabaseShardedDatabaseTimeouts;
}
export interface GloballyDistributedDatabaseShardedDatabaseConnectionStrings {
}

export function globallyDistributedDatabaseShardedDatabaseConnectionStringsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globallyDistributedDatabaseShardedDatabaseConnectionStringsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseConnectionStrings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseConnectionStrings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseConnectionStrings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // all_connection_strings - computed: true, optional: false, required: false
  private _allConnectionStrings = new cdktf.StringMap(this, "all_connection_strings");
  public get allConnectionStrings() {
    return this._allConnectionStrings;
  }
}

export class GloballyDistributedDatabaseShardedDatabaseConnectionStringsList extends cdktf.ComplexList {

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
  public get(index: number): GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference {
    return new GloballyDistributedDatabaseShardedDatabaseConnectionStringsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GloballyDistributedDatabaseShardedDatabaseGsms {
}

export function globallyDistributedDatabaseShardedDatabaseGsmsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseGsms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function globallyDistributedDatabaseShardedDatabaseGsmsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseGsms): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseGsms | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseGsms | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // compute_count - computed: true, optional: false, required: false
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }

  // data_storage_size_in_gbs - computed: true, optional: false, required: false
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supporting_resource_id - computed: true, optional: false, required: false
  public get supportingResourceId() {
    return this.getStringAttribute('supporting_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeSslCertificateExpires() {
    return this.getStringAttribute('time_ssl_certificate_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }
}

export class GloballyDistributedDatabaseShardedDatabaseGsmsList extends cdktf.ComplexList {

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
  public get(index: number): GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference {
    return new GloballyDistributedDatabaseShardedDatabaseGsmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}
  */
  readonly vaultId: string;
}

export function globallyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference | GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_version_id: cdktf.stringToTerraform(struct!.kmsKeyVersionId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function globallyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference | GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_version_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyVersionId = this._kmsKeyVersionId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._kmsKeyVersionId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyVersionId = value.kmsKeyVersionId;
      this._vaultId = value.vaultId;
    }
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_version_id - computed: true, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface GloballyDistributedDatabaseShardedDatabaseCatalogDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}
  */
  readonly cloudAutonomousVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}
  */
  readonly computeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}
  */
  readonly dataStorageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}
  */
  readonly peerCloudAutonomousVmClusterId?: string;
  /**
  * encryption_key_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#encryption_key_details GloballyDistributedDatabaseShardedDatabase#encryption_key_details}
  */
  readonly encryptionKeyDetails?: GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails;
}

export function globallyDistributedDatabaseShardedDatabaseCatalogDetailsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseCatalogDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(struct!.cloudAutonomousVmClusterId),
    compute_count: cdktf.numberToTerraform(struct!.computeCount),
    data_storage_size_in_gbs: cdktf.numberToTerraform(struct!.dataStorageSizeInGbs),
    is_auto_scaling_enabled: cdktf.booleanToTerraform(struct!.isAutoScalingEnabled),
    peer_cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(struct!.peerCloudAutonomousVmClusterId),
    encryption_key_details: globallyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsToTerraform(struct!.encryptionKeyDetails),
  }
}


export function globallyDistributedDatabaseShardedDatabaseCatalogDetailsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseCatalogDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_autonomous_vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudAutonomousVmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_count: {
      value: cdktf.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auto_scaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_cloud_autonomous_vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.peerCloudAutonomousVmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_details: {
      value: globallyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsToHclTerraform(struct!.encryptionKeyDetails),
      isBlock: true,
      type: "list",
      storageClassType: "GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseCatalogDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._cloudAutonomousVmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAutonomousVmClusterId = this._cloudAutonomousVmClusterId;
    }
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._dataStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeInGbs = this._dataStorageSizeInGbs;
    }
    if (this._isAutoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoScalingEnabled = this._isAutoScalingEnabled;
    }
    if (this._peerCloudAutonomousVmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerCloudAutonomousVmClusterId = this._peerCloudAutonomousVmClusterId;
    }
    if (this._encryptionKeyDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyDetails = this._encryptionKeyDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseCatalogDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._cloudAutonomousVmClusterId = undefined;
      this._computeCount = undefined;
      this._dataStorageSizeInGbs = undefined;
      this._isAutoScalingEnabled = undefined;
      this._peerCloudAutonomousVmClusterId = undefined;
      this._encryptionKeyDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._cloudAutonomousVmClusterId = value.cloudAutonomousVmClusterId;
      this._computeCount = value.computeCount;
      this._dataStorageSizeInGbs = value.dataStorageSizeInGbs;
      this._isAutoScalingEnabled = value.isAutoScalingEnabled;
      this._peerCloudAutonomousVmClusterId = value.peerCloudAutonomousVmClusterId;
      this._encryptionKeyDetails.internalValue = value.encryptionKeyDetails;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cloud_autonomous_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudAutonomousVmClusterId?: string; 
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }
  public set cloudAutonomousVmClusterId(value: string) {
    this._cloudAutonomousVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAutonomousVmClusterIdInput() {
    return this._cloudAutonomousVmClusterId;
  }

  // compute_count - computed: false, optional: false, required: true
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // container_database_parent_id - computed: true, optional: false, required: false
  public get containerDatabaseParentId() {
    return this.getStringAttribute('container_database_parent_id');
  }

  // data_storage_size_in_gbs - computed: false, optional: false, required: true
  private _dataStorageSizeInGbs?: number; 
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }
  public set dataStorageSizeInGbs(value: number) {
    this._dataStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbsInput() {
    return this._dataStorageSizeInGbs;
  }

  // is_auto_scaling_enabled - computed: false, optional: false, required: true
  private _isAutoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _peerCloudAutonomousVmClusterId?: string; 
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }
  public set peerCloudAutonomousVmClusterId(value: string) {
    this._peerCloudAutonomousVmClusterId = value;
  }
  public resetPeerCloudAutonomousVmClusterId() {
    this._peerCloudAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCloudAutonomousVmClusterIdInput() {
    return this._peerCloudAutonomousVmClusterId;
  }

  // shard_group - computed: true, optional: false, required: false
  public get shardGroup() {
    return this.getStringAttribute('shard_group');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supporting_resource_id - computed: true, optional: false, required: false
  public get supportingResourceId() {
    return this.getStringAttribute('supporting_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeSslCertificateExpires() {
    return this.getStringAttribute('time_ssl_certificate_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // encryption_key_details - computed: false, optional: true, required: false
  private _encryptionKeyDetails = new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetailsOutputReference(this, "encryption_key_details");
  public get encryptionKeyDetails() {
    return this._encryptionKeyDetails;
  }
  public putEncryptionKeyDetails(value: GloballyDistributedDatabaseShardedDatabaseCatalogDetailsEncryptionKeyDetails) {
    this._encryptionKeyDetails.internalValue = value;
  }
  public resetEncryptionKeyDetails() {
    this._encryptionKeyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyDetailsInput() {
    return this._encryptionKeyDetails.internalValue;
  }
}

export class GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList extends cdktf.ComplexList {
  public internalValue? : GloballyDistributedDatabaseShardedDatabaseCatalogDetails[] | cdktf.IResolvable

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
  public get(index: number): GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference {
    return new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GloballyDistributedDatabaseShardedDatabasePatchOperations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#operation GloballyDistributedDatabaseShardedDatabase#operation}
  */
  readonly operation: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#selection GloballyDistributedDatabaseShardedDatabase#selection}
  */
  readonly selection: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#value GloballyDistributedDatabaseShardedDatabase#value}
  */
  readonly value: string;
}

export function globallyDistributedDatabaseShardedDatabasePatchOperationsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabasePatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operation: cdktf.stringToTerraform(struct!.operation),
    selection: cdktf.stringToTerraform(struct!.selection),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function globallyDistributedDatabaseShardedDatabasePatchOperationsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabasePatchOperations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    selection: {
      value: cdktf.stringToHclTerraform(struct!.selection),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GloballyDistributedDatabaseShardedDatabasePatchOperations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._selection !== undefined) {
      hasAnyValues = true;
      internalValueResult.selection = this._selection;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabasePatchOperations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operation = undefined;
      this._selection = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operation = value.operation;
      this._selection = value.selection;
      this._value = value.value;
    }
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // selection - computed: false, optional: false, required: true
  private _selection?: string; 
  public get selection() {
    return this.getStringAttribute('selection');
  }
  public set selection(value: string) {
    this._selection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get selectionInput() {
    return this._selection;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class GloballyDistributedDatabaseShardedDatabasePatchOperationsList extends cdktf.ComplexList {
  public internalValue? : GloballyDistributedDatabaseShardedDatabasePatchOperations[] | cdktf.IResolvable

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
  public get(index: number): GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference {
    return new GloballyDistributedDatabaseShardedDatabasePatchOperationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#kms_key_id GloballyDistributedDatabaseShardedDatabase#kms_key_id}
  */
  readonly kmsKeyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#kms_key_version_id GloballyDistributedDatabaseShardedDatabase#kms_key_version_id}
  */
  readonly kmsKeyVersionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#vault_id GloballyDistributedDatabaseShardedDatabase#vault_id}
  */
  readonly vaultId: string;
}

export function globallyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference | GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kms_key_id: cdktf.stringToTerraform(struct!.kmsKeyId),
    kms_key_version_id: cdktf.stringToTerraform(struct!.kmsKeyVersionId),
    vault_id: cdktf.stringToTerraform(struct!.vaultId),
  }
}


export function globallyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference | GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kms_key_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kms_key_version_id: {
      value: cdktf.stringToHclTerraform(struct!.kmsKeyVersionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kmsKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyId = this._kmsKeyId;
    }
    if (this._kmsKeyVersionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.kmsKeyVersionId = this._kmsKeyVersionId;
    }
    if (this._vaultId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultId = this._vaultId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kmsKeyId = undefined;
      this._kmsKeyVersionId = undefined;
      this._vaultId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kmsKeyId = value.kmsKeyId;
      this._kmsKeyVersionId = value.kmsKeyVersionId;
      this._vaultId = value.vaultId;
    }
  }

  // kms_key_id - computed: false, optional: false, required: true
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // kms_key_version_id - computed: true, optional: true, required: false
  private _kmsKeyVersionId?: string; 
  public get kmsKeyVersionId() {
    return this.getStringAttribute('kms_key_version_id');
  }
  public set kmsKeyVersionId(value: string) {
    this._kmsKeyVersionId = value;
  }
  public resetKmsKeyVersionId() {
    this._kmsKeyVersionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyVersionIdInput() {
    return this._kmsKeyVersionId;
  }

  // vault_id - computed: false, optional: false, required: true
  private _vaultId?: string; 
  public get vaultId() {
    return this.getStringAttribute('vault_id');
  }
  public set vaultId(value: string) {
    this._vaultId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIdInput() {
    return this._vaultId;
  }
}
export interface GloballyDistributedDatabaseShardedDatabaseShardDetails {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#admin_password GloballyDistributedDatabaseShardedDatabase#admin_password}
  */
  readonly adminPassword: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#cloud_autonomous_vm_cluster_id}
  */
  readonly cloudAutonomousVmClusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#compute_count GloballyDistributedDatabaseShardedDatabase#compute_count}
  */
  readonly computeCount: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#data_storage_size_in_gbs GloballyDistributedDatabaseShardedDatabase#data_storage_size_in_gbs}
  */
  readonly dataStorageSizeInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#is_auto_scaling_enabled GloballyDistributedDatabaseShardedDatabase#is_auto_scaling_enabled}
  */
  readonly isAutoScalingEnabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#peer_cloud_autonomous_vm_cluster_id GloballyDistributedDatabaseShardedDatabase#peer_cloud_autonomous_vm_cluster_id}
  */
  readonly peerCloudAutonomousVmClusterId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#shard_space GloballyDistributedDatabaseShardedDatabase#shard_space}
  */
  readonly shardSpace?: string;
  /**
  * encryption_key_details block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#encryption_key_details GloballyDistributedDatabaseShardedDatabase#encryption_key_details}
  */
  readonly encryptionKeyDetails?: GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails;
}

export function globallyDistributedDatabaseShardedDatabaseShardDetailsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseShardDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(struct!.cloudAutonomousVmClusterId),
    compute_count: cdktf.numberToTerraform(struct!.computeCount),
    data_storage_size_in_gbs: cdktf.numberToTerraform(struct!.dataStorageSizeInGbs),
    is_auto_scaling_enabled: cdktf.booleanToTerraform(struct!.isAutoScalingEnabled),
    peer_cloud_autonomous_vm_cluster_id: cdktf.stringToTerraform(struct!.peerCloudAutonomousVmClusterId),
    shard_space: cdktf.stringToTerraform(struct!.shardSpace),
    encryption_key_details: globallyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsToTerraform(struct!.encryptionKeyDetails),
  }
}


export function globallyDistributedDatabaseShardedDatabaseShardDetailsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseShardDetails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cloud_autonomous_vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.cloudAutonomousVmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_count: {
      value: cdktf.numberToHclTerraform(struct!.computeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    data_storage_size_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.dataStorageSizeInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_auto_scaling_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.isAutoScalingEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    peer_cloud_autonomous_vm_cluster_id: {
      value: cdktf.stringToHclTerraform(struct!.peerCloudAutonomousVmClusterId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shard_space: {
      value: cdktf.stringToHclTerraform(struct!.shardSpace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_key_details: {
      value: globallyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsToHclTerraform(struct!.encryptionKeyDetails),
      isBlock: true,
      type: "list",
      storageClassType: "GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseShardDetails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._cloudAutonomousVmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudAutonomousVmClusterId = this._cloudAutonomousVmClusterId;
    }
    if (this._computeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeCount = this._computeCount;
    }
    if (this._dataStorageSizeInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataStorageSizeInGbs = this._dataStorageSizeInGbs;
    }
    if (this._isAutoScalingEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAutoScalingEnabled = this._isAutoScalingEnabled;
    }
    if (this._peerCloudAutonomousVmClusterId !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerCloudAutonomousVmClusterId = this._peerCloudAutonomousVmClusterId;
    }
    if (this._shardSpace !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardSpace = this._shardSpace;
    }
    if (this._encryptionKeyDetails?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionKeyDetails = this._encryptionKeyDetails?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseShardDetails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminPassword = undefined;
      this._cloudAutonomousVmClusterId = undefined;
      this._computeCount = undefined;
      this._dataStorageSizeInGbs = undefined;
      this._isAutoScalingEnabled = undefined;
      this._peerCloudAutonomousVmClusterId = undefined;
      this._shardSpace = undefined;
      this._encryptionKeyDetails.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminPassword = value.adminPassword;
      this._cloudAutonomousVmClusterId = value.cloudAutonomousVmClusterId;
      this._computeCount = value.computeCount;
      this._dataStorageSizeInGbs = value.dataStorageSizeInGbs;
      this._isAutoScalingEnabled = value.isAutoScalingEnabled;
      this._peerCloudAutonomousVmClusterId = value.peerCloudAutonomousVmClusterId;
      this._shardSpace = value.shardSpace;
      this._encryptionKeyDetails.internalValue = value.encryptionKeyDetails;
    }
  }

  // admin_password - computed: false, optional: false, required: true
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // cloud_autonomous_vm_cluster_id - computed: false, optional: false, required: true
  private _cloudAutonomousVmClusterId?: string; 
  public get cloudAutonomousVmClusterId() {
    return this.getStringAttribute('cloud_autonomous_vm_cluster_id');
  }
  public set cloudAutonomousVmClusterId(value: string) {
    this._cloudAutonomousVmClusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAutonomousVmClusterIdInput() {
    return this._cloudAutonomousVmClusterId;
  }

  // compute_count - computed: false, optional: false, required: true
  private _computeCount?: number; 
  public get computeCount() {
    return this.getNumberAttribute('compute_count');
  }
  public set computeCount(value: number) {
    this._computeCount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get computeCountInput() {
    return this._computeCount;
  }

  // container_database_id - computed: true, optional: false, required: false
  public get containerDatabaseId() {
    return this.getStringAttribute('container_database_id');
  }

  // container_database_parent_id - computed: true, optional: false, required: false
  public get containerDatabaseParentId() {
    return this.getStringAttribute('container_database_parent_id');
  }

  // data_storage_size_in_gbs - computed: false, optional: false, required: true
  private _dataStorageSizeInGbs?: number; 
  public get dataStorageSizeInGbs() {
    return this.getNumberAttribute('data_storage_size_in_gbs');
  }
  public set dataStorageSizeInGbs(value: number) {
    this._dataStorageSizeInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStorageSizeInGbsInput() {
    return this._dataStorageSizeInGbs;
  }

  // is_auto_scaling_enabled - computed: false, optional: false, required: true
  private _isAutoScalingEnabled?: boolean | cdktf.IResolvable; 
  public get isAutoScalingEnabled() {
    return this.getBooleanAttribute('is_auto_scaling_enabled');
  }
  public set isAutoScalingEnabled(value: boolean | cdktf.IResolvable) {
    this._isAutoScalingEnabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get isAutoScalingEnabledInput() {
    return this._isAutoScalingEnabled;
  }

  // metadata - computed: true, optional: false, required: false
  private _metadata = new cdktf.StringMap(this, "metadata");
  public get metadata() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // peer_cloud_autonomous_vm_cluster_id - computed: true, optional: true, required: false
  private _peerCloudAutonomousVmClusterId?: string; 
  public get peerCloudAutonomousVmClusterId() {
    return this.getStringAttribute('peer_cloud_autonomous_vm_cluster_id');
  }
  public set peerCloudAutonomousVmClusterId(value: string) {
    this._peerCloudAutonomousVmClusterId = value;
  }
  public resetPeerCloudAutonomousVmClusterId() {
    this._peerCloudAutonomousVmClusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerCloudAutonomousVmClusterIdInput() {
    return this._peerCloudAutonomousVmClusterId;
  }

  // shard_group - computed: true, optional: false, required: false
  public get shardGroup() {
    return this.getStringAttribute('shard_group');
  }

  // shard_space - computed: true, optional: true, required: false
  private _shardSpace?: string; 
  public get shardSpace() {
    return this.getStringAttribute('shard_space');
  }
  public set shardSpace(value: string) {
    this._shardSpace = value;
  }
  public resetShardSpace() {
    this._shardSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardSpaceInput() {
    return this._shardSpace;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // supporting_resource_id - computed: true, optional: false, required: false
  public get supportingResourceId() {
    return this.getStringAttribute('supporting_resource_id');
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ssl_certificate_expires - computed: true, optional: false, required: false
  public get timeSslCertificateExpires() {
    return this.getStringAttribute('time_ssl_certificate_expires');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // encryption_key_details - computed: false, optional: true, required: false
  private _encryptionKeyDetails = new GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetailsOutputReference(this, "encryption_key_details");
  public get encryptionKeyDetails() {
    return this._encryptionKeyDetails;
  }
  public putEncryptionKeyDetails(value: GloballyDistributedDatabaseShardedDatabaseShardDetailsEncryptionKeyDetails) {
    this._encryptionKeyDetails.internalValue = value;
  }
  public resetEncryptionKeyDetails() {
    this._encryptionKeyDetails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionKeyDetailsInput() {
    return this._encryptionKeyDetails.internalValue;
  }
}

export class GloballyDistributedDatabaseShardedDatabaseShardDetailsList extends cdktf.ComplexList {
  public internalValue? : GloballyDistributedDatabaseShardedDatabaseShardDetails[] | cdktf.IResolvable

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
  public get(index: number): GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference {
    return new GloballyDistributedDatabaseShardedDatabaseShardDetailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GloballyDistributedDatabaseShardedDatabaseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#create GloballyDistributedDatabaseShardedDatabase#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#delete GloballyDistributedDatabaseShardedDatabase#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#update GloballyDistributedDatabaseShardedDatabase#update}
  */
  readonly update?: string;
}

export function globallyDistributedDatabaseShardedDatabaseTimeoutsToTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function globallyDistributedDatabaseShardedDatabaseTimeoutsToHclTerraform(struct?: GloballyDistributedDatabaseShardedDatabaseTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GloballyDistributedDatabaseShardedDatabaseTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GloballyDistributedDatabaseShardedDatabaseTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database}
*/
export class GloballyDistributedDatabaseShardedDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_globally_distributed_database_sharded_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GloballyDistributedDatabaseShardedDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GloballyDistributedDatabaseShardedDatabase to import
  * @param importFromId The id of the existing GloballyDistributedDatabaseShardedDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GloballyDistributedDatabaseShardedDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_globally_distributed_database_sharded_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/globally_distributed_database_sharded_database oci_globally_distributed_database_sharded_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GloballyDistributedDatabaseShardedDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: GloballyDistributedDatabaseShardedDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_globally_distributed_database_sharded_database',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._caSignedCertificate = config.caSignedCertificate;
    this._characterSet = config.characterSet;
    this._chunks = config.chunks;
    this._clusterCertificateCommonName = config.clusterCertificateCommonName;
    this._compartmentId = config.compartmentId;
    this._configureGsmsTrigger = config.configureGsmsTrigger;
    this._configureGsmsTriggerIsLatestGsmImage = config.configureGsmsTriggerIsLatestGsmImage;
    this._configureGsmsTriggerOldGsmNames = config.configureGsmsTriggerOldGsmNames;
    this._configureShardingTrigger = config.configureShardingTrigger;
    this._dbDeploymentType = config.dbDeploymentType;
    this._dbVersion = config.dbVersion;
    this._dbWorkload = config.dbWorkload;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._downloadGsmCertificateSigningRequestTrigger = config.downloadGsmCertificateSigningRequestTrigger;
    this._freeformTags = config.freeformTags;
    this._generateGsmCertificateSigningRequestTrigger = config.generateGsmCertificateSigningRequestTrigger;
    this._generateWalletPassword = config.generateWalletPassword;
    this._generateWalletTrigger = config.generateWalletTrigger;
    this._getConnectionStringTrigger = config.fetchConnectionStringTrigger;
    this._id = config.id;
    this._listenerPort = config.listenerPort;
    this._listenerPortTls = config.listenerPortTls;
    this._ncharacterSet = config.ncharacterSet;
    this._onsPortLocal = config.onsPortLocal;
    this._onsPortRemote = config.onsPortRemote;
    this._prefix = config.prefix;
    this._replicationFactor = config.replicationFactor;
    this._replicationMethod = config.replicationMethod;
    this._replicationUnit = config.replicationUnit;
    this._shardingMethod = config.shardingMethod;
    this._startDatabaseTrigger = config.startDatabaseTrigger;
    this._stopDatabaseTrigger = config.stopDatabaseTrigger;
    this._uploadSignedCertificateAndGenerateWalletTrigger = config.uploadSignedCertificateAndGenerateWalletTrigger;
    this._validateNetworkTrigger = config.validateNetworkTrigger;
    this._catalogDetails.internalValue = config.catalogDetails;
    this._patchOperations.internalValue = config.patchOperations;
    this._shardDetails.internalValue = config.shardDetails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ca_signed_certificate - computed: false, optional: true, required: false
  private _caSignedCertificate?: string; 
  public get caSignedCertificate() {
    return this.getStringAttribute('ca_signed_certificate');
  }
  public set caSignedCertificate(value: string) {
    this._caSignedCertificate = value;
  }
  public resetCaSignedCertificate() {
    this._caSignedCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caSignedCertificateInput() {
    return this._caSignedCertificate;
  }

  // character_set - computed: false, optional: false, required: true
  private _characterSet?: string; 
  public get characterSet() {
    return this.getStringAttribute('character_set');
  }
  public set characterSet(value: string) {
    this._characterSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get characterSetInput() {
    return this._characterSet;
  }

  // chunks - computed: true, optional: true, required: false
  private _chunks?: number; 
  public get chunks() {
    return this.getNumberAttribute('chunks');
  }
  public set chunks(value: number) {
    this._chunks = value;
  }
  public resetChunks() {
    this._chunks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunksInput() {
    return this._chunks;
  }

  // cluster_certificate_common_name - computed: true, optional: true, required: false
  private _clusterCertificateCommonName?: string; 
  public get clusterCertificateCommonName() {
    return this.getStringAttribute('cluster_certificate_common_name');
  }
  public set clusterCertificateCommonName(value: string) {
    this._clusterCertificateCommonName = value;
  }
  public resetClusterCertificateCommonName() {
    this._clusterCertificateCommonName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterCertificateCommonNameInput() {
    return this._clusterCertificateCommonName;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // configure_gsms_trigger - computed: false, optional: true, required: false
  private _configureGsmsTrigger?: number; 
  public get configureGsmsTrigger() {
    return this.getNumberAttribute('configure_gsms_trigger');
  }
  public set configureGsmsTrigger(value: number) {
    this._configureGsmsTrigger = value;
  }
  public resetConfigureGsmsTrigger() {
    this._configureGsmsTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureGsmsTriggerInput() {
    return this._configureGsmsTrigger;
  }

  // configure_gsms_trigger_is_latest_gsm_image - computed: false, optional: true, required: false
  private _configureGsmsTriggerIsLatestGsmImage?: boolean | cdktf.IResolvable; 
  public get configureGsmsTriggerIsLatestGsmImage() {
    return this.getBooleanAttribute('configure_gsms_trigger_is_latest_gsm_image');
  }
  public set configureGsmsTriggerIsLatestGsmImage(value: boolean | cdktf.IResolvable) {
    this._configureGsmsTriggerIsLatestGsmImage = value;
  }
  public resetConfigureGsmsTriggerIsLatestGsmImage() {
    this._configureGsmsTriggerIsLatestGsmImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureGsmsTriggerIsLatestGsmImageInput() {
    return this._configureGsmsTriggerIsLatestGsmImage;
  }

  // configure_gsms_trigger_old_gsm_names - computed: false, optional: true, required: false
  private _configureGsmsTriggerOldGsmNames?: string[]; 
  public get configureGsmsTriggerOldGsmNames() {
    return this.getListAttribute('configure_gsms_trigger_old_gsm_names');
  }
  public set configureGsmsTriggerOldGsmNames(value: string[]) {
    this._configureGsmsTriggerOldGsmNames = value;
  }
  public resetConfigureGsmsTriggerOldGsmNames() {
    this._configureGsmsTriggerOldGsmNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureGsmsTriggerOldGsmNamesInput() {
    return this._configureGsmsTriggerOldGsmNames;
  }

  // configure_sharding_trigger - computed: false, optional: true, required: false
  private _configureShardingTrigger?: number; 
  public get configureShardingTrigger() {
    return this.getNumberAttribute('configure_sharding_trigger');
  }
  public set configureShardingTrigger(value: number) {
    this._configureShardingTrigger = value;
  }
  public resetConfigureShardingTrigger() {
    this._configureShardingTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configureShardingTriggerInput() {
    return this._configureShardingTrigger;
  }

  // connection_strings - computed: true, optional: false, required: false
  private _connectionStrings = new GloballyDistributedDatabaseShardedDatabaseConnectionStringsList(this, "connection_strings", false);
  public get connectionStrings() {
    return this._connectionStrings;
  }

  // db_deployment_type - computed: false, optional: false, required: true
  private _dbDeploymentType?: string; 
  public get dbDeploymentType() {
    return this.getStringAttribute('db_deployment_type');
  }
  public set dbDeploymentType(value: string) {
    this._dbDeploymentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbDeploymentTypeInput() {
    return this._dbDeploymentType;
  }

  // db_version - computed: false, optional: false, required: true
  private _dbVersion?: string; 
  public get dbVersion() {
    return this.getStringAttribute('db_version');
  }
  public set dbVersion(value: string) {
    this._dbVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbVersionInput() {
    return this._dbVersion;
  }

  // db_workload - computed: false, optional: false, required: true
  private _dbWorkload?: string; 
  public get dbWorkload() {
    return this.getStringAttribute('db_workload');
  }
  public set dbWorkload(value: string) {
    this._dbWorkload = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbWorkloadInput() {
    return this._dbWorkload;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // download_gsm_certificate_signing_request_trigger - computed: false, optional: true, required: false
  private _downloadGsmCertificateSigningRequestTrigger?: number; 
  public get downloadGsmCertificateSigningRequestTrigger() {
    return this.getNumberAttribute('download_gsm_certificate_signing_request_trigger');
  }
  public set downloadGsmCertificateSigningRequestTrigger(value: number) {
    this._downloadGsmCertificateSigningRequestTrigger = value;
  }
  public resetDownloadGsmCertificateSigningRequestTrigger() {
    this._downloadGsmCertificateSigningRequestTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get downloadGsmCertificateSigningRequestTriggerInput() {
    return this._downloadGsmCertificateSigningRequestTrigger;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
  }

  // generate_gsm_certificate_signing_request_trigger - computed: false, optional: true, required: false
  private _generateGsmCertificateSigningRequestTrigger?: number; 
  public get generateGsmCertificateSigningRequestTrigger() {
    return this.getNumberAttribute('generate_gsm_certificate_signing_request_trigger');
  }
  public set generateGsmCertificateSigningRequestTrigger(value: number) {
    this._generateGsmCertificateSigningRequestTrigger = value;
  }
  public resetGenerateGsmCertificateSigningRequestTrigger() {
    this._generateGsmCertificateSigningRequestTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateGsmCertificateSigningRequestTriggerInput() {
    return this._generateGsmCertificateSigningRequestTrigger;
  }

  // generate_wallet_password - computed: false, optional: true, required: false
  private _generateWalletPassword?: string; 
  public get generateWalletPassword() {
    return this.getStringAttribute('generate_wallet_password');
  }
  public set generateWalletPassword(value: string) {
    this._generateWalletPassword = value;
  }
  public resetGenerateWalletPassword() {
    this._generateWalletPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateWalletPasswordInput() {
    return this._generateWalletPassword;
  }

  // generate_wallet_trigger - computed: false, optional: true, required: false
  private _generateWalletTrigger?: number; 
  public get generateWalletTrigger() {
    return this.getNumberAttribute('generate_wallet_trigger');
  }
  public set generateWalletTrigger(value: number) {
    this._generateWalletTrigger = value;
  }
  public resetGenerateWalletTrigger() {
    this._generateWalletTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateWalletTriggerInput() {
    return this._generateWalletTrigger;
  }

  // get_connection_string_trigger - computed: false, optional: true, required: false
  private _getConnectionStringTrigger?: number; 
  public get fetchConnectionStringTrigger() {
    return this.getNumberAttribute('get_connection_string_trigger');
  }
  public set fetchConnectionStringTrigger(value: number) {
    this._getConnectionStringTrigger = value;
  }
  public resetFetchConnectionStringTrigger() {
    this._getConnectionStringTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchConnectionStringTriggerInput() {
    return this._getConnectionStringTrigger;
  }

  // gsms - computed: true, optional: false, required: false
  private _gsms = new GloballyDistributedDatabaseShardedDatabaseGsmsList(this, "gsms", false);
  public get gsms() {
    return this._gsms;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // lifecycle_state - computed: true, optional: false, required: false
  public get lifecycleState() {
    return this.getStringAttribute('lifecycle_state');
  }

  // lifecycle_state_details - computed: true, optional: false, required: false
  public get lifecycleStateDetails() {
    return this.getStringAttribute('lifecycle_state_details');
  }

  // listener_port - computed: false, optional: false, required: true
  private _listenerPort?: number; 
  public get listenerPort() {
    return this.getNumberAttribute('listener_port');
  }
  public set listenerPort(value: number) {
    this._listenerPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortInput() {
    return this._listenerPort;
  }

  // listener_port_tls - computed: false, optional: false, required: true
  private _listenerPortTls?: number; 
  public get listenerPortTls() {
    return this.getNumberAttribute('listener_port_tls');
  }
  public set listenerPortTls(value: number) {
    this._listenerPortTls = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listenerPortTlsInput() {
    return this._listenerPortTls;
  }

  // ncharacter_set - computed: false, optional: false, required: true
  private _ncharacterSet?: string; 
  public get ncharacterSet() {
    return this.getStringAttribute('ncharacter_set');
  }
  public set ncharacterSet(value: string) {
    this._ncharacterSet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ncharacterSetInput() {
    return this._ncharacterSet;
  }

  // ons_port_local - computed: false, optional: false, required: true
  private _onsPortLocal?: number; 
  public get onsPortLocal() {
    return this.getNumberAttribute('ons_port_local');
  }
  public set onsPortLocal(value: number) {
    this._onsPortLocal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onsPortLocalInput() {
    return this._onsPortLocal;
  }

  // ons_port_remote - computed: false, optional: false, required: true
  private _onsPortRemote?: number; 
  public get onsPortRemote() {
    return this.getNumberAttribute('ons_port_remote');
  }
  public set onsPortRemote(value: number) {
    this._onsPortRemote = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onsPortRemoteInput() {
    return this._onsPortRemote;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // private_endpoint - computed: true, optional: false, required: false
  public get privateEndpoint() {
    return this.getStringAttribute('private_endpoint');
  }

  // replication_factor - computed: true, optional: true, required: false
  private _replicationFactor?: number; 
  public get replicationFactor() {
    return this.getNumberAttribute('replication_factor');
  }
  public set replicationFactor(value: number) {
    this._replicationFactor = value;
  }
  public resetReplicationFactor() {
    this._replicationFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationFactorInput() {
    return this._replicationFactor;
  }

  // replication_method - computed: true, optional: true, required: false
  private _replicationMethod?: string; 
  public get replicationMethod() {
    return this.getStringAttribute('replication_method');
  }
  public set replicationMethod(value: string) {
    this._replicationMethod = value;
  }
  public resetReplicationMethod() {
    this._replicationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationMethodInput() {
    return this._replicationMethod;
  }

  // replication_unit - computed: true, optional: true, required: false
  private _replicationUnit?: number; 
  public get replicationUnit() {
    return this.getNumberAttribute('replication_unit');
  }
  public set replicationUnit(value: number) {
    this._replicationUnit = value;
  }
  public resetReplicationUnit() {
    this._replicationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationUnitInput() {
    return this._replicationUnit;
  }

  // sharded_database_id - computed: true, optional: false, required: false
  public get shardedDatabaseId() {
    return this.getStringAttribute('sharded_database_id');
  }

  // sharding_method - computed: false, optional: false, required: true
  private _shardingMethod?: string; 
  public get shardingMethod() {
    return this.getStringAttribute('sharding_method');
  }
  public set shardingMethod(value: string) {
    this._shardingMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingMethodInput() {
    return this._shardingMethod;
  }

  // start_database_trigger - computed: false, optional: true, required: false
  private _startDatabaseTrigger?: number; 
  public get startDatabaseTrigger() {
    return this.getNumberAttribute('start_database_trigger');
  }
  public set startDatabaseTrigger(value: number) {
    this._startDatabaseTrigger = value;
  }
  public resetStartDatabaseTrigger() {
    this._startDatabaseTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDatabaseTriggerInput() {
    return this._startDatabaseTrigger;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // stop_database_trigger - computed: false, optional: true, required: false
  private _stopDatabaseTrigger?: number; 
  public get stopDatabaseTrigger() {
    return this.getNumberAttribute('stop_database_trigger');
  }
  public set stopDatabaseTrigger(value: number) {
    this._stopDatabaseTrigger = value;
  }
  public resetStopDatabaseTrigger() {
    this._stopDatabaseTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopDatabaseTriggerInput() {
    return this._stopDatabaseTrigger;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // time_zone - computed: true, optional: false, required: false
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }

  // upload_signed_certificate_and_generate_wallet_trigger - computed: false, optional: true, required: false
  private _uploadSignedCertificateAndGenerateWalletTrigger?: number; 
  public get uploadSignedCertificateAndGenerateWalletTrigger() {
    return this.getNumberAttribute('upload_signed_certificate_and_generate_wallet_trigger');
  }
  public set uploadSignedCertificateAndGenerateWalletTrigger(value: number) {
    this._uploadSignedCertificateAndGenerateWalletTrigger = value;
  }
  public resetUploadSignedCertificateAndGenerateWalletTrigger() {
    this._uploadSignedCertificateAndGenerateWalletTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uploadSignedCertificateAndGenerateWalletTriggerInput() {
    return this._uploadSignedCertificateAndGenerateWalletTrigger;
  }

  // validate_network_trigger - computed: false, optional: true, required: false
  private _validateNetworkTrigger?: number; 
  public get validateNetworkTrigger() {
    return this.getNumberAttribute('validate_network_trigger');
  }
  public set validateNetworkTrigger(value: number) {
    this._validateNetworkTrigger = value;
  }
  public resetValidateNetworkTrigger() {
    this._validateNetworkTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateNetworkTriggerInput() {
    return this._validateNetworkTrigger;
  }

  // catalog_details - computed: false, optional: false, required: true
  private _catalogDetails = new GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList(this, "catalog_details", false);
  public get catalogDetails() {
    return this._catalogDetails;
  }
  public putCatalogDetails(value: GloballyDistributedDatabaseShardedDatabaseCatalogDetails[] | cdktf.IResolvable) {
    this._catalogDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogDetailsInput() {
    return this._catalogDetails.internalValue;
  }

  // patch_operations - computed: false, optional: true, required: false
  private _patchOperations = new GloballyDistributedDatabaseShardedDatabasePatchOperationsList(this, "patch_operations", false);
  public get patchOperations() {
    return this._patchOperations;
  }
  public putPatchOperations(value: GloballyDistributedDatabaseShardedDatabasePatchOperations[] | cdktf.IResolvable) {
    this._patchOperations.internalValue = value;
  }
  public resetPatchOperations() {
    this._patchOperations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchOperationsInput() {
    return this._patchOperations.internalValue;
  }

  // shard_details - computed: false, optional: false, required: true
  private _shardDetails = new GloballyDistributedDatabaseShardedDatabaseShardDetailsList(this, "shard_details", false);
  public get shardDetails() {
    return this._shardDetails;
  }
  public putShardDetails(value: GloballyDistributedDatabaseShardedDatabaseShardDetails[] | cdktf.IResolvable) {
    this._shardDetails.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardDetailsInput() {
    return this._shardDetails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GloballyDistributedDatabaseShardedDatabaseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GloballyDistributedDatabaseShardedDatabaseTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ca_signed_certificate: cdktf.stringToTerraform(this._caSignedCertificate),
      character_set: cdktf.stringToTerraform(this._characterSet),
      chunks: cdktf.numberToTerraform(this._chunks),
      cluster_certificate_common_name: cdktf.stringToTerraform(this._clusterCertificateCommonName),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      configure_gsms_trigger: cdktf.numberToTerraform(this._configureGsmsTrigger),
      configure_gsms_trigger_is_latest_gsm_image: cdktf.booleanToTerraform(this._configureGsmsTriggerIsLatestGsmImage),
      configure_gsms_trigger_old_gsm_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._configureGsmsTriggerOldGsmNames),
      configure_sharding_trigger: cdktf.numberToTerraform(this._configureShardingTrigger),
      db_deployment_type: cdktf.stringToTerraform(this._dbDeploymentType),
      db_version: cdktf.stringToTerraform(this._dbVersion),
      db_workload: cdktf.stringToTerraform(this._dbWorkload),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      download_gsm_certificate_signing_request_trigger: cdktf.numberToTerraform(this._downloadGsmCertificateSigningRequestTrigger),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      generate_gsm_certificate_signing_request_trigger: cdktf.numberToTerraform(this._generateGsmCertificateSigningRequestTrigger),
      generate_wallet_password: cdktf.stringToTerraform(this._generateWalletPassword),
      generate_wallet_trigger: cdktf.numberToTerraform(this._generateWalletTrigger),
      get_connection_string_trigger: cdktf.numberToTerraform(this._getConnectionStringTrigger),
      id: cdktf.stringToTerraform(this._id),
      listener_port: cdktf.numberToTerraform(this._listenerPort),
      listener_port_tls: cdktf.numberToTerraform(this._listenerPortTls),
      ncharacter_set: cdktf.stringToTerraform(this._ncharacterSet),
      ons_port_local: cdktf.numberToTerraform(this._onsPortLocal),
      ons_port_remote: cdktf.numberToTerraform(this._onsPortRemote),
      prefix: cdktf.stringToTerraform(this._prefix),
      replication_factor: cdktf.numberToTerraform(this._replicationFactor),
      replication_method: cdktf.stringToTerraform(this._replicationMethod),
      replication_unit: cdktf.numberToTerraform(this._replicationUnit),
      sharding_method: cdktf.stringToTerraform(this._shardingMethod),
      start_database_trigger: cdktf.numberToTerraform(this._startDatabaseTrigger),
      stop_database_trigger: cdktf.numberToTerraform(this._stopDatabaseTrigger),
      upload_signed_certificate_and_generate_wallet_trigger: cdktf.numberToTerraform(this._uploadSignedCertificateAndGenerateWalletTrigger),
      validate_network_trigger: cdktf.numberToTerraform(this._validateNetworkTrigger),
      catalog_details: cdktf.listMapper(globallyDistributedDatabaseShardedDatabaseCatalogDetailsToTerraform, true)(this._catalogDetails.internalValue),
      patch_operations: cdktf.listMapper(globallyDistributedDatabaseShardedDatabasePatchOperationsToTerraform, true)(this._patchOperations.internalValue),
      shard_details: cdktf.listMapper(globallyDistributedDatabaseShardedDatabaseShardDetailsToTerraform, true)(this._shardDetails.internalValue),
      timeouts: globallyDistributedDatabaseShardedDatabaseTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ca_signed_certificate: {
        value: cdktf.stringToHclTerraform(this._caSignedCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      character_set: {
        value: cdktf.stringToHclTerraform(this._characterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      chunks: {
        value: cdktf.numberToHclTerraform(this._chunks),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_certificate_common_name: {
        value: cdktf.stringToHclTerraform(this._clusterCertificateCommonName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configure_gsms_trigger: {
        value: cdktf.numberToHclTerraform(this._configureGsmsTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      configure_gsms_trigger_is_latest_gsm_image: {
        value: cdktf.booleanToHclTerraform(this._configureGsmsTriggerIsLatestGsmImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      configure_gsms_trigger_old_gsm_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._configureGsmsTriggerOldGsmNames),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      configure_sharding_trigger: {
        value: cdktf.numberToHclTerraform(this._configureShardingTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_deployment_type: {
        value: cdktf.stringToHclTerraform(this._dbDeploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_version: {
        value: cdktf.stringToHclTerraform(this._dbVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_workload: {
        value: cdktf.stringToHclTerraform(this._dbWorkload),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      download_gsm_certificate_signing_request_trigger: {
        value: cdktf.numberToHclTerraform(this._downloadGsmCertificateSigningRequestTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      generate_gsm_certificate_signing_request_trigger: {
        value: cdktf.numberToHclTerraform(this._generateGsmCertificateSigningRequestTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      generate_wallet_password: {
        value: cdktf.stringToHclTerraform(this._generateWalletPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      generate_wallet_trigger: {
        value: cdktf.numberToHclTerraform(this._generateWalletTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_connection_string_trigger: {
        value: cdktf.numberToHclTerraform(this._getConnectionStringTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      listener_port: {
        value: cdktf.numberToHclTerraform(this._listenerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      listener_port_tls: {
        value: cdktf.numberToHclTerraform(this._listenerPortTls),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ncharacter_set: {
        value: cdktf.stringToHclTerraform(this._ncharacterSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ons_port_local: {
        value: cdktf.numberToHclTerraform(this._onsPortLocal),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ons_port_remote: {
        value: cdktf.numberToHclTerraform(this._onsPortRemote),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_factor: {
        value: cdktf.numberToHclTerraform(this._replicationFactor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      replication_method: {
        value: cdktf.stringToHclTerraform(this._replicationMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_unit: {
        value: cdktf.numberToHclTerraform(this._replicationUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sharding_method: {
        value: cdktf.stringToHclTerraform(this._shardingMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_database_trigger: {
        value: cdktf.numberToHclTerraform(this._startDatabaseTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      stop_database_trigger: {
        value: cdktf.numberToHclTerraform(this._stopDatabaseTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      upload_signed_certificate_and_generate_wallet_trigger: {
        value: cdktf.numberToHclTerraform(this._uploadSignedCertificateAndGenerateWalletTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      validate_network_trigger: {
        value: cdktf.numberToHclTerraform(this._validateNetworkTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      catalog_details: {
        value: cdktf.listMapperHcl(globallyDistributedDatabaseShardedDatabaseCatalogDetailsToHclTerraform, true)(this._catalogDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GloballyDistributedDatabaseShardedDatabaseCatalogDetailsList",
      },
      patch_operations: {
        value: cdktf.listMapperHcl(globallyDistributedDatabaseShardedDatabasePatchOperationsToHclTerraform, true)(this._patchOperations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GloballyDistributedDatabaseShardedDatabasePatchOperationsList",
      },
      shard_details: {
        value: cdktf.listMapperHcl(globallyDistributedDatabaseShardedDatabaseShardDetailsToHclTerraform, true)(this._shardDetails.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GloballyDistributedDatabaseShardedDatabaseShardDetailsList",
      },
      timeouts: {
        value: globallyDistributedDatabaseShardedDatabaseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GloballyDistributedDatabaseShardedDatabaseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
