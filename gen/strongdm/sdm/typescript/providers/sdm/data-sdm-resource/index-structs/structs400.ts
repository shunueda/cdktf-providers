import * as cdktf from 'cdktf';
import { DataSdmResourceResourcesAerospikeList,
DataSdmResourceResourcesAksList,
DataSdmResourceResourcesAksBasicAuthList,
DataSdmResourceResourcesAksServiceAccountList,
DataSdmResourceResourcesAksServiceAccountUserImpersonationList,
DataSdmResourceResourcesAksUserImpersonationList,
DataSdmResourceResourcesAmazonEksList,
DataSdmResourceResourcesAmazonEksInstanceProfileList,
DataSdmResourceResourcesAmazonEksInstanceProfileUserImpersonationList,
DataSdmResourceResourcesAmazonEksUserImpersonationList,
DataSdmResourceResourcesAmazonEsList,
DataSdmResourceResourcesAmazonEsiamList,
DataSdmResourceResourcesAmazonmqAmqpList,
DataSdmResourceResourcesAmazonmqAmqp091List,
DataSdmResourceResourcesAthenaList,
DataSdmResourceResourcesAthenaIamList,
DataSdmResourceResourcesAuroraMysqlList,
DataSdmResourceResourcesAuroraMysqlIamList,
DataSdmResourceResourcesAuroraPostgresList,
DataSdmResourceResourcesAuroraPostgresIamList,
DataSdmResourceResourcesAwsList,
DataSdmResourceResourcesAwsConsoleList,
DataSdmResourceResourcesAwsConsoleStaticKeyPairList,
DataSdmResourceResourcesAwsInstanceProfileList,
DataSdmResourceResourcesAzureList,
DataSdmResourceResourcesAzureCertificateList,
DataSdmResourceResourcesAzureMysqlList,
DataSdmResourceResourcesAzureMysqlManagedIdentityList,
DataSdmResourceResourcesAzurePostgresList,
DataSdmResourceResourcesAzurePostgresManagedIdentityList,
DataSdmResourceResourcesBigQueryList,
DataSdmResourceResourcesCassandraList,
DataSdmResourceResourcesCitusList,
DataSdmResourceResourcesClickHouseHttpList,
DataSdmResourceResourcesClickHouseMySqlList,
DataSdmResourceResourcesClickHouseTcpList,
DataSdmResourceResourcesClustrixList,
DataSdmResourceResourcesCockroachList,
DataSdmResourceResourcesCouchbaseDatabaseList,
DataSdmResourceResourcesCouchbaseWebUiList,
DataSdmResourceResourcesDb2IList,
DataSdmResourceResourcesDb2LuwList,
DataSdmResourceResourcesDocumentDbHostList,
DataSdmResourceResourcesDocumentDbHostIamList,
DataSdmResourceResourcesDocumentDbReplicaSetList,
DataSdmResourceResourcesDocumentDbReplicaSetIamList,
DataSdmResourceResourcesDruidList,
DataSdmResourceResourcesDynamoDbList,
DataSdmResourceResourcesDynamoDbiamList,
DataSdmResourceResourcesElasticList,
DataSdmResourceResourcesElasticacheRedisList,
DataSdmResourceResourcesElasticacheRedisIamList,
DataSdmResourceResourcesEntraIdList,
DataSdmResourceResourcesGcpList,
DataSdmResourceResourcesGcpConsoleList,
DataSdmResourceResourcesGcpwifList,
DataSdmResourceResourcesGoogleGkeList,
DataSdmResourceResourcesGoogleGkeUserImpersonationList,
DataSdmResourceResourcesGreenplumList,
DataSdmResourceResourcesHttpAuthList,
DataSdmResourceResourcesHttpBasicAuthList,
DataSdmResourceResourcesHttpNoAuthList,
DataSdmResourceResourcesKubernetesList,
DataSdmResourceResourcesKubernetesBasicAuthList,
DataSdmResourceResourcesKubernetesPodIdentityList,
DataSdmResourceResourcesKubernetesServiceAccountList,
DataSdmResourceResourcesKubernetesServiceAccountUserImpersonationList,
DataSdmResourceResourcesKubernetesUserImpersonationList,
DataSdmResourceResourcesMariaList,
DataSdmResourceResourcesMcpList,
DataSdmResourceResourcesMemcachedList,
DataSdmResourceResourcesMemsqlList,
DataSdmResourceResourcesMongoHostList,
DataSdmResourceResourcesMongoLegacyHostList,
DataSdmResourceResourcesMongoLegacyReplicasetList,
DataSdmResourceResourcesMongoReplicaSetList,
DataSdmResourceResourcesMongoShardedClusterList,
DataSdmResourceResourcesMtlsMysqlList,
DataSdmResourceResourcesMtlsPostgresList,
DataSdmResourceResourcesMysqlList,
DataSdmResourceResourcesNeptuneList,
DataSdmResourceResourcesNeptuneIamList,
DataSdmResourceResourcesOktaGroupsList,
DataSdmResourceResourcesOracleList,
DataSdmResourceResourcesOracleNneList,
DataSdmResourceResourcesPostgresList,
DataSdmResourceResourcesPrestoList,
DataSdmResourceResourcesRabbitmqAmqp091List,
DataSdmResourceResourcesRawTcpList,
DataSdmResourceResourcesRdpList,
DataSdmResourceResourcesRdpCertList,
DataSdmResourceResourcesRdsPostgresIamList,
DataSdmResourceResourcesRedisList,
DataSdmResourceResourcesRedisClusterList,
DataSdmResourceResourcesRedshiftList,
DataSdmResourceResourcesRedshiftIamList,
DataSdmResourceResourcesRedshiftServerlessIamList,
DataSdmResourceResourcesSingleStoreList,
DataSdmResourceResourcesSnowflakeList,
DataSdmResourceResourcesSnowsightList } from './structs0'
export interface DataSdmResourceResourcesSqlServer {
}

