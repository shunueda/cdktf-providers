// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_sender_invitation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciTenantmanagercontrolplaneSenderInvitationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_sender_invitation#id DataOciTenantmanagercontrolplaneSenderInvitation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_sender_invitation#sender_invitation_id DataOciTenantmanagercontrolplaneSenderInvitation#sender_invitation_id}
  */
  readonly senderInvitationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_sender_invitation oci_tenantmanagercontrolplane_sender_invitation}
*/
export class DataOciTenantmanagercontrolplaneSenderInvitation extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_tenantmanagercontrolplane_sender_invitation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciTenantmanagercontrolplaneSenderInvitation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciTenantmanagercontrolplaneSenderInvitation to import
  * @param importFromId The id of the existing DataOciTenantmanagercontrolplaneSenderInvitation that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_sender_invitation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciTenantmanagercontrolplaneSenderInvitation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_tenantmanagercontrolplane_sender_invitation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/tenantmanagercontrolplane_sender_invitation oci_tenantmanagercontrolplane_sender_invitation} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciTenantmanagercontrolplaneSenderInvitationConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciTenantmanagercontrolplaneSenderInvitationConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_tenantmanagercontrolplane_sender_invitation',
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
    this._id = config.id;
    this._senderInvitationId = config.senderInvitationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
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

  // recipient_email_address - computed: true, optional: false, required: false
  public get recipientEmailAddress() {
    return this.getStringAttribute('recipient_email_address');
  }

  // recipient_invitation_id - computed: true, optional: false, required: false
  public get recipientInvitationId() {
    return this.getStringAttribute('recipient_invitation_id');
  }

  // recipient_tenancy_id - computed: true, optional: false, required: false
  public get recipientTenancyId() {
    return this.getStringAttribute('recipient_tenancy_id');
  }

  // sender_invitation_id - computed: false, optional: false, required: true
  private _senderInvitationId?: string; 
  public get senderInvitationId() {
    return this.getStringAttribute('sender_invitation_id');
  }
  public set senderInvitationId(value: string) {
    this._senderInvitationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get senderInvitationIdInput() {
    return this._senderInvitationId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subjects - computed: true, optional: false, required: false
  public get subjects() {
    return this.getListAttribute('subjects');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
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
      id: cdktf.stringToTerraform(this._id),
      sender_invitation_id: cdktf.stringToTerraform(this._senderInvitationId),
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
      sender_invitation_id: {
        value: cdktf.stringToHclTerraform(this._senderInvitationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
