// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RnatparamConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam#id Rnatparam#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam#srcippersistency Rnatparam#srcippersistency}
  */
  readonly srcippersistency?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam#tcpproxy Rnatparam#tcpproxy}
  */
  readonly tcpproxy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam citrixadc_rnatparam}
*/
export class Rnatparam extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_rnatparam";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rnatparam resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rnatparam to import
  * @param importFromId The id of the existing Rnatparam that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rnatparam to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_rnatparam", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/rnatparam citrixadc_rnatparam} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RnatparamConfig = {}
  */
  public constructor(scope: Construct, id: string, config: RnatparamConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_rnatparam',
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
    this._srcippersistency = config.srcippersistency;
    this._tcpproxy = config.tcpproxy;
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

  // srcippersistency - computed: true, optional: true, required: false
  private _srcippersistency?: string; 
  public get srcippersistency() {
    return this.getStringAttribute('srcippersistency');
  }
  public set srcippersistency(value: string) {
    this._srcippersistency = value;
  }
  public resetSrcippersistency() {
    this._srcippersistency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcippersistencyInput() {
    return this._srcippersistency;
  }

  // tcpproxy - computed: true, optional: true, required: false
  private _tcpproxy?: string; 
  public get tcpproxy() {
    return this.getStringAttribute('tcpproxy');
  }
  public set tcpproxy(value: string) {
    this._tcpproxy = value;
  }
  public resetTcpproxy() {
    this._tcpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpproxyInput() {
    return this._tcpproxy;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      srcippersistency: cdktf.stringToTerraform(this._srcippersistency),
      tcpproxy: cdktf.stringToTerraform(this._tcpproxy),
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
      srcippersistency: {
        value: cdktf.stringToHclTerraform(this._srcippersistency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpproxy: {
        value: cdktf.stringToHclTerraform(this._tcpproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
