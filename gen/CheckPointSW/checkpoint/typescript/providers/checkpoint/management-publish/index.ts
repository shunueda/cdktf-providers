// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ManagementPublishConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish#id ManagementPublish#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Destroy publish resource will run publish when flag set to true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish#run_publish_on_destroy ManagementPublish#run_publish_on_destroy}
  */
  readonly runPublishOnDestroy?: boolean | cdktf.IResolvable;
  /**
  * Triggers a publish if there are any changes to objects in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish#triggers ManagementPublish#triggers}
  */
  readonly triggers?: string[];
  /**
  * Session unique identifier. Specify it to publish a different session than the one you currently use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish#uid ManagementPublish#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish checkpoint_management_publish}
*/
export class ManagementPublish extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_publish";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ManagementPublish resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ManagementPublish to import
  * @param importFromId The id of the existing ManagementPublish that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ManagementPublish to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_publish", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/resources/management_publish checkpoint_management_publish} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ManagementPublishConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ManagementPublishConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_publish',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
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
    this._runPublishOnDestroy = config.runPublishOnDestroy;
    this._triggers = config.triggers;
    this._uid = config.uid;
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

  // run_publish_on_destroy - computed: false, optional: true, required: false
  private _runPublishOnDestroy?: boolean | cdktf.IResolvable; 
  public get runPublishOnDestroy() {
    return this.getBooleanAttribute('run_publish_on_destroy');
  }
  public set runPublishOnDestroy(value: boolean | cdktf.IResolvable) {
    this._runPublishOnDestroy = value;
  }
  public resetRunPublishOnDestroy() {
    this._runPublishOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runPublishOnDestroyInput() {
    return this._runPublishOnDestroy;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // triggers - computed: false, optional: true, required: false
  private _triggers?: string[]; 
  public get triggers() {
    return cdktf.Fn.tolist(this.getListAttribute('triggers'));
  }
  public set triggers(value: string[]) {
    this._triggers = value;
  }
  public resetTriggers() {
    this._triggers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggersInput() {
    return this._triggers;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      run_publish_on_destroy: cdktf.booleanToTerraform(this._runPublishOnDestroy),
      triggers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._triggers),
      uid: cdktf.stringToTerraform(this._uid),
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
      run_publish_on_destroy: {
        value: cdktf.booleanToHclTerraform(this._runPublishOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      triggers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._triggers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
