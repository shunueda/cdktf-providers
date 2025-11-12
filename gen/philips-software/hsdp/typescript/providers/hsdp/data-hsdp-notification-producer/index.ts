// https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/notification_producer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpNotificationProducerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/notification_producer#id DataHsdpNotificationProducer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/notification_producer#producer_id DataHsdpNotificationProducer#producer_id}
  */
  readonly producerId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/notification_producer hsdp_notification_producer}
*/
export class DataHsdpNotificationProducer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_notification_producer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpNotificationProducer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpNotificationProducer to import
  * @param importFromId The id of the existing DataHsdpNotificationProducer that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/notification_producer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpNotificationProducer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_notification_producer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/0.71.0/docs/data-sources/notification_producer hsdp_notification_producer} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpNotificationProducerConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpNotificationProducerConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_notification_producer',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '0.71.0',
        providerVersionConstraint: '0.71.0'
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
    this._producerId = config.producerId;
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

  // managing_organization_id - computed: true, optional: false, required: false
  public get managingOrganizationId() {
    return this.getStringAttribute('managing_organization_id');
  }

  // producer_id - computed: false, optional: false, required: true
  private _producerId?: string; 
  public get producerId() {
    return this.getStringAttribute('producer_id');
  }
  public set producerId(value: string) {
    this._producerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get producerIdInput() {
    return this._producerId;
  }

  // producer_product_name - computed: true, optional: false, required: false
  public get producerProductName() {
    return this.getStringAttribute('producer_product_name');
  }

  // producer_service_base_url - computed: true, optional: false, required: false
  public get producerServiceBaseUrl() {
    return this.getStringAttribute('producer_service_base_url');
  }

  // producer_service_instance_name - computed: true, optional: false, required: false
  public get producerServiceInstanceName() {
    return this.getStringAttribute('producer_service_instance_name');
  }

  // producer_service_name - computed: true, optional: false, required: false
  public get producerServiceName() {
    return this.getStringAttribute('producer_service_name');
  }

  // producer_service_path_url - computed: true, optional: false, required: false
  public get producerServicePathUrl() {
    return this.getStringAttribute('producer_service_path_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      producer_id: cdktf.stringToTerraform(this._producerId),
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
      producer_id: {
        value: cdktf.stringToHclTerraform(this._producerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
