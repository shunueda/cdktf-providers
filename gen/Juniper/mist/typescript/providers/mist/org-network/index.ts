// https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to disallow Mist Devices in the network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#disallow_mist_services OrgNetwork#disallow_mist_services}
  */
  readonly disallowMistServices?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#gateway OrgNetwork#gateway}
  */
  readonly gateway?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#gateway6 OrgNetwork#gateway6}
  */
  readonly gateway6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#internal_access OrgNetwork#internal_access}
  */
  readonly internalAccess?: OrgNetworkInternalAccess;
  /**
  * Whether this network has direct internet access
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#internet_access OrgNetwork#internet_access}
  */
  readonly internetAccess?: OrgNetworkInternetAccess;
  /**
  * Whether to allow clients in the network to talk to each other
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#isolation OrgNetwork#isolation}
  */
  readonly isolation?: boolean | cdktf.IResolvable;
  /**
  * Whether to enable multicast support (only PIM-sparse mode is supported)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#multicast OrgNetwork#multicast}
  */
  readonly multicast?: OrgNetworkMulticast;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#name OrgNetwork#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#org_id OrgNetwork#org_id}
  */
  readonly orgId: string;
  /**
  * For a Network (usually LAN), it can be routable to other networks (e.g. OSPF)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#routed_for_networks OrgNetwork#routed_for_networks}
  */
  readonly routedForNetworks?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#subnet OrgNetwork#subnet}
  */
  readonly subnet: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#subnet6 OrgNetwork#subnet6}
  */
  readonly subnet6?: string;
  /**
  * Property key must be the user/tenant name (i.e. "printer-1") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#tenants OrgNetwork#tenants}
  */
  readonly tenants?: { [key: string]: OrgNetworkTenants } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#vlan_id OrgNetwork#vlan_id}
  */
  readonly vlanId?: string;
  /**
  * Property key is the VPN name. Whether this network can be accessed from vpn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#vpn_access OrgNetwork#vpn_access}
  */
  readonly vpnAccess?: { [key: string]: OrgNetworkVpnAccess } | cdktf.IResolvable;
}
export interface OrgNetworkInternalAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#enabled OrgNetwork#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function orgNetworkInternalAccessToTerraform(struct?: OrgNetworkInternalAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function orgNetworkInternalAccessToHclTerraform(struct?: OrgNetworkInternalAccess | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkInternalAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgNetworkInternalAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkInternalAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
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
}
export interface OrgNetworkInternetAccessDestinationNat {
  /**
  * The Destination NAT destination IP Address. Must be an IP (i.e. "192.168.70.30") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#internal_ip OrgNetwork#internal_ip}
  */
  readonly internalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#name OrgNetwork#name}
  */
  readonly name?: string;
  /**
  * The Destination NAT destination IP Address. Must be a Port (i.e. "443") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#port OrgNetwork#port}
  */
  readonly port?: string;
  /**
  * SRX Only. If not set, we configure the nat policies against all WAN ports for simplicity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#wan_name OrgNetwork#wan_name}
  */
  readonly wanName?: string;
}

export function orgNetworkInternetAccessDestinationNatToTerraform(struct?: OrgNetworkInternetAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
    wan_name: cdktf.stringToTerraform(struct!.wanName),
  }
}


export function orgNetworkInternetAccessDestinationNatToHclTerraform(struct?: OrgNetworkInternetAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    wan_name: {
      value: cdktf.stringToHclTerraform(struct!.wanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkInternetAccessDestinationNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkInternetAccessDestinationNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._wanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanName = this._wanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkInternetAccessDestinationNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
      this._port = undefined;
      this._wanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
      this._port = value.port;
      this._wanName = value.wanName;
    }
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }
}

export class OrgNetworkInternetAccessDestinationNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkInternetAccessDestinationNat } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkInternetAccessDestinationNatOutputReference {
    return new OrgNetworkInternetAccessDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgNetworkInternetAccessStaticNat {
  /**
  * The Static NAT destination IP Address. Must be an IP Address (i.e. "192.168.70.3") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#internal_ip OrgNetwork#internal_ip}
  */
  readonly internalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#name OrgNetwork#name}
  */
  readonly name: string;
  /**
  * SRX Only. If not set, we configure the nat policies against all WAN ports for simplicity. Can be a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#wan_name OrgNetwork#wan_name}
  */
  readonly wanName?: string;
}

export function orgNetworkInternetAccessStaticNatToTerraform(struct?: OrgNetworkInternetAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
    wan_name: cdktf.stringToTerraform(struct!.wanName),
  }
}


