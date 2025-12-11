// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataDataSourceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data source description information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#description WedataDataSource#description}
  */
  readonly description?: string;
  /**
  * Development environment data source configuration information, required if the project is in standard mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#dev_con_properties WedataDataSource#dev_con_properties}
  */
  readonly devConProperties?: string;
  /**
  * Data source display name, for visual viewing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#display_name WedataDataSource#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#id WedataDataSource#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Data source name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#name WedataDataSource#name}
  */
  readonly name: string;
  /**
  * Data source configuration information, stored in JSON KV format, with different KV storage information for each data source type.
  * 
  * > deployType: 
  * CONNSTR_PUBLICDB(Public network instance) 
  * CONNSTR_CVMDB(Self-built instance)
  * INSTANCE(Cloud instance)
  * 
  * ```
  * mysql: Self-built instance
  * {
  *     "deployType": "CONNSTR_CVMDB",
  *     "url": "jdbc:mysql://1.1.1.1:1111/database",
  *     "username": "root",
  *     "password": "root",
  *     "region": "ap-shanghai",
  *     "vpcId": "vpc-kprq42yo",
  *     "type": "MYSQL"
  * }
  * mysql: Cloud instance
  * {
  *     "instanceid": "cdb-12uxdo5e",
  *     "db": "db",
  *     "region": "ap-shanghai",
  *     "username": "msyql",
  *     "password": "mysql",
  *     "deployType": "INSTANCE",
  *     "type": "TENCENT_MYSQL"
  * }
  * sql_server: 
  * {
  *     "deployType": "CONNSTR_PUBLICDB",
  *     "url": "jdbc:sqlserver://1.1.1.1:223;DatabaseName=database",
  *     "username": "user_1",
  *     "password": "pass_2",
  *     "type": "SQLSERVER"
  * }
  * redis:
  *     redisType:
  *     -NO_ACCOUT(No account)
  *     -SELF_ACCOUNT(Custom account)
  * {
  *     "deployType": "CONNSTR_PUBLICDB",
  *     "username":""
  *     "password": "pass",
  *     "ip": "1.1.1.1",
  *     "port": "6379",
  *     "redisType": "NO_ACCOUT",
  *     "type": "REDIS"
  * }
  * oracle: 
  * {
  *     "deployType": "CONNSTR_CVMDB",
  *     "url": "jdbc:oracle:thin:@1.1.1.1:1521:prod",
  *     "username": "oracle",
  *     "password": "pass",
  *     "region": "ap-shanghai",
  *     "vpcId": "vpc-kprq42yo",
  *     "type": "ORACLE"
  * }
  * mongodb:
  *     advanceParams(Custom parameters, will be appended to the URL)
  * {
  *     "advanceParams": [
  *         {
  *             "key": "authSource",
  *             "value": "auth"
  *         }
  *     ],
  *     "db": "admin",
  *     "deployType": "CONNSTR_PUBLICDB",
  *     "username": "user",
  *     "password": "pass",
  *     "type": "MONGODB",
  *     "host": "1.1.1.1:9200"
  * }
  * postgresql:
  * {
  *     "deployType": "CONNSTR_PUBLICDB",
  *     "url": "jdbc:postgresql://1.1.1.1:1921/database",
  *     "username": "user",
  *     "password": "pass",
  *     "type": "POSTGRE"
  * }
  * kafka:
  *     authType:
  *         - sasl
  *         - jaas
  *         - sasl_plaintext
  *         - sasl_ssl
  *         - GSSAPI
  *     ssl:
  *         -PLAIN
  *         -GSSAPI
  * {
  *     "deployType": "CONNSTR_PUBLICDB",
  *     "host": "1.1.1.1:9092",
  *     "ssl": "GSSAPI",
  *     "authType": "sasl",
  *     "type": "KAFKA",
  *     "principal": "aaaa",
  *     "serviceName": "kafka"
  * }
  * 
  * cos:
  * {
  *     "region": "ap-shanghai",
  *     "deployType": "INSTANCE",
  *     "secretId": "aaaaa",
  *     "secretKey": "sssssss",
  *     "bucket": "aaa",
  *     "type": "COS"
  * }
  * 
  * ```.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#prod_con_properties WedataDataSource#prod_con_properties}
  */
  readonly prodConProperties: string;
  /**
  * Data source project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#project_id WedataDataSource#project_id}
  */
  readonly projectId: string;
  /**
  * Data source type: enumeration values.
  * 
  * - MYSQL
  * - TENCENT_MYSQL
  * - POSTGRE
  * - ORACLE
  * - SQLSERVER
  * - FTP
  * - HIVE
  * - HUDI
  * - HDFS
  * - ICEBERG
  * - KAFKA
  * - DTS_KAFKA
  * - HBASE
  * - SPARK
  * - TBASE
  * - DB2
  * - DM
  * - GAUSSDB
  * - GBASE
  * - IMPALA
  * - ES
  * - TENCENT_ES
  * - GREENPLUM
  * - SAP_HANA
  * - SFTP
  * - OCEANBASE
  * - CLICKHOUSE
  * - KUDU
  * - VERTICA
  * - REDIS
  * - COS
  * - DLC
  * - DORIS
  * - CKAFKA
  * - S3_DATAINSIGHT
  * - TDSQL
  * - TDSQL_MYSQL
  * - MONGODB
  * - TENCENT_MONGODB
  * - REST_API
  * - TiDB
  * - StarRocks
  * - Trino
  * - Kyuubi
  * - TCHOUSE_X
  * - TCHOUSE_P
  * - TCHOUSE_C
  * - TCHOUSE_D
  * - INFLUXDB
  * - BIG_QUERY
  * - SSH
  * - BLOB
  * - TDSQL_POSTGRE
  * - GDB
  * - TDENGINE
  * - TDSQLC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#type WedataDataSource#type}
  */
  readonly type: string;
  /**
  * dev_file_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#dev_file_upload WedataDataSource#dev_file_upload}
  */
  readonly devFileUpload?: WedataDataSourceDevFileUpload;
  /**
  * prod_file_upload block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#prod_file_upload WedataDataSource#prod_file_upload}
  */
  readonly prodFileUpload?: WedataDataSourceProdFileUpload;
}
export interface WedataDataSourceDevFileUpload {
  /**
  * core-site.xml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#core_site WedataDataSource#core_site}
  */
  readonly coreSite?: string;
  /**
  * hbase-site file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#hbase_site WedataDataSource#hbase_site}
  */
  readonly hbaseSite?: string;
  /**
  * hdfs-site.xml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#hdfs_site WedataDataSource#hdfs_site}
  */
  readonly hdfsSite?: string;
  /**
  * hive-site.xml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#hive_site WedataDataSource#hive_site}
  */
  readonly hiveSite?: string;
  /**
  * Keystore authentication file, default filename keystore.jks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#key_store WedataDataSource#key_store}
  */
  readonly keyStore?: string;
  /**
  * keytab file, default filename [data source name].keytab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#key_tab WedataDataSource#key_tab}
  */
  readonly keyTab?: string;
  /**
  * krb5.conf file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#krb5_conf WedataDataSource#krb5_conf}
  */
  readonly krb5Conf?: string;
  /**
  * Private key, default filename private_key.pem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#private_key WedataDataSource#private_key}
  */
  readonly privateKey?: string;
  /**
  * Public key, default filename public_key.pem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#public_key WedataDataSource#public_key}
  */
  readonly publicKey?: string;
  /**
  * Truststore authentication file, default filename truststore.jks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#trust_store WedataDataSource#trust_store}
  */
  readonly trustStore?: string;
}

