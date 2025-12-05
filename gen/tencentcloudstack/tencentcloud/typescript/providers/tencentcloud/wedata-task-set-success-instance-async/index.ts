// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataTaskSetSuccessInstanceAsyncConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async#id WedataTaskSetSuccessInstanceAsync#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Instance id list, which can be obtained from ListInstances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async#instance_key_list WedataTaskSetSuccessInstanceAsync#instance_key_list}
  */
  readonly instanceKeyList: string[];
  /**
  * Project Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async#project_id WedataTaskSetSuccessInstanceAsync#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async tencentcloud_wedata_task_set_success_instance_async}
*/
export class WedataTaskSetSuccessInstanceAsync extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_task_set_success_instance_async";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataTaskSetSuccessInstanceAsync resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataTaskSetSuccessInstanceAsync to import
  * @param importFromId The id of the existing WedataTaskSetSuccessInstanceAsync that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataTaskSetSuccessInstanceAsync to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_task_set_success_instance_async", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/wedata_task_set_success_instance_async tencentcloud_wedata_task_set_success_instance_async} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataTaskSetSuccessInstanceAsyncConfig
  */
  public constructor(scope: Construct, id: string, config: WedataTaskSetSuccessInstanceAsyncConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_task_set_success_instance_async',
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
    this._id = config.id;
    this._instanceKeyList = config.instanceKeyList;
    this._projectId = config.projectId;
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

  // instance_key_list - computed: false, optional: false, required: true
  private _instanceKeyList?: string[]; 
  public get instanceKeyList() {
    return cdktf.Fn.tolist(this.getListAttribute('instance_key_list'));
  }
  public set instanceKeyList(value: string[]) {
    this._instanceKeyList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceKeyListInput() {
    return this._instanceKeyList;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_key_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._instanceKeyList),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      instance_key_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._instanceKeyList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
