// https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSolacebrokerMsgVpnClientUsernameAttributeConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Attribute.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute#attribute_name DataSolacebrokerMsgVpnClientUsernameAttribute#attribute_name}
  */
  readonly attributeName: string;
  /**
  * The value of the Attribute.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute#attribute_value DataSolacebrokerMsgVpnClientUsernameAttribute#attribute_value}
  */
  readonly attributeValue: string;
  /**
  * The name of the Client Username.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute#client_username DataSolacebrokerMsgVpnClientUsernameAttribute#client_username}
  */
  readonly clientUsername: string;
  /**
  * The name of the Message VPN.
  * 
  * The minimum access scope/level required to retrieve this attribute is "vpn/read-only".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute#msg_vpn_name DataSolacebrokerMsgVpnClientUsernameAttribute#msg_vpn_name}
  */
  readonly msgVpnName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute solacebroker_msg_vpn_client_username_attribute}
*/
export class DataSolacebrokerMsgVpnClientUsernameAttribute extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solacebroker_msg_vpn_client_username_attribute";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSolacebrokerMsgVpnClientUsernameAttribute resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSolacebrokerMsgVpnClientUsernameAttribute to import
  * @param importFromId The id of the existing DataSolacebrokerMsgVpnClientUsernameAttribute that should be imported. Refer to the {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSolacebrokerMsgVpnClientUsernameAttribute to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solacebroker_msg_vpn_client_username_attribute", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/solaceproducts/solacebroker/1.3.0/docs/data-sources/msg_vpn_client_username_attribute solacebroker_msg_vpn_client_username_attribute} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSolacebrokerMsgVpnClientUsernameAttributeConfig
  */
  public constructor(scope: Construct, id: string, config: DataSolacebrokerMsgVpnClientUsernameAttributeConfig) {
    super(scope, id, {
      terraformResourceType: 'solacebroker_msg_vpn_client_username_attribute',
      terraformGeneratorMetadata: {
        providerName: 'solacebroker',
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
    this._attributeName = config.attributeName;
    this._attributeValue = config.attributeValue;
    this._clientUsername = config.clientUsername;
    this._msgVpnName = config.msgVpnName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attribute_name - computed: false, optional: false, required: true
  private _attributeName?: string; 
  public get attributeName() {
    return this.getStringAttribute('attribute_name');
  }
  public set attributeName(value: string) {
    this._attributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeNameInput() {
    return this._attributeName;
  }

  // attribute_value - computed: false, optional: false, required: true
  private _attributeValue?: string; 
  public get attributeValue() {
    return this.getStringAttribute('attribute_value');
  }
  public set attributeValue(value: string) {
    this._attributeValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeValueInput() {
    return this._attributeValue;
  }

  // client_username - computed: false, optional: false, required: true
  private _clientUsername?: string; 
  public get clientUsername() {
    return this.getStringAttribute('client_username');
  }
  public set clientUsername(value: string) {
    this._clientUsername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clientUsernameInput() {
    return this._clientUsername;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attribute_name: cdktf.stringToTerraform(this._attributeName),
      attribute_value: cdktf.stringToTerraform(this._attributeValue),
      client_username: cdktf.stringToTerraform(this._clientUsername),
      msg_vpn_name: cdktf.stringToTerraform(this._msgVpnName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attribute_name: {
        value: cdktf.stringToHclTerraform(this._attributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attribute_value: {
        value: cdktf.stringToHclTerraform(this._attributeValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_username: {
        value: cdktf.stringToHclTerraform(this._clientUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msg_vpn_name: {
        value: cdktf.stringToHclTerraform(this._msgVpnName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
