// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3IpsecEbpgPeersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#endpoint_id Vns3IpsecEbpgPeers#endpoint_id}
  */
  readonly endpointId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#id Vns3IpsecEbpgPeers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#last_updated Vns3IpsecEbpgPeers#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * ebgp_peer block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#ebgp_peer Vns3IpsecEbpgPeers#ebgp_peer}
  */
  readonly ebgpPeer: Vns3IpsecEbpgPeersEbgpPeer[] | cdktf.IResolvable;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#vns3 Vns3IpsecEbpgPeers#vns3}
  */
  readonly vns3?: Vns3IpsecEbpgPeersVns3;
}
export interface Vns3IpsecEbpgPeersEbgpPeer {
  /**
  * Access Control List. IN PERMIT xxxx / OUT PERMIT xxxx
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#access_list Vns3IpsecEbpgPeers#access_list}
  */
  readonly accessList?: string;
  /**
  * Specifies if we are using network distance weighting, Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#add_network_distance Vns3IpsecEbpgPeers#add_network_distance}
  */
  readonly addNetworkDistance?: boolean | cdktf.IResolvable;
  /**
  * Specifies direction for distance weighting. IN / OUT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#add_network_distance_direction Vns3IpsecEbpgPeers#add_network_distance_direction}
  */
  readonly addNetworkDistanceDirection?: string;
  /**
  * Specifies how many hops for network distance weighting
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#add_network_distance_hops Vns3IpsecEbpgPeers#add_network_distance_hops}
  */
  readonly addNetworkDistanceHops?: number;
  /**
  * Autonomous System Number of your network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#asn Vns3IpsecEbpgPeers#asn}
  */
  readonly asn: number;
  /**
  * Password for BGP, if required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#bgp_password Vns3IpsecEbpgPeers#bgp_password}
  */
  readonly bgpPassword?: string;
  /**
  * IP address or neighbor IP for BGP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#ipaddress Vns3IpsecEbpgPeers#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * ASN alias
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#local_asn_alias Vns3IpsecEbpgPeers#local_asn_alias}
  */
  readonly localAsnAlias?: number;
}

export function vns3IpsecEbpgPeersEbgpPeerToTerraform(struct?: Vns3IpsecEbpgPeersEbgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    add_network_distance: cdktf.booleanToTerraform(struct!.addNetworkDistance),
    add_network_distance_direction: cdktf.stringToTerraform(struct!.addNetworkDistanceDirection),
    add_network_distance_hops: cdktf.numberToTerraform(struct!.addNetworkDistanceHops),
    asn: cdktf.numberToTerraform(struct!.asn),
    bgp_password: cdktf.stringToTerraform(struct!.bgpPassword),
    ipaddress: cdktf.stringToTerraform(struct!.ipaddress),
    local_asn_alias: cdktf.numberToTerraform(struct!.localAsnAlias),
  }
}


