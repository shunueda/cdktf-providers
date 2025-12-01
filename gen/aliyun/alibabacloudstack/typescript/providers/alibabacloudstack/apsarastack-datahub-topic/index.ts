// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackDatahubTopicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#comment ApsarastackDatahubTopic#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#enable_schema_registry ApsarastackDatahubTopic#enable_schema_registry}
  */
  readonly enableSchemaRegistry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#expand_mode ApsarastackDatahubTopic#expand_mode}
  */
  readonly expandMode?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#id ApsarastackDatahubTopic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#life_cycle ApsarastackDatahubTopic#life_cycle}
  */
  readonly lifeCycle?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#name ApsarastackDatahubTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#project_name ApsarastackDatahubTopic#project_name}
  */
  readonly projectName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#record_type ApsarastackDatahubTopic#record_type}
  */
  readonly recordType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#shard_count ApsarastackDatahubTopic#shard_count}
  */
  readonly shardCount?: number;
  /**
  * record_schemas block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#record_schemas ApsarastackDatahubTopic#record_schemas}
  */
  readonly recordSchemas?: ApsarastackDatahubTopicRecordSchemas[] | cdktf.IResolvable;
}
export interface ApsarastackDatahubTopicRecordSchemas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#allow_null ApsarastackDatahubTopic#allow_null}
  */
  readonly allowNull?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#comment ApsarastackDatahubTopic#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#name ApsarastackDatahubTopic#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#type ApsarastackDatahubTopic#type}
  */
  readonly type: string;
}

