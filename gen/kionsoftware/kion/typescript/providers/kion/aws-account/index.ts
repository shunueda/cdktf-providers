// https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AwsAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account alias is an optional short unique name that helps identify the account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#account_alias AwsAccount#account_alias}
  */
  readonly accountAlias?: string;
  /**
  * The account number of the AWS account.  If account_number is provided, the existing account will be imported into Kion.  If account_number is omitted, a new account will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#account_number AwsAccount#account_number}
  */
  readonly accountNumber?: string;
  /**
  * An ID representing the account type within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#account_type_id AwsAccount#account_type_id}
  */
  readonly accountTypeId?: number;
  /**
  * The name used when creating new commercial account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#commercial_account_name AwsAccount#commercial_account_name}
  */
  readonly commercialAccountName?: string;
  /**
  * True to create an AWS GovCloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#create_govcloud AwsAccount#create_govcloud}
  */
  readonly createGovcloud?: boolean | cdktf.IResolvable;
  /**
  * The root email address to associate with a new account.  Required when creating a new account unless an account placeholder email has been set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#email AwsAccount#email}
  */
  readonly email?: string;
  /**
  * The name used when creating new GovCloud account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#gov_account_name AwsAccount#gov_account_name}
  */
  readonly govAccountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#id AwsAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * True to associate spend from a linked GovCloud account with this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#include_linked_account_spend AwsAccount#include_linked_account_spend}
  */
  readonly includeLinkedAccountSpend?: boolean | cdktf.IResolvable;
  /**
  * A map of labels to assign to the account. The labels must already exist in Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#labels AwsAccount#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#last_updated AwsAccount#last_updated}
  */
  readonly lastUpdated?: string;
  /**
  * The AWS organization service role.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#linked_role AwsAccount#linked_role}
  */
  readonly linkedRole?: string;
  /**
  * The name of the AWS account within Kion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#name AwsAccount#name}
  */
  readonly name: string;
  /**
  * The ID of the billing source containing billing data for this account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#payer_id AwsAccount#payer_id}
  */
  readonly payerId: number;
  /**
  * The ID of the Kion project to place this account within. If empty, the account will be placed within the account cache.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#project_id AwsAccount#project_id}
  */
  readonly projectId?: number;
  /**
  * True to skip periodic access checking on the account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#skip_access_checking AwsAccount#skip_access_checking}
  */
  readonly skipAccessChecking?: boolean | cdktf.IResolvable;
  /**
  * Date when the AWS account will starting submitting payments against a funding source (YYYY-MM). Required if placing an account within a project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#start_datecode AwsAccount#start_datecode}
  */
  readonly startDatecode?: string;
  /**
  * True to keep the account name and email address in Kion in sync with the account name and email address as set in AWS Organization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#use_org_account_info AwsAccount#use_org_account_info}
  */
  readonly useOrgAccountInfo?: boolean | cdktf.IResolvable;
  /**
  * aws_organizational_unit block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#aws_organizational_unit AwsAccount#aws_organizational_unit}
  */
  readonly awsOrganizationalUnit?: AwsAccountAwsOrganizationalUnit;
  /**
  * move_project_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#move_project_settings AwsAccount#move_project_settings}
  */
  readonly moveProjectSettings?: AwsAccountMoveProjectSettings;
}
export interface AwsAccountAwsOrganizationalUnit {
  /**
  * Name of the organizational unit in AWS.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#name AwsAccount#name}
  */
  readonly name: string;
  /**
  * OUID of the AWS Organization unit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#org_unit_id AwsAccount#org_unit_id}
  */
  readonly orgUnitId: string;
}

export function awsAccountAwsOrganizationalUnitToTerraform(struct?: AwsAccountAwsOrganizationalUnitOutputReference | AwsAccountAwsOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    org_unit_id: cdktf.stringToTerraform(struct!.orgUnitId),
  }
}


