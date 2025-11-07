// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OtherUcseFeatureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Dedicated
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#access_port_dedicated OtherUcseFeature#access_port_dedicated}
  */
  readonly accessPortDedicated?: boolean | cdktf.IResolvable;
  /**
  * , Attribute conditional on `access_port_dedicated` being equal to `false`
  *   - Choices: `ge2`, `te2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#access_port_shared_failover_type OtherUcseFeature#access_port_shared_failover_type}
  */
  readonly accessPortSharedFailoverType?: string;
  /**
  * , Attribute conditional on `access_port_dedicated` being equal to `false`
  *   - Choices: `ge1`, `ge2`, `ge3`, `te2`, `te3`, `console`, `failover`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#access_port_shared_type OtherUcseFeature#access_port_shared_type}
  */
  readonly accessPortSharedType?: string;
  /**
  * Assign priority
  *   - Range: `0`-`7`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#assign_priority OtherUcseFeature#assign_priority}
  */
  readonly assignPriority?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#assign_priority_variable OtherUcseFeature#assign_priority_variable}
  */
  readonly assignPriorityVariable?: string;
  /**
  * Bay
  *   - Range: `0`-`2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#bay OtherUcseFeature#bay}
  */
  readonly bay: number;
  /**
  * Assign default gateway
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#default_gateway OtherUcseFeature#default_gateway}
  */
  readonly defaultGateway?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#default_gateway_variable OtherUcseFeature#default_gateway_variable}
  */
  readonly defaultGatewayVariable?: string;
  /**
  * The description of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#description OtherUcseFeature#description}
  */
  readonly description?: string;
  /**
  * Feature Profile ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#feature_profile_id OtherUcseFeature#feature_profile_id}
  */
  readonly featureProfileId: string;
  /**
  * Interface name: GigabitEthernet0/<>/<> when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#interfaces OtherUcseFeature#interfaces}
  */
  readonly interfaces?: OtherUcseFeatureInterfaces[] | cdktf.IResolvable;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#ipv4_address OtherUcseFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#ipv4_address_variable OtherUcseFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * The name of the Feature
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#name OtherUcseFeature#name}
  */
  readonly name: string;
  /**
  * Slot
  *   - Range: `0`-`3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#slot OtherUcseFeature#slot}
  */
  readonly slot: number;
  /**
  * Assign Vlan Id
  *   - Range: `2`-`4095`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#vlan_id OtherUcseFeature#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#vlan_id_variable OtherUcseFeature#vlan_id_variable}
  */
  readonly vlanIdVariable?: string;
}
export interface OtherUcseFeatureInterfaces {
  /**
  * Set Inteface name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#interface_name OtherUcseFeature#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#interface_name_variable OtherUcseFeature#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#ipv4_address OtherUcseFeature#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#ipv4_address_variable OtherUcseFeature#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * UCSE Interface VPN
  *   - Range: `1`-`65527`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#ucse_interface_vpn OtherUcseFeature#ucse_interface_vpn}
  */
  readonly ucseInterfaceVpn?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#ucse_interface_vpn_variable OtherUcseFeature#ucse_interface_vpn_variable}
  */
  readonly ucseInterfaceVpnVariable?: string;
}

export function otherUcseFeatureInterfacesToTerraform(struct?: OtherUcseFeatureInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_name: cdktf.stringToTerraform(struct!.interfaceName),
    interface_name_variable: cdktf.stringToTerraform(struct!.interfaceNameVariable),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_variable: cdktf.stringToTerraform(struct!.ipv4AddressVariable),
    ucse_interface_vpn: cdktf.numberToTerraform(struct!.ucseInterfaceVpn),
    ucse_interface_vpn_variable: cdktf.stringToTerraform(struct!.ucseInterfaceVpnVariable),
  }
}


