// https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ControllerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Controller description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#description Controller#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#id Controller#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A unique IP address which will be used as a loopback address of this unit. Valid value is ip address (example `198.51.100.10`) or `auto`. If set `auto` the controller will assign an ip address automatically from subnets with relevant purpose.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#mainip Controller#mainip}
  */
  readonly mainip: string;
  /**
  * User assigned name of controllers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#name Controller#name}
  */
  readonly name: string;
  /**
  * The site ID where this controller belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#siteid Controller#siteid}
  */
  readonly siteid: number;
  /**
  * ID of tenant. Users of this tenant will be permitted to edit this unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#tenantid Controller#tenantid}
  */
  readonly tenantid: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller netris_controller}
*/
export class Controller extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netris_controller";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Controller resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Controller to import
  * @param importFromId The id of the existing Controller that should be imported. Refer to the {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Controller to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netris_controller", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netrisai/netris/3.6.6/docs/resources/controller netris_controller} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ControllerConfig
  */
  public constructor(scope: Construct, id: string, config: ControllerConfig) {
    super(scope, id, {
      terraformResourceType: 'netris_controller',
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
    this._description = config.description;
    this._id = config.id;
    this._mainip = config.mainip;
    this._name = config.name;
    this._siteid = config.siteid;
    this._tenantid = config.tenantid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      mainip: cdktf.stringToTerraform(this._mainip),
      name: cdktf.stringToTerraform(this._name),
      siteid: cdktf.numberToTerraform(this._siteid),
      tenantid: cdktf.numberToTerraform(this._tenantid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
