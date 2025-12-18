// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AppqoeactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#altcontentpath Appqoeaction#altcontentpath}
  */
  readonly altcontentpath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#altcontentsvcname Appqoeaction#altcontentsvcname}
  */
  readonly altcontentsvcname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#customfile Appqoeaction#customfile}
  */
  readonly customfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#delay Appqoeaction#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#dosaction Appqoeaction#dosaction}
  */
  readonly dosaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#dostrigexpression Appqoeaction#dostrigexpression}
  */
  readonly dostrigexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#id Appqoeaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#maxconn Appqoeaction#maxconn}
  */
  readonly maxconn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#name Appqoeaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#numretries Appqoeaction#numretries}
  */
  readonly numretries?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#polqdepth Appqoeaction#polqdepth}
  */
  readonly polqdepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#priority Appqoeaction#priority}
  */
  readonly priority?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#priqdepth Appqoeaction#priqdepth}
  */
  readonly priqdepth?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#respondwith Appqoeaction#respondwith}
  */
  readonly respondwith?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#retryonreset Appqoeaction#retryonreset}
  */
  readonly retryonreset?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#retryontimeout Appqoeaction#retryontimeout}
  */
  readonly retryontimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#tcpprofile Appqoeaction#tcpprofile}
  */
  readonly tcpprofile?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction citrixadc_appqoeaction}
