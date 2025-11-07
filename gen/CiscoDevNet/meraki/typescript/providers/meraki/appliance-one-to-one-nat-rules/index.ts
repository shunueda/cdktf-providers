// https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceOneToOneNatRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#network_id ApplianceOneToOneNatRules#network_id}
  */
  readonly networkId: string;
  /**
  * An array of 1:1 nat rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#rules ApplianceOneToOneNatRules#rules}
  */
  readonly rules: ApplianceOneToOneNatRulesRules[] | cdktf.IResolvable;
}
export interface ApplianceOneToOneNatRulesRulesAllowedInbound {
  /**
  * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges, or `any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#allowed_ips ApplianceOneToOneNatRules#allowed_ips}
  */
  readonly allowedIps?: string[];
  /**
  * An array of ports or port ranges that will be forwarded to the host on the LAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#destination_ports ApplianceOneToOneNatRules#destination_ports}
  */
  readonly destinationPorts?: string[];
  /**
  * Either of the following: `tcp`, `udp`, `icmp-ping` or `any`
  *   - Choices: `any`, `icmp-ping`, `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#protocol ApplianceOneToOneNatRules#protocol}
  */
  readonly protocol?: string;
}

export function applianceOneToOneNatRulesRulesAllowedInboundToTerraform(struct?: ApplianceOneToOneNatRulesRulesAllowedInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
    destination_ports: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.destinationPorts),
    protocol: cdktf.stringToTerraform(struct!.protocol),
  }
}


