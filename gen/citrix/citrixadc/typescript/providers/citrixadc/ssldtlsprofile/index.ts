// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SsldtlsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#helloverifyrequest Ssldtlsprofile#helloverifyrequest}
  */
  readonly helloverifyrequest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#id Ssldtlsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#initialretrytimeout Ssldtlsprofile#initialretrytimeout}
  */
  readonly initialretrytimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#maxbadmacignorecount Ssldtlsprofile#maxbadmacignorecount}
  */
  readonly maxbadmacignorecount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#maxholdqlen Ssldtlsprofile#maxholdqlen}
  */
  readonly maxholdqlen?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#maxpacketsize Ssldtlsprofile#maxpacketsize}
  */
  readonly maxpacketsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#maxrecordsize Ssldtlsprofile#maxrecordsize}
  */
  readonly maxrecordsize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#maxretrytime Ssldtlsprofile#maxretrytime}
  */
  readonly maxretrytime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#name Ssldtlsprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#pmtudiscovery Ssldtlsprofile#pmtudiscovery}
  */
  readonly pmtudiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#terminatesession Ssldtlsprofile#terminatesession}
  */
  readonly terminatesession?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile citrixadc_ssldtlsprofile}
*/
export class Ssldtlsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_ssldtlsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ssldtlsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ssldtlsprofile to import
  * @param importFromId The id of the existing Ssldtlsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ssldtlsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_ssldtlsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/ssldtlsprofile citrixadc_ssldtlsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SsldtlsprofileConfig
  */
  public constructor(scope: Construct, id: string, config: SsldtlsprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_ssldtlsprofile',
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
    this._helloverifyrequest = config.helloverifyrequest;
    this._id = config.id;
    this._initialretrytimeout = config.initialretrytimeout;
    this._maxbadmacignorecount = config.maxbadmacignorecount;
    this._maxholdqlen = config.maxholdqlen;
    this._maxpacketsize = config.maxpacketsize;
    this._maxrecordsize = config.maxrecordsize;
    this._maxretrytime = config.maxretrytime;
    this._name = config.name;
    this._pmtudiscovery = config.pmtudiscovery;
    this._terminatesession = config.terminatesession;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // helloverifyrequest - computed: true, optional: true, required: false
  private _helloverifyrequest?: string; 
  public get helloverifyrequest() {
    return this.getStringAttribute('helloverifyrequest');
  }
  public set helloverifyrequest(value: string) {
    this._helloverifyrequest = value;
  }
  public resetHelloverifyrequest() {
    this._helloverifyrequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloverifyrequestInput() {
    return this._helloverifyrequest;
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

  // initialretrytimeout - computed: true, optional: true, required: false
  private _initialretrytimeout?: number; 
  public get initialretrytimeout() {
    return this.getNumberAttribute('initialretrytimeout');
  }
  public set initialretrytimeout(value: number) {
    this._initialretrytimeout = value;
  }
  public resetInitialretrytimeout() {
    this._initialretrytimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialretrytimeoutInput() {
    return this._initialretrytimeout;
  }

  // maxbadmacignorecount - computed: true, optional: true, required: false
  private _maxbadmacignorecount?: number; 
  public get maxbadmacignorecount() {
    return this.getNumberAttribute('maxbadmacignorecount');
  }
  public set maxbadmacignorecount(value: number) {
    this._maxbadmacignorecount = value;
  }
  public resetMaxbadmacignorecount() {
    this._maxbadmacignorecount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxbadmacignorecountInput() {
    return this._maxbadmacignorecount;
  }

  // maxholdqlen - computed: true, optional: true, required: false
  private _maxholdqlen?: number; 
  public get maxholdqlen() {
    return this.getNumberAttribute('maxholdqlen');
  }
  public set maxholdqlen(value: number) {
    this._maxholdqlen = value;
  }
  public resetMaxholdqlen() {
    this._maxholdqlen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxholdqlenInput() {
    return this._maxholdqlen;
  }

  // maxpacketsize - computed: true, optional: true, required: false
  private _maxpacketsize?: number; 
  public get maxpacketsize() {
    return this.getNumberAttribute('maxpacketsize');
  }
  public set maxpacketsize(value: number) {
    this._maxpacketsize = value;
  }
  public resetMaxpacketsize() {
    this._maxpacketsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxpacketsizeInput() {
    return this._maxpacketsize;
  }

  // maxrecordsize - computed: true, optional: true, required: false
  private _maxrecordsize?: number; 
  public get maxrecordsize() {
    return this.getNumberAttribute('maxrecordsize');
  }
  public set maxrecordsize(value: number) {
    this._maxrecordsize = value;
  }
  public resetMaxrecordsize() {
    this._maxrecordsize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxrecordsizeInput() {
    return this._maxrecordsize;
  }

  // maxretrytime - computed: true, optional: true, required: false
  private _maxretrytime?: number; 
  public get maxretrytime() {
    return this.getNumberAttribute('maxretrytime');
  }
  public set maxretrytime(value: number) {
    this._maxretrytime = value;
  }
  public resetMaxretrytime() {
    this._maxretrytime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxretrytimeInput() {
    return this._maxretrytime;
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

  // pmtudiscovery - computed: true, optional: true, required: false
  private _pmtudiscovery?: string; 
  public get pmtudiscovery() {
    return this.getStringAttribute('pmtudiscovery');
  }
  public set pmtudiscovery(value: string) {
    this._pmtudiscovery = value;
  }
  public resetPmtudiscovery() {
    this._pmtudiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pmtudiscoveryInput() {
    return this._pmtudiscovery;
  }

  // terminatesession - computed: true, optional: true, required: false
  private _terminatesession?: string; 
  public get terminatesession() {
    return this.getStringAttribute('terminatesession');
  }
  public set terminatesession(value: string) {
    this._terminatesession = value;
  }
  public resetTerminatesession() {
    this._terminatesession = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminatesessionInput() {
    return this._terminatesession;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      helloverifyrequest: cdktf.stringToTerraform(this._helloverifyrequest),
      id: cdktf.stringToTerraform(this._id),
      initialretrytimeout: cdktf.numberToTerraform(this._initialretrytimeout),
      maxbadmacignorecount: cdktf.numberToTerraform(this._maxbadmacignorecount),
      maxholdqlen: cdktf.numberToTerraform(this._maxholdqlen),
      maxpacketsize: cdktf.numberToTerraform(this._maxpacketsize),
      maxrecordsize: cdktf.numberToTerraform(this._maxrecordsize),
      maxretrytime: cdktf.numberToTerraform(this._maxretrytime),
      name: cdktf.stringToTerraform(this._name),
      pmtudiscovery: cdktf.stringToTerraform(this._pmtudiscovery),
      terminatesession: cdktf.stringToTerraform(this._terminatesession),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      helloverifyrequest: {
        value: cdktf.stringToHclTerraform(this._helloverifyrequest),
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
      initialretrytimeout: {
        value: cdktf.numberToHclTerraform(this._initialretrytimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxbadmacignorecount: {
        value: cdktf.numberToHclTerraform(this._maxbadmacignorecount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxholdqlen: {
        value: cdktf.numberToHclTerraform(this._maxholdqlen),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxpacketsize: {
        value: cdktf.numberToHclTerraform(this._maxpacketsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxrecordsize: {
        value: cdktf.numberToHclTerraform(this._maxrecordsize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      maxretrytime: {
        value: cdktf.numberToHclTerraform(this._maxretrytime),
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
      pmtudiscovery: {
        value: cdktf.stringToHclTerraform(this._pmtudiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      terminatesession: {
        value: cdktf.stringToHclTerraform(this._terminatesession),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
