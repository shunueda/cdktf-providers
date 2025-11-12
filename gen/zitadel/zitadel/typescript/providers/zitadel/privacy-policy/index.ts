// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrivacyPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#help_link PrivacyPolicy#help_link}
  */
  readonly helpLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#id PrivacyPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#org_id PrivacyPolicy#org_id}
  */
  readonly orgId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#privacy_link PrivacyPolicy#privacy_link}
  */
  readonly privacyLink?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#support_email PrivacyPolicy#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#tos_link PrivacyPolicy#tos_link}
  */
  readonly tosLink?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy zitadel_privacy_policy}
*/
export class PrivacyPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_privacy_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrivacyPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrivacyPolicy to import
  * @param importFromId The id of the existing PrivacyPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrivacyPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_privacy_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/privacy_policy zitadel_privacy_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrivacyPolicyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: PrivacyPolicyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zitadel_privacy_policy',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0',
        providerVersionConstraint: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._helpLink = config.helpLink;
    this._id = config.id;
    this._orgId = config.orgId;
    this._privacyLink = config.privacyLink;
    this._supportEmail = config.supportEmail;
    this._tosLink = config.tosLink;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // help_link - computed: false, optional: true, required: false
  private _helpLink?: string; 
  public get helpLink() {
    return this.getStringAttribute('help_link');
  }
  public set helpLink(value: string) {
    this._helpLink = value;
  }
  public resetHelpLink() {
    this._helpLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpLinkInput() {
    return this._helpLink;
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

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // privacy_link - computed: false, optional: true, required: false
  private _privacyLink?: string; 
  public get privacyLink() {
    return this.getStringAttribute('privacy_link');
  }
  public set privacyLink(value: string) {
    this._privacyLink = value;
  }
  public resetPrivacyLink() {
    this._privacyLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLinkInput() {
    return this._privacyLink;
  }

  // support_email - computed: false, optional: true, required: false
  private _supportEmail?: string; 
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail;
  }

  // tos_link - computed: false, optional: true, required: false
  private _tosLink?: string; 
  public get tosLink() {
    return this.getStringAttribute('tos_link');
  }
  public set tosLink(value: string) {
    this._tosLink = value;
  }
  public resetTosLink() {
    this._tosLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkInput() {
    return this._tosLink;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      help_link: cdktf.stringToTerraform(this._helpLink),
      id: cdktf.stringToTerraform(this._id),
      org_id: cdktf.stringToTerraform(this._orgId),
      privacy_link: cdktf.stringToTerraform(this._privacyLink),
      support_email: cdktf.stringToTerraform(this._supportEmail),
      tos_link: cdktf.stringToTerraform(this._tosLink),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      help_link: {
        value: cdktf.stringToHclTerraform(this._helpLink),
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
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      privacy_link: {
        value: cdktf.stringToHclTerraform(this._privacyLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      support_email: {
        value: cdktf.stringToHclTerraform(this._supportEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tos_link: {
        value: cdktf.stringToHclTerraform(this._tosLink),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
