// https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApiProductConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the API product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product#description ApiProduct#description}
  */
  readonly description?: string;
  /**
  * Labels store metadata of an entity that can be used for filtering an entity list or for searching across entity types. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product#labels ApiProduct#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * The name of the API product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product#name ApiProduct#name}
  */
  readonly name: string;
  /**
  * The list of portal identifiers which this API product should be published to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product#portal_ids ApiProduct#portal_ids}
  */
  readonly portalIds: string[];
  /**
  * Public labels store information about an entity that can be used for filtering a list of objects.
  * 
  * Public labels are intended to store **PUBLIC** metadata. 
  * 
  * Keys must be of length 1-63 characters, and cannot start with "kong", "konnect", "mesh", "kic", or "_".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product#public_labels ApiProduct#public_labels}
  */
  readonly publicLabels?: { [key: string]: string };
}
export interface ApiProductPortals {
}

export function apiProductPortalsToTerraform(struct?: ApiProductPortals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function apiProductPortalsToHclTerraform(struct?: ApiProductPortals): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ApiProductPortalsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApiProductPortals | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApiProductPortals | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // portal_id - computed: true, optional: false, required: false
  public get portalId() {
    return this.getStringAttribute('portal_id');
  }

  // portal_name - computed: true, optional: false, required: false
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }
}

export class ApiProductPortalsList extends cdktf.ComplexList {

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
  public get(index: number): ApiProductPortalsOutputReference {
    return new ApiProductPortalsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product konnect_api_product}
*/
export class ApiProduct extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_api_product";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApiProduct resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApiProduct to import
  * @param importFromId The id of the existing ApiProduct that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApiProduct to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_api_product", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.3/docs/resources/api_product konnect_api_product} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApiProductConfig
  */
  public constructor(scope: Construct, id: string, config: ApiProductConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_api_product',
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
    this._description = config.description;
    this._labels = config.labels;
    this._name = config.name;
    this._portalIds = config.portalIds;
    this._publicLabels = config.publicLabels;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // portal_ids - computed: false, optional: false, required: true
  private _portalIds?: string[]; 
  public get portalIds() {
    return this.getListAttribute('portal_ids');
  }
  public set portalIds(value: string[]) {
    this._portalIds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalIdsInput() {
    return this._portalIds;
  }

  // portals - computed: true, optional: false, required: false
  private _portals = new ApiProductPortalsList(this, "portals", false);
  public get portals() {
    return this._portals;
  }

  // public_labels - computed: true, optional: true, required: false
  private _publicLabels?: { [key: string]: string }; 
  public get publicLabels() {
    return this.getStringMapAttribute('public_labels');
  }
  public set publicLabels(value: { [key: string]: string }) {
    this._publicLabels = value;
  }
  public resetPublicLabels() {
    this._publicLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicLabelsInput() {
    return this._publicLabels;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version_count - computed: true, optional: false, required: false
  public get versionCount() {
    return this.getNumberAttribute('version_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      portal_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portalIds),
      public_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._publicLabels),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      portal_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portalIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      public_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._publicLabels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
