// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePimIpv6Config extends cdktf.TerraformMetaArguments {
  /**
  * Configure BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#bfd InterfacePimIpv6#bfd}
  */
  readonly bfd?: boolean | cdktf.IResolvable;
  /**
  * Border of PIM BSR domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#bsr_border InterfacePimIpv6#bsr_border}
  */
  readonly bsrBorder?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#device InterfacePimIpv6#device}
  */
  readonly device?: string;
  /**
  * PIM Hello DR priority
  *   - Range: `0`-`4294967295`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#dr_priority InterfacePimIpv6#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#name InterfacePimIpv6#name}
  */
  readonly name: string;
  /**
  * PIM interface commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#pim InterfacePimIpv6#pim}
  */
  readonly pim?: boolean | cdktf.IResolvable;
  /**
  * Interface type
  *   - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`, `TwentyFiveGigE`, `FortyGigabitEthernet`, `FiftyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`, `Port-channel`, `Port-channel-subinterface/Port-channel`, `Tunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#type InterfacePimIpv6#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6 iosxe_interface_pim_ipv6}
*/
export class InterfacePimIpv6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_pim_ipv6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePimIpv6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePimIpv6 to import
  * @param importFromId The id of the existing InterfacePimIpv6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePimIpv6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_pim_ipv6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.15.0/docs/resources/interface_pim_ipv6 iosxe_interface_pim_ipv6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePimIpv6Config
  */
  public constructor(scope: Construct, id: string, config: InterfacePimIpv6Config) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_pim_ipv6',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bfd = config.bfd;
    this._bsrBorder = config.bsrBorder;
    this._device = config.device;
    this._drPriority = config.drPriority;
    this._name = config.name;
    this._pim = config.pim;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bfd - computed: false, optional: true, required: false
  private _bfd?: boolean | cdktf.IResolvable; 
  public get bfd() {
    return this.getBooleanAttribute('bfd');
  }
  public set bfd(value: boolean | cdktf.IResolvable) {
    this._bfd = value;
  }
  public resetBfd() {
    this._bfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bfdInput() {
    return this._bfd;
  }

  // bsr_border - computed: false, optional: true, required: false
  private _bsrBorder?: boolean | cdktf.IResolvable; 
  public get bsrBorder() {
    return this.getBooleanAttribute('bsr_border');
  }
  public set bsrBorder(value: boolean | cdktf.IResolvable) {
    this._bsrBorder = value;
  }
  public resetBsrBorder() {
    this._bsrBorder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsrBorderInput() {
    return this._bsrBorder;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // dr_priority - computed: false, optional: true, required: false
  private _drPriority?: number; 
  public get drPriority() {
    return this.getNumberAttribute('dr_priority');
  }
  public set drPriority(value: number) {
    this._drPriority = value;
  }
  public resetDrPriority() {
    this._drPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drPriorityInput() {
    return this._drPriority;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // pim - computed: false, optional: true, required: false
  private _pim?: boolean | cdktf.IResolvable; 
  public get pim() {
    return this.getBooleanAttribute('pim');
  }
  public set pim(value: boolean | cdktf.IResolvable) {
    this._pim = value;
  }
  public resetPim() {
    this._pim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pimInput() {
    return this._pim;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      bfd: cdktf.booleanToTerraform(this._bfd),
      bsr_border: cdktf.booleanToTerraform(this._bsrBorder),
      device: cdktf.stringToTerraform(this._device),
      dr_priority: cdktf.numberToTerraform(this._drPriority),
      name: cdktf.stringToTerraform(this._name),
      pim: cdktf.booleanToTerraform(this._pim),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bfd: {
        value: cdktf.booleanToHclTerraform(this._bfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      bsr_border: {
        value: cdktf.booleanToHclTerraform(this._bsrBorder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dr_priority: {
        value: cdktf.numberToHclTerraform(this._drPriority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pim: {
        value: cdktf.booleanToHclTerraform(this._pim),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
