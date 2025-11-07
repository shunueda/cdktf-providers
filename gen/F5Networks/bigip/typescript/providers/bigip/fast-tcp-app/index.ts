// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FastTcpAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the TCP FAST application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#application FastTcpApp#application}
  */
  readonly application: string;
  /**
  * Select an existing BIG-IP HTTPS pool monitor. Monitors are used to determine the health of the application on each server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#existing_monitor FastTcpApp#existing_monitor}
  */
  readonly existingMonitor?: string;
  /**
  * Select an existing BIG-IP Pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#existing_pool FastTcpApp#existing_pool}
  */
  readonly existingPool?: string;
  /**
  * Name of an existing BIG-IP SNAT pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#existing_snat_pool FastTcpApp#existing_snat_pool}
  */
  readonly existingSnatPool?: string;
  /**
  * Type of fallback persistence record to be created for each new client connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#fallback_persistence FastTcpApp#fallback_persistence}
  */
  readonly fallbackPersistence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#id FastTcpApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * none
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#load_balancing_mode FastTcpApp#load_balancing_mode}
  */
  readonly loadBalancingMode?: string;
  /**
  * Select an existing BIG-IP persistence profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#persistence_profile FastTcpApp#persistence_profile}
  */
  readonly persistenceProfile?: string;
  /**
  * Type of persistence profile to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#persistence_type FastTcpApp#persistence_type}
  */
  readonly persistenceType?: string;
  /**
  * Slow ramp temporarily throttles the number of connections to a new pool member.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#slow_ramp_time FastTcpApp#slow_ramp_time}
  */
  readonly slowRampTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#snat_pool_address FastTcpApp#snat_pool_address}
  */
  readonly snatPoolAddress?: string[];
  /**
  * Name of the TCP FAST application tenant
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#tenant FastTcpApp#tenant}
  */
  readonly tenant: string;
  /**
  * monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#monitor FastTcpApp#monitor}
  */
  readonly monitor?: FastTcpAppMonitor;
  /**
  * pool_members block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#pool_members FastTcpApp#pool_members}
  */
  readonly poolMembers?: FastTcpAppPoolMembers[] | cdktf.IResolvable;
  /**
  * virtual_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#virtual_server FastTcpApp#virtual_server}
  */
  readonly virtualServer?: FastTcpAppVirtualServer;
}
export interface FastTcpAppMonitor {
  /**
  * Set the time between health checks, in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#interval FastTcpApp#interval}
  */
  readonly interval?: number;
}

export function fastTcpAppMonitorToTerraform(struct?: FastTcpAppMonitorOutputReference | FastTcpAppMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}


export function fastTcpAppMonitorToHclTerraform(struct?: FastTcpAppMonitorOutputReference | FastTcpAppMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastTcpAppMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastTcpAppMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastTcpAppMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
    }
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }
}
export interface FastTcpAppPoolMembers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#addresses FastTcpApp#addresses}
  */
  readonly addresses: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#connection_limit FastTcpApp#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#port FastTcpApp#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#priority_group FastTcpApp#priority_group}
  */
  readonly priorityGroup?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#share_nodes FastTcpApp#share_nodes}
  */
  readonly shareNodes?: boolean | cdktf.IResolvable;
}

export function fastTcpAppPoolMembersToTerraform(struct?: FastTcpAppPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
    connection_limit: cdktf.numberToTerraform(struct!.connectionLimit),
    port: cdktf.numberToTerraform(struct!.port),
    priority_group: cdktf.numberToTerraform(struct!.priorityGroup),
    share_nodes: cdktf.booleanToTerraform(struct!.shareNodes),
  }
}


