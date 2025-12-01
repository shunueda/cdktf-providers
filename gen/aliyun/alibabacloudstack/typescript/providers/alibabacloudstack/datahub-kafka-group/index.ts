// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatahubKafkaGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group#comment DatahubKafkaGroup#comment}
  */
  readonly comment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group#group_name DatahubKafkaGroup#group_name}
  */
  readonly groupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group#id DatahubKafkaGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group#project_name DatahubKafkaGroup#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group#topic_list DatahubKafkaGroup#topic_list}
  */
  readonly topicList?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group alibabacloudstack_datahub_kafka_group}
*/
export class DatahubKafkaGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_datahub_kafka_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatahubKafkaGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatahubKafkaGroup to import
  * @param importFromId The id of the existing DatahubKafkaGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatahubKafkaGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_datahub_kafka_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/datahub_kafka_group alibabacloudstack_datahub_kafka_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatahubKafkaGroupConfig
  */
  public constructor(scope: Construct, id: string, config: DatahubKafkaGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_datahub_kafka_group',
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
    this._comment = config.comment;
    this._groupName = config.groupName;
    this._id = config.id;
    this._projectName = config.projectName;
    this._topicList = config.topicList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: false, required: true
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // group_name - computed: false, optional: false, required: true
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
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

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // topic_list - computed: false, optional: true, required: false
  private _topicList?: string[]; 
  public get topicList() {
    return cdktf.Fn.tolist(this.getListAttribute('topic_list'));
  }
  public set topicList(value: string[]) {
    this._topicList = value;
  }
  public resetTopicList() {
    this._topicList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topicListInput() {
    return this._topicList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      group_name: cdktf.stringToTerraform(this._groupName),
      id: cdktf.stringToTerraform(this._id),
      project_name: cdktf.stringToTerraform(this._projectName),
      topic_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._topicList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group_name: {
        value: cdktf.stringToHclTerraform(this._groupName),
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
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      topic_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._topicList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
