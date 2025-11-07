// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfacePimConfig extends cdktf.TerraformMetaArguments {
  /**
  * Configure BFD
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#bfd InterfacePim#bfd}
  */
  readonly bfd?: boolean | cdktf.IResolvable;
  /**
  * Border of PIM domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#border InterfacePim#border}
  */
  readonly border?: boolean | cdktf.IResolvable;
  /**
  * Border of PIM domain
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#bsr_border InterfacePim#bsr_border}
  */
  readonly bsrBorder?: boolean | cdktf.IResolvable;
  /**
  * Enable PIM dense-mode operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#dense_mode InterfacePim#dense_mode}
  */
  readonly denseMode?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#device InterfacePim#device}
  */
  readonly device?: string;
  /**
  * PIM router DR priority
  *   - Range: `0`-`4294967294`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#dr_priority InterfacePim#dr_priority}
  */
  readonly drPriority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#name InterfacePim#name}
  */
  readonly name: string;
  /**
  * Enable PIM passive interface operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#passive InterfacePim#passive}
  */
  readonly passive?: boolean | cdktf.IResolvable;
  /**
  * Enable PIM sparse-dense-mode operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#sparse_dense_mode InterfacePim#sparse_dense_mode}
  */
  readonly sparseDenseMode?: boolean | cdktf.IResolvable;
  /**
  * Enable PIM sparse-mode operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#sparse_mode InterfacePim#sparse_mode}
  */
  readonly sparseMode?: boolean | cdktf.IResolvable;
  /**
  * Interface type
  *   - Choices: `GigabitEthernet`, `TwoGigabitEthernet`, `FiveGigabitEthernet`, `TenGigabitEthernet`, `TwentyFiveGigE`, `FortyGigabitEthernet`, `HundredGigE`, `TwoHundredGigE`, `FourHundredGigE`, `Loopback`, `Vlan`, `Port-channel`, `Port-channel-subinterface/Port-channel`, `Tunnel`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#type InterfacePim#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim iosxe_interface_pim}
*/
export class InterfacePim extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_interface_pim";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfacePim resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfacePim to import
  * @param importFromId The id of the existing InterfacePim that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfacePim to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_interface_pim", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.9.3/docs/resources/interface_pim iosxe_interface_pim} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfacePimConfig
  */
  public constructor(scope: Construct, id: string, config: InterfacePimConfig) {
    super(scope, id, {
      terraformResourceType: 'iosxe_interface_pim',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.9.3'
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
    this._border = config.border;
    this._bsrBorder = config.bsrBorder;
    this._denseMode = config.denseMode;
    this._device = config.device;
    this._drPriority = config.drPriority;
    this._name = config.name;
    this._passive = config.passive;
    this._sparseDenseMode = config.sparseDenseMode;
    this._sparseMode = config.sparseMode;
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

  // border - computed: false, optional: true, required: false
  private _border?: boolean | cdktf.IResolvable; 
  public get border() {
    return this.getBooleanAttribute('border');
  }
  public set border(value: boolean | cdktf.IResolvable) {
    this._border = value;
  }
  public resetBorder() {
    this._border = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get borderInput() {
    return this._border;
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

  // dense_mode - computed: false, optional: true, required: false
  private _denseMode?: boolean | cdktf.IResolvable; 
  public get denseMode() {
    return this.getBooleanAttribute('dense_mode');
  }
  public set denseMode(value: boolean | cdktf.IResolvable) {
    this._denseMode = value;
  }
  public resetDenseMode() {
    this._denseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get denseModeInput() {
    return this._denseMode;
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

  // passive - computed: false, optional: true, required: false
  private _passive?: boolean | cdktf.IResolvable; 
  public get passive() {
    return this.getBooleanAttribute('passive');
  }
  public set passive(value: boolean | cdktf.IResolvable) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // sparse_dense_mode - computed: false, optional: true, required: false
  private _sparseDenseMode?: boolean | cdktf.IResolvable; 
  public get sparseDenseMode() {
    return this.getBooleanAttribute('sparse_dense_mode');
  }
  public set sparseDenseMode(value: boolean | cdktf.IResolvable) {
    this._sparseDenseMode = value;
  }
  public resetSparseDenseMode() {
    this._sparseDenseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseDenseModeInput() {
    return this._sparseDenseMode;
  }

  // sparse_mode - computed: false, optional: true, required: false
  private _sparseMode?: boolean | cdktf.IResolvable; 
  public get sparseMode() {
    return this.getBooleanAttribute('sparse_mode');
  }
  public set sparseMode(value: boolean | cdktf.IResolvable) {
    this._sparseMode = value;
  }
  public resetSparseMode() {
    this._sparseMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sparseModeInput() {
    return this._sparseMode;
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
      border: cdktf.booleanToTerraform(this._border),
      bsr_border: cdktf.booleanToTerraform(this._bsrBorder),
      dense_mode: cdktf.booleanToTerraform(this._denseMode),
      device: cdktf.stringToTerraform(this._device),
      dr_priority: cdktf.numberToTerraform(this._drPriority),
      name: cdktf.stringToTerraform(this._name),
      passive: cdktf.booleanToTerraform(this._passive),
      sparse_dense_mode: cdktf.booleanToTerraform(this._sparseDenseMode),
      sparse_mode: cdktf.booleanToTerraform(this._sparseMode),
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
      border: {
        value: cdktf.booleanToHclTerraform(this._border),
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
      dense_mode: {
        value: cdktf.booleanToHclTerraform(this._denseMode),
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
      passive: {
        value: cdktf.booleanToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sparse_dense_mode: {
        value: cdktf.booleanToHclTerraform(this._sparseDenseMode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sparse_mode: {
        value: cdktf.booleanToHclTerraform(this._sparseMode),
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
