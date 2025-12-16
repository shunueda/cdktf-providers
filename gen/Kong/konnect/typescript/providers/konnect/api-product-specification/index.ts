// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiProductSpecificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API product identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification#api_product_id ApiProductSpecification#api_product_id}
  */
  readonly apiProductId: string;
  /**
  * The API product version identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification#api_product_version_id ApiProductSpecification#api_product_version_id}
  */
  readonly apiProductVersionId: string;
  /**
  * The base64 encoded contents of the API product version specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification#content ApiProductSpecification#content}
  */
  readonly content: string;
  /**
  * The name of the API product version specification
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification#name ApiProductSpecification#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification konnect_api_product_specification}
*/
export class ApiProductSpecification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api_product_specification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiProductSpecification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiProductSpecification to import
  * @param importFromId The id of the existing ApiProductSpecification that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiProductSpecification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api_product_specification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product_specification konnect_api_product_specification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiProductSpecificationConfig
  */
  public constructor(scope: Construct, id: string, config: ApiProductSpecificationConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api_product_specification',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.3',
        providerVersionConstraint: '3.4.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiProductId = config.apiProductId;
    this._apiProductVersionId = config.apiProductVersionId;
    this._content = config.content;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_product_id - computed: false, optional: false, required: true
  private _apiProductId?: string; 
  public get apiProductId() {
    return this.getStringAttribute('api_product_id');
  }
  public set apiProductId(value: string) {
    this._apiProductId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProductIdInput() {
    return this._apiProductId;
  }

  // api_product_version_id - computed: false, optional: false, required: true
  private _apiProductVersionId?: string; 
  public get apiProductVersionId() {
    return this.getStringAttribute('api_product_version_id');
  }
  public set apiProductVersionId(value: string) {
    this._apiProductVersionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiProductVersionIdInput() {
    return this._apiProductVersionId;
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_product_id: cdktf.stringToTerraform(this._apiProductId),
      api_product_version_id: cdktf.stringToTerraform(this._apiProductVersionId),
      content: cdktf.stringToTerraform(this._content),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_product_id: {
        value: cdktf.stringToHclTerraform(this._apiProductId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      api_product_version_id: {
        value: cdktf.stringToHclTerraform(this._apiProductVersionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content: {
        value: cdktf.stringToHclTerraform(this._content),
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
