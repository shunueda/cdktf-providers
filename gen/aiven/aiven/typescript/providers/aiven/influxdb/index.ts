// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InfluxdbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#additional_disk_space Influxdb#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#cloud_name Influxdb#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#disk_space Influxdb#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#id Influxdb#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#maintenance_window_dow Influxdb#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#maintenance_window_time Influxdb#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#plan Influxdb#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#project Influxdb#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#project_vpc_id Influxdb#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#service_name Influxdb#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#static_ips Influxdb#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#termination_protection Influxdb#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb Influxdb#influxdb}
  */
  readonly influxdb?: InfluxdbInfluxdb;
  /**
  * influxdb_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb_user_config Influxdb#influxdb_user_config}
  */
  readonly influxdbUserConfig?: InfluxdbInfluxdbUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#service_integrations Influxdb#service_integrations}
  */
  readonly serviceIntegrations?: InfluxdbServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#tag Influxdb#tag}
  */
  readonly tag?: InfluxdbTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#tech_emails Influxdb#tech_emails}
  */
  readonly techEmails?: InfluxdbTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#timeouts Influxdb#timeouts}
  */
  readonly timeouts?: InfluxdbTimeouts;
}
export interface InfluxdbComponents {
}

export function influxdbComponentsToTerraform(struct?: InfluxdbComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function influxdbComponentsToHclTerraform(struct?: InfluxdbComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class InfluxdbComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfluxdbComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbComponents | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // component - computed: true, optional: false, required: false
  public get component() {
    return this.getStringAttribute('component');
  }

  // connection_uri - computed: true, optional: false, required: false
  public get connectionUri() {
    return this.getStringAttribute('connection_uri');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // kafka_authentication_method - computed: true, optional: false, required: false
  public get kafkaAuthenticationMethod() {
    return this.getStringAttribute('kafka_authentication_method');
  }

  // kafka_ssl_ca - computed: true, optional: false, required: false
  public get kafkaSslCa() {
    return this.getStringAttribute('kafka_ssl_ca');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // route - computed: true, optional: false, required: false
  public get route() {
    return this.getStringAttribute('route');
  }

  // ssl - computed: true, optional: false, required: false
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }

  // usage - computed: true, optional: false, required: false
  public get usage() {
    return this.getStringAttribute('usage');
  }
}

export class InfluxdbComponentsList extends cdktf.ComplexList {

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
  public get(index: number): InfluxdbComponentsOutputReference {
    return new InfluxdbComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfluxdbInfluxdb {
  /**
  * InfluxDB server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#uris Influxdb#uris}
  */
  readonly uris?: string[];
}

export function influxdbInfluxdbToTerraform(struct?: InfluxdbInfluxdbOutputReference | InfluxdbInfluxdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function influxdbInfluxdbToHclTerraform(struct?: InfluxdbInfluxdbOutputReference | InfluxdbInfluxdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfluxdbInfluxdb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // uris - computed: true, optional: true, required: false
  private _uris?: string[]; 
  public get uris() {
    return this.getListAttribute('uris');
  }
  public set uris(value: string[]) {
    this._uris = value;
  }
  public resetUris() {
    this._uris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urisInput() {
    return this._uris;
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}
export interface InfluxdbInfluxdbUserConfigInfluxdb {
  /**
  * The maximum duration in seconds before a query is logged as a slow query. Setting this to 0 (the default) will never log slow queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#log_queries_after Influxdb#log_queries_after}
  */
  readonly logQueriesAfter?: number;
  /**
  * Maximum number of connections to InfluxDB. Setting this to 0 (default) means no limit. If using max_connection_limit, it is recommended to set the value to be large enough in order to not block clients unnecessarily.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#max_connection_limit Influxdb#max_connection_limit}
  */
  readonly maxConnectionLimit?: number;
  /**
  * The maximum number of rows returned in a non-chunked query. Setting this to 0 (the default) allows an unlimited number to be returned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#max_row_limit Influxdb#max_row_limit}
  */
  readonly maxRowLimit?: number;
  /**
  * The maximum number of `GROUP BY time()` buckets that can be processed in a query. Setting this to 0 (the default) allows an unlimited number to be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#max_select_buckets Influxdb#max_select_buckets}
  */
  readonly maxSelectBuckets?: number;
  /**
  * The maximum number of points that can be processed in a SELECT statement. Setting this to 0 (the default) allows an unlimited number to be processed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#max_select_point Influxdb#max_select_point}
  */
  readonly maxSelectPoint?: number;
  /**
  * Whether queries should be logged before execution. May log sensitive data contained within a query.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#query_log_enabled Influxdb#query_log_enabled}
  */
  readonly queryLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum duration in seconds before a query is killed. Setting this to 0 (the default) will never kill slow queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#query_timeout Influxdb#query_timeout}
  */
  readonly queryTimeout?: number;
}

export function influxdbInfluxdbUserConfigInfluxdbToTerraform(struct?: InfluxdbInfluxdbUserConfigInfluxdbOutputReference | InfluxdbInfluxdbUserConfigInfluxdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_queries_after: cdktf.numberToTerraform(struct!.logQueriesAfter),
    max_connection_limit: cdktf.numberToTerraform(struct!.maxConnectionLimit),
    max_row_limit: cdktf.numberToTerraform(struct!.maxRowLimit),
    max_select_buckets: cdktf.numberToTerraform(struct!.maxSelectBuckets),
    max_select_point: cdktf.numberToTerraform(struct!.maxSelectPoint),
    query_log_enabled: cdktf.booleanToTerraform(struct!.queryLogEnabled),
    query_timeout: cdktf.numberToTerraform(struct!.queryTimeout),
  }
}


export function influxdbInfluxdbUserConfigInfluxdbToHclTerraform(struct?: InfluxdbInfluxdbUserConfigInfluxdbOutputReference | InfluxdbInfluxdbUserConfigInfluxdb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_queries_after: {
      value: cdktf.numberToHclTerraform(struct!.logQueriesAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.maxConnectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_row_limit: {
      value: cdktf.numberToHclTerraform(struct!.maxRowLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_select_buckets: {
      value: cdktf.numberToHclTerraform(struct!.maxSelectBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_select_point: {
      value: cdktf.numberToHclTerraform(struct!.maxSelectPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_log_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.queryLogEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_timeout: {
      value: cdktf.numberToHclTerraform(struct!.queryTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbUserConfigInfluxdbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfluxdbInfluxdbUserConfigInfluxdb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logQueriesAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.logQueriesAfter = this._logQueriesAfter;
    }
    if (this._maxConnectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnectionLimit = this._maxConnectionLimit;
    }
    if (this._maxRowLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRowLimit = this._maxRowLimit;
    }
    if (this._maxSelectBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSelectBuckets = this._maxSelectBuckets;
    }
    if (this._maxSelectPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSelectPoint = this._maxSelectPoint;
    }
    if (this._queryLogEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryLogEnabled = this._queryLogEnabled;
    }
    if (this._queryTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryTimeout = this._queryTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdbUserConfigInfluxdb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logQueriesAfter = undefined;
      this._maxConnectionLimit = undefined;
      this._maxRowLimit = undefined;
      this._maxSelectBuckets = undefined;
      this._maxSelectPoint = undefined;
      this._queryLogEnabled = undefined;
      this._queryTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logQueriesAfter = value.logQueriesAfter;
      this._maxConnectionLimit = value.maxConnectionLimit;
      this._maxRowLimit = value.maxRowLimit;
      this._maxSelectBuckets = value.maxSelectBuckets;
      this._maxSelectPoint = value.maxSelectPoint;
      this._queryLogEnabled = value.queryLogEnabled;
      this._queryTimeout = value.queryTimeout;
    }
  }

  // log_queries_after - computed: false, optional: true, required: false
  private _logQueriesAfter?: number; 
  public get logQueriesAfter() {
    return this.getNumberAttribute('log_queries_after');
  }
  public set logQueriesAfter(value: number) {
    this._logQueriesAfter = value;
  }
  public resetLogQueriesAfter() {
    this._logQueriesAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logQueriesAfterInput() {
    return this._logQueriesAfter;
  }

  // max_connection_limit - computed: false, optional: true, required: false
  private _maxConnectionLimit?: number; 
  public get maxConnectionLimit() {
    return this.getNumberAttribute('max_connection_limit');
  }
  public set maxConnectionLimit(value: number) {
    this._maxConnectionLimit = value;
  }
  public resetMaxConnectionLimit() {
    this._maxConnectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionLimitInput() {
    return this._maxConnectionLimit;
  }

  // max_row_limit - computed: false, optional: true, required: false
  private _maxRowLimit?: number; 
  public get maxRowLimit() {
    return this.getNumberAttribute('max_row_limit');
  }
  public set maxRowLimit(value: number) {
    this._maxRowLimit = value;
  }
  public resetMaxRowLimit() {
    this._maxRowLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRowLimitInput() {
    return this._maxRowLimit;
  }

  // max_select_buckets - computed: false, optional: true, required: false
  private _maxSelectBuckets?: number; 
  public get maxSelectBuckets() {
    return this.getNumberAttribute('max_select_buckets');
  }
  public set maxSelectBuckets(value: number) {
    this._maxSelectBuckets = value;
  }
  public resetMaxSelectBuckets() {
    this._maxSelectBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSelectBucketsInput() {
    return this._maxSelectBuckets;
  }

  // max_select_point - computed: false, optional: true, required: false
  private _maxSelectPoint?: number; 
  public get maxSelectPoint() {
    return this.getNumberAttribute('max_select_point');
  }
  public set maxSelectPoint(value: number) {
    this._maxSelectPoint = value;
  }
  public resetMaxSelectPoint() {
    this._maxSelectPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSelectPointInput() {
    return this._maxSelectPoint;
  }

  // query_log_enabled - computed: false, optional: true, required: false
  private _queryLogEnabled?: boolean | cdktf.IResolvable; 
  public get queryLogEnabled() {
    return this.getBooleanAttribute('query_log_enabled');
  }
  public set queryLogEnabled(value: boolean | cdktf.IResolvable) {
    this._queryLogEnabled = value;
  }
  public resetQueryLogEnabled() {
    this._queryLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryLogEnabledInput() {
    return this._queryLogEnabled;
  }

  // query_timeout - computed: false, optional: true, required: false
  private _queryTimeout?: number; 
  public get queryTimeout() {
    return this.getNumberAttribute('query_timeout');
  }
  public set queryTimeout(value: number) {
    this._queryTimeout = value;
  }
  public resetQueryTimeout() {
    this._queryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTimeoutInput() {
    return this._queryTimeout;
  }
}
export interface InfluxdbInfluxdbUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#description Influxdb#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#network Influxdb#network}
  */
  readonly network: string;
}

export function influxdbInfluxdbUserConfigIpFilterObjectToTerraform(struct?: InfluxdbInfluxdbUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function influxdbInfluxdbUserConfigIpFilterObjectToHclTerraform(struct?: InfluxdbInfluxdbUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfluxdbInfluxdbUserConfigIpFilterObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdbUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._network = value.network;
    }
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

  // network - computed: false, optional: false, required: true
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }
}

export class InfluxdbInfluxdbUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : InfluxdbInfluxdbUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): InfluxdbInfluxdbUserConfigIpFilterObjectOutputReference {
    return new InfluxdbInfluxdbUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfluxdbInfluxdbUserConfigPrivateAccess {
  /**
  * Allow clients to connect to influxdb with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb Influxdb#influxdb}
  */
  readonly influxdb?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to user_backup with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#user_backup Influxdb#user_backup}
  */
  readonly userBackup?: boolean | cdktf.IResolvable;
}

export function influxdbInfluxdbUserConfigPrivateAccessToTerraform(struct?: InfluxdbInfluxdbUserConfigPrivateAccessOutputReference | InfluxdbInfluxdbUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    influxdb: cdktf.booleanToTerraform(struct!.influxdb),
    user_backup: cdktf.booleanToTerraform(struct!.userBackup),
  }
}


export function influxdbInfluxdbUserConfigPrivateAccessToHclTerraform(struct?: InfluxdbInfluxdbUserConfigPrivateAccessOutputReference | InfluxdbInfluxdbUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    influxdb: {
      value: cdktf.booleanToHclTerraform(struct!.influxdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_backup: {
      value: cdktf.booleanToHclTerraform(struct!.userBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfluxdbInfluxdbUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._influxdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb;
    }
    if (this._userBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBackup = this._userBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdbUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._influxdb = undefined;
      this._userBackup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._influxdb = value.influxdb;
      this._userBackup = value.userBackup;
    }
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb?: boolean | cdktf.IResolvable; 
  public get influxdb() {
    return this.getBooleanAttribute('influxdb');
  }
  public set influxdb(value: boolean | cdktf.IResolvable) {
    this._influxdb = value;
  }
  public resetInfluxdb() {
    this._influxdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb;
  }

  // user_backup - computed: false, optional: true, required: false
  private _userBackup?: boolean | cdktf.IResolvable; 
  public get userBackup() {
    return this.getBooleanAttribute('user_backup');
  }
  public set userBackup(value: boolean | cdktf.IResolvable) {
    this._userBackup = value;
  }
  public resetUserBackup() {
    this._userBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBackupInput() {
    return this._userBackup;
  }
}
export interface InfluxdbInfluxdbUserConfigPrivatelinkAccess {
  /**
  * Enable influxdb.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb Influxdb#influxdb}
  */
  readonly influxdb?: boolean | cdktf.IResolvable;
  /**
  * Enable user_backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#user_backup Influxdb#user_backup}
  */
  readonly userBackup?: boolean | cdktf.IResolvable;
}

export function influxdbInfluxdbUserConfigPrivatelinkAccessToTerraform(struct?: InfluxdbInfluxdbUserConfigPrivatelinkAccessOutputReference | InfluxdbInfluxdbUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    influxdb: cdktf.booleanToTerraform(struct!.influxdb),
    user_backup: cdktf.booleanToTerraform(struct!.userBackup),
  }
}


export function influxdbInfluxdbUserConfigPrivatelinkAccessToHclTerraform(struct?: InfluxdbInfluxdbUserConfigPrivatelinkAccessOutputReference | InfluxdbInfluxdbUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    influxdb: {
      value: cdktf.booleanToHclTerraform(struct!.influxdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_backup: {
      value: cdktf.booleanToHclTerraform(struct!.userBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfluxdbInfluxdbUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._influxdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb;
    }
    if (this._userBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBackup = this._userBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdbUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._influxdb = undefined;
      this._userBackup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._influxdb = value.influxdb;
      this._userBackup = value.userBackup;
    }
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb?: boolean | cdktf.IResolvable; 
  public get influxdb() {
    return this.getBooleanAttribute('influxdb');
  }
  public set influxdb(value: boolean | cdktf.IResolvable) {
    this._influxdb = value;
  }
  public resetInfluxdb() {
    this._influxdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb;
  }

  // user_backup - computed: false, optional: true, required: false
  private _userBackup?: boolean | cdktf.IResolvable; 
  public get userBackup() {
    return this.getBooleanAttribute('user_backup');
  }
  public set userBackup(value: boolean | cdktf.IResolvable) {
    this._userBackup = value;
  }
  public resetUserBackup() {
    this._userBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBackupInput() {
    return this._userBackup;
  }
}
export interface InfluxdbInfluxdbUserConfigPublicAccess {
  /**
  * Allow clients to connect to influxdb from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb Influxdb#influxdb}
  */
  readonly influxdb?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to user_backup from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#user_backup Influxdb#user_backup}
  */
  readonly userBackup?: boolean | cdktf.IResolvable;
}

export function influxdbInfluxdbUserConfigPublicAccessToTerraform(struct?: InfluxdbInfluxdbUserConfigPublicAccessOutputReference | InfluxdbInfluxdbUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    influxdb: cdktf.booleanToTerraform(struct!.influxdb),
    user_backup: cdktf.booleanToTerraform(struct!.userBackup),
  }
}


export function influxdbInfluxdbUserConfigPublicAccessToHclTerraform(struct?: InfluxdbInfluxdbUserConfigPublicAccessOutputReference | InfluxdbInfluxdbUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    influxdb: {
      value: cdktf.booleanToHclTerraform(struct!.influxdb),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    user_backup: {
      value: cdktf.booleanToHclTerraform(struct!.userBackup),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfluxdbInfluxdbUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._influxdb !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb;
    }
    if (this._userBackup !== undefined) {
      hasAnyValues = true;
      internalValueResult.userBackup = this._userBackup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdbUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._influxdb = undefined;
      this._userBackup = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._influxdb = value.influxdb;
      this._userBackup = value.userBackup;
    }
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb?: boolean | cdktf.IResolvable; 
  public get influxdb() {
    return this.getBooleanAttribute('influxdb');
  }
  public set influxdb(value: boolean | cdktf.IResolvable) {
    this._influxdb = value;
  }
  public resetInfluxdb() {
    this._influxdb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb;
  }

  // user_backup - computed: false, optional: true, required: false
  private _userBackup?: boolean | cdktf.IResolvable; 
  public get userBackup() {
    return this.getBooleanAttribute('user_backup');
  }
  public set userBackup(value: boolean | cdktf.IResolvable) {
    this._userBackup = value;
  }
  public resetUserBackup() {
    this._userBackup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userBackupInput() {
    return this._userBackup;
  }
}
export interface InfluxdbInfluxdbUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#additional_backup_regions Influxdb#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. When you set a custom domain for a service deployed in a VPC, the service certificate is only created for the public-* hostname and the custom domain. Example: `grafana.example.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#custom_domain Influxdb#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Enum: `1.8`, and newer. InfluxDB major version. Default: `1.8`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb_version Influxdb#influxdb_version}
  */
  readonly influxdbVersion?: string;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#ip_filter Influxdb#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#ip_filter_string Influxdb#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#project_to_fork_from Influxdb#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Name of the basebackup to restore in forked service. Example: `backup-20191112t091354293891z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#recovery_basebackup_name Influxdb#recovery_basebackup_name}
  */
  readonly recoveryBasebackupName?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#service_log Influxdb#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#service_to_fork_from Influxdb#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#static_ips Influxdb#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * influxdb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#influxdb Influxdb#influxdb}
  */
  readonly influxdb?: InfluxdbInfluxdbUserConfigInfluxdb;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#ip_filter_object Influxdb#ip_filter_object}
  */
  readonly ipFilterObject?: InfluxdbInfluxdbUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#private_access Influxdb#private_access}
  */
  readonly privateAccess?: InfluxdbInfluxdbUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#privatelink_access Influxdb#privatelink_access}
  */
  readonly privatelinkAccess?: InfluxdbInfluxdbUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#public_access Influxdb#public_access}
  */
  readonly publicAccess?: InfluxdbInfluxdbUserConfigPublicAccess;
}

export function influxdbInfluxdbUserConfigToTerraform(struct?: InfluxdbInfluxdbUserConfigOutputReference | InfluxdbInfluxdbUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    influxdb_version: cdktf.stringToTerraform(struct!.influxdbVersion),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_basebackup_name: cdktf.stringToTerraform(struct!.recoveryBasebackupName),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    influxdb: influxdbInfluxdbUserConfigInfluxdbToTerraform(struct!.influxdb),
    ip_filter_object: cdktf.listMapper(influxdbInfluxdbUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    private_access: influxdbInfluxdbUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: influxdbInfluxdbUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: influxdbInfluxdbUserConfigPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function influxdbInfluxdbUserConfigToHclTerraform(struct?: InfluxdbInfluxdbUserConfigOutputReference | InfluxdbInfluxdbUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_backup_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalBackupRegions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    custom_domain: {
      value: cdktf.stringToHclTerraform(struct!.customDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    influxdb_version: {
      value: cdktf.stringToHclTerraform(struct!.influxdbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    ip_filter_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipFilterString),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    project_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.projectToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recovery_basebackup_name: {
      value: cdktf.stringToHclTerraform(struct!.recoveryBasebackupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_log: {
      value: cdktf.booleanToHclTerraform(struct!.serviceLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.serviceToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    influxdb: {
      value: influxdbInfluxdbUserConfigInfluxdbToHclTerraform(struct!.influxdb),
      isBlock: true,
      type: "list",
      storageClassType: "InfluxdbInfluxdbUserConfigInfluxdbList",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(influxdbInfluxdbUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "InfluxdbInfluxdbUserConfigIpFilterObjectList",
    },
    private_access: {
      value: influxdbInfluxdbUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "InfluxdbInfluxdbUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: influxdbInfluxdbUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "InfluxdbInfluxdbUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: influxdbInfluxdbUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "InfluxdbInfluxdbUserConfigPublicAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbInfluxdbUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): InfluxdbInfluxdbUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._customDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.customDomain = this._customDomain;
    }
    if (this._influxdbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdbVersion = this._influxdbVersion;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._projectToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectToForkFrom = this._projectToForkFrom;
    }
    if (this._recoveryBasebackupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryBasebackupName = this._recoveryBasebackupName;
    }
    if (this._serviceLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceLog = this._serviceLog;
    }
    if (this._serviceToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToForkFrom = this._serviceToForkFrom;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._influxdb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.influxdb = this._influxdb?.internalValue;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._privatelinkAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privatelinkAccess = this._privatelinkAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbInfluxdbUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._customDomain = undefined;
      this._influxdbVersion = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryBasebackupName = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._influxdb.internalValue = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._customDomain = value.customDomain;
      this._influxdbVersion = value.influxdbVersion;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryBasebackupName = value.recoveryBasebackupName;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
      this._influxdb.internalValue = value.influxdb;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // additional_backup_regions - computed: false, optional: true, required: false
  private _additionalBackupRegions?: string[]; 
  public get additionalBackupRegions() {
    return this.getListAttribute('additional_backup_regions');
  }
  public set additionalBackupRegions(value: string[]) {
    this._additionalBackupRegions = value;
  }
  public resetAdditionalBackupRegions() {
    this._additionalBackupRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalBackupRegionsInput() {
    return this._additionalBackupRegions;
  }

  // custom_domain - computed: false, optional: true, required: false
  private _customDomain?: string; 
  public get customDomain() {
    return this.getStringAttribute('custom_domain');
  }
  public set customDomain(value: string) {
    this._customDomain = value;
  }
  public resetCustomDomain() {
    this._customDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customDomainInput() {
    return this._customDomain;
  }

  // influxdb_version - computed: false, optional: true, required: false
  private _influxdbVersion?: string; 
  public get influxdbVersion() {
    return this.getStringAttribute('influxdb_version');
  }
  public set influxdbVersion(value: string) {
    this._influxdbVersion = value;
  }
  public resetInfluxdbVersion() {
    this._influxdbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbVersionInput() {
    return this._influxdbVersion;
  }

  // ip_filter - computed: false, optional: true, required: false
  private _ipFilter?: string[]; 
  public get ipFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter'));
  }
  public set ipFilter(value: string[]) {
    this._ipFilter = value;
  }
  public resetIpFilter() {
    this._ipFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterInput() {
    return this._ipFilter;
  }

  // ip_filter_string - computed: false, optional: true, required: false
  private _ipFilterString?: string[]; 
  public get ipFilterString() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_filter_string'));
  }
  public set ipFilterString(value: string[]) {
    this._ipFilterString = value;
  }
  public resetIpFilterString() {
    this._ipFilterString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterStringInput() {
    return this._ipFilterString;
  }

  // project_to_fork_from - computed: false, optional: true, required: false
  private _projectToForkFrom?: string; 
  public get projectToForkFrom() {
    return this.getStringAttribute('project_to_fork_from');
  }
  public set projectToForkFrom(value: string) {
    this._projectToForkFrom = value;
  }
  public resetProjectToForkFrom() {
    this._projectToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectToForkFromInput() {
    return this._projectToForkFrom;
  }

  // recovery_basebackup_name - computed: false, optional: true, required: false
  private _recoveryBasebackupName?: string; 
  public get recoveryBasebackupName() {
    return this.getStringAttribute('recovery_basebackup_name');
  }
  public set recoveryBasebackupName(value: string) {
    this._recoveryBasebackupName = value;
  }
  public resetRecoveryBasebackupName() {
    this._recoveryBasebackupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryBasebackupNameInput() {
    return this._recoveryBasebackupName;
  }

  // service_log - computed: false, optional: true, required: false
  private _serviceLog?: boolean | cdktf.IResolvable; 
  public get serviceLog() {
    return this.getBooleanAttribute('service_log');
  }
  public set serviceLog(value: boolean | cdktf.IResolvable) {
    this._serviceLog = value;
  }
  public resetServiceLog() {
    this._serviceLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceLogInput() {
    return this._serviceLog;
  }

  // service_to_fork_from - computed: false, optional: true, required: false
  private _serviceToForkFrom?: string; 
  public get serviceToForkFrom() {
    return this.getStringAttribute('service_to_fork_from');
  }
  public set serviceToForkFrom(value: string) {
    this._serviceToForkFrom = value;
  }
  public resetServiceToForkFrom() {
    this._serviceToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceToForkFromInput() {
    return this._serviceToForkFrom;
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: boolean | cdktf.IResolvable; 
  public get staticIps() {
    return this.getBooleanAttribute('static_ips');
  }
  public set staticIps(value: boolean | cdktf.IResolvable) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new InfluxdbInfluxdbUserConfigInfluxdbOutputReference(this, "influxdb");
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: InfluxdbInfluxdbUserConfigInfluxdb) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new InfluxdbInfluxdbUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: InfluxdbInfluxdbUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new InfluxdbInfluxdbUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: InfluxdbInfluxdbUserConfigPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // privatelink_access - computed: false, optional: true, required: false
  private _privatelinkAccess = new InfluxdbInfluxdbUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: InfluxdbInfluxdbUserConfigPrivatelinkAccess) {
    this._privatelinkAccess.internalValue = value;
  }
  public resetPrivatelinkAccess() {
    this._privatelinkAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privatelinkAccessInput() {
    return this._privatelinkAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new InfluxdbInfluxdbUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: InfluxdbInfluxdbUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }
}
export interface InfluxdbServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#integration_type Influxdb#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#source_service_name Influxdb#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function influxdbServiceIntegrationsToTerraform(struct?: InfluxdbServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function influxdbServiceIntegrationsToHclTerraform(struct?: InfluxdbServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    integration_type: {
      value: cdktf.stringToHclTerraform(struct!.integrationType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_service_name: {
      value: cdktf.stringToHclTerraform(struct!.sourceServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfluxdbServiceIntegrations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._integrationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.integrationType = this._integrationType;
    }
    if (this._sourceServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceServiceName = this._sourceServiceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbServiceIntegrations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._integrationType = undefined;
      this._sourceServiceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._integrationType = value.integrationType;
      this._sourceServiceName = value.sourceServiceName;
    }
  }

  // integration_type - computed: false, optional: false, required: true
  private _integrationType?: string; 
  public get integrationType() {
    return this.getStringAttribute('integration_type');
  }
  public set integrationType(value: string) {
    this._integrationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationTypeInput() {
    return this._integrationType;
  }

  // source_service_name - computed: false, optional: false, required: true
  private _sourceServiceName?: string; 
  public get sourceServiceName() {
    return this.getStringAttribute('source_service_name');
  }
  public set sourceServiceName(value: string) {
    this._sourceServiceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceServiceNameInput() {
    return this._sourceServiceName;
  }
}

export class InfluxdbServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : InfluxdbServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): InfluxdbServiceIntegrationsOutputReference {
    return new InfluxdbServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfluxdbTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#key Influxdb#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#value Influxdb#value}
  */
  readonly value: string;
}

export function influxdbTagToTerraform(struct?: InfluxdbTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function influxdbTagToHclTerraform(struct?: InfluxdbTag | cdktf.IResolvable): any {
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

export class InfluxdbTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfluxdbTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
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

export class InfluxdbTagList extends cdktf.ComplexList {
  public internalValue? : InfluxdbTag[] | cdktf.IResolvable

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
  public get(index: number): InfluxdbTagOutputReference {
    return new InfluxdbTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfluxdbTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#email Influxdb#email}
  */
  readonly email: string;
}

export function influxdbTechEmailsToTerraform(struct?: InfluxdbTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function influxdbTechEmailsToHclTerraform(struct?: InfluxdbTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.stringToHclTerraform(struct!.email),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class InfluxdbTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): InfluxdbTechEmails | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbTechEmails | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
    }
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }
}

export class InfluxdbTechEmailsList extends cdktf.ComplexList {
  public internalValue? : InfluxdbTechEmails[] | cdktf.IResolvable

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
  public get(index: number): InfluxdbTechEmailsOutputReference {
    return new InfluxdbTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface InfluxdbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#create Influxdb#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#default Influxdb#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#delete Influxdb#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#read Influxdb#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#update Influxdb#update}
  */
  readonly update?: string;
}

export function influxdbTimeoutsToTerraform(struct?: InfluxdbTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function influxdbTimeoutsToHclTerraform(struct?: InfluxdbTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class InfluxdbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): InfluxdbTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: InfluxdbTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._default = value.default;
      this._delete = value.delete;
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb aiven_influxdb}
*/
export class Influxdb extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_influxdb";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Influxdb resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Influxdb to import
  * @param importFromId The id of the existing Influxdb that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Influxdb to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_influxdb", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/influxdb aiven_influxdb} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InfluxdbConfig
  */
  public constructor(scope: Construct, id: string, config: InfluxdbConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_influxdb',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.48.0',
        providerVersionConstraint: '4.48.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._additionalDiskSpace = config.additionalDiskSpace;
    this._cloudName = config.cloudName;
    this._diskSpace = config.diskSpace;
    this._id = config.id;
    this._maintenanceWindowDow = config.maintenanceWindowDow;
    this._maintenanceWindowTime = config.maintenanceWindowTime;
    this._plan = config.plan;
    this._project = config.project;
    this._projectVpcId = config.projectVpcId;
    this._serviceName = config.serviceName;
    this._staticIps = config.staticIps;
    this._terminationProtection = config.terminationProtection;
    this._influxdb.internalValue = config.influxdb;
    this._influxdbUserConfig.internalValue = config.influxdbUserConfig;
    this._serviceIntegrations.internalValue = config.serviceIntegrations;
    this._tag.internalValue = config.tag;
    this._techEmails.internalValue = config.techEmails;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // additional_disk_space - computed: true, optional: true, required: false
  private _additionalDiskSpace?: string; 
  public get additionalDiskSpace() {
    return this.getStringAttribute('additional_disk_space');
  }
  public set additionalDiskSpace(value: string) {
    this._additionalDiskSpace = value;
  }
  public resetAdditionalDiskSpace() {
    this._additionalDiskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalDiskSpaceInput() {
    return this._additionalDiskSpace;
  }

  // cloud_name - computed: false, optional: true, required: false
  private _cloudName?: string; 
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }
  public set cloudName(value: string) {
    this._cloudName = value;
  }
  public resetCloudName() {
    this._cloudName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudNameInput() {
    return this._cloudName;
  }

  // components - computed: true, optional: false, required: false
  private _components = new InfluxdbComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }

  // disk_space - computed: false, optional: true, required: false
  private _diskSpace?: string; 
  public get diskSpace() {
    return this.getStringAttribute('disk_space');
  }
  public set diskSpace(value: string) {
    this._diskSpace = value;
  }
  public resetDiskSpace() {
    this._diskSpace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSpaceInput() {
    return this._diskSpace;
  }

  // disk_space_cap - computed: true, optional: false, required: false
  public get diskSpaceCap() {
    return this.getStringAttribute('disk_space_cap');
  }

  // disk_space_default - computed: true, optional: false, required: false
  public get diskSpaceDefault() {
    return this.getStringAttribute('disk_space_default');
  }

  // disk_space_step - computed: true, optional: false, required: false
  public get diskSpaceStep() {
    return this.getStringAttribute('disk_space_step');
  }

  // disk_space_used - computed: true, optional: false, required: false
  public get diskSpaceUsed() {
    return this.getStringAttribute('disk_space_used');
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

  // maintenance_window_dow - computed: false, optional: true, required: false
  private _maintenanceWindowDow?: string; 
  public get maintenanceWindowDow() {
    return this.getStringAttribute('maintenance_window_dow');
  }
  public set maintenanceWindowDow(value: string) {
    this._maintenanceWindowDow = value;
  }
  public resetMaintenanceWindowDow() {
    this._maintenanceWindowDow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowDowInput() {
    return this._maintenanceWindowDow;
  }

  // maintenance_window_enabled - computed: true, optional: false, required: false
  public get maintenanceWindowEnabled() {
    return this.getBooleanAttribute('maintenance_window_enabled');
  }

  // maintenance_window_time - computed: false, optional: true, required: false
  private _maintenanceWindowTime?: string; 
  public get maintenanceWindowTime() {
    return this.getStringAttribute('maintenance_window_time');
  }
  public set maintenanceWindowTime(value: string) {
    this._maintenanceWindowTime = value;
  }
  public resetMaintenanceWindowTime() {
    this._maintenanceWindowTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowTimeInput() {
    return this._maintenanceWindowTime;
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // project_vpc_id - computed: false, optional: true, required: false
  private _projectVpcId?: string; 
  public get projectVpcId() {
    return this.getStringAttribute('project_vpc_id');
  }
  public set projectVpcId(value: string) {
    this._projectVpcId = value;
  }
  public resetProjectVpcId() {
    this._projectVpcId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectVpcIdInput() {
    return this._projectVpcId;
  }

  // service_host - computed: true, optional: false, required: false
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // service_password - computed: true, optional: false, required: false
  public get servicePassword() {
    return this.getStringAttribute('service_password');
  }

  // service_port - computed: true, optional: false, required: false
  public get servicePort() {
    return this.getNumberAttribute('service_port');
  }

  // service_type - computed: true, optional: false, required: false
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }

  // service_uri - computed: true, optional: false, required: false
  public get serviceUri() {
    return this.getStringAttribute('service_uri');
  }

  // service_username - computed: true, optional: false, required: false
  public get serviceUsername() {
    return this.getStringAttribute('service_username');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_ips - computed: false, optional: true, required: false
  private _staticIps?: string[]; 
  public get staticIps() {
    return cdktf.Fn.tolist(this.getListAttribute('static_ips'));
  }
  public set staticIps(value: string[]) {
    this._staticIps = value;
  }
  public resetStaticIps() {
    this._staticIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIpsInput() {
    return this._staticIps;
  }

  // termination_protection - computed: false, optional: true, required: false
  private _terminationProtection?: boolean | cdktf.IResolvable; 
  public get terminationProtection() {
    return this.getBooleanAttribute('termination_protection');
  }
  public set terminationProtection(value: boolean | cdktf.IResolvable) {
    this._terminationProtection = value;
  }
  public resetTerminationProtection() {
    this._terminationProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminationProtectionInput() {
    return this._terminationProtection;
  }

  // influxdb - computed: false, optional: true, required: false
  private _influxdb = new InfluxdbInfluxdbOutputReference(this, "influxdb");
  public get influxdb() {
    return this._influxdb;
  }
  public putInfluxdb(value: InfluxdbInfluxdb) {
    this._influxdb.internalValue = value;
  }
  public resetInfluxdb() {
    this._influxdb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbInput() {
    return this._influxdb.internalValue;
  }

  // influxdb_user_config - computed: false, optional: true, required: false
  private _influxdbUserConfig = new InfluxdbInfluxdbUserConfigOutputReference(this, "influxdb_user_config");
  public get influxdbUserConfig() {
    return this._influxdbUserConfig;
  }
  public putInfluxdbUserConfig(value: InfluxdbInfluxdbUserConfig) {
    this._influxdbUserConfig.internalValue = value;
  }
  public resetInfluxdbUserConfig() {
    this._influxdbUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get influxdbUserConfigInput() {
    return this._influxdbUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new InfluxdbServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: InfluxdbServiceIntegrations[] | cdktf.IResolvable) {
    this._serviceIntegrations.internalValue = value;
  }
  public resetServiceIntegrations() {
    this._serviceIntegrations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIntegrationsInput() {
    return this._serviceIntegrations.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new InfluxdbTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: InfluxdbTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // tech_emails - computed: false, optional: true, required: false
  private _techEmails = new InfluxdbTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: InfluxdbTechEmails[] | cdktf.IResolvable) {
    this._techEmails.internalValue = value;
  }
  public resetTechEmails() {
    this._techEmails.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get techEmailsInput() {
    return this._techEmails.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new InfluxdbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: InfluxdbTimeouts) {
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
      additional_disk_space: cdktf.stringToTerraform(this._additionalDiskSpace),
      cloud_name: cdktf.stringToTerraform(this._cloudName),
      disk_space: cdktf.stringToTerraform(this._diskSpace),
      id: cdktf.stringToTerraform(this._id),
      maintenance_window_dow: cdktf.stringToTerraform(this._maintenanceWindowDow),
      maintenance_window_time: cdktf.stringToTerraform(this._maintenanceWindowTime),
      plan: cdktf.stringToTerraform(this._plan),
      project: cdktf.stringToTerraform(this._project),
      project_vpc_id: cdktf.stringToTerraform(this._projectVpcId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      static_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticIps),
      termination_protection: cdktf.booleanToTerraform(this._terminationProtection),
      influxdb: influxdbInfluxdbToTerraform(this._influxdb.internalValue),
      influxdb_user_config: influxdbInfluxdbUserConfigToTerraform(this._influxdbUserConfig.internalValue),
      service_integrations: cdktf.listMapper(influxdbServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(influxdbTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(influxdbTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: influxdbTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      additional_disk_space: {
        value: cdktf.stringToHclTerraform(this._additionalDiskSpace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_name: {
        value: cdktf.stringToHclTerraform(this._cloudName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_space: {
        value: cdktf.stringToHclTerraform(this._diskSpace),
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
      maintenance_window_dow: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowDow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_time: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_vpc_id: {
        value: cdktf.stringToHclTerraform(this._projectVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_ips: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticIps),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      termination_protection: {
        value: cdktf.booleanToHclTerraform(this._terminationProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      influxdb: {
        value: influxdbInfluxdbToHclTerraform(this._influxdb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfluxdbInfluxdbList",
      },
      influxdb_user_config: {
        value: influxdbInfluxdbUserConfigToHclTerraform(this._influxdbUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "InfluxdbInfluxdbUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(influxdbServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InfluxdbServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(influxdbTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InfluxdbTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(influxdbTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "InfluxdbTechEmailsList",
      },
      timeouts: {
        value: influxdbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "InfluxdbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
