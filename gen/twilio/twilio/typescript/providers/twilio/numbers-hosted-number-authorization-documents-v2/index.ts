// https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NumbersHostedNumberAuthorizationDocumentsV2Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#address_sid NumbersHostedNumberAuthorizationDocumentsV2#address_sid}
  */
  readonly addressSid: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#cc_emails NumbersHostedNumberAuthorizationDocumentsV2#cc_emails}
  */
  readonly ccEmails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#contact_phone_number NumbersHostedNumberAuthorizationDocumentsV2#contact_phone_number}
  */
  readonly contactPhoneNumber: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#contact_title NumbersHostedNumberAuthorizationDocumentsV2#contact_title}
  */
  readonly contactTitle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#email NumbersHostedNumberAuthorizationDocumentsV2#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#hosted_number_order_sids NumbersHostedNumberAuthorizationDocumentsV2#hosted_number_order_sids}
  */
  readonly hostedNumberOrderSids: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#id NumbersHostedNumberAuthorizationDocumentsV2#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2 twilio_numbers_hosted_number_authorization_documents_v2}
*/
export class NumbersHostedNumberAuthorizationDocumentsV2 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twilio_numbers_hosted_number_authorization_documents_v2";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NumbersHostedNumberAuthorizationDocumentsV2 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NumbersHostedNumberAuthorizationDocumentsV2 to import
  * @param importFromId The id of the existing NumbersHostedNumberAuthorizationDocumentsV2 that should be imported. Refer to the {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NumbersHostedNumberAuthorizationDocumentsV2 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twilio_numbers_hosted_number_authorization_documents_v2", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twilio/twilio/0.18.46/docs/resources/numbers_hosted_number_authorization_documents_v2 twilio_numbers_hosted_number_authorization_documents_v2} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NumbersHostedNumberAuthorizationDocumentsV2Config
  */
  public constructor(scope: Construct, id: string, config: NumbersHostedNumberAuthorizationDocumentsV2Config) {
    super(scope, id, {
      terraformResourceType: 'twilio_numbers_hosted_number_authorization_documents_v2',
      terraformGeneratorMetadata: {
        providerName: 'twilio',
        providerVersion: '0.18.46',
        providerVersionConstraint: '0.18.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addressSid = config.addressSid;
    this._ccEmails = config.ccEmails;
    this._contactPhoneNumber = config.contactPhoneNumber;
    this._contactTitle = config.contactTitle;
    this._email = config.email;
    this._hostedNumberOrderSids = config.hostedNumberOrderSids;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address_sid - computed: false, optional: false, required: true
  private _addressSid?: string; 
  public get addressSid() {
    return this.getStringAttribute('address_sid');
  }
  public set addressSid(value: string) {
    this._addressSid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressSidInput() {
    return this._addressSid;
  }

  // cc_emails - computed: true, optional: true, required: false
  private _ccEmails?: string[]; 
  public get ccEmails() {
    return this.getListAttribute('cc_emails');
  }
  public set ccEmails(value: string[]) {
    this._ccEmails = value;
  }
  public resetCcEmails() {
    this._ccEmails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ccEmailsInput() {
    return this._ccEmails;
  }

  // contact_phone_number - computed: false, optional: false, required: true
  private _contactPhoneNumber?: string; 
  public get contactPhoneNumber() {
    return this.getStringAttribute('contact_phone_number');
  }
  public set contactPhoneNumber(value: string) {
    this._contactPhoneNumber = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactPhoneNumberInput() {
    return this._contactPhoneNumber;
  }

  // contact_title - computed: true, optional: true, required: false
  private _contactTitle?: string; 
  public get contactTitle() {
    return this.getStringAttribute('contact_title');
  }
  public set contactTitle(value: string) {
    this._contactTitle = value;
  }
  public resetContactTitle() {
    this._contactTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactTitleInput() {
    return this._contactTitle;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // hosted_number_order_sids - computed: false, optional: false, required: true
  private _hostedNumberOrderSids?: string[]; 
  public get hostedNumberOrderSids() {
    return this.getListAttribute('hosted_number_order_sids');
  }
  public set hostedNumberOrderSids(value: string[]) {
    this._hostedNumberOrderSids = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedNumberOrderSidsInput() {
    return this._hostedNumberOrderSids;
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

  // sid - computed: true, optional: false, required: false
  public get sid() {
    return this.getStringAttribute('sid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address_sid: cdktf.stringToTerraform(this._addressSid),
      cc_emails: cdktf.listMapper(cdktf.stringToTerraform, false)(this._ccEmails),
      contact_phone_number: cdktf.stringToTerraform(this._contactPhoneNumber),
      contact_title: cdktf.stringToTerraform(this._contactTitle),
      email: cdktf.stringToTerraform(this._email),
      hosted_number_order_sids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hostedNumberOrderSids),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address_sid: {
        value: cdktf.stringToHclTerraform(this._addressSid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cc_emails: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._ccEmails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      contact_phone_number: {
        value: cdktf.stringToHclTerraform(this._contactPhoneNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_title: {
        value: cdktf.stringToHclTerraform(this._contactTitle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hosted_number_order_sids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hostedNumberOrderSids),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
