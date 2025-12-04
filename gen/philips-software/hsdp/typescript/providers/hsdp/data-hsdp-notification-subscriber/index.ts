// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpNotificationSubscriberConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber#id DataHsdpNotificationSubscriber#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber#subscriber_id DataHsdpNotificationSubscriber#subscriber_id}
  */
  readonly subscriberId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber#subscriber_product_name DataHsdpNotificationSubscriber#subscriber_product_name}
  */
  readonly subscriberProductName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber hsdp_notification_subscriber}
*/
export class DataHsdpNotificationSubscriber extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_notification_subscriber";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpNotificationSubscriber resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpNotificationSubscriber to import
  * @param importFromId The id of the existing DataHsdpNotificationSubscriber that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpNotificationSubscriber to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_notification_subscriber", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_subscriber hsdp_notification_subscriber} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpNotificationSubscriberConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpNotificationSubscriberConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_notification_subscriber',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._subscriberId = config.subscriberId;
    this._subscriberProductName = config.subscriberProductName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
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

  // managing_organization - computed: true, optional: false, required: false
  public get managingOrganization() {
    return this.getStringAttribute('managing_organization');
  }

  // subscriber_id - computed: false, optional: false, required: true
  private _subscriberId?: string; 
  public get subscriberId() {
    return this.getStringAttribute('subscriber_id');
  }
  public set subscriberId(value: string) {
    this._subscriberId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberIdInput() {
    return this._subscriberId;
  }

  // subscriber_product_name - computed: false, optional: true, required: false
  private _subscriberProductName?: string; 
  public get subscriberProductName() {
    return this.getStringAttribute('subscriber_product_name');
  }
  public set subscriberProductName(value: string) {
    this._subscriberProductName = value;
  }
  public resetSubscriberProductName() {
    this._subscriberProductName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriberProductNameInput() {
    return this._subscriberProductName;
  }

  // subscriber_service_base_url - computed: true, optional: false, required: false
  public get subscriberServiceBaseUrl() {
    return this.getStringAttribute('subscriber_service_base_url');
  }

  // subscriber_service_instance_name - computed: true, optional: false, required: false
  public get subscriberServiceInstanceName() {
    return this.getStringAttribute('subscriber_service_instance_name');
  }

  // subscriber_service_name - computed: true, optional: false, required: false
  public get subscriberServiceName() {
    return this.getStringAttribute('subscriber_service_name');
  }

  // subscriber_service_path_url - computed: true, optional: false, required: false
  public get subscriberServicePathUrl() {
    return this.getStringAttribute('subscriber_service_path_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      subscriber_id: cdktf.stringToTerraform(this._subscriberId),
      subscriber_product_name: cdktf.stringToTerraform(this._subscriberProductName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_id: {
        value: cdktf.stringToHclTerraform(this._subscriberId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subscriber_product_name: {
        value: cdktf.stringToHclTerraform(this._subscriberProductName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