export function orgNetworkInternetAccessStaticNatToHclTerraform(struct?: OrgNetworkInternetAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
    wan_name: {
      value: cdktf.stringToHclTerraform(struct!.wanName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkInternetAccessStaticNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkInternetAccessStaticNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._wanName !== undefined) {
      hasAnyValues = true;
      internalValueResult.wanName = this._wanName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkInternetAccessStaticNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
      this._wanName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
      this._wanName = value.wanName;
    }
  }

  // internal_ip - computed: false, optional: false, required: true
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
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

  // wan_name - computed: false, optional: true, required: false
  private _wanName?: string; 
  public get wanName() {
    return this.getStringAttribute('wan_name');
  }
  public set wanName(value: string) {
    this._wanName = value;
  }
  public resetWanName() {
    this._wanName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanNameInput() {
    return this._wanName;
  }
}

export class OrgNetworkInternetAccessStaticNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkInternetAccessStaticNat } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkInternetAccessStaticNatOutputReference {
    return new OrgNetworkInternetAccessStaticNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgNetworkInternetAccess {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#create_simple_service_policy OrgNetwork#create_simple_service_policy}
  */
  readonly createSimpleServicePolicy?: boolean | cdktf.IResolvable;
  /**
  * Property key can be an External IP (i.e. "63.16.0.3"), an External IP:Port (i.e. "63.16.0.3:443"), an External Port (i.e. ":443"), an External CIDR (i.e. "63.16.0.0/30"), an External CIDR:Port (i.e. "63.16.0.0/30:443") or a Variable (i.e. "{{myvar}}"). At least one of the `internal_ip` or `port` must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#destination_nat OrgNetwork#destination_nat}
  */
  readonly destinationNat?: { [key: string]: OrgNetworkInternetAccessDestinationNat } | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#enabled OrgNetwork#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * By default, all access is allowed, to only allow certain traffic, make `restricted`=`true` and define service_policies
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#restricted OrgNetwork#restricted}
  */
  readonly restricted?: boolean | cdktf.IResolvable;
  /**
  * Property key may be an External IP Address (i.e. "63.16.0.3"), a CIDR (i.e. "63.16.0.12/20") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#static_nat OrgNetwork#static_nat}
  */
  readonly staticNat?: { [key: string]: OrgNetworkInternetAccessStaticNat } | cdktf.IResolvable;
}

export function orgNetworkInternetAccessToTerraform(struct?: OrgNetworkInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_simple_service_policy: cdktf.booleanToTerraform(struct!.createSimpleServicePolicy),
    destination_nat: cdktf.hashMapper(orgNetworkInternetAccessDestinationNatToTerraform)(struct!.destinationNat),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    restricted: cdktf.booleanToTerraform(struct!.restricted),
    static_nat: cdktf.hashMapper(orgNetworkInternetAccessStaticNatToTerraform)(struct!.staticNat),
  }
}


