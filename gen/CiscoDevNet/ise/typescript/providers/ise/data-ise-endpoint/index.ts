// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/endpoint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIseEndpointConfig extends cdktf.TerraformMetaArguments {
  /**
  * The id of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/endpoint#id DataIseEndpoint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/endpoint#name DataIseEndpoint#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/endpoint ise_endpoint}
*/
export class DataIseEndpoint extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_endpoint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIseEndpoint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIseEndpoint to import
  * @param importFromId The id of the existing DataIseEndpoint that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/endpoint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIseEndpoint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_endpoint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/data-sources/endpoint ise_endpoint} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIseEndpointConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIseEndpointConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ise_endpoint',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_attributes - computed: true, optional: false, required: false
  private _customAttributes = new cdktf.StringMap(this, "custom_attributes");
  public get customAttributes() {
    return this._customAttributes;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getStringAttribute('group_id');
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

  // identity_store - computed: true, optional: false, required: false
  public get identityStore() {
    return this.getStringAttribute('identity_store');
  }

  // identity_store_id - computed: true, optional: false, required: false
  public get identityStoreId() {
    return this.getStringAttribute('identity_store_id');
  }

  // mac - computed: true, optional: false, required: false
  public get mac() {
    return this.getStringAttribute('mac');
  }

  // mdm_compliance_status - computed: true, optional: false, required: false
  public get mdmComplianceStatus() {
    return this.getBooleanAttribute('mdm_compliance_status');
  }

  // mdm_encrypted - computed: true, optional: false, required: false
  public get mdmEncrypted() {
    return this.getBooleanAttribute('mdm_encrypted');
  }

  // mdm_enrolled - computed: true, optional: false, required: false
  public get mdmEnrolled() {
    return this.getBooleanAttribute('mdm_enrolled');
  }

  // mdm_imei - computed: true, optional: false, required: false
  public get mdmImei() {
    return this.getStringAttribute('mdm_imei');
  }

  // mdm_jail_broken - computed: true, optional: false, required: false
  public get mdmJailBroken() {
    return this.getBooleanAttribute('mdm_jail_broken');
  }

  // mdm_manufacturer - computed: true, optional: false, required: false
  public get mdmManufacturer() {
    return this.getStringAttribute('mdm_manufacturer');
  }

  // mdm_model - computed: true, optional: false, required: false
  public get mdmModel() {
    return this.getStringAttribute('mdm_model');
  }

  // mdm_os - computed: true, optional: false, required: false
  public get mdmOs() {
    return this.getStringAttribute('mdm_os');
  }

  // mdm_phone_number - computed: true, optional: false, required: false
  public get mdmPhoneNumber() {
    return this.getStringAttribute('mdm_phone_number');
  }

  // mdm_pinlock - computed: true, optional: false, required: false
  public get mdmPinlock() {
    return this.getBooleanAttribute('mdm_pinlock');
  }

  // mdm_reachable - computed: true, optional: false, required: false
  public get mdmReachable() {
    return this.getBooleanAttribute('mdm_reachable');
  }

  // mdm_serial - computed: true, optional: false, required: false
  public get mdmSerial() {
    return this.getStringAttribute('mdm_serial');
  }

  // mdm_server_name - computed: true, optional: false, required: false
  public get mdmServerName() {
    return this.getStringAttribute('mdm_server_name');
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

  // portal_user - computed: true, optional: false, required: false
  public get portalUser() {
    return this.getStringAttribute('portal_user');
  }

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }

  // static_group_assignment - computed: true, optional: false, required: false
  public get staticGroupAssignment() {
    return this.getBooleanAttribute('static_group_assignment');
  }

  // static_group_assignment_defined - computed: true, optional: false, required: false
  public get staticGroupAssignmentDefined() {
    return this.getBooleanAttribute('static_group_assignment_defined');
  }

  // static_profile_assignment - computed: true, optional: false, required: false
  public get staticProfileAssignment() {
    return this.getBooleanAttribute('static_profile_assignment');
  }

  // static_profile_assignment_defined - computed: true, optional: false, required: false
  public get staticProfileAssignmentDefined() {
    return this.getBooleanAttribute('static_profile_assignment_defined');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
