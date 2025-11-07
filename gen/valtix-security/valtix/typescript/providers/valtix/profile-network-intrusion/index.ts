// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileNetworkIntrusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#action ProfileNetworkIntrusion#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#auto_update ProfileNetworkIntrusion#auto_update}
  */
  readonly autoUpdate?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#auto_update_custom ProfileNetworkIntrusion#auto_update_custom}
  */
  readonly autoUpdateCustom?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#custom_ruleset_version ProfileNetworkIntrusion#custom_ruleset_version}
  */
  readonly customRulesetVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#delay_by_days ProfileNetworkIntrusion#delay_by_days}
  */
  readonly delayByDays?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#delay_by_days_custom ProfileNetworkIntrusion#delay_by_days_custom}
  */
  readonly delayByDaysCustom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#description ProfileNetworkIntrusion#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#disable_custom_ruleset ProfileNetworkIntrusion#disable_custom_ruleset}
  */
  readonly disableCustomRuleset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#disable_talos_ruleset ProfileNetworkIntrusion#disable_talos_ruleset}
  */
  readonly disableTalosRuleset?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#id ProfileNetworkIntrusion#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#name ProfileNetworkIntrusion#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#pcap ProfileNetworkIntrusion#pcap}
  */
  readonly pcap?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#policy ProfileNetworkIntrusion#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#policy_action ProfileNetworkIntrusion#policy_action}
  */
  readonly policyAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#talos_ruleset_version ProfileNetworkIntrusion#talos_ruleset_version}
  */
  readonly talosRulesetVersion?: string;
  /**
  * categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#categories ProfileNetworkIntrusion#categories}
  */
  readonly categories?: ProfileNetworkIntrusionCategories[] | cdktf.IResolvable;
  /**
  * classes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#classes ProfileNetworkIntrusion#classes}
  */
  readonly classes?: ProfileNetworkIntrusionClasses[] | cdktf.IResolvable;
  /**
  * event_suppressor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#event_suppressor ProfileNetworkIntrusion#event_suppressor}
  */
  readonly eventSuppressor?: ProfileNetworkIntrusionEventSuppressor[] | cdktf.IResolvable;
  /**
  * profile_event_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#profile_event_filter ProfileNetworkIntrusion#profile_event_filter}
  */
  readonly profileEventFilter?: ProfileNetworkIntrusionProfileEventFilter;
  /**
  * rule_event_filter block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#rule_event_filter ProfileNetworkIntrusion#rule_event_filter}
  */
  readonly ruleEventFilter?: ProfileNetworkIntrusionRuleEventFilter[] | cdktf.IResolvable;
}
export interface ProfileNetworkIntrusionCategories {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#action ProfileNetworkIntrusion#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#name ProfileNetworkIntrusion#name}
  */
  readonly name: string;
}

export function profileNetworkIntrusionCategoriesToTerraform(struct?: ProfileNetworkIntrusionCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function profileNetworkIntrusionCategoriesToHclTerraform(struct?: ProfileNetworkIntrusionCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileNetworkIntrusionCategoriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileNetworkIntrusionCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileNetworkIntrusionCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: true, required: false
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
}

export class ProfileNetworkIntrusionCategoriesList extends cdktf.ComplexList {
  public internalValue? : ProfileNetworkIntrusionCategories[] | cdktf.IResolvable

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
  public get(index: number): ProfileNetworkIntrusionCategoriesOutputReference {
    return new ProfileNetworkIntrusionCategoriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileNetworkIntrusionClasses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#action ProfileNetworkIntrusion#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#name ProfileNetworkIntrusion#name}
  */
  readonly name: string;
}

export function profileNetworkIntrusionClassesToTerraform(struct?: ProfileNetworkIntrusionClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function profileNetworkIntrusionClassesToHclTerraform(struct?: ProfileNetworkIntrusionClasses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileNetworkIntrusionClassesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileNetworkIntrusionClasses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileNetworkIntrusionClasses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._name = value.name;
    }
  }

  // action - computed: false, optional: true, required: false
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
}

export class ProfileNetworkIntrusionClassesList extends cdktf.ComplexList {
  public internalValue? : ProfileNetworkIntrusionClasses[] | cdktf.IResolvable

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
  public get(index: number): ProfileNetworkIntrusionClassesOutputReference {
    return new ProfileNetworkIntrusionClassesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileNetworkIntrusionEventSuppressor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#action ProfileNetworkIntrusion#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#gid ProfileNetworkIntrusion#gid}
  */
  readonly gid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#rule_ids ProfileNetworkIntrusion#rule_ids}
  */
  readonly ruleIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#source_ips ProfileNetworkIntrusion#source_ips}
  */
  readonly sourceIps: string[];
}

export function profileNetworkIntrusionEventSuppressorToTerraform(struct?: ProfileNetworkIntrusionEventSuppressor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    gid: cdktf.numberToTerraform(struct!.gid),
    rule_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ruleIds),
    source_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.sourceIps),
  }
}


