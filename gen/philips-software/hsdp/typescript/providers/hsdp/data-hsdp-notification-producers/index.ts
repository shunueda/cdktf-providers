// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_producers
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpNotificationProducersConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_producers#id DataHsdpNotificationProducers#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_producers#managing_organization_id DataHsdpNotificationProducers#managing_organization_id}
  */
  readonly managingOrganizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_producers hsdp_notification_producers}
*/
export class DataHsdpNotificationProducers extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_notification_producers";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpNotificationProducers resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpNotificationProducers to import
  * @param importFromId The id of the existing DataHsdpNotificationProducers that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_producers#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpNotificationProducers to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_notification_producers", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/notification_producers hsdp_notification_producers} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpNotificationProducersConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpNotificationProducersConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_notification_producers',
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
    this._managingOrganizationId = config.managingOrganizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // managing_organization_id - computed: false, optional: false, required: true
  private _managingOrganizationId?: string; 
  public get managingOrganizationId() {
    return this.getStringAttribute('managing_organization_id');
  }
  public set managingOrganizationId(value: string) {
    this._managingOrganizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managingOrganizationIdInput() {
    return this._managingOrganizationId;
  }

  // producer_ids - computed: true, optional: false, required: false
  public get producerIds() {
    return this.getListAttribute('producer_ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      managing_organization_id: cdktf.stringToTerraform(this._managingOrganizationId),
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
      managing_organization_id: {
        value: cdktf.stringToHclTerraform(this._managingOrganizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
