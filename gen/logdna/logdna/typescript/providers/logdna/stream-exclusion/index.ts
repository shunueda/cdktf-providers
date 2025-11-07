// https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface StreamExclusionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion#active StreamExclusion#active}
  */
  readonly active?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion#apps StreamExclusion#apps}
  */
  readonly apps?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion#hosts StreamExclusion#hosts}
  */
  readonly hosts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion#query StreamExclusion#query}
  */
  readonly query?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion#title StreamExclusion#title}
  */
  readonly title?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion logdna_stream_exclusion}
*/
export class StreamExclusion extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logdna_stream_exclusion";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a StreamExclusion resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the StreamExclusion to import
  * @param importFromId The id of the existing StreamExclusion that should be imported. Refer to the {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the StreamExclusion to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logdna_stream_exclusion", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logdna/logdna/1.17.2/docs/resources/stream_exclusion logdna_stream_exclusion} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options StreamExclusionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: StreamExclusionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logdna_stream_exclusion',
      terraformGeneratorMetadata: {
        providerName: 'logdna',
        providerVersion: '1.17.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._apps = config.apps;
    this._hosts = config.hosts;
    this._query = config.query;
    this._title = config.title;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: true, required: false
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  public resetActive() {
    this._active = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // apps - computed: false, optional: true, required: false
  private _apps?: string[]; 
  public get apps() {
    return this.getListAttribute('apps');
  }
  public set apps(value: string[]) {
    this._apps = value;
  }
  public resetApps() {
    this._apps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appsInput() {
    return this._apps;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // query - computed: false, optional: true, required: false
  private _query?: string; 
  public get query() {
    return this.getStringAttribute('query');
  }
  public set query(value: string) {
    this._query = value;
  }
  public resetQuery() {
    this._query = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      apps: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apps),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      query: cdktf.stringToTerraform(this._query),
      title: cdktf.stringToTerraform(this._title),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      apps: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apps),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      query: {
        value: cdktf.stringToHclTerraform(this._query),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
