// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogicalDhcpServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#description LogicalDhcpServer#description}
  */
  readonly description?: string;
  /**
  * DHCP profile uuid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#dhcp_profile_id LogicalDhcpServer#dhcp_profile_id}
  */
  readonly dhcpProfileId: string;
  /**
  * DHCP server ip in cidr format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#dhcp_server_ip LogicalDhcpServer#dhcp_server_ip}
  */
  readonly dhcpServerIp: string;
  /**
  * The display name of this resource. Defaults to ID if not set
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#display_name LogicalDhcpServer#display_name}
  */
  readonly displayName?: string;
  /**
  * DNS IPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#dns_name_servers LogicalDhcpServer#dns_name_servers}
  */
  readonly dnsNameServers?: string[];
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#domain_name LogicalDhcpServer#domain_name}
  */
  readonly domainName?: string;
  /**
  * Gateway IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#gateway_ip LogicalDhcpServer#gateway_ip}
  */
  readonly gatewayIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#id LogicalDhcpServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * dhcp_generic_option block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#dhcp_generic_option LogicalDhcpServer#dhcp_generic_option}
  */
  readonly dhcpGenericOption?: LogicalDhcpServerDhcpGenericOption[] | cdktf.IResolvable;
  /**
  * dhcp_option_121 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#dhcp_option_121 LogicalDhcpServer#dhcp_option_121}
  */
  readonly dhcpOption121?: LogicalDhcpServerDhcpOption121[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#tag LogicalDhcpServer#tag}
  */
  readonly tag?: LogicalDhcpServerTag[] | cdktf.IResolvable;
}
export interface LogicalDhcpServerDhcpGenericOption {
  /**
  * DHCP option code, [0-255]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#code LogicalDhcpServer#code}
  */
  readonly code: number;
  /**
  * DHCP option values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#values LogicalDhcpServer#values}
  */
  readonly values: string[];
}

