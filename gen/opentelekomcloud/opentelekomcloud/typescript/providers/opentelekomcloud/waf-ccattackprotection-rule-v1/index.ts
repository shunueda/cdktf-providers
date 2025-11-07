// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WafCcattackprotectionRuleV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#action_category WafCcattackprotectionRuleV1#action_category}
  */
  readonly actionCategory: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#block_content WafCcattackprotectionRuleV1#block_content}
  */
  readonly blockContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#block_content_type WafCcattackprotectionRuleV1#block_content_type}
  */
  readonly blockContentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#id WafCcattackprotectionRuleV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#limit_num WafCcattackprotectionRuleV1#limit_num}
  */
  readonly limitNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#limit_period WafCcattackprotectionRuleV1#limit_period}
  */
  readonly limitPeriod: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#lock_time WafCcattackprotectionRuleV1#lock_time}
  */
  readonly lockTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#policy_id WafCcattackprotectionRuleV1#policy_id}
  */
  readonly policyId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#tag_category WafCcattackprotectionRuleV1#tag_category}
  */
  readonly tagCategory?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#tag_contents WafCcattackprotectionRuleV1#tag_contents}
  */
  readonly tagContents?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#tag_index WafCcattackprotectionRuleV1#tag_index}
  */
  readonly tagIndex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#tag_type WafCcattackprotectionRuleV1#tag_type}
  */
  readonly tagType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#url WafCcattackprotectionRuleV1#url}
  */
  readonly url: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#timeouts WafCcattackprotectionRuleV1#timeouts}
  */
  readonly timeouts?: WafCcattackprotectionRuleV1Timeouts;
}
export interface WafCcattackprotectionRuleV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#create WafCcattackprotectionRuleV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#delete WafCcattackprotectionRuleV1#delete}
  */
  readonly delete?: string;
}

