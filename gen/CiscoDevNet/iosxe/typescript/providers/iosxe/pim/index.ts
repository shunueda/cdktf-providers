// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure AutoRP global operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#autorp Pim#autorp}
  */
  readonly autorp?: boolean | cdktf.IResolvable;
  /**
  * Allow AutoRP packets across sparse mode interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#autorp_listener Pim#autorp_listener}
  */
  readonly autorpListener?: boolean | cdktf.IResolvable;
  /**
  * BSR RP candidate filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_accept_rp_candidate Pim#bsr_candidate_accept_rp_candidate}
  */
  readonly bsrCandidateAcceptRpCandidate?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_loopback Pim#bsr_candidate_loopback}
  */
  readonly bsrCandidateLoopback?: number;
  /**
  * Hash Mask length for RP selection
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_mask Pim#bsr_candidate_mask}
  */
  readonly bsrCandidateMask?: number;
  /**
  * Priority value for candidate bootstrap router
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_priority Pim#bsr_candidate_priority}
  */
  readonly bsrCandidatePriority?: number;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#delete_mode Pim#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#device Pim#device}
  */
  readonly device?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#register_source_interface_loopback Pim#register_source_interface_loopback}
  */
  readonly registerSourceInterfaceLoopback?: number;
  /**
  * IP address of Rendezvous-point for group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address Pim#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Group range treated in bidirectional shared-tree mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address_bidir Pim#rp_address_bidir}
  */
  readonly rpAddressBidir?: boolean | cdktf.IResolvable;
  /**
  * Overrides dynamically learnt RP mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address_override Pim#rp_address_override}
  */
  readonly rpAddressOverride?: boolean | cdktf.IResolvable;
  /**
  * PIM RP-address (Rendezvous Point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_addresses Pim#rp_addresses}
  */
  readonly rpAddresses?: PimRpAddresses[] | cdktf.IResolvable;
  /**
  * To be a PIM version 2 RP candidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_candidates Pim#rp_candidates}
  */
  readonly rpCandidates?: PimRpCandidates[] | cdktf.IResolvable;
  /**
  * Use 232/8 group range for SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#ssm_default Pim#ssm_default}
  */
  readonly ssmDefault?: boolean | cdktf.IResolvable;
  /**
  * ACL for group range to be used for SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#ssm_range Pim#ssm_range}
  */
  readonly ssmRange?: string;
  /**
  * Select VPN Routing/Forwarding instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#vrfs Pim#vrfs}
  */
  readonly vrfs?: PimVrfs[] | cdktf.IResolvable;
}
export interface PimRpAddresses {
  /**
  * IP Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#access_list Pim#access_list}
  */
  readonly accessList: string;
  /**
  * Group range treated in bidirectional shared-tree mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bidir Pim#bidir}
  */
  readonly bidir?: boolean | cdktf.IResolvable;
  /**
  * Overrides dynamically learnt RP mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#override Pim#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * IP address of Rendezvous-point for group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address Pim#rp_address}
  */
  readonly rpAddress?: string;
}

export function pimRpAddressesToTerraform(struct?: PimRpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    bidir: cdktf.booleanToTerraform(struct!.bidir),
    override: cdktf.booleanToTerraform(struct!.override),
    rp_address: cdktf.stringToTerraform(struct!.rpAddress),
  }
}


