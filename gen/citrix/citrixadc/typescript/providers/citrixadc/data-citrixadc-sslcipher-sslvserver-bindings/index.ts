// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcipher_sslvserver_bindings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixadcSslcipherSslvserverBindingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcipher_sslvserver_bindings#ciphername DataCitrixadcSslcipherSslvserverBindings#ciphername}
  */
  readonly ciphername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcipher_sslvserver_bindings#id DataCitrixadcSslcipherSslvserverBindings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcipher_sslvserver_bindings citrixadc_sslcipher_sslvserver_bindings}
*/
export class DataCitrixadcSslcipherSslvserverBindings extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcipher_sslvserver_bindings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixadcSslcipherSslvserverBindings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixadcSslcipherSslvserverBindings to import
  * @param importFromId The id of the existing DataCitrixadcSslcipherSslvserverBindings that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcipher_sslvserver_bindings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixadcSslcipherSslvserverBindings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcipher_sslvserver_bindings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcipher_sslvserver_bindings citrixadc_sslcipher_sslvserver_bindings} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixadcSslcipherSslvserverBindingsConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixadcSslcipherSslvserverBindingsConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcipher_sslvserver_bindings',
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
    this._ciphername = config.ciphername;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bound_sslvservers - computed: true, optional: false, required: false
  public get boundSslvservers() {
    return this.getStringAttribute('bound_sslvservers');
  }

  // ciphername - computed: false, optional: false, required: true
  private _ciphername?: string; 
  public get ciphername() {
    return this.getStringAttribute('ciphername');
  }
  public set ciphername(value: string) {
    this._ciphername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ciphernameInput() {
    return this._ciphername;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphername: cdktf.stringToTerraform(this._ciphername),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ciphername: {
        value: cdktf.stringToHclTerraform(this._ciphername),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
