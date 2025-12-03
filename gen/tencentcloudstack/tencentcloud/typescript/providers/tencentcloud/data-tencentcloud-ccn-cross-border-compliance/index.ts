// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTencentcloudCcnCrossBorderComplianceConfig extends cdktf.TerraformMetaArguments {
  /**
  * (Fuzzy query) business license address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#business_address DataTencentcloudCcnCrossBorderCompliance#business_address}
  */
  readonly businessAddress?: string;
  /**
  * (Fuzzy query) Company name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#company DataTencentcloudCcnCrossBorderCompliance#company}
  */
  readonly company?: string;
  /**
  * (Exact match) compliance approval form: 'ID'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#compliance_id DataTencentcloudCcnCrossBorderCompliance#compliance_id}
  */
  readonly complianceId?: number;
  /**
  * (Exact match) email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#email DataTencentcloudCcnCrossBorderCompliance#email}
  */
  readonly email?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#id DataTencentcloudCcnCrossBorderCompliance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * (Fuzzy query) Issuing authority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#issuing_authority DataTencentcloudCcnCrossBorderCompliance#issuing_authority}
  */
  readonly issuingAuthority?: string;
  /**
  * (Fuzzy query) legal representative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#legal_person DataTencentcloudCcnCrossBorderCompliance#legal_person}
  */
  readonly legalPerson?: string;
  /**
  * (Fuzzy query) Person in charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#manager DataTencentcloudCcnCrossBorderCompliance#manager}
  */
  readonly manager?: string;
  /**
  * (Fuzzy query) ID card address of the person in charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#manager_address DataTencentcloudCcnCrossBorderCompliance#manager_address}
  */
  readonly managerAddress?: string;
  /**
  * (Exact query) ID number of the person in charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#manager_id DataTencentcloudCcnCrossBorderCompliance#manager_id}
  */
  readonly managerId?: string;
  /**
  * (Exact match) contact number of the person in charge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#manager_telephone DataTencentcloudCcnCrossBorderCompliance#manager_telephone}
  */
  readonly managerTelephone?: string;
  /**
  * (Exact match) post code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#post_code DataTencentcloudCcnCrossBorderCompliance#post_code}
  */
  readonly postCode?: number;
  /**
  * Used to save results.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#result_output_file DataTencentcloudCcnCrossBorderCompliance#result_output_file}
  */
  readonly resultOutputFile?: string;
  /**
  * (Exact match) service end date, such as: '2020-07-28'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#service_end_date DataTencentcloudCcnCrossBorderCompliance#service_end_date}
  */
  readonly serviceEndDate?: string;
  /**
  * (Exact match) service provider, optional value: 'UNICOM'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#service_provider DataTencentcloudCcnCrossBorderCompliance#service_provider}
  */
  readonly serviceProvider?: string;
  /**
  * (Exact match) service start date, such as: '2020-07-28'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#service_start_date DataTencentcloudCcnCrossBorderCompliance#service_start_date}
  */
  readonly serviceStartDate?: string;
  /**
  * (Exact match) status. Pending: PENDING, Passed: APPROVED, Denied: DENY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#state DataTencentcloudCcnCrossBorderCompliance#state}
  */
  readonly state?: string;
  /**
  * (Exact match) Uniform Social Credit Code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#uniform_social_credit_code DataTencentcloudCcnCrossBorderCompliance#uniform_social_credit_code}
  */
  readonly uniformSocialCreditCode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance tencentcloud_ccn_cross_border_compliance}