export function pimRpAddressesToHclTerraform(struct?: PimRpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bidir: {
      value: cdktf.booleanToHclTerraform(struct!.bidir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rp_address: {
      value: cdktf.stringToHclTerraform(struct!.rpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PimRpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._bidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidir = this._bidir;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._rpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimRpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._bidir = undefined;
      this._override = undefined;
      this._rpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._bidir = value.bidir;
      this._override = value.override;
      this._rpAddress = value.rpAddress;
    }
  }

  // access_list - computed: false, optional: false, required: true
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // bidir - computed: false, optional: true, required: false
  private _bidir?: boolean | cdktf.IResolvable; 
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }
  public set bidir(value: boolean | cdktf.IResolvable) {
    this._bidir = value;
  }
  public resetBidir() {
    this._bidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidirInput() {
    return this._bidir;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }
}

export class PimRpAddressesList extends cdktf.ComplexList {
  public internalValue? : PimRpAddresses[] | cdktf.IResolvable

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
  public get(index: number): PimRpAddressesOutputReference {
    return new PimRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PimRpCandidates {
  /**
  * Group range treated in bidirectional shared-tree mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bidir Pim#bidir}
  */
  readonly bidir?: boolean | cdktf.IResolvable;
  /**
  * IP Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#group_list Pim#group_list}
  */
  readonly groupList?: string;
  /**
  * Autonomic-Networking virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#interface Pim#interface}
  */
  readonly interface: string;
  /**
  * RP candidate advertisement interval
  *   - Range: `1`-`16383`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#interval Pim#interval}
  */
  readonly interval?: number;
  /**
  * RP candidate priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#priority Pim#priority}
  */
  readonly priority?: number;
}

export function pimRpCandidatesToTerraform(struct?: PimRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bidir: cdktf.booleanToTerraform(struct!.bidir),
    group_list: cdktf.stringToTerraform(struct!.groupList),
    interface: cdktf.stringToTerraform(struct!.interface),
    interval: cdktf.numberToTerraform(struct!.interval),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function pimRpCandidatesToHclTerraform(struct?: PimRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bidir: {
      value: cdktf.booleanToHclTerraform(struct!.bidir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_list: {
      value: cdktf.stringToHclTerraform(struct!.groupList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PimRpCandidates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidir = this._bidir;
    }
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimRpCandidates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bidir = undefined;
      this._groupList = undefined;
      this._interface = undefined;
      this._interval = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bidir = value.bidir;
      this._groupList = value.groupList;
      this._interface = value.interface;
      this._interval = value.interval;
      this._priority = value.priority;
    }
  }

  // bidir - computed: false, optional: true, required: false
  private _bidir?: boolean | cdktf.IResolvable; 
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }
  public set bidir(value: boolean | cdktf.IResolvable) {
    this._bidir = value;
  }
  public resetBidir() {
    this._bidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidirInput() {
    return this._bidir;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList?: string; 
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
  public set groupList(value: string) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class PimRpCandidatesList extends cdktf.ComplexList {
  public internalValue? : PimRpCandidates[] | cdktf.IResolvable

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
  public get(index: number): PimRpCandidatesOutputReference {
    return new PimRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PimVrfsRpAddresses {
  /**
  * IP Access-list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#access_list Pim#access_list}
  */
  readonly accessList: string;
  /**
  * Group range treated in bidirectional shared-tree mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bidir Pim#bidir}
  */
  readonly bidir?: boolean | cdktf.IResolvable;
  /**
  * Overrides dynamically learnt RP mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#override Pim#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * IP address of Rendezvous-point for group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address Pim#rp_address}
  */
  readonly rpAddress?: string;
}

export function pimVrfsRpAddressesToTerraform(struct?: PimVrfsRpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    bidir: cdktf.booleanToTerraform(struct!.bidir),
    override: cdktf.booleanToTerraform(struct!.override),
    rp_address: cdktf.stringToTerraform(struct!.rpAddress),
  }
}


export function pimVrfsRpAddressesToHclTerraform(struct?: PimVrfsRpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list: {
      value: cdktf.stringToHclTerraform(struct!.accessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bidir: {
      value: cdktf.booleanToHclTerraform(struct!.bidir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    override: {
      value: cdktf.booleanToHclTerraform(struct!.override),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rp_address: {
      value: cdktf.stringToHclTerraform(struct!.rpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimVrfsRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PimVrfsRpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._bidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidir = this._bidir;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._rpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimVrfsRpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._bidir = undefined;
      this._override = undefined;
      this._rpAddress = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._bidir = value.bidir;
      this._override = value.override;
      this._rpAddress = value.rpAddress;
    }
  }

  // access_list - computed: false, optional: false, required: true
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // bidir - computed: false, optional: true, required: false
  private _bidir?: boolean | cdktf.IResolvable; 
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }
  public set bidir(value: boolean | cdktf.IResolvable) {
    this._bidir = value;
  }
  public resetBidir() {
    this._bidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidirInput() {
    return this._bidir;
  }

  // override - computed: false, optional: true, required: false
  private _override?: boolean | cdktf.IResolvable; 
  public get override() {
    return this.getBooleanAttribute('override');
  }
  public set override(value: boolean | cdktf.IResolvable) {
    this._override = value;
  }
  public resetOverride() {
    this._override = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideInput() {
    return this._override;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }
}

export class PimVrfsRpAddressesList extends cdktf.ComplexList {
  public internalValue? : PimVrfsRpAddresses[] | cdktf.IResolvable

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
  public get(index: number): PimVrfsRpAddressesOutputReference {
    return new PimVrfsRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PimVrfsRpCandidates {
  /**
  * Group range treated in bidirectional shared-tree mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bidir Pim#bidir}
  */
  readonly bidir?: boolean | cdktf.IResolvable;
  /**
  * IP Access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#group_list Pim#group_list}
  */
  readonly groupList?: string;
  /**
  * Autonomic-Networking virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#interface Pim#interface}
  */
  readonly interface: string;
  /**
  * RP candidate advertisement interval
  *   - Range: `1`-`16383`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#interval Pim#interval}
  */
  readonly interval?: number;
  /**
  * RP candidate priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#priority Pim#priority}
  */
  readonly priority?: number;
}

export function pimVrfsRpCandidatesToTerraform(struct?: PimVrfsRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bidir: cdktf.booleanToTerraform(struct!.bidir),
    group_list: cdktf.stringToTerraform(struct!.groupList),
    interface: cdktf.stringToTerraform(struct!.interface),
    interval: cdktf.numberToTerraform(struct!.interval),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function pimVrfsRpCandidatesToHclTerraform(struct?: PimVrfsRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bidir: {
      value: cdktf.booleanToHclTerraform(struct!.bidir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    group_list: {
      value: cdktf.stringToHclTerraform(struct!.groupList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface: {
      value: cdktf.stringToHclTerraform(struct!.interface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimVrfsRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PimVrfsRpCandidates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.bidir = this._bidir;
    }
    if (this._groupList !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimVrfsRpCandidates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bidir = undefined;
      this._groupList = undefined;
      this._interface = undefined;
      this._interval = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bidir = value.bidir;
      this._groupList = value.groupList;
      this._interface = value.interface;
      this._interval = value.interval;
      this._priority = value.priority;
    }
  }

  // bidir - computed: false, optional: true, required: false
  private _bidir?: boolean | cdktf.IResolvable; 
  public get bidir() {
    return this.getBooleanAttribute('bidir');
  }
  public set bidir(value: boolean | cdktf.IResolvable) {
    this._bidir = value;
  }
  public resetBidir() {
    this._bidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bidirInput() {
    return this._bidir;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList?: string; 
  public get groupList() {
    return this.getStringAttribute('group_list');
  }
  public set groupList(value: string) {
    this._groupList = value;
  }
  public resetGroupList() {
    this._groupList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList;
  }

  // interface - computed: false, optional: false, required: true
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }
}

export class PimVrfsRpCandidatesList extends cdktf.ComplexList {
  public internalValue? : PimVrfsRpCandidates[] | cdktf.IResolvable

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
  public get(index: number): PimVrfsRpCandidatesOutputReference {
    return new PimVrfsRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface PimVrfs {
  /**
  * Configure AutoRP global operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#autorp Pim#autorp}
  */
  readonly autorp?: boolean | cdktf.IResolvable;
  /**
  * Allow AutoRP packets across sparse mode interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#autorp_listener Pim#autorp_listener}
  */
  readonly autorpListener?: boolean | cdktf.IResolvable;
  /**
  * BSR RP candidate filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_accept_rp_candidate Pim#bsr_candidate_accept_rp_candidate}
  */
  readonly bsrCandidateAcceptRpCandidate?: string;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_loopback Pim#bsr_candidate_loopback}
  */
  readonly bsrCandidateLoopback?: number;
  /**
  * Hash Mask length for RP selection
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_mask Pim#bsr_candidate_mask}
  */
  readonly bsrCandidateMask?: number;
  /**
  * Priority value for candidate bootstrap router
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#bsr_candidate_priority Pim#bsr_candidate_priority}
  */
  readonly bsrCandidatePriority?: number;
  /**
  * Cache outgoing interface RPF info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#cache_rpf_oif Pim#cache_rpf_oif}
  */
  readonly cacheRpfOif?: boolean | cdktf.IResolvable;
  /**
  * Loopback interface
  *   - Range: `0`-`2147483647`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#register_source_interface_loopback Pim#register_source_interface_loopback}
  */
  readonly registerSourceInterfaceLoopback?: number;
  /**
  * IP address of Rendezvous-point for group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address Pim#rp_address}
  */
  readonly rpAddress?: string;
  /**
  * Group range treated in bidirectional shared-tree mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address_bidir Pim#rp_address_bidir}
  */
  readonly rpAddressBidir?: boolean | cdktf.IResolvable;
  /**
  * Overrides dynamically learnt RP mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_address_override Pim#rp_address_override}
  */
  readonly rpAddressOverride?: boolean | cdktf.IResolvable;
  /**
  * PIM RP-address (Rendezvous Point)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_addresses Pim#rp_addresses}
  */
  readonly rpAddresses?: PimVrfsRpAddresses[] | cdktf.IResolvable;
  /**
  * To be a PIM version 2 RP candidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#rp_candidates Pim#rp_candidates}
  */
  readonly rpCandidates?: PimVrfsRpCandidates[] | cdktf.IResolvable;
  /**
  * Use 232/8 group range for SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#ssm_default Pim#ssm_default}
  */
  readonly ssmDefault?: boolean | cdktf.IResolvable;
  /**
  * ACL for group range to be used for SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#ssm_range Pim#ssm_range}
  */
  readonly ssmRange?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#vrf Pim#vrf}
  */
  readonly vrf: string;
}

export function pimVrfsToTerraform(struct?: PimVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autorp: cdktf.booleanToTerraform(struct!.autorp),
    autorp_listener: cdktf.booleanToTerraform(struct!.autorpListener),
    bsr_candidate_accept_rp_candidate: cdktf.stringToTerraform(struct!.bsrCandidateAcceptRpCandidate),
    bsr_candidate_loopback: cdktf.numberToTerraform(struct!.bsrCandidateLoopback),
    bsr_candidate_mask: cdktf.numberToTerraform(struct!.bsrCandidateMask),
    bsr_candidate_priority: cdktf.numberToTerraform(struct!.bsrCandidatePriority),
    cache_rpf_oif: cdktf.booleanToTerraform(struct!.cacheRpfOif),
    register_source_interface_loopback: cdktf.numberToTerraform(struct!.registerSourceInterfaceLoopback),
    rp_address: cdktf.stringToTerraform(struct!.rpAddress),
    rp_address_bidir: cdktf.booleanToTerraform(struct!.rpAddressBidir),
    rp_address_override: cdktf.booleanToTerraform(struct!.rpAddressOverride),
    rp_addresses: cdktf.listMapper(pimVrfsRpAddressesToTerraform, false)(struct!.rpAddresses),
    rp_candidates: cdktf.listMapper(pimVrfsRpCandidatesToTerraform, false)(struct!.rpCandidates),
    ssm_default: cdktf.booleanToTerraform(struct!.ssmDefault),
    ssm_range: cdktf.stringToTerraform(struct!.ssmRange),
    vrf: cdktf.stringToTerraform(struct!.vrf),
  }
}


export function pimVrfsToHclTerraform(struct?: PimVrfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autorp: {
      value: cdktf.booleanToHclTerraform(struct!.autorp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    autorp_listener: {
      value: cdktf.booleanToHclTerraform(struct!.autorpListener),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    bsr_candidate_accept_rp_candidate: {
      value: cdktf.stringToHclTerraform(struct!.bsrCandidateAcceptRpCandidate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bsr_candidate_loopback: {
      value: cdktf.numberToHclTerraform(struct!.bsrCandidateLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bsr_candidate_mask: {
      value: cdktf.numberToHclTerraform(struct!.bsrCandidateMask),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bsr_candidate_priority: {
      value: cdktf.numberToHclTerraform(struct!.bsrCandidatePriority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cache_rpf_oif: {
      value: cdktf.booleanToHclTerraform(struct!.cacheRpfOif),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    register_source_interface_loopback: {
      value: cdktf.numberToHclTerraform(struct!.registerSourceInterfaceLoopback),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rp_address: {
      value: cdktf.stringToHclTerraform(struct!.rpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rp_address_bidir: {
      value: cdktf.booleanToHclTerraform(struct!.rpAddressBidir),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rp_address_override: {
      value: cdktf.booleanToHclTerraform(struct!.rpAddressOverride),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    rp_addresses: {
      value: cdktf.listMapperHcl(pimVrfsRpAddressesToHclTerraform, false)(struct!.rpAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "PimVrfsRpAddressesList",
    },
    rp_candidates: {
      value: cdktf.listMapperHcl(pimVrfsRpCandidatesToHclTerraform, false)(struct!.rpCandidates),
      isBlock: true,
      type: "list",
      storageClassType: "PimVrfsRpCandidatesList",
    },
    ssm_default: {
      value: cdktf.booleanToHclTerraform(struct!.ssmDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ssm_range: {
      value: cdktf.stringToHclTerraform(struct!.ssmRange),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vrf: {
      value: cdktf.stringToHclTerraform(struct!.vrf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PimVrfsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): PimVrfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autorp !== undefined) {
      hasAnyValues = true;
      internalValueResult.autorp = this._autorp;
    }
    if (this._autorpListener !== undefined) {
      hasAnyValues = true;
      internalValueResult.autorpListener = this._autorpListener;
    }
    if (this._bsrCandidateAcceptRpCandidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrCandidateAcceptRpCandidate = this._bsrCandidateAcceptRpCandidate;
    }
    if (this._bsrCandidateLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrCandidateLoopback = this._bsrCandidateLoopback;
    }
    if (this._bsrCandidateMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrCandidateMask = this._bsrCandidateMask;
    }
    if (this._bsrCandidatePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.bsrCandidatePriority = this._bsrCandidatePriority;
    }
    if (this._cacheRpfOif !== undefined) {
      hasAnyValues = true;
      internalValueResult.cacheRpfOif = this._cacheRpfOif;
    }
    if (this._registerSourceInterfaceLoopback !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerSourceInterfaceLoopback = this._registerSourceInterfaceLoopback;
    }
    if (this._rpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddress = this._rpAddress;
    }
    if (this._rpAddressBidir !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddressBidir = this._rpAddressBidir;
    }
    if (this._rpAddressOverride !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddressOverride = this._rpAddressOverride;
    }
    if (this._rpAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpAddresses = this._rpAddresses?.internalValue;
    }
    if (this._rpCandidates?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpCandidates = this._rpCandidates?.internalValue;
    }
    if (this._ssmDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmDefault = this._ssmDefault;
    }
    if (this._ssmRange !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssmRange = this._ssmRange;
    }
    if (this._vrf !== undefined) {
      hasAnyValues = true;
      internalValueResult.vrf = this._vrf;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PimVrfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autorp = undefined;
      this._autorpListener = undefined;
      this._bsrCandidateAcceptRpCandidate = undefined;
      this._bsrCandidateLoopback = undefined;
      this._bsrCandidateMask = undefined;
      this._bsrCandidatePriority = undefined;
      this._cacheRpfOif = undefined;
      this._registerSourceInterfaceLoopback = undefined;
      this._rpAddress = undefined;
      this._rpAddressBidir = undefined;
      this._rpAddressOverride = undefined;
      this._rpAddresses.internalValue = undefined;
      this._rpCandidates.internalValue = undefined;
      this._ssmDefault = undefined;
      this._ssmRange = undefined;
      this._vrf = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autorp = value.autorp;
      this._autorpListener = value.autorpListener;
      this._bsrCandidateAcceptRpCandidate = value.bsrCandidateAcceptRpCandidate;
      this._bsrCandidateLoopback = value.bsrCandidateLoopback;
      this._bsrCandidateMask = value.bsrCandidateMask;
      this._bsrCandidatePriority = value.bsrCandidatePriority;
      this._cacheRpfOif = value.cacheRpfOif;
      this._registerSourceInterfaceLoopback = value.registerSourceInterfaceLoopback;
      this._rpAddress = value.rpAddress;
      this._rpAddressBidir = value.rpAddressBidir;
      this._rpAddressOverride = value.rpAddressOverride;
      this._rpAddresses.internalValue = value.rpAddresses;
      this._rpCandidates.internalValue = value.rpCandidates;
      this._ssmDefault = value.ssmDefault;
      this._ssmRange = value.ssmRange;
      this._vrf = value.vrf;
    }
  }

  // autorp - computed: false, optional: true, required: false
  private _autorp?: boolean | cdktf.IResolvable; 
  public get autorp() {
    return this.getBooleanAttribute('autorp');
  }
  public set autorp(value: boolean | cdktf.IResolvable) {
    this._autorp = value;
  }
  public resetAutorp() {
    this._autorp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorpInput() {
    return this._autorp;
  }

  // autorp_listener - computed: false, optional: true, required: false
  private _autorpListener?: boolean | cdktf.IResolvable; 
  public get autorpListener() {
    return this.getBooleanAttribute('autorp_listener');
  }
  public set autorpListener(value: boolean | cdktf.IResolvable) {
    this._autorpListener = value;
  }
  public resetAutorpListener() {
    this._autorpListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorpListenerInput() {
    return this._autorpListener;
  }

  // bsr_candidate_accept_rp_candidate - computed: false, optional: true, required: false
  private _bsrCandidateAcceptRpCandidate?: string; 
  public get bsrCandidateAcceptRpCandidate() {
    return this.getStringAttribute('bsr_candidate_accept_rp_candidate');
  }
  public set bsrCandidateAcceptRpCandidate(value: string) {
    this._bsrCandidateAcceptRpCandidate = value;
  }
  public resetBsrCandidateAcceptRpCandidate() {
    this._bsrCandidateAcceptRpCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateAcceptRpCandidateInput() {
    return this._bsrCandidateAcceptRpCandidate;
  }

  // bsr_candidate_loopback - computed: false, optional: true, required: false
  private _bsrCandidateLoopback?: number; 
  public get bsrCandidateLoopback() {
    return this.getNumberAttribute('bsr_candidate_loopback');
  }
  public set bsrCandidateLoopback(value: number) {
    this._bsrCandidateLoopback = value;
  }
  public resetBsrCandidateLoopback() {
    this._bsrCandidateLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateLoopbackInput() {
    return this._bsrCandidateLoopback;
  }

  // bsr_candidate_mask - computed: false, optional: true, required: false
  private _bsrCandidateMask?: number; 
  public get bsrCandidateMask() {
    return this.getNumberAttribute('bsr_candidate_mask');
  }
  public set bsrCandidateMask(value: number) {
    this._bsrCandidateMask = value;
  }
  public resetBsrCandidateMask() {
    this._bsrCandidateMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateMaskInput() {
    return this._bsrCandidateMask;
  }

  // bsr_candidate_priority - computed: false, optional: true, required: false
  private _bsrCandidatePriority?: number; 
  public get bsrCandidatePriority() {
    return this.getNumberAttribute('bsr_candidate_priority');
  }
  public set bsrCandidatePriority(value: number) {
    this._bsrCandidatePriority = value;
  }
  public resetBsrCandidatePriority() {
    this._bsrCandidatePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidatePriorityInput() {
    return this._bsrCandidatePriority;
  }

  // cache_rpf_oif - computed: false, optional: true, required: false
  private _cacheRpfOif?: boolean | cdktf.IResolvable; 
  public get cacheRpfOif() {
    return this.getBooleanAttribute('cache_rpf_oif');
  }
  public set cacheRpfOif(value: boolean | cdktf.IResolvable) {
    this._cacheRpfOif = value;
  }
  public resetCacheRpfOif() {
    this._cacheRpfOif = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheRpfOifInput() {
    return this._cacheRpfOif;
  }

  // register_source_interface_loopback - computed: false, optional: true, required: false
  private _registerSourceInterfaceLoopback?: number; 
  public get registerSourceInterfaceLoopback() {
    return this.getNumberAttribute('register_source_interface_loopback');
  }
  public set registerSourceInterfaceLoopback(value: number) {
    this._registerSourceInterfaceLoopback = value;
  }
  public resetRegisterSourceInterfaceLoopback() {
    this._registerSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceInterfaceLoopbackInput() {
    return this._registerSourceInterfaceLoopback;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_address_bidir - computed: false, optional: true, required: false
  private _rpAddressBidir?: boolean | cdktf.IResolvable; 
  public get rpAddressBidir() {
    return this.getBooleanAttribute('rp_address_bidir');
  }
  public set rpAddressBidir(value: boolean | cdktf.IResolvable) {
    this._rpAddressBidir = value;
  }
  public resetRpAddressBidir() {
    this._rpAddressBidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressBidirInput() {
    return this._rpAddressBidir;
  }

  // rp_address_override - computed: false, optional: true, required: false
  private _rpAddressOverride?: boolean | cdktf.IResolvable; 
  public get rpAddressOverride() {
    return this.getBooleanAttribute('rp_address_override');
  }
  public set rpAddressOverride(value: boolean | cdktf.IResolvable) {
    this._rpAddressOverride = value;
  }
  public resetRpAddressOverride() {
    this._rpAddressOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressOverrideInput() {
    return this._rpAddressOverride;
  }

  // rp_addresses - computed: false, optional: true, required: false
  private _rpAddresses = new PimVrfsRpAddressesList(this, "rp_addresses", false);
  public get rpAddresses() {
    return this._rpAddresses;
  }
  public putRpAddresses(value: PimVrfsRpAddresses[] | cdktf.IResolvable) {
    this._rpAddresses.internalValue = value;
  }
  public resetRpAddresses() {
    this._rpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressesInput() {
    return this._rpAddresses.internalValue;
  }

  // rp_candidates - computed: false, optional: true, required: false
  private _rpCandidates = new PimVrfsRpCandidatesList(this, "rp_candidates", false);
  public get rpCandidates() {
    return this._rpCandidates;
  }
  public putRpCandidates(value: PimVrfsRpCandidates[] | cdktf.IResolvable) {
    this._rpCandidates.internalValue = value;
  }
  public resetRpCandidates() {
    this._rpCandidates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidatesInput() {
    return this._rpCandidates.internalValue;
  }

  // ssm_default - computed: false, optional: true, required: false
  private _ssmDefault?: boolean | cdktf.IResolvable; 
  public get ssmDefault() {
    return this.getBooleanAttribute('ssm_default');
  }
  public set ssmDefault(value: boolean | cdktf.IResolvable) {
    this._ssmDefault = value;
  }
  public resetSsmDefault() {
    this._ssmDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmDefaultInput() {
    return this._ssmDefault;
  }

  // ssm_range - computed: false, optional: true, required: false
  private _ssmRange?: string; 
  public get ssmRange() {
    return this.getStringAttribute('ssm_range');
  }
  public set ssmRange(value: string) {
    this._ssmRange = value;
  }
  public resetSsmRange() {
    this._ssmRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmRangeInput() {
    return this._ssmRange;
  }

  // vrf - computed: false, optional: false, required: true
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }
}

export class PimVrfsList extends cdktf.ComplexList {
  public internalValue? : PimVrfs[] | cdktf.IResolvable

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
  public get(index: number): PimVrfsOutputReference {
    return new PimVrfsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim iosxe_pim}
*/
export class Pim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_pim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pim to import
  * @param importFromId The id of the existing Pim that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_pim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.13.0/docs/resources/pim iosxe_pim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PimConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PimConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_pim',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autorp = config.autorp;
    this._autorpListener = config.autorpListener;
    this._bsrCandidateAcceptRpCandidate = config.bsrCandidateAcceptRpCandidate;
    this._bsrCandidateLoopback = config.bsrCandidateLoopback;
    this._bsrCandidateMask = config.bsrCandidateMask;
    this._bsrCandidatePriority = config.bsrCandidatePriority;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._registerSourceInterfaceLoopback = config.registerSourceInterfaceLoopback;
    this._rpAddress = config.rpAddress;
    this._rpAddressBidir = config.rpAddressBidir;
    this._rpAddressOverride = config.rpAddressOverride;
    this._rpAddresses.internalValue = config.rpAddresses;
    this._rpCandidates.internalValue = config.rpCandidates;
    this._ssmDefault = config.ssmDefault;
    this._ssmRange = config.ssmRange;
    this._vrfs.internalValue = config.vrfs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autorp - computed: false, optional: true, required: false
  private _autorp?: boolean | cdktf.IResolvable; 
  public get autorp() {
    return this.getBooleanAttribute('autorp');
  }
  public set autorp(value: boolean | cdktf.IResolvable) {
    this._autorp = value;
  }
  public resetAutorp() {
    this._autorp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorpInput() {
    return this._autorp;
  }

  // autorp_listener - computed: false, optional: true, required: false
  private _autorpListener?: boolean | cdktf.IResolvable; 
  public get autorpListener() {
    return this.getBooleanAttribute('autorp_listener');
  }
  public set autorpListener(value: boolean | cdktf.IResolvable) {
    this._autorpListener = value;
  }
  public resetAutorpListener() {
    this._autorpListener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autorpListenerInput() {
    return this._autorpListener;
  }

  // bsr_candidate_accept_rp_candidate - computed: false, optional: true, required: false
  private _bsrCandidateAcceptRpCandidate?: string; 
  public get bsrCandidateAcceptRpCandidate() {
    return this.getStringAttribute('bsr_candidate_accept_rp_candidate');
  }
  public set bsrCandidateAcceptRpCandidate(value: string) {
    this._bsrCandidateAcceptRpCandidate = value;
  }
  public resetBsrCandidateAcceptRpCandidate() {
    this._bsrCandidateAcceptRpCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateAcceptRpCandidateInput() {
    return this._bsrCandidateAcceptRpCandidate;
  }

  // bsr_candidate_loopback - computed: false, optional: true, required: false
  private _bsrCandidateLoopback?: number; 
  public get bsrCandidateLoopback() {
    return this.getNumberAttribute('bsr_candidate_loopback');
  }
  public set bsrCandidateLoopback(value: number) {
    this._bsrCandidateLoopback = value;
  }
  public resetBsrCandidateLoopback() {
    this._bsrCandidateLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateLoopbackInput() {
    return this._bsrCandidateLoopback;
  }

  // bsr_candidate_mask - computed: false, optional: true, required: false
  private _bsrCandidateMask?: number; 
  public get bsrCandidateMask() {
    return this.getNumberAttribute('bsr_candidate_mask');
  }
  public set bsrCandidateMask(value: number) {
    this._bsrCandidateMask = value;
  }
  public resetBsrCandidateMask() {
    this._bsrCandidateMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateMaskInput() {
    return this._bsrCandidateMask;
  }

  // bsr_candidate_priority - computed: false, optional: true, required: false
  private _bsrCandidatePriority?: number; 
  public get bsrCandidatePriority() {
    return this.getNumberAttribute('bsr_candidate_priority');
  }
  public set bsrCandidatePriority(value: number) {
    this._bsrCandidatePriority = value;
  }
  public resetBsrCandidatePriority() {
    this._bsrCandidatePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidatePriorityInput() {
    return this._bsrCandidatePriority;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // register_source_interface_loopback - computed: false, optional: true, required: false
  private _registerSourceInterfaceLoopback?: number; 
  public get registerSourceInterfaceLoopback() {
    return this.getNumberAttribute('register_source_interface_loopback');
  }
  public set registerSourceInterfaceLoopback(value: number) {
    this._registerSourceInterfaceLoopback = value;
  }
  public resetRegisterSourceInterfaceLoopback() {
    this._registerSourceInterfaceLoopback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerSourceInterfaceLoopbackInput() {
    return this._registerSourceInterfaceLoopback;
  }

  // rp_address - computed: false, optional: true, required: false
  private _rpAddress?: string; 
  public get rpAddress() {
    return this.getStringAttribute('rp_address');
  }
  public set rpAddress(value: string) {
    this._rpAddress = value;
  }
  public resetRpAddress() {
    this._rpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressInput() {
    return this._rpAddress;
  }

  // rp_address_bidir - computed: false, optional: true, required: false
  private _rpAddressBidir?: boolean | cdktf.IResolvable; 
  public get rpAddressBidir() {
    return this.getBooleanAttribute('rp_address_bidir');
  }
  public set rpAddressBidir(value: boolean | cdktf.IResolvable) {
    this._rpAddressBidir = value;
  }
  public resetRpAddressBidir() {
    this._rpAddressBidir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressBidirInput() {
    return this._rpAddressBidir;
  }

  // rp_address_override - computed: false, optional: true, required: false
  private _rpAddressOverride?: boolean | cdktf.IResolvable; 
  public get rpAddressOverride() {
    return this.getBooleanAttribute('rp_address_override');
  }
  public set rpAddressOverride(value: boolean | cdktf.IResolvable) {
    this._rpAddressOverride = value;
  }
  public resetRpAddressOverride() {
    this._rpAddressOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressOverrideInput() {
    return this._rpAddressOverride;
  }

  // rp_addresses - computed: false, optional: true, required: false
  private _rpAddresses = new PimRpAddressesList(this, "rp_addresses", false);
  public get rpAddresses() {
    return this._rpAddresses;
  }
  public putRpAddresses(value: PimRpAddresses[] | cdktf.IResolvable) {
    this._rpAddresses.internalValue = value;
  }
  public resetRpAddresses() {
    this._rpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressesInput() {
    return this._rpAddresses.internalValue;
  }

  // rp_candidates - computed: false, optional: true, required: false
  private _rpCandidates = new PimRpCandidatesList(this, "rp_candidates", false);
  public get rpCandidates() {
    return this._rpCandidates;
  }
  public putRpCandidates(value: PimRpCandidates[] | cdktf.IResolvable) {
    this._rpCandidates.internalValue = value;
  }
  public resetRpCandidates() {
    this._rpCandidates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidatesInput() {
    return this._rpCandidates.internalValue;
  }

  // ssm_default - computed: false, optional: true, required: false
  private _ssmDefault?: boolean | cdktf.IResolvable; 
  public get ssmDefault() {
    return this.getBooleanAttribute('ssm_default');
  }
  public set ssmDefault(value: boolean | cdktf.IResolvable) {
    this._ssmDefault = value;
  }
  public resetSsmDefault() {
    this._ssmDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmDefaultInput() {
    return this._ssmDefault;
  }

  // ssm_range - computed: false, optional: true, required: false
  private _ssmRange?: string; 
  public get ssmRange() {
    return this.getStringAttribute('ssm_range');
  }
  public set ssmRange(value: string) {
    this._ssmRange = value;
  }
  public resetSsmRange() {
    this._ssmRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssmRangeInput() {
    return this._ssmRange;
  }

  // vrfs - computed: false, optional: true, required: false
  private _vrfs = new PimVrfsList(this, "vrfs", false);
  public get vrfs() {
    return this._vrfs;
  }
  public putVrfs(value: PimVrfs[] | cdktf.IResolvable) {
    this._vrfs.internalValue = value;
  }
  public resetVrfs() {
    this._vrfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfsInput() {
    return this._vrfs.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autorp: cdktf.booleanToTerraform(this._autorp),
      autorp_listener: cdktf.booleanToTerraform(this._autorpListener),
      bsr_candidate_accept_rp_candidate: cdktf.stringToTerraform(this._bsrCandidateAcceptRpCandidate),
      bsr_candidate_loopback: cdktf.numberToTerraform(this._bsrCandidateLoopback),
      bsr_candidate_mask: cdktf.numberToTerraform(this._bsrCandidateMask),
      bsr_candidate_priority: cdktf.numberToTerraform(this._bsrCandidatePriority),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      register_source_interface_loopback: cdktf.numberToTerraform(this._registerSourceInterfaceLoopback),
      rp_address: cdktf.stringToTerraform(this._rpAddress),
      rp_address_bidir: cdktf.booleanToTerraform(this._rpAddressBidir),
      rp_address_override: cdktf.booleanToTerraform(this._rpAddressOverride),
      rp_addresses: cdktf.listMapper(pimRpAddressesToTerraform, false)(this._rpAddresses.internalValue),
      rp_candidates: cdktf.listMapper(pimRpCandidatesToTerraform, false)(this._rpCandidates.internalValue),
      ssm_default: cdktf.booleanToTerraform(this._ssmDefault),
      ssm_range: cdktf.stringToTerraform(this._ssmRange),
      vrfs: cdktf.listMapper(pimVrfsToTerraform, false)(this._vrfs.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autorp: {
        value: cdktf.booleanToHclTerraform(this._autorp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      autorp_listener: {
        value: cdktf.booleanToHclTerraform(this._autorpListener),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bsr_candidate_accept_rp_candidate: {
        value: cdktf.stringToHclTerraform(this._bsrCandidateAcceptRpCandidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_candidate_loopback: {
        value: cdktf.numberToHclTerraform(this._bsrCandidateLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bsr_candidate_mask: {
        value: cdktf.numberToHclTerraform(this._bsrCandidateMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      bsr_candidate_priority: {
        value: cdktf.numberToHclTerraform(this._bsrCandidatePriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      register_source_interface_loopback: {
        value: cdktf.numberToHclTerraform(this._registerSourceInterfaceLoopback),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rp_address: {
        value: cdktf.stringToHclTerraform(this._rpAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_address_bidir: {
        value: cdktf.booleanToHclTerraform(this._rpAddressBidir),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rp_address_override: {
        value: cdktf.booleanToHclTerraform(this._rpAddressOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rp_addresses: {
        value: cdktf.listMapperHcl(pimRpAddressesToHclTerraform, false)(this._rpAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PimRpAddressesList",
      },
      rp_candidates: {
        value: cdktf.listMapperHcl(pimRpCandidatesToHclTerraform, false)(this._rpCandidates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PimRpCandidatesList",
      },
      ssm_default: {
        value: cdktf.booleanToHclTerraform(this._ssmDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ssm_range: {
        value: cdktf.stringToHclTerraform(this._ssmRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrfs: {
        value: cdktf.listMapperHcl(pimVrfsToHclTerraform, false)(this._vrfs.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PimVrfsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