export function wafCcattackprotectionRuleV1TimeoutsToTerraform(struct?: WafCcattackprotectionRuleV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function wafCcattackprotectionRuleV1TimeoutsToHclTerraform(struct?: WafCcattackprotectionRuleV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WafCcattackprotectionRuleV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): WafCcattackprotectionRuleV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WafCcattackprotectionRuleV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1 opentelekomcloud_waf_ccattackprotection_rule_v1}
*/
export class WafCcattackprotectionRuleV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_waf_ccattackprotection_rule_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WafCcattackprotectionRuleV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WafCcattackprotectionRuleV1 to import
  * @param importFromId The id of the existing WafCcattackprotectionRuleV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WafCcattackprotectionRuleV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_waf_ccattackprotection_rule_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/waf_ccattackprotection_rule_v1 opentelekomcloud_waf_ccattackprotection_rule_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WafCcattackprotectionRuleV1Config
  */
  public constructor(scope: Construct, id: string, config: WafCcattackprotectionRuleV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_waf_ccattackprotection_rule_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._actionCategory = config.actionCategory;
    this._blockContent = config.blockContent;
    this._blockContentType = config.blockContentType;
    this._id = config.id;
    this._limitNum = config.limitNum;
    this._limitPeriod = config.limitPeriod;
    this._lockTime = config.lockTime;
    this._policyId = config.policyId;
    this._tagCategory = config.tagCategory;
    this._tagContents = config.tagContents;
    this._tagIndex = config.tagIndex;
    this._tagType = config.tagType;
    this._url = config.url;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_category - computed: false, optional: false, required: true
  private _actionCategory?: string; 
  public get actionCategory() {
    return this.getStringAttribute('action_category');
  }
  public set actionCategory(value: string) {
    this._actionCategory = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCategoryInput() {
    return this._actionCategory;
  }

  // block_content - computed: false, optional: true, required: false
  private _blockContent?: string; 
  public get blockContent() {
    return this.getStringAttribute('block_content');
  }
  public set blockContent(value: string) {
    this._blockContent = value;
  }
  public resetBlockContent() {
    this._blockContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContentInput() {
    return this._blockContent;
  }

  // block_content_type - computed: false, optional: true, required: false
  private _blockContentType?: string; 
  public get blockContentType() {
    return this.getStringAttribute('block_content_type');
  }
  public set blockContentType(value: string) {
    this._blockContentType = value;
  }
  public resetBlockContentType() {
    this._blockContentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockContentTypeInput() {
    return this._blockContentType;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
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

  // limit_num - computed: false, optional: false, required: true
  private _limitNum?: number; 
  public get limitNum() {
    return this.getNumberAttribute('limit_num');
  }
  public set limitNum(value: number) {
    this._limitNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitNumInput() {
    return this._limitNum;
  }

  // limit_period - computed: false, optional: false, required: true
  private _limitPeriod?: number; 
  public get limitPeriod() {
    return this.getNumberAttribute('limit_period');
  }
  public set limitPeriod(value: number) {
    this._limitPeriod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get limitPeriodInput() {
    return this._limitPeriod;
  }

  // lock_time - computed: false, optional: true, required: false
  private _lockTime?: number; 
  public get lockTime() {
    return this.getNumberAttribute('lock_time');
  }
  public set lockTime(value: number) {
    this._lockTime = value;
  }
  public resetLockTime() {
    this._lockTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeInput() {
    return this._lockTime;
  }

  // policy_id - computed: false, optional: false, required: true
  private _policyId?: string; 
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }
  public set policyId(value: string) {
    this._policyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdInput() {
    return this._policyId;
  }

  // tag_category - computed: false, optional: true, required: false
  private _tagCategory?: string; 
  public get tagCategory() {
    return this.getStringAttribute('tag_category');
  }
  public set tagCategory(value: string) {
    this._tagCategory = value;
  }
  public resetTagCategory() {
    this._tagCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagCategoryInput() {
    return this._tagCategory;
  }

  // tag_contents - computed: false, optional: true, required: false
  private _tagContents?: string[]; 
  public get tagContents() {
    return this.getListAttribute('tag_contents');
  }
  public set tagContents(value: string[]) {
    this._tagContents = value;
  }
  public resetTagContents() {
    this._tagContents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagContentsInput() {
    return this._tagContents;
  }

  // tag_index - computed: false, optional: true, required: false
  private _tagIndex?: string; 
  public get tagIndex() {
    return this.getStringAttribute('tag_index');
  }
  public set tagIndex(value: string) {
    this._tagIndex = value;
  }
  public resetTagIndex() {
    this._tagIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIndexInput() {
    return this._tagIndex;
  }

  // tag_type - computed: false, optional: false, required: true
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
    this._tagType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }

  // url - computed: false, optional: false, required: true
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new WafCcattackprotectionRuleV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: WafCcattackprotectionRuleV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_category: cdktf.stringToTerraform(this._actionCategory),
      block_content: cdktf.stringToTerraform(this._blockContent),
      block_content_type: cdktf.stringToTerraform(this._blockContentType),
      id: cdktf.stringToTerraform(this._id),
      limit_num: cdktf.numberToTerraform(this._limitNum),
      limit_period: cdktf.numberToTerraform(this._limitPeriod),
      lock_time: cdktf.numberToTerraform(this._lockTime),
      policy_id: cdktf.stringToTerraform(this._policyId),
      tag_category: cdktf.stringToTerraform(this._tagCategory),
      tag_contents: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tagContents),
      tag_index: cdktf.stringToTerraform(this._tagIndex),
      tag_type: cdktf.stringToTerraform(this._tagType),
      url: cdktf.stringToTerraform(this._url),
      timeouts: wafCcattackprotectionRuleV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_category: {
        value: cdktf.stringToHclTerraform(this._actionCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_content: {
        value: cdktf.stringToHclTerraform(this._blockContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_content_type: {
        value: cdktf.stringToHclTerraform(this._blockContentType),
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
      limit_num: {
        value: cdktf.numberToHclTerraform(this._limitNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_period: {
        value: cdktf.numberToHclTerraform(this._limitPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_time: {
        value: cdktf.numberToHclTerraform(this._lockTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_id: {
        value: cdktf.stringToHclTerraform(this._policyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_category: {
        value: cdktf.stringToHclTerraform(this._tagCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_contents: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tagContents),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag_index: {
        value: cdktf.stringToHclTerraform(this._tagIndex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_type: {
        value: cdktf.stringToHclTerraform(this._tagType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      url: {
        value: cdktf.stringToHclTerraform(this._url),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: wafCcattackprotectionRuleV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "WafCcattackprotectionRuleV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