export function vns3IpsecEbpgPeersEbgpPeerToHclTerraform(struct?: Vns3IpsecEbpgPeersEbgpPeer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_network_distance: {
      value: cdktf.booleanToHclTerraform(struct!.addNetworkDistance),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    add_network_distance_direction: {
      value: cdktf.stringToHclTerraform(struct!.addNetworkDistanceDirection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    add_network_distance_hops: {
      value: cdktf.numberToHclTerraform(struct!.addNetworkDistanceHops),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    asn: {
      value: cdktf.numberToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bgp_password: {
      value: cdktf.stringToHclTerraform(struct!.bgpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.ipaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_asn_alias: {
      value: cdktf.numberToHclTerraform(struct!.localAsnAlias),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3IpsecEbpgPeersEbgpPeerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Vns3IpsecEbpgPeersEbgpPeer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._addNetworkDistance !== undefined) {
      hasAnyValues = true;
      internalValueResult.addNetworkDistance = this._addNetworkDistance;
    }
    if (this._addNetworkDistanceDirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.addNetworkDistanceDirection = this._addNetworkDistanceDirection;
    }
    if (this._addNetworkDistanceHops !== undefined) {
      hasAnyValues = true;
      internalValueResult.addNetworkDistanceHops = this._addNetworkDistanceHops;
    }
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._bgpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgpPassword = this._bgpPassword;
    }
    if (this._ipaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress;
    }
    if (this._localAsnAlias !== undefined) {
      hasAnyValues = true;
      internalValueResult.localAsnAlias = this._localAsnAlias;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3IpsecEbpgPeersEbgpPeer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._addNetworkDistance = undefined;
      this._addNetworkDistanceDirection = undefined;
      this._addNetworkDistanceHops = undefined;
      this._asn = undefined;
      this._bgpPassword = undefined;
      this._ipaddress = undefined;
      this._localAsnAlias = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._addNetworkDistance = value.addNetworkDistance;
      this._addNetworkDistanceDirection = value.addNetworkDistanceDirection;
      this._addNetworkDistanceHops = value.addNetworkDistanceHops;
      this._asn = value.asn;
      this._bgpPassword = value.bgpPassword;
      this._ipaddress = value.ipaddress;
      this._localAsnAlias = value.localAsnAlias;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // add_network_distance - computed: false, optional: true, required: false
  private _addNetworkDistance?: boolean | cdktf.IResolvable; 
  public get addNetworkDistance() {
    return this.getBooleanAttribute('add_network_distance');
  }
  public set addNetworkDistance(value: boolean | cdktf.IResolvable) {
    this._addNetworkDistance = value;
  }
  public resetAddNetworkDistance() {
    this._addNetworkDistance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNetworkDistanceInput() {
    return this._addNetworkDistance;
  }

  // add_network_distance_direction - computed: false, optional: true, required: false
  private _addNetworkDistanceDirection?: string; 
  public get addNetworkDistanceDirection() {
    return this.getStringAttribute('add_network_distance_direction');
  }
  public set addNetworkDistanceDirection(value: string) {
    this._addNetworkDistanceDirection = value;
  }
  public resetAddNetworkDistanceDirection() {
    this._addNetworkDistanceDirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNetworkDistanceDirectionInput() {
    return this._addNetworkDistanceDirection;
  }

  // add_network_distance_hops - computed: false, optional: true, required: false
  private _addNetworkDistanceHops?: number; 
  public get addNetworkDistanceHops() {
    return this.getNumberAttribute('add_network_distance_hops');
  }
  public set addNetworkDistanceHops(value: number) {
    this._addNetworkDistanceHops = value;
  }
  public resetAddNetworkDistanceHops() {
    this._addNetworkDistanceHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addNetworkDistanceHopsInput() {
    return this._addNetworkDistanceHops;
  }

  // asn - computed: false, optional: false, required: true
  private _asn?: number; 
  public get asn() {
    return this.getNumberAttribute('asn');
  }
  public set asn(value: number) {
    this._asn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // bgp_password - computed: false, optional: true, required: false
  private _bgpPassword?: string; 
  public get bgpPassword() {
    return this.getStringAttribute('bgp_password');
  }
  public set bgpPassword(value: string) {
    this._bgpPassword = value;
  }
  public resetBgpPassword() {
    this._bgpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpPasswordInput() {
    return this._bgpPassword;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipaddress - computed: false, optional: false, required: true
  private _ipaddress?: string; 
  public get ipaddress() {
    return this.getStringAttribute('ipaddress');
  }
  public set ipaddress(value: string) {
    this._ipaddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipaddressInput() {
    return this._ipaddress;
  }

  // local_asn_alias - computed: false, optional: true, required: false
  private _localAsnAlias?: number; 
  public get localAsnAlias() {
    return this.getNumberAttribute('local_asn_alias');
  }
  public set localAsnAlias(value: number) {
    this._localAsnAlias = value;
  }
  public resetLocalAsnAlias() {
    this._localAsnAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localAsnAliasInput() {
    return this._localAsnAlias;
  }
}

export class Vns3IpsecEbpgPeersEbgpPeerList extends cdktf.ComplexList {
  public internalValue? : Vns3IpsecEbpgPeersEbgpPeer[] | cdktf.IResolvable

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
  public get(index: number): Vns3IpsecEbpgPeersEbgpPeerOutputReference {
    return new Vns3IpsecEbpgPeersEbgpPeerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Vns3IpsecEbpgPeersVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#api_token Vns3IpsecEbpgPeers#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#host Vns3IpsecEbpgPeers#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#password Vns3IpsecEbpgPeers#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#timeout Vns3IpsecEbpgPeers#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#username Vns3IpsecEbpgPeers#username}
  */
  readonly username?: string;
}

export function vns3IpsecEbpgPeersVns3ToTerraform(struct?: Vns3IpsecEbpgPeersVns3OutputReference | Vns3IpsecEbpgPeersVns3): any {
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


export function vns3IpsecEbpgPeersVns3ToHclTerraform(struct?: Vns3IpsecEbpgPeersVns3OutputReference | Vns3IpsecEbpgPeersVns3): any {
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

export class Vns3IpsecEbpgPeersVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3IpsecEbpgPeersVns3 | undefined {
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

  public set internalValue(value: Vns3IpsecEbpgPeersVns3 | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers cohesivenet_vns3_ipsec_ebpg_peers}
*/
export class Vns3IpsecEbpgPeers extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_ipsec_ebpg_peers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3IpsecEbpgPeers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3IpsecEbpgPeers to import
  * @param importFromId The id of the existing Vns3IpsecEbpgPeers that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3IpsecEbpgPeers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_ipsec_ebpg_peers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.9/docs/resources/vns3_ipsec_ebpg_peers cohesivenet_vns3_ipsec_ebpg_peers} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3IpsecEbpgPeersConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3IpsecEbpgPeersConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_ipsec_ebpg_peers',
      terraformGeneratorMetadata: {
        providerName: 'cohesivenet',
        providerVersion: '1.0.9',
        providerVersionConstraint: '1.0.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._endpointId = config.endpointId;
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._ebgpPeer.internalValue = config.ebgpPeer;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // endpoint_id - computed: false, optional: true, required: false
  private _endpointId?: number; 
  public get endpointId() {
    return this.getNumberAttribute('endpoint_id');
  }
  public set endpointId(value: number) {
    this._endpointId = value;
  }
  public resetEndpointId() {
    this._endpointId = undefined;
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

  // ebgp_peer - computed: false, optional: false, required: true
  private _ebgpPeer = new Vns3IpsecEbpgPeersEbgpPeerList(this, "ebgp_peer", false);
  public get ebgpPeer() {
    return this._ebgpPeer;
  }
  public putEbgpPeer(value: Vns3IpsecEbpgPeersEbgpPeer[] | cdktf.IResolvable) {
    this._ebgpPeer.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ebgpPeerInput() {
    return this._ebgpPeer.internalValue;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3IpsecEbpgPeersVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3IpsecEbpgPeersVns3) {
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
      endpoint_id: cdktf.numberToTerraform(this._endpointId),
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      ebgp_peer: cdktf.listMapper(vns3IpsecEbpgPeersEbgpPeerToTerraform, true)(this._ebgpPeer.internalValue),
      vns3: vns3IpsecEbpgPeersVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      ebgp_peer: {
        value: cdktf.listMapperHcl(vns3IpsecEbpgPeersEbgpPeerToHclTerraform, true)(this._ebgpPeer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Vns3IpsecEbpgPeersEbgpPeerList",
      },
      vns3: {
        value: vns3IpsecEbpgPeersVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3IpsecEbpgPeersVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
