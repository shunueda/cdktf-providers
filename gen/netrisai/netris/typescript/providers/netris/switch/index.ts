// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SwitchConfig extends cdktf.TerraformMetaArguments {
  /**
  * Switch AS numbers. Valid value is ASN (example `420000002`) or `auto`. If set `auto` the controller will assign automatically from `System ASN range`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#asnumber Switch#asnumber}
  */
  readonly asnumber: string;
  /**
  * Initial Break Out applies to all switch ports of this switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#breakout Switch#breakout}
  */
  readonly breakout?: string;
  /**
  * Switch description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#description Switch#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#id Switch#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#macaddress Switch#macaddress}
  */
  readonly macaddress?: string;
  /**
  * A unique IP address which will be used as a loopback address of this unit. Valid value is ip address (example `198.51.100.21`) or `auto`. If set `auto` the controller will assign an ip address automatically from subnets with relevant purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#mainip Switch#mainip}
  */
  readonly mainip: string;
  /**
  * A unique IP address to be used on out of band management interface. Valid value is ip address (example `192.0.2.21`) or `auto`. If set `auto` the controller will assign an ip address automatically from subnets with relevant purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#mgmtip Switch#mgmtip}
  */
  readonly mgmtip: string;
  /**
  * User assigned name of switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#name Switch#name}
  */
  readonly name: string;
  /**
  * Switch OS. Possible values: `cumulus_linux`, `sonic`, `ubuntu_switch_dev`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#nos Switch#nos}
  */
  readonly nos: string;
  /**
  * Preliminary port count is used for definition of topology. Possible values: `16`, `32`, `48`, `54`, `56`, `64`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#portcount Switch#portcount}
  */
  readonly portcount: number;
  /**
  * An inventory profile ID to define global configuration (NTP, DNS, timezone, etc...)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#profileid Switch#profileid}
  */
  readonly profileid?: number;
  /**
  * The site ID where this switch belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#siteid Switch#siteid}
  */
  readonly siteid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#tags Switch#tags}
  */
  readonly tags?: string[];
  /**
  * ID of tenant. Users of this tenant will be permitted to edit this unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#tenantid Switch#tenantid}
  */
  readonly tenantid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch netris_switch}
*/
export class Switch extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_switch";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Switch resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Switch to import
  * @param importFromId The id of the existing Switch that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Switch to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_switch", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/switch netris_switch} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SwitchConfig
  */
  public constructor(scope: Construct, id: string, config: SwitchConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_switch',
      terraformGeneratorMetadata: {
        providerName: 'netris',
        providerVersion: '3.6.6',
        providerVersionConstraint: '3.6.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asnumber = config.asnumber;
    this._breakout = config.breakout;
    this._description = config.description;
    this._id = config.id;
    this._macaddress = config.macaddress;
    this._mainip = config.mainip;
    this._mgmtip = config.mgmtip;
    this._name = config.name;
    this._nos = config.nos;
    this._portcount = config.portcount;
    this._profileid = config.profileid;
    this._siteid = config.siteid;
    this._tags = config.tags;
    this._tenantid = config.tenantid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asnumber - computed: false, optional: false, required: true
  private _asnumber?: string; 
  public get asnumber() {
    return this.getStringAttribute('asnumber');
  }
  public set asnumber(value: string) {
    this._asnumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asnumberInput() {
    return this._asnumber;
  }

  // breakout - computed: false, optional: true, required: false
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

  // macaddress - computed: true, optional: true, required: false
  private _macaddress?: string; 
  public get macaddress() {
    return this.getStringAttribute('macaddress');
  }
  public set macaddress(value: string) {
    this._macaddress = value;
  }
  public resetMacaddress() {
    this._macaddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macaddressInput() {
    return this._macaddress;
  }

  // mainip - computed: false, optional: false, required: true
  private _mainip?: string; 
  public get mainip() {
    return this.getStringAttribute('mainip');
  }
  public set mainip(value: string) {
    this._mainip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mainipInput() {
    return this._mainip;
  }

  // mgmtip - computed: false, optional: false, required: true
  private _mgmtip?: string; 
  public get mgmtip() {
    return this.getStringAttribute('mgmtip');
  }
  public set mgmtip(value: string) {
    this._mgmtip = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtipInput() {
    return this._mgmtip;
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

  // nos - computed: false, optional: false, required: true
  private _nos?: string; 
  public get nos() {
    return this.getStringAttribute('nos');
  }
  public set nos(value: string) {
    this._nos = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nosInput() {
    return this._nos;
  }

  // portcount - computed: false, optional: false, required: true
  private _portcount?: number; 
  public get portcount() {
    return this.getNumberAttribute('portcount');
  }
  public set portcount(value: number) {
    this._portcount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portcountInput() {
    return this._portcount;
  }

  // profileid - computed: false, optional: true, required: false
  private _profileid?: number; 
  public get profileid() {
    return this.getNumberAttribute('profileid');
  }
  public set profileid(value: number) {
    this._profileid = value;
  }
  public resetProfileid() {
    this._profileid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileidInput() {
    return this._profileid;
  }

  // siteid - computed: false, optional: false, required: true
  private _siteid?: number; 
  public get siteid() {
    return this.getNumberAttribute('siteid');
  }
  public set siteid(value: number) {
    this._siteid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteidInput() {
    return this._siteid;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tenantid - computed: false, optional: false, required: true
  private _tenantid?: number; 
  public get tenantid() {
    return this.getNumberAttribute('tenantid');
  }
  public set tenantid(value: number) {
    this._tenantid = value;
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
      asnumber: cdktf.stringToTerraform(this._asnumber),
      breakout: cdktf.stringToTerraform(this._breakout),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      macaddress: cdktf.stringToTerraform(this._macaddress),
      mainip: cdktf.stringToTerraform(this._mainip),
      mgmtip: cdktf.stringToTerraform(this._mgmtip),
      name: cdktf.stringToTerraform(this._name),
      nos: cdktf.stringToTerraform(this._nos),
      portcount: cdktf.numberToTerraform(this._portcount),
      profileid: cdktf.numberToTerraform(this._profileid),
      siteid: cdktf.numberToTerraform(this._siteid),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tenantid: cdktf.numberToTerraform(this._tenantid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asnumber: {
        value: cdktf.stringToHclTerraform(this._asnumber),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      macaddress: {
        value: cdktf.stringToHclTerraform(this._macaddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mainip: {
        value: cdktf.stringToHclTerraform(this._mainip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mgmtip: {
        value: cdktf.stringToHclTerraform(this._mgmtip),
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
      nos: {
        value: cdktf.stringToHclTerraform(this._nos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portcount: {
        value: cdktf.numberToHclTerraform(this._portcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      profileid: {
        value: cdktf.numberToHclTerraform(this._profileid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      siteid: {
        value: cdktf.numberToHclTerraform(this._siteid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