export function applianceOneToOneNatRulesRulesAllowedInboundToHclTerraform(struct?: ApplianceOneToOneNatRulesRulesAllowedInbound | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    destination_ports: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.destinationPorts),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceOneToOneNatRulesRulesAllowedInboundOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceOneToOneNatRulesRulesAllowedInbound | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    if (this._destinationPorts !== undefined) {
      hasAnyValues = true;
      internalValueResult.destinationPorts = this._destinationPorts;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceOneToOneNatRulesRulesAllowedInbound | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIps = undefined;
      this._destinationPorts = undefined;
      this._protocol = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIps = value.allowedIps;
      this._destinationPorts = value.destinationPorts;
      this._protocol = value.protocol;
    }
  }

  // allowed_ips - computed: false, optional: true, required: false
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  public resetAllowedIps() {
    this._allowedIps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }

  // destination_ports - computed: false, optional: true, required: false
  private _destinationPorts?: string[]; 
  public get destinationPorts() {
    return this.getListAttribute('destination_ports');
  }
  public set destinationPorts(value: string[]) {
    this._destinationPorts = value;
  }
  public resetDestinationPorts() {
    this._destinationPorts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationPortsInput() {
    return this._destinationPorts;
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
}

export class ApplianceOneToOneNatRulesRulesAllowedInboundList extends cdktf.ComplexList {
  public internalValue? : ApplianceOneToOneNatRulesRulesAllowedInbound[] | cdktf.IResolvable

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
  public get(index: number): ApplianceOneToOneNatRulesRulesAllowedInboundOutputReference {
    return new ApplianceOneToOneNatRulesRulesAllowedInboundOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceOneToOneNatRulesRules {
  /**
  * The ports this mapping will provide access on, and the remote IPs that will be allowed access to the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#allowed_inbound ApplianceOneToOneNatRules#allowed_inbound}
  */
  readonly allowedInbound?: ApplianceOneToOneNatRulesRulesAllowedInbound[] | cdktf.IResolvable;
  /**
  * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#lan_ip ApplianceOneToOneNatRules#lan_ip}
  */
  readonly lanIp: string;
  /**
  * A descriptive name for the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#name ApplianceOneToOneNatRules#name}
  */
  readonly name?: string;
  /**
  * The IP address that will be used to access the internal resource from the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#public_ip ApplianceOneToOneNatRules#public_ip}
  */
  readonly publicIp: string;
  /**
  * The physical WAN interface on which the traffic will arrive (`internet1` or, if available, `internet2`)
  *   - Choices: `internet1`, `internet2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#uplink ApplianceOneToOneNatRules#uplink}
  */
  readonly uplink?: string;
}

export function applianceOneToOneNatRulesRulesToTerraform(struct?: ApplianceOneToOneNatRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_inbound: cdktf.listMapper(applianceOneToOneNatRulesRulesAllowedInboundToTerraform, false)(struct!.allowedInbound),
    lan_ip: cdktf.stringToTerraform(struct!.lanIp),
    name: cdktf.stringToTerraform(struct!.name),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function applianceOneToOneNatRulesRulesToHclTerraform(struct?: ApplianceOneToOneNatRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allowed_inbound: {
      value: cdktf.listMapperHcl(applianceOneToOneNatRulesRulesAllowedInboundToHclTerraform, false)(struct!.allowedInbound),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceOneToOneNatRulesRulesAllowedInboundList",
    },
    lan_ip: {
      value: cdktf.stringToHclTerraform(struct!.lanIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_ip: {
      value: cdktf.stringToHclTerraform(struct!.publicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uplink: {
      value: cdktf.stringToHclTerraform(struct!.uplink),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceOneToOneNatRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceOneToOneNatRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedInbound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedInbound = this._allowedInbound?.internalValue;
    }
    if (this._lanIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanIp = this._lanIp;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicIp = this._publicIp;
    }
    if (this._uplink !== undefined) {
      hasAnyValues = true;
      internalValueResult.uplink = this._uplink;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceOneToOneNatRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedInbound.internalValue = undefined;
      this._lanIp = undefined;
      this._name = undefined;
      this._publicIp = undefined;
      this._uplink = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedInbound.internalValue = value.allowedInbound;
      this._lanIp = value.lanIp;
      this._name = value.name;
      this._publicIp = value.publicIp;
      this._uplink = value.uplink;
    }
  }

  // allowed_inbound - computed: false, optional: true, required: false
  private _allowedInbound = new ApplianceOneToOneNatRulesRulesAllowedInboundList(this, "allowed_inbound", false);
  public get allowedInbound() {
    return this._allowedInbound;
  }
  public putAllowedInbound(value: ApplianceOneToOneNatRulesRulesAllowedInbound[] | cdktf.IResolvable) {
    this._allowedInbound.internalValue = value;
  }
  public resetAllowedInbound() {
    this._allowedInbound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedInboundInput() {
    return this._allowedInbound.internalValue;
  }

  // lan_ip - computed: false, optional: false, required: true
  private _lanIp?: string; 
  public get lanIp() {
    return this.getStringAttribute('lan_ip');
  }
  public set lanIp(value: string) {
    this._lanIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lanIpInput() {
    return this._lanIp;
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

  // public_ip - computed: false, optional: false, required: true
  private _publicIp?: string; 
  public get publicIp() {
    return this.getStringAttribute('public_ip');
  }
  public set publicIp(value: string) {
    this._publicIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIpInput() {
    return this._publicIp;
  }

  // uplink - computed: false, optional: true, required: false
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  public resetUplink() {
    this._uplink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }
}

export class ApplianceOneToOneNatRulesRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceOneToOneNatRulesRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceOneToOneNatRulesRulesOutputReference {
    return new ApplianceOneToOneNatRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules meraki_appliance_one_to_one_nat_rules}
*/
export class ApplianceOneToOneNatRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_one_to_one_nat_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceOneToOneNatRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceOneToOneNatRules to import
  * @param importFromId The id of the existing ApplianceOneToOneNatRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceOneToOneNatRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_one_to_one_nat_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.7.1/docs/resources/appliance_one_to_one_nat_rules meraki_appliance_one_to_one_nat_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceOneToOneNatRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceOneToOneNatRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_one_to_one_nat_rules',
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
  private _rules = new ApplianceOneToOneNatRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplianceOneToOneNatRulesRules[] | cdktf.IResolvable) {
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
      rules: cdktf.listMapper(applianceOneToOneNatRulesRulesToTerraform, false)(this._rules.internalValue),
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
        value: cdktf.listMapperHcl(applianceOneToOneNatRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceOneToOneNatRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
