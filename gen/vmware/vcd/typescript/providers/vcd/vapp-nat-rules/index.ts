// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VappNatRulesConfig extends cdktf.TerraformMetaArguments {
  /**
  * When enabled translates a virtual machine's private, internal IP address to a public IP address for outbound traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#enable_ip_masquerade VappNatRules#enable_ip_masquerade}
  */
  readonly enableIpMasquerade?: boolean | cdktf.IResolvable;
  /**
  * Enable or disable NAT service. Default is `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#enabled VappNatRules#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#id VappNatRules#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * One of: `ipTranslation` (use IP translation), `portForwarding` (use port forwarding).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#nat_type VappNatRules#nat_type}
  */
  readonly natType: string;
  /**
  * vApp network identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#network_id VappNatRules#network_id}
  */
  readonly networkId: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#org VappNatRules#org}
  */
  readonly org?: string;
  /**
  * vApp identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#vapp_id VappNatRules#vapp_id}
  */
  readonly vappId: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#vdc VappNatRules#vdc}
  */
  readonly vdc?: string;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#rule VappNatRules#rule}
  */
  readonly rule?: VappNatRulesRule[] | cdktf.IResolvable;
}
export interface VappNatRulesRule {
  /**
  * External IP address to forward to or External IP address to map to VM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#external_ip VappNatRules#external_ip}
  */
  readonly externalIp?: string;
  /**
  * External port to forward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#external_port VappNatRules#external_port}
  */
  readonly externalPort?: number;
  /**
  * Internal port to forward.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#forward_to_port VappNatRules#forward_to_port}
  */
  readonly forwardToPort?: number;
  /**
  * Mapping mode. One of: `automatic`, `manual`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#mapping_mode VappNatRules#mapping_mode}
  */
  readonly mappingMode?: string;
  /**
  * Protocol to forward. One of: `TCP` (forward TCP packets), `UDP` (forward UDP packets), `TCP_UDP` (forward TCP and UDP packets).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#protocol VappNatRules#protocol}
  */
  readonly protocol?: string;
  /**
  * VM to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#vm_id VappNatRules#vm_id}
  */
  readonly vmId: string;
  /**
  * VM NIC ID to which this rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#vm_nic_id VappNatRules#vm_nic_id}
  */
  readonly vmNicId: number;
}

export function vappNatRulesRuleToTerraform(struct?: VappNatRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    external_ip: cdktf.stringToTerraform(struct!.externalIp),
    external_port: cdktf.numberToTerraform(struct!.externalPort),
    forward_to_port: cdktf.numberToTerraform(struct!.forwardToPort),
    mapping_mode: cdktf.stringToTerraform(struct!.mappingMode),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    vm_id: cdktf.stringToTerraform(struct!.vmId),
    vm_nic_id: cdktf.numberToTerraform(struct!.vmNicId),
  }
}


