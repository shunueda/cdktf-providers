// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EigrpFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set EIGRP address family
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#address_families EigrpFeatureTemplate#address_families}
  */
  readonly addressFamilies?: EigrpFeatureTemplateAddressFamilies[] | cdktf.IResolvable;
  /**
  * Set autonomous system ID <1..65535>
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#as_number EigrpFeatureTemplate#as_number}
  */
  readonly asNumber?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#as_number_variable EigrpFeatureTemplate#as_number_variable}
  */
  readonly asNumberVariable?: string;
  /**
  * Set EIGRP router authentication type
  *   - Choices: `md5`, `hmac-sha-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#authentication_type EigrpFeatureTemplate#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#authentication_type_variable EigrpFeatureTemplate#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#description EigrpFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#device_types EigrpFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Selective route download
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#filter EigrpFeatureTemplate#filter}
  */
  readonly filter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#filter_variable EigrpFeatureTemplate#filter_variable}
  */
  readonly filterVariable?: string;
  /**
  * Set EIGRP hello interval
  *   - Range: `0`-`65535`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#hello_interval EigrpFeatureTemplate#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#hello_interval_variable EigrpFeatureTemplate#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set hmac-sha-256 authentication key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#hmac_authentication_key EigrpFeatureTemplate#hmac_authentication_key}
  */
  readonly hmacAuthenticationKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#hmac_authentication_key_variable EigrpFeatureTemplate#hmac_authentication_key_variable}
  */
  readonly hmacAuthenticationKeyVariable?: string;
  /**
  * Set EIGRP hold time
  *   - Range: `0`-`65535`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#hold_time EigrpFeatureTemplate#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#hold_time_variable EigrpFeatureTemplate#hold_time_variable}
  */
  readonly holdTimeVariable?: string;
  /**
  * Configure IPv4 Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#interfaces EigrpFeatureTemplate#interfaces}
  */
  readonly interfaces?: EigrpFeatureTemplateInterfaces[] | cdktf.IResolvable;
  /**
  * Set keychain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#keys EigrpFeatureTemplate#keys}
  */
  readonly keys?: EigrpFeatureTemplateKeys[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#name EigrpFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Configure policy to apply to prefixes received from EIGRP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#route_policy_name EigrpFeatureTemplate#route_policy_name}
  */
  readonly routePolicyName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#route_policy_name_variable EigrpFeatureTemplate#route_policy_name_variable}
  */
  readonly routePolicyNameVariable?: string;
}
export interface EigrpFeatureTemplateAddressFamiliesNetworks {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#optional EigrpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Configure the prefixes for EIGRP to announce
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#prefix EigrpFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#prefix_variable EigrpFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function eigrpFeatureTemplateAddressFamiliesNetworksToTerraform(struct?: EigrpFeatureTemplateAddressFamiliesNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function eigrpFeatureTemplateAddressFamiliesNetworksToHclTerraform(struct?: EigrpFeatureTemplateAddressFamiliesNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EigrpFeatureTemplateAddressFamiliesNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EigrpFeatureTemplateAddressFamiliesNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EigrpFeatureTemplateAddressFamiliesNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class EigrpFeatureTemplateAddressFamiliesNetworksList extends cdktf.ComplexList {
  public internalValue? : EigrpFeatureTemplateAddressFamiliesNetworks[] | cdktf.IResolvable

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
  public get(index: number): EigrpFeatureTemplateAddressFamiliesNetworksOutputReference {
    return new EigrpFeatureTemplateAddressFamiliesNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EigrpFeatureTemplateAddressFamiliesRedistributes {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#optional EigrpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set the protocol to redistribute routes from
  *   - Choices: `bgp`, `connected`, `nat-route`, `omp`, `ospf`, `ospfv3`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#protocol EigrpFeatureTemplate#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#protocol_variable EigrpFeatureTemplate#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Configure policy to apply to prefixes received from EIGRP neighbor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#route_policy EigrpFeatureTemplate#route_policy}
  */
  readonly routePolicy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#route_policy_variable EigrpFeatureTemplate#route_policy_variable}
  */
  readonly routePolicyVariable?: string;
}

export function eigrpFeatureTemplateAddressFamiliesRedistributesToTerraform(struct?: EigrpFeatureTemplateAddressFamiliesRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy: cdktf.stringToTerraform(struct!.routePolicy),
    route_policy_variable: cdktf.stringToTerraform(struct!.routePolicyVariable),
  }
}


export function eigrpFeatureTemplateAddressFamiliesRedistributesToHclTerraform(struct?: EigrpFeatureTemplateAddressFamiliesRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol_variable: {
      value: cdktf.stringToHclTerraform(struct!.protocolVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy: {
      value: cdktf.stringToHclTerraform(struct!.routePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_policy_variable: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EigrpFeatureTemplateAddressFamiliesRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EigrpFeatureTemplateAddressFamiliesRedistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicy = this._routePolicy;
    }
    if (this._routePolicyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyVariable = this._routePolicyVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EigrpFeatureTemplateAddressFamiliesRedistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicy = undefined;
      this._routePolicyVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicy = value.routePolicy;
      this._routePolicyVariable = value.routePolicyVariable;
    }
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

  // protocol - computed: false, optional: true, required: false
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

  // protocol_variable - computed: false, optional: true, required: false
  private _protocolVariable?: string; 
  public get protocolVariable() {
    return this.getStringAttribute('protocol_variable');
  }
  public set protocolVariable(value: string) {
    this._protocolVariable = value;
  }
  public resetProtocolVariable() {
    this._protocolVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolVariableInput() {
    return this._protocolVariable;
  }

  // route_policy - computed: false, optional: true, required: false
  private _routePolicy?: string; 
  public get routePolicy() {
    return this.getStringAttribute('route_policy');
  }
  public set routePolicy(value: string) {
    this._routePolicy = value;
  }
  public resetRoutePolicy() {
    this._routePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyInput() {
    return this._routePolicy;
  }

  // route_policy_variable - computed: false, optional: true, required: false
  private _routePolicyVariable?: string; 
  public get routePolicyVariable() {
    return this.getStringAttribute('route_policy_variable');
  }
  public set routePolicyVariable(value: string) {
    this._routePolicyVariable = value;
  }
  public resetRoutePolicyVariable() {
    this._routePolicyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyVariableInput() {
    return this._routePolicyVariable;
  }
}

export class EigrpFeatureTemplateAddressFamiliesRedistributesList extends cdktf.ComplexList {
  public internalValue? : EigrpFeatureTemplateAddressFamiliesRedistributes[] | cdktf.IResolvable

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
  public get(index: number): EigrpFeatureTemplateAddressFamiliesRedistributesOutputReference {
    return new EigrpFeatureTemplateAddressFamiliesRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EigrpFeatureTemplateAddressFamilies {
  /**
  * Configure the networks for EIGRP to advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#networks EigrpFeatureTemplate#networks}
  */
  readonly networks?: EigrpFeatureTemplateAddressFamiliesNetworks[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#optional EigrpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Redistribute routes into EIGRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#redistributes EigrpFeatureTemplate#redistributes}
  */
  readonly redistributes?: EigrpFeatureTemplateAddressFamiliesRedistributes[] | cdktf.IResolvable;
  /**
  * Set EIGRP address family
  *   - Choices: `ipv4`
  *   - Default value: `ipv4`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#type EigrpFeatureTemplate#type}
  */
  readonly type?: string;
}

export function eigrpFeatureTemplateAddressFamiliesToTerraform(struct?: EigrpFeatureTemplateAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    networks: cdktf.listMapper(eigrpFeatureTemplateAddressFamiliesNetworksToTerraform, false)(struct!.networks),
    optional: cdktf.booleanToTerraform(struct!.optional),
    redistributes: cdktf.listMapper(eigrpFeatureTemplateAddressFamiliesRedistributesToTerraform, false)(struct!.redistributes),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function eigrpFeatureTemplateAddressFamiliesToHclTerraform(struct?: EigrpFeatureTemplateAddressFamilies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    networks: {
      value: cdktf.listMapperHcl(eigrpFeatureTemplateAddressFamiliesNetworksToHclTerraform, false)(struct!.networks),
      isBlock: true,
      type: "list",
      storageClassType: "EigrpFeatureTemplateAddressFamiliesNetworksList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redistributes: {
      value: cdktf.listMapperHcl(eigrpFeatureTemplateAddressFamiliesRedistributesToHclTerraform, false)(struct!.redistributes),
      isBlock: true,
      type: "list",
      storageClassType: "EigrpFeatureTemplateAddressFamiliesRedistributesList",
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

export class EigrpFeatureTemplateAddressFamiliesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EigrpFeatureTemplateAddressFamilies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networks?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.networks = this._networks?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._redistributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redistributes = this._redistributes?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EigrpFeatureTemplateAddressFamilies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._networks.internalValue = undefined;
      this._optional = undefined;
      this._redistributes.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._networks.internalValue = value.networks;
      this._optional = value.optional;
      this._redistributes.internalValue = value.redistributes;
      this._type = value.type;
    }
  }

  // networks - computed: false, optional: true, required: false
  private _networks = new EigrpFeatureTemplateAddressFamiliesNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: EigrpFeatureTemplateAddressFamiliesNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  public resetNetworks() {
    this._networks.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
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

  // redistributes - computed: false, optional: true, required: false
  private _redistributes = new EigrpFeatureTemplateAddressFamiliesRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }
  public putRedistributes(value: EigrpFeatureTemplateAddressFamiliesRedistributes[] | cdktf.IResolvable) {
    this._redistributes.internalValue = value;
  }
  public resetRedistributes() {
    this._redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributesInput() {
    return this._redistributes.internalValue;
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

export class EigrpFeatureTemplateAddressFamiliesList extends cdktf.ComplexList {
  public internalValue? : EigrpFeatureTemplateAddressFamilies[] | cdktf.IResolvable

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
  public get(index: number): EigrpFeatureTemplateAddressFamiliesOutputReference {
    return new EigrpFeatureTemplateAddressFamiliesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EigrpFeatureTemplateInterfacesSummaryAddresses {
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#optional EigrpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Set summary address prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#prefix EigrpFeatureTemplate#prefix}
  */
  readonly prefix?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#prefix_variable EigrpFeatureTemplate#prefix_variable}
  */
  readonly prefixVariable?: string;
}

export function eigrpFeatureTemplateInterfacesSummaryAddressesToTerraform(struct?: EigrpFeatureTemplateInterfacesSummaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    optional: cdktf.booleanToTerraform(struct!.optional),
    prefix: cdktf.stringToTerraform(struct!.prefix),
    prefix_variable: cdktf.stringToTerraform(struct!.prefixVariable),
  }
}


export function eigrpFeatureTemplateInterfacesSummaryAddressesToHclTerraform(struct?: EigrpFeatureTemplateInterfacesSummaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix: {
      value: cdktf.stringToHclTerraform(struct!.prefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prefix_variable: {
      value: cdktf.stringToHclTerraform(struct!.prefixVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EigrpFeatureTemplateInterfacesSummaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EigrpFeatureTemplateInterfacesSummaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._prefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefix = this._prefix;
    }
    if (this._prefixVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixVariable = this._prefixVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EigrpFeatureTemplateInterfacesSummaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._optional = undefined;
      this._prefix = undefined;
      this._prefixVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._optional = value.optional;
      this._prefix = value.prefix;
      this._prefixVariable = value.prefixVariable;
    }
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

  // prefix - computed: false, optional: true, required: false
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  public resetPrefix() {
    this._prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_variable - computed: false, optional: true, required: false
  private _prefixVariable?: string; 
  public get prefixVariable() {
    return this.getStringAttribute('prefix_variable');
  }
  public set prefixVariable(value: string) {
    this._prefixVariable = value;
  }
  public resetPrefixVariable() {
    this._prefixVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixVariableInput() {
    return this._prefixVariable;
  }
}

export class EigrpFeatureTemplateInterfacesSummaryAddressesList extends cdktf.ComplexList {
  public internalValue? : EigrpFeatureTemplateInterfacesSummaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): EigrpFeatureTemplateInterfacesSummaryAddressesOutputReference {
    return new EigrpFeatureTemplateInterfacesSummaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EigrpFeatureTemplateInterfaces {
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#interface_name EigrpFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#interface_name_variable EigrpFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#optional EigrpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Enable/disable EIGRP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#shutdown EigrpFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#shutdown_variable EigrpFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set summary addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#summary_addresses EigrpFeatureTemplate#summary_addresses}
  */
  readonly summaryAddresses?: EigrpFeatureTemplateInterfacesSummaryAddresses[] | cdktf.IResolvable;
}

export function eigrpFeatureTemplateInterfacesToTerraform(struct?: EigrpFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    summary_addresses: cdktf.listMapper(eigrpFeatureTemplateInterfacesSummaryAddressesToTerraform, false)(struct!.summaryAddresses),
  }
}


export function eigrpFeatureTemplateInterfacesToHclTerraform(struct?: EigrpFeatureTemplateInterfaces | cdktf.IResolvable): any {
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
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown_variable: {
      value: cdktf.stringToHclTerraform(struct!.shutdownVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    summary_addresses: {
      value: cdktf.listMapperHcl(eigrpFeatureTemplateInterfacesSummaryAddressesToHclTerraform, false)(struct!.summaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "EigrpFeatureTemplateInterfacesSummaryAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EigrpFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EigrpFeatureTemplateInterfaces | cdktf.IResolvable | undefined {
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
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._shutdownVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdownVariable = this._shutdownVariable;
    }
    if (this._summaryAddresses?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.summaryAddresses = this._summaryAddresses?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EigrpFeatureTemplateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._optional = undefined;
      this._shutdown = undefined;
      this._shutdownVariable = undefined;
      this._summaryAddresses.internalValue = undefined;
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
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._summaryAddresses.internalValue = value.summaryAddresses;
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

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // summary_addresses - computed: false, optional: true, required: false
  private _summaryAddresses = new EigrpFeatureTemplateInterfacesSummaryAddressesList(this, "summary_addresses", false);
  public get summaryAddresses() {
    return this._summaryAddresses;
  }
  public putSummaryAddresses(value: EigrpFeatureTemplateInterfacesSummaryAddresses[] | cdktf.IResolvable) {
    this._summaryAddresses.internalValue = value;
  }
  public resetSummaryAddresses() {
    this._summaryAddresses.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryAddressesInput() {
    return this._summaryAddresses.internalValue;
  }
}

export class EigrpFeatureTemplateInterfacesList extends cdktf.ComplexList {
  public internalValue? : EigrpFeatureTemplateInterfaces[] | cdktf.IResolvable

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
  public get(index: number): EigrpFeatureTemplateInterfacesOutputReference {
    return new EigrpFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EigrpFeatureTemplateKeys {
  /**
  * Set MD5 key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#md5_authentication_key EigrpFeatureTemplate#md5_authentication_key}
  */
  readonly md5AuthenticationKey?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#md5_authentication_key_variable EigrpFeatureTemplate#md5_authentication_key_variable}
  */
  readonly md5AuthenticationKeyVariable?: string;
  /**
  * Set MD5 key ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#md5_key_id EigrpFeatureTemplate#md5_key_id}
  */
  readonly md5KeyId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#md5_key_id_variable EigrpFeatureTemplate#md5_key_id_variable}
  */
  readonly md5KeyIdVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#optional EigrpFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function eigrpFeatureTemplateKeysToTerraform(struct?: EigrpFeatureTemplateKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    md5_authentication_key: cdktf.stringToTerraform(struct!.md5AuthenticationKey),
    md5_authentication_key_variable: cdktf.stringToTerraform(struct!.md5AuthenticationKeyVariable),
    md5_key_id: cdktf.numberToTerraform(struct!.md5KeyId),
    md5_key_id_variable: cdktf.stringToTerraform(struct!.md5KeyIdVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function eigrpFeatureTemplateKeysToHclTerraform(struct?: EigrpFeatureTemplateKeys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    md5_authentication_key: {
      value: cdktf.stringToHclTerraform(struct!.md5AuthenticationKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5_authentication_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.md5AuthenticationKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    md5_key_id: {
      value: cdktf.numberToHclTerraform(struct!.md5KeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    md5_key_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.md5KeyIdVariable),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EigrpFeatureTemplateKeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EigrpFeatureTemplateKeys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._md5AuthenticationKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5AuthenticationKey = this._md5AuthenticationKey;
    }
    if (this._md5AuthenticationKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5AuthenticationKeyVariable = this._md5AuthenticationKeyVariable;
    }
    if (this._md5KeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5KeyId = this._md5KeyId;
    }
    if (this._md5KeyIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.md5KeyIdVariable = this._md5KeyIdVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EigrpFeatureTemplateKeys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._md5AuthenticationKey = undefined;
      this._md5AuthenticationKeyVariable = undefined;
      this._md5KeyId = undefined;
      this._md5KeyIdVariable = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._md5AuthenticationKey = value.md5AuthenticationKey;
      this._md5AuthenticationKeyVariable = value.md5AuthenticationKeyVariable;
      this._md5KeyId = value.md5KeyId;
      this._md5KeyIdVariable = value.md5KeyIdVariable;
      this._optional = value.optional;
    }
  }

  // md5_authentication_key - computed: false, optional: true, required: false
  private _md5AuthenticationKey?: string; 
  public get md5AuthenticationKey() {
    return this.getStringAttribute('md5_authentication_key');
  }
  public set md5AuthenticationKey(value: string) {
    this._md5AuthenticationKey = value;
  }
  public resetMd5AuthenticationKey() {
    this._md5AuthenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationKeyInput() {
    return this._md5AuthenticationKey;
  }

  // md5_authentication_key_variable - computed: false, optional: true, required: false
  private _md5AuthenticationKeyVariable?: string; 
  public get md5AuthenticationKeyVariable() {
    return this.getStringAttribute('md5_authentication_key_variable');
  }
  public set md5AuthenticationKeyVariable(value: string) {
    this._md5AuthenticationKeyVariable = value;
  }
  public resetMd5AuthenticationKeyVariable() {
    this._md5AuthenticationKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5AuthenticationKeyVariableInput() {
    return this._md5AuthenticationKeyVariable;
  }

  // md5_key_id - computed: false, optional: true, required: false
  private _md5KeyId?: number; 
  public get md5KeyId() {
    return this.getNumberAttribute('md5_key_id');
  }
  public set md5KeyId(value: number) {
    this._md5KeyId = value;
  }
  public resetMd5KeyId() {
    this._md5KeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeyIdInput() {
    return this._md5KeyId;
  }

  // md5_key_id_variable - computed: false, optional: true, required: false
  private _md5KeyIdVariable?: string; 
  public get md5KeyIdVariable() {
    return this.getStringAttribute('md5_key_id_variable');
  }
  public set md5KeyIdVariable(value: string) {
    this._md5KeyIdVariable = value;
  }
  public resetMd5KeyIdVariable() {
    this._md5KeyIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeyIdVariableInput() {
    return this._md5KeyIdVariable;
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
}

export class EigrpFeatureTemplateKeysList extends cdktf.ComplexList {
  public internalValue? : EigrpFeatureTemplateKeys[] | cdktf.IResolvable

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
  public get(index: number): EigrpFeatureTemplateKeysOutputReference {
    return new EigrpFeatureTemplateKeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template sdwan_eigrp_feature_template}
*/
export class EigrpFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_eigrp_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EigrpFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EigrpFeatureTemplate to import
  * @param importFromId The id of the existing EigrpFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EigrpFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_eigrp_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/eigrp_feature_template sdwan_eigrp_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EigrpFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: EigrpFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_eigrp_feature_template',
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
    this._addressFamilies.internalValue = config.addressFamilies;
    this._asNumber = config.asNumber;
    this._asNumberVariable = config.asNumberVariable;
    this._authenticationType = config.authenticationType;
    this._authenticationTypeVariable = config.authenticationTypeVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._filter = config.filter;
    this._filterVariable = config.filterVariable;
    this._helloInterval = config.helloInterval;
    this._helloIntervalVariable = config.helloIntervalVariable;
    this._hmacAuthenticationKey = config.hmacAuthenticationKey;
    this._hmacAuthenticationKeyVariable = config.hmacAuthenticationKeyVariable;
    this._holdTime = config.holdTime;
    this._holdTimeVariable = config.holdTimeVariable;
    this._interfaces.internalValue = config.interfaces;
    this._keys.internalValue = config.keys;
    this._name = config.name;
    this._routePolicyName = config.routePolicyName;
    this._routePolicyNameVariable = config.routePolicyNameVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_families - computed: false, optional: true, required: false
  private _addressFamilies = new EigrpFeatureTemplateAddressFamiliesList(this, "address_families", false);
  public get addressFamilies() {
    return this._addressFamilies;
  }
  public putAddressFamilies(value: EigrpFeatureTemplateAddressFamilies[] | cdktf.IResolvable) {
    this._addressFamilies.internalValue = value;
  }
  public resetAddressFamilies() {
    this._addressFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressFamiliesInput() {
    return this._addressFamilies.internalValue;
  }

  // as_number - computed: false, optional: true, required: false
  private _asNumber?: number; 
  public get asNumber() {
    return this.getNumberAttribute('as_number');
  }
  public set asNumber(value: number) {
    this._asNumber = value;
  }
  public resetAsNumber() {
    this._asNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberInput() {
    return this._asNumber;
  }

  // as_number_variable - computed: false, optional: true, required: false
  private _asNumberVariable?: string; 
  public get asNumberVariable() {
    return this.getStringAttribute('as_number_variable');
  }
  public set asNumberVariable(value: string) {
    this._asNumberVariable = value;
  }
  public resetAsNumberVariable() {
    this._asNumberVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asNumberVariableInput() {
    return this._asNumberVariable;
  }

  // authentication_type - computed: false, optional: true, required: false
  private _authenticationType?: string; 
  public get authenticationType() {
    return this.getStringAttribute('authentication_type');
  }
  public set authenticationType(value: string) {
    this._authenticationType = value;
  }
  public resetAuthenticationType() {
    this._authenticationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeInput() {
    return this._authenticationType;
  }

  // authentication_type_variable - computed: false, optional: true, required: false
  private _authenticationTypeVariable?: string; 
  public get authenticationTypeVariable() {
    return this.getStringAttribute('authentication_type_variable');
  }
  public set authenticationTypeVariable(value: string) {
    this._authenticationTypeVariable = value;
  }
  public resetAuthenticationTypeVariable() {
    this._authenticationTypeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTypeVariableInput() {
    return this._authenticationTypeVariable;
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

  // filter - computed: false, optional: true, required: false
  private _filter?: boolean | cdktf.IResolvable; 
  public get filter() {
    return this.getBooleanAttribute('filter');
  }
  public set filter(value: boolean | cdktf.IResolvable) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // filter_variable - computed: false, optional: true, required: false
  private _filterVariable?: string; 
  public get filterVariable() {
    return this.getStringAttribute('filter_variable');
  }
  public set filterVariable(value: string) {
    this._filterVariable = value;
  }
  public resetFilterVariable() {
    this._filterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterVariableInput() {
    return this._filterVariable;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hello_interval_variable - computed: false, optional: true, required: false
  private _helloIntervalVariable?: string; 
  public get helloIntervalVariable() {
    return this.getStringAttribute('hello_interval_variable');
  }
  public set helloIntervalVariable(value: string) {
    this._helloIntervalVariable = value;
  }
  public resetHelloIntervalVariable() {
    this._helloIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalVariableInput() {
    return this._helloIntervalVariable;
  }

  // hmac_authentication_key - computed: false, optional: true, required: false
  private _hmacAuthenticationKey?: string; 
  public get hmacAuthenticationKey() {
    return this.getStringAttribute('hmac_authentication_key');
  }
  public set hmacAuthenticationKey(value: string) {
    this._hmacAuthenticationKey = value;
  }
  public resetHmacAuthenticationKey() {
    this._hmacAuthenticationKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAuthenticationKeyInput() {
    return this._hmacAuthenticationKey;
  }

  // hmac_authentication_key_variable - computed: false, optional: true, required: false
  private _hmacAuthenticationKeyVariable?: string; 
  public get hmacAuthenticationKeyVariable() {
    return this.getStringAttribute('hmac_authentication_key_variable');
  }
  public set hmacAuthenticationKeyVariable(value: string) {
    this._hmacAuthenticationKeyVariable = value;
  }
  public resetHmacAuthenticationKeyVariable() {
    this._hmacAuthenticationKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hmacAuthenticationKeyVariableInput() {
    return this._hmacAuthenticationKeyVariable;
  }

  // hold_time - computed: false, optional: true, required: false
  private _holdTime?: number; 
  public get holdTime() {
    return this.getNumberAttribute('hold_time');
  }
  public set holdTime(value: number) {
    this._holdTime = value;
  }
  public resetHoldTime() {
    this._holdTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeInput() {
    return this._holdTime;
  }

  // hold_time_variable - computed: false, optional: true, required: false
  private _holdTimeVariable?: string; 
  public get holdTimeVariable() {
    return this.getStringAttribute('hold_time_variable');
  }
  public set holdTimeVariable(value: string) {
    this._holdTimeVariable = value;
  }
  public resetHoldTimeVariable() {
    this._holdTimeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdTimeVariableInput() {
    return this._holdTimeVariable;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new EigrpFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: EigrpFeatureTemplateInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // keys - computed: false, optional: true, required: false
  private _keys = new EigrpFeatureTemplateKeysList(this, "keys", false);
  public get keys() {
    return this._keys;
  }
  public putKeys(value: EigrpFeatureTemplateKeys[] | cdktf.IResolvable) {
    this._keys.internalValue = value;
  }
  public resetKeys() {
    this._keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keysInput() {
    return this._keys.internalValue;
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

  // route_policy_name - computed: false, optional: true, required: false
  private _routePolicyName?: string; 
  public get routePolicyName() {
    return this.getStringAttribute('route_policy_name');
  }
  public set routePolicyName(value: string) {
    this._routePolicyName = value;
  }
  public resetRoutePolicyName() {
    this._routePolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyNameInput() {
    return this._routePolicyName;
  }

  // route_policy_name_variable - computed: false, optional: true, required: false
  private _routePolicyNameVariable?: string; 
  public get routePolicyNameVariable() {
    return this.getStringAttribute('route_policy_name_variable');
  }
  public set routePolicyNameVariable(value: string) {
    this._routePolicyNameVariable = value;
  }
  public resetRoutePolicyNameVariable() {
    this._routePolicyNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyNameVariableInput() {
    return this._routePolicyNameVariable;
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
      address_families: cdktf.listMapper(eigrpFeatureTemplateAddressFamiliesToTerraform, false)(this._addressFamilies.internalValue),
      as_number: cdktf.numberToTerraform(this._asNumber),
      as_number_variable: cdktf.stringToTerraform(this._asNumberVariable),
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      authentication_type_variable: cdktf.stringToTerraform(this._authenticationTypeVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      filter: cdktf.booleanToTerraform(this._filter),
      filter_variable: cdktf.stringToTerraform(this._filterVariable),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      hello_interval_variable: cdktf.stringToTerraform(this._helloIntervalVariable),
      hmac_authentication_key: cdktf.stringToTerraform(this._hmacAuthenticationKey),
      hmac_authentication_key_variable: cdktf.stringToTerraform(this._hmacAuthenticationKeyVariable),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      hold_time_variable: cdktf.stringToTerraform(this._holdTimeVariable),
      interfaces: cdktf.listMapper(eigrpFeatureTemplateInterfacesToTerraform, false)(this._interfaces.internalValue),
      keys: cdktf.listMapper(eigrpFeatureTemplateKeysToTerraform, false)(this._keys.internalValue),
      name: cdktf.stringToTerraform(this._name),
      route_policy_name: cdktf.stringToTerraform(this._routePolicyName),
      route_policy_name_variable: cdktf.stringToTerraform(this._routePolicyNameVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_families: {
        value: cdktf.listMapperHcl(eigrpFeatureTemplateAddressFamiliesToHclTerraform, false)(this._addressFamilies.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EigrpFeatureTemplateAddressFamiliesList",
      },
      as_number: {
        value: cdktf.numberToHclTerraform(this._asNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      as_number_variable: {
        value: cdktf.stringToHclTerraform(this._asNumberVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type: {
        value: cdktf.stringToHclTerraform(this._authenticationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_type_variable: {
        value: cdktf.stringToHclTerraform(this._authenticationTypeVariable),
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
      filter: {
        value: cdktf.booleanToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      filter_variable: {
        value: cdktf.stringToHclTerraform(this._filterVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_interval_variable: {
        value: cdktf.stringToHclTerraform(this._helloIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hmac_authentication_key: {
        value: cdktf.stringToHclTerraform(this._hmacAuthenticationKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hmac_authentication_key_variable: {
        value: cdktf.stringToHclTerraform(this._hmacAuthenticationKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hold_time: {
        value: cdktf.numberToHclTerraform(this._holdTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hold_time_variable: {
        value: cdktf.stringToHclTerraform(this._holdTimeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interfaces: {
        value: cdktf.listMapperHcl(eigrpFeatureTemplateInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EigrpFeatureTemplateInterfacesList",
      },
      keys: {
        value: cdktf.listMapperHcl(eigrpFeatureTemplateKeysToHclTerraform, false)(this._keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EigrpFeatureTemplateKeysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_name: {
        value: cdktf.stringToHclTerraform(this._routePolicyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_policy_name_variable: {
        value: cdktf.stringToHclTerraform(this._routePolicyNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
