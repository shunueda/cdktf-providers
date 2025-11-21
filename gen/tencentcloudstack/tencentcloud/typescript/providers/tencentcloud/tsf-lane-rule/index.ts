// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TsfLaneRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * open state, true/false, default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#enable TsfLaneRule#enable}
  */
  readonly enable: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#id TsfLaneRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * lane ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#lane_id TsfLaneRule#lane_id}
  */
  readonly laneId: string;
  /**
  * Program id list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#program_id_list TsfLaneRule#program_id_list}
  */
  readonly programIdList?: string[];
  /**
  * Lane rule notes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#remark TsfLaneRule#remark}
  */
  readonly remark: string;
  /**
  * lane rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#rule_name TsfLaneRule#rule_name}
  */
  readonly ruleName: string;
  /**
  * lane rule label relationship.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#rule_tag_relationship TsfLaneRule#rule_tag_relationship}
  */
  readonly ruleTagRelationship: string;
  /**
  * rule_tag_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#rule_tag_list TsfLaneRule#rule_tag_list}
  */
  readonly ruleTagList: TsfLaneRuleRuleTagListStruct[] | cdktf.IResolvable;
}
export interface TsfLaneRuleRuleTagListStruct {
  /**
  * creation time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#create_time TsfLaneRule#create_time}
  */
  readonly createTime?: number;
  /**
  * lane rule ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#lane_rule_id TsfLaneRule#lane_rule_id}
  */
  readonly laneRuleId?: string;
  /**
  * label ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#tag_id TsfLaneRule#tag_id}
  */
  readonly tagId?: string;
  /**
  * label name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#tag_name TsfLaneRule#tag_name}
  */
  readonly tagName: string;
  /**
  * label operator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#tag_operator TsfLaneRule#tag_operator}
  */
  readonly tagOperator: string;
  /**
  * tag value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#tag_value TsfLaneRule#tag_value}
  */
  readonly tagValue: string;
  /**
  * update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#update_time TsfLaneRule#update_time}
  */
  readonly updateTime?: number;
}

export function tsfLaneRuleRuleTagListStructToTerraform(struct?: TsfLaneRuleRuleTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create_time: cdktf.numberToTerraform(struct!.createTime),
    lane_rule_id: cdktf.stringToTerraform(struct!.laneRuleId),
    tag_id: cdktf.stringToTerraform(struct!.tagId),
    tag_name: cdktf.stringToTerraform(struct!.tagName),
    tag_operator: cdktf.stringToTerraform(struct!.tagOperator),
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
    update_time: cdktf.numberToTerraform(struct!.updateTime),
  }
}


