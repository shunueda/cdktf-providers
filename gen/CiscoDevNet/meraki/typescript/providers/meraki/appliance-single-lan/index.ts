// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceSingleLanConfig extends cdktf.TerraformMetaArguments {
  /**
  * The appliance IP address of the single LAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#appliance_ip ApplianceSingleLan#appliance_ip}
  */
  readonly applianceIp?: string;
  /**
  * Enable IPv6 on VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#ipv6_enabled ApplianceSingleLan#ipv6_enabled}
  */
  readonly ipv6Enabled?: boolean | cdktf.IResolvable;
  /**
  * Prefix assignments on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#ipv6_prefix_assignments ApplianceSingleLan#ipv6_prefix_assignments}
  */
  readonly ipv6PrefixAssignments?: ApplianceSingleLanIpv6PrefixAssignments[] | cdktf.IResolvable;
  /**
  * Enable Mandatory DHCP on LAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#mandatory_dhcp_enabled ApplianceSingleLan#mandatory_dhcp_enabled}
  */
  readonly mandatoryDhcpEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#network_id ApplianceSingleLan#network_id}
  */
  readonly networkId: string;
  /**
  * The subnet of the single LAN configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#subnet ApplianceSingleLan#subnet}
  */
  readonly subnet?: string;
}
export interface ApplianceSingleLanIpv6PrefixAssignments {
  /**
  * Auto assign a /64 prefix from the origin to the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#autonomous ApplianceSingleLan#autonomous}
  */
  readonly autonomous?: boolean | cdktf.IResolvable;
  /**
  * Disable IPv6 on VLAN.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#disabled ApplianceSingleLan#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Interfaces associated with the prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#origin_interfaces ApplianceSingleLan#origin_interfaces}
  */
  readonly originInterfaces?: string[];
  /**
  * Type of the origin
  *   - Choices: `independent`, `internet`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#origin_type ApplianceSingleLan#origin_type}
  */
  readonly originType?: string;
  /**
  * Manual configuration of the IPv6 Appliance IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#static_appliance_ip6 ApplianceSingleLan#static_appliance_ip6}
  */
  readonly staticApplianceIp6?: string;
  /**
  * Manual configuration of a /64 prefix on the VLAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#static_prefix ApplianceSingleLan#static_prefix}
  */
  readonly staticPrefix?: string;
}

export function applianceSingleLanIpv6PrefixAssignmentsToTerraform(struct?: ApplianceSingleLanIpv6PrefixAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autonomous: cdktf.booleanToTerraform(struct!.autonomous),
    disabled: cdktf.booleanToTerraform(struct!.disabled),
    origin_interfaces: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.originInterfaces),
    origin_type: cdktf.stringToTerraform(struct!.originType),
    static_appliance_ip6: cdktf.stringToTerraform(struct!.staticApplianceIp6),
    static_prefix: cdktf.stringToTerraform(struct!.staticPrefix),
  }
}


