// https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyUplinkHostSwitchProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#description PolicyUplinkHostSwitchProfile#description}
  */
  readonly description?: string;
  /**
  * Display name for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#display_name PolicyUplinkHostSwitchProfile#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#id PolicyUplinkHostSwitchProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Maximum Transmission Unit used for uplinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#mtu PolicyUplinkHostSwitchProfile#mtu}
  */
  readonly mtu?: number;
  /**
  * NSX ID for this resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#nsx_id PolicyUplinkHostSwitchProfile#nsx_id}
  */
  readonly nsxId?: string;
  /**
  * The protocol used to encapsulate overlay traffic
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#overlay_encap PolicyUplinkHostSwitchProfile#overlay_encap}
  */
  readonly overlayEncap?: string;
  /**
  * VLAN used for tagging Overlay traffic of associated HostSwitch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#transport_vlan PolicyUplinkHostSwitchProfile#transport_vlan}
  */
  readonly transportVlan?: number;
  /**
  * lag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#lag PolicyUplinkHostSwitchProfile#lag}
  */
  readonly lag?: PolicyUplinkHostSwitchProfileLag[] | cdktf.IResolvable;
  /**
  * named_teaming block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#named_teaming PolicyUplinkHostSwitchProfile#named_teaming}
  */
  readonly namedTeaming?: PolicyUplinkHostSwitchProfileNamedTeaming[] | cdktf.IResolvable;
  /**
  * tag block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#tag PolicyUplinkHostSwitchProfile#tag}
  */
  readonly tag?: PolicyUplinkHostSwitchProfileTag[] | cdktf.IResolvable;
  /**
  * teaming block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#teaming PolicyUplinkHostSwitchProfile#teaming}
  */
  readonly teaming: PolicyUplinkHostSwitchProfileTeaming;
}
export interface PolicyUplinkHostSwitchProfileLagUplink {
}

export function policyUplinkHostSwitchProfileLagUplinkToTerraform(struct?: PolicyUplinkHostSwitchProfileLagUplink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function policyUplinkHostSwitchProfileLagUplinkToHclTerraform(struct?: PolicyUplinkHostSwitchProfileLagUplink): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PolicyUplinkHostSwitchProfileLagUplinkOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileLagUplink | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileLagUplink | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // uplink_name - computed: true, optional: false, required: false
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }

  // uplink_type - computed: true, optional: false, required: false
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
}

