// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * IP address format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#addr_family Subnet#addr_family}
  */
  readonly addrFamily: string;
  /**
  * A description of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#description Subnet#description}
  */
  readonly description?: string;
  /**
  * List of Direct Server Return addresses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#dsr_addrs Subnet#dsr_addrs}
  */
  readonly dsrAddrs?: string[];
  /**
  * Gateway IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#gateway Subnet#gateway}
  */
  readonly gateway?: string;
  /**
  * Gateway priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#gateway_priority Subnet#gateway_priority}
  */
  readonly gatewayPriority?: number;
  /**
  * Name of the groupnet this subnet belongs to. Updating is not allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#groupnet Subnet#groupnet}
  */
  readonly groupnet: string;
  /**
  * MTU of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#mtu Subnet#mtu}
  */
  readonly mtu?: number;
  /**
  * The name of the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#name Subnet#name}
  */
  readonly name: string;
  /**
  * Subnet Prefix Length.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#prefixlen Subnet#prefixlen}
  */
  readonly prefixlen: number;
  /**
  * List of IP addresses that SmartConnect listens for DNS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#sc_service_addrs Subnet#sc_service_addrs}
  */
  readonly scServiceAddrs?: SubnetScServiceAddrs[] | cdktf.IResolvable;
  /**
  * Domain Name corresponding to the SmartConnect Service Address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#sc_service_name Subnet#sc_service_name}
  */
  readonly scServiceName?: string;
  /**
  * VLAN tagging enabled or disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#vlan_enabled Subnet#vlan_enabled}
  */
  readonly vlanEnabled?: boolean | cdktf.IResolvable;
  /**
  * VLAN ID for all interfaces in the subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#vlan_id Subnet#vlan_id}
  */
  readonly vlanId?: number;
}
export interface SubnetScServiceAddrs {
  /**
  * High IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#high Subnet#high}
  */
  readonly high?: string;
  /**
  * Low IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#low Subnet#low}
  */
  readonly low?: string;
}

export function subnetScServiceAddrsToTerraform(struct?: SubnetScServiceAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    high: cdktf.stringToTerraform(struct!.high),
    low: cdktf.stringToTerraform(struct!.low),
  }
}


