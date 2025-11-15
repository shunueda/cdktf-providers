// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiProductDocumentConfig extends cdktf.TerraformMetaArguments {
  /**
  * The API product identifier
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#api_product_id ApiProductDocument#api_product_id}
  */
  readonly apiProductId: string;
  /**
  * Can be markdown string content or base64 encoded string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#content ApiProductDocument#content}
  */
  readonly content?: string;
  /**
  * metadata of the document
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#metadata ApiProductDocument#metadata}
  */
  readonly metadata?: ApiProductDocumentMetadata;
  /**
  * parent document id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#parent_document_id ApiProductDocument#parent_document_id}
  */
  readonly parentDocumentId?: string;
  /**
  * document slug. must be unique accross documents belonging to an api product
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#slug ApiProductDocument#slug}
  */
  readonly slug: string;
  /**
  * must be one of ["published", "unpublished"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#status ApiProductDocument#status}
  */
  readonly status: string;
  /**
  * document title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#title ApiProductDocument#title}
  */
  readonly title: string;
}
export interface ApiProductDocumentMetadata {
}

export function apiProductDocumentMetadataToTerraform(struct?: ApiProductDocumentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiProductDocumentMetadataToHclTerraform(struct?: ApiProductDocumentMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiProductDocumentMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApiProductDocumentMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiProductDocumentMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document konnect_api_product_document}
*/
export class ApiProductDocument extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api_product_document";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiProductDocument resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiProductDocument to import
  * @param importFromId The id of the existing ApiProductDocument that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiProductDocument to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api_product_document", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/api_product_document konnect_api_product_document} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiProductDocumentConfig
  */
  public constructor(scope: Construct, id: string, config: ApiProductDocumentConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api_product_document',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
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
    this._content = config.content;
    this._metadata.internalValue = config.metadata;
    this._parentDocumentId = config.parentDocumentId;
    this._slug = config.slug;
    this._status = config.status;
    this._title = config.title;
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

  // content - computed: false, optional: true, required: false
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  public resetContent() {
    this._content = undefined;
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

  // metadata - computed: true, optional: true, required: false
  private _metadata = new ApiProductDocumentMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ApiProductDocumentMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // parent_document_id - computed: false, optional: true, required: false
  private _parentDocumentId?: string; 
  public get parentDocumentId() {
    return this.getStringAttribute('parent_document_id');
  }
  public set parentDocumentId(value: string) {
    this._parentDocumentId = value;
  }
  public resetParentDocumentId() {
    this._parentDocumentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentDocumentIdInput() {
    return this._parentDocumentId;
  }

  // slug - computed: false, optional: false, required: true
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
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
      content: cdktf.stringToTerraform(this._content),
      metadata: apiProductDocumentMetadataToTerraform(this._metadata.internalValue),
      parent_document_id: cdktf.stringToTerraform(this._parentDocumentId),
      slug: cdktf.stringToTerraform(this._slug),
      status: cdktf.stringToTerraform(this._status),
      title: cdktf.stringToTerraform(this._title),
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
      content: {
        value: cdktf.stringToHclTerraform(this._content),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metadata: {
        value: apiProductDocumentMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApiProductDocumentMetadata",
      },
      parent_document_id: {
        value: cdktf.stringToHclTerraform(this._parentDocumentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
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