*/
export class DataTencentcloudCcnCrossBorderCompliance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_ccn_cross_border_compliance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTencentcloudCcnCrossBorderCompliance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTencentcloudCcnCrossBorderCompliance to import
  * @param importFromId The id of the existing DataTencentcloudCcnCrossBorderCompliance that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTencentcloudCcnCrossBorderCompliance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_ccn_cross_border_compliance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.40/docs/data-sources/ccn_cross_border_compliance tencentcloud_ccn_cross_border_compliance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTencentcloudCcnCrossBorderComplianceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataTencentcloudCcnCrossBorderComplianceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_ccn_cross_border_compliance',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.40',
        providerVersionConstraint: '1.82.40'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._businessAddress = config.businessAddress;
    this._company = config.company;
    this._complianceId = config.complianceId;
    this._email = config.email;
    this._id = config.id;
    this._issuingAuthority = config.issuingAuthority;
    this._legalPerson = config.legalPerson;
    this._manager = config.manager;
    this._managerAddress = config.managerAddress;
    this._managerId = config.managerId;
    this._managerTelephone = config.managerTelephone;
    this._postCode = config.postCode;
    this._resultOutputFile = config.resultOutputFile;
    this._serviceEndDate = config.serviceEndDate;
    this._serviceProvider = config.serviceProvider;
    this._serviceStartDate = config.serviceStartDate;
    this._state = config.state;
    this._uniformSocialCreditCode = config.uniformSocialCreditCode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // business_address - computed: false, optional: true, required: false
  private _businessAddress?: string; 
  public get businessAddress() {
    return this.getStringAttribute('business_address');
  }
  public set businessAddress(value: string) {
    this._businessAddress = value;
  }
  public resetBusinessAddress() {
    this._businessAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessAddressInput() {
    return this._businessAddress;
  }

  // company - computed: false, optional: true, required: false
  private _company?: string; 
  public get company() {
    return this.getStringAttribute('company');
  }
  public set company(value: string) {
    this._company = value;
  }
  public resetCompany() {
    this._company = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyInput() {
    return this._company;
  }

  // compliance_id - computed: false, optional: true, required: false
  private _complianceId?: number; 
  public get complianceId() {
    return this.getNumberAttribute('compliance_id');
  }
  public set complianceId(value: number) {
    this._complianceId = value;
  }
  public resetComplianceId() {
    this._complianceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get complianceIdInput() {
    return this._complianceId;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
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

  // issuing_authority - computed: false, optional: true, required: false
  private _issuingAuthority?: string; 
  public get issuingAuthority() {
    return this.getStringAttribute('issuing_authority');
  }
  public set issuingAuthority(value: string) {
    this._issuingAuthority = value;
  }
  public resetIssuingAuthority() {
    this._issuingAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuingAuthorityInput() {
    return this._issuingAuthority;
  }

  // legal_person - computed: false, optional: true, required: false
  private _legalPerson?: string; 
  public get legalPerson() {
    return this.getStringAttribute('legal_person');
  }
  public set legalPerson(value: string) {
    this._legalPerson = value;
  }
  public resetLegalPerson() {
    this._legalPerson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get legalPersonInput() {
    return this._legalPerson;
  }

  // manager - computed: false, optional: true, required: false
  private _manager?: string; 
  public get manager() {
    return this.getStringAttribute('manager');
  }
  public set manager(value: string) {
    this._manager = value;
  }
  public resetManager() {
    this._manager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerInput() {
    return this._manager;
  }

  // manager_address - computed: false, optional: true, required: false
  private _managerAddress?: string; 
  public get managerAddress() {
    return this.getStringAttribute('manager_address');
  }
  public set managerAddress(value: string) {
    this._managerAddress = value;
  }
  public resetManagerAddress() {
    this._managerAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerAddressInput() {
    return this._managerAddress;
  }

  // manager_id - computed: false, optional: true, required: false
  private _managerId?: string; 
  public get managerId() {
    return this.getStringAttribute('manager_id');
  }
  public set managerId(value: string) {
    this._managerId = value;
  }
  public resetManagerId() {
    this._managerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerIdInput() {
    return this._managerId;
  }

  // manager_telephone - computed: false, optional: true, required: false
  private _managerTelephone?: string; 
  public get managerTelephone() {
    return this.getStringAttribute('manager_telephone');
  }
  public set managerTelephone(value: string) {
    this._managerTelephone = value;
  }
  public resetManagerTelephone() {
    this._managerTelephone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managerTelephoneInput() {
    return this._managerTelephone;
  }

  // post_code - computed: false, optional: true, required: false
  private _postCode?: number; 
  public get postCode() {
    return this.getNumberAttribute('post_code');
  }
  public set postCode(value: number) {
    this._postCode = value;
  }
  public resetPostCode() {
    this._postCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postCodeInput() {
    return this._postCode;
  }

  // result_output_file - computed: false, optional: true, required: false
  private _resultOutputFile?: string; 
  public get resultOutputFile() {
    return this.getStringAttribute('result_output_file');
  }
  public set resultOutputFile(value: string) {
    this._resultOutputFile = value;
  }
  public resetResultOutputFile() {
    this._resultOutputFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resultOutputFileInput() {
    return this._resultOutputFile;
  }

  // service_end_date - computed: false, optional: true, required: false
  private _serviceEndDate?: string; 
  public get serviceEndDate() {
    return this.getStringAttribute('service_end_date');
  }
  public set serviceEndDate(value: string) {
    this._serviceEndDate = value;
  }
  public resetServiceEndDate() {
    this._serviceEndDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceEndDateInput() {
    return this._serviceEndDate;
  }

  // service_provider - computed: false, optional: true, required: false
  private _serviceProvider?: string; 
  public get serviceProvider() {
    return this.getStringAttribute('service_provider');
  }
  public set serviceProvider(value: string) {
    this._serviceProvider = value;
  }
  public resetServiceProvider() {
    this._serviceProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceProviderInput() {
    return this._serviceProvider;
  }

  // service_start_date - computed: false, optional: true, required: false
  private _serviceStartDate?: string; 
  public get serviceStartDate() {
    return this.getStringAttribute('service_start_date');
  }
  public set serviceStartDate(value: string) {
    this._serviceStartDate = value;
  }
  public resetServiceStartDate() {
    this._serviceStartDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceStartDateInput() {
    return this._serviceStartDate;
  }

  // state - computed: false, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // uniform_social_credit_code - computed: false, optional: true, required: false
  private _uniformSocialCreditCode?: string; 
  public get uniformSocialCreditCode() {
    return this.getStringAttribute('uniform_social_credit_code');
  }
  public set uniformSocialCreditCode(value: string) {
    this._uniformSocialCreditCode = value;
  }
  public resetUniformSocialCreditCode() {
    this._uniformSocialCreditCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniformSocialCreditCodeInput() {
    return this._uniformSocialCreditCode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      business_address: cdktf.stringToTerraform(this._businessAddress),
      company: cdktf.stringToTerraform(this._company),
      compliance_id: cdktf.numberToTerraform(this._complianceId),
      email: cdktf.stringToTerraform(this._email),
      id: cdktf.stringToTerraform(this._id),
      issuing_authority: cdktf.stringToTerraform(this._issuingAuthority),
      legal_person: cdktf.stringToTerraform(this._legalPerson),
      manager: cdktf.stringToTerraform(this._manager),
      manager_address: cdktf.stringToTerraform(this._managerAddress),
      manager_id: cdktf.stringToTerraform(this._managerId),
      manager_telephone: cdktf.stringToTerraform(this._managerTelephone),
      post_code: cdktf.numberToTerraform(this._postCode),
      result_output_file: cdktf.stringToTerraform(this._resultOutputFile),
      service_end_date: cdktf.stringToTerraform(this._serviceEndDate),
      service_provider: cdktf.stringToTerraform(this._serviceProvider),
      service_start_date: cdktf.stringToTerraform(this._serviceStartDate),
      state: cdktf.stringToTerraform(this._state),
      uniform_social_credit_code: cdktf.stringToTerraform(this._uniformSocialCreditCode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      business_address: {
        value: cdktf.stringToHclTerraform(this._businessAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company: {
        value: cdktf.stringToHclTerraform(this._company),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compliance_id: {
        value: cdktf.numberToHclTerraform(this._complianceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      issuing_authority: {
        value: cdktf.stringToHclTerraform(this._issuingAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      legal_person: {
        value: cdktf.stringToHclTerraform(this._legalPerson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager: {
        value: cdktf.stringToHclTerraform(this._manager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_address: {
        value: cdktf.stringToHclTerraform(this._managerAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_id: {
        value: cdktf.stringToHclTerraform(this._managerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manager_telephone: {
        value: cdktf.stringToHclTerraform(this._managerTelephone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_code: {
        value: cdktf.numberToHclTerraform(this._postCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      result_output_file: {
        value: cdktf.stringToHclTerraform(this._resultOutputFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_end_date: {
        value: cdktf.stringToHclTerraform(this._serviceEndDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_provider: {
        value: cdktf.stringToHclTerraform(this._serviceProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_start_date: {
        value: cdktf.stringToHclTerraform(this._serviceStartDate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uniform_social_credit_code: {
        value: cdktf.stringToHclTerraform(this._uniformSocialCreditCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