export function applianceSingleLanIpv6PrefixAssignmentsToHclTerraform(struct?: ApplianceSingleLanIpv6PrefixAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autonomous: {
      value: cdktf.booleanToHclTerraform(struct!.autonomous),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disabled: {
      value: cdktf.booleanToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    origin_interfaces: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.originInterfaces),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    origin_type: {
      value: cdktf.stringToHclTerraform(struct!.originType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_appliance_ip6: {
      value: cdktf.stringToHclTerraform(struct!.staticApplianceIp6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    static_prefix: {
      value: cdktf.stringToHclTerraform(struct!.staticPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceSingleLanIpv6PrefixAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceSingleLanIpv6PrefixAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autonomous !== undefined) {
      hasAnyValues = true;
      internalValueResult.autonomous = this._autonomous;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._originInterfaces !== undefined) {
      hasAnyValues = true;
      internalValueResult.originInterfaces = this._originInterfaces;
    }
    if (this._originType !== undefined) {
      hasAnyValues = true;
      internalValueResult.originType = this._originType;
    }
    if (this._staticApplianceIp6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticApplianceIp6 = this._staticApplianceIp6;
    }
    if (this._staticPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPrefix = this._staticPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceSingleLanIpv6PrefixAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autonomous = undefined;
      this._disabled = undefined;
      this._originInterfaces = undefined;
      this._originType = undefined;
      this._staticApplianceIp6 = undefined;
      this._staticPrefix = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autonomous = value.autonomous;
      this._disabled = value.disabled;
      this._originInterfaces = value.originInterfaces;
      this._originType = value.originType;
      this._staticApplianceIp6 = value.staticApplianceIp6;
      this._staticPrefix = value.staticPrefix;
    }
  }

  // autonomous - computed: false, optional: true, required: false
  private _autonomous?: boolean | cdktf.IResolvable; 
  public get autonomous() {
    return this.getBooleanAttribute('autonomous');
  }
  public set autonomous(value: boolean | cdktf.IResolvable) {
    this._autonomous = value;
  }
  public resetAutonomous() {
    this._autonomous = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonomousInput() {
    return this._autonomous;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // origin_interfaces - computed: false, optional: true, required: false
  private _originInterfaces?: string[]; 
  public get originInterfaces() {
    return this.getListAttribute('origin_interfaces');
  }
  public set originInterfaces(value: string[]) {
    this._originInterfaces = value;
  }
  public resetOriginInterfaces() {
    this._originInterfaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originInterfacesInput() {
    return this._originInterfaces;
  }

  // origin_type - computed: false, optional: true, required: false
  private _originType?: string; 
  public get originType() {
    return this.getStringAttribute('origin_type');
  }
  public set originType(value: string) {
    this._originType = value;
  }
  public resetOriginType() {
    this._originType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originTypeInput() {
    return this._originType;
  }

  // static_appliance_ip6 - computed: false, optional: true, required: false
  private _staticApplianceIp6?: string; 
  public get staticApplianceIp6() {
    return this.getStringAttribute('static_appliance_ip6');
  }
  public set staticApplianceIp6(value: string) {
    this._staticApplianceIp6 = value;
  }
  public resetStaticApplianceIp6() {
    this._staticApplianceIp6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticApplianceIp6Input() {
    return this._staticApplianceIp6;
  }

  // static_prefix - computed: false, optional: true, required: false
  private _staticPrefix?: string; 
  public get staticPrefix() {
    return this.getStringAttribute('static_prefix');
  }
  public set staticPrefix(value: string) {
    this._staticPrefix = value;
  }
  public resetStaticPrefix() {
    this._staticPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPrefixInput() {
    return this._staticPrefix;
  }
}

export class ApplianceSingleLanIpv6PrefixAssignmentsList extends cdktf.ComplexList {
  public internalValue? : ApplianceSingleLanIpv6PrefixAssignments[] | cdktf.IResolvable

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
  public get(index: number): ApplianceSingleLanIpv6PrefixAssignmentsOutputReference {
    return new ApplianceSingleLanIpv6PrefixAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan meraki_appliance_single_lan}
*/
export class ApplianceSingleLan extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_single_lan";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceSingleLan resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceSingleLan to import
  * @param importFromId The id of the existing ApplianceSingleLan that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceSingleLan to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_single_lan", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_single_lan meraki_appliance_single_lan} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceSingleLanConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceSingleLanConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_single_lan',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.9.0',
        providerVersionConstraint: '1.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applianceIp = config.applianceIp;
    this._ipv6Enabled = config.ipv6Enabled;
    this._ipv6PrefixAssignments.internalValue = config.ipv6PrefixAssignments;
    this._mandatoryDhcpEnabled = config.mandatoryDhcpEnabled;
    this._networkId = config.networkId;
    this._subnet = config.subnet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appliance_ip - computed: false, optional: true, required: false
  private _applianceIp?: string; 
  public get applianceIp() {
    return this.getStringAttribute('appliance_ip');
  }
  public set applianceIp(value: string) {
    this._applianceIp = value;
  }
  public resetApplianceIp() {
    this._applianceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceIpInput() {
    return this._applianceIp;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv6_enabled - computed: false, optional: true, required: false
  private _ipv6Enabled?: boolean | cdktf.IResolvable; 
  public get ipv6Enabled() {
    return this.getBooleanAttribute('ipv6_enabled');
  }
  public set ipv6Enabled(value: boolean | cdktf.IResolvable) {
    this._ipv6Enabled = value;
  }
  public resetIpv6Enabled() {
    this._ipv6Enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6EnabledInput() {
    return this._ipv6Enabled;
  }

  // ipv6_prefix_assignments - computed: false, optional: true, required: false
  private _ipv6PrefixAssignments = new ApplianceSingleLanIpv6PrefixAssignmentsList(this, "ipv6_prefix_assignments", false);
  public get ipv6PrefixAssignments() {
    return this._ipv6PrefixAssignments;
  }
  public putIpv6PrefixAssignments(value: ApplianceSingleLanIpv6PrefixAssignments[] | cdktf.IResolvable) {
    this._ipv6PrefixAssignments.internalValue = value;
  }
  public resetIpv6PrefixAssignments() {
    this._ipv6PrefixAssignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6PrefixAssignmentsInput() {
    return this._ipv6PrefixAssignments.internalValue;
  }

  // mandatory_dhcp_enabled - computed: false, optional: true, required: false
  private _mandatoryDhcpEnabled?: boolean | cdktf.IResolvable; 
  public get mandatoryDhcpEnabled() {
    return this.getBooleanAttribute('mandatory_dhcp_enabled');
  }
  public set mandatoryDhcpEnabled(value: boolean | cdktf.IResolvable) {
    this._mandatoryDhcpEnabled = value;
  }
  public resetMandatoryDhcpEnabled() {
    this._mandatoryDhcpEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mandatoryDhcpEnabledInput() {
    return this._mandatoryDhcpEnabled;
  }

  // network_id - computed: false, optional: false, required: true
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // subnet - computed: false, optional: true, required: false
  private _subnet?: string; 
  public get subnet() {
    return this.getStringAttribute('subnet');
  }
  public set subnet(value: string) {
    this._subnet = value;
  }
  public resetSubnet() {
    this._subnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetInput() {
    return this._subnet;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appliance_ip: cdktf.stringToTerraform(this._applianceIp),
      ipv6_enabled: cdktf.booleanToTerraform(this._ipv6Enabled),
      ipv6_prefix_assignments: cdktf.listMapper(applianceSingleLanIpv6PrefixAssignmentsToTerraform, false)(this._ipv6PrefixAssignments.internalValue),
      mandatory_dhcp_enabled: cdktf.booleanToTerraform(this._mandatoryDhcpEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      subnet: cdktf.stringToTerraform(this._subnet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appliance_ip: {
        value: cdktf.stringToHclTerraform(this._applianceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6_enabled: {
        value: cdktf.booleanToHclTerraform(this._ipv6Enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ipv6_prefix_assignments: {
        value: cdktf.listMapperHcl(applianceSingleLanIpv6PrefixAssignmentsToHclTerraform, false)(this._ipv6PrefixAssignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceSingleLanIpv6PrefixAssignmentsList",
      },
      mandatory_dhcp_enabled: {
        value: cdktf.booleanToHclTerraform(this._mandatoryDhcpEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet: {
        value: cdktf.stringToHclTerraform(this._subnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
