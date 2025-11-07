// https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectMdmBlobSubscriptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription#data_type_id ConnectMdmBlobSubscription#data_type_id}
  */
  readonly dataTypeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription#description ConnectMdmBlobSubscription#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription#id ConnectMdmBlobSubscription#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription#name ConnectMdmBlobSubscription#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription#notification_topic_id ConnectMdmBlobSubscription#notification_topic_id}
  */
  readonly notificationTopicId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription hsdp_connect_mdm_blob_subscription}
*/
export class ConnectMdmBlobSubscription extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_blob_subscription";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ConnectMdmBlobSubscription resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ConnectMdmBlobSubscription to import
  * @param importFromId The id of the existing ConnectMdmBlobSubscription that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ConnectMdmBlobSubscription to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_blob_subscription", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.70.0/docs/resources/connect_mdm_blob_subscription hsdp_connect_mdm_blob_subscription} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectMdmBlobSubscriptionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectMdmBlobSubscriptionConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_blob_subscription',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.70.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataTypeId = config.dataTypeId;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._notificationTopicId = config.notificationTopicId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_type_id - computed: false, optional: false, required: true
  private _dataTypeId?: string; 
  public get dataTypeId() {
    return this.getStringAttribute('data_type_id');
  }
  public set dataTypeId(value: string) {
    this._dataTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dataTypeIdInput() {
    return this._dataTypeId;
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

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // notification_topic_id - computed: false, optional: false, required: true
  private _notificationTopicId?: string; 
  public get notificationTopicId() {
    return this.getStringAttribute('notification_topic_id');
  }
  public set notificationTopicId(value: string) {
    this._notificationTopicId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTopicIdInput() {
    return this._notificationTopicId;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getStringAttribute('version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      data_type_id: cdktf.stringToTerraform(this._dataTypeId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notification_topic_id: cdktf.stringToTerraform(this._notificationTopicId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_type_id: {
        value: cdktf.stringToHclTerraform(this._dataTypeId),
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
      notification_topic_id: {
        value: cdktf.stringToHclTerraform(this._notificationTopicId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
