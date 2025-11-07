// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamidentifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#acceptancethreshold Streamidentifier#acceptancethreshold}
  */
  readonly acceptancethreshold?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#appflowlog Streamidentifier#appflowlog}
  */
  readonly appflowlog?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#breachthreshold Streamidentifier#breachthreshold}
  */
  readonly breachthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#id Streamidentifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#interval Streamidentifier#interval}
  */
  readonly interval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#maxtransactionthreshold Streamidentifier#maxtransactionthreshold}
  */
  readonly maxtransactionthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#mintransactionthreshold Streamidentifier#mintransactionthreshold}
  */
  readonly mintransactionthreshold?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#name Streamidentifier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#samplecount Streamidentifier#samplecount}
  */
  readonly samplecount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#selectorname Streamidentifier#selectorname}
  */
  readonly selectorname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#snmptrap Streamidentifier#snmptrap}
  */
  readonly snmptrap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#sort Streamidentifier#sort}
  */
  readonly sort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#trackackonlypackets Streamidentifier#trackackonlypackets}
  */
  readonly trackackonlypackets?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#tracktransactions Streamidentifier#tracktransactions}
  */
  readonly tracktransactions?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier citrixadc_streamidentifier}
*/
export class Streamidentifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_streamidentifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Streamidentifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Streamidentifier to import
  * @param importFromId The id of the existing Streamidentifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Streamidentifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_streamidentifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/streamidentifier citrixadc_streamidentifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamidentifierConfig
  */
  public constructor(scope: Construct, id: string, config: StreamidentifierConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_streamidentifier',
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
    this._acceptancethreshold = config.acceptancethreshold;
    this._appflowlog = config.appflowlog;
    this._breachthreshold = config.breachthreshold;
    this._id = config.id;
    this._interval = config.interval;
    this._maxtransactionthreshold = config.maxtransactionthreshold;
    this._mintransactionthreshold = config.mintransactionthreshold;
    this._name = config.name;
    this._samplecount = config.samplecount;
    this._selectorname = config.selectorname;
    this._snmptrap = config.snmptrap;
    this._sort = config.sort;
    this._trackackonlypackets = config.trackackonlypackets;
    this._tracktransactions = config.tracktransactions;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acceptancethreshold - computed: true, optional: true, required: false
  private _acceptancethreshold?: string; 
  public get acceptancethreshold() {
    return this.getStringAttribute('acceptancethreshold');
  }
  public set acceptancethreshold(value: string) {
    this._acceptancethreshold = value;
  }
  public resetAcceptancethreshold() {
    this._acceptancethreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptancethresholdInput() {
    return this._acceptancethreshold;
  }

  // appflowlog - computed: true, optional: true, required: false
  private _appflowlog?: string; 
  public get appflowlog() {
    return this.getStringAttribute('appflowlog');
  }
  public set appflowlog(value: string) {
    this._appflowlog = value;
  }
  public resetAppflowlog() {
    this._appflowlog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appflowlogInput() {
    return this._appflowlog;
  }

  // breachthreshold - computed: true, optional: true, required: false
  private _breachthreshold?: number; 
  public get breachthreshold() {
    return this.getNumberAttribute('breachthreshold');
  }
  public set breachthreshold(value: number) {
    this._breachthreshold = value;
  }
  public resetBreachthreshold() {
    this._breachthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breachthresholdInput() {
    return this._breachthreshold;
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

  // interval - computed: true, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // maxtransactionthreshold - computed: true, optional: true, required: false
  private _maxtransactionthreshold?: number; 
  public get maxtransactionthreshold() {
    return this.getNumberAttribute('maxtransactionthreshold');
  }
  public set maxtransactionthreshold(value: number) {
    this._maxtransactionthreshold = value;
  }
  public resetMaxtransactionthreshold() {
    this._maxtransactionthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxtransactionthresholdInput() {
    return this._maxtransactionthreshold;
  }

  // mintransactionthreshold - computed: true, optional: true, required: false
  private _mintransactionthreshold?: number; 
  public get mintransactionthreshold() {
    return this.getNumberAttribute('mintransactionthreshold');
  }
  public set mintransactionthreshold(value: number) {
    this._mintransactionthreshold = value;
  }
  public resetMintransactionthreshold() {
    this._mintransactionthreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mintransactionthresholdInput() {
    return this._mintransactionthreshold;
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

  // samplecount - computed: true, optional: true, required: false
  private _samplecount?: number; 
  public get samplecount() {
    return this.getNumberAttribute('samplecount');
  }
  public set samplecount(value: number) {
    this._samplecount = value;
  }
  public resetSamplecount() {
    this._samplecount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplecountInput() {
    return this._samplecount;
  }

  // selectorname - computed: true, optional: true, required: false
  private _selectorname?: string; 
  public get selectorname() {
    return this.getStringAttribute('selectorname');
  }
  public set selectorname(value: string) {
    this._selectorname = value;
  }
  public resetSelectorname() {
    this._selectorname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectornameInput() {
    return this._selectorname;
  }

  // snmptrap - computed: true, optional: true, required: false
  private _snmptrap?: string; 
  public get snmptrap() {
    return this.getStringAttribute('snmptrap');
  }
  public set snmptrap(value: string) {
    this._snmptrap = value;
  }
  public resetSnmptrap() {
    this._snmptrap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmptrapInput() {
    return this._snmptrap;
  }

  // sort - computed: true, optional: true, required: false
  private _sort?: string; 
  public get sort() {
    return this.getStringAttribute('sort');
  }
  public set sort(value: string) {
    this._sort = value;
  }
  public resetSort() {
    this._sort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sortInput() {
    return this._sort;
  }

  // trackackonlypackets - computed: true, optional: true, required: false
  private _trackackonlypackets?: string; 
  public get trackackonlypackets() {
    return this.getStringAttribute('trackackonlypackets');
  }
  public set trackackonlypackets(value: string) {
    this._trackackonlypackets = value;
  }
  public resetTrackackonlypackets() {
    this._trackackonlypackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackackonlypacketsInput() {
    return this._trackackonlypackets;
  }

  // tracktransactions - computed: true, optional: true, required: false
  private _tracktransactions?: string; 
  public get tracktransactions() {
    return this.getStringAttribute('tracktransactions');
  }
  public set tracktransactions(value: string) {
    this._tracktransactions = value;
  }
  public resetTracktransactions() {
    this._tracktransactions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tracktransactionsInput() {
    return this._tracktransactions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      acceptancethreshold: cdktf.stringToTerraform(this._acceptancethreshold),
      appflowlog: cdktf.stringToTerraform(this._appflowlog),
      breachthreshold: cdktf.numberToTerraform(this._breachthreshold),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      maxtransactionthreshold: cdktf.numberToTerraform(this._maxtransactionthreshold),
      mintransactionthreshold: cdktf.numberToTerraform(this._mintransactionthreshold),
      name: cdktf.stringToTerraform(this._name),
      samplecount: cdktf.numberToTerraform(this._samplecount),
      selectorname: cdktf.stringToTerraform(this._selectorname),
      snmptrap: cdktf.stringToTerraform(this._snmptrap),
      sort: cdktf.stringToTerraform(this._sort),
      trackackonlypackets: cdktf.stringToTerraform(this._trackackonlypackets),
      tracktransactions: cdktf.stringToTerraform(this._tracktransactions),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      acceptancethreshold: {
        value: cdktf.stringToHclTerraform(this._acceptancethreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      appflowlog: {
        value: cdktf.stringToHclTerraform(this._appflowlog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      breachthreshold: {
        value: cdktf.numberToHclTerraform(this._breachthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxtransactionthreshold: {
        value: cdktf.numberToHclTerraform(this._maxtransactionthreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mintransactionthreshold: {
        value: cdktf.numberToHclTerraform(this._mintransactionthreshold),
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
      samplecount: {
        value: cdktf.numberToHclTerraform(this._samplecount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      selectorname: {
        value: cdktf.stringToHclTerraform(this._selectorname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snmptrap: {
        value: cdktf.stringToHclTerraform(this._snmptrap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sort: {
        value: cdktf.stringToHclTerraform(this._sort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trackackonlypackets: {
        value: cdktf.stringToHclTerraform(this._trackackonlypackets),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracktransactions: {
        value: cdktf.stringToHclTerraform(this._tracktransactions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