export function orgNetworkInternetAccessToHclTerraform(struct?: OrgNetworkInternetAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_simple_service_policy: {
      value: cdktf.booleanToHclTerraform(struct!.createSimpleServicePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_nat: {
      value: cdktf.hashMapperHcl(orgNetworkInternetAccessDestinationNatToHclTerraform)(struct!.destinationNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgNetworkInternetAccessDestinationNatMap",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    restricted: {
      value: cdktf.booleanToHclTerraform(struct!.restricted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    static_nat: {
      value: cdktf.hashMapperHcl(orgNetworkInternetAccessStaticNatToHclTerraform)(struct!.staticNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgNetworkInternetAccessStaticNatMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkInternetAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgNetworkInternetAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createSimpleServicePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createSimpleServicePolicy = this._createSimpleServicePolicy;
    }
    if (this._destinationNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNat = this._destinationNat?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._restricted !== undefined) {
      hasAnyValues = true;
      internalValueResult.restricted = this._restricted;
    }
    if (this._staticNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNat = this._staticNat?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkInternetAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createSimpleServicePolicy = undefined;
      this._destinationNat.internalValue = undefined;
      this._enabled = undefined;
      this._restricted = undefined;
      this._staticNat.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createSimpleServicePolicy = value.createSimpleServicePolicy;
      this._destinationNat.internalValue = value.destinationNat;
      this._enabled = value.enabled;
      this._restricted = value.restricted;
      this._staticNat.internalValue = value.staticNat;
    }
  }

  // create_simple_service_policy - computed: true, optional: true, required: false
  private _createSimpleServicePolicy?: boolean | cdktf.IResolvable; 
  public get createSimpleServicePolicy() {
    return this.getBooleanAttribute('create_simple_service_policy');
  }
  public set createSimpleServicePolicy(value: boolean | cdktf.IResolvable) {
    this._createSimpleServicePolicy = value;
  }
  public resetCreateSimpleServicePolicy() {
    this._createSimpleServicePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSimpleServicePolicyInput() {
    return this._createSimpleServicePolicy;
  }

  // destination_nat - computed: false, optional: true, required: false
  private _destinationNat = new OrgNetworkInternetAccessDestinationNatMap(this, "destination_nat");
  public get destinationNat() {
    return this._destinationNat;
  }
  public putDestinationNat(value: { [key: string]: OrgNetworkInternetAccessDestinationNat } | cdktf.IResolvable) {
    this._destinationNat.internalValue = value;
  }
  public resetDestinationNat() {
    this._destinationNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNatInput() {
    return this._destinationNat.internalValue;
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

  // restricted - computed: true, optional: true, required: false
  private _restricted?: boolean | cdktf.IResolvable; 
  public get restricted() {
    return this.getBooleanAttribute('restricted');
  }
  public set restricted(value: boolean | cdktf.IResolvable) {
    this._restricted = value;
  }
  public resetRestricted() {
    this._restricted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restrictedInput() {
    return this._restricted;
  }

  // static_nat - computed: false, optional: true, required: false
  private _staticNat = new OrgNetworkInternetAccessStaticNatMap(this, "static_nat");
  public get staticNat() {
    return this._staticNat;
  }
  public putStaticNat(value: { [key: string]: OrgNetworkInternetAccessStaticNat } | cdktf.IResolvable) {
    this._staticNat.internalValue = value;
  }
  public resetStaticNat() {
    this._staticNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat.internalValue;
  }
}
export interface OrgNetworkMulticastGroups {
  /**
  * RP (rendezvous point) IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#rp_ip OrgNetwork#rp_ip}
  */
  readonly rpIp?: string;
}

export function orgNetworkMulticastGroupsToTerraform(struct?: OrgNetworkMulticastGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rp_ip: cdktf.stringToTerraform(struct!.rpIp),
  }
}


export function orgNetworkMulticastGroupsToHclTerraform(struct?: OrgNetworkMulticastGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rp_ip: {
      value: cdktf.stringToHclTerraform(struct!.rpIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkMulticastGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkMulticastGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rpIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpIp = this._rpIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkMulticastGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._rpIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._rpIp = value.rpIp;
    }
  }

  // rp_ip - computed: false, optional: true, required: false
  private _rpIp?: string; 
  public get rpIp() {
    return this.getStringAttribute('rp_ip');
  }
  public set rpIp(value: string) {
    this._rpIp = value;
  }
  public resetRpIp() {
    this._rpIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpIpInput() {
    return this._rpIp;
  }
}

export class OrgNetworkMulticastGroupsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkMulticastGroups } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkMulticastGroupsOutputReference {
    return new OrgNetworkMulticastGroupsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgNetworkMulticast {
  /**
  * If the network will only be the source of the multicast traffic, IGMP can be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#disable_igmp OrgNetwork#disable_igmp}
  */
  readonly disableIgmp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#enabled OrgNetwork#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Group address to RP (rendezvous point) mapping. Property Key is the CIDR (example "225.1.0.3/32")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#groups OrgNetwork#groups}
  */
  readonly groups?: { [key: string]: OrgNetworkMulticastGroups } | cdktf.IResolvable;
}

export function orgNetworkMulticastToTerraform(struct?: OrgNetworkMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_igmp: cdktf.booleanToTerraform(struct!.disableIgmp),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    groups: cdktf.hashMapper(orgNetworkMulticastGroupsToTerraform)(struct!.groups),
  }
}


export function orgNetworkMulticastToHclTerraform(struct?: OrgNetworkMulticast | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_igmp: {
      value: cdktf.booleanToHclTerraform(struct!.disableIgmp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups: {
      value: cdktf.hashMapperHcl(orgNetworkMulticastGroupsToHclTerraform)(struct!.groups),
      isBlock: true,
      type: "map",
      storageClassType: "OrgNetworkMulticastGroupsMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkMulticastOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgNetworkMulticast | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableIgmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableIgmp = this._disableIgmp;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkMulticast | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disableIgmp = undefined;
      this._enabled = undefined;
      this._groups.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disableIgmp = value.disableIgmp;
      this._enabled = value.enabled;
      this._groups.internalValue = value.groups;
    }
  }

  // disable_igmp - computed: true, optional: true, required: false
  private _disableIgmp?: boolean | cdktf.IResolvable; 
  public get disableIgmp() {
    return this.getBooleanAttribute('disable_igmp');
  }
  public set disableIgmp(value: boolean | cdktf.IResolvable) {
    this._disableIgmp = value;
  }
  public resetDisableIgmp() {
    this._disableIgmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableIgmpInput() {
    return this._disableIgmp;
  }

  // enabled - computed: true, optional: true, required: false
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

  // groups - computed: false, optional: true, required: false
  private _groups = new OrgNetworkMulticastGroupsMap(this, "groups");
  public get groups() {
    return this._groups;
  }
  public putGroups(value: { [key: string]: OrgNetworkMulticastGroups } | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }
}
export interface OrgNetworkTenants {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#addresses OrgNetwork#addresses}
  */
  readonly addresses?: string[];
}

export function orgNetworkTenantsToTerraform(struct?: OrgNetworkTenants | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.addresses),
  }
}


export function orgNetworkTenantsToHclTerraform(struct?: OrgNetworkTenants | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkTenantsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkTenants | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addresses !== undefined) {
      hasAnyValues = true;
      internalValueResult.addresses = this._addresses;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkTenants | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addresses = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addresses = value.addresses;
    }
  }

  // addresses - computed: false, optional: true, required: false
  private _addresses?: string[]; 
  public get addresses() {
    return this.getListAttribute('addresses');
  }
  public set addresses(value: string[]) {
    this._addresses = value;
  }
  public resetAddresses() {
    this._addresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressesInput() {
    return this._addresses;
  }
}

export class OrgNetworkTenantsMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkTenants } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkTenantsOutputReference {
    return new OrgNetworkTenantsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgNetworkVpnAccessDestinationNat {
  /**
  * The Destination NAT destination IP Address. Must be an IP (i.e. "192.168.70.30") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#internal_ip OrgNetwork#internal_ip}
  */
  readonly internalIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#name OrgNetwork#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#port OrgNetwork#port}
  */
  readonly port?: string;
}

export function orgNetworkVpnAccessDestinationNatToTerraform(struct?: OrgNetworkVpnAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
    port: cdktf.stringToTerraform(struct!.port),
  }
}


export function orgNetworkVpnAccessDestinationNatToHclTerraform(struct?: OrgNetworkVpnAccessDestinationNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
    port: {
      value: cdktf.stringToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkVpnAccessDestinationNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkVpnAccessDestinationNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkVpnAccessDestinationNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
      this._port = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
      this._port = value.port;
    }
  }

  // internal_ip - computed: false, optional: true, required: false
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  public resetInternalIp() {
    this._internalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }
}

export class OrgNetworkVpnAccessDestinationNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkVpnAccessDestinationNat } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkVpnAccessDestinationNatOutputReference {
    return new OrgNetworkVpnAccessDestinationNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgNetworkVpnAccessSourceNat {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#external_ip OrgNetwork#external_ip}
  */
  readonly externalIp?: string;
}

export function orgNetworkVpnAccessSourceNatToTerraform(struct?: OrgNetworkVpnAccessSourceNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ip: cdktf.stringToTerraform(struct!.externalIp),
  }
}


export function orgNetworkVpnAccessSourceNatToHclTerraform(struct?: OrgNetworkVpnAccessSourceNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkVpnAccessSourceNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OrgNetworkVpnAccessSourceNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkVpnAccessSourceNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
    }
  }

  // external_ip - computed: true, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }
}
export interface OrgNetworkVpnAccessStaticNat {
  /**
  * The Static NAT destination IP Address. Must be an IP Address (i.e. "192.168.70.3") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#internal_ip OrgNetwork#internal_ip}
  */
  readonly internalIp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#name OrgNetwork#name}
  */
  readonly name: string;
}

export function orgNetworkVpnAccessStaticNatToTerraform(struct?: OrgNetworkVpnAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    internal_ip: cdktf.stringToTerraform(struct!.internalIp),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function orgNetworkVpnAccessStaticNatToHclTerraform(struct?: OrgNetworkVpnAccessStaticNat | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    internal_ip: {
      value: cdktf.stringToHclTerraform(struct!.internalIp),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkVpnAccessStaticNatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkVpnAccessStaticNat | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._internalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.internalIp = this._internalIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkVpnAccessStaticNat | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._internalIp = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._internalIp = value.internalIp;
      this._name = value.name;
    }
  }

  // internal_ip - computed: true, optional: false, required: true
  private _internalIp?: string; 
  public get internalIp() {
    return this.getStringAttribute('internal_ip');
  }
  public set internalIp(value: string) {
    this._internalIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get internalIpInput() {
    return this._internalIp;
  }

  // name - computed: true, optional: false, required: true
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
}

export class OrgNetworkVpnAccessStaticNatMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkVpnAccessStaticNat } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkVpnAccessStaticNatOutputReference {
    return new OrgNetworkVpnAccessStaticNatOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}
export interface OrgNetworkVpnAccess {
  /**
  * If `routed`==`true`, whether to advertise an aggregated subnet toward HUB this is useful when there are multiple networks on SPOKE's side
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#advertised_subnet OrgNetwork#advertised_subnet}
  */
  readonly advertisedSubnet?: string;
  /**
  * Whether to allow ping from vpn into this routed network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#allow_ping OrgNetwork#allow_ping}
  */
  readonly allowPing?: boolean | cdktf.IResolvable;
  /**
  * Property key can be an External IP (i.e. "63.16.0.3"), an External IP:Port (i.e. "63.16.0.3:443"), an External Port (i.e. ":443"), an External CIDR (i.e. "63.16.0.0/30"), an External CIDR:Port (i.e. "63.16.0.0/30:443") or a Variable (i.e. "{{myvar}}"). At least one of the `internal_ip` or `port` must be defined
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#destination_nat OrgNetwork#destination_nat}
  */
  readonly destinationNat?: { [key: string]: OrgNetworkVpnAccessDestinationNat } | cdktf.IResolvable;
  /**
  * If `routed`==`false` (usually at Spoke), but some hosts needs to be reachable from Hub, a subnet is required to create and advertise the route to Hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#nat_pool OrgNetwork#nat_pool}
  */
  readonly natPool?: string;
  /**
  * toward LAN-side BGP peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#no_readvertise_to_lan_bgp OrgNetwork#no_readvertise_to_lan_bgp}
  */
  readonly noReadvertiseToLanBgp?: boolean | cdktf.IResolvable;
  /**
  * toward LAN-side OSPF peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#no_readvertise_to_lan_ospf OrgNetwork#no_readvertise_to_lan_ospf}
  */
  readonly noReadvertiseToLanOspf?: boolean | cdktf.IResolvable;
  /**
  * toward overlay, how HUB should deal with routes it received from Spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#no_readvertise_to_overlay OrgNetwork#no_readvertise_to_overlay}
  */
  readonly noReadvertiseToOverlay?: boolean | cdktf.IResolvable;
  /**
  * By default, the routes are only readvertised toward the same vrf on spoke. To allow it to be leaked to other vrfs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#other_vrfs OrgNetwork#other_vrfs}
  */
  readonly otherVrfs?: string[];
  /**
  * Whether this network is routable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#routed OrgNetwork#routed}
  */
  readonly routed?: boolean | cdktf.IResolvable;
  /**
  * If `routed`==`false` (usually at Spoke), but some hosts needs to be reachable from Hub
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#source_nat OrgNetwork#source_nat}
  */
  readonly sourceNat?: OrgNetworkVpnAccessSourceNat;
  /**
  * Property key may be an External IP Address (i.e. "63.16.0.3"), a CIDR (i.e. "63.16.0.12/20") or a Variable (i.e. "{{myvar}}")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#static_nat OrgNetwork#static_nat}
  */
  readonly staticNat?: { [key: string]: OrgNetworkVpnAccessStaticNat } | cdktf.IResolvable;
  /**
  * toward overlay, how HUB should deal with routes it received from Spokes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#summarized_subnet OrgNetwork#summarized_subnet}
  */
  readonly summarizedSubnet?: string;
  /**
  * toward LAN-side BGP peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#summarized_subnet_to_lan_bgp OrgNetwork#summarized_subnet_to_lan_bgp}
  */
  readonly summarizedSubnetToLanBgp?: string;
  /**
  * toward LAN-side OSPF peers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#summarized_subnet_to_lan_ospf OrgNetwork#summarized_subnet_to_lan_ospf}
  */
  readonly summarizedSubnetToLanOspf?: string;
}

export function orgNetworkVpnAccessToTerraform(struct?: OrgNetworkVpnAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertised_subnet: cdktf.stringToTerraform(struct!.advertisedSubnet),
    allow_ping: cdktf.booleanToTerraform(struct!.allowPing),
    destination_nat: cdktf.hashMapper(orgNetworkVpnAccessDestinationNatToTerraform)(struct!.destinationNat),
    nat_pool: cdktf.stringToTerraform(struct!.natPool),
    no_readvertise_to_lan_bgp: cdktf.booleanToTerraform(struct!.noReadvertiseToLanBgp),
    no_readvertise_to_lan_ospf: cdktf.booleanToTerraform(struct!.noReadvertiseToLanOspf),
    no_readvertise_to_overlay: cdktf.booleanToTerraform(struct!.noReadvertiseToOverlay),
    other_vrfs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.otherVrfs),
    routed: cdktf.booleanToTerraform(struct!.routed),
    source_nat: orgNetworkVpnAccessSourceNatToTerraform(struct!.sourceNat),
    static_nat: cdktf.hashMapper(orgNetworkVpnAccessStaticNatToTerraform)(struct!.staticNat),
    summarized_subnet: cdktf.stringToTerraform(struct!.summarizedSubnet),
    summarized_subnet_to_lan_bgp: cdktf.stringToTerraform(struct!.summarizedSubnetToLanBgp),
    summarized_subnet_to_lan_ospf: cdktf.stringToTerraform(struct!.summarizedSubnetToLanOspf),
  }
}


