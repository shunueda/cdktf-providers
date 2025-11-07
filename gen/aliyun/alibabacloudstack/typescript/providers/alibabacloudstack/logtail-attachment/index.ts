// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogtailAttachmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment#id LogtailAttachment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment#logtail_config_name LogtailAttachment#logtail_config_name}
  */
  readonly logtailConfigName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment#machine_group_name LogtailAttachment#machine_group_name}
  */
  readonly machineGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment#project LogtailAttachment#project}
  */
  readonly project: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment alibabacloudstack_logtail_attachment}
*/
export class LogtailAttachment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_logtail_attachment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogtailAttachment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogtailAttachment to import
  * @param importFromId The id of the existing LogtailAttachment that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogtailAttachment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_logtail_attachment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.19/docs/resources/logtail_attachment alibabacloudstack_logtail_attachment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogtailAttachmentConfig
  */
  public constructor(scope: Construct, id: string, config: LogtailAttachmentConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_logtail_attachment',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.19'
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
    this._logtailConfigName = config.logtailConfigName;
    this._machineGroupName = config.machineGroupName;
    this._project = config.project;
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

  // logtail_config_name - computed: false, optional: false, required: true
  private _logtailConfigName?: string; 
  public get logtailConfigName() {
    return this.getStringAttribute('logtail_config_name');
  }
  public set logtailConfigName(value: string) {
    this._logtailConfigName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logtailConfigNameInput() {
    return this._logtailConfigName;
  }

  // machine_group_name - computed: false, optional: false, required: true
  private _machineGroupName?: string; 
  public get machineGroupName() {
    return this.getStringAttribute('machine_group_name');
  }
  public set machineGroupName(value: string) {
    this._machineGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get machineGroupNameInput() {
    return this._machineGroupName;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      logtail_config_name: cdktf.stringToTerraform(this._logtailConfigName),
      machine_group_name: cdktf.stringToTerraform(this._machineGroupName),
      project: cdktf.stringToTerraform(this._project),
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
      logtail_config_name: {
        value: cdktf.stringToHclTerraform(this._logtailConfigName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      machine_group_name: {
        value: cdktf.stringToHclTerraform(this._machineGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
