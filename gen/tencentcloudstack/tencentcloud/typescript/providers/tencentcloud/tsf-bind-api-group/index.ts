// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfBindApiGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * gateway group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group#gateway_deploy_group_id TsfBindApiGroup#gateway_deploy_group_id}
  */
  readonly gatewayDeployGroupId: string;
  /**
  * group id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group#group_id TsfBindApiGroup#group_id}
  */
  readonly groupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group#id TsfBindApiGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group tencentcloud_tsf_bind_api_group}
*/
export class TsfBindApiGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_bind_api_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfBindApiGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfBindApiGroup to import
  * @param importFromId The id of the existing TsfBindApiGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfBindApiGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_bind_api_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/tsf_bind_api_group tencentcloud_tsf_bind_api_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfBindApiGroupConfig
  */
  public constructor(scope: Construct, id: string, config: TsfBindApiGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_bind_api_group',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gatewayDeployGroupId = config.gatewayDeployGroupId;
    this._groupId = config.groupId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gateway_deploy_group_id - computed: false, optional: false, required: true
  private _gatewayDeployGroupId?: string; 
  public get gatewayDeployGroupId() {
    return this.getStringAttribute('gateway_deploy_group_id');
  }
  public set gatewayDeployGroupId(value: string) {
    this._gatewayDeployGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayDeployGroupIdInput() {
    return this._gatewayDeployGroupId;
  }

  // group_id - computed: false, optional: false, required: true
  private _groupId?: string; 
  public get groupId() {
    return this.getStringAttribute('group_id');
  }
  public set groupId(value: string) {
    this._groupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
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
      gateway_deploy_group_id: cdktf.stringToTerraform(this._gatewayDeployGroupId),
      group_id: cdktf.stringToTerraform(this._groupId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gateway_deploy_group_id: {
        value: cdktf.stringToHclTerraform(this._gatewayDeployGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_id: {
        value: cdktf.stringToHclTerraform(this._groupId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
