// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlcUserVpcConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Engine network ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#engine_network_id DlcUserVpcConnection#engine_network_id}
  */
  readonly engineNetworkId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#id DlcUserVpcConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * User subnet ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#user_subnet_id DlcUserVpcConnection#user_subnet_id}
  */
  readonly userSubnetId: string;
  /**
  * User vpc endpoint name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#user_vpc_endpoint_name DlcUserVpcConnection#user_vpc_endpoint_name}
  */
  readonly userVpcEndpointName: string;
  /**
  * Manually specify VIP, if not filled in, an IP address under the subnet will be automatically assigned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#user_vpc_endpoint_vip DlcUserVpcConnection#user_vpc_endpoint_vip}
  */
  readonly userVpcEndpointVip?: string;
  /**
  * User vpc ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#user_vpc_id DlcUserVpcConnection#user_vpc_id}
  */
  readonly userVpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection tencentcloud_dlc_user_vpc_connection}
*/
export class DlcUserVpcConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dlc_user_vpc_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlcUserVpcConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlcUserVpcConnection to import
  * @param importFromId The id of the existing DlcUserVpcConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlcUserVpcConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dlc_user_vpc_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/dlc_user_vpc_connection tencentcloud_dlc_user_vpc_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlcUserVpcConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: DlcUserVpcConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dlc_user_vpc_connection',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineNetworkId = config.engineNetworkId;
    this._id = config.id;
    this._userSubnetId = config.userSubnetId;
    this._userVpcEndpointName = config.userVpcEndpointName;
    this._userVpcEndpointVip = config.userVpcEndpointVip;
    this._userVpcId = config.userVpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engine_network_id - computed: false, optional: false, required: true
  private _engineNetworkId?: string; 
  public get engineNetworkId() {
    return this.getStringAttribute('engine_network_id');
  }
  public set engineNetworkId(value: string) {
    this._engineNetworkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineNetworkIdInput() {
    return this._engineNetworkId;
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

  // user_subnet_id - computed: false, optional: false, required: true
  private _userSubnetId?: string; 
  public get userSubnetId() {
    return this.getStringAttribute('user_subnet_id');
  }
  public set userSubnetId(value: string) {
    this._userSubnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userSubnetIdInput() {
    return this._userSubnetId;
  }

  // user_vpc_endpoint_id - computed: true, optional: false, required: false
  public get userVpcEndpointId() {
    return this.getStringAttribute('user_vpc_endpoint_id');
  }

  // user_vpc_endpoint_name - computed: false, optional: false, required: true
  private _userVpcEndpointName?: string; 
  public get userVpcEndpointName() {
    return this.getStringAttribute('user_vpc_endpoint_name');
  }
  public set userVpcEndpointName(value: string) {
    this._userVpcEndpointName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVpcEndpointNameInput() {
    return this._userVpcEndpointName;
  }

  // user_vpc_endpoint_vip - computed: false, optional: true, required: false
  private _userVpcEndpointVip?: string; 
  public get userVpcEndpointVip() {
    return this.getStringAttribute('user_vpc_endpoint_vip');
  }
  public set userVpcEndpointVip(value: string) {
    this._userVpcEndpointVip = value;
  }
  public resetUserVpcEndpointVip() {
    this._userVpcEndpointVip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userVpcEndpointVipInput() {
    return this._userVpcEndpointVip;
  }

  // user_vpc_id - computed: false, optional: false, required: true
  private _userVpcId?: string; 
  public get userVpcId() {
    return this.getStringAttribute('user_vpc_id');
  }
  public set userVpcId(value: string) {
    this._userVpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userVpcIdInput() {
    return this._userVpcId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_network_id: cdktf.stringToTerraform(this._engineNetworkId),
      id: cdktf.stringToTerraform(this._id),
      user_subnet_id: cdktf.stringToTerraform(this._userSubnetId),
      user_vpc_endpoint_name: cdktf.stringToTerraform(this._userVpcEndpointName),
      user_vpc_endpoint_vip: cdktf.stringToTerraform(this._userVpcEndpointVip),
      user_vpc_id: cdktf.stringToTerraform(this._userVpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_network_id: {
        value: cdktf.stringToHclTerraform(this._engineNetworkId),
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
      user_subnet_id: {
        value: cdktf.stringToHclTerraform(this._userSubnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_vpc_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._userVpcEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_vpc_endpoint_vip: {
        value: cdktf.stringToHclTerraform(this._userVpcEndpointVip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_vpc_id: {
        value: cdktf.stringToHclTerraform(this._userVpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
