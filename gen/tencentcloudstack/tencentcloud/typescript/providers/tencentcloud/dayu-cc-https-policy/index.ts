// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuCcHttpsPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action mode. Valid values are `alg` and `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#action DayuCcHttpsPolicy#action}
  */
  readonly action?: string;
  /**
  * Domain that the CC self-define https policy works for, only valid when `protocol` is `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#domain DayuCcHttpsPolicy#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#id DayuCcHttpsPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the CC self-define https policy. Length should between 1 and 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#name DayuCcHttpsPolicy#name}
  */
  readonly name: string;
  /**
  * ID of the resource that the CC self-define https policy works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#resource_id DayuCcHttpsPolicy#resource_id}
  */
  readonly resourceId: string;
  /**
  * Type of the resource that the CC self-define https policy works for, valid value is `bgpip`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#resource_type DayuCcHttpsPolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * Rule id of the domain that the CC self-define https policy works for, only valid when `protocol` is `https`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#rule_id DayuCcHttpsPolicy#rule_id}
  */
  readonly ruleId: string;
  /**
  * Indicate the CC self-define https policy takes effect or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#switch DayuCcHttpsPolicy#switch}
  */
  readonly switch?: boolean | cdktf.IResolvable;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#rule_list DayuCcHttpsPolicy#rule_list}
  */
  readonly ruleList: DayuCcHttpsPolicyRuleListStruct[] | cdktf.IResolvable;
}
export interface DayuCcHttpsPolicyRuleListStruct {
  /**
  * Operator of the rule. Valid values are `include` and `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#operator DayuCcHttpsPolicy#operator}
  */
  readonly operator: string;
  /**
  * Key of the rule. Valid values are `cgi`, `ua` and `referer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#skey DayuCcHttpsPolicy#skey}
  */
  readonly skey: string;
  /**
  * Rule value, then length should be less than 31 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#value DayuCcHttpsPolicy#value}
  */
  readonly value: string;
}

export function dayuCcHttpsPolicyRuleListStructToTerraform(struct?: DayuCcHttpsPolicyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    skey: cdktf.stringToTerraform(struct!.skey),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dayuCcHttpsPolicyRuleListStructToHclTerraform(struct?: DayuCcHttpsPolicyRuleListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skey: {
      value: cdktf.stringToHclTerraform(struct!.skey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuCcHttpsPolicyRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcHttpsPolicyRuleListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._skey !== undefined) {
      hasAnyValues = true;
      internalValueResult.skey = this._skey;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuCcHttpsPolicyRuleListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._skey = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._skey = value.skey;
      this._value = value.value;
    }
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // skey - computed: false, optional: false, required: true
  private _skey?: string; 
  public get skey() {
    return this.getStringAttribute('skey');
  }
  public set skey(value: string) {
    this._skey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get skeyInput() {
    return this._skey;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DayuCcHttpsPolicyRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DayuCcHttpsPolicyRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DayuCcHttpsPolicyRuleListStructOutputReference {
    return new DayuCcHttpsPolicyRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy tencentcloud_dayu_cc_https_policy}
*/
export class DayuCcHttpsPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_cc_https_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuCcHttpsPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuCcHttpsPolicy to import
  * @param importFromId The id of the existing DayuCcHttpsPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuCcHttpsPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_cc_https_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.47/docs/resources/dayu_cc_https_policy tencentcloud_dayu_cc_https_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuCcHttpsPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DayuCcHttpsPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_cc_https_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.47',
        providerVersionConstraint: '1.82.47'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._domain = config.domain;
    this._id = config.id;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._ruleId = config.ruleId;
    this._switch = config.switch;
    this._ruleList.internalValue = config.ruleList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
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

  // ip_list - computed: true, optional: false, required: false
  public get ipList() {
    return cdktf.Fn.tolist(this.getListAttribute('ip_list'));
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // resource_id - computed: false, optional: false, required: true
  private _resourceId?: string; 
  public get resourceId() {
    return this.getStringAttribute('resource_id');
  }
  public set resourceId(value: string) {
    this._resourceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceIdInput() {
    return this._resourceId;
  }

  // resource_type - computed: false, optional: false, required: true
  private _resourceType?: string; 
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }
  public set resourceType(value: string) {
    this._resourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceTypeInput() {
    return this._resourceType;
  }

  // rule_id - computed: false, optional: false, required: true
  private _ruleId?: string; 
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
  public set ruleId(value: string) {
    this._ruleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdInput() {
    return this._ruleId;
  }

  // switch - computed: false, optional: true, required: false
  private _switch?: boolean | cdktf.IResolvable; 
  public get switch() {
    return this.getBooleanAttribute('switch');
  }
  public set switch(value: boolean | cdktf.IResolvable) {
    this._switch = value;
  }
  public resetSwitch() {
    this._switch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchInput() {
    return this._switch;
  }

  // rule_list - computed: false, optional: false, required: true
  private _ruleList = new DayuCcHttpsPolicyRuleListStructList(this, "rule_list", true);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DayuCcHttpsPolicyRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      domain: cdktf.stringToTerraform(this._domain),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      rule_id: cdktf.stringToTerraform(this._ruleId),
      switch: cdktf.booleanToTerraform(this._switch),
      rule_list: cdktf.listMapper(dayuCcHttpsPolicyRuleListStructToTerraform, true)(this._ruleList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_type: {
        value: cdktf.stringToHclTerraform(this._resourceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_id: {
        value: cdktf.stringToHclTerraform(this._ruleId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch: {
        value: cdktf.booleanToHclTerraform(this._switch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rule_list: {
        value: cdktf.listMapperHcl(dayuCcHttpsPolicyRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DayuCcHttpsPolicyRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