export function logicalDhcpServerDhcpGenericOptionToTerraform(struct?: LogicalDhcpServerDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.numberToTerraform(struct!.code),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function logicalDhcpServerDhcpGenericOptionToHclTerraform(struct?: LogicalDhcpServerDhcpGenericOption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.numberToHclTerraform(struct!.code),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalDhcpServerDhcpGenericOptionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalDhcpServerDhcpGenericOption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalDhcpServerDhcpGenericOption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._values = value.values;
    }
  }

  // code - computed: false, optional: false, required: true
  private _code?: number; 
  public get code() {
    return this.getNumberAttribute('code');
  }
  public set code(value: number) {
    this._code = value;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class LogicalDhcpServerDhcpGenericOptionList extends cdktf.ComplexList {
  public internalValue? : LogicalDhcpServerDhcpGenericOption[] | cdktf.IResolvable

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
  public get(index: number): LogicalDhcpServerDhcpGenericOptionOutputReference {
    return new LogicalDhcpServerDhcpGenericOptionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalDhcpServerDhcpOption121 {
  /**
  * Destination in cidr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#network LogicalDhcpServer#network}
  */
  readonly network: string;
  /**
  * Next hop IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#next_hop LogicalDhcpServer#next_hop}
  */
  readonly nextHop: string;
}

export function logicalDhcpServerDhcpOption121ToTerraform(struct?: LogicalDhcpServerDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network: cdktf.stringToTerraform(struct!.network),
    next_hop: cdktf.stringToTerraform(struct!.nextHop),
  }
}


export function logicalDhcpServerDhcpOption121ToHclTerraform(struct?: LogicalDhcpServerDhcpOption121 | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_hop: {
      value: cdktf.stringToHclTerraform(struct!.nextHop),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogicalDhcpServerDhcpOption121OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalDhcpServerDhcpOption121 | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    if (this._nextHop !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextHop = this._nextHop;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogicalDhcpServerDhcpOption121 | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._network = undefined;
      this._nextHop = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._network = value.network;
      this._nextHop = value.nextHop;
    }
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

  // next_hop - computed: false, optional: false, required: true
  private _nextHop?: string; 
  public get nextHop() {
    return this.getStringAttribute('next_hop');
  }
  public set nextHop(value: string) {
    this._nextHop = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopInput() {
    return this._nextHop;
  }
}

export class LogicalDhcpServerDhcpOption121List extends cdktf.ComplexList {
  public internalValue? : LogicalDhcpServerDhcpOption121[] | cdktf.IResolvable

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
  public get(index: number): LogicalDhcpServerDhcpOption121OutputReference {
    return new LogicalDhcpServerDhcpOption121OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogicalDhcpServerTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#scope LogicalDhcpServer#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#tag LogicalDhcpServer#tag}
  */
  readonly tag?: string;
}

export function logicalDhcpServerTagToTerraform(struct?: LogicalDhcpServerTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function logicalDhcpServerTagToHclTerraform(struct?: LogicalDhcpServerTag | cdktf.IResolvable): any {
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

export class LogicalDhcpServerTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogicalDhcpServerTag | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LogicalDhcpServerTag | cdktf.IResolvable | undefined) {
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

export class LogicalDhcpServerTagList extends cdktf.ComplexList {
  public internalValue? : LogicalDhcpServerTag[] | cdktf.IResolvable

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
  public get(index: number): LogicalDhcpServerTagOutputReference {
    return new LogicalDhcpServerTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server nsxt_logical_dhcp_server}
*/
export class LogicalDhcpServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_logical_dhcp_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogicalDhcpServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogicalDhcpServer to import
  * @param importFromId The id of the existing LogicalDhcpServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogicalDhcpServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_logical_dhcp_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/logical_dhcp_server nsxt_logical_dhcp_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogicalDhcpServerConfig
  */
  public constructor(scope: Construct, id: string, config: LogicalDhcpServerConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_logical_dhcp_server',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._dhcpProfileId = config.dhcpProfileId;
    this._dhcpServerIp = config.dhcpServerIp;
    this._displayName = config.displayName;
    this._dnsNameServers = config.dnsNameServers;
    this._domainName = config.domainName;
    this._gatewayIp = config.gatewayIp;
    this._id = config.id;
    this._dhcpGenericOption.internalValue = config.dhcpGenericOption;
    this._dhcpOption121.internalValue = config.dhcpOption121;
    this._tag.internalValue = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attached_logical_port_id - computed: true, optional: false, required: false
  public get attachedLogicalPortId() {
    return this.getStringAttribute('attached_logical_port_id');
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

  // dhcp_profile_id - computed: false, optional: false, required: true
  private _dhcpProfileId?: string; 
  public get dhcpProfileId() {
    return this.getStringAttribute('dhcp_profile_id');
  }
  public set dhcpProfileId(value: string) {
    this._dhcpProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpProfileIdInput() {
    return this._dhcpProfileId;
  }

  // dhcp_server_ip - computed: false, optional: false, required: true
  private _dhcpServerIp?: string; 
  public get dhcpServerIp() {
    return this.getStringAttribute('dhcp_server_ip');
  }
  public set dhcpServerIp(value: string) {
    this._dhcpServerIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpServerIpInput() {
    return this._dhcpServerIp;
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

  // dns_name_servers - computed: false, optional: true, required: false
  private _dnsNameServers?: string[]; 
  public get dnsNameServers() {
    return this.getListAttribute('dns_name_servers');
  }
  public set dnsNameServers(value: string[]) {
    this._dnsNameServers = value;
  }
  public resetDnsNameServers() {
    this._dnsNameServers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsNameServersInput() {
    return this._dnsNameServers;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // gateway_ip - computed: false, optional: true, required: false
  private _gatewayIp?: string; 
  public get gatewayIp() {
    return this.getStringAttribute('gateway_ip');
  }
  public set gatewayIp(value: string) {
    this._gatewayIp = value;
  }
  public resetGatewayIp() {
    this._gatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpInput() {
    return this._gatewayIp;
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

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // dhcp_generic_option - computed: false, optional: true, required: false
  private _dhcpGenericOption = new LogicalDhcpServerDhcpGenericOptionList(this, "dhcp_generic_option", false);
  public get dhcpGenericOption() {
    return this._dhcpGenericOption;
  }
  public putDhcpGenericOption(value: LogicalDhcpServerDhcpGenericOption[] | cdktf.IResolvable) {
    this._dhcpGenericOption.internalValue = value;
  }
  public resetDhcpGenericOption() {
    this._dhcpGenericOption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpGenericOptionInput() {
    return this._dhcpGenericOption.internalValue;
  }

  // dhcp_option_121 - computed: false, optional: true, required: false
  private _dhcpOption121 = new LogicalDhcpServerDhcpOption121List(this, "dhcp_option_121", false);
  public get dhcpOption121() {
    return this._dhcpOption121;
  }
  public putDhcpOption121(value: LogicalDhcpServerDhcpOption121[] | cdktf.IResolvable) {
    this._dhcpOption121.internalValue = value;
  }
  public resetDhcpOption121() {
    this._dhcpOption121.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOption121Input() {
    return this._dhcpOption121.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new LogicalDhcpServerTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: LogicalDhcpServerTag[] | cdktf.IResolvable) {
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
      description: cdktf.stringToTerraform(this._description),
      dhcp_profile_id: cdktf.stringToTerraform(this._dhcpProfileId),
      dhcp_server_ip: cdktf.stringToTerraform(this._dhcpServerIp),
      display_name: cdktf.stringToTerraform(this._displayName),
      dns_name_servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dnsNameServers),
      domain_name: cdktf.stringToTerraform(this._domainName),
      gateway_ip: cdktf.stringToTerraform(this._gatewayIp),
      id: cdktf.stringToTerraform(this._id),
      dhcp_generic_option: cdktf.listMapper(logicalDhcpServerDhcpGenericOptionToTerraform, true)(this._dhcpGenericOption.internalValue),
      dhcp_option_121: cdktf.listMapper(logicalDhcpServerDhcpOption121ToTerraform, true)(this._dhcpOption121.internalValue),
      tag: cdktf.listMapper(logicalDhcpServerTagToTerraform, true)(this._tag.internalValue),
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
      dhcp_profile_id: {
        value: cdktf.stringToHclTerraform(this._dhcpProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_server_ip: {
        value: cdktf.stringToHclTerraform(this._dhcpServerIp),
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
      dns_name_servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dnsNameServers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      domain_name: {
        value: cdktf.stringToHclTerraform(this._domainName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_ip: {
        value: cdktf.stringToHclTerraform(this._gatewayIp),
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
      dhcp_generic_option: {
        value: cdktf.listMapperHcl(logicalDhcpServerDhcpGenericOptionToHclTerraform, true)(this._dhcpGenericOption.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicalDhcpServerDhcpGenericOptionList",
      },
      dhcp_option_121: {
        value: cdktf.listMapperHcl(logicalDhcpServerDhcpOption121ToHclTerraform, true)(this._dhcpOption121.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogicalDhcpServerDhcpOption121List",
      },
      tag: {
        value: cdktf.listMapperHcl(logicalDhcpServerTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "LogicalDhcpServerTagList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
