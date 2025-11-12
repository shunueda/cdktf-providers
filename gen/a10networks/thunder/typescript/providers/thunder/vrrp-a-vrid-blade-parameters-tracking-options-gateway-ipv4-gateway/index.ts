// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway#id VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway#ip_address VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway#ip_address}
  */
  readonly ipAddress: string;
  /**
  * The amount the priority will decrease
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway#priority_cost VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway#priority_cost}
  */
  readonly priorityCost?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway#uuid VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway#uuid}
  */
  readonly uuid?: string;
  /**
  * VridVal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway#vrid_val VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway#vrid_val}
  */
  readonly vridVal: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway}
*/
export class VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway to import
  * @param importFromId The id of the existing VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpAVridBladeParametersTrackingOptionsGatewayIpv4Gateway to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayConfig
  */
  public constructor(scope: Construct, id: string, config: VrrpAVridBladeParametersTrackingOptionsGatewayIpv4GatewayConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_vrid_blade_parameters_tracking_options_gateway_ipv4_gateway',
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
    this._ipAddress = config.ipAddress;
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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
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
      ip_address: cdktf.stringToTerraform(this._ipAddress),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
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
