// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CenTrafficMarkingPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#description CenTrafficMarkingPolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#dry_run CenTrafficMarkingPolicy#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#force CenTrafficMarkingPolicy#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#id CenTrafficMarkingPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#marking_dscp CenTrafficMarkingPolicy#marking_dscp}
  */
  readonly markingDscp: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#priority CenTrafficMarkingPolicy#priority}
  */
  readonly priority: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#traffic_marking_policy_name CenTrafficMarkingPolicy#traffic_marking_policy_name}
  */
  readonly trafficMarkingPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#transit_router_id CenTrafficMarkingPolicy#transit_router_id}
  */
  readonly transitRouterId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#timeouts CenTrafficMarkingPolicy#timeouts}
  */
  readonly timeouts?: CenTrafficMarkingPolicyTimeouts;
  /**
  * traffic_match_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#traffic_match_rules CenTrafficMarkingPolicy#traffic_match_rules}
  */
  readonly trafficMatchRules?: CenTrafficMarkingPolicyTrafficMatchRules[] | cdktf.IResolvable;
}
export interface CenTrafficMarkingPolicyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#create CenTrafficMarkingPolicy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#delete CenTrafficMarkingPolicy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#update CenTrafficMarkingPolicy#update}
  */
  readonly update?: string;
}

export function cenTrafficMarkingPolicyTimeoutsToTerraform(struct?: CenTrafficMarkingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cenTrafficMarkingPolicyTimeoutsToHclTerraform(struct?: CenTrafficMarkingPolicyTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenTrafficMarkingPolicyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CenTrafficMarkingPolicyTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenTrafficMarkingPolicyTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface CenTrafficMarkingPolicyTrafficMatchRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#address_family CenTrafficMarkingPolicy#address_family}
  */
  readonly addressFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#dst_cidr CenTrafficMarkingPolicy#dst_cidr}
  */
  readonly dstCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#dst_port_range CenTrafficMarkingPolicy#dst_port_range}
  */
  readonly dstPortRange?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#match_dscp CenTrafficMarkingPolicy#match_dscp}
  */
  readonly matchDscp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#protocol CenTrafficMarkingPolicy#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#src_cidr CenTrafficMarkingPolicy#src_cidr}
  */
  readonly srcCidr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#src_port_range CenTrafficMarkingPolicy#src_port_range}
  */
  readonly srcPortRange?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#traffic_match_rule_description CenTrafficMarkingPolicy#traffic_match_rule_description}
  */
  readonly trafficMatchRuleDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#traffic_match_rule_name CenTrafficMarkingPolicy#traffic_match_rule_name}
  */
  readonly trafficMatchRuleName?: string;
}

export function cenTrafficMarkingPolicyTrafficMatchRulesToTerraform(struct?: CenTrafficMarkingPolicyTrafficMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address_family: cdktf.stringToTerraform(struct!.addressFamily),
    dst_cidr: cdktf.stringToTerraform(struct!.dstCidr),
    dst_port_range: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.dstPortRange),
    match_dscp: cdktf.numberToTerraform(struct!.matchDscp),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    src_cidr: cdktf.stringToTerraform(struct!.srcCidr),
    src_port_range: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.srcPortRange),
    traffic_match_rule_description: cdktf.stringToTerraform(struct!.trafficMatchRuleDescription),
    traffic_match_rule_name: cdktf.stringToTerraform(struct!.trafficMatchRuleName),
  }
}


