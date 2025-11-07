// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SslvserverSslciphersuiteBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding#ciphername SslvserverSslciphersuiteBinding#ciphername}
  */
  readonly ciphername: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding#description SslvserverSslciphersuiteBinding#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding#id SslvserverSslciphersuiteBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding#vservername SslvserverSslciphersuiteBinding#vservername}
  */
  readonly vservername: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding citrixadc_sslvserver_sslciphersuite_binding}
*/
export class SslvserverSslciphersuiteBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslvserver_sslciphersuite_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SslvserverSslciphersuiteBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SslvserverSslciphersuiteBinding to import
  * @param importFromId The id of the existing SslvserverSslciphersuiteBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SslvserverSslciphersuiteBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslvserver_sslciphersuite_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/sslvserver_sslciphersuite_binding citrixadc_sslvserver_sslciphersuite_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SslvserverSslciphersuiteBindingConfig
  */
  public constructor(scope: Construct, id: string, config: SslvserverSslciphersuiteBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslvserver_sslciphersuite_binding',
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
    this._ciphername = config.ciphername;
    this._description = config.description;
    this._id = config.id;
    this._vservername = config.vservername;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // vservername - computed: false, optional: false, required: true
  private _vservername?: string; 
  public get vservername() {
    return this.getStringAttribute('vservername');
  }
  public set vservername(value: string) {
    this._vservername = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vservernameInput() {
    return this._vservername;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ciphername: cdktf.stringToTerraform(this._ciphername),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      vservername: cdktf.stringToTerraform(this._vservername),
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
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      vservername: {
        value: cdktf.stringToHclTerraform(this._vservername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
