// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/distributed_firewalling_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DistributedFirewallingConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to enable Distributed-firewalling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/distributed_firewalling_config#enable_distributed_firewalling DistributedFirewallingConfig#enable_distributed_firewalling}
  */
  readonly enableDistributedFirewalling?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/distributed_firewalling_config#id DistributedFirewallingConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/distributed_firewalling_config aviatrix_distributed_firewalling_config}
*/
export class DistributedFirewallingConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_distributed_firewalling_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DistributedFirewallingConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DistributedFirewallingConfig to import
  * @param importFromId The id of the existing DistributedFirewallingConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/distributed_firewalling_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DistributedFirewallingConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_distributed_firewalling_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/distributed_firewalling_config aviatrix_distributed_firewalling_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DistributedFirewallingConfigConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DistributedFirewallingConfigConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_distributed_firewalling_config',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableDistributedFirewalling = config.enableDistributedFirewalling;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_distributed_firewalling - computed: false, optional: true, required: false
  private _enableDistributedFirewalling?: boolean | cdktf.IResolvable; 
  public get enableDistributedFirewalling() {
    return this.getBooleanAttribute('enable_distributed_firewalling');
  }
  public set enableDistributedFirewalling(value: boolean | cdktf.IResolvable) {
    this._enableDistributedFirewalling = value;
  }
  public resetEnableDistributedFirewalling() {
    this._enableDistributedFirewalling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDistributedFirewallingInput() {
    return this._enableDistributedFirewalling;
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
      enable_distributed_firewalling: cdktf.booleanToTerraform(this._enableDistributedFirewalling),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_distributed_firewalling: {
        value: cdktf.booleanToHclTerraform(this._enableDistributedFirewalling),
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
