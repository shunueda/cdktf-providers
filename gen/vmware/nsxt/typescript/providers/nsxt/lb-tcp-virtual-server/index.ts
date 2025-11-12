// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbTcpVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether access log is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#access_log_enabled LbTcpVirtualServer#access_log_enabled}
  */
  readonly accessLogEnabled?: boolean | cdktf.IResolvable;
  /**
  * The tcp application profile defines the application protocol characteristics
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#application_profile_id LbTcpVirtualServer#application_profile_id}
  */
  readonly applicationProfileId: string;
  /**
  * Default pool member ports or port range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#default_pool_member_ports LbTcpVirtualServer#default_pool_member_ports}
  */
  readonly defaultPoolMemberPorts?: string[];
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#description LbTcpVirtualServer#description}
  */
  readonly description?: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#display_name LbTcpVirtualServer#display_name}
  */
  readonly displayName?: string;
  /**
  * whether the virtual server is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#enabled LbTcpVirtualServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#id LbTcpVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * virtual server IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#ip_address LbTcpVirtualServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * If not specified, connections are unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#max_concurrent_connections LbTcpVirtualServer#max_concurrent_connections}
  */
  readonly maxConcurrentConnections?: number;
  /**
  * If not specified, connection rate is unlimited
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#max_new_connection_rate LbTcpVirtualServer#max_new_connection_rate}
  */
  readonly maxNewConnectionRate?: number;
  /**
  * Persistence profile is used to allow related client connections to be sent to the same backend server. Source ip persistence is supported.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#persistence_profile_id LbTcpVirtualServer#persistence_profile_id}
  */
  readonly persistenceProfileId?: string;
  /**
  * Server pool for backend connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#pool_id LbTcpVirtualServer#pool_id}
  */
  readonly poolId?: string;
  /**
  * Single port, multiple ports or port ranges
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#ports LbTcpVirtualServer#ports}
  */
  readonly ports: string[];
  /**
  * When load balancer can not select a backend server to serve the request in default pool, the request would be served by sorry server pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#sorry_pool_id LbTcpVirtualServer#sorry_pool_id}
  */
  readonly sorryPoolId?: string;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#tag LbTcpVirtualServer#tag}
  */
  readonly tag?: LbTcpVirtualServerTag[] | cdktf.IResolvable;
}
export interface LbTcpVirtualServerTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#scope LbTcpVirtualServer#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#tag LbTcpVirtualServer#tag}
  */
  readonly tag?: string;
}

