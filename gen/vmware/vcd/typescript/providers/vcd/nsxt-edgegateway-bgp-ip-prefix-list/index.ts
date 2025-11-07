// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxtEdgegatewayBgpIpPrefixListConfig extends cdktf.TerraformMetaArguments {
  /**
  * BGP IP Prefix List description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#description NsxtEdgegatewayBgpIpPrefixList#description}
  */
  readonly description?: string;
  /**
  * Edge gateway ID for BGP IP Prefix List Configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#edge_gateway_id NsxtEdgegatewayBgpIpPrefixList#edge_gateway_id}
  */
  readonly edgeGatewayId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#id NsxtEdgegatewayBgpIpPrefixList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * BGP IP Prefix List name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#name NsxtEdgegatewayBgpIpPrefixList#name}
  */
  readonly name: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#org NsxtEdgegatewayBgpIpPrefixList#org}
  */
  readonly org?: string;
  /**
  * ip_prefix block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#ip_prefix NsxtEdgegatewayBgpIpPrefixList#ip_prefix}
  */
  readonly ipPrefix: NsxtEdgegatewayBgpIpPrefixListIpPrefix[] | cdktf.IResolvable;
}
export interface NsxtEdgegatewayBgpIpPrefixListIpPrefix {
  /**
  * Action 'PERMIT' or 'DENY'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#action NsxtEdgegatewayBgpIpPrefixList#action}
  */
  readonly action: string;
  /**
  * Greater than or equal to subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#greater_than_or_equal_to NsxtEdgegatewayBgpIpPrefixList#greater_than_or_equal_to}
  */
  readonly greaterThanOrEqualTo?: number;
  /**
  * Less than or equal to subnet mask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#less_than_or_equal_to NsxtEdgegatewayBgpIpPrefixList#less_than_or_equal_to}
  */
  readonly lessThanOrEqualTo?: number;
  /**
  * Network in CIDR notation (e.g. '192.168.100.0/24', '2001:db8::/48')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#network NsxtEdgegatewayBgpIpPrefixList#network}
  */
  readonly network: string;
}

export function nsxtEdgegatewayBgpIpPrefixListIpPrefixToTerraform(struct?: NsxtEdgegatewayBgpIpPrefixListIpPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    greater_than_or_equal_to: cdktf.numberToTerraform(struct!.greaterThanOrEqualTo),
    less_than_or_equal_to: cdktf.numberToTerraform(struct!.lessThanOrEqualTo),
    network: cdktf.stringToTerraform(struct!.network),
  }
}


