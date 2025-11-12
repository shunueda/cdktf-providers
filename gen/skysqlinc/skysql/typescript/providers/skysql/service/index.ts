// https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The list of IP addresses with comments to allow access to the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#allow_list Service#allow_list}
  */
  readonly allowList?: ServiceAllowListStruct[] | cdktf.IResolvable;
  /**
  * The architecture of the service. Valid values are: amd64 or arm64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#architecture Service#architecture}
  */
  readonly architecture?: string;
  /**
  * The availability zone of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#availability_zone Service#availability_zone}
  */
  readonly availabilityZone?: string;
  /**
  * The cloud provider to create the service in. Valid values are: aws or gcp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#cloud_provider Service#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * Whether to enable deletion protection. Valid values are: true or false. Default is true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#deletion_protection Service#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * The list of cloud accounts (aws, azure, or gcp projects) that are allowed to access the service. Works only with `privateconnect` endpoint mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#endpoint_allowed_accounts Service#endpoint_allowed_accounts}
  */
  readonly endpointAllowedAccounts?: string[];
  /**
  * The endpoint mechanism to use. Valid values are: privateconnect or nlb
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#endpoint_mechanism Service#endpoint_mechanism}
  */
  readonly endpointMechanism?: string;
  /**
  * Whether the service is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#is_active Service#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The number of MaxScale nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#maxscale_nodes Service#maxscale_nodes}
  */
  readonly maxscaleNodes?: number;
  /**
  * The size of the MaxScale nodes. Valid values are: sky-2x4, sky-2x8 etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#maxscale_size Service#maxscale_size}
  */
  readonly maxscaleSize?: string;
  /**
  * The name of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * The number of nodes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#nodes Service#nodes}
  */
  readonly nodes?: number;
  /**
  * Whether to enable NoSQL. Valid values are: true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#nosql_enabled Service#nosql_enabled}
  */
  readonly nosqlEnabled?: boolean | cdktf.IResolvable;
  /**
  * The organization ID to use for this service. When specified, all API requests will include the X-MDB-Org header to operate in this organization's context. This allows managing services across multiple organizations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#org_id Service#org_id}
  */
  readonly orgId?: string;
  /**
  * The primary host of the service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#primary_host Service#primary_host}
  */
  readonly primaryHost?: string;
  /**
  * The ID of the project to create the service in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#project_id Service#project_id}
  */
  readonly projectId?: string;
  /**
  * The region to create the service in. Value should be valid for a specific cloud provider
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#region Service#region}
  */
  readonly region: string;
  /**
  * Whether to enable global replication. Valid values are: true or false. Works for xpand-direct topology only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#replication_enabled Service#replication_enabled}
  */
  readonly replicationEnabled?: boolean | cdktf.IResolvable;
  /**
  * The type of service to create. Valid values are: analytical or transactional
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#service_type Service#service_type}
  */
  readonly serviceType: string;
  /**
  * The size of the service. Valid values are: sky-2x4, sky-2x8 etc
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#size Service#size}
  */
  readonly size?: string;
  /**
  * Whether to enable SSL. Valid values are: true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#ssl_enabled Service#ssl_enabled}
  */
  readonly sslEnabled?: boolean | cdktf.IResolvable;
  /**
  * The storage size in GB. Valid values are: 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#storage Service#storage}
  */
  readonly storage?: number;
  /**
  * Tags associated with the service. Note: The API will automatically overwrite 'tags.name' with the service name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#tags Service#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * The topology of the service. Valid values are: es-single, es-replica, xpand, csdw and sa
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#topology Service#topology}
  */
  readonly topology: string;
  /**
  * The software version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#version Service#version}
  */
  readonly version?: string;
  /**
  * The volume IOPS. This is only applicable for AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#volume_iops Service#volume_iops}
  */
  readonly volumeIops?: number;
  /**
  * The volume Throughput. This is only applicable for AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#volume_throughput Service#volume_throughput}
  */
  readonly volumeThroughput?: number;
  /**
  * The volume type. Valid values are: gp3 and io1. This is only applicable for AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#volume_type Service#volume_type}
  */
  readonly volumeType?: string;
  /**
  * Whether to wait for the service to be created. Valid values are: true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#wait_for_creation Service#wait_for_creation}
  */
  readonly waitForCreation?: boolean | cdktf.IResolvable;
  /**
  * Whether to wait for the service to be deleted. Valid values are: true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#wait_for_deletion Service#wait_for_deletion}
  */
  readonly waitForDeletion?: boolean | cdktf.IResolvable;
  /**
  * Whether to wait for the service to be updated. Valid values are: true or false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#wait_for_update Service#wait_for_update}
  */
  readonly waitForUpdate?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#timeouts Service#timeouts}
  */
  readonly timeouts?: ServiceTimeouts;
}
export interface ServiceAllowListStruct {
  /**
  * A comment to describe the IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#comment Service#comment}
  */
  readonly comment?: string;
  /**
  * The IP address to allow access to the service. The IP must be in a valid CIDR format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#ip Service#ip}
  */
  readonly ip: string;
}

