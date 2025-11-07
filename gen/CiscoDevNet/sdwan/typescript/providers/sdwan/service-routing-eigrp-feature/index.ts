// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceRoutingEigrpFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set EIGRP router authentication type
  *   - Choices: `md5`, `hmac-sha-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#authentication_type ServiceRoutingEigrpFeature#authentication_type}
  */
  readonly authenticationType?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#authentication_type_variable ServiceRoutingEigrpFeature#authentication_type_variable}
  */
  readonly authenticationTypeVariable?: string;
  /**
  * Set autonomous system ID <1..65535>
  *   - Range: `1`-`65535`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#autonomous_system_id ServiceRoutingEigrpFeature#autonomous_system_id}
  */
  readonly autonomousSystemId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#autonomous_system_id_variable ServiceRoutingEigrpFeature#autonomous_system_id_variable}
  */
  readonly autonomousSystemIdVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#description ServiceRoutingEigrpFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#feature_profile_id ServiceRoutingEigrpFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Selective route download
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#filter ServiceRoutingEigrpFeature#filter}
  */
  readonly filter?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#filter_variable ServiceRoutingEigrpFeature#filter_variable}
  */
  readonly filterVariable?: string;
  /**
  * Set EIGRP hello interval
  *   - Range: `0`-`65535`
  *   - Default value: `5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#hello_interval ServiceRoutingEigrpFeature#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#hello_interval_variable ServiceRoutingEigrpFeature#hello_interval_variable}
  */
  readonly helloIntervalVariable?: string;
  /**
  * Set hmac-sha-256 authentication key, Attribute conditional on `authentication_type` being equal to `hmac-sha-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#hmac_authentication_key ServiceRoutingEigrpFeature#hmac_authentication_key}
  */
  readonly hmacAuthenticationKey?: string;
  /**
  * Variable name, Attribute conditional on `authentication_type` being equal to `hmac-sha-256`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#hmac_authentication_key_variable ServiceRoutingEigrpFeature#hmac_authentication_key_variable}
  */
  readonly hmacAuthenticationKeyVariable?: string;
  /**
  * Set EIGRP hold time
  *   - Range: `0`-`65535`
  *   - Default value: `15`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#hold_time ServiceRoutingEigrpFeature#hold_time}
  */
  readonly holdTime?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#hold_time_variable ServiceRoutingEigrpFeature#hold_time_variable}
  */
  readonly holdTimeVariable?: string;
  /**
  * Configure IPv4 Static Routes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#interfaces ServiceRoutingEigrpFeature#interfaces}
  */
  readonly interfaces?: ServiceRoutingEigrpFeatureInterfaces[] | cdktf.IResolvable;
  /**
  * Set keychain details, Attribute conditional on `authentication_type` being equal to `md5`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#md5_keys ServiceRoutingEigrpFeature#md5_keys}
  */
  readonly md5Keys?: ServiceRoutingEigrpFeatureMd5Keys[] | cdktf.IResolvable;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#name ServiceRoutingEigrpFeature#name}
  */
  readonly name: string;
  /**
  * Configure the networks for EIGRP to advertise
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#networks ServiceRoutingEigrpFeature#networks}
  */
  readonly networks: ServiceRoutingEigrpFeatureNetworks[] | cdktf.IResolvable;
  /**
  * Redistribute routes into EIGRP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#redistributes ServiceRoutingEigrpFeature#redistributes}
  */
  readonly redistributes?: ServiceRoutingEigrpFeatureRedistributes[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#route_policy_id ServiceRoutingEigrpFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
}
export interface ServiceRoutingEigrpFeatureInterfacesSummaryAddresses {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#address ServiceRoutingEigrpFeature#address}
  */
  readonly address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#address_variable ServiceRoutingEigrpFeature#address_variable}
  */
  readonly addressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#mask ServiceRoutingEigrpFeature#mask}
  */
  readonly mask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#mask_variable ServiceRoutingEigrpFeature#mask_variable}
  */
  readonly maskVariable?: string;
}

