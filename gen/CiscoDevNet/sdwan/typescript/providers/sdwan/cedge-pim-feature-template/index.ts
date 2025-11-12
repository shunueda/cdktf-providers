// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CedgePimFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable auto-RP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#auto_rp CedgePimFeatureTemplate#auto_rp}
  */
  readonly autoRp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#auto_rp_variable CedgePimFeatureTemplate#auto_rp_variable}
  */
  readonly autoRpVariable?: string;
  /**
  * Set Autonomic-Networking virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#bsr_candidate CedgePimFeatureTemplate#bsr_candidate}
  */
  readonly bsrCandidate?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#bsr_candidate_variable CedgePimFeatureTemplate#bsr_candidate_variable}
  */
  readonly bsrCandidateVariable?: string;
  /**
  * Turn SSM On / Off
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#default CedgePimFeatureTemplate#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#default_variable CedgePimFeatureTemplate#default_variable}
  */
  readonly defaultVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#description CedgePimFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#device_types CedgePimFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Hash Mask length for RP selection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#hash_mask_length CedgePimFeatureTemplate#hash_mask_length}
  */
  readonly hashMaskLength?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#hash_mask_length_variable CedgePimFeatureTemplate#hash_mask_length_variable}
  */
  readonly hashMaskLengthVariable?: string;
  /**
  * Set RP Discovery Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_name CedgePimFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_name_variable CedgePimFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set PIM interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interfaces CedgePimFeatureTemplate#interfaces}
  */
  readonly interfaces?: CedgePimFeatureTemplateInterfaces[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#name CedgePimFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Set RP candidate priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#priority CedgePimFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#priority_variable CedgePimFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
  /**
  * Set Access List for PIM SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#range CedgePimFeatureTemplate#range}
  */
  readonly range?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#range_variable CedgePimFeatureTemplate#range_variable}
  */
  readonly rangeVariable?: string;
  /**
  * Set Static RP Address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#rp_addresses CedgePimFeatureTemplate#rp_addresses}
  */
  readonly rpAddresses?: CedgePimFeatureTemplateRpAddresses[] | cdktf.IResolvable;
  /**
  * Enable or disable RP Announce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#rp_announce_fields CedgePimFeatureTemplate#rp_announce_fields}
  */
  readonly rpAnnounceFields?: CedgePimFeatureTemplateRpAnnounceFields[] | cdktf.IResolvable;
  /**
  * Set BSR RP candidate filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#rp_candidate_access_list CedgePimFeatureTemplate#rp_candidate_access_list}
  */
  readonly rpCandidateAccessList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#rp_candidate_access_list_variable CedgePimFeatureTemplate#rp_candidate_access_list_variable}
  */
  readonly rpCandidateAccessListVariable?: string;
  /**
  * Set RP Discovery Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#rp_candidates CedgePimFeatureTemplate#rp_candidates}
  */
  readonly rpCandidates?: CedgePimFeatureTemplateRpCandidates[] | cdktf.IResolvable;
  /**
  * Set RP Discovery Scope
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#scope CedgePimFeatureTemplate#scope}
  */
  readonly scope?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#scope_variable CedgePimFeatureTemplate#scope_variable}
  */
  readonly scopeVariable?: string;
  /**
  * Set when PIM router joins the SPT (kbps)
  *   - Choices: `0`, `infinity`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#spt_threshold CedgePimFeatureTemplate#spt_threshold}
  */
  readonly sptThreshold?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#spt_threshold_variable CedgePimFeatureTemplate#spt_threshold_variable}
  */
  readonly sptThresholdVariable?: string;
}
export interface CedgePimFeatureTemplateInterfaces {
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_name CedgePimFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_name_variable CedgePimFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set interval at which PIM multicast traffic can join or be removed from RPT or SPT
  *   - Range: `10`-`600`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#join_prune_interval CedgePimFeatureTemplate#join_prune_interval}
  */
  readonly joinPruneInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#join_prune_interval_variable CedgePimFeatureTemplate#join_prune_interval_variable}
  */
  readonly joinPruneIntervalVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#optional CedgePimFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set PIM query interval
  *   - Range: `1`-`18725`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#query_interval CedgePimFeatureTemplate#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#query_interval_variable CedgePimFeatureTemplate#query_interval_variable}
  */
  readonly queryIntervalVariable?: string;
}