export function serviceAllowListStructToTerraform(struct?: ServiceAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comment: cdktf.stringToTerraform(struct!.comment),
    ip: cdktf.stringToTerraform(struct!.ip),
  }
}


export function serviceAllowListStructToHclTerraform(struct?: ServiceAllowListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceAllowListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceAllowListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceAllowListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._comment = undefined;
      this._ip = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._comment = value.comment;
      this._ip = value.ip;
    }
  }

  // comment - computed: true, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ip - computed: true, optional: false, required: true
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }
}

export class ServiceAllowListStructList extends cdktf.ComplexList {
  public internalValue? : ServiceAllowListStruct[] | cdktf.IResolvable

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
  public get(index: number): ServiceAllowListStructOutputReference {
    return new ServiceAllowListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#create Service#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#delete Service#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#update Service#update}
  */
  readonly update?: string;
}

export function serviceTimeoutsToTerraform(struct?: ServiceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function serviceTimeoutsToHclTerraform(struct?: ServiceTimeouts | cdktf.IResolvable): any {
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
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
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

export class ServiceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ServiceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
      this._delete = value.delete;
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
* Represents a {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service skysql_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "skysql_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "skysql_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/skysqlinc/skysql/3.2.0/docs/resources/service skysql_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'skysql_service',
      terraformGeneratorMetadata: {
        providerName: 'skysql',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowList.internalValue = config.allowList;
    this._architecture = config.architecture;
    this._availabilityZone = config.availabilityZone;
    this._cloudProvider = config.cloudProvider;
    this._deletionProtection = config.deletionProtection;
    this._endpointAllowedAccounts = config.endpointAllowedAccounts;
    this._endpointMechanism = config.endpointMechanism;
    this._isActive = config.isActive;
    this._maxscaleNodes = config.maxscaleNodes;
    this._maxscaleSize = config.maxscaleSize;
    this._name = config.name;
    this._nodes = config.nodes;
    this._nosqlEnabled = config.nosqlEnabled;
    this._orgId = config.orgId;
    this._primaryHost = config.primaryHost;
    this._projectId = config.projectId;
    this._region = config.region;
    this._replicationEnabled = config.replicationEnabled;
    this._serviceType = config.serviceType;
    this._size = config.size;
    this._sslEnabled = config.sslEnabled;
    this._storage = config.storage;
    this._tags = config.tags;
    this._topology = config.topology;
    this._version = config.version;
    this._volumeIops = config.volumeIops;
    this._volumeThroughput = config.volumeThroughput;
    this._volumeType = config.volumeType;
    this._waitForCreation = config.waitForCreation;
    this._waitForDeletion = config.waitForDeletion;
    this._waitForUpdate = config.waitForUpdate;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_list - computed: true, optional: true, required: false
  private _allowList = new ServiceAllowListStructList(this, "allow_list", false);
  public get allowList() {
    return this._allowList;
  }
  public putAllowList(value: ServiceAllowListStruct[] | cdktf.IResolvable) {
    this._allowList.internalValue = value;
  }
  public resetAllowList() {
    this._allowList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowListInput() {
    return this._allowList.internalValue;
  }

  // architecture - computed: true, optional: true, required: false
  private _architecture?: string; 
  public get architecture() {
    return this.getStringAttribute('architecture');
  }
  public set architecture(value: string) {
    this._architecture = value;
  }
  public resetArchitecture() {
    this._architecture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architectureInput() {
    return this._architecture;
  }

  // availability_zone - computed: true, optional: true, required: false
  private _availabilityZone?: string; 
  public get availabilityZone() {
    return this.getStringAttribute('availability_zone');
  }
  public set availabilityZone(value: string) {
    this._availabilityZone = value;
  }
  public resetAvailabilityZone() {
    this._availabilityZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get availabilityZoneInput() {
    return this._availabilityZone;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // endpoint_allowed_accounts - computed: true, optional: true, required: false
  private _endpointAllowedAccounts?: string[]; 
  public get endpointAllowedAccounts() {
    return this.getListAttribute('endpoint_allowed_accounts');
  }
  public set endpointAllowedAccounts(value: string[]) {
    this._endpointAllowedAccounts = value;
  }
  public resetEndpointAllowedAccounts() {
    this._endpointAllowedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointAllowedAccountsInput() {
    return this._endpointAllowedAccounts;
  }

  // endpoint_mechanism - computed: true, optional: true, required: false
  private _endpointMechanism?: string; 
  public get endpointMechanism() {
    return this.getStringAttribute('endpoint_mechanism');
  }
  public set endpointMechanism(value: string) {
    this._endpointMechanism = value;
  }
  public resetEndpointMechanism() {
    this._endpointMechanism = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointMechanismInput() {
    return this._endpointMechanism;
  }

  // endpoint_service - computed: true, optional: false, required: false
  public get endpointService() {
    return this.getStringAttribute('endpoint_service');
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
  }

  // maxscale_nodes - computed: false, optional: true, required: false
  private _maxscaleNodes?: number; 
  public get maxscaleNodes() {
    return this.getNumberAttribute('maxscale_nodes');
  }
  public set maxscaleNodes(value: number) {
    this._maxscaleNodes = value;
  }
  public resetMaxscaleNodes() {
    this._maxscaleNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxscaleNodesInput() {
    return this._maxscaleNodes;
  }

  // maxscale_size - computed: false, optional: true, required: false
  private _maxscaleSize?: string; 
  public get maxscaleSize() {
    return this.getStringAttribute('maxscale_size');
  }
  public set maxscaleSize(value: string) {
    this._maxscaleSize = value;
  }
  public resetMaxscaleSize() {
    this._maxscaleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxscaleSizeInput() {
    return this._maxscaleSize;
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

  // nodes - computed: true, optional: true, required: false
  private _nodes?: number; 
  public get nodes() {
    return this.getNumberAttribute('nodes');
  }
  public set nodes(value: number) {
    this._nodes = value;
  }
  public resetNodes() {
    this._nodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes;
  }

  // nosql_enabled - computed: false, optional: true, required: false
  private _nosqlEnabled?: boolean | cdktf.IResolvable; 
  public get nosqlEnabled() {
    return this.getBooleanAttribute('nosql_enabled');
  }
  public set nosqlEnabled(value: boolean | cdktf.IResolvable) {
    this._nosqlEnabled = value;
  }
  public resetNosqlEnabled() {
    this._nosqlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nosqlEnabledInput() {
    return this._nosqlEnabled;
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // primary_host - computed: false, optional: true, required: false
  private _primaryHost?: string; 
  public get primaryHost() {
    return this.getStringAttribute('primary_host');
  }
  public set primaryHost(value: string) {
    this._primaryHost = value;
  }
  public resetPrimaryHost() {
    this._primaryHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryHostInput() {
    return this._primaryHost;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // replication_enabled - computed: false, optional: true, required: false
  private _replicationEnabled?: boolean | cdktf.IResolvable; 
  public get replicationEnabled() {
    return this.getBooleanAttribute('replication_enabled');
  }
  public set replicationEnabled(value: boolean | cdktf.IResolvable) {
    this._replicationEnabled = value;
  }
  public resetReplicationEnabled() {
    this._replicationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationEnabledInput() {
    return this._replicationEnabled;
  }

  // service_type - computed: false, optional: false, required: true
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // size - computed: true, optional: true, required: false
  private _size?: string; 
  public get size() {
    return this.getStringAttribute('size');
  }
  public set size(value: string) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // ssl_enabled - computed: true, optional: true, required: false
  private _sslEnabled?: boolean | cdktf.IResolvable; 
  public get sslEnabled() {
    return this.getBooleanAttribute('ssl_enabled');
  }
  public set sslEnabled(value: boolean | cdktf.IResolvable) {
    this._sslEnabled = value;
  }
  public resetSslEnabled() {
    this._sslEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnabledInput() {
    return this._sslEnabled;
  }

  // storage - computed: true, optional: true, required: false
  private _storage?: number; 
  public get storage() {
    return this.getNumberAttribute('storage');
  }
  public set storage(value: number) {
    this._storage = value;
  }
  public resetStorage() {
    this._storage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // topology - computed: false, optional: false, required: true
  private _topology?: string; 
  public get topology() {
    return this.getStringAttribute('topology');
  }
  public set topology(value: string) {
    this._topology = value;
  }
  // Temporarily expose input value. Use with caution.
  public get topologyInput() {
    return this._topology;
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // volume_iops - computed: false, optional: true, required: false
  private _volumeIops?: number; 
  public get volumeIops() {
    return this.getNumberAttribute('volume_iops');
  }
  public set volumeIops(value: number) {
    this._volumeIops = value;
  }
  public resetVolumeIops() {
    this._volumeIops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeIopsInput() {
    return this._volumeIops;
  }

  // volume_throughput - computed: false, optional: true, required: false
  private _volumeThroughput?: number; 
  public get volumeThroughput() {
    return this.getNumberAttribute('volume_throughput');
  }
  public set volumeThroughput(value: number) {
    this._volumeThroughput = value;
  }
  public resetVolumeThroughput() {
    this._volumeThroughput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeThroughputInput() {
    return this._volumeThroughput;
  }

  // volume_type - computed: true, optional: true, required: false
  private _volumeType?: string; 
  public get volumeType() {
    return this.getStringAttribute('volume_type');
  }
  public set volumeType(value: string) {
    this._volumeType = value;
  }
  public resetVolumeType() {
    this._volumeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeTypeInput() {
    return this._volumeType;
  }

  // wait_for_creation - computed: true, optional: true, required: false
  private _waitForCreation?: boolean | cdktf.IResolvable; 
  public get waitForCreation() {
    return this.getBooleanAttribute('wait_for_creation');
  }
  public set waitForCreation(value: boolean | cdktf.IResolvable) {
    this._waitForCreation = value;
  }
  public resetWaitForCreation() {
    this._waitForCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForCreationInput() {
    return this._waitForCreation;
  }

  // wait_for_deletion - computed: true, optional: true, required: false
  private _waitForDeletion?: boolean | cdktf.IResolvable; 
  public get waitForDeletion() {
    return this.getBooleanAttribute('wait_for_deletion');
  }
  public set waitForDeletion(value: boolean | cdktf.IResolvable) {
    this._waitForDeletion = value;
  }
  public resetWaitForDeletion() {
    this._waitForDeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForDeletionInput() {
    return this._waitForDeletion;
  }

  // wait_for_update - computed: true, optional: true, required: false
  private _waitForUpdate?: boolean | cdktf.IResolvable; 
  public get waitForUpdate() {
    return this.getBooleanAttribute('wait_for_update');
  }
  public set waitForUpdate(value: boolean | cdktf.IResolvable) {
    this._waitForUpdate = value;
  }
  public resetWaitForUpdate() {
    this._waitForUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitForUpdateInput() {
    return this._waitForUpdate;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ServiceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ServiceTimeouts) {
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
      allow_list: cdktf.listMapper(serviceAllowListStructToTerraform, false)(this._allowList.internalValue),
      architecture: cdktf.stringToTerraform(this._architecture),
      availability_zone: cdktf.stringToTerraform(this._availabilityZone),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      endpoint_allowed_accounts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._endpointAllowedAccounts),
      endpoint_mechanism: cdktf.stringToTerraform(this._endpointMechanism),
      is_active: cdktf.booleanToTerraform(this._isActive),
      maxscale_nodes: cdktf.numberToTerraform(this._maxscaleNodes),
      maxscale_size: cdktf.stringToTerraform(this._maxscaleSize),
      name: cdktf.stringToTerraform(this._name),
      nodes: cdktf.numberToTerraform(this._nodes),
      nosql_enabled: cdktf.booleanToTerraform(this._nosqlEnabled),
      org_id: cdktf.stringToTerraform(this._orgId),
      primary_host: cdktf.stringToTerraform(this._primaryHost),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      replication_enabled: cdktf.booleanToTerraform(this._replicationEnabled),
      service_type: cdktf.stringToTerraform(this._serviceType),
      size: cdktf.stringToTerraform(this._size),
      ssl_enabled: cdktf.booleanToTerraform(this._sslEnabled),
      storage: cdktf.numberToTerraform(this._storage),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      topology: cdktf.stringToTerraform(this._topology),
      version: cdktf.stringToTerraform(this._version),
      volume_iops: cdktf.numberToTerraform(this._volumeIops),
      volume_throughput: cdktf.numberToTerraform(this._volumeThroughput),
      volume_type: cdktf.stringToTerraform(this._volumeType),
      wait_for_creation: cdktf.booleanToTerraform(this._waitForCreation),
      wait_for_deletion: cdktf.booleanToTerraform(this._waitForDeletion),
      wait_for_update: cdktf.booleanToTerraform(this._waitForUpdate),
      timeouts: serviceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_list: {
        value: cdktf.listMapperHcl(serviceAllowListStructToHclTerraform, false)(this._allowList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceAllowListStructList",
      },
      architecture: {
        value: cdktf.stringToHclTerraform(this._architecture),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      availability_zone: {
        value: cdktf.stringToHclTerraform(this._availabilityZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      endpoint_allowed_accounts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._endpointAllowedAccounts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      endpoint_mechanism: {
        value: cdktf.stringToHclTerraform(this._endpointMechanism),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      maxscale_nodes: {
        value: cdktf.numberToHclTerraform(this._maxscaleNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxscale_size: {
        value: cdktf.stringToHclTerraform(this._maxscaleSize),
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
      nodes: {
        value: cdktf.numberToHclTerraform(this._nodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nosql_enabled: {
        value: cdktf.booleanToHclTerraform(this._nosqlEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_host: {
        value: cdktf.stringToHclTerraform(this._primaryHost),
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
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replication_enabled: {
        value: cdktf.booleanToHclTerraform(this._replicationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_type: {
        value: cdktf.stringToHclTerraform(this._serviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      size: {
        value: cdktf.stringToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_enabled: {
        value: cdktf.booleanToHclTerraform(this._sslEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      storage: {
        value: cdktf.numberToHclTerraform(this._storage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      topology: {
        value: cdktf.stringToHclTerraform(this._topology),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      volume_iops: {
        value: cdktf.numberToHclTerraform(this._volumeIops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_throughput: {
        value: cdktf.numberToHclTerraform(this._volumeThroughput),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      volume_type: {
        value: cdktf.stringToHclTerraform(this._volumeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_for_creation: {
        value: cdktf.booleanToHclTerraform(this._waitForCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_deletion: {
        value: cdktf.booleanToHclTerraform(this._waitForDeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wait_for_update: {
        value: cdktf.booleanToHclTerraform(this._waitForUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: serviceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ServiceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
