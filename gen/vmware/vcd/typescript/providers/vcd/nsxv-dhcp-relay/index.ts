// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxvDhcpRelayConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of IP domain names of DHCP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#domain_names NsxvDhcpRelay#domain_names}
  */
  readonly domainNames?: string[];
  /**
  * Edge gateway name for DHCP relay settings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#edge_gateway NsxvDhcpRelay#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#id NsxvDhcpRelay#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A set of IP address of DHCP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#ip_addresses NsxvDhcpRelay#ip_addresses}
  */
  readonly ipAddresses?: string[];
  /**
  * A set of IP set names which consist DHCP servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#ip_sets NsxvDhcpRelay#ip_sets}
  */
  readonly ipSets?: string[];
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#org NsxvDhcpRelay#org}
  */
  readonly org?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#vdc NsxvDhcpRelay#vdc}
  */
  readonly vdc?: string;
  /**
  * relay_agent block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#relay_agent NsxvDhcpRelay#relay_agent}
  */
  readonly relayAgent: NsxvDhcpRelayRelayAgent[] | cdktf.IResolvable;
}
export interface NsxvDhcpRelayRelayAgent {
  /**
  * Optional gateway IP address of org network which is to be used for relaying DHCP message to specified servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#gateway_ip_address NsxvDhcpRelay#gateway_ip_address}
  */
  readonly gatewayIpAddress?: string;
  /**
  * Org network which is to be used for relaying DHCP message to specified servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#network_name NsxvDhcpRelay#network_name}
  */
  readonly networkName: string;
}

export function nsxvDhcpRelayRelayAgentToTerraform(struct?: NsxvDhcpRelayRelayAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gateway_ip_address: cdktf.stringToTerraform(struct!.gatewayIpAddress),
    network_name: cdktf.stringToTerraform(struct!.networkName),
  }
}


export function nsxvDhcpRelayRelayAgentToHclTerraform(struct?: NsxvDhcpRelayRelayAgent | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gateway_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.gatewayIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    network_name: {
      value: cdktf.stringToHclTerraform(struct!.networkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxvDhcpRelayRelayAgentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxvDhcpRelayRelayAgent | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gatewayIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.gatewayIpAddress = this._gatewayIpAddress;
    }
    if (this._networkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkName = this._networkName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxvDhcpRelayRelayAgent | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gatewayIpAddress = undefined;
      this._networkName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gatewayIpAddress = value.gatewayIpAddress;
      this._networkName = value.networkName;
    }
  }

  // gateway_ip_address - computed: true, optional: true, required: false
  private _gatewayIpAddress?: string; 
  public get gatewayIpAddress() {
    return this.getStringAttribute('gateway_ip_address');
  }
  public set gatewayIpAddress(value: string) {
    this._gatewayIpAddress = value;
  }
  public resetGatewayIpAddress() {
    this._gatewayIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayIpAddressInput() {
    return this._gatewayIpAddress;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }
}

export class NsxvDhcpRelayRelayAgentList extends cdktf.ComplexList {
  public internalValue? : NsxvDhcpRelayRelayAgent[] | cdktf.IResolvable

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
  public get(index: number): NsxvDhcpRelayRelayAgentOutputReference {
    return new NsxvDhcpRelayRelayAgentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay vcd_nsxv_dhcp_relay}
*/
export class NsxvDhcpRelay extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxv_dhcp_relay";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxvDhcpRelay resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxvDhcpRelay to import
  * @param importFromId The id of the existing NsxvDhcpRelay that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxvDhcpRelay to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxv_dhcp_relay", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dhcp_relay vcd_nsxv_dhcp_relay} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxvDhcpRelayConfig
  */
  public constructor(scope: Construct, id: string, config: NsxvDhcpRelayConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxv_dhcp_relay',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainNames = config.domainNames;
    this._edgeGateway = config.edgeGateway;
    this._id = config.id;
    this._ipAddresses = config.ipAddresses;
    this._ipSets = config.ipSets;
    this._org = config.org;
    this._vdc = config.vdc;
    this._relayAgent.internalValue = config.relayAgent;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_names - computed: false, optional: true, required: false
  private _domainNames?: string[]; 
  public get domainNames() {
    return cdktf.Fn.tolist(this.getListAttribute('domain_names'));
  }
  public set domainNames(value: string[]) {
    this._domainNames = value;
  }
  public resetDomainNames() {
    this._domainNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNamesInput() {
    return this._domainNames;
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

  // ip_addresses - computed: false, optional: true, required: false
  private _ipAddresses?: string[]; 
  public get ipAddresses() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_addresses'));
  }
  public set ipAddresses(value: string[]) {
    this._ipAddresses = value;
  }
  public resetIpAddresses() {
    this._ipAddresses = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressesInput() {
    return this._ipAddresses;
  }

  // ip_sets - computed: false, optional: true, required: false
  private _ipSets?: string[]; 
  public get ipSets() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_sets'));
  }
  public set ipSets(value: string[]) {
    this._ipSets = value;
  }
  public resetIpSets() {
    this._ipSets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSetsInput() {
    return this._ipSets;
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

  // relay_agent - computed: false, optional: false, required: true
  private _relayAgent = new NsxvDhcpRelayRelayAgentList(this, "relay_agent", true);
  public get relayAgent() {
    return this._relayAgent;
  }
  public putRelayAgent(value: NsxvDhcpRelayRelayAgent[] | cdktf.IResolvable) {
    this._relayAgent.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relayAgentInput() {
    return this._relayAgent.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_names: cdktf.listMapper(cdktf.stringToTerraform, false)(this._domainNames),
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      id: cdktf.stringToTerraform(this._id),
      ip_addresses: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipAddresses),
      ip_sets: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ipSets),
      org: cdktf.stringToTerraform(this._org),
      vdc: cdktf.stringToTerraform(this._vdc),
      relay_agent: cdktf.listMapper(nsxvDhcpRelayRelayAgentToTerraform, true)(this._relayAgent.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_names: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._domainNames),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
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
      ip_addresses: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipAddresses),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ip_sets: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ipSets),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
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
      relay_agent: {
        value: cdktf.listMapperHcl(nsxvDhcpRelayRelayAgentToHclTerraform, true)(this._relayAgent.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxvDhcpRelayRelayAgentList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
