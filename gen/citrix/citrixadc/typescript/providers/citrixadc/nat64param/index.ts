// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Nat64ParamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#id Nat64Param#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#nat64fragheader Nat64Param#nat64fragheader}
  */
  readonly nat64Fragheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#nat64ignoretos Nat64Param#nat64ignoretos}
  */
  readonly nat64Ignoretos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#nat64v6mtu Nat64Param#nat64v6mtu}
  */
  readonly nat64V6Mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#nat64zerochecksum Nat64Param#nat64zerochecksum}
  */
  readonly nat64Zerochecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#td Nat64Param#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param citrixadc_nat64param}
*/
export class Nat64Param extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nat64param";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nat64Param resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nat64Param to import
  * @param importFromId The id of the existing Nat64Param that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nat64Param to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nat64param", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nat64param citrixadc_nat64param} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Nat64ParamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: Nat64ParamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nat64param',
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
    this._id = config.id;
    this._nat64Fragheader = config.nat64Fragheader;
    this._nat64Ignoretos = config.nat64Ignoretos;
    this._nat64V6Mtu = config.nat64V6Mtu;
    this._nat64Zerochecksum = config.nat64Zerochecksum;
    this._td = config.td;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // nat64fragheader - computed: true, optional: true, required: false
  private _nat64Fragheader?: string; 
  public get nat64Fragheader() {
    return this.getStringAttribute('nat64fragheader');
  }
  public set nat64Fragheader(value: string) {
    this._nat64Fragheader = value;
  }
  public resetNat64Fragheader() {
    this._nat64Fragheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64FragheaderInput() {
    return this._nat64Fragheader;
  }

  // nat64ignoretos - computed: true, optional: true, required: false
  private _nat64Ignoretos?: string; 
  public get nat64Ignoretos() {
    return this.getStringAttribute('nat64ignoretos');
  }
  public set nat64Ignoretos(value: string) {
    this._nat64Ignoretos = value;
  }
  public resetNat64Ignoretos() {
    this._nat64Ignoretos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64IgnoretosInput() {
    return this._nat64Ignoretos;
  }

  // nat64v6mtu - computed: true, optional: true, required: false
  private _nat64V6Mtu?: number; 
  public get nat64V6Mtu() {
    return this.getNumberAttribute('nat64v6mtu');
  }
  public set nat64V6Mtu(value: number) {
    this._nat64V6Mtu = value;
  }
  public resetNat64V6Mtu() {
    this._nat64V6Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64V6MtuInput() {
    return this._nat64V6Mtu;
  }

  // nat64zerochecksum - computed: true, optional: true, required: false
  private _nat64Zerochecksum?: string; 
  public get nat64Zerochecksum() {
    return this.getStringAttribute('nat64zerochecksum');
  }
  public set nat64Zerochecksum(value: string) {
    this._nat64Zerochecksum = value;
  }
  public resetNat64Zerochecksum() {
    this._nat64Zerochecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat64ZerochecksumInput() {
    return this._nat64Zerochecksum;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      nat64fragheader: cdktf.stringToTerraform(this._nat64Fragheader),
      nat64ignoretos: cdktf.stringToTerraform(this._nat64Ignoretos),
      nat64v6mtu: cdktf.numberToTerraform(this._nat64V6Mtu),
      nat64zerochecksum: cdktf.stringToTerraform(this._nat64Zerochecksum),
      td: cdktf.numberToTerraform(this._td),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64fragheader: {
        value: cdktf.stringToHclTerraform(this._nat64Fragheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64ignoretos: {
        value: cdktf.stringToHclTerraform(this._nat64Ignoretos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat64v6mtu: {
        value: cdktf.numberToHclTerraform(this._nat64V6Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat64zerochecksum: {
        value: cdktf.stringToHclTerraform(this._nat64Zerochecksum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
