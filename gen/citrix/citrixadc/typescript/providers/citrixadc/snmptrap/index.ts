// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmptrapConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#allpartitions Snmptrap#allpartitions}
  */
  readonly allpartitions?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#communityname Snmptrap#communityname}
  */
  readonly communityname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#destport Snmptrap#destport}
  */
  readonly destport?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#id Snmptrap#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#severity Snmptrap#severity}
  */
  readonly severity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#srcip Snmptrap#srcip}
  */
  readonly srcip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#td Snmptrap#td}
  */
  readonly td?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#trapclass Snmptrap#trapclass}
  */
  readonly trapclass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#trapdestination Snmptrap#trapdestination}
  */
  readonly trapdestination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#version Snmptrap#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap citrixadc_snmptrap}
*/
export class Snmptrap extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_snmptrap";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Snmptrap resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Snmptrap to import
  * @param importFromId The id of the existing Snmptrap that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Snmptrap to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_snmptrap", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/snmptrap citrixadc_snmptrap} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmptrapConfig
  */
  public constructor(scope: Construct, id: string, config: SnmptrapConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_snmptrap',
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
    this._allpartitions = config.allpartitions;
    this._communityname = config.communityname;
    this._destport = config.destport;
    this._id = config.id;
    this._severity = config.severity;
    this._srcip = config.srcip;
    this._td = config.td;
    this._trapclass = config.trapclass;
    this._trapdestination = config.trapdestination;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allpartitions - computed: true, optional: true, required: false
  private _allpartitions?: string; 
  public get allpartitions() {
    return this.getStringAttribute('allpartitions');
  }
  public set allpartitions(value: string) {
    this._allpartitions = value;
  }
  public resetAllpartitions() {
    this._allpartitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allpartitionsInput() {
    return this._allpartitions;
  }

  // communityname - computed: true, optional: true, required: false
  private _communityname?: string; 
  public get communityname() {
    return this.getStringAttribute('communityname');
  }
  public set communityname(value: string) {
    this._communityname = value;
  }
  public resetCommunityname() {
    this._communityname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communitynameInput() {
    return this._communityname;
  }

  // destport - computed: true, optional: true, required: false
  private _destport?: number; 
  public get destport() {
    return this.getNumberAttribute('destport');
  }
  public set destport(value: number) {
    this._destport = value;
  }
  public resetDestport() {
    this._destport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destportInput() {
    return this._destport;
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

  // severity - computed: true, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // srcip - computed: true, optional: true, required: false
  private _srcip?: string; 
  public get srcip() {
    return this.getStringAttribute('srcip');
  }
  public set srcip(value: string) {
    this._srcip = value;
  }
  public resetSrcip() {
    this._srcip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcipInput() {
    return this._srcip;
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

  // trapclass - computed: false, optional: false, required: true
  private _trapclass?: string; 
  public get trapclass() {
    return this.getStringAttribute('trapclass');
  }
  public set trapclass(value: string) {
    this._trapclass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trapclassInput() {
    return this._trapclass;
  }

  // trapdestination - computed: false, optional: false, required: true
  private _trapdestination?: string; 
  public get trapdestination() {
    return this.getStringAttribute('trapdestination');
  }
  public set trapdestination(value: string) {
    this._trapdestination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trapdestinationInput() {
    return this._trapdestination;
  }

  // version - computed: false, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allpartitions: cdktf.stringToTerraform(this._allpartitions),
      communityname: cdktf.stringToTerraform(this._communityname),
      destport: cdktf.numberToTerraform(this._destport),
      id: cdktf.stringToTerraform(this._id),
      severity: cdktf.stringToTerraform(this._severity),
      srcip: cdktf.stringToTerraform(this._srcip),
      td: cdktf.numberToTerraform(this._td),
      trapclass: cdktf.stringToTerraform(this._trapclass),
      trapdestination: cdktf.stringToTerraform(this._trapdestination),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allpartitions: {
        value: cdktf.stringToHclTerraform(this._allpartitions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      communityname: {
        value: cdktf.stringToHclTerraform(this._communityname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destport: {
        value: cdktf.numberToHclTerraform(this._destport),
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
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      srcip: {
        value: cdktf.stringToHclTerraform(this._srcip),
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
      trapclass: {
        value: cdktf.stringToHclTerraform(this._trapclass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trapdestination: {
        value: cdktf.stringToHclTerraform(this._trapdestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
