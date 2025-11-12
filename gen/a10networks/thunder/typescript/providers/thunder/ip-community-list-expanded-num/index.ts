// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpCommunityListExpandedNumConfig extends cdktf.TerraformMetaArguments {
  /**
  * Community list number (expanded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#ext_list_num IpCommunityListExpandedNum#ext_list_num}
  */
  readonly extListNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#id IpCommunityListExpandedNum#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#uuid IpCommunityListExpandedNum#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#rules_list IpCommunityListExpandedNum#rules_list}
  */
  readonly rulesList?: IpCommunityListExpandedNumRulesListStruct[] | cdktf.IResolvable;
}
export interface IpCommunityListExpandedNumRulesListStruct {
  /**
  * 'deny': Specify community to reject; 'permit': Specify community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#ext_list_action IpCommunityListExpandedNum#ext_list_action}
  */
  readonly extListAction?: string;
  /**
  * An ordered list as a regular-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#ext_list_value IpCommunityListExpandedNum#ext_list_value}
  */
  readonly extListValue?: string;
}

export function ipCommunityListExpandedNumRulesListStructToTerraform(struct?: IpCommunityListExpandedNumRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_list_action: cdktf.stringToTerraform(struct!.extListAction),
    ext_list_value: cdktf.stringToTerraform(struct!.extListValue),
  }
}


export function ipCommunityListExpandedNumRulesListStructToHclTerraform(struct?: IpCommunityListExpandedNumRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_list_action: {
      value: cdktf.stringToHclTerraform(struct!.extListAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_list_value: {
      value: cdktf.stringToHclTerraform(struct!.extListValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpCommunityListExpandedNumRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpCommunityListExpandedNumRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extListAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.extListAction = this._extListAction;
    }
    if (this._extListValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extListValue = this._extListValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpCommunityListExpandedNumRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extListAction = undefined;
      this._extListValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extListAction = value.extListAction;
      this._extListValue = value.extListValue;
    }
  }

  // ext_list_action - computed: false, optional: true, required: false
  private _extListAction?: string; 
  public get extListAction() {
    return this.getStringAttribute('ext_list_action');
  }
  public set extListAction(value: string) {
    this._extListAction = value;
  }
  public resetExtListAction() {
    this._extListAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extListActionInput() {
    return this._extListAction;
  }

  // ext_list_value - computed: false, optional: true, required: false
  private _extListValue?: string; 
  public get extListValue() {
    return this.getStringAttribute('ext_list_value');
  }
  public set extListValue(value: string) {
    this._extListValue = value;
  }
  public resetExtListValue() {
    this._extListValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extListValueInput() {
    return this._extListValue;
  }
}

export class IpCommunityListExpandedNumRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpCommunityListExpandedNumRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpCommunityListExpandedNumRulesListStructOutputReference {
    return new IpCommunityListExpandedNumRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num thunder_ip_community_list_expanded_num}
*/
export class IpCommunityListExpandedNum extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_community_list_expanded_num";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpCommunityListExpandedNum resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpCommunityListExpandedNum to import
  * @param importFromId The id of the existing IpCommunityListExpandedNum that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpCommunityListExpandedNum to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_community_list_expanded_num", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_expanded_num thunder_ip_community_list_expanded_num} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpCommunityListExpandedNumConfig
  */
  public constructor(scope: Construct, id: string, config: IpCommunityListExpandedNumConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_community_list_expanded_num',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._extListNum = config.extListNum;
    this._id = config.id;
    this._uuid = config.uuid;
    this._rulesList.internalValue = config.rulesList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ext_list_num - computed: false, optional: false, required: true
  private _extListNum?: number; 
  public get extListNum() {
    return this.getNumberAttribute('ext_list_num');
  }
  public set extListNum(value: number) {
    this._extListNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get extListNumInput() {
    return this._extListNum;
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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // rules_list - computed: false, optional: true, required: false
  private _rulesList = new IpCommunityListExpandedNumRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpCommunityListExpandedNumRulesListStruct[] | cdktf.IResolvable) {
    this._rulesList.internalValue = value;
  }
  public resetRulesList() {
    this._rulesList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesListInput() {
    return this._rulesList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ext_list_num: cdktf.numberToTerraform(this._extListNum),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules_list: cdktf.listMapper(ipCommunityListExpandedNumRulesListStructToTerraform, true)(this._rulesList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ext_list_num: {
        value: cdktf.numberToHclTerraform(this._extListNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules_list: {
        value: cdktf.listMapperHcl(ipCommunityListExpandedNumRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpCommunityListExpandedNumRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
