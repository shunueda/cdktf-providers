// https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PcpprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#announcemulticount Pcpprofile#announcemulticount}
  */
  readonly announcemulticount?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#id Pcpprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#mapping Pcpprofile#mapping}
  */
  readonly mapping?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#maxmaplife Pcpprofile#maxmaplife}
  */
  readonly maxmaplife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#minmaplife Pcpprofile#minmaplife}
  */
  readonly minmaplife?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#name Pcpprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#peer Pcpprofile#peer}
  */
  readonly peer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#thirdparty Pcpprofile#thirdparty}
  */
  readonly thirdparty?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile citrixadc_pcpprofile}
*/
export class Pcpprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_pcpprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Pcpprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Pcpprofile to import
  * @param importFromId The id of the existing Pcpprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Pcpprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_pcpprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/1.45.0/docs/resources/pcpprofile citrixadc_pcpprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcpprofileConfig
  */
  public constructor(scope: Construct, id: string, config: PcpprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_pcpprofile',
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
    this._announcemulticount = config.announcemulticount;
    this._id = config.id;
    this._mapping = config.mapping;
    this._maxmaplife = config.maxmaplife;
    this._minmaplife = config.minmaplife;
    this._name = config.name;
    this._peer = config.peer;
    this._thirdparty = config.thirdparty;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // announcemulticount - computed: true, optional: true, required: false
  private _announcemulticount?: string; 
  public get announcemulticount() {
    return this.getStringAttribute('announcemulticount');
  }
  public set announcemulticount(value: string) {
    this._announcemulticount = value;
  }
  public resetAnnouncemulticount() {
    this._announcemulticount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get announcemulticountInput() {
    return this._announcemulticount;
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

  // maxmaplife - computed: true, optional: true, required: false
  private _maxmaplife?: number; 
  public get maxmaplife() {
    return this.getNumberAttribute('maxmaplife');
  }
  public set maxmaplife(value: number) {
    this._maxmaplife = value;
  }
  public resetMaxmaplife() {
    this._maxmaplife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxmaplifeInput() {
    return this._maxmaplife;
  }

  // minmaplife - computed: true, optional: true, required: false
  private _minmaplife?: number; 
  public get minmaplife() {
    return this.getNumberAttribute('minmaplife');
  }
  public set minmaplife(value: number) {
    this._minmaplife = value;
  }
  public resetMinmaplife() {
    this._minmaplife = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minmaplifeInput() {
    return this._minmaplife;
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

  // peer - computed: true, optional: true, required: false
  private _peer?: string; 
  public get peer() {
    return this.getStringAttribute('peer');
  }
  public set peer(value: string) {
    this._peer = value;
  }
  public resetPeer() {
    this._peer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get peerInput() {
    return this._peer;
  }

  // thirdparty - computed: true, optional: true, required: false
  private _thirdparty?: string; 
  public get thirdparty() {
    return this.getStringAttribute('thirdparty');
  }
  public set thirdparty(value: string) {
    this._thirdparty = value;
  }
  public resetThirdparty() {
    this._thirdparty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thirdpartyInput() {
    return this._thirdparty;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      announcemulticount: cdktf.stringToTerraform(this._announcemulticount),
      id: cdktf.stringToTerraform(this._id),
      mapping: cdktf.stringToTerraform(this._mapping),
      maxmaplife: cdktf.numberToTerraform(this._maxmaplife),
      minmaplife: cdktf.numberToTerraform(this._minmaplife),
      name: cdktf.stringToTerraform(this._name),
      peer: cdktf.stringToTerraform(this._peer),
      thirdparty: cdktf.stringToTerraform(this._thirdparty),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      announcemulticount: {
        value: cdktf.stringToHclTerraform(this._announcemulticount),
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
      mapping: {
        value: cdktf.stringToHclTerraform(this._mapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maxmaplife: {
        value: cdktf.numberToHclTerraform(this._maxmaplife),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      minmaplife: {
        value: cdktf.numberToHclTerraform(this._minmaplife),
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
      peer: {
        value: cdktf.stringToHclTerraform(this._peer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      thirdparty: {
        value: cdktf.stringToHclTerraform(this._thirdparty),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
