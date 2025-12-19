// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpCommunityListStandardNumConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#id IpCommunityListStandardNum#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Community list number (standard)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#std_list_num IpCommunityListStandardNum#std_list_num}
  */
  readonly stdListNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#uuid IpCommunityListStandardNum#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#rules_list IpCommunityListStandardNum#rules_list}
  */
  readonly rulesList?: IpCommunityListStandardNumRulesListStruct[] | cdktf.IResolvable;
}
export interface IpCommunityListStandardNumRulesListStruct {
  /**
  * 'deny': Specify community to reject; 'permit': Specify community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#std_list_action IpCommunityListStandardNum#std_list_action}
  */
  readonly stdListAction?: string;
  /**
  * community value in the format 1-4294967295|AA:NN|internet|local-AS|no-advertise|no-export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#std_list_comm_value IpCommunityListStandardNum#std_list_comm_value}
  */
  readonly stdListCommValue?: string;
}

export function ipCommunityListStandardNumRulesListStructToTerraform(struct?: IpCommunityListStandardNumRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    std_list_action: cdktf.stringToTerraform(struct!.stdListAction),
    std_list_comm_value: cdktf.stringToTerraform(struct!.stdListCommValue),
  }
}


export function ipCommunityListStandardNumRulesListStructToHclTerraform(struct?: IpCommunityListStandardNumRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    std_list_action: {
      value: cdktf.stringToHclTerraform(struct!.stdListAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    std_list_comm_value: {
      value: cdktf.stringToHclTerraform(struct!.stdListCommValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpCommunityListStandardNumRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpCommunityListStandardNumRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stdListAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdListAction = this._stdListAction;
    }
    if (this._stdListCommValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stdListCommValue = this._stdListCommValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpCommunityListStandardNumRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._stdListAction = undefined;
      this._stdListCommValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._stdListAction = value.stdListAction;
      this._stdListCommValue = value.stdListCommValue;
    }
  }

  // std_list_action - computed: false, optional: true, required: false
  private _stdListAction?: string; 
  public get stdListAction() {
    return this.getStringAttribute('std_list_action');
  }
  public set stdListAction(value: string) {
    this._stdListAction = value;
  }
  public resetStdListAction() {
    this._stdListAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdListActionInput() {
    return this._stdListAction;
  }

  // std_list_comm_value - computed: false, optional: true, required: false
  private _stdListCommValue?: string; 
  public get stdListCommValue() {
    return this.getStringAttribute('std_list_comm_value');
  }
  public set stdListCommValue(value: string) {
    this._stdListCommValue = value;
  }
  public resetStdListCommValue() {
    this._stdListCommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stdListCommValueInput() {
    return this._stdListCommValue;
  }
}

export class IpCommunityListStandardNumRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpCommunityListStandardNumRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpCommunityListStandardNumRulesListStructOutputReference {
    return new IpCommunityListStandardNumRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num thunder_ip_community_list_standard_num}
*/
export class IpCommunityListStandardNum extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_community_list_standard_num";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpCommunityListStandardNum resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpCommunityListStandardNum to import
  * @param importFromId The id of the existing IpCommunityListStandardNum that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpCommunityListStandardNum to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_community_list_standard_num", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_standard_num thunder_ip_community_list_standard_num} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpCommunityListStandardNumConfig
  */
  public constructor(scope: Construct, id: string, config: IpCommunityListStandardNumConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_community_list_standard_num',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._stdListNum = config.stdListNum;
    this._uuid = config.uuid;
    this._rulesList.internalValue = config.rulesList;
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

  // std_list_num - computed: false, optional: false, required: true
  private _stdListNum?: number; 
  public get stdListNum() {
    return this.getNumberAttribute('std_list_num');
  }
  public set stdListNum(value: number) {
    this._stdListNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stdListNumInput() {
    return this._stdListNum;
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
  private _rulesList = new IpCommunityListStandardNumRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpCommunityListStandardNumRulesListStruct[] | cdktf.IResolvable) {
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
      id: cdktf.stringToTerraform(this._id),
      std_list_num: cdktf.numberToTerraform(this._stdListNum),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules_list: cdktf.listMapper(ipCommunityListStandardNumRulesListStructToTerraform, true)(this._rulesList.internalValue),
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
      std_list_num: {
        value: cdktf.numberToHclTerraform(this._stdListNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules_list: {
        value: cdktf.listMapperHcl(ipCommunityListStandardNumRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpCommunityListStandardNumRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
