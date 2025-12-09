// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateBdConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#arp_flooding SchemaTemplateBd#arp_flooding}
  */
  readonly arpFlooding?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#description SchemaTemplateBd#description}
  */
  readonly description?: string;
  /**
  * Configure dhcp policy in versions before NDO 3.2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#dhcp_policy SchemaTemplateBd#dhcp_policy}
  */
  readonly dhcpPolicy?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#display_name SchemaTemplateBd#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#ep_move_detection_mode SchemaTemplateBd#ep_move_detection_mode}
  */
  readonly epMoveDetectionMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#id SchemaTemplateBd#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#intersite_bum_traffic SchemaTemplateBd#intersite_bum_traffic}
  */
  readonly intersiteBumTraffic?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#ipv6_unknown_multicast_flooding SchemaTemplateBd#ipv6_unknown_multicast_flooding}
  */
  readonly ipv6UnknownMulticastFlooding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#layer2_stretch SchemaTemplateBd#layer2_stretch}
  */
  readonly layer2Stretch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#layer2_unknown_unicast SchemaTemplateBd#layer2_unknown_unicast}
  */
  readonly layer2UnknownUnicast?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#layer3_multicast SchemaTemplateBd#layer3_multicast}
  */
  readonly layer3Multicast?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#multi_destination_flooding SchemaTemplateBd#multi_destination_flooding}
  */
  readonly multiDestinationFlooding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#name SchemaTemplateBd#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#optimize_wan_bandwidth SchemaTemplateBd#optimize_wan_bandwidth}
  */
  readonly optimizeWanBandwidth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#schema_id SchemaTemplateBd#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#template_name SchemaTemplateBd#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#unicast_routing SchemaTemplateBd#unicast_routing}
  */
  readonly unicastRouting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#unknown_multicast_flooding SchemaTemplateBd#unknown_multicast_flooding}
  */
  readonly unknownMulticastFlooding?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#virtual_mac_address SchemaTemplateBd#virtual_mac_address}
  */
  readonly virtualMacAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#vrf_name SchemaTemplateBd#vrf_name}
  */
  readonly vrfName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#vrf_schema_id SchemaTemplateBd#vrf_schema_id}
  */
  readonly vrfSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#vrf_template_name SchemaTemplateBd#vrf_template_name}
  */
  readonly vrfTemplateName?: string;
  /**
  * dhcp_policies block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#dhcp_policies SchemaTemplateBd#dhcp_policies}
  */
  readonly dhcpPolicies?: SchemaTemplateBdDhcpPolicies[] | cdktf.IResolvable;
}
export interface SchemaTemplateBdDhcpPolicies {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#dhcp_option_policy_name SchemaTemplateBd#dhcp_option_policy_name}
  */
  readonly dhcpOptionPolicyName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#dhcp_option_policy_version SchemaTemplateBd#dhcp_option_policy_version}
  */
  readonly dhcpOptionPolicyVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#name SchemaTemplateBd#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#version SchemaTemplateBd#version}
  */
  readonly version?: number;
}

export function schemaTemplateBdDhcpPoliciesToTerraform(struct?: SchemaTemplateBdDhcpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dhcp_option_policy_name: cdktf.stringToTerraform(struct!.dhcpOptionPolicyName),
    dhcp_option_policy_version: cdktf.numberToTerraform(struct!.dhcpOptionPolicyVersion),
    name: cdktf.stringToTerraform(struct!.name),
    version: cdktf.numberToTerraform(struct!.version),
  }
}