export function cedgePimFeatureTemplateInterfacesToTerraform(struct?: CedgePimFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    join_prune_interval: cdktf.numberToTerraform(struct!.joinPruneInterval),
    join_prune_interval_variable: cdktf.stringToTerraform(struct!.joinPruneIntervalVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    query_interval_variable: cdktf.stringToTerraform(struct!.queryIntervalVariable),
  }
}


export function cedgePimFeatureTemplateInterfacesToHclTerraform(struct?: CedgePimFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    join_prune_interval: {
      value: cdktf.numberToHclTerraform(struct!.joinPruneInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    join_prune_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.joinPruneIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    query_interval: {
      value: cdktf.numberToHclTerraform(struct!.queryInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    query_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.queryIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgePimFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgePimFeatureTemplateInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._joinPruneInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinPruneInterval = this._joinPruneInterval;
    }
    if (this._joinPruneIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinPruneIntervalVariable = this._joinPruneIntervalVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._queryInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryInterval = this._queryInterval;
    }
    if (this._queryIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.queryIntervalVariable = this._queryIntervalVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgePimFeatureTemplateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._joinPruneInterval = undefined;
      this._joinPruneIntervalVariable = undefined;
      this._optional = undefined;
      this._queryInterval = undefined;
      this._queryIntervalVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._joinPruneInterval = value.joinPruneInterval;
      this._joinPruneIntervalVariable = value.joinPruneIntervalVariable;
      this._optional = value.optional;
      this._queryInterval = value.queryInterval;
      this._queryIntervalVariable = value.queryIntervalVariable;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // join_prune_interval - computed: false, optional: true, required: false
  private _joinPruneInterval?: number; 
  public get joinPruneInterval() {
    return this.getNumberAttribute('join_prune_interval');
  }
  public set joinPruneInterval(value: number) {
    this._joinPruneInterval = value;
  }
  public resetJoinPruneInterval() {
    this._joinPruneInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPruneIntervalInput() {
    return this._joinPruneInterval;
  }

  // join_prune_interval_variable - computed: false, optional: true, required: false
  private _joinPruneIntervalVariable?: string; 
  public get joinPruneIntervalVariable() {
    return this.getStringAttribute('join_prune_interval_variable');
  }
  public set joinPruneIntervalVariable(value: string) {
    this._joinPruneIntervalVariable = value;
  }
  public resetJoinPruneIntervalVariable() {
    this._joinPruneIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinPruneIntervalVariableInput() {
    return this._joinPruneIntervalVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // query_interval - computed: false, optional: true, required: false
  private _queryInterval?: number; 
  public get queryInterval() {
    return this.getNumberAttribute('query_interval');
  }
  public set queryInterval(value: number) {
    this._queryInterval = value;
  }
  public resetQueryInterval() {
    this._queryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalInput() {
    return this._queryInterval;
  }

  // query_interval_variable - computed: false, optional: true, required: false
  private _queryIntervalVariable?: string; 
  public get queryIntervalVariable() {
    return this.getStringAttribute('query_interval_variable');
  }
  public set queryIntervalVariable(value: string) {
    this._queryIntervalVariable = value;
  }
  public resetQueryIntervalVariable() {
    this._queryIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIntervalVariableInput() {
    return this._queryIntervalVariable;
  }
}

export class CedgePimFeatureTemplateInterfacesList extends cdktf.ComplexList {
  public internalValue? : CedgePimFeatureTemplateInterfaces[] | cdktf.IResolvable

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
  public get(index: number): CedgePimFeatureTemplateInterfacesOutputReference {
    return new CedgePimFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgePimFeatureTemplateRpAddresses {
  /**
  * Set Static RP Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#access_list CedgePimFeatureTemplate#access_list}
  */
  readonly accessList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#access_list_variable CedgePimFeatureTemplate#access_list_variable}
  */
  readonly accessListVariable?: string;
  /**
  * Set Static RP IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#ip_address CedgePimFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#ip_address_variable CedgePimFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#optional CedgePimFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set override flag
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#override CedgePimFeatureTemplate#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#override_variable CedgePimFeatureTemplate#override_variable}
  */
  readonly overrideVariable?: string;
}

export function cedgePimFeatureTemplateRpAddressesToTerraform(struct?: CedgePimFeatureTemplateRpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    access_list_variable: cdktf.stringToTerraform(struct!.accessListVariable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    override: cdktf.booleanToTerraform(struct!.override),
    override_variable: cdktf.stringToTerraform(struct!.overrideVariable),
  }
}


export function cedgePimFeatureTemplateRpAddressesToHclTerraform(struct?: CedgePimFeatureTemplateRpAddresses | cdktf.IResolvable): any {
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
    access_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.accessListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address: {
      value: cdktf.stringToHclTerraform(struct!.ipAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
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
    override_variable: {
      value: cdktf.stringToHclTerraform(struct!.overrideVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgePimFeatureTemplateRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgePimFeatureTemplateRpAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._accessListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListVariable = this._accessListVariable;
    }
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressVariable = this._ipAddressVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._override !== undefined) {
      hasAnyValues = true;
      internalValueResult.override = this._override;
    }
    if (this._overrideVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideVariable = this._overrideVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgePimFeatureTemplateRpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._accessListVariable = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._optional = undefined;
      this._override = undefined;
      this._overrideVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._accessListVariable = value.accessListVariable;
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._optional = value.optional;
      this._override = value.override;
      this._overrideVariable = value.overrideVariable;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // access_list_variable - computed: false, optional: true, required: false
  private _accessListVariable?: string; 
  public get accessListVariable() {
    return this.getStringAttribute('access_list_variable');
  }
  public set accessListVariable(value: string) {
    this._accessListVariable = value;
  }
  public resetAccessListVariable() {
    this._accessListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListVariableInput() {
    return this._accessListVariable;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_variable - computed: false, optional: true, required: false
  private _ipAddressVariable?: string; 
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }
  public set ipAddressVariable(value: string) {
    this._ipAddressVariable = value;
  }
  public resetIpAddressVariable() {
    this._ipAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVariableInput() {
    return this._ipAddressVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // override_variable - computed: false, optional: true, required: false
  private _overrideVariable?: string; 
  public get overrideVariable() {
    return this.getStringAttribute('override_variable');
  }
  public set overrideVariable(value: string) {
    this._overrideVariable = value;
  }
  public resetOverrideVariable() {
    this._overrideVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideVariableInput() {
    return this._overrideVariable;
  }
}

export class CedgePimFeatureTemplateRpAddressesList extends cdktf.ComplexList {
  public internalValue? : CedgePimFeatureTemplateRpAddresses[] | cdktf.IResolvable

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
  public get(index: number): CedgePimFeatureTemplateRpAddressesOutputReference {
    return new CedgePimFeatureTemplateRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgePimFeatureTemplateRpAnnounceFields {
  /**
  * Set RP Announce Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_name CedgePimFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_name_variable CedgePimFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#optional CedgePimFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set RP Announce Scope
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#scope CedgePimFeatureTemplate#scope}
  */
  readonly scope?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#scope_variable CedgePimFeatureTemplate#scope_variable}
  */
  readonly scopeVariable?: string;
}

export function cedgePimFeatureTemplateRpAnnounceFieldsToTerraform(struct?: CedgePimFeatureTemplateRpAnnounceFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    scope: cdktf.numberToTerraform(struct!.scope),
    scope_variable: cdktf.stringToTerraform(struct!.scopeVariable),
  }
}


export function cedgePimFeatureTemplateRpAnnounceFieldsToHclTerraform(struct?: CedgePimFeatureTemplateRpAnnounceFields | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_name: {
      value: cdktf.stringToHclTerraform(struct!.interfaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interface_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    scope: {
      value: cdktf.numberToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    scope_variable: {
      value: cdktf.stringToHclTerraform(struct!.scopeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgePimFeatureTemplateRpAnnounceFieldsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgePimFeatureTemplateRpAnnounceFields | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._scopeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.scopeVariable = this._scopeVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgePimFeatureTemplateRpAnnounceFields | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._optional = undefined;
      this._scope = undefined;
      this._scopeVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._optional = value.optional;
      this._scope = value.scope;
      this._scopeVariable = value.scopeVariable;
    }
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: number; 
  public get scope() {
    return this.getNumberAttribute('scope');
  }
  public set scope(value: number) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // scope_variable - computed: false, optional: true, required: false
  private _scopeVariable?: string; 
  public get scopeVariable() {
    return this.getStringAttribute('scope_variable');
  }
  public set scopeVariable(value: string) {
    this._scopeVariable = value;
  }
  public resetScopeVariable() {
    this._scopeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeVariableInput() {
    return this._scopeVariable;
  }
}

export class CedgePimFeatureTemplateRpAnnounceFieldsList extends cdktf.ComplexList {
  public internalValue? : CedgePimFeatureTemplateRpAnnounceFields[] | cdktf.IResolvable

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
  public get(index: number): CedgePimFeatureTemplateRpAnnounceFieldsOutputReference {
    return new CedgePimFeatureTemplateRpAnnounceFieldsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CedgePimFeatureTemplateRpCandidates {
  /**
  * Set IP Access List for PIM RP Candidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#access_list CedgePimFeatureTemplate#access_list}
  */
  readonly accessList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#access_list_variable CedgePimFeatureTemplate#access_list_variable}
  */
  readonly accessListVariable?: string;
  /**
  * Set Autonomic-Networking virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface CedgePimFeatureTemplate#interface}
  */
  readonly interface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interface_variable CedgePimFeatureTemplate#interface_variable}
  */
  readonly interfaceVariable?: string;
  /**
  * Set RP candidate advertisement interval
  *   - Range: `1`-`16383`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interval CedgePimFeatureTemplate#interval}
  */
  readonly interval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#interval_variable CedgePimFeatureTemplate#interval_variable}
  */
  readonly intervalVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#optional CedgePimFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set RP candidate priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#priority CedgePimFeatureTemplate#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#priority_variable CedgePimFeatureTemplate#priority_variable}
  */
  readonly priorityVariable?: string;
}

export function cedgePimFeatureTemplateRpCandidatesToTerraform(struct?: CedgePimFeatureTemplateRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    access_list_variable: cdktf.stringToTerraform(struct!.accessListVariable),
    interface: cdktf.stringToTerraform(struct!.interface),
    interface_variable: cdktf.stringToTerraform(struct!.interfaceVariable),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_variable: cdktf.stringToTerraform(struct!.intervalVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
  }
}


export function cedgePimFeatureTemplateRpCandidatesToHclTerraform(struct?: CedgePimFeatureTemplateRpCandidates | cdktf.IResolvable): any {
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
    access_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.accessListVariable),
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
    interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.interfaceVariable),
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
    interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.intervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority_variable: {
      value: cdktf.stringToHclTerraform(struct!.priorityVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CedgePimFeatureTemplateRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CedgePimFeatureTemplateRpCandidates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessList = this._accessList;
    }
    if (this._accessListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListVariable = this._accessListVariable;
    }
    if (this._interface !== undefined) {
      hasAnyValues = true;
      internalValueResult.interface = this._interface;
    }
    if (this._interfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceVariable = this._interfaceVariable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalVariable = this._intervalVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._priorityVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityVariable = this._priorityVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CedgePimFeatureTemplateRpCandidates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._accessListVariable = undefined;
      this._interface = undefined;
      this._interfaceVariable = undefined;
      this._interval = undefined;
      this._intervalVariable = undefined;
      this._optional = undefined;
      this._priority = undefined;
      this._priorityVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessList = value.accessList;
      this._accessListVariable = value.accessListVariable;
      this._interface = value.interface;
      this._interfaceVariable = value.interfaceVariable;
      this._interval = value.interval;
      this._intervalVariable = value.intervalVariable;
      this._optional = value.optional;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
    }
  }

  // access_list - computed: false, optional: true, required: false
  private _accessList?: string; 
  public get accessList() {
    return this.getStringAttribute('access_list');
  }
  public set accessList(value: string) {
    this._accessList = value;
  }
  public resetAccessList() {
    this._accessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListInput() {
    return this._accessList;
  }

  // access_list_variable - computed: false, optional: true, required: false
  private _accessListVariable?: string; 
  public get accessListVariable() {
    return this.getStringAttribute('access_list_variable');
  }
  public set accessListVariable(value: string) {
    this._accessListVariable = value;
  }
  public resetAccessListVariable() {
    this._accessListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListVariableInput() {
    return this._accessListVariable;
  }

  // interface - computed: false, optional: true, required: false
  private _interface?: string; 
  public get interface() {
    return this.getStringAttribute('interface');
  }
  public set interface(value: string) {
    this._interface = value;
  }
  public resetInterface() {
    this._interface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceInput() {
    return this._interface;
  }

  // interface_variable - computed: false, optional: true, required: false
  private _interfaceVariable?: string; 
  public get interfaceVariable() {
    return this.getStringAttribute('interface_variable');
  }
  public set interfaceVariable(value: string) {
    this._interfaceVariable = value;
  }
  public resetInterfaceVariable() {
    this._interfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceVariableInput() {
    return this._interfaceVariable;
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

  // interval_variable - computed: false, optional: true, required: false
  private _intervalVariable?: string; 
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }
  public set intervalVariable(value: string) {
    this._intervalVariable = value;
  }
  public resetIntervalVariable() {
    this._intervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalVariableInput() {
    return this._intervalVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
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

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
  }
}

export class CedgePimFeatureTemplateRpCandidatesList extends cdktf.ComplexList {
  public internalValue? : CedgePimFeatureTemplateRpCandidates[] | cdktf.IResolvable

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
  public get(index: number): CedgePimFeatureTemplateRpCandidatesOutputReference {
    return new CedgePimFeatureTemplateRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template sdwan_cedge_pim_feature_template}
*/
export class CedgePimFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cedge_pim_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CedgePimFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CedgePimFeatureTemplate to import
  * @param importFromId The id of the existing CedgePimFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CedgePimFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cedge_pim_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cedge_pim_feature_template sdwan_cedge_pim_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CedgePimFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CedgePimFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cedge_pim_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1',
        providerVersionConstraint: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRp = config.autoRp;
    this._autoRpVariable = config.autoRpVariable;
    this._bsrCandidate = config.bsrCandidate;
    this._bsrCandidateVariable = config.bsrCandidateVariable;
    this._default = config.default;
    this._defaultVariable = config.defaultVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._hashMaskLength = config.hashMaskLength;
    this._hashMaskLengthVariable = config.hashMaskLengthVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._interfaces.internalValue = config.interfaces;
    this._name = config.name;
    this._priority = config.priority;
    this._priorityVariable = config.priorityVariable;
    this._range = config.range;
    this._rangeVariable = config.rangeVariable;
    this._rpAddresses.internalValue = config.rpAddresses;
    this._rpAnnounceFields.internalValue = config.rpAnnounceFields;
    this._rpCandidateAccessList = config.rpCandidateAccessList;
    this._rpCandidateAccessListVariable = config.rpCandidateAccessListVariable;
    this._rpCandidates.internalValue = config.rpCandidates;
    this._scope = config.scope;
    this._scopeVariable = config.scopeVariable;
    this._sptThreshold = config.sptThreshold;
    this._sptThresholdVariable = config.sptThresholdVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rp - computed: false, optional: true, required: false
  private _autoRp?: boolean | cdktf.IResolvable; 
  public get autoRp() {
    return this.getBooleanAttribute('auto_rp');
  }
  public set autoRp(value: boolean | cdktf.IResolvable) {
    this._autoRp = value;
  }
  public resetAutoRp() {
    this._autoRp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRpInput() {
    return this._autoRp;
  }

  // auto_rp_variable - computed: false, optional: true, required: false
  private _autoRpVariable?: string; 
  public get autoRpVariable() {
    return this.getStringAttribute('auto_rp_variable');
  }
  public set autoRpVariable(value: string) {
    this._autoRpVariable = value;
  }
  public resetAutoRpVariable() {
    this._autoRpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRpVariableInput() {
    return this._autoRpVariable;
  }

  // bsr_candidate - computed: false, optional: true, required: false
  private _bsrCandidate?: string; 
  public get bsrCandidate() {
    return this.getStringAttribute('bsr_candidate');
  }
  public set bsrCandidate(value: string) {
    this._bsrCandidate = value;
  }
  public resetBsrCandidate() {
    this._bsrCandidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateInput() {
    return this._bsrCandidate;
  }

  // bsr_candidate_variable - computed: false, optional: true, required: false
  private _bsrCandidateVariable?: string; 
  public get bsrCandidateVariable() {
    return this.getStringAttribute('bsr_candidate_variable');
  }
  public set bsrCandidateVariable(value: string) {
    this._bsrCandidateVariable = value;
  }
  public resetBsrCandidateVariable() {
    this._bsrCandidateVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrCandidateVariableInput() {
    return this._bsrCandidateVariable;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // default_variable - computed: false, optional: true, required: false
  private _defaultVariable?: string; 
  public get defaultVariable() {
    return this.getStringAttribute('default_variable');
  }
  public set defaultVariable(value: string) {
    this._defaultVariable = value;
  }
  public resetDefaultVariable() {
    this._defaultVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVariableInput() {
    return this._defaultVariable;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // hash_mask_length - computed: false, optional: true, required: false
  private _hashMaskLength?: string; 
  public get hashMaskLength() {
    return this.getStringAttribute('hash_mask_length');
  }
  public set hashMaskLength(value: string) {
    this._hashMaskLength = value;
  }
  public resetHashMaskLength() {
    this._hashMaskLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashMaskLengthInput() {
    return this._hashMaskLength;
  }

  // hash_mask_length_variable - computed: false, optional: true, required: false
  private _hashMaskLengthVariable?: string; 
  public get hashMaskLengthVariable() {
    return this.getStringAttribute('hash_mask_length_variable');
  }
  public set hashMaskLengthVariable(value: string) {
    this._hashMaskLengthVariable = value;
  }
  public resetHashMaskLengthVariable() {
    this._hashMaskLengthVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hashMaskLengthVariableInput() {
    return this._hashMaskLengthVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new CedgePimFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: CedgePimFeatureTemplateInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
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

  // priority_variable - computed: false, optional: true, required: false
  private _priorityVariable?: string; 
  public get priorityVariable() {
    return this.getStringAttribute('priority_variable');
  }
  public set priorityVariable(value: string) {
    this._priorityVariable = value;
  }
  public resetPriorityVariable() {
    this._priorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityVariableInput() {
    return this._priorityVariable;
  }

  // range - computed: false, optional: true, required: false
  private _range?: string; 
  public get range() {
    return this.getStringAttribute('range');
  }
  public set range(value: string) {
    this._range = value;
  }
  public resetRange() {
    this._range = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeInput() {
    return this._range;
  }

  // range_variable - computed: false, optional: true, required: false
  private _rangeVariable?: string; 
  public get rangeVariable() {
    return this.getStringAttribute('range_variable');
  }
  public set rangeVariable(value: string) {
    this._rangeVariable = value;
  }
  public resetRangeVariable() {
    this._rangeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rangeVariableInput() {
    return this._rangeVariable;
  }

  // rp_addresses - computed: false, optional: true, required: false
  private _rpAddresses = new CedgePimFeatureTemplateRpAddressesList(this, "rp_addresses", false);
  public get rpAddresses() {
    return this._rpAddresses;
  }
  public putRpAddresses(value: CedgePimFeatureTemplateRpAddresses[] | cdktf.IResolvable) {
    this._rpAddresses.internalValue = value;
  }
  public resetRpAddresses() {
    this._rpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAddressesInput() {
    return this._rpAddresses.internalValue;
  }

  // rp_announce_fields - computed: false, optional: true, required: false
  private _rpAnnounceFields = new CedgePimFeatureTemplateRpAnnounceFieldsList(this, "rp_announce_fields", false);
  public get rpAnnounceFields() {
    return this._rpAnnounceFields;
  }
  public putRpAnnounceFields(value: CedgePimFeatureTemplateRpAnnounceFields[] | cdktf.IResolvable) {
    this._rpAnnounceFields.internalValue = value;
  }
  public resetRpAnnounceFields() {
    this._rpAnnounceFields.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpAnnounceFieldsInput() {
    return this._rpAnnounceFields.internalValue;
  }

  // rp_candidate_access_list - computed: false, optional: true, required: false
  private _rpCandidateAccessList?: string; 
  public get rpCandidateAccessList() {
    return this.getStringAttribute('rp_candidate_access_list');
  }
  public set rpCandidateAccessList(value: string) {
    this._rpCandidateAccessList = value;
  }
  public resetRpCandidateAccessList() {
    this._rpCandidateAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidateAccessListInput() {
    return this._rpCandidateAccessList;
  }

  // rp_candidate_access_list_variable - computed: false, optional: true, required: false
  private _rpCandidateAccessListVariable?: string; 
  public get rpCandidateAccessListVariable() {
    return this.getStringAttribute('rp_candidate_access_list_variable');
  }
  public set rpCandidateAccessListVariable(value: string) {
    this._rpCandidateAccessListVariable = value;
  }
  public resetRpCandidateAccessListVariable() {
    this._rpCandidateAccessListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidateAccessListVariableInput() {
    return this._rpCandidateAccessListVariable;
  }

  // rp_candidates - computed: false, optional: true, required: false
  private _rpCandidates = new CedgePimFeatureTemplateRpCandidatesList(this, "rp_candidates", false);
  public get rpCandidates() {
    return this._rpCandidates;
  }
  public putRpCandidates(value: CedgePimFeatureTemplateRpCandidates[] | cdktf.IResolvable) {
    this._rpCandidates.internalValue = value;
  }
  public resetRpCandidates() {
    this._rpCandidates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpCandidatesInput() {
    return this._rpCandidates.internalValue;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: number; 
  public get scope() {
    return this.getNumberAttribute('scope');
  }
  public set scope(value: number) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // scope_variable - computed: false, optional: true, required: false
  private _scopeVariable?: string; 
  public get scopeVariable() {
    return this.getStringAttribute('scope_variable');
  }
  public set scopeVariable(value: string) {
    this._scopeVariable = value;
  }
  public resetScopeVariable() {
    this._scopeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeVariableInput() {
    return this._scopeVariable;
  }

  // spt_threshold - computed: false, optional: true, required: false
  private _sptThreshold?: string; 
  public get sptThreshold() {
    return this.getStringAttribute('spt_threshold');
  }
  public set sptThreshold(value: string) {
    this._sptThreshold = value;
  }
  public resetSptThreshold() {
    this._sptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdInput() {
    return this._sptThreshold;
  }

  // spt_threshold_variable - computed: false, optional: true, required: false
  private _sptThresholdVariable?: string; 
  public get sptThresholdVariable() {
    return this.getStringAttribute('spt_threshold_variable');
  }
  public set sptThresholdVariable(value: string) {
    this._sptThresholdVariable = value;
  }
  public resetSptThresholdVariable() {
    this._sptThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptThresholdVariableInput() {
    return this._sptThresholdVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_rp: cdktf.booleanToTerraform(this._autoRp),
      auto_rp_variable: cdktf.stringToTerraform(this._autoRpVariable),
      bsr_candidate: cdktf.stringToTerraform(this._bsrCandidate),
      bsr_candidate_variable: cdktf.stringToTerraform(this._bsrCandidateVariable),
      default: cdktf.booleanToTerraform(this._default),
      default_variable: cdktf.stringToTerraform(this._defaultVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      hash_mask_length: cdktf.stringToTerraform(this._hashMaskLength),
      hash_mask_length_variable: cdktf.stringToTerraform(this._hashMaskLengthVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      interfaces: cdktf.listMapper(cedgePimFeatureTemplateInterfacesToTerraform, false)(this._interfaces.internalValue),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      priority_variable: cdktf.stringToTerraform(this._priorityVariable),
      range: cdktf.stringToTerraform(this._range),
      range_variable: cdktf.stringToTerraform(this._rangeVariable),
      rp_addresses: cdktf.listMapper(cedgePimFeatureTemplateRpAddressesToTerraform, false)(this._rpAddresses.internalValue),
      rp_announce_fields: cdktf.listMapper(cedgePimFeatureTemplateRpAnnounceFieldsToTerraform, false)(this._rpAnnounceFields.internalValue),
      rp_candidate_access_list: cdktf.stringToTerraform(this._rpCandidateAccessList),
      rp_candidate_access_list_variable: cdktf.stringToTerraform(this._rpCandidateAccessListVariable),
      rp_candidates: cdktf.listMapper(cedgePimFeatureTemplateRpCandidatesToTerraform, false)(this._rpCandidates.internalValue),
      scope: cdktf.numberToTerraform(this._scope),
      scope_variable: cdktf.stringToTerraform(this._scopeVariable),
      spt_threshold: cdktf.stringToTerraform(this._sptThreshold),
      spt_threshold_variable: cdktf.stringToTerraform(this._sptThresholdVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rp: {
        value: cdktf.booleanToHclTerraform(this._autoRp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_rp_variable: {
        value: cdktf.stringToHclTerraform(this._autoRpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_candidate: {
        value: cdktf.stringToHclTerraform(this._bsrCandidate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsr_candidate_variable: {
        value: cdktf.stringToHclTerraform(this._bsrCandidateVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_variable: {
        value: cdktf.stringToHclTerraform(this._defaultVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hash_mask_length: {
        value: cdktf.stringToHclTerraform(this._hashMaskLength),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hash_mask_length_variable: {
        value: cdktf.stringToHclTerraform(this._hashMaskLengthVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(cedgePimFeatureTemplateInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgePimFeatureTemplateInterfacesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority_variable: {
        value: cdktf.stringToHclTerraform(this._priorityVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range: {
        value: cdktf.stringToHclTerraform(this._range),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      range_variable: {
        value: cdktf.stringToHclTerraform(this._rangeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_addresses: {
        value: cdktf.listMapperHcl(cedgePimFeatureTemplateRpAddressesToHclTerraform, false)(this._rpAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgePimFeatureTemplateRpAddressesList",
      },
      rp_announce_fields: {
        value: cdktf.listMapperHcl(cedgePimFeatureTemplateRpAnnounceFieldsToHclTerraform, false)(this._rpAnnounceFields.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgePimFeatureTemplateRpAnnounceFieldsList",
      },
      rp_candidate_access_list: {
        value: cdktf.stringToHclTerraform(this._rpCandidateAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_candidate_access_list_variable: {
        value: cdktf.stringToHclTerraform(this._rpCandidateAccessListVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rp_candidates: {
        value: cdktf.listMapperHcl(cedgePimFeatureTemplateRpCandidatesToHclTerraform, false)(this._rpCandidates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CedgePimFeatureTemplateRpCandidatesList",
      },
      scope: {
        value: cdktf.numberToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scope_variable: {
        value: cdktf.stringToHclTerraform(this._scopeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spt_threshold: {
        value: cdktf.stringToHclTerraform(this._sptThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spt_threshold_variable: {
        value: cdktf.stringToHclTerraform(this._sptThresholdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
