// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementAccessRulebaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * When true, the source, destination and services & applications parameters are displayed as ranges of IP addresses and port numbers rather than network objects.
  * Objects that are not represented using IP addresses or port numbers are presented as objects.
  * In addition, the response of each rule does not contain the parameters: source, source-negate, destination, destination-negate, service and service-negate, but instead it contains the parameters: source-ranges, destination-ranges and service-ranges.
  * 
  * Note: Requesting to show rules as ranges is limited up to 20 rules per request, otherwise an error is returned. If you wish to request more rules, use the offset and limit parameters to limit your request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#dereference_group_members DataCheckpointManagementAccessRulebase#dereference_group_members}
  */
  readonly dereferenceGroupMembers?: boolean | cdktf.IResolvable;
  /**
  * Search expression to filter the rulebase. The provided text should be exactly the same as it would be given in Smart Console. The logical operators in the expression ('AND', 'OR') should be provided in capital letters. If an operator is not used, the default OR operator applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#filter DataCheckpointManagementAccessRulebase#filter}
  */
  readonly filter?: string;
  /**
  * Sets filter preferences.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#filter_settings DataCheckpointManagementAccessRulebase#filter_settings}
  */
  readonly filterSettings?: { [key: string]: string };
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#hits_settings DataCheckpointManagementAccessRulebase#hits_settings}
  */
  readonly hitsSettings?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#id DataCheckpointManagementAccessRulebase#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximal number of returned results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#limit DataCheckpointManagementAccessRulebase#limit}
  */
  readonly limit?: number;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#name DataCheckpointManagementAccessRulebase#name}
  */
  readonly name?: string;
  /**
  * Number of the results to initially skip.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#offset DataCheckpointManagementAccessRulebase#offset}
  */
  readonly offset?: number;
  /**
  * Name of the package.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#package DataCheckpointManagementAccessRulebase#package}
  */
  readonly package?: string;
  /**
  * When true, the source, destination and services & applications parameters are displayed as ranges of IP addresses and port numbers rather than network objects.
  * Objects that are not represented using IP addresses or port numbers are presented as objects.
  * In addition, the response of each rule does not contain the parameters: source, source-negate, destination, destination-negate, service and service-negate, but instead it contains the parameters: source-ranges, destination-ranges and service-ranges.
  * 
  * Note: Requesting to show rules as ranges is limited up to 20 rules per request, otherwise an error is returned. If you wish to request more rules, use the offset and limit parameters to limit your request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#show_as_ranges DataCheckpointManagementAccessRulebase#show_as_ranges}
  */
  readonly showAsRanges?: boolean | cdktf.IResolvable;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#show_hits DataCheckpointManagementAccessRulebase#show_hits}
  */
  readonly showHits?: boolean | cdktf.IResolvable;
  /**
  * N/A
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#show_membership DataCheckpointManagementAccessRulebase#show_membership}
  */
  readonly showMembership?: boolean | cdktf.IResolvable;
  /**
  * Object unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#uid DataCheckpointManagementAccessRulebase#uid}
  */
  readonly uid?: string;
  /**
  * order block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#order DataCheckpointManagementAccessRulebase#order}
  */
  readonly order?: DataCheckpointManagementAccessRulebaseOrder[] | cdktf.IResolvable;
}
export interface DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionary {
}

export function dataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryToTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryToHclTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionary): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionary | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionary | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }
}

export class DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryOutputReference {
    return new DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebase {
}

export function dataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseToTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseToHclTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_settings - computed: true, optional: false, required: false
  private _actionSettings = new cdktf.StringMap(this, "action_settings");
  public get actionSettings() {
    return this._actionSettings;
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return cdktf.Fn.tolist(this.getListAttribute('content'));
  }

  // content_direction - computed: true, optional: false, required: false
  public get contentDirection() {
    return this.getStringAttribute('content_direction');
  }