export function awsAccountAwsOrganizationalUnitToHclTerraform(struct?: AwsAccountAwsOrganizationalUnitOutputReference | AwsAccountAwsOrganizationalUnit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    org_unit_id: {
      value: cdktf.stringToHclTerraform(struct!.orgUnitId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountAwsOrganizationalUnitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountAwsOrganizationalUnit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orgUnitId !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgUnitId = this._orgUnitId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountAwsOrganizationalUnit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._name = undefined;
      this._orgUnitId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._name = value.name;
      this._orgUnitId = value.orgUnitId;
    }
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // org_unit_id - computed: false, optional: false, required: true
  private _orgUnitId?: string; 
  public get orgUnitId() {
    return this.getStringAttribute('org_unit_id');
  }
  public set orgUnitId(value: string) {
    this._orgUnitId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get orgUnitIdInput() {
    return this._orgUnitId;
  }
}
export interface AwsAccountMoveProjectSettings {
  /**
  * One of "move" or "preserve".  If "move", financial history will be moved to the new project beginning on the date specified by the move_datecode parameter.  If "preserve", financial history will be preserved on the current project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#financials AwsAccount#financials}
  */
  readonly financials?: string;
  /**
  * The start date to use when moving financial data in YYYYMM format.  This only applies when financials is set to move.  If provided, only financial data from this date to the current month will be moved to the new project.  If omitted or 0, all financial data will be moved to the new project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#move_datecode AwsAccount#move_datecode}
  */
  readonly moveDatecode?: number;
}

export function awsAccountMoveProjectSettingsToTerraform(struct?: AwsAccountMoveProjectSettingsOutputReference | AwsAccountMoveProjectSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    financials: cdktf.stringToTerraform(struct!.financials),
    move_datecode: cdktf.numberToTerraform(struct!.moveDatecode),
  }
}


export function awsAccountMoveProjectSettingsToHclTerraform(struct?: AwsAccountMoveProjectSettingsOutputReference | AwsAccountMoveProjectSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    financials: {
      value: cdktf.stringToHclTerraform(struct!.financials),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    move_datecode: {
      value: cdktf.numberToHclTerraform(struct!.moveDatecode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AwsAccountMoveProjectSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AwsAccountMoveProjectSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._financials !== undefined) {
      hasAnyValues = true;
      internalValueResult.financials = this._financials;
    }
    if (this._moveDatecode !== undefined) {
      hasAnyValues = true;
      internalValueResult.moveDatecode = this._moveDatecode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AwsAccountMoveProjectSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._financials = undefined;
      this._moveDatecode = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._financials = value.financials;
      this._moveDatecode = value.moveDatecode;
    }
  }

  // financials - computed: false, optional: true, required: false
  private _financials?: string; 
  public get financials() {
    return this.getStringAttribute('financials');
  }
  public set financials(value: string) {
    this._financials = value;
  }
  public resetFinancials() {
    this._financials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get financialsInput() {
    return this._financials;
  }

  // move_datecode - computed: false, optional: true, required: false
  private _moveDatecode?: number; 
  public get moveDatecode() {
    return this.getNumberAttribute('move_datecode');
  }
  public set moveDatecode(value: number) {
    this._moveDatecode = value;
  }
  public resetMoveDatecode() {
    this._moveDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveDatecodeInput() {
    return this._moveDatecode;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account kion_aws_account}
*/
export class AwsAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_aws_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AwsAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AwsAccount to import
  * @param importFromId The id of the existing AwsAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AwsAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_aws_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.30/docs/resources/aws_account kion_aws_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AwsAccountConfig
  */
  public constructor(scope: Construct, id: string, config: AwsAccountConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_aws_account',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.30',
        providerVersionConstraint: '0.3.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountAlias = config.accountAlias;
    this._accountNumber = config.accountNumber;
    this._accountTypeId = config.accountTypeId;
    this._commercialAccountName = config.commercialAccountName;
    this._createGovcloud = config.createGovcloud;
    this._email = config.email;
    this._govAccountName = config.govAccountName;
    this._id = config.id;
    this._includeLinkedAccountSpend = config.includeLinkedAccountSpend;
    this._labels = config.labels;
    this._lastUpdated = config.lastUpdated;
    this._linkedRole = config.linkedRole;
    this._name = config.name;
    this._payerId = config.payerId;
    this._projectId = config.projectId;
    this._skipAccessChecking = config.skipAccessChecking;
    this._startDatecode = config.startDatecode;
    this._useOrgAccountInfo = config.useOrgAccountInfo;
    this._awsOrganizationalUnit.internalValue = config.awsOrganizationalUnit;
    this._moveProjectSettings.internalValue = config.moveProjectSettings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_alias - computed: false, optional: true, required: false
  private _accountAlias?: string; 
  public get accountAlias() {
    return this.getStringAttribute('account_alias');
  }
  public set accountAlias(value: string) {
    this._accountAlias = value;
  }
  public resetAccountAlias() {
    this._accountAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountAliasInput() {
    return this._accountAlias;
  }

  // account_number - computed: true, optional: true, required: false
  private _accountNumber?: string; 
  public get accountNumber() {
    return this.getStringAttribute('account_number');
  }
  public set accountNumber(value: string) {
    this._accountNumber = value;
  }
  public resetAccountNumber() {
    this._accountNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNumberInput() {
    return this._accountNumber;
  }

  // account_type_id - computed: true, optional: true, required: false
  private _accountTypeId?: number; 
  public get accountTypeId() {
    return this.getNumberAttribute('account_type_id');
  }
  public set accountTypeId(value: number) {
    this._accountTypeId = value;
  }
  public resetAccountTypeId() {
    this._accountTypeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountTypeIdInput() {
    return this._accountTypeId;
  }

  // car_external_id - computed: true, optional: false, required: false
  public get carExternalId() {
    return this.getStringAttribute('car_external_id');
  }

  // commercial_account_name - computed: false, optional: true, required: false
  private _commercialAccountName?: string; 
  public get commercialAccountName() {
    return this.getStringAttribute('commercial_account_name');
  }
  public set commercialAccountName(value: string) {
    this._commercialAccountName = value;
  }
  public resetCommercialAccountName() {
    this._commercialAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commercialAccountNameInput() {
    return this._commercialAccountName;
  }

  // create_govcloud - computed: false, optional: true, required: false
  private _createGovcloud?: boolean | cdktf.IResolvable; 
  public get createGovcloud() {
    return this.getBooleanAttribute('create_govcloud');
  }
  public set createGovcloud(value: boolean | cdktf.IResolvable) {
    this._createGovcloud = value;
  }
  public resetCreateGovcloud() {
    this._createGovcloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createGovcloudInput() {
    return this._createGovcloud;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // email - computed: true, optional: true, required: false
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

  // gov_account_name - computed: false, optional: true, required: false
  private _govAccountName?: string; 
  public get govAccountName() {
    return this.getStringAttribute('gov_account_name');
  }
  public set govAccountName(value: string) {
    this._govAccountName = value;
  }
  public resetGovAccountName() {
    this._govAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get govAccountNameInput() {
    return this._govAccountName;
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

  // include_linked_account_spend - computed: true, optional: true, required: false
  private _includeLinkedAccountSpend?: boolean | cdktf.IResolvable; 
  public get includeLinkedAccountSpend() {
    return this.getBooleanAttribute('include_linked_account_spend');
  }
  public set includeLinkedAccountSpend(value: boolean | cdktf.IResolvable) {
    this._includeLinkedAccountSpend = value;
  }
  public resetIncludeLinkedAccountSpend() {
    this._includeLinkedAccountSpend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeLinkedAccountSpendInput() {
    return this._includeLinkedAccountSpend;
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // last_updated - computed: true, optional: true, required: false
  private _lastUpdated?: string; 
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }
  public set lastUpdated(value: string) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
  }

  // linked_account_number - computed: true, optional: false, required: false
  public get linkedAccountNumber() {
    return this.getStringAttribute('linked_account_number');
  }

  // linked_role - computed: false, optional: true, required: false
  private _linkedRole?: string; 
  public get linkedRole() {
    return this.getStringAttribute('linked_role');
  }
  public set linkedRole(value: string) {
    this._linkedRole = value;
  }
  public resetLinkedRole() {
    this._linkedRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedRoleInput() {
    return this._linkedRole;
  }

  // location - computed: true, optional: false, required: false
  public get location() {
    return this.getStringAttribute('location');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // payer_id - computed: false, optional: false, required: true
  private _payerId?: number; 
  public get payerId() {
    return this.getNumberAttribute('payer_id');
  }
  public set payerId(value: number) {
    this._payerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get payerIdInput() {
    return this._payerId;
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_external_id - computed: true, optional: false, required: false
  public get serviceExternalId() {
    return this.getStringAttribute('service_external_id');
  }

  // skip_access_checking - computed: true, optional: true, required: false
  private _skipAccessChecking?: boolean | cdktf.IResolvable; 
  public get skipAccessChecking() {
    return this.getBooleanAttribute('skip_access_checking');
  }
  public set skipAccessChecking(value: boolean | cdktf.IResolvable) {
    this._skipAccessChecking = value;
  }
  public resetSkipAccessChecking() {
    this._skipAccessChecking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipAccessCheckingInput() {
    return this._skipAccessChecking;
  }

  // start_datecode - computed: true, optional: true, required: false
  private _startDatecode?: string; 
  public get startDatecode() {
    return this.getStringAttribute('start_datecode');
  }
  public set startDatecode(value: string) {
    this._startDatecode = value;
  }
  public resetStartDatecode() {
    this._startDatecode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDatecodeInput() {
    return this._startDatecode;
  }

  // use_org_account_info - computed: true, optional: true, required: false
  private _useOrgAccountInfo?: boolean | cdktf.IResolvable; 
  public get useOrgAccountInfo() {
    return this.getBooleanAttribute('use_org_account_info');
  }
  public set useOrgAccountInfo(value: boolean | cdktf.IResolvable) {
    this._useOrgAccountInfo = value;
  }
  public resetUseOrgAccountInfo() {
    this._useOrgAccountInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useOrgAccountInfoInput() {
    return this._useOrgAccountInfo;
  }

  // aws_organizational_unit - computed: false, optional: true, required: false
  private _awsOrganizationalUnit = new AwsAccountAwsOrganizationalUnitOutputReference(this, "aws_organizational_unit");
  public get awsOrganizationalUnit() {
    return this._awsOrganizationalUnit;
  }
  public putAwsOrganizationalUnit(value: AwsAccountAwsOrganizationalUnit) {
    this._awsOrganizationalUnit.internalValue = value;
  }
  public resetAwsOrganizationalUnit() {
    this._awsOrganizationalUnit.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsOrganizationalUnitInput() {
    return this._awsOrganizationalUnit.internalValue;
  }

  // move_project_settings - computed: false, optional: true, required: false
  private _moveProjectSettings = new AwsAccountMoveProjectSettingsOutputReference(this, "move_project_settings");
  public get moveProjectSettings() {
    return this._moveProjectSettings;
  }
  public putMoveProjectSettings(value: AwsAccountMoveProjectSettings) {
    this._moveProjectSettings.internalValue = value;
  }
  public resetMoveProjectSettings() {
    this._moveProjectSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moveProjectSettingsInput() {
    return this._moveProjectSettings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_alias: cdktf.stringToTerraform(this._accountAlias),
      account_number: cdktf.stringToTerraform(this._accountNumber),
      account_type_id: cdktf.numberToTerraform(this._accountTypeId),
      commercial_account_name: cdktf.stringToTerraform(this._commercialAccountName),
      create_govcloud: cdktf.booleanToTerraform(this._createGovcloud),
      email: cdktf.stringToTerraform(this._email),
      gov_account_name: cdktf.stringToTerraform(this._govAccountName),
      id: cdktf.stringToTerraform(this._id),
      include_linked_account_spend: cdktf.booleanToTerraform(this._includeLinkedAccountSpend),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      last_updated: cdktf.stringToTerraform(this._lastUpdated),
      linked_role: cdktf.stringToTerraform(this._linkedRole),
      name: cdktf.stringToTerraform(this._name),
      payer_id: cdktf.numberToTerraform(this._payerId),
      project_id: cdktf.numberToTerraform(this._projectId),
      skip_access_checking: cdktf.booleanToTerraform(this._skipAccessChecking),
      start_datecode: cdktf.stringToTerraform(this._startDatecode),
      use_org_account_info: cdktf.booleanToTerraform(this._useOrgAccountInfo),
      aws_organizational_unit: awsAccountAwsOrganizationalUnitToTerraform(this._awsOrganizationalUnit.internalValue),
      move_project_settings: awsAccountMoveProjectSettingsToTerraform(this._moveProjectSettings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_alias: {
        value: cdktf.stringToHclTerraform(this._accountAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_number: {
        value: cdktf.stringToHclTerraform(this._accountNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_type_id: {
        value: cdktf.numberToHclTerraform(this._accountTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      commercial_account_name: {
        value: cdktf.stringToHclTerraform(this._commercialAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      create_govcloud: {
        value: cdktf.booleanToHclTerraform(this._createGovcloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gov_account_name: {
        value: cdktf.stringToHclTerraform(this._govAccountName),
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
      include_linked_account_spend: {
        value: cdktf.booleanToHclTerraform(this._includeLinkedAccountSpend),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      last_updated: {
        value: cdktf.stringToHclTerraform(this._lastUpdated),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_role: {
        value: cdktf.stringToHclTerraform(this._linkedRole),
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
      payer_id: {
        value: cdktf.numberToHclTerraform(this._payerId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      skip_access_checking: {
        value: cdktf.booleanToHclTerraform(this._skipAccessChecking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      start_datecode: {
        value: cdktf.stringToHclTerraform(this._startDatecode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_org_account_info: {
        value: cdktf.booleanToHclTerraform(this._useOrgAccountInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_organizational_unit: {
        value: awsAccountAwsOrganizationalUnitToHclTerraform(this._awsOrganizationalUnit.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsAccountAwsOrganizationalUnitList",
      },
      move_project_settings: {
        value: awsAccountMoveProjectSettingsToHclTerraform(this._moveProjectSettings.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "AwsAccountMoveProjectSettingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
