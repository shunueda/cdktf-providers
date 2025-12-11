// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DragonflyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#additional_disk_space Dragonfly#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#cloud_name Dragonfly#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#disk_space Dragonfly#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#id Dragonfly#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#maintenance_window_dow Dragonfly#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#maintenance_window_time Dragonfly#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#plan Dragonfly#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#project Dragonfly#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#project_vpc_id Dragonfly#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#service_name Dragonfly#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#static_ips Dragonfly#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#termination_protection Dragonfly#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * dragonfly block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly Dragonfly#dragonfly}
  */
  readonly dragonfly?: DragonflyDragonfly;
  /**
  * dragonfly_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly_user_config Dragonfly#dragonfly_user_config}
  */
  readonly dragonflyUserConfig?: DragonflyDragonflyUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#service_integrations Dragonfly#service_integrations}
  */
  readonly serviceIntegrations?: DragonflyServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#tag Dragonfly#tag}
  */
  readonly tag?: DragonflyTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#tech_emails Dragonfly#tech_emails}
  */
  readonly techEmails?: DragonflyTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#timeouts Dragonfly#timeouts}
  */
  readonly timeouts?: DragonflyTimeouts;
}
export interface DragonflyComponents {
}

export function dragonflyComponentsToTerraform(struct?: DragonflyComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dragonflyComponentsToHclTerraform(struct?: DragonflyComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DragonflyComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DragonflyComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DragonflyComponents | undefined) {
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

export class DragonflyComponentsList extends cdktf.ComplexList {

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
  public get(index: number): DragonflyComponentsOutputReference {
    return new DragonflyComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DragonflyDragonfly {
  /**
  * Dragonfly slave server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#slave_uris Dragonfly#slave_uris}
  */
  readonly slaveUris?: string[];
  /**
  * Dragonfly server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#uris Dragonfly#uris}
  */
  readonly uris?: string[];
}

export function dragonflyDragonflyToTerraform(struct?: DragonflyDragonflyOutputReference | DragonflyDragonfly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    slave_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.slaveUris),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function dragonflyDragonflyToHclTerraform(struct?: DragonflyDragonflyOutputReference | DragonflyDragonfly): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    slave_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.slaveUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
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

export class DragonflyDragonflyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DragonflyDragonfly | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._slaveUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.slaveUris = this._slaveUris;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DragonflyDragonfly | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._slaveUris = undefined;
      this._uris = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._slaveUris = value.slaveUris;
      this._uris = value.uris;
    }
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // replica_uri - computed: true, optional: false, required: false
  public get replicaUri() {
    return this.getStringAttribute('replica_uri');
  }

  // slave_uris - computed: true, optional: true, required: false
  private _slaveUris?: string[]; 
  public get slaveUris() {
    return this.getListAttribute('slave_uris');
  }
  public set slaveUris(value: string[]) {
    this._slaveUris = value;
  }
  public resetSlaveUris() {
    this._slaveUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slaveUrisInput() {
    return this._slaveUris;
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
export interface DragonflyDragonflyUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#description Dragonfly#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#network Dragonfly#network}
  */
  readonly network: string;
}

export function dragonflyDragonflyUserConfigIpFilterObjectToTerraform(struct?: DragonflyDragonflyUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function dragonflyDragonflyUserConfigIpFilterObjectToHclTerraform(struct?: DragonflyDragonflyUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class DragonflyDragonflyUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DragonflyDragonflyUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DragonflyDragonflyUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class DragonflyDragonflyUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : DragonflyDragonflyUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): DragonflyDragonflyUserConfigIpFilterObjectOutputReference {
    return new DragonflyDragonflyUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DragonflyDragonflyUserConfigMigration {
  /**
  * Database name for bootstrapping the initial connection. Example: `defaultdb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dbname Dragonfly#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from. Example: `my.server.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#host Dragonfly#host}
  */
  readonly host: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). Example: `db1,db2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#ignore_dbs Dragonfly#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). Example: `role1,role2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#ignore_roles Dragonfly#ignore_roles}
  */
  readonly ignoreRoles?: string;
  /**
  * Enum: `dump`, `replication`. The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#method Dragonfly#method}
  */
  readonly method?: string;
  /**
  * Password for authentication with the server where to migrate data from. Example: `jjKk45Nnd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#password Dragonfly#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from. Example: `1234`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#port Dragonfly#port}
  */
  readonly port: number;
  /**
  * The server where to migrate data from is secured with SSL. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#ssl Dragonfly#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from. Example: `myname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#username Dragonfly#username}
  */
  readonly username?: string;
}

export function dragonflyDragonflyUserConfigMigrationToTerraform(struct?: DragonflyDragonflyUserConfigMigrationOutputReference | DragonflyDragonflyUserConfigMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    host: cdktf.stringToTerraform(struct!.host),
    ignore_dbs: cdktf.stringToTerraform(struct!.ignoreDbs),
    ignore_roles: cdktf.stringToTerraform(struct!.ignoreRoles),
    method: cdktf.stringToTerraform(struct!.method),
    password: cdktf.stringToTerraform(struct!.password),
    port: cdktf.numberToTerraform(struct!.port),
    ssl: cdktf.booleanToTerraform(struct!.ssl),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dragonflyDragonflyUserConfigMigrationToHclTerraform(struct?: DragonflyDragonflyUserConfigMigrationOutputReference | DragonflyDragonflyUserConfigMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dbname: {
      value: cdktf.stringToHclTerraform(struct!.dbname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_dbs: {
      value: cdktf.stringToHclTerraform(struct!.ignoreDbs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ignore_roles: {
      value: cdktf.stringToHclTerraform(struct!.ignoreRoles),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method: {
      value: cdktf.stringToHclTerraform(struct!.method),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ssl: {
      value: cdktf.booleanToHclTerraform(struct!.ssl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DragonflyDragonflyUserConfigMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DragonflyDragonflyUserConfigMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._ignoreDbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDbs = this._ignoreDbs;
    }
    if (this._ignoreRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreRoles = this._ignoreRoles;
    }
    if (this._method !== undefined) {
      hasAnyValues = true;
      internalValueResult.method = this._method;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._ssl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssl = this._ssl;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DragonflyDragonflyUserConfigMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbname = undefined;
      this._host = undefined;
      this._ignoreDbs = undefined;
      this._ignoreRoles = undefined;
      this._method = undefined;
      this._password = undefined;
      this._port = undefined;
      this._ssl = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dbname = value.dbname;
      this._host = value.host;
      this._ignoreDbs = value.ignoreDbs;
      this._ignoreRoles = value.ignoreRoles;
      this._method = value.method;
      this._password = value.password;
      this._port = value.port;
      this._ssl = value.ssl;
      this._username = value.username;
    }
  }

  // dbname - computed: false, optional: true, required: false
  private _dbname?: string; 
  public get dbname() {
    return this.getStringAttribute('dbname');
  }
  public set dbname(value: string) {
    this._dbname = value;
  }
  public resetDbname() {
    this._dbname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbnameInput() {
    return this._dbname;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // ignore_dbs - computed: false, optional: true, required: false
  private _ignoreDbs?: string; 
  public get ignoreDbs() {
    return this.getStringAttribute('ignore_dbs');
  }
  public set ignoreDbs(value: string) {
    this._ignoreDbs = value;
  }
  public resetIgnoreDbs() {
    this._ignoreDbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDbsInput() {
    return this._ignoreDbs;
  }

  // ignore_roles - computed: false, optional: true, required: false
  private _ignoreRoles?: string; 
  public get ignoreRoles() {
    return this.getStringAttribute('ignore_roles');
  }
  public set ignoreRoles(value: string) {
    this._ignoreRoles = value;
  }
  public resetIgnoreRoles() {
    this._ignoreRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreRolesInput() {
    return this._ignoreRoles;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // ssl - computed: false, optional: true, required: false
  private _ssl?: boolean | cdktf.IResolvable; 
  public get ssl() {
    return this.getBooleanAttribute('ssl');
  }
  public set ssl(value: boolean | cdktf.IResolvable) {
    this._ssl = value;
  }
  public resetSsl() {
    this._ssl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInput() {
    return this._ssl;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DragonflyDragonflyUserConfigPrivateAccess {
  /**
  * Allow clients to connect to dragonfly with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly Dragonfly#dragonfly}
  */
  readonly dragonfly?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#prometheus Dragonfly#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function dragonflyDragonflyUserConfigPrivateAccessToTerraform(struct?: DragonflyDragonflyUserConfigPrivateAccessOutputReference | DragonflyDragonflyUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dragonfly: cdktf.booleanToTerraform(struct!.dragonfly),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function dragonflyDragonflyUserConfigPrivateAccessToHclTerraform(struct?: DragonflyDragonflyUserConfigPrivateAccessOutputReference | DragonflyDragonflyUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dragonfly: {
      value: cdktf.booleanToHclTerraform(struct!.dragonfly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DragonflyDragonflyUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DragonflyDragonflyUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dragonfly !== undefined) {
      hasAnyValues = true;
      internalValueResult.dragonfly = this._dragonfly;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DragonflyDragonflyUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dragonfly = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dragonfly = value.dragonfly;
      this._prometheus = value.prometheus;
    }
  }

  // dragonfly - computed: false, optional: true, required: false
  private _dragonfly?: boolean | cdktf.IResolvable; 
  public get dragonfly() {
    return this.getBooleanAttribute('dragonfly');
  }
  public set dragonfly(value: boolean | cdktf.IResolvable) {
    this._dragonfly = value;
  }
  public resetDragonfly() {
    this._dragonfly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflyInput() {
    return this._dragonfly;
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
export interface DragonflyDragonflyUserConfigPrivatelinkAccess {
  /**
  * Enable dragonfly.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly Dragonfly#dragonfly}
  */
  readonly dragonfly?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#prometheus Dragonfly#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function dragonflyDragonflyUserConfigPrivatelinkAccessToTerraform(struct?: DragonflyDragonflyUserConfigPrivatelinkAccessOutputReference | DragonflyDragonflyUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dragonfly: cdktf.booleanToTerraform(struct!.dragonfly),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function dragonflyDragonflyUserConfigPrivatelinkAccessToHclTerraform(struct?: DragonflyDragonflyUserConfigPrivatelinkAccessOutputReference | DragonflyDragonflyUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dragonfly: {
      value: cdktf.booleanToHclTerraform(struct!.dragonfly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DragonflyDragonflyUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DragonflyDragonflyUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dragonfly !== undefined) {
      hasAnyValues = true;
      internalValueResult.dragonfly = this._dragonfly;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DragonflyDragonflyUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dragonfly = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dragonfly = value.dragonfly;
      this._prometheus = value.prometheus;
    }
  }

  // dragonfly - computed: false, optional: true, required: false
  private _dragonfly?: boolean | cdktf.IResolvable; 
  public get dragonfly() {
    return this.getBooleanAttribute('dragonfly');
  }
  public set dragonfly(value: boolean | cdktf.IResolvable) {
    this._dragonfly = value;
  }
  public resetDragonfly() {
    this._dragonfly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflyInput() {
    return this._dragonfly;
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
export interface DragonflyDragonflyUserConfigPublicAccess {
  /**
  * Allow clients to connect to dragonfly from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly Dragonfly#dragonfly}
  */
  readonly dragonfly?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#prometheus Dragonfly#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function dragonflyDragonflyUserConfigPublicAccessToTerraform(struct?: DragonflyDragonflyUserConfigPublicAccessOutputReference | DragonflyDragonflyUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dragonfly: cdktf.booleanToTerraform(struct!.dragonfly),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function dragonflyDragonflyUserConfigPublicAccessToHclTerraform(struct?: DragonflyDragonflyUserConfigPublicAccessOutputReference | DragonflyDragonflyUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dragonfly: {
      value: cdktf.booleanToHclTerraform(struct!.dragonfly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class DragonflyDragonflyUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DragonflyDragonflyUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dragonfly !== undefined) {
      hasAnyValues = true;
      internalValueResult.dragonfly = this._dragonfly;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DragonflyDragonflyUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dragonfly = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dragonfly = value.dragonfly;
      this._prometheus = value.prometheus;
    }
  }

  // dragonfly - computed: false, optional: true, required: false
  private _dragonfly?: boolean | cdktf.IResolvable; 
  public get dragonfly() {
    return this.getBooleanAttribute('dragonfly');
  }
  public set dragonfly(value: boolean | cdktf.IResolvable) {
    this._dragonfly = value;
  }
  public resetDragonfly() {
    this._dragonfly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflyInput() {
    return this._dragonfly;
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
export interface DragonflyDragonflyUserConfig {
  /**
  * Evict entries when getting close to maxmemory limit. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#cache_mode Dragonfly#cache_mode}
  */
  readonly cacheMode?: boolean | cdktf.IResolvable;
  /**
  * Enum: `dfs`, `off`, `rdb`. When persistence is `rdb` or `dfs`, Dragonfly does RDB or DFS dumps every 10 minutes. Dumps are done according to the backup schedule for backup purposes. When persistence is `off`, no RDB/DFS dumps or backups are done, so data can be lost at any moment if the service is restarted for any reason, or if the service is powered off. Also, the service can't be forked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly_persistence Dragonfly#dragonfly_persistence}
  */
  readonly dragonflyPersistence?: string;
  /**
  * Require SSL to access Dragonfly. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#dragonfly_ssl Dragonfly#dragonfly_ssl}
  */
  readonly dragonflySsl?: boolean | cdktf.IResolvable;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#ip_filter Dragonfly#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#ip_filter_string Dragonfly#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#project_to_fork_from Dragonfly#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Name of the basebackup to restore in forked service. Example: `backup-20191112t091354293891z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#recovery_basebackup_name Dragonfly#recovery_basebackup_name}
  */
  readonly recoveryBasebackupName?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#service_log Dragonfly#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#service_to_fork_from Dragonfly#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#static_ips Dragonfly#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#ip_filter_object Dragonfly#ip_filter_object}
  */
  readonly ipFilterObject?: DragonflyDragonflyUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#migration Dragonfly#migration}
  */
  readonly migration?: DragonflyDragonflyUserConfigMigration;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#private_access Dragonfly#private_access}
  */
  readonly privateAccess?: DragonflyDragonflyUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#privatelink_access Dragonfly#privatelink_access}
  */
  readonly privatelinkAccess?: DragonflyDragonflyUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#public_access Dragonfly#public_access}
  */
  readonly publicAccess?: DragonflyDragonflyUserConfigPublicAccess;
}

export function dragonflyDragonflyUserConfigToTerraform(struct?: DragonflyDragonflyUserConfigOutputReference | DragonflyDragonflyUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cache_mode: cdktf.booleanToTerraform(struct!.cacheMode),
    dragonfly_persistence: cdktf.stringToTerraform(struct!.dragonflyPersistence),
    dragonfly_ssl: cdktf.booleanToTerraform(struct!.dragonflySsl),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_basebackup_name: cdktf.stringToTerraform(struct!.recoveryBasebackupName),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    ip_filter_object: cdktf.listMapper(dragonflyDragonflyUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    migration: dragonflyDragonflyUserConfigMigrationToTerraform(struct!.migration),
    private_access: dragonflyDragonflyUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: dragonflyDragonflyUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: dragonflyDragonflyUserConfigPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function dragonflyDragonflyUserConfigToHclTerraform(struct?: DragonflyDragonflyUserConfigOutputReference | DragonflyDragonflyUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cache_mode: {
      value: cdktf.booleanToHclTerraform(struct!.cacheMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dragonfly_persistence: {
      value: cdktf.stringToHclTerraform(struct!.dragonflyPersistence),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dragonfly_ssl: {
      value: cdktf.booleanToHclTerraform(struct!.dragonflySsl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
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
    ip_filter_object: {
      value: cdktf.listMapperHcl(dragonflyDragonflyUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "DragonflyDragonflyUserConfigIpFilterObjectList",
    },
    migration: {
      value: dragonflyDragonflyUserConfigMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "list",
      storageClassType: "DragonflyDragonflyUserConfigMigrationList",
    },
    private_access: {
      value: dragonflyDragonflyUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DragonflyDragonflyUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: dragonflyDragonflyUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DragonflyDragonflyUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: dragonflyDragonflyUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "DragonflyDragonflyUserConfigPublicAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DragonflyDragonflyUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DragonflyDragonflyUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cacheMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheMode = this._cacheMode;
    }
    if (this._dragonflyPersistence !== undefined) {
      hasAnyValues = true;
      internalValueResult.dragonflyPersistence = this._dragonflyPersistence;
    }
    if (this._dragonflySsl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dragonflySsl = this._dragonflySsl;
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
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
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

  public set internalValue(value: DragonflyDragonflyUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cacheMode = undefined;
      this._dragonflyPersistence = undefined;
      this._dragonflySsl = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryBasebackupName = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._migration.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cacheMode = value.cacheMode;
      this._dragonflyPersistence = value.dragonflyPersistence;
      this._dragonflySsl = value.dragonflySsl;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryBasebackupName = value.recoveryBasebackupName;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._migration.internalValue = value.migration;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
    }
  }

  // cache_mode - computed: false, optional: true, required: false
  private _cacheMode?: boolean | cdktf.IResolvable; 
  public get cacheMode() {
    return this.getBooleanAttribute('cache_mode');
  }
  public set cacheMode(value: boolean | cdktf.IResolvable) {
    this._cacheMode = value;
  }
  public resetCacheMode() {
    this._cacheMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheModeInput() {
    return this._cacheMode;
  }

  // dragonfly_persistence - computed: false, optional: true, required: false
  private _dragonflyPersistence?: string; 
  public get dragonflyPersistence() {
    return this.getStringAttribute('dragonfly_persistence');
  }
  public set dragonflyPersistence(value: string) {
    this._dragonflyPersistence = value;
  }
  public resetDragonflyPersistence() {
    this._dragonflyPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflyPersistenceInput() {
    return this._dragonflyPersistence;
  }

  // dragonfly_ssl - computed: false, optional: true, required: false
  private _dragonflySsl?: boolean | cdktf.IResolvable; 
  public get dragonflySsl() {
    return this.getBooleanAttribute('dragonfly_ssl');
  }
  public set dragonflySsl(value: boolean | cdktf.IResolvable) {
    this._dragonflySsl = value;
  }
  public resetDragonflySsl() {
    this._dragonflySsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflySslInput() {
    return this._dragonflySsl;
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

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new DragonflyDragonflyUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: DragonflyDragonflyUserConfigIpFilterObject[] | cdktf.IResolvable) {
    this._ipFilterObject.internalValue = value;
  }
  public resetIpFilterObject() {
    this._ipFilterObject.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFilterObjectInput() {
    return this._ipFilterObject.internalValue;
  }

  // migration - computed: false, optional: true, required: false
  private _migration = new DragonflyDragonflyUserConfigMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: DragonflyDragonflyUserConfigMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new DragonflyDragonflyUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: DragonflyDragonflyUserConfigPrivateAccess) {
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
  private _privatelinkAccess = new DragonflyDragonflyUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: DragonflyDragonflyUserConfigPrivatelinkAccess) {
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
  private _publicAccess = new DragonflyDragonflyUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: DragonflyDragonflyUserConfigPublicAccess) {
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
export interface DragonflyServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#integration_type Dragonfly#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#source_service_name Dragonfly#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function dragonflyServiceIntegrationsToTerraform(struct?: DragonflyServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function dragonflyServiceIntegrationsToHclTerraform(struct?: DragonflyServiceIntegrations | cdktf.IResolvable): any {
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

export class DragonflyServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DragonflyServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DragonflyServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class DragonflyServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : DragonflyServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): DragonflyServiceIntegrationsOutputReference {
    return new DragonflyServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DragonflyTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#key Dragonfly#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#value Dragonfly#value}
  */
  readonly value: string;
}

export function dragonflyTagToTerraform(struct?: DragonflyTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dragonflyTagToHclTerraform(struct?: DragonflyTag | cdktf.IResolvable): any {
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

export class DragonflyTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DragonflyTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DragonflyTag | cdktf.IResolvable | undefined) {
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

export class DragonflyTagList extends cdktf.ComplexList {
  public internalValue? : DragonflyTag[] | cdktf.IResolvable

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
  public get(index: number): DragonflyTagOutputReference {
    return new DragonflyTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DragonflyTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#email Dragonfly#email}
  */
  readonly email: string;
}

export function dragonflyTechEmailsToTerraform(struct?: DragonflyTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function dragonflyTechEmailsToHclTerraform(struct?: DragonflyTechEmails | cdktf.IResolvable): any {
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

export class DragonflyTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DragonflyTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DragonflyTechEmails | cdktf.IResolvable | undefined) {
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

export class DragonflyTechEmailsList extends cdktf.ComplexList {
  public internalValue? : DragonflyTechEmails[] | cdktf.IResolvable

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
  public get(index: number): DragonflyTechEmailsOutputReference {
    return new DragonflyTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DragonflyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#create Dragonfly#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#default Dragonfly#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#delete Dragonfly#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#read Dragonfly#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#update Dragonfly#update}
  */
  readonly update?: string;
}

export function dragonflyTimeoutsToTerraform(struct?: DragonflyTimeouts | cdktf.IResolvable): any {
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


export function dragonflyTimeoutsToHclTerraform(struct?: DragonflyTimeouts | cdktf.IResolvable): any {
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

export class DragonflyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DragonflyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DragonflyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly aiven_dragonfly}
*/
export class Dragonfly extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_dragonfly";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dragonfly resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dragonfly to import
  * @param importFromId The id of the existing Dragonfly that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dragonfly to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_dragonfly", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/dragonfly aiven_dragonfly} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DragonflyConfig
  */
  public constructor(scope: Construct, id: string, config: DragonflyConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_dragonfly',
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
    this._dragonfly.internalValue = config.dragonfly;
    this._dragonflyUserConfig.internalValue = config.dragonflyUserConfig;
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
  private _components = new DragonflyComponentsList(this, "components", false);
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

  // dragonfly - computed: false, optional: true, required: false
  private _dragonfly = new DragonflyDragonflyOutputReference(this, "dragonfly");
  public get dragonfly() {
    return this._dragonfly;
  }
  public putDragonfly(value: DragonflyDragonfly) {
    this._dragonfly.internalValue = value;
  }
  public resetDragonfly() {
    this._dragonfly.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflyInput() {
    return this._dragonfly.internalValue;
  }

  // dragonfly_user_config - computed: false, optional: true, required: false
  private _dragonflyUserConfig = new DragonflyDragonflyUserConfigOutputReference(this, "dragonfly_user_config");
  public get dragonflyUserConfig() {
    return this._dragonflyUserConfig;
  }
  public putDragonflyUserConfig(value: DragonflyDragonflyUserConfig) {
    this._dragonflyUserConfig.internalValue = value;
  }
  public resetDragonflyUserConfig() {
    this._dragonflyUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dragonflyUserConfigInput() {
    return this._dragonflyUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new DragonflyServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: DragonflyServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new DragonflyTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: DragonflyTag[] | cdktf.IResolvable) {
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
  private _techEmails = new DragonflyTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: DragonflyTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new DragonflyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DragonflyTimeouts) {
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
      dragonfly: dragonflyDragonflyToTerraform(this._dragonfly.internalValue),
      dragonfly_user_config: dragonflyDragonflyUserConfigToTerraform(this._dragonflyUserConfig.internalValue),
      service_integrations: cdktf.listMapper(dragonflyServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(dragonflyTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(dragonflyTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: dragonflyTimeoutsToTerraform(this._timeouts.internalValue),
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
      dragonfly: {
        value: dragonflyDragonflyToHclTerraform(this._dragonfly.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DragonflyDragonflyList",
      },
      dragonfly_user_config: {
        value: dragonflyDragonflyUserConfigToHclTerraform(this._dragonflyUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DragonflyDragonflyUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(dragonflyServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DragonflyServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(dragonflyTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DragonflyTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(dragonflyTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DragonflyTechEmailsList",
      },
      timeouts: {
        value: dragonflyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DragonflyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
