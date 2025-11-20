// https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FleetServerHostConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set as default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host#default FleetServerHost#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Unique identifier of the Fleet server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host#host_id FleetServerHost#host_id}
  */
  readonly hostId?: string;
  /**
  * A list of hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host#hosts FleetServerHost#hosts}
  */
  readonly hosts: string[];
  /**
  * The name of the Fleet server host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host#name FleetServerHost#name}
  */
  readonly name: string;
  /**
  * The Kibana space IDs where this server host is available. When set, the server host will be created and managed within the specified space. Note: The order of space IDs does not matter as this is a set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host#space_ids FleetServerHost#space_ids}
  */
  readonly spaceIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host elasticstack_fleet_server_host}
*/
export class FleetServerHost extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_fleet_server_host";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FleetServerHost resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FleetServerHost to import
  * @param importFromId The id of the existing FleetServerHost that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FleetServerHost to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_fleet_server_host", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.12.2/docs/resources/fleet_server_host elasticstack_fleet_server_host} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FleetServerHostConfig
  */
  public constructor(scope: Construct, id: string, config: FleetServerHostConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_fleet_server_host',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.12.2',
        providerVersionConstraint: '0.12.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._default = config.default;
    this._hostId = config.hostId;
    this._hosts = config.hosts;
    this._name = config.name;
    this._spaceIds = config.spaceIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // host_id - computed: true, optional: true, required: false
  private _hostId?: string; 
  public get hostId() {
    return this.getStringAttribute('host_id');
  }
  public set hostId(value: string) {
    this._hostId = value;
  }
  public resetHostId() {
    this._hostId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIdInput() {
    return this._hostId;
  }

  // hosts - computed: false, optional: false, required: true
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // space_ids - computed: true, optional: true, required: false
  private _spaceIds?: string[]; 
  public get spaceIds() {
    return cdktf.Fn.tolist(this.getListAttribute('space_ids'));
  }
  public set spaceIds(value: string[]) {
    this._spaceIds = value;
  }
  public resetSpaceIds() {
    this._spaceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdsInput() {
    return this._spaceIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default: cdktf.booleanToTerraform(this._default),
      host_id: cdktf.stringToTerraform(this._hostId),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      name: cdktf.stringToTerraform(this._name),
      space_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._spaceIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default: {
        value: cdktf.booleanToHclTerraform(this._default),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_id: {
        value: cdktf.stringToHclTerraform(this._hostId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      space_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._spaceIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