export function nsxtEdgegatewayBgpIpPrefixListIpPrefixToHclTerraform(struct?: NsxtEdgegatewayBgpIpPrefixListIpPrefix | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    greater_than_or_equal_to: {
      value: cdktf.numberToHclTerraform(struct!.greaterThanOrEqualTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    less_than_or_equal_to: {
      value: cdktf.numberToHclTerraform(struct!.lessThanOrEqualTo),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network: {
      value: cdktf.stringToHclTerraform(struct!.network),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NsxtEdgegatewayBgpIpPrefixListIpPrefixOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NsxtEdgegatewayBgpIpPrefixListIpPrefix | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._greaterThanOrEqualTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.greaterThanOrEqualTo = this._greaterThanOrEqualTo;
    }
    if (this._lessThanOrEqualTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.lessThanOrEqualTo = this._lessThanOrEqualTo;
    }
    if (this._network !== undefined) {
      hasAnyValues = true;
      internalValueResult.network = this._network;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NsxtEdgegatewayBgpIpPrefixListIpPrefix | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._greaterThanOrEqualTo = undefined;
      this._lessThanOrEqualTo = undefined;
      this._network = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._greaterThanOrEqualTo = value.greaterThanOrEqualTo;
      this._lessThanOrEqualTo = value.lessThanOrEqualTo;
      this._network = value.network;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // greater_than_or_equal_to - computed: false, optional: true, required: false
  private _greaterThanOrEqualTo?: number; 
  public get greaterThanOrEqualTo() {
    return this.getNumberAttribute('greater_than_or_equal_to');
  }
  public set greaterThanOrEqualTo(value: number) {
    this._greaterThanOrEqualTo = value;
  }
  public resetGreaterThanOrEqualTo() {
    this._greaterThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get greaterThanOrEqualToInput() {
    return this._greaterThanOrEqualTo;
  }

  // less_than_or_equal_to - computed: false, optional: true, required: false
  private _lessThanOrEqualTo?: number; 
  public get lessThanOrEqualTo() {
    return this.getNumberAttribute('less_than_or_equal_to');
  }
  public set lessThanOrEqualTo(value: number) {
    this._lessThanOrEqualTo = value;
  }
  public resetLessThanOrEqualTo() {
    this._lessThanOrEqualTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lessThanOrEqualToInput() {
    return this._lessThanOrEqualTo;
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
}

export class NsxtEdgegatewayBgpIpPrefixListIpPrefixList extends cdktf.ComplexList {
  public internalValue? : NsxtEdgegatewayBgpIpPrefixListIpPrefix[] | cdktf.IResolvable

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
  public get(index: number): NsxtEdgegatewayBgpIpPrefixListIpPrefixOutputReference {
    return new NsxtEdgegatewayBgpIpPrefixListIpPrefixOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list vcd_nsxt_edgegateway_bgp_ip_prefix_list}
*/
export class NsxtEdgegatewayBgpIpPrefixList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxt_edgegateway_bgp_ip_prefix_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxtEdgegatewayBgpIpPrefixList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxtEdgegatewayBgpIpPrefixList to import
  * @param importFromId The id of the existing NsxtEdgegatewayBgpIpPrefixList that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxtEdgegatewayBgpIpPrefixList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxt_edgegateway_bgp_ip_prefix_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxt_edgegateway_bgp_ip_prefix_list vcd_nsxt_edgegateway_bgp_ip_prefix_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxtEdgegatewayBgpIpPrefixListConfig
  */
  public constructor(scope: Construct, id: string, config: NsxtEdgegatewayBgpIpPrefixListConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxt_edgegateway_bgp_ip_prefix_list',
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
    this._description = config.description;
    this._edgeGatewayId = config.edgeGatewayId;
    this._id = config.id;
    this._name = config.name;
    this._org = config.org;
    this._ipPrefix.internalValue = config.ipPrefix;
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

  // edge_gateway_id - computed: false, optional: false, required: true
  private _edgeGatewayId?: string; 
  public get edgeGatewayId() {
    return this.getStringAttribute('edge_gateway_id');
  }
  public set edgeGatewayId(value: string) {
    this._edgeGatewayId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayIdInput() {
    return this._edgeGatewayId;
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

  // ip_prefix - computed: false, optional: false, required: true
  private _ipPrefix = new NsxtEdgegatewayBgpIpPrefixListIpPrefixList(this, "ip_prefix", true);
  public get ipPrefix() {
    return this._ipPrefix;
  }
  public putIpPrefix(value: NsxtEdgegatewayBgpIpPrefixListIpPrefix[] | cdktf.IResolvable) {
    this._ipPrefix.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrefixInput() {
    return this._ipPrefix.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      edge_gateway_id: cdktf.stringToTerraform(this._edgeGatewayId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      org: cdktf.stringToTerraform(this._org),
      ip_prefix: cdktf.listMapper(nsxtEdgegatewayBgpIpPrefixListIpPrefixToTerraform, true)(this._ipPrefix.internalValue),
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
      edge_gateway_id: {
        value: cdktf.stringToHclTerraform(this._edgeGatewayId),
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
      ip_prefix: {
        value: cdktf.listMapperHcl(nsxtEdgegatewayBgpIpPrefixListIpPrefixToHclTerraform, true)(this._ipPrefix.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "NsxtEdgegatewayBgpIpPrefixListIpPrefixList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