export function wedataDataSourceDevFileUploadToTerraform(struct?: WedataDataSourceDevFileUploadOutputReference | WedataDataSourceDevFileUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_site: cdktf.stringToTerraform(struct!.coreSite),
    hbase_site: cdktf.stringToTerraform(struct!.hbaseSite),
    hdfs_site: cdktf.stringToTerraform(struct!.hdfsSite),
    hive_site: cdktf.stringToTerraform(struct!.hiveSite),
    key_store: cdktf.stringToTerraform(struct!.keyStore),
    key_tab: cdktf.stringToTerraform(struct!.keyTab),
    krb5_conf: cdktf.stringToTerraform(struct!.krb5Conf),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    trust_store: cdktf.stringToTerraform(struct!.trustStore),
  }
}


export function wedataDataSourceDevFileUploadToHclTerraform(struct?: WedataDataSourceDevFileUploadOutputReference | WedataDataSourceDevFileUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_site: {
      value: cdktf.stringToHclTerraform(struct!.coreSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_site: {
      value: cdktf.stringToHclTerraform(struct!.hbaseSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdfs_site: {
      value: cdktf.stringToHclTerraform(struct!.hdfsSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hive_site: {
      value: cdktf.stringToHclTerraform(struct!.hiveSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store: {
      value: cdktf.stringToHclTerraform(struct!.keyStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tab: {
      value: cdktf.stringToHclTerraform(struct!.keyTab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    krb5_conf: {
      value: cdktf.stringToHclTerraform(struct!.krb5Conf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store: {
      value: cdktf.stringToHclTerraform(struct!.trustStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDataSourceDevFileUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataDataSourceDevFileUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreSite = this._coreSite;
    }
    if (this._hbaseSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseSite = this._hbaseSite;
    }
    if (this._hdfsSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsSite = this._hdfsSite;
    }
    if (this._hiveSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveSite = this._hiveSite;
    }
    if (this._keyStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStore = this._keyStore;
    }
    if (this._keyTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTab = this._keyTab;
    }
    if (this._krb5Conf !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5Conf = this._krb5Conf;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._trustStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStore = this._trustStore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDataSourceDevFileUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreSite = undefined;
      this._hbaseSite = undefined;
      this._hdfsSite = undefined;
      this._hiveSite = undefined;
      this._keyStore = undefined;
      this._keyTab = undefined;
      this._krb5Conf = undefined;
      this._privateKey = undefined;
      this._publicKey = undefined;
      this._trustStore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreSite = value.coreSite;
      this._hbaseSite = value.hbaseSite;
      this._hdfsSite = value.hdfsSite;
      this._hiveSite = value.hiveSite;
      this._keyStore = value.keyStore;
      this._keyTab = value.keyTab;
      this._krb5Conf = value.krb5Conf;
      this._privateKey = value.privateKey;
      this._publicKey = value.publicKey;
      this._trustStore = value.trustStore;
    }
  }

  // core_site - computed: false, optional: true, required: false
  private _coreSite?: string; 
  public get coreSite() {
    return this.getStringAttribute('core_site');
  }
  public set coreSite(value: string) {
    this._coreSite = value;
  }
  public resetCoreSite() {
    this._coreSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSiteInput() {
    return this._coreSite;
  }

  // hbase_site - computed: false, optional: true, required: false
  private _hbaseSite?: string; 
  public get hbaseSite() {
    return this.getStringAttribute('hbase_site');
  }
  public set hbaseSite(value: string) {
    this._hbaseSite = value;
  }
  public resetHbaseSite() {
    this._hbaseSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseSiteInput() {
    return this._hbaseSite;
  }

  // hdfs_site - computed: false, optional: true, required: false
  private _hdfsSite?: string; 
  public get hdfsSite() {
    return this.getStringAttribute('hdfs_site');
  }
  public set hdfsSite(value: string) {
    this._hdfsSite = value;
  }
  public resetHdfsSite() {
    this._hdfsSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsSiteInput() {
    return this._hdfsSite;
  }

  // hive_site - computed: false, optional: true, required: false
  private _hiveSite?: string; 
  public get hiveSite() {
    return this.getStringAttribute('hive_site');
  }
  public set hiveSite(value: string) {
    this._hiveSite = value;
  }
  public resetHiveSite() {
    this._hiveSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveSiteInput() {
    return this._hiveSite;
  }

  // key_store - computed: false, optional: true, required: false
  private _keyStore?: string; 
  public get keyStore() {
    return this.getStringAttribute('key_store');
  }
  public set keyStore(value: string) {
    this._keyStore = value;
  }
  public resetKeyStore() {
    this._keyStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreInput() {
    return this._keyStore;
  }

  // key_tab - computed: false, optional: true, required: false
  private _keyTab?: string; 
  public get keyTab() {
    return this.getStringAttribute('key_tab');
  }
  public set keyTab(value: string) {
    this._keyTab = value;
  }
  public resetKeyTab() {
    this._keyTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTabInput() {
    return this._keyTab;
  }

  // krb5_conf - computed: false, optional: true, required: false
  private _krb5Conf?: string; 
  public get krb5Conf() {
    return this.getStringAttribute('krb5_conf');
  }
  public set krb5Conf(value: string) {
    this._krb5Conf = value;
  }
  public resetKrb5Conf() {
    this._krb5Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfInput() {
    return this._krb5Conf;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // trust_store - computed: false, optional: true, required: false
  private _trustStore?: string; 
  public get trustStore() {
    return this.getStringAttribute('trust_store');
  }
  public set trustStore(value: string) {
    this._trustStore = value;
  }
  public resetTrustStore() {
    this._trustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore;
  }
}
export interface WedataDataSourceProdFileUpload {
  /**
  * core-site.xml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#core_site WedataDataSource#core_site}
  */
  readonly coreSite?: string;
  /**
  * hbase-site file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#hbase_site WedataDataSource#hbase_site}
  */
  readonly hbaseSite?: string;
  /**
  * hdfs-site.xml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#hdfs_site WedataDataSource#hdfs_site}
  */
  readonly hdfsSite?: string;
  /**
  * hive-site.xml file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#hive_site WedataDataSource#hive_site}
  */
  readonly hiveSite?: string;
  /**
  * Keystore authentication file, default filename keystore.jks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#key_store WedataDataSource#key_store}
  */
  readonly keyStore?: string;
  /**
  * keytab file, default filename [data source name].keytab.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#key_tab WedataDataSource#key_tab}
  */
  readonly keyTab?: string;
  /**
  * krb5.conf file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#krb5_conf WedataDataSource#krb5_conf}
  */
  readonly krb5Conf?: string;
  /**
  * Private key, default filename private_key.pem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#private_key WedataDataSource#private_key}
  */
  readonly privateKey?: string;
  /**
  * Public key, default filename public_key.pem.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#public_key WedataDataSource#public_key}
  */
  readonly publicKey?: string;
  /**
  * Truststore authentication file, default filename truststore.jks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#trust_store WedataDataSource#trust_store}
  */
  readonly trustStore?: string;
}

export function wedataDataSourceProdFileUploadToTerraform(struct?: WedataDataSourceProdFileUploadOutputReference | WedataDataSourceProdFileUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    core_site: cdktf.stringToTerraform(struct!.coreSite),
    hbase_site: cdktf.stringToTerraform(struct!.hbaseSite),
    hdfs_site: cdktf.stringToTerraform(struct!.hdfsSite),
    hive_site: cdktf.stringToTerraform(struct!.hiveSite),
    key_store: cdktf.stringToTerraform(struct!.keyStore),
    key_tab: cdktf.stringToTerraform(struct!.keyTab),
    krb5_conf: cdktf.stringToTerraform(struct!.krb5Conf),
    private_key: cdktf.stringToTerraform(struct!.privateKey),
    public_key: cdktf.stringToTerraform(struct!.publicKey),
    trust_store: cdktf.stringToTerraform(struct!.trustStore),
  }
}


export function wedataDataSourceProdFileUploadToHclTerraform(struct?: WedataDataSourceProdFileUploadOutputReference | WedataDataSourceProdFileUpload): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    core_site: {
      value: cdktf.stringToHclTerraform(struct!.coreSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hbase_site: {
      value: cdktf.stringToHclTerraform(struct!.hbaseSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hdfs_site: {
      value: cdktf.stringToHclTerraform(struct!.hdfsSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hive_site: {
      value: cdktf.stringToHclTerraform(struct!.hiveSite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_store: {
      value: cdktf.stringToHclTerraform(struct!.keyStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_tab: {
      value: cdktf.stringToHclTerraform(struct!.keyTab),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    krb5_conf: {
      value: cdktf.stringToHclTerraform(struct!.krb5Conf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktf.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_key: {
      value: cdktf.stringToHclTerraform(struct!.publicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_store: {
      value: cdktf.stringToHclTerraform(struct!.trustStore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataDataSourceProdFileUploadOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataDataSourceProdFileUpload | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._coreSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.coreSite = this._coreSite;
    }
    if (this._hbaseSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hbaseSite = this._hbaseSite;
    }
    if (this._hdfsSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hdfsSite = this._hdfsSite;
    }
    if (this._hiveSite !== undefined) {
      hasAnyValues = true;
      internalValueResult.hiveSite = this._hiveSite;
    }
    if (this._keyStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStore = this._keyStore;
    }
    if (this._keyTab !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyTab = this._keyTab;
    }
    if (this._krb5Conf !== undefined) {
      hasAnyValues = true;
      internalValueResult.krb5Conf = this._krb5Conf;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._publicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicKey = this._publicKey;
    }
    if (this._trustStore !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustStore = this._trustStore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataDataSourceProdFileUpload | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._coreSite = undefined;
      this._hbaseSite = undefined;
      this._hdfsSite = undefined;
      this._hiveSite = undefined;
      this._keyStore = undefined;
      this._keyTab = undefined;
      this._krb5Conf = undefined;
      this._privateKey = undefined;
      this._publicKey = undefined;
      this._trustStore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._coreSite = value.coreSite;
      this._hbaseSite = value.hbaseSite;
      this._hdfsSite = value.hdfsSite;
      this._hiveSite = value.hiveSite;
      this._keyStore = value.keyStore;
      this._keyTab = value.keyTab;
      this._krb5Conf = value.krb5Conf;
      this._privateKey = value.privateKey;
      this._publicKey = value.publicKey;
      this._trustStore = value.trustStore;
    }
  }

  // core_site - computed: false, optional: true, required: false
  private _coreSite?: string; 
  public get coreSite() {
    return this.getStringAttribute('core_site');
  }
  public set coreSite(value: string) {
    this._coreSite = value;
  }
  public resetCoreSite() {
    this._coreSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get coreSiteInput() {
    return this._coreSite;
  }

  // hbase_site - computed: false, optional: true, required: false
  private _hbaseSite?: string; 
  public get hbaseSite() {
    return this.getStringAttribute('hbase_site');
  }
  public set hbaseSite(value: string) {
    this._hbaseSite = value;
  }
  public resetHbaseSite() {
    this._hbaseSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hbaseSiteInput() {
    return this._hbaseSite;
  }

  // hdfs_site - computed: false, optional: true, required: false
  private _hdfsSite?: string; 
  public get hdfsSite() {
    return this.getStringAttribute('hdfs_site');
  }
  public set hdfsSite(value: string) {
    this._hdfsSite = value;
  }
  public resetHdfsSite() {
    this._hdfsSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdfsSiteInput() {
    return this._hdfsSite;
  }

  // hive_site - computed: false, optional: true, required: false
  private _hiveSite?: string; 
  public get hiveSite() {
    return this.getStringAttribute('hive_site');
  }
  public set hiveSite(value: string) {
    this._hiveSite = value;
  }
  public resetHiveSite() {
    this._hiveSite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hiveSiteInput() {
    return this._hiveSite;
  }

  // key_store - computed: false, optional: true, required: false
  private _keyStore?: string; 
  public get keyStore() {
    return this.getStringAttribute('key_store');
  }
  public set keyStore(value: string) {
    this._keyStore = value;
  }
  public resetKeyStore() {
    this._keyStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStoreInput() {
    return this._keyStore;
  }

  // key_tab - computed: false, optional: true, required: false
  private _keyTab?: string; 
  public get keyTab() {
    return this.getStringAttribute('key_tab');
  }
  public set keyTab(value: string) {
    this._keyTab = value;
  }
  public resetKeyTab() {
    this._keyTab = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyTabInput() {
    return this._keyTab;
  }

  // krb5_conf - computed: false, optional: true, required: false
  private _krb5Conf?: string; 
  public get krb5Conf() {
    return this.getStringAttribute('krb5_conf');
  }
  public set krb5Conf(value: string) {
    this._krb5Conf = value;
  }
  public resetKrb5Conf() {
    this._krb5Conf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get krb5ConfInput() {
    return this._krb5Conf;
  }

  // private_key - computed: false, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // public_key - computed: false, optional: true, required: false
  private _publicKey?: string; 
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }
  public set publicKey(value: string) {
    this._publicKey = value;
  }
  public resetPublicKey() {
    this._publicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicKeyInput() {
    return this._publicKey;
  }

  // trust_store - computed: true, optional: true, required: false
  private _trustStore?: string; 
  public get trustStore() {
    return this.getStringAttribute('trust_store');
  }
  public set trustStore(value: string) {
    this._trustStore = value;
  }
  public resetTrustStore() {
    this._trustStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustStoreInput() {
    return this._trustStore;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source tencentcloud_wedata_data_source}
*/
export class WedataDataSource extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_data_source";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataDataSource resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataDataSource to import
  * @param importFromId The id of the existing WedataDataSource that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataDataSource to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_data_source", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_data_source tencentcloud_wedata_data_source} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataDataSourceConfig
  */
  public constructor(scope: Construct, id: string, config: WedataDataSourceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_data_source',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._devConProperties = config.devConProperties;
    this._displayName = config.displayName;
    this._id = config.id;
    this._name = config.name;
    this._prodConProperties = config.prodConProperties;
    this._projectId = config.projectId;
    this._type = config.type;
    this._devFileUpload.internalValue = config.devFileUpload;
    this._prodFileUpload.internalValue = config.prodFileUpload;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_source_id - computed: true, optional: false, required: false
  public get dataSourceId() {
    return this.getNumberAttribute('data_source_id');
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

  // dev_con_properties - computed: false, optional: true, required: false
  private _devConProperties?: string; 
  public get devConProperties() {
    return this.getStringAttribute('dev_con_properties');
  }
  public set devConProperties(value: string) {
    this._devConProperties = value;
  }
  public resetDevConProperties() {
    this._devConProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devConPropertiesInput() {
    return this._devConProperties;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // prod_con_properties - computed: false, optional: false, required: true
  private _prodConProperties?: string; 
  public get prodConProperties() {
    return this.getStringAttribute('prod_con_properties');
  }
  public set prodConProperties(value: string) {
    this._prodConProperties = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prodConPropertiesInput() {
    return this._prodConProperties;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // dev_file_upload - computed: false, optional: true, required: false
  private _devFileUpload = new WedataDataSourceDevFileUploadOutputReference(this, "dev_file_upload");
  public get devFileUpload() {
    return this._devFileUpload;
  }
  public putDevFileUpload(value: WedataDataSourceDevFileUpload) {
    this._devFileUpload.internalValue = value;
  }
  public resetDevFileUpload() {
    this._devFileUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devFileUploadInput() {
    return this._devFileUpload.internalValue;
  }

  // prod_file_upload - computed: false, optional: true, required: false
  private _prodFileUpload = new WedataDataSourceProdFileUploadOutputReference(this, "prod_file_upload");
  public get prodFileUpload() {
    return this._prodFileUpload;
  }
  public putProdFileUpload(value: WedataDataSourceProdFileUpload) {
    this._prodFileUpload.internalValue = value;
  }
  public resetProdFileUpload() {
    this._prodFileUpload.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prodFileUploadInput() {
    return this._prodFileUpload.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dev_con_properties: cdktf.stringToTerraform(this._devConProperties),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prod_con_properties: cdktf.stringToTerraform(this._prodConProperties),
      project_id: cdktf.stringToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      dev_file_upload: wedataDataSourceDevFileUploadToTerraform(this._devFileUpload.internalValue),
      prod_file_upload: wedataDataSourceProdFileUploadToTerraform(this._prodFileUpload.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_con_properties: {
        value: cdktf.stringToHclTerraform(this._devConProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prod_con_properties: {
        value: cdktf.stringToHclTerraform(this._prodConProperties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_file_upload: {
        value: wedataDataSourceDevFileUploadToHclTerraform(this._devFileUpload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataDataSourceDevFileUploadList",
      },
      prod_file_upload: {
        value: wedataDataSourceProdFileUploadToHclTerraform(this._prodFileUpload.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataDataSourceProdFileUploadList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
