// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NsweblogparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam#buffersizemb Nsweblogparam#buffersizemb}
  */
  readonly buffersizemb?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam#customreqhdrs Nsweblogparam#customreqhdrs}
  */
  readonly customreqhdrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam#customrsphdrs Nsweblogparam#customrsphdrs}
  */
  readonly customrsphdrs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam#id Nsweblogparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam citrixadc_nsweblogparam}
*/
export class Nsweblogparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nsweblogparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nsweblogparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nsweblogparam to import
  * @param importFromId The id of the existing Nsweblogparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nsweblogparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nsweblogparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/nsweblogparam citrixadc_nsweblogparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NsweblogparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: NsweblogparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nsweblogparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '1.45.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._buffersizemb = config.buffersizemb;
    this._customreqhdrs = config.customreqhdrs;
    this._customrsphdrs = config.customrsphdrs;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffersizemb - computed: true, optional: true, required: false
  private _buffersizemb?: number; 
  public get buffersizemb() {
    return this.getNumberAttribute('buffersizemb');
  }
  public set buffersizemb(value: number) {
    this._buffersizemb = value;
  }
  public resetBuffersizemb() {
    this._buffersizemb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get buffersizembInput() {
    return this._buffersizemb;
  }

  // customreqhdrs - computed: true, optional: true, required: false
  private _customreqhdrs?: string[]; 
  public get customreqhdrs() {
    return this.getListAttribute('customreqhdrs');
  }
  public set customreqhdrs(value: string[]) {
    this._customreqhdrs = value;
  }
  public resetCustomreqhdrs() {
    this._customreqhdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customreqhdrsInput() {
    return this._customreqhdrs;
  }

  // customrsphdrs - computed: true, optional: true, required: false
  private _customrsphdrs?: string[]; 
  public get customrsphdrs() {
    return this.getListAttribute('customrsphdrs');
  }
  public set customrsphdrs(value: string[]) {
    this._customrsphdrs = value;
  }
  public resetCustomrsphdrs() {
    this._customrsphdrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customrsphdrsInput() {
    return this._customrsphdrs;
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
      buffersizemb: cdktf.numberToTerraform(this._buffersizemb),
      customreqhdrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customreqhdrs),
      customrsphdrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._customrsphdrs),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffersizemb: {
        value: cdktf.numberToHclTerraform(this._buffersizemb),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      customreqhdrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customreqhdrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      customrsphdrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._customrsphdrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