export function vappNatRulesRuleToHclTerraform(struct?: VappNatRulesRule | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    external_ip: {
      value: cdktf.stringToHclTerraform(struct!.externalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_port: {
      value: cdktf.numberToHclTerraform(struct!.externalPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    forward_to_port: {
      value: cdktf.numberToHclTerraform(struct!.forwardToPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mapping_mode: {
      value: cdktf.stringToHclTerraform(struct!.mappingMode),
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
    vm_id: {
      value: cdktf.stringToHclTerraform(struct!.vmId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vm_nic_id: {
      value: cdktf.numberToHclTerraform(struct!.vmNicId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VappNatRulesRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VappNatRulesRule | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._externalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalIp = this._externalIp;
    }
    if (this._externalPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalPort = this._externalPort;
    }
    if (this._forwardToPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardToPort = this._forwardToPort;
    }
    if (this._mappingMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingMode = this._mappingMode;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._vmId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmId = this._vmId;
    }
    if (this._vmNicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vmNicId = this._vmNicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VappNatRulesRule | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._externalIp = undefined;
      this._externalPort = undefined;
      this._forwardToPort = undefined;
      this._mappingMode = undefined;
      this._protocol = undefined;
      this._vmId = undefined;
      this._vmNicId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._externalIp = value.externalIp;
      this._externalPort = value.externalPort;
      this._forwardToPort = value.forwardToPort;
      this._mappingMode = value.mappingMode;
      this._protocol = value.protocol;
      this._vmId = value.vmId;
      this._vmNicId = value.vmNicId;
    }
  }

  // external_ip - computed: true, optional: true, required: false
  private _externalIp?: string; 
  public get externalIp() {
    return this.getStringAttribute('external_ip');
  }
  public set externalIp(value: string) {
    this._externalIp = value;
  }
  public resetExternalIp() {
    this._externalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIpInput() {
    return this._externalIp;
  }

  // external_port - computed: false, optional: true, required: false
  private _externalPort?: number; 
  public get externalPort() {
    return this.getNumberAttribute('external_port');
  }
  public set externalPort(value: number) {
    this._externalPort = value;
  }
  public resetExternalPort() {
    this._externalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalPortInput() {
    return this._externalPort;
  }

  // forward_to_port - computed: false, optional: true, required: false
  private _forwardToPort?: number; 
  public get forwardToPort() {
    return this.getNumberAttribute('forward_to_port');
  }
  public set forwardToPort(value: number) {
    this._forwardToPort = value;
  }
  public resetForwardToPort() {
    this._forwardToPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardToPortInput() {
    return this._forwardToPort;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mapping_mode - computed: false, optional: true, required: false
  private _mappingMode?: string; 
  public get mappingMode() {
    return this.getStringAttribute('mapping_mode');
  }
  public set mappingMode(value: string) {
    this._mappingMode = value;
  }
  public resetMappingMode() {
    this._mappingMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingModeInput() {
    return this._mappingMode;
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

  // vm_id - computed: false, optional: false, required: true
  private _vmId?: string; 
  public get vmId() {
    return this.getStringAttribute('vm_id');
  }
  public set vmId(value: string) {
    this._vmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmIdInput() {
    return this._vmId;
  }

  // vm_nic_id - computed: false, optional: false, required: true
  private _vmNicId?: number; 
  public get vmNicId() {
    return this.getNumberAttribute('vm_nic_id');
  }
  public set vmNicId(value: number) {
    this._vmNicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vmNicIdInput() {
    return this._vmNicId;
  }
}

export class VappNatRulesRuleList extends cdktf.ComplexList {
  public internalValue? : VappNatRulesRule[] | cdktf.IResolvable

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
  public get(index: number): VappNatRulesRuleOutputReference {
    return new VappNatRulesRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules vcd_vapp_nat_rules}
*/
export class VappNatRules extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_vapp_nat_rules";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VappNatRules resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VappNatRules to import
  * @param importFromId The id of the existing VappNatRules that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VappNatRules to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_vapp_nat_rules", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/vapp_nat_rules vcd_vapp_nat_rules} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VappNatRulesConfig
  */
  public constructor(scope: Construct, id: string, config: VappNatRulesConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_vapp_nat_rules',
      terraformGeneratorMetadata: {
        providerName: 'vcd',
        providerVersion: '3.14.1',
        providerVersionConstraint: '3.14.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableIpMasquerade = config.enableIpMasquerade;
    this._enabled = config.enabled;
    this._id = config.id;
    this._natType = config.natType;
    this._networkId = config.networkId;
    this._org = config.org;
    this._vappId = config.vappId;
    this._vdc = config.vdc;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_ip_masquerade - computed: false, optional: true, required: false
  private _enableIpMasquerade?: boolean | cdktf.IResolvable; 
  public get enableIpMasquerade() {
    return this.getBooleanAttribute('enable_ip_masquerade');
  }
  public set enableIpMasquerade(value: boolean | cdktf.IResolvable) {
    this._enableIpMasquerade = value;
  }
  public resetEnableIpMasquerade() {
    this._enableIpMasquerade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIpMasqueradeInput() {
    return this._enableIpMasquerade;
  }

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

  // nat_type - computed: false, optional: false, required: true
  private _natType?: string; 
  public get natType() {
    return this.getStringAttribute('nat_type');
  }
  public set natType(value: string) {
    this._natType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get natTypeInput() {
    return this._natType;
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

  // org - computed: false, optional: true, required: false
  private _org?: string; 
  public get org() {
    return this.getStringAttribute('org');
  }
  public set org(value: string) {
    this._org = value;
  }
  public resetOrg() {
    this._org = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgInput() {
    return this._org;
  }

  // vapp_id - computed: false, optional: false, required: true
  private _vappId?: string; 
  public get vappId() {
    return this.getStringAttribute('vapp_id');
  }
  public set vappId(value: string) {
    this._vappId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vappIdInput() {
    return this._vappId;
  }

  // vdc - computed: false, optional: true, required: false
  private _vdc?: string; 
  public get vdc() {
    return this.getStringAttribute('vdc');
  }
  public set vdc(value: string) {
    this._vdc = value;
  }
  public resetVdc() {
    this._vdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdcInput() {
    return this._vdc;
  }

  // rule - computed: false, optional: true, required: false
  private _rule = new VappNatRulesRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }
  public putRule(value: VappNatRulesRule[] | cdktf.IResolvable) {
    this._rule.internalValue = value;
  }
  public resetRule() {
    this._rule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_ip_masquerade: cdktf.booleanToTerraform(this._enableIpMasquerade),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      nat_type: cdktf.stringToTerraform(this._natType),
      network_id: cdktf.stringToTerraform(this._networkId),
      org: cdktf.stringToTerraform(this._org),
      vapp_id: cdktf.stringToTerraform(this._vappId),
      vdc: cdktf.stringToTerraform(this._vdc),
      rule: cdktf.listMapper(vappNatRulesRuleToTerraform, true)(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_ip_masquerade: {
        value: cdktf.booleanToHclTerraform(this._enableIpMasquerade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat_type: {
        value: cdktf.stringToHclTerraform(this._natType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org: {
        value: cdktf.stringToHclTerraform(this._org),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vapp_id: {
        value: cdktf.stringToHclTerraform(this._vappId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdc: {
        value: cdktf.stringToHclTerraform(this._vdc),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule: {
        value: cdktf.listMapperHcl(vappNatRulesRuleToHclTerraform, true)(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VappNatRulesRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
