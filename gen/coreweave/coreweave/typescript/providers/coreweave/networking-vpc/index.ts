// https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingVpcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Settings affecting DHCP behavior within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#dhcp NetworkingVpc#dhcp}
  */
  readonly dhcp?: NetworkingVpcDhcp;
  /**
  * Settings affecting traffic leaving the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#egress NetworkingVpc#egress}
  */
  readonly egress?: NetworkingVpcEgress;
  /**
  * An IPv4 CIDR range used to allocate host addresses when booting compute into a VPC.
  * This CIDR must be have a mask size of /18. If left unspecified, a Zone-specific default value will be applied by the server.
  * This field is immutable once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#host_prefix NetworkingVpc#host_prefix}
  */
  readonly hostPrefix?: string;
  /**
  * Settings affecting traffic entering the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#ingress NetworkingVpc#ingress}
  */
  readonly ingress?: NetworkingVpcIngress;
  /**
  * The name of the VPC. Must not be longer than 30 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#name NetworkingVpc#name}
  */
  readonly name: string;
  /**
  * A list of additional prefixes associated with the VPC. For example, CKS clusters use these prefixes for Pod and service CIDR ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#vpc_prefixes NetworkingVpc#vpc_prefixes}
  */
  readonly vpcPrefixes?: NetworkingVpcVpcPrefixes[] | cdktf.IResolvable;
  /**
  * The Availability Zone in which the VPC is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#zone NetworkingVpc#zone}
  */
  readonly zone: string;
}
export interface NetworkingVpcDhcpDns {
  /**
  * The DNS servers to be used by DHCP clients within the VPC.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#servers NetworkingVpc#servers}
  */
  readonly servers?: string[];
}

export function networkingVpcDhcpDnsToTerraform(struct?: NetworkingVpcDhcpDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    servers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.servers),
  }
}


export function networkingVpcDhcpDnsToHclTerraform(struct?: NetworkingVpcDhcpDns | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    servers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.servers),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingVpcDhcpDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingVpcDhcpDns | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._servers !== undefined) {
      hasAnyValues = true;
      internalValueResult.servers = this._servers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcDhcpDns | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._servers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._servers = value.servers;
    }
  }

  // servers - computed: false, optional: true, required: false
  private _servers?: string[]; 
  public get servers() {
    return cdktf.Fn.tolist(this.getListAttribute('servers'));
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  public resetServers() {
    this._servers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }
}
export interface NetworkingVpcDhcp {
  /**
  * Settings affecting DNS for DHCP within the VPC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#dns NetworkingVpc#dns}
  */
  readonly dns?: NetworkingVpcDhcpDns;
}

export function networkingVpcDhcpToTerraform(struct?: NetworkingVpcDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: networkingVpcDhcpDnsToTerraform(struct!.dns),
  }
}


export function networkingVpcDhcpToHclTerraform(struct?: NetworkingVpcDhcp | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: networkingVpcDhcpDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "struct",
      storageClassType: "NetworkingVpcDhcpDns",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingVpcDhcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingVpcDhcp | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcDhcp | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dns.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dns.internalValue = value.dns;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new NetworkingVpcDhcpDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: NetworkingVpcDhcpDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }
}
export interface NetworkingVpcEgress {
  /**
  * Specifies whether the VPC should be blocked from consuming public Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#disable_public_access NetworkingVpc#disable_public_access}
  */
  readonly disablePublicAccess?: boolean | cdktf.IResolvable;
}

export function networkingVpcEgressToTerraform(struct?: NetworkingVpcEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_public_access: cdktf.booleanToTerraform(struct!.disablePublicAccess),
  }
}


export function networkingVpcEgressToHclTerraform(struct?: NetworkingVpcEgress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_public_access: {
      value: cdktf.booleanToHclTerraform(struct!.disablePublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingVpcEgressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingVpcEgress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePublicAccess = this._disablePublicAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcEgress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePublicAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePublicAccess = value.disablePublicAccess;
    }
  }

  // disable_public_access - computed: true, optional: true, required: false
  private _disablePublicAccess?: boolean | cdktf.IResolvable; 
  public get disablePublicAccess() {
    return this.getBooleanAttribute('disable_public_access');
  }
  public set disablePublicAccess(value: boolean | cdktf.IResolvable) {
    this._disablePublicAccess = value;
  }
  public resetDisablePublicAccess() {
    this._disablePublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePublicAccessInput() {
    return this._disablePublicAccess;
  }
}
export interface NetworkingVpcIngress {
  /**
  * Specifies whether the VPC should prevent public prefixes advertised from Nodes from being imported into public-facing networks, making them inaccessible from the Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#disable_public_services NetworkingVpc#disable_public_services}
  */
  readonly disablePublicServices?: boolean | cdktf.IResolvable;
}

export function networkingVpcIngressToTerraform(struct?: NetworkingVpcIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_public_services: cdktf.booleanToTerraform(struct!.disablePublicServices),
  }
}


export function networkingVpcIngressToHclTerraform(struct?: NetworkingVpcIngress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_public_services: {
      value: cdktf.booleanToHclTerraform(struct!.disablePublicServices),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingVpcIngressOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NetworkingVpcIngress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disablePublicServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.disablePublicServices = this._disablePublicServices;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcIngress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._disablePublicServices = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._disablePublicServices = value.disablePublicServices;
    }
  }

  // disable_public_services - computed: true, optional: true, required: false
  private _disablePublicServices?: boolean | cdktf.IResolvable; 
  public get disablePublicServices() {
    return this.getBooleanAttribute('disable_public_services');
  }
  public set disablePublicServices(value: boolean | cdktf.IResolvable) {
    this._disablePublicServices = value;
  }
  public resetDisablePublicServices() {
    this._disablePublicServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disablePublicServicesInput() {
    return this._disablePublicServices;
  }
}
export interface NetworkingVpcVpcPrefixes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#name NetworkingVpc#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#value NetworkingVpc#value}
  */
  readonly value: string;
}

