// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway#id VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway#ipv6_address VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway#ipv6_address}
  */
  readonly ipv6Address: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway#priority_cost VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway#uuid VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway#uuid}
  */
  readonly uuid?: string;
  /**
  * VridVal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway#vrid_val VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway#vrid_val}
  */
  readonly vridVal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway}
*/
export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway to import
  * @param importFromId The id of the existing VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAVridBladeParametersTrackingOptionsGatewayIpv6Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAVridBladeParametersTrackingOptionsGatewayIpv6GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv6_gateway',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
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
    this._ipv6Address = config.ipv6Address;
    this._priorityCost = config.priorityCost;
    this._uuid = config.uuid;
    this._vridVal = config.vridVal;
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

  // ipv6_address - computed: false, optional: false, required: true
  private _ipv6Address?: string; 
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }
  public set ipv6Address(value: string) {
    this._ipv6Address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6AddressInput() {
    return this._ipv6Address;
  }

  // priority_cost - computed: false, optional: true, required: false
  private _priorityCost?: number; 
  public get priorityCost() {
    return this.getNumberAttribute('priority_cost');
  }
  public set priorityCost(value: number) {
    this._priorityCost = value;
  }
  public resetPriorityCost() {
    this._priorityCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityCostInput() {
    return this._priorityCost;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // vrid_val - computed: false, optional: false, required: true
  private _vridVal?: string; 
  public get vridVal() {
    return this.getStringAttribute('vrid_val');
  }
  public set vridVal(value: string) {
    this._vridVal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vridValInput() {
    return this._vridVal;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ipv6_address: cdktf.stringToTerraform(this._ipv6Address),
      priority_cost: cdktf.numberToTerraform(this._priorityCost),
      uuid: cdktf.stringToTerraform(this._uuid),
      vrid_val: cdktf.stringToTerraform(this._vridVal),
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
      ipv6_address: {
        value: cdktf.stringToHclTerraform(this._ipv6Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority_cost: {
        value: cdktf.numberToHclTerraform(this._priorityCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrid_val: {
        value: cdktf.stringToHclTerraform(this._vridVal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
