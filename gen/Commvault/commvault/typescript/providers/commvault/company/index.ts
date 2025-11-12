// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CompanyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the SMTP address of the company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#associated_smtp Company#associated_smtp}
  */
  readonly associatedSmtp?: string;
  /**
  * Specifies the Alias name for the company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#company_alias Company#company_alias}
  */
  readonly companyAlias: string;
  /**
  * Specifies  the company id to which the child company should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#company_id Company#company_id}
  */
  readonly companyId?: number;
  /**
  * Specifies the name of the Company.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#company_name Company#company_name}
  */
  readonly companyName: string;
  /**
  * Specifies Name of the tenant administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#contact_name Company#contact_name}
  */
  readonly contactName: string;
  /**
  * Specifies Email address for the tenant administrator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#email Company#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#id Company#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the data protection plans to use for the company. The plans you select are the plans that the tenant administrator can choose from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#plans Company#plans}
  */
  readonly plans?: string[];
  /**
  * Specifies whether  email needs to be sent ot not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#send_email Company#send_email}
  */
  readonly sendEmail?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company commvault_company}
*/
export class Company extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_company";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Company resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Company to import
  * @param importFromId The id of the existing Company that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Company to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_company", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/company commvault_company} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CompanyConfig
  */
  public constructor(scope: Construct, id: string, config: CompanyConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_company',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._associatedSmtp = config.associatedSmtp;
    this._companyAlias = config.companyAlias;
    this._companyId = config.companyId;
    this._companyName = config.companyName;
    this._contactName = config.contactName;
    this._email = config.email;
    this._id = config.id;
    this._plans = config.plans;
    this._sendEmail = config.sendEmail;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // associated_smtp - computed: false, optional: true, required: false
  private _associatedSmtp?: string; 
  public get associatedSmtp() {
    return this.getStringAttribute('associated_smtp');
  }
  public set associatedSmtp(value: string) {
    this._associatedSmtp = value;
  }
  public resetAssociatedSmtp() {
    this._associatedSmtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedSmtpInput() {
    return this._associatedSmtp;
  }

  // company_alias - computed: false, optional: false, required: true
  private _companyAlias?: string; 
  public get companyAlias() {
    return this.getStringAttribute('company_alias');
  }
  public set companyAlias(value: string) {
    this._companyAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyAliasInput() {
    return this._companyAlias;
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
  }

  // company_name - computed: false, optional: false, required: true
  private _companyName?: string; 
  public get companyName() {
    return this.getStringAttribute('company_name');
  }
  public set companyName(value: string) {
    this._companyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get companyNameInput() {
    return this._companyName;
  }

  // contact_name - computed: false, optional: false, required: true
  private _contactName?: string; 
  public get contactName() {
    return this.getStringAttribute('contact_name');
  }
  public set contactName(value: string) {
    this._contactName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contactNameInput() {
    return this._contactName;
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

  // plans - computed: false, optional: true, required: false
  private _plans?: string[]; 
  public get plans() {
    return cdktf.Fn.tolist(this.getListAttribute('plans'));
  }
  public set plans(value: string[]) {
    this._plans = value;
  }
  public resetPlans() {
    this._plans = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get plansInput() {
    return this._plans;
  }

  // send_email - computed: false, optional: true, required: false
  private _sendEmail?: boolean | cdktf.IResolvable; 
  public get sendEmail() {
    return this.getBooleanAttribute('send_email');
  }
  public set sendEmail(value: boolean | cdktf.IResolvable) {
    this._sendEmail = value;
  }
  public resetSendEmail() {
    this._sendEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailInput() {
    return this._sendEmail;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      associated_smtp: cdktf.stringToTerraform(this._associatedSmtp),
      company_alias: cdktf.stringToTerraform(this._companyAlias),
      company_id: cdktf.numberToTerraform(this._companyId),
      company_name: cdktf.stringToTerraform(this._companyName),
      contact_name: cdktf.stringToTerraform(this._contactName),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      plans: cdktf.listMapper(cdktf.stringToTerraform, false)(this._plans),
      send_email: cdktf.booleanToTerraform(this._sendEmail),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      associated_smtp: {
        value: cdktf.stringToHclTerraform(this._associatedSmtp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_alias: {
        value: cdktf.stringToHclTerraform(this._companyAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      company_name: {
        value: cdktf.stringToHclTerraform(this._companyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contact_name: {
        value: cdktf.stringToHclTerraform(this._contactName),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plans: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._plans),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      send_email: {
        value: cdktf.booleanToHclTerraform(this._sendEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
