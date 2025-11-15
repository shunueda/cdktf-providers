// https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplianceOneToManyNatRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Network ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#network_id ApplianceOneToManyNatRules#network_id}
  */
  readonly networkId: string;
  /**
  * An array of 1:Many nat rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#rules ApplianceOneToManyNatRules#rules}
  */
  readonly rules: ApplianceOneToManyNatRulesRules[] | cdktf.IResolvable;
}
export interface ApplianceOneToManyNatRulesRulesPortRules {
  /**
  * Remote IP addresses or ranges that are permitted to access the internal resource via this port forwarding rule, or `any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#allowed_ips ApplianceOneToManyNatRules#allowed_ips}
  */
  readonly allowedIps: string[];
  /**
  * Local IP address to which traffic will be forwarded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#local_ip ApplianceOneToManyNatRules#local_ip}
  */
  readonly localIp: string;
  /**
  * Destination port of the forwarded traffic that will be sent from the MX to the specified host on the LAN. If you simply wish to forward the traffic without translating the port, this should be the same as the Public port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#local_port ApplianceOneToManyNatRules#local_port}
  */
  readonly localPort: string;
  /**
  * A description of the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#name ApplianceOneToManyNatRules#name}
  */
  readonly name?: string;
  /**
  * `tcp` or `udp`
  *   - Choices: `tcp`, `udp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#protocol ApplianceOneToManyNatRules#protocol}
  */
  readonly protocol: string;
  /**
  * Destination port of the traffic that is arriving on the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#public_port ApplianceOneToManyNatRules#public_port}
  */
  readonly publicPort: string;
}

export function applianceOneToManyNatRulesRulesPortRulesToTerraform(struct?: ApplianceOneToManyNatRulesRulesPortRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
    local_ip: cdktf.stringToTerraform(struct!.localIp),
    local_port: cdktf.stringToTerraform(struct!.localPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    public_port: cdktf.stringToTerraform(struct!.publicPort),
  }
}


