// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DcShareDcxConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * the direct connect owner accept or reject the apply of direct connect tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config#direct_connect_tunnel_id DcShareDcxConfig#direct_connect_tunnel_id}
  */
  readonly directConnectTunnelId: string;
  /**
  * if accept or reject direct connect tunnel.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config#enable DcShareDcxConfig#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config#id DcShareDcxConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config tencentcloud_dc_share_dcx_config}
*/
export class DcShareDcxConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dc_share_dcx_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DcShareDcxConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DcShareDcxConfig to import
  * @param importFromId The id of the existing DcShareDcxConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DcShareDcxConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dc_share_dcx_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dc_share_dcx_config tencentcloud_dc_share_dcx_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DcShareDcxConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DcShareDcxConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dc_share_dcx_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directConnectTunnelId = config.directConnectTunnelId;
    this._enable = config.enable;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // direct_connect_tunnel_id - computed: false, optional: false, required: true
  private _directConnectTunnelId?: string; 
  public get directConnectTunnelId() {
    return this.getStringAttribute('direct_connect_tunnel_id');
  }
  public set directConnectTunnelId(value: string) {
    this._directConnectTunnelId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectTunnelIdInput() {
    return this._directConnectTunnelId;
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      direct_connect_tunnel_id: cdktf.stringToTerraform(this._directConnectTunnelId),
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      direct_connect_tunnel_id: {
        value: cdktf.stringToHclTerraform(this._directConnectTunnelId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
