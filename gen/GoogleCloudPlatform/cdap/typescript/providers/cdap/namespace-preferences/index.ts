// https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespacePreferencesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences#id NamespacePreferences#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the namespace in which this resource belongs. If not provided, the default namespace is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences#namespace NamespacePreferences#namespace}
  */
  readonly namespace?: string;
  /**
  * The preferences to set on the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences#preferences NamespacePreferences#preferences}
  */
  readonly preferences: { [key: string]: string };
}

/**
* Represents a {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences cdap_namespace_preferences}
*/
export class NamespacePreferences extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cdap_namespace_preferences";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamespacePreferences resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamespacePreferences to import
  * @param importFromId The id of the existing NamespacePreferences that should be imported. Refer to the {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamespacePreferences to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cdap_namespace_preferences", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/googlecloudplatform/cdap/0.11.0/docs/resources/namespace_preferences cdap_namespace_preferences} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespacePreferencesConfig
  */
  public constructor(scope: Construct, id: string, config: NamespacePreferencesConfig) {
    super(scope, id, {
      terraformResourceType: 'cdap_namespace_preferences',
      terraformGeneratorMetadata: {
        providerName: 'cdap',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
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
    this._namespace = config.namespace;
    this._preferences = config.preferences;
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

  // preferences - computed: false, optional: false, required: true
  private _preferences?: { [key: string]: string }; 
  public get preferences() {
    return this.getStringMapAttribute('preferences');
  }
  public set preferences(value: { [key: string]: string }) {
    this._preferences = value;
  }
  // Temporarily expose input value. Use with caution.
  public get preferencesInput() {
    return this._preferences;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      preferences: cdktf.hashMapper(cdktf.stringToTerraform)(this._preferences),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferences: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._preferences),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
