// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Dnsaction64Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64#actionname Dnsaction64#actionname}
  */
  readonly actionname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64#excluderule Dnsaction64#excluderule}
  */
  readonly excluderule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64#id Dnsaction64#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64#mappedrule Dnsaction64#mappedrule}
  */
  readonly mappedrule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64#prefix Dnsaction64#prefix}
  */
  readonly prefix: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64 citrixadc_dnsaction64}
*/
export class Dnsaction64 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnsaction64";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnsaction64 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnsaction64 to import
  * @param importFromId The id of the existing Dnsaction64 that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnsaction64 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnsaction64", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/dnsaction64 citrixadc_dnsaction64} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Dnsaction64Config
  */
  public constructor(scope: Construct, id: string, config: Dnsaction64Config) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnsaction64',
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
    this._actionname = config.actionname;
    this._excluderule = config.excluderule;
    this._id = config.id;
    this._mappedrule = config.mappedrule;
    this._prefix = config.prefix;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actionname - computed: false, optional: false, required: true
  private _actionname?: string; 
  public get actionname() {
    return this.getStringAttribute('actionname');
  }
  public set actionname(value: string) {
    this._actionname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionnameInput() {
    return this._actionname;
  }

  // excluderule - computed: true, optional: true, required: false
  private _excluderule?: string; 
  public get excluderule() {
    return this.getStringAttribute('excluderule');
  }
  public set excluderule(value: string) {
    this._excluderule = value;
  }
  public resetExcluderule() {
    this._excluderule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excluderuleInput() {
    return this._excluderule;
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

  // mappedrule - computed: true, optional: true, required: false
  private _mappedrule?: string; 
  public get mappedrule() {
    return this.getStringAttribute('mappedrule');
  }
  public set mappedrule(value: string) {
    this._mappedrule = value;
  }
  public resetMappedrule() {
    this._mappedrule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappedruleInput() {
    return this._mappedrule;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      actionname: cdktf.stringToTerraform(this._actionname),
      excluderule: cdktf.stringToTerraform(this._excluderule),
      id: cdktf.stringToTerraform(this._id),
      mappedrule: cdktf.stringToTerraform(this._mappedrule),
      prefix: cdktf.stringToTerraform(this._prefix),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      actionname: {
        value: cdktf.stringToHclTerraform(this._actionname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluderule: {
        value: cdktf.stringToHclTerraform(this._excluderule),
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
      mappedrule: {
        value: cdktf.stringToHclTerraform(this._mappedrule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
