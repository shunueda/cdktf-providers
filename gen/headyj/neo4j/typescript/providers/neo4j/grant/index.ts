// https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#action Grant#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#graph Grant#graph}
  */
  readonly graph: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#id Grant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#resource Grant#resource}
  */
  readonly resource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#role Grant#role}
  */
  readonly role: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#segment Grant#segment}
  */
  readonly segment?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant neo4j_grant}
*/
export class Grant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neo4j_grant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Grant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Grant to import
  * @param importFromId The id of the existing Grant that should be imported. Refer to the {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Grant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "neo4j_grant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/headyj/neo4j/0.3.2/docs/resources/grant neo4j_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrantConfig
  */
  public constructor(scope: Construct, id: string, config: GrantConfig) {
    super(scope, id, {
      terraformResourceType: 'neo4j_grant',
      terraformGeneratorMetadata: {
        providerName: 'neo4j',
        providerVersion: '0.3.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._graph = config.graph;
    this._id = config.id;
    this._resource = config.resource;
    this._role = config.role;
    this._segment = config.segment;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // graph - computed: false, optional: false, required: true
  private _graph?: string; 
  public get graph() {
    return this.getStringAttribute('graph');
  }
  public set graph(value: string) {
    this._graph = value;
  }
  // Temporarily expose input value. Use with caution.
  public get graphInput() {
    return this._graph;
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

  // resource - computed: false, optional: true, required: false
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  public resetResource() {
    this._resource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // role - computed: false, optional: false, required: true
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // segment - computed: false, optional: true, required: false
  private _segment?: string; 
  public get segment() {
    return this.getStringAttribute('segment');
  }
  public set segment(value: string) {
    this._segment = value;
  }
  public resetSegment() {
    this._segment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get segmentInput() {
    return this._segment;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      graph: cdktf.stringToTerraform(this._graph),
      id: cdktf.stringToTerraform(this._id),
      resource: cdktf.stringToTerraform(this._resource),
      role: cdktf.stringToTerraform(this._role),
      segment: cdktf.stringToTerraform(this._segment),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      graph: {
        value: cdktf.stringToHclTerraform(this._graph),
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
      resource: {
        value: cdktf.stringToHclTerraform(this._resource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      segment: {
        value: cdktf.stringToHclTerraform(this._segment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
