// https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsxvDnatConfig extends cdktf.TerraformMetaArguments {
  /**
  * NAT rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#description NsxvDnat#description}
  */
  readonly description?: string;
  /**
  * Edge gateway name in which NAT Rule is located
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#edge_gateway NsxvDnat#edge_gateway}
  */
  readonly edgeGateway: string;
  /**
  * Whether the rule should be enabled. Default 'true'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#enabled NsxvDnat#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * ICMP type. Only supported when protocol is ICMP. One of `any`, `address-mask-request`, `address-mask-reply`, `destination-unreachable`, `echo-request`, `echo-reply`, `parameter-problem`, `redirect`, `router-advertisement`, `router-solicitation`, `source-quench`, `time-exceeded`, `timestamp-request`, `timestamp-reply`. Default `any`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#icmp_type NsxvDnat#icmp_type}
  */
  readonly icmpType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#id NsxvDnat#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Whether logging should be enabled for this rule. Default 'false'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#logging_enabled NsxvDnat#logging_enabled}
  */
  readonly loggingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Org or external network name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#network_name NsxvDnat#network_name}
  */
  readonly networkName: string;
  /**
  * Network type. One of 'ext', 'org'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#network_type NsxvDnat#network_type}
  */
  readonly networkType: string;
  /**
  * The name of organization to use, optional if defined at provider level. Useful when connected as sysadmin working across different organizations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#org NsxvDnat#org}
  */
  readonly org?: string;
  /**
  * Original address or address range. This is the the destination address for DNAT rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#original_address NsxvDnat#original_address}
  */
  readonly originalAddress: string;
  /**
  * Original port. This is the destination port for DNAT rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#original_port NsxvDnat#original_port}
  */
  readonly originalPort?: string;
  /**
  * Protocol. Such as 'tcp', 'udp', 'icmp', 'any'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#protocol NsxvDnat#protocol}
  */
  readonly protocol?: string;
  /**
  * Optional. Allows to set custom rule tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#rule_tag NsxvDnat#rule_tag}
  */
  readonly ruleTag?: number;
  /**
  * Read only. Possible values 'user', 'internal_high'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#rule_type NsxvDnat#rule_type}
  */
  readonly ruleType?: string;
  /**
  * Translated address or address range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#translated_address NsxvDnat#translated_address}
  */
  readonly translatedAddress?: string;
  /**
  * Translated port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#translated_port NsxvDnat#translated_port}
  */
  readonly translatedPort?: string;
  /**
  * The name of VDC to use, optional if defined at provider level
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#vdc NsxvDnat#vdc}
  */
  readonly vdc?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat vcd_nsxv_dnat}
