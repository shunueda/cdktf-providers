// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnparameterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter#id Lsnparameter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter#sessionsync Lsnparameter#sessionsync}
  */
  readonly sessionsync?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter#subscrsessionremoval Lsnparameter#subscrsessionremoval}
  */
  readonly subscrsessionremoval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter citrixadc_lsnparameter}
*/
export class Lsnparameter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnparameter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnparameter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnparameter to import
  * @param importFromId The id of the existing Lsnparameter that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnparameter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnparameter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/lsnparameter citrixadc_lsnparameter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnparameterConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LsnparameterConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnparameter',
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
    this._sessionsync = config.sessionsync;
    this._subscrsessionremoval = config.subscrsessionremoval;
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

  // sessionsync - computed: true, optional: true, required: false
  private _sessionsync?: string; 
  public get sessionsync() {
    return this.getStringAttribute('sessionsync');
  }
  public set sessionsync(value: string) {
    this._sessionsync = value;
  }
  public resetSessionsync() {
    this._sessionsync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionsyncInput() {
    return this._sessionsync;
  }

  // subscrsessionremoval - computed: true, optional: true, required: false
  private _subscrsessionremoval?: string; 
  public get subscrsessionremoval() {
    return this.getStringAttribute('subscrsessionremoval');
  }
  public set subscrsessionremoval(value: string) {
    this._subscrsessionremoval = value;
  }
  public resetSubscrsessionremoval() {
    this._subscrsessionremoval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscrsessionremovalInput() {
    return this._subscrsessionremoval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      sessionsync: cdktf.stringToTerraform(this._sessionsync),
      subscrsessionremoval: cdktf.stringToTerraform(this._subscrsessionremoval),
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
      sessionsync: {
        value: cdktf.stringToHclTerraform(this._sessionsync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscrsessionremoval: {
        value: cdktf.stringToHclTerraform(this._subscrsessionremoval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
