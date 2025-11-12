// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpCommunityListStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#id IpCommunityListStandard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Add a standard community-list entry (Community list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#standard IpCommunityListStandard#standard}
  */
  readonly standard: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#uuid IpCommunityListStandard#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#rules_list IpCommunityListStandard#rules_list}
  */
  readonly rulesList?: IpCommunityListStandardRulesListStruct[] | cdktf.IResolvable;
}
export interface IpCommunityListStandardRulesListStruct {
  /**
  * 'deny': Specify community to reject; 'permit': Specify community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#standard_action IpCommunityListStandard#standard_action}
  */
  readonly standardAction?: string;
  /**
  * community value in the format 1-4294967295|AA:NN|internet|local-AS|no-advertise|no-export
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#standard_comm_value IpCommunityListStandard#standard_comm_value}
  */
  readonly standardCommValue?: string;
}

export function ipCommunityListStandardRulesListStructToTerraform(struct?: IpCommunityListStandardRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standard_action: cdktf.stringToTerraform(struct!.standardAction),
    standard_comm_value: cdktf.stringToTerraform(struct!.standardCommValue),
  }
}


export function ipCommunityListStandardRulesListStructToHclTerraform(struct?: IpCommunityListStandardRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    standard_action: {
      value: cdktf.stringToHclTerraform(struct!.standardAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_comm_value: {
      value: cdktf.stringToHclTerraform(struct!.standardCommValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpCommunityListStandardRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpCommunityListStandardRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standardAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardAction = this._standardAction;
    }
    if (this._standardCommValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardCommValue = this._standardCommValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpCommunityListStandardRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._standardAction = undefined;
      this._standardCommValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._standardAction = value.standardAction;
      this._standardCommValue = value.standardCommValue;
    }
  }

  // standard_action - computed: false, optional: true, required: false
  private _standardAction?: string; 
  public get standardAction() {
    return this.getStringAttribute('standard_action');
  }
  public set standardAction(value: string) {
    this._standardAction = value;
  }
  public resetStandardAction() {
    this._standardAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardActionInput() {
    return this._standardAction;
  }

  // standard_comm_value - computed: false, optional: true, required: false
  private _standardCommValue?: string; 
  public get standardCommValue() {
    return this.getStringAttribute('standard_comm_value');
  }
  public set standardCommValue(value: string) {
    this._standardCommValue = value;
  }
  public resetStandardCommValue() {
    this._standardCommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardCommValueInput() {
    return this._standardCommValue;
  }
}

export class IpCommunityListStandardRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpCommunityListStandardRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpCommunityListStandardRulesListStructOutputReference {
    return new IpCommunityListStandardRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard thunder_ip_community_list_standard}
*/
export class IpCommunityListStandard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_community_list_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpCommunityListStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpCommunityListStandard to import
  * @param importFromId The id of the existing IpCommunityListStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpCommunityListStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_community_list_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ip_community_list_standard thunder_ip_community_list_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpCommunityListStandardConfig
  */
  public constructor(scope: Construct, id: string, config: IpCommunityListStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_community_list_standard',
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
    this._id = config.id;
    this._standard = config.standard;
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

  // standard - computed: false, optional: false, required: true
  private _standard?: string; 
  public get standard() {
    return this.getStringAttribute('standard');
  }
  public set standard(value: string) {
    this._standard = value;
  }
  // Temporarily expose input value. Use with caution.
  public get standardInput() {
    return this._standard;
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
  private _rulesList = new IpCommunityListStandardRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpCommunityListStandardRulesListStruct[] | cdktf.IResolvable) {
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
      standard: cdktf.stringToTerraform(this._standard),
      uuid: cdktf.stringToTerraform(this._uuid),
      rules_list: cdktf.listMapper(ipCommunityListStandardRulesListStructToTerraform, true)(this._rulesList.internalValue),
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
      standard: {
        value: cdktf.stringToHclTerraform(this._standard),
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
        value: cdktf.listMapperHcl(ipCommunityListStandardRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpCommunityListStandardRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
