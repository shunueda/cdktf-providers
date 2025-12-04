// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DayuL4RuleV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Business of the resource that the layer 4 rule works for. Valid values: `bgpip` and `net`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#business DayuL4RuleV2#business}
  */
  readonly business: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#id DayuL4RuleV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#resource_id DayuL4RuleV2#resource_id}
  */
  readonly resourceId: string;
  /**
  * The virtual port of the layer 4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#virtual_port DayuL4RuleV2#virtual_port}
  */
  readonly virtualPort: number;
  /**
  * Resource vpn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#vpn DayuL4RuleV2#vpn}
  */
  readonly vpn: string;
  /**
  * rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#rules DayuL4RuleV2#rules}
  */
  readonly rules: DayuL4RuleV2Rules;
}
export interface DayuL4RuleV2RulesSourceListStruct {
  /**
  * Source IP or domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#source DayuL4RuleV2#source}
  */
  readonly source: string;
  /**
  * Weight of the source.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#weight DayuL4RuleV2#weight}
  */
  readonly weight: number;
}

export function dayuL4RuleV2RulesSourceListStructToTerraform(struct?: DayuL4RuleV2RulesSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    source: cdktf.stringToTerraform(struct!.source),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function dayuL4RuleV2RulesSourceListStructToHclTerraform(struct?: DayuL4RuleV2RulesSourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuL4RuleV2RulesSourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DayuL4RuleV2RulesSourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuL4RuleV2RulesSourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._source = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._source = value.source;
      this._weight = value.weight;
    }
  }

  // source - computed: false, optional: false, required: true
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class DayuL4RuleV2RulesSourceListStructList extends cdktf.ComplexList {
  public internalValue? : DayuL4RuleV2RulesSourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DayuL4RuleV2RulesSourceListStructOutputReference {
    return new DayuL4RuleV2RulesSourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DayuL4RuleV2Rules {
  /**
  * session hold switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#keep_enable DayuL4RuleV2#keep_enable}
  */
  readonly keepEnable: boolean | cdktf.IResolvable;
  /**
  * The keeptime of the layer 4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#keeptime DayuL4RuleV2#keeptime}
  */
  readonly keeptime: number;
  /**
  * LB type of the rule, `1` for weight cycling and `2` for IP hash.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#lb_type DayuL4RuleV2#lb_type}
  */
  readonly lbType: number;
  /**
  * Protocol of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#protocol DayuL4RuleV2#protocol}
  */
  readonly protocol: string;
  /**
  * Corresponding regional information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#region DayuL4RuleV2#region}
  */
  readonly region: number;
  /**
  * Remove the watermark state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#remove_switch DayuL4RuleV2#remove_switch}
  */
  readonly removeSwitch: boolean | cdktf.IResolvable;
  /**
  * Name of the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#rule_name DayuL4RuleV2#rule_name}
  */
  readonly ruleName: string;
  /**
  * The source port of the layer 4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#source_port DayuL4RuleV2#source_port}
  */
  readonly sourcePort: number;
  /**
  * Source type, `1` for source of host, `2` for source of IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#source_type DayuL4RuleV2#source_type}
  */
  readonly sourceType: number;
  /**
  * The virtual port of the layer 4 rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#virtual_port DayuL4RuleV2#virtual_port}
  */
  readonly virtualPort: number;
  /**
  * source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#source_list DayuL4RuleV2#source_list}
  */
  readonly sourceList: DayuL4RuleV2RulesSourceListStruct[] | cdktf.IResolvable;
}

export function dayuL4RuleV2RulesToTerraform(struct?: DayuL4RuleV2RulesOutputReference | DayuL4RuleV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keep_enable: cdktf.booleanToTerraform(struct!.keepEnable),
    keeptime: cdktf.numberToTerraform(struct!.keeptime),
    lb_type: cdktf.numberToTerraform(struct!.lbType),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    region: cdktf.numberToTerraform(struct!.region),
    remove_switch: cdktf.booleanToTerraform(struct!.removeSwitch),
    rule_name: cdktf.stringToTerraform(struct!.ruleName),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    source_type: cdktf.numberToTerraform(struct!.sourceType),
    virtual_port: cdktf.numberToTerraform(struct!.virtualPort),
    source_list: cdktf.listMapper(dayuL4RuleV2RulesSourceListStructToTerraform, true)(struct!.sourceList),
  }
}


export function dayuL4RuleV2RulesToHclTerraform(struct?: DayuL4RuleV2RulesOutputReference | DayuL4RuleV2Rules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keep_enable: {
      value: cdktf.booleanToHclTerraform(struct!.keepEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keeptime: {
      value: cdktf.numberToHclTerraform(struct!.keeptime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    lb_type: {
      value: cdktf.numberToHclTerraform(struct!.lbType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    region: {
      value: cdktf.numberToHclTerraform(struct!.region),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remove_switch: {
      value: cdktf.booleanToHclTerraform(struct!.removeSwitch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rule_name: {
      value: cdktf.stringToHclTerraform(struct!.ruleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_type: {
      value: cdktf.numberToHclTerraform(struct!.sourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_port: {
      value: cdktf.numberToHclTerraform(struct!.virtualPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source_list: {
      value: cdktf.listMapperHcl(dayuL4RuleV2RulesSourceListStructToHclTerraform, true)(struct!.sourceList),
      isBlock: true,
      type: "list",
      storageClassType: "DayuL4RuleV2RulesSourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DayuL4RuleV2RulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DayuL4RuleV2Rules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keepEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepEnable = this._keepEnable;
    }
    if (this._keeptime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keeptime = this._keeptime;
    }
    if (this._lbType !== undefined) {
      hasAnyValues = true;
      internalValueResult.lbType = this._lbType;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._region !== undefined) {
      hasAnyValues = true;
      internalValueResult.region = this._region;
    }
    if (this._removeSwitch !== undefined) {
      hasAnyValues = true;
      internalValueResult.removeSwitch = this._removeSwitch;
    }
    if (this._ruleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleName = this._ruleName;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._sourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceType = this._sourceType;
    }
    if (this._virtualPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPort = this._virtualPort;
    }
    if (this._sourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceList = this._sourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DayuL4RuleV2Rules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._keepEnable = undefined;
      this._keeptime = undefined;
      this._lbType = undefined;
      this._protocol = undefined;
      this._region = undefined;
      this._removeSwitch = undefined;
      this._ruleName = undefined;
      this._sourcePort = undefined;
      this._sourceType = undefined;
      this._virtualPort = undefined;
      this._sourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._keepEnable = value.keepEnable;
      this._keeptime = value.keeptime;
      this._lbType = value.lbType;
      this._protocol = value.protocol;
      this._region = value.region;
      this._removeSwitch = value.removeSwitch;
      this._ruleName = value.ruleName;
      this._sourcePort = value.sourcePort;
      this._sourceType = value.sourceType;
      this._virtualPort = value.virtualPort;
      this._sourceList.internalValue = value.sourceList;
    }
  }

  // keep_enable - computed: false, optional: false, required: true
  private _keepEnable?: boolean | cdktf.IResolvable; 
  public get keepEnable() {
    return this.getBooleanAttribute('keep_enable');
  }
  public set keepEnable(value: boolean | cdktf.IResolvable) {
    this._keepEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepEnableInput() {
    return this._keepEnable;
  }

  // keeptime - computed: false, optional: false, required: true
  private _keeptime?: number; 
  public get keeptime() {
    return this.getNumberAttribute('keeptime');
  }
  public set keeptime(value: number) {
    this._keeptime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keeptimeInput() {
    return this._keeptime;
  }

  // lb_type - computed: false, optional: false, required: true
  private _lbType?: number; 
  public get lbType() {
    return this.getNumberAttribute('lb_type');
  }
  public set lbType(value: number) {
    this._lbType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lbTypeInput() {
    return this._lbType;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // region - computed: false, optional: false, required: true
  private _region?: number; 
  public get region() {
    return this.getNumberAttribute('region');
  }
  public set region(value: number) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // remove_switch - computed: false, optional: false, required: true
  private _removeSwitch?: boolean | cdktf.IResolvable; 
  public get removeSwitch() {
    return this.getBooleanAttribute('remove_switch');
  }
  public set removeSwitch(value: boolean | cdktf.IResolvable) {
    this._removeSwitch = value;
  }
  // Temporarily expose input value. Use with caution.
  public get removeSwitchInput() {
    return this._removeSwitch;
  }

  // rule_name - computed: false, optional: false, required: true
  private _ruleName?: string; 
  public get ruleName() {
    return this.getStringAttribute('rule_name');
  }
  public set ruleName(value: string) {
    this._ruleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleNameInput() {
    return this._ruleName;
  }

  // source_port - computed: false, optional: false, required: true
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // source_type - computed: false, optional: false, required: true
  private _sourceType?: number; 
  public get sourceType() {
    return this.getNumberAttribute('source_type');
  }
  public set sourceType(value: number) {
    this._sourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTypeInput() {
    return this._sourceType;
  }

  // virtual_port - computed: false, optional: false, required: true
  private _virtualPort?: number; 
  public get virtualPort() {
    return this.getNumberAttribute('virtual_port');
  }
  public set virtualPort(value: number) {
    this._virtualPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort;
  }

  // source_list - computed: false, optional: false, required: true
  private _sourceList = new DayuL4RuleV2RulesSourceListStructList(this, "source_list", false);
  public get sourceList() {
    return this._sourceList;
  }
  public putSourceList(value: DayuL4RuleV2RulesSourceListStruct[] | cdktf.IResolvable) {
    this._sourceList.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceListInput() {
    return this._sourceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2 tencentcloud_dayu_l4_rule_v2}
*/
export class DayuL4RuleV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dayu_l4_rule_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DayuL4RuleV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DayuL4RuleV2 to import
  * @param importFromId The id of the existing DayuL4RuleV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DayuL4RuleV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dayu_l4_rule_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.41/docs/resources/dayu_l4_rule_v2 tencentcloud_dayu_l4_rule_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DayuL4RuleV2Config
  */
  public constructor(scope: Construct, id: string, config: DayuL4RuleV2Config) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dayu_l4_rule_v2',
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
    this._business = config.business;
    this._id = config.id;
    this._resourceId = config.resourceId;
    this._virtualPort = config.virtualPort;
    this._vpn = config.vpn;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business - computed: false, optional: false, required: true
  private _business?: string; 
  public get business() {
    return this.getStringAttribute('business');
  }
  public set business(value: string) {
    this._business = value;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInput() {
    return this._business;
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

  // virtual_port - computed: false, optional: false, required: true
  private _virtualPort?: number; 
  public get virtualPort() {
    return this.getNumberAttribute('virtual_port');
  }
  public set virtualPort(value: number) {
    this._virtualPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPortInput() {
    return this._virtualPort;
  }

  // vpn - computed: false, optional: false, required: true
  private _vpn?: string; 
  public get vpn() {
    return this.getStringAttribute('vpn');
  }
  public set vpn(value: string) {
    this._vpn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnInput() {
    return this._vpn;
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new DayuL4RuleV2RulesOutputReference(this, "rules");
  public get rules() {
    return this._rules;
  }
  public putRules(value: DayuL4RuleV2Rules) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business: cdktf.stringToTerraform(this._business),
      id: cdktf.stringToTerraform(this._id),
      resource_id: cdktf.stringToTerraform(this._resourceId),
      virtual_port: cdktf.numberToTerraform(this._virtualPort),
      vpn: cdktf.stringToTerraform(this._vpn),
      rules: dayuL4RuleV2RulesToTerraform(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business: {
        value: cdktf.stringToHclTerraform(this._business),
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
      resource_id: {
        value: cdktf.stringToHclTerraform(this._resourceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_port: {
        value: cdktf.numberToHclTerraform(this._virtualPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vpn: {
        value: cdktf.stringToHclTerraform(this._vpn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: dayuL4RuleV2RulesToHclTerraform(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DayuL4RuleV2RulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
