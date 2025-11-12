// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DeveloperAppCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#api_products DeveloperAppCredential#api_products}
  */
  readonly apiProducts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#attributes DeveloperAppCredential#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#consumer_key DeveloperAppCredential#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#consumer_secret DeveloperAppCredential#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#developer_app_name DeveloperAppCredential#developer_app_name}
  */
  readonly developerAppName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#developer_email DeveloperAppCredential#developer_email}
  */
  readonly developerEmail: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#id DeveloperAppCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#scopes DeveloperAppCredential#scopes}
  */
  readonly scopes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential apigee_developer_app_credential}
*/
export class DeveloperAppCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_developer_app_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DeveloperAppCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DeveloperAppCredential to import
  * @param importFromId The id of the existing DeveloperAppCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DeveloperAppCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_developer_app_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/developer_app_credential apigee_developer_app_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DeveloperAppCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DeveloperAppCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_developer_app_credential',
      terraformGeneratorMetadata: {
        providerName: 'apigee',
        providerVersion: '0.1.53',
        providerVersionConstraint: '0.1.53'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiProducts = config.apiProducts;
    this._attributes = config.attributes;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
    this._developerAppName = config.developerAppName;
    this._developerEmail = config.developerEmail;
    this._id = config.id;
    this._scopes = config.scopes;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_products - computed: false, optional: true, required: false
  private _apiProducts?: string[]; 
  public get apiProducts() {
    return cdktf.Fn.tolist(this.getListAttribute('api_products'));
  }
  public set apiProducts(value: string[]) {
    this._apiProducts = value;
  }
  public resetApiProducts() {
    this._apiProducts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProductsInput() {
    return this._apiProducts;
  }

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

  // consumer_key - computed: false, optional: false, required: true
  private _consumerKey?: string; 
  public get consumerKey() {
    return this.getStringAttribute('consumer_key');
  }
  public set consumerKey(value: string) {
    this._consumerKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerKeyInput() {
    return this._consumerKey;
  }

  // consumer_secret - computed: false, optional: false, required: true
  private _consumerSecret?: string; 
  public get consumerSecret() {
    return this.getStringAttribute('consumer_secret');
  }
  public set consumerSecret(value: string) {
    this._consumerSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerSecretInput() {
    return this._consumerSecret;
  }

  // developer_app_name - computed: false, optional: false, required: true
  private _developerAppName?: string; 
  public get developerAppName() {
    return this.getStringAttribute('developer_app_name');
  }
  public set developerAppName(value: string) {
    this._developerAppName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get developerAppNameInput() {
    return this._developerAppName;
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

  // scopes - computed: false, optional: true, required: false
  private _scopes?: string[]; 
  public get scopes() {
    return cdktf.Fn.tolist(this.getListAttribute('scopes'));
  }
  public set scopes(value: string[]) {
    this._scopes = value;
  }
  public resetScopes() {
    this._scopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopesInput() {
    return this._scopes;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_products: cdktf.listMapper(cdktf.stringToTerraform, false)(this._apiProducts),
      attributes: cdktf.hashMapper(cdktf.stringToTerraform)(this._attributes),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
      developer_app_name: cdktf.stringToTerraform(this._developerAppName),
      developer_email: cdktf.stringToTerraform(this._developerEmail),
      id: cdktf.stringToTerraform(this._id),
      scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scopes),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_products: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._apiProducts),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      attributes: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._attributes),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      consumer_key: {
        value: cdktf.stringToHclTerraform(this._consumerKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consumer_secret: {
        value: cdktf.stringToHclTerraform(this._consumerSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      developer_app_name: {
        value: cdktf.stringToHclTerraform(this._developerAppName),
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
      scopes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scopes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