export function orgNetworkVpnAccessToHclTerraform(struct?: OrgNetworkVpnAccess | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertised_subnet: {
      value: cdktf.stringToHclTerraform(struct!.advertisedSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allow_ping: {
      value: cdktf.booleanToHclTerraform(struct!.allowPing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    destination_nat: {
      value: cdktf.hashMapperHcl(orgNetworkVpnAccessDestinationNatToHclTerraform)(struct!.destinationNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgNetworkVpnAccessDestinationNatMap",
    },
    nat_pool: {
      value: cdktf.stringToHclTerraform(struct!.natPool),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    no_readvertise_to_lan_bgp: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToLanBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_readvertise_to_lan_ospf: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToLanOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    no_readvertise_to_overlay: {
      value: cdktf.booleanToHclTerraform(struct!.noReadvertiseToOverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    other_vrfs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.otherVrfs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    routed: {
      value: cdktf.booleanToHclTerraform(struct!.routed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source_nat: {
      value: orgNetworkVpnAccessSourceNatToHclTerraform(struct!.sourceNat),
      isBlock: true,
      type: "struct",
      storageClassType: "OrgNetworkVpnAccessSourceNat",
    },
    static_nat: {
      value: cdktf.hashMapperHcl(orgNetworkVpnAccessStaticNatToHclTerraform)(struct!.staticNat),
      isBlock: true,
      type: "map",
      storageClassType: "OrgNetworkVpnAccessStaticNatMap",
    },
    summarized_subnet: {
      value: cdktf.stringToHclTerraform(struct!.summarizedSubnet),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summarized_subnet_to_lan_bgp: {
      value: cdktf.stringToHclTerraform(struct!.summarizedSubnetToLanBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summarized_subnet_to_lan_ospf: {
      value: cdktf.stringToHclTerraform(struct!.summarizedSubnetToLanOspf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OrgNetworkVpnAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): OrgNetworkVpnAccess | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertisedSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertisedSubnet = this._advertisedSubnet;
    }
    if (this._allowPing !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowPing = this._allowPing;
    }
    if (this._destinationNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationNat = this._destinationNat?.internalValue;
    }
    if (this._natPool !== undefined) {
      hasAnyValues = true;
      internalValueResult.natPool = this._natPool;
    }
    if (this._noReadvertiseToLanBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToLanBgp = this._noReadvertiseToLanBgp;
    }
    if (this._noReadvertiseToLanOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToLanOspf = this._noReadvertiseToLanOspf;
    }
    if (this._noReadvertiseToOverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.noReadvertiseToOverlay = this._noReadvertiseToOverlay;
    }
    if (this._otherVrfs !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherVrfs = this._otherVrfs;
    }
    if (this._routed !== undefined) {
      hasAnyValues = true;
      internalValueResult.routed = this._routed;
    }
    if (this._sourceNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceNat = this._sourceNat?.internalValue;
    }
    if (this._staticNat?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticNat = this._staticNat?.internalValue;
    }
    if (this._summarizedSubnet !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedSubnet = this._summarizedSubnet;
    }
    if (this._summarizedSubnetToLanBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedSubnetToLanBgp = this._summarizedSubnetToLanBgp;
    }
    if (this._summarizedSubnetToLanOspf !== undefined) {
      hasAnyValues = true;
      internalValueResult.summarizedSubnetToLanOspf = this._summarizedSubnetToLanOspf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OrgNetworkVpnAccess | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertisedSubnet = undefined;
      this._allowPing = undefined;
      this._destinationNat.internalValue = undefined;
      this._natPool = undefined;
      this._noReadvertiseToLanBgp = undefined;
      this._noReadvertiseToLanOspf = undefined;
      this._noReadvertiseToOverlay = undefined;
      this._otherVrfs = undefined;
      this._routed = undefined;
      this._sourceNat.internalValue = undefined;
      this._staticNat.internalValue = undefined;
      this._summarizedSubnet = undefined;
      this._summarizedSubnetToLanBgp = undefined;
      this._summarizedSubnetToLanOspf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertisedSubnet = value.advertisedSubnet;
      this._allowPing = value.allowPing;
      this._destinationNat.internalValue = value.destinationNat;
      this._natPool = value.natPool;
      this._noReadvertiseToLanBgp = value.noReadvertiseToLanBgp;
      this._noReadvertiseToLanOspf = value.noReadvertiseToLanOspf;
      this._noReadvertiseToOverlay = value.noReadvertiseToOverlay;
      this._otherVrfs = value.otherVrfs;
      this._routed = value.routed;
      this._sourceNat.internalValue = value.sourceNat;
      this._staticNat.internalValue = value.staticNat;
      this._summarizedSubnet = value.summarizedSubnet;
      this._summarizedSubnetToLanBgp = value.summarizedSubnetToLanBgp;
      this._summarizedSubnetToLanOspf = value.summarizedSubnetToLanOspf;
    }
  }

  // advertised_subnet - computed: false, optional: true, required: false
  private _advertisedSubnet?: string; 
  public get advertisedSubnet() {
    return this.getStringAttribute('advertised_subnet');
  }
  public set advertisedSubnet(value: string) {
    this._advertisedSubnet = value;
  }
  public resetAdvertisedSubnet() {
    this._advertisedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertisedSubnetInput() {
    return this._advertisedSubnet;
  }

  // allow_ping - computed: false, optional: true, required: false
  private _allowPing?: boolean | cdktf.IResolvable; 
  public get allowPing() {
    return this.getBooleanAttribute('allow_ping');
  }
  public set allowPing(value: boolean | cdktf.IResolvable) {
    this._allowPing = value;
  }
  public resetAllowPing() {
    this._allowPing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPingInput() {
    return this._allowPing;
  }

  // destination_nat - computed: false, optional: true, required: false
  private _destinationNat = new OrgNetworkVpnAccessDestinationNatMap(this, "destination_nat");
  public get destinationNat() {
    return this._destinationNat;
  }
  public putDestinationNat(value: { [key: string]: OrgNetworkVpnAccessDestinationNat } | cdktf.IResolvable) {
    this._destinationNat.internalValue = value;
  }
  public resetDestinationNat() {
    this._destinationNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationNatInput() {
    return this._destinationNat.internalValue;
  }

  // nat_pool - computed: false, optional: true, required: false
  private _natPool?: string; 
  public get natPool() {
    return this.getStringAttribute('nat_pool');
  }
  public set natPool(value: string) {
    this._natPool = value;
  }
  public resetNatPool() {
    this._natPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get natPoolInput() {
    return this._natPool;
  }

  // no_readvertise_to_lan_bgp - computed: true, optional: true, required: false
  private _noReadvertiseToLanBgp?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToLanBgp() {
    return this.getBooleanAttribute('no_readvertise_to_lan_bgp');
  }
  public set noReadvertiseToLanBgp(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToLanBgp = value;
  }
  public resetNoReadvertiseToLanBgp() {
    this._noReadvertiseToLanBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToLanBgpInput() {
    return this._noReadvertiseToLanBgp;
  }

  // no_readvertise_to_lan_ospf - computed: true, optional: true, required: false
  private _noReadvertiseToLanOspf?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToLanOspf() {
    return this.getBooleanAttribute('no_readvertise_to_lan_ospf');
  }
  public set noReadvertiseToLanOspf(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToLanOspf = value;
  }
  public resetNoReadvertiseToLanOspf() {
    this._noReadvertiseToLanOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToLanOspfInput() {
    return this._noReadvertiseToLanOspf;
  }

  // no_readvertise_to_overlay - computed: false, optional: true, required: false
  private _noReadvertiseToOverlay?: boolean | cdktf.IResolvable; 
  public get noReadvertiseToOverlay() {
    return this.getBooleanAttribute('no_readvertise_to_overlay');
  }
  public set noReadvertiseToOverlay(value: boolean | cdktf.IResolvable) {
    this._noReadvertiseToOverlay = value;
  }
  public resetNoReadvertiseToOverlay() {
    this._noReadvertiseToOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noReadvertiseToOverlayInput() {
    return this._noReadvertiseToOverlay;
  }

  // other_vrfs - computed: true, optional: true, required: false
  private _otherVrfs?: string[]; 
  public get otherVrfs() {
    return this.getListAttribute('other_vrfs');
  }
  public set otherVrfs(value: string[]) {
    this._otherVrfs = value;
  }
  public resetOtherVrfs() {
    this._otherVrfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherVrfsInput() {
    return this._otherVrfs;
  }

  // routed - computed: false, optional: true, required: false
  private _routed?: boolean | cdktf.IResolvable; 
  public get routed() {
    return this.getBooleanAttribute('routed');
  }
  public set routed(value: boolean | cdktf.IResolvable) {
    this._routed = value;
  }
  public resetRouted() {
    this._routed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedInput() {
    return this._routed;
  }

  // source_nat - computed: true, optional: true, required: false
  private _sourceNat = new OrgNetworkVpnAccessSourceNatOutputReference(this, "source_nat");
  public get sourceNat() {
    return this._sourceNat;
  }
  public putSourceNat(value: OrgNetworkVpnAccessSourceNat) {
    this._sourceNat.internalValue = value;
  }
  public resetSourceNat() {
    this._sourceNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNatInput() {
    return this._sourceNat.internalValue;
  }

  // static_nat - computed: true, optional: true, required: false
  private _staticNat = new OrgNetworkVpnAccessStaticNatMap(this, "static_nat");
  public get staticNat() {
    return this._staticNat;
  }
  public putStaticNat(value: { [key: string]: OrgNetworkVpnAccessStaticNat } | cdktf.IResolvable) {
    this._staticNat.internalValue = value;
  }
  public resetStaticNat() {
    this._staticNat.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticNatInput() {
    return this._staticNat.internalValue;
  }

  // summarized_subnet - computed: false, optional: true, required: false
  private _summarizedSubnet?: string; 
  public get summarizedSubnet() {
    return this.getStringAttribute('summarized_subnet');
  }
  public set summarizedSubnet(value: string) {
    this._summarizedSubnet = value;
  }
  public resetSummarizedSubnet() {
    this._summarizedSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedSubnetInput() {
    return this._summarizedSubnet;
  }

  // summarized_subnet_to_lan_bgp - computed: false, optional: true, required: false
  private _summarizedSubnetToLanBgp?: string; 
  public get summarizedSubnetToLanBgp() {
    return this.getStringAttribute('summarized_subnet_to_lan_bgp');
  }
  public set summarizedSubnetToLanBgp(value: string) {
    this._summarizedSubnetToLanBgp = value;
  }
  public resetSummarizedSubnetToLanBgp() {
    this._summarizedSubnetToLanBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedSubnetToLanBgpInput() {
    return this._summarizedSubnetToLanBgp;
  }

  // summarized_subnet_to_lan_ospf - computed: false, optional: true, required: false
  private _summarizedSubnetToLanOspf?: string; 
  public get summarizedSubnetToLanOspf() {
    return this.getStringAttribute('summarized_subnet_to_lan_ospf');
  }
  public set summarizedSubnetToLanOspf(value: string) {
    this._summarizedSubnetToLanOspf = value;
  }
  public resetSummarizedSubnetToLanOspf() {
    this._summarizedSubnetToLanOspf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summarizedSubnetToLanOspfInput() {
    return this._summarizedSubnetToLanOspf;
  }
}

export class OrgNetworkVpnAccessMap extends cdktf.ComplexMap {
  public internalValue? : { [key: string]: OrgNetworkVpnAccess } | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): OrgNetworkVpnAccessOutputReference {
    return new OrgNetworkVpnAccessOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network mist_org_network}
*/
export class OrgNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mist_org_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OrgNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OrgNetwork to import
  * @param importFromId The id of the existing OrgNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OrgNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mist_org_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/mist/0.6.1/docs/resources/org_network mist_org_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: OrgNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'mist_org_network',
      terraformGeneratorMetadata: {
        providerName: 'mist',
        providerVersion: '0.6.1',
        providerVersionConstraint: '0.6.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disallowMistServices = config.disallowMistServices;
    this._gateway = config.gateway;
    this._gateway6 = config.gateway6;
    this._internalAccess.internalValue = config.internalAccess;
    this._internetAccess.internalValue = config.internetAccess;
    this._isolation = config.isolation;
    this._multicast.internalValue = config.multicast;
    this._name = config.name;
    this._orgId = config.orgId;
    this._routedForNetworks = config.routedForNetworks;
    this._subnet = config.subnet;
    this._subnet6 = config.subnet6;
    this._tenants.internalValue = config.tenants;
    this._vlanId = config.vlanId;
    this._vpnAccess.internalValue = config.vpnAccess;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disallow_mist_services - computed: true, optional: true, required: false
  private _disallowMistServices?: boolean | cdktf.IResolvable; 
  public get disallowMistServices() {
    return this.getBooleanAttribute('disallow_mist_services');
  }
  public set disallowMistServices(value: boolean | cdktf.IResolvable) {
    this._disallowMistServices = value;
  }
  public resetDisallowMistServices() {
    this._disallowMistServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disallowMistServicesInput() {
    return this._disallowMistServices;
  }

  // gateway - computed: false, optional: true, required: false
  private _gateway?: string; 
  public get gateway() {
    return this.getStringAttribute('gateway');
  }
  public set gateway(value: string) {
    this._gateway = value;
  }
  public resetGateway() {
    this._gateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayInput() {
    return this._gateway;
  }

  // gateway6 - computed: false, optional: true, required: false
  private _gateway6?: string; 
  public get gateway6() {
    return this.getStringAttribute('gateway6');
  }
  public set gateway6(value: string) {
    this._gateway6 = value;
  }
  public resetGateway6() {
    this._gateway6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gateway6Input() {
    return this._gateway6;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // internal_access - computed: false, optional: true, required: false
  private _internalAccess = new OrgNetworkInternalAccessOutputReference(this, "internal_access");
  public get internalAccess() {
    return this._internalAccess;
  }
  public putInternalAccess(value: OrgNetworkInternalAccess) {
    this._internalAccess.internalValue = value;
  }
  public resetInternalAccess() {
    this._internalAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAccessInput() {
    return this._internalAccess.internalValue;
  }

  // internet_access - computed: false, optional: true, required: false
  private _internetAccess = new OrgNetworkInternetAccessOutputReference(this, "internet_access");
  public get internetAccess() {
    return this._internetAccess;
  }
  public putInternetAccess(value: OrgNetworkInternetAccess) {
    this._internetAccess.internalValue = value;
  }
  public resetInternetAccess() {
    this._internetAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetAccessInput() {
    return this._internetAccess.internalValue;
  }

  // isolation - computed: false, optional: true, required: false
  private _isolation?: boolean | cdktf.IResolvable; 
  public get isolation() {
    return this.getBooleanAttribute('isolation');
  }
  public set isolation(value: boolean | cdktf.IResolvable) {
    this._isolation = value;
  }
  public resetIsolation() {
    this._isolation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isolationInput() {
    return this._isolation;
  }

  // multicast - computed: false, optional: true, required: false
  private _multicast = new OrgNetworkMulticastOutputReference(this, "multicast");
  public get multicast() {
    return this._multicast;
  }
  public putMulticast(value: OrgNetworkMulticast) {
    this._multicast.internalValue = value;
  }
  public resetMulticast() {
    this._multicast.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastInput() {
    return this._multicast.internalValue;
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

  // org_id - computed: false, optional: false, required: true
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // routed_for_networks - computed: true, optional: true, required: false
  private _routedForNetworks?: string[]; 
  public get routedForNetworks() {
    return this.getListAttribute('routed_for_networks');
  }
  public set routedForNetworks(value: string[]) {
    this._routedForNetworks = value;
  }
  public resetRoutedForNetworks() {
    this._routedForNetworks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routedForNetworksInput() {
    return this._routedForNetworks;
  }

  // subnet - computed: false, optional: false, required: true
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // subnet6 - computed: false, optional: true, required: false
  private _subnet6?: string; 
  public get subnet6() {
    return this.getStringAttribute('subnet6');
  }
  public set subnet6(value: string) {
    this._subnet6 = value;
  }
  public resetSubnet6() {
    this._subnet6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnet6Input() {
    return this._subnet6;
  }

  // tenants - computed: false, optional: true, required: false
  private _tenants = new OrgNetworkTenantsMap(this, "tenants");
  public get tenants() {
    return this._tenants;
  }
  public putTenants(value: { [key: string]: OrgNetworkTenants } | cdktf.IResolvable) {
    this._tenants.internalValue = value;
  }
  public resetTenants() {
    this._tenants.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantsInput() {
    return this._tenants.internalValue;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vpn_access - computed: false, optional: true, required: false
  private _vpnAccess = new OrgNetworkVpnAccessMap(this, "vpn_access");
  public get vpnAccess() {
    return this._vpnAccess;
  }
  public putVpnAccess(value: { [key: string]: OrgNetworkVpnAccess } | cdktf.IResolvable) {
    this._vpnAccess.internalValue = value;
  }
  public resetVpnAccess() {
    this._vpnAccess.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAccessInput() {
    return this._vpnAccess.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disallow_mist_services: cdktf.booleanToTerraform(this._disallowMistServices),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway6: cdktf.stringToTerraform(this._gateway6),
      internal_access: orgNetworkInternalAccessToTerraform(this._internalAccess.internalValue),
      internet_access: orgNetworkInternetAccessToTerraform(this._internetAccess.internalValue),
      isolation: cdktf.booleanToTerraform(this._isolation),
      multicast: orgNetworkMulticastToTerraform(this._multicast.internalValue),
      name: cdktf.stringToTerraform(this._name),
      org_id: cdktf.stringToTerraform(this._orgId),
      routed_for_networks: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routedForNetworks),
      subnet: cdktf.stringToTerraform(this._subnet),
      subnet6: cdktf.stringToTerraform(this._subnet6),
      tenants: cdktf.hashMapper(orgNetworkTenantsToTerraform)(this._tenants.internalValue),
      vlan_id: cdktf.stringToTerraform(this._vlanId),
      vpn_access: cdktf.hashMapper(orgNetworkVpnAccessToTerraform)(this._vpnAccess.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disallow_mist_services: {
        value: cdktf.booleanToHclTerraform(this._disallowMistServices),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway6: {
        value: cdktf.stringToHclTerraform(this._gateway6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internal_access: {
        value: orgNetworkInternalAccessToHclTerraform(this._internalAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgNetworkInternalAccess",
      },
      internet_access: {
        value: orgNetworkInternetAccessToHclTerraform(this._internetAccess.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgNetworkInternetAccess",
      },
      isolation: {
        value: cdktf.booleanToHclTerraform(this._isolation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multicast: {
        value: orgNetworkMulticastToHclTerraform(this._multicast.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OrgNetworkMulticast",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      routed_for_networks: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routedForNetworks),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet6: {
        value: cdktf.stringToHclTerraform(this._subnet6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenants: {
        value: cdktf.hashMapperHcl(orgNetworkTenantsToHclTerraform)(this._tenants.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgNetworkTenantsMap",
      },
      vlan_id: {
        value: cdktf.stringToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpn_access: {
        value: cdktf.hashMapperHcl(orgNetworkVpnAccessToHclTerraform)(this._vpnAccess.internalValue),
        isBlock: true,
        type: "map",
        storageClassType: "OrgNetworkVpnAccessMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
