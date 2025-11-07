// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/email_domain_verification
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EmailDomainVerificationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Email domain ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/email_domain_verification#email_domain_id EmailDomainVerification#email_domain_id}
  */
  readonly emailDomainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/email_domain_verification#id EmailDomainVerification#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/email_domain_verification okta_email_domain_verification}
*/
export class EmailDomainVerification extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_email_domain_verification";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EmailDomainVerification resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EmailDomainVerification to import
  * @param importFromId The id of the existing EmailDomainVerification that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/email_domain_verification#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EmailDomainVerification to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_email_domain_verification", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/email_domain_verification okta_email_domain_verification} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EmailDomainVerificationConfig
  */
  public constructor(scope: Construct, id: string, config: EmailDomainVerificationConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_email_domain_verification',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailDomainId = config.emailDomainId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_domain_id - computed: false, optional: false, required: true
  private _emailDomainId?: string; 
  public get emailDomainId() {
    return this.getStringAttribute('email_domain_id');
  }
  public set emailDomainId(value: string) {
    this._emailDomainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailDomainIdInput() {
    return this._emailDomainId;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_domain_id: cdktf.stringToTerraform(this._emailDomainId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_domain_id: {
        value: cdktf.stringToHclTerraform(this._emailDomainId),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
