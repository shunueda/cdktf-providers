// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmsDynamicTagGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#contact_group_list CmsDynamicTagGroup#contact_group_list}
  */
  readonly contactGroupList: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#id CmsDynamicTagGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#match_express_filter_relation CmsDynamicTagGroup#match_express_filter_relation}
  */
  readonly matchExpressFilterRelation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#tag_key CmsDynamicTagGroup#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#template_id_list CmsDynamicTagGroup#template_id_list}
  */
  readonly templateIdList?: string[];
  /**
  * match_express block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#match_express CmsDynamicTagGroup#match_express}
  */
  readonly matchExpress: CmsDynamicTagGroupMatchExpress[] | cdktf.IResolvable;
}
export interface CmsDynamicTagGroupMatchExpress {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#tag_value CmsDynamicTagGroup#tag_value}
  */
  readonly tagValue: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#tag_value_match_function CmsDynamicTagGroup#tag_value_match_function}
  */
  readonly tagValueMatchFunction: string;
}

export function cmsDynamicTagGroupMatchExpressToTerraform(struct?: CmsDynamicTagGroupMatchExpress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_value: cdktf.stringToTerraform(struct!.tagValue),
    tag_value_match_function: cdktf.stringToTerraform(struct!.tagValueMatchFunction),
  }
}


export function cmsDynamicTagGroupMatchExpressToHclTerraform(struct?: CmsDynamicTagGroupMatchExpress | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_value: {
      value: cdktf.stringToHclTerraform(struct!.tagValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_value_match_function: {
      value: cdktf.stringToHclTerraform(struct!.tagValueMatchFunction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmsDynamicTagGroupMatchExpressOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmsDynamicTagGroupMatchExpress | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValue = this._tagValue;
    }
    if (this._tagValueMatchFunction !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagValueMatchFunction = this._tagValueMatchFunction;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmsDynamicTagGroupMatchExpress | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagValue = undefined;
      this._tagValueMatchFunction = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagValue = value.tagValue;
      this._tagValueMatchFunction = value.tagValueMatchFunction;
    }
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

  // tag_value_match_function - computed: false, optional: false, required: true
  private _tagValueMatchFunction?: string; 
  public get tagValueMatchFunction() {
    return this.getStringAttribute('tag_value_match_function');
  }
  public set tagValueMatchFunction(value: string) {
    this._tagValueMatchFunction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagValueMatchFunctionInput() {
    return this._tagValueMatchFunction;
  }
}

export class CmsDynamicTagGroupMatchExpressList extends cdktf.ComplexList {
  public internalValue? : CmsDynamicTagGroupMatchExpress[] | cdktf.IResolvable

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
  public get(index: number): CmsDynamicTagGroupMatchExpressOutputReference {
    return new CmsDynamicTagGroupMatchExpressOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group alicloud_cms_dynamic_tag_group}
*/
export class CmsDynamicTagGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cms_dynamic_tag_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmsDynamicTagGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmsDynamicTagGroup to import
  * @param importFromId The id of the existing CmsDynamicTagGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmsDynamicTagGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cms_dynamic_tag_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cms_dynamic_tag_group alicloud_cms_dynamic_tag_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmsDynamicTagGroupConfig
  */
  public constructor(scope: Construct, id: string, config: CmsDynamicTagGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cms_dynamic_tag_group',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactGroupList = config.contactGroupList;
    this._id = config.id;
    this._matchExpressFilterRelation = config.matchExpressFilterRelation;
    this._tagKey = config.tagKey;
    this._templateIdList = config.templateIdList;
    this._matchExpress.internalValue = config.matchExpress;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_group_list - computed: false, optional: false, required: true
  private _contactGroupList?: string[]; 
  public get contactGroupList() {
    return this.getListAttribute('contact_group_list');
  }
  public set contactGroupList(value: string[]) {
    this._contactGroupList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactGroupListInput() {
    return this._contactGroupList;
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

  // match_express_filter_relation - computed: true, optional: true, required: false
  private _matchExpressFilterRelation?: string; 
  public get matchExpressFilterRelation() {
    return this.getStringAttribute('match_express_filter_relation');
  }
  public set matchExpressFilterRelation(value: string) {
    this._matchExpressFilterRelation = value;
  }
  public resetMatchExpressFilterRelation() {
    this._matchExpressFilterRelation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressFilterRelationInput() {
    return this._matchExpressFilterRelation;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // template_id_list - computed: false, optional: true, required: false
  private _templateIdList?: string[]; 
  public get templateIdList() {
    return this.getListAttribute('template_id_list');
  }
  public set templateIdList(value: string[]) {
    this._templateIdList = value;
  }
  public resetTemplateIdList() {
    this._templateIdList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdListInput() {
    return this._templateIdList;
  }

  // match_express - computed: false, optional: false, required: true
  private _matchExpress = new CmsDynamicTagGroupMatchExpressList(this, "match_express", true);
  public get matchExpress() {
    return this._matchExpress;
  }
  public putMatchExpress(value: CmsDynamicTagGroupMatchExpress[] | cdktf.IResolvable) {
    this._matchExpress.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressInput() {
    return this._matchExpress.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_group_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._contactGroupList),
      id: cdktf.stringToTerraform(this._id),
      match_express_filter_relation: cdktf.stringToTerraform(this._matchExpressFilterRelation),
      tag_key: cdktf.stringToTerraform(this._tagKey),
      template_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templateIdList),
      match_express: cdktf.listMapper(cmsDynamicTagGroupMatchExpressToTerraform, true)(this._matchExpress.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_group_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._contactGroupList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      match_express_filter_relation: {
        value: cdktf.stringToHclTerraform(this._matchExpressFilterRelation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag_key: {
        value: cdktf.stringToHclTerraform(this._tagKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templateIdList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      match_express: {
        value: cdktf.listMapperHcl(cmsDynamicTagGroupMatchExpressToHclTerraform, true)(this._matchExpress.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CmsDynamicTagGroupMatchExpressList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
