// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WirelessSsidBonjourForwardingConfig extends cdktf.TerraformMetaArguments {
  /**
  * If true, Bonjour forwarding is enabled on this SSID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#enabled WirelessSsidBonjourForwarding#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * If true, Bonjour forwarding exception is enabled on this SSID. Exception is required to enable L2 isolation and Bonjour forwarding to work together.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#exception_enabled WirelessSsidBonjourForwarding#exception_enabled}
  */
  readonly exceptionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#network_id WirelessSsidBonjourForwarding#network_id}
  */
  readonly networkId: string;
  /**
  * Wireless SSID number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#number WirelessSsidBonjourForwarding#number}
  */
  readonly number: string;
  /**
  * List of bonjour forwarding rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#rules WirelessSsidBonjourForwarding#rules}
  */
  readonly rules?: WirelessSsidBonjourForwardingRules[] | cdktf.IResolvable;
}
export interface WirelessSsidBonjourForwardingRules {
  /**
  * A description for your Bonjour forwarding rule. Optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#description WirelessSsidBonjourForwarding#description}
  */
  readonly description?: string;
  /**
  * A list of Bonjour services. At least one service must be specified. Available services are `All Services`, `AirPlay`, `AFP`, `BitTorrent`, `FTP`, `iChat`, `iTunes`, `Printers`, `Samba`, `Scanners` and `SSH`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#services WirelessSsidBonjourForwarding#services}
  */
  readonly services: string[];
  /**
  * The ID of the service VLAN. Required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#vlan_id WirelessSsidBonjourForwarding#vlan_id}
  */
  readonly vlanId: string;
}

export function wirelessSsidBonjourForwardingRulesToTerraform(struct?: WirelessSsidBonjourForwardingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.services),
    vlan_id: cdktf.stringToTerraform(struct!.vlanId),
  }
}


export function wirelessSsidBonjourForwardingRulesToHclTerraform(struct?: WirelessSsidBonjourForwardingRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.services),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    vlan_id: {
      value: cdktf.stringToHclTerraform(struct!.vlanId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WirelessSsidBonjourForwardingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WirelessSsidBonjourForwardingRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._services !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services;
    }
    if (this._vlanId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vlanId = this._vlanId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WirelessSsidBonjourForwardingRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._services = undefined;
      this._vlanId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._services = value.services;
      this._vlanId = value.vlanId;
    }
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

  // services - computed: false, optional: false, required: true
  private _services?: string[]; 
  public get services() {
    return cdktf.Fn.tolist(this.getListAttribute('services'));
  }
  public set services(value: string[]) {
    this._services = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services;
  }

  // vlan_id - computed: false, optional: false, required: true
  private _vlanId?: string; 
  public get vlanId() {
    return this.getStringAttribute('vlan_id');
  }
  public set vlanId(value: string) {
    this._vlanId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }
}

export class WirelessSsidBonjourForwardingRulesList extends cdktf.ComplexList {
  public internalValue? : WirelessSsidBonjourForwardingRules[] | cdktf.IResolvable

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
  public get(index: number): WirelessSsidBonjourForwardingRulesOutputReference {
    return new WirelessSsidBonjourForwardingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding meraki_wireless_ssid_bonjour_forwarding}
*/
export class WirelessSsidBonjourForwarding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_wireless_ssid_bonjour_forwarding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WirelessSsidBonjourForwarding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WirelessSsidBonjourForwarding to import
  * @param importFromId The id of the existing WirelessSsidBonjourForwarding that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WirelessSsidBonjourForwarding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_wireless_ssid_bonjour_forwarding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/wireless_ssid_bonjour_forwarding meraki_wireless_ssid_bonjour_forwarding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WirelessSsidBonjourForwardingConfig
  */
  public constructor(scope: Construct, id: string, config: WirelessSsidBonjourForwardingConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_wireless_ssid_bonjour_forwarding',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enabled = config.enabled;
    this._exceptionEnabled = config.exceptionEnabled;
    this._networkId = config.networkId;
    this._number = config.number;
    this._rules.internalValue = config.rules;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // exception_enabled - computed: false, optional: true, required: false
  private _exceptionEnabled?: boolean | cdktf.IResolvable; 
  public get exceptionEnabled() {
    return this.getBooleanAttribute('exception_enabled');
  }
  public set exceptionEnabled(value: boolean | cdktf.IResolvable) {
    this._exceptionEnabled = value;
  }
  public resetExceptionEnabled() {
    this._exceptionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exceptionEnabledInput() {
    return this._exceptionEnabled;
  }

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

  // number - computed: false, optional: false, required: true
  private _number?: string; 
  public get number() {
    return this.getStringAttribute('number');
  }
  public set number(value: string) {
    this._number = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numberInput() {
    return this._number;
  }

  // rules - computed: false, optional: true, required: false
  private _rules = new WirelessSsidBonjourForwardingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: WirelessSsidBonjourForwardingRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  public resetRules() {
    this._rules.internalValue = undefined;
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
      enabled: cdktf.booleanToTerraform(this._enabled),
      exception_enabled: cdktf.booleanToTerraform(this._exceptionEnabled),
      network_id: cdktf.stringToTerraform(this._networkId),
      number: cdktf.stringToTerraform(this._number),
      rules: cdktf.listMapper(wirelessSsidBonjourForwardingRulesToTerraform, false)(this._rules.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exception_enabled: {
        value: cdktf.booleanToHclTerraform(this._exceptionEnabled),
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
      number: {
        value: cdktf.stringToHclTerraform(this._number),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rules: {
        value: cdktf.listMapperHcl(wirelessSsidBonjourForwardingRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WirelessSsidBonjourForwardingRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
