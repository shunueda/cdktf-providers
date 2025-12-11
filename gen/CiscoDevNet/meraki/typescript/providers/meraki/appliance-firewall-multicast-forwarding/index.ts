// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceFirewallMulticastForwardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding#network_id ApplianceFirewallMulticastForwarding#network_id}
  */
  readonly networkId: string;
  /**
  * Static multicast forwarding rules. Pass an empty array to clear all rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding#rules ApplianceFirewallMulticastForwarding#rules}
  */
  readonly rules: ApplianceFirewallMulticastForwardingRules[] | cdktf.IResolvable;
}
export interface ApplianceFirewallMulticastForwardingRules {
  /**
  * IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding#address ApplianceFirewallMulticastForwarding#address}
  */
  readonly address: string;
  /**
  * Forwarding rule description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding#description ApplianceFirewallMulticastForwarding#description}
  */
  readonly description: string;
  /**
  * List of VLAN IDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding#vlan_ids ApplianceFirewallMulticastForwarding#vlan_ids}
  */
  readonly vlanIds: string[];
}

export function applianceFirewallMulticastForwardingRulesToTerraform(struct?: ApplianceFirewallMulticastForwardingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    description: cdktf.stringToTerraform(struct!.description),
    vlan_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.vlanIds),
  }
}


export function applianceFirewallMulticastForwardingRulesToHclTerraform(struct?: ApplianceFirewallMulticastForwardingRules | cdktf.IResolvable): any {
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
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vlan_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.vlanIds),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceFirewallMulticastForwardingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceFirewallMulticastForwardingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._vlanIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanIds = this._vlanIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceFirewallMulticastForwardingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._description = undefined;
      this._vlanIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._description = value.description;
      this._vlanIds = value.vlanIds;
    }
  }

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
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

  // vlan_ids - computed: false, optional: false, required: true
  private _vlanIds?: string[]; 
  public get vlanIds() {
    return this.getListAttribute('vlan_ids');
  }
  public set vlanIds(value: string[]) {
    this._vlanIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdsInput() {
    return this._vlanIds;
  }
}

export class ApplianceFirewallMulticastForwardingRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceFirewallMulticastForwardingRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceFirewallMulticastForwardingRulesOutputReference {
    return new ApplianceFirewallMulticastForwardingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding meraki_appliance_firewall_multicast_forwarding}
*/
export class ApplianceFirewallMulticastForwarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_firewall_multicast_forwarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceFirewallMulticastForwarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceFirewallMulticastForwarding to import
  * @param importFromId The id of the existing ApplianceFirewallMulticastForwarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceFirewallMulticastForwarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_firewall_multicast_forwarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/appliance_firewall_multicast_forwarding meraki_appliance_firewall_multicast_forwarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceFirewallMulticastForwardingConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceFirewallMulticastForwardingConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_firewall_multicast_forwarding',
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
    this._networkId = config.networkId;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // rules - computed: false, optional: false, required: true
  private _rules = new ApplianceFirewallMulticastForwardingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplianceFirewallMulticastForwardingRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      network_id: cdktf.stringToTerraform(this._networkId),
      rules: cdktf.listMapper(applianceFirewallMulticastForwardingRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(applianceFirewallMulticastForwardingRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceFirewallMulticastForwardingRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