export function cenTrafficMarkingPolicyTrafficMatchRulesToHclTerraform(struct?: CenTrafficMarkingPolicyTrafficMatchRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address_family: {
      value: cdktf.stringToHclTerraform(struct!.addressFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_cidr: {
      value: cdktf.stringToHclTerraform(struct!.dstCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_port_range: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.dstPortRange),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    match_dscp: {
      value: cdktf.numberToHclTerraform(struct!.matchDscp),
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
    src_cidr: {
      value: cdktf.stringToHclTerraform(struct!.srcCidr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_port_range: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.srcPortRange),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    traffic_match_rule_description: {
      value: cdktf.stringToHclTerraform(struct!.trafficMatchRuleDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    traffic_match_rule_name: {
      value: cdktf.stringToHclTerraform(struct!.trafficMatchRuleName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CenTrafficMarkingPolicyTrafficMatchRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CenTrafficMarkingPolicyTrafficMatchRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._addressFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressFamily = this._addressFamily;
    }
    if (this._dstCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstCidr = this._dstCidr;
    }
    if (this._dstPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortRange = this._dstPortRange;
    }
    if (this._matchDscp !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchDscp = this._matchDscp;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._srcCidr !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcCidr = this._srcCidr;
    }
    if (this._srcPortRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcPortRange = this._srcPortRange;
    }
    if (this._trafficMatchRuleDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMatchRuleDescription = this._trafficMatchRuleDescription;
    }
    if (this._trafficMatchRuleName !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficMatchRuleName = this._trafficMatchRuleName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CenTrafficMarkingPolicyTrafficMatchRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._addressFamily = undefined;
      this._dstCidr = undefined;
      this._dstPortRange = undefined;
      this._matchDscp = undefined;
      this._protocol = undefined;
      this._srcCidr = undefined;
      this._srcPortRange = undefined;
      this._trafficMatchRuleDescription = undefined;
      this._trafficMatchRuleName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._addressFamily = value.addressFamily;
      this._dstCidr = value.dstCidr;
      this._dstPortRange = value.dstPortRange;
      this._matchDscp = value.matchDscp;
      this._protocol = value.protocol;
      this._srcCidr = value.srcCidr;
      this._srcPortRange = value.srcPortRange;
      this._trafficMatchRuleDescription = value.trafficMatchRuleDescription;
      this._trafficMatchRuleName = value.trafficMatchRuleName;
    }
  }

  // address_family - computed: true, optional: true, required: false
  private _addressFamily?: string; 
  public get addressFamily() {
    return this.getStringAttribute('address_family');
  }
  public set addressFamily(value: string) {
    this._addressFamily = value;
  }
  public resetAddressFamily() {
    this._addressFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamilyInput() {
    return this._addressFamily;
  }

  // dst_cidr - computed: true, optional: true, required: false
  private _dstCidr?: string; 
  public get dstCidr() {
    return this.getStringAttribute('dst_cidr');
  }
  public set dstCidr(value: string) {
    this._dstCidr = value;
  }
  public resetDstCidr() {
    this._dstCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstCidrInput() {
    return this._dstCidr;
  }

  // dst_port_range - computed: true, optional: true, required: false
  private _dstPortRange?: number[]; 
  public get dstPortRange() {
    return this.getNumberListAttribute('dst_port_range');
  }
  public set dstPortRange(value: number[]) {
    this._dstPortRange = value;
  }
  public resetDstPortRange() {
    this._dstPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortRangeInput() {
    return this._dstPortRange;
  }

  // match_dscp - computed: true, optional: true, required: false
  private _matchDscp?: number; 
  public get matchDscp() {
    return this.getNumberAttribute('match_dscp');
  }
  public set matchDscp(value: number) {
    this._matchDscp = value;
  }
  public resetMatchDscp() {
    this._matchDscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchDscpInput() {
    return this._matchDscp;
  }

  // protocol - computed: true, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // src_cidr - computed: true, optional: true, required: false
  private _srcCidr?: string; 
  public get srcCidr() {
    return this.getStringAttribute('src_cidr');
  }
  public set srcCidr(value: string) {
    this._srcCidr = value;
  }
  public resetSrcCidr() {
    this._srcCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcCidrInput() {
    return this._srcCidr;
  }

  // src_port_range - computed: true, optional: true, required: false
  private _srcPortRange?: number[]; 
  public get srcPortRange() {
    return this.getNumberListAttribute('src_port_range');
  }
  public set srcPortRange(value: number[]) {
    this._srcPortRange = value;
  }
  public resetSrcPortRange() {
    this._srcPortRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcPortRangeInput() {
    return this._srcPortRange;
  }

  // traffic_match_rule_description - computed: true, optional: true, required: false
  private _trafficMatchRuleDescription?: string; 
  public get trafficMatchRuleDescription() {
    return this.getStringAttribute('traffic_match_rule_description');
  }
  public set trafficMatchRuleDescription(value: string) {
    this._trafficMatchRuleDescription = value;
  }
  public resetTrafficMatchRuleDescription() {
    this._trafficMatchRuleDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMatchRuleDescriptionInput() {
    return this._trafficMatchRuleDescription;
  }

  // traffic_match_rule_name - computed: true, optional: true, required: false
  private _trafficMatchRuleName?: string; 
  public get trafficMatchRuleName() {
    return this.getStringAttribute('traffic_match_rule_name');
  }
  public set trafficMatchRuleName(value: string) {
    this._trafficMatchRuleName = value;
  }
  public resetTrafficMatchRuleName() {
    this._trafficMatchRuleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMatchRuleNameInput() {
    return this._trafficMatchRuleName;
  }
}

export class CenTrafficMarkingPolicyTrafficMatchRulesList extends cdktf.ComplexList {
  public internalValue? : CenTrafficMarkingPolicyTrafficMatchRules[] | cdktf.IResolvable

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
  public get(index: number): CenTrafficMarkingPolicyTrafficMatchRulesOutputReference {
    return new CenTrafficMarkingPolicyTrafficMatchRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy alicloud_cen_traffic_marking_policy}
*/
export class CenTrafficMarkingPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cen_traffic_marking_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CenTrafficMarkingPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CenTrafficMarkingPolicy to import
  * @param importFromId The id of the existing CenTrafficMarkingPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CenTrafficMarkingPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cen_traffic_marking_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/cen_traffic_marking_policy alicloud_cen_traffic_marking_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CenTrafficMarkingPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: CenTrafficMarkingPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cen_traffic_marking_policy',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._dryRun = config.dryRun;
    this._force = config.force;
    this._id = config.id;
    this._markingDscp = config.markingDscp;
    this._priority = config.priority;
    this._trafficMarkingPolicyName = config.trafficMarkingPolicyName;
    this._transitRouterId = config.transitRouterId;
    this._timeouts.internalValue = config.timeouts;
    this._trafficMatchRules.internalValue = config.trafficMatchRules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
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

  // marking_dscp - computed: false, optional: false, required: true
  private _markingDscp?: number; 
  public get markingDscp() {
    return this.getNumberAttribute('marking_dscp');
  }
  public set markingDscp(value: number) {
    this._markingDscp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get markingDscpInput() {
    return this._markingDscp;
  }

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // traffic_marking_policy_id - computed: true, optional: false, required: false
  public get trafficMarkingPolicyId() {
    return this.getStringAttribute('traffic_marking_policy_id');
  }

  // traffic_marking_policy_name - computed: false, optional: true, required: false
  private _trafficMarkingPolicyName?: string; 
  public get trafficMarkingPolicyName() {
    return this.getStringAttribute('traffic_marking_policy_name');
  }
  public set trafficMarkingPolicyName(value: string) {
    this._trafficMarkingPolicyName = value;
  }
  public resetTrafficMarkingPolicyName() {
    this._trafficMarkingPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMarkingPolicyNameInput() {
    return this._trafficMarkingPolicyName;
  }

  // transit_router_id - computed: false, optional: false, required: true
  private _transitRouterId?: string; 
  public get transitRouterId() {
    return this.getStringAttribute('transit_router_id');
  }
  public set transitRouterId(value: string) {
    this._transitRouterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transitRouterIdInput() {
    return this._transitRouterId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CenTrafficMarkingPolicyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CenTrafficMarkingPolicyTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // traffic_match_rules - computed: false, optional: true, required: false
  private _trafficMatchRules = new CenTrafficMarkingPolicyTrafficMatchRulesList(this, "traffic_match_rules", true);
  public get trafficMatchRules() {
    return this._trafficMatchRules;
  }
  public putTrafficMatchRules(value: CenTrafficMarkingPolicyTrafficMatchRules[] | cdktf.IResolvable) {
    this._trafficMatchRules.internalValue = value;
  }
  public resetTrafficMatchRules() {
    this._trafficMatchRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficMatchRulesInput() {
    return this._trafficMatchRules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      dry_run: cdktf.booleanToTerraform(this._dryRun),
      force: cdktf.booleanToTerraform(this._force),
      id: cdktf.stringToTerraform(this._id),
      marking_dscp: cdktf.numberToTerraform(this._markingDscp),
      priority: cdktf.numberToTerraform(this._priority),
      traffic_marking_policy_name: cdktf.stringToTerraform(this._trafficMarkingPolicyName),
      transit_router_id: cdktf.stringToTerraform(this._transitRouterId),
      timeouts: cenTrafficMarkingPolicyTimeoutsToTerraform(this._timeouts.internalValue),
      traffic_match_rules: cdktf.listMapper(cenTrafficMarkingPolicyTrafficMatchRulesToTerraform, true)(this._trafficMatchRules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dry_run: {
        value: cdktf.booleanToHclTerraform(this._dryRun),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      force: {
        value: cdktf.booleanToHclTerraform(this._force),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      marking_dscp: {
        value: cdktf.numberToHclTerraform(this._markingDscp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      traffic_marking_policy_name: {
        value: cdktf.stringToHclTerraform(this._trafficMarkingPolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transit_router_id: {
        value: cdktf.stringToHclTerraform(this._transitRouterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cenTrafficMarkingPolicyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CenTrafficMarkingPolicyTimeouts",
      },
      traffic_match_rules: {
        value: cdktf.listMapperHcl(cenTrafficMarkingPolicyTrafficMatchRulesToHclTerraform, true)(this._trafficMatchRules.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "CenTrafficMarkingPolicyTrafficMatchRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
