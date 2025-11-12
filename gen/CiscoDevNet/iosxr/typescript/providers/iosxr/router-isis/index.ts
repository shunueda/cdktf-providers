// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterIsisConfig extends cdktf.TerraformMetaArguments {
  /**
  * Affinity map configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#affinity_maps RouterIsis#affinity_maps}
  */
  readonly affinityMaps?: RouterIsisAffinityMaps[] | cdktf.IResolvable;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#delete_mode RouterIsis#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#device RouterIsis#device}
  */
  readonly device?: string;
  /**
  * Distribute the link-state database to external services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#distribute_link_state RouterIsis#distribute_link_state}
  */
  readonly distributeLinkState?: boolean | cdktf.IResolvable;
  /**
  * Set distribution process instance identifier
  *   - Range: `32`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#distribute_link_state_instance_id RouterIsis#distribute_link_state_instance_id}
  */
  readonly distributeLinkStateInstanceId?: number;
  /**
  * Set distribution for one level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#distribute_link_state_level RouterIsis#distribute_link_state_level}
  */
  readonly distributeLinkStateLevel?: number;
  /**
  * Set throttle update in seconds
  *   - Range: `1`-`20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#distribute_link_state_throttle RouterIsis#distribute_link_state_throttle}
  */
  readonly distributeLinkStateThrottle?: number;
  /**
  * Flex Algorithm definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#flex_algos RouterIsis#flex_algos}
  */
  readonly flexAlgos?: RouterIsisFlexAlgos[] | cdktf.IResolvable;
  /**
  * Enter the IS-IS interface configuration submode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#interfaces RouterIsis#interfaces}
  */
  readonly interfaces?: RouterIsisInterfaces[] | cdktf.IResolvable;
  /**
  * Area type (level)
  *   - Choices: `level-1`, `level-1-2`, `level-2-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#is_type RouterIsis#is_type}
  */
  readonly isType?: string;
  /**
  * Enable logging adjacency state changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#log_adjacency_changes RouterIsis#log_adjacency_changes}
  */
  readonly logAdjacencyChanges?: boolean | cdktf.IResolvable;
  /**
  * Initial delay before generating an LSP [50]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_gen_interval_initial_wait RouterIsis#lsp_gen_interval_initial_wait}
  */
  readonly lspGenIntervalInitialWait?: number;
  /**
  * Maximum delay before generating an LSP [5000]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_gen_interval_maximum_wait RouterIsis#lsp_gen_interval_maximum_wait}
  */
  readonly lspGenIntervalMaximumWait?: number;
  /**
  * Secondary delay before generating an LSP [200]
  *   - Range: `0`-`120000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_gen_interval_secondary_wait RouterIsis#lsp_gen_interval_secondary_wait}
  */
  readonly lspGenIntervalSecondaryWait?: number;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_accept_encrypted RouterIsis#lsp_password_accept_encrypted}
  */
  readonly lspPasswordAcceptEncrypted?: string;
  /**
  * Enable purge originator identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_hmac_md5_enable_poi RouterIsis#lsp_password_hmac_md5_enable_poi}
  */
  readonly lspPasswordHmacMd5EnablePoi?: boolean | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_hmac_md5_encrypted RouterIsis#lsp_password_hmac_md5_encrypted}
  */
  readonly lspPasswordHmacMd5Encrypted?: string;
  /**
  * specify SNP packets authentication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_hmac_md5_send_only RouterIsis#lsp_password_hmac_md5_send_only}
  */
  readonly lspPasswordHmacMd5SendOnly?: boolean | cdktf.IResolvable;
  /**
  * Authenticate outgoing SNPs, no check on incoming SNPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_hmac_md5_snp_send_only RouterIsis#lsp_password_hmac_md5_snp_send_only}
  */
  readonly lspPasswordHmacMd5SnpSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Specifies a Key Chain name will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_keychain RouterIsis#lsp_password_keychain}
  */
  readonly lspPasswordKeychain?: string;
  /**
  * Enable purge originator identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_keychain_enable_poi RouterIsis#lsp_password_keychain_enable_poi}
  */
  readonly lspPasswordKeychainEnablePoi?: boolean | cdktf.IResolvable;
  /**
  * specify SNP packets authentication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_keychain_send_only RouterIsis#lsp_password_keychain_send_only}
  */
  readonly lspPasswordKeychainSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Authenticate outgoing SNPs, no check on incoming SNPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_keychain_snp_send_only RouterIsis#lsp_password_keychain_snp_send_only}
  */
  readonly lspPasswordKeychainSnpSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Set lsp-password for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_levels RouterIsis#lsp_password_levels}
  */
  readonly lspPasswordLevels?: RouterIsisLspPasswordLevels[] | cdktf.IResolvable;
  /**
  * Enable purge originator identification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_text_enable_poi RouterIsis#lsp_password_text_enable_poi}
  */
  readonly lspPasswordTextEnablePoi?: boolean | cdktf.IResolvable;
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_text_encrypted RouterIsis#lsp_password_text_encrypted}
  */
  readonly lspPasswordTextEncrypted?: string;
  /**
  * specify SNP packets authentication mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_text_send_only RouterIsis#lsp_password_text_send_only}
  */
  readonly lspPasswordTextSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Authenticate outgoing SNPs, no check on incoming SNPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_password_text_snp_send_only RouterIsis#lsp_password_text_snp_send_only}
  */
  readonly lspPasswordTextSnpSendOnly?: boolean | cdktf.IResolvable;
  /**
  * Set LSP refresh interval
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#lsp_refresh_interval RouterIsis#lsp_refresh_interval}
  */
  readonly lspRefreshInterval?: number;
  /**
  * Set maximum LSP lifetime
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#max_lsp_lifetime RouterIsis#max_lsp_lifetime}
  */
  readonly maxLspLifetime?: number;
  /**
  * A Network Entity Title (NET) for this process
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nets RouterIsis#nets}
  */
  readonly nets?: RouterIsisNets[] | cdktf.IResolvable;
  /**
  * Checkpoint NSF restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nsf_cisco RouterIsis#nsf_cisco}
  */
  readonly nsfCisco?: boolean | cdktf.IResolvable;
  /**
  * IETF NSF restart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nsf_ietf RouterIsis#nsf_ietf}
  */
  readonly nsfIetf?: boolean | cdktf.IResolvable;
  /**
  * # of times T1 can expire waiting for the restart ACK
  *   - Range: `1`-`10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nsf_interface_expires RouterIsis#nsf_interface_expires}
  */
  readonly nsfInterfaceExpires?: number;
  /**
  * Timer used to wait for a restart ACK (seconds)
  *   - Range: `1`-`20`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nsf_interface_timer RouterIsis#nsf_interface_timer}
  */
  readonly nsfInterfaceTimer?: number;
  /**
  * Maximum route lifetime following restart (seconds)
  *   - Range: `5`-`300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nsf_lifetime RouterIsis#nsf_lifetime}
  */
  readonly nsfLifetime?: number;
  /**
  * Enable NSR
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#nsr RouterIsis#nsr}
  */
  readonly nsr?: boolean | cdktf.IResolvable;
  /**
  * Process ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#process_id RouterIsis#process_id}
  */
  readonly processId: string;
  /**
  * Signal other routers not to use us in SPF
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#set_overload_bit RouterIsis#set_overload_bit}
  */
  readonly setOverloadBit?: boolean | cdktf.IResolvable;
  /**
  * If overload-bit set advertise IP prefixes learned from other protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#set_overload_bit_advertise_external RouterIsis#set_overload_bit_advertise_external}
  */
  readonly setOverloadBitAdvertiseExternal?: boolean | cdktf.IResolvable;
  /**
  * If overload-bit set advertise IP prefixes learned from another ISIS level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#set_overload_bit_advertise_interlevel RouterIsis#set_overload_bit_advertise_interlevel}
  */
  readonly setOverloadBitAdvertiseInterlevel?: boolean | cdktf.IResolvable;
  /**
  * Set overload-bit for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#set_overload_bit_levels RouterIsis#set_overload_bit_levels}
  */
  readonly setOverloadBitLevels?: RouterIsisSetOverloadBitLevels[] | cdktf.IResolvable;
  /**
  * Time in seconds to advertise ourself as overloaded after reboot
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#set_overload_bit_on_startup_time_to_advertise RouterIsis#set_overload_bit_on_startup_time_to_advertise}
  */
  readonly setOverloadBitOnStartupTimeToAdvertise?: number;
  /**
  * Set overload bit on startup until BGP signals convergence, or timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#set_overload_bit_on_startup_wait_for_bgp RouterIsis#set_overload_bit_on_startup_wait_for_bgp}
  */
  readonly setOverloadBitOnStartupWaitForBgp?: boolean | cdktf.IResolvable;
}
export interface RouterIsisAffinityMaps {
  /**
  * Bit position for affinity attribute value
  *   - Range: `0`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#bit_position RouterIsis#bit_position}
  */
  readonly bitPosition: number;
  /**
  * Affinity attribute name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#name RouterIsis#name}
  */
  readonly name: string;
}

