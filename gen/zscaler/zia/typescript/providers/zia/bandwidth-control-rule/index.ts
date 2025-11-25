// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BandwidthControlRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the bandwidth control rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#description BandwidthControlRule#description}
  */
  readonly description?: string;
  /**
  * The maximum percentage of a location's bandwidth you want to be guaranteed for each selected bandwidth control rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#max_bandwidth BandwidthControlRule#max_bandwidth}
  */
  readonly maxBandwidth?: number;
  /**
  * The minimum percentage of a location's bandwidth you want to be guaranteed for each selected bandwidth control rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#min_bandwidth BandwidthControlRule#min_bandwidth}
  */
  readonly minBandwidth?: number;
  /**
  * The bandwidth control rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#name BandwidthControlRule#name}
  */
  readonly name?: string;
  /**
  * The order of the bandwidth control rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#order BandwidthControlRule#order}
  */
  readonly order: number;
  /**
  * Supported Protocol criteria
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#protocols BandwidthControlRule#protocols}
  */
  readonly protocols: string[];
  /**
  * Admin rank of the Bandwidth Control policy rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#rank BandwidthControlRule#rank}
  */
  readonly rank?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#state BandwidthControlRule#state}
  */
  readonly state?: string;
  /**
  * bandwidth_classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#bandwidth_classes BandwidthControlRule#bandwidth_classes}
  */
  readonly bandwidthClasses?: BandwidthControlRuleBandwidthClasses;
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#labels BandwidthControlRule#labels}
  */
  readonly labels?: BandwidthControlRuleLabels;
  /**
  * location_groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#location_groups BandwidthControlRule#location_groups}
  */
  readonly locationGroups?: BandwidthControlRuleLocationGroups;
  /**
  * locations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#locations BandwidthControlRule#locations}
  */
  readonly locations?: BandwidthControlRuleLocations;
  /**
  * time_windows block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#time_windows BandwidthControlRule#time_windows}
  */
  readonly timeWindows?: BandwidthControlRuleTimeWindows;
}
export interface BandwidthControlRuleBandwidthClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#id BandwidthControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function bandwidthControlRuleBandwidthClassesToTerraform(struct?: BandwidthControlRuleBandwidthClassesOutputReference | BandwidthControlRuleBandwidthClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function bandwidthControlRuleBandwidthClassesToHclTerraform(struct?: BandwidthControlRuleBandwidthClassesOutputReference | BandwidthControlRuleBandwidthClasses): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BandwidthControlRuleBandwidthClassesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BandwidthControlRuleBandwidthClasses | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BandwidthControlRuleBandwidthClasses | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface BandwidthControlRuleLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#id BandwidthControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function bandwidthControlRuleLabelsToTerraform(struct?: BandwidthControlRuleLabelsOutputReference | BandwidthControlRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function bandwidthControlRuleLabelsToHclTerraform(struct?: BandwidthControlRuleLabelsOutputReference | BandwidthControlRuleLabels): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BandwidthControlRuleLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BandwidthControlRuleLabels | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BandwidthControlRuleLabels | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface BandwidthControlRuleLocationGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#id BandwidthControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function bandwidthControlRuleLocationGroupsToTerraform(struct?: BandwidthControlRuleLocationGroupsOutputReference | BandwidthControlRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function bandwidthControlRuleLocationGroupsToHclTerraform(struct?: BandwidthControlRuleLocationGroupsOutputReference | BandwidthControlRuleLocationGroups): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BandwidthControlRuleLocationGroupsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BandwidthControlRuleLocationGroups | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BandwidthControlRuleLocationGroups | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface BandwidthControlRuleLocations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#id BandwidthControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function bandwidthControlRuleLocationsToTerraform(struct?: BandwidthControlRuleLocationsOutputReference | BandwidthControlRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function bandwidthControlRuleLocationsToHclTerraform(struct?: BandwidthControlRuleLocationsOutputReference | BandwidthControlRuleLocations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BandwidthControlRuleLocationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BandwidthControlRuleLocations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BandwidthControlRuleLocations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}
export interface BandwidthControlRuleTimeWindows {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#id BandwidthControlRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number[];
}

export function bandwidthControlRuleTimeWindowsToTerraform(struct?: BandwidthControlRuleTimeWindowsOutputReference | BandwidthControlRuleTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.id),
  }
}


export function bandwidthControlRuleTimeWindowsToHclTerraform(struct?: BandwidthControlRuleTimeWindowsOutputReference | BandwidthControlRuleTimeWindows): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BandwidthControlRuleTimeWindowsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BandwidthControlRuleTimeWindows | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BandwidthControlRuleTimeWindows | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number[]; 
  public get id() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('id')));
  }
  public set id(value: number[]) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule zia_bandwidth_control_rule}
