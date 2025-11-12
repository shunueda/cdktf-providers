// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudGlobalConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Connection Identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection#id DataDbtcloudGlobalConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: number;
}
export interface DataDbtcloudGlobalConnectionApacheSpark {
}

export function dataDbtcloudGlobalConnectionApacheSparkToTerraform(struct?: DataDbtcloudGlobalConnectionApacheSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionApacheSparkToHclTerraform(struct?: DataDbtcloudGlobalConnectionApacheSpark): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionApacheSparkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionApacheSpark | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionApacheSpark | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // auth - computed: true, optional: false, required: false
  public get auth() {
    return this.getStringAttribute('auth');
  }

  // cluster - computed: true, optional: false, required: false
  public get cluster() {
    return this.getStringAttribute('cluster');
  }

  // connect_retries - computed: true, optional: false, required: false
  public get connectRetries() {
    return this.getNumberAttribute('connect_retries');
  }

  // connect_timeout - computed: true, optional: false, required: false
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // organization - computed: true, optional: false, required: false
  public get organization() {
    return this.getStringAttribute('organization');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}
export interface DataDbtcloudGlobalConnectionAthena {
}

export function dataDbtcloudGlobalConnectionAthenaToTerraform(struct?: DataDbtcloudGlobalConnectionAthena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionAthenaToHclTerraform(struct?: DataDbtcloudGlobalConnectionAthena): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionAthenaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionAthena | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionAthena | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // num_boto3_retries - computed: true, optional: false, required: false
  public get numBoto3Retries() {
    return this.getNumberAttribute('num_boto3_retries');
  }

  // num_iceberg_retries - computed: true, optional: false, required: false
  public get numIcebergRetries() {
    return this.getNumberAttribute('num_iceberg_retries');
  }

  // num_retries - computed: true, optional: false, required: false
  public get numRetries() {
    return this.getNumberAttribute('num_retries');
  }

  // poll_interval - computed: true, optional: false, required: false
  public get pollInterval() {
    return this.getNumberAttribute('poll_interval');
  }

  // region_name - computed: true, optional: false, required: false
  public get regionName() {
    return this.getStringAttribute('region_name');
  }

  // s3_data_dir - computed: true, optional: false, required: false
  public get s3DataDir() {
    return this.getStringAttribute('s3_data_dir');
  }

  // s3_data_naming - computed: true, optional: false, required: false
  public get s3DataNaming() {
    return this.getStringAttribute('s3_data_naming');
  }

  // s3_staging_dir - computed: true, optional: false, required: false
  public get s3StagingDir() {
    return this.getStringAttribute('s3_staging_dir');
  }

  // s3_tmp_table_dir - computed: true, optional: false, required: false
  public get s3TmpTableDir() {
    return this.getStringAttribute('s3_tmp_table_dir');
  }

  // spark_work_group - computed: true, optional: false, required: false
  public get sparkWorkGroup() {
    return this.getStringAttribute('spark_work_group');
  }

  // work_group - computed: true, optional: false, required: false
  public get workGroup() {
    return this.getStringAttribute('work_group');
  }
}
export interface DataDbtcloudGlobalConnectionBigquery {
  /**
  * The GCP project ID to use for the connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection#gcp_project_id DataDbtcloudGlobalConnection#gcp_project_id}
  */
  readonly gcpProjectId: string;
}

export function dataDbtcloudGlobalConnectionBigqueryToTerraform(struct?: DataDbtcloudGlobalConnectionBigquery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcp_project_id: cdktf.stringToTerraform(struct!.gcpProjectId),
  }
}


