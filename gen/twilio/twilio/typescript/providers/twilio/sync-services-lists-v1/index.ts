// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyncServicesListsV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1#collection_ttl SyncServicesListsV1#collection_ttl}
  */
  readonly collectionTtl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1#id SyncServicesListsV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1#service_sid SyncServicesListsV1#service_sid}
  */
  readonly serviceSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1#ttl SyncServicesListsV1#ttl}
  */
  readonly ttl?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1#unique_name SyncServicesListsV1#unique_name}
  */
  readonly uniqueName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1 twilio_sync_services_lists_v1}
*/
export class SyncServicesListsV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_sync_services_lists_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyncServicesListsV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyncServicesListsV1 to import
  * @param importFromId The id of the existing SyncServicesListsV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyncServicesListsV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_sync_services_lists_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/sync_services_lists_v1 twilio_sync_services_lists_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyncServicesListsV1Config
  */
  public constructor(scope: Construct, id: string, config: SyncServicesListsV1Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_sync_services_lists_v1',
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
    this._id = config.id;
    this._serviceSid = config.serviceSid;
    this._ttl = config.ttl;
    this._uniqueName = config.uniqueName;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
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

  // unique_name - computed: true, optional: true, required: false
  private _uniqueName?: string; 
  public get uniqueName() {
    return this.getStringAttribute('unique_name');
  }
  public set uniqueName(value: string) {
    this._uniqueName = value;
  }
  public resetUniqueName() {
    this._uniqueName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueNameInput() {
    return this._uniqueName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      collection_ttl: cdktf.numberToTerraform(this._collectionTtl),
      id: cdktf.stringToTerraform(this._id),
      service_sid: cdktf.stringToTerraform(this._serviceSid),
      ttl: cdktf.numberToTerraform(this._ttl),
      unique_name: cdktf.stringToTerraform(this._uniqueName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      unique_name: {
        value: cdktf.stringToHclTerraform(this._uniqueName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
