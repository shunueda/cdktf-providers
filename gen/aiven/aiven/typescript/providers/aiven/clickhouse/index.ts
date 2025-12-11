// https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClickhouseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add [disk storage](https://aiven.io/docs/platform/howto/add-storage-space) in increments of 30  GiB to scale your service. The maximum value depends on the service type and cloud provider. Removing additional storage causes the service nodes to go through a rolling restart, and there might be a short downtime for services without an autoscaler integration or high availability capabilities. The field can be safely removed when autoscaler is enabled without causing any changes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#additional_disk_space Clickhouse#additional_disk_space}
  */
  readonly additionalDiskSpace?: string;
  /**
  * The cloud provider and region the service is hosted in. The format is `provider-region`, for example: `google-europe-west1`. The [available cloud regions](https://aiven.io/docs/platform/reference/list_of_clouds) can differ per project and service. Changing this value [migrates the service to another cloud provider or region](https://aiven.io/docs/platform/howto/migrate-services-cloud-region). The migration runs in the background and includes a DNS update to redirect traffic to the new region. Most services experience no downtime, but some databases may have a brief interruption during DNS propagation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#cloud_name Clickhouse#cloud_name}
  */
  readonly cloudName?: string;
  /**
  * Service disk space. Possible values depend on the service type, the cloud provider and the project. Therefore, reducing will result in the service rebalancing. Please use `additional_disk_space` to specify the space to be added to the default disk space defined by the plan.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#disk_space Clickhouse#disk_space}
  */
  readonly diskSpace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#id Clickhouse#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Day of week when maintenance operations should be performed. One monday, tuesday, wednesday, etc.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#maintenance_window_dow Clickhouse#maintenance_window_dow}
  */
  readonly maintenanceWindowDow?: string;
  /**
  * Time of day when maintenance operations should be performed. UTC time in HH:mm:ss format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#maintenance_window_time Clickhouse#maintenance_window_time}
  */
  readonly maintenanceWindowTime?: string;
  /**
  * Defines what kind of computing resources are allocated for the service. It can be changed after creation, though there are some restrictions when going to a smaller plan such as the new plan must have sufficient amount of disk space to store all current data and switching to a plan with fewer nodes might not be supported. The basic plan names are `hobbyist`, `startup-x`, `business-x` and `premium-x` where `x` is (roughly) the amount of memory on each node (also other attributes like number of CPUs and amount of disk space varies but naming is based on memory). The available options can be seen from the [Aiven pricing page](https://aiven.io/pricing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#plan Clickhouse#plan}
  */
  readonly plan: string;
  /**
  * The name of the project this resource belongs to. To set up proper dependencies please refer to this variable as a reference. Changing this property forces recreation of the resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#project Clickhouse#project}
  */
  readonly project: string;
  /**
  * Specifies the VPC the service should run in. If the value is not set, the service runs on the Public Internet. When set, the value should be given as a reference to set up dependencies correctly, and the VPC must be in the same cloud and region as the service itself. The service can be freely moved to and from VPC after creation, but doing so triggers migration to new servers, so the operation can take a significant amount of time to complete if the service has a lot of data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#project_vpc_id Clickhouse#project_vpc_id}
  */
  readonly projectVpcId?: string;
  /**
  * Specifies the actual name of the service. The name cannot be changed later without destroying and re-creating the service so name should be picked based on intended service usage rather than current attributes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#service_name Clickhouse#service_name}
  */
  readonly serviceName: string;
  /**
  * Static IPs that are going to be associated with this service. Please assign a value using the 'toset' function. Once a static ip resource is in the 'assigned' state it cannot be unbound from the node again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#static_ips Clickhouse#static_ips}
  */
  readonly staticIps?: string[];
  /**
  * Prevents the service from being deleted. It is recommended to set this to `true` for all production services to prevent unintentional service deletion. This does not shield against deleting databases or topics but for services with backups much of the content can at least be restored from backup in case accidental deletion is done.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#termination_protection Clickhouse#termination_protection}
  */
  readonly terminationProtection?: boolean | cdktf.IResolvable;
  /**
  * clickhouse block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse Clickhouse#clickhouse}
  */
  readonly clickhouse?: ClickhouseClickhouse;
  /**
  * clickhouse_user_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_user_config Clickhouse#clickhouse_user_config}
  */
  readonly clickhouseUserConfig?: ClickhouseClickhouseUserConfig;
  /**
  * service_integrations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#service_integrations Clickhouse#service_integrations}
  */
  readonly serviceIntegrations?: ClickhouseServiceIntegrations[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#tag Clickhouse#tag}
  */
  readonly tag?: ClickhouseTag[] | cdktf.IResolvable;
  /**
  * tech_emails block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#tech_emails Clickhouse#tech_emails}
  */
  readonly techEmails?: ClickhouseTechEmails[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#timeouts Clickhouse#timeouts}
  */
  readonly timeouts?: ClickhouseTimeouts;
}
export interface ClickhouseComponents {
}

export function clickhouseComponentsToTerraform(struct?: ClickhouseComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function clickhouseComponentsToHclTerraform(struct?: ClickhouseComponents): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ClickhouseComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseComponents | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseComponents | undefined) {
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

export class ClickhouseComponentsList extends cdktf.ComplexList {

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
  public get(index: number): ClickhouseComponentsOutputReference {
    return new ClickhouseComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClickhouse {
  /**
  * ClickHouse server URIs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#uris Clickhouse#uris}
  */
  readonly uris?: string[];
}

export function clickhouseClickhouseToTerraform(struct?: ClickhouseClickhouseOutputReference | ClickhouseClickhouse): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uris: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.uris),
  }
}


export function clickhouseClickhouseToHclTerraform(struct?: ClickhouseClickhouseOutputReference | ClickhouseClickhouse): any {
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

export class ClickhouseClickhouseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseClickhouse | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uris !== undefined) {
      hasAnyValues = true;
      internalValueResult.uris = this._uris;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClickhouse | undefined) {
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
export interface ClickhouseClickhouseUserConfigIpFilterObject {
  /**
  * Description for IP filter list entry. Example: `Production service IP range`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#description Clickhouse#description}
  */
  readonly description?: string;
  /**
  * CIDR address block. Example: `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#network Clickhouse#network}
  */
  readonly network: string;
}

export function clickhouseClickhouseUserConfigIpFilterObjectToTerraform(struct?: ClickhouseClickhouseUserConfigIpFilterObject | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function clickhouseClickhouseUserConfigIpFilterObjectToHclTerraform(struct?: ClickhouseClickhouseUserConfigIpFilterObject | cdktf.IResolvable): any {
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

export class ClickhouseClickhouseUserConfigIpFilterObjectOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseClickhouseUserConfigIpFilterObject | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseClickhouseUserConfigIpFilterObject | cdktf.IResolvable | undefined) {
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

export class ClickhouseClickhouseUserConfigIpFilterObjectList extends cdktf.ComplexList {
  public internalValue? : ClickhouseClickhouseUserConfigIpFilterObject[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseClickhouseUserConfigIpFilterObjectOutputReference {
    return new ClickhouseClickhouseUserConfigIpFilterObjectOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseClickhouseUserConfigPrivateAccess {
  /**
  * Allow clients to connect to clickhouse with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse Clickhouse#clickhouse}
  */
  readonly clickhouse?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to clickhouse_https with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_https Clickhouse#clickhouse_https}
  */
  readonly clickhouseHttps?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to clickhouse_mysql with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_mysql Clickhouse#clickhouse_mysql}
  */
  readonly clickhouseMysql?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus with a DNS name that always resolves to the service's private IP addresses. Only available in certain network locations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#prometheus Clickhouse#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function clickhouseClickhouseUserConfigPrivateAccessToTerraform(struct?: ClickhouseClickhouseUserConfigPrivateAccessOutputReference | ClickhouseClickhouseUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse: cdktf.booleanToTerraform(struct!.clickhouse),
    clickhouse_https: cdktf.booleanToTerraform(struct!.clickhouseHttps),
    clickhouse_mysql: cdktf.booleanToTerraform(struct!.clickhouseMysql),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function clickhouseClickhouseUserConfigPrivateAccessToHclTerraform(struct?: ClickhouseClickhouseUserConfigPrivateAccessOutputReference | ClickhouseClickhouseUserConfigPrivateAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickhouse_https: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouseHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickhouse_mysql: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouseMysql),
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

export class ClickhouseClickhouseUserConfigPrivateAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseClickhouseUserConfigPrivateAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouse = this._clickhouse;
    }
    if (this._clickhouseHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseHttps = this._clickhouseHttps;
    }
    if (this._clickhouseMysql !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseMysql = this._clickhouseMysql;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClickhouseUserConfigPrivateAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickhouse = undefined;
      this._clickhouseHttps = undefined;
      this._clickhouseMysql = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickhouse = value.clickhouse;
      this._clickhouseHttps = value.clickhouseHttps;
      this._clickhouseMysql = value.clickhouseMysql;
      this._prometheus = value.prometheus;
    }
  }

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse?: boolean | cdktf.IResolvable; 
  public get clickhouse() {
    return this.getBooleanAttribute('clickhouse');
  }
  public set clickhouse(value: boolean | cdktf.IResolvable) {
    this._clickhouse = value;
  }
  public resetClickhouse() {
    this._clickhouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse;
  }

  // clickhouse_https - computed: false, optional: true, required: false
  private _clickhouseHttps?: boolean | cdktf.IResolvable; 
  public get clickhouseHttps() {
    return this.getBooleanAttribute('clickhouse_https');
  }
  public set clickhouseHttps(value: boolean | cdktf.IResolvable) {
    this._clickhouseHttps = value;
  }
  public resetClickhouseHttps() {
    this._clickhouseHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseHttpsInput() {
    return this._clickhouseHttps;
  }

  // clickhouse_mysql - computed: false, optional: true, required: false
  private _clickhouseMysql?: boolean | cdktf.IResolvable; 
  public get clickhouseMysql() {
    return this.getBooleanAttribute('clickhouse_mysql');
  }
  public set clickhouseMysql(value: boolean | cdktf.IResolvable) {
    this._clickhouseMysql = value;
  }
  public resetClickhouseMysql() {
    this._clickhouseMysql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseMysqlInput() {
    return this._clickhouseMysql;
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
export interface ClickhouseClickhouseUserConfigPrivatelinkAccess {
  /**
  * Enable clickhouse.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse Clickhouse#clickhouse}
  */
  readonly clickhouse?: boolean | cdktf.IResolvable;
  /**
  * Enable clickhouse_https.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_https Clickhouse#clickhouse_https}
  */
  readonly clickhouseHttps?: boolean | cdktf.IResolvable;
  /**
  * Enable clickhouse_mysql.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_mysql Clickhouse#clickhouse_mysql}
  */
  readonly clickhouseMysql?: boolean | cdktf.IResolvable;
  /**
  * Enable prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#prometheus Clickhouse#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function clickhouseClickhouseUserConfigPrivatelinkAccessToTerraform(struct?: ClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference | ClickhouseClickhouseUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse: cdktf.booleanToTerraform(struct!.clickhouse),
    clickhouse_https: cdktf.booleanToTerraform(struct!.clickhouseHttps),
    clickhouse_mysql: cdktf.booleanToTerraform(struct!.clickhouseMysql),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function clickhouseClickhouseUserConfigPrivatelinkAccessToHclTerraform(struct?: ClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference | ClickhouseClickhouseUserConfigPrivatelinkAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickhouse_https: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouseHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickhouse_mysql: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouseMysql),
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

export class ClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseClickhouseUserConfigPrivatelinkAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouse = this._clickhouse;
    }
    if (this._clickhouseHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseHttps = this._clickhouseHttps;
    }
    if (this._clickhouseMysql !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseMysql = this._clickhouseMysql;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClickhouseUserConfigPrivatelinkAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickhouse = undefined;
      this._clickhouseHttps = undefined;
      this._clickhouseMysql = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickhouse = value.clickhouse;
      this._clickhouseHttps = value.clickhouseHttps;
      this._clickhouseMysql = value.clickhouseMysql;
      this._prometheus = value.prometheus;
    }
  }

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse?: boolean | cdktf.IResolvable; 
  public get clickhouse() {
    return this.getBooleanAttribute('clickhouse');
  }
  public set clickhouse(value: boolean | cdktf.IResolvable) {
    this._clickhouse = value;
  }
  public resetClickhouse() {
    this._clickhouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse;
  }

  // clickhouse_https - computed: false, optional: true, required: false
  private _clickhouseHttps?: boolean | cdktf.IResolvable; 
  public get clickhouseHttps() {
    return this.getBooleanAttribute('clickhouse_https');
  }
  public set clickhouseHttps(value: boolean | cdktf.IResolvable) {
    this._clickhouseHttps = value;
  }
  public resetClickhouseHttps() {
    this._clickhouseHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseHttpsInput() {
    return this._clickhouseHttps;
  }

  // clickhouse_mysql - computed: false, optional: true, required: false
  private _clickhouseMysql?: boolean | cdktf.IResolvable; 
  public get clickhouseMysql() {
    return this.getBooleanAttribute('clickhouse_mysql');
  }
  public set clickhouseMysql(value: boolean | cdktf.IResolvable) {
    this._clickhouseMysql = value;
  }
  public resetClickhouseMysql() {
    this._clickhouseMysql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseMysqlInput() {
    return this._clickhouseMysql;
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
export interface ClickhouseClickhouseUserConfigPublicAccess {
  /**
  * Allow clients to connect to clickhouse from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse Clickhouse#clickhouse}
  */
  readonly clickhouse?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to clickhouse_https from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_https Clickhouse#clickhouse_https}
  */
  readonly clickhouseHttps?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to clickhouse_mysql from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#clickhouse_mysql Clickhouse#clickhouse_mysql}
  */
  readonly clickhouseMysql?: boolean | cdktf.IResolvable;
  /**
  * Allow clients to connect to prometheus from the public internet for service nodes that are in a project VPC or another type of private network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#prometheus Clickhouse#prometheus}
  */
  readonly prometheus?: boolean | cdktf.IResolvable;
}

export function clickhouseClickhouseUserConfigPublicAccessToTerraform(struct?: ClickhouseClickhouseUserConfigPublicAccessOutputReference | ClickhouseClickhouseUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clickhouse: cdktf.booleanToTerraform(struct!.clickhouse),
    clickhouse_https: cdktf.booleanToTerraform(struct!.clickhouseHttps),
    clickhouse_mysql: cdktf.booleanToTerraform(struct!.clickhouseMysql),
    prometheus: cdktf.booleanToTerraform(struct!.prometheus),
  }
}


export function clickhouseClickhouseUserConfigPublicAccessToHclTerraform(struct?: ClickhouseClickhouseUserConfigPublicAccessOutputReference | ClickhouseClickhouseUserConfigPublicAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clickhouse: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickhouse_https: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouseHttps),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    clickhouse_mysql: {
      value: cdktf.booleanToHclTerraform(struct!.clickhouseMysql),
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

export class ClickhouseClickhouseUserConfigPublicAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseClickhouseUserConfigPublicAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clickhouse !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouse = this._clickhouse;
    }
    if (this._clickhouseHttps !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseHttps = this._clickhouseHttps;
    }
    if (this._clickhouseMysql !== undefined) {
      hasAnyValues = true;
      internalValueResult.clickhouseMysql = this._clickhouseMysql;
    }
    if (this._prometheus !== undefined) {
      hasAnyValues = true;
      internalValueResult.prometheus = this._prometheus;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClickhouseClickhouseUserConfigPublicAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clickhouse = undefined;
      this._clickhouseHttps = undefined;
      this._clickhouseMysql = undefined;
      this._prometheus = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clickhouse = value.clickhouse;
      this._clickhouseHttps = value.clickhouseHttps;
      this._clickhouseMysql = value.clickhouseMysql;
      this._prometheus = value.prometheus;
    }
  }

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse?: boolean | cdktf.IResolvable; 
  public get clickhouse() {
    return this.getBooleanAttribute('clickhouse');
  }
  public set clickhouse(value: boolean | cdktf.IResolvable) {
    this._clickhouse = value;
  }
  public resetClickhouse() {
    this._clickhouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse;
  }

  // clickhouse_https - computed: false, optional: true, required: false
  private _clickhouseHttps?: boolean | cdktf.IResolvable; 
  public get clickhouseHttps() {
    return this.getBooleanAttribute('clickhouse_https');
  }
  public set clickhouseHttps(value: boolean | cdktf.IResolvable) {
    this._clickhouseHttps = value;
  }
  public resetClickhouseHttps() {
    this._clickhouseHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseHttpsInput() {
    return this._clickhouseHttps;
  }

  // clickhouse_mysql - computed: false, optional: true, required: false
  private _clickhouseMysql?: boolean | cdktf.IResolvable; 
  public get clickhouseMysql() {
    return this.getBooleanAttribute('clickhouse_mysql');
  }
  public set clickhouseMysql(value: boolean | cdktf.IResolvable) {
    this._clickhouseMysql = value;
  }
  public resetClickhouseMysql() {
    this._clickhouseMysql = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseMysqlInput() {
    return this._clickhouseMysql;
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
export interface ClickhouseClickhouseUserConfig {
  /**
  * Additional Cloud Regions for Backup Replication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#additional_backup_regions Clickhouse#additional_backup_regions}
  */
  readonly additionalBackupRegions?: string[];
  /**
  * The hour of day (in UTC) when backup for the service is started. New backup is only started if previous backup has already completed. Example: `3`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#backup_hour Clickhouse#backup_hour}
  */
  readonly backupHour?: number;
  /**
  * The minute of an hour when backup for the service is started. New backup is only started if previous backup has already completed. Example: `30`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#backup_minute Clickhouse#backup_minute}
  */
  readonly backupMinute?: number;
  /**
  * Register AAAA DNS records for the service, and allow IPv6 packets to service ports.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#enable_ipv6 Clickhouse#enable_ipv6}
  */
  readonly enableIpv6?: boolean | cdktf.IResolvable;
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#ip_filter Clickhouse#ip_filter}
  */
  readonly ipFilter?: string[];
  /**
  * Allow incoming connections from CIDR address block, e.g. `10.20.0.0/16`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#ip_filter_string Clickhouse#ip_filter_string}
  */
  readonly ipFilterString?: string[];
  /**
  * Name of another project to fork a service from. This has effect only when a new service is being created. Example: `anotherprojectname`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#project_to_fork_from Clickhouse#project_to_fork_from}
  */
  readonly projectToForkFrom?: string;
  /**
  * Name of the basebackup to restore in forked service. Example: `backup-20191112t091354293891z`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#recovery_basebackup_name Clickhouse#recovery_basebackup_name}
  */
  readonly recoveryBasebackupName?: string;
  /**
  * Store logs for the service so that they are available in the HTTP API and console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#service_log Clickhouse#service_log}
  */
  readonly serviceLog?: boolean | cdktf.IResolvable;
  /**
  * Name of another service to fork from. This has effect only when a new service is being created. Example: `anotherservicename`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#service_to_fork_from Clickhouse#service_to_fork_from}
  */
  readonly serviceToForkFrom?: string;
  /**
  * Use static public IP addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#static_ips Clickhouse#static_ips}
  */
  readonly staticIps?: boolean | cdktf.IResolvable;
  /**
  * ip_filter_object block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#ip_filter_object Clickhouse#ip_filter_object}
  */
  readonly ipFilterObject?: ClickhouseClickhouseUserConfigIpFilterObject[] | cdktf.IResolvable;
  /**
  * private_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#private_access Clickhouse#private_access}
  */
  readonly privateAccess?: ClickhouseClickhouseUserConfigPrivateAccess;
  /**
  * privatelink_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#privatelink_access Clickhouse#privatelink_access}
  */
  readonly privatelinkAccess?: ClickhouseClickhouseUserConfigPrivatelinkAccess;
  /**
  * public_access block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#public_access Clickhouse#public_access}
  */
  readonly publicAccess?: ClickhouseClickhouseUserConfigPublicAccess;
}

export function clickhouseClickhouseUserConfigToTerraform(struct?: ClickhouseClickhouseUserConfigOutputReference | ClickhouseClickhouseUserConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_backup_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalBackupRegions),
    backup_hour: cdktf.numberToTerraform(struct!.backupHour),
    backup_minute: cdktf.numberToTerraform(struct!.backupMinute),
    enable_ipv6: cdktf.booleanToTerraform(struct!.enableIpv6),
    ip_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilter),
    ip_filter_string: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipFilterString),
    project_to_fork_from: cdktf.stringToTerraform(struct!.projectToForkFrom),
    recovery_basebackup_name: cdktf.stringToTerraform(struct!.recoveryBasebackupName),
    service_log: cdktf.booleanToTerraform(struct!.serviceLog),
    service_to_fork_from: cdktf.stringToTerraform(struct!.serviceToForkFrom),
    static_ips: cdktf.booleanToTerraform(struct!.staticIps),
    ip_filter_object: cdktf.listMapper(clickhouseClickhouseUserConfigIpFilterObjectToTerraform, true)(struct!.ipFilterObject),
    private_access: clickhouseClickhouseUserConfigPrivateAccessToTerraform(struct!.privateAccess),
    privatelink_access: clickhouseClickhouseUserConfigPrivatelinkAccessToTerraform(struct!.privatelinkAccess),
    public_access: clickhouseClickhouseUserConfigPublicAccessToTerraform(struct!.publicAccess),
  }
}


export function clickhouseClickhouseUserConfigToHclTerraform(struct?: ClickhouseClickhouseUserConfigOutputReference | ClickhouseClickhouseUserConfig): any {
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
      value: cdktf.listMapperHcl(clickhouseClickhouseUserConfigIpFilterObjectToHclTerraform, true)(struct!.ipFilterObject),
      isBlock: true,
      type: "set",
      storageClassType: "ClickhouseClickhouseUserConfigIpFilterObjectList",
    },
    private_access: {
      value: clickhouseClickhouseUserConfigPrivateAccessToHclTerraform(struct!.privateAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClickhouseUserConfigPrivateAccessList",
    },
    privatelink_access: {
      value: clickhouseClickhouseUserConfigPrivatelinkAccessToHclTerraform(struct!.privatelinkAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClickhouseUserConfigPrivatelinkAccessList",
    },
    public_access: {
      value: clickhouseClickhouseUserConfigPublicAccessToHclTerraform(struct!.publicAccess),
      isBlock: true,
      type: "list",
      storageClassType: "ClickhouseClickhouseUserConfigPublicAccessList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClickhouseClickhouseUserConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClickhouseClickhouseUserConfig | undefined {
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

  public set internalValue(value: ClickhouseClickhouseUserConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalBackupRegions = undefined;
      this._backupHour = undefined;
      this._backupMinute = undefined;
      this._enableIpv6 = undefined;
      this._ipFilter = undefined;
      this._ipFilterString = undefined;
      this._projectToForkFrom = undefined;
      this._recoveryBasebackupName = undefined;
      this._serviceLog = undefined;
      this._serviceToForkFrom = undefined;
      this._staticIps = undefined;
      this._ipFilterObject.internalValue = undefined;
      this._privateAccess.internalValue = undefined;
      this._privatelinkAccess.internalValue = undefined;
      this._publicAccess.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalBackupRegions = value.additionalBackupRegions;
      this._backupHour = value.backupHour;
      this._backupMinute = value.backupMinute;
      this._enableIpv6 = value.enableIpv6;
      this._ipFilter = value.ipFilter;
      this._ipFilterString = value.ipFilterString;
      this._projectToForkFrom = value.projectToForkFrom;
      this._recoveryBasebackupName = value.recoveryBasebackupName;
      this._serviceLog = value.serviceLog;
      this._serviceToForkFrom = value.serviceToForkFrom;
      this._staticIps = value.staticIps;
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
  private _ipFilterObject = new ClickhouseClickhouseUserConfigIpFilterObjectList(this, "ip_filter_object", true);
  public get ipFilterObject() {
    return this._ipFilterObject;
  }
  public putIpFilterObject(value: ClickhouseClickhouseUserConfigIpFilterObject[] | cdktf.IResolvable) {
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
  private _privateAccess = new ClickhouseClickhouseUserConfigPrivateAccessOutputReference(this, "private_access");
  public get privateAccess() {
    return this._privateAccess;
  }
  public putPrivateAccess(value: ClickhouseClickhouseUserConfigPrivateAccess) {
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
  private _privatelinkAccess = new ClickhouseClickhouseUserConfigPrivatelinkAccessOutputReference(this, "privatelink_access");
  public get privatelinkAccess() {
    return this._privatelinkAccess;
  }
  public putPrivatelinkAccess(value: ClickhouseClickhouseUserConfigPrivatelinkAccess) {
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
  private _publicAccess = new ClickhouseClickhouseUserConfigPublicAccessOutputReference(this, "public_access");
  public get publicAccess() {
    return this._publicAccess;
  }
  public putPublicAccess(value: ClickhouseClickhouseUserConfigPublicAccess) {
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
export interface ClickhouseServiceIntegrations {
  /**
  * Type of the service integration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#integration_type Clickhouse#integration_type}
  */
  readonly integrationType: string;
  /**
  * Name of the source service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#source_service_name Clickhouse#source_service_name}
  */
  readonly sourceServiceName: string;
}

export function clickhouseServiceIntegrationsToTerraform(struct?: ClickhouseServiceIntegrations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    integration_type: cdktf.stringToTerraform(struct!.integrationType),
    source_service_name: cdktf.stringToTerraform(struct!.sourceServiceName),
  }
}


export function clickhouseServiceIntegrationsToHclTerraform(struct?: ClickhouseServiceIntegrations | cdktf.IResolvable): any {
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

export class ClickhouseServiceIntegrationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseServiceIntegrations | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseServiceIntegrations | cdktf.IResolvable | undefined) {
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

export class ClickhouseServiceIntegrationsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseServiceIntegrations[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseServiceIntegrationsOutputReference {
    return new ClickhouseServiceIntegrationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseTag {
  /**
  * Service tag key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#key Clickhouse#key}
  */
  readonly key: string;
  /**
  * Service tag value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#value Clickhouse#value}
  */
  readonly value: string;
}

export function clickhouseTagToTerraform(struct?: ClickhouseTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clickhouseTagToHclTerraform(struct?: ClickhouseTag | cdktf.IResolvable): any {
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

export class ClickhouseTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseTag | cdktf.IResolvable | undefined) {
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

export class ClickhouseTagList extends cdktf.ComplexList {
  public internalValue? : ClickhouseTag[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseTagOutputReference {
    return new ClickhouseTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseTechEmails {
  /**
  * An email address to contact for technical issues
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#email Clickhouse#email}
  */
  readonly email: string;
}

export function clickhouseTechEmailsToTerraform(struct?: ClickhouseTechEmails | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.stringToTerraform(struct!.email),
  }
}


export function clickhouseTechEmailsToHclTerraform(struct?: ClickhouseTechEmails | cdktf.IResolvable): any {
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

export class ClickhouseTechEmailsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClickhouseTechEmails | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseTechEmails | cdktf.IResolvable | undefined) {
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

export class ClickhouseTechEmailsList extends cdktf.ComplexList {
  public internalValue? : ClickhouseTechEmails[] | cdktf.IResolvable

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
  public get(index: number): ClickhouseTechEmailsOutputReference {
    return new ClickhouseTechEmailsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClickhouseTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#create Clickhouse#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#default Clickhouse#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#delete Clickhouse#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#read Clickhouse#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#update Clickhouse#update}
  */
  readonly update?: string;
}

export function clickhouseTimeoutsToTerraform(struct?: ClickhouseTimeouts | cdktf.IResolvable): any {
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


export function clickhouseTimeoutsToHclTerraform(struct?: ClickhouseTimeouts | cdktf.IResolvable): any {
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

export class ClickhouseTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClickhouseTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClickhouseTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse aiven_clickhouse}
*/
export class Clickhouse extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aiven_clickhouse";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Clickhouse resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Clickhouse to import
  * @param importFromId The id of the existing Clickhouse that should be imported. Refer to the {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Clickhouse to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aiven_clickhouse", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aiven/aiven/4.48.0/docs/resources/clickhouse aiven_clickhouse} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClickhouseConfig
  */
  public constructor(scope: Construct, id: string, config: ClickhouseConfig) {
    super(scope, id, {
      terraformResourceType: 'aiven_clickhouse',
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
    this._clickhouse.internalValue = config.clickhouse;
    this._clickhouseUserConfig.internalValue = config.clickhouseUserConfig;
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
  private _components = new ClickhouseComponentsList(this, "components", false);
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

  // clickhouse - computed: false, optional: true, required: false
  private _clickhouse = new ClickhouseClickhouseOutputReference(this, "clickhouse");
  public get clickhouse() {
    return this._clickhouse;
  }
  public putClickhouse(value: ClickhouseClickhouse) {
    this._clickhouse.internalValue = value;
  }
  public resetClickhouse() {
    this._clickhouse.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseInput() {
    return this._clickhouse.internalValue;
  }

  // clickhouse_user_config - computed: false, optional: true, required: false
  private _clickhouseUserConfig = new ClickhouseClickhouseUserConfigOutputReference(this, "clickhouse_user_config");
  public get clickhouseUserConfig() {
    return this._clickhouseUserConfig;
  }
  public putClickhouseUserConfig(value: ClickhouseClickhouseUserConfig) {
    this._clickhouseUserConfig.internalValue = value;
  }
  public resetClickhouseUserConfig() {
    this._clickhouseUserConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickhouseUserConfigInput() {
    return this._clickhouseUserConfig.internalValue;
  }

  // service_integrations - computed: false, optional: true, required: false
  private _serviceIntegrations = new ClickhouseServiceIntegrationsList(this, "service_integrations", true);
  public get serviceIntegrations() {
    return this._serviceIntegrations;
  }
  public putServiceIntegrations(value: ClickhouseServiceIntegrations[] | cdktf.IResolvable) {
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
  private _tag = new ClickhouseTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: ClickhouseTag[] | cdktf.IResolvable) {
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
  private _techEmails = new ClickhouseTechEmailsList(this, "tech_emails", true);
  public get techEmails() {
    return this._techEmails;
  }
  public putTechEmails(value: ClickhouseTechEmails[] | cdktf.IResolvable) {
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
  private _timeouts = new ClickhouseTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClickhouseTimeouts) {
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
      clickhouse: clickhouseClickhouseToTerraform(this._clickhouse.internalValue),
      clickhouse_user_config: clickhouseClickhouseUserConfigToTerraform(this._clickhouseUserConfig.internalValue),
      service_integrations: cdktf.listMapper(clickhouseServiceIntegrationsToTerraform, true)(this._serviceIntegrations.internalValue),
      tag: cdktf.listMapper(clickhouseTagToTerraform, true)(this._tag.internalValue),
      tech_emails: cdktf.listMapper(clickhouseTechEmailsToTerraform, true)(this._techEmails.internalValue),
      timeouts: clickhouseTimeoutsToTerraform(this._timeouts.internalValue),
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
      clickhouse: {
        value: clickhouseClickhouseToHclTerraform(this._clickhouse.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseClickhouseList",
      },
      clickhouse_user_config: {
        value: clickhouseClickhouseUserConfigToHclTerraform(this._clickhouseUserConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClickhouseClickhouseUserConfigList",
      },
      service_integrations: {
        value: cdktf.listMapperHcl(clickhouseServiceIntegrationsToHclTerraform, true)(this._serviceIntegrations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClickhouseServiceIntegrationsList",
      },
      tag: {
        value: cdktf.listMapperHcl(clickhouseTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClickhouseTagList",
      },
      tech_emails: {
        value: cdktf.listMapperHcl(clickhouseTechEmailsToHclTerraform, true)(this._techEmails.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ClickhouseTechEmailsList",
      },
      timeouts: {
        value: clickhouseTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClickhouseTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
