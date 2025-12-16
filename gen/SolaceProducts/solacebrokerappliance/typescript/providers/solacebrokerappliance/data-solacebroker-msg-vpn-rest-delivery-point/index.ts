// https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnRestDeliveryPointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point#msg_vpn_name DataSolacebrokerMsgVpnRestDeliveryPoint#msg_vpn_name}
  */
  readonly msgVpnName: string;
  /**
  * The name of the REST Delivery Point.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point#rest_delivery_point_name DataSolacebrokerMsgVpnRestDeliveryPoint#rest_delivery_point_name}
  */
  readonly restDeliveryPointName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point solacebroker_msg_vpn_rest_delivery_point}
*/
export class DataSolacebrokerMsgVpnRestDeliveryPoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_rest_delivery_point";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnRestDeliveryPoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnRestDeliveryPoint to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnRestDeliveryPoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnRestDeliveryPoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_rest_delivery_point", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebrokerappliance/1.3.0/docs/data-sources/solacebroker_msg_vpn_rest_delivery_point solacebroker_msg_vpn_rest_delivery_point} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnRestDeliveryPointConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnRestDeliveryPointConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_rest_delivery_point',
      terraformGeneratorMetadata: {
        providerName: 'solacebrokerappliance',
        providerVersion: '1.3.0',
        providerVersionConstraint: '1.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._msgVpnName = config.msgVpnName;
    this._restDeliveryPointName = config.restDeliveryPointName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // client_profile_name - computed: true, optional: false, required: false
  public get clientProfileName() {
    return this.getStringAttribute('client_profile_name');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // msg_vpn_name - computed: false, optional: false, required: true
  private _msgVpnName?: string; 
  public get msgVpnName() {
    return this.getStringAttribute('msg_vpn_name');
  }
  public set msgVpnName(value: string) {
    this._msgVpnName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgVpnNameInput() {
    return this._msgVpnName;
  }

  // rest_delivery_point_name - computed: false, optional: false, required: true
  private _restDeliveryPointName?: string; 
  public get restDeliveryPointName() {
    return this.getStringAttribute('rest_delivery_point_name');
  }
  public set restDeliveryPointName(value: string) {
    this._restDeliveryPointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get restDeliveryPointNameInput() {
    return this._restDeliveryPointName;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }

  // vendor - computed: true, optional: false, required: false
  public get vendor() {
    return this.getStringAttribute('vendor');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
      rest_delivery_point_name: cdktf.stringToTerraform(this._restDeliveryPointName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rest_delivery_point_name: {
        value: cdktf.stringToHclTerraform(this._restDeliveryPointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
