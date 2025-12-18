// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AuthenticationpushserviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#clientid Authenticationpushservice#clientid}
  */
  readonly clientid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#clientsecret Authenticationpushservice#clientsecret}
  */
  readonly clientsecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#customerid Authenticationpushservice#customerid}
  */
  readonly customerid?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#id Authenticationpushservice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#name Authenticationpushservice#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#refreshinterval Authenticationpushservice#refreshinterval}
  */
  readonly refreshinterval?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice citrixadc_authenticationpushservice}
*/
export class Authenticationpushservice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_authenticationpushservice";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Authenticationpushservice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Authenticationpushservice to import
  * @param importFromId The id of the existing Authenticationpushservice that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Authenticationpushservice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_authenticationpushservice", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/authenticationpushservice citrixadc_authenticationpushservice} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AuthenticationpushserviceConfig
  */
  public constructor(scope: Construct, id: string, config: AuthenticationpushserviceConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_authenticationpushservice',
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
    this._clientid = config.clientid;
    this._clientsecret = config.clientsecret;
    this._customerid = config.customerid;
    this._id = config.id;
    this._name = config.name;
    this._refreshinterval = config.refreshinterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clientid - computed: true, optional: true, required: false
  private _clientid?: string; 
  public get clientid() {
    return this.getStringAttribute('clientid');
  }
  public set clientid(value: string) {
    this._clientid = value;
  }
  public resetClientid() {
    this._clientid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientidInput() {
    return this._clientid;
  }

  // clientsecret - computed: true, optional: true, required: false
  private _clientsecret?: string; 
  public get clientsecret() {
    return this.getStringAttribute('clientsecret');
  }
  public set clientsecret(value: string) {
    this._clientsecret = value;
  }
  public resetClientsecret() {
    this._clientsecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientsecretInput() {
    return this._clientsecret;
  }

  // customerid - computed: true, optional: true, required: false
  private _customerid?: string; 
  public get customerid() {
    return this.getStringAttribute('customerid');
  }
  public set customerid(value: string) {
    this._customerid = value;
  }
  public resetCustomerid() {
    this._customerid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customeridInput() {
    return this._customerid;
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

  // refreshinterval - computed: true, optional: true, required: false
  private _refreshinterval?: number; 
  public get refreshinterval() {
    return this.getNumberAttribute('refreshinterval');
  }
  public set refreshinterval(value: number) {
    this._refreshinterval = value;
  }
  public resetRefreshinterval() {
    this._refreshinterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshintervalInput() {
    return this._refreshinterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      clientid: cdktf.stringToTerraform(this._clientid),
      clientsecret: cdktf.stringToTerraform(this._clientsecret),
      customerid: cdktf.stringToTerraform(this._customerid),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      refreshinterval: cdktf.numberToTerraform(this._refreshinterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clientid: {
        value: cdktf.stringToHclTerraform(this._clientid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clientsecret: {
        value: cdktf.stringToHclTerraform(this._clientsecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customerid: {
        value: cdktf.stringToHclTerraform(this._customerid),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refreshinterval: {
        value: cdktf.numberToHclTerraform(this._refreshinterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
