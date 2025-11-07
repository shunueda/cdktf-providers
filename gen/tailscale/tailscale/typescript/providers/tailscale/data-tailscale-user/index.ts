// https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/data-sources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTailscaleUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The unique identifier for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/data-sources/user#id DataTailscaleUser#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The emailish login name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/data-sources/user#login_name DataTailscaleUser#login_name}
  */
  readonly loginName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/data-sources/user tailscale_user}
*/
export class DataTailscaleUser extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tailscale_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTailscaleUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTailscaleUser to import
  * @param importFromId The id of the existing DataTailscaleUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/data-sources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTailscaleUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tailscale_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tailscale/tailscale/0.24.0/docs/data-sources/user tailscale_user} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTailscaleUserConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTailscaleUserConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tailscale_user',
      terraformGeneratorMetadata: {
        providerName: 'tailscale',
        providerVersion: '0.24.0'
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
    this._loginName = config.loginName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // currently_connected - computed: true, optional: false, required: false
  public get currentlyConnected() {
    return this.getBooleanAttribute('currently_connected');
  }

  // device_count - computed: true, optional: false, required: false
  public get deviceCount() {
    return this.getNumberAttribute('device_count');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: false, optional: true, required: false
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

  // last_seen - computed: true, optional: false, required: false
  public get lastSeen() {
    return this.getStringAttribute('last_seen');
  }

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // profile_pic_url - computed: true, optional: false, required: false
  public get profilePicUrl() {
    return this.getStringAttribute('profile_pic_url');
  }

  // role - computed: true, optional: false, required: false
  public get role() {
    return this.getStringAttribute('role');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tailnet_id - computed: true, optional: false, required: false
  public get tailnetId() {
    return this.getStringAttribute('tailnet_id');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      login_name: cdktf.stringToTerraform(this._loginName),
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
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
