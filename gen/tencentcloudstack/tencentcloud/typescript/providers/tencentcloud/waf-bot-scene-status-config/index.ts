// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafBotSceneStatusConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config#domain WafBotSceneStatusConfig#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config#id WafBotSceneStatusConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Scene ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config#scene_id WafBotSceneStatusConfig#scene_id}
  */
  readonly sceneId: string;
  /**
  * Bot status. true - enable; false - disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config#status WafBotSceneStatusConfig#status}
  */
  readonly status: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config tencentcloud_waf_bot_scene_status_config}
*/
export class WafBotSceneStatusConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_waf_bot_scene_status_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafBotSceneStatusConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafBotSceneStatusConfig to import
  * @param importFromId The id of the existing WafBotSceneStatusConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafBotSceneStatusConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_waf_bot_scene_status_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/waf_bot_scene_status_config tencentcloud_waf_bot_scene_status_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafBotSceneStatusConfigConfig
  */
  public constructor(scope: Construct, id: string, config: WafBotSceneStatusConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_waf_bot_scene_status_config',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._id = config.id;
    this._sceneId = config.sceneId;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // scene_id - computed: false, optional: false, required: true
  private _sceneId?: string; 
  public get sceneId() {
    return this.getStringAttribute('scene_id');
  }
  public set sceneId(value: string) {
    this._sceneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sceneIdInput() {
    return this._sceneId;
  }

  // scene_name - computed: true, optional: false, required: false
  public get sceneName() {
    return this.getStringAttribute('scene_name');
  }

  // status - computed: false, optional: false, required: true
  private _status?: boolean | cdktf.IResolvable; 
  public get status() {
    return this.getBooleanAttribute('status');
  }
  public set status(value: boolean | cdktf.IResolvable) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      scene_id: cdktf.stringToTerraform(this._sceneId),
      status: cdktf.booleanToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      scene_id: {
        value: cdktf.stringToHclTerraform(this._sceneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.booleanToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
