// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DbdbprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#conmultiplex Dbdbprofile#conmultiplex}
  */
  readonly conmultiplex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#enablecachingconmuxoff Dbdbprofile#enablecachingconmuxoff}
  */
  readonly enablecachingconmuxoff?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#id Dbdbprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#interpretquery Dbdbprofile#interpretquery}
  */
  readonly interpretquery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#kcdaccount Dbdbprofile#kcdaccount}
  */
  readonly kcdaccount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#name Dbdbprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#stickiness Dbdbprofile#stickiness}
  */
  readonly stickiness?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile citrixadc_dbdbprofile}
*/
export class Dbdbprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dbdbprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dbdbprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dbdbprofile to import
  * @param importFromId The id of the existing Dbdbprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dbdbprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dbdbprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dbdbprofile citrixadc_dbdbprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DbdbprofileConfig
  */
  public constructor(scope: Construct, id: string, config: DbdbprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dbdbprofile',
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
    this._conmultiplex = config.conmultiplex;
    this._enablecachingconmuxoff = config.enablecachingconmuxoff;
    this._id = config.id;
    this._interpretquery = config.interpretquery;
    this._kcdaccount = config.kcdaccount;
    this._name = config.name;
    this._stickiness = config.stickiness;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // conmultiplex - computed: true, optional: true, required: false
  private _conmultiplex?: string; 
  public get conmultiplex() {
    return this.getStringAttribute('conmultiplex');
  }
  public set conmultiplex(value: string) {
    this._conmultiplex = value;
  }
  public resetConmultiplex() {
    this._conmultiplex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conmultiplexInput() {
    return this._conmultiplex;
  }

  // enablecachingconmuxoff - computed: true, optional: true, required: false
  private _enablecachingconmuxoff?: string; 
  public get enablecachingconmuxoff() {
    return this.getStringAttribute('enablecachingconmuxoff');
  }
  public set enablecachingconmuxoff(value: string) {
    this._enablecachingconmuxoff = value;
  }
  public resetEnablecachingconmuxoff() {
    this._enablecachingconmuxoff = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablecachingconmuxoffInput() {
    return this._enablecachingconmuxoff;
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

  // interpretquery - computed: true, optional: true, required: false
  private _interpretquery?: string; 
  public get interpretquery() {
    return this.getStringAttribute('interpretquery');
  }
  public set interpretquery(value: string) {
    this._interpretquery = value;
  }
  public resetInterpretquery() {
    this._interpretquery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interpretqueryInput() {
    return this._interpretquery;
  }

  // kcdaccount - computed: true, optional: true, required: false
  private _kcdaccount?: string; 
  public get kcdaccount() {
    return this.getStringAttribute('kcdaccount');
  }
  public set kcdaccount(value: string) {
    this._kcdaccount = value;
  }
  public resetKcdaccount() {
    this._kcdaccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kcdaccountInput() {
    return this._kcdaccount;
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

  // stickiness - computed: true, optional: true, required: false
  private _stickiness?: string; 
  public get stickiness() {
    return this.getStringAttribute('stickiness');
  }
  public set stickiness(value: string) {
    this._stickiness = value;
  }
  public resetStickiness() {
    this._stickiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stickinessInput() {
    return this._stickiness;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      conmultiplex: cdktf.stringToTerraform(this._conmultiplex),
      enablecachingconmuxoff: cdktf.stringToTerraform(this._enablecachingconmuxoff),
      id: cdktf.stringToTerraform(this._id),
      interpretquery: cdktf.stringToTerraform(this._interpretquery),
      kcdaccount: cdktf.stringToTerraform(this._kcdaccount),
      name: cdktf.stringToTerraform(this._name),
      stickiness: cdktf.stringToTerraform(this._stickiness),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      conmultiplex: {
        value: cdktf.stringToHclTerraform(this._conmultiplex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enablecachingconmuxoff: {
        value: cdktf.stringToHclTerraform(this._enablecachingconmuxoff),
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
      interpretquery: {
        value: cdktf.stringToHclTerraform(this._interpretquery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kcdaccount: {
        value: cdktf.stringToHclTerraform(this._kcdaccount),
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
      stickiness: {
        value: cdktf.stringToHclTerraform(this._stickiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
