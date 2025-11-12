// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsllogprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#id Ssllogprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#name Ssllogprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#ssllogclauth Ssllogprofile#ssllogclauth}
  */
  readonly ssllogclauth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#ssllogclauthfailures Ssllogprofile#ssllogclauthfailures}
  */
  readonly ssllogclauthfailures?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#sslloghs Ssllogprofile#sslloghs}
  */
  readonly sslloghs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#sslloghsfailures Ssllogprofile#sslloghsfailures}
  */
  readonly sslloghsfailures?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile citrixadc_ssllogprofile}
*/
export class Ssllogprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ssllogprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ssllogprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ssllogprofile to import
  * @param importFromId The id of the existing Ssllogprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ssllogprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ssllogprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/ssllogprofile citrixadc_ssllogprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsllogprofileConfig
  */
  public constructor(scope: Construct, id: string, config: SsllogprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ssllogprofile',
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
    this._ssllogclauth = config.ssllogclauth;
    this._ssllogclauthfailures = config.ssllogclauthfailures;
    this._sslloghs = config.sslloghs;
    this._sslloghsfailures = config.sslloghsfailures;
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

  // ssllogclauth - computed: true, optional: true, required: false
  private _ssllogclauth?: string; 
  public get ssllogclauth() {
    return this.getStringAttribute('ssllogclauth');
  }
  public set ssllogclauth(value: string) {
    this._ssllogclauth = value;
  }
  public resetSsllogclauth() {
    this._ssllogclauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssllogclauthInput() {
    return this._ssllogclauth;
  }

  // ssllogclauthfailures - computed: true, optional: true, required: false
  private _ssllogclauthfailures?: string; 
  public get ssllogclauthfailures() {
    return this.getStringAttribute('ssllogclauthfailures');
  }
  public set ssllogclauthfailures(value: string) {
    this._ssllogclauthfailures = value;
  }
  public resetSsllogclauthfailures() {
    this._ssllogclauthfailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssllogclauthfailuresInput() {
    return this._ssllogclauthfailures;
  }

  // sslloghs - computed: true, optional: true, required: false
  private _sslloghs?: string; 
  public get sslloghs() {
    return this.getStringAttribute('sslloghs');
  }
  public set sslloghs(value: string) {
    this._sslloghs = value;
  }
  public resetSslloghs() {
    this._sslloghs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslloghsInput() {
    return this._sslloghs;
  }

  // sslloghsfailures - computed: true, optional: true, required: false
  private _sslloghsfailures?: string; 
  public get sslloghsfailures() {
    return this.getStringAttribute('sslloghsfailures');
  }
  public set sslloghsfailures(value: string) {
    this._sslloghsfailures = value;
  }
  public resetSslloghsfailures() {
    this._sslloghsfailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslloghsfailuresInput() {
    return this._sslloghsfailures;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      ssllogclauth: cdktf.stringToTerraform(this._ssllogclauth),
      ssllogclauthfailures: cdktf.stringToTerraform(this._ssllogclauthfailures),
      sslloghs: cdktf.stringToTerraform(this._sslloghs),
      sslloghsfailures: cdktf.stringToTerraform(this._sslloghsfailures),
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
      ssllogclauth: {
        value: cdktf.stringToHclTerraform(this._ssllogclauth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssllogclauthfailures: {
        value: cdktf.stringToHclTerraform(this._ssllogclauthfailures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslloghs: {
        value: cdktf.stringToHclTerraform(this._sslloghs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sslloghsfailures: {
        value: cdktf.stringToHclTerraform(this._sslloghsfailures),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