export function dataDbtcloudGlobalConnectionBigqueryToHclTerraform(struct?: DataDbtcloudGlobalConnectionBigquery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcp_project_id: {
      value: cdktf.stringToHclTerraform(struct!.gcpProjectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDbtcloudGlobalConnectionBigqueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionBigquery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcpProjectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcpProjectId = this._gcpProjectId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionBigquery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcpProjectId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcpProjectId = value.gcpProjectId;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // application_secret - computed: true, optional: false, required: false
  public get applicationSecret() {
    return this.getStringAttribute('application_secret');
  }

  // auth_provider_x509_cert_url - computed: true, optional: false, required: false
  public get authProviderX509CertUrl() {
    return this.getStringAttribute('auth_provider_x509_cert_url');
  }

  // auth_uri - computed: true, optional: false, required: false
  public get authUri() {
    return this.getStringAttribute('auth_uri');
  }

  // client_email - computed: true, optional: false, required: false
  public get clientEmail() {
    return this.getStringAttribute('client_email');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_x509_cert_url - computed: true, optional: false, required: false
  public get clientX509CertUrl() {
    return this.getStringAttribute('client_x509_cert_url');
  }

  // dataproc_cluster_name - computed: true, optional: false, required: false
  public get dataprocClusterName() {
    return this.getStringAttribute('dataproc_cluster_name');
  }

  // dataproc_region - computed: true, optional: false, required: false
  public get dataprocRegion() {
    return this.getStringAttribute('dataproc_region');
  }

  // execution_project - computed: true, optional: false, required: false
  public get executionProject() {
    return this.getStringAttribute('execution_project');
  }

  // gcp_project_id - computed: true, optional: false, required: true
  private _gcpProjectId?: string; 
  public get gcpProjectId() {
    return this.getStringAttribute('gcp_project_id');
  }
  public set gcpProjectId(value: string) {
    this._gcpProjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectIdInput() {
    return this._gcpProjectId;
  }

  // gcs_bucket - computed: true, optional: false, required: false
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }

  // impersonate_service_account - computed: true, optional: false, required: false
  public get impersonateServiceAccount() {
    return this.getStringAttribute('impersonate_service_account');
  }

  // job_creation_timeout_seconds - computed: true, optional: false, required: false
  public get jobCreationTimeoutSeconds() {
    return this.getNumberAttribute('job_creation_timeout_seconds');
  }

  // job_retry_deadline_seconds - computed: true, optional: false, required: false
  public get jobRetryDeadlineSeconds() {
    return this.getNumberAttribute('job_retry_deadline_seconds');
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // maximum_bytes_billed - computed: true, optional: false, required: false
  public get maximumBytesBilled() {
    return this.getNumberAttribute('maximum_bytes_billed');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // private_key - computed: true, optional: false, required: false
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }

  // private_key_id - computed: true, optional: false, required: false
  public get privateKeyId() {
    return this.getStringAttribute('private_key_id');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // scopes - computed: true, optional: false, required: false
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }

  // timeout_seconds - computed: true, optional: false, required: false
  public get timeoutSeconds() {
    return this.getNumberAttribute('timeout_seconds');
  }

  // token_uri - computed: true, optional: false, required: false
  public get tokenUri() {
    return this.getStringAttribute('token_uri');
  }
}
export interface DataDbtcloudGlobalConnectionDatabricks {
}

export function dataDbtcloudGlobalConnectionDatabricksToTerraform(struct?: DataDbtcloudGlobalConnectionDatabricks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionDatabricksToHclTerraform(struct?: DataDbtcloudGlobalConnectionDatabricks): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionDatabricksOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionDatabricks | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionDatabricks | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // catalog - computed: true, optional: false, required: false
  public get catalog() {
    return this.getStringAttribute('catalog');
  }

  // client_id - computed: true, optional: false, required: false
  public get clientId() {
    return this.getStringAttribute('client_id');
  }

  // client_secret - computed: true, optional: false, required: false
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // http_path - computed: true, optional: false, required: false
  public get httpPath() {
    return this.getStringAttribute('http_path');
  }
}
export interface DataDbtcloudGlobalConnectionFabric {
}

export function dataDbtcloudGlobalConnectionFabricToTerraform(struct?: DataDbtcloudGlobalConnectionFabric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionFabricToHclTerraform(struct?: DataDbtcloudGlobalConnectionFabric): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionFabricOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionFabric | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionFabric | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // login_timeout - computed: true, optional: false, required: false
  public get loginTimeout() {
    return this.getNumberAttribute('login_timeout');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // query_timeout - computed: true, optional: false, required: false
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}
export interface DataDbtcloudGlobalConnectionPostgresSshTunnel {
}

export function dataDbtcloudGlobalConnectionPostgresSshTunnelToTerraform(struct?: DataDbtcloudGlobalConnectionPostgresSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionPostgresSshTunnelToHclTerraform(struct?: DataDbtcloudGlobalConnectionPostgresSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionPostgresSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionPostgresSshTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionPostgresSshTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataDbtcloudGlobalConnectionPostgres {
}

export function dataDbtcloudGlobalConnectionPostgresToTerraform(struct?: DataDbtcloudGlobalConnectionPostgres): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionPostgresToHclTerraform(struct?: DataDbtcloudGlobalConnectionPostgres): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionPostgresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionPostgres | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionPostgres | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssh_tunnel - computed: true, optional: false, required: false
  private _sshTunnel = new DataDbtcloudGlobalConnectionPostgresSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
}
export interface DataDbtcloudGlobalConnectionRedshiftSshTunnel {
}

export function dataDbtcloudGlobalConnectionRedshiftSshTunnelToTerraform(struct?: DataDbtcloudGlobalConnectionRedshiftSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionRedshiftSshTunnelToHclTerraform(struct?: DataDbtcloudGlobalConnectionRedshiftSshTunnel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionRedshiftSshTunnelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionRedshiftSshTunnel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionRedshiftSshTunnel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // public_key - computed: true, optional: false, required: false
  public get publicKey() {
    return this.getStringAttribute('public_key');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface DataDbtcloudGlobalConnectionRedshift {
  /**
  * The hostname of the data warehouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection#hostname DataDbtcloudGlobalConnection#hostname}
  */
  readonly hostname: string;
}

export function dataDbtcloudGlobalConnectionRedshiftToTerraform(struct?: DataDbtcloudGlobalConnectionRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostname: cdktf.stringToTerraform(struct!.hostname),
  }
}


export function dataDbtcloudGlobalConnectionRedshiftToHclTerraform(struct?: DataDbtcloudGlobalConnectionRedshift): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataDbtcloudGlobalConnectionRedshiftOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionRedshift | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionRedshift | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostname = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostname = value.hostname;
    }
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // hostname - computed: true, optional: false, required: true
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // ssh_tunnel - computed: true, optional: false, required: false
  private _sshTunnel = new DataDbtcloudGlobalConnectionRedshiftSshTunnelOutputReference(this, "ssh_tunnel");
  public get sshTunnel() {
    return this._sshTunnel;
  }
}
export interface DataDbtcloudGlobalConnectionSnowflake {
}

export function dataDbtcloudGlobalConnectionSnowflakeToTerraform(struct?: DataDbtcloudGlobalConnectionSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionSnowflakeToHclTerraform(struct?: DataDbtcloudGlobalConnectionSnowflake): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionSnowflakeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionSnowflake | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionSnowflake | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // account - computed: true, optional: false, required: false
  public get account() {
    return this.getStringAttribute('account');
  }

  // allow_sso - computed: true, optional: false, required: false
  public get allowSso() {
    return this.getBooleanAttribute('allow_sso');
  }

  // client_session_keep_alive - computed: true, optional: false, required: false
  public get clientSessionKeepAlive() {
    return this.getBooleanAttribute('client_session_keep_alive');
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // oauth_client_id - computed: true, optional: false, required: false
  public get oauthClientId() {
    return this.getStringAttribute('oauth_client_id');
  }

  // oauth_client_secret - computed: true, optional: false, required: false
  public get oauthClientSecret() {
    return this.getStringAttribute('oauth_client_secret');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}
export interface DataDbtcloudGlobalConnectionStarburst {
}

export function dataDbtcloudGlobalConnectionStarburstToTerraform(struct?: DataDbtcloudGlobalConnectionStarburst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionStarburstToHclTerraform(struct?: DataDbtcloudGlobalConnectionStarburst): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionStarburstOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionStarburst | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionStarburst | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }
}
export interface DataDbtcloudGlobalConnectionSynapse {
}

export function dataDbtcloudGlobalConnectionSynapseToTerraform(struct?: DataDbtcloudGlobalConnectionSynapse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionSynapseToHclTerraform(struct?: DataDbtcloudGlobalConnectionSynapse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionSynapseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionSynapse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionSynapse | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // database - computed: true, optional: false, required: false
  public get database() {
    return this.getStringAttribute('database');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // login_timeout - computed: true, optional: false, required: false
  public get loginTimeout() {
    return this.getNumberAttribute('login_timeout');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // query_timeout - computed: true, optional: false, required: false
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }
}
export interface DataDbtcloudGlobalConnectionTeradata {
}

export function dataDbtcloudGlobalConnectionTeradataToTerraform(struct?: DataDbtcloudGlobalConnectionTeradata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDbtcloudGlobalConnectionTeradataToHclTerraform(struct?: DataDbtcloudGlobalConnectionTeradata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDbtcloudGlobalConnectionTeradataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataDbtcloudGlobalConnectionTeradata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDbtcloudGlobalConnectionTeradata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // request_timeout - computed: true, optional: false, required: false
  public get requestTimeout() {
    return this.getNumberAttribute('request_timeout');
  }

  // retries - computed: true, optional: false, required: false
  public get retries() {
    return this.getNumberAttribute('retries');
  }

  // tmode - computed: true, optional: false, required: false
  public get tmode() {
    return this.getStringAttribute('tmode');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection dbtcloud_global_connection}
*/
export class DataDbtcloudGlobalConnection extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_global_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudGlobalConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudGlobalConnection to import
  * @param importFromId The id of the existing DataDbtcloudGlobalConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudGlobalConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_global_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.3.0/docs/data-sources/global_connection dbtcloud_global_connection} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudGlobalConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudGlobalConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_global_connection',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adapter_version - computed: true, optional: false, required: false
  public get adapterVersion() {
    return this.getStringAttribute('adapter_version');
  }

  // apache_spark - computed: true, optional: false, required: false
  private _apacheSpark = new DataDbtcloudGlobalConnectionApacheSparkOutputReference(this, "apache_spark");
  public get apacheSpark() {
    return this._apacheSpark;
  }

  // athena - computed: true, optional: false, required: false
  private _athena = new DataDbtcloudGlobalConnectionAthenaOutputReference(this, "athena");
  public get athena() {
    return this._athena;
  }

  // bigquery - computed: true, optional: false, required: false
  private _bigquery = new DataDbtcloudGlobalConnectionBigqueryOutputReference(this, "bigquery");
  public get bigquery() {
    return this._bigquery;
  }

  // databricks - computed: true, optional: false, required: false
  private _databricks = new DataDbtcloudGlobalConnectionDatabricksOutputReference(this, "databricks");
  public get databricks() {
    return this._databricks;
  }

  // fabric - computed: true, optional: false, required: false
  private _fabric = new DataDbtcloudGlobalConnectionFabricOutputReference(this, "fabric");
  public get fabric() {
    return this._fabric;
  }

  // id - computed: false, optional: false, required: true
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // is_ssh_tunnel_enabled - computed: true, optional: false, required: false
  public get isSshTunnelEnabled() {
    return this.getBooleanAttribute('is_ssh_tunnel_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // oauth_configuration_id - computed: true, optional: false, required: false
  public get oauthConfigurationId() {
    return this.getNumberAttribute('oauth_configuration_id');
  }

  // postgres - computed: true, optional: false, required: false
  private _postgres = new DataDbtcloudGlobalConnectionPostgresOutputReference(this, "postgres");
  public get postgres() {
    return this._postgres;
  }

  // private_link_endpoint_id - computed: true, optional: false, required: false
  public get privateLinkEndpointId() {
    return this.getStringAttribute('private_link_endpoint_id');
  }

  // redshift - computed: true, optional: false, required: false
  private _redshift = new DataDbtcloudGlobalConnectionRedshiftOutputReference(this, "redshift");
  public get redshift() {
    return this._redshift;
  }

  // snowflake - computed: true, optional: false, required: false
  private _snowflake = new DataDbtcloudGlobalConnectionSnowflakeOutputReference(this, "snowflake");
  public get snowflake() {
    return this._snowflake;
  }

  // starburst - computed: true, optional: false, required: false
  private _starburst = new DataDbtcloudGlobalConnectionStarburstOutputReference(this, "starburst");
  public get starburst() {
    return this._starburst;
  }

  // synapse - computed: true, optional: false, required: false
  private _synapse = new DataDbtcloudGlobalConnectionSynapseOutputReference(this, "synapse");
  public get synapse() {
    return this._synapse;
  }

  // teradata - computed: true, optional: false, required: false
  private _teradata = new DataDbtcloudGlobalConnectionTeradataOutputReference(this, "teradata");
  public get teradata() {
    return this._teradata;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
