// https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#click_tracking Domain#click_tracking}
  */
  readonly clickTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#dkim_key_size Domain#dkim_key_size}
  */
  readonly dkimKeySize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#dkim_selector Domain#dkim_selector}
  */
  readonly dkimSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#force_dkim_authority Domain#force_dkim_authority}
  */
  readonly forceDkimAuthority?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#id Domain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#name Domain#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#open_tracking Domain#open_tracking}
  */
  readonly openTracking?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#region Domain#region}
  */
  readonly region?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#smtp_password Domain#smtp_password}
  */
  readonly smtpPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#spam_action Domain#spam_action}
  */
  readonly spamAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#web_scheme Domain#web_scheme}
  */
  readonly webScheme?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#wildcard Domain#wildcard}
  */
  readonly wildcard?: boolean | cdktf.IResolvable;
}
export interface DomainReceivingRecords {
}

export function domainReceivingRecordsToTerraform(struct?: DomainReceivingRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainReceivingRecordsToHclTerraform(struct?: DomainReceivingRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainReceivingRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainReceivingRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainReceivingRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getStringAttribute('valid');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DomainReceivingRecordsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DomainReceivingRecordsOutputReference {
    return new DomainReceivingRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainReceivingRecordsSet {
}

export function domainReceivingRecordsSetToTerraform(struct?: DomainReceivingRecordsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainReceivingRecordsSetToHclTerraform(struct?: DomainReceivingRecordsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainReceivingRecordsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainReceivingRecordsSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainReceivingRecordsSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getStringAttribute('priority');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getStringAttribute('valid');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DomainReceivingRecordsSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DomainReceivingRecordsSetOutputReference {
    return new DomainReceivingRecordsSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSendingRecords {
}

export function domainSendingRecordsToTerraform(struct?: DomainSendingRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainSendingRecordsToHclTerraform(struct?: DomainSendingRecords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainSendingRecordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainSendingRecords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSendingRecords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getStringAttribute('valid');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DomainSendingRecordsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DomainSendingRecordsOutputReference {
    return new DomainSendingRecordsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DomainSendingRecordsSet {
}

export function domainSendingRecordsSetToTerraform(struct?: DomainSendingRecordsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function domainSendingRecordsSetToHclTerraform(struct?: DomainSendingRecordsSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DomainSendingRecordsSetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DomainSendingRecordsSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DomainSendingRecordsSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // record_type - computed: true, optional: false, required: false
  public get recordType() {
    return this.getStringAttribute('record_type');
  }

  // valid - computed: true, optional: false, required: false
  public get valid() {
    return this.getStringAttribute('valid');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DomainSendingRecordsSetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DomainSendingRecordsSetOutputReference {
    return new DomainSendingRecordsSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain mailgun_domain}
*/
export class Domain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mailgun_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Domain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Domain to import
  * @param importFromId The id of the existing Domain that should be imported. Refer to the {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Domain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mailgun_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/wgebis/mailgun/0.8.1/docs/resources/domain mailgun_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DomainConfig
  */
  public constructor(scope: Construct, id: string, config: DomainConfig) {
    super(scope, id, {
      terraformResourceType: 'mailgun_domain',
      terraformGeneratorMetadata: {
        providerName: 'mailgun',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clickTracking = config.clickTracking;
    this._dkimKeySize = config.dkimKeySize;
    this._dkimSelector = config.dkimSelector;
    this._forceDkimAuthority = config.forceDkimAuthority;
    this._id = config.id;
    this._name = config.name;
    this._openTracking = config.openTracking;
    this._region = config.region;
    this._smtpPassword = config.smtpPassword;
    this._spamAction = config.spamAction;
    this._webScheme = config.webScheme;
    this._wildcard = config.wildcard;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // click_tracking - computed: false, optional: true, required: false
  private _clickTracking?: boolean | cdktf.IResolvable; 
  public get clickTracking() {
    return this.getBooleanAttribute('click_tracking');
  }
  public set clickTracking(value: boolean | cdktf.IResolvable) {
    this._clickTracking = value;
  }
  public resetClickTracking() {
    this._clickTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickTrackingInput() {
    return this._clickTracking;
  }

  // dkim_key_size - computed: false, optional: true, required: false
  private _dkimKeySize?: number; 
  public get dkimKeySize() {
    return this.getNumberAttribute('dkim_key_size');
  }
  public set dkimKeySize(value: number) {
    this._dkimKeySize = value;
  }
  public resetDkimKeySize() {
    this._dkimKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dkimKeySizeInput() {
    return this._dkimKeySize;
  }

  // dkim_selector - computed: false, optional: true, required: false
  private _dkimSelector?: string; 
  public get dkimSelector() {
    return this.getStringAttribute('dkim_selector');
  }
  public set dkimSelector(value: string) {
    this._dkimSelector = value;
  }
  public resetDkimSelector() {
    this._dkimSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dkimSelectorInput() {
    return this._dkimSelector;
  }

  // force_dkim_authority - computed: false, optional: true, required: false
  private _forceDkimAuthority?: boolean | cdktf.IResolvable; 
  public get forceDkimAuthority() {
    return this.getBooleanAttribute('force_dkim_authority');
  }
  public set forceDkimAuthority(value: boolean | cdktf.IResolvable) {
    this._forceDkimAuthority = value;
  }
  public resetForceDkimAuthority() {
    this._forceDkimAuthority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceDkimAuthorityInput() {
    return this._forceDkimAuthority;
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

  // open_tracking - computed: false, optional: true, required: false
  private _openTracking?: boolean | cdktf.IResolvable; 
  public get openTracking() {
    return this.getBooleanAttribute('open_tracking');
  }
  public set openTracking(value: boolean | cdktf.IResolvable) {
    this._openTracking = value;
  }
  public resetOpenTracking() {
    this._openTracking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openTrackingInput() {
    return this._openTracking;
  }

  // receiving_records - computed: true, optional: false, required: false
  private _receivingRecords = new DomainReceivingRecordsList(this, "receiving_records", false);
  public get receivingRecords() {
    return this._receivingRecords;
  }

  // receiving_records_set - computed: true, optional: false, required: false
  private _receivingRecordsSet = new DomainReceivingRecordsSetList(this, "receiving_records_set", true);
  public get receivingRecordsSet() {
    return this._receivingRecordsSet;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sending_records - computed: true, optional: false, required: false
  private _sendingRecords = new DomainSendingRecordsList(this, "sending_records", false);
  public get sendingRecords() {
    return this._sendingRecords;
  }

  // sending_records_set - computed: true, optional: false, required: false
  private _sendingRecordsSet = new DomainSendingRecordsSetList(this, "sending_records_set", true);
  public get sendingRecordsSet() {
    return this._sendingRecordsSet;
  }

  // smtp_login - computed: true, optional: false, required: false
  public get smtpLogin() {
    return this.getStringAttribute('smtp_login');
  }

  // smtp_password - computed: false, optional: true, required: false
  private _smtpPassword?: string; 
  public get smtpPassword() {
    return this.getStringAttribute('smtp_password');
  }
  public set smtpPassword(value: string) {
    this._smtpPassword = value;
  }
  public resetSmtpPassword() {
    this._smtpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPasswordInput() {
    return this._smtpPassword;
  }

  // spam_action - computed: false, optional: true, required: false
  private _spamAction?: string; 
  public get spamAction() {
    return this.getStringAttribute('spam_action');
  }
  public set spamAction(value: string) {
    this._spamAction = value;
  }
  public resetSpamAction() {
    this._spamAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamActionInput() {
    return this._spamAction;
  }

  // web_scheme - computed: false, optional: true, required: false
  private _webScheme?: string; 
  public get webScheme() {
    return this.getStringAttribute('web_scheme');
  }
  public set webScheme(value: string) {
    this._webScheme = value;
  }
  public resetWebScheme() {
    this._webScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webSchemeInput() {
    return this._webScheme;
  }

  // wildcard - computed: false, optional: true, required: false
  private _wildcard?: boolean | cdktf.IResolvable; 
  public get wildcard() {
    return this.getBooleanAttribute('wildcard');
  }
  public set wildcard(value: boolean | cdktf.IResolvable) {
    this._wildcard = value;
  }
  public resetWildcard() {
    this._wildcard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardInput() {
    return this._wildcard;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      click_tracking: cdktf.booleanToTerraform(this._clickTracking),
      dkim_key_size: cdktf.numberToTerraform(this._dkimKeySize),
      dkim_selector: cdktf.stringToTerraform(this._dkimSelector),
      force_dkim_authority: cdktf.booleanToTerraform(this._forceDkimAuthority),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      open_tracking: cdktf.booleanToTerraform(this._openTracking),
      region: cdktf.stringToTerraform(this._region),
      smtp_password: cdktf.stringToTerraform(this._smtpPassword),
      spam_action: cdktf.stringToTerraform(this._spamAction),
      web_scheme: cdktf.stringToTerraform(this._webScheme),
      wildcard: cdktf.booleanToTerraform(this._wildcard),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      click_tracking: {
        value: cdktf.booleanToHclTerraform(this._clickTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dkim_key_size: {
        value: cdktf.numberToHclTerraform(this._dkimKeySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dkim_selector: {
        value: cdktf.stringToHclTerraform(this._dkimSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_dkim_authority: {
        value: cdktf.booleanToHclTerraform(this._forceDkimAuthority),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      open_tracking: {
        value: cdktf.booleanToHclTerraform(this._openTracking),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smtp_password: {
        value: cdktf.stringToHclTerraform(this._smtpPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      spam_action: {
        value: cdktf.stringToHclTerraform(this._spamAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      web_scheme: {
        value: cdktf.stringToHclTerraform(this._webScheme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard: {
        value: cdktf.booleanToHclTerraform(this._wildcard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
