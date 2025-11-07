// https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GrafanaFolderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder#id GrafanaFolder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Prevent deletion of the folder if it is not empty (contains dashboards or alert rules).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder#prevent_destroy_if_not_empty GrafanaFolder#prevent_destroy_if_not_empty}
  */
  readonly preventDestroyIfNotEmpty?: boolean | cdktf.IResolvable;
  /**
  * The title of the folder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder#title GrafanaFolder#title}
  */
  readonly title: string;
  /**
  * Unique identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder#uid GrafanaFolder#uid}
  */
  readonly uid?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder coralogix_grafana_folder}
*/
export class GrafanaFolder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "coralogix_grafana_folder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GrafanaFolder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GrafanaFolder to import
  * @param importFromId The id of the existing GrafanaFolder that should be imported. Refer to the {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GrafanaFolder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "coralogix_grafana_folder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/coralogix/coralogix/2.2.3/docs/resources/grafana_folder coralogix_grafana_folder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GrafanaFolderConfig
  */
  public constructor(scope: Construct, id: string, config: GrafanaFolderConfig) {
    super(scope, id, {
      terraformResourceType: 'coralogix_grafana_folder',
      terraformGeneratorMetadata: {
        providerName: 'coralogix',
        providerVersion: '2.2.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._preventDestroyIfNotEmpty = config.preventDestroyIfNotEmpty;
    this._title = config.title;
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // prevent_destroy_if_not_empty - computed: false, optional: true, required: false
  private _preventDestroyIfNotEmpty?: boolean | cdktf.IResolvable; 
  public get preventDestroyIfNotEmpty() {
    return this.getBooleanAttribute('prevent_destroy_if_not_empty');
  }
  public set preventDestroyIfNotEmpty(value: boolean | cdktf.IResolvable) {
    this._preventDestroyIfNotEmpty = value;
  }
  public resetPreventDestroyIfNotEmpty() {
    this._preventDestroyIfNotEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventDestroyIfNotEmptyInput() {
    return this._preventDestroyIfNotEmpty;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // uid - computed: true, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // url - computed: true, optional: false, required: false
  public get url() {
    return this.getStringAttribute('url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      prevent_destroy_if_not_empty: cdktf.booleanToTerraform(this._preventDestroyIfNotEmpty),
      title: cdktf.stringToTerraform(this._title),
      uid: cdktf.stringToTerraform(this._uid),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_destroy_if_not_empty: {
        value: cdktf.booleanToHclTerraform(this._preventDestroyIfNotEmpty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
