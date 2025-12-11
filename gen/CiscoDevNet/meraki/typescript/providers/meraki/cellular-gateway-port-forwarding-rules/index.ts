// https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CellularGatewayPortForwardingRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * An array of port forwarding params
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#rules CellularGatewayPortForwardingRules#rules}
  */
  readonly rules: CellularGatewayPortForwardingRulesRules[] | cdktf.IResolvable;
  /**
  * Device serial
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#serial CellularGatewayPortForwardingRules#serial}
  */
  readonly serial: string;
}
export interface CellularGatewayPortForwardingRulesRules {
  /**
  * `any` or `restricted`. Specify the right to make inbound connections on the specified ports or port ranges. If `restricted`, a list of allowed IPs is mandatory.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#access CellularGatewayPortForwardingRules#access}
  */
  readonly access: string;
  /**
  * An array of ranges of WAN IP addresses that are allowed to make inbound connections on the specified ports or port ranges.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#allowed_ips CellularGatewayPortForwardingRules#allowed_ips}
  */
  readonly allowedIps?: string[];
  /**
  * The IP address of the server or device that hosts the internal resource that you wish to make available on the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#lan_ip CellularGatewayPortForwardingRules#lan_ip}
  */
  readonly lanIp: string;
  /**
  * A port or port ranges that will receive the forwarded traffic from the WAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#local_port CellularGatewayPortForwardingRules#local_port}
  */
  readonly localPort: string;
  /**
  * A descriptive name for the rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#name CellularGatewayPortForwardingRules#name}
  */
  readonly name?: string;
  /**
  * TCP or UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#protocol CellularGatewayPortForwardingRules#protocol}
  */
  readonly protocol: string;
  /**
  * A port or port ranges that will be forwarded to the host on the LAN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#public_port CellularGatewayPortForwardingRules#public_port}
  */
  readonly publicPort: string;
}

export function cellularGatewayPortForwardingRulesRulesToTerraform(struct?: CellularGatewayPortForwardingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access: cdktf.stringToTerraform(struct!.access),
    allowed_ips: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.allowedIps),
    lan_ip: cdktf.stringToTerraform(struct!.lanIp),
    local_port: cdktf.stringToTerraform(struct!.localPort),
    name: cdktf.stringToTerraform(struct!.name),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    public_port: cdktf.stringToTerraform(struct!.publicPort),
  }
}


export function cellularGatewayPortForwardingRulesRulesToHclTerraform(struct?: CellularGatewayPortForwardingRulesRules | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access: {
      value: cdktf.stringToHclTerraform(struct!.access),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    allowed_ips: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.allowedIps),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    lan_ip: {
      value: cdktf.stringToHclTerraform(struct!.lanIp),
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

export class CellularGatewayPortForwardingRulesRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CellularGatewayPortForwardingRulesRules | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._access !== undefined) {
      hasAnyValues = true;
      internalValueResult.access = this._access;
    }
    if (this._allowedIps !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedIps = this._allowedIps;
    }
    if (this._lanIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.lanIp = this._lanIp;
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

  public set internalValue(value: CellularGatewayPortForwardingRulesRules | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._access = undefined;
      this._allowedIps = undefined;
      this._lanIp = undefined;
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
      this._access = value.access;
      this._allowedIps = value.allowedIps;
      this._lanIp = value.lanIp;
      this._localPort = value.localPort;
      this._name = value.name;
      this._protocol = value.protocol;
      this._publicPort = value.publicPort;
    }
  }

  // access - computed: false, optional: false, required: true
  private _access?: string; 
  public get access() {
    return this.getStringAttribute('access');
  }
  public set access(value: string) {
    this._access = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessInput() {
    return this._access;
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

export class CellularGatewayPortForwardingRulesRulesList extends cdktf.ComplexList {
  public internalValue? : CellularGatewayPortForwardingRulesRules[] | cdktf.IResolvable

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
  public get(index: number): CellularGatewayPortForwardingRulesRulesOutputReference {
    return new CellularGatewayPortForwardingRulesRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules meraki_cellular_gateway_port_forwarding_rules}
*/
export class CellularGatewayPortForwardingRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "meraki_cellular_gateway_port_forwarding_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CellularGatewayPortForwardingRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CellularGatewayPortForwardingRules to import
  * @param importFromId The id of the existing CellularGatewayPortForwardingRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CellularGatewayPortForwardingRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "meraki_cellular_gateway_port_forwarding_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/meraki/1.9.0/docs/resources/cellular_gateway_port_forwarding_rules meraki_cellular_gateway_port_forwarding_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CellularGatewayPortForwardingRulesConfig
  */
  public constructor(scope: Construct, id: string, config: CellularGatewayPortForwardingRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'meraki_cellular_gateway_port_forwarding_rules',
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
    this._rules.internalValue = config.rules;
    this._serial = config.serial;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // rules - computed: false, optional: false, required: true
  private _rules = new CellularGatewayPortForwardingRulesRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
  public putRules(value: CellularGatewayPortForwardingRulesRules[] | cdktf.IResolvable) {
    this._rules.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulesInput() {
    return this._rules.internalValue;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: string; 
  public get serial() {
    return this.getStringAttribute('serial');
  }
  public set serial(value: string) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      rules: cdktf.listMapper(cellularGatewayPortForwardingRulesRulesToTerraform, false)(this._rules.internalValue),
      serial: cdktf.stringToTerraform(this._serial),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      rules: {
        value: cdktf.listMapperHcl(cellularGatewayPortForwardingRulesRulesToHclTerraform, false)(this._rules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CellularGatewayPortForwardingRulesRulesList",
      },
      serial: {
        value: cdktf.stringToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
