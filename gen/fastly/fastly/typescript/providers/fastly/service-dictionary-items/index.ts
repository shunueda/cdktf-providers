// https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceDictionaryItemsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the dictionary that the items belong to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items#dictionary_id ServiceDictionaryItems#dictionary_id}
  */
  readonly dictionaryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items#id ServiceDictionaryItems#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A map representing an entry in the dictionary, (key/value)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items#items ServiceDictionaryItems#items}
  */
  readonly items?: { [key: string]: string };
  /**
  * Whether to reapply changes if the state of the items drifts, i.e. if items are managed externally
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items#manage_items ServiceDictionaryItems#manage_items}
  */
  readonly manageItems?: boolean | cdktf.IResolvable;
  /**
  * The ID of the service that the dictionary belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items#service_id ServiceDictionaryItems#service_id}
  */
  readonly serviceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items fastly_service_dictionary_items}
*/
export class ServiceDictionaryItems extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fastly_service_dictionary_items";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceDictionaryItems resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceDictionaryItems to import
  * @param importFromId The id of the existing ServiceDictionaryItems that should be imported. Refer to the {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceDictionaryItems to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fastly_service_dictionary_items", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fastly/fastly/8.4.0/docs/resources/service_dictionary_items fastly_service_dictionary_items} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceDictionaryItemsConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceDictionaryItemsConfig) {
    super(scope, id, {
      terraformResourceType: 'fastly_service_dictionary_items',
      terraformGeneratorMetadata: {
        providerName: 'fastly',
        providerVersion: '8.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dictionaryId = config.dictionaryId;
    this._id = config.id;
    this._items = config.items;
    this._manageItems = config.manageItems;
    this._serviceId = config.serviceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dictionary_id - computed: false, optional: false, required: true
  private _dictionaryId?: string; 
  public get dictionaryId() {
    return this.getStringAttribute('dictionary_id');
  }
  public set dictionaryId(value: string) {
    this._dictionaryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dictionaryIdInput() {
    return this._dictionaryId;
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

  // items - computed: false, optional: true, required: false
  private _items?: { [key: string]: string }; 
  public get items() {
    return this.getStringMapAttribute('items');
  }
  public set items(value: { [key: string]: string }) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // manage_items - computed: false, optional: true, required: false
  private _manageItems?: boolean | cdktf.IResolvable; 
  public get manageItems() {
    return this.getBooleanAttribute('manage_items');
  }
  public set manageItems(value: boolean | cdktf.IResolvable) {
    this._manageItems = value;
  }
  public resetManageItems() {
    this._manageItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageItemsInput() {
    return this._manageItems;
  }

  // service_id - computed: false, optional: false, required: true
  private _serviceId?: string; 
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }
  public set serviceId(value: string) {
    this._serviceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dictionary_id: cdktf.stringToTerraform(this._dictionaryId),
      id: cdktf.stringToTerraform(this._id),
      items: cdktf.hashMapper(cdktf.stringToTerraform)(this._items),
      manage_items: cdktf.booleanToTerraform(this._manageItems),
      service_id: cdktf.stringToTerraform(this._serviceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dictionary_id: {
        value: cdktf.stringToHclTerraform(this._dictionaryId),
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
      items: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._items),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      manage_items: {
        value: cdktf.booleanToHclTerraform(this._manageItems),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      service_id: {
        value: cdktf.stringToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
