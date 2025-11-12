// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnappsattributesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes#id Lsnappsattributes#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes#name Lsnappsattributes#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes#port Lsnappsattributes#port}
  */
  readonly port?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes#sessiontimeout Lsnappsattributes#sessiontimeout}
  */
  readonly sessiontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes#transportprotocol Lsnappsattributes#transportprotocol}
  */
  readonly transportprotocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes citrixadc_lsnappsattributes}
*/
export class Lsnappsattributes extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnappsattributes";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnappsattributes resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnappsattributes to import
  * @param importFromId The id of the existing Lsnappsattributes that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnappsattributes to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnappsattributes", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnappsattributes citrixadc_lsnappsattributes} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnappsattributesConfig
  */
  public constructor(scope: Construct, id: string, config: LsnappsattributesConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnappsattributes',
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
    this._name = config.name;
    this._port = config.port;
    this._sessiontimeout = config.sessiontimeout;
    this._transportprotocol = config.transportprotocol;
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

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // sessiontimeout - computed: true, optional: true, required: false
  private _sessiontimeout?: number; 
  public get sessiontimeout() {
    return this.getNumberAttribute('sessiontimeout');
  }
  public set sessiontimeout(value: number) {
    this._sessiontimeout = value;
  }
  public resetSessiontimeout() {
    this._sessiontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessiontimeoutInput() {
    return this._sessiontimeout;
  }

  // transportprotocol - computed: false, optional: false, required: true
  private _transportprotocol?: string; 
  public get transportprotocol() {
    return this.getStringAttribute('transportprotocol');
  }
  public set transportprotocol(value: string) {
    this._transportprotocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportprotocolInput() {
    return this._transportprotocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.stringToTerraform(this._port),
      sessiontimeout: cdktf.numberToTerraform(this._sessiontimeout),
      transportprotocol: cdktf.stringToTerraform(this._transportprotocol),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sessiontimeout: {
        value: cdktf.numberToHclTerraform(this._sessiontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transportprotocol: {
        value: cdktf.stringToHclTerraform(this._transportprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
