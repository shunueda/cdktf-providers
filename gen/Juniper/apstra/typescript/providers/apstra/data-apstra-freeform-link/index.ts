// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraFreeformLinkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra Blueprint ID. Used to identify the Blueprint where the Link lives.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link#blueprint_id DataApstraFreeformLink#blueprint_id}
  */
  readonly blueprintId: string;
  /**
  * Populate this field to look up the Freeform Link by ID. Required when `name` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link#id DataApstraFreeformLink#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Populate this field to look up the Link by Name. Required when `id` is omitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link#name DataApstraFreeformLink#name}
  */
  readonly name?: string;
}
export interface DataApstraFreeformLinkEndpoints {
}

export function dataApstraFreeformLinkEndpointsToTerraform(struct?: DataApstraFreeformLinkEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataApstraFreeformLinkEndpointsToHclTerraform(struct?: DataApstraFreeformLinkEndpoints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataApstraFreeformLinkEndpointsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectKey the key of this item in the map
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectKey: string) {
    super(terraformResource, terraformAttribute, false, complexObjectKey);
  }

  public get internalValue(): DataApstraFreeformLinkEndpoints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataApstraFreeformLinkEndpoints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // interface_id - computed: true, optional: false, required: false
  public get interfaceId() {
    return this.getStringAttribute('interface_id');
  }

  // interface_name - computed: true, optional: false, required: false
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }

  // ipv4_address - computed: true, optional: false, required: false
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }

  // ipv6_address - computed: true, optional: false, required: false
  public get ipv6Address() {
    return this.getStringAttribute('ipv6_address');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // transformation_id - computed: true, optional: false, required: false
  public get transformationId() {
    return this.getNumberAttribute('transformation_id');
  }
}

export class DataApstraFreeformLinkEndpointsMap extends cdktf.ComplexMap {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string) {
    super(terraformResource, terraformAttribute)
  }

  /**
  * @param key the key of the item to return
  */
  public get(key: string): DataApstraFreeformLinkEndpointsOutputReference {
    return new DataApstraFreeformLinkEndpointsOutputReference(this.terraformResource, this.terraformAttribute, key);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link apstra_freeform_link}
*/
export class DataApstraFreeformLink extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_freeform_link";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraFreeformLink resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraFreeformLink to import
  * @param importFromId The id of the existing DataApstraFreeformLink that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraFreeformLink to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_freeform_link", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/freeform_link apstra_freeform_link} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraFreeformLinkConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraFreeformLinkConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_freeform_link',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._blueprintId = config.blueprintId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregate_link_id - computed: true, optional: false, required: false
  public get aggregateLinkId() {
    return this.getStringAttribute('aggregate_link_id');
  }

  // blueprint_id - computed: false, optional: false, required: true
  private _blueprintId?: string; 
  public get blueprintId() {
    return this.getStringAttribute('blueprint_id');
  }
  public set blueprintId(value: string) {
    this._blueprintId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get blueprintIdInput() {
    return this._blueprintId;
  }

  // endpoints - computed: true, optional: false, required: false
  private _endpoints = new DataApstraFreeformLinkEndpointsMap(this, "endpoints");
  public get endpoints() {
    return this._endpoints;
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

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // speed - computed: true, optional: false, required: false
  public get speed() {
    return this.getStringAttribute('speed');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      blueprint_id: cdktf.stringToTerraform(this._blueprintId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      blueprint_id: {
        value: cdktf.stringToHclTerraform(this._blueprintId),
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
