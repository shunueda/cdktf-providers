// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceMulticastFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable or disable RP Announce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#auto_rp_announces ServiceMulticastFeature#auto_rp_announces}
  */
  readonly autoRpAnnounces?: ServiceMulticastFeatureAutoRpAnnounces[] | cdktf.IResolvable;
  /**
  * Enable or disable RP Discovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#auto_rp_discoveries ServiceMulticastFeature#auto_rp_discoveries}
  */
  readonly autoRpDiscoveries?: ServiceMulticastFeatureAutoRpDiscoveries[] | cdktf.IResolvable;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#description ServiceMulticastFeature#description}
  */
  readonly description?: string;
  /**
  * Enable or disable auto-RP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#enable_auto_rp ServiceMulticastFeature#enable_auto_rp}
  */
  readonly enableAutoRp?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#enable_auto_rp_variable ServiceMulticastFeature#enable_auto_rp_variable}
  */
  readonly enableAutoRpVariable?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#feature_profile_id ServiceMulticastFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Set IGMP interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#igmp_interfaces ServiceMulticastFeature#igmp_interfaces}
  */
  readonly igmpInterfaces?: ServiceMulticastFeatureIgmpInterfaces[] | cdktf.IResolvable;
  /**
  * Replicator is local to this device
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#local_replicator ServiceMulticastFeature#local_replicator}
  */
  readonly localReplicator?: boolean | cdktf.IResolvable;
  /**
  * Set number of joins per group the router supports
  *   - Range: `0`-`131072`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#local_replicator_threshold ServiceMulticastFeature#local_replicator_threshold}
  */
  readonly localReplicatorThreshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#local_replicator_threshold_variable ServiceMulticastFeature#local_replicator_threshold_variable}
  */
  readonly localReplicatorThresholdVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#local_replicator_variable ServiceMulticastFeature#local_replicator_variable}
  */
  readonly localReplicatorVariable?: string;
  /**
  * Set MSDP refresh timer
  *   - Range: `1`-`60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#msdp_connection_retry_interval ServiceMulticastFeature#msdp_connection_retry_interval}
  */
  readonly msdpConnectionRetryInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#msdp_connection_retry_interval_variable ServiceMulticastFeature#msdp_connection_retry_interval_variable}
  */
  readonly msdpConnectionRetryIntervalVariable?: string;
  /**
  * multicast MSDP peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#msdp_groups ServiceMulticastFeature#msdp_groups}
  */
  readonly msdpGroups?: ServiceMulticastFeatureMsdpGroups[] | cdktf.IResolvable;
  /**
  * Set MSDP originator ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#msdp_originator_id ServiceMulticastFeature#msdp_originator_id}
  */
  readonly msdpOriginatorId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#msdp_originator_id_variable ServiceMulticastFeature#msdp_originator_id_variable}
  */
  readonly msdpOriginatorIdVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#name ServiceMulticastFeature#name}
  */
  readonly name: string;
  /**
  * bsr candidate Attributes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_bsr_candidates ServiceMulticastFeature#pim_bsr_candidates}
  */
  readonly pimBsrCandidates?: ServiceMulticastFeaturePimBsrCandidates[] | cdktf.IResolvable;
  /**
  * Set RP Discovery Scope
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_bsr_rp_candidates ServiceMulticastFeature#pim_bsr_rp_candidates}
  */
  readonly pimBsrRpCandidates?: ServiceMulticastFeaturePimBsrRpCandidates[] | cdktf.IResolvable;
  /**
  * Set PIM interface parameters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_interfaces ServiceMulticastFeature#pim_interfaces}
  */
  readonly pimInterfaces?: ServiceMulticastFeaturePimInterfaces[] | cdktf.IResolvable;
  /**
  * Set Access List for PIM SSM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_source_specific_multicast_access_list ServiceMulticastFeature#pim_source_specific_multicast_access_list}
  */
  readonly pimSourceSpecificMulticastAccessList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_source_specific_multicast_access_list_variable ServiceMulticastFeature#pim_source_specific_multicast_access_list_variable}
  */
  readonly pimSourceSpecificMulticastAccessListVariable?: string;
  /**
  * turn SSM on/off
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_source_specific_multicast_enable ServiceMulticastFeature#pim_source_specific_multicast_enable}
  */
  readonly pimSourceSpecificMulticastEnable: boolean | cdktf.IResolvable;
  /**
  * Set when PIM router joins the SPT (kbps)
  *   - Choices: `0`, `infinity`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_spt_threshold ServiceMulticastFeature#pim_spt_threshold}
  */
  readonly pimSptThreshold?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#pim_spt_threshold_variable ServiceMulticastFeature#pim_spt_threshold_variable}
  */
  readonly pimSptThresholdVariable?: string;
  /**
  * Shortest Path Tree (SPT) Only Mode
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#spt_only ServiceMulticastFeature#spt_only}
  */
  readonly sptOnly?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#spt_only_variable ServiceMulticastFeature#spt_only_variable}
  */
  readonly sptOnlyVariable?: string;
  /**
  * Set Static RP Address(es)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#static_rp_addresses ServiceMulticastFeature#static_rp_addresses}
  */
  readonly staticRpAddresses?: ServiceMulticastFeatureStaticRpAddresses[] | cdktf.IResolvable;
}
export interface ServiceMulticastFeatureAutoRpAnnounces {
  /**
  * Set RP Announce Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name ServiceMulticastFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name_variable ServiceMulticastFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set RP Announce Scope
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#scope ServiceMulticastFeature#scope}
  */
  readonly scope?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#scope_variable ServiceMulticastFeature#scope_variable}
  */
  readonly scopeVariable?: string;
}

export function serviceMulticastFeatureAutoRpAnnouncesToTerraform(struct?: ServiceMulticastFeatureAutoRpAnnounces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    scope: cdktf.numberToTerraform(struct!.scope),
    scope_variable: cdktf.stringToTerraform(struct!.scopeVariable),
  }
}