export function applianceOneToManyNatRulesRulesPortRulesToHclTerraform(struct?: ApplianceOneToManyNatRulesRulesPortRules | cdktf.IResolvable): any {
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
    local_ip: {
      value: cdktf.stringToHclTerraform(struct!.localIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    local_port: {
      value: cdktf.stringToHclTerraform(struct!.localPort),
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
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_port: {
      value: cdktf.stringToHclTerraform(struct!.publicPort),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplianceOneToManyNatRulesRulesPortRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceOneToManyNatRulesRulesPortRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    if (this._localIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.localIp = this._localIp;
    }
    if (this._localPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.localPort = this._localPort;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._publicPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicPort = this._publicPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplianceOneToManyNatRulesRulesPortRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowedIps = undefined;
      this._localIp = undefined;
      this._localPort = undefined;
      this._name = undefined;
      this._protocol = undefined;
      this._publicPort = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowedIps = value.allowedIps;
      this._localIp = value.localIp;
      this._localPort = value.localPort;
      this._name = value.name;
      this._protocol = value.protocol;
      this._publicPort = value.publicPort;
    }
  }

  // allowed_ips - computed: false, optional: false, required: true
  private _allowedIps?: string[]; 
  public get allowedIps() {
    return this.getListAttribute('allowed_ips');
  }
  public set allowedIps(value: string[]) {
    this._allowedIps = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedIpsInput() {
    return this._allowedIps;
  }

  // local_ip - computed: false, optional: false, required: true
  private _localIp?: string; 
  public get localIp() {
    return this.getStringAttribute('local_ip');
  }
  public set localIp(value: string) {
    this._localIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localIpInput() {
    return this._localIp;
  }

  // local_port - computed: false, optional: false, required: true
  private _localPort?: string; 
  public get localPort() {
    return this.getStringAttribute('local_port');
  }
  public set localPort(value: string) {
    this._localPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localPortInput() {
    return this._localPort;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // public_port - computed: false, optional: false, required: true
  private _publicPort?: string; 
  public get publicPort() {
    return this.getStringAttribute('public_port');
  }
  public set publicPort(value: string) {
    this._publicPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get publicPortInput() {
    return this._publicPort;
  }
}

export class ApplianceOneToManyNatRulesRulesPortRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceOneToManyNatRulesRulesPortRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceOneToManyNatRulesRulesPortRulesOutputReference {
    return new ApplianceOneToManyNatRulesRulesPortRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplianceOneToManyNatRulesRules {
  /**
  * An array of associated forwarding rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#port_rules ApplianceOneToManyNatRules#port_rules}
  */
  readonly portRules: ApplianceOneToManyNatRulesRulesPortRules[] | cdktf.IResolvable;
  /**
  * The IP address that will be used to access the internal resource from the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#public_ip ApplianceOneToManyNatRules#public_ip}
  */
  readonly publicIp: string;
  /**
  * The physical WAN interface on which the traffic will arrive (`internet1` or, if available, `internet2`)
  *   - Choices: `internet1`, `internet2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#uplink ApplianceOneToManyNatRules#uplink}
  */
  readonly uplink: string;
}

export function applianceOneToManyNatRulesRulesToTerraform(struct?: ApplianceOneToManyNatRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_rules: cdktf.listMapper(applianceOneToManyNatRulesRulesPortRulesToTerraform, false)(struct!.portRules),
    public_ip: cdktf.stringToTerraform(struct!.publicIp),
    uplink: cdktf.stringToTerraform(struct!.uplink),
  }
}


export function applianceOneToManyNatRulesRulesToHclTerraform(struct?: ApplianceOneToManyNatRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_rules: {
      value: cdktf.listMapperHcl(applianceOneToManyNatRulesRulesPortRulesToHclTerraform, false)(struct!.portRules),
      isBlock: true,
      type: "list",
      storageClassType: "ApplianceOneToManyNatRulesRulesPortRulesList",
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

export class ApplianceOneToManyNatRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplianceOneToManyNatRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portRules?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portRules = this._portRules?.internalValue;
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

  public set internalValue(value: ApplianceOneToManyNatRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portRules.internalValue = undefined;
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
      this._portRules.internalValue = value.portRules;
      this._publicIp = value.publicIp;
      this._uplink = value.uplink;
    }
  }

  // port_rules - computed: false, optional: false, required: true
  private _portRules = new ApplianceOneToManyNatRulesRulesPortRulesList(this, "port_rules", false);
  public get portRules() {
    return this._portRules;
  }
  public putPortRules(value: ApplianceOneToManyNatRulesRulesPortRules[] | cdktf.IResolvable) {
    this._portRules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portRulesInput() {
    return this._portRules.internalValue;
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

  // uplink - computed: false, optional: false, required: true
  private _uplink?: string; 
  public get uplink() {
    return this.getStringAttribute('uplink');
  }
  public set uplink(value: string) {
    this._uplink = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uplinkInput() {
    return this._uplink;
  }
}

export class ApplianceOneToManyNatRulesRulesList extends cdktf.ComplexList {
  public internalValue? : ApplianceOneToManyNatRulesRules[] | cdktf.IResolvable

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
  public get(index: number): ApplianceOneToManyNatRulesRulesOutputReference {
    return new ApplianceOneToManyNatRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules meraki_appliance_one_to_many_nat_rules}
*/
export class ApplianceOneToManyNatRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_appliance_one_to_many_nat_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApplianceOneToManyNatRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApplianceOneToManyNatRules to import
  * @param importFromId The id of the existing ApplianceOneToManyNatRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApplianceOneToManyNatRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_appliance_one_to_many_nat_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.8.0/docs/resources/appliance_one_to_many_nat_rules meraki_appliance_one_to_many_nat_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplianceOneToManyNatRulesConfig
  */
  public constructor(scope: Construct, id: string, config: ApplianceOneToManyNatRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_appliance_one_to_many_nat_rules',
      terraformGeneratorMetadata: {
        providerName: 'meraki',
        providerVersion: '1.8.0',
        providerVersionConstraint: '1.8.0'
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
  private _rules = new ApplianceOneToManyNatRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: ApplianceOneToManyNatRulesRules[] | cdktf.IResolvable) {
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
      rules: cdktf.listMapper(applianceOneToManyNatRulesRulesToTerraform, false)(this._rules.internalValue),
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
        value: cdktf.listMapperHcl(applianceOneToManyNatRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplianceOneToManyNatRulesRulesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
