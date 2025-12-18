// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RadiusnodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode#id Radiusnode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode#nodeprefix Radiusnode#nodeprefix}
  */
  readonly nodeprefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode#radkey Radiusnode#radkey}
  */
  readonly radkey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode citrixadc_radiusnode}
*/
export class Radiusnode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_radiusnode";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Radiusnode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Radiusnode to import
  * @param importFromId The id of the existing Radiusnode that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Radiusnode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_radiusnode", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/radiusnode citrixadc_radiusnode} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RadiusnodeConfig
  */
  public constructor(scope: Construct, id: string, config: RadiusnodeConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_radiusnode',
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
    this._id = config.id;
    this._nodeprefix = config.nodeprefix;
    this._radkey = config.radkey;
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

  // nodeprefix - computed: false, optional: false, required: true
  private _nodeprefix?: string; 
  public get nodeprefix() {
    return this.getStringAttribute('nodeprefix');
  }
  public set nodeprefix(value: string) {
    this._nodeprefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeprefixInput() {
    return this._nodeprefix;
  }

  // radkey - computed: false, optional: false, required: true
  private _radkey?: string; 
  public get radkey() {
    return this.getStringAttribute('radkey');
  }
  public set radkey(value: string) {
    this._radkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get radkeyInput() {
    return this._radkey;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      nodeprefix: cdktf.stringToTerraform(this._nodeprefix),
      radkey: cdktf.stringToTerraform(this._radkey),
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
      nodeprefix: {
        value: cdktf.stringToHclTerraform(this._nodeprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      radkey: {
        value: cdktf.stringToHclTerraform(this._radkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
