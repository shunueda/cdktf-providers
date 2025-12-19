// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpLargeCommunityListStandardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#id IpLargeCommunityListStandard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Add a standard large community-list entry (Large community list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#standard IpLargeCommunityListStandard#standard}
  */
  readonly standard: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#uuid IpLargeCommunityListStandard#uuid}
  */
  readonly uuid?: string;
  /**
  * rules_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#rules_list IpLargeCommunityListStandard#rules_list}
  */
  readonly rulesList?: IpLargeCommunityListStandardRulesListStruct[] | cdktf.IResolvable;
}
export interface IpLargeCommunityListStandardRulesListStruct {
  /**
  * 'deny': Specify large community to reject; 'permit': Specify large community to accept;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#standard_lcom_action IpLargeCommunityListStandard#standard_lcom_action}
  */
  readonly standardLcomAction?: string;
  /**
  * Large community value in the format XX:YY:ZZ
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#standard_lcomm_value IpLargeCommunityListStandard#standard_lcomm_value}
  */
  readonly standardLcommValue?: string;
}

export function ipLargeCommunityListStandardRulesListStructToTerraform(struct?: IpLargeCommunityListStandardRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    standard_lcom_action: cdktf.stringToTerraform(struct!.standardLcomAction),
    standard_lcomm_value: cdktf.stringToTerraform(struct!.standardLcommValue),
  }
}


export function ipLargeCommunityListStandardRulesListStructToHclTerraform(struct?: IpLargeCommunityListStandardRulesListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    standard_lcom_action: {
      value: cdktf.stringToHclTerraform(struct!.standardLcomAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    standard_lcomm_value: {
      value: cdktf.stringToHclTerraform(struct!.standardLcommValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class IpLargeCommunityListStandardRulesListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): IpLargeCommunityListStandardRulesListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._standardLcomAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardLcomAction = this._standardLcomAction;
    }
    if (this._standardLcommValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standardLcommValue = this._standardLcommValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: IpLargeCommunityListStandardRulesListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._standardLcomAction = undefined;
      this._standardLcommValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._standardLcomAction = value.standardLcomAction;
      this._standardLcommValue = value.standardLcommValue;
    }
  }

  // standard_lcom_action - computed: false, optional: true, required: false
  private _standardLcomAction?: string; 
  public get standardLcomAction() {
    return this.getStringAttribute('standard_lcom_action');
  }
  public set standardLcomAction(value: string) {
    this._standardLcomAction = value;
  }
  public resetStandardLcomAction() {
    this._standardLcomAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardLcomActionInput() {
    return this._standardLcomAction;
  }

  // standard_lcomm_value - computed: false, optional: true, required: false
  private _standardLcommValue?: string; 
  public get standardLcommValue() {
    return this.getStringAttribute('standard_lcomm_value');
  }
  public set standardLcommValue(value: string) {
    this._standardLcommValue = value;
  }
  public resetStandardLcommValue() {
    this._standardLcommValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standardLcommValueInput() {
    return this._standardLcommValue;
  }
}

export class IpLargeCommunityListStandardRulesListStructList extends cdktf.ComplexList {
  public internalValue? : IpLargeCommunityListStandardRulesListStruct[] | cdktf.IResolvable

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
  public get(index: number): IpLargeCommunityListStandardRulesListStructOutputReference {
    return new IpLargeCommunityListStandardRulesListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard thunder_ip_large_community_list_standard}
*/
export class IpLargeCommunityListStandard extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ip_large_community_list_standard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpLargeCommunityListStandard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpLargeCommunityListStandard to import
  * @param importFromId The id of the existing IpLargeCommunityListStandard that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpLargeCommunityListStandard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ip_large_community_list_standard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ip_large_community_list_standard thunder_ip_large_community_list_standard} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpLargeCommunityListStandardConfig
  */
  public constructor(scope: Construct, id: string, config: IpLargeCommunityListStandardConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ip_large_community_list_standard',
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
  private _rulesList = new IpLargeCommunityListStandardRulesListStructList(this, "rules_list", false);
  public get rulesList() {
    return this._rulesList;
  }
  public putRulesList(value: IpLargeCommunityListStandardRulesListStruct[] | cdktf.IResolvable) {
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
      rules_list: cdktf.listMapper(ipLargeCommunityListStandardRulesListStructToTerraform, true)(this._rulesList.internalValue),
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
        value: cdktf.listMapperHcl(ipLargeCommunityListStandardRulesListStructToHclTerraform, true)(this._rulesList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "IpLargeCommunityListStandardRulesListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
