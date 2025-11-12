// https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PgConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#additional_disk_space Pg#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#cloud_name Pg#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#disk_space Pg#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#id Pg#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#maintenance_window_dow Pg#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#maintenance_window_time Pg#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#plan Pg#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#project Pg#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#project_vpc_id Pg#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#service_name Pg#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#static_ips Pg#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#termination_protection Pg#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * pg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg Pg#pg}
  */
  readonly pg?: PgPg;
  /**
  * pg_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_user_config Pg#pg_user_config}
  */
  readonly pgUserConfig?: PgPgUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#service_integrations Pg#service_integrations}
  */
  readonly serviceIntegrations?: PgServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#tag Pg#tag}
  */
  readonly tag?: PgTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#tech_emails Pg#tech_emails}
  */
  readonly techEmails?: PgTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#timeouts Pg#timeouts}
  */
  readonly timeouts?: PgTimeouts;
}
export interface PgComponents {
}

export function pgComponentsToTerraform(struct?: PgComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pgComponentsToHclTerraform(struct?: PgComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PgComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgComponents | undefined) {
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

export class PgComponentsList extends cdktf.ComplexList {

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
  public get(index: number): PgComponentsOutputReference {
    return new PgComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgPgParams {
}

export function pgPgParamsToTerraform(struct?: PgPgParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function pgPgParamsToHclTerraform(struct?: PgPgParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PgPgParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgPgParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgParams | cdktf.IResolvable | undefined) {
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

export class PgPgParamsList extends cdktf.ComplexList {
  public internalValue? : PgPgParams[] | cdktf.IResolvable

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
  public get(index: number): PgPgParamsOutputReference {
    return new PgPgParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgPg {
  /**
  * PostgreSQL standby connection URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#standby_uris Pg#standby_uris}
  */
  readonly standbyUris?: string[];
  /**
  * PostgreSQL syncing connection URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#syncing_uris Pg#syncing_uris}
  */
  readonly syncingUris?: string[];
  /**
  * PostgreSQL primary connection URI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#uri Pg#uri}
  */
  readonly uri?: string;
  /**
  * PostgreSQL primary connection URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#uris Pg#uris}
  */
  readonly uris?: string[];
  /**
  * params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#params Pg#params}
  */
  readonly params?: PgPgParams[] | cdktf.IResolvable;
}

export function pgPgToTerraform(struct?: PgPgOutputReference | PgPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standby_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.standbyUris),
    syncing_uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncingUris),
    uri: cdktf.stringToTerraform(struct!.uri),
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
    params: cdktf.listMapper(pgPgParamsToTerraform, true)(struct!.params),
  }
}


export function pgPgToHclTerraform(struct?: PgPgOutputReference | PgPg): any {
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
    uri: {
      value: cdktf.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uris: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.uris),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    params: {
      value: cdktf.listMapperHcl(pgPgParamsToHclTerraform, true)(struct!.params),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgParamsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPg | undefined {
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
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
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

  public set internalValue(value: PgPg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._standbyUris = undefined;
      this._syncingUris = undefined;
      this._uri = undefined;
      this._uris = undefined;
      this._params.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._standbyUris = value.standbyUris;
      this._syncingUris = value.syncingUris;
      this._uri = value.uri;
      this._uris = value.uris;
      this._params.internalValue = value.params;
    }
  }

  // bouncer - computed: true, optional: false, required: false
  public get bouncer() {
    return this.getStringAttribute('bouncer');
  }

  // dbname - computed: true, optional: false, required: false
  public get dbname() {
    return this.getStringAttribute('dbname');
  }

  // host - computed: true, optional: false, required: false
  public get host() {
    return this.getStringAttribute('host');
  }

  // max_connections - computed: true, optional: false, required: false
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // replica_uri - computed: true, optional: false, required: false
  public get replicaUri() {
    return this.getStringAttribute('replica_uri');
  }

  // sslmode - computed: true, optional: false, required: false
  public get sslmode() {
    return this.getStringAttribute('sslmode');
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

  // uri - computed: true, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
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

  // user - computed: true, optional: false, required: false
  public get user() {
    return this.getStringAttribute('user');
  }

  // params - computed: false, optional: true, required: false
  private _params = new PgPgParamsList(this, "params", false);
  public get params() {
    return this._params;
  }
  public putParams(value: PgPgParams[] | cdktf.IResolvable) {
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
export interface PgPgUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#description Pg#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#network Pg#network}
  */
  readonly network: string;
}

export function pgPgUserConfigIpFilterObjectToTerraform(struct?: PgPgUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function pgPgUserConfigIpFilterObjectToHclTerraform(struct?: PgPgUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class PgPgUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgPgUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgPgUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class PgPgUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : PgPgUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): PgPgUserConfigIpFilterObjectOutputReference {
    return new PgPgUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgPgUserConfigMigration {
  /**
  * Database name for bootstrapping the initial connection. Example: `defaultdb`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#dbname Pg#dbname}
  */
  readonly dbname?: string;
  /**
  * Hostname or IP address of the server where to migrate data from. Example: `my.server.com`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#host Pg#host}
  */
  readonly host: string;
  /**
  * Comma-separated list of databases, which should be ignored during migration (supported by MySQL and PostgreSQL only at the moment). Example: `db1,db2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ignore_dbs Pg#ignore_dbs}
  */
  readonly ignoreDbs?: string;
  /**
  * Comma-separated list of database roles, which should be ignored during migration (supported by PostgreSQL only at the moment). Example: `role1,role2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ignore_roles Pg#ignore_roles}
  */
  readonly ignoreRoles?: string;
  /**
  * Enum: `dump`, `replication`. The migration method to be used (currently supported only by Redis, Dragonfly, MySQL and PostgreSQL service types).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#method Pg#method}
  */
  readonly method?: string;
  /**
  * Password for authentication with the server where to migrate data from. Example: `jjKk45Nnd`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#password Pg#password}
  */
  readonly password?: string;
  /**
  * Port number of the server where to migrate data from. Example: `1234`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#port Pg#port}
  */
  readonly port: number;
  /**
  * The server where to migrate data from is secured with SSL. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ssl Pg#ssl}
  */
  readonly ssl?: boolean | cdktf.IResolvable;
  /**
  * User name for authentication with the server where to migrate data from. Example: `myname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#username Pg#username}
  */
  readonly username?: string;
}

export function pgPgUserConfigMigrationToTerraform(struct?: PgPgUserConfigMigrationOutputReference | PgPgUserConfigMigration): any {
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


export function pgPgUserConfigMigrationToHclTerraform(struct?: PgPgUserConfigMigrationOutputReference | PgPgUserConfigMigration): any {
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

export class PgPgUserConfigMigrationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigMigration | undefined {
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

  public set internalValue(value: PgPgUserConfigMigration | undefined) {
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
export interface PgPgUserConfigPg {
  /**
  * Specifies a fraction of the table size to add to autovacuum_analyze_threshold when deciding whether to trigger an ANALYZE (e.g. `0.2` for 20% of the table size). The default is `0.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_analyze_scale_factor Pg#autovacuum_analyze_scale_factor}
  */
  readonly autovacuumAnalyzeScaleFactor?: number;
  /**
  * Specifies the minimum number of inserted, updated or deleted tuples needed to trigger an ANALYZE in any one table. The default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_analyze_threshold Pg#autovacuum_analyze_threshold}
  */
  readonly autovacuumAnalyzeThreshold?: number;
  /**
  * Specifies the maximum age (in transactions) that a table's pg_class.relfrozenxid field can attain before a VACUUM operation is forced to prevent transaction ID wraparound within the table. The system launches autovacuum processes to prevent wraparound even when autovacuum is otherwise disabled. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_freeze_max_age Pg#autovacuum_freeze_max_age}
  */
  readonly autovacuumFreezeMaxAge?: number;
  /**
  * Specifies the maximum number of autovacuum processes (other than the autovacuum launcher) that may be running at any one time. The default is `3`. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_max_workers Pg#autovacuum_max_workers}
  */
  readonly autovacuumMaxWorkers?: number;
  /**
  * Specifies the minimum delay between autovacuum runs on any given database. The delay is measured in seconds. The default is `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_naptime Pg#autovacuum_naptime}
  */
  readonly autovacuumNaptime?: number;
  /**
  * Specifies the cost delay value that will be used in automatic VACUUM operations. If `-1` is specified, the regular vacuum_cost_delay value will be used. The default is `2` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_vacuum_cost_delay Pg#autovacuum_vacuum_cost_delay}
  */
  readonly autovacuumVacuumCostDelay?: number;
  /**
  * Specifies the cost limit value that will be used in automatic VACUUM operations. If `-1` is specified, the regular vacuum_cost_limit value will be used. The default is `-1` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_vacuum_cost_limit Pg#autovacuum_vacuum_cost_limit}
  */
  readonly autovacuumVacuumCostLimit?: number;
  /**
  * Specifies a fraction of the table size to add to autovacuum_vacuum_threshold when deciding whether to trigger a VACUUM (e.g. `0.2` for 20% of the table size). The default is `0.2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_vacuum_scale_factor Pg#autovacuum_vacuum_scale_factor}
  */
  readonly autovacuumVacuumScaleFactor?: number;
  /**
  * Specifies the minimum number of updated or deleted tuples needed to trigger a VACUUM in any one table. The default is `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autovacuum_vacuum_threshold Pg#autovacuum_vacuum_threshold}
  */
  readonly autovacuumVacuumThreshold?: number;
  /**
  * Specifies the delay between activity rounds for the background writer in milliseconds. The default is `200`. Example: `200`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#bgwriter_delay Pg#bgwriter_delay}
  */
  readonly bgwriterDelay?: number;
  /**
  * Whenever more than bgwriter_flush_after bytes have been written by the background writer, attempt to force the OS to issue these writes to the underlying storage. Specified in kilobytes. Setting of 0 disables forced writeback. The default is `512`. Example: `512`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#bgwriter_flush_after Pg#bgwriter_flush_after}
  */
  readonly bgwriterFlushAfter?: number;
  /**
  * In each round, no more than this many buffers will be written by the background writer. Setting this to zero disables background writing. The default is `100`. Example: `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#bgwriter_lru_maxpages Pg#bgwriter_lru_maxpages}
  */
  readonly bgwriterLruMaxpages?: number;
  /**
  * The average recent need for new buffers is multiplied by bgwriter_lru_multiplier to arrive at an estimate of the number that will be needed during the next round, (up to bgwriter_lru_maxpages). 1.0 represents a “just in time” policy of writing exactly the number of buffers predicted to be needed. Larger values provide some cushion against spikes in demand, while smaller values intentionally leave writes to be done by server processes. The default is `2.0`. Example: `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#bgwriter_lru_multiplier Pg#bgwriter_lru_multiplier}
  */
  readonly bgwriterLruMultiplier?: number;
  /**
  * This is the amount of time, in milliseconds, to wait on a lock before checking to see if there is a deadlock condition. The default is `1000` (upstream default). Example: `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#deadlock_timeout Pg#deadlock_timeout}
  */
  readonly deadlockTimeout?: number;
  /**
  * Enum: `lz4`, `pglz`. Specifies the default TOAST compression method for values of compressible columns. The default is `lz4`. Only available for PostgreSQL 14+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#default_toast_compression Pg#default_toast_compression}
  */
  readonly defaultToastCompression?: string;
  /**
  * Time out sessions with open transactions after this number of milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#idle_in_transaction_session_timeout Pg#idle_in_transaction_session_timeout}
  */
  readonly idleInTransactionSessionTimeout?: number;
  /**
  * Controls system-wide use of Just-in-Time Compilation (JIT).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#jit Pg#jit}
  */
  readonly jit?: boolean | cdktf.IResolvable;
  /**
  * Causes each action executed by autovacuum to be logged if it ran for at least the specified number of milliseconds. Setting this to zero logs all autovacuum actions. Minus-one disables logging autovacuum actions. The default is `1000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_autovacuum_min_duration Pg#log_autovacuum_min_duration}
  */
  readonly logAutovacuumMinDuration?: number;
  /**
  * Enum: `DEFAULT`, `TERSE`, `VERBOSE`. Controls the amount of detail written in the server log for each message that is logged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_error_verbosity Pg#log_error_verbosity}
  */
  readonly logErrorVerbosity?: string;
  /**
  * Enum: `'%m [%p] %q[user=%u,db=%d,app=%a] '`, `'%t [%p]: [%l-1] user=%u,db=%d,app=%a,client=%h '`, `'pid=%p,user=%u,db=%d,app=%a,client=%h '`, `'pid=%p,user=%u,db=%d,app=%a,client=%h,txid=%x,qid=%Q '`. Choose from one of the available log formats.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_line_prefix Pg#log_line_prefix}
  */
  readonly logLinePrefix?: string;
  /**
  * Log statements that take more than this number of milliseconds to run, -1 disables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_min_duration_statement Pg#log_min_duration_statement}
  */
  readonly logMinDurationStatement?: number;
  /**
  * Log statements for each temporary file created larger than this number of kilobytes, -1 disables.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_temp_files Pg#log_temp_files}
  */
  readonly logTempFiles?: number;
  /**
  * Sets the PostgreSQL maximum number of concurrent connections to the database server. This is a limited-release parameter. Contact your account team to confirm your eligibility. You cannot decrease this parameter value when set. For services with a read replica, first increase the read replica's value. After the change is applied to the replica, you can increase the primary service's value. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_connections Pg#max_connections}
  */
  readonly maxConnections?: number;
  /**
  * PostgreSQL maximum number of files that can be open per process. The default is `1000` (upstream default). Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_files_per_process Pg#max_files_per_process}
  */
  readonly maxFilesPerProcess?: number;
  /**
  * PostgreSQL maximum locks per transaction. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_locks_per_transaction Pg#max_locks_per_transaction}
  */
  readonly maxLocksPerTransaction?: number;
  /**
  * PostgreSQL maximum logical replication workers (taken from the pool of max_parallel_workers). The default is `4` (upstream default). Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_logical_replication_workers Pg#max_logical_replication_workers}
  */
  readonly maxLogicalReplicationWorkers?: number;
  /**
  * Sets the maximum number of workers that the system can support for parallel queries. The default is `8` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_parallel_workers Pg#max_parallel_workers}
  */
  readonly maxParallelWorkers?: number;
  /**
  * Sets the maximum number of workers that can be started by a single Gather or Gather Merge node. The default is `2` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_parallel_workers_per_gather Pg#max_parallel_workers_per_gather}
  */
  readonly maxParallelWorkersPerGather?: number;
  /**
  * PostgreSQL maximum predicate locks per transaction. The default is `64` (upstream default). Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_pred_locks_per_transaction Pg#max_pred_locks_per_transaction}
  */
  readonly maxPredLocksPerTransaction?: number;
  /**
  * PostgreSQL maximum prepared transactions. The default is `0`. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_prepared_transactions Pg#max_prepared_transactions}
  */
  readonly maxPreparedTransactions?: number;
  /**
  * PostgreSQL maximum replication slots. The default is `20`. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_replication_slots Pg#max_replication_slots}
  */
  readonly maxReplicationSlots?: number;
  /**
  * PostgreSQL maximum WAL size (MB) reserved for replication slots. If `-1` is specified, replication slots may retain an unlimited amount of WAL files. The default is `-1` (upstream default). wal_keep_size minimum WAL size setting takes precedence over this.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_slot_wal_keep_size Pg#max_slot_wal_keep_size}
  */
  readonly maxSlotWalKeepSize?: number;
  /**
  * Maximum depth of the stack in bytes. The default is `2097152` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_stack_depth Pg#max_stack_depth}
  */
  readonly maxStackDepth?: number;
  /**
  * Max standby archive delay in milliseconds. The default is `30000` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_standby_archive_delay Pg#max_standby_archive_delay}
  */
  readonly maxStandbyArchiveDelay?: number;
  /**
  * Max standby streaming delay in milliseconds. The default is `30000` (upstream default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_standby_streaming_delay Pg#max_standby_streaming_delay}
  */
  readonly maxStandbyStreamingDelay?: number;
  /**
  * Maximum number of synchronization workers per subscription. The default is `2`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_sync_workers_per_subscription Pg#max_sync_workers_per_subscription}
  */
  readonly maxSyncWorkersPerSubscription?: number;
  /**
  * PostgreSQL maximum WAL senders. The default is `20`. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_wal_senders Pg#max_wal_senders}
  */
  readonly maxWalSenders?: number;
  /**
  * Sets the maximum number of background processes that the system can support. The default is `8`. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_worker_processes Pg#max_worker_processes}
  */
  readonly maxWorkerProcesses?: number;
  /**
  * Enum: `md5`, `scram-sha-256`. Chooses the algorithm for encrypting passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#password_encryption Pg#password_encryption}
  */
  readonly passwordEncryption?: string;
  /**
  * Sets the time interval in seconds to run pg_partman's scheduled tasks. The default is `3600`. Example: `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_partman_bgw__dot__interval Pg#pg_partman_bgw__dot__interval}
  */
  readonly pgPartmanBgwDotInterval?: number;
  /**
  * Controls which role to use for pg_partman's scheduled background tasks. Example: `myrolename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_partman_bgw__dot__role Pg#pg_partman_bgw__dot__role}
  */
  readonly pgPartmanBgwDotRole?: string;
  /**
  * Enables or disables query plan monitoring. Changing this parameter causes a service restart. Only available for PostgreSQL 13+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_stat_monitor__dot__pgsm_enable_query_plan Pg#pg_stat_monitor__dot__pgsm_enable_query_plan}
  */
  readonly pgStatMonitorDotPgsmEnableQueryPlan?: boolean | cdktf.IResolvable;
  /**
  * Sets the maximum number of buckets. Changing this parameter causes a service restart. Only available for PostgreSQL 13+. Example: `10`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_stat_monitor__dot__pgsm_max_buckets Pg#pg_stat_monitor__dot__pgsm_max_buckets}
  */
  readonly pgStatMonitorDotPgsmMaxBuckets?: number;
  /**
  * Enum: `all`, `none`, `top`. Controls which statements are counted. Specify top to track top-level statements (those issued directly by clients), all to also track nested statements (such as statements invoked within functions), or none to disable statement statistics collection. The default is `top`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_stat_statements__dot__track Pg#pg_stat_statements__dot__track}
  */
  readonly pgStatStatementsDotTrack?: string;
  /**
  * PostgreSQL temporary file limit in KiB, -1 for unlimited.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#temp_file_limit Pg#temp_file_limit}
  */
  readonly tempFileLimit?: number;
  /**
  * PostgreSQL service timezone. Example: `Europe/Helsinki`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#timezone Pg#timezone}
  */
  readonly timezone?: string;
  /**
  * Specifies the number of bytes reserved to track the currently executing command for each active session. Changing this parameter causes a service restart. Example: `1024`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#track_activity_query_size Pg#track_activity_query_size}
  */
  readonly trackActivityQuerySize?: number;
  /**
  * Enum: `off`, `on`. Record commit time of transactions. Changing this parameter causes a service restart.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#track_commit_timestamp Pg#track_commit_timestamp}
  */
  readonly trackCommitTimestamp?: string;
  /**
  * Enum: `all`, `none`, `pl`. Enables tracking of function call counts and time used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#track_functions Pg#track_functions}
  */
  readonly trackFunctions?: string;
  /**
  * Enum: `off`, `on`. Enables timing of database I/O calls. The default is `off`. When on, it will repeatedly query the operating system for the current time, which may cause significant overhead on some platforms.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#track_io_timing Pg#track_io_timing}
  */
  readonly trackIoTiming?: string;
  /**
  * Terminate replication connections that are inactive for longer than this amount of time, in milliseconds. Setting this value to zero disables the timeout. Example: `60000`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#wal_sender_timeout Pg#wal_sender_timeout}
  */
  readonly walSenderTimeout?: number;
  /**
  * WAL flush interval in milliseconds. The default is `200`. Setting this parameter to a lower value may negatively impact performance. Example: `50`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#wal_writer_delay Pg#wal_writer_delay}
  */
  readonly walWriterDelay?: number;
}

export function pgPgUserConfigPgToTerraform(struct?: PgPgUserConfigPgOutputReference | PgPgUserConfigPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autovacuum_analyze_scale_factor: cdktf.numberToTerraform(struct!.autovacuumAnalyzeScaleFactor),
    autovacuum_analyze_threshold: cdktf.numberToTerraform(struct!.autovacuumAnalyzeThreshold),
    autovacuum_freeze_max_age: cdktf.numberToTerraform(struct!.autovacuumFreezeMaxAge),
    autovacuum_max_workers: cdktf.numberToTerraform(struct!.autovacuumMaxWorkers),
    autovacuum_naptime: cdktf.numberToTerraform(struct!.autovacuumNaptime),
    autovacuum_vacuum_cost_delay: cdktf.numberToTerraform(struct!.autovacuumVacuumCostDelay),
    autovacuum_vacuum_cost_limit: cdktf.numberToTerraform(struct!.autovacuumVacuumCostLimit),
    autovacuum_vacuum_scale_factor: cdktf.numberToTerraform(struct!.autovacuumVacuumScaleFactor),
    autovacuum_vacuum_threshold: cdktf.numberToTerraform(struct!.autovacuumVacuumThreshold),
    bgwriter_delay: cdktf.numberToTerraform(struct!.bgwriterDelay),
    bgwriter_flush_after: cdktf.numberToTerraform(struct!.bgwriterFlushAfter),
    bgwriter_lru_maxpages: cdktf.numberToTerraform(struct!.bgwriterLruMaxpages),
    bgwriter_lru_multiplier: cdktf.numberToTerraform(struct!.bgwriterLruMultiplier),
    deadlock_timeout: cdktf.numberToTerraform(struct!.deadlockTimeout),
    default_toast_compression: cdktf.stringToTerraform(struct!.defaultToastCompression),
    idle_in_transaction_session_timeout: cdktf.numberToTerraform(struct!.idleInTransactionSessionTimeout),
    jit: cdktf.booleanToTerraform(struct!.jit),
    log_autovacuum_min_duration: cdktf.numberToTerraform(struct!.logAutovacuumMinDuration),
    log_error_verbosity: cdktf.stringToTerraform(struct!.logErrorVerbosity),
    log_line_prefix: cdktf.stringToTerraform(struct!.logLinePrefix),
    log_min_duration_statement: cdktf.numberToTerraform(struct!.logMinDurationStatement),
    log_temp_files: cdktf.numberToTerraform(struct!.logTempFiles),
    max_connections: cdktf.numberToTerraform(struct!.maxConnections),
    max_files_per_process: cdktf.numberToTerraform(struct!.maxFilesPerProcess),
    max_locks_per_transaction: cdktf.numberToTerraform(struct!.maxLocksPerTransaction),
    max_logical_replication_workers: cdktf.numberToTerraform(struct!.maxLogicalReplicationWorkers),
    max_parallel_workers: cdktf.numberToTerraform(struct!.maxParallelWorkers),
    max_parallel_workers_per_gather: cdktf.numberToTerraform(struct!.maxParallelWorkersPerGather),
    max_pred_locks_per_transaction: cdktf.numberToTerraform(struct!.maxPredLocksPerTransaction),
    max_prepared_transactions: cdktf.numberToTerraform(struct!.maxPreparedTransactions),
    max_replication_slots: cdktf.numberToTerraform(struct!.maxReplicationSlots),
    max_slot_wal_keep_size: cdktf.numberToTerraform(struct!.maxSlotWalKeepSize),
    max_stack_depth: cdktf.numberToTerraform(struct!.maxStackDepth),
    max_standby_archive_delay: cdktf.numberToTerraform(struct!.maxStandbyArchiveDelay),
    max_standby_streaming_delay: cdktf.numberToTerraform(struct!.maxStandbyStreamingDelay),
    max_sync_workers_per_subscription: cdktf.numberToTerraform(struct!.maxSyncWorkersPerSubscription),
    max_wal_senders: cdktf.numberToTerraform(struct!.maxWalSenders),
    max_worker_processes: cdktf.numberToTerraform(struct!.maxWorkerProcesses),
    password_encryption: cdktf.stringToTerraform(struct!.passwordEncryption),
    pg_partman_bgw__dot__interval: cdktf.numberToTerraform(struct!.pgPartmanBgwDotInterval),
    pg_partman_bgw__dot__role: cdktf.stringToTerraform(struct!.pgPartmanBgwDotRole),
    pg_stat_monitor__dot__pgsm_enable_query_plan: cdktf.booleanToTerraform(struct!.pgStatMonitorDotPgsmEnableQueryPlan),
    pg_stat_monitor__dot__pgsm_max_buckets: cdktf.numberToTerraform(struct!.pgStatMonitorDotPgsmMaxBuckets),
    pg_stat_statements__dot__track: cdktf.stringToTerraform(struct!.pgStatStatementsDotTrack),
    temp_file_limit: cdktf.numberToTerraform(struct!.tempFileLimit),
    timezone: cdktf.stringToTerraform(struct!.timezone),
    track_activity_query_size: cdktf.numberToTerraform(struct!.trackActivityQuerySize),
    track_commit_timestamp: cdktf.stringToTerraform(struct!.trackCommitTimestamp),
    track_functions: cdktf.stringToTerraform(struct!.trackFunctions),
    track_io_timing: cdktf.stringToTerraform(struct!.trackIoTiming),
    wal_sender_timeout: cdktf.numberToTerraform(struct!.walSenderTimeout),
    wal_writer_delay: cdktf.numberToTerraform(struct!.walWriterDelay),
  }
}


export function pgPgUserConfigPgToHclTerraform(struct?: PgPgUserConfigPgOutputReference | PgPgUserConfigPg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autovacuum_analyze_scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumAnalyzeScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_analyze_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumAnalyzeThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_freeze_max_age: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumFreezeMaxAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_max_workers: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumMaxWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_naptime: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumNaptime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_cost_delay: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumCostDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_cost_limit: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumCostLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_scale_factor: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumScaleFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autovacuum_vacuum_threshold: {
      value: cdktf.numberToHclTerraform(struct!.autovacuumVacuumThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_delay: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_flush_after: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterFlushAfter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_lru_maxpages: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterLruMaxpages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgwriter_lru_multiplier: {
      value: cdktf.numberToHclTerraform(struct!.bgwriterLruMultiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    deadlock_timeout: {
      value: cdktf.numberToHclTerraform(struct!.deadlockTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    default_toast_compression: {
      value: cdktf.stringToHclTerraform(struct!.defaultToastCompression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    idle_in_transaction_session_timeout: {
      value: cdktf.numberToHclTerraform(struct!.idleInTransactionSessionTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    jit: {
      value: cdktf.booleanToHclTerraform(struct!.jit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_autovacuum_min_duration: {
      value: cdktf.numberToHclTerraform(struct!.logAutovacuumMinDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_error_verbosity: {
      value: cdktf.stringToHclTerraform(struct!.logErrorVerbosity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_line_prefix: {
      value: cdktf.stringToHclTerraform(struct!.logLinePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_min_duration_statement: {
      value: cdktf.numberToHclTerraform(struct!.logMinDurationStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_temp_files: {
      value: cdktf.numberToHclTerraform(struct!.logTempFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_connections: {
      value: cdktf.numberToHclTerraform(struct!.maxConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_files_per_process: {
      value: cdktf.numberToHclTerraform(struct!.maxFilesPerProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_locks_per_transaction: {
      value: cdktf.numberToHclTerraform(struct!.maxLocksPerTransaction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_logical_replication_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxLogicalReplicationWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_parallel_workers_per_gather: {
      value: cdktf.numberToHclTerraform(struct!.maxParallelWorkersPerGather),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_pred_locks_per_transaction: {
      value: cdktf.numberToHclTerraform(struct!.maxPredLocksPerTransaction),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_prepared_transactions: {
      value: cdktf.numberToHclTerraform(struct!.maxPreparedTransactions),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_replication_slots: {
      value: cdktf.numberToHclTerraform(struct!.maxReplicationSlots),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_slot_wal_keep_size: {
      value: cdktf.numberToHclTerraform(struct!.maxSlotWalKeepSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_stack_depth: {
      value: cdktf.numberToHclTerraform(struct!.maxStackDepth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_standby_archive_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxStandbyArchiveDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_standby_streaming_delay: {
      value: cdktf.numberToHclTerraform(struct!.maxStandbyStreamingDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_sync_workers_per_subscription: {
      value: cdktf.numberToHclTerraform(struct!.maxSyncWorkersPerSubscription),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_wal_senders: {
      value: cdktf.numberToHclTerraform(struct!.maxWalSenders),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_worker_processes: {
      value: cdktf.numberToHclTerraform(struct!.maxWorkerProcesses),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_encryption: {
      value: cdktf.stringToHclTerraform(struct!.passwordEncryption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_partman_bgw__dot__interval: {
      value: cdktf.numberToHclTerraform(struct!.pgPartmanBgwDotInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pg_partman_bgw__dot__role: {
      value: cdktf.stringToHclTerraform(struct!.pgPartmanBgwDotRole),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_stat_monitor__dot__pgsm_enable_query_plan: {
      value: cdktf.booleanToHclTerraform(struct!.pgStatMonitorDotPgsmEnableQueryPlan),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_stat_monitor__dot__pgsm_max_buckets: {
      value: cdktf.numberToHclTerraform(struct!.pgStatMonitorDotPgsmMaxBuckets),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pg_stat_statements__dot__track: {
      value: cdktf.stringToHclTerraform(struct!.pgStatStatementsDotTrack),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temp_file_limit: {
      value: cdktf.numberToHclTerraform(struct!.tempFileLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timezone: {
      value: cdktf.stringToHclTerraform(struct!.timezone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_activity_query_size: {
      value: cdktf.numberToHclTerraform(struct!.trackActivityQuerySize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_commit_timestamp: {
      value: cdktf.stringToHclTerraform(struct!.trackCommitTimestamp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_functions: {
      value: cdktf.stringToHclTerraform(struct!.trackFunctions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_io_timing: {
      value: cdktf.stringToHclTerraform(struct!.trackIoTiming),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wal_sender_timeout: {
      value: cdktf.numberToHclTerraform(struct!.walSenderTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    wal_writer_delay: {
      value: cdktf.numberToHclTerraform(struct!.walWriterDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigPgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autovacuumAnalyzeScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumAnalyzeScaleFactor = this._autovacuumAnalyzeScaleFactor;
    }
    if (this._autovacuumAnalyzeThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumAnalyzeThreshold = this._autovacuumAnalyzeThreshold;
    }
    if (this._autovacuumFreezeMaxAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumFreezeMaxAge = this._autovacuumFreezeMaxAge;
    }
    if (this._autovacuumMaxWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumMaxWorkers = this._autovacuumMaxWorkers;
    }
    if (this._autovacuumNaptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumNaptime = this._autovacuumNaptime;
    }
    if (this._autovacuumVacuumCostDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostDelay = this._autovacuumVacuumCostDelay;
    }
    if (this._autovacuumVacuumCostLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumCostLimit = this._autovacuumVacuumCostLimit;
    }
    if (this._autovacuumVacuumScaleFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumScaleFactor = this._autovacuumVacuumScaleFactor;
    }
    if (this._autovacuumVacuumThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.autovacuumVacuumThreshold = this._autovacuumVacuumThreshold;
    }
    if (this._bgwriterDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterDelay = this._bgwriterDelay;
    }
    if (this._bgwriterFlushAfter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterFlushAfter = this._bgwriterFlushAfter;
    }
    if (this._bgwriterLruMaxpages !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterLruMaxpages = this._bgwriterLruMaxpages;
    }
    if (this._bgwriterLruMultiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgwriterLruMultiplier = this._bgwriterLruMultiplier;
    }
    if (this._deadlockTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadlockTimeout = this._deadlockTimeout;
    }
    if (this._defaultToastCompression !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultToastCompression = this._defaultToastCompression;
    }
    if (this._idleInTransactionSessionTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.idleInTransactionSessionTimeout = this._idleInTransactionSessionTimeout;
    }
    if (this._jit !== undefined) {
      hasAnyValues = true;
      internalValueResult.jit = this._jit;
    }
    if (this._logAutovacuumMinDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAutovacuumMinDuration = this._logAutovacuumMinDuration;
    }
    if (this._logErrorVerbosity !== undefined) {
      hasAnyValues = true;
      internalValueResult.logErrorVerbosity = this._logErrorVerbosity;
    }
    if (this._logLinePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLinePrefix = this._logLinePrefix;
    }
    if (this._logMinDurationStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMinDurationStatement = this._logMinDurationStatement;
    }
    if (this._logTempFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTempFiles = this._logTempFiles;
    }
    if (this._maxConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConnections = this._maxConnections;
    }
    if (this._maxFilesPerProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFilesPerProcess = this._maxFilesPerProcess;
    }
    if (this._maxLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLocksPerTransaction = this._maxLocksPerTransaction;
    }
    if (this._maxLogicalReplicationWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLogicalReplicationWorkers = this._maxLogicalReplicationWorkers;
    }
    if (this._maxParallelWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelWorkers = this._maxParallelWorkers;
    }
    if (this._maxParallelWorkersPerGather !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxParallelWorkersPerGather = this._maxParallelWorkersPerGather;
    }
    if (this._maxPredLocksPerTransaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPredLocksPerTransaction = this._maxPredLocksPerTransaction;
    }
    if (this._maxPreparedTransactions !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedTransactions = this._maxPreparedTransactions;
    }
    if (this._maxReplicationSlots !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxReplicationSlots = this._maxReplicationSlots;
    }
    if (this._maxSlotWalKeepSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSlotWalKeepSize = this._maxSlotWalKeepSize;
    }
    if (this._maxStackDepth !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStackDepth = this._maxStackDepth;
    }
    if (this._maxStandbyArchiveDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStandbyArchiveDelay = this._maxStandbyArchiveDelay;
    }
    if (this._maxStandbyStreamingDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxStandbyStreamingDelay = this._maxStandbyStreamingDelay;
    }
    if (this._maxSyncWorkersPerSubscription !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxSyncWorkersPerSubscription = this._maxSyncWorkersPerSubscription;
    }
    if (this._maxWalSenders !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWalSenders = this._maxWalSenders;
    }
    if (this._maxWorkerProcesses !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxWorkerProcesses = this._maxWorkerProcesses;
    }
    if (this._passwordEncryption !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordEncryption = this._passwordEncryption;
    }
    if (this._pgPartmanBgwDotInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgPartmanBgwDotInterval = this._pgPartmanBgwDotInterval;
    }
    if (this._pgPartmanBgwDotRole !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgPartmanBgwDotRole = this._pgPartmanBgwDotRole;
    }
    if (this._pgStatMonitorDotPgsmEnableQueryPlan !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatMonitorDotPgsmEnableQueryPlan = this._pgStatMonitorDotPgsmEnableQueryPlan;
    }
    if (this._pgStatMonitorDotPgsmMaxBuckets !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatMonitorDotPgsmMaxBuckets = this._pgStatMonitorDotPgsmMaxBuckets;
    }
    if (this._pgStatStatementsDotTrack !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatStatementsDotTrack = this._pgStatStatementsDotTrack;
    }
    if (this._tempFileLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tempFileLimit = this._tempFileLimit;
    }
    if (this._timezone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timezone = this._timezone;
    }
    if (this._trackActivityQuerySize !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackActivityQuerySize = this._trackActivityQuerySize;
    }
    if (this._trackCommitTimestamp !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackCommitTimestamp = this._trackCommitTimestamp;
    }
    if (this._trackFunctions !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackFunctions = this._trackFunctions;
    }
    if (this._trackIoTiming !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackIoTiming = this._trackIoTiming;
    }
    if (this._walSenderTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.walSenderTimeout = this._walSenderTimeout;
    }
    if (this._walWriterDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.walWriterDelay = this._walWriterDelay;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autovacuumAnalyzeScaleFactor = undefined;
      this._autovacuumAnalyzeThreshold = undefined;
      this._autovacuumFreezeMaxAge = undefined;
      this._autovacuumMaxWorkers = undefined;
      this._autovacuumNaptime = undefined;
      this._autovacuumVacuumCostDelay = undefined;
      this._autovacuumVacuumCostLimit = undefined;
      this._autovacuumVacuumScaleFactor = undefined;
      this._autovacuumVacuumThreshold = undefined;
      this._bgwriterDelay = undefined;
      this._bgwriterFlushAfter = undefined;
      this._bgwriterLruMaxpages = undefined;
      this._bgwriterLruMultiplier = undefined;
      this._deadlockTimeout = undefined;
      this._defaultToastCompression = undefined;
      this._idleInTransactionSessionTimeout = undefined;
      this._jit = undefined;
      this._logAutovacuumMinDuration = undefined;
      this._logErrorVerbosity = undefined;
      this._logLinePrefix = undefined;
      this._logMinDurationStatement = undefined;
      this._logTempFiles = undefined;
      this._maxConnections = undefined;
      this._maxFilesPerProcess = undefined;
      this._maxLocksPerTransaction = undefined;
      this._maxLogicalReplicationWorkers = undefined;
      this._maxParallelWorkers = undefined;
      this._maxParallelWorkersPerGather = undefined;
      this._maxPredLocksPerTransaction = undefined;
      this._maxPreparedTransactions = undefined;
      this._maxReplicationSlots = undefined;
      this._maxSlotWalKeepSize = undefined;
      this._maxStackDepth = undefined;
      this._maxStandbyArchiveDelay = undefined;
      this._maxStandbyStreamingDelay = undefined;
      this._maxSyncWorkersPerSubscription = undefined;
      this._maxWalSenders = undefined;
      this._maxWorkerProcesses = undefined;
      this._passwordEncryption = undefined;
      this._pgPartmanBgwDotInterval = undefined;
      this._pgPartmanBgwDotRole = undefined;
      this._pgStatMonitorDotPgsmEnableQueryPlan = undefined;
      this._pgStatMonitorDotPgsmMaxBuckets = undefined;
      this._pgStatStatementsDotTrack = undefined;
      this._tempFileLimit = undefined;
      this._timezone = undefined;
      this._trackActivityQuerySize = undefined;
      this._trackCommitTimestamp = undefined;
      this._trackFunctions = undefined;
      this._trackIoTiming = undefined;
      this._walSenderTimeout = undefined;
      this._walWriterDelay = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autovacuumAnalyzeScaleFactor = value.autovacuumAnalyzeScaleFactor;
      this._autovacuumAnalyzeThreshold = value.autovacuumAnalyzeThreshold;
      this._autovacuumFreezeMaxAge = value.autovacuumFreezeMaxAge;
      this._autovacuumMaxWorkers = value.autovacuumMaxWorkers;
      this._autovacuumNaptime = value.autovacuumNaptime;
      this._autovacuumVacuumCostDelay = value.autovacuumVacuumCostDelay;
      this._autovacuumVacuumCostLimit = value.autovacuumVacuumCostLimit;
      this._autovacuumVacuumScaleFactor = value.autovacuumVacuumScaleFactor;
      this._autovacuumVacuumThreshold = value.autovacuumVacuumThreshold;
      this._bgwriterDelay = value.bgwriterDelay;
      this._bgwriterFlushAfter = value.bgwriterFlushAfter;
      this._bgwriterLruMaxpages = value.bgwriterLruMaxpages;
      this._bgwriterLruMultiplier = value.bgwriterLruMultiplier;
      this._deadlockTimeout = value.deadlockTimeout;
      this._defaultToastCompression = value.defaultToastCompression;
      this._idleInTransactionSessionTimeout = value.idleInTransactionSessionTimeout;
      this._jit = value.jit;
      this._logAutovacuumMinDuration = value.logAutovacuumMinDuration;
      this._logErrorVerbosity = value.logErrorVerbosity;
      this._logLinePrefix = value.logLinePrefix;
      this._logMinDurationStatement = value.logMinDurationStatement;
      this._logTempFiles = value.logTempFiles;
      this._maxConnections = value.maxConnections;
      this._maxFilesPerProcess = value.maxFilesPerProcess;
      this._maxLocksPerTransaction = value.maxLocksPerTransaction;
      this._maxLogicalReplicationWorkers = value.maxLogicalReplicationWorkers;
      this._maxParallelWorkers = value.maxParallelWorkers;
      this._maxParallelWorkersPerGather = value.maxParallelWorkersPerGather;
      this._maxPredLocksPerTransaction = value.maxPredLocksPerTransaction;
      this._maxPreparedTransactions = value.maxPreparedTransactions;
      this._maxReplicationSlots = value.maxReplicationSlots;
      this._maxSlotWalKeepSize = value.maxSlotWalKeepSize;
      this._maxStackDepth = value.maxStackDepth;
      this._maxStandbyArchiveDelay = value.maxStandbyArchiveDelay;
      this._maxStandbyStreamingDelay = value.maxStandbyStreamingDelay;
      this._maxSyncWorkersPerSubscription = value.maxSyncWorkersPerSubscription;
      this._maxWalSenders = value.maxWalSenders;
      this._maxWorkerProcesses = value.maxWorkerProcesses;
      this._passwordEncryption = value.passwordEncryption;
      this._pgPartmanBgwDotInterval = value.pgPartmanBgwDotInterval;
      this._pgPartmanBgwDotRole = value.pgPartmanBgwDotRole;
      this._pgStatMonitorDotPgsmEnableQueryPlan = value.pgStatMonitorDotPgsmEnableQueryPlan;
      this._pgStatMonitorDotPgsmMaxBuckets = value.pgStatMonitorDotPgsmMaxBuckets;
      this._pgStatStatementsDotTrack = value.pgStatStatementsDotTrack;
      this._tempFileLimit = value.tempFileLimit;
      this._timezone = value.timezone;
      this._trackActivityQuerySize = value.trackActivityQuerySize;
      this._trackCommitTimestamp = value.trackCommitTimestamp;
      this._trackFunctions = value.trackFunctions;
      this._trackIoTiming = value.trackIoTiming;
      this._walSenderTimeout = value.walSenderTimeout;
      this._walWriterDelay = value.walWriterDelay;
    }
  }

  // autovacuum_analyze_scale_factor - computed: false, optional: true, required: false
  private _autovacuumAnalyzeScaleFactor?: number; 
  public get autovacuumAnalyzeScaleFactor() {
    return this.getNumberAttribute('autovacuum_analyze_scale_factor');
  }
  public set autovacuumAnalyzeScaleFactor(value: number) {
    this._autovacuumAnalyzeScaleFactor = value;
  }
  public resetAutovacuumAnalyzeScaleFactor() {
    this._autovacuumAnalyzeScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeScaleFactorInput() {
    return this._autovacuumAnalyzeScaleFactor;
  }

  // autovacuum_analyze_threshold - computed: false, optional: true, required: false
  private _autovacuumAnalyzeThreshold?: number; 
  public get autovacuumAnalyzeThreshold() {
    return this.getNumberAttribute('autovacuum_analyze_threshold');
  }
  public set autovacuumAnalyzeThreshold(value: number) {
    this._autovacuumAnalyzeThreshold = value;
  }
  public resetAutovacuumAnalyzeThreshold() {
    this._autovacuumAnalyzeThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumAnalyzeThresholdInput() {
    return this._autovacuumAnalyzeThreshold;
  }

  // autovacuum_freeze_max_age - computed: false, optional: true, required: false
  private _autovacuumFreezeMaxAge?: number; 
  public get autovacuumFreezeMaxAge() {
    return this.getNumberAttribute('autovacuum_freeze_max_age');
  }
  public set autovacuumFreezeMaxAge(value: number) {
    this._autovacuumFreezeMaxAge = value;
  }
  public resetAutovacuumFreezeMaxAge() {
    this._autovacuumFreezeMaxAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumFreezeMaxAgeInput() {
    return this._autovacuumFreezeMaxAge;
  }

  // autovacuum_max_workers - computed: false, optional: true, required: false
  private _autovacuumMaxWorkers?: number; 
  public get autovacuumMaxWorkers() {
    return this.getNumberAttribute('autovacuum_max_workers');
  }
  public set autovacuumMaxWorkers(value: number) {
    this._autovacuumMaxWorkers = value;
  }
  public resetAutovacuumMaxWorkers() {
    this._autovacuumMaxWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumMaxWorkersInput() {
    return this._autovacuumMaxWorkers;
  }

  // autovacuum_naptime - computed: false, optional: true, required: false
  private _autovacuumNaptime?: number; 
  public get autovacuumNaptime() {
    return this.getNumberAttribute('autovacuum_naptime');
  }
  public set autovacuumNaptime(value: number) {
    this._autovacuumNaptime = value;
  }
  public resetAutovacuumNaptime() {
    this._autovacuumNaptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumNaptimeInput() {
    return this._autovacuumNaptime;
  }

  // autovacuum_vacuum_cost_delay - computed: false, optional: true, required: false
  private _autovacuumVacuumCostDelay?: number; 
  public get autovacuumVacuumCostDelay() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_delay');
  }
  public set autovacuumVacuumCostDelay(value: number) {
    this._autovacuumVacuumCostDelay = value;
  }
  public resetAutovacuumVacuumCostDelay() {
    this._autovacuumVacuumCostDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostDelayInput() {
    return this._autovacuumVacuumCostDelay;
  }

  // autovacuum_vacuum_cost_limit - computed: false, optional: true, required: false
  private _autovacuumVacuumCostLimit?: number; 
  public get autovacuumVacuumCostLimit() {
    return this.getNumberAttribute('autovacuum_vacuum_cost_limit');
  }
  public set autovacuumVacuumCostLimit(value: number) {
    this._autovacuumVacuumCostLimit = value;
  }
  public resetAutovacuumVacuumCostLimit() {
    this._autovacuumVacuumCostLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumCostLimitInput() {
    return this._autovacuumVacuumCostLimit;
  }

  // autovacuum_vacuum_scale_factor - computed: false, optional: true, required: false
  private _autovacuumVacuumScaleFactor?: number; 
  public get autovacuumVacuumScaleFactor() {
    return this.getNumberAttribute('autovacuum_vacuum_scale_factor');
  }
  public set autovacuumVacuumScaleFactor(value: number) {
    this._autovacuumVacuumScaleFactor = value;
  }
  public resetAutovacuumVacuumScaleFactor() {
    this._autovacuumVacuumScaleFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumScaleFactorInput() {
    return this._autovacuumVacuumScaleFactor;
  }

  // autovacuum_vacuum_threshold - computed: false, optional: true, required: false
  private _autovacuumVacuumThreshold?: number; 
  public get autovacuumVacuumThreshold() {
    return this.getNumberAttribute('autovacuum_vacuum_threshold');
  }
  public set autovacuumVacuumThreshold(value: number) {
    this._autovacuumVacuumThreshold = value;
  }
  public resetAutovacuumVacuumThreshold() {
    this._autovacuumVacuumThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autovacuumVacuumThresholdInput() {
    return this._autovacuumVacuumThreshold;
  }

  // bgwriter_delay - computed: false, optional: true, required: false
  private _bgwriterDelay?: number; 
  public get bgwriterDelay() {
    return this.getNumberAttribute('bgwriter_delay');
  }
  public set bgwriterDelay(value: number) {
    this._bgwriterDelay = value;
  }
  public resetBgwriterDelay() {
    this._bgwriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterDelayInput() {
    return this._bgwriterDelay;
  }

  // bgwriter_flush_after - computed: false, optional: true, required: false
  private _bgwriterFlushAfter?: number; 
  public get bgwriterFlushAfter() {
    return this.getNumberAttribute('bgwriter_flush_after');
  }
  public set bgwriterFlushAfter(value: number) {
    this._bgwriterFlushAfter = value;
  }
  public resetBgwriterFlushAfter() {
    this._bgwriterFlushAfter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterFlushAfterInput() {
    return this._bgwriterFlushAfter;
  }

  // bgwriter_lru_maxpages - computed: false, optional: true, required: false
  private _bgwriterLruMaxpages?: number; 
  public get bgwriterLruMaxpages() {
    return this.getNumberAttribute('bgwriter_lru_maxpages');
  }
  public set bgwriterLruMaxpages(value: number) {
    this._bgwriterLruMaxpages = value;
  }
  public resetBgwriterLruMaxpages() {
    this._bgwriterLruMaxpages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMaxpagesInput() {
    return this._bgwriterLruMaxpages;
  }

  // bgwriter_lru_multiplier - computed: false, optional: true, required: false
  private _bgwriterLruMultiplier?: number; 
  public get bgwriterLruMultiplier() {
    return this.getNumberAttribute('bgwriter_lru_multiplier');
  }
  public set bgwriterLruMultiplier(value: number) {
    this._bgwriterLruMultiplier = value;
  }
  public resetBgwriterLruMultiplier() {
    this._bgwriterLruMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgwriterLruMultiplierInput() {
    return this._bgwriterLruMultiplier;
  }

  // deadlock_timeout - computed: false, optional: true, required: false
  private _deadlockTimeout?: number; 
  public get deadlockTimeout() {
    return this.getNumberAttribute('deadlock_timeout');
  }
  public set deadlockTimeout(value: number) {
    this._deadlockTimeout = value;
  }
  public resetDeadlockTimeout() {
    this._deadlockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadlockTimeoutInput() {
    return this._deadlockTimeout;
  }

  // default_toast_compression - computed: false, optional: true, required: false
  private _defaultToastCompression?: string; 
  public get defaultToastCompression() {
    return this.getStringAttribute('default_toast_compression');
  }
  public set defaultToastCompression(value: string) {
    this._defaultToastCompression = value;
  }
  public resetDefaultToastCompression() {
    this._defaultToastCompression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultToastCompressionInput() {
    return this._defaultToastCompression;
  }

  // idle_in_transaction_session_timeout - computed: false, optional: true, required: false
  private _idleInTransactionSessionTimeout?: number; 
  public get idleInTransactionSessionTimeout() {
    return this.getNumberAttribute('idle_in_transaction_session_timeout');
  }
  public set idleInTransactionSessionTimeout(value: number) {
    this._idleInTransactionSessionTimeout = value;
  }
  public resetIdleInTransactionSessionTimeout() {
    this._idleInTransactionSessionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idleInTransactionSessionTimeoutInput() {
    return this._idleInTransactionSessionTimeout;
  }

  // jit - computed: false, optional: true, required: false
  private _jit?: boolean | cdktf.IResolvable; 
  public get jit() {
    return this.getBooleanAttribute('jit');
  }
  public set jit(value: boolean | cdktf.IResolvable) {
    this._jit = value;
  }
  public resetJit() {
    this._jit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jitInput() {
    return this._jit;
  }

  // log_autovacuum_min_duration - computed: false, optional: true, required: false
  private _logAutovacuumMinDuration?: number; 
  public get logAutovacuumMinDuration() {
    return this.getNumberAttribute('log_autovacuum_min_duration');
  }
  public set logAutovacuumMinDuration(value: number) {
    this._logAutovacuumMinDuration = value;
  }
  public resetLogAutovacuumMinDuration() {
    this._logAutovacuumMinDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAutovacuumMinDurationInput() {
    return this._logAutovacuumMinDuration;
  }

  // log_error_verbosity - computed: false, optional: true, required: false
  private _logErrorVerbosity?: string; 
  public get logErrorVerbosity() {
    return this.getStringAttribute('log_error_verbosity');
  }
  public set logErrorVerbosity(value: string) {
    this._logErrorVerbosity = value;
  }
  public resetLogErrorVerbosity() {
    this._logErrorVerbosity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logErrorVerbosityInput() {
    return this._logErrorVerbosity;
  }

  // log_line_prefix - computed: false, optional: true, required: false
  private _logLinePrefix?: string; 
  public get logLinePrefix() {
    return this.getStringAttribute('log_line_prefix');
  }
  public set logLinePrefix(value: string) {
    this._logLinePrefix = value;
  }
  public resetLogLinePrefix() {
    this._logLinePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLinePrefixInput() {
    return this._logLinePrefix;
  }

  // log_min_duration_statement - computed: false, optional: true, required: false
  private _logMinDurationStatement?: number; 
  public get logMinDurationStatement() {
    return this.getNumberAttribute('log_min_duration_statement');
  }
  public set logMinDurationStatement(value: number) {
    this._logMinDurationStatement = value;
  }
  public resetLogMinDurationStatement() {
    this._logMinDurationStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMinDurationStatementInput() {
    return this._logMinDurationStatement;
  }

  // log_temp_files - computed: false, optional: true, required: false
  private _logTempFiles?: number; 
  public get logTempFiles() {
    return this.getNumberAttribute('log_temp_files');
  }
  public set logTempFiles(value: number) {
    this._logTempFiles = value;
  }
  public resetLogTempFiles() {
    this._logTempFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTempFilesInput() {
    return this._logTempFiles;
  }

  // max_connections - computed: false, optional: true, required: false
  private _maxConnections?: number; 
  public get maxConnections() {
    return this.getNumberAttribute('max_connections');
  }
  public set maxConnections(value: number) {
    this._maxConnections = value;
  }
  public resetMaxConnections() {
    this._maxConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConnectionsInput() {
    return this._maxConnections;
  }

  // max_files_per_process - computed: false, optional: true, required: false
  private _maxFilesPerProcess?: number; 
  public get maxFilesPerProcess() {
    return this.getNumberAttribute('max_files_per_process');
  }
  public set maxFilesPerProcess(value: number) {
    this._maxFilesPerProcess = value;
  }
  public resetMaxFilesPerProcess() {
    this._maxFilesPerProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFilesPerProcessInput() {
    return this._maxFilesPerProcess;
  }

  // max_locks_per_transaction - computed: false, optional: true, required: false
  private _maxLocksPerTransaction?: number; 
  public get maxLocksPerTransaction() {
    return this.getNumberAttribute('max_locks_per_transaction');
  }
  public set maxLocksPerTransaction(value: number) {
    this._maxLocksPerTransaction = value;
  }
  public resetMaxLocksPerTransaction() {
    this._maxLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLocksPerTransactionInput() {
    return this._maxLocksPerTransaction;
  }

  // max_logical_replication_workers - computed: false, optional: true, required: false
  private _maxLogicalReplicationWorkers?: number; 
  public get maxLogicalReplicationWorkers() {
    return this.getNumberAttribute('max_logical_replication_workers');
  }
  public set maxLogicalReplicationWorkers(value: number) {
    this._maxLogicalReplicationWorkers = value;
  }
  public resetMaxLogicalReplicationWorkers() {
    this._maxLogicalReplicationWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLogicalReplicationWorkersInput() {
    return this._maxLogicalReplicationWorkers;
  }

  // max_parallel_workers - computed: false, optional: true, required: false
  private _maxParallelWorkers?: number; 
  public get maxParallelWorkers() {
    return this.getNumberAttribute('max_parallel_workers');
  }
  public set maxParallelWorkers(value: number) {
    this._maxParallelWorkers = value;
  }
  public resetMaxParallelWorkers() {
    this._maxParallelWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersInput() {
    return this._maxParallelWorkers;
  }

  // max_parallel_workers_per_gather - computed: false, optional: true, required: false
  private _maxParallelWorkersPerGather?: number; 
  public get maxParallelWorkersPerGather() {
    return this.getNumberAttribute('max_parallel_workers_per_gather');
  }
  public set maxParallelWorkersPerGather(value: number) {
    this._maxParallelWorkersPerGather = value;
  }
  public resetMaxParallelWorkersPerGather() {
    this._maxParallelWorkersPerGather = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxParallelWorkersPerGatherInput() {
    return this._maxParallelWorkersPerGather;
  }

  // max_pred_locks_per_transaction - computed: false, optional: true, required: false
  private _maxPredLocksPerTransaction?: number; 
  public get maxPredLocksPerTransaction() {
    return this.getNumberAttribute('max_pred_locks_per_transaction');
  }
  public set maxPredLocksPerTransaction(value: number) {
    this._maxPredLocksPerTransaction = value;
  }
  public resetMaxPredLocksPerTransaction() {
    this._maxPredLocksPerTransaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPredLocksPerTransactionInput() {
    return this._maxPredLocksPerTransaction;
  }

  // max_prepared_transactions - computed: false, optional: true, required: false
  private _maxPreparedTransactions?: number; 
  public get maxPreparedTransactions() {
    return this.getNumberAttribute('max_prepared_transactions');
  }
  public set maxPreparedTransactions(value: number) {
    this._maxPreparedTransactions = value;
  }
  public resetMaxPreparedTransactions() {
    this._maxPreparedTransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedTransactionsInput() {
    return this._maxPreparedTransactions;
  }

  // max_replication_slots - computed: false, optional: true, required: false
  private _maxReplicationSlots?: number; 
  public get maxReplicationSlots() {
    return this.getNumberAttribute('max_replication_slots');
  }
  public set maxReplicationSlots(value: number) {
    this._maxReplicationSlots = value;
  }
  public resetMaxReplicationSlots() {
    this._maxReplicationSlots = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxReplicationSlotsInput() {
    return this._maxReplicationSlots;
  }

  // max_slot_wal_keep_size - computed: false, optional: true, required: false
  private _maxSlotWalKeepSize?: number; 
  public get maxSlotWalKeepSize() {
    return this.getNumberAttribute('max_slot_wal_keep_size');
  }
  public set maxSlotWalKeepSize(value: number) {
    this._maxSlotWalKeepSize = value;
  }
  public resetMaxSlotWalKeepSize() {
    this._maxSlotWalKeepSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSlotWalKeepSizeInput() {
    return this._maxSlotWalKeepSize;
  }

  // max_stack_depth - computed: false, optional: true, required: false
  private _maxStackDepth?: number; 
  public get maxStackDepth() {
    return this.getNumberAttribute('max_stack_depth');
  }
  public set maxStackDepth(value: number) {
    this._maxStackDepth = value;
  }
  public resetMaxStackDepth() {
    this._maxStackDepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStackDepthInput() {
    return this._maxStackDepth;
  }

  // max_standby_archive_delay - computed: false, optional: true, required: false
  private _maxStandbyArchiveDelay?: number; 
  public get maxStandbyArchiveDelay() {
    return this.getNumberAttribute('max_standby_archive_delay');
  }
  public set maxStandbyArchiveDelay(value: number) {
    this._maxStandbyArchiveDelay = value;
  }
  public resetMaxStandbyArchiveDelay() {
    this._maxStandbyArchiveDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyArchiveDelayInput() {
    return this._maxStandbyArchiveDelay;
  }

  // max_standby_streaming_delay - computed: false, optional: true, required: false
  private _maxStandbyStreamingDelay?: number; 
  public get maxStandbyStreamingDelay() {
    return this.getNumberAttribute('max_standby_streaming_delay');
  }
  public set maxStandbyStreamingDelay(value: number) {
    this._maxStandbyStreamingDelay = value;
  }
  public resetMaxStandbyStreamingDelay() {
    this._maxStandbyStreamingDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStandbyStreamingDelayInput() {
    return this._maxStandbyStreamingDelay;
  }

  // max_sync_workers_per_subscription - computed: false, optional: true, required: false
  private _maxSyncWorkersPerSubscription?: number; 
  public get maxSyncWorkersPerSubscription() {
    return this.getNumberAttribute('max_sync_workers_per_subscription');
  }
  public set maxSyncWorkersPerSubscription(value: number) {
    this._maxSyncWorkersPerSubscription = value;
  }
  public resetMaxSyncWorkersPerSubscription() {
    this._maxSyncWorkersPerSubscription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSyncWorkersPerSubscriptionInput() {
    return this._maxSyncWorkersPerSubscription;
  }

  // max_wal_senders - computed: false, optional: true, required: false
  private _maxWalSenders?: number; 
  public get maxWalSenders() {
    return this.getNumberAttribute('max_wal_senders');
  }
  public set maxWalSenders(value: number) {
    this._maxWalSenders = value;
  }
  public resetMaxWalSenders() {
    this._maxWalSenders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWalSendersInput() {
    return this._maxWalSenders;
  }

  // max_worker_processes - computed: false, optional: true, required: false
  private _maxWorkerProcesses?: number; 
  public get maxWorkerProcesses() {
    return this.getNumberAttribute('max_worker_processes');
  }
  public set maxWorkerProcesses(value: number) {
    this._maxWorkerProcesses = value;
  }
  public resetMaxWorkerProcesses() {
    this._maxWorkerProcesses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerProcessesInput() {
    return this._maxWorkerProcesses;
  }

  // password_encryption - computed: false, optional: true, required: false
  private _passwordEncryption?: string; 
  public get passwordEncryption() {
    return this.getStringAttribute('password_encryption');
  }
  public set passwordEncryption(value: string) {
    this._passwordEncryption = value;
  }
  public resetPasswordEncryption() {
    this._passwordEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncryptionInput() {
    return this._passwordEncryption;
  }

  // pg_partman_bgw__dot__interval - computed: false, optional: true, required: false
  private _pgPartmanBgwDotInterval?: number; 
  public get pgPartmanBgwDotInterval() {
    return this.getNumberAttribute('pg_partman_bgw__dot__interval');
  }
  public set pgPartmanBgwDotInterval(value: number) {
    this._pgPartmanBgwDotInterval = value;
  }
  public resetPgPartmanBgwDotInterval() {
    this._pgPartmanBgwDotInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwDotIntervalInput() {
    return this._pgPartmanBgwDotInterval;
  }

  // pg_partman_bgw__dot__role - computed: false, optional: true, required: false
  private _pgPartmanBgwDotRole?: string; 
  public get pgPartmanBgwDotRole() {
    return this.getStringAttribute('pg_partman_bgw__dot__role');
  }
  public set pgPartmanBgwDotRole(value: string) {
    this._pgPartmanBgwDotRole = value;
  }
  public resetPgPartmanBgwDotRole() {
    this._pgPartmanBgwDotRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgPartmanBgwDotRoleInput() {
    return this._pgPartmanBgwDotRole;
  }

  // pg_stat_monitor__dot__pgsm_enable_query_plan - computed: false, optional: true, required: false
  private _pgStatMonitorDotPgsmEnableQueryPlan?: boolean | cdktf.IResolvable; 
  public get pgStatMonitorDotPgsmEnableQueryPlan() {
    return this.getBooleanAttribute('pg_stat_monitor__dot__pgsm_enable_query_plan');
  }
  public set pgStatMonitorDotPgsmEnableQueryPlan(value: boolean | cdktf.IResolvable) {
    this._pgStatMonitorDotPgsmEnableQueryPlan = value;
  }
  public resetPgStatMonitorDotPgsmEnableQueryPlan() {
    this._pgStatMonitorDotPgsmEnableQueryPlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatMonitorDotPgsmEnableQueryPlanInput() {
    return this._pgStatMonitorDotPgsmEnableQueryPlan;
  }

  // pg_stat_monitor__dot__pgsm_max_buckets - computed: false, optional: true, required: false
  private _pgStatMonitorDotPgsmMaxBuckets?: number; 
  public get pgStatMonitorDotPgsmMaxBuckets() {
    return this.getNumberAttribute('pg_stat_monitor__dot__pgsm_max_buckets');
  }
  public set pgStatMonitorDotPgsmMaxBuckets(value: number) {
    this._pgStatMonitorDotPgsmMaxBuckets = value;
  }
  public resetPgStatMonitorDotPgsmMaxBuckets() {
    this._pgStatMonitorDotPgsmMaxBuckets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatMonitorDotPgsmMaxBucketsInput() {
    return this._pgStatMonitorDotPgsmMaxBuckets;
  }

  // pg_stat_statements__dot__track - computed: false, optional: true, required: false
  private _pgStatStatementsDotTrack?: string; 
  public get pgStatStatementsDotTrack() {
    return this.getStringAttribute('pg_stat_statements__dot__track');
  }
  public set pgStatStatementsDotTrack(value: string) {
    this._pgStatStatementsDotTrack = value;
  }
  public resetPgStatStatementsDotTrack() {
    this._pgStatStatementsDotTrack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatStatementsDotTrackInput() {
    return this._pgStatStatementsDotTrack;
  }

  // temp_file_limit - computed: false, optional: true, required: false
  private _tempFileLimit?: number; 
  public get tempFileLimit() {
    return this.getNumberAttribute('temp_file_limit');
  }
  public set tempFileLimit(value: number) {
    this._tempFileLimit = value;
  }
  public resetTempFileLimit() {
    this._tempFileLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tempFileLimitInput() {
    return this._tempFileLimit;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // track_activity_query_size - computed: false, optional: true, required: false
  private _trackActivityQuerySize?: number; 
  public get trackActivityQuerySize() {
    return this.getNumberAttribute('track_activity_query_size');
  }
  public set trackActivityQuerySize(value: number) {
    this._trackActivityQuerySize = value;
  }
  public resetTrackActivityQuerySize() {
    this._trackActivityQuerySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackActivityQuerySizeInput() {
    return this._trackActivityQuerySize;
  }

  // track_commit_timestamp - computed: false, optional: true, required: false
  private _trackCommitTimestamp?: string; 
  public get trackCommitTimestamp() {
    return this.getStringAttribute('track_commit_timestamp');
  }
  public set trackCommitTimestamp(value: string) {
    this._trackCommitTimestamp = value;
  }
  public resetTrackCommitTimestamp() {
    this._trackCommitTimestamp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackCommitTimestampInput() {
    return this._trackCommitTimestamp;
  }

  // track_functions - computed: false, optional: true, required: false
  private _trackFunctions?: string; 
  public get trackFunctions() {
    return this.getStringAttribute('track_functions');
  }
  public set trackFunctions(value: string) {
    this._trackFunctions = value;
  }
  public resetTrackFunctions() {
    this._trackFunctions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackFunctionsInput() {
    return this._trackFunctions;
  }

  // track_io_timing - computed: false, optional: true, required: false
  private _trackIoTiming?: string; 
  public get trackIoTiming() {
    return this.getStringAttribute('track_io_timing');
  }
  public set trackIoTiming(value: string) {
    this._trackIoTiming = value;
  }
  public resetTrackIoTiming() {
    this._trackIoTiming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackIoTimingInput() {
    return this._trackIoTiming;
  }

  // wal_sender_timeout - computed: false, optional: true, required: false
  private _walSenderTimeout?: number; 
  public get walSenderTimeout() {
    return this.getNumberAttribute('wal_sender_timeout');
  }
  public set walSenderTimeout(value: number) {
    this._walSenderTimeout = value;
  }
  public resetWalSenderTimeout() {
    this._walSenderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walSenderTimeoutInput() {
    return this._walSenderTimeout;
  }

  // wal_writer_delay - computed: false, optional: true, required: false
  private _walWriterDelay?: number; 
  public get walWriterDelay() {
    return this.getNumberAttribute('wal_writer_delay');
  }
  public set walWriterDelay(value: number) {
    this._walWriterDelay = value;
  }
  public resetWalWriterDelay() {
    this._walWriterDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get walWriterDelayInput() {
    return this._walWriterDelay;
  }
}
export interface PgPgUserConfigPgQualstats {
  /**
  * Enable / Disable pg_qualstats. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#enabled Pg#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Error estimation num threshold to save quals. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#min_err_estimate_num Pg#min_err_estimate_num}
  */
  readonly minErrEstimateNum?: number;
  /**
  * Error estimation ratio threshold to save quals. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#min_err_estimate_ratio Pg#min_err_estimate_ratio}
  */
  readonly minErrEstimateRatio?: number;
  /**
  * Enable / Disable pg_qualstats constants tracking. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#track_constants Pg#track_constants}
  */
  readonly trackConstants?: boolean | cdktf.IResolvable;
  /**
  * Track quals on system catalogs too. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#track_pg_catalog Pg#track_pg_catalog}
  */
  readonly trackPgCatalog?: boolean | cdktf.IResolvable;
}

export function pgPgUserConfigPgQualstatsToTerraform(struct?: PgPgUserConfigPgQualstatsOutputReference | PgPgUserConfigPgQualstats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    min_err_estimate_num: cdktf.numberToTerraform(struct!.minErrEstimateNum),
    min_err_estimate_ratio: cdktf.numberToTerraform(struct!.minErrEstimateRatio),
    track_constants: cdktf.booleanToTerraform(struct!.trackConstants),
    track_pg_catalog: cdktf.booleanToTerraform(struct!.trackPgCatalog),
  }
}


export function pgPgUserConfigPgQualstatsToHclTerraform(struct?: PgPgUserConfigPgQualstatsOutputReference | PgPgUserConfigPgQualstats): any {
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
    min_err_estimate_num: {
      value: cdktf.numberToHclTerraform(struct!.minErrEstimateNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_err_estimate_ratio: {
      value: cdktf.numberToHclTerraform(struct!.minErrEstimateRatio),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    track_constants: {
      value: cdktf.booleanToHclTerraform(struct!.trackConstants),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    track_pg_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.trackPgCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigPgQualstatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPgQualstats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._minErrEstimateNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.minErrEstimateNum = this._minErrEstimateNum;
    }
    if (this._minErrEstimateRatio !== undefined) {
      hasAnyValues = true;
      internalValueResult.minErrEstimateRatio = this._minErrEstimateRatio;
    }
    if (this._trackConstants !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackConstants = this._trackConstants;
    }
    if (this._trackPgCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackPgCatalog = this._trackPgCatalog;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPgQualstats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._minErrEstimateNum = undefined;
      this._minErrEstimateRatio = undefined;
      this._trackConstants = undefined;
      this._trackPgCatalog = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._minErrEstimateNum = value.minErrEstimateNum;
      this._minErrEstimateRatio = value.minErrEstimateRatio;
      this._trackConstants = value.trackConstants;
      this._trackPgCatalog = value.trackPgCatalog;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // min_err_estimate_num - computed: false, optional: true, required: false
  private _minErrEstimateNum?: number; 
  public get minErrEstimateNum() {
    return this.getNumberAttribute('min_err_estimate_num');
  }
  public set minErrEstimateNum(value: number) {
    this._minErrEstimateNum = value;
  }
  public resetMinErrEstimateNum() {
    this._minErrEstimateNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minErrEstimateNumInput() {
    return this._minErrEstimateNum;
  }

  // min_err_estimate_ratio - computed: false, optional: true, required: false
  private _minErrEstimateRatio?: number; 
  public get minErrEstimateRatio() {
    return this.getNumberAttribute('min_err_estimate_ratio');
  }
  public set minErrEstimateRatio(value: number) {
    this._minErrEstimateRatio = value;
  }
  public resetMinErrEstimateRatio() {
    this._minErrEstimateRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minErrEstimateRatioInput() {
    return this._minErrEstimateRatio;
  }

  // track_constants - computed: false, optional: true, required: false
  private _trackConstants?: boolean | cdktf.IResolvable; 
  public get trackConstants() {
    return this.getBooleanAttribute('track_constants');
  }
  public set trackConstants(value: boolean | cdktf.IResolvable) {
    this._trackConstants = value;
  }
  public resetTrackConstants() {
    this._trackConstants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackConstantsInput() {
    return this._trackConstants;
  }

  // track_pg_catalog - computed: false, optional: true, required: false
  private _trackPgCatalog?: boolean | cdktf.IResolvable; 
  public get trackPgCatalog() {
    return this.getBooleanAttribute('track_pg_catalog');
  }
  public set trackPgCatalog(value: boolean | cdktf.IResolvable) {
    this._trackPgCatalog = value;
  }
  public resetTrackPgCatalog() {
    this._trackPgCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackPgCatalogInput() {
    return this._trackPgCatalog;
  }
}
export interface PgPgUserConfigPgaudit {
  /**
  * Enable pgaudit extension. When enabled, pgaudit extension will be automatically installed.Otherwise, extension will be uninstalled but auditing configurations will be preserved. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#feature_enabled Pg#feature_enabled}
  */
  readonly featureEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies which classes of statements will be logged by session audit logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log Pg#log}
  */
  readonly log?: string[];
  /**
  * Specifies that session logging should be enabled in the case where all relations in a statement are in pg_catalog. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_catalog Pg#log_catalog}
  */
  readonly logCatalog?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether log messages will be visible to a client process such as psql. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_client Pg#log_client}
  */
  readonly logClient?: boolean | cdktf.IResolvable;
  /**
  * Enum: `debug1`, `debug2`, `debug3`, `debug4`, `debug5`, `info`, `log`, `notice`, `warning`. Specifies the log level that will be used for log entries. Default: `log`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_level Pg#log_level}
  */
  readonly logLevel?: string;
  /**
  * Crop parameters representation and whole statements if they exceed this threshold. A (default) value of -1 disable the truncation. Default: `-1`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_max_string_length Pg#log_max_string_length}
  */
  readonly logMaxStringLength?: number;
  /**
  * This GUC allows to turn off logging nested statements, that is, statements that are executed as part of another ExecutorRun. Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_nested_statements Pg#log_nested_statements}
  */
  readonly logNestedStatements?: boolean | cdktf.IResolvable;
  /**
  * Specifies that audit logging should include the parameters that were passed with the statement. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_parameter Pg#log_parameter}
  */
  readonly logParameter?: boolean | cdktf.IResolvable;
  /**
  * Specifies that parameter values longer than this setting (in bytes) should not be logged, but replaced with <long param suppressed>. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_parameter_max_size Pg#log_parameter_max_size}
  */
  readonly logParameterMaxSize?: number;
  /**
  * Specifies whether session audit logging should create a separate log entry for each relation (TABLE, VIEW, etc.) referenced in a SELECT or DML statement. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_relation Pg#log_relation}
  */
  readonly logRelation?: boolean | cdktf.IResolvable;
  /**
  * Log Rows. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_rows Pg#log_rows}
  */
  readonly logRows?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether logging will include the statement text and parameters (if enabled). Default: `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_statement Pg#log_statement}
  */
  readonly logStatement?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether logging will include the statement text and parameters with the first log entry for a statement/substatement combination or with every entry. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#log_statement_once Pg#log_statement_once}
  */
  readonly logStatementOnce?: boolean | cdktf.IResolvable;
  /**
  * Specifies the master role to use for object audit logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#role Pg#role}
  */
  readonly role?: string;
}

export function pgPgUserConfigPgauditToTerraform(struct?: PgPgUserConfigPgauditOutputReference | PgPgUserConfigPgaudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feature_enabled: cdktf.booleanToTerraform(struct!.featureEnabled),
    log: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.log),
    log_catalog: cdktf.booleanToTerraform(struct!.logCatalog),
    log_client: cdktf.booleanToTerraform(struct!.logClient),
    log_level: cdktf.stringToTerraform(struct!.logLevel),
    log_max_string_length: cdktf.numberToTerraform(struct!.logMaxStringLength),
    log_nested_statements: cdktf.booleanToTerraform(struct!.logNestedStatements),
    log_parameter: cdktf.booleanToTerraform(struct!.logParameter),
    log_parameter_max_size: cdktf.numberToTerraform(struct!.logParameterMaxSize),
    log_relation: cdktf.booleanToTerraform(struct!.logRelation),
    log_rows: cdktf.booleanToTerraform(struct!.logRows),
    log_statement: cdktf.booleanToTerraform(struct!.logStatement),
    log_statement_once: cdktf.booleanToTerraform(struct!.logStatementOnce),
    role: cdktf.stringToTerraform(struct!.role),
  }
}


export function pgPgUserConfigPgauditToHclTerraform(struct?: PgPgUserConfigPgauditOutputReference | PgPgUserConfigPgaudit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feature_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.featureEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.log),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    log_catalog: {
      value: cdktf.booleanToHclTerraform(struct!.logCatalog),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_client: {
      value: cdktf.booleanToHclTerraform(struct!.logClient),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_level: {
      value: cdktf.stringToHclTerraform(struct!.logLevel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_max_string_length: {
      value: cdktf.numberToHclTerraform(struct!.logMaxStringLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_nested_statements: {
      value: cdktf.booleanToHclTerraform(struct!.logNestedStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_parameter: {
      value: cdktf.booleanToHclTerraform(struct!.logParameter),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_parameter_max_size: {
      value: cdktf.numberToHclTerraform(struct!.logParameterMaxSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    log_relation: {
      value: cdktf.booleanToHclTerraform(struct!.logRelation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_rows: {
      value: cdktf.booleanToHclTerraform(struct!.logRows),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_statement: {
      value: cdktf.booleanToHclTerraform(struct!.logStatement),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log_statement_once: {
      value: cdktf.booleanToHclTerraform(struct!.logStatementOnce),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    role: {
      value: cdktf.stringToHclTerraform(struct!.role),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigPgauditOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPgaudit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._featureEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.featureEnabled = this._featureEnabled;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._logCatalog !== undefined) {
      hasAnyValues = true;
      internalValueResult.logCatalog = this._logCatalog;
    }
    if (this._logClient !== undefined) {
      hasAnyValues = true;
      internalValueResult.logClient = this._logClient;
    }
    if (this._logLevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.logLevel = this._logLevel;
    }
    if (this._logMaxStringLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMaxStringLength = this._logMaxStringLength;
    }
    if (this._logNestedStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.logNestedStatements = this._logNestedStatements;
    }
    if (this._logParameter !== undefined) {
      hasAnyValues = true;
      internalValueResult.logParameter = this._logParameter;
    }
    if (this._logParameterMaxSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.logParameterMaxSize = this._logParameterMaxSize;
    }
    if (this._logRelation !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRelation = this._logRelation;
    }
    if (this._logRows !== undefined) {
      hasAnyValues = true;
      internalValueResult.logRows = this._logRows;
    }
    if (this._logStatement !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatement = this._logStatement;
    }
    if (this._logStatementOnce !== undefined) {
      hasAnyValues = true;
      internalValueResult.logStatementOnce = this._logStatementOnce;
    }
    if (this._role !== undefined) {
      hasAnyValues = true;
      internalValueResult.role = this._role;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPgaudit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._featureEnabled = undefined;
      this._log = undefined;
      this._logCatalog = undefined;
      this._logClient = undefined;
      this._logLevel = undefined;
      this._logMaxStringLength = undefined;
      this._logNestedStatements = undefined;
      this._logParameter = undefined;
      this._logParameterMaxSize = undefined;
      this._logRelation = undefined;
      this._logRows = undefined;
      this._logStatement = undefined;
      this._logStatementOnce = undefined;
      this._role = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._featureEnabled = value.featureEnabled;
      this._log = value.log;
      this._logCatalog = value.logCatalog;
      this._logClient = value.logClient;
      this._logLevel = value.logLevel;
      this._logMaxStringLength = value.logMaxStringLength;
      this._logNestedStatements = value.logNestedStatements;
      this._logParameter = value.logParameter;
      this._logParameterMaxSize = value.logParameterMaxSize;
      this._logRelation = value.logRelation;
      this._logRows = value.logRows;
      this._logStatement = value.logStatement;
      this._logStatementOnce = value.logStatementOnce;
      this._role = value.role;
    }
  }

  // feature_enabled - computed: false, optional: true, required: false
  private _featureEnabled?: boolean | cdktf.IResolvable; 
  public get featureEnabled() {
    return this.getBooleanAttribute('feature_enabled');
  }
  public set featureEnabled(value: boolean | cdktf.IResolvable) {
    this._featureEnabled = value;
  }
  public resetFeatureEnabled() {
    this._featureEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureEnabledInput() {
    return this._featureEnabled;
  }

  // log - computed: false, optional: true, required: false
  private _log?: string[]; 
  public get log() {
    return this.getListAttribute('log');
  }
  public set log(value: string[]) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // log_catalog - computed: false, optional: true, required: false
  private _logCatalog?: boolean | cdktf.IResolvable; 
  public get logCatalog() {
    return this.getBooleanAttribute('log_catalog');
  }
  public set logCatalog(value: boolean | cdktf.IResolvable) {
    this._logCatalog = value;
  }
  public resetLogCatalog() {
    this._logCatalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logCatalogInput() {
    return this._logCatalog;
  }

  // log_client - computed: false, optional: true, required: false
  private _logClient?: boolean | cdktf.IResolvable; 
  public get logClient() {
    return this.getBooleanAttribute('log_client');
  }
  public set logClient(value: boolean | cdktf.IResolvable) {
    this._logClient = value;
  }
  public resetLogClient() {
    this._logClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logClientInput() {
    return this._logClient;
  }

  // log_level - computed: false, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // log_max_string_length - computed: false, optional: true, required: false
  private _logMaxStringLength?: number; 
  public get logMaxStringLength() {
    return this.getNumberAttribute('log_max_string_length');
  }
  public set logMaxStringLength(value: number) {
    this._logMaxStringLength = value;
  }
  public resetLogMaxStringLength() {
    this._logMaxStringLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logMaxStringLengthInput() {
    return this._logMaxStringLength;
  }

  // log_nested_statements - computed: false, optional: true, required: false
  private _logNestedStatements?: boolean | cdktf.IResolvable; 
  public get logNestedStatements() {
    return this.getBooleanAttribute('log_nested_statements');
  }
  public set logNestedStatements(value: boolean | cdktf.IResolvable) {
    this._logNestedStatements = value;
  }
  public resetLogNestedStatements() {
    this._logNestedStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logNestedStatementsInput() {
    return this._logNestedStatements;
  }

  // log_parameter - computed: false, optional: true, required: false
  private _logParameter?: boolean | cdktf.IResolvable; 
  public get logParameter() {
    return this.getBooleanAttribute('log_parameter');
  }
  public set logParameter(value: boolean | cdktf.IResolvable) {
    this._logParameter = value;
  }
  public resetLogParameter() {
    this._logParameter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logParameterInput() {
    return this._logParameter;
  }

  // log_parameter_max_size - computed: false, optional: true, required: false
  private _logParameterMaxSize?: number; 
  public get logParameterMaxSize() {
    return this.getNumberAttribute('log_parameter_max_size');
  }
  public set logParameterMaxSize(value: number) {
    this._logParameterMaxSize = value;
  }
  public resetLogParameterMaxSize() {
    this._logParameterMaxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logParameterMaxSizeInput() {
    return this._logParameterMaxSize;
  }

  // log_relation - computed: false, optional: true, required: false
  private _logRelation?: boolean | cdktf.IResolvable; 
  public get logRelation() {
    return this.getBooleanAttribute('log_relation');
  }
  public set logRelation(value: boolean | cdktf.IResolvable) {
    this._logRelation = value;
  }
  public resetLogRelation() {
    this._logRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRelationInput() {
    return this._logRelation;
  }

  // log_rows - computed: false, optional: true, required: false
  private _logRows?: boolean | cdktf.IResolvable; 
  public get logRows() {
    return this.getBooleanAttribute('log_rows');
  }
  public set logRows(value: boolean | cdktf.IResolvable) {
    this._logRows = value;
  }
  public resetLogRows() {
    this._logRows = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logRowsInput() {
    return this._logRows;
  }

  // log_statement - computed: false, optional: true, required: false
  private _logStatement?: boolean | cdktf.IResolvable; 
  public get logStatement() {
    return this.getBooleanAttribute('log_statement');
  }
  public set logStatement(value: boolean | cdktf.IResolvable) {
    this._logStatement = value;
  }
  public resetLogStatement() {
    this._logStatement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatementInput() {
    return this._logStatement;
  }

  // log_statement_once - computed: false, optional: true, required: false
  private _logStatementOnce?: boolean | cdktf.IResolvable; 
  public get logStatementOnce() {
    return this.getBooleanAttribute('log_statement_once');
  }
  public set logStatementOnce(value: boolean | cdktf.IResolvable) {
    this._logStatementOnce = value;
  }
  public resetLogStatementOnce() {
    this._logStatementOnce = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStatementOnceInput() {
    return this._logStatementOnce;
  }

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }
}
export interface PgPgUserConfigPgbouncer {
  /**
  * If the automatically created database pools have been unused this many seconds, they are freed. If 0 then timeout is disabled. (seconds). Default: `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autodb_idle_timeout Pg#autodb_idle_timeout}
  */
  readonly autodbIdleTimeout?: number;
  /**
  * Do not allow more than this many server connections per database (regardless of user). Setting it to 0 means unlimited. Example: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autodb_max_db_connections Pg#autodb_max_db_connections}
  */
  readonly autodbMaxDbConnections?: number;
  /**
  * Enum: `session`, `statement`, `transaction`. PGBouncer pool mode. Default: `transaction`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autodb_pool_mode Pg#autodb_pool_mode}
  */
  readonly autodbPoolMode?: string;
  /**
  * If non-zero then create automatically a pool of that size per user when a pool doesn't exist. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#autodb_pool_size Pg#autodb_pool_size}
  */
  readonly autodbPoolSize?: number;
  /**
  * List of parameters to ignore when given in startup packet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ignore_startup_parameters Pg#ignore_startup_parameters}
  */
  readonly ignoreStartupParameters?: string[];
  /**
  * PgBouncer tracks protocol-level named prepared statements related commands sent by the client in transaction and statement pooling modes when max_prepared_statements is set to a non-zero value. Setting it to 0 disables prepared statements. max_prepared_statements defaults to 100, and its maximum is 3000. Default: `100`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_prepared_statements Pg#max_prepared_statements}
  */
  readonly maxPreparedStatements?: number;
  /**
  * Add more server connections to pool if below this number. Improves behavior when usual load comes suddenly back after period of total inactivity. The value is effectively capped at the pool size. Default: `0`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#min_pool_size Pg#min_pool_size}
  */
  readonly minPoolSize?: number;
  /**
  * If a server connection has been idle more than this many seconds it will be dropped. If 0 then timeout is disabled. (seconds). Default: `600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#server_idle_timeout Pg#server_idle_timeout}
  */
  readonly serverIdleTimeout?: number;
  /**
  * The pooler will close an unused server connection that has been connected longer than this. (seconds). Default: `3600`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#server_lifetime Pg#server_lifetime}
  */
  readonly serverLifetime?: number;
  /**
  * Run server_reset_query (DISCARD ALL) in all pooling modes. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#server_reset_query_always Pg#server_reset_query_always}
  */
  readonly serverResetQueryAlways?: boolean | cdktf.IResolvable;
}

export function pgPgUserConfigPgbouncerToTerraform(struct?: PgPgUserConfigPgbouncerOutputReference | PgPgUserConfigPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autodb_idle_timeout: cdktf.numberToTerraform(struct!.autodbIdleTimeout),
    autodb_max_db_connections: cdktf.numberToTerraform(struct!.autodbMaxDbConnections),
    autodb_pool_mode: cdktf.stringToTerraform(struct!.autodbPoolMode),
    autodb_pool_size: cdktf.numberToTerraform(struct!.autodbPoolSize),
    ignore_startup_parameters: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ignoreStartupParameters),
    max_prepared_statements: cdktf.numberToTerraform(struct!.maxPreparedStatements),
    min_pool_size: cdktf.numberToTerraform(struct!.minPoolSize),
    server_idle_timeout: cdktf.numberToTerraform(struct!.serverIdleTimeout),
    server_lifetime: cdktf.numberToTerraform(struct!.serverLifetime),
    server_reset_query_always: cdktf.booleanToTerraform(struct!.serverResetQueryAlways),
  }
}


export function pgPgUserConfigPgbouncerToHclTerraform(struct?: PgPgUserConfigPgbouncerOutputReference | PgPgUserConfigPgbouncer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autodb_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.autodbIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autodb_max_db_connections: {
      value: cdktf.numberToHclTerraform(struct!.autodbMaxDbConnections),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    autodb_pool_mode: {
      value: cdktf.stringToHclTerraform(struct!.autodbPoolMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    autodb_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.autodbPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ignore_startup_parameters: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ignoreStartupParameters),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_prepared_statements: {
      value: cdktf.numberToHclTerraform(struct!.maxPreparedStatements),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_pool_size: {
      value: cdktf.numberToHclTerraform(struct!.minPoolSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_idle_timeout: {
      value: cdktf.numberToHclTerraform(struct!.serverIdleTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_lifetime: {
      value: cdktf.numberToHclTerraform(struct!.serverLifetime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_reset_query_always: {
      value: cdktf.booleanToHclTerraform(struct!.serverResetQueryAlways),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigPgbouncerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPgbouncer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autodbIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbIdleTimeout = this._autodbIdleTimeout;
    }
    if (this._autodbMaxDbConnections !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbMaxDbConnections = this._autodbMaxDbConnections;
    }
    if (this._autodbPoolMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolMode = this._autodbPoolMode;
    }
    if (this._autodbPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.autodbPoolSize = this._autodbPoolSize;
    }
    if (this._ignoreStartupParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreStartupParameters = this._ignoreStartupParameters;
    }
    if (this._maxPreparedStatements !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPreparedStatements = this._maxPreparedStatements;
    }
    if (this._minPoolSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPoolSize = this._minPoolSize;
    }
    if (this._serverIdleTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverIdleTimeout = this._serverIdleTimeout;
    }
    if (this._serverLifetime !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverLifetime = this._serverLifetime;
    }
    if (this._serverResetQueryAlways !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverResetQueryAlways = this._serverResetQueryAlways;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPgbouncer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._autodbIdleTimeout = undefined;
      this._autodbMaxDbConnections = undefined;
      this._autodbPoolMode = undefined;
      this._autodbPoolSize = undefined;
      this._ignoreStartupParameters = undefined;
      this._maxPreparedStatements = undefined;
      this._minPoolSize = undefined;
      this._serverIdleTimeout = undefined;
      this._serverLifetime = undefined;
      this._serverResetQueryAlways = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._autodbIdleTimeout = value.autodbIdleTimeout;
      this._autodbMaxDbConnections = value.autodbMaxDbConnections;
      this._autodbPoolMode = value.autodbPoolMode;
      this._autodbPoolSize = value.autodbPoolSize;
      this._ignoreStartupParameters = value.ignoreStartupParameters;
      this._maxPreparedStatements = value.maxPreparedStatements;
      this._minPoolSize = value.minPoolSize;
      this._serverIdleTimeout = value.serverIdleTimeout;
      this._serverLifetime = value.serverLifetime;
      this._serverResetQueryAlways = value.serverResetQueryAlways;
    }
  }

  // autodb_idle_timeout - computed: false, optional: true, required: false
  private _autodbIdleTimeout?: number; 
  public get autodbIdleTimeout() {
    return this.getNumberAttribute('autodb_idle_timeout');
  }
  public set autodbIdleTimeout(value: number) {
    this._autodbIdleTimeout = value;
  }
  public resetAutodbIdleTimeout() {
    this._autodbIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbIdleTimeoutInput() {
    return this._autodbIdleTimeout;
  }

  // autodb_max_db_connections - computed: false, optional: true, required: false
  private _autodbMaxDbConnections?: number; 
  public get autodbMaxDbConnections() {
    return this.getNumberAttribute('autodb_max_db_connections');
  }
  public set autodbMaxDbConnections(value: number) {
    this._autodbMaxDbConnections = value;
  }
  public resetAutodbMaxDbConnections() {
    this._autodbMaxDbConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbMaxDbConnectionsInput() {
    return this._autodbMaxDbConnections;
  }

  // autodb_pool_mode - computed: false, optional: true, required: false
  private _autodbPoolMode?: string; 
  public get autodbPoolMode() {
    return this.getStringAttribute('autodb_pool_mode');
  }
  public set autodbPoolMode(value: string) {
    this._autodbPoolMode = value;
  }
  public resetAutodbPoolMode() {
    this._autodbPoolMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolModeInput() {
    return this._autodbPoolMode;
  }

  // autodb_pool_size - computed: false, optional: true, required: false
  private _autodbPoolSize?: number; 
  public get autodbPoolSize() {
    return this.getNumberAttribute('autodb_pool_size');
  }
  public set autodbPoolSize(value: number) {
    this._autodbPoolSize = value;
  }
  public resetAutodbPoolSize() {
    this._autodbPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autodbPoolSizeInput() {
    return this._autodbPoolSize;
  }

  // ignore_startup_parameters - computed: false, optional: true, required: false
  private _ignoreStartupParameters?: string[]; 
  public get ignoreStartupParameters() {
    return this.getListAttribute('ignore_startup_parameters');
  }
  public set ignoreStartupParameters(value: string[]) {
    this._ignoreStartupParameters = value;
  }
  public resetIgnoreStartupParameters() {
    this._ignoreStartupParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreStartupParametersInput() {
    return this._ignoreStartupParameters;
  }

  // max_prepared_statements - computed: false, optional: true, required: false
  private _maxPreparedStatements?: number; 
  public get maxPreparedStatements() {
    return this.getNumberAttribute('max_prepared_statements');
  }
  public set maxPreparedStatements(value: number) {
    this._maxPreparedStatements = value;
  }
  public resetMaxPreparedStatements() {
    this._maxPreparedStatements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPreparedStatementsInput() {
    return this._maxPreparedStatements;
  }

  // min_pool_size - computed: false, optional: true, required: false
  private _minPoolSize?: number; 
  public get minPoolSize() {
    return this.getNumberAttribute('min_pool_size');
  }
  public set minPoolSize(value: number) {
    this._minPoolSize = value;
  }
  public resetMinPoolSize() {
    this._minPoolSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPoolSizeInput() {
    return this._minPoolSize;
  }

  // server_idle_timeout - computed: false, optional: true, required: false
  private _serverIdleTimeout?: number; 
  public get serverIdleTimeout() {
    return this.getNumberAttribute('server_idle_timeout');
  }
  public set serverIdleTimeout(value: number) {
    this._serverIdleTimeout = value;
  }
  public resetServerIdleTimeout() {
    this._serverIdleTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverIdleTimeoutInput() {
    return this._serverIdleTimeout;
  }

  // server_lifetime - computed: false, optional: true, required: false
  private _serverLifetime?: number; 
  public get serverLifetime() {
    return this.getNumberAttribute('server_lifetime');
  }
  public set serverLifetime(value: number) {
    this._serverLifetime = value;
  }
  public resetServerLifetime() {
    this._serverLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverLifetimeInput() {
    return this._serverLifetime;
  }

  // server_reset_query_always - computed: false, optional: true, required: false
  private _serverResetQueryAlways?: boolean | cdktf.IResolvable; 
  public get serverResetQueryAlways() {
    return this.getBooleanAttribute('server_reset_query_always');
  }
  public set serverResetQueryAlways(value: boolean | cdktf.IResolvable) {
    this._serverResetQueryAlways = value;
  }
  public resetServerResetQueryAlways() {
    this._serverResetQueryAlways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverResetQueryAlwaysInput() {
    return this._serverResetQueryAlways;
  }
}
export interface PgPgUserConfigPglookout {
  /**
  * Number of seconds of master unavailability before triggering database failover to standby. Default: `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_failover_replication_time_lag Pg#max_failover_replication_time_lag}
  */
  readonly maxFailoverReplicationTimeLag?: number;
}

export function pgPgUserConfigPglookoutToTerraform(struct?: PgPgUserConfigPglookoutOutputReference | PgPgUserConfigPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_failover_replication_time_lag: cdktf.numberToTerraform(struct!.maxFailoverReplicationTimeLag),
  }
}


export function pgPgUserConfigPglookoutToHclTerraform(struct?: PgPgUserConfigPglookoutOutputReference | PgPgUserConfigPglookout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_failover_replication_time_lag: {
      value: cdktf.numberToHclTerraform(struct!.maxFailoverReplicationTimeLag),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigPglookoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPglookout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxFailoverReplicationTimeLag !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxFailoverReplicationTimeLag = this._maxFailoverReplicationTimeLag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPglookout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxFailoverReplicationTimeLag = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxFailoverReplicationTimeLag = value.maxFailoverReplicationTimeLag;
    }
  }

  // max_failover_replication_time_lag - computed: false, optional: true, required: false
  private _maxFailoverReplicationTimeLag?: number; 
  public get maxFailoverReplicationTimeLag() {
    return this.getNumberAttribute('max_failover_replication_time_lag');
  }
  public set maxFailoverReplicationTimeLag(value: number) {
    this._maxFailoverReplicationTimeLag = value;
  }
  public resetMaxFailoverReplicationTimeLag() {
    this._maxFailoverReplicationTimeLag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxFailoverReplicationTimeLagInput() {
    return this._maxFailoverReplicationTimeLag;
  }
}
export interface PgPgUserConfigPrivateAccess {
  /**
  * Allow clients to connect to pg with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg Pg#pg}
  */
  readonly pg?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to pgbouncer with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pgbouncer Pg#pgbouncer}
  */
  readonly pgbouncer?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#prometheus Pg#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function pgPgUserConfigPrivateAccessToTerraform(struct?: PgPgUserConfigPrivateAccessOutputReference | PgPgUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg: cdktf.booleanToTerraform(struct!.pg),
    pgbouncer: cdktf.booleanToTerraform(struct!.pgbouncer),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function pgPgUserConfigPrivateAccessToHclTerraform(struct?: PgPgUserConfigPrivateAccessOutputReference | PgPgUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg: {
      value: cdktf.booleanToHclTerraform(struct!.pg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pgbouncer: {
      value: cdktf.booleanToHclTerraform(struct!.pgbouncer),
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

export class PgPgUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pg = this._pg;
    }
    if (this._pgbouncer !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncer = this._pgbouncer;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pg = undefined;
      this._pgbouncer = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pg = value.pg;
      this._pgbouncer = value.pgbouncer;
      this._prometheus = value.prometheus;
    }
  }

  // pg - computed: false, optional: true, required: false
  private _pg?: boolean | cdktf.IResolvable; 
  public get pg() {
    return this.getBooleanAttribute('pg');
  }
  public set pg(value: boolean | cdktf.IResolvable) {
    this._pg = value;
  }
  public resetPg() {
    this._pg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgInput() {
    return this._pg;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer?: boolean | cdktf.IResolvable; 
  public get pgbouncer() {
    return this.getBooleanAttribute('pgbouncer');
  }
  public set pgbouncer(value: boolean | cdktf.IResolvable) {
    this._pgbouncer = value;
  }
  public resetPgbouncer() {
    this._pgbouncer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer;
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
export interface PgPgUserConfigPrivatelinkAccess {
  /**
  * Enable pg.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg Pg#pg}
  */
  readonly pg?: boolean | cdktf.IResolvable;
  /**
  * Enable pgbouncer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pgbouncer Pg#pgbouncer}
  */
  readonly pgbouncer?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#prometheus Pg#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function pgPgUserConfigPrivatelinkAccessToTerraform(struct?: PgPgUserConfigPrivatelinkAccessOutputReference | PgPgUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg: cdktf.booleanToTerraform(struct!.pg),
    pgbouncer: cdktf.booleanToTerraform(struct!.pgbouncer),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function pgPgUserConfigPrivatelinkAccessToHclTerraform(struct?: PgPgUserConfigPrivatelinkAccessOutputReference | PgPgUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg: {
      value: cdktf.booleanToHclTerraform(struct!.pg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pgbouncer: {
      value: cdktf.booleanToHclTerraform(struct!.pgbouncer),
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

export class PgPgUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pg = this._pg;
    }
    if (this._pgbouncer !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncer = this._pgbouncer;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pg = undefined;
      this._pgbouncer = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pg = value.pg;
      this._pgbouncer = value.pgbouncer;
      this._prometheus = value.prometheus;
    }
  }

  // pg - computed: false, optional: true, required: false
  private _pg?: boolean | cdktf.IResolvable; 
  public get pg() {
    return this.getBooleanAttribute('pg');
  }
  public set pg(value: boolean | cdktf.IResolvable) {
    this._pg = value;
  }
  public resetPg() {
    this._pg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgInput() {
    return this._pg;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer?: boolean | cdktf.IResolvable; 
  public get pgbouncer() {
    return this.getBooleanAttribute('pgbouncer');
  }
  public set pgbouncer(value: boolean | cdktf.IResolvable) {
    this._pgbouncer = value;
  }
  public resetPgbouncer() {
    this._pgbouncer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer;
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
export interface PgPgUserConfigPublicAccess {
  /**
  * Allow clients to connect to pg from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg Pg#pg}
  */
  readonly pg?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to pgbouncer from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pgbouncer Pg#pgbouncer}
  */
  readonly pgbouncer?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#prometheus Pg#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function pgPgUserConfigPublicAccessToTerraform(struct?: PgPgUserConfigPublicAccessOutputReference | PgPgUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pg: cdktf.booleanToTerraform(struct!.pg),
    pgbouncer: cdktf.booleanToTerraform(struct!.pgbouncer),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function pgPgUserConfigPublicAccessToHclTerraform(struct?: PgPgUserConfigPublicAccessOutputReference | PgPgUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pg: {
      value: cdktf.booleanToHclTerraform(struct!.pg),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pgbouncer: {
      value: cdktf.booleanToHclTerraform(struct!.pgbouncer),
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

export class PgPgUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pg !== undefined) {
      hasAnyValues = true;
      internalValueResult.pg = this._pg;
    }
    if (this._pgbouncer !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncer = this._pgbouncer;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pg = undefined;
      this._pgbouncer = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pg = value.pg;
      this._pgbouncer = value.pgbouncer;
      this._prometheus = value.prometheus;
    }
  }

  // pg - computed: false, optional: true, required: false
  private _pg?: boolean | cdktf.IResolvable; 
  public get pg() {
    return this.getBooleanAttribute('pg');
  }
  public set pg(value: boolean | cdktf.IResolvable) {
    this._pg = value;
  }
  public resetPg() {
    this._pg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgInput() {
    return this._pg;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer?: boolean | cdktf.IResolvable; 
  public get pgbouncer() {
    return this.getBooleanAttribute('pgbouncer');
  }
  public set pgbouncer(value: boolean | cdktf.IResolvable) {
    this._pgbouncer = value;
  }
  public resetPgbouncer() {
    this._pgbouncer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer;
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
export interface PgPgUserConfigTimescaledb {
  /**
  * The number of background workers for timescaledb operations. You should configure this setting to the sum of your number of databases and the total number of concurrent background workers you want running at any given point in time. Changing this parameter causes a service restart. Default: `16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#max_background_workers Pg#max_background_workers}
  */
  readonly maxBackgroundWorkers?: number;
}

export function pgPgUserConfigTimescaledbToTerraform(struct?: PgPgUserConfigTimescaledbOutputReference | PgPgUserConfigTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_background_workers: cdktf.numberToTerraform(struct!.maxBackgroundWorkers),
  }
}


export function pgPgUserConfigTimescaledbToHclTerraform(struct?: PgPgUserConfigTimescaledbOutputReference | PgPgUserConfigTimescaledb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_background_workers: {
      value: cdktf.numberToHclTerraform(struct!.maxBackgroundWorkers),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigTimescaledbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfigTimescaledb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxBackgroundWorkers !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxBackgroundWorkers = this._maxBackgroundWorkers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfigTimescaledb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxBackgroundWorkers = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxBackgroundWorkers = value.maxBackgroundWorkers;
    }
  }

  // max_background_workers - computed: false, optional: true, required: false
  private _maxBackgroundWorkers?: number; 
  public get maxBackgroundWorkers() {
    return this.getNumberAttribute('max_background_workers');
  }
  public set maxBackgroundWorkers(value: number) {
    this._maxBackgroundWorkers = value;
  }
  public resetMaxBackgroundWorkers() {
    this._maxBackgroundWorkers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBackgroundWorkersInput() {
    return this._maxBackgroundWorkers;
  }
}
export interface PgPgUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#additional_backup_regions Pg#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * Custom password for admin user. Defaults to random string. This must be set only when a new service is being created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#admin_password Pg#admin_password}
  */
  readonly adminPassword?: string;
  /**
  * Custom username for admin user. This must be set only when a new service is being created. Example: `avnadmin`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#admin_username Pg#admin_username}
  */
  readonly adminUsername?: string;
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed. Example: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#backup_hour Pg#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#backup_minute Pg#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Register AAAA DNS records for the service, and allow IPv6 packets to service ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#enable_ipv6 Pg#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ip_filter Pg#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ip_filter_string Pg#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Number of nodes for the service. Example: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#node_count Pg#node_count}
  */
  readonly nodeCount?: number;
  /**
  * Should the service which is being forked be a read replica (deprecated, use read_replica service integration instead).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_read_replica Pg#pg_read_replica}
  */
  readonly pgReadReplica?: boolean | cdktf.IResolvable;
  /**
  * Name of the PG Service from which to fork (deprecated, use service_to_fork_from). This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_service_to_fork_from Pg#pg_service_to_fork_from}
  */
  readonly pgServiceToForkFrom?: string;
  /**
  * Enable the pg_stat_monitor extension. Changing this parameter causes a service restart. When this extension is enabled, pg_stat_statements results for utility commands are unreliable. Default: `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_stat_monitor_enable Pg#pg_stat_monitor_enable}
  */
  readonly pgStatMonitorEnable?: boolean | cdktf.IResolvable;
  /**
  * Enum: `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `18`, and newer. PostgreSQL major version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_version Pg#pg_version}
  */
  readonly pgVersion?: string;
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#project_to_fork_from Pg#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Recovery target time when forking a service. This has effect only when a new service is being created. Example: `2019-01-01 23:34:45`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#recovery_target_time Pg#recovery_target_time}
  */
  readonly recoveryTargetTime?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#service_log Pg#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#service_to_fork_from Pg#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Percentage of total RAM that the database server uses for shared memory buffers. Valid range is 20-60 (float), which corresponds to 20% - 60%. This setting adjusts the shared_buffers configuration value. Changing this parameter causes a service restart. Example: `41.5`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#shared_buffers_percentage Pg#shared_buffers_percentage}
  */
  readonly sharedBuffersPercentage?: number;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#static_ips Pg#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * Enum: `off`, `quorum`. Synchronous replication type. Note that the service plan also needs to support synchronous replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#synchronous_replication Pg#synchronous_replication}
  */
  readonly synchronousReplication?: string;
  /**
  * Enum: `aiven`, `timescale`. Variant of the PostgreSQL service, may affect the features that are exposed by default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#variant Pg#variant}
  */
  readonly variant?: string;
  /**
  * Sets the maximum amount of memory to be used by a query operation (such as a sort or hash table) before writing to temporary disk files, in MB. The default is 1MB + 0.075% of total RAM (up to 32MB). Example: `4`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#work_mem Pg#work_mem}
  */
  readonly workMem?: number;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#ip_filter_object Pg#ip_filter_object}
  */
  readonly ipFilterObject?: PgPgUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * migration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#migration Pg#migration}
  */
  readonly migration?: PgPgUserConfigMigration;
  /**
  * pg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg Pg#pg}
  */
  readonly pg?: PgPgUserConfigPg;
  /**
  * pg_qualstats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pg_qualstats Pg#pg_qualstats}
  */
  readonly pgQualstats?: PgPgUserConfigPgQualstats;
  /**
  * pgaudit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pgaudit Pg#pgaudit}
  */
  readonly pgaudit?: PgPgUserConfigPgaudit;
  /**
  * pgbouncer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pgbouncer Pg#pgbouncer}
  */
  readonly pgbouncer?: PgPgUserConfigPgbouncer;
  /**
  * pglookout block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#pglookout Pg#pglookout}
  */
  readonly pglookout?: PgPgUserConfigPglookout;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#private_access Pg#private_access}
  */
  readonly privateAccess?: PgPgUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#privatelink_access Pg#privatelink_access}
  */
  readonly privatelinkAccess?: PgPgUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#public_access Pg#public_access}
  */
  readonly publicAccess?: PgPgUserConfigPublicAccess;
  /**
  * timescaledb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#timescaledb Pg#timescaledb}
  */
  readonly timescaledb?: PgPgUserConfigTimescaledb;
}

export function pgPgUserConfigToTerraform(struct?: PgPgUserConfigOutputReference | PgPgUserConfig): any {
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
    enable_ipv6: cdktf.booleanToTerraform(struct!.enableIpv6),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    node_count: cdktf.numberToTerraform(struct!.nodeCount),
    pg_read_replica: cdktf.booleanToTerraform(struct!.pgReadReplica),
    pg_service_to_fork_from: cdktf.stringToTerraform(struct!.pgServiceToForkFrom),
    pg_stat_monitor_enable: cdktf.booleanToTerraform(struct!.pgStatMonitorEnable),
    pg_version: cdktf.stringToTerraform(struct!.pgVersion),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_target_time: cdktf.stringToTerraform(struct!.recoveryTargetTime),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    shared_buffers_percentage: cdktf.numberToTerraform(struct!.sharedBuffersPercentage),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    synchronous_replication: cdktf.stringToTerraform(struct!.synchronousReplication),
    variant: cdktf.stringToTerraform(struct!.variant),
    work_mem: cdktf.numberToTerraform(struct!.workMem),
    ip_filter_object: cdktf.listMapper(pgPgUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    migration: pgPgUserConfigMigrationToTerraform(struct!.migration),
    pg: pgPgUserConfigPgToTerraform(struct!.pg),
    pg_qualstats: pgPgUserConfigPgQualstatsToTerraform(struct!.pgQualstats),
    pgaudit: pgPgUserConfigPgauditToTerraform(struct!.pgaudit),
    pgbouncer: pgPgUserConfigPgbouncerToTerraform(struct!.pgbouncer),
    pglookout: pgPgUserConfigPglookoutToTerraform(struct!.pglookout),
    private_access: pgPgUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: pgPgUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: pgPgUserConfigPublicAccessToTerraform(struct!.publicAccess),
    timescaledb: pgPgUserConfigTimescaledbToTerraform(struct!.timescaledb),
  }
}


export function pgPgUserConfigToHclTerraform(struct?: PgPgUserConfigOutputReference | PgPgUserConfig): any {
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
    enable_ipv6: {
      value: cdktf.booleanToHclTerraform(struct!.enableIpv6),
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
    node_count: {
      value: cdktf.numberToHclTerraform(struct!.nodeCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pg_read_replica: {
      value: cdktf.booleanToHclTerraform(struct!.pgReadReplica),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_service_to_fork_from: {
      value: cdktf.stringToHclTerraform(struct!.pgServiceToForkFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pg_stat_monitor_enable: {
      value: cdktf.booleanToHclTerraform(struct!.pgStatMonitorEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pg_version: {
      value: cdktf.stringToHclTerraform(struct!.pgVersion),
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
    shared_buffers_percentage: {
      value: cdktf.numberToHclTerraform(struct!.sharedBuffersPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_ips: {
      value: cdktf.booleanToHclTerraform(struct!.staticIps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    synchronous_replication: {
      value: cdktf.stringToHclTerraform(struct!.synchronousReplication),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    work_mem: {
      value: cdktf.numberToHclTerraform(struct!.workMem),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_filter_object: {
      value: cdktf.listMapperHcl(pgPgUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "PgPgUserConfigIpFilterObjectList",
    },
    migration: {
      value: pgPgUserConfigMigrationToHclTerraform(struct!.migration),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigMigrationList",
    },
    pg: {
      value: pgPgUserConfigPgToHclTerraform(struct!.pg),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPgList",
    },
    pg_qualstats: {
      value: pgPgUserConfigPgQualstatsToHclTerraform(struct!.pgQualstats),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPgQualstatsList",
    },
    pgaudit: {
      value: pgPgUserConfigPgauditToHclTerraform(struct!.pgaudit),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPgauditList",
    },
    pgbouncer: {
      value: pgPgUserConfigPgbouncerToHclTerraform(struct!.pgbouncer),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPgbouncerList",
    },
    pglookout: {
      value: pgPgUserConfigPglookoutToHclTerraform(struct!.pglookout),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPglookoutList",
    },
    private_access: {
      value: pgPgUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: pgPgUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: pgPgUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigPublicAccessList",
    },
    timescaledb: {
      value: pgPgUserConfigTimescaledbToHclTerraform(struct!.timescaledb),
      isBlock: true,
      type: "list",
      storageClassType: "PgPgUserConfigTimescaledbList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PgPgUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PgPgUserConfig | undefined {
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
    if (this._enableIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableIpv6 = this._enableIpv6;
    }
    if (this._ipFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilter = this._ipFilter;
    }
    if (this._ipFilterString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterString = this._ipFilterString;
    }
    if (this._nodeCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeCount = this._nodeCount;
    }
    if (this._pgReadReplica !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgReadReplica = this._pgReadReplica;
    }
    if (this._pgServiceToForkFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgServiceToForkFrom = this._pgServiceToForkFrom;
    }
    if (this._pgStatMonitorEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgStatMonitorEnable = this._pgStatMonitorEnable;
    }
    if (this._pgVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgVersion = this._pgVersion;
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
    if (this._sharedBuffersPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedBuffersPercentage = this._sharedBuffersPercentage;
    }
    if (this._staticIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIps = this._staticIps;
    }
    if (this._synchronousReplication !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronousReplication = this._synchronousReplication;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    if (this._workMem !== undefined) {
      hasAnyValues = true;
      internalValueResult.workMem = this._workMem;
    }
    if (this._ipFilterObject?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFilterObject = this._ipFilterObject?.internalValue;
    }
    if (this._migration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.migration = this._migration?.internalValue;
    }
    if (this._pg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pg = this._pg?.internalValue;
    }
    if (this._pgQualstats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgQualstats = this._pgQualstats?.internalValue;
    }
    if (this._pgaudit?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgaudit = this._pgaudit?.internalValue;
    }
    if (this._pgbouncer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pgbouncer = this._pgbouncer?.internalValue;
    }
    if (this._pglookout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pglookout = this._pglookout?.internalValue;
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
    if (this._timescaledb?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.timescaledb = this._timescaledb?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PgPgUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._adminPassword = undefined;
      this._adminUsername = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._enableIpv6 = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._nodeCount = undefined;
      this._pgReadReplica = undefined;
      this._pgServiceToForkFrom = undefined;
      this._pgStatMonitorEnable = undefined;
      this._pgVersion = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryTargetTime = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._sharedBuffersPercentage = undefined;
      this._staticIps = undefined;
      this._synchronousReplication = undefined;
      this._variant = undefined;
      this._workMem = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._migration.internalValue = undefined;
      this._pg.internalValue = undefined;
      this._pgQualstats.internalValue = undefined;
      this._pgaudit.internalValue = undefined;
      this._pgbouncer.internalValue = undefined;
      this._pglookout.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
      this._timescaledb.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._adminPassword = value.adminPassword;
      this._adminUsername = value.adminUsername;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._enableIpv6 = value.enableIpv6;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._nodeCount = value.nodeCount;
      this._pgReadReplica = value.pgReadReplica;
      this._pgServiceToForkFrom = value.pgServiceToForkFrom;
      this._pgStatMonitorEnable = value.pgStatMonitorEnable;
      this._pgVersion = value.pgVersion;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryTargetTime = value.recoveryTargetTime;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._sharedBuffersPercentage = value.sharedBuffersPercentage;
      this._staticIps = value.staticIps;
      this._synchronousReplication = value.synchronousReplication;
      this._variant = value.variant;
      this._workMem = value.workMem;
      this._ipFilterObject.internalValue = value.ipFilterObject;
      this._migration.internalValue = value.migration;
      this._pg.internalValue = value.pg;
      this._pgQualstats.internalValue = value.pgQualstats;
      this._pgaudit.internalValue = value.pgaudit;
      this._pgbouncer.internalValue = value.pgbouncer;
      this._pglookout.internalValue = value.pglookout;
      this._privateAccess.internalValue = value.privateAccess;
      this._privatelinkAccess.internalValue = value.privatelinkAccess;
      this._publicAccess.internalValue = value.publicAccess;
      this._timescaledb.internalValue = value.timescaledb;
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

  // enable_ipv6 - computed: false, optional: true, required: false
  private _enableIpv6?: boolean | cdktf.IResolvable; 
  public get enableIpv6() {
    return this.getBooleanAttribute('enable_ipv6');
  }
  public set enableIpv6(value: boolean | cdktf.IResolvable) {
    this._enableIpv6 = value;
  }
  public resetEnableIpv6() {
    this._enableIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpv6Input() {
    return this._enableIpv6;
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

  // node_count - computed: false, optional: true, required: false
  private _nodeCount?: number; 
  public get nodeCount() {
    return this.getNumberAttribute('node_count');
  }
  public set nodeCount(value: number) {
    this._nodeCount = value;
  }
  public resetNodeCount() {
    this._nodeCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCountInput() {
    return this._nodeCount;
  }

  // pg_read_replica - computed: false, optional: true, required: false
  private _pgReadReplica?: boolean | cdktf.IResolvable; 
  public get pgReadReplica() {
    return this.getBooleanAttribute('pg_read_replica');
  }
  public set pgReadReplica(value: boolean | cdktf.IResolvable) {
    this._pgReadReplica = value;
  }
  public resetPgReadReplica() {
    this._pgReadReplica = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgReadReplicaInput() {
    return this._pgReadReplica;
  }

  // pg_service_to_fork_from - computed: false, optional: true, required: false
  private _pgServiceToForkFrom?: string; 
  public get pgServiceToForkFrom() {
    return this.getStringAttribute('pg_service_to_fork_from');
  }
  public set pgServiceToForkFrom(value: string) {
    this._pgServiceToForkFrom = value;
  }
  public resetPgServiceToForkFrom() {
    this._pgServiceToForkFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgServiceToForkFromInput() {
    return this._pgServiceToForkFrom;
  }

  // pg_stat_monitor_enable - computed: false, optional: true, required: false
  private _pgStatMonitorEnable?: boolean | cdktf.IResolvable; 
  public get pgStatMonitorEnable() {
    return this.getBooleanAttribute('pg_stat_monitor_enable');
  }
  public set pgStatMonitorEnable(value: boolean | cdktf.IResolvable) {
    this._pgStatMonitorEnable = value;
  }
  public resetPgStatMonitorEnable() {
    this._pgStatMonitorEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgStatMonitorEnableInput() {
    return this._pgStatMonitorEnable;
  }

  // pg_version - computed: false, optional: true, required: false
  private _pgVersion?: string; 
  public get pgVersion() {
    return this.getStringAttribute('pg_version');
  }
  public set pgVersion(value: string) {
    this._pgVersion = value;
  }
  public resetPgVersion() {
    this._pgVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgVersionInput() {
    return this._pgVersion;
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

  // shared_buffers_percentage - computed: false, optional: true, required: false
  private _sharedBuffersPercentage?: number; 
  public get sharedBuffersPercentage() {
    return this.getNumberAttribute('shared_buffers_percentage');
  }
  public set sharedBuffersPercentage(value: number) {
    this._sharedBuffersPercentage = value;
  }
  public resetSharedBuffersPercentage() {
    this._sharedBuffersPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedBuffersPercentageInput() {
    return this._sharedBuffersPercentage;
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

  // synchronous_replication - computed: false, optional: true, required: false
  private _synchronousReplication?: string; 
  public get synchronousReplication() {
    return this.getStringAttribute('synchronous_replication');
  }
  public set synchronousReplication(value: string) {
    this._synchronousReplication = value;
  }
  public resetSynchronousReplication() {
    this._synchronousReplication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronousReplicationInput() {
    return this._synchronousReplication;
  }

  // variant - computed: false, optional: true, required: false
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  public resetVariant() {
    this._variant = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }

  // work_mem - computed: false, optional: true, required: false
  private _workMem?: number; 
  public get workMem() {
    return this.getNumberAttribute('work_mem');
  }
  public set workMem(value: number) {
    this._workMem = value;
  }
  public resetWorkMem() {
    this._workMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workMemInput() {
    return this._workMem;
  }

  // ip_filter_object - computed: false, optional: true, required: false
  private _ipFilterObject = new PgPgUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: PgPgUserConfigIpFilterObject[] | cdktf.IResolvable) {
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
  private _migration = new PgPgUserConfigMigrationOutputReference(this, "migration");
  public get migration() {
    return this._migration;
  }
  public putMigration(value: PgPgUserConfigMigration) {
    this._migration.internalValue = value;
  }
  public resetMigration() {
    this._migration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrationInput() {
    return this._migration.internalValue;
  }

  // pg - computed: false, optional: true, required: false
  private _pg = new PgPgUserConfigPgOutputReference(this, "pg");
  public get pg() {
    return this._pg;
  }
  public putPg(value: PgPgUserConfigPg) {
    this._pg.internalValue = value;
  }
  public resetPg() {
    this._pg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgInput() {
    return this._pg.internalValue;
  }

  // pg_qualstats - computed: false, optional: true, required: false
  private _pgQualstats = new PgPgUserConfigPgQualstatsOutputReference(this, "pg_qualstats");
  public get pgQualstats() {
    return this._pgQualstats;
  }
  public putPgQualstats(value: PgPgUserConfigPgQualstats) {
    this._pgQualstats.internalValue = value;
  }
  public resetPgQualstats() {
    this._pgQualstats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgQualstatsInput() {
    return this._pgQualstats.internalValue;
  }

  // pgaudit - computed: false, optional: true, required: false
  private _pgaudit = new PgPgUserConfigPgauditOutputReference(this, "pgaudit");
  public get pgaudit() {
    return this._pgaudit;
  }
  public putPgaudit(value: PgPgUserConfigPgaudit) {
    this._pgaudit.internalValue = value;
  }
  public resetPgaudit() {
    this._pgaudit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgauditInput() {
    return this._pgaudit.internalValue;
  }

  // pgbouncer - computed: false, optional: true, required: false
  private _pgbouncer = new PgPgUserConfigPgbouncerOutputReference(this, "pgbouncer");
  public get pgbouncer() {
    return this._pgbouncer;
  }
  public putPgbouncer(value: PgPgUserConfigPgbouncer) {
    this._pgbouncer.internalValue = value;
  }
  public resetPgbouncer() {
    this._pgbouncer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgbouncerInput() {
    return this._pgbouncer.internalValue;
  }

  // pglookout - computed: false, optional: true, required: false
  private _pglookout = new PgPgUserConfigPglookoutOutputReference(this, "pglookout");
  public get pglookout() {
    return this._pglookout;
  }
  public putPglookout(value: PgPgUserConfigPglookout) {
    this._pglookout.internalValue = value;
  }
  public resetPglookout() {
    this._pglookout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pglookoutInput() {
    return this._pglookout.internalValue;
  }

  // private_access - computed: false, optional: true, required: false
  private _privateAccess = new PgPgUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: PgPgUserConfigPrivateAccess) {
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
  private _privatelinkAccess = new PgPgUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: PgPgUserConfigPrivatelinkAccess) {
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
  private _publicAccess = new PgPgUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: PgPgUserConfigPublicAccess) {
    this._publicAccess.internalValue = value;
  }
  public resetPublicAccess() {
    this._publicAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicAccessInput() {
    return this._publicAccess.internalValue;
  }

  // timescaledb - computed: false, optional: true, required: false
  private _timescaledb = new PgPgUserConfigTimescaledbOutputReference(this, "timescaledb");
  public get timescaledb() {
    return this._timescaledb;
  }
  public putTimescaledb(value: PgPgUserConfigTimescaledb) {
    this._timescaledb.internalValue = value;
  }
  public resetTimescaledb() {
    this._timescaledb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timescaledbInput() {
    return this._timescaledb.internalValue;
  }
}
export interface PgServiceIntegrations {
  /**
  * Type of the service integration. The possible values are `read_replica` and `disaster_recovery`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#integration_type Pg#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#source_service_name Pg#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function pgServiceIntegrationsToTerraform(struct?: PgServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function pgServiceIntegrationsToHclTerraform(struct?: PgServiceIntegrations | cdktf.IResolvable): any {
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

export class PgServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class PgServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : PgServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): PgServiceIntegrationsOutputReference {
    return new PgServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#key Pg#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#value Pg#value}
  */
  readonly value: string;
}

export function pgTagToTerraform(struct?: PgTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function pgTagToHclTerraform(struct?: PgTag | cdktf.IResolvable): any {
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

export class PgTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgTag | cdktf.IResolvable | undefined) {
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

export class PgTagList extends cdktf.ComplexList {
  public internalValue? : PgTag[] | cdktf.IResolvable

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
  public get(index: number): PgTagOutputReference {
    return new PgTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#email Pg#email}
  */
  readonly email: string;
}

export function pgTechEmailsToTerraform(struct?: PgTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function pgTechEmailsToHclTerraform(struct?: PgTechEmails | cdktf.IResolvable): any {
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

export class PgTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PgTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgTechEmails | cdktf.IResolvable | undefined) {
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

export class PgTechEmailsList extends cdktf.ComplexList {
  public internalValue? : PgTechEmails[] | cdktf.IResolvable

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
  public get(index: number): PgTechEmailsOutputReference {
    return new PgTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PgTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#create Pg#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#default Pg#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#delete Pg#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#read Pg#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#update Pg#update}
  */
  readonly update?: string;
}

export function pgTimeoutsToTerraform(struct?: PgTimeouts | cdktf.IResolvable): any {
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


export function pgTimeoutsToHclTerraform(struct?: PgTimeouts | cdktf.IResolvable): any {
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

export class PgTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PgTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PgTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg aiven_pg}
*/
export class Pg extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_pg";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pg resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pg to import
  * @param importFromId The id of the existing Pg that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pg to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_pg", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.46.1/docs/resources/pg aiven_pg} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PgConfig
  */
  public constructor(scope: Construct, id: string, config: PgConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_pg',
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
    this._pg.internalValue = config.pg;
    this._pgUserConfig.internalValue = config.pgUserConfig;
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
  private _components = new PgComponentsList(this, "components", false);
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

  // pg - computed: false, optional: true, required: false
  private _pg = new PgPgOutputReference(this, "pg");
  public get pg() {
    return this._pg;
  }
  public putPg(value: PgPg) {
    this._pg.internalValue = value;
  }
  public resetPg() {
    this._pg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgInput() {
    return this._pg.internalValue;
  }

  // pg_user_config - computed: false, optional: true, required: false
  private _pgUserConfig = new PgPgUserConfigOutputReference(this, "pg_user_config");
  public get pgUserConfig() {
    return this._pgUserConfig;
  }
  public putPgUserConfig(value: PgPgUserConfig) {
    this._pgUserConfig.internalValue = value;
  }
  public resetPgUserConfig() {
    this._pgUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pgUserConfigInput() {
    return this._pgUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new PgServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: PgServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new PgTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PgTag[] | cdktf.IResolvable) {
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
  private _techEmails = new PgTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: PgTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new PgTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PgTimeouts) {
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
      pg: pgPgToTerraform(this._pg.internalValue),
      pg_user_config: pgPgUserConfigToTerraform(this._pgUserConfig.internalValue),
      service_integrations: cdktf.listMapper(pgServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(pgTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(pgTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: pgTimeoutsToTerraform(this._timeouts.internalValue),
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
      pg: {
        value: pgPgToHclTerraform(this._pg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PgPgList",
      },
      pg_user_config: {
        value: pgPgUserConfigToHclTerraform(this._pgUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PgPgUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(pgServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PgServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(pgTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PgTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(pgTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PgTechEmailsList",
      },
      timeouts: {
        value: pgTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PgTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
