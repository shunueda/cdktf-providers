// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3IpsecTrafficPairConfig extends cdktf.TerraformMetaArguments {
  /**
  * Traffic Pair Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#description Vns3IpsecTrafficPair#description}
  */
  readonly description?: string;
  /**
  * Enable / Disable Traffic Pair 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#enabled Vns3IpsecTrafficPair#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Endpoint ID to associate Trrafic Pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#endpoint_id Vns3IpsecTrafficPair#endpoint_id}
  */
  readonly endpointId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#id Vns3IpsecTrafficPair#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#last_updated Vns3IpsecTrafficPair#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * Local Subnet CIDR of Traffic Pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#local_subnet Vns3IpsecTrafficPair#local_subnet}
  */
  readonly localSubnet?: string;
  /**
  * Keep Alive Ping Interface (eth0/tun0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#ping_interface Vns3IpsecTrafficPair#ping_interface}
  */
  readonly pingInterface?: string;
  /**
  * Interval between Keep Alive Pings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#ping_interval Vns3IpsecTrafficPair#ping_interval}
  */
  readonly pingInterval?: number;
  /**
  * IP Address to Send Keep Alive Pings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#ping_ipaddress Vns3IpsecTrafficPair#ping_ipaddress}
  */
  readonly pingIpaddress?: string;
  /**
  * Remote Subnet CIDR of Traffic Pair
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#remote_subnet Vns3IpsecTrafficPair#remote_subnet}
  */
  readonly remoteSubnet: string;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#vns3 Vns3IpsecTrafficPair#vns3}
  */
  readonly vns3?: Vns3IpsecTrafficPairVns3;
}
export interface Vns3IpsecTrafficPairVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#api_token Vns3IpsecTrafficPair#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#host Vns3IpsecTrafficPair#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#password Vns3IpsecTrafficPair#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#timeout Vns3IpsecTrafficPair#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#username Vns3IpsecTrafficPair#username}
  */
  readonly username?: string;
}

export function vns3IpsecTrafficPairVns3ToTerraform(struct?: Vns3IpsecTrafficPairVns3OutputReference | Vns3IpsecTrafficPairVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_token: cdktf.stringToTerraform(struct!.apiToken),
    host: cdktf.stringToTerraform(struct!.host),
    password: cdktf.stringToTerraform(struct!.password),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function vns3IpsecTrafficPairVns3ToHclTerraform(struct?: Vns3IpsecTrafficPairVns3OutputReference | Vns3IpsecTrafficPairVns3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_token: {
      value: cdktf.stringToHclTerraform(struct!.apiToken),
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
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class Vns3IpsecTrafficPairVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3IpsecTrafficPairVns3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiToken = this._apiToken;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3IpsecTrafficPairVns3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._apiToken = undefined;
      this._host = undefined;
      this._password = undefined;
      this._timeout = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._apiToken = value.apiToken;
      this._host = value.host;
      this._password = value.password;
      this._timeout = value.timeout;
      this._username = value.username;
    }
  }

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
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

/**
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair cohesivenet_vns3_ipsec_traffic_pair}
*/
export class Vns3IpsecTrafficPair extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_ipsec_traffic_pair";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3IpsecTrafficPair resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3IpsecTrafficPair to import
  * @param importFromId The id of the existing Vns3IpsecTrafficPair that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3IpsecTrafficPair to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_ipsec_traffic_pair", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_traffic_pair cohesivenet_vns3_ipsec_traffic_pair} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3IpsecTrafficPairConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3IpsecTrafficPairConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_ipsec_traffic_pair',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._localSubnet = config.localSubnet;
    this._pingInterface = config.pingInterface;
    this._pingInterval = config.pingInterval;
    this._pingIpaddress = config.pingIpaddress;
    this._remoteSubnet = config.remoteSubnet;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // endpoint_id - computed: false, optional: false, required: true
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointIdInput() {
    return this._endpointId;
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

  // ipsec_endpoint_id - computed: true, optional: false, required: false
  public get ipsecEndpointId() {
    return this.getNumberAttribute('ipsec_endpoint_id');
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // local_subnet - computed: true, optional: true, required: false
  private _localSubnet?: string; 
  public get localSubnet() {
    return this.getStringAttribute('local_subnet');
  }
  public set localSubnet(value: string) {
    this._localSubnet = value;
  }
  public resetLocalSubnet() {
    this._localSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetInput() {
    return this._localSubnet;
  }

  // ping_interface - computed: true, optional: true, required: false
  private _pingInterface?: string; 
  public get pingInterface() {
    return this.getStringAttribute('ping_interface');
  }
  public set pingInterface(value: string) {
    this._pingInterface = value;
  }
  public resetPingInterface() {
    this._pingInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingInterfaceInput() {
    return this._pingInterface;
  }

  // ping_interval - computed: true, optional: true, required: false
  private _pingInterval?: number; 
  public get pingInterval() {
    return this.getNumberAttribute('ping_interval');
  }
  public set pingInterval(value: number) {
    this._pingInterval = value;
  }
  public resetPingInterval() {
    this._pingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingIntervalInput() {
    return this._pingInterval;
  }

  // ping_ipaddress - computed: false, optional: true, required: false
  private _pingIpaddress?: string; 
  public get pingIpaddress() {
    return this.getStringAttribute('ping_ipaddress');
  }
  public set pingIpaddress(value: string) {
    this._pingIpaddress = value;
  }
  public resetPingIpaddress() {
    this._pingIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pingIpaddressInput() {
    return this._pingIpaddress;
  }

  // remote_subnet - computed: false, optional: false, required: true
  private _remoteSubnet?: string; 
  public get remoteSubnet() {
    return this.getStringAttribute('remote_subnet');
  }
  public set remoteSubnet(value: string) {
    this._remoteSubnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetInput() {
    return this._remoteSubnet;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3IpsecTrafficPairVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3IpsecTrafficPairVns3) {
    this._vns3.internalValue = value;
  }
  public resetVns3() {
    this._vns3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vns3Input() {
    return this._vns3.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      local_subnet: cdktf.stringToTerraform(this._localSubnet),
      ping_interface: cdktf.stringToTerraform(this._pingInterface),
      ping_interval: cdktf.numberToTerraform(this._pingInterval),
      ping_ipaddress: cdktf.stringToTerraform(this._pingIpaddress),
      remote_subnet: cdktf.stringToTerraform(this._remoteSubnet),
      vns3: vns3IpsecTrafficPairVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      endpoint_id: {
        value: cdktf.numberToHclTerraform(this._endpointId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_subnet: {
        value: cdktf.stringToHclTerraform(this._localSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_interface: {
        value: cdktf.stringToHclTerraform(this._pingInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ping_interval: {
        value: cdktf.numberToHclTerraform(this._pingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ping_ipaddress: {
        value: cdktf.stringToHclTerraform(this._pingIpaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_subnet: {
        value: cdktf.stringToHclTerraform(this._remoteSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vns3: {
        value: vns3IpsecTrafficPairVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3IpsecTrafficPairVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