export function dataSdmResourceResourcesSqlServerToTerraform(struct?: DataSdmResourceResourcesSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSqlServerToHclTerraform(struct?: DataSdmResourceResourcesSqlServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSqlServerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSqlServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSqlServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_encryption - computed: true, optional: false, required: false
  public get allowDeprecatedEncryption() {
    return this.getBooleanAttribute('allow_deprecated_encryption');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_database - computed: true, optional: false, required: false
  public get overrideDatabase() {
    return this.getBooleanAttribute('override_database');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSqlServerList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSqlServerOutputReference {
    return new DataSdmResourceResourcesSqlServerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSqlServerAzureAd {
}

export function dataSdmResourceResourcesSqlServerAzureAdToTerraform(struct?: DataSdmResourceResourcesSqlServerAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSqlServerAzureAdToHclTerraform(struct?: DataSdmResourceResourcesSqlServerAzureAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSqlServerAzureAdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSqlServerAzureAd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSqlServerAzureAd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_encryption - computed: true, optional: false, required: false
  public get allowDeprecatedEncryption() {
    return this.getBooleanAttribute('allow_deprecated_encryption');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_database - computed: true, optional: false, required: false
  public get overrideDatabase() {
    return this.getBooleanAttribute('override_database');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // secret - computed: true, optional: false, required: false
  public get secret() {
    return this.getStringAttribute('secret');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
}

export class DataSdmResourceResourcesSqlServerAzureAdList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSqlServerAzureAdOutputReference {
    return new DataSdmResourceResourcesSqlServerAzureAdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSqlServerKerberosAd {
}

export function dataSdmResourceResourcesSqlServerKerberosAdToTerraform(struct?: DataSdmResourceResourcesSqlServerKerberosAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSqlServerKerberosAdToHclTerraform(struct?: DataSdmResourceResourcesSqlServerKerberosAd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSqlServerKerberosAdOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSqlServerKerberosAd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSqlServerKerberosAd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_encryption - computed: true, optional: false, required: false
  public get allowDeprecatedEncryption() {
    return this.getBooleanAttribute('allow_deprecated_encryption');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // keytab - computed: true, optional: false, required: false
  public get keytab() {
    return this.getStringAttribute('keytab');
  }

  // krb_config - computed: true, optional: false, required: false
  public get krbConfig() {
    return this.getStringAttribute('krb_config');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_database - computed: true, optional: false, required: false
  public get overrideDatabase() {
    return this.getBooleanAttribute('override_database');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // realm - computed: true, optional: false, required: false
  public get realm() {
    return this.getStringAttribute('realm');
  }

  // schema - computed: true, optional: false, required: false
  public get schema() {
    return this.getStringAttribute('schema');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // server_spn - computed: true, optional: false, required: false
  public get serverSpn() {
    return this.getStringAttribute('server_spn');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSqlServerKerberosAdList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSqlServerKerberosAdOutputReference {
    return new DataSdmResourceResourcesSqlServerKerberosAdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSsh {
}

export function dataSdmResourceResourcesSshToTerraform(struct?: DataSdmResourceResourcesSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSshToHclTerraform(struct?: DataSdmResourceResourcesSsh): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSshOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSsh | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSsh | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_key_exchanges - computed: true, optional: false, required: false
  public get allowDeprecatedKeyExchanges() {
    return this.getBooleanAttribute('allow_deprecated_key_exchanges');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_forwarding - computed: true, optional: false, required: false
  public get portForwarding() {
    return this.getBooleanAttribute('port_forwarding');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSshList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSshOutputReference {
    return new DataSdmResourceResourcesSshOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSshCert {
}

export function dataSdmResourceResourcesSshCertToTerraform(struct?: DataSdmResourceResourcesSshCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSshCertToHclTerraform(struct?: DataSdmResourceResourcesSshCert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSshCertOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSshCert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSshCert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_key_exchanges - computed: true, optional: false, required: false
  public get allowDeprecatedKeyExchanges() {
    return this.getBooleanAttribute('allow_deprecated_key_exchanges');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_alias_healthcheck_username - computed: true, optional: false, required: false
  public get identityAliasHealthcheckUsername() {
    return this.getStringAttribute('identity_alias_healthcheck_username');
  }

  // identity_set_id - computed: true, optional: false, required: false
  public get identitySetId() {
    return this.getStringAttribute('identity_set_id');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_forwarding - computed: true, optional: false, required: false
  public get portForwarding() {
    return this.getBooleanAttribute('port_forwarding');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSshCertList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSshCertOutputReference {
    return new DataSdmResourceResourcesSshCertOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSshCustomerKey {
}

export function dataSdmResourceResourcesSshCustomerKeyToTerraform(struct?: DataSdmResourceResourcesSshCustomerKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSshCustomerKeyToHclTerraform(struct?: DataSdmResourceResourcesSshCustomerKey): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSshCustomerKeyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSshCustomerKey | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSshCustomerKey | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_key_exchanges - computed: true, optional: false, required: false
  public get allowDeprecatedKeyExchanges() {
    return this.getBooleanAttribute('allow_deprecated_key_exchanges');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // identity_alias_healthcheck_username - computed: true, optional: false, required: false
  public get identityAliasHealthcheckUsername() {
    return this.getStringAttribute('identity_alias_healthcheck_username');
  }

  // identity_set_id - computed: true, optional: false, required: false
  public get identitySetId() {
    return this.getStringAttribute('identity_set_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_forwarding - computed: true, optional: false, required: false
  public get portForwarding() {
    return this.getBooleanAttribute('port_forwarding');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSshCustomerKeyList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSshCustomerKeyOutputReference {
    return new DataSdmResourceResourcesSshCustomerKeyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSshPassword {
}

export function dataSdmResourceResourcesSshPasswordToTerraform(struct?: DataSdmResourceResourcesSshPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSshPasswordToHclTerraform(struct?: DataSdmResourceResourcesSshPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSshPasswordOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSshPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSshPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_deprecated_key_exchanges - computed: true, optional: false, required: false
  public get allowDeprecatedKeyExchanges() {
    return this.getBooleanAttribute('allow_deprecated_key_exchanges');
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_forwarding - computed: true, optional: false, required: false
  public get portForwarding() {
    return this.getBooleanAttribute('port_forwarding');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSshPasswordList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSshPasswordOutputReference {
    return new DataSdmResourceResourcesSshPasswordOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSybase {
}

export function dataSdmResourceResourcesSybaseToTerraform(struct?: DataSdmResourceResourcesSybase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSybaseToHclTerraform(struct?: DataSdmResourceResourcesSybase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSybaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSybase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSybase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSybaseList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSybaseOutputReference {
    return new DataSdmResourceResourcesSybaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesSybaseIq {
}

export function dataSdmResourceResourcesSybaseIqToTerraform(struct?: DataSdmResourceResourcesSybaseIq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesSybaseIqToHclTerraform(struct?: DataSdmResourceResourcesSybaseIq): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesSybaseIqOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesSybaseIq | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesSybaseIq | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesSybaseIqList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesSybaseIqOutputReference {
    return new DataSdmResourceResourcesSybaseIqOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesTeradata {
}

export function dataSdmResourceResourcesTeradataToTerraform(struct?: DataSdmResourceResourcesTeradata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesTeradataToHclTerraform(struct?: DataSdmResourceResourcesTeradata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesTeradataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesTeradata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesTeradata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesTeradataList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesTeradataOutputReference {
    return new DataSdmResourceResourcesTeradataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesTrino {
}

export function dataSdmResourceResourcesTrinoToTerraform(struct?: DataSdmResourceResourcesTrino): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesTrinoToHclTerraform(struct?: DataSdmResourceResourcesTrino): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesTrinoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesTrino | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesTrino | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tls_required - computed: true, optional: false, required: false
  public get tlsRequired() {
    return this.getBooleanAttribute('tls_required');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesTrinoList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesTrinoOutputReference {
    return new DataSdmResourceResourcesTrinoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResourcesVertica {
}

export function dataSdmResourceResourcesVerticaToTerraform(struct?: DataSdmResourceResourcesVertica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesVerticaToHclTerraform(struct?: DataSdmResourceResourcesVertica): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesVerticaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResourcesVertica | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResourcesVertica | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // bind_interface - computed: true, optional: false, required: false
  public get bindInterface() {
    return this.getStringAttribute('bind_interface');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // egress_filter - computed: true, optional: false, required: false
  public get egressFilter() {
    return this.getStringAttribute('egress_filter');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // port_override - computed: true, optional: false, required: false
  public get portOverride() {
    return this.getNumberAttribute('port_override');
  }

  // proxy_cluster_id - computed: true, optional: false, required: false
  public get proxyClusterId() {
    return this.getStringAttribute('proxy_cluster_id');
  }

  // secret_store_id - computed: true, optional: false, required: false
  public get secretStoreId() {
    return this.getStringAttribute('secret_store_id');
  }

  // subdomain - computed: true, optional: false, required: false
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataSdmResourceResourcesVerticaList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesVerticaOutputReference {
    return new DataSdmResourceResourcesVerticaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceResources {
}

export function dataSdmResourceResourcesToTerraform(struct?: DataSdmResourceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSdmResourceResourcesToHclTerraform(struct?: DataSdmResourceResources): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSdmResourceResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSdmResourceResources | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceResources | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // aerospike - computed: true, optional: false, required: false
  private _aerospike = new DataSdmResourceResourcesAerospikeList(this, "aerospike", false);
  public get aerospike() {
    return this._aerospike;
  }

  // aks - computed: true, optional: false, required: false
  private _aks = new DataSdmResourceResourcesAksList(this, "aks", false);
  public get aks() {
    return this._aks;
  }

  // aks_basic_auth - computed: true, optional: false, required: false
  private _aksBasicAuth = new DataSdmResourceResourcesAksBasicAuthList(this, "aks_basic_auth", false);
  public get aksBasicAuth() {
    return this._aksBasicAuth;
  }

  // aks_service_account - computed: true, optional: false, required: false
  private _aksServiceAccount = new DataSdmResourceResourcesAksServiceAccountList(this, "aks_service_account", false);
  public get aksServiceAccount() {
    return this._aksServiceAccount;
  }

  // aks_service_account_user_impersonation - computed: true, optional: false, required: false
  private _aksServiceAccountUserImpersonation = new DataSdmResourceResourcesAksServiceAccountUserImpersonationList(this, "aks_service_account_user_impersonation", false);
  public get aksServiceAccountUserImpersonation() {
    return this._aksServiceAccountUserImpersonation;
  }

  // aks_user_impersonation - computed: true, optional: false, required: false
  private _aksUserImpersonation = new DataSdmResourceResourcesAksUserImpersonationList(this, "aks_user_impersonation", false);
  public get aksUserImpersonation() {
    return this._aksUserImpersonation;
  }

  // amazon_eks - computed: true, optional: false, required: false
  private _amazonEks = new DataSdmResourceResourcesAmazonEksList(this, "amazon_eks", false);
  public get amazonEks() {
    return this._amazonEks;
  }

  // amazon_eks_instance_profile - computed: true, optional: false, required: false
  private _amazonEksInstanceProfile = new DataSdmResourceResourcesAmazonEksInstanceProfileList(this, "amazon_eks_instance_profile", false);
  public get amazonEksInstanceProfile() {
    return this._amazonEksInstanceProfile;
  }

  // amazon_eks_instance_profile_user_impersonation - computed: true, optional: false, required: false
  private _amazonEksInstanceProfileUserImpersonation = new DataSdmResourceResourcesAmazonEksInstanceProfileUserImpersonationList(this, "amazon_eks_instance_profile_user_impersonation", false);
  public get amazonEksInstanceProfileUserImpersonation() {
    return this._amazonEksInstanceProfileUserImpersonation;
  }

  // amazon_eks_user_impersonation - computed: true, optional: false, required: false
  private _amazonEksUserImpersonation = new DataSdmResourceResourcesAmazonEksUserImpersonationList(this, "amazon_eks_user_impersonation", false);
  public get amazonEksUserImpersonation() {
    return this._amazonEksUserImpersonation;
  }

  // amazon_es - computed: true, optional: false, required: false
  private _amazonEs = new DataSdmResourceResourcesAmazonEsList(this, "amazon_es", false);
  public get amazonEs() {
    return this._amazonEs;
  }

  // amazon_esiam - computed: true, optional: false, required: false
  private _amazonEsiam = new DataSdmResourceResourcesAmazonEsiamList(this, "amazon_esiam", false);
  public get amazonEsiam() {
    return this._amazonEsiam;
  }

  // amazonmq_amqp - computed: true, optional: false, required: false
  private _amazonmqAmqp = new DataSdmResourceResourcesAmazonmqAmqpList(this, "amazonmq_amqp", false);
  public get amazonmqAmqp() {
    return this._amazonmqAmqp;
  }

  // amazonmq_amqp_091 - computed: true, optional: false, required: false
  private _amazonmqAmqp091 = new DataSdmResourceResourcesAmazonmqAmqp091List(this, "amazonmq_amqp_091", false);
  public get amazonmqAmqp091() {
    return this._amazonmqAmqp091;
  }

  // athena - computed: true, optional: false, required: false
  private _athena = new DataSdmResourceResourcesAthenaList(this, "athena", false);
  public get athena() {
    return this._athena;
  }

  // athena_iam - computed: true, optional: false, required: false
  private _athenaIam = new DataSdmResourceResourcesAthenaIamList(this, "athena_iam", false);
  public get athenaIam() {
    return this._athenaIam;
  }

  // aurora_mysql - computed: true, optional: false, required: false
  private _auroraMysql = new DataSdmResourceResourcesAuroraMysqlList(this, "aurora_mysql", false);
  public get auroraMysql() {
    return this._auroraMysql;
  }

  // aurora_mysql_iam - computed: true, optional: false, required: false
  private _auroraMysqlIam = new DataSdmResourceResourcesAuroraMysqlIamList(this, "aurora_mysql_iam", false);
  public get auroraMysqlIam() {
    return this._auroraMysqlIam;
  }

  // aurora_postgres - computed: true, optional: false, required: false
  private _auroraPostgres = new DataSdmResourceResourcesAuroraPostgresList(this, "aurora_postgres", false);
  public get auroraPostgres() {
    return this._auroraPostgres;
  }

  // aurora_postgres_iam - computed: true, optional: false, required: false
  private _auroraPostgresIam = new DataSdmResourceResourcesAuroraPostgresIamList(this, "aurora_postgres_iam", false);
  public get auroraPostgresIam() {
    return this._auroraPostgresIam;
  }

  // aws - computed: true, optional: false, required: false
  private _aws = new DataSdmResourceResourcesAwsList(this, "aws", false);
  public get aws() {
    return this._aws;
  }

  // aws_console - computed: true, optional: false, required: false
  private _awsConsole = new DataSdmResourceResourcesAwsConsoleList(this, "aws_console", false);
  public get awsConsole() {
    return this._awsConsole;
  }

  // aws_console_static_key_pair - computed: true, optional: false, required: false
  private _awsConsoleStaticKeyPair = new DataSdmResourceResourcesAwsConsoleStaticKeyPairList(this, "aws_console_static_key_pair", false);
  public get awsConsoleStaticKeyPair() {
    return this._awsConsoleStaticKeyPair;
  }

  // aws_instance_profile - computed: true, optional: false, required: false
  private _awsInstanceProfile = new DataSdmResourceResourcesAwsInstanceProfileList(this, "aws_instance_profile", false);
  public get awsInstanceProfile() {
    return this._awsInstanceProfile;
  }

  // azure - computed: true, optional: false, required: false
  private _azure = new DataSdmResourceResourcesAzureList(this, "azure", false);
  public get azure() {
    return this._azure;
  }

  // azure_certificate - computed: true, optional: false, required: false
  private _azureCertificate = new DataSdmResourceResourcesAzureCertificateList(this, "azure_certificate", false);
  public get azureCertificate() {
    return this._azureCertificate;
  }

  // azure_mysql - computed: true, optional: false, required: false
  private _azureMysql = new DataSdmResourceResourcesAzureMysqlList(this, "azure_mysql", false);
  public get azureMysql() {
    return this._azureMysql;
  }

  // azure_mysql_managed_identity - computed: true, optional: false, required: false
  private _azureMysqlManagedIdentity = new DataSdmResourceResourcesAzureMysqlManagedIdentityList(this, "azure_mysql_managed_identity", false);
  public get azureMysqlManagedIdentity() {
    return this._azureMysqlManagedIdentity;
  }

  // azure_postgres - computed: true, optional: false, required: false
  private _azurePostgres = new DataSdmResourceResourcesAzurePostgresList(this, "azure_postgres", false);
  public get azurePostgres() {
    return this._azurePostgres;
  }

  // azure_postgres_managed_identity - computed: true, optional: false, required: false
  private _azurePostgresManagedIdentity = new DataSdmResourceResourcesAzurePostgresManagedIdentityList(this, "azure_postgres_managed_identity", false);
  public get azurePostgresManagedIdentity() {
    return this._azurePostgresManagedIdentity;
  }

  // big_query - computed: true, optional: false, required: false
  private _bigQuery = new DataSdmResourceResourcesBigQueryList(this, "big_query", false);
  public get bigQuery() {
    return this._bigQuery;
  }

  // cassandra - computed: true, optional: false, required: false
  private _cassandra = new DataSdmResourceResourcesCassandraList(this, "cassandra", false);
  public get cassandra() {
    return this._cassandra;
  }

  // citus - computed: true, optional: false, required: false
  private _citus = new DataSdmResourceResourcesCitusList(this, "citus", false);
  public get citus() {
    return this._citus;
  }

  // click_house_http - computed: true, optional: false, required: false
  private _clickHouseHttp = new DataSdmResourceResourcesClickHouseHttpList(this, "click_house_http", false);
  public get clickHouseHttp() {
    return this._clickHouseHttp;
  }

  // click_house_my_sql - computed: true, optional: false, required: false
  private _clickHouseMySql = new DataSdmResourceResourcesClickHouseMySqlList(this, "click_house_my_sql", false);
  public get clickHouseMySql() {
    return this._clickHouseMySql;
  }

  // click_house_tcp - computed: true, optional: false, required: false
  private _clickHouseTcp = new DataSdmResourceResourcesClickHouseTcpList(this, "click_house_tcp", false);
  public get clickHouseTcp() {
    return this._clickHouseTcp;
  }

  // clustrix - computed: true, optional: false, required: false
  private _clustrix = new DataSdmResourceResourcesClustrixList(this, "clustrix", false);
  public get clustrix() {
    return this._clustrix;
  }

  // cockroach - computed: true, optional: false, required: false
  private _cockroach = new DataSdmResourceResourcesCockroachList(this, "cockroach", false);
  public get cockroach() {
    return this._cockroach;
  }

  // couchbase_database - computed: true, optional: false, required: false
  private _couchbaseDatabase = new DataSdmResourceResourcesCouchbaseDatabaseList(this, "couchbase_database", false);
  public get couchbaseDatabase() {
    return this._couchbaseDatabase;
  }

  // couchbase_web_ui - computed: true, optional: false, required: false
  private _couchbaseWebUi = new DataSdmResourceResourcesCouchbaseWebUiList(this, "couchbase_web_ui", false);
  public get couchbaseWebUi() {
    return this._couchbaseWebUi;
  }

  // db_2_i - computed: true, optional: false, required: false
  private _db2I = new DataSdmResourceResourcesDb2IList(this, "db_2_i", false);
  public get db2I() {
    return this._db2I;
  }

  // db_2_luw - computed: true, optional: false, required: false
  private _db2Luw = new DataSdmResourceResourcesDb2LuwList(this, "db_2_luw", false);
  public get db2Luw() {
    return this._db2Luw;
  }

  // document_db_host - computed: true, optional: false, required: false
  private _documentDbHost = new DataSdmResourceResourcesDocumentDbHostList(this, "document_db_host", false);
  public get documentDbHost() {
    return this._documentDbHost;
  }

  // document_db_host_iam - computed: true, optional: false, required: false
  private _documentDbHostIam = new DataSdmResourceResourcesDocumentDbHostIamList(this, "document_db_host_iam", false);
  public get documentDbHostIam() {
    return this._documentDbHostIam;
  }

  // document_db_replica_set - computed: true, optional: false, required: false
  private _documentDbReplicaSet = new DataSdmResourceResourcesDocumentDbReplicaSetList(this, "document_db_replica_set", false);
  public get documentDbReplicaSet() {
    return this._documentDbReplicaSet;
  }

  // document_db_replica_set_iam - computed: true, optional: false, required: false
  private _documentDbReplicaSetIam = new DataSdmResourceResourcesDocumentDbReplicaSetIamList(this, "document_db_replica_set_iam", false);
  public get documentDbReplicaSetIam() {
    return this._documentDbReplicaSetIam;
  }

  // druid - computed: true, optional: false, required: false
  private _druid = new DataSdmResourceResourcesDruidList(this, "druid", false);
  public get druid() {
    return this._druid;
  }

  // dynamo_db - computed: true, optional: false, required: false
  private _dynamoDb = new DataSdmResourceResourcesDynamoDbList(this, "dynamo_db", false);
  public get dynamoDb() {
    return this._dynamoDb;
  }

  // dynamo_dbiam - computed: true, optional: false, required: false
  private _dynamoDbiam = new DataSdmResourceResourcesDynamoDbiamList(this, "dynamo_dbiam", false);
  public get dynamoDbiam() {
    return this._dynamoDbiam;
  }

  // elastic - computed: true, optional: false, required: false
  private _elastic = new DataSdmResourceResourcesElasticList(this, "elastic", false);
  public get elastic() {
    return this._elastic;
  }

  // elasticache_redis - computed: true, optional: false, required: false
  private _elasticacheRedis = new DataSdmResourceResourcesElasticacheRedisList(this, "elasticache_redis", false);
  public get elasticacheRedis() {
    return this._elasticacheRedis;
  }

  // elasticache_redis_iam - computed: true, optional: false, required: false
  private _elasticacheRedisIam = new DataSdmResourceResourcesElasticacheRedisIamList(this, "elasticache_redis_iam", false);
  public get elasticacheRedisIam() {
    return this._elasticacheRedisIam;
  }

  // entra_id - computed: true, optional: false, required: false
  private _entraId = new DataSdmResourceResourcesEntraIdList(this, "entra_id", false);
  public get entraId() {
    return this._entraId;
  }

  // gcp - computed: true, optional: false, required: false
  private _gcp = new DataSdmResourceResourcesGcpList(this, "gcp", false);
  public get gcp() {
    return this._gcp;
  }

  // gcp_console - computed: true, optional: false, required: false
  private _gcpConsole = new DataSdmResourceResourcesGcpConsoleList(this, "gcp_console", false);
  public get gcpConsole() {
    return this._gcpConsole;
  }

  // gcpwif - computed: true, optional: false, required: false
  private _gcpwif = new DataSdmResourceResourcesGcpwifList(this, "gcpwif", false);
  public get gcpwif() {
    return this._gcpwif;
  }

  // google_gke - computed: true, optional: false, required: false
  private _googleGke = new DataSdmResourceResourcesGoogleGkeList(this, "google_gke", false);
  public get googleGke() {
    return this._googleGke;
  }

  // google_gke_user_impersonation - computed: true, optional: false, required: false
  private _googleGkeUserImpersonation = new DataSdmResourceResourcesGoogleGkeUserImpersonationList(this, "google_gke_user_impersonation", false);
  public get googleGkeUserImpersonation() {
    return this._googleGkeUserImpersonation;
  }

  // greenplum - computed: true, optional: false, required: false
  private _greenplum = new DataSdmResourceResourcesGreenplumList(this, "greenplum", false);
  public get greenplum() {
    return this._greenplum;
  }

  // http_auth - computed: true, optional: false, required: false
  private _httpAuth = new DataSdmResourceResourcesHttpAuthList(this, "http_auth", false);
  public get httpAuth() {
    return this._httpAuth;
  }

  // http_basic_auth - computed: true, optional: false, required: false
  private _httpBasicAuth = new DataSdmResourceResourcesHttpBasicAuthList(this, "http_basic_auth", false);
  public get httpBasicAuth() {
    return this._httpBasicAuth;
  }

  // http_no_auth - computed: true, optional: false, required: false
  private _httpNoAuth = new DataSdmResourceResourcesHttpNoAuthList(this, "http_no_auth", false);
  public get httpNoAuth() {
    return this._httpNoAuth;
  }

  // kubernetes - computed: true, optional: false, required: false
  private _kubernetes = new DataSdmResourceResourcesKubernetesList(this, "kubernetes", false);
  public get kubernetes() {
    return this._kubernetes;
  }

  // kubernetes_basic_auth - computed: true, optional: false, required: false
  private _kubernetesBasicAuth = new DataSdmResourceResourcesKubernetesBasicAuthList(this, "kubernetes_basic_auth", false);
  public get kubernetesBasicAuth() {
    return this._kubernetesBasicAuth;
  }

  // kubernetes_pod_identity - computed: true, optional: false, required: false
  private _kubernetesPodIdentity = new DataSdmResourceResourcesKubernetesPodIdentityList(this, "kubernetes_pod_identity", false);
  public get kubernetesPodIdentity() {
    return this._kubernetesPodIdentity;
  }

  // kubernetes_service_account - computed: true, optional: false, required: false
  private _kubernetesServiceAccount = new DataSdmResourceResourcesKubernetesServiceAccountList(this, "kubernetes_service_account", false);
  public get kubernetesServiceAccount() {
    return this._kubernetesServiceAccount;
  }

  // kubernetes_service_account_user_impersonation - computed: true, optional: false, required: false
  private _kubernetesServiceAccountUserImpersonation = new DataSdmResourceResourcesKubernetesServiceAccountUserImpersonationList(this, "kubernetes_service_account_user_impersonation", false);
  public get kubernetesServiceAccountUserImpersonation() {
    return this._kubernetesServiceAccountUserImpersonation;
  }

  // kubernetes_user_impersonation - computed: true, optional: false, required: false
  private _kubernetesUserImpersonation = new DataSdmResourceResourcesKubernetesUserImpersonationList(this, "kubernetes_user_impersonation", false);
  public get kubernetesUserImpersonation() {
    return this._kubernetesUserImpersonation;
  }

  // maria - computed: true, optional: false, required: false
  private _maria = new DataSdmResourceResourcesMariaList(this, "maria", false);
  public get maria() {
    return this._maria;
  }

  // mcp - computed: true, optional: false, required: false
  private _mcp = new DataSdmResourceResourcesMcpList(this, "mcp", false);
  public get mcp() {
    return this._mcp;
  }

  // memcached - computed: true, optional: false, required: false
  private _memcached = new DataSdmResourceResourcesMemcachedList(this, "memcached", false);
  public get memcached() {
    return this._memcached;
  }

  // memsql - computed: true, optional: false, required: false
  private _memsql = new DataSdmResourceResourcesMemsqlList(this, "memsql", false);
  public get memsql() {
    return this._memsql;
  }

  // mongo_host - computed: true, optional: false, required: false
  private _mongoHost = new DataSdmResourceResourcesMongoHostList(this, "mongo_host", false);
  public get mongoHost() {
    return this._mongoHost;
  }

  // mongo_legacy_host - computed: true, optional: false, required: false
  private _mongoLegacyHost = new DataSdmResourceResourcesMongoLegacyHostList(this, "mongo_legacy_host", false);
  public get mongoLegacyHost() {
    return this._mongoLegacyHost;
  }

  // mongo_legacy_replicaset - computed: true, optional: false, required: false
  private _mongoLegacyReplicaset = new DataSdmResourceResourcesMongoLegacyReplicasetList(this, "mongo_legacy_replicaset", false);
  public get mongoLegacyReplicaset() {
    return this._mongoLegacyReplicaset;
  }

  // mongo_replica_set - computed: true, optional: false, required: false
  private _mongoReplicaSet = new DataSdmResourceResourcesMongoReplicaSetList(this, "mongo_replica_set", false);
  public get mongoReplicaSet() {
    return this._mongoReplicaSet;
  }

  // mongo_sharded_cluster - computed: true, optional: false, required: false
  private _mongoShardedCluster = new DataSdmResourceResourcesMongoShardedClusterList(this, "mongo_sharded_cluster", false);
  public get mongoShardedCluster() {
    return this._mongoShardedCluster;
  }

  // mtls_mysql - computed: true, optional: false, required: false
  private _mtlsMysql = new DataSdmResourceResourcesMtlsMysqlList(this, "mtls_mysql", false);
  public get mtlsMysql() {
    return this._mtlsMysql;
  }

  // mtls_postgres - computed: true, optional: false, required: false
  private _mtlsPostgres = new DataSdmResourceResourcesMtlsPostgresList(this, "mtls_postgres", false);
  public get mtlsPostgres() {
    return this._mtlsPostgres;
  }

  // mysql - computed: true, optional: false, required: false
  private _mysql = new DataSdmResourceResourcesMysqlList(this, "mysql", false);
  public get mysql() {
    return this._mysql;
  }

  // neptune - computed: true, optional: false, required: false
  private _neptune = new DataSdmResourceResourcesNeptuneList(this, "neptune", false);
  public get neptune() {
    return this._neptune;
  }

  // neptune_iam - computed: true, optional: false, required: false
  private _neptuneIam = new DataSdmResourceResourcesNeptuneIamList(this, "neptune_iam", false);
  public get neptuneIam() {
    return this._neptuneIam;
  }

  // okta_groups - computed: true, optional: false, required: false
  private _oktaGroups = new DataSdmResourceResourcesOktaGroupsList(this, "okta_groups", false);
  public get oktaGroups() {
    return this._oktaGroups;
  }

  // oracle - computed: true, optional: false, required: false
  private _oracle = new DataSdmResourceResourcesOracleList(this, "oracle", false);
  public get oracle() {
    return this._oracle;
  }

  // oracle_nne - computed: true, optional: false, required: false
  private _oracleNne = new DataSdmResourceResourcesOracleNneList(this, "oracle_nne", false);
  public get oracleNne() {
    return this._oracleNne;
  }

  // postgres - computed: true, optional: false, required: false
  private _postgres = new DataSdmResourceResourcesPostgresList(this, "postgres", false);
  public get postgres() {
    return this._postgres;
  }

  // presto - computed: true, optional: false, required: false
  private _presto = new DataSdmResourceResourcesPrestoList(this, "presto", false);
  public get presto() {
    return this._presto;
  }

  // rabbitmq_amqp_091 - computed: true, optional: false, required: false
  private _rabbitmqAmqp091 = new DataSdmResourceResourcesRabbitmqAmqp091List(this, "rabbitmq_amqp_091", false);
  public get rabbitmqAmqp091() {
    return this._rabbitmqAmqp091;
  }

  // raw_tcp - computed: true, optional: false, required: false
  private _rawTcp = new DataSdmResourceResourcesRawTcpList(this, "raw_tcp", false);
  public get rawTcp() {
    return this._rawTcp;
  }

  // rdp - computed: true, optional: false, required: false
  private _rdp = new DataSdmResourceResourcesRdpList(this, "rdp", false);
  public get rdp() {
    return this._rdp;
  }

  // rdp_cert - computed: true, optional: false, required: false
  private _rdpCert = new DataSdmResourceResourcesRdpCertList(this, "rdp_cert", false);
  public get rdpCert() {
    return this._rdpCert;
  }

  // rds_postgres_iam - computed: true, optional: false, required: false
  private _rdsPostgresIam = new DataSdmResourceResourcesRdsPostgresIamList(this, "rds_postgres_iam", false);
  public get rdsPostgresIam() {
    return this._rdsPostgresIam;
  }

  // redis - computed: true, optional: false, required: false
  private _redis = new DataSdmResourceResourcesRedisList(this, "redis", false);
  public get redis() {
    return this._redis;
  }

  // redis_cluster - computed: true, optional: false, required: false
  private _redisCluster = new DataSdmResourceResourcesRedisClusterList(this, "redis_cluster", false);
  public get redisCluster() {
    return this._redisCluster;
  }

  // redshift - computed: true, optional: false, required: false
  private _redshift = new DataSdmResourceResourcesRedshiftList(this, "redshift", false);
  public get redshift() {
    return this._redshift;
  }

  // redshift_iam - computed: true, optional: false, required: false
  private _redshiftIam = new DataSdmResourceResourcesRedshiftIamList(this, "redshift_iam", false);
  public get redshiftIam() {
    return this._redshiftIam;
  }

  // redshift_serverless_iam - computed: true, optional: false, required: false
  private _redshiftServerlessIam = new DataSdmResourceResourcesRedshiftServerlessIamList(this, "redshift_serverless_iam", false);
  public get redshiftServerlessIam() {
    return this._redshiftServerlessIam;
  }

  // single_store - computed: true, optional: false, required: false
  private _singleStore = new DataSdmResourceResourcesSingleStoreList(this, "single_store", false);
  public get singleStore() {
    return this._singleStore;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataSdmResourceResourcesSnowflakeList(this, "snowflake", false);
  public get snowflake() {
    return this._snowflake;
  }

  // snowsight - computed: true, optional: false, required: false
  private _snowsight = new DataSdmResourceResourcesSnowsightList(this, "snowsight", false);
  public get snowsight() {
    return this._snowsight;
  }

  // sql_server - computed: true, optional: false, required: false
  private _sqlServer = new DataSdmResourceResourcesSqlServerList(this, "sql_server", false);
  public get sqlServer() {
    return this._sqlServer;
  }

  // sql_server_azure_ad - computed: true, optional: false, required: false
  private _sqlServerAzureAd = new DataSdmResourceResourcesSqlServerAzureAdList(this, "sql_server_azure_ad", false);
  public get sqlServerAzureAd() {
    return this._sqlServerAzureAd;
  }

  // sql_server_kerberos_ad - computed: true, optional: false, required: false
  private _sqlServerKerberosAd = new DataSdmResourceResourcesSqlServerKerberosAdList(this, "sql_server_kerberos_ad", false);
  public get sqlServerKerberosAd() {
    return this._sqlServerKerberosAd;
  }

  // ssh - computed: true, optional: false, required: false
  private _ssh = new DataSdmResourceResourcesSshList(this, "ssh", false);
  public get ssh() {
    return this._ssh;
  }

  // ssh_cert - computed: true, optional: false, required: false
  private _sshCert = new DataSdmResourceResourcesSshCertList(this, "ssh_cert", false);
  public get sshCert() {
    return this._sshCert;
  }

  // ssh_customer_key - computed: true, optional: false, required: false
  private _sshCustomerKey = new DataSdmResourceResourcesSshCustomerKeyList(this, "ssh_customer_key", false);
  public get sshCustomerKey() {
    return this._sshCustomerKey;
  }

  // ssh_password - computed: true, optional: false, required: false
  private _sshPassword = new DataSdmResourceResourcesSshPasswordList(this, "ssh_password", false);
  public get sshPassword() {
    return this._sshPassword;
  }

  // sybase - computed: true, optional: false, required: false
  private _sybase = new DataSdmResourceResourcesSybaseList(this, "sybase", false);
  public get sybase() {
    return this._sybase;
  }

  // sybase_iq - computed: true, optional: false, required: false
  private _sybaseIq = new DataSdmResourceResourcesSybaseIqList(this, "sybase_iq", false);
  public get sybaseIq() {
    return this._sybaseIq;
  }

  // teradata - computed: true, optional: false, required: false
  private _teradata = new DataSdmResourceResourcesTeradataList(this, "teradata", false);
  public get teradata() {
    return this._teradata;
  }

  // trino - computed: true, optional: false, required: false
  private _trino = new DataSdmResourceResourcesTrinoList(this, "trino", false);
  public get trino() {
    return this._trino;
  }

  // vertica - computed: true, optional: false, required: false
  private _vertica = new DataSdmResourceResourcesVerticaList(this, "vertica", false);
  public get vertica() {
    return this._vertica;
  }
}

export class DataSdmResourceResourcesList extends cdktf.ComplexList {

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
  public get(index: number): DataSdmResourceResourcesOutputReference {
    return new DataSdmResourceResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSdmResourceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/strongdm/sdm/15.40.0/docs/data-sources/resource#default DataSdmResource#default}
  */
  readonly default?: string;
}

export function dataSdmResourceTimeoutsToTerraform(struct?: DataSdmResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default: cdktf.stringToTerraform(struct!.default),
  }
}


export function dataSdmResourceTimeoutsToHclTerraform(struct?: DataSdmResourceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSdmResourceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataSdmResourceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSdmResourceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._default = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._default = value.default;
    }
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }
}
