// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpLargeCommunityListExpandedNumConfig extends cdktf.TerraformMetaArguments {
  /**
  * Large community list number (expanded)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#ext_list_num IpLargeCommunityListExpandedNum#ext_list_num}
  */
  readonly extListNum: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#id IpLargeCommunityListExpandedNum#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#uuid IpLargeCommunityListExpandedNum#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#rules_list IpLargeCommunityListExpandedNum#rules_list}
  */
  readonly rulesList?: IpLargeCommunityListExpandedNumRulesListStruct[] | cdktf.IResolvable;
}
export interface IpLargeCommunityListExpandedNumRulesListStruct {
  /**
  * 'deny': Specify large community to reject; 'permit': Specify large community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#ext_list_lcom_action IpLargeCommunityListExpandedNum#ext_list_lcom_action}
  */
  readonly extListLcomAction?: string;
  /**
  * An ordered list as a regular-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#ext_list_lcom_value IpLargeCommunityListExpandedNum#ext_list_lcom_value}
  */
  readonly extListLcomValue?: string;
}

export function ipLargeCommunityListExpandedNumRulesListStructToTerraform(struct?: IpLargeCommunityListExpandedNumRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_list_lcom_action: cdktf.stringToTerraform(struct!.extListLcomAction),
    ext_list_lcom_value: cdktf.stringToTerraform(struct!.extListLcomValue),
  }
}


export function ipLargeCommunityListExpandedNumRulesListStructToHclTerraform(struct?: IpLargeCommunityListExpandedNumRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_list_lcom_action: {
      value: cdktf.stringToHclTerraform(struct!.extListLcomAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_list_lcom_value: {
      value: cdktf.stringToHclTerraform(struct!.extListLcomValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpLargeCommunityListExpandedNumRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpLargeCommunityListExpandedNumRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extListLcomAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.extListLcomAction = this._extListLcomAction;
    }
    if (this._extListLcomValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extListLcomValue = this._extListLcomValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpLargeCommunityListExpandedNumRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extListLcomAction = undefined;
      this._extListLcomValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extListLcomAction = value.extListLcomAction;
      this._extListLcomValue = value.extListLcomValue;
    }
  }

  // ext_list_lcom_action - computed: false, optional: true, required: false
  private _extListLcomAction?: string; 
  public get extListLcomAction() {
    return this.getStringAttribute('ext_list_lcom_action');
  }
  public set extListLcomAction(value: string) {
    this._extListLcomAction = value;
  }
  public resetExtListLcomAction() {
    this._extListLcomAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extListLcomActionInput() {
    return this._extListLcomAction;
  }

  // ext_list_lcom_value - computed: false, optional: true, required: false
  private _extListLcomValue?: string; 
  public get extListLcomValue() {
    return this.getStringAttribute('ext_list_lcom_value');
  }
  public set extListLcomValue(value: string) {
    this._extListLcomValue = value;
  }
  public resetExtListLcomValue() {
    this._extListLcomValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extListLcomValueInput() {
    return this._extListLcomValue;
  }
}

export class IpLargeCommunityListExpandedNumRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpLargeCommunityListExpandedNumRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpLargeCommunityListExpandedNumRulesListStructOutputReference {
    return new IpLargeCommunityListExpandedNumRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num thunder_ip_large_community_list_expanded_num}
*/
export class IpLargeCommunityListExpandedNum extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_large_community_list_expanded_num";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpLargeCommunityListExpandedNum resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpLargeCommunityListExpandedNum to import
  * @param importFromId The id of the existing IpLargeCommunityListExpandedNum that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpLargeCommunityListExpandedNum to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_large_community_list_expanded_num", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded_num thunder_ip_large_community_list_expanded_num} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpLargeCommunityListExpandedNumConfig
  */
  public constructor(scope: Construct, id: string, config: IpLargeCommunityListExpandedNumConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_large_community_list_expanded_num',
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
  private _rulesList = new IpLargeCommunityListExpandedNumRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpLargeCommunityListExpandedNumRulesListStruct[] | cdktf.IResolvable) {
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
      rules_list: cdktf.listMapper(ipLargeCommunityListExpandedNumRulesListStructToTerraform, true)(this._rulesList.internalValue),
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
        value: cdktf.listMapperHcl(ipLargeCommunityListExpandedNumRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpLargeCommunityListExpandedNumRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