export function fastTcpAppPoolMembersToHclTerraform(struct?: FastTcpAppPoolMembers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    addresses: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.addresses),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    connection_limit: {
      value: cdktf.numberToHclTerraform(struct!.connectionLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_group: {
      value: cdktf.numberToHclTerraform(struct!.priorityGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    share_nodes: {
      value: cdktf.booleanToHclTerraform(struct!.shareNodes),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastTcpAppPoolMembersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): FastTcpAppPoolMembers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    if (this._connectionLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionLimit = this._connectionLimit;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._priorityGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityGroup = this._priorityGroup;
    }
    if (this._shareNodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.shareNodes = this._shareNodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastTcpAppPoolMembers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
      this._connectionLimit = undefined;
      this._port = undefined;
      this._priorityGroup = undefined;
      this._shareNodes = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
      this._connectionLimit = value.connectionLimit;
      this._port = value.port;
      this._priorityGroup = value.priorityGroup;
      this._shareNodes = value.shareNodes;
    }
  }

  // addresses - computed: false, optional: false, required: true
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // priority_group - computed: false, optional: true, required: false
  private _priorityGroup?: number; 
  public get priorityGroup() {
    return this.getNumberAttribute('priority_group');
  }
  public set priorityGroup(value: number) {
    this._priorityGroup = value;
  }
  public resetPriorityGroup() {
    this._priorityGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityGroupInput() {
    return this._priorityGroup;
  }

  // share_nodes - computed: false, optional: true, required: false
  private _shareNodes?: boolean | cdktf.IResolvable; 
  public get shareNodes() {
    return this.getBooleanAttribute('share_nodes');
  }
  public set shareNodes(value: boolean | cdktf.IResolvable) {
    this._shareNodes = value;
  }
  public resetShareNodes() {
    this._shareNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shareNodesInput() {
    return this._shareNodes;
  }
}

export class FastTcpAppPoolMembersList extends cdktf.ComplexList {
  public internalValue? : FastTcpAppPoolMembers[] | cdktf.IResolvable

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
  public get(index: number): FastTcpAppPoolMembersOutputReference {
    return new FastTcpAppPoolMembersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface FastTcpAppVirtualServer {
  /**
  * This IP address, combined with the port you specify below, becomes the BIG-IP virtual server address and port, which clients use to access the application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#ip FastTcpApp#ip}
  */
  readonly ip: string;
  /**
  * Port for the virtual server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#port FastTcpApp#port}
  */
  readonly port: number;
}

export function fastTcpAppVirtualServerToTerraform(struct?: FastTcpAppVirtualServerOutputReference | FastTcpAppVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    port: cdktf.numberToTerraform(struct!.port),
  }
}


export function fastTcpAppVirtualServerToHclTerraform(struct?: FastTcpAppVirtualServerOutputReference | FastTcpAppVirtualServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FastTcpAppVirtualServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FastTcpAppVirtualServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FastTcpAppVirtualServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._port = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._port = value.port;
    }
  }

  // ip - computed: false, optional: false, required: true
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app bigip_fast_tcp_app}
*/
export class FastTcpApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_fast_tcp_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FastTcpApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FastTcpApp to import
  * @param importFromId The id of the existing FastTcpApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FastTcpApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_fast_tcp_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/fast_tcp_app bigip_fast_tcp_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FastTcpAppConfig
  */
  public constructor(scope: Construct, id: string, config: FastTcpAppConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_fast_tcp_app',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._application = config.application;
    this._existingMonitor = config.existingMonitor;
    this._existingPool = config.existingPool;
    this._existingSnatPool = config.existingSnatPool;
    this._fallbackPersistence = config.fallbackPersistence;
    this._id = config.id;
    this._loadBalancingMode = config.loadBalancingMode;
    this._persistenceProfile = config.persistenceProfile;
    this._persistenceType = config.persistenceType;
    this._slowRampTime = config.slowRampTime;
    this._snatPoolAddress = config.snatPoolAddress;
    this._tenant = config.tenant;
    this._monitor.internalValue = config.monitor;
    this._poolMembers.internalValue = config.poolMembers;
    this._virtualServer.internalValue = config.virtualServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application - computed: false, optional: false, required: true
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // existing_monitor - computed: false, optional: true, required: false
  private _existingMonitor?: string; 
  public get existingMonitor() {
    return this.getStringAttribute('existing_monitor');
  }
  public set existingMonitor(value: string) {
    this._existingMonitor = value;
  }
  public resetExistingMonitor() {
    this._existingMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingMonitorInput() {
    return this._existingMonitor;
  }

  // existing_pool - computed: false, optional: true, required: false
  private _existingPool?: string; 
  public get existingPool() {
    return this.getStringAttribute('existing_pool');
  }
  public set existingPool(value: string) {
    this._existingPool = value;
  }
  public resetExistingPool() {
    this._existingPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingPoolInput() {
    return this._existingPool;
  }

  // existing_snat_pool - computed: false, optional: true, required: false
  private _existingSnatPool?: string; 
  public get existingSnatPool() {
    return this.getStringAttribute('existing_snat_pool');
  }
  public set existingSnatPool(value: string) {
    this._existingSnatPool = value;
  }
  public resetExistingSnatPool() {
    this._existingSnatPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get existingSnatPoolInput() {
    return this._existingSnatPool;
  }

  // fallback_persistence - computed: false, optional: true, required: false
  private _fallbackPersistence?: string; 
  public get fallbackPersistence() {
    return this.getStringAttribute('fallback_persistence');
  }
  public set fallbackPersistence(value: string) {
    this._fallbackPersistence = value;
  }
  public resetFallbackPersistence() {
    this._fallbackPersistence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackPersistenceInput() {
    return this._fallbackPersistence;
  }

  // fast_tcp_json - computed: true, optional: false, required: false
  public get fastTcpJson() {
    return this.getStringAttribute('fast_tcp_json');
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

  // load_balancing_mode - computed: false, optional: true, required: false
  private _loadBalancingMode?: string; 
  public get loadBalancingMode() {
    return this.getStringAttribute('load_balancing_mode');
  }
  public set loadBalancingMode(value: string) {
    this._loadBalancingMode = value;
  }
  public resetLoadBalancingMode() {
    this._loadBalancingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancingModeInput() {
    return this._loadBalancingMode;
  }

  // persistence_profile - computed: false, optional: true, required: false
  private _persistenceProfile?: string; 
  public get persistenceProfile() {
    return this.getStringAttribute('persistence_profile');
  }
  public set persistenceProfile(value: string) {
    this._persistenceProfile = value;
  }
  public resetPersistenceProfile() {
    this._persistenceProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfileInput() {
    return this._persistenceProfile;
  }

  // persistence_type - computed: false, optional: true, required: false
  private _persistenceType?: string; 
  public get persistenceType() {
    return this.getStringAttribute('persistence_type');
  }
  public set persistenceType(value: string) {
    this._persistenceType = value;
  }
  public resetPersistenceType() {
    this._persistenceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceTypeInput() {
    return this._persistenceType;
  }

  // slow_ramp_time - computed: false, optional: true, required: false
  private _slowRampTime?: number; 
  public get slowRampTime() {
    return this.getNumberAttribute('slow_ramp_time');
  }
  public set slowRampTime(value: number) {
    this._slowRampTime = value;
  }
  public resetSlowRampTime() {
    this._slowRampTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slowRampTimeInput() {
    return this._slowRampTime;
  }

  // snat_pool_address - computed: false, optional: true, required: false
  private _snatPoolAddress?: string[]; 
  public get snatPoolAddress() {
    return this.getListAttribute('snat_pool_address');
  }
  public set snatPoolAddress(value: string[]) {
    this._snatPoolAddress = value;
  }
  public resetSnatPoolAddress() {
    this._snatPoolAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snatPoolAddressInput() {
    return this._snatPoolAddress;
  }

  // tenant - computed: false, optional: false, required: true
  private _tenant?: string; 
  public get tenant() {
    return this.getStringAttribute('tenant');
  }
  public set tenant(value: string) {
    this._tenant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantInput() {
    return this._tenant;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor = new FastTcpAppMonitorOutputReference(this, "monitor");
  public get monitor() {
    return this._monitor;
  }
  public putMonitor(value: FastTcpAppMonitor) {
    this._monitor.internalValue = value;
  }
  public resetMonitor() {
    this._monitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor.internalValue;
  }

  // pool_members - computed: false, optional: true, required: false
  private _poolMembers = new FastTcpAppPoolMembersList(this, "pool_members", true);
  public get poolMembers() {
    return this._poolMembers;
  }
  public putPoolMembers(value: FastTcpAppPoolMembers[] | cdktf.IResolvable) {
    this._poolMembers.internalValue = value;
  }
  public resetPoolMembers() {
    this._poolMembers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolMembersInput() {
    return this._poolMembers.internalValue;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer = new FastTcpAppVirtualServerOutputReference(this, "virtual_server");
  public get virtualServer() {
    return this._virtualServer;
  }
  public putVirtualServer(value: FastTcpAppVirtualServer) {
    this._virtualServer.internalValue = value;
  }
  public resetVirtualServer() {
    this._virtualServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      existing_monitor: cdktf.stringToTerraform(this._existingMonitor),
      existing_pool: cdktf.stringToTerraform(this._existingPool),
      existing_snat_pool: cdktf.stringToTerraform(this._existingSnatPool),
      fallback_persistence: cdktf.stringToTerraform(this._fallbackPersistence),
      id: cdktf.stringToTerraform(this._id),
      load_balancing_mode: cdktf.stringToTerraform(this._loadBalancingMode),
      persistence_profile: cdktf.stringToTerraform(this._persistenceProfile),
      persistence_type: cdktf.stringToTerraform(this._persistenceType),
      slow_ramp_time: cdktf.numberToTerraform(this._slowRampTime),
      snat_pool_address: cdktf.listMapper(cdktf.stringToTerraform, false)(this._snatPoolAddress),
      tenant: cdktf.stringToTerraform(this._tenant),
      monitor: fastTcpAppMonitorToTerraform(this._monitor.internalValue),
      pool_members: cdktf.listMapper(fastTcpAppPoolMembersToTerraform, true)(this._poolMembers.internalValue),
      virtual_server: fastTcpAppVirtualServerToTerraform(this._virtualServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_monitor: {
        value: cdktf.stringToHclTerraform(this._existingMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_pool: {
        value: cdktf.stringToHclTerraform(this._existingPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      existing_snat_pool: {
        value: cdktf.stringToHclTerraform(this._existingSnatPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fallback_persistence: {
        value: cdktf.stringToHclTerraform(this._fallbackPersistence),
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
      load_balancing_mode: {
        value: cdktf.stringToHclTerraform(this._loadBalancingMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_profile: {
        value: cdktf.stringToHclTerraform(this._persistenceProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      persistence_type: {
        value: cdktf.stringToHclTerraform(this._persistenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slow_ramp_time: {
        value: cdktf.numberToHclTerraform(this._slowRampTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      snat_pool_address: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._snatPoolAddress),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tenant: {
        value: cdktf.stringToHclTerraform(this._tenant),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: fastTcpAppMonitorToHclTerraform(this._monitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastTcpAppMonitorList",
      },
      pool_members: {
        value: cdktf.listMapperHcl(fastTcpAppPoolMembersToHclTerraform, true)(this._poolMembers.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "FastTcpAppPoolMembersList",
      },
      virtual_server: {
        value: fastTcpAppVirtualServerToHclTerraform(this._virtualServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FastTcpAppVirtualServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
