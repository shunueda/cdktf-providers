// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsldhparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam#bits Ssldhparam#bits}
  */
  readonly bits: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam#dhfile Ssldhparam#dhfile}
  */
  readonly dhfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam#gen Ssldhparam#gen}
  */
  readonly gen?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam#id Ssldhparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam citrixadc_ssldhparam}
*/
export class Ssldhparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ssldhparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ssldhparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ssldhparam to import
  * @param importFromId The id of the existing Ssldhparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ssldhparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ssldhparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssldhparam citrixadc_ssldhparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsldhparamConfig
  */
  public constructor(scope: Construct, id: string, config: SsldhparamConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ssldhparam',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.0.0',
        providerVersionConstraint: '2.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._bits = config.bits;
    this._dhfile = config.dhfile;
    this._gen = config.gen;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bits - computed: false, optional: false, required: true
  private _bits?: number; 
  public get bits() {
    return this.getNumberAttribute('bits');
  }
  public set bits(value: number) {
    this._bits = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitsInput() {
    return this._bits;
  }

  // dhfile - computed: false, optional: false, required: true
  private _dhfile?: string; 
  public get dhfile() {
    return this.getStringAttribute('dhfile');
  }
  public set dhfile(value: string) {
    this._dhfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dhfileInput() {
    return this._dhfile;
  }

  // gen - computed: true, optional: true, required: false
  private _gen?: string; 
  public get gen() {
    return this.getStringAttribute('gen');
  }
  public set gen(value: string) {
    this._gen = value;
  }
  public resetGen() {
    this._gen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genInput() {
    return this._gen;
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
      bits: cdktf.numberToTerraform(this._bits),
      dhfile: cdktf.stringToTerraform(this._dhfile),
      gen: cdktf.stringToTerraform(this._gen),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      bits: {
        value: cdktf.numberToHclTerraform(this._bits),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dhfile: {
        value: cdktf.stringToHclTerraform(this._dhfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gen: {
        value: cdktf.stringToHclTerraform(this._gen),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