*/
export class NsxvDnat extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "vcd_nsxv_dnat";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NsxvDnat resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NsxvDnat to import
  * @param importFromId The id of the existing NsxvDnat that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NsxvDnat to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "vcd_nsxv_dnat", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/vcd/3.14.1/docs/resources/nsxv_dnat vcd_nsxv_dnat} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsxvDnatConfig
  */
  public constructor(scope: Construct, id: string, config: NsxvDnatConfig) {
    super(scope, id, {
      terraformResourceType: 'vcd_nsxv_dnat',
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
    this._description = config.description;
    this._edgeGateway = config.edgeGateway;
    this._enabled = config.enabled;
    this._icmpType = config.icmpType;
    this._id = config.id;
    this._loggingEnabled = config.loggingEnabled;
    this._networkName = config.networkName;
    this._networkType = config.networkType;
    this._org = config.org;
    this._originalAddress = config.originalAddress;
    this._originalPort = config.originalPort;
    this._protocol = config.protocol;
    this._ruleTag = config.ruleTag;
    this._ruleType = config.ruleType;
    this._translatedAddress = config.translatedAddress;
    this._translatedPort = config.translatedPort;
    this._vdc = config.vdc;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // edge_gateway - computed: false, optional: false, required: true
  private _edgeGateway?: string; 
  public get edgeGateway() {
    return this.getStringAttribute('edge_gateway');
  }
  public set edgeGateway(value: string) {
    this._edgeGateway = value;
  }
  // Temporarily expose input value. Use with caution.
  public get edgeGatewayInput() {
    return this._edgeGateway;
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

  // icmp_type - computed: false, optional: true, required: false
  private _icmpType?: string; 
  public get icmpType() {
    return this.getStringAttribute('icmp_type');
  }
  public set icmpType(value: string) {
    this._icmpType = value;
  }
  public resetIcmpType() {
    this._icmpType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpTypeInput() {
    return this._icmpType;
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

  // logging_enabled - computed: false, optional: true, required: false
  private _loggingEnabled?: boolean | cdktf.IResolvable; 
  public get loggingEnabled() {
    return this.getBooleanAttribute('logging_enabled');
  }
  public set loggingEnabled(value: boolean | cdktf.IResolvable) {
    this._loggingEnabled = value;
  }
  public resetLoggingEnabled() {
    this._loggingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingEnabledInput() {
    return this._loggingEnabled;
  }

  // network_name - computed: false, optional: false, required: true
  private _networkName?: string; 
  public get networkName() {
    return this.getStringAttribute('network_name');
  }
  public set networkName(value: string) {
    this._networkName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkNameInput() {
    return this._networkName;
  }

  // network_type - computed: false, optional: false, required: true
  private _networkType?: string; 
  public get networkType() {
    return this.getStringAttribute('network_type');
  }
  public set networkType(value: string) {
    this._networkType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkTypeInput() {
    return this._networkType;
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

  // original_address - computed: false, optional: false, required: true
  private _originalAddress?: string; 
  public get originalAddress() {
    return this.getStringAttribute('original_address');
  }
  public set originalAddress(value: string) {
    this._originalAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get originalAddressInput() {
    return this._originalAddress;
  }

  // original_port - computed: false, optional: true, required: false
  private _originalPort?: string; 
  public get originalPort() {
    return this.getStringAttribute('original_port');
  }
  public set originalPort(value: string) {
    this._originalPort = value;
  }
  public resetOriginalPort() {
    this._originalPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originalPortInput() {
    return this._originalPort;
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

  // rule_tag - computed: true, optional: true, required: false
  private _ruleTag?: number; 
  public get ruleTag() {
    return this.getNumberAttribute('rule_tag');
  }
  public set ruleTag(value: number) {
    this._ruleTag = value;
  }
  public resetRuleTag() {
    this._ruleTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTagInput() {
    return this._ruleTag;
  }

  // rule_type - computed: true, optional: true, required: false
  private _ruleType?: string; 
  public get ruleType() {
    return this.getStringAttribute('rule_type');
  }
  public set ruleType(value: string) {
    this._ruleType = value;
  }
  public resetRuleType() {
    this._ruleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleTypeInput() {
    return this._ruleType;
  }

  // translated_address - computed: false, optional: true, required: false
  private _translatedAddress?: string; 
  public get translatedAddress() {
    return this.getStringAttribute('translated_address');
  }
  public set translatedAddress(value: string) {
    this._translatedAddress = value;
  }
  public resetTranslatedAddress() {
    this._translatedAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedAddressInput() {
    return this._translatedAddress;
  }

  // translated_port - computed: false, optional: true, required: false
  private _translatedPort?: string; 
  public get translatedPort() {
    return this.getStringAttribute('translated_port');
  }
  public set translatedPort(value: string) {
    this._translatedPort = value;
  }
  public resetTranslatedPort() {
    this._translatedPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get translatedPortInput() {
    return this._translatedPort;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      edge_gateway: cdktf.stringToTerraform(this._edgeGateway),
      enabled: cdktf.booleanToTerraform(this._enabled),
      icmp_type: cdktf.stringToTerraform(this._icmpType),
      id: cdktf.stringToTerraform(this._id),
      logging_enabled: cdktf.booleanToTerraform(this._loggingEnabled),
      network_name: cdktf.stringToTerraform(this._networkName),
      network_type: cdktf.stringToTerraform(this._networkType),
      org: cdktf.stringToTerraform(this._org),
      original_address: cdktf.stringToTerraform(this._originalAddress),
      original_port: cdktf.stringToTerraform(this._originalPort),
      protocol: cdktf.stringToTerraform(this._protocol),
      rule_tag: cdktf.numberToTerraform(this._ruleTag),
      rule_type: cdktf.stringToTerraform(this._ruleType),
      translated_address: cdktf.stringToTerraform(this._translatedAddress),
      translated_port: cdktf.stringToTerraform(this._translatedPort),
      vdc: cdktf.stringToTerraform(this._vdc),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      edge_gateway: {
        value: cdktf.stringToHclTerraform(this._edgeGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icmp_type: {
        value: cdktf.stringToHclTerraform(this._icmpType),
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
      logging_enabled: {
        value: cdktf.booleanToHclTerraform(this._loggingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      network_name: {
        value: cdktf.stringToHclTerraform(this._networkName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_type: {
        value: cdktf.stringToHclTerraform(this._networkType),
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
      original_address: {
        value: cdktf.stringToHclTerraform(this._originalAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      original_port: {
        value: cdktf.stringToHclTerraform(this._originalPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_tag: {
        value: cdktf.numberToHclTerraform(this._ruleTag),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      rule_type: {
        value: cdktf.stringToHclTerraform(this._ruleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_address: {
        value: cdktf.stringToHclTerraform(this._translatedAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      translated_port: {
        value: cdktf.stringToHclTerraform(this._translatedPort),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
