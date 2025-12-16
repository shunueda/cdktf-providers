// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiConfig extends cdktf.TerraformMetaArguments {
  /**
  * A set of attributes that describe the API. Parsed as JSON.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#attributes Api#attributes}
  */
  readonly attributes?: string;
  /**
  * A description of your API. Will be visible on your live Portal.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#description Api#description}
  */
  readonly description?: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#labels Api#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of your API. The `name + version` combination must be unique for each API you publish.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#name Api#name}
  */
  readonly name: string;
  /**
  * The `slug` is used in generated URLs to provide human readable paths.
  * 
  * Defaults to `slugify(name + version)`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#slug Api#slug}
  */
  readonly slug?: string;
  /**
  * The content of the API specification. This is the raw content of the API specification, in json or yaml. By including this field, you can add a API specification without having to make a separate call to update the API specification. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#spec_content Api#spec_content}
  */
  readonly specContent?: string;
  /**
  * An optional version for your API. Leave this empty if your API is unversioned.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#version Api#version}
  */
  readonly version?: string;
}
export interface ApiPortals {
}

export function apiPortalsToTerraform(struct?: ApiPortals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiPortalsToHclTerraform(struct?: ApiPortals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiPortalsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApiPortals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiPortals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class ApiPortalsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApiPortalsOutputReference {
    return new ApiPortalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api konnect_api}
*/
export class Api extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Api resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Api to import
  * @param importFromId The id of the existing Api that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Api to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api konnect_api} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiConfig
  */
  public constructor(scope: Construct, id: string, config: ApiConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api',
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
    this._attributes = config.attributes;
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._slug = config.slug;
    this._specContent = config.specContent;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_spec_ids - computed: true, optional: false, required: false
  public get apiSpecIds() {
    return this.getListAttribute('api_spec_ids');
  }

  // attributes - computed: true, optional: true, required: false
  private _attributes?: string; 
  public get attributes() {
    return this.getStringAttribute('attributes');
  }
  public set attributes(value: string) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: true, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // portals - computed: true, optional: false, required: false
  private _portals = new ApiPortalsList(this, "portals", false);
  public get portals() {
    return this._portals;
  }

  // slug - computed: true, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // spec_content - computed: false, optional: true, required: false
  private _specContent?: string; 
  public get specContent() {
    return this.getStringAttribute('spec_content');
  }
  public set specContent(value: string) {
    this._specContent = value;
  }
  public resetSpecContent() {
    this._specContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specContentInput() {
    return this._specContent;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
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
      attributes: cdktf.stringToTerraform(this._attributes),
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      spec_content: cdktf.stringToTerraform(this._specContent),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attributes: {
        value: cdktf.stringToHclTerraform(this._attributes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      spec_content: {
        value: cdktf.stringToHclTerraform(this._specContent),
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