export function schemaTemplateBdDhcpPoliciesToHclTerraform(struct?: SchemaTemplateBdDhcpPolicies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dhcp_option_policy_name: {
      value: cdktf.stringToHclTerraform(struct!.dhcpOptionPolicyName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dhcp_option_policy_version: {
      value: cdktf.numberToHclTerraform(struct!.dhcpOptionPolicyVersion),
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

export class SchemaTemplateBdDhcpPoliciesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SchemaTemplateBdDhcpPolicies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dhcpOptionPolicyName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionPolicyName = this._dhcpOptionPolicyName;
    }
    if (this._dhcpOptionPolicyVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.dhcpOptionPolicyVersion = this._dhcpOptionPolicyVersion;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SchemaTemplateBdDhcpPolicies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dhcpOptionPolicyName = undefined;
      this._dhcpOptionPolicyVersion = undefined;
      this._name = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dhcpOptionPolicyName = value.dhcpOptionPolicyName;
      this._dhcpOptionPolicyVersion = value.dhcpOptionPolicyVersion;
      this._name = value.name;
      this._version = value.version;
    }
  }

  // dhcp_option_policy_name - computed: true, optional: true, required: false
  private _dhcpOptionPolicyName?: string; 
  public get dhcpOptionPolicyName() {
    return this.getStringAttribute('dhcp_option_policy_name');
  }
  public set dhcpOptionPolicyName(value: string) {
    this._dhcpOptionPolicyName = value;
  }
  public resetDhcpOptionPolicyName() {
    this._dhcpOptionPolicyName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionPolicyNameInput() {
    return this._dhcpOptionPolicyName;
  }

  // dhcp_option_policy_version - computed: true, optional: true, required: false
  private _dhcpOptionPolicyVersion?: number; 
  public get dhcpOptionPolicyVersion() {
    return this.getNumberAttribute('dhcp_option_policy_version');
  }
  public set dhcpOptionPolicyVersion(value: number) {
    this._dhcpOptionPolicyVersion = value;
  }
  public resetDhcpOptionPolicyVersion() {
    this._dhcpOptionPolicyVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpOptionPolicyVersionInput() {
    return this._dhcpOptionPolicyVersion;
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

  // version - computed: true, optional: true, required: false
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

export class SchemaTemplateBdDhcpPoliciesList extends cdktf.ComplexList {
  public internalValue? : SchemaTemplateBdDhcpPolicies[] | cdktf.IResolvable

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
  public get(index: number): SchemaTemplateBdDhcpPoliciesOutputReference {
    return new SchemaTemplateBdDhcpPoliciesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd mso_schema_template_bd}
*/
export class SchemaTemplateBd extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_bd";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateBd resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateBd to import
  * @param importFromId The id of the existing SchemaTemplateBd that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateBd to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_bd", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_bd mso_schema_template_bd} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateBdConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateBdConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_bd',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._arpFlooding = config.arpFlooding;
    this._description = config.description;
    this._dhcpPolicy = config.dhcpPolicy;
    this._displayName = config.displayName;
    this._epMoveDetectionMode = config.epMoveDetectionMode;
    this._id = config.id;
    this._intersiteBumTraffic = config.intersiteBumTraffic;
    this._ipv6UnknownMulticastFlooding = config.ipv6UnknownMulticastFlooding;
    this._layer2Stretch = config.layer2Stretch;
    this._layer2UnknownUnicast = config.layer2UnknownUnicast;
    this._layer3Multicast = config.layer3Multicast;
    this._multiDestinationFlooding = config.multiDestinationFlooding;
    this._name = config.name;
    this._optimizeWanBandwidth = config.optimizeWanBandwidth;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
    this._unicastRouting = config.unicastRouting;
    this._unknownMulticastFlooding = config.unknownMulticastFlooding;
    this._virtualMacAddress = config.virtualMacAddress;
    this._vrfName = config.vrfName;
    this._vrfSchemaId = config.vrfSchemaId;
    this._vrfTemplateName = config.vrfTemplateName;
    this._dhcpPolicies.internalValue = config.dhcpPolicies;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // arp_flooding - computed: true, optional: true, required: false
  private _arpFlooding?: boolean | cdktf.IResolvable; 
  public get arpFlooding() {
    return this.getBooleanAttribute('arp_flooding');
  }
  public set arpFlooding(value: boolean | cdktf.IResolvable) {
    this._arpFlooding = value;
  }
  public resetArpFlooding() {
    this._arpFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpFloodingInput() {
    return this._arpFlooding;
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

  // dhcp_policy - computed: true, optional: true, required: false
  private _dhcpPolicy?: { [key: string]: string }; 
  public get dhcpPolicy() {
    return this.getStringMapAttribute('dhcp_policy');
  }
  public set dhcpPolicy(value: { [key: string]: string }) {
    this._dhcpPolicy = value;
  }
  public resetDhcpPolicy() {
    this._dhcpPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPolicyInput() {
    return this._dhcpPolicy;
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

  // ep_move_detection_mode - computed: true, optional: true, required: false
  private _epMoveDetectionMode?: string; 
  public get epMoveDetectionMode() {
    return this.getStringAttribute('ep_move_detection_mode');
  }
  public set epMoveDetectionMode(value: string) {
    this._epMoveDetectionMode = value;
  }
  public resetEpMoveDetectionMode() {
    this._epMoveDetectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get epMoveDetectionModeInput() {
    return this._epMoveDetectionMode;
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

  // intersite_bum_traffic - computed: true, optional: true, required: false
  private _intersiteBumTraffic?: boolean | cdktf.IResolvable; 
  public get intersiteBumTraffic() {
    return this.getBooleanAttribute('intersite_bum_traffic');
  }
  public set intersiteBumTraffic(value: boolean | cdktf.IResolvable) {
    this._intersiteBumTraffic = value;
  }
  public resetIntersiteBumTraffic() {
    this._intersiteBumTraffic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intersiteBumTrafficInput() {
    return this._intersiteBumTraffic;
  }

  // ipv6_unknown_multicast_flooding - computed: true, optional: true, required: false
  private _ipv6UnknownMulticastFlooding?: string; 
  public get ipv6UnknownMulticastFlooding() {
    return this.getStringAttribute('ipv6_unknown_multicast_flooding');
  }
  public set ipv6UnknownMulticastFlooding(value: string) {
    this._ipv6UnknownMulticastFlooding = value;
  }
  public resetIpv6UnknownMulticastFlooding() {
    this._ipv6UnknownMulticastFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6UnknownMulticastFloodingInput() {
    return this._ipv6UnknownMulticastFlooding;
  }

  // layer2_stretch - computed: true, optional: true, required: false
  private _layer2Stretch?: boolean | cdktf.IResolvable; 
  public get layer2Stretch() {
    return this.getBooleanAttribute('layer2_stretch');
  }
  public set layer2Stretch(value: boolean | cdktf.IResolvable) {
    this._layer2Stretch = value;
  }
  public resetLayer2Stretch() {
    this._layer2Stretch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2StretchInput() {
    return this._layer2Stretch;
  }

  // layer2_unknown_unicast - computed: true, optional: true, required: false
  private _layer2UnknownUnicast?: string; 
  public get layer2UnknownUnicast() {
    return this.getStringAttribute('layer2_unknown_unicast');
  }
  public set layer2UnknownUnicast(value: string) {
    this._layer2UnknownUnicast = value;
  }
  public resetLayer2UnknownUnicast() {
    this._layer2UnknownUnicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer2UnknownUnicastInput() {
    return this._layer2UnknownUnicast;
  }

  // layer3_multicast - computed: true, optional: true, required: false
  private _layer3Multicast?: boolean | cdktf.IResolvable; 
  public get layer3Multicast() {
    return this.getBooleanAttribute('layer3_multicast');
  }
  public set layer3Multicast(value: boolean | cdktf.IResolvable) {
    this._layer3Multicast = value;
  }
  public resetLayer3Multicast() {
    this._layer3Multicast = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get layer3MulticastInput() {
    return this._layer3Multicast;
  }

  // multi_destination_flooding - computed: true, optional: true, required: false
  private _multiDestinationFlooding?: string; 
  public get multiDestinationFlooding() {
    return this.getStringAttribute('multi_destination_flooding');
  }
  public set multiDestinationFlooding(value: string) {
    this._multiDestinationFlooding = value;
  }
  public resetMultiDestinationFlooding() {
    this._multiDestinationFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiDestinationFloodingInput() {
    return this._multiDestinationFlooding;
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

  // optimize_wan_bandwidth - computed: true, optional: true, required: false
  private _optimizeWanBandwidth?: boolean | cdktf.IResolvable; 
  public get optimizeWanBandwidth() {
    return this.getBooleanAttribute('optimize_wan_bandwidth');
  }
  public set optimizeWanBandwidth(value: boolean | cdktf.IResolvable) {
    this._optimizeWanBandwidth = value;
  }
  public resetOptimizeWanBandwidth() {
    this._optimizeWanBandwidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optimizeWanBandwidthInput() {
    return this._optimizeWanBandwidth;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // unicast_routing - computed: true, optional: true, required: false
  private _unicastRouting?: boolean | cdktf.IResolvable; 
  public get unicastRouting() {
    return this.getBooleanAttribute('unicast_routing');
  }
  public set unicastRouting(value: boolean | cdktf.IResolvable) {
    this._unicastRouting = value;
  }
  public resetUnicastRouting() {
    this._unicastRouting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastRoutingInput() {
    return this._unicastRouting;
  }

  // unknown_multicast_flooding - computed: true, optional: true, required: false
  private _unknownMulticastFlooding?: string; 
  public get unknownMulticastFlooding() {
    return this.getStringAttribute('unknown_multicast_flooding');
  }
  public set unknownMulticastFlooding(value: string) {
    this._unknownMulticastFlooding = value;
  }
  public resetUnknownMulticastFlooding() {
    this._unknownMulticastFlooding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unknownMulticastFloodingInput() {
    return this._unknownMulticastFlooding;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // virtual_mac_address - computed: true, optional: true, required: false
  private _virtualMacAddress?: string; 
  public get virtualMacAddress() {
    return this.getStringAttribute('virtual_mac_address');
  }
  public set virtualMacAddress(value: string) {
    this._virtualMacAddress = value;
  }
  public resetVirtualMacAddress() {
    this._virtualMacAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualMacAddressInput() {
    return this._virtualMacAddress;
  }

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // vrf_schema_id - computed: true, optional: true, required: false
  private _vrfSchemaId?: string; 
  public get vrfSchemaId() {
    return this.getStringAttribute('vrf_schema_id');
  }
  public set vrfSchemaId(value: string) {
    this._vrfSchemaId = value;
  }
  public resetVrfSchemaId() {
    this._vrfSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfSchemaIdInput() {
    return this._vrfSchemaId;
  }

  // vrf_template_name - computed: true, optional: true, required: false
  private _vrfTemplateName?: string; 
  public get vrfTemplateName() {
    return this.getStringAttribute('vrf_template_name');
  }
  public set vrfTemplateName(value: string) {
    this._vrfTemplateName = value;
  }
  public resetVrfTemplateName() {
    this._vrfTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfTemplateNameInput() {
    return this._vrfTemplateName;
  }

  // dhcp_policies - computed: false, optional: true, required: false
  private _dhcpPolicies = new SchemaTemplateBdDhcpPoliciesList(this, "dhcp_policies", true);
  public get dhcpPolicies() {
    return this._dhcpPolicies;
  }
  public putDhcpPolicies(value: SchemaTemplateBdDhcpPolicies[] | cdktf.IResolvable) {
    this._dhcpPolicies.internalValue = value;
  }
  public resetDhcpPolicies() {
    this._dhcpPolicies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpPoliciesInput() {
    return this._dhcpPolicies.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      arp_flooding: cdktf.booleanToTerraform(this._arpFlooding),
      description: cdktf.stringToTerraform(this._description),
      dhcp_policy: cdktf.hashMapper(cdktf.stringToTerraform)(this._dhcpPolicy),
      display_name: cdktf.stringToTerraform(this._displayName),
      ep_move_detection_mode: cdktf.stringToTerraform(this._epMoveDetectionMode),
      id: cdktf.stringToTerraform(this._id),
      intersite_bum_traffic: cdktf.booleanToTerraform(this._intersiteBumTraffic),
      ipv6_unknown_multicast_flooding: cdktf.stringToTerraform(this._ipv6UnknownMulticastFlooding),
      layer2_stretch: cdktf.booleanToTerraform(this._layer2Stretch),
      layer2_unknown_unicast: cdktf.stringToTerraform(this._layer2UnknownUnicast),
      layer3_multicast: cdktf.booleanToTerraform(this._layer3Multicast),
      multi_destination_flooding: cdktf.stringToTerraform(this._multiDestinationFlooding),
      name: cdktf.stringToTerraform(this._name),
      optimize_wan_bandwidth: cdktf.booleanToTerraform(this._optimizeWanBandwidth),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
      unicast_routing: cdktf.booleanToTerraform(this._unicastRouting),
      unknown_multicast_flooding: cdktf.stringToTerraform(this._unknownMulticastFlooding),
      virtual_mac_address: cdktf.stringToTerraform(this._virtualMacAddress),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
      vrf_schema_id: cdktf.stringToTerraform(this._vrfSchemaId),
      vrf_template_name: cdktf.stringToTerraform(this._vrfTemplateName),
      dhcp_policies: cdktf.listMapper(schemaTemplateBdDhcpPoliciesToTerraform, true)(this._dhcpPolicies.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      arp_flooding: {
        value: cdktf.booleanToHclTerraform(this._arpFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_policy: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._dhcpPolicy),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ep_move_detection_mode: {
        value: cdktf.stringToHclTerraform(this._epMoveDetectionMode),
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
      intersite_bum_traffic: {
        value: cdktf.booleanToHclTerraform(this._intersiteBumTraffic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_unknown_multicast_flooding: {
        value: cdktf.stringToHclTerraform(this._ipv6UnknownMulticastFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer2_stretch: {
        value: cdktf.booleanToHclTerraform(this._layer2Stretch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      layer2_unknown_unicast: {
        value: cdktf.stringToHclTerraform(this._layer2UnknownUnicast),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      layer3_multicast: {
        value: cdktf.booleanToHclTerraform(this._layer3Multicast),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      multi_destination_flooding: {
        value: cdktf.stringToHclTerraform(this._multiDestinationFlooding),
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
      optimize_wan_bandwidth: {
        value: cdktf.booleanToHclTerraform(this._optimizeWanBandwidth),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      unicast_routing: {
        value: cdktf.booleanToHclTerraform(this._unicastRouting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      unknown_multicast_flooding: {
        value: cdktf.stringToHclTerraform(this._unknownMulticastFlooding),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_mac_address: {
        value: cdktf.stringToHclTerraform(this._virtualMacAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_schema_id: {
        value: cdktf.stringToHclTerraform(this._vrfSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf_template_name: {
        value: cdktf.stringToHclTerraform(this._vrfTemplateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dhcp_policies: {
        value: cdktf.listMapperHcl(schemaTemplateBdDhcpPoliciesToHclTerraform, true)(this._dhcpPolicies.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SchemaTemplateBdDhcpPoliciesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
