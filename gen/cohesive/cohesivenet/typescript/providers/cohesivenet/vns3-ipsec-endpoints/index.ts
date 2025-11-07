// https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Vns3IpsecEndpointsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#id Vns3IpsecEndpoints#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#last_updated Vns3IpsecEndpoints#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * endpoint block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#endpoint Vns3IpsecEndpoints#endpoint}
  */
  readonly endpoint: Vns3IpsecEndpointsEndpoint[] | cdktf.IResolvable;
  /**
  * vns3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#vns3 Vns3IpsecEndpoints#vns3}
  */
  readonly vns3?: Vns3IpsecEndpointsVns3;
}
export interface Vns3IpsecEndpointsEndpoint {
  /**
  * Description of new endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#description Vns3IpsecEndpoints#description}
  */
  readonly description?: string;
  /**
  * IPsec extra parameter settings for auth and encryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#extra_config Vns3IpsecEndpoints#extra_config}
  */
  readonly extraConfig?: string;
  /**
  * IKE version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#ike_version Vns3IpsecEndpoints#ike_version}
  */
  readonly ikeVersion?: number;
  /**
  * IP address or remote device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#ipaddress Vns3IpsecEndpoints#ipaddress}
  */
  readonly ipaddress: string;
  /**
  * Name for new endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#name Vns3IpsecEndpoints#name}
  */
  readonly name: string;
  /**
  * Perfect Forward Secrecy setting. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#nat_t_enabled Vns3IpsecEndpoints#nat_t_enabled}
  */
  readonly natTEnabled?: boolean | cdktf.IResolvable;
  /**
  * Perfect Forward Secrecy setting. Default: false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#pfs Vns3IpsecEndpoints#pfs}
  */
  readonly pfs?: boolean | cdktf.IResolvable;
  /**
  * Remote Peer's IKE ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#private_ipaddress Vns3IpsecEndpoints#private_ipaddress}
  */
  readonly privateIpaddress?: string;
  /**
  * If VTI a /30 address for the virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#route_based_int_address Vns3IpsecEndpoints#route_based_int_address}
  */
  readonly routeBasedIntAddress?: string;
  /**
  * Local subnet of IPsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#route_based_local Vns3IpsecEndpoints#route_based_local}
  */
  readonly routeBasedLocal?: string;
  /**
  * Remote subnet of IPsec tunnel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#route_based_remote Vns3IpsecEndpoints#route_based_remote}
  */
  readonly routeBasedRemote?: string;
  /**
  * Pre-shared key for IPSec connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#secret Vns3IpsecEndpoints#secret}
  */
  readonly secret: string;
  /**
  * Type of VPN connection. VTI or GRE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#vpn_type Vns3IpsecEndpoints#vpn_type}
  */
  readonly vpnType?: string;
}

export function vns3IpsecEndpointsEndpointToTerraform(struct?: Vns3IpsecEndpointsEndpoint | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    extra_config: cdktf.stringToTerraform(struct!.extraConfig),
    ike_version: cdktf.numberToTerraform(struct!.ikeVersion),
    ipaddress: cdktf.stringToTerraform(struct!.ipaddress),
    name: cdktf.stringToTerraform(struct!.name),
    nat_t_enabled: cdktf.booleanToTerraform(struct!.natTEnabled),
    pfs: cdktf.booleanToTerraform(struct!.pfs),
    private_ipaddress: cdktf.stringToTerraform(struct!.privateIpaddress),
    route_based_int_address: cdktf.stringToTerraform(struct!.routeBasedIntAddress),
    route_based_local: cdktf.stringToTerraform(struct!.routeBasedLocal),
    route_based_remote: cdktf.stringToTerraform(struct!.routeBasedRemote),
    secret: cdktf.stringToTerraform(struct!.secret),
    vpn_type: cdktf.stringToTerraform(struct!.vpnType),
  }
}


