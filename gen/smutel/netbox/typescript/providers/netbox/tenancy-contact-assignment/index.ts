// https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenancyContactAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the contact to link to this contact assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#contact_id TenancyContactAssignment#contact_id}
  */
  readonly contactId: number;
  /**
  * The role of the contact for this contact assignment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#contact_role_id TenancyContactAssignment#contact_role_id}
  */
  readonly contactRoleId: number;
  /**
  * Type of the object where the contact will be linked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#content_type TenancyContactAssignment#content_type}
  */
  readonly contentType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#id TenancyContactAssignment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the object where the contact will be linked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#object_id TenancyContactAssignment#object_id}
  */
  readonly objectId: number;
  /**
  * Priority of this contact among primary, secondary and tertiary (primary by default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#priority TenancyContactAssignment#priority}
  */
  readonly priority?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment netbox_tenancy_contact_assignment}
*/
export class TenancyContactAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netbox_tenancy_contact_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenancyContactAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenancyContactAssignment to import
  * @param importFromId The id of the existing TenancyContactAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenancyContactAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netbox_tenancy_contact_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/smutel/netbox/8.0.2/docs/resources/tenancy_contact_assignment netbox_tenancy_contact_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenancyContactAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: TenancyContactAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'netbox_tenancy_contact_assignment',
      terraformGeneratorMetadata: {
        providerName: 'netbox',
        providerVersion: '8.0.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contactId = config.contactId;
    this._contactRoleId = config.contactRoleId;
    this._contentType = config.contentType;
    this._id = config.id;
    this._objectId = config.objectId;
    this._priority = config.priority;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact_id - computed: false, optional: false, required: true
  private _contactId?: number; 
  public get contactId() {
    return this.getNumberAttribute('contact_id');
  }
  public set contactId(value: number) {
    this._contactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactIdInput() {
    return this._contactId;
  }

  // contact_role_id - computed: false, optional: false, required: true
  private _contactRoleId?: number; 
  public get contactRoleId() {
    return this.getNumberAttribute('contact_role_id');
  }
  public set contactRoleId(value: number) {
    this._contactRoleId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactRoleIdInput() {
    return this._contactRoleId;
  }

  // content_type - computed: false, optional: false, required: true
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
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

  // object_id - computed: false, optional: false, required: true
  private _objectId?: number; 
  public get objectId() {
    return this.getNumberAttribute('object_id');
  }
  public set objectId(value: number) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: string; 
  public get priority() {
    return this.getStringAttribute('priority');
  }
  public set priority(value: string) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact_id: cdktf.numberToTerraform(this._contactId),
      contact_role_id: cdktf.numberToTerraform(this._contactRoleId),
      content_type: cdktf.stringToTerraform(this._contentType),
      id: cdktf.stringToTerraform(this._id),
      object_id: cdktf.numberToTerraform(this._objectId),
      priority: cdktf.stringToTerraform(this._priority),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact_id: {
        value: cdktf.numberToHclTerraform(this._contactId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      contact_role_id: {
        value: cdktf.numberToHclTerraform(this._contactRoleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
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
      object_id: {
        value: cdktf.numberToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      priority: {
        value: cdktf.stringToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
