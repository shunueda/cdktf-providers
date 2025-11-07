// https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CompanyAppCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#api_products CompanyAppCredential#api_products}
  */
  readonly apiProducts?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#attributes CompanyAppCredential#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#company_app_name CompanyAppCredential#company_app_name}
  */
  readonly companyAppName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#company_name CompanyAppCredential#company_name}
  */
  readonly companyName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#consumer_key CompanyAppCredential#consumer_key}
  */
  readonly consumerKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#consumer_secret CompanyAppCredential#consumer_secret}
  */
  readonly consumerSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#id CompanyAppCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#scopes CompanyAppCredential#scopes}
  */
  readonly scopes?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential apigee_company_app_credential}
*/
export class CompanyAppCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apigee_company_app_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CompanyAppCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CompanyAppCredential to import
  * @param importFromId The id of the existing CompanyAppCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CompanyAppCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apigee_company_app_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/scastria/apigee/0.1.53/docs/resources/company_app_credential apigee_company_app_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CompanyAppCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: CompanyAppCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'apigee_company_app_credential',
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
    this._apiProducts = config.apiProducts;
    this._attributes = config.attributes;
    this._companyAppName = config.companyAppName;
    this._companyName = config.companyName;
    this._consumerKey = config.consumerKey;
    this._consumerSecret = config.consumerSecret;
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

  // company_app_name - computed: false, optional: false, required: true
  private _companyAppName?: string; 
  public get companyAppName() {
    return this.getStringAttribute('company_app_name');
  }
  public set companyAppName(value: string) {
    this._companyAppName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyAppNameInput() {
    return this._companyAppName;
  }

  // company_name - computed: false, optional: false, required: true
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
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
      company_app_name: cdktf.stringToTerraform(this._companyAppName),
      company_name: cdktf.stringToTerraform(this._companyName),
      consumer_key: cdktf.stringToTerraform(this._consumerKey),
      consumer_secret: cdktf.stringToTerraform(this._consumerSecret),
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
      company_app_name: {
        value: cdktf.stringToHclTerraform(this._companyAppName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