export function serviceRoutingEigrpFeatureInterfacesSummaryAddressesToTerraform(struct?: ServiceRoutingEigrpFeatureInterfacesSummaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    address_variable: cdktf.stringToTerraform(struct!.addressVariable),
    mask: cdktf.stringToTerraform(struct!.mask),
    mask_variable: cdktf.stringToTerraform(struct!.maskVariable),
  }
}


export function serviceRoutingEigrpFeatureInterfacesSummaryAddressesToHclTerraform(struct?: ServiceRoutingEigrpFeatureInterfacesSummaryAddresses | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    address_variable: {
      value: cdktf.stringToHclTerraform(struct!.addressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.maskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingEigrpFeatureInterfacesSummaryAddressesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingEigrpFeatureInterfacesSummaryAddresses | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._addressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.addressVariable = this._addressVariable;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._maskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskVariable = this._maskVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingEigrpFeatureInterfacesSummaryAddresses | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._addressVariable = undefined;
      this._mask = undefined;
      this._maskVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._addressVariable = value.addressVariable;
      this._mask = value.mask;
      this._maskVariable = value.maskVariable;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address_variable - computed: false, optional: true, required: false
  private _addressVariable?: string; 
  public get addressVariable() {
    return this.getStringAttribute('address_variable');
  }
  public set addressVariable(value: string) {
    this._addressVariable = value;
  }
  public resetAddressVariable() {
    this._addressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressVariableInput() {
    return this._addressVariable;
  }

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // mask_variable - computed: false, optional: true, required: false
  private _maskVariable?: string; 
  public get maskVariable() {
    return this.getStringAttribute('mask_variable');
  }
  public set maskVariable(value: string) {
    this._maskVariable = value;
  }
  public resetMaskVariable() {
    this._maskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskVariableInput() {
    return this._maskVariable;
  }
}

export class ServiceRoutingEigrpFeatureInterfacesSummaryAddressesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingEigrpFeatureInterfacesSummaryAddresses[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingEigrpFeatureInterfacesSummaryAddressesOutputReference {
    return new ServiceRoutingEigrpFeatureInterfacesSummaryAddressesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingEigrpFeatureInterfaces {
  /**
  * Set interface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#name ServiceRoutingEigrpFeature#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#name_variable ServiceRoutingEigrpFeature#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Enable/disable EIGRP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#shutdown ServiceRoutingEigrpFeature#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#shutdown_variable ServiceRoutingEigrpFeature#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * Set summary addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#summary_addresses ServiceRoutingEigrpFeature#summary_addresses}
  */
  readonly summaryAddresses?: ServiceRoutingEigrpFeatureInterfacesSummaryAddresses[] | cdktf.IResolvable;
}

export function serviceRoutingEigrpFeatureInterfacesToTerraform(struct?: ServiceRoutingEigrpFeatureInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    shutdown_variable: cdktf.stringToTerraform(struct!.shutdownVariable),
    summary_addresses: cdktf.listMapper(serviceRoutingEigrpFeatureInterfacesSummaryAddressesToTerraform, false)(struct!.summaryAddresses),
  }
}


export function serviceRoutingEigrpFeatureInterfacesToHclTerraform(struct?: ServiceRoutingEigrpFeatureInterfaces | cdktf.IResolvable): any {
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
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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
      value: cdktf.listMapperHcl(serviceRoutingEigrpFeatureInterfacesSummaryAddressesToHclTerraform, false)(struct!.summaryAddresses),
      isBlock: true,
      type: "list",
      storageClassType: "ServiceRoutingEigrpFeatureInterfacesSummaryAddressesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingEigrpFeatureInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingEigrpFeatureInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
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

  public set internalValue(value: ServiceRoutingEigrpFeatureInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
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
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._shutdown = value.shutdown;
      this._shutdownVariable = value.shutdownVariable;
      this._summaryAddresses.internalValue = value.summaryAddresses;
    }
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

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
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
  private _summaryAddresses = new ServiceRoutingEigrpFeatureInterfacesSummaryAddressesList(this, "summary_addresses", false);
  public get summaryAddresses() {
    return this._summaryAddresses;
  }
  public putSummaryAddresses(value: ServiceRoutingEigrpFeatureInterfacesSummaryAddresses[] | cdktf.IResolvable) {
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

export class ServiceRoutingEigrpFeatureInterfacesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingEigrpFeatureInterfaces[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingEigrpFeatureInterfacesOutputReference {
    return new ServiceRoutingEigrpFeatureInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingEigrpFeatureMd5Keys {
  /**
  * Set MD5 key ID
  *   - Range: `1`-`255`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#key_id ServiceRoutingEigrpFeature#key_id}
  */
  readonly keyId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#key_id_variable ServiceRoutingEigrpFeature#key_id_variable}
  */
  readonly keyIdVariable?: string;
  /**
  * Set MD5 key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#key_string ServiceRoutingEigrpFeature#key_string}
  */
  readonly keyString?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#key_string_variable ServiceRoutingEigrpFeature#key_string_variable}
  */
  readonly keyStringVariable?: string;
}

export function serviceRoutingEigrpFeatureMd5KeysToTerraform(struct?: ServiceRoutingEigrpFeatureMd5Keys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key_id: cdktf.numberToTerraform(struct!.keyId),
    key_id_variable: cdktf.stringToTerraform(struct!.keyIdVariable),
    key_string: cdktf.stringToTerraform(struct!.keyString),
    key_string_variable: cdktf.stringToTerraform(struct!.keyStringVariable),
  }
}


export function serviceRoutingEigrpFeatureMd5KeysToHclTerraform(struct?: ServiceRoutingEigrpFeatureMd5Keys | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key_id: {
      value: cdktf.numberToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.keyIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_string: {
      value: cdktf.stringToHclTerraform(struct!.keyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_string_variable: {
      value: cdktf.stringToHclTerraform(struct!.keyStringVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingEigrpFeatureMd5KeysOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingEigrpFeatureMd5Keys | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._keyIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyIdVariable = this._keyIdVariable;
    }
    if (this._keyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyString = this._keyString;
    }
    if (this._keyStringVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyStringVariable = this._keyStringVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingEigrpFeatureMd5Keys | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyId = undefined;
      this._keyIdVariable = undefined;
      this._keyString = undefined;
      this._keyStringVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyId = value.keyId;
      this._keyIdVariable = value.keyIdVariable;
      this._keyString = value.keyString;
      this._keyStringVariable = value.keyStringVariable;
    }
  }

  // key_id - computed: false, optional: true, required: false
  private _keyId?: number; 
  public get keyId() {
    return this.getNumberAttribute('key_id');
  }
  public set keyId(value: number) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // key_id_variable - computed: false, optional: true, required: false
  private _keyIdVariable?: string; 
  public get keyIdVariable() {
    return this.getStringAttribute('key_id_variable');
  }
  public set keyIdVariable(value: string) {
    this._keyIdVariable = value;
  }
  public resetKeyIdVariable() {
    this._keyIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdVariableInput() {
    return this._keyIdVariable;
  }

  // key_string - computed: false, optional: true, required: false
  private _keyString?: string; 
  public get keyString() {
    return this.getStringAttribute('key_string');
  }
  public set keyString(value: string) {
    this._keyString = value;
  }
  public resetKeyString() {
    this._keyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringInput() {
    return this._keyString;
  }

  // key_string_variable - computed: false, optional: true, required: false
  private _keyStringVariable?: string; 
  public get keyStringVariable() {
    return this.getStringAttribute('key_string_variable');
  }
  public set keyStringVariable(value: string) {
    this._keyStringVariable = value;
  }
  public resetKeyStringVariable() {
    this._keyStringVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyStringVariableInput() {
    return this._keyStringVariable;
  }
}

export class ServiceRoutingEigrpFeatureMd5KeysList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingEigrpFeatureMd5Keys[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingEigrpFeatureMd5KeysOutputReference {
    return new ServiceRoutingEigrpFeatureMd5KeysOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingEigrpFeatureNetworks {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#ip_address ServiceRoutingEigrpFeature#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#ip_address_variable ServiceRoutingEigrpFeature#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * 
  *   - Choices: `255.255.255.255`, `255.255.255.254`, `255.255.255.252`, `255.255.255.248`, `255.255.255.240`, `255.255.255.224`, `255.255.255.192`, `255.255.255.128`, `255.255.255.0`, `255.255.254.0`, `255.255.252.0`, `255.255.248.0`, `255.255.240.0`, `255.255.224.0`, `255.255.192.0`, `255.255.128.0`, `255.255.0.0`, `255.254.0.0`, `255.252.0.0`, `255.240.0.0`, `255.224.0.0`, `255.192.0.0`, `255.128.0.0`, `255.0.0.0`, `254.0.0.0`, `252.0.0.0`, `248.0.0.0`, `240.0.0.0`, `224.0.0.0`, `192.0.0.0`, `128.0.0.0`, `0.0.0.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#mask ServiceRoutingEigrpFeature#mask}
  */
  readonly mask?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#mask_variable ServiceRoutingEigrpFeature#mask_variable}
  */
  readonly maskVariable?: string;
}

export function serviceRoutingEigrpFeatureNetworksToTerraform(struct?: ServiceRoutingEigrpFeatureNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip_address: cdktf.stringToTerraform(struct!.ipAddress),
    ip_address_variable: cdktf.stringToTerraform(struct!.ipAddressVariable),
    mask: cdktf.stringToTerraform(struct!.mask),
    mask_variable: cdktf.stringToTerraform(struct!.maskVariable),
  }
}


export function serviceRoutingEigrpFeatureNetworksToHclTerraform(struct?: ServiceRoutingEigrpFeatureNetworks | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    mask: {
      value: cdktf.stringToHclTerraform(struct!.mask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mask_variable: {
      value: cdktf.stringToHclTerraform(struct!.maskVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingEigrpFeatureNetworksOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingEigrpFeatureNetworks | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddress = this._ipAddress;
    }
    if (this._ipAddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddressVariable = this._ipAddressVariable;
    }
    if (this._mask !== undefined) {
      hasAnyValues = true;
      internalValueResult.mask = this._mask;
    }
    if (this._maskVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.maskVariable = this._maskVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingEigrpFeatureNetworks | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipAddress = undefined;
      this._ipAddressVariable = undefined;
      this._mask = undefined;
      this._maskVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipAddress = value.ipAddress;
      this._ipAddressVariable = value.ipAddressVariable;
      this._mask = value.mask;
      this._maskVariable = value.maskVariable;
    }
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

  // mask - computed: false, optional: true, required: false
  private _mask?: string; 
  public get mask() {
    return this.getStringAttribute('mask');
  }
  public set mask(value: string) {
    this._mask = value;
  }
  public resetMask() {
    this._mask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskInput() {
    return this._mask;
  }

  // mask_variable - computed: false, optional: true, required: false
  private _maskVariable?: string; 
  public get maskVariable() {
    return this.getStringAttribute('mask_variable');
  }
  public set maskVariable(value: string) {
    this._maskVariable = value;
  }
  public resetMaskVariable() {
    this._maskVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maskVariableInput() {
    return this._maskVariable;
  }
}

export class ServiceRoutingEigrpFeatureNetworksList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingEigrpFeatureNetworks[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingEigrpFeatureNetworksOutputReference {
    return new ServiceRoutingEigrpFeatureNetworksOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServiceRoutingEigrpFeatureRedistributes {
  /**
  * Set the protocol to redistribute routes from
  *   - Choices: `bgp`, `connected`, `nat-route`, `omp`, `ospf`, `ospfv3`, `static`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#protocol ServiceRoutingEigrpFeature#protocol}
  */
  readonly protocol?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#protocol_variable ServiceRoutingEigrpFeature#protocol_variable}
  */
  readonly protocolVariable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#route_policy_id ServiceRoutingEigrpFeature#route_policy_id}
  */
  readonly routePolicyId?: string;
}

export function serviceRoutingEigrpFeatureRedistributesToTerraform(struct?: ServiceRoutingEigrpFeatureRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    protocol: cdktf.stringToTerraform(struct!.protocol),
    protocol_variable: cdktf.stringToTerraform(struct!.protocolVariable),
    route_policy_id: cdktf.stringToTerraform(struct!.routePolicyId),
  }
}


export function serviceRoutingEigrpFeatureRedistributesToHclTerraform(struct?: ServiceRoutingEigrpFeatureRedistributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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
    route_policy_id: {
      value: cdktf.stringToHclTerraform(struct!.routePolicyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServiceRoutingEigrpFeatureRedistributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServiceRoutingEigrpFeatureRedistributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._protocolVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocolVariable = this._protocolVariable;
    }
    if (this._routePolicyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.routePolicyId = this._routePolicyId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServiceRoutingEigrpFeatureRedistributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._protocol = undefined;
      this._protocolVariable = undefined;
      this._routePolicyId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._protocol = value.protocol;
      this._protocolVariable = value.protocolVariable;
      this._routePolicyId = value.routePolicyId;
    }
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

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
  }
}

export class ServiceRoutingEigrpFeatureRedistributesList extends cdktf.ComplexList {
  public internalValue? : ServiceRoutingEigrpFeatureRedistributes[] | cdktf.IResolvable

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
  public get(index: number): ServiceRoutingEigrpFeatureRedistributesOutputReference {
    return new ServiceRoutingEigrpFeatureRedistributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature sdwan_service_routing_eigrp_feature}
*/
export class ServiceRoutingEigrpFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_service_routing_eigrp_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceRoutingEigrpFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceRoutingEigrpFeature to import
  * @param importFromId The id of the existing ServiceRoutingEigrpFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceRoutingEigrpFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_service_routing_eigrp_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/service_routing_eigrp_feature sdwan_service_routing_eigrp_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceRoutingEigrpFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceRoutingEigrpFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_service_routing_eigrp_feature',
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
    this._authenticationType = config.authenticationType;
    this._authenticationTypeVariable = config.authenticationTypeVariable;
    this._autonomousSystemId = config.autonomousSystemId;
    this._autonomousSystemIdVariable = config.autonomousSystemIdVariable;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._filter = config.filter;
    this._filterVariable = config.filterVariable;
    this._helloInterval = config.helloInterval;
    this._helloIntervalVariable = config.helloIntervalVariable;
    this._hmacAuthenticationKey = config.hmacAuthenticationKey;
    this._hmacAuthenticationKeyVariable = config.hmacAuthenticationKeyVariable;
    this._holdTime = config.holdTime;
    this._holdTimeVariable = config.holdTimeVariable;
    this._interfaces.internalValue = config.interfaces;
    this._md5Keys.internalValue = config.md5Keys;
    this._name = config.name;
    this._networks.internalValue = config.networks;
    this._redistributes.internalValue = config.redistributes;
    this._routePolicyId = config.routePolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // autonomous_system_id - computed: false, optional: true, required: false
  private _autonomousSystemId?: number; 
  public get autonomousSystemId() {
    return this.getNumberAttribute('autonomous_system_id');
  }
  public set autonomousSystemId(value: number) {
    this._autonomousSystemId = value;
  }
  public resetAutonomousSystemId() {
    this._autonomousSystemId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemIdInput() {
    return this._autonomousSystemId;
  }

  // autonomous_system_id_variable - computed: false, optional: true, required: false
  private _autonomousSystemIdVariable?: string; 
  public get autonomousSystemIdVariable() {
    return this.getStringAttribute('autonomous_system_id_variable');
  }
  public set autonomousSystemIdVariable(value: string) {
    this._autonomousSystemIdVariable = value;
  }
  public resetAutonomousSystemIdVariable() {
    this._autonomousSystemIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousSystemIdVariableInput() {
    return this._autonomousSystemIdVariable;
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
  private _interfaces = new ServiceRoutingEigrpFeatureInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: ServiceRoutingEigrpFeatureInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // md5_keys - computed: false, optional: true, required: false
  private _md5Keys = new ServiceRoutingEigrpFeatureMd5KeysList(this, "md5_keys", false);
  public get md5Keys() {
    return this._md5Keys;
  }
  public putMd5Keys(value: ServiceRoutingEigrpFeatureMd5Keys[] | cdktf.IResolvable) {
    this._md5Keys.internalValue = value;
  }
  public resetMd5Keys() {
    this._md5Keys.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get md5KeysInput() {
    return this._md5Keys.internalValue;
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

  // networks - computed: false, optional: false, required: true
  private _networks = new ServiceRoutingEigrpFeatureNetworksList(this, "networks", false);
  public get networks() {
    return this._networks;
  }
  public putNetworks(value: ServiceRoutingEigrpFeatureNetworks[] | cdktf.IResolvable) {
    this._networks.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networksInput() {
    return this._networks.internalValue;
  }

  // redistributes - computed: false, optional: true, required: false
  private _redistributes = new ServiceRoutingEigrpFeatureRedistributesList(this, "redistributes", false);
  public get redistributes() {
    return this._redistributes;
  }
  public putRedistributes(value: ServiceRoutingEigrpFeatureRedistributes[] | cdktf.IResolvable) {
    this._redistributes.internalValue = value;
  }
  public resetRedistributes() {
    this._redistributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redistributesInput() {
    return this._redistributes.internalValue;
  }

  // route_policy_id - computed: false, optional: true, required: false
  private _routePolicyId?: string; 
  public get routePolicyId() {
    return this.getStringAttribute('route_policy_id');
  }
  public set routePolicyId(value: string) {
    this._routePolicyId = value;
  }
  public resetRoutePolicyId() {
    this._routePolicyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routePolicyIdInput() {
    return this._routePolicyId;
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
      authentication_type: cdktf.stringToTerraform(this._authenticationType),
      authentication_type_variable: cdktf.stringToTerraform(this._authenticationTypeVariable),
      autonomous_system_id: cdktf.numberToTerraform(this._autonomousSystemId),
      autonomous_system_id_variable: cdktf.stringToTerraform(this._autonomousSystemIdVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      filter: cdktf.booleanToTerraform(this._filter),
      filter_variable: cdktf.stringToTerraform(this._filterVariable),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      hello_interval_variable: cdktf.stringToTerraform(this._helloIntervalVariable),
      hmac_authentication_key: cdktf.stringToTerraform(this._hmacAuthenticationKey),
      hmac_authentication_key_variable: cdktf.stringToTerraform(this._hmacAuthenticationKeyVariable),
      hold_time: cdktf.numberToTerraform(this._holdTime),
      hold_time_variable: cdktf.stringToTerraform(this._holdTimeVariable),
      interfaces: cdktf.listMapper(serviceRoutingEigrpFeatureInterfacesToTerraform, false)(this._interfaces.internalValue),
      md5_keys: cdktf.listMapper(serviceRoutingEigrpFeatureMd5KeysToTerraform, false)(this._md5Keys.internalValue),
      name: cdktf.stringToTerraform(this._name),
      networks: cdktf.listMapper(serviceRoutingEigrpFeatureNetworksToTerraform, false)(this._networks.internalValue),
      redistributes: cdktf.listMapper(serviceRoutingEigrpFeatureRedistributesToTerraform, false)(this._redistributes.internalValue),
      route_policy_id: cdktf.stringToTerraform(this._routePolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      autonomous_system_id: {
        value: cdktf.numberToHclTerraform(this._autonomousSystemId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      autonomous_system_id_variable: {
        value: cdktf.stringToHclTerraform(this._autonomousSystemIdVariable),
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
      feature_profile_id: {
        value: cdktf.stringToHclTerraform(this._featureProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: cdktf.listMapperHcl(serviceRoutingEigrpFeatureInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutingEigrpFeatureInterfacesList",
      },
      md5_keys: {
        value: cdktf.listMapperHcl(serviceRoutingEigrpFeatureMd5KeysToHclTerraform, false)(this._md5Keys.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutingEigrpFeatureMd5KeysList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      networks: {
        value: cdktf.listMapperHcl(serviceRoutingEigrpFeatureNetworksToHclTerraform, false)(this._networks.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutingEigrpFeatureNetworksList",
      },
      redistributes: {
        value: cdktf.listMapperHcl(serviceRoutingEigrpFeatureRedistributesToHclTerraform, false)(this._redistributes.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServiceRoutingEigrpFeatureRedistributesList",
      },
      route_policy_id: {
        value: cdktf.stringToHclTerraform(this._routePolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