export function lbTcpVirtualServerTagToTerraform(struct?: LbTcpVirtualServerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function lbTcpVirtualServerTagToHclTerraform(struct?: LbTcpVirtualServerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LbTcpVirtualServerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LbTcpVirtualServerTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LbTcpVirtualServerTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class LbTcpVirtualServerTagList extends cdktf.ComplexList {
  public internalValue? : LbTcpVirtualServerTag[] | cdktf.IResolvable

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
  public get(index: number): LbTcpVirtualServerTagOutputReference {
    return new LbTcpVirtualServerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server nsxt_lb_tcp_virtual_server}
*/
export class LbTcpVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_lb_tcp_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbTcpVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbTcpVirtualServer to import
  * @param importFromId The id of the existing LbTcpVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbTcpVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_lb_tcp_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/lb_tcp_virtual_server nsxt_lb_tcp_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbTcpVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: LbTcpVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_lb_tcp_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0',
        providerVersionConstraint: '3.10.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessLogEnabled = config.accessLogEnabled;
    this._applicationProfileId = config.applicationProfileId;
    this._defaultPoolMemberPorts = config.defaultPoolMemberPorts;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._maxConcurrentConnections = config.maxConcurrentConnections;
    this._maxNewConnectionRate = config.maxNewConnectionRate;
    this._persistenceProfileId = config.persistenceProfileId;
    this._poolId = config.poolId;
    this._ports = config.ports;
    this._sorryPoolId = config.sorryPoolId;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_log_enabled - computed: false, optional: true, required: false
  private _accessLogEnabled?: boolean | cdktf.IResolvable; 
  public get accessLogEnabled() {
    return this.getBooleanAttribute('access_log_enabled');
  }
  public set accessLogEnabled(value: boolean | cdktf.IResolvable) {
    this._accessLogEnabled = value;
  }
  public resetAccessLogEnabled() {
    this._accessLogEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessLogEnabledInput() {
    return this._accessLogEnabled;
  }

  // application_profile_id - computed: false, optional: false, required: true
  private _applicationProfileId?: string; 
  public get applicationProfileId() {
    return this.getStringAttribute('application_profile_id');
  }
  public set applicationProfileId(value: string) {
    this._applicationProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileIdInput() {
    return this._applicationProfileId;
  }

  // default_pool_member_ports - computed: false, optional: true, required: false
  private _defaultPoolMemberPorts?: string[]; 
  public get defaultPoolMemberPorts() {
    return this.getListAttribute('default_pool_member_ports');
  }
  public set defaultPoolMemberPorts(value: string[]) {
    this._defaultPoolMemberPorts = value;
  }
  public resetDefaultPoolMemberPorts() {
    this._defaultPoolMemberPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPoolMemberPortsInput() {
    return this._defaultPoolMemberPorts;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // max_concurrent_connections - computed: false, optional: true, required: false
  private _maxConcurrentConnections?: number; 
  public get maxConcurrentConnections() {
    return this.getNumberAttribute('max_concurrent_connections');
  }
  public set maxConcurrentConnections(value: number) {
    this._maxConcurrentConnections = value;
  }
  public resetMaxConcurrentConnections() {
    this._maxConcurrentConnections = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentConnectionsInput() {
    return this._maxConcurrentConnections;
  }

  // max_new_connection_rate - computed: false, optional: true, required: false
  private _maxNewConnectionRate?: number; 
  public get maxNewConnectionRate() {
    return this.getNumberAttribute('max_new_connection_rate');
  }
  public set maxNewConnectionRate(value: number) {
    this._maxNewConnectionRate = value;
  }
  public resetMaxNewConnectionRate() {
    this._maxNewConnectionRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxNewConnectionRateInput() {
    return this._maxNewConnectionRate;
  }

  // persistence_profile_id - computed: false, optional: true, required: false
  private _persistenceProfileId?: string; 
  public get persistenceProfileId() {
    return this.getStringAttribute('persistence_profile_id');
  }
  public set persistenceProfileId(value: string) {
    this._persistenceProfileId = value;
  }
  public resetPersistenceProfileId() {
    this._persistenceProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistenceProfileIdInput() {
    return this._persistenceProfileId;
  }

  // pool_id - computed: false, optional: true, required: false
  private _poolId?: string; 
  public get poolId() {
    return this.getStringAttribute('pool_id');
  }
  public set poolId(value: string) {
    this._poolId = value;
  }
  public resetPoolId() {
    this._poolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get poolIdInput() {
    return this._poolId;
  }

  // ports - computed: false, optional: false, required: true
  private _ports?: string[]; 
  public get ports() {
    return this.getListAttribute('ports');
  }
  public set ports(value: string[]) {
    this._ports = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portsInput() {
    return this._ports;
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // sorry_pool_id - computed: false, optional: true, required: false
  private _sorryPoolId?: string; 
  public get sorryPoolId() {
    return this.getStringAttribute('sorry_pool_id');
  }
  public set sorryPoolId(value: string) {
    this._sorryPoolId = value;
  }
  public resetSorryPoolId() {
    this._sorryPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sorryPoolIdInput() {
    return this._sorryPoolId;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LbTcpVirtualServerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LbTcpVirtualServerTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_log_enabled: cdktf.booleanToTerraform(this._accessLogEnabled),
      application_profile_id: cdktf.stringToTerraform(this._applicationProfileId),
      default_pool_member_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._defaultPoolMemberPorts),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      max_concurrent_connections: cdktf.numberToTerraform(this._maxConcurrentConnections),
      max_new_connection_rate: cdktf.numberToTerraform(this._maxNewConnectionRate),
      persistence_profile_id: cdktf.stringToTerraform(this._persistenceProfileId),
      pool_id: cdktf.stringToTerraform(this._poolId),
      ports: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ports),
      sorry_pool_id: cdktf.stringToTerraform(this._sorryPoolId),
      tag: cdktf.listMapper(lbTcpVirtualServerTagToTerraform, true)(this._tag.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_log_enabled: {
        value: cdktf.booleanToHclTerraform(this._accessLogEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      application_profile_id: {
        value: cdktf.stringToHclTerraform(this._applicationProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_pool_member_ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._defaultPoolMemberPorts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_concurrent_connections: {
        value: cdktf.numberToHclTerraform(this._maxConcurrentConnections),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_new_connection_rate: {
        value: cdktf.numberToHclTerraform(this._maxNewConnectionRate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      persistence_profile_id: {
        value: cdktf.stringToHclTerraform(this._persistenceProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pool_id: {
        value: cdktf.stringToHclTerraform(this._poolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ports: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ports),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      sorry_pool_id: {
        value: cdktf.stringToHclTerraform(this._sorryPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.listMapperHcl(lbTcpVirtualServerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LbTcpVirtualServerTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
