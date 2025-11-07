// https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterTimeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Date of the Cluster Time Settings, Please follow format MM/dd/yyyy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time#date ClusterTime#date}
  */
  readonly date?: string;
  /**
  * Timezone hierarchical name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time#path ClusterTime#path}
  */
  readonly path?: string;
  /**
  * Time of the Cluster Time Settings, Please follow format HH:mm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time#time ClusterTime#time}
  */
  readonly time?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time powerscale_cluster_time}
*/
export class ClusterTime extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "powerscale_cluster_time";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterTime resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterTime to import
  * @param importFromId The id of the existing ClusterTime that should be imported. Refer to the {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterTime to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "powerscale_cluster_time", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dell/powerscale/1.8.0/docs/resources/cluster_time powerscale_cluster_time} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterTimeConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterTimeConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'powerscale_cluster_time',
      terraformGeneratorMetadata: {
        providerName: 'powerscale',
        providerVersion: '1.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._date = config.date;
    this._path = config.path;
    this._time = config.time;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abbreviation - computed: true, optional: false, required: false
  public get abbreviation() {
    return this.getStringAttribute('abbreviation');
  }

  // date - computed: true, optional: true, required: false
  private _date?: string; 
  public get date() {
    return this.getStringAttribute('date');
  }
  public set date(value: string) {
    this._date = value;
  }
  public resetDate() {
    this._date = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInput() {
    return this._date;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // path - computed: true, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // time - computed: true, optional: true, required: false
  private _time?: string; 
  public get time() {
    return this.getStringAttribute('time');
  }
  public set time(value: string) {
    this._time = value;
  }
  public resetTime() {
    this._time = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInput() {
    return this._time;
  }

  // time_millis - computed: true, optional: false, required: false
  public get timeMillis() {
    return this.getNumberAttribute('time_millis');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      date: cdktf.stringToTerraform(this._date),
      path: cdktf.stringToTerraform(this._path),
      time: cdktf.stringToTerraform(this._time),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      date: {
        value: cdktf.stringToHclTerraform(this._date),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time: {
        value: cdktf.stringToHclTerraform(this._time),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