export function tsfLaneRuleRuleTagListStructToHclTerraform(struct?: TsfLaneRuleRuleTagListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create_time: {
      value: cdktf.numberToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lane_rule_id: {
      value: cdktf.stringToHclTerraform(struct!.laneRuleId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_id: {
      value: cdktf.stringToHclTerraform(struct!.tagId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_name: {
      value: cdktf.stringToHclTerraform(struct!.tagName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_operator: {
      value: cdktf.stringToHclTerraform(struct!.tagOperator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.numberToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TsfLaneRuleRuleTagListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TsfLaneRuleRuleTagListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._laneRuleId !== undefined) {
      hasAnyValues = true;
      internalValueResult.laneRuleId = this._laneRuleId;
    }
    if (this._tagId !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagId = this._tagId;
    }
    if (this._tagName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagName = this._tagName;
    }
    if (this._tagOperator !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagOperator = this._tagOperator;
    }
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TsfLaneRuleRuleTagListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createTime = undefined;
      this._laneRuleId = undefined;
      this._tagId = undefined;
      this._tagName = undefined;
      this._tagOperator = undefined;
      this._tagValue = undefined;
      this._updateTime = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createTime = value.createTime;
      this._laneRuleId = value.laneRuleId;
      this._tagId = value.tagId;
      this._tagName = value.tagName;
      this._tagOperator = value.tagOperator;
      this._tagValue = value.tagValue;
      this._updateTime = value.updateTime;
    }
  }

  // create_time - computed: true, optional: true, required: false
  private _createTime?: number; 
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }
  public set createTime(value: number) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // lane_rule_id - computed: true, optional: true, required: false
  private _laneRuleId?: string; 
  public get laneRuleId() {
    return this.getStringAttribute('lane_rule_id');
  }
  public set laneRuleId(value: string) {
    this._laneRuleId = value;
  }
  public resetLaneRuleId() {
    this._laneRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get laneRuleIdInput() {
    return this._laneRuleId;
  }

  // tag_id - computed: true, optional: true, required: false
  private _tagId?: string; 
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
  public set tagId(value: string) {
    this._tagId = value;
  }
  public resetTagId() {
    this._tagId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdInput() {
    return this._tagId;
  }

  // tag_name - computed: false, optional: false, required: true
  private _tagName?: string; 
  public get tagName() {
    return this.getStringAttribute('tag_name');
  }
  public set tagName(value: string) {
    this._tagName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNameInput() {
    return this._tagName;
  }

  // tag_operator - computed: false, optional: false, required: true
  private _tagOperator?: string; 
  public get tagOperator() {
    return this.getStringAttribute('tag_operator');
  }
  public set tagOperator(value: string) {
    this._tagOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagOperatorInput() {
    return this._tagOperator;
  }

  // tag_value - computed: false, optional: false, required: true
  private _tagValue?: string; 
  public get tagValue() {
    return this.getStringAttribute('tag_value');
  }
  public set tagValue(value: string) {
    this._tagValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueInput() {
    return this._tagValue;
  }

  // update_time - computed: true, optional: true, required: false
  private _updateTime?: number; 
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }
  public set updateTime(value: number) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }
}

export class TsfLaneRuleRuleTagListStructList extends cdktf.ComplexList {
  public internalValue? : TsfLaneRuleRuleTagListStruct[] | cdktf.IResolvable

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
  public get(index: number): TsfLaneRuleRuleTagListStructOutputReference {
    return new TsfLaneRuleRuleTagListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule tencentcloud_tsf_lane_rule}
*/
export class TsfLaneRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tsf_lane_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TsfLaneRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TsfLaneRule to import
  * @param importFromId The id of the existing TsfLaneRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TsfLaneRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tsf_lane_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.37/docs/resources/tsf_lane_rule tencentcloud_tsf_lane_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TsfLaneRuleConfig
  */
  public constructor(scope: Construct, id: string, config: TsfLaneRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tsf_lane_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.37',
        providerVersionConstraint: '1.82.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._laneId = config.laneId;
    this._programIdList = config.programIdList;
    this._remark = config.remark;
    this._ruleName = config.ruleName;
    this._ruleTagRelationship = config.ruleTagRelationship;
    this._ruleTagList.internalValue = config.ruleTagList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // enable - computed: false, optional: false, required: true
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // lane_id - computed: false, optional: false, required: true
  private _laneId?: string; 
  public get laneId() {
    return this.getStringAttribute('lane_id');
  }
  public set laneId(value: string) {
    this._laneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get laneIdInput() {
    return this._laneId;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // program_id_list - computed: false, optional: true, required: false
  private _programIdList?: string[]; 
  public get programIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('program_id_list'));
  }
  public set programIdList(value: string[]) {
    this._programIdList = value;
  }
  public resetProgramIdList() {
    this._programIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get programIdListInput() {
    return this._programIdList;
  }

  // remark - computed: false, optional: false, required: true
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // rule_tag_relationship - computed: false, optional: false, required: true
  private _ruleTagRelationship?: string; 
  public get ruleTagRelationship() {
    return this.getStringAttribute('rule_tag_relationship');
  }
  public set ruleTagRelationship(value: string) {
    this._ruleTagRelationship = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTagRelationshipInput() {
    return this._ruleTagRelationship;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getNumberAttribute('update_time');
  }

  // rule_tag_list - computed: false, optional: false, required: true
  private _ruleTagList = new TsfLaneRuleRuleTagListStructList(this, "rule_tag_list", false);
  public get ruleTagList() {
    return this._ruleTagList;
  }
  public putRuleTagList(value: TsfLaneRuleRuleTagListStruct[] | cdktf.IResolvable) {
    this._ruleTagList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTagListInput() {
    return this._ruleTagList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.booleanToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      lane_id: cdktf.stringToTerraform(this._laneId),
      program_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._programIdList),
      remark: cdktf.stringToTerraform(this._remark),
      rule_name: cdktf.stringToTerraform(this._ruleName),
      rule_tag_relationship: cdktf.stringToTerraform(this._ruleTagRelationship),
      rule_tag_list: cdktf.listMapper(tsfLaneRuleRuleTagListStructToTerraform, true)(this._ruleTagList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.booleanToHclTerraform(this._enable),
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
      lane_id: {
        value: cdktf.stringToHclTerraform(this._laneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      program_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._programIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_name: {
        value: cdktf.stringToHclTerraform(this._ruleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_tag_relationship: {
        value: cdktf.stringToHclTerraform(this._ruleTagRelationship),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_tag_list: {
        value: cdktf.listMapperHcl(tsfLaneRuleRuleTagListStructToHclTerraform, true)(this._ruleTagList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TsfLaneRuleRuleTagListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
