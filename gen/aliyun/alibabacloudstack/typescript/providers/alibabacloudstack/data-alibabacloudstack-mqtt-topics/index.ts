// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAlibabacloudstackMqttTopicsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics#id DataAlibabacloudstackMqttTopics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics#ids DataAlibabacloudstackMqttTopics#ids}
  */
  readonly ids?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics#name_regex DataAlibabacloudstackMqttTopics#name_regex}
  */
  readonly nameRegex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics#store_instance_id DataAlibabacloudstackMqttTopics#store_instance_id}
  */
  readonly storeInstanceId: string;
}
export interface DataAlibabacloudstackMqttTopicsTopics {
}

export function dataAlibabacloudstackMqttTopicsTopicsToTerraform(struct?: DataAlibabacloudstackMqttTopicsTopics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataAlibabacloudstackMqttTopicsTopicsToHclTerraform(struct?: DataAlibabacloudstackMqttTopicsTopics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataAlibabacloudstackMqttTopicsTopicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataAlibabacloudstackMqttTopicsTopics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataAlibabacloudstackMqttTopicsTopics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // channel_id - computed: true, optional: false, required: false
  public get channelId() {
    return this.getNumberAttribute('channel_id');
  }

  // channel_name - computed: true, optional: false, required: false
  public get channelName() {
    return this.getStringAttribute('channel_name');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // independent_naming - computed: true, optional: false, required: false
  public get independentNaming() {
    return this.getBooleanAttribute('independent_naming');
  }

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // order_type - computed: true, optional: false, required: false
  public get orderType() {
    return this.getNumberAttribute('order_type');
  }

  // relation - computed: true, optional: false, required: false
  public get relation() {
    return this.getNumberAttribute('relation');
  }

  // relation_name - computed: true, optional: false, required: false
  public get relationName() {
    return this.getStringAttribute('relation_name');
  }

  // remark - computed: true, optional: false, required: false
  public get remark() {
    return this.getStringAttribute('remark');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getNumberAttribute('status');
  }

  // status_name - computed: true, optional: false, required: false
  public get statusName() {
    return this.getStringAttribute('status_name');
  }

  // store_instance_id - computed: true, optional: false, required: false
  public get storeInstanceId() {
    return this.getStringAttribute('store_instance_id');
  }

  // topic - computed: true, optional: false, required: false
  public get topic() {
    return this.getStringAttribute('topic');
  }

  // unit_flag - computed: true, optional: false, required: false
  public get unitFlag() {
    return this.getBooleanAttribute('unit_flag');
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
}

export class DataAlibabacloudstackMqttTopicsTopicsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataAlibabacloudstackMqttTopicsTopicsOutputReference {
    return new DataAlibabacloudstackMqttTopicsTopicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics alibabacloudstack_mqtt_topics}
*/
export class DataAlibabacloudstackMqttTopics extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alibabacloudstack_mqtt_topics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAlibabacloudstackMqttTopics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAlibabacloudstackMqttTopics to import
  * @param importFromId The id of the existing DataAlibabacloudstackMqttTopics that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAlibabacloudstackMqttTopics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alibabacloudstack_mqtt_topics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/data-sources/mqtt_topics alibabacloudstack_mqtt_topics} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAlibabacloudstackMqttTopicsConfig
  */
  public constructor(scope: Construct, id: string, config: DataAlibabacloudstackMqttTopicsConfig) {
    super(scope, id, {
      terraformResourceType: 'alibabacloudstack_mqtt_topics',
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
    this._id = config.id;
    this._ids = config.ids;
    this._nameRegex = config.nameRegex;
    this._storeInstanceId = config.storeInstanceId;
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

  // ids - computed: true, optional: true, required: false
  private _ids?: string[]; 
  public get ids() {
    return this.getListAttribute('ids');
  }
  public set ids(value: string[]) {
    this._ids = value;
  }
  public resetIds() {
    this._ids = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idsInput() {
    return this._ids;
  }

  // name_regex - computed: false, optional: true, required: false
  private _nameRegex?: string; 
  public get nameRegex() {
    return this.getStringAttribute('name_regex');
  }
  public set nameRegex(value: string) {
    this._nameRegex = value;
  }
  public resetNameRegex() {
    this._nameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameRegexInput() {
    return this._nameRegex;
  }

  // store_instance_id - computed: false, optional: false, required: true
  private _storeInstanceId?: string; 
  public get storeInstanceId() {
    return this.getStringAttribute('store_instance_id');
  }
  public set storeInstanceId(value: string) {
    this._storeInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storeInstanceIdInput() {
    return this._storeInstanceId;
  }

  // topics - computed: true, optional: false, required: false
  private _topics = new DataAlibabacloudstackMqttTopicsTopicsList(this, "topics", false);
  public get topics() {
    return this._topics;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ids),
      name_regex: cdktf.stringToTerraform(this._nameRegex),
      store_instance_id: cdktf.stringToTerraform(this._storeInstanceId),
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
      ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name_regex: {
        value: cdktf.stringToHclTerraform(this._nameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      store_instance_id: {
        value: cdktf.stringToHclTerraform(this._storeInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
