// https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataBluecatViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Configuration. Getting the Zone in the default Configuration if doesn't specify
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#configuration DataBluecatView#configuration}
  */
  readonly configuration?: string;
  /**
  * Zone's deployable property
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#deployable DataBluecatView#deployable}
  */
  readonly deployable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#id DataBluecatView#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Zone's properties.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#properties DataBluecatView#properties}
  */
  readonly properties?: string;
  /**
  * The list of server roles. The format of each server role will be 'role type, server fqdn'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#server_roles DataBluecatView#server_roles}
  */
  readonly serverRoles?: string[];
  /**
  * The view which contains the details of the zone. If not provided, zone will be got under default view
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#view DataBluecatView#view}
  */
  readonly view?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view bluecat_view}
*/
export class DataBluecatView extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bluecat_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataBluecatView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataBluecatView to import
  * @param importFromId The id of the existing DataBluecatView that should be imported. Refer to the {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataBluecatView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bluecat_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/bluecatlabs/bluecat/2.2.0/docs/data-sources/view bluecat_view} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataBluecatViewConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataBluecatViewConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'bluecat_view',
      terraformGeneratorMetadata: {
        providerName: 'bluecat',
        providerVersion: '2.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration = config.configuration;
    this._deployable = config.deployable;
    this._id = config.id;
    this._properties = config.properties;
    this._serverRoles = config.serverRoles;
    this._view = config.view;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
  }

  // deployable - computed: false, optional: true, required: false
  private _deployable?: string; 
  public get deployable() {
    return this.getStringAttribute('deployable');
  }
  public set deployable(value: string) {
    this._deployable = value;
  }
  public resetDeployable() {
    this._deployable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployableInput() {
    return this._deployable;
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

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // server_roles - computed: false, optional: true, required: false
  private _serverRoles?: string[]; 
  public get serverRoles() {
    return this.getListAttribute('server_roles');
  }
  public set serverRoles(value: string[]) {
    this._serverRoles = value;
  }
  public resetServerRoles() {
    this._serverRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverRolesInput() {
    return this._serverRoles;
  }

  // view - computed: false, optional: true, required: false
  private _view?: string; 
  public get view() {
    return this.getStringAttribute('view');
  }
  public set view(value: string) {
    this._view = value;
  }
  public resetView() {
    this._view = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get viewInput() {
    return this._view;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: cdktf.stringToTerraform(this._configuration),
      deployable: cdktf.stringToTerraform(this._deployable),
      id: cdktf.stringToTerraform(this._id),
      properties: cdktf.stringToTerraform(this._properties),
      server_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serverRoles),
      view: cdktf.stringToTerraform(this._view),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: cdktf.stringToHclTerraform(this._configuration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployable: {
        value: cdktf.stringToHclTerraform(this._deployable),
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
      properties: {
        value: cdktf.stringToHclTerraform(this._properties),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      server_roles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serverRoles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      view: {
        value: cdktf.stringToHclTerraform(this._view),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