export function vns3IpsecEndpointsEndpointToHclTerraform(struct?: Vns3IpsecEndpointsEndpoint | cdktf.IResolvable): any {
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
    extra_config: {
      value: cdktf.stringToHclTerraform(struct!.extraConfig),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.numberToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.ipaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nat_t_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.natTEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    pfs: {
      value: cdktf.booleanToHclTerraform(struct!.pfs),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    private_ipaddress: {
      value: cdktf.stringToHclTerraform(struct!.privateIpaddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_based_int_address: {
      value: cdktf.stringToHclTerraform(struct!.routeBasedIntAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_based_local: {
      value: cdktf.stringToHclTerraform(struct!.routeBasedLocal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_based_remote: {
      value: cdktf.stringToHclTerraform(struct!.routeBasedRemote),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret: {
      value: cdktf.stringToHclTerraform(struct!.secret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vpn_type: {
      value: cdktf.stringToHclTerraform(struct!.vpnType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Vns3IpsecEndpointsEndpointOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Vns3IpsecEndpointsEndpoint | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._extraConfig !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraConfig = this._extraConfig;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._ipaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipaddress = this._ipaddress;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._natTEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.natTEnabled = this._natTEnabled;
    }
    if (this._pfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.pfs = this._pfs;
    }
    if (this._privateIpaddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateIpaddress = this._privateIpaddress;
    }
    if (this._routeBasedIntAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeBasedIntAddress = this._routeBasedIntAddress;
    }
    if (this._routeBasedLocal !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeBasedLocal = this._routeBasedLocal;
    }
    if (this._routeBasedRemote !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeBasedRemote = this._routeBasedRemote;
    }
    if (this._secret !== undefined) {
      hasAnyValues = true;
      internalValueResult.secret = this._secret;
    }
    if (this._vpnType !== undefined) {
      hasAnyValues = true;
      internalValueResult.vpnType = this._vpnType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Vns3IpsecEndpointsEndpoint | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._extraConfig = undefined;
      this._ikeVersion = undefined;
      this._ipaddress = undefined;
      this._name = undefined;
      this._natTEnabled = undefined;
      this._pfs = undefined;
      this._privateIpaddress = undefined;
      this._routeBasedIntAddress = undefined;
      this._routeBasedLocal = undefined;
      this._routeBasedRemote = undefined;
      this._secret = undefined;
      this._vpnType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._extraConfig = value.extraConfig;
      this._ikeVersion = value.ikeVersion;
      this._ipaddress = value.ipaddress;
      this._name = value.name;
      this._natTEnabled = value.natTEnabled;
      this._pfs = value.pfs;
      this._privateIpaddress = value.privateIpaddress;
      this._routeBasedIntAddress = value.routeBasedIntAddress;
      this._routeBasedLocal = value.routeBasedLocal;
      this._routeBasedRemote = value.routeBasedRemote;
      this._secret = value.secret;
      this._vpnType = value.vpnType;
    }
  }

  // description - computed: true, optional: true, required: false
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

  // extra_config - computed: false, optional: true, required: false
  private _extraConfig?: string; 
  public get extraConfig() {
    return this.getStringAttribute('extra_config');
  }
  public set extraConfig(value: string) {
    this._extraConfig = value;
  }
  public resetExtraConfig() {
    this._extraConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraConfigInput() {
    return this._extraConfig;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: number; 
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }
  public set ikeVersion(value: number) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
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

  // nat_t_enabled - computed: false, optional: true, required: false
  private _natTEnabled?: boolean | cdktf.IResolvable; 
  public get natTEnabled() {
    return this.getBooleanAttribute('nat_t_enabled');
  }
  public set natTEnabled(value: boolean | cdktf.IResolvable) {
    this._natTEnabled = value;
  }
  public resetNatTEnabled() {
    this._natTEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natTEnabledInput() {
    return this._natTEnabled;
  }

  // pfs - computed: false, optional: true, required: false
  private _pfs?: boolean | cdktf.IResolvable; 
  public get pfs() {
    return this.getBooleanAttribute('pfs');
  }
  public set pfs(value: boolean | cdktf.IResolvable) {
    this._pfs = value;
  }
  public resetPfs() {
    this._pfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pfsInput() {
    return this._pfs;
  }

  // private_ipaddress - computed: false, optional: true, required: false
  private _privateIpaddress?: string; 
  public get privateIpaddress() {
    return this.getStringAttribute('private_ipaddress');
  }
  public set privateIpaddress(value: string) {
    this._privateIpaddress = value;
  }
  public resetPrivateIpaddress() {
    this._privateIpaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateIpaddressInput() {
    return this._privateIpaddress;
  }

  // route_based_int_address - computed: false, optional: true, required: false
  private _routeBasedIntAddress?: string; 
  public get routeBasedIntAddress() {
    return this.getStringAttribute('route_based_int_address');
  }
  public set routeBasedIntAddress(value: string) {
    this._routeBasedIntAddress = value;
  }
  public resetRouteBasedIntAddress() {
    this._routeBasedIntAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeBasedIntAddressInput() {
    return this._routeBasedIntAddress;
  }

  // route_based_local - computed: false, optional: true, required: false
  private _routeBasedLocal?: string; 
  public get routeBasedLocal() {
    return this.getStringAttribute('route_based_local');
  }
  public set routeBasedLocal(value: string) {
    this._routeBasedLocal = value;
  }
  public resetRouteBasedLocal() {
    this._routeBasedLocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeBasedLocalInput() {
    return this._routeBasedLocal;
  }

  // route_based_remote - computed: false, optional: true, required: false
  private _routeBasedRemote?: string; 
  public get routeBasedRemote() {
    return this.getStringAttribute('route_based_remote');
  }
  public set routeBasedRemote(value: string) {
    this._routeBasedRemote = value;
  }
  public resetRouteBasedRemote() {
    this._routeBasedRemote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeBasedRemoteInput() {
    return this._routeBasedRemote;
  }

  // secret - computed: false, optional: false, required: true
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // vpn_type - computed: false, optional: true, required: false
  private _vpnType?: string; 
  public get vpnType() {
    return this.getStringAttribute('vpn_type');
  }
  public set vpnType(value: string) {
    this._vpnType = value;
  }
  public resetVpnType() {
    this._vpnType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnTypeInput() {
    return this._vpnType;
  }
}

export class Vns3IpsecEndpointsEndpointList extends cdktf.ComplexList {
  public internalValue? : Vns3IpsecEndpointsEndpoint[] | cdktf.IResolvable

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
  public get(index: number): Vns3IpsecEndpointsEndpointOutputReference {
    return new Vns3IpsecEndpointsEndpointOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface Vns3IpsecEndpointsVns3 {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#api_token Vns3IpsecEndpoints#api_token}
  */
  readonly apiToken?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#host Vns3IpsecEndpoints#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#password Vns3IpsecEndpoints#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#timeout Vns3IpsecEndpoints#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#username Vns3IpsecEndpoints#username}
  */
  readonly username?: string;
}

export function vns3IpsecEndpointsVns3ToTerraform(struct?: Vns3IpsecEndpointsVns3OutputReference | Vns3IpsecEndpointsVns3): any {
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


export function vns3IpsecEndpointsVns3ToHclTerraform(struct?: Vns3IpsecEndpointsVns3OutputReference | Vns3IpsecEndpointsVns3): any {
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

export class Vns3IpsecEndpointsVns3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): Vns3IpsecEndpointsVns3 | undefined {
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

  public set internalValue(value: Vns3IpsecEndpointsVns3 | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints cohesivenet_vns3_ipsec_endpoints}
*/
export class Vns3IpsecEndpoints extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cohesivenet_vns3_ipsec_endpoints";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vns3IpsecEndpoints resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vns3IpsecEndpoints to import
  * @param importFromId The id of the existing Vns3IpsecEndpoints that should be imported. Refer to the {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vns3IpsecEndpoints to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cohesivenet_vns3_ipsec_endpoints", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cohesive/cohesivenet/1.0.8/docs/resources/vns3_ipsec_endpoints cohesivenet_vns3_ipsec_endpoints} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Vns3IpsecEndpointsConfig
  */
  public constructor(scope: Construct, id: string, config: Vns3IpsecEndpointsConfig) {
    super(scope, id, {
      terraformResourceType: 'cohesivenet_vns3_ipsec_endpoints',
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
    this._id = config.id;
    this._lastUpdated = config.lastUpdated;
    this._endpoint.internalValue = config.endpoint;
    this._vns3.internalValue = config.vns3;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // endpoint - computed: false, optional: false, required: true
  private _endpoint = new Vns3IpsecEndpointsEndpointList(this, "endpoint", false);
  public get endpoint() {
    return this._endpoint;
  }
  public putEndpoint(value: Vns3IpsecEndpointsEndpoint[] | cdktf.IResolvable) {
    this._endpoint.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint.internalValue;
  }

  // vns3 - computed: false, optional: true, required: false
  private _vns3 = new Vns3IpsecEndpointsVns3OutputReference(this, "vns3");
  public get vns3() {
    return this._vns3;
  }
  public putVns3(value: Vns3IpsecEndpointsVns3) {
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
      id: cdktf.stringToTerraform(this._id),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      endpoint: cdktf.listMapper(vns3IpsecEndpointsEndpointToTerraform, true)(this._endpoint.internalValue),
      vns3: vns3IpsecEndpointsVns3ToTerraform(this._vns3.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      endpoint: {
        value: cdktf.listMapperHcl(vns3IpsecEndpointsEndpointToHclTerraform, true)(this._endpoint.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Vns3IpsecEndpointsEndpointList",
      },
      vns3: {
        value: vns3IpsecEndpointsVns3ToHclTerraform(this._vns3.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "Vns3IpsecEndpointsVns3List",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
