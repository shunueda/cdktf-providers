// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpLargeCommunityListExpandedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Add an expanded large community-list entry (Large community list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#expanded IpLargeCommunityListExpanded#expanded}
  */
  readonly expanded: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#id IpLargeCommunityListExpanded#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#uuid IpLargeCommunityListExpanded#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#rules_list IpLargeCommunityListExpanded#rules_list}
  */
  readonly rulesList?: IpLargeCommunityListExpandedRulesListStruct[] | cdktf.IResolvable;
}
export interface IpLargeCommunityListExpandedRulesListStruct {
  /**
  * 'deny': Specify large community to reject; 'permit': Specify large community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#expanded_lcom_action IpLargeCommunityListExpanded#expanded_lcom_action}
  */
  readonly expandedLcomAction?: string;
  /**
  * An ordered list as a regular-expression
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#expanded_lcom_value IpLargeCommunityListExpanded#expanded_lcom_value}
  */
  readonly expandedLcomValue?: string;
}

export function ipLargeCommunityListExpandedRulesListStructToTerraform(struct?: IpLargeCommunityListExpandedRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expanded_lcom_action: cdktf.stringToTerraform(struct!.expandedLcomAction),
    expanded_lcom_value: cdktf.stringToTerraform(struct!.expandedLcomValue),
  }
}


export function ipLargeCommunityListExpandedRulesListStructToHclTerraform(struct?: IpLargeCommunityListExpandedRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expanded_lcom_action: {
      value: cdktf.stringToHclTerraform(struct!.expandedLcomAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expanded_lcom_value: {
      value: cdktf.stringToHclTerraform(struct!.expandedLcomValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpLargeCommunityListExpandedRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpLargeCommunityListExpandedRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expandedLcomAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedLcomAction = this._expandedLcomAction;
    }
    if (this._expandedLcomValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expandedLcomValue = this._expandedLcomValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpLargeCommunityListExpandedRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expandedLcomAction = undefined;
      this._expandedLcomValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expandedLcomAction = value.expandedLcomAction;
      this._expandedLcomValue = value.expandedLcomValue;
    }
  }

  // expanded_lcom_action - computed: false, optional: true, required: false
  private _expandedLcomAction?: string; 
  public get expandedLcomAction() {
    return this.getStringAttribute('expanded_lcom_action');
  }
  public set expandedLcomAction(value: string) {
    this._expandedLcomAction = value;
  }
  public resetExpandedLcomAction() {
    this._expandedLcomAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedLcomActionInput() {
    return this._expandedLcomAction;
  }

  // expanded_lcom_value - computed: false, optional: true, required: false
  private _expandedLcomValue?: string; 
  public get expandedLcomValue() {
    return this.getStringAttribute('expanded_lcom_value');
  }
  public set expandedLcomValue(value: string) {
    this._expandedLcomValue = value;
  }
  public resetExpandedLcomValue() {
    this._expandedLcomValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expandedLcomValueInput() {
    return this._expandedLcomValue;
  }
}

export class IpLargeCommunityListExpandedRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpLargeCommunityListExpandedRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpLargeCommunityListExpandedRulesListStructOutputReference {
    return new IpLargeCommunityListExpandedRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded thunder_ip_large_community_list_expanded}
*/
export class IpLargeCommunityListExpanded extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_large_community_list_expanded";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpLargeCommunityListExpanded resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpLargeCommunityListExpanded to import
  * @param importFromId The id of the existing IpLargeCommunityListExpanded that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpLargeCommunityListExpanded to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_large_community_list_expanded", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_large_community_list_expanded thunder_ip_large_community_list_expanded} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpLargeCommunityListExpandedConfig
  */
  public constructor(scope: Construct, id: string, config: IpLargeCommunityListExpandedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_large_community_list_expanded',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
  private _rulesList = new IpLargeCommunityListExpandedRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpLargeCommunityListExpandedRulesListStruct[] | cdktf.IResolvable) {
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
      rules_list: cdktf.listMapper(ipLargeCommunityListExpandedRulesListStructToTerraform, true)(this._rulesList.internalValue),
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
        value: cdktf.listMapperHcl(ipLargeCommunityListExpandedRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpLargeCommunityListExpandedRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
