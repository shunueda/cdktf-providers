// https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnlogprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#analyticsprofile Lsnlogprofile#analyticsprofile}
  */
  readonly analyticsprofile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#id Lsnlogprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#logcompact Lsnlogprofile#logcompact}
  */
  readonly logcompact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#logipfix Lsnlogprofile#logipfix}
  */
  readonly logipfix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#logprofilename Lsnlogprofile#logprofilename}
  */
  readonly logprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#logsessdeletion Lsnlogprofile#logsessdeletion}
  */
  readonly logsessdeletion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#logsubscrinfo Lsnlogprofile#logsubscrinfo}
  */
  readonly logsubscrinfo?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile citrixadc_lsnlogprofile}
*/
export class Lsnlogprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnlogprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnlogprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnlogprofile to import
  * @param importFromId The id of the existing Lsnlogprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnlogprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnlogprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.0.0/docs/resources/lsnlogprofile citrixadc_lsnlogprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnlogprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LsnlogprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnlogprofile',
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
    this._analyticsprofile = config.analyticsprofile;
    this._id = config.id;
    this._logcompact = config.logcompact;
    this._logipfix = config.logipfix;
    this._logprofilename = config.logprofilename;
    this._logsessdeletion = config.logsessdeletion;
    this._logsubscrinfo = config.logsubscrinfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyticsprofile - computed: true, optional: true, required: false
  private _analyticsprofile?: string; 
  public get analyticsprofile() {
    return this.getStringAttribute('analyticsprofile');
  }
  public set analyticsprofile(value: string) {
    this._analyticsprofile = value;
  }
  public resetAnalyticsprofile() {
    this._analyticsprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get analyticsprofileInput() {
    return this._analyticsprofile;
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

  // logcompact - computed: true, optional: true, required: false
  private _logcompact?: string; 
  public get logcompact() {
    return this.getStringAttribute('logcompact');
  }
  public set logcompact(value: string) {
    this._logcompact = value;
  }
  public resetLogcompact() {
    this._logcompact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logcompactInput() {
    return this._logcompact;
  }

  // logipfix - computed: true, optional: true, required: false
  private _logipfix?: string; 
  public get logipfix() {
    return this.getStringAttribute('logipfix');
  }
  public set logipfix(value: string) {
    this._logipfix = value;
  }
  public resetLogipfix() {
    this._logipfix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logipfixInput() {
    return this._logipfix;
  }

  // logprofilename - computed: false, optional: false, required: true
  private _logprofilename?: string; 
  public get logprofilename() {
    return this.getStringAttribute('logprofilename');
  }
  public set logprofilename(value: string) {
    this._logprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logprofilenameInput() {
    return this._logprofilename;
  }

  // logsessdeletion - computed: true, optional: true, required: false
  private _logsessdeletion?: string; 
  public get logsessdeletion() {
    return this.getStringAttribute('logsessdeletion');
  }
  public set logsessdeletion(value: string) {
    this._logsessdeletion = value;
  }
  public resetLogsessdeletion() {
    this._logsessdeletion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsessdeletionInput() {
    return this._logsessdeletion;
  }

  // logsubscrinfo - computed: true, optional: true, required: false
  private _logsubscrinfo?: string; 
  public get logsubscrinfo() {
    return this.getStringAttribute('logsubscrinfo');
  }
  public set logsubscrinfo(value: string) {
    this._logsubscrinfo = value;
  }
  public resetLogsubscrinfo() {
    this._logsubscrinfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logsubscrinfoInput() {
    return this._logsubscrinfo;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      analyticsprofile: cdktf.stringToTerraform(this._analyticsprofile),
      id: cdktf.stringToTerraform(this._id),
      logcompact: cdktf.stringToTerraform(this._logcompact),
      logipfix: cdktf.stringToTerraform(this._logipfix),
      logprofilename: cdktf.stringToTerraform(this._logprofilename),
      logsessdeletion: cdktf.stringToTerraform(this._logsessdeletion),
      logsubscrinfo: cdktf.stringToTerraform(this._logsubscrinfo),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      analyticsprofile: {
        value: cdktf.stringToHclTerraform(this._analyticsprofile),
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
      logcompact: {
        value: cdktf.stringToHclTerraform(this._logcompact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logipfix: {
        value: cdktf.stringToHclTerraform(this._logipfix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logprofilename: {
        value: cdktf.stringToHclTerraform(this._logprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logsessdeletion: {
        value: cdktf.stringToHclTerraform(this._logsessdeletion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logsubscrinfo: {
        value: cdktf.stringToHclTerraform(this._logsubscrinfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