export function profileNetworkIntrusionEventSuppressorToHclTerraform(struct?: ProfileNetworkIntrusionEventSuppressor | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gid: {
      value: cdktf.numberToHclTerraform(struct!.gid),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ruleIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    source_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.sourceIps),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileNetworkIntrusionEventSuppressorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileNetworkIntrusionEventSuppressor | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._gid !== undefined) {
      hasAnyValues = true;
      internalValueResult.gid = this._gid;
    }
    if (this._ruleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds;
    }
    if (this._sourceIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIps = this._sourceIps;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileNetworkIntrusionEventSuppressor | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._gid = undefined;
      this._ruleIds = undefined;
      this._sourceIps = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._gid = value.gid;
      this._ruleIds = value.ruleIds;
      this._sourceIps = value.sourceIps;
    }
  }

  // action - computed: false, optional: true, required: false
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

  // gid - computed: false, optional: true, required: false
  private _gid?: number; 
  public get gid() {
    return this.getNumberAttribute('gid');
  }
  public set gid(value: number) {
    this._gid = value;
  }
  public resetGid() {
    this._gid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gidInput() {
    return this._gid;
  }

  // rule_ids - computed: false, optional: false, required: true
  private _ruleIds?: number[]; 
  public get ruleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rule_ids')));
  }
  public set ruleIds(value: number[]) {
    this._ruleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // source_ips - computed: false, optional: false, required: true
  private _sourceIps?: string[]; 
  public get sourceIps() {
    return cdktf.Fn.tolist(this.getListAttribute('source_ips'));
  }
  public set sourceIps(value: string[]) {
    this._sourceIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpsInput() {
    return this._sourceIps;
  }
}

export class ProfileNetworkIntrusionEventSuppressorList extends cdktf.ComplexList {
  public internalValue? : ProfileNetworkIntrusionEventSuppressor[] | cdktf.IResolvable

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
  public get(index: number): ProfileNetworkIntrusionEventSuppressorOutputReference {
    return new ProfileNetworkIntrusionEventSuppressorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ProfileNetworkIntrusionProfileEventFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#number_of_events ProfileNetworkIntrusion#number_of_events}
  */
  readonly numberOfEvents: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#time ProfileNetworkIntrusion#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#type ProfileNetworkIntrusion#type}
  */
  readonly type?: string;
}

export function profileNetworkIntrusionProfileEventFilterToTerraform(struct?: ProfileNetworkIntrusionProfileEventFilterOutputReference | ProfileNetworkIntrusionProfileEventFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_events: cdktf.numberToTerraform(struct!.numberOfEvents),
    time: cdktf.numberToTerraform(struct!.time),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function profileNetworkIntrusionProfileEventFilterToHclTerraform(struct?: ProfileNetworkIntrusionProfileEventFilterOutputReference | ProfileNetworkIntrusionProfileEventFilter): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_events: {
      value: cdktf.numberToHclTerraform(struct!.numberOfEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileNetworkIntrusionProfileEventFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ProfileNetworkIntrusionProfileEventFilter | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfEvents = this._numberOfEvents;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileNetworkIntrusionProfileEventFilter | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._numberOfEvents = undefined;
      this._time = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._numberOfEvents = value.numberOfEvents;
      this._time = value.time;
      this._type = value.type;
    }
  }

  // number_of_events - computed: false, optional: false, required: true
  private _numberOfEvents?: number; 
  public get numberOfEvents() {
    return this.getNumberAttribute('number_of_events');
  }
  public set numberOfEvents(value: number) {
    this._numberOfEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEventsInput() {
    return this._numberOfEvents;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface ProfileNetworkIntrusionRuleEventFilter {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#number_of_events ProfileNetworkIntrusion#number_of_events}
  */
  readonly numberOfEvents: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#rule_ids ProfileNetworkIntrusion#rule_ids}
  */
  readonly ruleIds: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#time ProfileNetworkIntrusion#time}
  */
  readonly time?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#type ProfileNetworkIntrusion#type}
  */
  readonly type?: string;
}

export function profileNetworkIntrusionRuleEventFilterToTerraform(struct?: ProfileNetworkIntrusionRuleEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    number_of_events: cdktf.numberToTerraform(struct!.numberOfEvents),
    rule_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.ruleIds),
    time: cdktf.numberToTerraform(struct!.time),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function profileNetworkIntrusionRuleEventFilterToHclTerraform(struct?: ProfileNetworkIntrusionRuleEventFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    number_of_events: {
      value: cdktf.numberToHclTerraform(struct!.numberOfEvents),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rule_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.ruleIds),
      isBlock: false,
      type: "set",
      storageClassType: "numberList",
    },
    time: {
      value: cdktf.numberToHclTerraform(struct!.time),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ProfileNetworkIntrusionRuleEventFilterOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ProfileNetworkIntrusionRuleEventFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._numberOfEvents !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfEvents = this._numberOfEvents;
    }
    if (this._ruleIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ruleIds = this._ruleIds;
    }
    if (this._time !== undefined) {
      hasAnyValues = true;
      internalValueResult.time = this._time;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ProfileNetworkIntrusionRuleEventFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._numberOfEvents = undefined;
      this._ruleIds = undefined;
      this._time = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._numberOfEvents = value.numberOfEvents;
      this._ruleIds = value.ruleIds;
      this._time = value.time;
      this._type = value.type;
    }
  }

  // number_of_events - computed: false, optional: false, required: true
  private _numberOfEvents?: number; 
  public get numberOfEvents() {
    return this.getNumberAttribute('number_of_events');
  }
  public set numberOfEvents(value: number) {
    this._numberOfEvents = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfEventsInput() {
    return this._numberOfEvents;
  }

  // rule_ids - computed: false, optional: false, required: true
  private _ruleIds?: number[]; 
  public get ruleIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rule_ids')));
  }
  public set ruleIds(value: number[]) {
    this._ruleIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleIdsInput() {
    return this._ruleIds;
  }

  // time - computed: false, optional: true, required: false
  private _time?: number; 
  public get time() {
    return this.getNumberAttribute('time');
  }
  public set time(value: number) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class ProfileNetworkIntrusionRuleEventFilterList extends cdktf.ComplexList {
  public internalValue? : ProfileNetworkIntrusionRuleEventFilter[] | cdktf.IResolvable

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
  public get(index: number): ProfileNetworkIntrusionRuleEventFilterOutputReference {
    return new ProfileNetworkIntrusionRuleEventFilterOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion valtix_profile_network_intrusion}
*/
export class ProfileNetworkIntrusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_network_intrusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileNetworkIntrusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileNetworkIntrusion to import
  * @param importFromId The id of the existing ProfileNetworkIntrusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileNetworkIntrusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_network_intrusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_network_intrusion valtix_profile_network_intrusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileNetworkIntrusionConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileNetworkIntrusionConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_network_intrusion',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
        providerVersion: '25.9.2'
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
    this._autoUpdate = config.autoUpdate;
    this._autoUpdateCustom = config.autoUpdateCustom;
    this._customRulesetVersion = config.customRulesetVersion;
    this._delayByDays = config.delayByDays;
    this._delayByDaysCustom = config.delayByDaysCustom;
    this._description = config.description;
    this._disableCustomRuleset = config.disableCustomRuleset;
    this._disableTalosRuleset = config.disableTalosRuleset;
    this._id = config.id;
    this._name = config.name;
    this._pcap = config.pcap;
    this._policy = config.policy;
    this._policyAction = config.policyAction;
    this._talosRulesetVersion = config.talosRulesetVersion;
    this._categories.internalValue = config.categories;
    this._classes.internalValue = config.classes;
    this._eventSuppressor.internalValue = config.eventSuppressor;
    this._profileEventFilter.internalValue = config.profileEventFilter;
    this._ruleEventFilter.internalValue = config.ruleEventFilter;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
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

  // auto_update - computed: false, optional: true, required: false
  private _autoUpdate?: boolean | cdktf.IResolvable; 
  public get autoUpdate() {
    return this.getBooleanAttribute('auto_update');
  }
  public set autoUpdate(value: boolean | cdktf.IResolvable) {
    this._autoUpdate = value;
  }
  public resetAutoUpdate() {
    this._autoUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateInput() {
    return this._autoUpdate;
  }

  // auto_update_custom - computed: false, optional: true, required: false
  private _autoUpdateCustom?: boolean | cdktf.IResolvable; 
  public get autoUpdateCustom() {
    return this.getBooleanAttribute('auto_update_custom');
  }
  public set autoUpdateCustom(value: boolean | cdktf.IResolvable) {
    this._autoUpdateCustom = value;
  }
  public resetAutoUpdateCustom() {
    this._autoUpdateCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoUpdateCustomInput() {
    return this._autoUpdateCustom;
  }

  // custom_ruleset_version - computed: false, optional: true, required: false
  private _customRulesetVersion?: string; 
  public get customRulesetVersion() {
    return this.getStringAttribute('custom_ruleset_version');
  }
  public set customRulesetVersion(value: string) {
    this._customRulesetVersion = value;
  }
  public resetCustomRulesetVersion() {
    this._customRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customRulesetVersionInput() {
    return this._customRulesetVersion;
  }

  // delay_by_days - computed: false, optional: true, required: false
  private _delayByDays?: number; 
  public get delayByDays() {
    return this.getNumberAttribute('delay_by_days');
  }
  public set delayByDays(value: number) {
    this._delayByDays = value;
  }
  public resetDelayByDays() {
    this._delayByDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayByDaysInput() {
    return this._delayByDays;
  }

  // delay_by_days_custom - computed: false, optional: true, required: false
  private _delayByDaysCustom?: number; 
  public get delayByDaysCustom() {
    return this.getNumberAttribute('delay_by_days_custom');
  }
  public set delayByDaysCustom(value: number) {
    this._delayByDaysCustom = value;
  }
  public resetDelayByDaysCustom() {
    this._delayByDaysCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayByDaysCustomInput() {
    return this._delayByDaysCustom;
  }

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

  // disable_custom_ruleset - computed: false, optional: true, required: false
  private _disableCustomRuleset?: boolean | cdktf.IResolvable; 
  public get disableCustomRuleset() {
    return this.getBooleanAttribute('disable_custom_ruleset');
  }
  public set disableCustomRuleset(value: boolean | cdktf.IResolvable) {
    this._disableCustomRuleset = value;
  }
  public resetDisableCustomRuleset() {
    this._disableCustomRuleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableCustomRulesetInput() {
    return this._disableCustomRuleset;
  }

  // disable_talos_ruleset - computed: false, optional: true, required: false
  private _disableTalosRuleset?: boolean | cdktf.IResolvable; 
  public get disableTalosRuleset() {
    return this.getBooleanAttribute('disable_talos_ruleset');
  }
  public set disableTalosRuleset(value: boolean | cdktf.IResolvable) {
    this._disableTalosRuleset = value;
  }
  public resetDisableTalosRuleset() {
    this._disableTalosRuleset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTalosRulesetInput() {
    return this._disableTalosRuleset;
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

  // pcap - computed: false, optional: true, required: false
  private _pcap?: boolean | cdktf.IResolvable; 
  public get pcap() {
    return this.getBooleanAttribute('pcap');
  }
  public set pcap(value: boolean | cdktf.IResolvable) {
    this._pcap = value;
  }
  public resetPcap() {
    this._pcap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pcapInput() {
    return this._pcap;
  }

  // policy - computed: false, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // policy_action - computed: false, optional: true, required: false
  private _policyAction?: string; 
  public get policyAction() {
    return this.getStringAttribute('policy_action');
  }
  public set policyAction(value: string) {
    this._policyAction = value;
  }
  public resetPolicyAction() {
    this._policyAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyActionInput() {
    return this._policyAction;
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // talos_ruleset_version - computed: false, optional: true, required: false
  private _talosRulesetVersion?: string; 
  public get talosRulesetVersion() {
    return this.getStringAttribute('talos_ruleset_version');
  }
  public set talosRulesetVersion(value: string) {
    this._talosRulesetVersion = value;
  }
  public resetTalosRulesetVersion() {
    this._talosRulesetVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get talosRulesetVersionInput() {
    return this._talosRulesetVersion;
  }

  // categories - computed: false, optional: true, required: false
  private _categories = new ProfileNetworkIntrusionCategoriesList(this, "categories", false);
  public get categories() {
    return this._categories;
  }
  public putCategories(value: ProfileNetworkIntrusionCategories[] | cdktf.IResolvable) {
    this._categories.internalValue = value;
  }
  public resetCategories() {
    this._categories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories.internalValue;
  }

  // classes - computed: false, optional: true, required: false
  private _classes = new ProfileNetworkIntrusionClassesList(this, "classes", false);
  public get classes() {
    return this._classes;
  }
  public putClasses(value: ProfileNetworkIntrusionClasses[] | cdktf.IResolvable) {
    this._classes.internalValue = value;
  }
  public resetClasses() {
    this._classes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classesInput() {
    return this._classes.internalValue;
  }

  // event_suppressor - computed: false, optional: true, required: false
  private _eventSuppressor = new ProfileNetworkIntrusionEventSuppressorList(this, "event_suppressor", false);
  public get eventSuppressor() {
    return this._eventSuppressor;
  }
  public putEventSuppressor(value: ProfileNetworkIntrusionEventSuppressor[] | cdktf.IResolvable) {
    this._eventSuppressor.internalValue = value;
  }
  public resetEventSuppressor() {
    this._eventSuppressor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventSuppressorInput() {
    return this._eventSuppressor.internalValue;
  }

  // profile_event_filter - computed: false, optional: true, required: false
  private _profileEventFilter = new ProfileNetworkIntrusionProfileEventFilterOutputReference(this, "profile_event_filter");
  public get profileEventFilter() {
    return this._profileEventFilter;
  }
  public putProfileEventFilter(value: ProfileNetworkIntrusionProfileEventFilter) {
    this._profileEventFilter.internalValue = value;
  }
  public resetProfileEventFilter() {
    this._profileEventFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileEventFilterInput() {
    return this._profileEventFilter.internalValue;
  }

  // rule_event_filter - computed: false, optional: true, required: false
  private _ruleEventFilter = new ProfileNetworkIntrusionRuleEventFilterList(this, "rule_event_filter", false);
  public get ruleEventFilter() {
    return this._ruleEventFilter;
  }
  public putRuleEventFilter(value: ProfileNetworkIntrusionRuleEventFilter[] | cdktf.IResolvable) {
    this._ruleEventFilter.internalValue = value;
  }
  public resetRuleEventFilter() {
    this._ruleEventFilter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleEventFilterInput() {
    return this._ruleEventFilter.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      auto_update: cdktf.booleanToTerraform(this._autoUpdate),
      auto_update_custom: cdktf.booleanToTerraform(this._autoUpdateCustom),
      custom_ruleset_version: cdktf.stringToTerraform(this._customRulesetVersion),
      delay_by_days: cdktf.numberToTerraform(this._delayByDays),
      delay_by_days_custom: cdktf.numberToTerraform(this._delayByDaysCustom),
      description: cdktf.stringToTerraform(this._description),
      disable_custom_ruleset: cdktf.booleanToTerraform(this._disableCustomRuleset),
      disable_talos_ruleset: cdktf.booleanToTerraform(this._disableTalosRuleset),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      pcap: cdktf.booleanToTerraform(this._pcap),
      policy: cdktf.stringToTerraform(this._policy),
      policy_action: cdktf.stringToTerraform(this._policyAction),
      talos_ruleset_version: cdktf.stringToTerraform(this._talosRulesetVersion),
      categories: cdktf.listMapper(profileNetworkIntrusionCategoriesToTerraform, true)(this._categories.internalValue),
      classes: cdktf.listMapper(profileNetworkIntrusionClassesToTerraform, true)(this._classes.internalValue),
      event_suppressor: cdktf.listMapper(profileNetworkIntrusionEventSuppressorToTerraform, true)(this._eventSuppressor.internalValue),
      profile_event_filter: profileNetworkIntrusionProfileEventFilterToTerraform(this._profileEventFilter.internalValue),
      rule_event_filter: cdktf.listMapper(profileNetworkIntrusionRuleEventFilterToTerraform, true)(this._ruleEventFilter.internalValue),
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
      auto_update: {
        value: cdktf.booleanToHclTerraform(this._autoUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_update_custom: {
        value: cdktf.booleanToHclTerraform(this._autoUpdateCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_ruleset_version: {
        value: cdktf.stringToHclTerraform(this._customRulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay_by_days: {
        value: cdktf.numberToHclTerraform(this._delayByDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_by_days_custom: {
        value: cdktf.numberToHclTerraform(this._delayByDaysCustom),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_custom_ruleset: {
        value: cdktf.booleanToHclTerraform(this._disableCustomRuleset),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_talos_ruleset: {
        value: cdktf.booleanToHclTerraform(this._disableTalosRuleset),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcap: {
        value: cdktf.booleanToHclTerraform(this._pcap),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      policy_action: {
        value: cdktf.stringToHclTerraform(this._policyAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      talos_ruleset_version: {
        value: cdktf.stringToHclTerraform(this._talosRulesetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      categories: {
        value: cdktf.listMapperHcl(profileNetworkIntrusionCategoriesToHclTerraform, true)(this._categories.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileNetworkIntrusionCategoriesList",
      },
      classes: {
        value: cdktf.listMapperHcl(profileNetworkIntrusionClassesToHclTerraform, true)(this._classes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileNetworkIntrusionClassesList",
      },
      event_suppressor: {
        value: cdktf.listMapperHcl(profileNetworkIntrusionEventSuppressorToHclTerraform, true)(this._eventSuppressor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileNetworkIntrusionEventSuppressorList",
      },
      profile_event_filter: {
        value: profileNetworkIntrusionProfileEventFilterToHclTerraform(this._profileEventFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileNetworkIntrusionProfileEventFilterList",
      },
      rule_event_filter: {
        value: cdktf.listMapperHcl(profileNetworkIntrusionRuleEventFilterToHclTerraform, true)(this._ruleEventFilter.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ProfileNetworkIntrusionRuleEventFilterList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
