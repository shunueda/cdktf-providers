// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ReputationsettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings#id Reputationsettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings#proxypassword Reputationsettings#proxypassword}
  */
  readonly proxypassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings#proxyport Reputationsettings#proxyport}
  */
  readonly proxyport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings#proxyserver Reputationsettings#proxyserver}
  */
  readonly proxyserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings#proxyusername Reputationsettings#proxyusername}
  */
  readonly proxyusername?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings citrixadc_reputationsettings}
*/
export class Reputationsettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_reputationsettings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Reputationsettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Reputationsettings to import
  * @param importFromId The id of the existing Reputationsettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Reputationsettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_reputationsettings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/reputationsettings citrixadc_reputationsettings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ReputationsettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ReputationsettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_reputationsettings',
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
    this._proxypassword = config.proxypassword;
    this._proxyport = config.proxyport;
    this._proxyserver = config.proxyserver;
    this._proxyusername = config.proxyusername;
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

  // proxypassword - computed: true, optional: true, required: false
  private _proxypassword?: string; 
  public get proxypassword() {
    return this.getStringAttribute('proxypassword');
  }
  public set proxypassword(value: string) {
    this._proxypassword = value;
  }
  public resetProxypassword() {
    this._proxypassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxypasswordInput() {
    return this._proxypassword;
  }

  // proxyport - computed: true, optional: true, required: false
  private _proxyport?: number; 
  public get proxyport() {
    return this.getNumberAttribute('proxyport');
  }
  public set proxyport(value: number) {
    this._proxyport = value;
  }
  public resetProxyport() {
    this._proxyport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyportInput() {
    return this._proxyport;
  }

  // proxyserver - computed: true, optional: true, required: false
  private _proxyserver?: string; 
  public get proxyserver() {
    return this.getStringAttribute('proxyserver');
  }
  public set proxyserver(value: string) {
    this._proxyserver = value;
  }
  public resetProxyserver() {
    this._proxyserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyserverInput() {
    return this._proxyserver;
  }

  // proxyusername - computed: true, optional: true, required: false
  private _proxyusername?: string; 
  public get proxyusername() {
    return this.getStringAttribute('proxyusername');
  }
  public set proxyusername(value: string) {
    this._proxyusername = value;
  }
  public resetProxyusername() {
    this._proxyusername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyusernameInput() {
    return this._proxyusername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      proxypassword: cdktf.stringToTerraform(this._proxypassword),
      proxyport: cdktf.numberToTerraform(this._proxyport),
      proxyserver: cdktf.stringToTerraform(this._proxyserver),
      proxyusername: cdktf.stringToTerraform(this._proxyusername),
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
      proxypassword: {
        value: cdktf.stringToHclTerraform(this._proxypassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyport: {
        value: cdktf.numberToHclTerraform(this._proxyport),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      proxyserver: {
        value: cdktf.stringToHclTerraform(this._proxyserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxyusername: {
        value: cdktf.stringToHclTerraform(this._proxyusername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
