// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InatparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#id Inatparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#nat46fragheader Inatparam#nat46fragheader}
  */
  readonly nat46Fragheader?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#nat46ignoretos Inatparam#nat46ignoretos}
  */
  readonly nat46Ignoretos?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#nat46v6mtu Inatparam#nat46v6mtu}
  */
  readonly nat46V6Mtu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#nat46v6prefix Inatparam#nat46v6prefix}
  */
  readonly nat46V6Prefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#nat46zerochecksum Inatparam#nat46zerochecksum}
  */
  readonly nat46Zerochecksum?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#td Inatparam#td}
  */
  readonly td?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam citrixadc_inatparam}
*/
export class Inatparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_inatparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Inatparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Inatparam to import
  * @param importFromId The id of the existing Inatparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Inatparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_inatparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/inatparam citrixadc_inatparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InatparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InatparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_inatparam',
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
    this._id = config.id;
    this._nat46Fragheader = config.nat46Fragheader;
    this._nat46Ignoretos = config.nat46Ignoretos;
    this._nat46V6Mtu = config.nat46V6Mtu;
    this._nat46V6Prefix = config.nat46V6Prefix;
    this._nat46Zerochecksum = config.nat46Zerochecksum;
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

  // nat46fragheader - computed: true, optional: true, required: false
  private _nat46Fragheader?: string; 
  public get nat46Fragheader() {
    return this.getStringAttribute('nat46fragheader');
  }
  public set nat46Fragheader(value: string) {
    this._nat46Fragheader = value;
  }
  public resetNat46Fragheader() {
    this._nat46Fragheader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46FragheaderInput() {
    return this._nat46Fragheader;
  }

  // nat46ignoretos - computed: true, optional: true, required: false
  private _nat46Ignoretos?: string; 
  public get nat46Ignoretos() {
    return this.getStringAttribute('nat46ignoretos');
  }
  public set nat46Ignoretos(value: string) {
    this._nat46Ignoretos = value;
  }
  public resetNat46Ignoretos() {
    this._nat46Ignoretos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46IgnoretosInput() {
    return this._nat46Ignoretos;
  }

  // nat46v6mtu - computed: true, optional: true, required: false
  private _nat46V6Mtu?: number; 
  public get nat46V6Mtu() {
    return this.getNumberAttribute('nat46v6mtu');
  }
  public set nat46V6Mtu(value: number) {
    this._nat46V6Mtu = value;
  }
  public resetNat46V6Mtu() {
    this._nat46V6Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46V6MtuInput() {
    return this._nat46V6Mtu;
  }

  // nat46v6prefix - computed: true, optional: true, required: false
  private _nat46V6Prefix?: string; 
  public get nat46V6Prefix() {
    return this.getStringAttribute('nat46v6prefix');
  }
  public set nat46V6Prefix(value: string) {
    this._nat46V6Prefix = value;
  }
  public resetNat46V6Prefix() {
    this._nat46V6Prefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46V6PrefixInput() {
    return this._nat46V6Prefix;
  }

  // nat46zerochecksum - computed: true, optional: true, required: false
  private _nat46Zerochecksum?: string; 
  public get nat46Zerochecksum() {
    return this.getStringAttribute('nat46zerochecksum');
  }
  public set nat46Zerochecksum(value: string) {
    this._nat46Zerochecksum = value;
  }
  public resetNat46Zerochecksum() {
    this._nat46Zerochecksum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nat46ZerochecksumInput() {
    return this._nat46Zerochecksum;
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
      nat46fragheader: cdktf.stringToTerraform(this._nat46Fragheader),
      nat46ignoretos: cdktf.stringToTerraform(this._nat46Ignoretos),
      nat46v6mtu: cdktf.numberToTerraform(this._nat46V6Mtu),
      nat46v6prefix: cdktf.stringToTerraform(this._nat46V6Prefix),
      nat46zerochecksum: cdktf.stringToTerraform(this._nat46Zerochecksum),
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
      nat46fragheader: {
        value: cdktf.stringToHclTerraform(this._nat46Fragheader),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46ignoretos: {
        value: cdktf.stringToHclTerraform(this._nat46Ignoretos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46v6mtu: {
        value: cdktf.numberToHclTerraform(this._nat46V6Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nat46v6prefix: {
        value: cdktf.stringToHclTerraform(this._nat46V6Prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nat46zerochecksum: {
        value: cdktf.stringToHclTerraform(this._nat46Zerochecksum),
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
