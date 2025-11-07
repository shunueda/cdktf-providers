// https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ipv4FixedAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The agent circuit ID for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#agent_circuit_id Ipv4FixedAddress#agent_circuit_id}
  */
  readonly agentCircuitId?: string;
  /**
  * The agent remote ID for the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#agent_remote_id Ipv4FixedAddress#agent_remote_id}
  */
  readonly agentRemoteId?: string;
  /**
  * This field controls whether there is a prepend for the dhcp-client-identifier of a fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#client_identifier_prepend_zero Ipv4FixedAddress#client_identifier_prepend_zero}
  */
  readonly clientIdentifierPrependZero?: boolean | cdktf.IResolvable;
  /**
  * Comment for the fixed address; maximum 256 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#comment Ipv4FixedAddress#comment}
  */
  readonly comment?: string;
  /**
  * The DHCP client ID for the fixed address. The field is required only when match_client is set to CLIENT_ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#dhcp_client_identifier Ipv4FixedAddress#dhcp_client_identifier}
  */
  readonly dhcpClientIdentifier?: string;
  /**
  * Determines whether a fixed address is disabled or not. When this is set to False, the fixed address is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#disable Ipv4FixedAddress#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Extensible attributes of the A-record to be added/updated, as a map in JSON format
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#ext_attrs Ipv4FixedAddress#ext_attrs}
  */
  readonly extAttrs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#id Ipv4FixedAddress#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The IPv4 Address of the fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#ipv4addr Ipv4FixedAddress#ipv4addr}
  */
  readonly ipv4Addr?: string;
  /**
  * The MAC address value for this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#mac Ipv4FixedAddress#mac}
  */
  readonly mac?: string;
  /**
  * The match client for the fixed address.Valid values are CIRCUIT_ID, CLIENT_ID , MAC_ADDRESS, REMOTE_ID and RESERVED
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#match_client Ipv4FixedAddress#match_client}
  */
  readonly matchClient?: string;
  /**
  * This field contains the name of this fixed address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#name Ipv4FixedAddress#name}
  */
  readonly name?: string;
  /**
  * The network to which this fixed address belongs, in IPv4 Address/CIDR format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#network Ipv4FixedAddress#network}
  */
  readonly network?: string;
  /**
  * The name of the network view in which this fixed address resides.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#network_view Ipv4FixedAddress#network_view}
  */
  readonly networkView?: string;
  /**
  * Use option is a flag that indicates whether the options field are used or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#use_options Ipv4FixedAddress#use_options}
  */
  readonly useOptions?: boolean | cdktf.IResolvable;
  /**
  * options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#options Ipv4FixedAddress#options}
  */
  readonly options?: Ipv4FixedAddressOptions[] | cdktf.IResolvable;
}
export interface Ipv4FixedAddressOptions {
  /**
  * Name of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#name Ipv4FixedAddress#name}
  */
  readonly name?: string;
  /**
  * The code of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#num Ipv4FixedAddress#num}
  */
  readonly num?: number;
  /**
  * Only applies to special options that are displayed separately from other options and have a use flag. These options are: `routers`, `router-templates`, `domain-name-servers`, `domain-name`, `broadcast-address`, `broadcast-address-offset`, `dhcp-lease-time`, `dhcp6.name-servers`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#use_option Ipv4FixedAddress#use_option}
  */
  readonly useOption?: boolean | cdktf.IResolvable;
  /**
  * Value of the DHCP option.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#value Ipv4FixedAddress#value}
  */
  readonly value?: string;
  /**
  * The name of the space this DHCP option is associated to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#vendor_class Ipv4FixedAddress#vendor_class}
  */
  readonly vendorClass?: string;
}

export function ipv4FixedAddressOptionsToTerraform(struct?: Ipv4FixedAddressOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    num: cdktf.numberToTerraform(struct!.num),
    use_option: cdktf.booleanToTerraform(struct!.useOption),
    value: cdktf.stringToTerraform(struct!.value),
    vendor_class: cdktf.stringToTerraform(struct!.vendorClass),
  }
}


