// https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataRootlyIncidentPostMortemConfig extends cdktf.TerraformMetaArguments {
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem#created_at DataRootlyIncidentPostMortem#created_at}
  */
  readonly createdAt?: { [key: string]: string };
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem#mitigated_at DataRootlyIncidentPostMortem#mitigated_at}
  */
  readonly mitigatedAt?: { [key: string]: string };
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem#resolved_at DataRootlyIncidentPostMortem#resolved_at}
  */
  readonly resolvedAt?: { [key: string]: string };
  /**
  * Filter by date range using 'lt' and 'gt'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem#started_at DataRootlyIncidentPostMortem#started_at}
  */
  readonly startedAt?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem#status DataRootlyIncidentPostMortem#status}
  */
  readonly status?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem rootly_incident_post_mortem}
*/
export class DataRootlyIncidentPostMortem extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rootly_incident_post_mortem";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataRootlyIncidentPostMortem resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataRootlyIncidentPostMortem to import
  * @param importFromId The id of the existing DataRootlyIncidentPostMortem that should be imported. Refer to the {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataRootlyIncidentPostMortem to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rootly_incident_post_mortem", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rootlyhq/rootly/4.3.9/docs/data-sources/incident_post_mortem rootly_incident_post_mortem} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataRootlyIncidentPostMortemConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataRootlyIncidentPostMortemConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rootly_incident_post_mortem',
      terraformGeneratorMetadata: {
        providerName: 'rootly',
        providerVersion: '4.3.9',
        providerVersionConstraint: '4.3.9'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createdAt = config.createdAt;
    this._mitigatedAt = config.mitigatedAt;
    this._resolvedAt = config.resolvedAt;
    this._startedAt = config.startedAt;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: false, optional: true, required: false
  private _createdAt?: { [key: string]: string }; 
  public get createdAt() {
    return this.getStringMapAttribute('created_at');
  }
  public set createdAt(value: { [key: string]: string }) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // mitigated_at - computed: false, optional: true, required: false
  private _mitigatedAt?: { [key: string]: string }; 
  public get mitigatedAt() {
    return this.getStringMapAttribute('mitigated_at');
  }
  public set mitigatedAt(value: { [key: string]: string }) {
    this._mitigatedAt = value;
  }
  public resetMitigatedAt() {
    this._mitigatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mitigatedAtInput() {
    return this._mitigatedAt;
  }

  // resolved_at - computed: false, optional: true, required: false
  private _resolvedAt?: { [key: string]: string }; 
  public get resolvedAt() {
    return this.getStringMapAttribute('resolved_at');
  }
  public set resolvedAt(value: { [key: string]: string }) {
    this._resolvedAt = value;
  }
  public resetResolvedAt() {
    this._resolvedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resolvedAtInput() {
    return this._resolvedAt;
  }

  // started_at - computed: false, optional: true, required: false
  private _startedAt?: { [key: string]: string }; 
  public get startedAt() {
    return this.getStringMapAttribute('started_at');
  }
  public set startedAt(value: { [key: string]: string }) {
    this._startedAt = value;
  }
  public resetStartedAt() {
    this._startedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startedAtInput() {
    return this._startedAt;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._createdAt),
      mitigated_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._mitigatedAt),
      resolved_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._resolvedAt),
      started_at: cdktf.hashMapper(cdktf.stringToTerraform)(this._startedAt),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._createdAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      mitigated_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._mitigatedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      resolved_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._resolvedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      started_at: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._startedAt),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
