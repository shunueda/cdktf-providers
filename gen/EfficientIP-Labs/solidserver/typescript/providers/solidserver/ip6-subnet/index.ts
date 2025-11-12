// https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Ip6SubnetConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the block intyo which creating the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#block Ip6Subnet#block}
  */
  readonly block?: string;
  /**
  * The class associated to the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#class Ip6Subnet#class}
  */
  readonly class?: string;
  /**
  * The class parameters associated to the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#class_parameters Ip6Subnet#class_parameters}
  */
  readonly classParameters?: { [key: string]: string };
  /**
  * Offset for creating the gateway. Default is 0 (No gateway).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#gateway_offset Ip6Subnet#gateway_offset}
  */
  readonly gatewayOffset?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#id Ip6Subnet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the IPv6 subnet to create.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#name Ip6Subnet#name}
  */
  readonly name: string;
  /**
  * The expected IPv6 subnet's prefix length (ex: 24 for a '/24').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#prefix_size Ip6Subnet#prefix_size}
  */
  readonly prefixSize: number;
  /**
  * The optionally requested subnet IPv6 address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#request_ip Ip6Subnet#request_ip}
  */
  readonly requestIp?: string;
  /**
  * The name of the space into which creating the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#space Ip6Subnet#space}
  */
  readonly space: string;
  /**
  * The terminal property of the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#terminal Ip6Subnet#terminal}
  */
  readonly terminal?: boolean | cdktf.IResolvable;
  /**
  * The VLAN Domain associated to the IPv6 subnet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#vlan_domain Ip6Subnet#vlan_domain}
  */
  readonly vlanDomain?: string;
  /**
  * The VLAN ID associated to the IPv6 subnet. Default is 0 (No VLAN).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#vlan_id Ip6Subnet#vlan_id}
  */
  readonly vlanId?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet solidserver_ip6_subnet}
*/
export class Ip6Subnet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "solidserver_ip6_subnet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ip6Subnet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ip6Subnet to import
  * @param importFromId The id of the existing Ip6Subnet that should be imported. Refer to the {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ip6Subnet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "solidserver_ip6_subnet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/efficientip-labs/solidserver/1.1.25/docs/resources/ip6_subnet solidserver_ip6_subnet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Ip6SubnetConfig
  */
  public constructor(scope: Construct, id: string, config: Ip6SubnetConfig) {
    super(scope, id, {
      terraformResourceType: 'solidserver_ip6_subnet',
      terraformGeneratorMetadata: {
        providerName: 'solidserver',
        providerVersion: '1.1.25',
        providerVersionConstraint: '1.1.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._block = config.block;
    this._class = config.class;
    this._classParameters = config.classParameters;
    this._gatewayOffset = config.gatewayOffset;
    this._id = config.id;
    this._name = config.name;
    this._prefixSize = config.prefixSize;
    this._requestIp = config.requestIp;
    this._space = config.space;
    this._terminal = config.terminal;
    this._vlanDomain = config.vlanDomain;
    this._vlanId = config.vlanId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // block - computed: false, optional: true, required: false
  private _block?: string; 
  public get block() {
    return this.getStringAttribute('block');
  }
  public set block(value: string) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // class - computed: false, optional: true, required: false
  private _class?: string; 
  public get class() {
    return this.getStringAttribute('class');
  }
  public set class(value: string) {
    this._class = value;
  }
  public resetClass() {
    this._class = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classInput() {
    return this._class;
  }

  // class_parameters - computed: false, optional: true, required: false
  private _classParameters?: { [key: string]: string }; 
  public get classParameters() {
    return this.getStringMapAttribute('class_parameters');
  }
  public set classParameters(value: { [key: string]: string }) {
    this._classParameters = value;
  }
  public resetClassParameters() {
    this._classParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classParametersInput() {
    return this._classParameters;
  }

  // gateway - computed: true, optional: false, required: false
  public get gateway() {
    return this.getStringAttribute('gateway');
  }

  // gateway_offset - computed: false, optional: true, required: false
  private _gatewayOffset?: number; 
  public get gatewayOffset() {
    return this.getNumberAttribute('gateway_offset');
  }
  public set gatewayOffset(value: number) {
    this._gatewayOffset = value;
  }
  public resetGatewayOffset() {
    this._gatewayOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gatewayOffsetInput() {
    return this._gatewayOffset;
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

  // prefix - computed: true, optional: false, required: false
  public get prefix() {
    return this.getStringAttribute('prefix');
  }

  // prefix_size - computed: false, optional: false, required: true
  private _prefixSize?: number; 
  public get prefixSize() {
    return this.getNumberAttribute('prefix_size');
  }
  public set prefixSize(value: number) {
    this._prefixSize = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixSizeInput() {
    return this._prefixSize;
  }

  // request_ip - computed: false, optional: true, required: false
  private _requestIp?: string; 
  public get requestIp() {
    return this.getStringAttribute('request_ip');
  }
  public set requestIp(value: string) {
    this._requestIp = value;
  }
  public resetRequestIp() {
    this._requestIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestIpInput() {
    return this._requestIp;
  }

  // space - computed: false, optional: false, required: true
  private _space?: string; 
  public get space() {
    return this.getStringAttribute('space');
  }
  public set space(value: string) {
    this._space = value;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceInput() {
    return this._space;
  }

  // terminal - computed: false, optional: true, required: false
  private _terminal?: boolean | cdktf.IResolvable; 
  public get terminal() {
    return this.getBooleanAttribute('terminal');
  }
  public set terminal(value: boolean | cdktf.IResolvable) {
    this._terminal = value;
  }
  public resetTerminal() {
    this._terminal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminalInput() {
    return this._terminal;
  }

  // vlan_domain - computed: false, optional: true, required: false
  private _vlanDomain?: string; 
  public get vlanDomain() {
    return this.getStringAttribute('vlan_domain');
  }
  public set vlanDomain(value: string) {
    this._vlanDomain = value;
  }
  public resetVlanDomain() {
    this._vlanDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanDomainInput() {
    return this._vlanDomain;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block: cdktf.stringToTerraform(this._block),
      class: cdktf.stringToTerraform(this._class),
      class_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._classParameters),
      gateway_offset: cdktf.numberToTerraform(this._gatewayOffset),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      prefix_size: cdktf.numberToTerraform(this._prefixSize),
      request_ip: cdktf.stringToTerraform(this._requestIp),
      space: cdktf.stringToTerraform(this._space),
      terminal: cdktf.booleanToTerraform(this._terminal),
      vlan_domain: cdktf.stringToTerraform(this._vlanDomain),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block: {
        value: cdktf.stringToHclTerraform(this._block),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class: {
        value: cdktf.stringToHclTerraform(this._class),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      class_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._classParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      gateway_offset: {
        value: cdktf.numberToHclTerraform(this._gatewayOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      prefix_size: {
        value: cdktf.numberToHclTerraform(this._prefixSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      request_ip: {
        value: cdktf.stringToHclTerraform(this._requestIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space: {
        value: cdktf.stringToHclTerraform(this._space),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminal: {
        value: cdktf.booleanToHclTerraform(this._terminal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vlan_domain: {
        value: cdktf.stringToHclTerraform(this._vlanDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
