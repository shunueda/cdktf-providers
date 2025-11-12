// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Server AS numbers. Valid value is ASN (example `420000002`) or `auto`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#asnumber Server#asnumber}
  */
  readonly asnumber?: string;
  /**
  * You may paste any custom data that can be assosiated with the object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#customdata Server#customdata}
  */
  readonly customdata?: string;
  /**
  * server description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#description Server#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#id Server#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique IP address which will be used as a loopback address of this unit. Valid value is ip address (example `198.51.100.11`) or `auto`. If set `auto` the controller will assign an ip address automatically from subnets with relevant purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#mainip Server#mainip}
  */
  readonly mainip?: string;
  /**
  * A unique IP address to be used on out of band management interface. Valid value is ip address (example `192.0.2.11`) or `auto`. If set `auto` the controller will assign an ip address automatically from subnets with relevant purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#mgmtip Server#mgmtip}
  */
  readonly mgmtip?: string;
  /**
  * User assigned name of server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#name Server#name}
  */
  readonly name: string;
  /**
  * Preliminary port count is used for definition of topology. Possible values: minimum - `0`, maximum - `60`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#portcount Server#portcount}
  */
  readonly portcount: number;
  /**
  * Server's role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#role Server#role}
  */
  readonly role?: string;
  /**
  * The site ID where this server belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#siteid Server#siteid}
  */
  readonly siteid: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#tags Server#tags}
  */
  readonly tags?: string[];
  /**
  * ID of tenant. Users of this tenant will be permitted to edit this unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#tenantid Server#tenantid}
  */
  readonly tenantid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server netris_server}
*/
export class Server extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Server resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Server to import
  * @param importFromId The id of the existing Server that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Server to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/server netris_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerConfig
  */
  public constructor(scope: Construct, id: string, config: ServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_server',
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
    this._customdata = config.customdata;
    this._description = config.description;
    this._id = config.id;
    this._mainip = config.mainip;
    this._mgmtip = config.mgmtip;
    this._name = config.name;
    this._portcount = config.portcount;
    this._role = config.role;
    this._siteid = config.siteid;
    this._tags = config.tags;
    this._tenantid = config.tenantid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asnumber - computed: false, optional: true, required: false
  private _asnumber?: string; 
  public get asnumber() {
    return this.getStringAttribute('asnumber');
  }
  public set asnumber(value: string) {
    this._asnumber = value;
  }
  public resetAsnumber() {
    this._asnumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnumberInput() {
    return this._asnumber;
  }

  // customdata - computed: false, optional: true, required: false
  private _customdata?: string; 
  public get customdata() {
    return this.getStringAttribute('customdata');
  }
  public set customdata(value: string) {
    this._customdata = value;
  }
  public resetCustomdata() {
    this._customdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customdataInput() {
    return this._customdata;
  }

  // description - computed: false, optional: true, required: false
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

  // mainip - computed: false, optional: true, required: false
  private _mainip?: string; 
  public get mainip() {
    return this.getStringAttribute('mainip');
  }
  public set mainip(value: string) {
    this._mainip = value;
  }
  public resetMainip() {
    this._mainip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mainipInput() {
    return this._mainip;
  }

  // mgmtip - computed: false, optional: true, required: false
  private _mgmtip?: string; 
  public get mgmtip() {
    return this.getStringAttribute('mgmtip');
  }
  public set mgmtip(value: string) {
    this._mgmtip = value;
  }
  public resetMgmtip() {
    this._mgmtip = undefined;
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

  // role - computed: true, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
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
      customdata: cdktf.stringToTerraform(this._customdata),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mainip: cdktf.stringToTerraform(this._mainip),
      mgmtip: cdktf.stringToTerraform(this._mgmtip),
      name: cdktf.stringToTerraform(this._name),
      portcount: cdktf.numberToTerraform(this._portcount),
      role: cdktf.stringToTerraform(this._role),
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
      customdata: {
        value: cdktf.stringToHclTerraform(this._customdata),
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
      portcount: {
        value: cdktf.numberToHclTerraform(this._portcount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
