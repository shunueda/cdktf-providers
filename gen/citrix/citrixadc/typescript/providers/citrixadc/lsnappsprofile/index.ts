// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LsnappsprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#appsprofilename Lsnappsprofile#appsprofilename}
  */
  readonly appsprofilename: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#filtering Lsnappsprofile#filtering}
  */
  readonly filtering?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#id Lsnappsprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#ippooling Lsnappsprofile#ippooling}
  */
  readonly ippooling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#l2info Lsnappsprofile#l2info}
  */
  readonly l2Info?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#mapping Lsnappsprofile#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#tcpproxy Lsnappsprofile#tcpproxy}
  */
  readonly tcpproxy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#td Lsnappsprofile#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#transportprotocol Lsnappsprofile#transportprotocol}
  */
  readonly transportprotocol: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile citrixadc_lsnappsprofile}
*/
export class Lsnappsprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_lsnappsprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lsnappsprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lsnappsprofile to import
  * @param importFromId The id of the existing Lsnappsprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lsnappsprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_lsnappsprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/lsnappsprofile citrixadc_lsnappsprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LsnappsprofileConfig
  */
  public constructor(scope: Construct, id: string, config: LsnappsprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_lsnappsprofile',
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
    this._appsprofilename = config.appsprofilename;
    this._filtering = config.filtering;
    this._id = config.id;
    this._ippooling = config.ippooling;
    this._l2Info = config.l2Info;
    this._mapping = config.mapping;
    this._tcpproxy = config.tcpproxy;
    this._td = config.td;
    this._transportprotocol = config.transportprotocol;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appsprofilename - computed: false, optional: false, required: true
  private _appsprofilename?: string; 
  public get appsprofilename() {
    return this.getStringAttribute('appsprofilename');
  }
  public set appsprofilename(value: string) {
    this._appsprofilename = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appsprofilenameInput() {
    return this._appsprofilename;
  }

  // filtering - computed: true, optional: true, required: false
  private _filtering?: string; 
  public get filtering() {
    return this.getStringAttribute('filtering');
  }
  public set filtering(value: string) {
    this._filtering = value;
  }
  public resetFiltering() {
    this._filtering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filteringInput() {
    return this._filtering;
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

  // ippooling - computed: true, optional: true, required: false
  private _ippooling?: string; 
  public get ippooling() {
    return this.getStringAttribute('ippooling');
  }
  public set ippooling(value: string) {
    this._ippooling = value;
  }
  public resetIppooling() {
    this._ippooling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ippoolingInput() {
    return this._ippooling;
  }

  // l2info - computed: true, optional: true, required: false
  private _l2Info?: string; 
  public get l2Info() {
    return this.getStringAttribute('l2info');
  }
  public set l2Info(value: string) {
    this._l2Info = value;
  }
  public resetL2Info() {
    this._l2Info = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2InfoInput() {
    return this._l2Info;
  }

  // mapping - computed: true, optional: true, required: false
  private _mapping?: string; 
  public get mapping() {
    return this.getStringAttribute('mapping');
  }
  public set mapping(value: string) {
    this._mapping = value;
  }
  public resetMapping() {
    this._mapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingInput() {
    return this._mapping;
  }

  // tcpproxy - computed: true, optional: true, required: false
  private _tcpproxy?: string; 
  public get tcpproxy() {
    return this.getStringAttribute('tcpproxy');
  }
  public set tcpproxy(value: string) {
    this._tcpproxy = value;
  }
  public resetTcpproxy() {
    this._tcpproxy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpproxyInput() {
    return this._tcpproxy;
  }

  // td - computed: true, optional: true, required: false
  private _td?: number; 
  public get td() {
    return this.getNumberAttribute('td');
  }
  public set td(value: number) {
    this._td = value;
  }
  public resetTd() {
    this._td = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdInput() {
    return this._td;
  }

  // transportprotocol - computed: false, optional: false, required: true
  private _transportprotocol?: string; 
  public get transportprotocol() {
    return this.getStringAttribute('transportprotocol');
  }
  public set transportprotocol(value: string) {
    this._transportprotocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get transportprotocolInput() {
    return this._transportprotocol;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      appsprofilename: cdktf.stringToTerraform(this._appsprofilename),
      filtering: cdktf.stringToTerraform(this._filtering),
      id: cdktf.stringToTerraform(this._id),
      ippooling: cdktf.stringToTerraform(this._ippooling),
      l2info: cdktf.stringToTerraform(this._l2Info),
      mapping: cdktf.stringToTerraform(this._mapping),
      tcpproxy: cdktf.stringToTerraform(this._tcpproxy),
      td: cdktf.numberToTerraform(this._td),
      transportprotocol: cdktf.stringToTerraform(this._transportprotocol),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      appsprofilename: {
        value: cdktf.stringToHclTerraform(this._appsprofilename),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filtering: {
        value: cdktf.stringToHclTerraform(this._filtering),
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
      ippooling: {
        value: cdktf.stringToHclTerraform(this._ippooling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2info: {
        value: cdktf.stringToHclTerraform(this._l2Info),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mapping: {
        value: cdktf.stringToHclTerraform(this._mapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcpproxy: {
        value: cdktf.stringToHclTerraform(this._tcpproxy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      td: {
        value: cdktf.numberToHclTerraform(this._td),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transportprotocol: {
        value: cdktf.stringToHclTerraform(this._transportprotocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
