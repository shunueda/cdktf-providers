// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpengineidConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid#engineid Snmpengineid#engineid}
  */
  readonly engineid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid#id Snmpengineid#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid#ownernode Snmpengineid#ownernode}
  */
  readonly ownernode?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid citrixadc_snmpengineid}
*/
export class Snmpengineid extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmpengineid";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmpengineid resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmpengineid to import
  * @param importFromId The id of the existing Snmpengineid that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmpengineid to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmpengineid", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/snmpengineid citrixadc_snmpengineid} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpengineidConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SnmpengineidConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmpengineid',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineid = config.engineid;
    this._id = config.id;
    this._ownernode = config.ownernode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // engineid - computed: false, optional: true, required: false
  private _engineid?: string; 
  public get engineid() {
    return this.getStringAttribute('engineid');
  }
  public set engineid(value: string) {
    this._engineid = value;
  }
  public resetEngineid() {
    this._engineid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineidInput() {
    return this._engineid;
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

  // ownernode - computed: false, optional: true, required: false
  private _ownernode?: number; 
  public get ownernode() {
    return this.getNumberAttribute('ownernode');
  }
  public set ownernode(value: number) {
    this._ownernode = value;
  }
  public resetOwnernode() {
    this._ownernode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownernodeInput() {
    return this._ownernode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engineid: cdktf.stringToTerraform(this._engineid),
      id: cdktf.stringToTerraform(this._id),
      ownernode: cdktf.numberToTerraform(this._ownernode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engineid: {
        value: cdktf.stringToHclTerraform(this._engineid),
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
      ownernode: {
        value: cdktf.numberToHclTerraform(this._ownernode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