export function serviceMulticastFeatureAutoRpAnnouncesToHclTerraform(struct?: ServiceMulticastFeatureAutoRpAnnounces | cdktf.IResolvable): any {
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

export class ServiceMulticastFeatureAutoRpAnnouncesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureAutoRpAnnounces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMulticastFeatureAutoRpAnnounces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
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

export class ServiceMulticastFeatureAutoRpAnnouncesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureAutoRpAnnounces[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureAutoRpAnnouncesOutputReference {
    return new ServiceMulticastFeatureAutoRpAnnouncesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeatureAutoRpDiscoveries {
  /**
  * Set RP Discovery Interface Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name ServiceMulticastFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name_variable ServiceMulticastFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set RP Discovery Scope
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#scope ServiceMulticastFeature#scope}
  */
  readonly scope?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#scope_variable ServiceMulticastFeature#scope_variable}
  */
  readonly scopeVariable?: string;
}

export function serviceMulticastFeatureAutoRpDiscoveriesToTerraform(struct?: ServiceMulticastFeatureAutoRpDiscoveries | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    scope: cdktf.numberToTerraform(struct!.scope),
    scope_variable: cdktf.stringToTerraform(struct!.scopeVariable),
  }
}


export function serviceMulticastFeatureAutoRpDiscoveriesToHclTerraform(struct?: ServiceMulticastFeatureAutoRpDiscoveries | cdktf.IResolvable): any {
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

export class ServiceMulticastFeatureAutoRpDiscoveriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureAutoRpDiscoveries | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMulticastFeatureAutoRpDiscoveries | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
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

export class ServiceMulticastFeatureAutoRpDiscoveriesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureAutoRpDiscoveries[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureAutoRpDiscoveriesOutputReference {
    return new ServiceMulticastFeatureAutoRpDiscoveriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeatureIgmpInterfacesJoinGroups {
  /**
  * Set group address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#group_address ServiceMulticastFeature#group_address}
  */
  readonly groupAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#group_address_variable ServiceMulticastFeature#group_address_variable}
  */
  readonly groupAddressVariable?: string;
  /**
  * Set source address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#source_address ServiceMulticastFeature#source_address}
  */
  readonly sourceAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#source_address_variable ServiceMulticastFeature#source_address_variable}
  */
  readonly sourceAddressVariable?: string;
}

export function serviceMulticastFeatureIgmpInterfacesJoinGroupsToTerraform(struct?: ServiceMulticastFeatureIgmpInterfacesJoinGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_address: cdktf.stringToTerraform(struct!.groupAddress),
    group_address_variable: cdktf.stringToTerraform(struct!.groupAddressVariable),
    source_address: cdktf.stringToTerraform(struct!.sourceAddress),
    source_address_variable: cdktf.stringToTerraform(struct!.sourceAddressVariable),
  }
}


export function serviceMulticastFeatureIgmpInterfacesJoinGroupsToHclTerraform(struct?: ServiceMulticastFeatureIgmpInterfacesJoinGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_address: {
      value: cdktf.stringToHclTerraform(struct!.groupAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.groupAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.sourceAddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMulticastFeatureIgmpInterfacesJoinGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureIgmpInterfacesJoinGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddress = this._groupAddress;
    }
    if (this._groupAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupAddressVariable = this._groupAddressVariable;
    }
    if (this._sourceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddress = this._sourceAddress;
    }
    if (this._sourceAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceAddressVariable = this._sourceAddressVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMulticastFeatureIgmpInterfacesJoinGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupAddress = undefined;
      this._groupAddressVariable = undefined;
      this._sourceAddress = undefined;
      this._sourceAddressVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupAddress = value.groupAddress;
      this._groupAddressVariable = value.groupAddressVariable;
      this._sourceAddress = value.sourceAddress;
      this._sourceAddressVariable = value.sourceAddressVariable;
    }
  }

  // group_address - computed: false, optional: true, required: false
  private _groupAddress?: string; 
  public get groupAddress() {
    return this.getStringAttribute('group_address');
  }
  public set groupAddress(value: string) {
    this._groupAddress = value;
  }
  public resetGroupAddress() {
    this._groupAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddressInput() {
    return this._groupAddress;
  }

  // group_address_variable - computed: false, optional: true, required: false
  private _groupAddressVariable?: string; 
  public get groupAddressVariable() {
    return this.getStringAttribute('group_address_variable');
  }
  public set groupAddressVariable(value: string) {
    this._groupAddressVariable = value;
  }
  public resetGroupAddressVariable() {
    this._groupAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupAddressVariableInput() {
    return this._groupAddressVariable;
  }

  // source_address - computed: false, optional: true, required: false
  private _sourceAddress?: string; 
  public get sourceAddress() {
    return this.getStringAttribute('source_address');
  }
  public set sourceAddress(value: string) {
    this._sourceAddress = value;
  }
  public resetSourceAddress() {
    this._sourceAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressInput() {
    return this._sourceAddress;
  }

  // source_address_variable - computed: false, optional: true, required: false
  private _sourceAddressVariable?: string; 
  public get sourceAddressVariable() {
    return this.getStringAttribute('source_address_variable');
  }
  public set sourceAddressVariable(value: string) {
    this._sourceAddressVariable = value;
  }
  public resetSourceAddressVariable() {
    this._sourceAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceAddressVariableInput() {
    return this._sourceAddressVariable;
  }
}

export class ServiceMulticastFeatureIgmpInterfacesJoinGroupsList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureIgmpInterfacesJoinGroups[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureIgmpInterfacesJoinGroupsOutputReference {
    return new ServiceMulticastFeatureIgmpInterfacesJoinGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeatureIgmpInterfaces {
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name ServiceMulticastFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name_variable ServiceMulticastFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Configure static joins
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#join_groups ServiceMulticastFeature#join_groups}
  */
  readonly joinGroups?: ServiceMulticastFeatureIgmpInterfacesJoinGroups[] | cdktf.IResolvable;
  /**
  * igmp Version <1..3>
  *   - Range: `1`-`3`
  *   - Default value: `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#version ServiceMulticastFeature#version}
  */
  readonly version?: number;
}

export function serviceMulticastFeatureIgmpInterfacesToTerraform(struct?: ServiceMulticastFeatureIgmpInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    join_groups: cdktf.listMapper(serviceMulticastFeatureIgmpInterfacesJoinGroupsToTerraform, false)(struct!.joinGroups),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function serviceMulticastFeatureIgmpInterfacesToHclTerraform(struct?: ServiceMulticastFeatureIgmpInterfaces | cdktf.IResolvable): any {
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
    join_groups: {
      value: cdktf.listMapperHcl(serviceMulticastFeatureIgmpInterfacesJoinGroupsToHclTerraform, false)(struct!.joinGroups),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMulticastFeatureIgmpInterfacesJoinGroupsList",
    },
    version: {
      value: cdktf.numberToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMulticastFeatureIgmpInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureIgmpInterfaces | cdktf.IResolvable | undefined {
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
    if (this._joinGroups?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.joinGroups = this._joinGroups?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMulticastFeatureIgmpInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._joinGroups.internalValue = undefined;
      this._version = undefined;
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
      this._joinGroups.internalValue = value.joinGroups;
      this._version = value.version;
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

  // join_groups - computed: false, optional: true, required: false
  private _joinGroups = new ServiceMulticastFeatureIgmpInterfacesJoinGroupsList(this, "join_groups", false);
  public get joinGroups() {
    return this._joinGroups;
  }
  public putJoinGroups(value: ServiceMulticastFeatureIgmpInterfacesJoinGroups[] | cdktf.IResolvable) {
    this._joinGroups.internalValue = value;
  }
  public resetJoinGroups() {
    this._joinGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get joinGroupsInput() {
    return this._joinGroups.internalValue;
  }

  // version - computed: false, optional: true, required: false
  private _version?: number; 
  public get version() {
    return this.getNumberAttribute('version');
  }
  public set version(value: number) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ServiceMulticastFeatureIgmpInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureIgmpInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureIgmpInterfacesOutputReference {
    return new ServiceMulticastFeatureIgmpInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeatureMsdpGroupsPeers {
  /**
  * Set MSDP peer ip connect-source interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#connection_source_interface ServiceMulticastFeature#connection_source_interface}
  */
  readonly connectionSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#connection_source_interface_variable ServiceMulticastFeature#connection_source_interface_variable}
  */
  readonly connectionSourceInterfaceVariable?: string;
  /**
  * Set MSDP default peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#default_peer ServiceMulticastFeature#default_peer}
  */
  readonly defaultPeer?: boolean | cdktf.IResolvable;
  /**
  * Set MSDP peer ip keepalive hold time
  *   - Range: `1`-`75`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#keepalive_hold_time ServiceMulticastFeature#keepalive_hold_time}
  */
  readonly keepaliveHoldTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#keepalive_hold_time_variable ServiceMulticastFeature#keepalive_hold_time_variable}
  */
  readonly keepaliveHoldTimeVariable?: string;
  /**
  * Set MSDP peer ip keepalive interval
  *   - Range: `1`-`60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#keepalive_interval ServiceMulticastFeature#keepalive_interval}
  */
  readonly keepaliveInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#keepalive_interval_variable ServiceMulticastFeature#keepalive_interval_variable}
  */
  readonly keepaliveIntervalVariable?: string;
  /**
  * Set MSDP peer ip password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#peer_authentication_password ServiceMulticastFeature#peer_authentication_password}
  */
  readonly peerAuthenticationPassword?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#peer_authentication_password_variable ServiceMulticastFeature#peer_authentication_password_variable}
  */
  readonly peerAuthenticationPasswordVariable?: string;
  /**
  * Set MSDP peer ip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#peer_ip ServiceMulticastFeature#peer_ip}
  */
  readonly peerIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#peer_ip_variable ServiceMulticastFeature#peer_ip_variable}
  */
  readonly peerIpVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#prefix_list_id ServiceMulticastFeature#prefix_list_id}
  */
  readonly prefixListId?: string;
  /**
  * Set MSDP peer ip remote autonomous system number
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#remote_as ServiceMulticastFeature#remote_as}
  */
  readonly remoteAs?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#remote_as_variable ServiceMulticastFeature#remote_as_variable}
  */
  readonly remoteAsVariable?: string;
  /**
  * Set MSDP peer ip SA limit message number
  *   - Range: `1`-`2147483646`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#sa_limit ServiceMulticastFeature#sa_limit}
  */
  readonly saLimit?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#sa_limit_variable ServiceMulticastFeature#sa_limit_variable}
  */
  readonly saLimitVariable?: string;
}

export function serviceMulticastFeatureMsdpGroupsPeersToTerraform(struct?: ServiceMulticastFeatureMsdpGroupsPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connection_source_interface: cdktf.stringToTerraform(struct!.connectionSourceInterface),
    connection_source_interface_variable: cdktf.stringToTerraform(struct!.connectionSourceInterfaceVariable),
    default_peer: cdktf.booleanToTerraform(struct!.defaultPeer),
    keepalive_hold_time: cdktf.numberToTerraform(struct!.keepaliveHoldTime),
    keepalive_hold_time_variable: cdktf.stringToTerraform(struct!.keepaliveHoldTimeVariable),
    keepalive_interval: cdktf.numberToTerraform(struct!.keepaliveInterval),
    keepalive_interval_variable: cdktf.stringToTerraform(struct!.keepaliveIntervalVariable),
    peer_authentication_password: cdktf.stringToTerraform(struct!.peerAuthenticationPassword),
    peer_authentication_password_variable: cdktf.stringToTerraform(struct!.peerAuthenticationPasswordVariable),
    peer_ip: cdktf.stringToTerraform(struct!.peerIp),
    peer_ip_variable: cdktf.stringToTerraform(struct!.peerIpVariable),
    prefix_list_id: cdktf.stringToTerraform(struct!.prefixListId),
    remote_as: cdktf.numberToTerraform(struct!.remoteAs),
    remote_as_variable: cdktf.stringToTerraform(struct!.remoteAsVariable),
    sa_limit: cdktf.numberToTerraform(struct!.saLimit),
    sa_limit_variable: cdktf.stringToTerraform(struct!.saLimitVariable),
  }
}


export function serviceMulticastFeatureMsdpGroupsPeersToHclTerraform(struct?: ServiceMulticastFeatureMsdpGroupsPeers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connection_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.connectionSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    connection_source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.connectionSourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_peer: {
      value: cdktf.booleanToHclTerraform(struct!.defaultPeer),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keepalive_hold_time: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveHoldTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_hold_time_variable: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveHoldTimeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    keepalive_interval: {
      value: cdktf.numberToHclTerraform(struct!.keepaliveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    keepalive_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.keepaliveIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_authentication_password: {
      value: cdktf.stringToHclTerraform(struct!.peerAuthenticationPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_authentication_password_variable: {
      value: cdktf.stringToHclTerraform(struct!.peerAuthenticationPasswordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip: {
      value: cdktf.stringToHclTerraform(struct!.peerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peer_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.peerIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_list_id: {
      value: cdktf.stringToHclTerraform(struct!.prefixListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remote_as: {
      value: cdktf.numberToHclTerraform(struct!.remoteAs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    remote_as_variable: {
      value: cdktf.stringToHclTerraform(struct!.remoteAsVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sa_limit: {
      value: cdktf.numberToHclTerraform(struct!.saLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sa_limit_variable: {
      value: cdktf.stringToHclTerraform(struct!.saLimitVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMulticastFeatureMsdpGroupsPeersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureMsdpGroupsPeers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectionSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSourceInterface = this._connectionSourceInterface;
    }
    if (this._connectionSourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectionSourceInterfaceVariable = this._connectionSourceInterfaceVariable;
    }
    if (this._defaultPeer !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPeer = this._defaultPeer;
    }
    if (this._keepaliveHoldTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveHoldTime = this._keepaliveHoldTime;
    }
    if (this._keepaliveHoldTimeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveHoldTimeVariable = this._keepaliveHoldTimeVariable;
    }
    if (this._keepaliveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveInterval = this._keepaliveInterval;
    }
    if (this._keepaliveIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keepaliveIntervalVariable = this._keepaliveIntervalVariable;
    }
    if (this._peerAuthenticationPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAuthenticationPassword = this._peerAuthenticationPassword;
    }
    if (this._peerAuthenticationPasswordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerAuthenticationPasswordVariable = this._peerAuthenticationPasswordVariable;
    }
    if (this._peerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIp = this._peerIp;
    }
    if (this._peerIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.peerIpVariable = this._peerIpVariable;
    }
    if (this._prefixListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixListId = this._prefixListId;
    }
    if (this._remoteAs !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAs = this._remoteAs;
    }
    if (this._remoteAsVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.remoteAsVariable = this._remoteAsVariable;
    }
    if (this._saLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLimit = this._saLimit;
    }
    if (this._saLimitVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.saLimitVariable = this._saLimitVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMulticastFeatureMsdpGroupsPeers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectionSourceInterface = undefined;
      this._connectionSourceInterfaceVariable = undefined;
      this._defaultPeer = undefined;
      this._keepaliveHoldTime = undefined;
      this._keepaliveHoldTimeVariable = undefined;
      this._keepaliveInterval = undefined;
      this._keepaliveIntervalVariable = undefined;
      this._peerAuthenticationPassword = undefined;
      this._peerAuthenticationPasswordVariable = undefined;
      this._peerIp = undefined;
      this._peerIpVariable = undefined;
      this._prefixListId = undefined;
      this._remoteAs = undefined;
      this._remoteAsVariable = undefined;
      this._saLimit = undefined;
      this._saLimitVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectionSourceInterface = value.connectionSourceInterface;
      this._connectionSourceInterfaceVariable = value.connectionSourceInterfaceVariable;
      this._defaultPeer = value.defaultPeer;
      this._keepaliveHoldTime = value.keepaliveHoldTime;
      this._keepaliveHoldTimeVariable = value.keepaliveHoldTimeVariable;
      this._keepaliveInterval = value.keepaliveInterval;
      this._keepaliveIntervalVariable = value.keepaliveIntervalVariable;
      this._peerAuthenticationPassword = value.peerAuthenticationPassword;
      this._peerAuthenticationPasswordVariable = value.peerAuthenticationPasswordVariable;
      this._peerIp = value.peerIp;
      this._peerIpVariable = value.peerIpVariable;
      this._prefixListId = value.prefixListId;
      this._remoteAs = value.remoteAs;
      this._remoteAsVariable = value.remoteAsVariable;
      this._saLimit = value.saLimit;
      this._saLimitVariable = value.saLimitVariable;
    }
  }

  // connection_source_interface - computed: false, optional: true, required: false
  private _connectionSourceInterface?: string; 
  public get connectionSourceInterface() {
    return this.getStringAttribute('connection_source_interface');
  }
  public set connectionSourceInterface(value: string) {
    this._connectionSourceInterface = value;
  }
  public resetConnectionSourceInterface() {
    this._connectionSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSourceInterfaceInput() {
    return this._connectionSourceInterface;
  }

  // connection_source_interface_variable - computed: false, optional: true, required: false
  private _connectionSourceInterfaceVariable?: string; 
  public get connectionSourceInterfaceVariable() {
    return this.getStringAttribute('connection_source_interface_variable');
  }
  public set connectionSourceInterfaceVariable(value: string) {
    this._connectionSourceInterfaceVariable = value;
  }
  public resetConnectionSourceInterfaceVariable() {
    this._connectionSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionSourceInterfaceVariableInput() {
    return this._connectionSourceInterfaceVariable;
  }

  // default_peer - computed: false, optional: true, required: false
  private _defaultPeer?: boolean | cdktf.IResolvable; 
  public get defaultPeer() {
    return this.getBooleanAttribute('default_peer');
  }
  public set defaultPeer(value: boolean | cdktf.IResolvable) {
    this._defaultPeer = value;
  }
  public resetDefaultPeer() {
    this._defaultPeer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPeerInput() {
    return this._defaultPeer;
  }

  // keepalive_hold_time - computed: false, optional: true, required: false
  private _keepaliveHoldTime?: number; 
  public get keepaliveHoldTime() {
    return this.getNumberAttribute('keepalive_hold_time');
  }
  public set keepaliveHoldTime(value: number) {
    this._keepaliveHoldTime = value;
  }
  public resetKeepaliveHoldTime() {
    this._keepaliveHoldTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveHoldTimeInput() {
    return this._keepaliveHoldTime;
  }

  // keepalive_hold_time_variable - computed: false, optional: true, required: false
  private _keepaliveHoldTimeVariable?: string; 
  public get keepaliveHoldTimeVariable() {
    return this.getStringAttribute('keepalive_hold_time_variable');
  }
  public set keepaliveHoldTimeVariable(value: string) {
    this._keepaliveHoldTimeVariable = value;
  }
  public resetKeepaliveHoldTimeVariable() {
    this._keepaliveHoldTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveHoldTimeVariableInput() {
    return this._keepaliveHoldTimeVariable;
  }

  // keepalive_interval - computed: false, optional: true, required: false
  private _keepaliveInterval?: number; 
  public get keepaliveInterval() {
    return this.getNumberAttribute('keepalive_interval');
  }
  public set keepaliveInterval(value: number) {
    this._keepaliveInterval = value;
  }
  public resetKeepaliveInterval() {
    this._keepaliveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalInput() {
    return this._keepaliveInterval;
  }

  // keepalive_interval_variable - computed: false, optional: true, required: false
  private _keepaliveIntervalVariable?: string; 
  public get keepaliveIntervalVariable() {
    return this.getStringAttribute('keepalive_interval_variable');
  }
  public set keepaliveIntervalVariable(value: string) {
    this._keepaliveIntervalVariable = value;
  }
  public resetKeepaliveIntervalVariable() {
    this._keepaliveIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveIntervalVariableInput() {
    return this._keepaliveIntervalVariable;
  }

  // peer_authentication_password - computed: false, optional: true, required: false
  private _peerAuthenticationPassword?: string; 
  public get peerAuthenticationPassword() {
    return this.getStringAttribute('peer_authentication_password');
  }
  public set peerAuthenticationPassword(value: string) {
    this._peerAuthenticationPassword = value;
  }
  public resetPeerAuthenticationPassword() {
    this._peerAuthenticationPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAuthenticationPasswordInput() {
    return this._peerAuthenticationPassword;
  }

  // peer_authentication_password_variable - computed: false, optional: true, required: false
  private _peerAuthenticationPasswordVariable?: string; 
  public get peerAuthenticationPasswordVariable() {
    return this.getStringAttribute('peer_authentication_password_variable');
  }
  public set peerAuthenticationPasswordVariable(value: string) {
    this._peerAuthenticationPasswordVariable = value;
  }
  public resetPeerAuthenticationPasswordVariable() {
    this._peerAuthenticationPasswordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerAuthenticationPasswordVariableInput() {
    return this._peerAuthenticationPasswordVariable;
  }

  // peer_ip - computed: false, optional: true, required: false
  private _peerIp?: string; 
  public get peerIp() {
    return this.getStringAttribute('peer_ip');
  }
  public set peerIp(value: string) {
    this._peerIp = value;
  }
  public resetPeerIp() {
    this._peerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpInput() {
    return this._peerIp;
  }

  // peer_ip_variable - computed: false, optional: true, required: false
  private _peerIpVariable?: string; 
  public get peerIpVariable() {
    return this.getStringAttribute('peer_ip_variable');
  }
  public set peerIpVariable(value: string) {
    this._peerIpVariable = value;
  }
  public resetPeerIpVariable() {
    this._peerIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerIpVariableInput() {
    return this._peerIpVariable;
  }

  // prefix_list_id - computed: false, optional: true, required: false
  private _prefixListId?: string; 
  public get prefixListId() {
    return this.getStringAttribute('prefix_list_id');
  }
  public set prefixListId(value: string) {
    this._prefixListId = value;
  }
  public resetPrefixListId() {
    this._prefixListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListIdInput() {
    return this._prefixListId;
  }

  // remote_as - computed: false, optional: true, required: false
  private _remoteAs?: number; 
  public get remoteAs() {
    return this.getNumberAttribute('remote_as');
  }
  public set remoteAs(value: number) {
    this._remoteAs = value;
  }
  public resetRemoteAs() {
    this._remoteAs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsInput() {
    return this._remoteAs;
  }

  // remote_as_variable - computed: false, optional: true, required: false
  private _remoteAsVariable?: string; 
  public get remoteAsVariable() {
    return this.getStringAttribute('remote_as_variable');
  }
  public set remoteAsVariable(value: string) {
    this._remoteAsVariable = value;
  }
  public resetRemoteAsVariable() {
    this._remoteAsVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteAsVariableInput() {
    return this._remoteAsVariable;
  }

  // sa_limit - computed: false, optional: true, required: false
  private _saLimit?: number; 
  public get saLimit() {
    return this.getNumberAttribute('sa_limit');
  }
  public set saLimit(value: number) {
    this._saLimit = value;
  }
  public resetSaLimit() {
    this._saLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLimitInput() {
    return this._saLimit;
  }

  // sa_limit_variable - computed: false, optional: true, required: false
  private _saLimitVariable?: string; 
  public get saLimitVariable() {
    return this.getStringAttribute('sa_limit_variable');
  }
  public set saLimitVariable(value: string) {
    this._saLimitVariable = value;
  }
  public resetSaLimitVariable() {
    this._saLimitVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saLimitVariableInput() {
    return this._saLimitVariable;
  }
}

export class ServiceMulticastFeatureMsdpGroupsPeersList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureMsdpGroupsPeers[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureMsdpGroupsPeersOutputReference {
    return new ServiceMulticastFeatureMsdpGroupsPeersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeatureMsdpGroups {
  /**
  * Set MSDP mesh group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#mesh_group_name ServiceMulticastFeature#mesh_group_name}
  */
  readonly meshGroupName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#mesh_group_name_variable ServiceMulticastFeature#mesh_group_name_variable}
  */
  readonly meshGroupNameVariable?: string;
  /**
  * Configure peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#peers ServiceMulticastFeature#peers}
  */
  readonly peers?: ServiceMulticastFeatureMsdpGroupsPeers[] | cdktf.IResolvable;
}

export function serviceMulticastFeatureMsdpGroupsToTerraform(struct?: ServiceMulticastFeatureMsdpGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mesh_group_name: cdktf.stringToTerraform(struct!.meshGroupName),
    mesh_group_name_variable: cdktf.stringToTerraform(struct!.meshGroupNameVariable),
    peers: cdktf.listMapper(serviceMulticastFeatureMsdpGroupsPeersToTerraform, false)(struct!.peers),
  }
}


export function serviceMulticastFeatureMsdpGroupsToHclTerraform(struct?: ServiceMulticastFeatureMsdpGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mesh_group_name: {
      value: cdktf.stringToHclTerraform(struct!.meshGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mesh_group_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.meshGroupNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    peers: {
      value: cdktf.listMapperHcl(serviceMulticastFeatureMsdpGroupsPeersToHclTerraform, false)(struct!.peers),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceMulticastFeatureMsdpGroupsPeersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceMulticastFeatureMsdpGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureMsdpGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._meshGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroupName = this._meshGroupName;
    }
    if (this._meshGroupNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.meshGroupNameVariable = this._meshGroupNameVariable;
    }
    if (this._peers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.peers = this._peers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceMulticastFeatureMsdpGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._meshGroupName = undefined;
      this._meshGroupNameVariable = undefined;
      this._peers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._meshGroupName = value.meshGroupName;
      this._meshGroupNameVariable = value.meshGroupNameVariable;
      this._peers.internalValue = value.peers;
    }
  }

  // mesh_group_name - computed: false, optional: true, required: false
  private _meshGroupName?: string; 
  public get meshGroupName() {
    return this.getStringAttribute('mesh_group_name');
  }
  public set meshGroupName(value: string) {
    this._meshGroupName = value;
  }
  public resetMeshGroupName() {
    this._meshGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupNameInput() {
    return this._meshGroupName;
  }

  // mesh_group_name_variable - computed: false, optional: true, required: false
  private _meshGroupNameVariable?: string; 
  public get meshGroupNameVariable() {
    return this.getStringAttribute('mesh_group_name_variable');
  }
  public set meshGroupNameVariable(value: string) {
    this._meshGroupNameVariable = value;
  }
  public resetMeshGroupNameVariable() {
    this._meshGroupNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get meshGroupNameVariableInput() {
    return this._meshGroupNameVariable;
  }

  // peers - computed: false, optional: true, required: false
  private _peers = new ServiceMulticastFeatureMsdpGroupsPeersList(this, "peers", false);
  public get peers() {
    return this._peers;
  }
  public putPeers(value: ServiceMulticastFeatureMsdpGroupsPeers[] | cdktf.IResolvable) {
    this._peers.internalValue = value;
  }
  public resetPeers() {
    this._peers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peersInput() {
    return this._peers.internalValue;
  }
}

export class ServiceMulticastFeatureMsdpGroupsList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureMsdpGroups[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureMsdpGroupsOutputReference {
    return new ServiceMulticastFeatureMsdpGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeaturePimBsrCandidates {
  /**
  * Set BSR RP candidate filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#accept_candidate_access_list ServiceMulticastFeature#accept_candidate_access_list}
  */
  readonly acceptCandidateAccessList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#accept_candidate_access_list_variable ServiceMulticastFeature#accept_candidate_access_list_variable}
  */
  readonly acceptCandidateAccessListVariable?: string;
  /**
  * Hash Mask length for RP selection
  *   - Range: `0`-`32`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#hash_mask_length ServiceMulticastFeature#hash_mask_length}
  */
  readonly hashMaskLength?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#hash_mask_length_variable ServiceMulticastFeature#hash_mask_length_variable}
  */
  readonly hashMaskLengthVariable?: string;
  /**
  * Set Autonomic-Networking virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name ServiceMulticastFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name_variable ServiceMulticastFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set RP candidate priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#priority ServiceMulticastFeature#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#priority_variable ServiceMulticastFeature#priority_variable}
  */
  readonly priorityVariable?: string;
}

export function serviceMulticastFeaturePimBsrCandidatesToTerraform(struct?: ServiceMulticastFeaturePimBsrCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_candidate_access_list: cdktf.stringToTerraform(struct!.acceptCandidateAccessList),
    accept_candidate_access_list_variable: cdktf.stringToTerraform(struct!.acceptCandidateAccessListVariable),
    hash_mask_length: cdktf.numberToTerraform(struct!.hashMaskLength),
    hash_mask_length_variable: cdktf.stringToTerraform(struct!.hashMaskLengthVariable),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
  }
}


export function serviceMulticastFeaturePimBsrCandidatesToHclTerraform(struct?: ServiceMulticastFeaturePimBsrCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    accept_candidate_access_list: {
      value: cdktf.stringToHclTerraform(struct!.acceptCandidateAccessList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    accept_candidate_access_list_variable: {
      value: cdktf.stringToHclTerraform(struct!.acceptCandidateAccessListVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hash_mask_length: {
      value: cdktf.numberToHclTerraform(struct!.hashMaskLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hash_mask_length_variable: {
      value: cdktf.stringToHclTerraform(struct!.hashMaskLengthVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ServiceMulticastFeaturePimBsrCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeaturePimBsrCandidates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptCandidateAccessList !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCandidateAccessList = this._acceptCandidateAccessList;
    }
    if (this._acceptCandidateAccessListVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptCandidateAccessListVariable = this._acceptCandidateAccessListVariable;
    }
    if (this._hashMaskLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashMaskLength = this._hashMaskLength;
    }
    if (this._hashMaskLengthVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.hashMaskLengthVariable = this._hashMaskLengthVariable;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
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

  public set internalValue(value: ServiceMulticastFeaturePimBsrCandidates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._acceptCandidateAccessList = undefined;
      this._acceptCandidateAccessListVariable = undefined;
      this._hashMaskLength = undefined;
      this._hashMaskLengthVariable = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
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
      this._acceptCandidateAccessList = value.acceptCandidateAccessList;
      this._acceptCandidateAccessListVariable = value.acceptCandidateAccessListVariable;
      this._hashMaskLength = value.hashMaskLength;
      this._hashMaskLengthVariable = value.hashMaskLengthVariable;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
    }
  }

  // accept_candidate_access_list - computed: false, optional: true, required: false
  private _acceptCandidateAccessList?: string; 
  public get acceptCandidateAccessList() {
    return this.getStringAttribute('accept_candidate_access_list');
  }
  public set acceptCandidateAccessList(value: string) {
    this._acceptCandidateAccessList = value;
  }
  public resetAcceptCandidateAccessList() {
    this._acceptCandidateAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCandidateAccessListInput() {
    return this._acceptCandidateAccessList;
  }

  // accept_candidate_access_list_variable - computed: false, optional: true, required: false
  private _acceptCandidateAccessListVariable?: string; 
  public get acceptCandidateAccessListVariable() {
    return this.getStringAttribute('accept_candidate_access_list_variable');
  }
  public set acceptCandidateAccessListVariable(value: string) {
    this._acceptCandidateAccessListVariable = value;
  }
  public resetAcceptCandidateAccessListVariable() {
    this._acceptCandidateAccessListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptCandidateAccessListVariableInput() {
    return this._acceptCandidateAccessListVariable;
  }

  // hash_mask_length - computed: false, optional: true, required: false
  private _hashMaskLength?: number; 
  public get hashMaskLength() {
    return this.getNumberAttribute('hash_mask_length');
  }
  public set hashMaskLength(value: number) {
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

export class ServiceMulticastFeaturePimBsrCandidatesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeaturePimBsrCandidates[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeaturePimBsrCandidatesOutputReference {
    return new ServiceMulticastFeaturePimBsrCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeaturePimBsrRpCandidates {
  /**
  * Set IP Access List for PIM RP Candidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#access_list_id ServiceMulticastFeature#access_list_id}
  */
  readonly accessListId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#access_list_id_variable ServiceMulticastFeature#access_list_id_variable}
  */
  readonly accessListIdVariable?: string;
  /**
  * Set Autonomic-Networking virtual interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name ServiceMulticastFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name_variable ServiceMulticastFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set RP candidate advertisement interval
  *   - Range: `1`-`16383`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interval ServiceMulticastFeature#interval}
  */
  readonly interval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interval_variable ServiceMulticastFeature#interval_variable}
  */
  readonly intervalVariable?: string;
  /**
  * Set RP candidate priority
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#priority ServiceMulticastFeature#priority}
  */
  readonly priority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#priority_variable ServiceMulticastFeature#priority_variable}
  */
  readonly priorityVariable?: string;
}

export function serviceMulticastFeaturePimBsrRpCandidatesToTerraform(struct?: ServiceMulticastFeaturePimBsrRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list_id: cdktf.stringToTerraform(struct!.accessListId),
    access_list_id_variable: cdktf.stringToTerraform(struct!.accessListIdVariable),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_variable: cdktf.stringToTerraform(struct!.intervalVariable),
    priority: cdktf.numberToTerraform(struct!.priority),
    priority_variable: cdktf.stringToTerraform(struct!.priorityVariable),
  }
}


export function serviceMulticastFeaturePimBsrRpCandidatesToHclTerraform(struct?: ServiceMulticastFeaturePimBsrRpCandidates | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_list_id: {
      value: cdktf.stringToHclTerraform(struct!.accessListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    access_list_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.accessListIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class ServiceMulticastFeaturePimBsrRpCandidatesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeaturePimBsrRpCandidates | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListId = this._accessListId;
    }
    if (this._accessListIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessListIdVariable = this._accessListIdVariable;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._interfaceNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceNameVariable = this._interfaceNameVariable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalVariable = this._intervalVariable;
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

  public set internalValue(value: ServiceMulticastFeaturePimBsrRpCandidates | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessListId = undefined;
      this._accessListIdVariable = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._interval = undefined;
      this._intervalVariable = undefined;
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
      this._accessListId = value.accessListId;
      this._accessListIdVariable = value.accessListIdVariable;
      this._interfaceName = value.interfaceName;
      this._interfaceNameVariable = value.interfaceNameVariable;
      this._interval = value.interval;
      this._intervalVariable = value.intervalVariable;
      this._priority = value.priority;
      this._priorityVariable = value.priorityVariable;
    }
  }

  // access_list_id - computed: false, optional: true, required: false
  private _accessListId?: string; 
  public get accessListId() {
    return this.getStringAttribute('access_list_id');
  }
  public set accessListId(value: string) {
    this._accessListId = value;
  }
  public resetAccessListId() {
    this._accessListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListIdInput() {
    return this._accessListId;
  }

  // access_list_id_variable - computed: false, optional: true, required: false
  private _accessListIdVariable?: string; 
  public get accessListIdVariable() {
    return this.getStringAttribute('access_list_id_variable');
  }
  public set accessListIdVariable(value: string) {
    this._accessListIdVariable = value;
  }
  public resetAccessListIdVariable() {
    this._accessListIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListIdVariableInput() {
    return this._accessListIdVariable;
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

export class ServiceMulticastFeaturePimBsrRpCandidatesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeaturePimBsrRpCandidates[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeaturePimBsrRpCandidatesOutputReference {
    return new ServiceMulticastFeaturePimBsrRpCandidatesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeaturePimInterfaces {
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name ServiceMulticastFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#interface_name_variable ServiceMulticastFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Set interval at which PIM multicast traffic can join or be removed from RPT or SPT
  *   - Range: `10`-`600`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#join_prune_interval ServiceMulticastFeature#join_prune_interval}
  */
  readonly joinPruneInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#join_prune_interval_variable ServiceMulticastFeature#join_prune_interval_variable}
  */
  readonly joinPruneIntervalVariable?: string;
  /**
  * Set PIM query interval
  *   - Range: `1`-`18725`
  *   - Default value: `30`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#query_interval ServiceMulticastFeature#query_interval}
  */
  readonly queryInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#query_interval_variable ServiceMulticastFeature#query_interval_variable}
  */
  readonly queryIntervalVariable?: string;
}

export function serviceMulticastFeaturePimInterfacesToTerraform(struct?: ServiceMulticastFeaturePimInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    join_prune_interval: cdktf.numberToTerraform(struct!.joinPruneInterval),
    join_prune_interval_variable: cdktf.stringToTerraform(struct!.joinPruneIntervalVariable),
    query_interval: cdktf.numberToTerraform(struct!.queryInterval),
    query_interval_variable: cdktf.stringToTerraform(struct!.queryIntervalVariable),
  }
}


export function serviceMulticastFeaturePimInterfacesToHclTerraform(struct?: ServiceMulticastFeaturePimInterfaces | cdktf.IResolvable): any {
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

export class ServiceMulticastFeaturePimInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeaturePimInterfaces | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMulticastFeaturePimInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._joinPruneInterval = undefined;
      this._joinPruneIntervalVariable = undefined;
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

export class ServiceMulticastFeaturePimInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeaturePimInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeaturePimInterfacesOutputReference {
    return new ServiceMulticastFeaturePimInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceMulticastFeatureStaticRpAddresses {
  /**
  * Set Static RP Access List
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#access_list ServiceMulticastFeature#access_list}
  */
  readonly accessList?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#access_list_variable ServiceMulticastFeature#access_list_variable}
  */
  readonly accessListVariable?: string;
  /**
  * Set Static RP IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#ip_address ServiceMulticastFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#ip_address_variable ServiceMulticastFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Set override flag
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#override ServiceMulticastFeature#override}
  */
  readonly override?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#override_variable ServiceMulticastFeature#override_variable}
  */
  readonly overrideVariable?: string;
}

export function serviceMulticastFeatureStaticRpAddressesToTerraform(struct?: ServiceMulticastFeatureStaticRpAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_list: cdktf.stringToTerraform(struct!.accessList),
    access_list_variable: cdktf.stringToTerraform(struct!.accessListVariable),
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    override: cdktf.booleanToTerraform(struct!.override),
    override_variable: cdktf.stringToTerraform(struct!.overrideVariable),
  }
}


export function serviceMulticastFeatureStaticRpAddressesToHclTerraform(struct?: ServiceMulticastFeatureStaticRpAddresses | cdktf.IResolvable): any {
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

export class ServiceMulticastFeatureStaticRpAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceMulticastFeatureStaticRpAddresses | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ServiceMulticastFeatureStaticRpAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessList = undefined;
      this._accessListVariable = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
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

export class ServiceMulticastFeatureStaticRpAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceMulticastFeatureStaticRpAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceMulticastFeatureStaticRpAddressesOutputReference {
    return new ServiceMulticastFeatureStaticRpAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature sdwan_service_multicast_feature}
*/
export class ServiceMulticastFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_multicast_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceMulticastFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceMulticastFeature to import
  * @param importFromId The id of the existing ServiceMulticastFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceMulticastFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_multicast_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_multicast_feature sdwan_service_multicast_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceMulticastFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceMulticastFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_multicast_feature',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoRpAnnounces.internalValue = config.autoRpAnnounces;
    this._autoRpDiscoveries.internalValue = config.autoRpDiscoveries;
    this._description = config.description;
    this._enableAutoRp = config.enableAutoRp;
    this._enableAutoRpVariable = config.enableAutoRpVariable;
    this._featureProfileId = config.featureProfileId;
    this._igmpInterfaces.internalValue = config.igmpInterfaces;
    this._localReplicator = config.localReplicator;
    this._localReplicatorThreshold = config.localReplicatorThreshold;
    this._localReplicatorThresholdVariable = config.localReplicatorThresholdVariable;
    this._localReplicatorVariable = config.localReplicatorVariable;
    this._msdpConnectionRetryInterval = config.msdpConnectionRetryInterval;
    this._msdpConnectionRetryIntervalVariable = config.msdpConnectionRetryIntervalVariable;
    this._msdpGroups.internalValue = config.msdpGroups;
    this._msdpOriginatorId = config.msdpOriginatorId;
    this._msdpOriginatorIdVariable = config.msdpOriginatorIdVariable;
    this._name = config.name;
    this._pimBsrCandidates.internalValue = config.pimBsrCandidates;
    this._pimBsrRpCandidates.internalValue = config.pimBsrRpCandidates;
    this._pimInterfaces.internalValue = config.pimInterfaces;
    this._pimSourceSpecificMulticastAccessList = config.pimSourceSpecificMulticastAccessList;
    this._pimSourceSpecificMulticastAccessListVariable = config.pimSourceSpecificMulticastAccessListVariable;
    this._pimSourceSpecificMulticastEnable = config.pimSourceSpecificMulticastEnable;
    this._pimSptThreshold = config.pimSptThreshold;
    this._pimSptThresholdVariable = config.pimSptThresholdVariable;
    this._sptOnly = config.sptOnly;
    this._sptOnlyVariable = config.sptOnlyVariable;
    this._staticRpAddresses.internalValue = config.staticRpAddresses;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_rp_announces - computed: false, optional: true, required: false
  private _autoRpAnnounces = new ServiceMulticastFeatureAutoRpAnnouncesList(this, "auto_rp_announces", false);
  public get autoRpAnnounces() {
    return this._autoRpAnnounces;
  }
  public putAutoRpAnnounces(value: ServiceMulticastFeatureAutoRpAnnounces[] | cdktf.IResolvable) {
    this._autoRpAnnounces.internalValue = value;
  }
  public resetAutoRpAnnounces() {
    this._autoRpAnnounces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRpAnnouncesInput() {
    return this._autoRpAnnounces.internalValue;
  }

  // auto_rp_discoveries - computed: false, optional: true, required: false
  private _autoRpDiscoveries = new ServiceMulticastFeatureAutoRpDiscoveriesList(this, "auto_rp_discoveries", false);
  public get autoRpDiscoveries() {
    return this._autoRpDiscoveries;
  }
  public putAutoRpDiscoveries(value: ServiceMulticastFeatureAutoRpDiscoveries[] | cdktf.IResolvable) {
    this._autoRpDiscoveries.internalValue = value;
  }
  public resetAutoRpDiscoveries() {
    this._autoRpDiscoveries.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRpDiscoveriesInput() {
    return this._autoRpDiscoveries.internalValue;
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

  // enable_auto_rp - computed: false, optional: true, required: false
  private _enableAutoRp?: boolean | cdktf.IResolvable; 
  public get enableAutoRp() {
    return this.getBooleanAttribute('enable_auto_rp');
  }
  public set enableAutoRp(value: boolean | cdktf.IResolvable) {
    this._enableAutoRp = value;
  }
  public resetEnableAutoRp() {
    this._enableAutoRp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoRpInput() {
    return this._enableAutoRp;
  }

  // enable_auto_rp_variable - computed: false, optional: true, required: false
  private _enableAutoRpVariable?: string; 
  public get enableAutoRpVariable() {
    return this.getStringAttribute('enable_auto_rp_variable');
  }
  public set enableAutoRpVariable(value: string) {
    this._enableAutoRpVariable = value;
  }
  public resetEnableAutoRpVariable() {
    this._enableAutoRpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutoRpVariableInput() {
    return this._enableAutoRpVariable;
  }

  // feature_profile_id - computed: false, optional: false, required: true
  private _featureProfileId?: string; 
  public get featureProfileId() {
    return this.getStringAttribute('feature_profile_id');
  }
  public set featureProfileId(value: string) {
    this._featureProfileId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureProfileIdInput() {
    return this._featureProfileId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // igmp_interfaces - computed: false, optional: true, required: false
  private _igmpInterfaces = new ServiceMulticastFeatureIgmpInterfacesList(this, "igmp_interfaces", false);
  public get igmpInterfaces() {
    return this._igmpInterfaces;
  }
  public putIgmpInterfaces(value: ServiceMulticastFeatureIgmpInterfaces[] | cdktf.IResolvable) {
    this._igmpInterfaces.internalValue = value;
  }
  public resetIgmpInterfaces() {
    this._igmpInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get igmpInterfacesInput() {
    return this._igmpInterfaces.internalValue;
  }

  // local_replicator - computed: false, optional: true, required: false
  private _localReplicator?: boolean | cdktf.IResolvable; 
  public get localReplicator() {
    return this.getBooleanAttribute('local_replicator');
  }
  public set localReplicator(value: boolean | cdktf.IResolvable) {
    this._localReplicator = value;
  }
  public resetLocalReplicator() {
    this._localReplicator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localReplicatorInput() {
    return this._localReplicator;
  }

  // local_replicator_threshold - computed: false, optional: true, required: false
  private _localReplicatorThreshold?: number; 
  public get localReplicatorThreshold() {
    return this.getNumberAttribute('local_replicator_threshold');
  }
  public set localReplicatorThreshold(value: number) {
    this._localReplicatorThreshold = value;
  }
  public resetLocalReplicatorThreshold() {
    this._localReplicatorThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localReplicatorThresholdInput() {
    return this._localReplicatorThreshold;
  }

  // local_replicator_threshold_variable - computed: false, optional: true, required: false
  private _localReplicatorThresholdVariable?: string; 
  public get localReplicatorThresholdVariable() {
    return this.getStringAttribute('local_replicator_threshold_variable');
  }
  public set localReplicatorThresholdVariable(value: string) {
    this._localReplicatorThresholdVariable = value;
  }
  public resetLocalReplicatorThresholdVariable() {
    this._localReplicatorThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localReplicatorThresholdVariableInput() {
    return this._localReplicatorThresholdVariable;
  }

  // local_replicator_variable - computed: false, optional: true, required: false
  private _localReplicatorVariable?: string; 
  public get localReplicatorVariable() {
    return this.getStringAttribute('local_replicator_variable');
  }
  public set localReplicatorVariable(value: string) {
    this._localReplicatorVariable = value;
  }
  public resetLocalReplicatorVariable() {
    this._localReplicatorVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localReplicatorVariableInput() {
    return this._localReplicatorVariable;
  }

  // msdp_connection_retry_interval - computed: false, optional: true, required: false
  private _msdpConnectionRetryInterval?: number; 
  public get msdpConnectionRetryInterval() {
    return this.getNumberAttribute('msdp_connection_retry_interval');
  }
  public set msdpConnectionRetryInterval(value: number) {
    this._msdpConnectionRetryInterval = value;
  }
  public resetMsdpConnectionRetryInterval() {
    this._msdpConnectionRetryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpConnectionRetryIntervalInput() {
    return this._msdpConnectionRetryInterval;
  }

  // msdp_connection_retry_interval_variable - computed: false, optional: true, required: false
  private _msdpConnectionRetryIntervalVariable?: string; 
  public get msdpConnectionRetryIntervalVariable() {
    return this.getStringAttribute('msdp_connection_retry_interval_variable');
  }
  public set msdpConnectionRetryIntervalVariable(value: string) {
    this._msdpConnectionRetryIntervalVariable = value;
  }
  public resetMsdpConnectionRetryIntervalVariable() {
    this._msdpConnectionRetryIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpConnectionRetryIntervalVariableInput() {
    return this._msdpConnectionRetryIntervalVariable;
  }

  // msdp_groups - computed: false, optional: true, required: false
  private _msdpGroups = new ServiceMulticastFeatureMsdpGroupsList(this, "msdp_groups", false);
  public get msdpGroups() {
    return this._msdpGroups;
  }
  public putMsdpGroups(value: ServiceMulticastFeatureMsdpGroups[] | cdktf.IResolvable) {
    this._msdpGroups.internalValue = value;
  }
  public resetMsdpGroups() {
    this._msdpGroups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpGroupsInput() {
    return this._msdpGroups.internalValue;
  }

  // msdp_originator_id - computed: false, optional: true, required: false
  private _msdpOriginatorId?: string; 
  public get msdpOriginatorId() {
    return this.getStringAttribute('msdp_originator_id');
  }
  public set msdpOriginatorId(value: string) {
    this._msdpOriginatorId = value;
  }
  public resetMsdpOriginatorId() {
    this._msdpOriginatorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpOriginatorIdInput() {
    return this._msdpOriginatorId;
  }

  // msdp_originator_id_variable - computed: false, optional: true, required: false
  private _msdpOriginatorIdVariable?: string; 
  public get msdpOriginatorIdVariable() {
    return this.getStringAttribute('msdp_originator_id_variable');
  }
  public set msdpOriginatorIdVariable(value: string) {
    this._msdpOriginatorIdVariable = value;
  }
  public resetMsdpOriginatorIdVariable() {
    this._msdpOriginatorIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get msdpOriginatorIdVariableInput() {
    return this._msdpOriginatorIdVariable;
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

  // pim_bsr_candidates - computed: false, optional: true, required: false
  private _pimBsrCandidates = new ServiceMulticastFeaturePimBsrCandidatesList(this, "pim_bsr_candidates", false);
  public get pimBsrCandidates() {
    return this._pimBsrCandidates;
  }
  public putPimBsrCandidates(value: ServiceMulticastFeaturePimBsrCandidates[] | cdktf.IResolvable) {
    this._pimBsrCandidates.internalValue = value;
  }
  public resetPimBsrCandidates() {
    this._pimBsrCandidates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimBsrCandidatesInput() {
    return this._pimBsrCandidates.internalValue;
  }

  // pim_bsr_rp_candidates - computed: false, optional: true, required: false
  private _pimBsrRpCandidates = new ServiceMulticastFeaturePimBsrRpCandidatesList(this, "pim_bsr_rp_candidates", false);
  public get pimBsrRpCandidates() {
    return this._pimBsrRpCandidates;
  }
  public putPimBsrRpCandidates(value: ServiceMulticastFeaturePimBsrRpCandidates[] | cdktf.IResolvable) {
    this._pimBsrRpCandidates.internalValue = value;
  }
  public resetPimBsrRpCandidates() {
    this._pimBsrRpCandidates.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimBsrRpCandidatesInput() {
    return this._pimBsrRpCandidates.internalValue;
  }

  // pim_interfaces - computed: false, optional: true, required: false
  private _pimInterfaces = new ServiceMulticastFeaturePimInterfacesList(this, "pim_interfaces", false);
  public get pimInterfaces() {
    return this._pimInterfaces;
  }
  public putPimInterfaces(value: ServiceMulticastFeaturePimInterfaces[] | cdktf.IResolvable) {
    this._pimInterfaces.internalValue = value;
  }
  public resetPimInterfaces() {
    this._pimInterfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimInterfacesInput() {
    return this._pimInterfaces.internalValue;
  }

  // pim_source_specific_multicast_access_list - computed: false, optional: true, required: false
  private _pimSourceSpecificMulticastAccessList?: string; 
  public get pimSourceSpecificMulticastAccessList() {
    return this.getStringAttribute('pim_source_specific_multicast_access_list');
  }
  public set pimSourceSpecificMulticastAccessList(value: string) {
    this._pimSourceSpecificMulticastAccessList = value;
  }
  public resetPimSourceSpecificMulticastAccessList() {
    this._pimSourceSpecificMulticastAccessList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSourceSpecificMulticastAccessListInput() {
    return this._pimSourceSpecificMulticastAccessList;
  }

  // pim_source_specific_multicast_access_list_variable - computed: false, optional: true, required: false
  private _pimSourceSpecificMulticastAccessListVariable?: string; 
  public get pimSourceSpecificMulticastAccessListVariable() {
    return this.getStringAttribute('pim_source_specific_multicast_access_list_variable');
  }
  public set pimSourceSpecificMulticastAccessListVariable(value: string) {
    this._pimSourceSpecificMulticastAccessListVariable = value;
  }
  public resetPimSourceSpecificMulticastAccessListVariable() {
    this._pimSourceSpecificMulticastAccessListVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSourceSpecificMulticastAccessListVariableInput() {
    return this._pimSourceSpecificMulticastAccessListVariable;
  }

  // pim_source_specific_multicast_enable - computed: false, optional: false, required: true
  private _pimSourceSpecificMulticastEnable?: boolean | cdktf.IResolvable; 
  public get pimSourceSpecificMulticastEnable() {
    return this.getBooleanAttribute('pim_source_specific_multicast_enable');
  }
  public set pimSourceSpecificMulticastEnable(value: boolean | cdktf.IResolvable) {
    this._pimSourceSpecificMulticastEnable = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSourceSpecificMulticastEnableInput() {
    return this._pimSourceSpecificMulticastEnable;
  }

  // pim_spt_threshold - computed: false, optional: true, required: false
  private _pimSptThreshold?: string; 
  public get pimSptThreshold() {
    return this.getStringAttribute('pim_spt_threshold');
  }
  public set pimSptThreshold(value: string) {
    this._pimSptThreshold = value;
  }
  public resetPimSptThreshold() {
    this._pimSptThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSptThresholdInput() {
    return this._pimSptThreshold;
  }

  // pim_spt_threshold_variable - computed: false, optional: true, required: false
  private _pimSptThresholdVariable?: string; 
  public get pimSptThresholdVariable() {
    return this.getStringAttribute('pim_spt_threshold_variable');
  }
  public set pimSptThresholdVariable(value: string) {
    this._pimSptThresholdVariable = value;
  }
  public resetPimSptThresholdVariable() {
    this._pimSptThresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimSptThresholdVariableInput() {
    return this._pimSptThresholdVariable;
  }

  // spt_only - computed: false, optional: true, required: false
  private _sptOnly?: boolean | cdktf.IResolvable; 
  public get sptOnly() {
    return this.getBooleanAttribute('spt_only');
  }
  public set sptOnly(value: boolean | cdktf.IResolvable) {
    this._sptOnly = value;
  }
  public resetSptOnly() {
    this._sptOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptOnlyInput() {
    return this._sptOnly;
  }

  // spt_only_variable - computed: false, optional: true, required: false
  private _sptOnlyVariable?: string; 
  public get sptOnlyVariable() {
    return this.getStringAttribute('spt_only_variable');
  }
  public set sptOnlyVariable(value: string) {
    this._sptOnlyVariable = value;
  }
  public resetSptOnlyVariable() {
    this._sptOnlyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sptOnlyVariableInput() {
    return this._sptOnlyVariable;
  }

  // static_rp_addresses - computed: false, optional: true, required: false
  private _staticRpAddresses = new ServiceMulticastFeatureStaticRpAddressesList(this, "static_rp_addresses", false);
  public get staticRpAddresses() {
    return this._staticRpAddresses;
  }
  public putStaticRpAddresses(value: ServiceMulticastFeatureStaticRpAddresses[] | cdktf.IResolvable) {
    this._staticRpAddresses.internalValue = value;
  }
  public resetStaticRpAddresses() {
    this._staticRpAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRpAddressesInput() {
    return this._staticRpAddresses.internalValue;
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
      auto_rp_announces: cdktf.listMapper(serviceMulticastFeatureAutoRpAnnouncesToTerraform, false)(this._autoRpAnnounces.internalValue),
      auto_rp_discoveries: cdktf.listMapper(serviceMulticastFeatureAutoRpDiscoveriesToTerraform, false)(this._autoRpDiscoveries.internalValue),
      description: cdktf.stringToTerraform(this._description),
      enable_auto_rp: cdktf.booleanToTerraform(this._enableAutoRp),
      enable_auto_rp_variable: cdktf.stringToTerraform(this._enableAutoRpVariable),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      igmp_interfaces: cdktf.listMapper(serviceMulticastFeatureIgmpInterfacesToTerraform, false)(this._igmpInterfaces.internalValue),
      local_replicator: cdktf.booleanToTerraform(this._localReplicator),
      local_replicator_threshold: cdktf.numberToTerraform(this._localReplicatorThreshold),
      local_replicator_threshold_variable: cdktf.stringToTerraform(this._localReplicatorThresholdVariable),
      local_replicator_variable: cdktf.stringToTerraform(this._localReplicatorVariable),
      msdp_connection_retry_interval: cdktf.numberToTerraform(this._msdpConnectionRetryInterval),
      msdp_connection_retry_interval_variable: cdktf.stringToTerraform(this._msdpConnectionRetryIntervalVariable),
      msdp_groups: cdktf.listMapper(serviceMulticastFeatureMsdpGroupsToTerraform, false)(this._msdpGroups.internalValue),
      msdp_originator_id: cdktf.stringToTerraform(this._msdpOriginatorId),
      msdp_originator_id_variable: cdktf.stringToTerraform(this._msdpOriginatorIdVariable),
      name: cdktf.stringToTerraform(this._name),
      pim_bsr_candidates: cdktf.listMapper(serviceMulticastFeaturePimBsrCandidatesToTerraform, false)(this._pimBsrCandidates.internalValue),
      pim_bsr_rp_candidates: cdktf.listMapper(serviceMulticastFeaturePimBsrRpCandidatesToTerraform, false)(this._pimBsrRpCandidates.internalValue),
      pim_interfaces: cdktf.listMapper(serviceMulticastFeaturePimInterfacesToTerraform, false)(this._pimInterfaces.internalValue),
      pim_source_specific_multicast_access_list: cdktf.stringToTerraform(this._pimSourceSpecificMulticastAccessList),
      pim_source_specific_multicast_access_list_variable: cdktf.stringToTerraform(this._pimSourceSpecificMulticastAccessListVariable),
      pim_source_specific_multicast_enable: cdktf.booleanToTerraform(this._pimSourceSpecificMulticastEnable),
      pim_spt_threshold: cdktf.stringToTerraform(this._pimSptThreshold),
      pim_spt_threshold_variable: cdktf.stringToTerraform(this._pimSptThresholdVariable),
      spt_only: cdktf.booleanToTerraform(this._sptOnly),
      spt_only_variable: cdktf.stringToTerraform(this._sptOnlyVariable),
      static_rp_addresses: cdktf.listMapper(serviceMulticastFeatureStaticRpAddressesToTerraform, false)(this._staticRpAddresses.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_rp_announces: {
        value: cdktf.listMapperHcl(serviceMulticastFeatureAutoRpAnnouncesToHclTerraform, false)(this._autoRpAnnounces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeatureAutoRpAnnouncesList",
      },
      auto_rp_discoveries: {
        value: cdktf.listMapperHcl(serviceMulticastFeatureAutoRpDiscoveriesToHclTerraform, false)(this._autoRpDiscoveries.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeatureAutoRpDiscoveriesList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_auto_rp: {
        value: cdktf.booleanToHclTerraform(this._enableAutoRp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_auto_rp_variable: {
        value: cdktf.stringToHclTerraform(this._enableAutoRpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      igmp_interfaces: {
        value: cdktf.listMapperHcl(serviceMulticastFeatureIgmpInterfacesToHclTerraform, false)(this._igmpInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeatureIgmpInterfacesList",
      },
      local_replicator: {
        value: cdktf.booleanToHclTerraform(this._localReplicator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      local_replicator_threshold: {
        value: cdktf.numberToHclTerraform(this._localReplicatorThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      local_replicator_threshold_variable: {
        value: cdktf.stringToHclTerraform(this._localReplicatorThresholdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_replicator_variable: {
        value: cdktf.stringToHclTerraform(this._localReplicatorVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msdp_connection_retry_interval: {
        value: cdktf.numberToHclTerraform(this._msdpConnectionRetryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      msdp_connection_retry_interval_variable: {
        value: cdktf.stringToHclTerraform(this._msdpConnectionRetryIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msdp_groups: {
        value: cdktf.listMapperHcl(serviceMulticastFeatureMsdpGroupsToHclTerraform, false)(this._msdpGroups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeatureMsdpGroupsList",
      },
      msdp_originator_id: {
        value: cdktf.stringToHclTerraform(this._msdpOriginatorId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      msdp_originator_id_variable: {
        value: cdktf.stringToHclTerraform(this._msdpOriginatorIdVariable),
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
      pim_bsr_candidates: {
        value: cdktf.listMapperHcl(serviceMulticastFeaturePimBsrCandidatesToHclTerraform, false)(this._pimBsrCandidates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeaturePimBsrCandidatesList",
      },
      pim_bsr_rp_candidates: {
        value: cdktf.listMapperHcl(serviceMulticastFeaturePimBsrRpCandidatesToHclTerraform, false)(this._pimBsrRpCandidates.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeaturePimBsrRpCandidatesList",
      },
      pim_interfaces: {
        value: cdktf.listMapperHcl(serviceMulticastFeaturePimInterfacesToHclTerraform, false)(this._pimInterfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeaturePimInterfacesList",
      },
      pim_source_specific_multicast_access_list: {
        value: cdktf.stringToHclTerraform(this._pimSourceSpecificMulticastAccessList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim_source_specific_multicast_access_list_variable: {
        value: cdktf.stringToHclTerraform(this._pimSourceSpecificMulticastAccessListVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim_source_specific_multicast_enable: {
        value: cdktf.booleanToHclTerraform(this._pimSourceSpecificMulticastEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pim_spt_threshold: {
        value: cdktf.stringToHclTerraform(this._pimSptThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim_spt_threshold_variable: {
        value: cdktf.stringToHclTerraform(this._pimSptThresholdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spt_only: {
        value: cdktf.booleanToHclTerraform(this._sptOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      spt_only_variable: {
        value: cdktf.stringToHclTerraform(this._sptOnlyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_rp_addresses: {
        value: cdktf.listMapperHcl(serviceMulticastFeatureStaticRpAddressesToHclTerraform, false)(this._staticRpAddresses.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceMulticastFeatureStaticRpAddressesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
