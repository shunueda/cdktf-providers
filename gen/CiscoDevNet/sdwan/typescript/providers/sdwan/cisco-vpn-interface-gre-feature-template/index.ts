// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoVpnInterfaceGreFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apply ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#access_lists CiscoVpnInterfaceGreFeatureTemplate#access_lists}
  */
  readonly accessLists?: CiscoVpnInterfaceGreFeatureTemplateAccessLists[] | cdktf.IResolvable;
  /**
  * Enable Application Tunnel Type
  *   - Choices: `none`, `sig`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#application CiscoVpnInterfaceGreFeatureTemplate#application}
  */
  readonly application?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#application_variable CiscoVpnInterfaceGreFeatureTemplate#application_variable}
  */
  readonly applicationVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#clear_dont_fragment CiscoVpnInterfaceGreFeatureTemplate#clear_dont_fragment}
  */
  readonly clearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#clear_dont_fragment_variable CiscoVpnInterfaceGreFeatureTemplate#clear_dont_fragment_variable}
  */
  readonly clearDontFragmentVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#description CiscoVpnInterfaceGreFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#device_types CiscoVpnInterfaceGreFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#interface_description CiscoVpnInterfaceGreFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#interface_description_variable CiscoVpnInterfaceGreFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface name: ge0/<0-..> or ge0/<0-..>.vlanid or irb<bridgeid:1-63> or loopback<string> or natpool-<1..31> when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#interface_name CiscoVpnInterfaceGreFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#interface_name_variable CiscoVpnInterfaceGreFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#ip_address CiscoVpnInterfaceGreFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#ip_address_variable CiscoVpnInterfaceGreFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * Interface MTU <576..2000>, in bytes
  *   - Range: `64`-`18000`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#ip_mtu CiscoVpnInterfaceGreFeatureTemplate#ip_mtu}
  */
  readonly ipMtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#ip_mtu_variable CiscoVpnInterfaceGreFeatureTemplate#ip_mtu_variable}
  */
  readonly ipMtuVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#name CiscoVpnInterfaceGreFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Name of rewrite rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#rewrite_rule CiscoVpnInterfaceGreFeatureTemplate#rewrite_rule}
  */
  readonly rewriteRule?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#rewrite_rule_variable CiscoVpnInterfaceGreFeatureTemplate#rewrite_rule_variable}
  */
  readonly rewriteRuleVariable?: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#shutdown CiscoVpnInterfaceGreFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#shutdown_variable CiscoVpnInterfaceGreFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tcp_mss_adjust CiscoVpnInterfaceGreFeatureTemplate#tcp_mss_adjust}
  */
  readonly tcpMssAdjust?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tcp_mss_adjust_variable CiscoVpnInterfaceGreFeatureTemplate#tcp_mss_adjust_variable}
  */
  readonly tcpMssAdjustVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tracker CiscoVpnInterfaceGreFeatureTemplate#tracker}
  */
  readonly tracker?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tracker_variable CiscoVpnInterfaceGreFeatureTemplate#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Tunnel destination IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_destination CiscoVpnInterfaceGreFeatureTemplate#tunnel_destination}
  */
  readonly tunnelDestination?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_destination_variable CiscoVpnInterfaceGreFeatureTemplate#tunnel_destination_variable}
  */
  readonly tunnelDestinationVariable?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_route_via CiscoVpnInterfaceGreFeatureTemplate#tunnel_route_via}
  */
  readonly tunnelRouteVia?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_route_via_variable CiscoVpnInterfaceGreFeatureTemplate#tunnel_route_via_variable}
  */
  readonly tunnelRouteViaVariable?: string;
  /**
  * Tunnel source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_source CiscoVpnInterfaceGreFeatureTemplate#tunnel_source}
  */
  readonly tunnelSource?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_source_interface CiscoVpnInterfaceGreFeatureTemplate#tunnel_source_interface}
  */
  readonly tunnelSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_source_interface_variable CiscoVpnInterfaceGreFeatureTemplate#tunnel_source_interface_variable}
  */
  readonly tunnelSourceInterfaceVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#tunnel_source_variable CiscoVpnInterfaceGreFeatureTemplate#tunnel_source_variable}
  */
  readonly tunnelSourceVariable?: string;
}
export interface CiscoVpnInterfaceGreFeatureTemplateAccessLists {
  /**
  * Name of access list
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#acl_name CiscoVpnInterfaceGreFeatureTemplate#acl_name}
  */
  readonly aclName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#acl_name_variable CiscoVpnInterfaceGreFeatureTemplate#acl_name_variable}
  */
  readonly aclNameVariable?: string;
  /**
  * Direction
  *   - Choices: `in`, `out`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#direction CiscoVpnInterfaceGreFeatureTemplate#direction}
  */
  readonly direction?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#optional CiscoVpnInterfaceGreFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoVpnInterfaceGreFeatureTemplateAccessListsToTerraform(struct?: CiscoVpnInterfaceGreFeatureTemplateAccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acl_name: cdktf.stringToTerraform(struct!.aclName),
    acl_name_variable: cdktf.stringToTerraform(struct!.aclNameVariable),
    direction: cdktf.stringToTerraform(struct!.direction),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoVpnInterfaceGreFeatureTemplateAccessListsToHclTerraform(struct?: CiscoVpnInterfaceGreFeatureTemplateAccessLists | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acl_name: {
      value: cdktf.stringToHclTerraform(struct!.aclName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    acl_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.aclNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    direction: {
      value: cdktf.stringToHclTerraform(struct!.direction),
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

export class CiscoVpnInterfaceGreFeatureTemplateAccessListsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CiscoVpnInterfaceGreFeatureTemplateAccessLists | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aclName !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclName = this._aclName;
    }
    if (this._aclNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.aclNameVariable = this._aclNameVariable;
    }
    if (this._direction !== undefined) {
      hasAnyValues = true;
      internalValueResult.direction = this._direction;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoVpnInterfaceGreFeatureTemplateAccessLists | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aclName = undefined;
      this._aclNameVariable = undefined;
      this._direction = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aclName = value.aclName;
      this._aclNameVariable = value.aclNameVariable;
      this._direction = value.direction;
      this._optional = value.optional;
    }
  }

  // acl_name - computed: false, optional: true, required: false
  private _aclName?: string; 
  public get aclName() {
    return this.getStringAttribute('acl_name');
  }
  public set aclName(value: string) {
    this._aclName = value;
  }
  public resetAclName() {
    this._aclName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameInput() {
    return this._aclName;
  }

  // acl_name_variable - computed: false, optional: true, required: false
  private _aclNameVariable?: string; 
  public get aclNameVariable() {
    return this.getStringAttribute('acl_name_variable');
  }
  public set aclNameVariable(value: string) {
    this._aclNameVariable = value;
  }
  public resetAclNameVariable() {
    this._aclNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aclNameVariableInput() {
    return this._aclNameVariable;
  }

  // direction - computed: false, optional: true, required: false
  private _direction?: string; 
  public get direction() {
    return this.getStringAttribute('direction');
  }
  public set direction(value: string) {
    this._direction = value;
  }
  public resetDirection() {
    this._direction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directionInput() {
    return this._direction;
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

export class CiscoVpnInterfaceGreFeatureTemplateAccessListsList extends cdktf.ComplexList {
  public internalValue? : CiscoVpnInterfaceGreFeatureTemplateAccessLists[] | cdktf.IResolvable

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
  public get(index: number): CiscoVpnInterfaceGreFeatureTemplateAccessListsOutputReference {
    return new CiscoVpnInterfaceGreFeatureTemplateAccessListsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template sdwan_cisco_vpn_interface_gre_feature_template}
*/
export class CiscoVpnInterfaceGreFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_interface_gre_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoVpnInterfaceGreFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoVpnInterfaceGreFeatureTemplate to import
  * @param importFromId The id of the existing CiscoVpnInterfaceGreFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoVpnInterfaceGreFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_interface_gre_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_gre_feature_template sdwan_cisco_vpn_interface_gre_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoVpnInterfaceGreFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoVpnInterfaceGreFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_interface_gre_feature_template',
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
    this._accessLists.internalValue = config.accessLists;
    this._application = config.application;
    this._applicationVariable = config.applicationVariable;
    this._clearDontFragment = config.clearDontFragment;
    this._clearDontFragmentVariable = config.clearDontFragmentVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._ipAddress = config.ipAddress;
    this._ipAddressVariable = config.ipAddressVariable;
    this._ipMtu = config.ipMtu;
    this._ipMtuVariable = config.ipMtuVariable;
    this._name = config.name;
    this._rewriteRule = config.rewriteRule;
    this._rewriteRuleVariable = config.rewriteRuleVariable;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMssAdjust = config.tcpMssAdjust;
    this._tcpMssAdjustVariable = config.tcpMssAdjustVariable;
    this._tracker = config.tracker;
    this._trackerVariable = config.trackerVariable;
    this._tunnelDestination = config.tunnelDestination;
    this._tunnelDestinationVariable = config.tunnelDestinationVariable;
    this._tunnelRouteVia = config.tunnelRouteVia;
    this._tunnelRouteViaVariable = config.tunnelRouteViaVariable;
    this._tunnelSource = config.tunnelSource;
    this._tunnelSourceInterface = config.tunnelSourceInterface;
    this._tunnelSourceInterfaceVariable = config.tunnelSourceInterfaceVariable;
    this._tunnelSourceVariable = config.tunnelSourceVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_lists - computed: false, optional: true, required: false
  private _accessLists = new CiscoVpnInterfaceGreFeatureTemplateAccessListsList(this, "access_lists", false);
  public get accessLists() {
    return this._accessLists;
  }
  public putAccessLists(value: CiscoVpnInterfaceGreFeatureTemplateAccessLists[] | cdktf.IResolvable) {
    this._accessLists.internalValue = value;
  }
  public resetAccessLists() {
    this._accessLists.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessListsInput() {
    return this._accessLists.internalValue;
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // application_variable - computed: false, optional: true, required: false
  private _applicationVariable?: string; 
  public get applicationVariable() {
    return this.getStringAttribute('application_variable');
  }
  public set applicationVariable(value: string) {
    this._applicationVariable = value;
  }
  public resetApplicationVariable() {
    this._applicationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationVariableInput() {
    return this._applicationVariable;
  }

  // clear_dont_fragment - computed: false, optional: true, required: false
  private _clearDontFragment?: boolean | cdktf.IResolvable; 
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }
  public set clearDontFragment(value: boolean | cdktf.IResolvable) {
    this._clearDontFragment = value;
  }
  public resetClearDontFragment() {
    this._clearDontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentInput() {
    return this._clearDontFragment;
  }

  // clear_dont_fragment_variable - computed: false, optional: true, required: false
  private _clearDontFragmentVariable?: string; 
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }
  public set clearDontFragmentVariable(value: string) {
    this._clearDontFragmentVariable = value;
  }
  public resetClearDontFragmentVariable() {
    this._clearDontFragmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentVariableInput() {
    return this._clearDontFragmentVariable;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_description_variable - computed: false, optional: true, required: false
  private _interfaceDescriptionVariable?: string; 
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }
  public set interfaceDescriptionVariable(value: string) {
    this._interfaceDescriptionVariable = value;
  }
  public resetInterfaceDescriptionVariable() {
    this._interfaceDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionVariableInput() {
    return this._interfaceDescriptionVariable;
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

  // ip_mtu - computed: false, optional: true, required: false
  private _ipMtu?: number; 
  public get ipMtu() {
    return this.getNumberAttribute('ip_mtu');
  }
  public set ipMtu(value: number) {
    this._ipMtu = value;
  }
  public resetIpMtu() {
    this._ipMtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuInput() {
    return this._ipMtu;
  }

  // ip_mtu_variable - computed: false, optional: true, required: false
  private _ipMtuVariable?: string; 
  public get ipMtuVariable() {
    return this.getStringAttribute('ip_mtu_variable');
  }
  public set ipMtuVariable(value: string) {
    this._ipMtuVariable = value;
  }
  public resetIpMtuVariable() {
    this._ipMtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipMtuVariableInput() {
    return this._ipMtuVariable;
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

  // rewrite_rule - computed: false, optional: true, required: false
  private _rewriteRule?: string; 
  public get rewriteRule() {
    return this.getStringAttribute('rewrite_rule');
  }
  public set rewriteRule(value: string) {
    this._rewriteRule = value;
  }
  public resetRewriteRule() {
    this._rewriteRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleInput() {
    return this._rewriteRule;
  }

  // rewrite_rule_variable - computed: false, optional: true, required: false
  private _rewriteRuleVariable?: string; 
  public get rewriteRuleVariable() {
    return this.getStringAttribute('rewrite_rule_variable');
  }
  public set rewriteRuleVariable(value: string) {
    this._rewriteRuleVariable = value;
  }
  public resetRewriteRuleVariable() {
    this._rewriteRuleVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rewriteRuleVariableInput() {
    return this._rewriteRuleVariable;
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

  // tcp_mss_adjust - computed: false, optional: true, required: false
  private _tcpMssAdjust?: number; 
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }
  public set tcpMssAdjust(value: number) {
    this._tcpMssAdjust = value;
  }
  public resetTcpMssAdjust() {
    this._tcpMssAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustInput() {
    return this._tcpMssAdjust;
  }

  // tcp_mss_adjust_variable - computed: false, optional: true, required: false
  private _tcpMssAdjustVariable?: string; 
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }
  public set tcpMssAdjustVariable(value: string) {
    this._tcpMssAdjustVariable = value;
  }
  public resetTcpMssAdjustVariable() {
    this._tcpMssAdjustVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustVariableInput() {
    return this._tcpMssAdjustVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tracker - computed: false, optional: true, required: false
  private _tracker?: string[]; 
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }
  public set tracker(value: string[]) {
    this._tracker = value;
  }
  public resetTracker() {
    this._tracker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerInput() {
    return this._tracker;
  }

  // tracker_variable - computed: false, optional: true, required: false
  private _trackerVariable?: string; 
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }
  public set trackerVariable(value: string) {
    this._trackerVariable = value;
  }
  public resetTrackerVariable() {
    this._trackerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerVariableInput() {
    return this._trackerVariable;
  }

  // tunnel_destination - computed: false, optional: true, required: false
  private _tunnelDestination?: string; 
  public get tunnelDestination() {
    return this.getStringAttribute('tunnel_destination');
  }
  public set tunnelDestination(value: string) {
    this._tunnelDestination = value;
  }
  public resetTunnelDestination() {
    this._tunnelDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationInput() {
    return this._tunnelDestination;
  }

  // tunnel_destination_variable - computed: false, optional: true, required: false
  private _tunnelDestinationVariable?: string; 
  public get tunnelDestinationVariable() {
    return this.getStringAttribute('tunnel_destination_variable');
  }
  public set tunnelDestinationVariable(value: string) {
    this._tunnelDestinationVariable = value;
  }
  public resetTunnelDestinationVariable() {
    this._tunnelDestinationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationVariableInput() {
    return this._tunnelDestinationVariable;
  }

  // tunnel_route_via - computed: false, optional: true, required: false
  private _tunnelRouteVia?: string; 
  public get tunnelRouteVia() {
    return this.getStringAttribute('tunnel_route_via');
  }
  public set tunnelRouteVia(value: string) {
    this._tunnelRouteVia = value;
  }
  public resetTunnelRouteVia() {
    this._tunnelRouteVia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaInput() {
    return this._tunnelRouteVia;
  }

  // tunnel_route_via_variable - computed: false, optional: true, required: false
  private _tunnelRouteViaVariable?: string; 
  public get tunnelRouteViaVariable() {
    return this.getStringAttribute('tunnel_route_via_variable');
  }
  public set tunnelRouteViaVariable(value: string) {
    this._tunnelRouteViaVariable = value;
  }
  public resetTunnelRouteViaVariable() {
    this._tunnelRouteViaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaVariableInput() {
    return this._tunnelRouteViaVariable;
  }

  // tunnel_source - computed: false, optional: true, required: false
  private _tunnelSource?: string; 
  public get tunnelSource() {
    return this.getStringAttribute('tunnel_source');
  }
  public set tunnelSource(value: string) {
    this._tunnelSource = value;
  }
  public resetTunnelSource() {
    this._tunnelSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInput() {
    return this._tunnelSource;
  }

  // tunnel_source_interface - computed: false, optional: true, required: false
  private _tunnelSourceInterface?: string; 
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }
  public set tunnelSourceInterface(value: string) {
    this._tunnelSourceInterface = value;
  }
  public resetTunnelSourceInterface() {
    this._tunnelSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceInput() {
    return this._tunnelSourceInterface;
  }

  // tunnel_source_interface_variable - computed: false, optional: true, required: false
  private _tunnelSourceInterfaceVariable?: string; 
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }
  public set tunnelSourceInterfaceVariable(value: string) {
    this._tunnelSourceInterfaceVariable = value;
  }
  public resetTunnelSourceInterfaceVariable() {
    this._tunnelSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceVariableInput() {
    return this._tunnelSourceInterfaceVariable;
  }

  // tunnel_source_variable - computed: false, optional: true, required: false
  private _tunnelSourceVariable?: string; 
  public get tunnelSourceVariable() {
    return this.getStringAttribute('tunnel_source_variable');
  }
  public set tunnelSourceVariable(value: string) {
    this._tunnelSourceVariable = value;
  }
  public resetTunnelSourceVariable() {
    this._tunnelSourceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceVariableInput() {
    return this._tunnelSourceVariable;
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
      access_lists: cdktf.listMapper(ciscoVpnInterfaceGreFeatureTemplateAccessListsToTerraform, false)(this._accessLists.internalValue),
      application: cdktf.stringToTerraform(this._application),
      application_variable: cdktf.stringToTerraform(this._applicationVariable),
      clear_dont_fragment: cdktf.booleanToTerraform(this._clearDontFragment),
      clear_dont_fragment_variable: cdktf.stringToTerraform(this._clearDontFragmentVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_address_variable: cdktf.stringToTerraform(this._ipAddressVariable),
      ip_mtu: cdktf.numberToTerraform(this._ipMtu),
      ip_mtu_variable: cdktf.stringToTerraform(this._ipMtuVariable),
      name: cdktf.stringToTerraform(this._name),
      rewrite_rule: cdktf.stringToTerraform(this._rewriteRule),
      rewrite_rule_variable: cdktf.stringToTerraform(this._rewriteRuleVariable),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss_adjust: cdktf.numberToTerraform(this._tcpMssAdjust),
      tcp_mss_adjust_variable: cdktf.stringToTerraform(this._tcpMssAdjustVariable),
      tracker: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tracker),
      tracker_variable: cdktf.stringToTerraform(this._trackerVariable),
      tunnel_destination: cdktf.stringToTerraform(this._tunnelDestination),
      tunnel_destination_variable: cdktf.stringToTerraform(this._tunnelDestinationVariable),
      tunnel_route_via: cdktf.stringToTerraform(this._tunnelRouteVia),
      tunnel_route_via_variable: cdktf.stringToTerraform(this._tunnelRouteViaVariable),
      tunnel_source: cdktf.stringToTerraform(this._tunnelSource),
      tunnel_source_interface: cdktf.stringToTerraform(this._tunnelSourceInterface),
      tunnel_source_interface_variable: cdktf.stringToTerraform(this._tunnelSourceInterfaceVariable),
      tunnel_source_variable: cdktf.stringToTerraform(this._tunnelSourceVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_lists: {
        value: cdktf.listMapperHcl(ciscoVpnInterfaceGreFeatureTemplateAccessListsToHclTerraform, false)(this._accessLists.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoVpnInterfaceGreFeatureTemplateAccessListsList",
      },
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_variable: {
        value: cdktf.stringToHclTerraform(this._applicationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_dont_fragment: {
        value: cdktf.booleanToHclTerraform(this._clearDontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_dont_fragment_variable: {
        value: cdktf.stringToHclTerraform(this._clearDontFragmentVariable),
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
      interface_description: {
        value: cdktf.stringToHclTerraform(this._interfaceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDescriptionVariable),
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
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_mtu: {
        value: cdktf.numberToHclTerraform(this._ipMtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ip_mtu_variable: {
        value: cdktf.stringToHclTerraform(this._ipMtuVariable),
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
      rewrite_rule: {
        value: cdktf.stringToHclTerraform(this._rewriteRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rewrite_rule_variable: {
        value: cdktf.stringToHclTerraform(this._rewriteRuleVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss_adjust: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjust),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_adjust_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssAdjustVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tracker),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tracker_variable: {
        value: cdktf.stringToHclTerraform(this._trackerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination: {
        value: cdktf.stringToHclTerraform(this._tunnelDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteVia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteViaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source: {
        value: cdktf.stringToHclTerraform(this._tunnelSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