export function routerIsisAffinityMapsToTerraform(struct?: RouterIsisAffinityMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_position: cdktf.numberToTerraform(struct!.bitPosition),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function routerIsisAffinityMapsToHclTerraform(struct?: RouterIsisAffinityMaps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_position: {
      value: cdktf.numberToHclTerraform(struct!.bitPosition),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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

export class RouterIsisAffinityMapsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisAffinityMaps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitPosition !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitPosition = this._bitPosition;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisAffinityMaps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bitPosition = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bitPosition = value.bitPosition;
      this._name = value.name;
    }
  }

  // bit_position - computed: false, optional: false, required: true
  private _bitPosition?: number; 
  public get bitPosition() {
    return this.getNumberAttribute('bit_position');
  }
  public set bitPosition(value: number) {
    this._bitPosition = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitPositionInput() {
    return this._bitPosition;
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

export class RouterIsisAffinityMapsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisAffinityMaps[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisAffinityMapsOutputReference {
    return new RouterIsisAffinityMapsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisFlexAlgos {
  /**
  * Advertise the Flex-Algo Definition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#advertise_definition RouterIsis#advertise_definition}
  */
  readonly advertiseDefinition?: boolean | cdktf.IResolvable;
  /**
  * Metric-type used by flex-algo calculation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#metric_type RouterIsis#metric_type}
  */
  readonly metricType?: string;
  /**
  * Algorithm number
  *   - Range: `128`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#number RouterIsis#number}
  */
  readonly number: number;
}

export function routerIsisFlexAlgosToTerraform(struct?: RouterIsisFlexAlgos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_definition: cdktf.booleanToTerraform(struct!.advertiseDefinition),
    metric_type: cdktf.stringToTerraform(struct!.metricType),
    number: cdktf.numberToTerraform(struct!.number),
  }
}


export function routerIsisFlexAlgosToHclTerraform(struct?: RouterIsisFlexAlgos | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_definition: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseDefinition),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    metric_type: {
      value: cdktf.stringToHclTerraform(struct!.metricType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number: {
      value: cdktf.numberToHclTerraform(struct!.number),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisFlexAlgosOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisFlexAlgos | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseDefinition !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseDefinition = this._advertiseDefinition;
    }
    if (this._metricType !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricType = this._metricType;
    }
    if (this._number !== undefined) {
      hasAnyValues = true;
      internalValueResult.number = this._number;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisFlexAlgos | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseDefinition = undefined;
      this._metricType = undefined;
      this._number = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseDefinition = value.advertiseDefinition;
      this._metricType = value.metricType;
      this._number = value.number;
    }
  }

  // advertise_definition - computed: false, optional: true, required: false
  private _advertiseDefinition?: boolean | cdktf.IResolvable; 
  public get advertiseDefinition() {
    return this.getBooleanAttribute('advertise_definition');
  }
  public set advertiseDefinition(value: boolean | cdktf.IResolvable) {
    this._advertiseDefinition = value;
  }
  public resetAdvertiseDefinition() {
    this._advertiseDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseDefinitionInput() {
    return this._advertiseDefinition;
  }

  // metric_type - computed: false, optional: true, required: false
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  public resetMetricType() {
    this._metricType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // number - computed: false, optional: false, required: true
  private _number?: number; 
  public get number() {
    return this.getNumberAttribute('number');
  }
  public set number(value: number) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }
}

export class RouterIsisFlexAlgosList extends cdktf.ComplexList {
  public internalValue? : RouterIsisFlexAlgos[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisFlexAlgosOutputReference {
    return new RouterIsisFlexAlgosOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfacesPriorityLevels {
  /**
  * Set priority for this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#level_number RouterIsis#level_number}
  */
  readonly levelNumber: number;
  /**
  * Set priority for Designated Router election
  *   - Range: `0`-`127`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#priority RouterIsis#priority}
  */
  readonly priority: number;
}

export function routerIsisInterfacesPriorityLevelsToTerraform(struct?: RouterIsisInterfacesPriorityLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    priority: cdktf.numberToTerraform(struct!.priority),
  }
}


export function routerIsisInterfacesPriorityLevelsToHclTerraform(struct?: RouterIsisInterfacesPriorityLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
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

export class RouterIsisInterfacesPriorityLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfacesPriorityLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfacesPriorityLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._levelNumber = undefined;
      this._priority = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._levelNumber = value.levelNumber;
      this._priority = value.priority;
    }
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
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
}

export class RouterIsisInterfacesPriorityLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfacesPriorityLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfacesPriorityLevelsOutputReference {
    return new RouterIsisInterfacesPriorityLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisInterfaces {
  /**
  * Configure circuit type for interface
  *   - Choices: `level-1`, `level-1-2`, `level-2-only`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#circuit_type RouterIsis#circuit_type}
  */
  readonly circuitType?: string;
  /**
  * Add padding to IS-IS hello packets
  *   - Choices: `adaptive`, `always`, `disable`, `sometimes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#hello_padding RouterIsis#hello_padding}
  */
  readonly helloPadding?: string;
  /**
  * Interface to configure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#interface_name RouterIsis#interface_name}
  */
  readonly interfaceName: string;
  /**
  * Treat active LAN interface as point-to-point
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#point_to_point RouterIsis#point_to_point}
  */
  readonly pointToPoint?: boolean | cdktf.IResolvable;
  /**
  * Set priority for one level only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#priority_levels RouterIsis#priority_levels}
  */
  readonly priorityLevels?: RouterIsisInterfacesPriorityLevels[] | cdktf.IResolvable;
  /**
  * Do not establish adjacencies over this interface
  *   - Choices: `passive`, `shutdown`, `suppressed`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#state RouterIsis#state}
  */
  readonly state?: string;
}

export function routerIsisInterfacesToTerraform(struct?: RouterIsisInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    circuit_type: cdktf.stringToTerraform(struct!.circuitType),
    hello_padding: cdktf.stringToTerraform(struct!.helloPadding),
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    point_to_point: cdktf.booleanToTerraform(struct!.pointToPoint),
    priority_levels: cdktf.listMapper(routerIsisInterfacesPriorityLevelsToTerraform, false)(struct!.priorityLevels),
    state: cdktf.stringToTerraform(struct!.state),
  }
}


export function routerIsisInterfacesToHclTerraform(struct?: RouterIsisInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    circuit_type: {
      value: cdktf.stringToHclTerraform(struct!.circuitType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hello_padding: {
      value: cdktf.stringToHclTerraform(struct!.helloPadding),
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
    point_to_point: {
      value: cdktf.booleanToHclTerraform(struct!.pointToPoint),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    priority_levels: {
      value: cdktf.listMapperHcl(routerIsisInterfacesPriorityLevelsToHclTerraform, false)(struct!.priorityLevels),
      isBlock: true,
      type: "list",
      storageClassType: "RouterIsisInterfacesPriorityLevelsList",
    },
    state: {
      value: cdktf.stringToHclTerraform(struct!.state),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._circuitType !== undefined) {
      hasAnyValues = true;
      internalValueResult.circuitType = this._circuitType;
    }
    if (this._helloPadding !== undefined) {
      hasAnyValues = true;
      internalValueResult.helloPadding = this._helloPadding;
    }
    if (this._interfaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfaceName = this._interfaceName;
    }
    if (this._pointToPoint !== undefined) {
      hasAnyValues = true;
      internalValueResult.pointToPoint = this._pointToPoint;
    }
    if (this._priorityLevels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.priorityLevels = this._priorityLevels?.internalValue;
    }
    if (this._state !== undefined) {
      hasAnyValues = true;
      internalValueResult.state = this._state;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._circuitType = undefined;
      this._helloPadding = undefined;
      this._interfaceName = undefined;
      this._pointToPoint = undefined;
      this._priorityLevels.internalValue = undefined;
      this._state = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._circuitType = value.circuitType;
      this._helloPadding = value.helloPadding;
      this._interfaceName = value.interfaceName;
      this._pointToPoint = value.pointToPoint;
      this._priorityLevels.internalValue = value.priorityLevels;
      this._state = value.state;
    }
  }

  // circuit_type - computed: false, optional: true, required: false
  private _circuitType?: string; 
  public get circuitType() {
    return this.getStringAttribute('circuit_type');
  }
  public set circuitType(value: string) {
    this._circuitType = value;
  }
  public resetCircuitType() {
    this._circuitType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get circuitTypeInput() {
    return this._circuitType;
  }

  // hello_padding - computed: false, optional: true, required: false
  private _helloPadding?: string; 
  public get helloPadding() {
    return this.getStringAttribute('hello_padding');
  }
  public set helloPadding(value: string) {
    this._helloPadding = value;
  }
  public resetHelloPadding() {
    this._helloPadding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloPaddingInput() {
    return this._helloPadding;
  }

  // interface_name - computed: false, optional: false, required: true
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // point_to_point - computed: false, optional: true, required: false
  private _pointToPoint?: boolean | cdktf.IResolvable; 
  public get pointToPoint() {
    return this.getBooleanAttribute('point_to_point');
  }
  public set pointToPoint(value: boolean | cdktf.IResolvable) {
    this._pointToPoint = value;
  }
  public resetPointToPoint() {
    this._pointToPoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pointToPointInput() {
    return this._pointToPoint;
  }

  // priority_levels - computed: false, optional: true, required: false
  private _priorityLevels = new RouterIsisInterfacesPriorityLevelsList(this, "priority_levels", false);
  public get priorityLevels() {
    return this._priorityLevels;
  }
  public putPriorityLevels(value: RouterIsisInterfacesPriorityLevels[] | cdktf.IResolvable) {
    this._priorityLevels.internalValue = value;
  }
  public resetPriorityLevels() {
    this._priorityLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityLevelsInput() {
    return this._priorityLevels.internalValue;
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
}

export class RouterIsisInterfacesList extends cdktf.ComplexList {
  public internalValue? : RouterIsisInterfaces[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisInterfacesOutputReference {
    return new RouterIsisInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisLspPasswordLevels {
  /**
  * Specifies a password will follow
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#encrypted RouterIsis#encrypted}
  */
  readonly encrypted: string;
  /**
  * Set lsp-password for LSPs/SNPs at this level only
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#level_number RouterIsis#level_number}
  */
  readonly levelNumber: number;
}

export function routerIsisLspPasswordLevelsToTerraform(struct?: RouterIsisLspPasswordLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted: cdktf.stringToTerraform(struct!.encrypted),
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
  }
}


export function routerIsisLspPasswordLevelsToHclTerraform(struct?: RouterIsisLspPasswordLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted: {
      value: cdktf.stringToHclTerraform(struct!.encrypted),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisLspPasswordLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisLspPasswordLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encrypted !== undefined) {
      hasAnyValues = true;
      internalValueResult.encrypted = this._encrypted;
    }
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisLspPasswordLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encrypted = undefined;
      this._levelNumber = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encrypted = value.encrypted;
      this._levelNumber = value.levelNumber;
    }
  }

  // encrypted - computed: false, optional: false, required: true
  private _encrypted?: string; 
  public get encrypted() {
    return this.getStringAttribute('encrypted');
  }
  public set encrypted(value: string) {
    this._encrypted = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedInput() {
    return this._encrypted;
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }
}

export class RouterIsisLspPasswordLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisLspPasswordLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisLspPasswordLevelsOutputReference {
    return new RouterIsisLspPasswordLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisNets {
  /**
  * NET (XX.XXXX. ... .XXXX.XX)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#net_id RouterIsis#net_id}
  */
  readonly netId: string;
}

export function routerIsisNetsToTerraform(struct?: RouterIsisNets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    net_id: cdktf.stringToTerraform(struct!.netId),
  }
}


export function routerIsisNetsToHclTerraform(struct?: RouterIsisNets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    net_id: {
      value: cdktf.stringToHclTerraform(struct!.netId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisNetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisNets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._netId !== undefined) {
      hasAnyValues = true;
      internalValueResult.netId = this._netId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisNets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._netId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._netId = value.netId;
    }
  }

  // net_id - computed: false, optional: false, required: true
  private _netId?: string; 
  public get netId() {
    return this.getStringAttribute('net_id');
  }
  public set netId(value: string) {
    this._netId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get netIdInput() {
    return this._netId;
  }
}

export class RouterIsisNetsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisNets[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisNetsOutputReference {
    return new RouterIsisNetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RouterIsisSetOverloadBitLevels {
  /**
  * If overload-bit set advertise IP prefixes learned from other protocols
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#advertise_external RouterIsis#advertise_external}
  */
  readonly advertiseExternal?: boolean | cdktf.IResolvable;
  /**
  * If overload-bit set advertise IP prefixes learned from another ISIS level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#advertise_interlevel RouterIsis#advertise_interlevel}
  */
  readonly advertiseInterlevel?: boolean | cdktf.IResolvable;
  /**
  * Level
  *   - Range: `1`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#level_number RouterIsis#level_number}
  */
  readonly levelNumber: number;
  /**
  * Time in seconds to advertise ourself as overloaded after reboot
  *   - Range: `5`-`86400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#on_startup_time_to_advertise RouterIsis#on_startup_time_to_advertise}
  */
  readonly onStartupTimeToAdvertise?: number;
  /**
  * Set overload bit on startup until BGP signals convergence, or timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#on_startup_wait_for_bgp RouterIsis#on_startup_wait_for_bgp}
  */
  readonly onStartupWaitForBgp?: boolean | cdktf.IResolvable;
}

export function routerIsisSetOverloadBitLevelsToTerraform(struct?: RouterIsisSetOverloadBitLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    advertise_external: cdktf.booleanToTerraform(struct!.advertiseExternal),
    advertise_interlevel: cdktf.booleanToTerraform(struct!.advertiseInterlevel),
    level_number: cdktf.numberToTerraform(struct!.levelNumber),
    on_startup_time_to_advertise: cdktf.numberToTerraform(struct!.onStartupTimeToAdvertise),
    on_startup_wait_for_bgp: cdktf.booleanToTerraform(struct!.onStartupWaitForBgp),
  }
}


export function routerIsisSetOverloadBitLevelsToHclTerraform(struct?: RouterIsisSetOverloadBitLevels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    advertise_external: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseExternal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    advertise_interlevel: {
      value: cdktf.booleanToHclTerraform(struct!.advertiseInterlevel),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    level_number: {
      value: cdktf.numberToHclTerraform(struct!.levelNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_startup_time_to_advertise: {
      value: cdktf.numberToHclTerraform(struct!.onStartupTimeToAdvertise),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_startup_wait_for_bgp: {
      value: cdktf.booleanToHclTerraform(struct!.onStartupWaitForBgp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RouterIsisSetOverloadBitLevelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RouterIsisSetOverloadBitLevels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._advertiseExternal !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseExternal = this._advertiseExternal;
    }
    if (this._advertiseInterlevel !== undefined) {
      hasAnyValues = true;
      internalValueResult.advertiseInterlevel = this._advertiseInterlevel;
    }
    if (this._levelNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.levelNumber = this._levelNumber;
    }
    if (this._onStartupTimeToAdvertise !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStartupTimeToAdvertise = this._onStartupTimeToAdvertise;
    }
    if (this._onStartupWaitForBgp !== undefined) {
      hasAnyValues = true;
      internalValueResult.onStartupWaitForBgp = this._onStartupWaitForBgp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RouterIsisSetOverloadBitLevels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._advertiseExternal = undefined;
      this._advertiseInterlevel = undefined;
      this._levelNumber = undefined;
      this._onStartupTimeToAdvertise = undefined;
      this._onStartupWaitForBgp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._advertiseExternal = value.advertiseExternal;
      this._advertiseInterlevel = value.advertiseInterlevel;
      this._levelNumber = value.levelNumber;
      this._onStartupTimeToAdvertise = value.onStartupTimeToAdvertise;
      this._onStartupWaitForBgp = value.onStartupWaitForBgp;
    }
  }

  // advertise_external - computed: false, optional: true, required: false
  private _advertiseExternal?: boolean | cdktf.IResolvable; 
  public get advertiseExternal() {
    return this.getBooleanAttribute('advertise_external');
  }
  public set advertiseExternal(value: boolean | cdktf.IResolvable) {
    this._advertiseExternal = value;
  }
  public resetAdvertiseExternal() {
    this._advertiseExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseExternalInput() {
    return this._advertiseExternal;
  }

  // advertise_interlevel - computed: false, optional: true, required: false
  private _advertiseInterlevel?: boolean | cdktf.IResolvable; 
  public get advertiseInterlevel() {
    return this.getBooleanAttribute('advertise_interlevel');
  }
  public set advertiseInterlevel(value: boolean | cdktf.IResolvable) {
    this._advertiseInterlevel = value;
  }
  public resetAdvertiseInterlevel() {
    this._advertiseInterlevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advertiseInterlevelInput() {
    return this._advertiseInterlevel;
  }

  // level_number - computed: false, optional: false, required: true
  private _levelNumber?: number; 
  public get levelNumber() {
    return this.getNumberAttribute('level_number');
  }
  public set levelNumber(value: number) {
    this._levelNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get levelNumberInput() {
    return this._levelNumber;
  }

  // on_startup_time_to_advertise - computed: false, optional: true, required: false
  private _onStartupTimeToAdvertise?: number; 
  public get onStartupTimeToAdvertise() {
    return this.getNumberAttribute('on_startup_time_to_advertise');
  }
  public set onStartupTimeToAdvertise(value: number) {
    this._onStartupTimeToAdvertise = value;
  }
  public resetOnStartupTimeToAdvertise() {
    this._onStartupTimeToAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartupTimeToAdvertiseInput() {
    return this._onStartupTimeToAdvertise;
  }

  // on_startup_wait_for_bgp - computed: false, optional: true, required: false
  private _onStartupWaitForBgp?: boolean | cdktf.IResolvable; 
  public get onStartupWaitForBgp() {
    return this.getBooleanAttribute('on_startup_wait_for_bgp');
  }
  public set onStartupWaitForBgp(value: boolean | cdktf.IResolvable) {
    this._onStartupWaitForBgp = value;
  }
  public resetOnStartupWaitForBgp() {
    this._onStartupWaitForBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onStartupWaitForBgpInput() {
    return this._onStartupWaitForBgp;
  }
}

export class RouterIsisSetOverloadBitLevelsList extends cdktf.ComplexList {
  public internalValue? : RouterIsisSetOverloadBitLevels[] | cdktf.IResolvable

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
  public get(index: number): RouterIsisSetOverloadBitLevelsOutputReference {
    return new RouterIsisSetOverloadBitLevelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis iosxr_router_isis}
*/
export class RouterIsis extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_router_isis";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterIsis resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterIsis to import
  * @param importFromId The id of the existing RouterIsis that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterIsis to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_router_isis", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/router_isis iosxr_router_isis} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterIsisConfig
  */
  public constructor(scope: Construct, id: string, config: RouterIsisConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxr_router_isis',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._affinityMaps.internalValue = config.affinityMaps;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._distributeLinkState = config.distributeLinkState;
    this._distributeLinkStateInstanceId = config.distributeLinkStateInstanceId;
    this._distributeLinkStateLevel = config.distributeLinkStateLevel;
    this._distributeLinkStateThrottle = config.distributeLinkStateThrottle;
    this._flexAlgos.internalValue = config.flexAlgos;
    this._interfaces.internalValue = config.interfaces;
    this._isType = config.isType;
    this._logAdjacencyChanges = config.logAdjacencyChanges;
    this._lspGenIntervalInitialWait = config.lspGenIntervalInitialWait;
    this._lspGenIntervalMaximumWait = config.lspGenIntervalMaximumWait;
    this._lspGenIntervalSecondaryWait = config.lspGenIntervalSecondaryWait;
    this._lspPasswordAcceptEncrypted = config.lspPasswordAcceptEncrypted;
    this._lspPasswordHmacMd5EnablePoi = config.lspPasswordHmacMd5EnablePoi;
    this._lspPasswordHmacMd5Encrypted = config.lspPasswordHmacMd5Encrypted;
    this._lspPasswordHmacMd5SendOnly = config.lspPasswordHmacMd5SendOnly;
    this._lspPasswordHmacMd5SnpSendOnly = config.lspPasswordHmacMd5SnpSendOnly;
    this._lspPasswordKeychain = config.lspPasswordKeychain;
    this._lspPasswordKeychainEnablePoi = config.lspPasswordKeychainEnablePoi;
    this._lspPasswordKeychainSendOnly = config.lspPasswordKeychainSendOnly;
    this._lspPasswordKeychainSnpSendOnly = config.lspPasswordKeychainSnpSendOnly;
    this._lspPasswordLevels.internalValue = config.lspPasswordLevels;
    this._lspPasswordTextEnablePoi = config.lspPasswordTextEnablePoi;
    this._lspPasswordTextEncrypted = config.lspPasswordTextEncrypted;
    this._lspPasswordTextSendOnly = config.lspPasswordTextSendOnly;
    this._lspPasswordTextSnpSendOnly = config.lspPasswordTextSnpSendOnly;
    this._lspRefreshInterval = config.lspRefreshInterval;
    this._maxLspLifetime = config.maxLspLifetime;
    this._nets.internalValue = config.nets;
    this._nsfCisco = config.nsfCisco;
    this._nsfIetf = config.nsfIetf;
    this._nsfInterfaceExpires = config.nsfInterfaceExpires;
    this._nsfInterfaceTimer = config.nsfInterfaceTimer;
    this._nsfLifetime = config.nsfLifetime;
    this._nsr = config.nsr;
    this._processId = config.processId;
    this._setOverloadBit = config.setOverloadBit;
    this._setOverloadBitAdvertiseExternal = config.setOverloadBitAdvertiseExternal;
    this._setOverloadBitAdvertiseInterlevel = config.setOverloadBitAdvertiseInterlevel;
    this._setOverloadBitLevels.internalValue = config.setOverloadBitLevels;
    this._setOverloadBitOnStartupTimeToAdvertise = config.setOverloadBitOnStartupTimeToAdvertise;
    this._setOverloadBitOnStartupWaitForBgp = config.setOverloadBitOnStartupWaitForBgp;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // affinity_maps - computed: false, optional: true, required: false
  private _affinityMaps = new RouterIsisAffinityMapsList(this, "affinity_maps", false);
  public get affinityMaps() {
    return this._affinityMaps;
  }
  public putAffinityMaps(value: RouterIsisAffinityMaps[] | cdktf.IResolvable) {
    this._affinityMaps.internalValue = value;
  }
  public resetAffinityMaps() {
    this._affinityMaps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityMapsInput() {
    return this._affinityMaps.internalValue;
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

  // distribute_link_state - computed: false, optional: true, required: false
  private _distributeLinkState?: boolean | cdktf.IResolvable; 
  public get distributeLinkState() {
    return this.getBooleanAttribute('distribute_link_state');
  }
  public set distributeLinkState(value: boolean | cdktf.IResolvable) {
    this._distributeLinkState = value;
  }
  public resetDistributeLinkState() {
    this._distributeLinkState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeLinkStateInput() {
    return this._distributeLinkState;
  }

  // distribute_link_state_instance_id - computed: false, optional: true, required: false
  private _distributeLinkStateInstanceId?: number; 
  public get distributeLinkStateInstanceId() {
    return this.getNumberAttribute('distribute_link_state_instance_id');
  }
  public set distributeLinkStateInstanceId(value: number) {
    this._distributeLinkStateInstanceId = value;
  }
  public resetDistributeLinkStateInstanceId() {
    this._distributeLinkStateInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeLinkStateInstanceIdInput() {
    return this._distributeLinkStateInstanceId;
  }

  // distribute_link_state_level - computed: false, optional: true, required: false
  private _distributeLinkStateLevel?: number; 
  public get distributeLinkStateLevel() {
    return this.getNumberAttribute('distribute_link_state_level');
  }
  public set distributeLinkStateLevel(value: number) {
    this._distributeLinkStateLevel = value;
  }
  public resetDistributeLinkStateLevel() {
    this._distributeLinkStateLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeLinkStateLevelInput() {
    return this._distributeLinkStateLevel;
  }

  // distribute_link_state_throttle - computed: false, optional: true, required: false
  private _distributeLinkStateThrottle?: number; 
  public get distributeLinkStateThrottle() {
    return this.getNumberAttribute('distribute_link_state_throttle');
  }
  public set distributeLinkStateThrottle(value: number) {
    this._distributeLinkStateThrottle = value;
  }
  public resetDistributeLinkStateThrottle() {
    this._distributeLinkStateThrottle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distributeLinkStateThrottleInput() {
    return this._distributeLinkStateThrottle;
  }

  // flex_algos - computed: false, optional: true, required: false
  private _flexAlgos = new RouterIsisFlexAlgosList(this, "flex_algos", false);
  public get flexAlgos() {
    return this._flexAlgos;
  }
  public putFlexAlgos(value: RouterIsisFlexAlgos[] | cdktf.IResolvable) {
    this._flexAlgos.internalValue = value;
  }
  public resetFlexAlgos() {
    this._flexAlgos.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flexAlgosInput() {
    return this._flexAlgos.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new RouterIsisInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: RouterIsisInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // is_type - computed: false, optional: true, required: false
  private _isType?: string; 
  public get isType() {
    return this.getStringAttribute('is_type');
  }
  public set isType(value: string) {
    this._isType = value;
  }
  public resetIsType() {
    this._isType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isTypeInput() {
    return this._isType;
  }

  // log_adjacency_changes - computed: false, optional: true, required: false
  private _logAdjacencyChanges?: boolean | cdktf.IResolvable; 
  public get logAdjacencyChanges() {
    return this.getBooleanAttribute('log_adjacency_changes');
  }
  public set logAdjacencyChanges(value: boolean | cdktf.IResolvable) {
    this._logAdjacencyChanges = value;
  }
  public resetLogAdjacencyChanges() {
    this._logAdjacencyChanges = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAdjacencyChangesInput() {
    return this._logAdjacencyChanges;
  }

  // lsp_gen_interval_initial_wait - computed: false, optional: true, required: false
  private _lspGenIntervalInitialWait?: number; 
  public get lspGenIntervalInitialWait() {
    return this.getNumberAttribute('lsp_gen_interval_initial_wait');
  }
  public set lspGenIntervalInitialWait(value: number) {
    this._lspGenIntervalInitialWait = value;
  }
  public resetLspGenIntervalInitialWait() {
    this._lspGenIntervalInitialWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenIntervalInitialWaitInput() {
    return this._lspGenIntervalInitialWait;
  }

  // lsp_gen_interval_maximum_wait - computed: false, optional: true, required: false
  private _lspGenIntervalMaximumWait?: number; 
  public get lspGenIntervalMaximumWait() {
    return this.getNumberAttribute('lsp_gen_interval_maximum_wait');
  }
  public set lspGenIntervalMaximumWait(value: number) {
    this._lspGenIntervalMaximumWait = value;
  }
  public resetLspGenIntervalMaximumWait() {
    this._lspGenIntervalMaximumWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenIntervalMaximumWaitInput() {
    return this._lspGenIntervalMaximumWait;
  }

  // lsp_gen_interval_secondary_wait - computed: false, optional: true, required: false
  private _lspGenIntervalSecondaryWait?: number; 
  public get lspGenIntervalSecondaryWait() {
    return this.getNumberAttribute('lsp_gen_interval_secondary_wait');
  }
  public set lspGenIntervalSecondaryWait(value: number) {
    this._lspGenIntervalSecondaryWait = value;
  }
  public resetLspGenIntervalSecondaryWait() {
    this._lspGenIntervalSecondaryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspGenIntervalSecondaryWaitInput() {
    return this._lspGenIntervalSecondaryWait;
  }

  // lsp_password_accept_encrypted - computed: false, optional: true, required: false
  private _lspPasswordAcceptEncrypted?: string; 
  public get lspPasswordAcceptEncrypted() {
    return this.getStringAttribute('lsp_password_accept_encrypted');
  }
  public set lspPasswordAcceptEncrypted(value: string) {
    this._lspPasswordAcceptEncrypted = value;
  }
  public resetLspPasswordAcceptEncrypted() {
    this._lspPasswordAcceptEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordAcceptEncryptedInput() {
    return this._lspPasswordAcceptEncrypted;
  }

  // lsp_password_hmac_md5_enable_poi - computed: false, optional: true, required: false
  private _lspPasswordHmacMd5EnablePoi?: boolean | cdktf.IResolvable; 
  public get lspPasswordHmacMd5EnablePoi() {
    return this.getBooleanAttribute('lsp_password_hmac_md5_enable_poi');
  }
  public set lspPasswordHmacMd5EnablePoi(value: boolean | cdktf.IResolvable) {
    this._lspPasswordHmacMd5EnablePoi = value;
  }
  public resetLspPasswordHmacMd5EnablePoi() {
    this._lspPasswordHmacMd5EnablePoi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordHmacMd5EnablePoiInput() {
    return this._lspPasswordHmacMd5EnablePoi;
  }

  // lsp_password_hmac_md5_encrypted - computed: false, optional: true, required: false
  private _lspPasswordHmacMd5Encrypted?: string; 
  public get lspPasswordHmacMd5Encrypted() {
    return this.getStringAttribute('lsp_password_hmac_md5_encrypted');
  }
  public set lspPasswordHmacMd5Encrypted(value: string) {
    this._lspPasswordHmacMd5Encrypted = value;
  }
  public resetLspPasswordHmacMd5Encrypted() {
    this._lspPasswordHmacMd5Encrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordHmacMd5EncryptedInput() {
    return this._lspPasswordHmacMd5Encrypted;
  }

  // lsp_password_hmac_md5_send_only - computed: false, optional: true, required: false
  private _lspPasswordHmacMd5SendOnly?: boolean | cdktf.IResolvable; 
  public get lspPasswordHmacMd5SendOnly() {
    return this.getBooleanAttribute('lsp_password_hmac_md5_send_only');
  }
  public set lspPasswordHmacMd5SendOnly(value: boolean | cdktf.IResolvable) {
    this._lspPasswordHmacMd5SendOnly = value;
  }
  public resetLspPasswordHmacMd5SendOnly() {
    this._lspPasswordHmacMd5SendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordHmacMd5SendOnlyInput() {
    return this._lspPasswordHmacMd5SendOnly;
  }

  // lsp_password_hmac_md5_snp_send_only - computed: false, optional: true, required: false
  private _lspPasswordHmacMd5SnpSendOnly?: boolean | cdktf.IResolvable; 
  public get lspPasswordHmacMd5SnpSendOnly() {
    return this.getBooleanAttribute('lsp_password_hmac_md5_snp_send_only');
  }
  public set lspPasswordHmacMd5SnpSendOnly(value: boolean | cdktf.IResolvable) {
    this._lspPasswordHmacMd5SnpSendOnly = value;
  }
  public resetLspPasswordHmacMd5SnpSendOnly() {
    this._lspPasswordHmacMd5SnpSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordHmacMd5SnpSendOnlyInput() {
    return this._lspPasswordHmacMd5SnpSendOnly;
  }

  // lsp_password_keychain - computed: false, optional: true, required: false
  private _lspPasswordKeychain?: string; 
  public get lspPasswordKeychain() {
    return this.getStringAttribute('lsp_password_keychain');
  }
  public set lspPasswordKeychain(value: string) {
    this._lspPasswordKeychain = value;
  }
  public resetLspPasswordKeychain() {
    this._lspPasswordKeychain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordKeychainInput() {
    return this._lspPasswordKeychain;
  }

  // lsp_password_keychain_enable_poi - computed: false, optional: true, required: false
  private _lspPasswordKeychainEnablePoi?: boolean | cdktf.IResolvable; 
  public get lspPasswordKeychainEnablePoi() {
    return this.getBooleanAttribute('lsp_password_keychain_enable_poi');
  }
  public set lspPasswordKeychainEnablePoi(value: boolean | cdktf.IResolvable) {
    this._lspPasswordKeychainEnablePoi = value;
  }
  public resetLspPasswordKeychainEnablePoi() {
    this._lspPasswordKeychainEnablePoi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordKeychainEnablePoiInput() {
    return this._lspPasswordKeychainEnablePoi;
  }

  // lsp_password_keychain_send_only - computed: false, optional: true, required: false
  private _lspPasswordKeychainSendOnly?: boolean | cdktf.IResolvable; 
  public get lspPasswordKeychainSendOnly() {
    return this.getBooleanAttribute('lsp_password_keychain_send_only');
  }
  public set lspPasswordKeychainSendOnly(value: boolean | cdktf.IResolvable) {
    this._lspPasswordKeychainSendOnly = value;
  }
  public resetLspPasswordKeychainSendOnly() {
    this._lspPasswordKeychainSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordKeychainSendOnlyInput() {
    return this._lspPasswordKeychainSendOnly;
  }

  // lsp_password_keychain_snp_send_only - computed: false, optional: true, required: false
  private _lspPasswordKeychainSnpSendOnly?: boolean | cdktf.IResolvable; 
  public get lspPasswordKeychainSnpSendOnly() {
    return this.getBooleanAttribute('lsp_password_keychain_snp_send_only');
  }
  public set lspPasswordKeychainSnpSendOnly(value: boolean | cdktf.IResolvable) {
    this._lspPasswordKeychainSnpSendOnly = value;
  }
  public resetLspPasswordKeychainSnpSendOnly() {
    this._lspPasswordKeychainSnpSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordKeychainSnpSendOnlyInput() {
    return this._lspPasswordKeychainSnpSendOnly;
  }

  // lsp_password_levels - computed: false, optional: true, required: false
  private _lspPasswordLevels = new RouterIsisLspPasswordLevelsList(this, "lsp_password_levels", false);
  public get lspPasswordLevels() {
    return this._lspPasswordLevels;
  }
  public putLspPasswordLevels(value: RouterIsisLspPasswordLevels[] | cdktf.IResolvable) {
    this._lspPasswordLevels.internalValue = value;
  }
  public resetLspPasswordLevels() {
    this._lspPasswordLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordLevelsInput() {
    return this._lspPasswordLevels.internalValue;
  }

  // lsp_password_text_enable_poi - computed: false, optional: true, required: false
  private _lspPasswordTextEnablePoi?: boolean | cdktf.IResolvable; 
  public get lspPasswordTextEnablePoi() {
    return this.getBooleanAttribute('lsp_password_text_enable_poi');
  }
  public set lspPasswordTextEnablePoi(value: boolean | cdktf.IResolvable) {
    this._lspPasswordTextEnablePoi = value;
  }
  public resetLspPasswordTextEnablePoi() {
    this._lspPasswordTextEnablePoi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordTextEnablePoiInput() {
    return this._lspPasswordTextEnablePoi;
  }

  // lsp_password_text_encrypted - computed: false, optional: true, required: false
  private _lspPasswordTextEncrypted?: string; 
  public get lspPasswordTextEncrypted() {
    return this.getStringAttribute('lsp_password_text_encrypted');
  }
  public set lspPasswordTextEncrypted(value: string) {
    this._lspPasswordTextEncrypted = value;
  }
  public resetLspPasswordTextEncrypted() {
    this._lspPasswordTextEncrypted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordTextEncryptedInput() {
    return this._lspPasswordTextEncrypted;
  }

  // lsp_password_text_send_only - computed: false, optional: true, required: false
  private _lspPasswordTextSendOnly?: boolean | cdktf.IResolvable; 
  public get lspPasswordTextSendOnly() {
    return this.getBooleanAttribute('lsp_password_text_send_only');
  }
  public set lspPasswordTextSendOnly(value: boolean | cdktf.IResolvable) {
    this._lspPasswordTextSendOnly = value;
  }
  public resetLspPasswordTextSendOnly() {
    this._lspPasswordTextSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordTextSendOnlyInput() {
    return this._lspPasswordTextSendOnly;
  }

  // lsp_password_text_snp_send_only - computed: false, optional: true, required: false
  private _lspPasswordTextSnpSendOnly?: boolean | cdktf.IResolvable; 
  public get lspPasswordTextSnpSendOnly() {
    return this.getBooleanAttribute('lsp_password_text_snp_send_only');
  }
  public set lspPasswordTextSnpSendOnly(value: boolean | cdktf.IResolvable) {
    this._lspPasswordTextSnpSendOnly = value;
  }
  public resetLspPasswordTextSnpSendOnly() {
    this._lspPasswordTextSnpSendOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspPasswordTextSnpSendOnlyInput() {
    return this._lspPasswordTextSnpSendOnly;
  }

  // lsp_refresh_interval - computed: false, optional: true, required: false
  private _lspRefreshInterval?: number; 
  public get lspRefreshInterval() {
    return this.getNumberAttribute('lsp_refresh_interval');
  }
  public set lspRefreshInterval(value: number) {
    this._lspRefreshInterval = value;
  }
  public resetLspRefreshInterval() {
    this._lspRefreshInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lspRefreshIntervalInput() {
    return this._lspRefreshInterval;
  }

  // max_lsp_lifetime - computed: false, optional: true, required: false
  private _maxLspLifetime?: number; 
  public get maxLspLifetime() {
    return this.getNumberAttribute('max_lsp_lifetime');
  }
  public set maxLspLifetime(value: number) {
    this._maxLspLifetime = value;
  }
  public resetMaxLspLifetime() {
    this._maxLspLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLspLifetimeInput() {
    return this._maxLspLifetime;
  }

  // nets - computed: false, optional: true, required: false
  private _nets = new RouterIsisNetsList(this, "nets", false);
  public get nets() {
    return this._nets;
  }
  public putNets(value: RouterIsisNets[] | cdktf.IResolvable) {
    this._nets.internalValue = value;
  }
  public resetNets() {
    this._nets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netsInput() {
    return this._nets.internalValue;
  }

  // nsf_cisco - computed: false, optional: true, required: false
  private _nsfCisco?: boolean | cdktf.IResolvable; 
  public get nsfCisco() {
    return this.getBooleanAttribute('nsf_cisco');
  }
  public set nsfCisco(value: boolean | cdktf.IResolvable) {
    this._nsfCisco = value;
  }
  public resetNsfCisco() {
    this._nsfCisco = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfCiscoInput() {
    return this._nsfCisco;
  }

  // nsf_ietf - computed: false, optional: true, required: false
  private _nsfIetf?: boolean | cdktf.IResolvable; 
  public get nsfIetf() {
    return this.getBooleanAttribute('nsf_ietf');
  }
  public set nsfIetf(value: boolean | cdktf.IResolvable) {
    this._nsfIetf = value;
  }
  public resetNsfIetf() {
    this._nsfIetf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfIetfInput() {
    return this._nsfIetf;
  }

  // nsf_interface_expires - computed: false, optional: true, required: false
  private _nsfInterfaceExpires?: number; 
  public get nsfInterfaceExpires() {
    return this.getNumberAttribute('nsf_interface_expires');
  }
  public set nsfInterfaceExpires(value: number) {
    this._nsfInterfaceExpires = value;
  }
  public resetNsfInterfaceExpires() {
    this._nsfInterfaceExpires = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfInterfaceExpiresInput() {
    return this._nsfInterfaceExpires;
  }

  // nsf_interface_timer - computed: false, optional: true, required: false
  private _nsfInterfaceTimer?: number; 
  public get nsfInterfaceTimer() {
    return this.getNumberAttribute('nsf_interface_timer');
  }
  public set nsfInterfaceTimer(value: number) {
    this._nsfInterfaceTimer = value;
  }
  public resetNsfInterfaceTimer() {
    this._nsfInterfaceTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfInterfaceTimerInput() {
    return this._nsfInterfaceTimer;
  }

  // nsf_lifetime - computed: false, optional: true, required: false
  private _nsfLifetime?: number; 
  public get nsfLifetime() {
    return this.getNumberAttribute('nsf_lifetime');
  }
  public set nsfLifetime(value: number) {
    this._nsfLifetime = value;
  }
  public resetNsfLifetime() {
    this._nsfLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsfLifetimeInput() {
    return this._nsfLifetime;
  }

  // nsr - computed: false, optional: true, required: false
  private _nsr?: boolean | cdktf.IResolvable; 
  public get nsr() {
    return this.getBooleanAttribute('nsr');
  }
  public set nsr(value: boolean | cdktf.IResolvable) {
    this._nsr = value;
  }
  public resetNsr() {
    this._nsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsrInput() {
    return this._nsr;
  }

  // process_id - computed: false, optional: false, required: true
  private _processId?: string; 
  public get processId() {
    return this.getStringAttribute('process_id');
  }
  public set processId(value: string) {
    this._processId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get processIdInput() {
    return this._processId;
  }

  // set_overload_bit - computed: false, optional: true, required: false
  private _setOverloadBit?: boolean | cdktf.IResolvable; 
  public get setOverloadBit() {
    return this.getBooleanAttribute('set_overload_bit');
  }
  public set setOverloadBit(value: boolean | cdktf.IResolvable) {
    this._setOverloadBit = value;
  }
  public resetSetOverloadBit() {
    this._setOverloadBit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitInput() {
    return this._setOverloadBit;
  }

  // set_overload_bit_advertise_external - computed: false, optional: true, required: false
  private _setOverloadBitAdvertiseExternal?: boolean | cdktf.IResolvable; 
  public get setOverloadBitAdvertiseExternal() {
    return this.getBooleanAttribute('set_overload_bit_advertise_external');
  }
  public set setOverloadBitAdvertiseExternal(value: boolean | cdktf.IResolvable) {
    this._setOverloadBitAdvertiseExternal = value;
  }
  public resetSetOverloadBitAdvertiseExternal() {
    this._setOverloadBitAdvertiseExternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitAdvertiseExternalInput() {
    return this._setOverloadBitAdvertiseExternal;
  }

  // set_overload_bit_advertise_interlevel - computed: false, optional: true, required: false
  private _setOverloadBitAdvertiseInterlevel?: boolean | cdktf.IResolvable; 
  public get setOverloadBitAdvertiseInterlevel() {
    return this.getBooleanAttribute('set_overload_bit_advertise_interlevel');
  }
  public set setOverloadBitAdvertiseInterlevel(value: boolean | cdktf.IResolvable) {
    this._setOverloadBitAdvertiseInterlevel = value;
  }
  public resetSetOverloadBitAdvertiseInterlevel() {
    this._setOverloadBitAdvertiseInterlevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitAdvertiseInterlevelInput() {
    return this._setOverloadBitAdvertiseInterlevel;
  }

  // set_overload_bit_levels - computed: false, optional: true, required: false
  private _setOverloadBitLevels = new RouterIsisSetOverloadBitLevelsList(this, "set_overload_bit_levels", false);
  public get setOverloadBitLevels() {
    return this._setOverloadBitLevels;
  }
  public putSetOverloadBitLevels(value: RouterIsisSetOverloadBitLevels[] | cdktf.IResolvable) {
    this._setOverloadBitLevels.internalValue = value;
  }
  public resetSetOverloadBitLevels() {
    this._setOverloadBitLevels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitLevelsInput() {
    return this._setOverloadBitLevels.internalValue;
  }

  // set_overload_bit_on_startup_time_to_advertise - computed: false, optional: true, required: false
  private _setOverloadBitOnStartupTimeToAdvertise?: number; 
  public get setOverloadBitOnStartupTimeToAdvertise() {
    return this.getNumberAttribute('set_overload_bit_on_startup_time_to_advertise');
  }
  public set setOverloadBitOnStartupTimeToAdvertise(value: number) {
    this._setOverloadBitOnStartupTimeToAdvertise = value;
  }
  public resetSetOverloadBitOnStartupTimeToAdvertise() {
    this._setOverloadBitOnStartupTimeToAdvertise = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitOnStartupTimeToAdvertiseInput() {
    return this._setOverloadBitOnStartupTimeToAdvertise;
  }

  // set_overload_bit_on_startup_wait_for_bgp - computed: false, optional: true, required: false
  private _setOverloadBitOnStartupWaitForBgp?: boolean | cdktf.IResolvable; 
  public get setOverloadBitOnStartupWaitForBgp() {
    return this.getBooleanAttribute('set_overload_bit_on_startup_wait_for_bgp');
  }
  public set setOverloadBitOnStartupWaitForBgp(value: boolean | cdktf.IResolvable) {
    this._setOverloadBitOnStartupWaitForBgp = value;
  }
  public resetSetOverloadBitOnStartupWaitForBgp() {
    this._setOverloadBitOnStartupWaitForBgp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setOverloadBitOnStartupWaitForBgpInput() {
    return this._setOverloadBitOnStartupWaitForBgp;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      affinity_maps: cdktf.listMapper(routerIsisAffinityMapsToTerraform, false)(this._affinityMaps.internalValue),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      distribute_link_state: cdktf.booleanToTerraform(this._distributeLinkState),
      distribute_link_state_instance_id: cdktf.numberToTerraform(this._distributeLinkStateInstanceId),
      distribute_link_state_level: cdktf.numberToTerraform(this._distributeLinkStateLevel),
      distribute_link_state_throttle: cdktf.numberToTerraform(this._distributeLinkStateThrottle),
      flex_algos: cdktf.listMapper(routerIsisFlexAlgosToTerraform, false)(this._flexAlgos.internalValue),
      interfaces: cdktf.listMapper(routerIsisInterfacesToTerraform, false)(this._interfaces.internalValue),
      is_type: cdktf.stringToTerraform(this._isType),
      log_adjacency_changes: cdktf.booleanToTerraform(this._logAdjacencyChanges),
      lsp_gen_interval_initial_wait: cdktf.numberToTerraform(this._lspGenIntervalInitialWait),
      lsp_gen_interval_maximum_wait: cdktf.numberToTerraform(this._lspGenIntervalMaximumWait),
      lsp_gen_interval_secondary_wait: cdktf.numberToTerraform(this._lspGenIntervalSecondaryWait),
      lsp_password_accept_encrypted: cdktf.stringToTerraform(this._lspPasswordAcceptEncrypted),
      lsp_password_hmac_md5_enable_poi: cdktf.booleanToTerraform(this._lspPasswordHmacMd5EnablePoi),
      lsp_password_hmac_md5_encrypted: cdktf.stringToTerraform(this._lspPasswordHmacMd5Encrypted),
      lsp_password_hmac_md5_send_only: cdktf.booleanToTerraform(this._lspPasswordHmacMd5SendOnly),
      lsp_password_hmac_md5_snp_send_only: cdktf.booleanToTerraform(this._lspPasswordHmacMd5SnpSendOnly),
      lsp_password_keychain: cdktf.stringToTerraform(this._lspPasswordKeychain),
      lsp_password_keychain_enable_poi: cdktf.booleanToTerraform(this._lspPasswordKeychainEnablePoi),
      lsp_password_keychain_send_only: cdktf.booleanToTerraform(this._lspPasswordKeychainSendOnly),
      lsp_password_keychain_snp_send_only: cdktf.booleanToTerraform(this._lspPasswordKeychainSnpSendOnly),
      lsp_password_levels: cdktf.listMapper(routerIsisLspPasswordLevelsToTerraform, false)(this._lspPasswordLevels.internalValue),
      lsp_password_text_enable_poi: cdktf.booleanToTerraform(this._lspPasswordTextEnablePoi),
      lsp_password_text_encrypted: cdktf.stringToTerraform(this._lspPasswordTextEncrypted),
      lsp_password_text_send_only: cdktf.booleanToTerraform(this._lspPasswordTextSendOnly),
      lsp_password_text_snp_send_only: cdktf.booleanToTerraform(this._lspPasswordTextSnpSendOnly),
      lsp_refresh_interval: cdktf.numberToTerraform(this._lspRefreshInterval),
      max_lsp_lifetime: cdktf.numberToTerraform(this._maxLspLifetime),
      nets: cdktf.listMapper(routerIsisNetsToTerraform, false)(this._nets.internalValue),
      nsf_cisco: cdktf.booleanToTerraform(this._nsfCisco),
      nsf_ietf: cdktf.booleanToTerraform(this._nsfIetf),
      nsf_interface_expires: cdktf.numberToTerraform(this._nsfInterfaceExpires),
      nsf_interface_timer: cdktf.numberToTerraform(this._nsfInterfaceTimer),
      nsf_lifetime: cdktf.numberToTerraform(this._nsfLifetime),
      nsr: cdktf.booleanToTerraform(this._nsr),
      process_id: cdktf.stringToTerraform(this._processId),
      set_overload_bit: cdktf.booleanToTerraform(this._setOverloadBit),
      set_overload_bit_advertise_external: cdktf.booleanToTerraform(this._setOverloadBitAdvertiseExternal),
      set_overload_bit_advertise_interlevel: cdktf.booleanToTerraform(this._setOverloadBitAdvertiseInterlevel),
      set_overload_bit_levels: cdktf.listMapper(routerIsisSetOverloadBitLevelsToTerraform, false)(this._setOverloadBitLevels.internalValue),
      set_overload_bit_on_startup_time_to_advertise: cdktf.numberToTerraform(this._setOverloadBitOnStartupTimeToAdvertise),
      set_overload_bit_on_startup_wait_for_bgp: cdktf.booleanToTerraform(this._setOverloadBitOnStartupWaitForBgp),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      affinity_maps: {
        value: cdktf.listMapperHcl(routerIsisAffinityMapsToHclTerraform, false)(this._affinityMaps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisAffinityMapsList",
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
      distribute_link_state: {
        value: cdktf.booleanToHclTerraform(this._distributeLinkState),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      distribute_link_state_instance_id: {
        value: cdktf.numberToHclTerraform(this._distributeLinkStateInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distribute_link_state_level: {
        value: cdktf.numberToHclTerraform(this._distributeLinkStateLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      distribute_link_state_throttle: {
        value: cdktf.numberToHclTerraform(this._distributeLinkStateThrottle),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      flex_algos: {
        value: cdktf.listMapperHcl(routerIsisFlexAlgosToHclTerraform, false)(this._flexAlgos.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisFlexAlgosList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(routerIsisInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisInterfacesList",
      },
      is_type: {
        value: cdktf.stringToHclTerraform(this._isType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_adjacency_changes: {
        value: cdktf.booleanToHclTerraform(this._logAdjacencyChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_gen_interval_initial_wait: {
        value: cdktf.numberToHclTerraform(this._lspGenIntervalInitialWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp_gen_interval_maximum_wait: {
        value: cdktf.numberToHclTerraform(this._lspGenIntervalMaximumWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp_gen_interval_secondary_wait: {
        value: cdktf.numberToHclTerraform(this._lspGenIntervalSecondaryWait),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lsp_password_accept_encrypted: {
        value: cdktf.stringToHclTerraform(this._lspPasswordAcceptEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_password_hmac_md5_enable_poi: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordHmacMd5EnablePoi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_hmac_md5_encrypted: {
        value: cdktf.stringToHclTerraform(this._lspPasswordHmacMd5Encrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_password_hmac_md5_send_only: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordHmacMd5SendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_hmac_md5_snp_send_only: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordHmacMd5SnpSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_keychain: {
        value: cdktf.stringToHclTerraform(this._lspPasswordKeychain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_password_keychain_enable_poi: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordKeychainEnablePoi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_keychain_send_only: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordKeychainSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_keychain_snp_send_only: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordKeychainSnpSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_levels: {
        value: cdktf.listMapperHcl(routerIsisLspPasswordLevelsToHclTerraform, false)(this._lspPasswordLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisLspPasswordLevelsList",
      },
      lsp_password_text_enable_poi: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordTextEnablePoi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_text_encrypted: {
        value: cdktf.stringToHclTerraform(this._lspPasswordTextEncrypted),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lsp_password_text_send_only: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordTextSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_password_text_snp_send_only: {
        value: cdktf.booleanToHclTerraform(this._lspPasswordTextSnpSendOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      lsp_refresh_interval: {
        value: cdktf.numberToHclTerraform(this._lspRefreshInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_lsp_lifetime: {
        value: cdktf.numberToHclTerraform(this._maxLspLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nets: {
        value: cdktf.listMapperHcl(routerIsisNetsToHclTerraform, false)(this._nets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisNetsList",
      },
      nsf_cisco: {
        value: cdktf.booleanToHclTerraform(this._nsfCisco),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsf_ietf: {
        value: cdktf.booleanToHclTerraform(this._nsfIetf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      nsf_interface_expires: {
        value: cdktf.numberToHclTerraform(this._nsfInterfaceExpires),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsf_interface_timer: {
        value: cdktf.numberToHclTerraform(this._nsfInterfaceTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsf_lifetime: {
        value: cdktf.numberToHclTerraform(this._nsfLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nsr: {
        value: cdktf.booleanToHclTerraform(this._nsr),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      process_id: {
        value: cdktf.stringToHclTerraform(this._processId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_overload_bit: {
        value: cdktf.booleanToHclTerraform(this._setOverloadBit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set_overload_bit_advertise_external: {
        value: cdktf.booleanToHclTerraform(this._setOverloadBitAdvertiseExternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set_overload_bit_advertise_interlevel: {
        value: cdktf.booleanToHclTerraform(this._setOverloadBitAdvertiseInterlevel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      set_overload_bit_levels: {
        value: cdktf.listMapperHcl(routerIsisSetOverloadBitLevelsToHclTerraform, false)(this._setOverloadBitLevels.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RouterIsisSetOverloadBitLevelsList",
      },
      set_overload_bit_on_startup_time_to_advertise: {
        value: cdktf.numberToHclTerraform(this._setOverloadBitOnStartupTimeToAdvertise),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_overload_bit_on_startup_wait_for_bgp: {
        value: cdktf.booleanToHclTerraform(this._setOverloadBitOnStartupWaitForBgp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