export function subnetScServiceAddrsToHclTerraform(struct?: SubnetScServiceAddrs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    high: {
      value: cdktf.stringToHclTerraform(struct!.high),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    low: {
      value: cdktf.stringToHclTerraform(struct!.low),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SubnetScServiceAddrsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SubnetScServiceAddrs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._high !== undefined) {
      hasAnyValues = true;
      internalValueResult.high = this._high;
    }
    if (this._low !== undefined) {
      hasAnyValues = true;
      internalValueResult.low = this._low;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SubnetScServiceAddrs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._high = undefined;
      this._low = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._high = value.high;
      this._low = value.low;
    }
  }

  // high - computed: true, optional: true, required: false
  private _high?: string; 
  public get high() {
    return this.getStringAttribute('high');
  }
  public set high(value: string) {
    this._high = value;
  }
  public resetHigh() {
    this._high = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get highInput() {
    return this._high;
  }

  // low - computed: true, optional: true, required: false
  private _low?: string; 
  public get low() {
    return this.getStringAttribute('low');
  }
  public set low(value: string) {
    this._low = value;
  }
  public resetLow() {
    this._low = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lowInput() {
    return this._low;
  }
}

export class SubnetScServiceAddrsList extends cdktf.ComplexList {
  public internalValue? : SubnetScServiceAddrs[] | cdktf.IResolvable

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
  public get(index: number): SubnetScServiceAddrsOutputReference {
    return new SubnetScServiceAddrsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet powerscale_subnet}
*/
export class Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Subnet to import
  * @param importFromId The id of the existing Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/subnet powerscale_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'powerscale_subnet',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addrFamily = config.addrFamily;
    this._description = config.description;
    this._dsrAddrs = config.dsrAddrs;
    this._gateway = config.gateway;
    this._gatewayPriority = config.gatewayPriority;
    this._groupnet = config.groupnet;
    this._mtu = config.mtu;
    this._name = config.name;
    this._prefixlen = config.prefixlen;
    this._scServiceAddrs.internalValue = config.scServiceAddrs;
    this._scServiceName = config.scServiceName;
    this._vlanEnabled = config.vlanEnabled;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // addr_family - computed: false, optional: false, required: true
  private _addrFamily?: string; 
  public get addrFamily() {
    return this.getStringAttribute('addr_family');
  }
  public set addrFamily(value: string) {
    this._addrFamily = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addrFamilyInput() {
    return this._addrFamily;
  }

  // base_addr - computed: true, optional: false, required: false
  public get baseAddr() {
    return this.getStringAttribute('base_addr');
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

  // dsr_addrs - computed: true, optional: true, required: false
  private _dsrAddrs?: string[]; 
  public get dsrAddrs() {
    return cdktf.Fn.tolist(this.getListAttribute('dsr_addrs'));
  }
  public set dsrAddrs(value: string[]) {
    this._dsrAddrs = value;
  }
  public resetDsrAddrs() {
    this._dsrAddrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrAddrsInput() {
    return this._dsrAddrs;
  }

  // gateway - computed: true, optional: true, required: false
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

  // gateway_priority - computed: true, optional: true, required: false
  private _gatewayPriority?: number; 
  public get gatewayPriority() {
    return this.getNumberAttribute('gateway_priority');
  }
  public set gatewayPriority(value: number) {
    this._gatewayPriority = value;
  }
  public resetGatewayPriority() {
    this._gatewayPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayPriorityInput() {
    return this._gatewayPriority;
  }

  // groupnet - computed: false, optional: false, required: true
  private _groupnet?: string; 
  public get groupnet() {
    return this.getStringAttribute('groupnet');
  }
  public set groupnet(value: string) {
    this._groupnet = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnetInput() {
    return this._groupnet;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // pools - computed: true, optional: false, required: false
  public get pools() {
    return cdktf.Fn.tolist(this.getListAttribute('pools'));
  }

  // prefixlen - computed: false, optional: false, required: true
  private _prefixlen?: number; 
  public get prefixlen() {
    return this.getNumberAttribute('prefixlen');
  }
  public set prefixlen(value: number) {
    this._prefixlen = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixlenInput() {
    return this._prefixlen;
  }

  // sc_service_addrs - computed: true, optional: true, required: false
  private _scServiceAddrs = new SubnetScServiceAddrsList(this, "sc_service_addrs", true);
  public get scServiceAddrs() {
    return this._scServiceAddrs;
  }
  public putScServiceAddrs(value: SubnetScServiceAddrs[] | cdktf.IResolvable) {
    this._scServiceAddrs.internalValue = value;
  }
  public resetScServiceAddrs() {
    this._scServiceAddrs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scServiceAddrsInput() {
    return this._scServiceAddrs.internalValue;
  }

  // sc_service_name - computed: true, optional: true, required: false
  private _scServiceName?: string; 
  public get scServiceName() {
    return this.getStringAttribute('sc_service_name');
  }
  public set scServiceName(value: string) {
    this._scServiceName = value;
  }
  public resetScServiceName() {
    this._scServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scServiceNameInput() {
    return this._scServiceName;
  }

  // vlan_enabled - computed: true, optional: true, required: false
  private _vlanEnabled?: boolean | cdktf.IResolvable; 
  public get vlanEnabled() {
    return this.getBooleanAttribute('vlan_enabled');
  }
  public set vlanEnabled(value: boolean | cdktf.IResolvable) {
    this._vlanEnabled = value;
  }
  public resetVlanEnabled() {
    this._vlanEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanEnabledInput() {
    return this._vlanEnabled;
  }

  // vlan_id - computed: true, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      addr_family: cdktf.stringToTerraform(this._addrFamily),
      description: cdktf.stringToTerraform(this._description),
      dsr_addrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._dsrAddrs),
      gateway: cdktf.stringToTerraform(this._gateway),
      gateway_priority: cdktf.numberToTerraform(this._gatewayPriority),
      groupnet: cdktf.stringToTerraform(this._groupnet),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      prefixlen: cdktf.numberToTerraform(this._prefixlen),
      sc_service_addrs: cdktf.listMapper(subnetScServiceAddrsToTerraform, false)(this._scServiceAddrs.internalValue),
      sc_service_name: cdktf.stringToTerraform(this._scServiceName),
      vlan_enabled: cdktf.booleanToTerraform(this._vlanEnabled),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      addr_family: {
        value: cdktf.stringToHclTerraform(this._addrFamily),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsr_addrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._dsrAddrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      gateway: {
        value: cdktf.stringToHclTerraform(this._gateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gateway_priority: {
        value: cdktf.numberToHclTerraform(this._gatewayPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      groupnet: {
        value: cdktf.stringToHclTerraform(this._groupnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefixlen: {
        value: cdktf.numberToHclTerraform(this._prefixlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sc_service_addrs: {
        value: cdktf.listMapperHcl(subnetScServiceAddrsToHclTerraform, false)(this._scServiceAddrs.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SubnetScServiceAddrsList",
      },
      sc_service_name: {
        value: cdktf.stringToHclTerraform(this._scServiceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_enabled: {
        value: cdktf.booleanToHclTerraform(this._vlanEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
