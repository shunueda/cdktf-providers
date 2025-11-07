// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeveloperAppConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app#attributes DeveloperApp#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app#callback_url DeveloperApp#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app#developer_email DeveloperApp#developer_email}
  */
  readonly developerEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app#id DeveloperApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app#name DeveloperApp#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app apigee_developer_app}
*/
export class DeveloperApp extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_developer_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeveloperApp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeveloperApp to import
  * @param importFromId The id of the existing DeveloperApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeveloperApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_developer_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app apigee_developer_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeveloperAppConfig
  */
  public constructor(scope: Construct, id: string, config: DeveloperAppConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_developer_app',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attributes = config.attributes;
    this._callbackUrl = config.callbackUrl;
    this._developerEmail = config.developerEmail;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // callback_url - computed: false, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // developer_email - computed: false, optional: false, required: true
  private _developerEmail?: string; 
  public get developerEmail() {
    return this.getStringAttribute('developer_email');
  }
  public set developerEmail(value: string) {
    this._developerEmail = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developerEmailInput() {
    return this._developerEmail;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      callback_url: cdktf.stringToTerraform(this._callbackUrl),
      developer_email: cdktf.stringToTerraform(this._developerEmail),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      callback_url: {
        value: cdktf.stringToHclTerraform(this._callbackUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      developer_email: {
        value: cdktf.stringToHclTerraform(this._developerEmail),
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
