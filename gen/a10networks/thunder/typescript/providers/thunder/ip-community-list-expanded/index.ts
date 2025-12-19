// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpCommunityListExpandedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add an expanded community-list entry (Community list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#expanded IpCommunityListExpanded#expanded}
  */
  readonly expanded: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#id IpCommunityListExpanded#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#uuid IpCommunityListExpanded#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#rules_list IpCommunityListExpanded#rules_list}
  */
  readonly rulesList?: IpCommunityListExpandedRulesListStruct[] | cdktf.IResolvable;
}
export interface IpCommunityListExpandedRulesListStruct {
  /**
  * 'deny': Specify community to reject; 'permit': Specify community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#expanded_action IpCommunityListExpanded#expanded_action}
  */
  readonly expandedAction?: string;
  /**
  * An ordered list as a regular-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#expanded_value IpCommunityListExpanded#expanded_value}
  */
  readonly expandedValue?: string;
}

export function ipCommunityListExpandedRulesListStructToTerraform(struct?: IpCommunityListExpandedRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expanded_action: cdktf.stringToTerraform(struct!.expandedAction),
    expanded_value: cdktf.stringToTerraform(struct!.expandedValue),
  }
}


export function ipCommunityListExpandedRulesListStructToHclTerraform(struct?: IpCommunityListExpandedRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expanded_action: {
      value: cdktf.stringToHclTerraform(struct!.expandedAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expanded_value: {
      value: cdktf.stringToHclTerraform(struct!.expandedValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpCommunityListExpandedRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpCommunityListExpandedRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expandedAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedAction = this._expandedAction;
    }
    if (this._expandedValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedValue = this._expandedValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpCommunityListExpandedRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expandedAction = undefined;
      this._expandedValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expandedAction = value.expandedAction;
      this._expandedValue = value.expandedValue;
    }
  }

  // expanded_action - computed: false, optional: true, required: false
  private _expandedAction?: string; 
  public get expandedAction() {
    return this.getStringAttribute('expanded_action');
  }
  public set expandedAction(value: string) {
    this._expandedAction = value;
  }
  public resetExpandedAction() {
    this._expandedAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedActionInput() {
    return this._expandedAction;
  }

  // expanded_value - computed: false, optional: true, required: false
  private _expandedValue?: string; 
  public get expandedValue() {
    return this.getStringAttribute('expanded_value');
  }
  public set expandedValue(value: string) {
    this._expandedValue = value;
  }
  public resetExpandedValue() {
    this._expandedValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedValueInput() {
    return this._expandedValue;
  }
}

export class IpCommunityListExpandedRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpCommunityListExpandedRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpCommunityListExpandedRulesListStructOutputReference {
    return new IpCommunityListExpandedRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded thunder_ip_community_list_expanded}
*/
export class IpCommunityListExpanded extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_community_list_expanded";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpCommunityListExpanded resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpCommunityListExpanded to import
  * @param importFromId The id of the existing IpCommunityListExpanded that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpCommunityListExpanded to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_community_list_expanded", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_community_list_expanded thunder_ip_community_list_expanded} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpCommunityListExpandedConfig
  */
  public constructor(scope: Construct, id: string, config: IpCommunityListExpandedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_community_list_expanded',
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
    this._expanded = config.expanded;
    this._id = config.id;
    this._uuid = config.uuid;
    this._rulesList.internalValue = config.rulesList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // expanded - computed: false, optional: false, required: true
  private _expanded?: string; 
  public get expanded() {
    return this.getStringAttribute('expanded');
  }
  public set expanded(value: string) {
    this._expanded = value;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedInput() {
    return this._expanded;
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
  private _rulesList = new IpCommunityListExpandedRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpCommunityListExpandedRulesListStruct[] | cdktf.IResolvable) {
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
      expanded: cdktf.stringToTerraform(this._expanded),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules_list: cdktf.listMapper(ipCommunityListExpandedRulesListStructToTerraform, true)(this._rulesList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      expanded: {
        value: cdktf.stringToHclTerraform(this._expanded),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules_list: {
        value: cdktf.listMapperHcl(ipCommunityListExpandedRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpCommunityListExpandedRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
