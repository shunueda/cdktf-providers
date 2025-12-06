// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OsqueryPackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack#description OsqueryPack#description}
  */
  readonly description?: string;
  /**
  * List of osquery queries which control whether or not the pack will execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack#discovery_queries OsqueryPack#discovery_queries}
  */
  readonly discoveryQueries?: string[];
  /**
  * Routing key added to the metadata of the events that the queries of this pack generate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack#event_routing_key OsqueryPack#event_routing_key}
  */
  readonly eventRoutingKey?: string;
  /**
  * Name of the pack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack#name OsqueryPack#name}
  */
  readonly name: string;
  /**
  * Restrict the pack to a percentage (1-100) of target hosts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack#shard OsqueryPack#shard}
  */
  readonly shard?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack zentral_osquery_pack}
*/
export class OsqueryPack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_osquery_pack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OsqueryPack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OsqueryPack to import
  * @param importFromId The id of the existing OsqueryPack that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OsqueryPack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_osquery_pack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.67/docs/resources/osquery_pack zentral_osquery_pack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OsqueryPackConfig
  */
  public constructor(scope: Construct, id: string, config: OsqueryPackConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_osquery_pack',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.67',
        providerVersionConstraint: '0.1.67'
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
    this._discoveryQueries = config.discoveryQueries;
    this._eventRoutingKey = config.eventRoutingKey;
    this._name = config.name;
    this._shard = config.shard;
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

  // discovery_queries - computed: true, optional: true, required: false
  private _discoveryQueries?: string[]; 
  public get discoveryQueries() {
    return this.getListAttribute('discovery_queries');
  }
  public set discoveryQueries(value: string[]) {
    this._discoveryQueries = value;
  }
  public resetDiscoveryQueries() {
    this._discoveryQueries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get discoveryQueriesInput() {
    return this._discoveryQueries;
  }

  // event_routing_key - computed: true, optional: true, required: false
  private _eventRoutingKey?: string; 
  public get eventRoutingKey() {
    return this.getStringAttribute('event_routing_key');
  }
  public set eventRoutingKey(value: string) {
    this._eventRoutingKey = value;
  }
  public resetEventRoutingKey() {
    this._eventRoutingKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventRoutingKeyInput() {
    return this._eventRoutingKey;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // shard - computed: false, optional: true, required: false
  private _shard?: number; 
  public get shard() {
    return this.getNumberAttribute('shard');
  }
  public set shard(value: number) {
    this._shard = value;
  }
  public resetShard() {
    this._shard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardInput() {
    return this._shard;
  }

  // slug - computed: true, optional: false, required: false
  public get slug() {
    return this.getStringAttribute('slug');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      discovery_queries: cdktf.listMapper(cdktf.stringToTerraform, false)(this._discoveryQueries),
      event_routing_key: cdktf.stringToTerraform(this._eventRoutingKey),
      name: cdktf.stringToTerraform(this._name),
      shard: cdktf.numberToTerraform(this._shard),
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
      discovery_queries: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._discoveryQueries),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      event_routing_key: {
        value: cdktf.stringToHclTerraform(this._eventRoutingKey),
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
      shard: {
        value: cdktf.numberToHclTerraform(this._shard),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
