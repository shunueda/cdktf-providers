// https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LocalArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#id LocalArtifact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The local path to the JAR binary for the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#jar_binary_path LocalArtifact#jar_binary_path}
  */
  readonly jarBinaryPath: string;
  /**
  * The local path to the JSON config of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#json_config_path LocalArtifact#json_config_path}
  */
  readonly jsonConfigPath: string;
  /**
  * The name of the artifact.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#name LocalArtifact#name}
  */
  readonly name: string;
  /**
  * The name of the namespace in which this resource belongs. If not provided, the default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#namespace LocalArtifact#namespace}
  */
  readonly namespace?: string;
  /**
  * The version of the artifact. Must match the version in the JAR manifest.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#version LocalArtifact#version}
  */
  readonly version: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact cdap_local_artifact}
*/
export class LocalArtifact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdap_local_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LocalArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LocalArtifact to import
  * @param importFromId The id of the existing LocalArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LocalArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdap_local_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/local_artifact cdap_local_artifact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LocalArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: LocalArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'cdap_local_artifact',
      terraformGeneratorMetadata: {
        providerName: 'cdap',
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
    this._id = config.id;
    this._jarBinaryPath = config.jarBinaryPath;
    this._jsonConfigPath = config.jsonConfigPath;
    this._name = config.name;
    this._namespace = config.namespace;
    this._version = config.version;
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

  // jar_binary_path - computed: false, optional: false, required: true
  private _jarBinaryPath?: string; 
  public get jarBinaryPath() {
    return this.getStringAttribute('jar_binary_path');
  }
  public set jarBinaryPath(value: string) {
    this._jarBinaryPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jarBinaryPathInput() {
    return this._jarBinaryPath;
  }

  // json_config_path - computed: false, optional: false, required: true
  private _jsonConfigPath?: string; 
  public get jsonConfigPath() {
    return this.getStringAttribute('json_config_path');
  }
  public set jsonConfigPath(value: string) {
    this._jsonConfigPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonConfigPathInput() {
    return this._jsonConfigPath;
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

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      jar_binary_path: cdktf.stringToTerraform(this._jarBinaryPath),
      json_config_path: cdktf.stringToTerraform(this._jsonConfigPath),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      version: cdktf.stringToTerraform(this._version),
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
      jar_binary_path: {
        value: cdktf.stringToHclTerraform(this._jarBinaryPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      json_config_path: {
        value: cdktf.stringToHclTerraform(this._jsonConfigPath),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
