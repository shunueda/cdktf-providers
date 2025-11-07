// https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/job
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataJenkinsJobConfig extends cdktf.TerraformMetaArguments {
  /**
  * The folder namespace containing this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/job#folder DataJenkinsJob#folder}
  */
  readonly folder?: string;
  /**
  * The name of the resource being read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/job#name DataJenkinsJob#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/job jenkins_job}
*/
export class DataJenkinsJob extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "jenkins_job";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataJenkinsJob resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataJenkinsJob to import
  * @param importFromId The id of the existing DataJenkinsJob that should be imported. Refer to the {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/job#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataJenkinsJob to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "jenkins_job", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/taiidani/jenkins/0.11.0/docs/data-sources/job jenkins_job} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataJenkinsJobConfig
  */
  public constructor(scope: Construct, id: string, config: DataJenkinsJobConfig) {
    super(scope, id, {
      terraformResourceType: 'jenkins_job',
      terraformGeneratorMetadata: {
        providerName: 'jenkins',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._folder = config.folder;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
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

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      folder: cdktf.stringToTerraform(this._folder),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
