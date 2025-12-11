// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CassandraConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#additional_disk_space Cassandra#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#cloud_name Cassandra#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#disk_space Cassandra#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#id Cassandra#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#maintenance_window_dow Cassandra#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#maintenance_window_time Cassandra#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#plan Cassandra#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#project Cassandra#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#project_vpc_id Cassandra#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#service_name Cassandra#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#static_ips Cassandra#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#termination_protection Cassandra#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * cassandra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#cassandra Cassandra#cassandra}
  */
  readonly cassandra?: CassandraCassandra;
  /**
  * cassandra_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#cassandra_user_config Cassandra#cassandra_user_config}
  */
  readonly cassandraUserConfig?: CassandraCassandraUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#service_integrations Cassandra#service_integrations}
  */
  readonly serviceIntegrations?: CassandraServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#tag Cassandra#tag}
  */
  readonly tag?: CassandraTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#tech_emails Cassandra#tech_emails}
  */
  readonly techEmails?: CassandraTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#timeouts Cassandra#timeouts}
  */
  readonly timeouts?: CassandraTimeouts;
}
export interface CassandraComponents {
}

export function cassandraComponentsToTerraform(struct?: CassandraComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cassandraComponentsToHclTerraform(struct?: CassandraComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CassandraComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CassandraComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraComponents | undefined) {
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

export class CassandraComponentsList extends cdktf.ComplexList {

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
  public get(index: number): CassandraComponentsOutputReference {
    return new CassandraComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraCassandra {
  /**
  * Cassandra server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#uris Cassandra#uris}
  */
  readonly uris?: string[];
}

export function cassandraCassandraToTerraform(struct?: CassandraCassandraOutputReference | CassandraCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function cassandraCassandraToHclTerraform(struct?: CassandraCassandraOutputReference | CassandraCassandra): any {
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

export class CassandraCassandraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CassandraCassandra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraCassandra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uris = value.uris;
    }
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
export interface CassandraCassandraUserConfigCassandra {
  /**
  * Fail any multiple-partition batch exceeding this value. 50kb (10x warn threshold) by default. Example: `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#batch_size_fail_threshold_in_kb Cassandra#batch_size_fail_threshold_in_kb}
  */
  readonly batchSizeFailThresholdInKb?: number;
  /**
  * Log a warning message on any multiple-partition batch size exceeding this value.5kb per batch by default.Caution should be taken on increasing the size of this thresholdas it can lead to node instability. Example: `5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#batch_size_warn_threshold_in_kb Cassandra#batch_size_warn_threshold_in_kb}
  */
  readonly batchSizeWarnThresholdInKb?: number;
  /**
  * Name of the datacenter to which nodes of this service belong. Can be set only when creating the service. Example: `my-service-google-west1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#datacenter Cassandra#datacenter}
  */
  readonly datacenter?: string;
  /**
  * How long the coordinator waits for read operations to complete before timing it out. 5 seconds by default. Example: `5000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#read_request_timeout_in_ms Cassandra#read_request_timeout_in_ms}
  */
  readonly readRequestTimeoutInMs?: number;
  /**
  * How long the coordinator waits for write requests to complete with at least one node in the local datacenter. 2 seconds by default. Example: `2000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#write_request_timeout_in_ms Cassandra#write_request_timeout_in_ms}
  */
  readonly writeRequestTimeoutInMs?: number;
}

export function cassandraCassandraUserConfigCassandraToTerraform(struct?: CassandraCassandraUserConfigCassandraOutputReference | CassandraCassandraUserConfigCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    batch_size_fail_threshold_in_kb: cdktf.numberToTerraform(struct!.batchSizeFailThresholdInKb),
    batch_size_warn_threshold_in_kb: cdktf.numberToTerraform(struct!.batchSizeWarnThresholdInKb),
    datacenter: cdktf.stringToTerraform(struct!.datacenter),
    read_request_timeout_in_ms: cdktf.numberToTerraform(struct!.readRequestTimeoutInMs),
    write_request_timeout_in_ms: cdktf.numberToTerraform(struct!.writeRequestTimeoutInMs),
  }
}


export function cassandraCassandraUserConfigCassandraToHclTerraform(struct?: CassandraCassandraUserConfigCassandraOutputReference | CassandraCassandraUserConfigCassandra): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    batch_size_fail_threshold_in_kb: {
      value: cdktf.numberToHclTerraform(struct!.batchSizeFailThresholdInKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    batch_size_warn_threshold_in_kb: {
      value: cdktf.numberToHclTerraform(struct!.batchSizeWarnThresholdInKb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    datacenter: {
      value: cdktf.stringToHclTerraform(struct!.datacenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_request_timeout_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.readRequestTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    write_request_timeout_in_ms: {
      value: cdktf.numberToHclTerraform(struct!.writeRequestTimeoutInMs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraCassandraUserConfigCassandraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CassandraCassandraUserConfigCassandra | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._batchSizeFailThresholdInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizeFailThresholdInKb = this._batchSizeFailThresholdInKb;
    }
    if (this._batchSizeWarnThresholdInKb !== undefined) {
      hasAnyValues = true;
      internalValueResult.batchSizeWarnThresholdInKb = this._batchSizeWarnThresholdInKb;
    }
    if (this._datacenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.datacenter = this._datacenter;
    }
    if (this._readRequestTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.readRequestTimeoutInMs = this._readRequestTimeoutInMs;
    }
    if (this._writeRequestTimeoutInMs !== undefined) {
      hasAnyValues = true;
      internalValueResult.writeRequestTimeoutInMs = this._writeRequestTimeoutInMs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraCassandraUserConfigCassandra | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._batchSizeFailThresholdInKb = undefined;
      this._batchSizeWarnThresholdInKb = undefined;
      this._datacenter = undefined;
      this._readRequestTimeoutInMs = undefined;
      this._writeRequestTimeoutInMs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._batchSizeFailThresholdInKb = value.batchSizeFailThresholdInKb;
      this._batchSizeWarnThresholdInKb = value.batchSizeWarnThresholdInKb;
      this._datacenter = value.datacenter;
      this._readRequestTimeoutInMs = value.readRequestTimeoutInMs;
      this._writeRequestTimeoutInMs = value.writeRequestTimeoutInMs;
    }
  }

  // batch_size_fail_threshold_in_kb - computed: false, optional: true, required: false
  private _batchSizeFailThresholdInKb?: number; 
  public get batchSizeFailThresholdInKb() {
    return this.getNumberAttribute('batch_size_fail_threshold_in_kb');
  }
  public set batchSizeFailThresholdInKb(value: number) {
    this._batchSizeFailThresholdInKb = value;
  }
  public resetBatchSizeFailThresholdInKb() {
    this._batchSizeFailThresholdInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeFailThresholdInKbInput() {
    return this._batchSizeFailThresholdInKb;
  }

  // batch_size_warn_threshold_in_kb - computed: false, optional: true, required: false
  private _batchSizeWarnThresholdInKb?: number; 
  public get batchSizeWarnThresholdInKb() {
    return this.getNumberAttribute('batch_size_warn_threshold_in_kb');
  }
  public set batchSizeWarnThresholdInKb(value: number) {
    this._batchSizeWarnThresholdInKb = value;
  }
  public resetBatchSizeWarnThresholdInKb() {
    this._batchSizeWarnThresholdInKb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get batchSizeWarnThresholdInKbInput() {
    return this._batchSizeWarnThresholdInKb;
  }

  // datacenter - computed: false, optional: true, required: false
  private _datacenter?: string; 
  public get datacenter() {
    return this.getStringAttribute('datacenter');
  }
  public set datacenter(value: string) {
    this._datacenter = value;
  }
  public resetDatacenter() {
    this._datacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterInput() {
    return this._datacenter;
  }

  // read_request_timeout_in_ms - computed: false, optional: true, required: false
  private _readRequestTimeoutInMs?: number; 
  public get readRequestTimeoutInMs() {
    return this.getNumberAttribute('read_request_timeout_in_ms');
  }
  public set readRequestTimeoutInMs(value: number) {
    this._readRequestTimeoutInMs = value;
  }
  public resetReadRequestTimeoutInMs() {
    this._readRequestTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readRequestTimeoutInMsInput() {
    return this._readRequestTimeoutInMs;
  }

  // write_request_timeout_in_ms - computed: false, optional: true, required: false
  private _writeRequestTimeoutInMs?: number; 
  public get writeRequestTimeoutInMs() {
    return this.getNumberAttribute('write_request_timeout_in_ms');
  }
  public set writeRequestTimeoutInMs(value: number) {
    this._writeRequestTimeoutInMs = value;
  }
  public resetWriteRequestTimeoutInMs() {
    this._writeRequestTimeoutInMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get writeRequestTimeoutInMsInput() {
    return this._writeRequestTimeoutInMs;
  }
}
export interface CassandraCassandraUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#description Cassandra#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#network Cassandra#network}
  */
  readonly network: string;
}

export function cassandraCassandraUserConfigIpFilterObjectToTerraform(struct?: CassandraCassandraUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function cassandraCassandraUserConfigIpFilterObjectToHclTerraform(struct?: CassandraCassandraUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class CassandraCassandraUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CassandraCassandraUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CassandraCassandraUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class CassandraCassandraUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : CassandraCassandraUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): CassandraCassandraUserConfigIpFilterObjectOutputReference {
    return new CassandraCassandraUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraCassandraUserConfigPrivateAccess {
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#prometheus Cassandra#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function cassandraCassandraUserConfigPrivateAccessToTerraform(struct?: CassandraCassandraUserConfigPrivateAccessOutputReference | CassandraCassandraUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function cassandraCassandraUserConfigPrivateAccessToHclTerraform(struct?: CassandraCassandraUserConfigPrivateAccessOutputReference | CassandraCassandraUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraCassandraUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CassandraCassandraUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraCassandraUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prometheus = value.prometheus;
    }
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface CassandraCassandraUserConfigPublicAccess {
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#prometheus Cassandra#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function cassandraCassandraUserConfigPublicAccessToTerraform(struct?: CassandraCassandraUserConfigPublicAccessOutputReference | CassandraCassandraUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function cassandraCassandraUserConfigPublicAccessToHclTerraform(struct?: CassandraCassandraUserConfigPublicAccessOutputReference | CassandraCassandraUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prometheus: {
      value: cdktf.booleanToHclTerraform(struct!.prometheus),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraCassandraUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CassandraCassandraUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraCassandraUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prometheus = value.prometheus;
    }
  }

  // prometheus - computed: false, optional: true, required: false
  private _prometheus?: boolean | cdktf.IResolvable; 
  public get prometheus() {
    return this.getBooleanAttribute('prometheus');
  }
  public set prometheus(value: boolean | cdktf.IResolvable) {
    this._prometheus = value;
  }
  public resetPrometheus() {
    this._prometheus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prometheusInput() {
    return this._prometheus;
  }
}
export interface CassandraCassandraUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#additional_backup_regions Cassandra#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed. Example: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#backup_hour Cassandra#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#backup_minute Cassandra#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Enum: `3`, `4`, `4.1`, and newer. Cassandra version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#cassandra_version Cassandra#cassandra_version}
  */
  readonly cassandraVersion?: string;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#ip_filter Cassandra#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#ip_filter_string Cassandra#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Sets the service into migration mode enabling the sstableloader utility to be used to upload Cassandra data files. Available only on service create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#migrate_sstableloader Cassandra#migrate_sstableloader}
  */
  readonly migrateSstableloader?: boolean | cdktf.IResolvable;
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#project_to_fork_from Cassandra#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#service_log Cassandra#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#service_to_fork_from Cassandra#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * When bootstrapping, instead of creating a new Cassandra cluster try to join an existing one from another service. Can only be set on service creation. Example: `my-test-cassandra`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#service_to_join_with Cassandra#service_to_join_with}
  */
  readonly serviceToJoinWith?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#static_ips Cassandra#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * cassandra block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#cassandra Cassandra#cassandra}
  */
  readonly cassandra?: CassandraCassandraUserConfigCassandra;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#ip_filter_object Cassandra#ip_filter_object}
  */
  readonly ipFilterObject?: CassandraCassandraUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#private_access Cassandra#private_access}
  */
  readonly privateAccess?: CassandraCassandraUserConfigPrivateAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#public_access Cassandra#public_access}
  */
  readonly publicAccess?: CassandraCassandraUserConfigPublicAccess;
}

export function cassandraCassandraUserConfigToTerraform(struct?: CassandraCassandraUserConfigOutputReference | CassandraCassandraUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    cassandra_version: cdktf.stringToTerraform(struct!.cassandraVersion),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    migrate_sstableloader: cdktf.booleanToTerraform(struct!.migrateSstableloader),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    service_to_join_with: cdktf.stringToTerraform(struct!.serviceToJoinWith),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    cassandra: cassandraCassandraUserConfigCassandraToTerraform(struct!.cassandra),
    ip_filter_object: cdktf.listMapper(cassandraCassandraUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    private_access: cassandraCassandraUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    public_access: cassandraCassandraUserConfigPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function cassandraCassandraUserConfigToHclTerraform(struct?: CassandraCassandraUserConfigOutputReference | CassandraCassandraUserConfig): any {
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
    backup_hour: {
      value: cdktf.numberToHclTerraform(struct!.backupHour),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_minute: {
      value: cdktf.numberToHclTerraform(struct!.backupMinute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cassandra_version: {
      value: cdktf.stringToHclTerraform(struct!.cassandraVersion),
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
    migrate_sstableloader: {
      value: cdktf.booleanToHclTerraform(struct!.migrateSstableloader),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    service_to_join_with: {
      value: cdktf.stringToHclTerraform(struct!.serviceToJoinWith),
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
    cassandra: {
      value: cassandraCassandraUserConfigCassandraToHclTerraform(struct!.cassandra),
      isBlock: true,
      type: "list",
      storageClassType: "CassandraCassandraUserConfigCassandraList",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(cassandraCassandraUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "CassandraCassandraUserConfigIpFilterObjectList",
    },
    private_access: {
      value: cassandraCassandraUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "CassandraCassandraUserConfigPrivateAccessList",
    },
    public_access: {
      value: cassandraCassandraUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "CassandraCassandraUserConfigPublicAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CassandraCassandraUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CassandraCassandraUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._cassandraVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.cassandraVersion = this._cassandraVersion;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._migrateSstableloader !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrateSstableloader = this._migrateSstableloader;
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
    if (this._serviceToJoinWith !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceToJoinWith = this._serviceToJoinWith;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._cassandra?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cassandra = this._cassandra?.internalValue;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._privateAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateAccess = this._privateAccess?.internalValue;
    }
    if (this._publicAccess?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicAccess = this._publicAccess?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CassandraCassandraUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._cassandraVersion = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._migrateSstableloader = undefined;
      this._projectToForkFrom = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._serviceToJoinWith = undefined;
      this._staticIps = undefined;
      this._cassandra.internalValue = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._cassandraVersion = value.cassandraVersion;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._migrateSstableloader = value.migrateSstableloader;
      this._projectToForkFrom = value.projectToForkFrom;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._serviceToJoinWith = value.serviceToJoinWith;
      this._staticIps = value.staticIps;
      this._cassandra.internalValue = value.cassandra;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._privateAccess.internalValue = value.privateAccess;
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

  // backup_hour - computed: false, optional: true, required: false
  private _backupHour?: number; 
  public get backupHour() {
    return this.getNumberAttribute('backup_hour');
  }
  public set backupHour(value: number) {
    this._backupHour = value;
  }
  public resetBackupHour() {
    this._backupHour = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupHourInput() {
    return this._backupHour;
  }

  // backup_minute - computed: false, optional: true, required: false
  private _backupMinute?: number; 
  public get backupMinute() {
    return this.getNumberAttribute('backup_minute');
  }
  public set backupMinute(value: number) {
    this._backupMinute = value;
  }
  public resetBackupMinute() {
    this._backupMinute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupMinuteInput() {
    return this._backupMinute;
  }

  // cassandra_version - computed: false, optional: true, required: false
  private _cassandraVersion?: string; 
  public get cassandraVersion() {
    return this.getStringAttribute('cassandra_version');
  }
  public set cassandraVersion(value: string) {
    this._cassandraVersion = value;
  }
  public resetCassandraVersion() {
    this._cassandraVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraVersionInput() {
    return this._cassandraVersion;
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

  // migrate_sstableloader - computed: false, optional: true, required: false
  private _migrateSstableloader?: boolean | cdktf.IResolvable; 
  public get migrateSstableloader() {
    return this.getBooleanAttribute('migrate_sstableloader');
  }
  public set migrateSstableloader(value: boolean | cdktf.IResolvable) {
    this._migrateSstableloader = value;
  }
  public resetMigrateSstableloader() {
    this._migrateSstableloader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateSstableloaderInput() {
    return this._migrateSstableloader;
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

  // service_to_join_with - computed: false, optional: true, required: false
  private _serviceToJoinWith?: string; 
  public get serviceToJoinWith() {
    return this.getStringAttribute('service_to_join_with');
  }
  public set serviceToJoinWith(value: string) {
    this._serviceToJoinWith = value;
  }
  public resetServiceToJoinWith() {
    this._serviceToJoinWith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceToJoinWithInput() {
    return this._serviceToJoinWith;
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

  // cassandra - computed: false, optional: true, required: false
  private _cassandra = new CassandraCassandraUserConfigCassandraOutputReference(this, "cassandra");
  public get cassandra() {
    return this._cassandra;
  }
  public putCassandra(value: CassandraCassandraUserConfigCassandra) {
    this._cassandra.internalValue = value;
  }
  public resetCassandra() {
    this._cassandra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraInput() {
    return this._cassandra.internalValue;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new CassandraCassandraUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: CassandraCassandraUserConfigIpFilterObject[] | cdktf.IResolvable) {
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
  private _privateAccess = new CassandraCassandraUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: CassandraCassandraUserConfigPrivateAccess) {
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
  private _publicAccess = new CassandraCassandraUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: CassandraCassandraUserConfigPublicAccess) {
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
export interface CassandraServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#integration_type Cassandra#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#source_service_name Cassandra#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function cassandraServiceIntegrationsToTerraform(struct?: CassandraServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function cassandraServiceIntegrationsToHclTerraform(struct?: CassandraServiceIntegrations | cdktf.IResolvable): any {
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

export class CassandraServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CassandraServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CassandraServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class CassandraServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : CassandraServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): CassandraServiceIntegrationsOutputReference {
    return new CassandraServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#key Cassandra#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#value Cassandra#value}
  */
  readonly value: string;
}

export function cassandraTagToTerraform(struct?: CassandraTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function cassandraTagToHclTerraform(struct?: CassandraTag | cdktf.IResolvable): any {
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

export class CassandraTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CassandraTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CassandraTag | cdktf.IResolvable | undefined) {
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

export class CassandraTagList extends cdktf.ComplexList {
  public internalValue? : CassandraTag[] | cdktf.IResolvable

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
  public get(index: number): CassandraTagOutputReference {
    return new CassandraTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#email Cassandra#email}
  */
  readonly email: string;
}

export function cassandraTechEmailsToTerraform(struct?: CassandraTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function cassandraTechEmailsToHclTerraform(struct?: CassandraTechEmails | cdktf.IResolvable): any {
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

export class CassandraTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CassandraTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CassandraTechEmails | cdktf.IResolvable | undefined) {
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

export class CassandraTechEmailsList extends cdktf.ComplexList {
  public internalValue? : CassandraTechEmails[] | cdktf.IResolvable

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
  public get(index: number): CassandraTechEmailsOutputReference {
    return new CassandraTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CassandraTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#create Cassandra#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#default Cassandra#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#delete Cassandra#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#read Cassandra#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#update Cassandra#update}
  */
  readonly update?: string;
}

export function cassandraTimeoutsToTerraform(struct?: CassandraTimeouts | cdktf.IResolvable): any {
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


export function cassandraTimeoutsToHclTerraform(struct?: CassandraTimeouts | cdktf.IResolvable): any {
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

export class CassandraTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CassandraTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CassandraTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra aiven_cassandra}
*/
export class Cassandra extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_cassandra";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Cassandra resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Cassandra to import
  * @param importFromId The id of the existing Cassandra that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Cassandra to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_cassandra", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/cassandra aiven_cassandra} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CassandraConfig
  */
  public constructor(scope: Construct, id: string, config: CassandraConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_cassandra',
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
    this._cassandra.internalValue = config.cassandra;
    this._cassandraUserConfig.internalValue = config.cassandraUserConfig;
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
  private _components = new CassandraComponentsList(this, "components", false);
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

  // cassandra - computed: false, optional: true, required: false
  private _cassandra = new CassandraCassandraOutputReference(this, "cassandra");
  public get cassandra() {
    return this._cassandra;
  }
  public putCassandra(value: CassandraCassandra) {
    this._cassandra.internalValue = value;
  }
  public resetCassandra() {
    this._cassandra.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraInput() {
    return this._cassandra.internalValue;
  }

  // cassandra_user_config - computed: false, optional: true, required: false
  private _cassandraUserConfig = new CassandraCassandraUserConfigOutputReference(this, "cassandra_user_config");
  public get cassandraUserConfig() {
    return this._cassandraUserConfig;
  }
  public putCassandraUserConfig(value: CassandraCassandraUserConfig) {
    this._cassandraUserConfig.internalValue = value;
  }
  public resetCassandraUserConfig() {
    this._cassandraUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cassandraUserConfigInput() {
    return this._cassandraUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new CassandraServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: CassandraServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new CassandraTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: CassandraTag[] | cdktf.IResolvable) {
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
  private _techEmails = new CassandraTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: CassandraTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new CassandraTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CassandraTimeouts) {
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
      cassandra: cassandraCassandraToTerraform(this._cassandra.internalValue),
      cassandra_user_config: cassandraCassandraUserConfigToTerraform(this._cassandraUserConfig.internalValue),
      service_integrations: cdktf.listMapper(cassandraServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(cassandraTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(cassandraTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: cassandraTimeoutsToTerraform(this._timeouts.internalValue),
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
      cassandra: {
        value: cassandraCassandraToHclTerraform(this._cassandra.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CassandraCassandraList",
      },
      cassandra_user_config: {
        value: cassandraCassandraUserConfigToHclTerraform(this._cassandraUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CassandraCassandraUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(cassandraServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CassandraServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(cassandraTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CassandraTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(cassandraTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CassandraTechEmailsList",
      },
      timeouts: {
        value: cassandraTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CassandraTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
