// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuCcHttpPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action mode, only valid when `smode` is `matching`. Valid values are `alg` and `drop`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#action DayuCcHttpPolicy#action}
  */
  readonly action?: string;
  /**
  * Max frequency per minute, only valid when `smode` is `speedlimit`, the valid value ranges from 1 to 10000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#frequency DayuCcHttpPolicy#frequency}
  */
  readonly frequency?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#id DayuCcHttpPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Ip of the CC self-define http policy, only valid when `resource_type` is `bgp-multip`. The num of list items can only be set one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#ip DayuCcHttpPolicy#ip}
  */
  readonly ip?: string;
  /**
  * Name of the CC self-define http policy. Length should between 1 and 20.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#name DayuCcHttpPolicy#name}
  */
  readonly name: string;
  /**
  * ID of the resource that the CC self-define http policy works for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#resource_id DayuCcHttpPolicy#resource_id}
  */
  readonly resourceId: string;
  /**
  * Type of the resource that the CC self-define http policy works for, valid values are `bgpip`, `bgp`, `bgp-multip` and `net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#resource_type DayuCcHttpPolicy#resource_type}
  */
  readonly resourceType: string;
  /**
  * Match mode, and valid values are `matching`, `speedlimit`. Note: the speed limit type CC self-define policy can only set one.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#smode DayuCcHttpPolicy#smode}
  */
  readonly smode?: string;
  /**
  * Indicate the CC self-define http policy takes effect or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#switch DayuCcHttpPolicy#switch}
  */
  readonly switch?: boolean | cdktf.IResolvable;
  /**
  * rule_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#rule_list DayuCcHttpPolicy#rule_list}
  */
  readonly ruleList?: DayuCcHttpPolicyRuleListStruct[] | cdktf.IResolvable;
}
export interface DayuCcHttpPolicyRuleListStruct {
  /**
  * Operator of the rule. Valid values: `include`, `not_include`, `equal`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#operator DayuCcHttpPolicy#operator}
  */
  readonly operator?: string;
  /**
  * Key of the rule. Valid values: `host`, `cgi`, `ua`, `referer`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#skey DayuCcHttpPolicy#skey}
  */
  readonly skey?: string;
  /**
  * Rule value, then length should be less than 31 bytes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#value DayuCcHttpPolicy#value}
  */
  readonly value?: string;
}

export function dayuCcHttpPolicyRuleListStructToTerraform(struct?: DayuCcHttpPolicyRuleListStruct | cdktf.IResolvable): any {
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


export function dayuCcHttpPolicyRuleListStructToHclTerraform(struct?: DayuCcHttpPolicyRuleListStruct | cdktf.IResolvable): any {
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

export class DayuCcHttpPolicyRuleListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuCcHttpPolicyRuleListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DayuCcHttpPolicyRuleListStruct | cdktf.IResolvable | undefined) {
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

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // skey - computed: false, optional: true, required: false
  private _skey?: string; 
  public get skey() {
    return this.getStringAttribute('skey');
  }
  public set skey(value: string) {
    this._skey = value;
  }
  public resetSkey() {
    this._skey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skeyInput() {
    return this._skey;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DayuCcHttpPolicyRuleListStructList extends cdktf.ComplexList {
  public internalValue? : DayuCcHttpPolicyRuleListStruct[] | cdktf.IResolvable

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
  public get(index: number): DayuCcHttpPolicyRuleListStructOutputReference {
    return new DayuCcHttpPolicyRuleListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy tencentcloud_dayu_cc_http_policy}
*/
export class DayuCcHttpPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_cc_http_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuCcHttpPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuCcHttpPolicy to import
  * @param importFromId The id of the existing DayuCcHttpPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuCcHttpPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_cc_http_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_cc_http_policy tencentcloud_dayu_cc_http_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuCcHttpPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DayuCcHttpPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_cc_http_policy',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.41',
        providerVersionConstraint: '1.82.41'
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
    this._frequency = config.frequency;
    this._id = config.id;
    this._ip = config.ip;
    this._name = config.name;
    this._resourceId = config.resourceId;
    this._resourceType = config.resourceType;
    this._smode = config.smode;
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

  // frequency - computed: true, optional: true, required: false
  private _frequency?: number; 
  public get frequency() {
    return this.getNumberAttribute('frequency');
  }
  public set frequency(value: number) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
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

  // ip - computed: true, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
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

  // smode - computed: false, optional: true, required: false
  private _smode?: string; 
  public get smode() {
    return this.getStringAttribute('smode');
  }
  public set smode(value: string) {
    this._smode = value;
  }
  public resetSmode() {
    this._smode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smodeInput() {
    return this._smode;
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

  // rule_list - computed: false, optional: true, required: false
  private _ruleList = new DayuCcHttpPolicyRuleListStructList(this, "rule_list", true);
  public get ruleList() {
    return this._ruleList;
  }
  public putRuleList(value: DayuCcHttpPolicyRuleListStruct[] | cdktf.IResolvable) {
    this._ruleList.internalValue = value;
  }
  public resetRuleList() {
    this._ruleList.internalValue = undefined;
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
      frequency: cdktf.numberToTerraform(this._frequency),
      id: cdktf.stringToTerraform(this._id),
      ip: cdktf.stringToTerraform(this._ip),
      name: cdktf.stringToTerraform(this._name),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      resource_type: cdktf.stringToTerraform(this._resourceType),
      smode: cdktf.stringToTerraform(this._smode),
      switch: cdktf.booleanToTerraform(this._switch),
      rule_list: cdktf.listMapper(dayuCcHttpPolicyRuleListStructToTerraform, true)(this._ruleList.internalValue),
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
      frequency: {
        value: cdktf.numberToHclTerraform(this._frequency),
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
      ip: {
        value: cdktf.stringToHclTerraform(this._ip),
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
      smode: {
        value: cdktf.stringToHclTerraform(this._smode),
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
        value: cdktf.listMapperHcl(dayuCcHttpPolicyRuleListStructToHclTerraform, true)(this._ruleList.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "DayuCcHttpPolicyRuleListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
