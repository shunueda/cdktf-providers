// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetrisPortConfig extends cdktf.TerraformMetaArguments {
  /**
  * Toggle auto negotiation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#autoneg DataNetrisPort#autoneg}
  */
  readonly autoneg?: string;
  /**
  * Toggle breakout.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#breakout DataNetrisPort#breakout}
  */
  readonly breakout?: string;
  /**
  * Port desired description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#description DataNetrisPort#description}
  */
  readonly description?: string;
  /**
  * Port extension configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#extension DataNetrisPort#extension}
  */
  readonly extension?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#id DataNetrisPort#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * MTU must be integer between 68 and 9216.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#mtu DataNetrisPort#mtu}
  */
  readonly mtu?: number;
  /**
  * Port's exact name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#name DataNetrisPort#name}
  */
  readonly name: string;
  /**
  * Toggle interface speed, make sure that current switch supports the configured speed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#speed DataNetrisPort#speed}
  */
  readonly speed?: string;
  /**
  * The switch ID to whom this port belongs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#switchid DataNetrisPort#switchid}
  */
  readonly switchid?: number;
  /**
  * ID of tenant. Users of this tenant will be permitted to manage port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#tenantid DataNetrisPort#tenantid}
  */
  readonly tenantid?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port netris_port}
*/
export class DataNetrisPort extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_port";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetrisPort resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetrisPort to import
  * @param importFromId The id of the existing DataNetrisPort that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetrisPort to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_port", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/data-sources/port netris_port} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetrisPortConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetrisPortConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_port',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoneg = config.autoneg;
    this._breakout = config.breakout;
    this._description = config.description;
    this._extension = config.extension;
    this._id = config.id;
    this._mtu = config.mtu;
    this._name = config.name;
    this._speed = config.speed;
    this._switchid = config.switchid;
    this._tenantid = config.tenantid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // autoneg - computed: true, optional: true, required: false
  private _autoneg?: string; 
  public get autoneg() {
    return this.getStringAttribute('autoneg');
  }
  public set autoneg(value: string) {
    this._autoneg = value;
  }
  public resetAutoneg() {
    this._autoneg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autonegInput() {
    return this._autoneg;
  }

  // breakout - computed: true, optional: true, required: false
  private _breakout?: string; 
  public get breakout() {
    return this.getStringAttribute('breakout');
  }
  public set breakout(value: string) {
    this._breakout = value;
  }
  public resetBreakout() {
    this._breakout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakoutInput() {
    return this._breakout;
  }

  // description - computed: true, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // extension - computed: true, optional: true, required: false
  private _extension?: { [key: string]: string }; 
  public get extension() {
    return this.getStringMapAttribute('extension');
  }
  public set extension(value: { [key: string]: string }) {
    this._extension = value;
  }
  public resetExtension() {
    this._extension = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extensionInput() {
    return this._extension;
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

  // mtu - computed: true, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
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

  // speed - computed: true, optional: true, required: false
  private _speed?: string; 
  public get speed() {
    return this.getStringAttribute('speed');
  }
  public set speed(value: string) {
    this._speed = value;
  }
  public resetSpeed() {
    this._speed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedInput() {
    return this._speed;
  }

  // switchid - computed: true, optional: true, required: false
  private _switchid?: number; 
  public get switchid() {
    return this.getNumberAttribute('switchid');
  }
  public set switchid(value: number) {
    this._switchid = value;
  }
  public resetSwitchid() {
    this._switchid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchidInput() {
    return this._switchid;
  }

  // tenantid - computed: true, optional: true, required: false
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
  }
  public resetTenantid() {
    this._tenantid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantidInput() {
    return this._tenantid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      autoneg: cdktf.stringToTerraform(this._autoneg),
      breakout: cdktf.stringToTerraform(this._breakout),
      description: cdktf.stringToTerraform(this._description),
      extension: cdktf.hashMapper(cdktf.stringToTerraform)(this._extension),
      id: cdktf.stringToTerraform(this._id),
      mtu: cdktf.numberToTerraform(this._mtu),
      name: cdktf.stringToTerraform(this._name),
      speed: cdktf.stringToTerraform(this._speed),
      switchid: cdktf.numberToTerraform(this._switchid),
      tenantid: cdktf.numberToTerraform(this._tenantid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      autoneg: {
        value: cdktf.stringToHclTerraform(this._autoneg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      breakout: {
        value: cdktf.stringToHclTerraform(this._breakout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      extension: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._extension),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
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
      speed: {
        value: cdktf.stringToHclTerraform(this._speed),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switchid: {
        value: cdktf.numberToHclTerraform(this._switchid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tenantid: {
        value: cdktf.numberToHclTerraform(this._tenantid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