export class PolicyUplinkHostSwitchProfileLagUplinkList extends cdktf.ComplexList {

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
  public get(index: number): PolicyUplinkHostSwitchProfileLagUplinkOutputReference {
    return new PolicyUplinkHostSwitchProfileLagUplinkOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileLag {
  /**
  * LACP load balance Algorithm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#load_balance_algorithm PolicyUplinkHostSwitchProfile#load_balance_algorithm}
  */
  readonly loadBalanceAlgorithm: string;
  /**
  * LACP group mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#mode PolicyUplinkHostSwitchProfile#mode}
  */
  readonly mode: string;
  /**
  * Lag name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#name PolicyUplinkHostSwitchProfile#name}
  */
  readonly name: string;
  /**
  * Number of uplinks
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#number_of_uplinks PolicyUplinkHostSwitchProfile#number_of_uplinks}
  */
  readonly numberOfUplinks: number;
  /**
  * LACP timeout type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#timeout_type PolicyUplinkHostSwitchProfile#timeout_type}
  */
  readonly timeoutType?: string;
}

export function policyUplinkHostSwitchProfileLagToTerraform(struct?: PolicyUplinkHostSwitchProfileLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balance_algorithm: cdktf.stringToTerraform(struct!.loadBalanceAlgorithm),
    mode: cdktf.stringToTerraform(struct!.mode),
    name: cdktf.stringToTerraform(struct!.name),
    number_of_uplinks: cdktf.numberToTerraform(struct!.numberOfUplinks),
    timeout_type: cdktf.stringToTerraform(struct!.timeoutType),
  }
}


export function policyUplinkHostSwitchProfileLagToHclTerraform(struct?: PolicyUplinkHostSwitchProfileLag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balance_algorithm: {
      value: cdktf.stringToHclTerraform(struct!.loadBalanceAlgorithm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
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
    number_of_uplinks: {
      value: cdktf.numberToHclTerraform(struct!.numberOfUplinks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    timeout_type: {
      value: cdktf.stringToHclTerraform(struct!.timeoutType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileLagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileLag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalanceAlgorithm !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalanceAlgorithm = this._loadBalanceAlgorithm;
    }
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._numberOfUplinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfUplinks = this._numberOfUplinks;
    }
    if (this._timeoutType !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeoutType = this._timeoutType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileLag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalanceAlgorithm = undefined;
      this._mode = undefined;
      this._name = undefined;
      this._numberOfUplinks = undefined;
      this._timeoutType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalanceAlgorithm = value.loadBalanceAlgorithm;
      this._mode = value.mode;
      this._name = value.name;
      this._numberOfUplinks = value.numberOfUplinks;
      this._timeoutType = value.timeoutType;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // load_balance_algorithm - computed: false, optional: false, required: true
  private _loadBalanceAlgorithm?: string; 
  public get loadBalanceAlgorithm() {
    return this.getStringAttribute('load_balance_algorithm');
  }
  public set loadBalanceAlgorithm(value: string) {
    this._loadBalanceAlgorithm = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalanceAlgorithmInput() {
    return this._loadBalanceAlgorithm;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
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

  // number_of_uplinks - computed: false, optional: false, required: true
  private _numberOfUplinks?: number; 
  public get numberOfUplinks() {
    return this.getNumberAttribute('number_of_uplinks');
  }
  public set numberOfUplinks(value: number) {
    this._numberOfUplinks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfUplinksInput() {
    return this._numberOfUplinks;
  }

  // timeout_type - computed: false, optional: true, required: false
  private _timeoutType?: string; 
  public get timeoutType() {
    return this.getStringAttribute('timeout_type');
  }
  public set timeoutType(value: string) {
    this._timeoutType = value;
  }
  public resetTimeoutType() {
    this._timeoutType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutTypeInput() {
    return this._timeoutType;
  }

  // uplink - computed: true, optional: false, required: false
  private _uplink = new PolicyUplinkHostSwitchProfileLagUplinkList(this, "uplink", false);
  public get uplink() {
    return this._uplink;
  }
}

export class PolicyUplinkHostSwitchProfileLagList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileLag[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileLagOutputReference {
    return new PolicyUplinkHostSwitchProfileLagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileNamedTeamingActive {
  /**
  * Name of this uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_name PolicyUplinkHostSwitchProfile#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Type of the uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_type PolicyUplinkHostSwitchProfile#uplink_type}
  */
  readonly uplinkType: string;
}

export function policyUplinkHostSwitchProfileNamedTeamingActiveToTerraform(struct?: PolicyUplinkHostSwitchProfileNamedTeamingActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
    uplink_type: cdktf.stringToTerraform(struct!.uplinkType),
  }
}


export function policyUplinkHostSwitchProfileNamedTeamingActiveToHclTerraform(struct?: PolicyUplinkHostSwitchProfileNamedTeamingActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_type: {
      value: cdktf.stringToHclTerraform(struct!.uplinkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileNamedTeamingActiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileNamedTeamingActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    if (this._uplinkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkType = this._uplinkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileNamedTeamingActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplinkName = undefined;
      this._uplinkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplinkName = value.uplinkName;
      this._uplinkType = value.uplinkType;
    }
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }

  // uplink_type - computed: false, optional: false, required: true
  private _uplinkType?: string; 
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
  public set uplinkType(value: string) {
    this._uplinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTypeInput() {
    return this._uplinkType;
  }
}

export class PolicyUplinkHostSwitchProfileNamedTeamingActiveList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileNamedTeamingActive[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileNamedTeamingActiveOutputReference {
    return new PolicyUplinkHostSwitchProfileNamedTeamingActiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileNamedTeamingStandby {
  /**
  * Name of this uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_name PolicyUplinkHostSwitchProfile#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Type of the uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_type PolicyUplinkHostSwitchProfile#uplink_type}
  */
  readonly uplinkType: string;
}

export function policyUplinkHostSwitchProfileNamedTeamingStandbyToTerraform(struct?: PolicyUplinkHostSwitchProfileNamedTeamingStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
    uplink_type: cdktf.stringToTerraform(struct!.uplinkType),
  }
}


export function policyUplinkHostSwitchProfileNamedTeamingStandbyToHclTerraform(struct?: PolicyUplinkHostSwitchProfileNamedTeamingStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_type: {
      value: cdktf.stringToHclTerraform(struct!.uplinkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileNamedTeamingStandbyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileNamedTeamingStandby | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    if (this._uplinkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkType = this._uplinkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileNamedTeamingStandby | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplinkName = undefined;
      this._uplinkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplinkName = value.uplinkName;
      this._uplinkType = value.uplinkType;
    }
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }

  // uplink_type - computed: false, optional: false, required: true
  private _uplinkType?: string; 
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
  public set uplinkType(value: string) {
    this._uplinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTypeInput() {
    return this._uplinkType;
  }
}

export class PolicyUplinkHostSwitchProfileNamedTeamingStandbyList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileNamedTeamingStandby[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileNamedTeamingStandbyOutputReference {
    return new PolicyUplinkHostSwitchProfileNamedTeamingStandbyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileNamedTeaming {
  /**
  * The name of the uplink teaming policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#name PolicyUplinkHostSwitchProfile#name}
  */
  readonly name: string;
  /**
  * Teaming policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#policy PolicyUplinkHostSwitchProfile#policy}
  */
  readonly policy: string;
  /**
  * active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#active PolicyUplinkHostSwitchProfile#active}
  */
  readonly active: PolicyUplinkHostSwitchProfileNamedTeamingActive[] | cdktf.IResolvable;
  /**
  * standby block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#standby PolicyUplinkHostSwitchProfile#standby}
  */
  readonly standby?: PolicyUplinkHostSwitchProfileNamedTeamingStandby[] | cdktf.IResolvable;
}

export function policyUplinkHostSwitchProfileNamedTeamingToTerraform(struct?: PolicyUplinkHostSwitchProfileNamedTeaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    policy: cdktf.stringToTerraform(struct!.policy),
    active: cdktf.listMapper(policyUplinkHostSwitchProfileNamedTeamingActiveToTerraform, true)(struct!.active),
    standby: cdktf.listMapper(policyUplinkHostSwitchProfileNamedTeamingStandbyToTerraform, true)(struct!.standby),
  }
}


export function policyUplinkHostSwitchProfileNamedTeamingToHclTerraform(struct?: PolicyUplinkHostSwitchProfileNamedTeaming | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active: {
      value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileNamedTeamingActiveToHclTerraform, true)(struct!.active),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyUplinkHostSwitchProfileNamedTeamingActiveList",
    },
    standby: {
      value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileNamedTeamingStandbyToHclTerraform, true)(struct!.standby),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyUplinkHostSwitchProfileNamedTeamingStandbyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileNamedTeamingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileNamedTeaming | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._standby?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileNamedTeaming | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._policy = undefined;
      this._active.internalValue = undefined;
      this._standby.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._policy = value.policy;
      this._active.internalValue = value.active;
      this._standby.internalValue = value.standby;
    }
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

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // active - computed: false, optional: false, required: true
  private _active = new PolicyUplinkHostSwitchProfileNamedTeamingActiveList(this, "active", false);
  public get active() {
    return this._active;
  }
  public putActive(value: PolicyUplinkHostSwitchProfileNamedTeamingActive[] | cdktf.IResolvable) {
    this._active.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new PolicyUplinkHostSwitchProfileNamedTeamingStandbyList(this, "standby", false);
  public get standby() {
    return this._standby;
  }
  public putStandby(value: PolicyUplinkHostSwitchProfileNamedTeamingStandby[] | cdktf.IResolvable) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
  }
}

export class PolicyUplinkHostSwitchProfileNamedTeamingList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileNamedTeaming[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileNamedTeamingOutputReference {
    return new PolicyUplinkHostSwitchProfileNamedTeamingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileTag {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#scope PolicyUplinkHostSwitchProfile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#tag PolicyUplinkHostSwitchProfile#tag}
  */
  readonly tag?: string;
}

export function policyUplinkHostSwitchProfileTagToTerraform(struct?: PolicyUplinkHostSwitchProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function policyUplinkHostSwitchProfileTagToHclTerraform(struct?: PolicyUplinkHostSwitchProfileTag | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileTag | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileTag | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._scope = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._scope = value.scope;
      this._tag = value.tag;
    }
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class PolicyUplinkHostSwitchProfileTagList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileTag[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileTagOutputReference {
    return new PolicyUplinkHostSwitchProfileTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileTeamingActive {
  /**
  * Name of this uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_name PolicyUplinkHostSwitchProfile#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Type of the uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_type PolicyUplinkHostSwitchProfile#uplink_type}
  */
  readonly uplinkType: string;
}

export function policyUplinkHostSwitchProfileTeamingActiveToTerraform(struct?: PolicyUplinkHostSwitchProfileTeamingActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
    uplink_type: cdktf.stringToTerraform(struct!.uplinkType),
  }
}


export function policyUplinkHostSwitchProfileTeamingActiveToHclTerraform(struct?: PolicyUplinkHostSwitchProfileTeamingActive | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_type: {
      value: cdktf.stringToHclTerraform(struct!.uplinkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileTeamingActiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileTeamingActive | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    if (this._uplinkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkType = this._uplinkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileTeamingActive | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplinkName = undefined;
      this._uplinkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplinkName = value.uplinkName;
      this._uplinkType = value.uplinkType;
    }
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }

  // uplink_type - computed: false, optional: false, required: true
  private _uplinkType?: string; 
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
  public set uplinkType(value: string) {
    this._uplinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTypeInput() {
    return this._uplinkType;
  }
}

export class PolicyUplinkHostSwitchProfileTeamingActiveList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileTeamingActive[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileTeamingActiveOutputReference {
    return new PolicyUplinkHostSwitchProfileTeamingActiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileTeamingStandby {
  /**
  * Name of this uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_name PolicyUplinkHostSwitchProfile#uplink_name}
  */
  readonly uplinkName: string;
  /**
  * Type of the uplink
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#uplink_type PolicyUplinkHostSwitchProfile#uplink_type}
  */
  readonly uplinkType: string;
}

export function policyUplinkHostSwitchProfileTeamingStandbyToTerraform(struct?: PolicyUplinkHostSwitchProfileTeamingStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uplink_name: cdktf.stringToTerraform(struct!.uplinkName),
    uplink_type: cdktf.stringToTerraform(struct!.uplinkType),
  }
}


export function policyUplinkHostSwitchProfileTeamingStandbyToHclTerraform(struct?: PolicyUplinkHostSwitchProfileTeamingStandby | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uplink_name: {
      value: cdktf.stringToHclTerraform(struct!.uplinkName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink_type: {
      value: cdktf.stringToHclTerraform(struct!.uplinkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileTeamingStandbyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PolicyUplinkHostSwitchProfileTeamingStandby | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uplinkName !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkName = this._uplinkName;
    }
    if (this._uplinkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplinkType = this._uplinkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileTeamingStandby | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uplinkName = undefined;
      this._uplinkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uplinkName = value.uplinkName;
      this._uplinkType = value.uplinkType;
    }
  }

  // uplink_name - computed: false, optional: false, required: true
  private _uplinkName?: string; 
  public get uplinkName() {
    return this.getStringAttribute('uplink_name');
  }
  public set uplinkName(value: string) {
    this._uplinkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkNameInput() {
    return this._uplinkName;
  }

  // uplink_type - computed: false, optional: false, required: true
  private _uplinkType?: string; 
  public get uplinkType() {
    return this.getStringAttribute('uplink_type');
  }
  public set uplinkType(value: string) {
    this._uplinkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkTypeInput() {
    return this._uplinkType;
  }
}

export class PolicyUplinkHostSwitchProfileTeamingStandbyList extends cdktf.ComplexList {
  public internalValue? : PolicyUplinkHostSwitchProfileTeamingStandby[] | cdktf.IResolvable

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
  public get(index: number): PolicyUplinkHostSwitchProfileTeamingStandbyOutputReference {
    return new PolicyUplinkHostSwitchProfileTeamingStandbyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PolicyUplinkHostSwitchProfileTeaming {
  /**
  * Teaming policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#policy PolicyUplinkHostSwitchProfile#policy}
  */
  readonly policy: string;
  /**
  * active block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#active PolicyUplinkHostSwitchProfile#active}
  */
  readonly active: PolicyUplinkHostSwitchProfileTeamingActive[] | cdktf.IResolvable;
  /**
  * standby block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#standby PolicyUplinkHostSwitchProfile#standby}
  */
  readonly standby?: PolicyUplinkHostSwitchProfileTeamingStandby[] | cdktf.IResolvable;
}

export function policyUplinkHostSwitchProfileTeamingToTerraform(struct?: PolicyUplinkHostSwitchProfileTeamingOutputReference | PolicyUplinkHostSwitchProfileTeaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    policy: cdktf.stringToTerraform(struct!.policy),
    active: cdktf.listMapper(policyUplinkHostSwitchProfileTeamingActiveToTerraform, true)(struct!.active),
    standby: cdktf.listMapper(policyUplinkHostSwitchProfileTeamingStandbyToTerraform, true)(struct!.standby),
  }
}


export function policyUplinkHostSwitchProfileTeamingToHclTerraform(struct?: PolicyUplinkHostSwitchProfileTeamingOutputReference | PolicyUplinkHostSwitchProfileTeaming): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active: {
      value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileTeamingActiveToHclTerraform, true)(struct!.active),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyUplinkHostSwitchProfileTeamingActiveList",
    },
    standby: {
      value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileTeamingStandbyToHclTerraform, true)(struct!.standby),
      isBlock: true,
      type: "list",
      storageClassType: "PolicyUplinkHostSwitchProfileTeamingStandbyList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyUplinkHostSwitchProfileTeamingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyUplinkHostSwitchProfileTeaming | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._active?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.active = this._active?.internalValue;
    }
    if (this._standby?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standby = this._standby?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyUplinkHostSwitchProfileTeaming | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._policy = undefined;
      this._active.internalValue = undefined;
      this._standby.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._policy = value.policy;
      this._active.internalValue = value.active;
      this._standby.internalValue = value.standby;
    }
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // active - computed: false, optional: false, required: true
  private _active = new PolicyUplinkHostSwitchProfileTeamingActiveList(this, "active", false);
  public get active() {
    return this._active;
  }
  public putActive(value: PolicyUplinkHostSwitchProfileTeamingActive[] | cdktf.IResolvable) {
    this._active.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active.internalValue;
  }

  // standby - computed: false, optional: true, required: false
  private _standby = new PolicyUplinkHostSwitchProfileTeamingStandbyList(this, "standby", false);
  public get standby() {
    return this._standby;
  }
  public putStandby(value: PolicyUplinkHostSwitchProfileTeamingStandby[] | cdktf.IResolvable) {
    this._standby.internalValue = value;
  }
  public resetStandby() {
    this._standby.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standbyInput() {
    return this._standby.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile nsxt_policy_uplink_host_switch_profile}
*/
export class PolicyUplinkHostSwitchProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "nsxt_policy_uplink_host_switch_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PolicyUplinkHostSwitchProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PolicyUplinkHostSwitchProfile to import
  * @param importFromId The id of the existing PolicyUplinkHostSwitchProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PolicyUplinkHostSwitchProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "nsxt_policy_uplink_host_switch_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/nsxt/3.10.0/docs/resources/policy_uplink_host_switch_profile nsxt_policy_uplink_host_switch_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyUplinkHostSwitchProfileConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyUplinkHostSwitchProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'nsxt_policy_uplink_host_switch_profile',
      terraformGeneratorMetadata: {
        providerName: 'nsxt',
        providerVersion: '3.10.0'
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
    this._displayName = config.displayName;
    this._id = config.id;
    this._mtu = config.mtu;
    this._nsxId = config.nsxId;
    this._overlayEncap = config.overlayEncap;
    this._transportVlan = config.transportVlan;
    this._lag.internalValue = config.lag;
    this._namedTeaming.internalValue = config.namedTeaming;
    this._tag.internalValue = config.tag;
    this._teaming.internalValue = config.teaming;
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

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // nsx_id - computed: true, optional: true, required: false
  private _nsxId?: string; 
  public get nsxId() {
    return this.getStringAttribute('nsx_id');
  }
  public set nsxId(value: string) {
    this._nsxId = value;
  }
  public resetNsxId() {
    this._nsxId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsxIdInput() {
    return this._nsxId;
  }

  // overlay_encap - computed: false, optional: true, required: false
  private _overlayEncap?: string; 
  public get overlayEncap() {
    return this.getStringAttribute('overlay_encap');
  }
  public set overlayEncap(value: string) {
    this._overlayEncap = value;
  }
  public resetOverlayEncap() {
    this._overlayEncap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overlayEncapInput() {
    return this._overlayEncap;
  }

  // path - computed: true, optional: false, required: false
  public get path() {
    return this.getStringAttribute('path');
  }

  // realized_id - computed: true, optional: false, required: false
  public get realizedId() {
    return this.getStringAttribute('realized_id');
  }

  // revision - computed: true, optional: false, required: false
  public get revision() {
    return this.getNumberAttribute('revision');
  }

  // transport_vlan - computed: false, optional: true, required: false
  private _transportVlan?: number; 
  public get transportVlan() {
    return this.getNumberAttribute('transport_vlan');
  }
  public set transportVlan(value: number) {
    this._transportVlan = value;
  }
  public resetTransportVlan() {
    this._transportVlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transportVlanInput() {
    return this._transportVlan;
  }

  // lag - computed: false, optional: true, required: false
  private _lag = new PolicyUplinkHostSwitchProfileLagList(this, "lag", false);
  public get lag() {
    return this._lag;
  }
  public putLag(value: PolicyUplinkHostSwitchProfileLag[] | cdktf.IResolvable) {
    this._lag.internalValue = value;
  }
  public resetLag() {
    this._lag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lagInput() {
    return this._lag.internalValue;
  }

  // named_teaming - computed: false, optional: true, required: false
  private _namedTeaming = new PolicyUplinkHostSwitchProfileNamedTeamingList(this, "named_teaming", false);
  public get namedTeaming() {
    return this._namedTeaming;
  }
  public putNamedTeaming(value: PolicyUplinkHostSwitchProfileNamedTeaming[] | cdktf.IResolvable) {
    this._namedTeaming.internalValue = value;
  }
  public resetNamedTeaming() {
    this._namedTeaming.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namedTeamingInput() {
    return this._namedTeaming.internalValue;
  }

  // tag - computed: false, optional: true, required: false
  private _tag = new PolicyUplinkHostSwitchProfileTagList(this, "tag", true);
  public get tag() {
    return this._tag;
  }
  public putTag(value: PolicyUplinkHostSwitchProfileTag[] | cdktf.IResolvable) {
    this._tag.internalValue = value;
  }
  public resetTag() {
    this._tag.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag.internalValue;
  }

  // teaming - computed: false, optional: false, required: true
  private _teaming = new PolicyUplinkHostSwitchProfileTeamingOutputReference(this, "teaming");
  public get teaming() {
    return this._teaming;
  }
  public putTeaming(value: PolicyUplinkHostSwitchProfileTeaming) {
    this._teaming.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get teamingInput() {
    return this._teaming.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      nsx_id: cdktf.stringToTerraform(this._nsxId),
      overlay_encap: cdktf.stringToTerraform(this._overlayEncap),
      transport_vlan: cdktf.numberToTerraform(this._transportVlan),
      lag: cdktf.listMapper(policyUplinkHostSwitchProfileLagToTerraform, true)(this._lag.internalValue),
      named_teaming: cdktf.listMapper(policyUplinkHostSwitchProfileNamedTeamingToTerraform, true)(this._namedTeaming.internalValue),
      tag: cdktf.listMapper(policyUplinkHostSwitchProfileTagToTerraform, true)(this._tag.internalValue),
      teaming: policyUplinkHostSwitchProfileTeamingToTerraform(this._teaming.internalValue),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsx_id: {
        value: cdktf.stringToHclTerraform(this._nsxId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overlay_encap: {
        value: cdktf.stringToHclTerraform(this._overlayEncap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transport_vlan: {
        value: cdktf.numberToHclTerraform(this._transportVlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lag: {
        value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileLagToHclTerraform, true)(this._lag.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyUplinkHostSwitchProfileLagList",
      },
      named_teaming: {
        value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileNamedTeamingToHclTerraform, true)(this._namedTeaming.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyUplinkHostSwitchProfileNamedTeamingList",
      },
      tag: {
        value: cdktf.listMapperHcl(policyUplinkHostSwitchProfileTagToHclTerraform, true)(this._tag.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "PolicyUplinkHostSwitchProfileTagList",
      },
      teaming: {
        value: policyUplinkHostSwitchProfileTeamingToHclTerraform(this._teaming.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyUplinkHostSwitchProfileTeamingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
