// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnhttphdrlogprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#httphdrlogprofilename Lsnhttphdrlogprofile#httphdrlogprofilename}
  */
  readonly httphdrlogprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#id Lsnhttphdrlogprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#loghost Lsnhttphdrlogprofile#loghost}
  */
  readonly loghost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#logmethod Lsnhttphdrlogprofile#logmethod}
  */
  readonly logmethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#logurl Lsnhttphdrlogprofile#logurl}
  */
  readonly logurl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#logversion Lsnhttphdrlogprofile#logversion}
  */
  readonly logversion?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile citrixadc_lsnhttphdrlogprofile}
*/
export class Lsnhttphdrlogprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnhttphdrlogprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnhttphdrlogprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnhttphdrlogprofile to import
  * @param importFromId The id of the existing Lsnhttphdrlogprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnhttphdrlogprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnhttphdrlogprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnhttphdrlogprofile citrixadc_lsnhttphdrlogprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnhttphdrlogprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LsnhttphdrlogprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnhttphdrlogprofile',
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
    this._httphdrlogprofilename = config.httphdrlogprofilename;
    this._id = config.id;
    this._loghost = config.loghost;
    this._logmethod = config.logmethod;
    this._logurl = config.logurl;
    this._logversion = config.logversion;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // httphdrlogprofilename - computed: false, optional: false, required: true
  private _httphdrlogprofilename?: string; 
  public get httphdrlogprofilename() {
    return this.getStringAttribute('httphdrlogprofilename');
  }
  public set httphdrlogprofilename(value: string) {
    this._httphdrlogprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httphdrlogprofilenameInput() {
    return this._httphdrlogprofilename;
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

  // loghost - computed: true, optional: true, required: false
  private _loghost?: string; 
  public get loghost() {
    return this.getStringAttribute('loghost');
  }
  public set loghost(value: string) {
    this._loghost = value;
  }
  public resetLoghost() {
    this._loghost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loghostInput() {
    return this._loghost;
  }

  // logmethod - computed: true, optional: true, required: false
  private _logmethod?: string; 
  public get logmethod() {
    return this.getStringAttribute('logmethod');
  }
  public set logmethod(value: string) {
    this._logmethod = value;
  }
  public resetLogmethod() {
    this._logmethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logmethodInput() {
    return this._logmethod;
  }

  // logurl - computed: true, optional: true, required: false
  private _logurl?: string; 
  public get logurl() {
    return this.getStringAttribute('logurl');
  }
  public set logurl(value: string) {
    this._logurl = value;
  }
  public resetLogurl() {
    this._logurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logurlInput() {
    return this._logurl;
  }

  // logversion - computed: true, optional: true, required: false
  private _logversion?: string; 
  public get logversion() {
    return this.getStringAttribute('logversion');
  }
  public set logversion(value: string) {
    this._logversion = value;
  }
  public resetLogversion() {
    this._logversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logversionInput() {
    return this._logversion;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      httphdrlogprofilename: cdktf.stringToTerraform(this._httphdrlogprofilename),
      id: cdktf.stringToTerraform(this._id),
      loghost: cdktf.stringToTerraform(this._loghost),
      logmethod: cdktf.stringToTerraform(this._logmethod),
      logurl: cdktf.stringToTerraform(this._logurl),
      logversion: cdktf.stringToTerraform(this._logversion),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      httphdrlogprofilename: {
        value: cdktf.stringToHclTerraform(this._httphdrlogprofilename),
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
      loghost: {
        value: cdktf.stringToHclTerraform(this._loghost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logmethod: {
        value: cdktf.stringToHclTerraform(this._logmethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logurl: {
        value: cdktf.stringToHclTerraform(this._logurl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logversion: {
        value: cdktf.stringToHclTerraform(this._logversion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
