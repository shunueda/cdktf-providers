// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyncServicesListsItemsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#collection_ttl SyncServicesListsItemsV1#collection_ttl}
  */
  readonly collectionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#data SyncServicesListsItemsV1#data}
  */
  readonly data: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#id SyncServicesListsItemsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#if_match SyncServicesListsItemsV1#if_match}
  */
  readonly ifMatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#item_ttl SyncServicesListsItemsV1#item_ttl}
  */
  readonly itemTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#list_sid SyncServicesListsItemsV1#list_sid}
  */
  readonly listSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#service_sid SyncServicesListsItemsV1#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#ttl SyncServicesListsItemsV1#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1 twilio_sync_services_lists_items_v1}
*/
export class SyncServicesListsItemsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_sync_services_lists_items_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyncServicesListsItemsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyncServicesListsItemsV1 to import
  * @param importFromId The id of the existing SyncServicesListsItemsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyncServicesListsItemsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_sync_services_lists_items_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_items_v1 twilio_sync_services_lists_items_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyncServicesListsItemsV1Config
  */
  public constructor(scope: Construct, id: string, config: SyncServicesListsItemsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_sync_services_lists_items_v1',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._collectionTtl = config.collectionTtl;
    this._data = config.data;
    this._id = config.id;
    this._ifMatch = config.ifMatch;
    this._itemTtl = config.itemTtl;
    this._listSid = config.listSid;
    this._serviceSid = config.serviceSid;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // collection_ttl - computed: true, optional: true, required: false
  private _collectionTtl?: number; 
  public get collectionTtl() {
    return this.getNumberAttribute('collection_ttl');
  }
  public set collectionTtl(value: number) {
    this._collectionTtl = value;
  }
  public resetCollectionTtl() {
    this._collectionTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionTtlInput() {
    return this._collectionTtl;
  }

  // data - computed: false, optional: false, required: true
  private _data?: string; 
  public get data() {
    return this.getStringAttribute('data');
  }
  public set data(value: string) {
    this._data = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
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

  // if_match - computed: true, optional: true, required: false
  private _ifMatch?: string; 
  public get ifMatch() {
    return this.getStringAttribute('if_match');
  }
  public set ifMatch(value: string) {
    this._ifMatch = value;
  }
  public resetIfMatch() {
    this._ifMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ifMatchInput() {
    return this._ifMatch;
  }

  // index - computed: true, optional: false, required: false
  public get index() {
    return this.getNumberAttribute('index');
  }

  // item_ttl - computed: true, optional: true, required: false
  private _itemTtl?: number; 
  public get itemTtl() {
    return this.getNumberAttribute('item_ttl');
  }
  public set itemTtl(value: number) {
    this._itemTtl = value;
  }
  public resetItemTtl() {
    this._itemTtl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemTtlInput() {
    return this._itemTtl;
  }

  // list_sid - computed: false, optional: false, required: true
  private _listSid?: string; 
  public get listSid() {
    return this.getStringAttribute('list_sid');
  }
  public set listSid(value: string) {
    this._listSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get listSidInput() {
    return this._listSid;
  }

  // service_sid - computed: false, optional: false, required: true
  private _serviceSid?: string; 
  public get serviceSid() {
    return this.getStringAttribute('service_sid');
  }
  public set serviceSid(value: string) {
    this._serviceSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceSidInput() {
    return this._serviceSid;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_ttl: cdktf.numberToTerraform(this._collectionTtl),
      data: cdktf.stringToTerraform(this._data),
      id: cdktf.stringToTerraform(this._id),
      if_match: cdktf.stringToTerraform(this._ifMatch),
      item_ttl: cdktf.numberToTerraform(this._itemTtl),
      list_sid: cdktf.stringToTerraform(this._listSid),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      collection_ttl: {
        value: cdktf.numberToHclTerraform(this._collectionTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      data: {
        value: cdktf.stringToHclTerraform(this._data),
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
      if_match: {
        value: cdktf.stringToHclTerraform(this._ifMatch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      item_ttl: {
        value: cdktf.numberToHclTerraform(this._itemTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      list_sid: {
        value: cdktf.stringToHclTerraform(this._listSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_sid: {
        value: cdktf.stringToHclTerraform(this._serviceSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
