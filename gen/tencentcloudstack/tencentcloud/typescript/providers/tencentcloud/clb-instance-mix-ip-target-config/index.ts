// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClbInstanceMixIpTargetConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config#id ClbInstanceMixIpTargetConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of CLB instances to be queried.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config#load_balancer_id ClbInstanceMixIpTargetConfig#load_balancer_id}
  */
  readonly loadBalancerId: string;
  /**
  * False: closed True:open.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config#mix_ip_target ClbInstanceMixIpTargetConfig#mix_ip_target}
  */
  readonly mixIpTarget: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config tencentcloud_clb_instance_mix_ip_target_config}
*/
export class ClbInstanceMixIpTargetConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_clb_instance_mix_ip_target_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClbInstanceMixIpTargetConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClbInstanceMixIpTargetConfig to import
  * @param importFromId The id of the existing ClbInstanceMixIpTargetConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClbInstanceMixIpTargetConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_clb_instance_mix_ip_target_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/clb_instance_mix_ip_target_config tencentcloud_clb_instance_mix_ip_target_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClbInstanceMixIpTargetConfigConfig
  */
  public constructor(scope: Construct, id: string, config: ClbInstanceMixIpTargetConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_clb_instance_mix_ip_target_config',
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
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._mixIpTarget = config.mixIpTarget;
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

  // load_balancer_id - computed: false, optional: false, required: true
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // mix_ip_target - computed: false, optional: false, required: true
  private _mixIpTarget?: boolean | cdktf.IResolvable; 
  public get mixIpTarget() {
    return this.getBooleanAttribute('mix_ip_target');
  }
  public set mixIpTarget(value: boolean | cdktf.IResolvable) {
    this._mixIpTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mixIpTargetInput() {
    return this._mixIpTarget;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      mix_ip_target: cdktf.booleanToTerraform(this._mixIpTarget),
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
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mix_ip_target: {
        value: cdktf.booleanToHclTerraform(this._mixIpTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