export function ipv4FixedAddressOptionsToHclTerraform(struct?: Ipv4FixedAddressOptions | cdktf.IResolvable): any {
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
    num: {
      value: cdktf.numberToHclTerraform(struct!.num),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_option: {
      value: cdktf.booleanToHclTerraform(struct!.useOption),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vendor_class: {
      value: cdktf.stringToHclTerraform(struct!.vendorClass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class Ipv4FixedAddressOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): Ipv4FixedAddressOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._num !== undefined) {
      hasAnyValues = true;
      internalValueResult.num = this._num;
    }
    if (this._useOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.useOption = this._useOption;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._vendorClass !== undefined) {
      hasAnyValues = true;
      internalValueResult.vendorClass = this._vendorClass;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: Ipv4FixedAddressOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._num = undefined;
      this._useOption = undefined;
      this._value = undefined;
      this._vendorClass = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._num = value.num;
      this._useOption = value.useOption;
      this._value = value.value;
      this._vendorClass = value.vendorClass;
    }
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

  // num - computed: false, optional: true, required: false
  private _num?: number; 
  public get num() {
    return this.getNumberAttribute('num');
  }
  public set num(value: number) {
    this._num = value;
  }
  public resetNum() {
    this._num = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numInput() {
    return this._num;
  }

  // use_option - computed: false, optional: true, required: false
  private _useOption?: boolean | cdktf.IResolvable; 
  public get useOption() {
    return this.getBooleanAttribute('use_option');
  }
  public set useOption(value: boolean | cdktf.IResolvable) {
    this._useOption = value;
  }
  public resetUseOption() {
    this._useOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionInput() {
    return this._useOption;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // vendor_class - computed: false, optional: true, required: false
  private _vendorClass?: string; 
  public get vendorClass() {
    return this.getStringAttribute('vendor_class');
  }
  public set vendorClass(value: string) {
    this._vendorClass = value;
  }
  public resetVendorClass() {
    this._vendorClass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vendorClassInput() {
    return this._vendorClass;
  }
}

export class Ipv4FixedAddressOptionsList extends cdktf.ComplexList {
  public internalValue? : Ipv4FixedAddressOptions[] | cdktf.IResolvable

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
  public get(index: number): Ipv4FixedAddressOptionsOutputReference {
    return new Ipv4FixedAddressOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address infoblox_ipv4_fixed_address}
*/
export class Ipv4FixedAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "infoblox_ipv4_fixed_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ipv4FixedAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ipv4FixedAddress to import
  * @param importFromId The id of the existing Ipv4FixedAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ipv4FixedAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "infoblox_ipv4_fixed_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/infobloxopen/infoblox/2.11.0/docs/resources/ipv4_fixed_address infoblox_ipv4_fixed_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ipv4FixedAddressConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Ipv4FixedAddressConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'infoblox_ipv4_fixed_address',
      terraformGeneratorMetadata: {
        providerName: 'infoblox',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentCircuitId = config.agentCircuitId;
    this._agentRemoteId = config.agentRemoteId;
    this._clientIdentifierPrependZero = config.clientIdentifierPrependZero;
    this._comment = config.comment;
    this._dhcpClientIdentifier = config.dhcpClientIdentifier;
    this._disable = config.disable;
    this._extAttrs = config.extAttrs;
    this._id = config.id;
    this._ipv4Addr = config.ipv4Addr;
    this._mac = config.mac;
    this._matchClient = config.matchClient;
    this._name = config.name;
    this._network = config.network;
    this._networkView = config.networkView;
    this._useOptions = config.useOptions;
    this._options.internalValue = config.options;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_circuit_id - computed: false, optional: true, required: false
  private _agentCircuitId?: string; 
  public get agentCircuitId() {
    return this.getStringAttribute('agent_circuit_id');
  }
  public set agentCircuitId(value: string) {
    this._agentCircuitId = value;
  }
  public resetAgentCircuitId() {
    this._agentCircuitId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentCircuitIdInput() {
    return this._agentCircuitId;
  }

  // agent_remote_id - computed: false, optional: true, required: false
  private _agentRemoteId?: string; 
  public get agentRemoteId() {
    return this.getStringAttribute('agent_remote_id');
  }
  public set agentRemoteId(value: string) {
    this._agentRemoteId = value;
  }
  public resetAgentRemoteId() {
    this._agentRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentRemoteIdInput() {
    return this._agentRemoteId;
  }

  // client_identifier_prepend_zero - computed: false, optional: true, required: false
  private _clientIdentifierPrependZero?: boolean | cdktf.IResolvable; 
  public get clientIdentifierPrependZero() {
    return this.getBooleanAttribute('client_identifier_prepend_zero');
  }
  public set clientIdentifierPrependZero(value: boolean | cdktf.IResolvable) {
    this._clientIdentifierPrependZero = value;
  }
  public resetClientIdentifierPrependZero() {
    this._clientIdentifierPrependZero = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdentifierPrependZeroInput() {
    return this._clientIdentifierPrependZero;
  }

  // comment - computed: false, optional: true, required: false
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

  // dhcp_client_identifier - computed: false, optional: true, required: false
  private _dhcpClientIdentifier?: string; 
  public get dhcpClientIdentifier() {
    return this.getStringAttribute('dhcp_client_identifier');
  }
  public set dhcpClientIdentifier(value: string) {
    this._dhcpClientIdentifier = value;
  }
  public resetDhcpClientIdentifier() {
    this._dhcpClientIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpClientIdentifierInput() {
    return this._dhcpClientIdentifier;
  }

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // ext_attrs - computed: false, optional: true, required: false
  private _extAttrs?: string; 
  public get extAttrs() {
    return this.getStringAttribute('ext_attrs');
  }
  public set extAttrs(value: string) {
    this._extAttrs = value;
  }
  public resetExtAttrs() {
    this._extAttrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extAttrsInput() {
    return this._extAttrs;
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

  // internal_id - computed: true, optional: false, required: false
  public get internalId() {
    return this.getStringAttribute('internal_id');
  }

  // ipv4addr - computed: false, optional: true, required: false
  private _ipv4Addr?: string; 
  public get ipv4Addr() {
    return this.getStringAttribute('ipv4addr');
  }
  public set ipv4Addr(value: string) {
    this._ipv4Addr = value;
  }
  public resetIpv4Addr() {
    this._ipv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddrInput() {
    return this._ipv4Addr;
  }

  // mac - computed: false, optional: true, required: false
  private _mac?: string; 
  public get mac() {
    return this.getStringAttribute('mac');
  }
  public set mac(value: string) {
    this._mac = value;
  }
  public resetMac() {
    this._mac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macInput() {
    return this._mac;
  }

  // match_client - computed: false, optional: true, required: false
  private _matchClient?: string; 
  public get matchClient() {
    return this.getStringAttribute('match_client');
  }
  public set matchClient(value: string) {
    this._matchClient = value;
  }
  public resetMatchClient() {
    this._matchClient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchClientInput() {
    return this._matchClient;
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

  // network - computed: false, optional: true, required: false
  private _network?: string; 
  public get network() {
    return this.getStringAttribute('network');
  }
  public set network(value: string) {
    this._network = value;
  }
  public resetNetwork() {
    this._network = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network;
  }

  // network_view - computed: false, optional: true, required: false
  private _networkView?: string; 
  public get networkView() {
    return this.getStringAttribute('network_view');
  }
  public set networkView(value: string) {
    this._networkView = value;
  }
  public resetNetworkView() {
    this._networkView = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkViewInput() {
    return this._networkView;
  }

  // ref - computed: true, optional: false, required: false
  public get ref() {
    return this.getStringAttribute('ref');
  }

  // use_options - computed: false, optional: true, required: false
  private _useOptions?: boolean | cdktf.IResolvable; 
  public get useOptions() {
    return this.getBooleanAttribute('use_options');
  }
  public set useOptions(value: boolean | cdktf.IResolvable) {
    this._useOptions = value;
  }
  public resetUseOptions() {
    this._useOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOptionsInput() {
    return this._useOptions;
  }

  // options - computed: false, optional: true, required: false
  private _options = new Ipv4FixedAddressOptionsList(this, "options", false);
  public get options() {
    return this._options;
  }
  public putOptions(value: Ipv4FixedAddressOptions[] | cdktf.IResolvable) {
    this._options.internalValue = value;
  }
  public resetOptions() {
    this._options.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_circuit_id: cdktf.stringToTerraform(this._agentCircuitId),
      agent_remote_id: cdktf.stringToTerraform(this._agentRemoteId),
      client_identifier_prepend_zero: cdktf.booleanToTerraform(this._clientIdentifierPrependZero),
      comment: cdktf.stringToTerraform(this._comment),
      dhcp_client_identifier: cdktf.stringToTerraform(this._dhcpClientIdentifier),
      disable: cdktf.booleanToTerraform(this._disable),
      ext_attrs: cdktf.stringToTerraform(this._extAttrs),
      id: cdktf.stringToTerraform(this._id),
      ipv4addr: cdktf.stringToTerraform(this._ipv4Addr),
      mac: cdktf.stringToTerraform(this._mac),
      match_client: cdktf.stringToTerraform(this._matchClient),
      name: cdktf.stringToTerraform(this._name),
      network: cdktf.stringToTerraform(this._network),
      network_view: cdktf.stringToTerraform(this._networkView),
      use_options: cdktf.booleanToTerraform(this._useOptions),
      options: cdktf.listMapper(ipv4FixedAddressOptionsToTerraform, true)(this._options.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_circuit_id: {
        value: cdktf.stringToHclTerraform(this._agentCircuitId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_remote_id: {
        value: cdktf.stringToHclTerraform(this._agentRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_identifier_prepend_zero: {
        value: cdktf.booleanToHclTerraform(this._clientIdentifierPrependZero),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_client_identifier: {
        value: cdktf.stringToHclTerraform(this._dhcpClientIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ext_attrs: {
        value: cdktf.stringToHclTerraform(this._extAttrs),
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
      ipv4addr: {
        value: cdktf.stringToHclTerraform(this._ipv4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac: {
        value: cdktf.stringToHclTerraform(this._mac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_client: {
        value: cdktf.stringToHclTerraform(this._matchClient),
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
      network: {
        value: cdktf.stringToHclTerraform(this._network),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_view: {
        value: cdktf.stringToHclTerraform(this._networkView),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_options: {
        value: cdktf.booleanToHclTerraform(this._useOptions),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      options: {
        value: cdktf.listMapperHcl(ipv4FixedAddressOptionsToHclTerraform, true)(this._options.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "Ipv4FixedAddressOptionsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
