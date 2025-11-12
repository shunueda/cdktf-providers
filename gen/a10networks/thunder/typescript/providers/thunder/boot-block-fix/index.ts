// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BootBlockFixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Compact flash
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix#cf BootBlockFix#cf}
  */
  readonly cf?: number;
  /**
  * Hard disk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix#hd BootBlockFix#hd}
  */
  readonly hd?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix#id BootBlockFix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix thunder_boot_block_fix}
*/
export class BootBlockFix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_boot_block_fix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BootBlockFix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BootBlockFix to import
  * @param importFromId The id of the existing BootBlockFix that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BootBlockFix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_boot_block_fix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/boot_block_fix thunder_boot_block_fix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BootBlockFixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BootBlockFixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_boot_block_fix',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cf = config.cf;
    this._hd = config.hd;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf - computed: false, optional: true, required: false
  private _cf?: number; 
  public get cf() {
    return this.getNumberAttribute('cf');
  }
  public set cf(value: number) {
    this._cf = value;
  }
  public resetCf() {
    this._cf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfInput() {
    return this._cf;
  }

  // hd - computed: false, optional: true, required: false
  private _hd?: number; 
  public get hd() {
    return this.getNumberAttribute('hd');
  }
  public set hd(value: number) {
    this._hd = value;
  }
  public resetHd() {
    this._hd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hdInput() {
    return this._hd;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cf: cdktf.numberToTerraform(this._cf),
      hd: cdktf.numberToTerraform(this._hd),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cf: {
        value: cdktf.numberToHclTerraform(this._cf),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hd: {
        value: cdktf.numberToHclTerraform(this._hd),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
