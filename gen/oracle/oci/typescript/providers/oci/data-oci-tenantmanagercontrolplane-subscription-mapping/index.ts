// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscription_mapping
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciTenantmanagercontrolplaneSubscriptionMappingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscription_mapping#subscription_mapping_id DataOciTenantmanagercontrolplaneSubscriptionMapping#subscription_mapping_id}
  */
  readonly subscriptionMappingId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscription_mapping oci_tenantmanagercontrolplane_subscription_mapping}
*/
export class DataOciTenantmanagercontrolplaneSubscriptionMapping extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tenantmanagercontrolplane_subscription_mapping";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciTenantmanagercontrolplaneSubscriptionMapping resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciTenantmanagercontrolplaneSubscriptionMapping to import
  * @param importFromId The id of the existing DataOciTenantmanagercontrolplaneSubscriptionMapping that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscription_mapping#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciTenantmanagercontrolplaneSubscriptionMapping to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tenantmanagercontrolplane_subscription_mapping", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_subscription_mapping oci_tenantmanagercontrolplane_subscription_mapping} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciTenantmanagercontrolplaneSubscriptionMappingConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciTenantmanagercontrolplaneSubscriptionMappingConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_tenantmanagercontrolplane_subscription_mapping',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._subscriptionMappingId = config.subscriptionMappingId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_explicitly_assigned - computed: true, optional: false, required: false
  public get isExplicitlyAssigned() {
    return this.getBooleanAttribute('is_explicitly_assigned');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // subscription_id - computed: true, optional: false, required: false
  public get subscriptionId() {
    return this.getStringAttribute('subscription_id');
  }

  // subscription_mapping_id - computed: false, optional: false, required: true
  private _subscriptionMappingId?: string; 
  public get subscriptionMappingId() {
    return this.getStringAttribute('subscription_mapping_id');
  }
  public set subscriptionMappingId(value: string) {
    this._subscriptionMappingId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subscriptionMappingIdInput() {
    return this._subscriptionMappingId;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_terminated - computed: true, optional: false, required: false
  public get timeTerminated() {
    return this.getStringAttribute('time_terminated');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      subscription_mapping_id: cdktf.stringToTerraform(this._subscriptionMappingId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      subscription_mapping_id: {
        value: cdktf.stringToHclTerraform(this._subscriptionMappingId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
