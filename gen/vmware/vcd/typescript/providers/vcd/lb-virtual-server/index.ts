// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LbVirtualServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Application profile ID to be associated with the virtual server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#app_profile_id LbVirtualServer#app_profile_id}
  */
  readonly appProfileId?: string;
  /**
  * List of attached application rule IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#app_rule_ids LbVirtualServer#app_rule_ids}
  */
  readonly appRuleIds?: string[];
  /**
  * Maximum concurrent connections that the virtual server can process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#connection_limit LbVirtualServer#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Maximum incoming new connection requests per second
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#connection_rate_limit LbVirtualServer#connection_rate_limit}
  */
  readonly connectionRateLimit?: number;
  /**
  * Virtual Server description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#description LbVirtualServer#description}
  */
  readonly description?: string;
  /**
  * Edge gateway name in which the LB Virtual Server is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#edge_gateway LbVirtualServer#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Enable virtual server acceleration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#enable_acceleration LbVirtualServer#enable_acceleration}
  */
  readonly enableAcceleration?: boolean | cdktf.IResolvable;
  /**
  * Defines if the virtual server is enabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#enabled LbVirtualServer#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#id LbVirtualServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP address that the load balancer listens on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#ip_address LbVirtualServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Unique Virtual Server name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#name LbVirtualServer#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#org LbVirtualServer#org}
  */
  readonly org?: string;
  /**
  * Port number that the load balancer listens on
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#port LbVirtualServer#port}
  */
  readonly port: number;
  /**
  * Protocol that the virtual server accepts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#protocol LbVirtualServer#protocol}
  */
  readonly protocol: string;
  /**
  * The server pool that the load balancer will use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#server_pool_id LbVirtualServer#server_pool_id}
  */
  readonly serverPoolId?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#vdc LbVirtualServer#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server vcd_lb_virtual_server}
*/
export class LbVirtualServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_lb_virtual_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LbVirtualServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LbVirtualServer to import
  * @param importFromId The id of the existing LbVirtualServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LbVirtualServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_lb_virtual_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/lb_virtual_server vcd_lb_virtual_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LbVirtualServerConfig
  */
  public constructor(scope: Construct, id: string, config: LbVirtualServerConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_lb_virtual_server',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._appProfileId = config.appProfileId;
    this._appRuleIds = config.appRuleIds;
    this._connectionLimit = config.connectionLimit;
    this._connectionRateLimit = config.connectionRateLimit;
    this._description = config.description;
    this._edgeGateway = config.edgeGateway;
    this._enableAcceleration = config.enableAcceleration;
    this._enabled = config.enabled;
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._name = config.name;
    this._org = config.org;
    this._port = config.port;
    this._protocol = config.protocol;
    this._serverPoolId = config.serverPoolId;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_profile_id - computed: false, optional: true, required: false
  private _appProfileId?: string; 
  public get appProfileId() {
    return this.getStringAttribute('app_profile_id');
  }
  public set appProfileId(value: string) {
    this._appProfileId = value;
  }
  public resetAppProfileId() {
    this._appProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appProfileIdInput() {
    return this._appProfileId;
  }

  // app_rule_ids - computed: false, optional: true, required: false
  private _appRuleIds?: string[]; 
  public get appRuleIds() {
    return this.getListAttribute('app_rule_ids');
  }
  public set appRuleIds(value: string[]) {
    this._appRuleIds = value;
  }
  public resetAppRuleIds() {
    this._appRuleIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appRuleIdsInput() {
    return this._appRuleIds;
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

  // connection_rate_limit - computed: false, optional: true, required: false
  private _connectionRateLimit?: number; 
  public get connectionRateLimit() {
    return this.getNumberAttribute('connection_rate_limit');
  }
  public set connectionRateLimit(value: number) {
    this._connectionRateLimit = value;
  }
  public resetConnectionRateLimit() {
    this._connectionRateLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionRateLimitInput() {
    return this._connectionRateLimit;
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

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
  }

  // enable_acceleration - computed: false, optional: true, required: false
  private _enableAcceleration?: boolean | cdktf.IResolvable; 
  public get enableAcceleration() {
    return this.getBooleanAttribute('enable_acceleration');
  }
  public set enableAcceleration(value: boolean | cdktf.IResolvable) {
    this._enableAcceleration = value;
  }
  public resetEnableAcceleration() {
    this._enableAcceleration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAccelerationInput() {
    return this._enableAcceleration;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // server_pool_id - computed: false, optional: true, required: false
  private _serverPoolId?: string; 
  public get serverPoolId() {
    return this.getStringAttribute('server_pool_id');
  }
  public set serverPoolId(value: string) {
    this._serverPoolId = value;
  }
  public resetServerPoolId() {
    this._serverPoolId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverPoolIdInput() {
    return this._serverPoolId;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_profile_id: cdktf.stringToTerraform(this._appProfileId),
      app_rule_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appRuleIds),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      connection_rate_limit: cdktf.numberToTerraform(this._connectionRateLimit),
      description: cdktf.stringToTerraform(this._description),
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      enable_acceleration: cdktf.booleanToTerraform(this._enableAcceleration),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      server_pool_id: cdktf.stringToTerraform(this._serverPoolId),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_profile_id: {
        value: cdktf.stringToHclTerraform(this._appProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_rule_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appRuleIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connection_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      connection_rate_limit: {
        value: cdktf.numberToHclTerraform(this._connectionRateLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_acceleration: {
        value: cdktf.booleanToHclTerraform(this._enableAcceleration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_pool_id: {
        value: cdktf.stringToHclTerraform(this._serverPoolId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