export function otherUcseFeatureInterfacesToHclTerraform(struct?: OtherUcseFeatureInterfaces | cdktf.IResolvable): any {
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
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ucse_interface_vpn: {
      value: cdktf.numberToHclTerraform(struct!.ucseInterfaceVpn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ucse_interface_vpn_variable: {
      value: cdktf.stringToHclTerraform(struct!.ucseInterfaceVpnVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OtherUcseFeatureInterfacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): OtherUcseFeatureInterfaces | cdktf.IResolvable | undefined {
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
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressVariable = this._ipv4AddressVariable;
    }
    if (this._ucseInterfaceVpn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucseInterfaceVpn = this._ucseInterfaceVpn;
    }
    if (this._ucseInterfaceVpnVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ucseInterfaceVpnVariable = this._ucseInterfaceVpnVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OtherUcseFeatureInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfaceName = undefined;
      this._interfaceNameVariable = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressVariable = undefined;
      this._ucseInterfaceVpn = undefined;
      this._ucseInterfaceVpnVariable = undefined;
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
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressVariable = value.ipv4AddressVariable;
      this._ucseInterfaceVpn = value.ucseInterfaceVpn;
      this._ucseInterfaceVpnVariable = value.ucseInterfaceVpnVariable;
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

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // ucse_interface_vpn - computed: false, optional: true, required: false
  private _ucseInterfaceVpn?: number; 
  public get ucseInterfaceVpn() {
    return this.getNumberAttribute('ucse_interface_vpn');
  }
  public set ucseInterfaceVpn(value: number) {
    this._ucseInterfaceVpn = value;
  }
  public resetUcseInterfaceVpn() {
    this._ucseInterfaceVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucseInterfaceVpnInput() {
    return this._ucseInterfaceVpn;
  }

  // ucse_interface_vpn_variable - computed: false, optional: true, required: false
  private _ucseInterfaceVpnVariable?: string; 
  public get ucseInterfaceVpnVariable() {
    return this.getStringAttribute('ucse_interface_vpn_variable');
  }
  public set ucseInterfaceVpnVariable(value: string) {
    this._ucseInterfaceVpnVariable = value;
  }
  public resetUcseInterfaceVpnVariable() {
    this._ucseInterfaceVpnVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ucseInterfaceVpnVariableInput() {
    return this._ucseInterfaceVpnVariable;
  }
}

export class OtherUcseFeatureInterfacesList extends cdktf.ComplexList {
  public internalValue? : OtherUcseFeatureInterfaces[] | cdktf.IResolvable

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
  public get(index: number): OtherUcseFeatureInterfacesOutputReference {
    return new OtherUcseFeatureInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature sdwan_other_ucse_feature}
*/
export class OtherUcseFeature extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_other_ucse_feature";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OtherUcseFeature resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OtherUcseFeature to import
  * @param importFromId The id of the existing OtherUcseFeature that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OtherUcseFeature to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_other_ucse_feature", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/other_ucse_feature sdwan_other_ucse_feature} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OtherUcseFeatureConfig
  */
  public constructor(scope: Construct, id: string, config: OtherUcseFeatureConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_other_ucse_feature',
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
    this._accessPortDedicated = config.accessPortDedicated;
    this._accessPortSharedFailoverType = config.accessPortSharedFailoverType;
    this._accessPortSharedType = config.accessPortSharedType;
    this._assignPriority = config.assignPriority;
    this._assignPriorityVariable = config.assignPriorityVariable;
    this._bay = config.bay;
    this._defaultGateway = config.defaultGateway;
    this._defaultGatewayVariable = config.defaultGatewayVariable;
    this._description = config.description;
    this._featureProfileId = config.featureProfileId;
    this._interfaces.internalValue = config.interfaces;
    this._ipv4Address = config.ipv4Address;
    this._ipv4AddressVariable = config.ipv4AddressVariable;
    this._name = config.name;
    this._slot = config.slot;
    this._vlanId = config.vlanId;
    this._vlanIdVariable = config.vlanIdVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_port_dedicated - computed: false, optional: true, required: false
  private _accessPortDedicated?: boolean | cdktf.IResolvable; 
  public get accessPortDedicated() {
    return this.getBooleanAttribute('access_port_dedicated');
  }
  public set accessPortDedicated(value: boolean | cdktf.IResolvable) {
    this._accessPortDedicated = value;
  }
  public resetAccessPortDedicated() {
    this._accessPortDedicated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPortDedicatedInput() {
    return this._accessPortDedicated;
  }

  // access_port_shared_failover_type - computed: false, optional: true, required: false
  private _accessPortSharedFailoverType?: string; 
  public get accessPortSharedFailoverType() {
    return this.getStringAttribute('access_port_shared_failover_type');
  }
  public set accessPortSharedFailoverType(value: string) {
    this._accessPortSharedFailoverType = value;
  }
  public resetAccessPortSharedFailoverType() {
    this._accessPortSharedFailoverType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPortSharedFailoverTypeInput() {
    return this._accessPortSharedFailoverType;
  }

  // access_port_shared_type - computed: false, optional: true, required: false
  private _accessPortSharedType?: string; 
  public get accessPortSharedType() {
    return this.getStringAttribute('access_port_shared_type');
  }
  public set accessPortSharedType(value: string) {
    this._accessPortSharedType = value;
  }
  public resetAccessPortSharedType() {
    this._accessPortSharedType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessPortSharedTypeInput() {
    return this._accessPortSharedType;
  }

  // assign_priority - computed: false, optional: true, required: false
  private _assignPriority?: number; 
  public get assignPriority() {
    return this.getNumberAttribute('assign_priority');
  }
  public set assignPriority(value: number) {
    this._assignPriority = value;
  }
  public resetAssignPriority() {
    this._assignPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPriorityInput() {
    return this._assignPriority;
  }

  // assign_priority_variable - computed: false, optional: true, required: false
  private _assignPriorityVariable?: string; 
  public get assignPriorityVariable() {
    return this.getStringAttribute('assign_priority_variable');
  }
  public set assignPriorityVariable(value: string) {
    this._assignPriorityVariable = value;
  }
  public resetAssignPriorityVariable() {
    this._assignPriorityVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignPriorityVariableInput() {
    return this._assignPriorityVariable;
  }

  // bay - computed: false, optional: false, required: true
  private _bay?: number; 
  public get bay() {
    return this.getNumberAttribute('bay');
  }
  public set bay(value: number) {
    this._bay = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bayInput() {
    return this._bay;
  }

  // default_gateway - computed: false, optional: true, required: false
  private _defaultGateway?: string; 
  public get defaultGateway() {
    return this.getStringAttribute('default_gateway');
  }
  public set defaultGateway(value: string) {
    this._defaultGateway = value;
  }
  public resetDefaultGateway() {
    this._defaultGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayInput() {
    return this._defaultGateway;
  }

  // default_gateway_variable - computed: false, optional: true, required: false
  private _defaultGatewayVariable?: string; 
  public get defaultGatewayVariable() {
    return this.getStringAttribute('default_gateway_variable');
  }
  public set defaultGatewayVariable(value: string) {
    this._defaultGatewayVariable = value;
  }
  public resetDefaultGatewayVariable() {
    this._defaultGatewayVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultGatewayVariableInput() {
    return this._defaultGatewayVariable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new OtherUcseFeatureInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: OtherUcseFeatureInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
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

  // slot - computed: false, optional: false, required: true
  private _slot?: number; 
  public get slot() {
    return this.getNumberAttribute('slot');
  }
  public set slot(value: number) {
    this._slot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slotInput() {
    return this._slot;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_id_variable - computed: false, optional: true, required: false
  private _vlanIdVariable?: string; 
  public get vlanIdVariable() {
    return this.getStringAttribute('vlan_id_variable');
  }
  public set vlanIdVariable(value: string) {
    this._vlanIdVariable = value;
  }
  public resetVlanIdVariable() {
    this._vlanIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdVariableInput() {
    return this._vlanIdVariable;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_port_dedicated: cdktf.booleanToTerraform(this._accessPortDedicated),
      access_port_shared_failover_type: cdktf.stringToTerraform(this._accessPortSharedFailoverType),
      access_port_shared_type: cdktf.stringToTerraform(this._accessPortSharedType),
      assign_priority: cdktf.numberToTerraform(this._assignPriority),
      assign_priority_variable: cdktf.stringToTerraform(this._assignPriorityVariable),
      bay: cdktf.numberToTerraform(this._bay),
      default_gateway: cdktf.stringToTerraform(this._defaultGateway),
      default_gateway_variable: cdktf.stringToTerraform(this._defaultGatewayVariable),
      description: cdktf.stringToTerraform(this._description),
      feature_profile_id: cdktf.stringToTerraform(this._featureProfileId),
      interfaces: cdktf.listMapper(otherUcseFeatureInterfacesToTerraform, false)(this._interfaces.internalValue),
      ipv4_address: cdktf.stringToTerraform(this._ipv4Address),
      ipv4_address_variable: cdktf.stringToTerraform(this._ipv4AddressVariable),
      name: cdktf.stringToTerraform(this._name),
      slot: cdktf.numberToTerraform(this._slot),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_id_variable: cdktf.stringToTerraform(this._vlanIdVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_port_dedicated: {
        value: cdktf.booleanToHclTerraform(this._accessPortDedicated),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_port_shared_failover_type: {
        value: cdktf.stringToHclTerraform(this._accessPortSharedFailoverType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_port_shared_type: {
        value: cdktf.stringToHclTerraform(this._accessPortSharedType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      assign_priority: {
        value: cdktf.numberToHclTerraform(this._assignPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      assign_priority_variable: {
        value: cdktf.stringToHclTerraform(this._assignPriorityVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bay: {
        value: cdktf.numberToHclTerraform(this._bay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_gateway: {
        value: cdktf.stringToHclTerraform(this._defaultGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_gateway_variable: {
        value: cdktf.stringToHclTerraform(this._defaultGatewayVariable),
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
      interfaces: {
        value: cdktf.listMapperHcl(otherUcseFeatureInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "OtherUcseFeatureInterfacesList",
      },
      ipv4_address: {
        value: cdktf.stringToHclTerraform(this._ipv4Address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipv4AddressVariable),
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
      slot: {
        value: cdktf.numberToHclTerraform(this._slot),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_id_variable: {
        value: cdktf.stringToHclTerraform(this._vlanIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