export function networkingVpcVpcPrefixesToTerraform(struct?: NetworkingVpcVpcPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function networkingVpcVpcPrefixesToHclTerraform(struct?: NetworkingVpcVpcPrefixes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class NetworkingVpcVpcPrefixesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkingVpcVpcPrefixes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingVpcVpcPrefixes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

export class NetworkingVpcVpcPrefixesList extends cdktf.ComplexList {
  public internalValue? : NetworkingVpcVpcPrefixes[] | cdktf.IResolvable

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
  public get(index: number): NetworkingVpcVpcPrefixesOutputReference {
    return new NetworkingVpcVpcPrefixesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc coreweave_networking_vpc}
*/
export class NetworkingVpc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coreweave_networking_vpc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingVpc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingVpc to import
  * @param importFromId The id of the existing NetworkingVpc that should be imported. Refer to the {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingVpc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coreweave_networking_vpc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coreweave/coreweave/0.7.0/docs/resources/networking_vpc coreweave_networking_vpc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingVpcConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkingVpcConfig) {
    super(scope, id, {
      terraformResourceType: 'coreweave_networking_vpc',
      terraformGeneratorMetadata: {
        providerName: 'coreweave',
        providerVersion: '0.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dhcp.internalValue = config.dhcp;
    this._egress.internalValue = config.egress;
    this._hostPrefix = config.hostPrefix;
    this._ingress.internalValue = config.ingress;
    this._name = config.name;
    this._vpcPrefixes.internalValue = config.vpcPrefixes;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dhcp - computed: false, optional: true, required: false
  private _dhcp = new NetworkingVpcDhcpOutputReference(this, "dhcp");
  public get dhcp() {
    return this._dhcp;
  }
  public putDhcp(value: NetworkingVpcDhcp) {
    this._dhcp.internalValue = value;
  }
  public resetDhcp() {
    this._dhcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp.internalValue;
  }

  // egress - computed: true, optional: true, required: false
  private _egress = new NetworkingVpcEgressOutputReference(this, "egress");
  public get egress() {
    return this._egress;
  }
  public putEgress(value: NetworkingVpcEgress) {
    this._egress.internalValue = value;
  }
  public resetEgress() {
    this._egress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get egressInput() {
    return this._egress.internalValue;
  }

  // host_prefix - computed: true, optional: true, required: false
  private _hostPrefix?: string; 
  public get hostPrefix() {
    return this.getStringAttribute('host_prefix');
  }
  public set hostPrefix(value: string) {
    this._hostPrefix = value;
  }
  public resetHostPrefix() {
    this._hostPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPrefixInput() {
    return this._hostPrefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ingress - computed: true, optional: true, required: false
  private _ingress = new NetworkingVpcIngressOutputReference(this, "ingress");
  public get ingress() {
    return this._ingress;
  }
  public putIngress(value: NetworkingVpcIngress) {
    this._ingress.internalValue = value;
  }
  public resetIngress() {
    this._ingress.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress.internalValue;
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

  // vpc_prefixes - computed: false, optional: true, required: false
  private _vpcPrefixes = new NetworkingVpcVpcPrefixesList(this, "vpc_prefixes", true);
  public get vpcPrefixes() {
    return this._vpcPrefixes;
  }
  public putVpcPrefixes(value: NetworkingVpcVpcPrefixes[] | cdktf.IResolvable) {
    this._vpcPrefixes.internalValue = value;
  }
  public resetVpcPrefixes() {
    this._vpcPrefixes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcPrefixesInput() {
    return this._vpcPrefixes.internalValue;
  }

  // zone - computed: false, optional: false, required: true
  private _zone?: string; 
  public get zone() {
    return this.getStringAttribute('zone');
  }
  public set zone(value: string) {
    this._zone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dhcp: networkingVpcDhcpToTerraform(this._dhcp.internalValue),
      egress: networkingVpcEgressToTerraform(this._egress.internalValue),
      host_prefix: cdktf.stringToTerraform(this._hostPrefix),
      ingress: networkingVpcIngressToTerraform(this._ingress.internalValue),
      name: cdktf.stringToTerraform(this._name),
      vpc_prefixes: cdktf.listMapper(networkingVpcVpcPrefixesToTerraform, false)(this._vpcPrefixes.internalValue),
      zone: cdktf.stringToTerraform(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dhcp: {
        value: networkingVpcDhcpToHclTerraform(this._dhcp.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingVpcDhcp",
      },
      egress: {
        value: networkingVpcEgressToHclTerraform(this._egress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingVpcEgress",
      },
      host_prefix: {
        value: cdktf.stringToHclTerraform(this._hostPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ingress: {
        value: networkingVpcIngressToHclTerraform(this._ingress.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NetworkingVpcIngress",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_prefixes: {
        value: cdktf.listMapperHcl(networkingVpcVpcPrefixesToHclTerraform, false)(this._vpcPrefixes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NetworkingVpcVpcPrefixesList",
      },
      zone: {
        value: cdktf.stringToHclTerraform(this._zone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