*/
export class BandwidthControlRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_bandwidth_control_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BandwidthControlRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BandwidthControlRule to import
  * @param importFromId The id of the existing BandwidthControlRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BandwidthControlRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_bandwidth_control_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/bandwidth_control_rule zia_bandwidth_control_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BandwidthControlRuleConfig
  */
  public constructor(scope: Construct, id: string, config: BandwidthControlRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zia_bandwidth_control_rule',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
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
    this._maxBandwidth = config.maxBandwidth;
    this._minBandwidth = config.minBandwidth;
    this._name = config.name;
    this._order = config.order;
    this._protocols = config.protocols;
    this._rank = config.rank;
    this._state = config.state;
    this._bandwidthClasses.internalValue = config.bandwidthClasses;
    this._labels.internalValue = config.labels;
    this._locationGroups.internalValue = config.locationGroups;
    this._locations.internalValue = config.locations;
    this._timeWindows.internalValue = config.timeWindows;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_bandwidth - computed: false, optional: true, required: false
  private _maxBandwidth?: number; 
  public get maxBandwidth() {
    return this.getNumberAttribute('max_bandwidth');
  }
  public set maxBandwidth(value: number) {
    this._maxBandwidth = value;
  }
  public resetMaxBandwidth() {
    this._maxBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxBandwidthInput() {
    return this._maxBandwidth;
  }

  // min_bandwidth - computed: false, optional: true, required: false
  private _minBandwidth?: number; 
  public get minBandwidth() {
    return this.getNumberAttribute('min_bandwidth');
  }
  public set minBandwidth(value: number) {
    this._minBandwidth = value;
  }
  public resetMinBandwidth() {
    this._minBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minBandwidthInput() {
    return this._minBandwidth;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // order - computed: false, optional: false, required: true
  private _order?: number; 
  public get order() {
    return this.getNumberAttribute('order');
  }
  public set order(value: number) {
    this._order = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order;
  }

  // protocols - computed: false, optional: false, required: true
  private _protocols?: string[]; 
  public get protocols() {
    return cdktf.Fn.tolist(this.getListAttribute('protocols'));
  }
  public set protocols(value: string[]) {
    this._protocols = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolsInput() {
    return this._protocols;
  }

  // rank - computed: false, optional: true, required: false
  private _rank?: number; 
  public get rank() {
    return this.getNumberAttribute('rank');
  }
  public set rank(value: number) {
    this._rank = value;
  }
  public resetRank() {
    this._rank = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rankInput() {
    return this._rank;
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // bandwidth_classes - computed: false, optional: true, required: false
  private _bandwidthClasses = new BandwidthControlRuleBandwidthClassesOutputReference(this, "bandwidth_classes");
  public get bandwidthClasses() {
    return this._bandwidthClasses;
  }
  public putBandwidthClasses(value: BandwidthControlRuleBandwidthClasses) {
    this._bandwidthClasses.internalValue = value;
  }
  public resetBandwidthClasses() {
    this._bandwidthClasses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandwidthClassesInput() {
    return this._bandwidthClasses.internalValue;
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new BandwidthControlRuleLabelsOutputReference(this, "labels");
  public get labels() {
    return this._labels;
  }
  public putLabels(value: BandwidthControlRuleLabels) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }

  // location_groups - computed: false, optional: true, required: false
  private _locationGroups = new BandwidthControlRuleLocationGroupsOutputReference(this, "location_groups");
  public get locationGroups() {
    return this._locationGroups;
  }
  public putLocationGroups(value: BandwidthControlRuleLocationGroups) {
    this._locationGroups.internalValue = value;
  }
  public resetLocationGroups() {
    this._locationGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationGroupsInput() {
    return this._locationGroups.internalValue;
  }

  // locations - computed: false, optional: true, required: false
  private _locations = new BandwidthControlRuleLocationsOutputReference(this, "locations");
  public get locations() {
    return this._locations;
  }
  public putLocations(value: BandwidthControlRuleLocations) {
    this._locations.internalValue = value;
  }
  public resetLocations() {
    this._locations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations.internalValue;
  }

  // time_windows - computed: false, optional: true, required: false
  private _timeWindows = new BandwidthControlRuleTimeWindowsOutputReference(this, "time_windows");
  public get timeWindows() {
    return this._timeWindows;
  }
  public putTimeWindows(value: BandwidthControlRuleTimeWindows) {
    this._timeWindows.internalValue = value;
  }
  public resetTimeWindows() {
    this._timeWindows.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeWindowsInput() {
    return this._timeWindows.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      max_bandwidth: cdktf.numberToTerraform(this._maxBandwidth),
      min_bandwidth: cdktf.numberToTerraform(this._minBandwidth),
      name: cdktf.stringToTerraform(this._name),
      order: cdktf.numberToTerraform(this._order),
      protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protocols),
      rank: cdktf.numberToTerraform(this._rank),
      state: cdktf.stringToTerraform(this._state),
      bandwidth_classes: bandwidthControlRuleBandwidthClassesToTerraform(this._bandwidthClasses.internalValue),
      labels: bandwidthControlRuleLabelsToTerraform(this._labels.internalValue),
      location_groups: bandwidthControlRuleLocationGroupsToTerraform(this._locationGroups.internalValue),
      locations: bandwidthControlRuleLocationsToTerraform(this._locations.internalValue),
      time_windows: bandwidthControlRuleTimeWindowsToTerraform(this._timeWindows.internalValue),
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
      max_bandwidth: {
        value: cdktf.numberToHclTerraform(this._maxBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_bandwidth: {
        value: cdktf.numberToHclTerraform(this._minBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.numberToHclTerraform(this._order),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocols: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protocols),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      rank: {
        value: cdktf.numberToHclTerraform(this._rank),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bandwidth_classes: {
        value: bandwidthControlRuleBandwidthClassesToHclTerraform(this._bandwidthClasses.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BandwidthControlRuleBandwidthClassesList",
      },
      labels: {
        value: bandwidthControlRuleLabelsToHclTerraform(this._labels.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BandwidthControlRuleLabelsList",
      },
      location_groups: {
        value: bandwidthControlRuleLocationGroupsToHclTerraform(this._locationGroups.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BandwidthControlRuleLocationGroupsList",
      },
      locations: {
        value: bandwidthControlRuleLocationsToHclTerraform(this._locations.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BandwidthControlRuleLocationsList",
      },
      time_windows: {
        value: bandwidthControlRuleTimeWindowsToHclTerraform(this._timeWindows.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "BandwidthControlRuleTimeWindowsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
