// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NstrafficdomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain#aliasname Nstrafficdomain#aliasname}
  */
  readonly aliasname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain#id Nstrafficdomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain#td Nstrafficdomain#td}
  */
  readonly td: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain#vmac Nstrafficdomain#vmac}
  */
  readonly vmac?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain citrixadc_nstrafficdomain}
*/
export class Nstrafficdomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_nstrafficdomain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Nstrafficdomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Nstrafficdomain to import
  * @param importFromId The id of the existing Nstrafficdomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Nstrafficdomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_nstrafficdomain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/nstrafficdomain citrixadc_nstrafficdomain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NstrafficdomainConfig
  */
  public constructor(scope: Construct, id: string, config: NstrafficdomainConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_nstrafficdomain',
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
    this._aliasname = config.aliasname;
    this._id = config.id;
    this._td = config.td;
    this._vmac = config.vmac;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliasname - computed: true, optional: true, required: false
  private _aliasname?: string; 
  public get aliasname() {
    return this.getStringAttribute('aliasname');
  }
  public set aliasname(value: string) {
    this._aliasname = value;
  }
  public resetAliasname() {
    this._aliasname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasnameInput() {
    return this._aliasname;
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

  // td - computed: false, optional: false, required: true
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // vmac - computed: true, optional: true, required: false
  private _vmac?: string; 
  public get vmac() {
    return this.getStringAttribute('vmac');
  }
  public set vmac(value: string) {
    this._vmac = value;
  }
  public resetVmac() {
    this._vmac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmacInput() {
    return this._vmac;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliasname: cdktf.stringToTerraform(this._aliasname),
      id: cdktf.stringToTerraform(this._id),
      td: cdktf.numberToTerraform(this._td),
      vmac: cdktf.stringToTerraform(this._vmac),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliasname: {
        value: cdktf.stringToHclTerraform(this._aliasname),
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
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vmac: {
        value: cdktf.stringToHclTerraform(this._vmac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