export function apsarastackDatahubTopicRecordSchemasToTerraform(struct?: ApsarastackDatahubTopicRecordSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_null: cdktf.booleanToTerraform(struct!.allowNull),
    comment: cdktf.stringToTerraform(struct!.comment),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function apsarastackDatahubTopicRecordSchemasToHclTerraform(struct?: ApsarastackDatahubTopicRecordSchemas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_null: {
      value: cdktf.booleanToHclTerraform(struct!.allowNull),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackDatahubTopicRecordSchemasOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApsarastackDatahubTopicRecordSchemas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowNull !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowNull = this._allowNull;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackDatahubTopicRecordSchemas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowNull = undefined;
      this._comment = undefined;
      this._name = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowNull = value.allowNull;
      this._comment = value.comment;
      this._name = value.name;
      this._type = value.type;
    }
  }

  // allow_null - computed: false, optional: true, required: false
  private _allowNull?: boolean | cdktf.IResolvable; 
  public get allowNull() {
    return this.getBooleanAttribute('allow_null');
  }
  public set allowNull(value: boolean | cdktf.IResolvable) {
    this._allowNull = value;
  }
  public resetAllowNull() {
    this._allowNull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowNullInput() {
    return this._allowNull;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ApsarastackDatahubTopicRecordSchemasList extends cdktf.ComplexList {
  public internalValue? : ApsarastackDatahubTopicRecordSchemas[] | cdktf.IResolvable

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
  public get(index: number): ApsarastackDatahubTopicRecordSchemasOutputReference {
    return new ApsarastackDatahubTopicRecordSchemasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic apsarastack_datahub_topic}
*/
export class ApsarastackDatahubTopic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_datahub_topic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackDatahubTopic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackDatahubTopic to import
  * @param importFromId The id of the existing ApsarastackDatahubTopic that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackDatahubTopic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_datahub_topic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.20/docs/resources/apsarastack_datahub_topic apsarastack_datahub_topic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackDatahubTopicConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackDatahubTopicConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_datahub_topic',
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
    this._enableSchemaRegistry = config.enableSchemaRegistry;
    this._expandMode = config.expandMode;
    this._id = config.id;
    this._lifeCycle = config.lifeCycle;
    this._name = config.name;
    this._projectName = config.projectName;
    this._recordType = config.recordType;
    this._shardCount = config.shardCount;
    this._recordSchemas.internalValue = config.recordSchemas;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // enable_schema_registry - computed: false, optional: true, required: false
  private _enableSchemaRegistry?: boolean | cdktf.IResolvable; 
  public get enableSchemaRegistry() {
    return this.getBooleanAttribute('enable_schema_registry');
  }
  public set enableSchemaRegistry(value: boolean | cdktf.IResolvable) {
    this._enableSchemaRegistry = value;
  }
  public resetEnableSchemaRegistry() {
    this._enableSchemaRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSchemaRegistryInput() {
    return this._enableSchemaRegistry;
  }

  // expand_mode - computed: false, optional: true, required: false
  private _expandMode?: boolean | cdktf.IResolvable; 
  public get expandMode() {
    return this.getBooleanAttribute('expand_mode');
  }
  public set expandMode(value: boolean | cdktf.IResolvable) {
    this._expandMode = value;
  }
  public resetExpandMode() {
    this._expandMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandModeInput() {
    return this._expandMode;
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

  // last_modify_time - computed: true, optional: false, required: false
  public get lastModifyTime() {
    return this.getStringAttribute('last_modify_time');
  }

  // life_cycle - computed: false, optional: true, required: false
  private _lifeCycle?: number; 
  public get lifeCycle() {
    return this.getNumberAttribute('life_cycle');
  }
  public set lifeCycle(value: number) {
    this._lifeCycle = value;
  }
  public resetLifeCycle() {
    this._lifeCycle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifeCycleInput() {
    return this._lifeCycle;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
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

  // record_type - computed: false, optional: true, required: false
  private _recordType?: string; 
  public get recordType() {
    return this.getStringAttribute('record_type');
  }
  public set recordType(value: string) {
    this._recordType = value;
  }
  public resetRecordType() {
    this._recordType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordTypeInput() {
    return this._recordType;
  }

  // shard_count - computed: false, optional: true, required: false
  private _shardCount?: number; 
  public get shardCount() {
    return this.getNumberAttribute('shard_count');
  }
  public set shardCount(value: number) {
    this._shardCount = value;
  }
  public resetShardCount() {
    this._shardCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardCountInput() {
    return this._shardCount;
  }

  // record_schemas - computed: false, optional: true, required: false
  private _recordSchemas = new ApsarastackDatahubTopicRecordSchemasList(this, "record_schemas", true);
  public get recordSchemas() {
    return this._recordSchemas;
  }
  public putRecordSchemas(value: ApsarastackDatahubTopicRecordSchemas[] | cdktf.IResolvable) {
    this._recordSchemas.internalValue = value;
  }
  public resetRecordSchemas() {
    this._recordSchemas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recordSchemasInput() {
    return this._recordSchemas.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      comment: cdktf.stringToTerraform(this._comment),
      enable_schema_registry: cdktf.booleanToTerraform(this._enableSchemaRegistry),
      expand_mode: cdktf.booleanToTerraform(this._expandMode),
      id: cdktf.stringToTerraform(this._id),
      life_cycle: cdktf.numberToTerraform(this._lifeCycle),
      name: cdktf.stringToTerraform(this._name),
      project_name: cdktf.stringToTerraform(this._projectName),
      record_type: cdktf.stringToTerraform(this._recordType),
      shard_count: cdktf.numberToTerraform(this._shardCount),
      record_schemas: cdktf.listMapper(apsarastackDatahubTopicRecordSchemasToTerraform, true)(this._recordSchemas.internalValue),
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
      enable_schema_registry: {
        value: cdktf.booleanToHclTerraform(this._enableSchemaRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      expand_mode: {
        value: cdktf.booleanToHclTerraform(this._expandMode),
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
      life_cycle: {
        value: cdktf.numberToHclTerraform(this._lifeCycle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      record_type: {
        value: cdktf.stringToHclTerraform(this._recordType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shard_count: {
        value: cdktf.numberToHclTerraform(this._shardCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      record_schemas: {
        value: cdktf.listMapperHcl(apsarastackDatahubTopicRecordSchemasToHclTerraform, true)(this._recordSchemas.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackDatahubTopicRecordSchemasList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