*/
export class Appqoeaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_appqoeaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Appqoeaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Appqoeaction to import
  * @param importFromId The id of the existing Appqoeaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Appqoeaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_appqoeaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/appqoeaction citrixadc_appqoeaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AppqoeactionConfig
  */
  public constructor(scope: Construct, id: string, config: AppqoeactionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_appqoeaction',
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
    this._altcontentpath = config.altcontentpath;
    this._altcontentsvcname = config.altcontentsvcname;
    this._customfile = config.customfile;
    this._delay = config.delay;
    this._dosaction = config.dosaction;
    this._dostrigexpression = config.dostrigexpression;
    this._id = config.id;
    this._maxconn = config.maxconn;
    this._name = config.name;
    this._numretries = config.numretries;
    this._polqdepth = config.polqdepth;
    this._priority = config.priority;
    this._priqdepth = config.priqdepth;
    this._respondwith = config.respondwith;
    this._retryonreset = config.retryonreset;
    this._retryontimeout = config.retryontimeout;
    this._tcpprofile = config.tcpprofile;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // altcontentpath - computed: true, optional: true, required: false
  private _altcontentpath?: string; 
  public get altcontentpath() {
    return this.getStringAttribute('altcontentpath');
  }
  public set altcontentpath(value: string) {
    this._altcontentpath = value;
  }
  public resetAltcontentpath() {
    this._altcontentpath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altcontentpathInput() {
    return this._altcontentpath;
  }

  // altcontentsvcname - computed: true, optional: true, required: false
  private _altcontentsvcname?: string; 
  public get altcontentsvcname() {
    return this.getStringAttribute('altcontentsvcname');
  }
  public set altcontentsvcname(value: string) {
    this._altcontentsvcname = value;
  }
  public resetAltcontentsvcname() {
    this._altcontentsvcname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get altcontentsvcnameInput() {
    return this._altcontentsvcname;
  }

  // customfile - computed: true, optional: true, required: false
  private _customfile?: string; 
  public get customfile() {
    return this.getStringAttribute('customfile');
  }
  public set customfile(value: string) {
    this._customfile = value;
  }
  public resetCustomfile() {
    this._customfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customfileInput() {
    return this._customfile;
  }

  // delay - computed: true, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // dosaction - computed: true, optional: true, required: false
  private _dosaction?: string; 
  public get dosaction() {
    return this.getStringAttribute('dosaction');
  }
  public set dosaction(value: string) {
    this._dosaction = value;
  }
  public resetDosaction() {
    this._dosaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dosactionInput() {
    return this._dosaction;
  }

  // dostrigexpression - computed: true, optional: true, required: false
  private _dostrigexpression?: string; 
  public get dostrigexpression() {
    return this.getStringAttribute('dostrigexpression');
  }
  public set dostrigexpression(value: string) {
    this._dostrigexpression = value;
  }
  public resetDostrigexpression() {
    this._dostrigexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dostrigexpressionInput() {
    return this._dostrigexpression;
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

  // maxconn - computed: true, optional: true, required: false
  private _maxconn?: number; 
  public get maxconn() {
    return this.getNumberAttribute('maxconn');
  }
  public set maxconn(value: number) {
    this._maxconn = value;
  }
  public resetMaxconn() {
    this._maxconn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxconnInput() {
    return this._maxconn;
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

  // numretries - computed: true, optional: true, required: false
  private _numretries?: string; 
  public get numretries() {
    return this.getStringAttribute('numretries');
  }
  public set numretries(value: string) {
    this._numretries = value;
  }
  public resetNumretries() {
    this._numretries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numretriesInput() {
    return this._numretries;
  }

  // polqdepth - computed: true, optional: true, required: false
  private _polqdepth?: number; 
  public get polqdepth() {
    return this.getNumberAttribute('polqdepth');
  }
  public set polqdepth(value: number) {
    this._polqdepth = value;
  }
  public resetPolqdepth() {
    this._polqdepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get polqdepthInput() {
    return this._polqdepth;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // priqdepth - computed: true, optional: true, required: false
  private _priqdepth?: number; 
  public get priqdepth() {
    return this.getNumberAttribute('priqdepth');
  }
  public set priqdepth(value: number) {
    this._priqdepth = value;
  }
  public resetPriqdepth() {
    this._priqdepth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priqdepthInput() {
    return this._priqdepth;
  }

  // respondwith - computed: true, optional: true, required: false
  private _respondwith?: string; 
  public get respondwith() {
    return this.getStringAttribute('respondwith');
  }
  public set respondwith(value: string) {
    this._respondwith = value;
  }
  public resetRespondwith() {
    this._respondwith = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respondwithInput() {
    return this._respondwith;
  }

  // retryonreset - computed: true, optional: true, required: false
  private _retryonreset?: string; 
  public get retryonreset() {
    return this.getStringAttribute('retryonreset');
  }
  public set retryonreset(value: string) {
    this._retryonreset = value;
  }
  public resetRetryonreset() {
    this._retryonreset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryonresetInput() {
    return this._retryonreset;
  }

  // retryontimeout - computed: true, optional: true, required: false
  private _retryontimeout?: number; 
  public get retryontimeout() {
    return this.getNumberAttribute('retryontimeout');
  }
  public set retryontimeout(value: number) {
    this._retryontimeout = value;
  }
  public resetRetryontimeout() {
    this._retryontimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryontimeoutInput() {
    return this._retryontimeout;
  }

  // tcpprofile - computed: true, optional: true, required: false
  private _tcpprofile?: string; 
  public get tcpprofile() {
    return this.getStringAttribute('tcpprofile');
  }
  public set tcpprofile(value: string) {
    this._tcpprofile = value;
  }
  public resetTcpprofile() {
    this._tcpprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpprofileInput() {
    return this._tcpprofile;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      altcontentpath: cdktf.stringToTerraform(this._altcontentpath),
      altcontentsvcname: cdktf.stringToTerraform(this._altcontentsvcname),
      customfile: cdktf.stringToTerraform(this._customfile),
      delay: cdktf.numberToTerraform(this._delay),
      dosaction: cdktf.stringToTerraform(this._dosaction),
      dostrigexpression: cdktf.stringToTerraform(this._dostrigexpression),
      id: cdktf.stringToTerraform(this._id),
      maxconn: cdktf.numberToTerraform(this._maxconn),
      name: cdktf.stringToTerraform(this._name),
      numretries: cdktf.stringToTerraform(this._numretries),
      polqdepth: cdktf.numberToTerraform(this._polqdepth),
      priority: cdktf.stringToTerraform(this._priority),
      priqdepth: cdktf.numberToTerraform(this._priqdepth),
      respondwith: cdktf.stringToTerraform(this._respondwith),
      retryonreset: cdktf.stringToTerraform(this._retryonreset),
      retryontimeout: cdktf.numberToTerraform(this._retryontimeout),
      tcpprofile: cdktf.stringToTerraform(this._tcpprofile),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      altcontentpath: {
        value: cdktf.stringToHclTerraform(this._altcontentpath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      altcontentsvcname: {
        value: cdktf.stringToHclTerraform(this._altcontentsvcname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      customfile: {
        value: cdktf.stringToHclTerraform(this._customfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dosaction: {
        value: cdktf.stringToHclTerraform(this._dosaction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dostrigexpression: {
        value: cdktf.stringToHclTerraform(this._dostrigexpression),
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
      maxconn: {
        value: cdktf.numberToHclTerraform(this._maxconn),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      numretries: {
        value: cdktf.stringToHclTerraform(this._numretries),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polqdepth: {
        value: cdktf.numberToHclTerraform(this._polqdepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priqdepth: {
        value: cdktf.numberToHclTerraform(this._priqdepth),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      respondwith: {
        value: cdktf.stringToHclTerraform(this._respondwith),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retryonreset: {
        value: cdktf.stringToHclTerraform(this._retryonreset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retryontimeout: {
        value: cdktf.numberToHclTerraform(this._retryontimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcpprofile: {
        value: cdktf.stringToHclTerraform(this._tcpprofile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
