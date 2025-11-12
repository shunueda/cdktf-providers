// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface M3DbConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#additional_disk_space M3Db#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#cloud_name M3Db#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#disk_space M3Db#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#id M3Db#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#maintenance_window_dow M3Db#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#maintenance_window_time M3Db#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#plan M3Db#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#project M3Db#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#project_vpc_id M3Db#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#service_name M3Db#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#static_ips M3Db#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#termination_protection M3Db#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * m3db block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3db M3Db#m3db}
  */
  readonly m3Db?: M3DbM3Db;
  /**
  * m3db_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3db_user_config M3Db#m3db_user_config}
  */
  readonly m3DbUserConfig?: M3DbM3DbUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#service_integrations M3Db#service_integrations}
  */
  readonly serviceIntegrations?: M3DbServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#tag M3Db#tag}
  */
  readonly tag?: M3DbTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#tech_emails M3Db#tech_emails}
  */
  readonly techEmails?: M3DbTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#timeouts M3Db#timeouts}
  */
  readonly timeouts?: M3DbTimeouts;
}
export interface M3DbComponents {
}

export function m3DbComponentsToTerraform(struct?: M3DbComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function m3DbComponentsToHclTerraform(struct?: M3DbComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class M3DbComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbComponents | undefined) {
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

export class M3DbComponentsList extends cdktf.ComplexList {

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
  public get(index: number): M3DbComponentsOutputReference {
    return new M3DbComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbM3Db {
  /**
  * M3DB server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#uris M3Db#uris}
  */
  readonly uris?: string[];
}

export function m3DbM3DbToTerraform(struct?: M3DbM3DbOutputReference | M3DbM3Db): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function m3DbM3DbToHclTerraform(struct?: M3DbM3DbOutputReference | M3DbM3Db): any {
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

export class M3DbM3DbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3Db | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3Db | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
  }

  // http_cluster_uri - computed: true, optional: false, required: false
  public get httpClusterUri() {
    return this.getStringAttribute('http_cluster_uri');
  }

  // http_node_uri - computed: true, optional: false, required: false
  public get httpNodeUri() {
    return this.getStringAttribute('http_node_uri');
  }

  // influxdb_uri - computed: true, optional: false, required: false
  public get influxdbUri() {
    return this.getStringAttribute('influxdb_uri');
  }

  // prometheus_remote_read_uri - computed: true, optional: false, required: false
  public get prometheusRemoteReadUri() {
    return this.getStringAttribute('prometheus_remote_read_uri');
  }

  // prometheus_remote_write_uri - computed: true, optional: false, required: false
  public get prometheusRemoteWriteUri() {
    return this.getStringAttribute('prometheus_remote_write_uri');
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
}
export interface M3DbM3DbUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#description M3Db#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#network M3Db#network}
  */
  readonly network: string;
}

export function m3DbM3DbUserConfigIpFilterObjectToTerraform(struct?: M3DbM3DbUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function m3DbM3DbUserConfigIpFilterObjectToHclTerraform(struct?: M3DbM3DbUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class M3DbM3DbUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbM3DbUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: M3DbM3DbUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class M3DbM3DbUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : M3DbM3DbUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): M3DbM3DbUserConfigIpFilterObjectOutputReference {
    return new M3DbM3DbUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbM3DbUserConfigLimits {
  /**
  * The maximum number of blocks that can be read in a given lookback period. Example: `20000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#max_recently_queried_series_blocks M3Db#max_recently_queried_series_blocks}
  */
  readonly maxRecentlyQueriedSeriesBlocks?: number;
  /**
  * The maximum number of disk bytes that can be read in a given lookback period. Example: `104857600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#max_recently_queried_series_disk_bytes_read M3Db#max_recently_queried_series_disk_bytes_read}
  */
  readonly maxRecentlyQueriedSeriesDiskBytesRead?: number;
  /**
  * The lookback period for `max_recently_queried_series_blocks` and `max_recently_queried_series_disk_bytes_read`. Example: `15s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#max_recently_queried_series_lookback M3Db#max_recently_queried_series_lookback}
  */
  readonly maxRecentlyQueriedSeriesLookback?: string;
  /**
  * The maximum number of docs fetched in single query. Example: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#query_docs M3Db#query_docs}
  */
  readonly queryDocs?: number;
  /**
  * When query limits are exceeded, whether to return error or return partial results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#query_require_exhaustive M3Db#query_require_exhaustive}
  */
  readonly queryRequireExhaustive?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of series fetched in single query. Example: `100000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#query_series M3Db#query_series}
  */
  readonly querySeries?: number;
}

export function m3DbM3DbUserConfigLimitsToTerraform(struct?: M3DbM3DbUserConfigLimitsOutputReference | M3DbM3DbUserConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_recently_queried_series_blocks: cdktf.numberToTerraform(struct!.maxRecentlyQueriedSeriesBlocks),
    max_recently_queried_series_disk_bytes_read: cdktf.numberToTerraform(struct!.maxRecentlyQueriedSeriesDiskBytesRead),
    max_recently_queried_series_lookback: cdktf.stringToTerraform(struct!.maxRecentlyQueriedSeriesLookback),
    query_docs: cdktf.numberToTerraform(struct!.queryDocs),
    query_require_exhaustive: cdktf.booleanToTerraform(struct!.queryRequireExhaustive),
    query_series: cdktf.numberToTerraform(struct!.querySeries),
  }
}


export function m3DbM3DbUserConfigLimitsToHclTerraform(struct?: M3DbM3DbUserConfigLimitsOutputReference | M3DbM3DbUserConfigLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_recently_queried_series_blocks: {
      value: cdktf.numberToHclTerraform(struct!.maxRecentlyQueriedSeriesBlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_recently_queried_series_disk_bytes_read: {
      value: cdktf.numberToHclTerraform(struct!.maxRecentlyQueriedSeriesDiskBytesRead),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_recently_queried_series_lookback: {
      value: cdktf.stringToHclTerraform(struct!.maxRecentlyQueriedSeriesLookback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    query_docs: {
      value: cdktf.numberToHclTerraform(struct!.queryDocs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_require_exhaustive: {
      value: cdktf.booleanToHclTerraform(struct!.queryRequireExhaustive),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_series: {
      value: cdktf.numberToHclTerraform(struct!.querySeries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxRecentlyQueriedSeriesBlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRecentlyQueriedSeriesBlocks = this._maxRecentlyQueriedSeriesBlocks;
    }
    if (this._maxRecentlyQueriedSeriesDiskBytesRead !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRecentlyQueriedSeriesDiskBytesRead = this._maxRecentlyQueriedSeriesDiskBytesRead;
    }
    if (this._maxRecentlyQueriedSeriesLookback !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxRecentlyQueriedSeriesLookback = this._maxRecentlyQueriedSeriesLookback;
    }
    if (this._queryDocs !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryDocs = this._queryDocs;
    }
    if (this._queryRequireExhaustive !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryRequireExhaustive = this._queryRequireExhaustive;
    }
    if (this._querySeries !== undefined) {
      hasAnyValues = true;
      internalValueResult.querySeries = this._querySeries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxRecentlyQueriedSeriesBlocks = undefined;
      this._maxRecentlyQueriedSeriesDiskBytesRead = undefined;
      this._maxRecentlyQueriedSeriesLookback = undefined;
      this._queryDocs = undefined;
      this._queryRequireExhaustive = undefined;
      this._querySeries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxRecentlyQueriedSeriesBlocks = value.maxRecentlyQueriedSeriesBlocks;
      this._maxRecentlyQueriedSeriesDiskBytesRead = value.maxRecentlyQueriedSeriesDiskBytesRead;
      this._maxRecentlyQueriedSeriesLookback = value.maxRecentlyQueriedSeriesLookback;
      this._queryDocs = value.queryDocs;
      this._queryRequireExhaustive = value.queryRequireExhaustive;
      this._querySeries = value.querySeries;
    }
  }

  // max_recently_queried_series_blocks - computed: false, optional: true, required: false
  private _maxRecentlyQueriedSeriesBlocks?: number; 
  public get maxRecentlyQueriedSeriesBlocks() {
    return this.getNumberAttribute('max_recently_queried_series_blocks');
  }
  public set maxRecentlyQueriedSeriesBlocks(value: number) {
    this._maxRecentlyQueriedSeriesBlocks = value;
  }
  public resetMaxRecentlyQueriedSeriesBlocks() {
    this._maxRecentlyQueriedSeriesBlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecentlyQueriedSeriesBlocksInput() {
    return this._maxRecentlyQueriedSeriesBlocks;
  }

  // max_recently_queried_series_disk_bytes_read - computed: false, optional: true, required: false
  private _maxRecentlyQueriedSeriesDiskBytesRead?: number; 
  public get maxRecentlyQueriedSeriesDiskBytesRead() {
    return this.getNumberAttribute('max_recently_queried_series_disk_bytes_read');
  }
  public set maxRecentlyQueriedSeriesDiskBytesRead(value: number) {
    this._maxRecentlyQueriedSeriesDiskBytesRead = value;
  }
  public resetMaxRecentlyQueriedSeriesDiskBytesRead() {
    this._maxRecentlyQueriedSeriesDiskBytesRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecentlyQueriedSeriesDiskBytesReadInput() {
    return this._maxRecentlyQueriedSeriesDiskBytesRead;
  }

  // max_recently_queried_series_lookback - computed: false, optional: true, required: false
  private _maxRecentlyQueriedSeriesLookback?: string; 
  public get maxRecentlyQueriedSeriesLookback() {
    return this.getStringAttribute('max_recently_queried_series_lookback');
  }
  public set maxRecentlyQueriedSeriesLookback(value: string) {
    this._maxRecentlyQueriedSeriesLookback = value;
  }
  public resetMaxRecentlyQueriedSeriesLookback() {
    this._maxRecentlyQueriedSeriesLookback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxRecentlyQueriedSeriesLookbackInput() {
    return this._maxRecentlyQueriedSeriesLookback;
  }

  // query_docs - computed: false, optional: true, required: false
  private _queryDocs?: number; 
  public get queryDocs() {
    return this.getNumberAttribute('query_docs');
  }
  public set queryDocs(value: number) {
    this._queryDocs = value;
  }
  public resetQueryDocs() {
    this._queryDocs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryDocsInput() {
    return this._queryDocs;
  }

  // query_require_exhaustive - computed: false, optional: true, required: false
  private _queryRequireExhaustive?: boolean | cdktf.IResolvable; 
  public get queryRequireExhaustive() {
    return this.getBooleanAttribute('query_require_exhaustive');
  }
  public set queryRequireExhaustive(value: boolean | cdktf.IResolvable) {
    this._queryRequireExhaustive = value;
  }
  public resetQueryRequireExhaustive() {
    this._queryRequireExhaustive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryRequireExhaustiveInput() {
    return this._queryRequireExhaustive;
  }

  // query_series - computed: false, optional: true, required: false
  private _querySeries?: number; 
  public get querySeries() {
    return this.getNumberAttribute('query_series');
  }
  public set querySeries(value: number) {
    this._querySeries = value;
  }
  public resetQuerySeries() {
    this._querySeries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get querySeriesInput() {
    return this._querySeries;
  }
}
export interface M3DbM3DbUserConfigM3TagOptions {
  /**
  * Allows for duplicate tags to appear on series (not allowed by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#allow_tag_name_duplicates M3Db#allow_tag_name_duplicates}
  */
  readonly allowTagNameDuplicates?: boolean | cdktf.IResolvable;
  /**
  * Allows for empty tags to appear on series (not allowed by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#allow_tag_value_empty M3Db#allow_tag_value_empty}
  */
  readonly allowTagValueEmpty?: boolean | cdktf.IResolvable;
}

export function m3DbM3DbUserConfigM3TagOptionsToTerraform(struct?: M3DbM3DbUserConfigM3TagOptionsOutputReference | M3DbM3DbUserConfigM3TagOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_tag_name_duplicates: cdktf.booleanToTerraform(struct!.allowTagNameDuplicates),
    allow_tag_value_empty: cdktf.booleanToTerraform(struct!.allowTagValueEmpty),
  }
}


export function m3DbM3DbUserConfigM3TagOptionsToHclTerraform(struct?: M3DbM3DbUserConfigM3TagOptionsOutputReference | M3DbM3DbUserConfigM3TagOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_tag_name_duplicates: {
      value: cdktf.booleanToHclTerraform(struct!.allowTagNameDuplicates),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    allow_tag_value_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowTagValueEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigM3TagOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigM3TagOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTagNameDuplicates !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTagNameDuplicates = this._allowTagNameDuplicates;
    }
    if (this._allowTagValueEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTagValueEmpty = this._allowTagValueEmpty;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigM3TagOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTagNameDuplicates = undefined;
      this._allowTagValueEmpty = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTagNameDuplicates = value.allowTagNameDuplicates;
      this._allowTagValueEmpty = value.allowTagValueEmpty;
    }
  }

  // allow_tag_name_duplicates - computed: false, optional: true, required: false
  private _allowTagNameDuplicates?: boolean | cdktf.IResolvable; 
  public get allowTagNameDuplicates() {
    return this.getBooleanAttribute('allow_tag_name_duplicates');
  }
  public set allowTagNameDuplicates(value: boolean | cdktf.IResolvable) {
    this._allowTagNameDuplicates = value;
  }
  public resetAllowTagNameDuplicates() {
    this._allowTagNameDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTagNameDuplicatesInput() {
    return this._allowTagNameDuplicates;
  }

  // allow_tag_value_empty - computed: false, optional: true, required: false
  private _allowTagValueEmpty?: boolean | cdktf.IResolvable; 
  public get allowTagValueEmpty() {
    return this.getBooleanAttribute('allow_tag_value_empty');
  }
  public set allowTagValueEmpty(value: boolean | cdktf.IResolvable) {
    this._allowTagValueEmpty = value;
  }
  public resetAllowTagValueEmpty() {
    this._allowTagValueEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTagValueEmptyInput() {
    return this._allowTagValueEmpty;
  }
}
export interface M3DbM3DbUserConfigM3 {
  /**
  * tag_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#tag_options M3Db#tag_options}
  */
  readonly tagOptions?: M3DbM3DbUserConfigM3TagOptions;
}

export function m3DbM3DbUserConfigM3ToTerraform(struct?: M3DbM3DbUserConfigM3OutputReference | M3DbM3DbUserConfigM3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_options: m3DbM3DbUserConfigM3TagOptionsToTerraform(struct!.tagOptions),
  }
}


export function m3DbM3DbUserConfigM3ToHclTerraform(struct?: M3DbM3DbUserConfigM3OutputReference | M3DbM3DbUserConfigM3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_options: {
      value: m3DbM3DbUserConfigM3TagOptionsToHclTerraform(struct!.tagOptions),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigM3TagOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigM3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigM3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOptions = this._tagOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigM3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tagOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tagOptions.internalValue = value.tagOptions;
    }
  }

  // tag_options - computed: false, optional: true, required: false
  private _tagOptions = new M3DbM3DbUserConfigM3TagOptionsOutputReference(this, "tag_options");
  public get tagOptions() {
    return this._tagOptions;
  }
  public putTagOptions(value: M3DbM3DbUserConfigM3TagOptions) {
    this._tagOptions.internalValue = value;
  }
  public resetTagOptions() {
    this._tagOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOptionsInput() {
    return this._tagOptions.internalValue;
  }
}
export interface M3DbM3DbUserConfigNamespacesOptionsRetentionOptions {
  /**
  * Controls how long we wait before expiring stale data. Example: `5m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#block_data_expiry_duration M3Db#block_data_expiry_duration}
  */
  readonly blockDataExpiryDuration?: string;
  /**
  * Controls how long to keep a block in memory before flushing to a fileset on disk. Example: `2h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#blocksize_duration M3Db#blocksize_duration}
  */
  readonly blocksizeDuration?: string;
  /**
  * Controls how far into the future writes to the namespace will be accepted. Example: `10m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#buffer_future_duration M3Db#buffer_future_duration}
  */
  readonly bufferFutureDuration?: string;
  /**
  * Controls how far into the past writes to the namespace will be accepted. Example: `10m`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#buffer_past_duration M3Db#buffer_past_duration}
  */
  readonly bufferPastDuration?: string;
  /**
  * Controls the duration of time that M3DB will retain data for the namespace. Example: `48h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#retention_period_duration M3Db#retention_period_duration}
  */
  readonly retentionPeriodDuration?: string;
}

export function m3DbM3DbUserConfigNamespacesOptionsRetentionOptionsToTerraform(struct?: M3DbM3DbUserConfigNamespacesOptionsRetentionOptionsOutputReference | M3DbM3DbUserConfigNamespacesOptionsRetentionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_data_expiry_duration: cdktf.stringToTerraform(struct!.blockDataExpiryDuration),
    blocksize_duration: cdktf.stringToTerraform(struct!.blocksizeDuration),
    buffer_future_duration: cdktf.stringToTerraform(struct!.bufferFutureDuration),
    buffer_past_duration: cdktf.stringToTerraform(struct!.bufferPastDuration),
    retention_period_duration: cdktf.stringToTerraform(struct!.retentionPeriodDuration),
  }
}


export function m3DbM3DbUserConfigNamespacesOptionsRetentionOptionsToHclTerraform(struct?: M3DbM3DbUserConfigNamespacesOptionsRetentionOptionsOutputReference | M3DbM3DbUserConfigNamespacesOptionsRetentionOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_data_expiry_duration: {
      value: cdktf.stringToHclTerraform(struct!.blockDataExpiryDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    blocksize_duration: {
      value: cdktf.stringToHclTerraform(struct!.blocksizeDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_future_duration: {
      value: cdktf.stringToHclTerraform(struct!.bufferFutureDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    buffer_past_duration: {
      value: cdktf.stringToHclTerraform(struct!.bufferPastDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention_period_duration: {
      value: cdktf.stringToHclTerraform(struct!.retentionPeriodDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigNamespacesOptionsRetentionOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigNamespacesOptionsRetentionOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockDataExpiryDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDataExpiryDuration = this._blockDataExpiryDuration;
    }
    if (this._blocksizeDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.blocksizeDuration = this._blocksizeDuration;
    }
    if (this._bufferFutureDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferFutureDuration = this._bufferFutureDuration;
    }
    if (this._bufferPastDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.bufferPastDuration = this._bufferPastDuration;
    }
    if (this._retentionPeriodDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionPeriodDuration = this._retentionPeriodDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigNamespacesOptionsRetentionOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockDataExpiryDuration = undefined;
      this._blocksizeDuration = undefined;
      this._bufferFutureDuration = undefined;
      this._bufferPastDuration = undefined;
      this._retentionPeriodDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockDataExpiryDuration = value.blockDataExpiryDuration;
      this._blocksizeDuration = value.blocksizeDuration;
      this._bufferFutureDuration = value.bufferFutureDuration;
      this._bufferPastDuration = value.bufferPastDuration;
      this._retentionPeriodDuration = value.retentionPeriodDuration;
    }
  }

  // block_data_expiry_duration - computed: false, optional: true, required: false
  private _blockDataExpiryDuration?: string; 
  public get blockDataExpiryDuration() {
    return this.getStringAttribute('block_data_expiry_duration');
  }
  public set blockDataExpiryDuration(value: string) {
    this._blockDataExpiryDuration = value;
  }
  public resetBlockDataExpiryDuration() {
    this._blockDataExpiryDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDataExpiryDurationInput() {
    return this._blockDataExpiryDuration;
  }

  // blocksize_duration - computed: false, optional: true, required: false
  private _blocksizeDuration?: string; 
  public get blocksizeDuration() {
    return this.getStringAttribute('blocksize_duration');
  }
  public set blocksizeDuration(value: string) {
    this._blocksizeDuration = value;
  }
  public resetBlocksizeDuration() {
    this._blocksizeDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blocksizeDurationInput() {
    return this._blocksizeDuration;
  }

  // buffer_future_duration - computed: false, optional: true, required: false
  private _bufferFutureDuration?: string; 
  public get bufferFutureDuration() {
    return this.getStringAttribute('buffer_future_duration');
  }
  public set bufferFutureDuration(value: string) {
    this._bufferFutureDuration = value;
  }
  public resetBufferFutureDuration() {
    this._bufferFutureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferFutureDurationInput() {
    return this._bufferFutureDuration;
  }

  // buffer_past_duration - computed: false, optional: true, required: false
  private _bufferPastDuration?: string; 
  public get bufferPastDuration() {
    return this.getStringAttribute('buffer_past_duration');
  }
  public set bufferPastDuration(value: string) {
    this._bufferPastDuration = value;
  }
  public resetBufferPastDuration() {
    this._bufferPastDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferPastDurationInput() {
    return this._bufferPastDuration;
  }

  // retention_period_duration - computed: false, optional: true, required: false
  private _retentionPeriodDuration?: string; 
  public get retentionPeriodDuration() {
    return this.getStringAttribute('retention_period_duration');
  }
  public set retentionPeriodDuration(value: string) {
    this._retentionPeriodDuration = value;
  }
  public resetRetentionPeriodDuration() {
    this._retentionPeriodDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPeriodDurationInput() {
    return this._retentionPeriodDuration;
  }
}
export interface M3DbM3DbUserConfigNamespacesOptions {
  /**
  * Controls whether M3DB will create snapshot files for this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#snapshot_enabled M3Db#snapshot_enabled}
  */
  readonly snapshotEnabled?: boolean | cdktf.IResolvable;
  /**
  * Controls whether M3DB will include writes to this namespace in the commitlog.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#writes_to_commitlog M3Db#writes_to_commitlog}
  */
  readonly writesToCommitlog?: boolean | cdktf.IResolvable;
  /**
  * retention_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#retention_options M3Db#retention_options}
  */
  readonly retentionOptions: M3DbM3DbUserConfigNamespacesOptionsRetentionOptions;
}

export function m3DbM3DbUserConfigNamespacesOptionsToTerraform(struct?: M3DbM3DbUserConfigNamespacesOptionsOutputReference | M3DbM3DbUserConfigNamespacesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    snapshot_enabled: cdktf.booleanToTerraform(struct!.snapshotEnabled),
    writes_to_commitlog: cdktf.booleanToTerraform(struct!.writesToCommitlog),
    retention_options: m3DbM3DbUserConfigNamespacesOptionsRetentionOptionsToTerraform(struct!.retentionOptions),
  }
}


export function m3DbM3DbUserConfigNamespacesOptionsToHclTerraform(struct?: M3DbM3DbUserConfigNamespacesOptionsOutputReference | M3DbM3DbUserConfigNamespacesOptions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    snapshot_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.snapshotEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    writes_to_commitlog: {
      value: cdktf.booleanToHclTerraform(struct!.writesToCommitlog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    retention_options: {
      value: m3DbM3DbUserConfigNamespacesOptionsRetentionOptionsToHclTerraform(struct!.retentionOptions),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigNamespacesOptionsRetentionOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigNamespacesOptionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigNamespacesOptions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._snapshotEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.snapshotEnabled = this._snapshotEnabled;
    }
    if (this._writesToCommitlog !== undefined) {
      hasAnyValues = true;
      internalValueResult.writesToCommitlog = this._writesToCommitlog;
    }
    if (this._retentionOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionOptions = this._retentionOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigNamespacesOptions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._snapshotEnabled = undefined;
      this._writesToCommitlog = undefined;
      this._retentionOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._snapshotEnabled = value.snapshotEnabled;
      this._writesToCommitlog = value.writesToCommitlog;
      this._retentionOptions.internalValue = value.retentionOptions;
    }
  }

  // snapshot_enabled - computed: false, optional: true, required: false
  private _snapshotEnabled?: boolean | cdktf.IResolvable; 
  public get snapshotEnabled() {
    return this.getBooleanAttribute('snapshot_enabled');
  }
  public set snapshotEnabled(value: boolean | cdktf.IResolvable) {
    this._snapshotEnabled = value;
  }
  public resetSnapshotEnabled() {
    this._snapshotEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snapshotEnabledInput() {
    return this._snapshotEnabled;
  }

  // writes_to_commitlog - computed: false, optional: true, required: false
  private _writesToCommitlog?: boolean | cdktf.IResolvable; 
  public get writesToCommitlog() {
    return this.getBooleanAttribute('writes_to_commitlog');
  }
  public set writesToCommitlog(value: boolean | cdktf.IResolvable) {
    this._writesToCommitlog = value;
  }
  public resetWritesToCommitlog() {
    this._writesToCommitlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writesToCommitlogInput() {
    return this._writesToCommitlog;
  }

  // retention_options - computed: false, optional: false, required: true
  private _retentionOptions = new M3DbM3DbUserConfigNamespacesOptionsRetentionOptionsOutputReference(this, "retention_options");
  public get retentionOptions() {
    return this._retentionOptions;
  }
  public putRetentionOptions(value: M3DbM3DbUserConfigNamespacesOptionsRetentionOptions) {
    this._retentionOptions.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionOptionsInput() {
    return this._retentionOptions.internalValue;
  }
}
export interface M3DbM3DbUserConfigNamespaces {
  /**
  * The name of the namespace. Example: `default`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#name M3Db#name}
  */
  readonly name: string;
  /**
  * The resolution for an aggregated namespace. Example: `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#resolution M3Db#resolution}
  */
  readonly resolution?: string;
  /**
  * Enum: `aggregated`, `unaggregated`. The type of aggregation (aggregated/unaggregated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#type M3Db#type}
  */
  readonly type: string;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#options M3Db#options}
  */
  readonly options?: M3DbM3DbUserConfigNamespacesOptions;
}

export function m3DbM3DbUserConfigNamespacesToTerraform(struct?: M3DbM3DbUserConfigNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    resolution: cdktf.stringToTerraform(struct!.resolution),
    type: cdktf.stringToTerraform(struct!.type),
    options: m3DbM3DbUserConfigNamespacesOptionsToTerraform(struct!.options),
  }
}


export function m3DbM3DbUserConfigNamespacesToHclTerraform(struct?: M3DbM3DbUserConfigNamespaces | cdktf.IResolvable): any {
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
    resolution: {
      value: cdktf.stringToHclTerraform(struct!.resolution),
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
    options: {
      value: m3DbM3DbUserConfigNamespacesOptionsToHclTerraform(struct!.options),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigNamespacesOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbM3DbUserConfigNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._options?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._resolution = undefined;
      this._type = undefined;
      this._options.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._resolution = value.resolution;
      this._type = value.type;
      this._options.internalValue = value.options;
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

  // resolution - computed: false, optional: true, required: false
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  public resetResolution() {
    this._resolution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
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

  // options - computed: false, optional: true, required: false
  private _options = new M3DbM3DbUserConfigNamespacesOptionsOutputReference(this, "options");
  public get options() {
    return this._options;
  }
  public putOptions(value: M3DbM3DbUserConfigNamespacesOptions) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }
}

export class M3DbM3DbUserConfigNamespacesList extends cdktf.ComplexList {
  public internalValue? : M3DbM3DbUserConfigNamespaces[] | cdktf.IResolvable

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
  public get(index: number): M3DbM3DbUserConfigNamespacesOutputReference {
    return new M3DbM3DbUserConfigNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbM3DbUserConfigPrivateAccess {
  /**
  * Allow clients to connect to m3coordinator with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3coordinator M3Db#m3coordinator}
  */
  readonly m3Coordinator?: boolean | cdktf.IResolvable;
}

export function m3DbM3DbUserConfigPrivateAccessToTerraform(struct?: M3DbM3DbUserConfigPrivateAccessOutputReference | M3DbM3DbUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    m3coordinator: cdktf.booleanToTerraform(struct!.m3Coordinator),
  }
}


export function m3DbM3DbUserConfigPrivateAccessToHclTerraform(struct?: M3DbM3DbUserConfigPrivateAccessOutputReference | M3DbM3DbUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    m3coordinator: {
      value: cdktf.booleanToHclTerraform(struct!.m3Coordinator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._m3Coordinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3Coordinator = this._m3Coordinator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._m3Coordinator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._m3Coordinator = value.m3Coordinator;
    }
  }

  // m3coordinator - computed: false, optional: true, required: false
  private _m3Coordinator?: boolean | cdktf.IResolvable; 
  public get m3Coordinator() {
    return this.getBooleanAttribute('m3coordinator');
  }
  public set m3Coordinator(value: boolean | cdktf.IResolvable) {
    this._m3Coordinator = value;
  }
  public resetM3Coordinator() {
    this._m3Coordinator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3CoordinatorInput() {
    return this._m3Coordinator;
  }
}
export interface M3DbM3DbUserConfigPublicAccess {
  /**
  * Allow clients to connect to m3coordinator from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3coordinator M3Db#m3coordinator}
  */
  readonly m3Coordinator?: boolean | cdktf.IResolvable;
}

export function m3DbM3DbUserConfigPublicAccessToTerraform(struct?: M3DbM3DbUserConfigPublicAccessOutputReference | M3DbM3DbUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    m3coordinator: cdktf.booleanToTerraform(struct!.m3Coordinator),
  }
}


export function m3DbM3DbUserConfigPublicAccessToHclTerraform(struct?: M3DbM3DbUserConfigPublicAccessOutputReference | M3DbM3DbUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    m3coordinator: {
      value: cdktf.booleanToHclTerraform(struct!.m3Coordinator),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._m3Coordinator !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3Coordinator = this._m3Coordinator;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._m3Coordinator = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._m3Coordinator = value.m3Coordinator;
    }
  }

  // m3coordinator - computed: false, optional: true, required: false
  private _m3Coordinator?: boolean | cdktf.IResolvable; 
  public get m3Coordinator() {
    return this.getBooleanAttribute('m3coordinator');
  }
  public set m3Coordinator(value: boolean | cdktf.IResolvable) {
    this._m3Coordinator = value;
  }
  public resetM3Coordinator() {
    this._m3Coordinator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3CoordinatorInput() {
    return this._m3Coordinator;
  }
}
export interface M3DbM3DbUserConfigRulesMappingNamespacesObject {
  /**
  * The resolution for the matching namespace. Example: `30s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#resolution M3Db#resolution}
  */
  readonly resolution: string;
  /**
  * The retention period of the matching namespace. Example: `48h`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#retention M3Db#retention}
  */
  readonly retention?: string;
}

export function m3DbM3DbUserConfigRulesMappingNamespacesObjectToTerraform(struct?: M3DbM3DbUserConfigRulesMappingNamespacesObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resolution: cdktf.stringToTerraform(struct!.resolution),
    retention: cdktf.stringToTerraform(struct!.retention),
  }
}


export function m3DbM3DbUserConfigRulesMappingNamespacesObjectToHclTerraform(struct?: M3DbM3DbUserConfigRulesMappingNamespacesObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resolution: {
      value: cdktf.stringToHclTerraform(struct!.resolution),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retention: {
      value: cdktf.stringToHclTerraform(struct!.retention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigRulesMappingNamespacesObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbM3DbUserConfigRulesMappingNamespacesObject | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resolution !== undefined) {
      hasAnyValues = true;
      internalValueResult.resolution = this._resolution;
    }
    if (this._retention !== undefined) {
      hasAnyValues = true;
      internalValueResult.retention = this._retention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigRulesMappingNamespacesObject | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resolution = undefined;
      this._retention = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resolution = value.resolution;
      this._retention = value.retention;
    }
  }

  // resolution - computed: false, optional: false, required: true
  private _resolution?: string; 
  public get resolution() {
    return this.getStringAttribute('resolution');
  }
  public set resolution(value: string) {
    this._resolution = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resolutionInput() {
    return this._resolution;
  }

  // retention - computed: false, optional: true, required: false
  private _retention?: string; 
  public get retention() {
    return this.getStringAttribute('retention');
  }
  public set retention(value: string) {
    this._retention = value;
  }
  public resetRetention() {
    this._retention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionInput() {
    return this._retention;
  }
}

export class M3DbM3DbUserConfigRulesMappingNamespacesObjectList extends cdktf.ComplexList {
  public internalValue? : M3DbM3DbUserConfigRulesMappingNamespacesObject[] | cdktf.IResolvable

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
  public get(index: number): M3DbM3DbUserConfigRulesMappingNamespacesObjectOutputReference {
    return new M3DbM3DbUserConfigRulesMappingNamespacesObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbM3DbUserConfigRulesMappingTags {
  /**
  * Name of the tag. Example: `my_tag`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#name M3Db#name}
  */
  readonly name: string;
  /**
  * Value of the tag. Example: `my_value`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#value M3Db#value}
  */
  readonly value: string;
}

export function m3DbM3DbUserConfigRulesMappingTagsToTerraform(struct?: M3DbM3DbUserConfigRulesMappingTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function m3DbM3DbUserConfigRulesMappingTagsToHclTerraform(struct?: M3DbM3DbUserConfigRulesMappingTags | cdktf.IResolvable): any {
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

export class M3DbM3DbUserConfigRulesMappingTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbM3DbUserConfigRulesMappingTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigRulesMappingTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

export class M3DbM3DbUserConfigRulesMappingTagsList extends cdktf.ComplexList {
  public internalValue? : M3DbM3DbUserConfigRulesMappingTags[] | cdktf.IResolvable

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
  public get(index: number): M3DbM3DbUserConfigRulesMappingTagsOutputReference {
    return new M3DbM3DbUserConfigRulesMappingTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbM3DbUserConfigRulesMapping {
  /**
  * List of aggregations to be applied.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#aggregations M3Db#aggregations}
  */
  readonly aggregations?: string[];
  /**
  * Only store the derived metric (as specified in the roll-up rules), if any.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#drop M3Db#drop}
  */
  readonly drop?: boolean | cdktf.IResolvable;
  /**
  * Matching metric names with wildcards (using __name__:wildcard) or matching tags and their (optionally wildcarded) values. For value, ! can be used at start of value for negation, and multiple filters can be supplied using space as separator. Example: `__name__:disk_* host:important-42 mount:!* /sda`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#filter M3Db#filter}
   *
  * Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.
  */
  readonly filter: string;
  /**
  * The (optional) name of the rule. Example: `important disk metrics`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#name M3Db#name}
  */
  readonly name?: string;
  /**
  * This rule will be used to store the metrics in the given namespace(s). If a namespace is target of rules, the global default aggregation will be automatically disabled. Note that specifying filters that match no namespaces whatsoever will be returned as an error. Filter the namespace by glob (=wildcards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#namespaces M3Db#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * This rule will be used to store the metrics in the given namespace(s). If a namespace is target of rules, the global default aggregation will be automatically disabled. Note that specifying filters that match no namespaces whatsoever will be returned as an error. Filter the namespace by glob (=wildcards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#namespaces_string M3Db#namespaces_string}
  */
  readonly namespacesString?: string[];
  /**
  * namespaces_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#namespaces_object M3Db#namespaces_object}
  */
  readonly namespacesObject?: M3DbM3DbUserConfigRulesMappingNamespacesObject[] | cdktf.IResolvable;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#tags M3Db#tags}
  */
  readonly tags?: M3DbM3DbUserConfigRulesMappingTags[] | cdktf.IResolvable;
}

export function m3DbM3DbUserConfigRulesMappingToTerraform(struct?: M3DbM3DbUserConfigRulesMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.aggregations),
    drop: cdktf.booleanToTerraform(struct!.drop),
    filter: cdktf.stringToTerraform(struct!.filter),
    name: cdktf.stringToTerraform(struct!.name),
    namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespaces),
    namespaces_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.namespacesString),
    namespaces_object: cdktf.listMapper(m3DbM3DbUserConfigRulesMappingNamespacesObjectToTerraform, true)(struct!.namespacesObject),
    tags: cdktf.listMapper(m3DbM3DbUserConfigRulesMappingTagsToTerraform, true)(struct!.tags),
  }
}


export function m3DbM3DbUserConfigRulesMappingToHclTerraform(struct?: M3DbM3DbUserConfigRulesMapping | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aggregations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.aggregations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drop: {
      value: cdktf.booleanToHclTerraform(struct!.drop),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    filter: {
      value: cdktf.stringToHclTerraform(struct!.filter),
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
    namespaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces_string: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.namespacesString),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    namespaces_object: {
      value: cdktf.listMapperHcl(m3DbM3DbUserConfigRulesMappingNamespacesObjectToHclTerraform, true)(struct!.namespacesObject),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigRulesMappingNamespacesObjectList",
    },
    tags: {
      value: cdktf.listMapperHcl(m3DbM3DbUserConfigRulesMappingTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigRulesMappingTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigRulesMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbM3DbUserConfigRulesMapping | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aggregations !== undefined) {
      hasAnyValues = true;
      internalValueResult.aggregations = this._aggregations;
    }
    if (this._drop !== undefined) {
      hasAnyValues = true;
      internalValueResult.drop = this._drop;
    }
    if (this._filter !== undefined) {
      hasAnyValues = true;
      internalValueResult.filter = this._filter;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces;
    }
    if (this._namespacesString !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacesString = this._namespacesString;
    }
    if (this._namespacesObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespacesObject = this._namespacesObject?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigRulesMapping | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aggregations = undefined;
      this._drop = undefined;
      this._filter = undefined;
      this._name = undefined;
      this._namespaces = undefined;
      this._namespacesString = undefined;
      this._namespacesObject.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aggregations = value.aggregations;
      this._drop = value.drop;
      this._filter = value.filter;
      this._name = value.name;
      this._namespaces = value.namespaces;
      this._namespacesString = value.namespacesString;
      this._namespacesObject.internalValue = value.namespacesObject;
      this._tags.internalValue = value.tags;
    }
  }

  // aggregations - computed: false, optional: true, required: false
  private _aggregations?: string[]; 
  public get aggregations() {
    return this.getListAttribute('aggregations');
  }
  public set aggregations(value: string[]) {
    this._aggregations = value;
  }
  public resetAggregations() {
    this._aggregations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregationsInput() {
    return this._aggregations;
  }

  // drop - computed: false, optional: true, required: false
  private _drop?: boolean | cdktf.IResolvable; 
  public get drop() {
    return this.getBooleanAttribute('drop');
  }
  public set drop(value: boolean | cdktf.IResolvable) {
    this._drop = value;
  }
  public resetDrop() {
    this._drop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dropInput() {
    return this._drop;
  }

  // filter - computed: false, optional: false, required: true
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // namespaces_string - computed: false, optional: true, required: false
  private _namespacesString?: string[]; 
  public get namespacesString() {
    return this.getListAttribute('namespaces_string');
  }
  public set namespacesString(value: string[]) {
    this._namespacesString = value;
  }
  public resetNamespacesString() {
    this._namespacesString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesStringInput() {
    return this._namespacesString;
  }

  // namespaces_object - computed: false, optional: true, required: false
  private _namespacesObject = new M3DbM3DbUserConfigRulesMappingNamespacesObjectList(this, "namespaces_object", false);
  public get namespacesObject() {
    return this._namespacesObject;
  }
  public putNamespacesObject(value: M3DbM3DbUserConfigRulesMappingNamespacesObject[] | cdktf.IResolvable) {
    this._namespacesObject.internalValue = value;
  }
  public resetNamespacesObject() {
    this._namespacesObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesObjectInput() {
    return this._namespacesObject.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new M3DbM3DbUserConfigRulesMappingTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: M3DbM3DbUserConfigRulesMappingTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class M3DbM3DbUserConfigRulesMappingList extends cdktf.ComplexList {
  public internalValue? : M3DbM3DbUserConfigRulesMapping[] | cdktf.IResolvable

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
  public get(index: number): M3DbM3DbUserConfigRulesMappingOutputReference {
    return new M3DbM3DbUserConfigRulesMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbM3DbUserConfigRules {
  /**
  * mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#mapping M3Db#mapping}
  */
  readonly mapping?: M3DbM3DbUserConfigRulesMapping[] | cdktf.IResolvable;
}

export function m3DbM3DbUserConfigRulesToTerraform(struct?: M3DbM3DbUserConfigRulesOutputReference | M3DbM3DbUserConfigRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mapping: cdktf.listMapper(m3DbM3DbUserConfigRulesMappingToTerraform, true)(struct!.mapping),
  }
}


export function m3DbM3DbUserConfigRulesToHclTerraform(struct?: M3DbM3DbUserConfigRulesOutputReference | M3DbM3DbUserConfigRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mapping: {
      value: cdktf.listMapperHcl(m3DbM3DbUserConfigRulesMappingToHclTerraform, true)(struct!.mapping),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigRulesMappingList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfigRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mapping = this._mapping?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfigRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mapping.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mapping.internalValue = value.mapping;
    }
  }

  // mapping - computed: false, optional: true, required: false
  private _mapping = new M3DbM3DbUserConfigRulesMappingList(this, "mapping", false);
  public get mapping() {
    return this._mapping;
  }
  public putMapping(value: M3DbM3DbUserConfigRulesMapping[] | cdktf.IResolvable) {
    this._mapping.internalValue = value;
  }
  public resetMapping() {
    this._mapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping.internalValue;
  }
}
export interface M3DbM3DbUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#additional_backup_regions M3Db#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Serve the web frontend using a custom CNAME pointing to the Aiven DNS name. Example: `grafana.example.org`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#custom_domain M3Db#custom_domain}
  */
  readonly customDomain?: string;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#ip_filter M3Db#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#ip_filter_string M3Db#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Enum: `1.1`, `1.2`, `1.5`, and newer. M3 major version (deprecated, use m3db_version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3_version M3Db#m3_version}
  */
  readonly m3Version?: string;
  /**
  * Enables access to Graphite Carbon plaintext metrics ingestion. It can be enabled only for services inside VPCs. The metrics are written to aggregated namespaces only.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3coordinator_enable_graphite_carbon_ingest M3Db#m3coordinator_enable_graphite_carbon_ingest}
  */
  readonly m3CoordinatorEnableGraphiteCarbonIngest?: boolean | cdktf.IResolvable;
  /**
  * Enum: `1.1`, `1.2`, `1.5`, and newer. M3 major version (the minimum compatible version).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3db_version M3Db#m3db_version}
  */
  readonly m3DbVersion?: string;
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#project_to_fork_from M3Db#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#service_log M3Db#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#service_to_fork_from M3Db#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#static_ips M3Db#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#ip_filter_object M3Db#ip_filter_object}
  */
  readonly ipFilterObject?: M3DbM3DbUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#limits M3Db#limits}
  */
  readonly limits?: M3DbM3DbUserConfigLimits;
  /**
  * m3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#m3 M3Db#m3}
  */
  readonly m3?: M3DbM3DbUserConfigM3;
  /**
  * namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#namespaces M3Db#namespaces}
  */
  readonly namespaces?: M3DbM3DbUserConfigNamespaces[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#private_access M3Db#private_access}
  */
  readonly privateAccess?: M3DbM3DbUserConfigPrivateAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#public_access M3Db#public_access}
  */
  readonly publicAccess?: M3DbM3DbUserConfigPublicAccess;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#rules M3Db#rules}
  */
  readonly rules?: M3DbM3DbUserConfigRules;
}

export function m3DbM3DbUserConfigToTerraform(struct?: M3DbM3DbUserConfigOutputReference | M3DbM3DbUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    custom_domain: cdktf.stringToTerraform(struct!.customDomain),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    m3_version: cdktf.stringToTerraform(struct!.m3Version),
    m3coordinator_enable_graphite_carbon_ingest: cdktf.booleanToTerraform(struct!.m3CoordinatorEnableGraphiteCarbonIngest),
    m3db_version: cdktf.stringToTerraform(struct!.m3DbVersion),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    ip_filter_object: cdktf.listMapper(m3DbM3DbUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    limits: m3DbM3DbUserConfigLimitsToTerraform(struct!.limits),
    m3: m3DbM3DbUserConfigM3ToTerraform(struct!.m3),
    namespaces: cdktf.listMapper(m3DbM3DbUserConfigNamespacesToTerraform, true)(struct!.namespaces),
    private_access: m3DbM3DbUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    public_access: m3DbM3DbUserConfigPublicAccessToTerraform(struct!.publicAccess),
    rules: m3DbM3DbUserConfigRulesToTerraform(struct!.rules),
  }
}


export function m3DbM3DbUserConfigToHclTerraform(struct?: M3DbM3DbUserConfigOutputReference | M3DbM3DbUserConfig): any {
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
    m3_version: {
      value: cdktf.stringToHclTerraform(struct!.m3Version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    m3coordinator_enable_graphite_carbon_ingest: {
      value: cdktf.booleanToHclTerraform(struct!.m3CoordinatorEnableGraphiteCarbonIngest),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    m3db_version: {
      value: cdktf.stringToHclTerraform(struct!.m3DbVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.projectToForkFrom),
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
    ip_filter_object: {
      value: cdktf.listMapperHcl(m3DbM3DbUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "M3DbM3DbUserConfigIpFilterObjectList",
    },
    limits: {
      value: m3DbM3DbUserConfigLimitsToHclTerraform(struct!.limits),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigLimitsList",
    },
    m3: {
      value: m3DbM3DbUserConfigM3ToHclTerraform(struct!.m3),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigM3List",
    },
    namespaces: {
      value: cdktf.listMapperHcl(m3DbM3DbUserConfigNamespacesToHclTerraform, true)(struct!.namespaces),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigNamespacesList",
    },
    private_access: {
      value: m3DbM3DbUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigPrivateAccessList",
    },
    public_access: {
      value: m3DbM3DbUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigPublicAccessList",
    },
    rules: {
      value: m3DbM3DbUserConfigRulesToHclTerraform(struct!.rules),
      isBlock: true,
      type: "list",
      storageClassType: "M3DbM3DbUserConfigRulesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class M3DbM3DbUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): M3DbM3DbUserConfig | undefined {
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
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._m3Version !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3Version = this._m3Version;
    }
    if (this._m3CoordinatorEnableGraphiteCarbonIngest !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3CoordinatorEnableGraphiteCarbonIngest = this._m3CoordinatorEnableGraphiteCarbonIngest;
    }
    if (this._m3DbVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3DbVersion = this._m3DbVersion;
    }
    if (this._projectToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectToForkFrom = this._projectToForkFrom;
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
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._limits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits?.internalValue;
    }
    if (this._m3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.m3 = this._m3?.internalValue;
    }
    if (this._namespaces?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespaces = this._namespaces?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    if (this._rules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rules = this._rules?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: M3DbM3DbUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._customDomain = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._m3Version = undefined;
      this._m3CoordinatorEnableGraphiteCarbonIngest = undefined;
      this._m3DbVersion = undefined;
      this._projectToForkFrom = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._limits.internalValue = undefined;
      this._m3.internalValue = undefined;
      this._namespaces.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._rules.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._customDomain = value.customDomain;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._m3Version = value.m3Version;
      this._m3CoordinatorEnableGraphiteCarbonIngest = value.m3CoordinatorEnableGraphiteCarbonIngest;
      this._m3DbVersion = value.m3DbVersion;
      this._projectToForkFrom = value.projectToForkFrom;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._limits.internalValue = value.limits;
      this._m3.internalValue = value.m3;
      this._namespaces.internalValue = value.namespaces;
      this._privateAccess.internalValue = value.privateAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._rules.internalValue = value.rules;
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

  // m3_version - computed: false, optional: true, required: false
  private _m3Version?: string; 
  public get m3Version() {
    return this.getStringAttribute('m3_version');
  }
  public set m3Version(value: string) {
    this._m3Version = value;
  }
  public resetM3Version() {
    this._m3Version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3VersionInput() {
    return this._m3Version;
  }

  // m3coordinator_enable_graphite_carbon_ingest - computed: false, optional: true, required: false
  private _m3CoordinatorEnableGraphiteCarbonIngest?: boolean | cdktf.IResolvable; 
  public get m3CoordinatorEnableGraphiteCarbonIngest() {
    return this.getBooleanAttribute('m3coordinator_enable_graphite_carbon_ingest');
  }
  public set m3CoordinatorEnableGraphiteCarbonIngest(value: boolean | cdktf.IResolvable) {
    this._m3CoordinatorEnableGraphiteCarbonIngest = value;
  }
  public resetM3CoordinatorEnableGraphiteCarbonIngest() {
    this._m3CoordinatorEnableGraphiteCarbonIngest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3CoordinatorEnableGraphiteCarbonIngestInput() {
    return this._m3CoordinatorEnableGraphiteCarbonIngest;
  }

  // m3db_version - computed: false, optional: true, required: false
  private _m3DbVersion?: string; 
  public get m3DbVersion() {
    return this.getStringAttribute('m3db_version');
  }
  public set m3DbVersion(value: string) {
    this._m3DbVersion = value;
  }
  public resetM3DbVersion() {
    this._m3DbVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3DbVersionInput() {
    return this._m3DbVersion;
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

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new M3DbM3DbUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: M3DbM3DbUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits = new M3DbM3DbUserConfigLimitsOutputReference(this, "limits");
  public get limits() {
    return this._limits;
  }
  public putLimits(value: M3DbM3DbUserConfigLimits) {
    this._limits.internalValue = value;
  }
  public resetLimits() {
    this._limits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits.internalValue;
  }

  // m3 - computed: false, optional: true, required: false
  private _m3 = new M3DbM3DbUserConfigM3OutputReference(this, "m3");
  public get m3() {
    return this._m3;
  }
  public putM3(value: M3DbM3DbUserConfigM3) {
    this._m3.internalValue = value;
  }
  public resetM3() {
    this._m3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3Input() {
    return this._m3.internalValue;
  }

  // namespaces - computed: false, optional: true, required: false
  private _namespaces = new M3DbM3DbUserConfigNamespacesList(this, "namespaces", false);
  public get namespaces() {
    return this._namespaces;
  }
  public putNamespaces(value: M3DbM3DbUserConfigNamespaces[] | cdktf.IResolvable) {
    this._namespaces.internalValue = value;
  }
  public resetNamespaces() {
    this._namespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new M3DbM3DbUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: M3DbM3DbUserConfigPrivateAccess) {
    this._privateAccess.internalValue = value;
  }
  public resetPrivateAccess() {
    this._privateAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateAccessInput() {
    return this._privateAccess.internalValue;
  }

  // public_access - computed: false, optional: true, required: false
  private _publicAccess = new M3DbM3DbUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: M3DbM3DbUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new M3DbM3DbUserConfigRulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: M3DbM3DbUserConfigRules) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }
}
export interface M3DbServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#integration_type M3Db#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#source_service_name M3Db#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function m3DbServiceIntegrationsToTerraform(struct?: M3DbServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function m3DbServiceIntegrationsToHclTerraform(struct?: M3DbServiceIntegrations | cdktf.IResolvable): any {
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

export class M3DbServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: M3DbServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class M3DbServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : M3DbServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): M3DbServiceIntegrationsOutputReference {
    return new M3DbServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#key M3Db#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#value M3Db#value}
  */
  readonly value: string;
}

export function m3DbTagToTerraform(struct?: M3DbTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function m3DbTagToHclTerraform(struct?: M3DbTag | cdktf.IResolvable): any {
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

export class M3DbTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: M3DbTag | cdktf.IResolvable | undefined) {
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

export class M3DbTagList extends cdktf.ComplexList {
  public internalValue? : M3DbTag[] | cdktf.IResolvable

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
  public get(index: number): M3DbTagOutputReference {
    return new M3DbTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#email M3Db#email}
  */
  readonly email: string;
}

export function m3DbTechEmailsToTerraform(struct?: M3DbTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function m3DbTechEmailsToHclTerraform(struct?: M3DbTechEmails | cdktf.IResolvable): any {
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

export class M3DbTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): M3DbTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: M3DbTechEmails | cdktf.IResolvable | undefined) {
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

export class M3DbTechEmailsList extends cdktf.ComplexList {
  public internalValue? : M3DbTechEmails[] | cdktf.IResolvable

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
  public get(index: number): M3DbTechEmailsOutputReference {
    return new M3DbTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface M3DbTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#create M3Db#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#default M3Db#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#delete M3Db#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#read M3Db#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#update M3Db#update}
  */
  readonly update?: string;
}

export function m3DbTimeoutsToTerraform(struct?: M3DbTimeouts | cdktf.IResolvable): any {
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


export function m3DbTimeoutsToHclTerraform(struct?: M3DbTimeouts | cdktf.IResolvable): any {
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

export class M3DbTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): M3DbTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: M3DbTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db aiven_m3db}
*/
export class M3Db extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_m3db";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a M3Db resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the M3Db to import
  * @param importFromId The id of the existing M3Db that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the M3Db to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_m3db", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/m3db aiven_m3db} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options M3DbConfig
  */
  public constructor(scope: Construct, id: string, config: M3DbConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_m3db',
      terraformGeneratorMetadata: {
        providerName: 'aiven',
        providerVersion: '4.46.1',
        providerVersionConstraint: '4.46.1'
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
    this._m3Db.internalValue = config.m3Db;
    this._m3DbUserConfig.internalValue = config.m3DbUserConfig;
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
  private _components = new M3DbComponentsList(this, "components", false);
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

  // m3db - computed: false, optional: true, required: false
  private _m3Db = new M3DbM3DbOutputReference(this, "m3db");
  public get m3Db() {
    return this._m3Db;
  }
  public putM3Db(value: M3DbM3Db) {
    this._m3Db.internalValue = value;
  }
  public resetM3Db() {
    this._m3Db.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3DbInput() {
    return this._m3Db.internalValue;
  }

  // m3db_user_config - computed: false, optional: true, required: false
  private _m3DbUserConfig = new M3DbM3DbUserConfigOutputReference(this, "m3db_user_config");
  public get m3DbUserConfig() {
    return this._m3DbUserConfig;
  }
  public putM3DbUserConfig(value: M3DbM3DbUserConfig) {
    this._m3DbUserConfig.internalValue = value;
  }
  public resetM3DbUserConfig() {
    this._m3DbUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get m3DbUserConfigInput() {
    return this._m3DbUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new M3DbServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: M3DbServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new M3DbTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: M3DbTag[] | cdktf.IResolvable) {
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
  private _techEmails = new M3DbTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: M3DbTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new M3DbTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: M3DbTimeouts) {
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
      m3db: m3DbM3DbToTerraform(this._m3Db.internalValue),
      m3db_user_config: m3DbM3DbUserConfigToTerraform(this._m3DbUserConfig.internalValue),
      service_integrations: cdktf.listMapper(m3DbServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(m3DbTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(m3DbTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: m3DbTimeoutsToTerraform(this._timeouts.internalValue),
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
      m3db: {
        value: m3DbM3DbToHclTerraform(this._m3Db.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "M3DbM3DbList",
      },
      m3db_user_config: {
        value: m3DbM3DbUserConfigToHclTerraform(this._m3DbUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "M3DbM3DbUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(m3DbServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "M3DbServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(m3DbTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "M3DbTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(m3DbTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "M3DbTechEmailsList",
      },
      timeouts: {
        value: m3DbTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "M3DbTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