  // content_negate - computed: true, optional: false, required: false
  public get contentNegate() {
    return this.getBooleanAttribute('content_negate');
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new cdktf.StringMap(this, "custom_fields");
  public get customFields() {
    return this._customFields;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getListAttribute('destination');
  }

  // destination_negate - computed: true, optional: false, required: false
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // inline_layer - computed: true, optional: false, required: false
  public get inlineLayer() {
    return this.getStringAttribute('inline_layer');
  }

  // install_on - computed: true, optional: false, required: false
  public get installOn() {
    return this.getListAttribute('install_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getListAttribute('service');
  }

  // service_negate - computed: true, optional: false, required: false
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }

  // service_resource - computed: true, optional: false, required: false
  public get serviceResource() {
    return this.getStringAttribute('service_resource');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }

  // source_negate - computed: true, optional: false, required: false
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return cdktf.Fn.tolist(this.getListAttribute('time'));
  }

  // track - computed: true, optional: false, required: false
  private _track = new cdktf.StringMap(this, "track");
  public get track() {
    return this._track;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getListAttribute('vpn');
  }
}

export class DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseOutputReference {
    return new DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementAccessRulebaseRulebaseRulebase {
}

export function dataCheckpointManagementAccessRulebaseRulebaseRulebaseToTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAccessRulebaseRulebaseRulebaseToHclTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAccessRulebaseRulebaseRulebaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementAccessRulebaseRulebaseRulebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAccessRulebaseRulebaseRulebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // action_settings - computed: true, optional: false, required: false
  private _actionSettings = new cdktf.StringMap(this, "action_settings");
  public get actionSettings() {
    return this._actionSettings;
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // content - computed: true, optional: false, required: false
  public get content() {
    return cdktf.Fn.tolist(this.getListAttribute('content'));
  }

  // content_direction - computed: true, optional: false, required: false
  public get contentDirection() {
    return this.getStringAttribute('content_direction');
  }

  // content_negate - computed: true, optional: false, required: false
  public get contentNegate() {
    return this.getBooleanAttribute('content_negate');
  }

  // custom_fields - computed: true, optional: false, required: false
  private _customFields = new cdktf.StringMap(this, "custom_fields");
  public get customFields() {
    return this._customFields;
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getListAttribute('destination');
  }

  // destination_negate - computed: true, optional: false, required: false
  public get destinationNegate() {
    return this.getBooleanAttribute('destination_negate');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // inline_layer - computed: true, optional: false, required: false
  public get inlineLayer() {
    return this.getStringAttribute('inline_layer');
  }

  // install_on - computed: true, optional: false, required: false
  public get installOn() {
    return this.getListAttribute('install_on');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // rule_number - computed: true, optional: false, required: false
  public get ruleNumber() {
    return this.getNumberAttribute('rule_number');
  }

  // rulebase - computed: true, optional: false, required: false
  private _rulebase = new DataCheckpointManagementAccessRulebaseRulebaseRulebaseRulebaseList(this, "rulebase", false);
  public get rulebase() {
    return this._rulebase;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getListAttribute('service');
  }

  // service_negate - computed: true, optional: false, required: false
  public get serviceNegate() {
    return this.getBooleanAttribute('service_negate');
  }

  // service_resource - computed: true, optional: false, required: false
  public get serviceResource() {
    return this.getStringAttribute('service_resource');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }

  // source_negate - computed: true, optional: false, required: false
  public get sourceNegate() {
    return this.getBooleanAttribute('source_negate');
  }

  // time - computed: true, optional: false, required: false
  public get time() {
    return cdktf.Fn.tolist(this.getListAttribute('time'));
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // track - computed: true, optional: false, required: false
  private _track = new cdktf.StringMap(this, "track");
  public get track() {
    return this._track;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // uid - computed: true, optional: false, required: false
  public get uid() {
    return this.getStringAttribute('uid');
  }

  // vpn - computed: true, optional: false, required: false
  public get vpn() {
    return this.getListAttribute('vpn');
  }
}

export class DataCheckpointManagementAccessRulebaseRulebaseRulebaseList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAccessRulebaseRulebaseRulebaseOutputReference {
    return new DataCheckpointManagementAccessRulebaseRulebaseRulebaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementAccessRulebaseRulebase {
}

export function dataCheckpointManagementAccessRulebaseRulebaseToTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementAccessRulebaseRulebaseToHclTerraform(struct?: DataCheckpointManagementAccessRulebaseRulebase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementAccessRulebaseRulebaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataCheckpointManagementAccessRulebaseRulebase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAccessRulebaseRulebase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getNumberAttribute('from');
  }

  // objects_dictionary - computed: true, optional: false, required: false
  private _objectsDictionary = new DataCheckpointManagementAccessRulebaseRulebaseObjectsDictionaryList(this, "objects_dictionary", false);
  public get objectsDictionary() {
    return this._objectsDictionary;
  }

  // rulebase - computed: true, optional: false, required: false
  private _rulebase = new DataCheckpointManagementAccessRulebaseRulebaseRulebaseList(this, "rulebase", false);
  public get rulebase() {
    return this._rulebase;
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getNumberAttribute('to');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }
}

export class DataCheckpointManagementAccessRulebaseRulebaseList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementAccessRulebaseRulebaseOutputReference {
    return new DataCheckpointManagementAccessRulebaseRulebaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementAccessRulebaseOrder {
  /**
  * Sorts results by the given field in ascending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#asc DataCheckpointManagementAccessRulebase#asc}
  */
  readonly asc?: string;
  /**
  * Sorts results by the given field in descending order.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#desc DataCheckpointManagementAccessRulebase#desc}
  */
  readonly desc?: string;
}

export function dataCheckpointManagementAccessRulebaseOrderToTerraform(struct?: DataCheckpointManagementAccessRulebaseOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asc: cdktf.stringToTerraform(struct!.asc),
    desc: cdktf.stringToTerraform(struct!.desc),
  }
}


export function dataCheckpointManagementAccessRulebaseOrderToHclTerraform(struct?: DataCheckpointManagementAccessRulebaseOrder | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asc: {
      value: cdktf.stringToHclTerraform(struct!.asc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataCheckpointManagementAccessRulebaseOrderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementAccessRulebaseOrder | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asc !== undefined) {
      hasAnyValues = true;
      internalValueResult.asc = this._asc;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementAccessRulebaseOrder | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._asc = undefined;
      this._desc = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._asc = value.asc;
      this._desc = value.desc;
    }
  }

  // asc - computed: false, optional: true, required: false
  private _asc?: string; 
  public get asc() {
    return this.getStringAttribute('asc');
  }
  public set asc(value: string) {
    this._asc = value;
  }
  public resetAsc() {
    this._asc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ascInput() {
    return this._asc;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }
}

export class DataCheckpointManagementAccessRulebaseOrderList extends cdktf.ComplexList {
  public internalValue? : DataCheckpointManagementAccessRulebaseOrder[] | cdktf.IResolvable

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
  public get(index: number): DataCheckpointManagementAccessRulebaseOrderOutputReference {
    return new DataCheckpointManagementAccessRulebaseOrderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase checkpoint_management_access_rulebase}
*/
export class DataCheckpointManagementAccessRulebase extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_access_rulebase";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementAccessRulebase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementAccessRulebase to import
  * @param importFromId The id of the existing DataCheckpointManagementAccessRulebase that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementAccessRulebase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_access_rulebase", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.11.0/docs/data-sources/management_access_rulebase checkpoint_management_access_rulebase} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementAccessRulebaseConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementAccessRulebaseConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_access_rulebase',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dereferenceGroupMembers = config.dereferenceGroupMembers;
    this._filter = config.filter;
    this._filterSettings = config.filterSettings;
    this._hitsSettings = config.hitsSettings;
    this._id = config.id;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._package = config.package;
    this._showAsRanges = config.showAsRanges;
    this._showHits = config.showHits;
    this._showMembership = config.showMembership;
    this._uid = config.uid;
    this._order.internalValue = config.order;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dereference_group_members - computed: false, optional: true, required: false
  private _dereferenceGroupMembers?: boolean | cdktf.IResolvable; 
  public get dereferenceGroupMembers() {
    return this.getBooleanAttribute('dereference_group_members');
  }
  public set dereferenceGroupMembers(value: boolean | cdktf.IResolvable) {
    this._dereferenceGroupMembers = value;
  }
  public resetDereferenceGroupMembers() {
    this._dereferenceGroupMembers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dereferenceGroupMembersInput() {
    return this._dereferenceGroupMembers;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_settings - computed: false, optional: true, required: false
  private _filterSettings?: { [key: string]: string }; 
  public get filterSettings() {
    return this.getStringMapAttribute('filter_settings');
  }
  public set filterSettings(value: { [key: string]: string }) {
    this._filterSettings = value;
  }
  public resetFilterSettings() {
    this._filterSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterSettingsInput() {
    return this._filterSettings;
  }

  // hits_settings - computed: false, optional: true, required: false
  private _hitsSettings?: { [key: string]: string }; 
  public get hitsSettings() {
    return this.getStringMapAttribute('hits_settings');
  }
  public set hitsSettings(value: { [key: string]: string }) {
    this._hitsSettings = value;
  }
  public resetHitsSettings() {
    this._hitsSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsSettingsInput() {
    return this._hitsSettings;
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

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // package - computed: false, optional: true, required: false
  private _package?: string; 
  public get package() {
    return this.getStringAttribute('package');
  }
  public set package(value: string) {
    this._package = value;
  }
  public resetPackage() {
    this._package = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageInput() {
    return this._package;
  }

  // rulebase - computed: true, optional: false, required: false
  private _rulebase = new DataCheckpointManagementAccessRulebaseRulebaseList(this, "rulebase", false);
  public get rulebase() {
    return this._rulebase;
  }

  // show_as_ranges - computed: false, optional: true, required: false
  private _showAsRanges?: boolean | cdktf.IResolvable; 
  public get showAsRanges() {
    return this.getBooleanAttribute('show_as_ranges');
  }
  public set showAsRanges(value: boolean | cdktf.IResolvable) {
    this._showAsRanges = value;
  }
  public resetShowAsRanges() {
    this._showAsRanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showAsRangesInput() {
    return this._showAsRanges;
  }

  // show_hits - computed: false, optional: true, required: false
  private _showHits?: boolean | cdktf.IResolvable; 
  public get showHits() {
    return this.getBooleanAttribute('show_hits');
  }
  public set showHits(value: boolean | cdktf.IResolvable) {
    this._showHits = value;
  }
  public resetShowHits() {
    this._showHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showHitsInput() {
    return this._showHits;
  }

  // show_membership - computed: false, optional: true, required: false
  private _showMembership?: boolean | cdktf.IResolvable; 
  public get showMembership() {
    return this.getBooleanAttribute('show_membership');
  }
  public set showMembership(value: boolean | cdktf.IResolvable) {
    this._showMembership = value;
  }
  public resetShowMembership() {
    this._showMembership = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showMembershipInput() {
    return this._showMembership;
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // order - computed: false, optional: true, required: false
  private _order = new DataCheckpointManagementAccessRulebaseOrderList(this, "order", false);
  public get order() {
    return this._order;
  }
  public putOrder(value: DataCheckpointManagementAccessRulebaseOrder[] | cdktf.IResolvable) {
    this._order.internalValue = value;
  }
  public resetOrder() {
    this._order.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderInput() {
    return this._order.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dereference_group_members: cdktf.booleanToTerraform(this._dereferenceGroupMembers),
      filter: cdktf.stringToTerraform(this._filter),
      filter_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._filterSettings),
      hits_settings: cdktf.hashMapper(cdktf.stringToTerraform)(this._hitsSettings),
      id: cdktf.stringToTerraform(this._id),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      package: cdktf.stringToTerraform(this._package),
      show_as_ranges: cdktf.booleanToTerraform(this._showAsRanges),
      show_hits: cdktf.booleanToTerraform(this._showHits),
      show_membership: cdktf.booleanToTerraform(this._showMembership),
      uid: cdktf.stringToTerraform(this._uid),
      order: cdktf.listMapper(dataCheckpointManagementAccessRulebaseOrderToTerraform, true)(this._order.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dereference_group_members: {
        value: cdktf.booleanToHclTerraform(this._dereferenceGroupMembers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._filterSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      hits_settings: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._hitsSettings),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
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
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      package: {
        value: cdktf.stringToHclTerraform(this._package),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_as_ranges: {
        value: cdktf.booleanToHclTerraform(this._showAsRanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_hits: {
        value: cdktf.booleanToHclTerraform(this._showHits),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      show_membership: {
        value: cdktf.booleanToHclTerraform(this._showMembership),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order: {
        value: cdktf.listMapperHcl(dataCheckpointManagementAccessRulebaseOrderToHclTerraform, true)(this._order.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataCheckpointManagementAccessRulebaseOrderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
