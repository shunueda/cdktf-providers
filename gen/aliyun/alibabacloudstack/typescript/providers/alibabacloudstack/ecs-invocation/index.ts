// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EcsInvocationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#command_id EcsInvocation#command_id}
  */
  readonly commandId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#id EcsInvocation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#instance_ids EcsInvocation#instance_ids}
  */
  readonly instanceIds: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#repeat_mode EcsInvocation#repeat_mode}
  */
  readonly repeatMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#tags EcsInvocation#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#username EcsInvocation#username}
  */
  readonly username?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation alibabacloudstack_ecs_invocation}
*/
export class EcsInvocation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_ecs_invocation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EcsInvocation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EcsInvocation to import
  * @param importFromId The id of the existing EcsInvocation that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EcsInvocation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_ecs_invocation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/ecs_invocation alibabacloudstack_ecs_invocation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EcsInvocationConfig
  */
  public constructor(scope: Construct, id: string, config: EcsInvocationConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_ecs_invocation',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.20',
        providerVersionConstraint: '3.18.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._commandId = config.commandId;
    this._id = config.id;
    this._instanceIds = config.instanceIds;
    this._repeatMode = config.repeatMode;
    this._tags = config.tags;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // command_id - computed: false, optional: false, required: true
  private _commandId?: string; 
  public get commandId() {
    return this.getStringAttribute('command_id');
  }
  public set commandId(value: string) {
    this._commandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commandIdInput() {
    return this._commandId;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
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

  // instance_ids - computed: false, optional: false, required: true
  private _instanceIds?: string[]; 
  public get instanceIds() {
    return this.getListAttribute('instance_ids');
  }
  public set instanceIds(value: string[]) {
    this._instanceIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdsInput() {
    return this._instanceIds;
  }

  // invocation_id - computed: true, optional: false, required: false
  public get invocationId() {
    return this.getStringAttribute('invocation_id');
  }

  // repeat_mode - computed: false, optional: true, required: false
  private _repeatMode?: string; 
  public get repeatMode() {
    return this.getStringAttribute('repeat_mode');
  }
  public set repeatMode(value: string) {
    this._repeatMode = value;
  }
  public resetRepeatMode() {
    this._repeatMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repeatModeInput() {
    return this._repeatMode;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      command_id: cdktf.stringToTerraform(this._commandId),
      id: cdktf.stringToTerraform(this._id),
      instance_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceIds),
      repeat_mode: cdktf.stringToTerraform(this._repeatMode),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      command_id: {
        value: cdktf.stringToHclTerraform(this._commandId),
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
      instance_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      repeat_mode: {
        value: cdktf.stringToHclTerraform(this._repeatMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
