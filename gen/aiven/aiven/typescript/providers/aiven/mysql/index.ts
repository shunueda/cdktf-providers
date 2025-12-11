// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MysqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#additional_disk_space Mysql#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#cloud_name Mysql#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#disk_space Mysql#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#id Mysql#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#maintenance_window_dow Mysql#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#maintenance_window_time Mysql#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#plan Mysql#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#project Mysql#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#project_vpc_id Mysql#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#service_name Mysql#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#static_ips Mysql#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#termination_protection Mysql#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql Mysql#mysql}
  */
  readonly mysql?: MysqlMysql;
  /**
  * mysql_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql_user_config Mysql#mysql_user_config}
  */
  readonly mysqlUserConfig?: MysqlMysqlUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#service_integrations Mysql#service_integrations}
  */
  readonly serviceIntegrations?: MysqlServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#tag Mysql#tag}
  */
  readonly tag?: MysqlTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#tech_emails Mysql#tech_emails}
  */
  readonly techEmails?: MysqlTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#timeouts Mysql#timeouts}
  */
  readonly timeouts?: MysqlTimeouts;
}
export interface MysqlComponents {
}

export function mysqlComponentsToTerraform(struct?: MysqlComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlComponentsToHclTerraform(struct?: MysqlComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlComponents | undefined) {
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

export class MysqlComponentsList extends cdktf.ComplexList {

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
  public get(index: number): MysqlComponentsOutputReference {
    return new MysqlComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlParams {
}

export function mysqlMysqlParamsToTerraform(struct?: MysqlMysqlParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function mysqlMysqlParamsToHclTerraform(struct?: MysqlMysqlParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class MysqlMysqlParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // sslmode - computed: true, optional: false, required: false
  public get sslmode() {
    return this.getStringAttribute('sslmode');
  }

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }
}

export class MysqlMysqlParamsList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlParams[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlParamsOutputReference {
    return new MysqlMysqlParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysql {
  /**
  * MySQL standby connection URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#standby_uris Mysql#standby_uris}
  */
  readonly standbyUris?: string[];
  /**
  * MySQL syncing connection URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#syncing_uris Mysql#syncing_uris}
  */
  readonly syncingUris?: string[];
  /**
  * MySQL connection URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#uris Mysql#uris}
  */
  readonly uris?: string[];
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#params Mysql#params}
  */
  readonly params?: MysqlMysqlParams[] | cdktf.IResolvable;
}

export function mysqlMysqlToTerraform(struct?: MysqlMysqlOutputReference | MysqlMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standby_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.standbyUris),
    syncing_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncingUris),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
    params: cdktf.listMapper(mysqlMysqlParamsToTerraform, true)(struct!.params),
  }
}


export function mysqlMysqlToHclTerraform(struct?: MysqlMysqlOutputReference | MysqlMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    standby_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.standbyUris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    syncing_uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncingUris),
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
    params: {
      value: cdktf.listMapperHcl(mysqlMysqlParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standbyUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.standbyUris = this._standbyUris;
    }
    if (this._syncingUris !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncingUris = this._syncingUris;
    }
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    if (this._params?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.params = this._params?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._standbyUris = undefined;
      this._syncingUris = undefined;
      this._uris = undefined;
      this._params.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._standbyUris = value.standbyUris;
      this._syncingUris = value.syncingUris;
      this._uris = value.uris;
      this._params.internalValue = value.params;
    }
  }

  // replica_uri - computed: true, optional: false, required: false
  public get replicaUri() {
    return this.getStringAttribute('replica_uri');
  }

  // standby_uris - computed: true, optional: true, required: false
  private _standbyUris?: string[]; 
  public get standbyUris() {
    return this.getListAttribute('standby_uris');
  }
  public set standbyUris(value: string[]) {
    this._standbyUris = value;
  }
  public resetStandbyUris() {
    this._standbyUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyUrisInput() {
    return this._standbyUris;
  }

  // syncing_uris - computed: true, optional: true, required: false
  private _syncingUris?: string[]; 
  public get syncingUris() {
    return this.getListAttribute('syncing_uris');
  }
  public set syncingUris(value: string[]) {
    this._syncingUris = value;
  }
  public resetSyncingUris() {
    this._syncingUris = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncingUrisInput() {
    return this._syncingUris;
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

  // params - computed: false, optional: true, required: false
  private _params = new MysqlMysqlParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: MysqlMysqlParams[] | cdktf.IResolvable) {
    this._params.internalValue = value;
  }
  public resetParams() {
    this._params.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsInput() {
    return this._params.internalValue;
  }
}
export interface MysqlMysqlUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#description Mysql#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#network Mysql#network}
  */
  readonly network: string;
}

export function mysqlMysqlUserConfigIpFilterObjectToTerraform(struct?: MysqlMysqlUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function mysqlMysqlUserConfigIpFilterObjectToHclTerraform(struct?: MysqlMysqlUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class MysqlMysqlUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlMysqlUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlMysqlUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class MysqlMysqlUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : MysqlMysqlUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): MysqlMysqlUserConfigIpFilterObjectOutputReference {
    return new MysqlMysqlUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlMysqlUserConfigMigration {
  /**
  * Database name for bootstrapping the initial connection. Example: `defaultdb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#dbname Mysql#dbname}
  */
  readonly dbname?: string;
  /**
  * Enum: `mydumper`, `mysqldump`. Experimental! Tool to use for database dump and restore during migration. Default: mysqldump.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#dump_tool Mysql#dump_tool}
  */
  readonly dumpTool?: string;
  /**
  * Hostname or IP address of the server where to migrate data from. Example: `my.server.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#host Mysql#host}
  */
  readonly host: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). Example: `db1,db2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#ignore_dbs Mysql#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). Example: `role1,role2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#ignore_roles Mysql#ignore_roles}
  */
  readonly ignoreRoles?: string;
  /**
  * Enum: `dump`, `replication`. The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#method Mysql#method}
  */
  readonly method?: string;
  /**
  * Password for authentication with the server where to migrate data from. Example: `jjKk45Nnd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#password Mysql#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from. Example: `1234`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#port Mysql#port}
  */
  readonly port: number;
  /**
  * The server where to migrate data from is secured with SSL. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#ssl Mysql#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from. Example: `myname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#username Mysql#username}
  */
  readonly username?: string;
}

export function mysqlMysqlUserConfigMigrationToTerraform(struct?: MysqlMysqlUserConfigMigrationOutputReference | MysqlMysqlUserConfigMigration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dbname: cdktf.stringToTerraform(struct!.dbname),
    dump_tool: cdktf.stringToTerraform(struct!.dumpTool),
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


export function mysqlMysqlUserConfigMigrationToHclTerraform(struct?: MysqlMysqlUserConfigMigrationOutputReference | MysqlMysqlUserConfigMigration): any {
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
    dump_tool: {
      value: cdktf.stringToHclTerraform(struct!.dumpTool),
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

export class MysqlMysqlUserConfigMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfigMigration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbname !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbname = this._dbname;
    }
    if (this._dumpTool !== undefined) {
      hasAnyValues = true;
      internalValueResult.dumpTool = this._dumpTool;
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

  public set internalValue(value: MysqlMysqlUserConfigMigration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dbname = undefined;
      this._dumpTool = undefined;
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
      this._dumpTool = value.dumpTool;
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

  // dump_tool - computed: false, optional: true, required: false
  private _dumpTool?: string; 
  public get dumpTool() {
    return this.getStringAttribute('dump_tool');
  }
  public set dumpTool(value: string) {
    this._dumpTool = value;
  }
  public resetDumpTool() {
    this._dumpTool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dumpToolInput() {
    return this._dumpTool;
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
export interface MysqlMysqlUserConfigMysql {
  /**
  * The number of seconds that the mysqld server waits for a connect packet before responding with Bad handshake. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#connect_timeout Mysql#connect_timeout}
  */
  readonly connectTimeout?: number;
  /**
  * Default server time zone as an offset from UTC (from -12:00 to +12:00), a time zone name, or `SYSTEM` to use the MySQL server default. Example: `+03:00`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#default_time_zone Mysql#default_time_zone}
  */
  readonly defaultTimeZone?: string;
  /**
  * The maximum permitted result length in bytes for the GROUP_CONCAT() function. Example: `1024`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#group_concat_max_len Mysql#group_concat_max_len}
  */
  readonly groupConcatMaxLen?: number;
  /**
  * The time, in seconds, before cached statistics expire. Example: `86400`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#information_schema_stats_expiry Mysql#information_schema_stats_expiry}
  */
  readonly informationSchemaStatsExpiry?: number;
  /**
  * Maximum size for the InnoDB change buffer, as a percentage of the total size of the buffer pool. Default is 25. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_change_buffer_max_size Mysql#innodb_change_buffer_max_size}
  */
  readonly innodbChangeBufferMaxSize?: number;
  /**
  * Specifies whether flushing a page from the InnoDB buffer pool also flushes other dirty pages in the same extent (default is 1): 0 - dirty pages in the same extent are not flushed, 1 - flush contiguous dirty pages in the same extent, 2 - flush dirty pages in the same extent. Example: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_flush_neighbors Mysql#innodb_flush_neighbors}
  */
  readonly innodbFlushNeighbors?: number;
  /**
  * Minimum length of words that are stored in an InnoDB FULLTEXT index. Changing this parameter will lead to a restart of the MySQL service. Example: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_ft_min_token_size Mysql#innodb_ft_min_token_size}
  */
  readonly innodbFtMinTokenSize?: number;
  /**
  * This option is used to specify your own InnoDB FULLTEXT index stopword list for all InnoDB tables. Example: `db_name/table_name`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_ft_server_stopword_table Mysql#innodb_ft_server_stopword_table}
  */
  readonly innodbFtServerStopwordTable?: string;
  /**
  * The length of time in seconds an InnoDB transaction waits for a row lock before giving up. Default is 120. Example: `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_lock_wait_timeout Mysql#innodb_lock_wait_timeout}
  */
  readonly innodbLockWaitTimeout?: number;
  /**
  * The size in bytes of the buffer that InnoDB uses to write to the log files on disk.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_log_buffer_size Mysql#innodb_log_buffer_size}
  */
  readonly innodbLogBufferSize?: number;
  /**
  * The upper limit in bytes on the size of the temporary log files used during online DDL operations for InnoDB tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_online_alter_log_max_size Mysql#innodb_online_alter_log_max_size}
  */
  readonly innodbOnlineAlterLogMaxSize?: number;
  /**
  * When enabled, information about all deadlocks in InnoDB user transactions is recorded in the error log. Disabled by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_print_all_deadlocks Mysql#innodb_print_all_deadlocks}
  */
  readonly innodbPrintAllDeadlocks?: boolean | cdktf.IResolvable;
  /**
  * The number of I/O threads for read operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_read_io_threads Mysql#innodb_read_io_threads}
  */
  readonly innodbReadIoThreads?: number;
  /**
  * When enabled a transaction timeout causes InnoDB to abort and roll back the entire transaction. Changing this parameter will lead to a restart of the MySQL service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_rollback_on_timeout Mysql#innodb_rollback_on_timeout}
  */
  readonly innodbRollbackOnTimeout?: boolean | cdktf.IResolvable;
  /**
  * Defines the maximum number of threads permitted inside of InnoDB. Default is 0 (infinite concurrency - no limit). Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_thread_concurrency Mysql#innodb_thread_concurrency}
  */
  readonly innodbThreadConcurrency?: number;
  /**
  * The number of I/O threads for write operations in InnoDB. Default is 4. Changing this parameter will lead to a restart of the MySQL service. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#innodb_write_io_threads Mysql#innodb_write_io_threads}
  */
  readonly innodbWriteIoThreads?: number;
  /**
  * The number of seconds the server waits for activity on an interactive connection before closing it. Example: `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#interactive_timeout Mysql#interactive_timeout}
  */
  readonly interactiveTimeout?: number;
  /**
  * Enum: `MEMORY`, `TempTable`. The storage engine for in-memory internal temporary tables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#internal_tmp_mem_storage_engine Mysql#internal_tmp_mem_storage_engine}
  */
  readonly internalTmpMemStorageEngine?: string;
  /**
  * Enum: `INSIGHTS`, `INSIGHTS,TABLE`, `NONE`, `TABLE`. The slow log output destination when slow_query_log is ON. To enable MySQL AI Insights, choose INSIGHTS. To use MySQL AI Insights and the mysql.slow_log table at the same time, choose INSIGHTS,TABLE. To only use the mysql.slow_log table, choose TABLE. To silence slow logs, choose NONE.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#log_output Mysql#log_output}
  */
  readonly logOutput?: string;
  /**
  * The slow_query_logs work as SQL statements that take more than long_query_time seconds to execute. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#long_query_time Mysql#long_query_time}
  */
  readonly longQueryTime?: number;
  /**
  * Size of the largest message in bytes that can be received by the server. Default is 67108864 (64M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#max_allowed_packet Mysql#max_allowed_packet}
  */
  readonly maxAllowedPacket?: number;
  /**
  * Limits the size of internal in-memory tables. Also set tmp_table_size. Default is 16777216 (16M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#max_heap_table_size Mysql#max_heap_table_size}
  */
  readonly maxHeapTableSize?: number;
  /**
  * Start sizes of connection buffer and result buffer. Default is 16384 (16K). Changing this parameter will lead to a restart of the MySQL service. Example: `16384`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#net_buffer_length Mysql#net_buffer_length}
  */
  readonly netBufferLength?: number;
  /**
  * The number of seconds to wait for more data from a connection before aborting the read. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#net_read_timeout Mysql#net_read_timeout}
  */
  readonly netReadTimeout?: number;
  /**
  * The number of seconds to wait for a block to be written to a connection before aborting the write. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#net_write_timeout Mysql#net_write_timeout}
  */
  readonly netWriteTimeout?: number;
  /**
  * Slow query log enables capturing of slow queries. Setting slow_query_log to false also truncates the mysql.slow_log table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#slow_query_log Mysql#slow_query_log}
  */
  readonly slowQueryLog?: boolean | cdktf.IResolvable;
  /**
  * Sort buffer size in bytes for ORDER BY optimization. Default is 262144 (256K). Example: `262144`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#sort_buffer_size Mysql#sort_buffer_size}
  */
  readonly sortBufferSize?: number;
  /**
  * Global SQL mode. Set to empty to use MySQL server defaults. When creating a new service and not setting this field Aiven default SQL mode (strict, SQL standard compliant) will be assigned. Example: `ANSI,TRADITIONAL`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#sql_mode Mysql#sql_mode}
  */
  readonly sqlMode?: string;
  /**
  * Require primary key to be defined for new tables or old tables modified with ALTER TABLE and fail if missing. It is recommended to always have primary keys because various functionality may break if any large table is missing them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#sql_require_primary_key Mysql#sql_require_primary_key}
  */
  readonly sqlRequirePrimaryKey?: boolean | cdktf.IResolvable;
  /**
  * Limits the size of internal in-memory tables. Also set max_heap_table_size. Default is 16777216 (16M).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#tmp_table_size Mysql#tmp_table_size}
  */
  readonly tmpTableSize?: number;
  /**
  * The number of seconds the server waits for activity on a noninteractive connection before closing it. Example: `28800`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#wait_timeout Mysql#wait_timeout}
  */
  readonly waitTimeout?: number;
}

export function mysqlMysqlUserConfigMysqlToTerraform(struct?: MysqlMysqlUserConfigMysqlOutputReference | MysqlMysqlUserConfigMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connect_timeout: cdktf.numberToTerraform(struct!.connectTimeout),
    default_time_zone: cdktf.stringToTerraform(struct!.defaultTimeZone),
    group_concat_max_len: cdktf.numberToTerraform(struct!.groupConcatMaxLen),
    information_schema_stats_expiry: cdktf.numberToTerraform(struct!.informationSchemaStatsExpiry),
    innodb_change_buffer_max_size: cdktf.numberToTerraform(struct!.innodbChangeBufferMaxSize),
    innodb_flush_neighbors: cdktf.numberToTerraform(struct!.innodbFlushNeighbors),
    innodb_ft_min_token_size: cdktf.numberToTerraform(struct!.innodbFtMinTokenSize),
    innodb_ft_server_stopword_table: cdktf.stringToTerraform(struct!.innodbFtServerStopwordTable),
    innodb_lock_wait_timeout: cdktf.numberToTerraform(struct!.innodbLockWaitTimeout),
    innodb_log_buffer_size: cdktf.numberToTerraform(struct!.innodbLogBufferSize),
    innodb_online_alter_log_max_size: cdktf.numberToTerraform(struct!.innodbOnlineAlterLogMaxSize),
    innodb_print_all_deadlocks: cdktf.booleanToTerraform(struct!.innodbPrintAllDeadlocks),
    innodb_read_io_threads: cdktf.numberToTerraform(struct!.innodbReadIoThreads),
    innodb_rollback_on_timeout: cdktf.booleanToTerraform(struct!.innodbRollbackOnTimeout),
    innodb_thread_concurrency: cdktf.numberToTerraform(struct!.innodbThreadConcurrency),
    innodb_write_io_threads: cdktf.numberToTerraform(struct!.innodbWriteIoThreads),
    interactive_timeout: cdktf.numberToTerraform(struct!.interactiveTimeout),
    internal_tmp_mem_storage_engine: cdktf.stringToTerraform(struct!.internalTmpMemStorageEngine),
    log_output: cdktf.stringToTerraform(struct!.logOutput),
    long_query_time: cdktf.numberToTerraform(struct!.longQueryTime),
    max_allowed_packet: cdktf.numberToTerraform(struct!.maxAllowedPacket),
    max_heap_table_size: cdktf.numberToTerraform(struct!.maxHeapTableSize),
    net_buffer_length: cdktf.numberToTerraform(struct!.netBufferLength),
    net_read_timeout: cdktf.numberToTerraform(struct!.netReadTimeout),
    net_write_timeout: cdktf.numberToTerraform(struct!.netWriteTimeout),
    slow_query_log: cdktf.booleanToTerraform(struct!.slowQueryLog),
    sort_buffer_size: cdktf.numberToTerraform(struct!.sortBufferSize),
    sql_mode: cdktf.stringToTerraform(struct!.sqlMode),
    sql_require_primary_key: cdktf.booleanToTerraform(struct!.sqlRequirePrimaryKey),
    tmp_table_size: cdktf.numberToTerraform(struct!.tmpTableSize),
    wait_timeout: cdktf.numberToTerraform(struct!.waitTimeout),
  }
}


export function mysqlMysqlUserConfigMysqlToHclTerraform(struct?: MysqlMysqlUserConfigMysqlOutputReference | MysqlMysqlUserConfigMysql): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connect_timeout: {
      value: cdktf.numberToHclTerraform(struct!.connectTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_time_zone: {
      value: cdktf.stringToHclTerraform(struct!.defaultTimeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_concat_max_len: {
      value: cdktf.numberToHclTerraform(struct!.groupConcatMaxLen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    information_schema_stats_expiry: {
      value: cdktf.numberToHclTerraform(struct!.informationSchemaStatsExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_change_buffer_max_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbChangeBufferMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_flush_neighbors: {
      value: cdktf.numberToHclTerraform(struct!.innodbFlushNeighbors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_ft_min_token_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbFtMinTokenSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_ft_server_stopword_table: {
      value: cdktf.stringToHclTerraform(struct!.innodbFtServerStopwordTable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    innodb_lock_wait_timeout: {
      value: cdktf.numberToHclTerraform(struct!.innodbLockWaitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_log_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbLogBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_online_alter_log_max_size: {
      value: cdktf.numberToHclTerraform(struct!.innodbOnlineAlterLogMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_print_all_deadlocks: {
      value: cdktf.booleanToHclTerraform(struct!.innodbPrintAllDeadlocks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_read_io_threads: {
      value: cdktf.numberToHclTerraform(struct!.innodbReadIoThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_rollback_on_timeout: {
      value: cdktf.booleanToHclTerraform(struct!.innodbRollbackOnTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    innodb_thread_concurrency: {
      value: cdktf.numberToHclTerraform(struct!.innodbThreadConcurrency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    innodb_write_io_threads: {
      value: cdktf.numberToHclTerraform(struct!.innodbWriteIoThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.interactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    internal_tmp_mem_storage_engine: {
      value: cdktf.stringToHclTerraform(struct!.internalTmpMemStorageEngine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_output: {
      value: cdktf.stringToHclTerraform(struct!.logOutput),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    long_query_time: {
      value: cdktf.numberToHclTerraform(struct!.longQueryTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_allowed_packet: {
      value: cdktf.numberToHclTerraform(struct!.maxAllowedPacket),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_heap_table_size: {
      value: cdktf.numberToHclTerraform(struct!.maxHeapTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_buffer_length: {
      value: cdktf.numberToHclTerraform(struct!.netBufferLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_read_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netReadTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    net_write_timeout: {
      value: cdktf.numberToHclTerraform(struct!.netWriteTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    slow_query_log: {
      value: cdktf.booleanToHclTerraform(struct!.slowQueryLog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sort_buffer_size: {
      value: cdktf.numberToHclTerraform(struct!.sortBufferSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sql_mode: {
      value: cdktf.stringToHclTerraform(struct!.sqlMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sql_require_primary_key: {
      value: cdktf.booleanToHclTerraform(struct!.sqlRequirePrimaryKey),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tmp_table_size: {
      value: cdktf.numberToHclTerraform(struct!.tmpTableSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wait_timeout: {
      value: cdktf.numberToHclTerraform(struct!.waitTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlUserConfigMysqlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfigMysql | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectTimeout = this._connectTimeout;
    }
    if (this._defaultTimeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultTimeZone = this._defaultTimeZone;
    }
    if (this._groupConcatMaxLen !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupConcatMaxLen = this._groupConcatMaxLen;
    }
    if (this._informationSchemaStatsExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.informationSchemaStatsExpiry = this._informationSchemaStatsExpiry;
    }
    if (this._innodbChangeBufferMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbChangeBufferMaxSize = this._innodbChangeBufferMaxSize;
    }
    if (this._innodbFlushNeighbors !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFlushNeighbors = this._innodbFlushNeighbors;
    }
    if (this._innodbFtMinTokenSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtMinTokenSize = this._innodbFtMinTokenSize;
    }
    if (this._innodbFtServerStopwordTable !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbFtServerStopwordTable = this._innodbFtServerStopwordTable;
    }
    if (this._innodbLockWaitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbLockWaitTimeout = this._innodbLockWaitTimeout;
    }
    if (this._innodbLogBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbLogBufferSize = this._innodbLogBufferSize;
    }
    if (this._innodbOnlineAlterLogMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbOnlineAlterLogMaxSize = this._innodbOnlineAlterLogMaxSize;
    }
    if (this._innodbPrintAllDeadlocks !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbPrintAllDeadlocks = this._innodbPrintAllDeadlocks;
    }
    if (this._innodbReadIoThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbReadIoThreads = this._innodbReadIoThreads;
    }
    if (this._innodbRollbackOnTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbRollbackOnTimeout = this._innodbRollbackOnTimeout;
    }
    if (this._innodbThreadConcurrency !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbThreadConcurrency = this._innodbThreadConcurrency;
    }
    if (this._innodbWriteIoThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.innodbWriteIoThreads = this._innodbWriteIoThreads;
    }
    if (this._interactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.interactiveTimeout = this._interactiveTimeout;
    }
    if (this._internalTmpMemStorageEngine !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalTmpMemStorageEngine = this._internalTmpMemStorageEngine;
    }
    if (this._logOutput !== undefined) {
      hasAnyValues = true;
      internalValueResult.logOutput = this._logOutput;
    }
    if (this._longQueryTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.longQueryTime = this._longQueryTime;
    }
    if (this._maxAllowedPacket !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxAllowedPacket = this._maxAllowedPacket;
    }
    if (this._maxHeapTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxHeapTableSize = this._maxHeapTableSize;
    }
    if (this._netBufferLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.netBufferLength = this._netBufferLength;
    }
    if (this._netReadTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netReadTimeout = this._netReadTimeout;
    }
    if (this._netWriteTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.netWriteTimeout = this._netWriteTimeout;
    }
    if (this._slowQueryLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.slowQueryLog = this._slowQueryLog;
    }
    if (this._sortBufferSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.sortBufferSize = this._sortBufferSize;
    }
    if (this._sqlMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMode = this._sqlMode;
    }
    if (this._sqlRequirePrimaryKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlRequirePrimaryKey = this._sqlRequirePrimaryKey;
    }
    if (this._tmpTableSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.tmpTableSize = this._tmpTableSize;
    }
    if (this._waitTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.waitTimeout = this._waitTimeout;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlUserConfigMysql | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connectTimeout = undefined;
      this._defaultTimeZone = undefined;
      this._groupConcatMaxLen = undefined;
      this._informationSchemaStatsExpiry = undefined;
      this._innodbChangeBufferMaxSize = undefined;
      this._innodbFlushNeighbors = undefined;
      this._innodbFtMinTokenSize = undefined;
      this._innodbFtServerStopwordTable = undefined;
      this._innodbLockWaitTimeout = undefined;
      this._innodbLogBufferSize = undefined;
      this._innodbOnlineAlterLogMaxSize = undefined;
      this._innodbPrintAllDeadlocks = undefined;
      this._innodbReadIoThreads = undefined;
      this._innodbRollbackOnTimeout = undefined;
      this._innodbThreadConcurrency = undefined;
      this._innodbWriteIoThreads = undefined;
      this._interactiveTimeout = undefined;
      this._internalTmpMemStorageEngine = undefined;
      this._logOutput = undefined;
      this._longQueryTime = undefined;
      this._maxAllowedPacket = undefined;
      this._maxHeapTableSize = undefined;
      this._netBufferLength = undefined;
      this._netReadTimeout = undefined;
      this._netWriteTimeout = undefined;
      this._slowQueryLog = undefined;
      this._sortBufferSize = undefined;
      this._sqlMode = undefined;
      this._sqlRequirePrimaryKey = undefined;
      this._tmpTableSize = undefined;
      this._waitTimeout = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connectTimeout = value.connectTimeout;
      this._defaultTimeZone = value.defaultTimeZone;
      this._groupConcatMaxLen = value.groupConcatMaxLen;
      this._informationSchemaStatsExpiry = value.informationSchemaStatsExpiry;
      this._innodbChangeBufferMaxSize = value.innodbChangeBufferMaxSize;
      this._innodbFlushNeighbors = value.innodbFlushNeighbors;
      this._innodbFtMinTokenSize = value.innodbFtMinTokenSize;
      this._innodbFtServerStopwordTable = value.innodbFtServerStopwordTable;
      this._innodbLockWaitTimeout = value.innodbLockWaitTimeout;
      this._innodbLogBufferSize = value.innodbLogBufferSize;
      this._innodbOnlineAlterLogMaxSize = value.innodbOnlineAlterLogMaxSize;
      this._innodbPrintAllDeadlocks = value.innodbPrintAllDeadlocks;
      this._innodbReadIoThreads = value.innodbReadIoThreads;
      this._innodbRollbackOnTimeout = value.innodbRollbackOnTimeout;
      this._innodbThreadConcurrency = value.innodbThreadConcurrency;
      this._innodbWriteIoThreads = value.innodbWriteIoThreads;
      this._interactiveTimeout = value.interactiveTimeout;
      this._internalTmpMemStorageEngine = value.internalTmpMemStorageEngine;
      this._logOutput = value.logOutput;
      this._longQueryTime = value.longQueryTime;
      this._maxAllowedPacket = value.maxAllowedPacket;
      this._maxHeapTableSize = value.maxHeapTableSize;
      this._netBufferLength = value.netBufferLength;
      this._netReadTimeout = value.netReadTimeout;
      this._netWriteTimeout = value.netWriteTimeout;
      this._slowQueryLog = value.slowQueryLog;
      this._sortBufferSize = value.sortBufferSize;
      this._sqlMode = value.sqlMode;
      this._sqlRequirePrimaryKey = value.sqlRequirePrimaryKey;
      this._tmpTableSize = value.tmpTableSize;
      this._waitTimeout = value.waitTimeout;
    }
  }

  // connect_timeout - computed: false, optional: true, required: false
  private _connectTimeout?: number; 
  public get connectTimeout() {
    return this.getNumberAttribute('connect_timeout');
  }
  public set connectTimeout(value: number) {
    this._connectTimeout = value;
  }
  public resetConnectTimeout() {
    this._connectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectTimeoutInput() {
    return this._connectTimeout;
  }

  // default_time_zone - computed: false, optional: true, required: false
  private _defaultTimeZone?: string; 
  public get defaultTimeZone() {
    return this.getStringAttribute('default_time_zone');
  }
  public set defaultTimeZone(value: string) {
    this._defaultTimeZone = value;
  }
  public resetDefaultTimeZone() {
    this._defaultTimeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeZoneInput() {
    return this._defaultTimeZone;
  }

  // group_concat_max_len - computed: false, optional: true, required: false
  private _groupConcatMaxLen?: number; 
  public get groupConcatMaxLen() {
    return this.getNumberAttribute('group_concat_max_len');
  }
  public set groupConcatMaxLen(value: number) {
    this._groupConcatMaxLen = value;
  }
  public resetGroupConcatMaxLen() {
    this._groupConcatMaxLen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupConcatMaxLenInput() {
    return this._groupConcatMaxLen;
  }

  // information_schema_stats_expiry - computed: false, optional: true, required: false
  private _informationSchemaStatsExpiry?: number; 
  public get informationSchemaStatsExpiry() {
    return this.getNumberAttribute('information_schema_stats_expiry');
  }
  public set informationSchemaStatsExpiry(value: number) {
    this._informationSchemaStatsExpiry = value;
  }
  public resetInformationSchemaStatsExpiry() {
    this._informationSchemaStatsExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get informationSchemaStatsExpiryInput() {
    return this._informationSchemaStatsExpiry;
  }

  // innodb_change_buffer_max_size - computed: false, optional: true, required: false
  private _innodbChangeBufferMaxSize?: number; 
  public get innodbChangeBufferMaxSize() {
    return this.getNumberAttribute('innodb_change_buffer_max_size');
  }
  public set innodbChangeBufferMaxSize(value: number) {
    this._innodbChangeBufferMaxSize = value;
  }
  public resetInnodbChangeBufferMaxSize() {
    this._innodbChangeBufferMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbChangeBufferMaxSizeInput() {
    return this._innodbChangeBufferMaxSize;
  }

  // innodb_flush_neighbors - computed: false, optional: true, required: false
  private _innodbFlushNeighbors?: number; 
  public get innodbFlushNeighbors() {
    return this.getNumberAttribute('innodb_flush_neighbors');
  }
  public set innodbFlushNeighbors(value: number) {
    this._innodbFlushNeighbors = value;
  }
  public resetInnodbFlushNeighbors() {
    this._innodbFlushNeighbors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFlushNeighborsInput() {
    return this._innodbFlushNeighbors;
  }

  // innodb_ft_min_token_size - computed: false, optional: true, required: false
  private _innodbFtMinTokenSize?: number; 
  public get innodbFtMinTokenSize() {
    return this.getNumberAttribute('innodb_ft_min_token_size');
  }
  public set innodbFtMinTokenSize(value: number) {
    this._innodbFtMinTokenSize = value;
  }
  public resetInnodbFtMinTokenSize() {
    this._innodbFtMinTokenSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtMinTokenSizeInput() {
    return this._innodbFtMinTokenSize;
  }

  // innodb_ft_server_stopword_table - computed: false, optional: true, required: false
  private _innodbFtServerStopwordTable?: string; 
  public get innodbFtServerStopwordTable() {
    return this.getStringAttribute('innodb_ft_server_stopword_table');
  }
  public set innodbFtServerStopwordTable(value: string) {
    this._innodbFtServerStopwordTable = value;
  }
  public resetInnodbFtServerStopwordTable() {
    this._innodbFtServerStopwordTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbFtServerStopwordTableInput() {
    return this._innodbFtServerStopwordTable;
  }

  // innodb_lock_wait_timeout - computed: false, optional: true, required: false
  private _innodbLockWaitTimeout?: number; 
  public get innodbLockWaitTimeout() {
    return this.getNumberAttribute('innodb_lock_wait_timeout');
  }
  public set innodbLockWaitTimeout(value: number) {
    this._innodbLockWaitTimeout = value;
  }
  public resetInnodbLockWaitTimeout() {
    this._innodbLockWaitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLockWaitTimeoutInput() {
    return this._innodbLockWaitTimeout;
  }

  // innodb_log_buffer_size - computed: false, optional: true, required: false
  private _innodbLogBufferSize?: number; 
  public get innodbLogBufferSize() {
    return this.getNumberAttribute('innodb_log_buffer_size');
  }
  public set innodbLogBufferSize(value: number) {
    this._innodbLogBufferSize = value;
  }
  public resetInnodbLogBufferSize() {
    this._innodbLogBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbLogBufferSizeInput() {
    return this._innodbLogBufferSize;
  }

  // innodb_online_alter_log_max_size - computed: false, optional: true, required: false
  private _innodbOnlineAlterLogMaxSize?: number; 
  public get innodbOnlineAlterLogMaxSize() {
    return this.getNumberAttribute('innodb_online_alter_log_max_size');
  }
  public set innodbOnlineAlterLogMaxSize(value: number) {
    this._innodbOnlineAlterLogMaxSize = value;
  }
  public resetInnodbOnlineAlterLogMaxSize() {
    this._innodbOnlineAlterLogMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbOnlineAlterLogMaxSizeInput() {
    return this._innodbOnlineAlterLogMaxSize;
  }

  // innodb_print_all_deadlocks - computed: false, optional: true, required: false
  private _innodbPrintAllDeadlocks?: boolean | cdktf.IResolvable; 
  public get innodbPrintAllDeadlocks() {
    return this.getBooleanAttribute('innodb_print_all_deadlocks');
  }
  public set innodbPrintAllDeadlocks(value: boolean | cdktf.IResolvable) {
    this._innodbPrintAllDeadlocks = value;
  }
  public resetInnodbPrintAllDeadlocks() {
    this._innodbPrintAllDeadlocks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbPrintAllDeadlocksInput() {
    return this._innodbPrintAllDeadlocks;
  }

  // innodb_read_io_threads - computed: false, optional: true, required: false
  private _innodbReadIoThreads?: number; 
  public get innodbReadIoThreads() {
    return this.getNumberAttribute('innodb_read_io_threads');
  }
  public set innodbReadIoThreads(value: number) {
    this._innodbReadIoThreads = value;
  }
  public resetInnodbReadIoThreads() {
    this._innodbReadIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbReadIoThreadsInput() {
    return this._innodbReadIoThreads;
  }

  // innodb_rollback_on_timeout - computed: false, optional: true, required: false
  private _innodbRollbackOnTimeout?: boolean | cdktf.IResolvable; 
  public get innodbRollbackOnTimeout() {
    return this.getBooleanAttribute('innodb_rollback_on_timeout');
  }
  public set innodbRollbackOnTimeout(value: boolean | cdktf.IResolvable) {
    this._innodbRollbackOnTimeout = value;
  }
  public resetInnodbRollbackOnTimeout() {
    this._innodbRollbackOnTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbRollbackOnTimeoutInput() {
    return this._innodbRollbackOnTimeout;
  }

  // innodb_thread_concurrency - computed: false, optional: true, required: false
  private _innodbThreadConcurrency?: number; 
  public get innodbThreadConcurrency() {
    return this.getNumberAttribute('innodb_thread_concurrency');
  }
  public set innodbThreadConcurrency(value: number) {
    this._innodbThreadConcurrency = value;
  }
  public resetInnodbThreadConcurrency() {
    this._innodbThreadConcurrency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbThreadConcurrencyInput() {
    return this._innodbThreadConcurrency;
  }

  // innodb_write_io_threads - computed: false, optional: true, required: false
  private _innodbWriteIoThreads?: number; 
  public get innodbWriteIoThreads() {
    return this.getNumberAttribute('innodb_write_io_threads');
  }
  public set innodbWriteIoThreads(value: number) {
    this._innodbWriteIoThreads = value;
  }
  public resetInnodbWriteIoThreads() {
    this._innodbWriteIoThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get innodbWriteIoThreadsInput() {
    return this._innodbWriteIoThreads;
  }

  // interactive_timeout - computed: false, optional: true, required: false
  private _interactiveTimeout?: number; 
  public get interactiveTimeout() {
    return this.getNumberAttribute('interactive_timeout');
  }
  public set interactiveTimeout(value: number) {
    this._interactiveTimeout = value;
  }
  public resetInteractiveTimeout() {
    this._interactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interactiveTimeoutInput() {
    return this._interactiveTimeout;
  }

  // internal_tmp_mem_storage_engine - computed: false, optional: true, required: false
  private _internalTmpMemStorageEngine?: string; 
  public get internalTmpMemStorageEngine() {
    return this.getStringAttribute('internal_tmp_mem_storage_engine');
  }
  public set internalTmpMemStorageEngine(value: string) {
    this._internalTmpMemStorageEngine = value;
  }
  public resetInternalTmpMemStorageEngine() {
    this._internalTmpMemStorageEngine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalTmpMemStorageEngineInput() {
    return this._internalTmpMemStorageEngine;
  }

  // log_output - computed: false, optional: true, required: false
  private _logOutput?: string; 
  public get logOutput() {
    return this.getStringAttribute('log_output');
  }
  public set logOutput(value: string) {
    this._logOutput = value;
  }
  public resetLogOutput() {
    this._logOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logOutputInput() {
    return this._logOutput;
  }

  // long_query_time - computed: false, optional: true, required: false
  private _longQueryTime?: number; 
  public get longQueryTime() {
    return this.getNumberAttribute('long_query_time');
  }
  public set longQueryTime(value: number) {
    this._longQueryTime = value;
  }
  public resetLongQueryTime() {
    this._longQueryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get longQueryTimeInput() {
    return this._longQueryTime;
  }

  // max_allowed_packet - computed: false, optional: true, required: false
  private _maxAllowedPacket?: number; 
  public get maxAllowedPacket() {
    return this.getNumberAttribute('max_allowed_packet');
  }
  public set maxAllowedPacket(value: number) {
    this._maxAllowedPacket = value;
  }
  public resetMaxAllowedPacket() {
    this._maxAllowedPacket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxAllowedPacketInput() {
    return this._maxAllowedPacket;
  }

  // max_heap_table_size - computed: false, optional: true, required: false
  private _maxHeapTableSize?: number; 
  public get maxHeapTableSize() {
    return this.getNumberAttribute('max_heap_table_size');
  }
  public set maxHeapTableSize(value: number) {
    this._maxHeapTableSize = value;
  }
  public resetMaxHeapTableSize() {
    this._maxHeapTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHeapTableSizeInput() {
    return this._maxHeapTableSize;
  }

  // net_buffer_length - computed: false, optional: true, required: false
  private _netBufferLength?: number; 
  public get netBufferLength() {
    return this.getNumberAttribute('net_buffer_length');
  }
  public set netBufferLength(value: number) {
    this._netBufferLength = value;
  }
  public resetNetBufferLength() {
    this._netBufferLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netBufferLengthInput() {
    return this._netBufferLength;
  }

  // net_read_timeout - computed: false, optional: true, required: false
  private _netReadTimeout?: number; 
  public get netReadTimeout() {
    return this.getNumberAttribute('net_read_timeout');
  }
  public set netReadTimeout(value: number) {
    this._netReadTimeout = value;
  }
  public resetNetReadTimeout() {
    this._netReadTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netReadTimeoutInput() {
    return this._netReadTimeout;
  }

  // net_write_timeout - computed: false, optional: true, required: false
  private _netWriteTimeout?: number; 
  public get netWriteTimeout() {
    return this.getNumberAttribute('net_write_timeout');
  }
  public set netWriteTimeout(value: number) {
    this._netWriteTimeout = value;
  }
  public resetNetWriteTimeout() {
    this._netWriteTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netWriteTimeoutInput() {
    return this._netWriteTimeout;
  }

  // slow_query_log - computed: false, optional: true, required: false
  private _slowQueryLog?: boolean | cdktf.IResolvable; 
  public get slowQueryLog() {
    return this.getBooleanAttribute('slow_query_log');
  }
  public set slowQueryLog(value: boolean | cdktf.IResolvable) {
    this._slowQueryLog = value;
  }
  public resetSlowQueryLog() {
    this._slowQueryLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowQueryLogInput() {
    return this._slowQueryLog;
  }

  // sort_buffer_size - computed: false, optional: true, required: false
  private _sortBufferSize?: number; 
  public get sortBufferSize() {
    return this.getNumberAttribute('sort_buffer_size');
  }
  public set sortBufferSize(value: number) {
    this._sortBufferSize = value;
  }
  public resetSortBufferSize() {
    this._sortBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortBufferSizeInput() {
    return this._sortBufferSize;
  }

  // sql_mode - computed: false, optional: true, required: false
  private _sqlMode?: string; 
  public get sqlMode() {
    return this.getStringAttribute('sql_mode');
  }
  public set sqlMode(value: string) {
    this._sqlMode = value;
  }
  public resetSqlMode() {
    this._sqlMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlModeInput() {
    return this._sqlMode;
  }

  // sql_require_primary_key - computed: false, optional: true, required: false
  private _sqlRequirePrimaryKey?: boolean | cdktf.IResolvable; 
  public get sqlRequirePrimaryKey() {
    return this.getBooleanAttribute('sql_require_primary_key');
  }
  public set sqlRequirePrimaryKey(value: boolean | cdktf.IResolvable) {
    this._sqlRequirePrimaryKey = value;
  }
  public resetSqlRequirePrimaryKey() {
    this._sqlRequirePrimaryKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlRequirePrimaryKeyInput() {
    return this._sqlRequirePrimaryKey;
  }

  // tmp_table_size - computed: false, optional: true, required: false
  private _tmpTableSize?: number; 
  public get tmpTableSize() {
    return this.getNumberAttribute('tmp_table_size');
  }
  public set tmpTableSize(value: number) {
    this._tmpTableSize = value;
  }
  public resetTmpTableSize() {
    this._tmpTableSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tmpTableSizeInput() {
    return this._tmpTableSize;
  }

  // wait_timeout - computed: false, optional: true, required: false
  private _waitTimeout?: number; 
  public get waitTimeout() {
    return this.getNumberAttribute('wait_timeout');
  }
  public set waitTimeout(value: number) {
    this._waitTimeout = value;
  }
  public resetWaitTimeout() {
    this._waitTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitTimeoutInput() {
    return this._waitTimeout;
  }
}
export interface MysqlMysqlUserConfigMysqlIncrementalBackup {
  /**
  * Enable periodic incremental backups. When enabled, full_backup_week_schedule must be set. Incremental backups only store changes since the last backup, making them faster and more storage-efficient than full backups. This is particularly useful for large databases where daily full backups would be too time-consuming or expensive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#enabled Mysql#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Comma-separated list of days of the week when full backups should be created. Valid values: mon, tue, wed, thu, fri, sat, sun. Example: `sun,wed`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#full_backup_week_schedule Mysql#full_backup_week_schedule}
  */
  readonly fullBackupWeekSchedule?: string;
}

export function mysqlMysqlUserConfigMysqlIncrementalBackupToTerraform(struct?: MysqlMysqlUserConfigMysqlIncrementalBackupOutputReference | MysqlMysqlUserConfigMysqlIncrementalBackup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    full_backup_week_schedule: cdktf.stringToTerraform(struct!.fullBackupWeekSchedule),
  }
}


export function mysqlMysqlUserConfigMysqlIncrementalBackupToHclTerraform(struct?: MysqlMysqlUserConfigMysqlIncrementalBackupOutputReference | MysqlMysqlUserConfigMysqlIncrementalBackup): any {
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
    full_backup_week_schedule: {
      value: cdktf.stringToHclTerraform(struct!.fullBackupWeekSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlUserConfigMysqlIncrementalBackupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfigMysqlIncrementalBackup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._fullBackupWeekSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullBackupWeekSchedule = this._fullBackupWeekSchedule;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlUserConfigMysqlIncrementalBackup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._fullBackupWeekSchedule = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._fullBackupWeekSchedule = value.fullBackupWeekSchedule;
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

  // full_backup_week_schedule - computed: false, optional: true, required: false
  private _fullBackupWeekSchedule?: string; 
  public get fullBackupWeekSchedule() {
    return this.getStringAttribute('full_backup_week_schedule');
  }
  public set fullBackupWeekSchedule(value: string) {
    this._fullBackupWeekSchedule = value;
  }
  public resetFullBackupWeekSchedule() {
    this._fullBackupWeekSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullBackupWeekScheduleInput() {
    return this._fullBackupWeekSchedule;
  }
}
export interface MysqlMysqlUserConfigPrivateAccess {
  /**
  * Allow clients to connect to mysql with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql Mysql#mysql}
  */
  readonly mysql?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to mysqlx with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysqlx Mysql#mysqlx}
  */
  readonly mysqlx?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#prometheus Mysql#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function mysqlMysqlUserConfigPrivateAccessToTerraform(struct?: MysqlMysqlUserConfigPrivateAccessOutputReference | MysqlMysqlUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql: cdktf.booleanToTerraform(struct!.mysql),
    mysqlx: cdktf.booleanToTerraform(struct!.mysqlx),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function mysqlMysqlUserConfigPrivateAccessToHclTerraform(struct?: MysqlMysqlUserConfigPrivateAccessOutputReference | MysqlMysqlUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql: {
      value: cdktf.booleanToHclTerraform(struct!.mysql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysqlx: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlx),
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

export class MysqlMysqlUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysql !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql;
    }
    if (this._mysqlx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlx = this._mysqlx;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysql = undefined;
      this._mysqlx = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysql = value.mysql;
      this._mysqlx = value.mysqlx;
      this._prometheus = value.prometheus;
    }
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql?: boolean | cdktf.IResolvable; 
  public get mysql() {
    return this.getBooleanAttribute('mysql');
  }
  public set mysql(value: boolean | cdktf.IResolvable) {
    this._mysql = value;
  }
  public resetMysql() {
    this._mysql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql;
  }

  // mysqlx - computed: false, optional: true, required: false
  private _mysqlx?: boolean | cdktf.IResolvable; 
  public get mysqlx() {
    return this.getBooleanAttribute('mysqlx');
  }
  public set mysqlx(value: boolean | cdktf.IResolvable) {
    this._mysqlx = value;
  }
  public resetMysqlx() {
    this._mysqlx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxInput() {
    return this._mysqlx;
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
export interface MysqlMysqlUserConfigPrivatelinkAccess {
  /**
  * Enable mysql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql Mysql#mysql}
  */
  readonly mysql?: boolean | cdktf.IResolvable;
  /**
  * Enable mysqlx.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysqlx Mysql#mysqlx}
  */
  readonly mysqlx?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#prometheus Mysql#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function mysqlMysqlUserConfigPrivatelinkAccessToTerraform(struct?: MysqlMysqlUserConfigPrivatelinkAccessOutputReference | MysqlMysqlUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql: cdktf.booleanToTerraform(struct!.mysql),
    mysqlx: cdktf.booleanToTerraform(struct!.mysqlx),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function mysqlMysqlUserConfigPrivatelinkAccessToHclTerraform(struct?: MysqlMysqlUserConfigPrivatelinkAccessOutputReference | MysqlMysqlUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql: {
      value: cdktf.booleanToHclTerraform(struct!.mysql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysqlx: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlx),
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

export class MysqlMysqlUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysql !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql;
    }
    if (this._mysqlx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlx = this._mysqlx;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysql = undefined;
      this._mysqlx = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysql = value.mysql;
      this._mysqlx = value.mysqlx;
      this._prometheus = value.prometheus;
    }
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql?: boolean | cdktf.IResolvable; 
  public get mysql() {
    return this.getBooleanAttribute('mysql');
  }
  public set mysql(value: boolean | cdktf.IResolvable) {
    this._mysql = value;
  }
  public resetMysql() {
    this._mysql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql;
  }

  // mysqlx - computed: false, optional: true, required: false
  private _mysqlx?: boolean | cdktf.IResolvable; 
  public get mysqlx() {
    return this.getBooleanAttribute('mysqlx');
  }
  public set mysqlx(value: boolean | cdktf.IResolvable) {
    this._mysqlx = value;
  }
  public resetMysqlx() {
    this._mysqlx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxInput() {
    return this._mysqlx;
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
export interface MysqlMysqlUserConfigPublicAccess {
  /**
  * Allow clients to connect to mysql from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql Mysql#mysql}
  */
  readonly mysql?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to mysqlx from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysqlx Mysql#mysqlx}
  */
  readonly mysqlx?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#prometheus Mysql#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function mysqlMysqlUserConfigPublicAccessToTerraform(struct?: MysqlMysqlUserConfigPublicAccessOutputReference | MysqlMysqlUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mysql: cdktf.booleanToTerraform(struct!.mysql),
    mysqlx: cdktf.booleanToTerraform(struct!.mysqlx),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function mysqlMysqlUserConfigPublicAccessToHclTerraform(struct?: MysqlMysqlUserConfigPublicAccessOutputReference | MysqlMysqlUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mysql: {
      value: cdktf.booleanToHclTerraform(struct!.mysql),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    mysqlx: {
      value: cdktf.booleanToHclTerraform(struct!.mysqlx),
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

export class MysqlMysqlUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mysql !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql;
    }
    if (this._mysqlx !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlx = this._mysqlx;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MysqlMysqlUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mysql = undefined;
      this._mysqlx = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mysql = value.mysql;
      this._mysqlx = value.mysqlx;
      this._prometheus = value.prometheus;
    }
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql?: boolean | cdktf.IResolvable; 
  public get mysql() {
    return this.getBooleanAttribute('mysql');
  }
  public set mysql(value: boolean | cdktf.IResolvable) {
    this._mysql = value;
  }
  public resetMysql() {
    this._mysql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql;
  }

  // mysqlx - computed: false, optional: true, required: false
  private _mysqlx?: boolean | cdktf.IResolvable; 
  public get mysqlx() {
    return this.getBooleanAttribute('mysqlx');
  }
  public set mysqlx(value: boolean | cdktf.IResolvable) {
    this._mysqlx = value;
  }
  public resetMysqlx() {
    this._mysqlx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlxInput() {
    return this._mysqlx;
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
export interface MysqlMysqlUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#additional_backup_regions Mysql#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#admin_password Mysql#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Custom username for admin user. This must be set only when a new service is being created. Example: `avnadmin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#admin_username Mysql#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#backup_hour Mysql#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#backup_minute Mysql#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * The minimum amount of time in seconds to keep binlog entries before deletion. This may be extended for services that require binlog entries for longer than the default for example if using the MySQL Debezium Kafka connector. Example: `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#binlog_retention_period Mysql#binlog_retention_period}
  */
  readonly binlogRetentionPeriod?: number;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#ip_filter Mysql#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#ip_filter_string Mysql#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Enum: `8`, and newer. MySQL major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql_version Mysql#mysql_version}
  */
  readonly mysqlVersion?: string;
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#project_to_fork_from Mysql#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Recovery target time when forking a service. This has effect only when a new service is being created. Example: `2019-01-01 23:34:45`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#recovery_target_time Mysql#recovery_target_time}
  */
  readonly recoveryTargetTime?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#service_log Mysql#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#service_to_fork_from Mysql#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#static_ips Mysql#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#ip_filter_object Mysql#ip_filter_object}
  */
  readonly ipFilterObject?: MysqlMysqlUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#migration Mysql#migration}
  */
  readonly migration?: MysqlMysqlUserConfigMigration;
  /**
  * mysql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql Mysql#mysql}
  */
  readonly mysql?: MysqlMysqlUserConfigMysql;
  /**
  * mysql_incremental_backup block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#mysql_incremental_backup Mysql#mysql_incremental_backup}
  */
  readonly mysqlIncrementalBackup?: MysqlMysqlUserConfigMysqlIncrementalBackup;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#private_access Mysql#private_access}
  */
  readonly privateAccess?: MysqlMysqlUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#privatelink_access Mysql#privatelink_access}
  */
  readonly privatelinkAccess?: MysqlMysqlUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#public_access Mysql#public_access}
  */
  readonly publicAccess?: MysqlMysqlUserConfigPublicAccess;
}

export function mysqlMysqlUserConfigToTerraform(struct?: MysqlMysqlUserConfigOutputReference | MysqlMysqlUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    admin_password: cdktf.stringToTerraform(struct!.adminPassword),
    admin_username: cdktf.stringToTerraform(struct!.adminUsername),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    binlog_retention_period: cdktf.numberToTerraform(struct!.binlogRetentionPeriod),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    mysql_version: cdktf.stringToTerraform(struct!.mysqlVersion),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_target_time: cdktf.stringToTerraform(struct!.recoveryTargetTime),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    ip_filter_object: cdktf.listMapper(mysqlMysqlUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    migration: mysqlMysqlUserConfigMigrationToTerraform(struct!.migration),
    mysql: mysqlMysqlUserConfigMysqlToTerraform(struct!.mysql),
    mysql_incremental_backup: mysqlMysqlUserConfigMysqlIncrementalBackupToTerraform(struct!.mysqlIncrementalBackup),
    private_access: mysqlMysqlUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: mysqlMysqlUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: mysqlMysqlUserConfigPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function mysqlMysqlUserConfigToHclTerraform(struct?: MysqlMysqlUserConfigOutputReference | MysqlMysqlUserConfig): any {
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
    admin_password: {
      value: cdktf.stringToHclTerraform(struct!.adminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    admin_username: {
      value: cdktf.stringToHclTerraform(struct!.adminUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
    binlog_retention_period: {
      value: cdktf.numberToHclTerraform(struct!.binlogRetentionPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    mysql_version: {
      value: cdktf.stringToHclTerraform(struct!.mysqlVersion),
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
    recovery_target_time: {
      value: cdktf.stringToHclTerraform(struct!.recoveryTargetTime),
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
      value: cdktf.listMapperHcl(mysqlMysqlUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "MysqlMysqlUserConfigIpFilterObjectList",
    },
    migration: {
      value: mysqlMysqlUserConfigMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlUserConfigMigrationList",
    },
    mysql: {
      value: mysqlMysqlUserConfigMysqlToHclTerraform(struct!.mysql),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlUserConfigMysqlList",
    },
    mysql_incremental_backup: {
      value: mysqlMysqlUserConfigMysqlIncrementalBackupToHclTerraform(struct!.mysqlIncrementalBackup),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlUserConfigMysqlIncrementalBackupList",
    },
    private_access: {
      value: mysqlMysqlUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: mysqlMysqlUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: mysqlMysqlUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "MysqlMysqlUserConfigPublicAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MysqlMysqlUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MysqlMysqlUserConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalBackupRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalBackupRegions = this._additionalBackupRegions;
    }
    if (this._adminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminPassword = this._adminPassword;
    }
    if (this._adminUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUsername = this._adminUsername;
    }
    if (this._backupHour !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupHour = this._backupHour;
    }
    if (this._backupMinute !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupMinute = this._backupMinute;
    }
    if (this._binlogRetentionPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.binlogRetentionPeriod = this._binlogRetentionPeriod;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._mysqlVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlVersion = this._mysqlVersion;
    }
    if (this._projectToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectToForkFrom = this._projectToForkFrom;
    }
    if (this._recoveryTargetTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.recoveryTargetTime = this._recoveryTargetTime;
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
    if (this._mysql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysql = this._mysql?.internalValue;
    }
    if (this._mysqlIncrementalBackup?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mysqlIncrementalBackup = this._mysqlIncrementalBackup?.internalValue;
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

  public set internalValue(value: MysqlMysqlUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._binlogRetentionPeriod = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._mysqlVersion = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryTargetTime = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._migration.internalValue = undefined;
      this._mysql.internalValue = undefined;
      this._mysqlIncrementalBackup.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._binlogRetentionPeriod = value.binlogRetentionPeriod;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._mysqlVersion = value.mysqlVersion;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryTargetTime = value.recoveryTargetTime;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._migration.internalValue = value.migration;
      this._mysql.internalValue = value.mysql;
      this._mysqlIncrementalBackup.internalValue = value.mysqlIncrementalBackup;
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

  // admin_password - computed: false, optional: true, required: false
  private _adminPassword?: string; 
  public get adminPassword() {
    return this.getStringAttribute('admin_password');
  }
  public set adminPassword(value: string) {
    this._adminPassword = value;
  }
  public resetAdminPassword() {
    this._adminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminPasswordInput() {
    return this._adminPassword;
  }

  // admin_username - computed: false, optional: true, required: false
  private _adminUsername?: string; 
  public get adminUsername() {
    return this.getStringAttribute('admin_username');
  }
  public set adminUsername(value: string) {
    this._adminUsername = value;
  }
  public resetAdminUsername() {
    this._adminUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUsernameInput() {
    return this._adminUsername;
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

  // binlog_retention_period - computed: false, optional: true, required: false
  private _binlogRetentionPeriod?: number; 
  public get binlogRetentionPeriod() {
    return this.getNumberAttribute('binlog_retention_period');
  }
  public set binlogRetentionPeriod(value: number) {
    this._binlogRetentionPeriod = value;
  }
  public resetBinlogRetentionPeriod() {
    this._binlogRetentionPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binlogRetentionPeriodInput() {
    return this._binlogRetentionPeriod;
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

  // mysql_version - computed: false, optional: true, required: false
  private _mysqlVersion?: string; 
  public get mysqlVersion() {
    return this.getStringAttribute('mysql_version');
  }
  public set mysqlVersion(value: string) {
    this._mysqlVersion = value;
  }
  public resetMysqlVersion() {
    this._mysqlVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlVersionInput() {
    return this._mysqlVersion;
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

  // recovery_target_time - computed: false, optional: true, required: false
  private _recoveryTargetTime?: string; 
  public get recoveryTargetTime() {
    return this.getStringAttribute('recovery_target_time');
  }
  public set recoveryTargetTime(value: string) {
    this._recoveryTargetTime = value;
  }
  public resetRecoveryTargetTime() {
    this._recoveryTargetTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recoveryTargetTimeInput() {
    return this._recoveryTargetTime;
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
  private _ipFilterObject = new MysqlMysqlUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: MysqlMysqlUserConfigIpFilterObject[] | cdktf.IResolvable) {
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
  private _migration = new MysqlMysqlUserConfigMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: MysqlMysqlUserConfigMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // mysql - computed: false, optional: true, required: false
  private _mysql = new MysqlMysqlUserConfigMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: MysqlMysqlUserConfigMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // mysql_incremental_backup - computed: false, optional: true, required: false
  private _mysqlIncrementalBackup = new MysqlMysqlUserConfigMysqlIncrementalBackupOutputReference(this, "mysql_incremental_backup");
  public get mysqlIncrementalBackup() {
    return this._mysqlIncrementalBackup;
  }
  public putMysqlIncrementalBackup(value: MysqlMysqlUserConfigMysqlIncrementalBackup) {
    this._mysqlIncrementalBackup.internalValue = value;
  }
  public resetMysqlIncrementalBackup() {
    this._mysqlIncrementalBackup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlIncrementalBackupInput() {
    return this._mysqlIncrementalBackup.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new MysqlMysqlUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: MysqlMysqlUserConfigPrivateAccess) {
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
  private _privatelinkAccess = new MysqlMysqlUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: MysqlMysqlUserConfigPrivatelinkAccess) {
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
  private _publicAccess = new MysqlMysqlUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: MysqlMysqlUserConfigPublicAccess) {
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
export interface MysqlServiceIntegrations {
  /**
  * Type of the service integration. The possible value is `read_replica`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#integration_type Mysql#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#source_service_name Mysql#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function mysqlServiceIntegrationsToTerraform(struct?: MysqlServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function mysqlServiceIntegrationsToHclTerraform(struct?: MysqlServiceIntegrations | cdktf.IResolvable): any {
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

export class MysqlServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class MysqlServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : MysqlServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): MysqlServiceIntegrationsOutputReference {
    return new MysqlServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#key Mysql#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#value Mysql#value}
  */
  readonly value: string;
}

export function mysqlTagToTerraform(struct?: MysqlTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function mysqlTagToHclTerraform(struct?: MysqlTag | cdktf.IResolvable): any {
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

export class MysqlTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlTag | cdktf.IResolvable | undefined) {
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

export class MysqlTagList extends cdktf.ComplexList {
  public internalValue? : MysqlTag[] | cdktf.IResolvable

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
  public get(index: number): MysqlTagOutputReference {
    return new MysqlTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#email Mysql#email}
  */
  readonly email: string;
}

export function mysqlTechEmailsToTerraform(struct?: MysqlTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function mysqlTechEmailsToHclTerraform(struct?: MysqlTechEmails | cdktf.IResolvable): any {
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

export class MysqlTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): MysqlTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlTechEmails | cdktf.IResolvable | undefined) {
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

export class MysqlTechEmailsList extends cdktf.ComplexList {
  public internalValue? : MysqlTechEmails[] | cdktf.IResolvable

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
  public get(index: number): MysqlTechEmailsOutputReference {
    return new MysqlTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface MysqlTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#create Mysql#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#default Mysql#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#delete Mysql#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#read Mysql#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#update Mysql#update}
  */
  readonly update?: string;
}

export function mysqlTimeoutsToTerraform(struct?: MysqlTimeouts | cdktf.IResolvable): any {
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


export function mysqlTimeoutsToHclTerraform(struct?: MysqlTimeouts | cdktf.IResolvable): any {
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

export class MysqlTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MysqlTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MysqlTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql aiven_mysql}
*/
export class Mysql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_mysql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Mysql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Mysql to import
  * @param importFromId The id of the existing Mysql that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Mysql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_mysql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/mysql aiven_mysql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MysqlConfig
  */
  public constructor(scope: Construct, id: string, config: MysqlConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_mysql',
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
    this._mysql.internalValue = config.mysql;
    this._mysqlUserConfig.internalValue = config.mysqlUserConfig;
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
  private _components = new MysqlComponentsList(this, "components", false);
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

  // mysql - computed: false, optional: true, required: false
  private _mysql = new MysqlMysqlOutputReference(this, "mysql");
  public get mysql() {
    return this._mysql;
  }
  public putMysql(value: MysqlMysql) {
    this._mysql.internalValue = value;
  }
  public resetMysql() {
    this._mysql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlInput() {
    return this._mysql.internalValue;
  }

  // mysql_user_config - computed: false, optional: true, required: false
  private _mysqlUserConfig = new MysqlMysqlUserConfigOutputReference(this, "mysql_user_config");
  public get mysqlUserConfig() {
    return this._mysqlUserConfig;
  }
  public putMysqlUserConfig(value: MysqlMysqlUserConfig) {
    this._mysqlUserConfig.internalValue = value;
  }
  public resetMysqlUserConfig() {
    this._mysqlUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mysqlUserConfigInput() {
    return this._mysqlUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new MysqlServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: MysqlServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new MysqlTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: MysqlTag[] | cdktf.IResolvable) {
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
  private _techEmails = new MysqlTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: MysqlTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new MysqlTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MysqlTimeouts) {
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
      mysql: mysqlMysqlToTerraform(this._mysql.internalValue),
      mysql_user_config: mysqlMysqlUserConfigToTerraform(this._mysqlUserConfig.internalValue),
      service_integrations: cdktf.listMapper(mysqlServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(mysqlTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(mysqlTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: mysqlTimeoutsToTerraform(this._timeouts.internalValue),
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
      mysql: {
        value: mysqlMysqlToHclTerraform(this._mysql.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlList",
      },
      mysql_user_config: {
        value: mysqlMysqlUserConfigToHclTerraform(this._mysqlUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MysqlMysqlUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(mysqlServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MysqlServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(mysqlTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MysqlTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(mysqlTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "MysqlTechEmailsList",
      },
      timeouts: {
        value: mysqlTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MysqlTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
