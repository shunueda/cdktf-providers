// https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCheckpointManagementResourceSmtpConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp#id DataCheckpointManagementResourceSmtp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Object name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp#name DataCheckpointManagementResourceSmtp#name}
  */
  readonly name?: string;
  /**
  * Object uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp#uid DataCheckpointManagementResourceSmtp#uid}
  */
  readonly uid?: string;
}
export interface DataCheckpointManagementResourceSmtpAction1CustomField {
}

export function dataCheckpointManagementResourceSmtpAction1CustomFieldToTerraform(struct?: DataCheckpointManagementResourceSmtpAction1CustomField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceSmtpAction1CustomFieldToHclTerraform(struct?: DataCheckpointManagementResourceSmtpAction1CustomField): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceSmtpAction1CustomFieldOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceSmtpAction1CustomField | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceSmtpAction1CustomField | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // field - computed: true, optional: false, required: false
  public get field() {
    return this.getStringAttribute('field');
  }

  // original - computed: true, optional: false, required: false
  public get original() {
    return this.getStringAttribute('original');
  }

  // rewritten - computed: true, optional: false, required: false
  public get rewritten() {
    return this.getStringAttribute('rewritten');
  }
}

export class DataCheckpointManagementResourceSmtpAction1CustomFieldList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceSmtpAction1CustomFieldOutputReference {
    return new DataCheckpointManagementResourceSmtpAction1CustomFieldOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceSmtpAction1Recipient {
}

export function dataCheckpointManagementResourceSmtpAction1RecipientToTerraform(struct?: DataCheckpointManagementResourceSmtpAction1Recipient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceSmtpAction1RecipientToHclTerraform(struct?: DataCheckpointManagementResourceSmtpAction1Recipient): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceSmtpAction1RecipientOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceSmtpAction1Recipient | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceSmtpAction1Recipient | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // original - computed: true, optional: false, required: false
  public get original() {
    return this.getStringAttribute('original');
  }

  // rewritten - computed: true, optional: false, required: false
  public get rewritten() {
    return this.getStringAttribute('rewritten');
  }
}

export class DataCheckpointManagementResourceSmtpAction1RecipientList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceSmtpAction1RecipientOutputReference {
    return new DataCheckpointManagementResourceSmtpAction1RecipientOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceSmtpAction1Sender {
}

export function dataCheckpointManagementResourceSmtpAction1SenderToTerraform(struct?: DataCheckpointManagementResourceSmtpAction1Sender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceSmtpAction1SenderToHclTerraform(struct?: DataCheckpointManagementResourceSmtpAction1Sender): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceSmtpAction1SenderOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceSmtpAction1Sender | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceSmtpAction1Sender | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // original - computed: true, optional: false, required: false
  public get original() {
    return this.getStringAttribute('original');
  }

  // rewritten - computed: true, optional: false, required: false
  public get rewritten() {
    return this.getStringAttribute('rewritten');
  }
}

export class DataCheckpointManagementResourceSmtpAction1SenderList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceSmtpAction1SenderOutputReference {
    return new DataCheckpointManagementResourceSmtpAction1SenderOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceSmtpAction1 {
}

export function dataCheckpointManagementResourceSmtpAction1ToTerraform(struct?: DataCheckpointManagementResourceSmtpAction1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceSmtpAction1ToHclTerraform(struct?: DataCheckpointManagementResourceSmtpAction1): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceSmtpAction1OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceSmtpAction1 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceSmtpAction1 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // custom_field - computed: true, optional: false, required: false
  private _customField = new DataCheckpointManagementResourceSmtpAction1CustomFieldList(this, "custom_field", false);
  public get customField() {
    return this._customField;
  }

  // recipient - computed: true, optional: false, required: false
  private _recipient = new DataCheckpointManagementResourceSmtpAction1RecipientList(this, "recipient", false);
  public get recipient() {
    return this._recipient;
  }

  // sender - computed: true, optional: false, required: false
  private _sender = new DataCheckpointManagementResourceSmtpAction1SenderList(this, "sender", false);
  public get sender() {
    return this._sender;
  }
}

export class DataCheckpointManagementResourceSmtpAction1List extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceSmtpAction1OutputReference {
    return new DataCheckpointManagementResourceSmtpAction1OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceSmtpAction2 {
}

export function dataCheckpointManagementResourceSmtpAction2ToTerraform(struct?: DataCheckpointManagementResourceSmtpAction2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceSmtpAction2ToHclTerraform(struct?: DataCheckpointManagementResourceSmtpAction2): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceSmtpAction2OutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceSmtpAction2 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceSmtpAction2 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_characters - computed: true, optional: false, required: false
  public get allowedCharacters() {
    return this.getStringAttribute('allowed_characters');
  }

  // mail_capacity - computed: true, optional: false, required: false
  public get mailCapacity() {
    return this.getNumberAttribute('mail_capacity');
  }

  // strip_activex_tags - computed: true, optional: false, required: false
  public get stripActivexTags() {
    return this.getBooleanAttribute('strip_activex_tags');
  }

  // strip_applet_tags - computed: true, optional: false, required: false
  public get stripAppletTags() {
    return this.getBooleanAttribute('strip_applet_tags');
  }

  // strip_file_by_name - computed: true, optional: false, required: false
  public get stripFileByName() {
    return this.getStringAttribute('strip_file_by_name');
  }

  // strip_ftp_links - computed: true, optional: false, required: false
  public get stripFtpLinks() {
    return this.getBooleanAttribute('strip_ftp_links');
  }

  // strip_mime_of_type - computed: true, optional: false, required: false
  public get stripMimeOfType() {
    return this.getStringAttribute('strip_mime_of_type');
  }

  // strip_port_strings - computed: true, optional: false, required: false
  public get stripPortStrings() {
    return this.getBooleanAttribute('strip_port_strings');
  }

  // strip_script_tags - computed: true, optional: false, required: false
  public get stripScriptTags() {
    return this.getBooleanAttribute('strip_script_tags');
  }
}

export class DataCheckpointManagementResourceSmtpAction2List extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceSmtpAction2OutputReference {
    return new DataCheckpointManagementResourceSmtpAction2OutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataCheckpointManagementResourceSmtpCvp {
}

export function dataCheckpointManagementResourceSmtpCvpToTerraform(struct?: DataCheckpointManagementResourceSmtpCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataCheckpointManagementResourceSmtpCvpToHclTerraform(struct?: DataCheckpointManagementResourceSmtpCvp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataCheckpointManagementResourceSmtpCvpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataCheckpointManagementResourceSmtpCvp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataCheckpointManagementResourceSmtpCvp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_to_modify_content - computed: true, optional: false, required: false
  public get allowedToModifyContent() {
    return this.getBooleanAttribute('allowed_to_modify_content');
  }

  // enable_cvp - computed: true, optional: false, required: false
  public get enableCvp() {
    return this.getBooleanAttribute('enable_cvp');
  }

  // reply_order - computed: true, optional: false, required: false
  public get replyOrder() {
    return this.getStringAttribute('reply_order');
  }

  // server - computed: true, optional: false, required: false
  public get server() {
    return this.getStringAttribute('server');
  }
}

export class DataCheckpointManagementResourceSmtpCvpList extends cdktf.ComplexList {

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
  public get(index: number): DataCheckpointManagementResourceSmtpCvpOutputReference {
    return new DataCheckpointManagementResourceSmtpCvpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp checkpoint_management_resource_smtp}
*/
export class DataCheckpointManagementResourceSmtp extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "checkpoint_management_resource_smtp";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCheckpointManagementResourceSmtp resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCheckpointManagementResourceSmtp to import
  * @param importFromId The id of the existing DataCheckpointManagementResourceSmtp that should be imported. Refer to the {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCheckpointManagementResourceSmtp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "checkpoint_management_resource_smtp", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/checkpointsw/checkpoint/2.12.0/docs/data-sources/management_resource_smtp checkpoint_management_resource_smtp} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCheckpointManagementResourceSmtpConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCheckpointManagementResourceSmtpConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'checkpoint_management_resource_smtp',
      terraformGeneratorMetadata: {
        providerName: 'checkpoint',
        providerVersion: '2.12.0',
        providerVersionConstraint: '2.12.0'
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
    this._uid = config.uid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action_1 - computed: true, optional: false, required: false
  private _action1 = new DataCheckpointManagementResourceSmtpAction1List(this, "action_1", false);
  public get action1() {
    return this._action1;
  }

  // action_2 - computed: true, optional: false, required: false
  private _action2 = new DataCheckpointManagementResourceSmtpAction2List(this, "action_2", false);
  public get action2() {
    return this._action2;
  }

  // check_rulebase_with_new_destination - computed: true, optional: false, required: false
  public get checkRulebaseWithNewDestination() {
    return this.getBooleanAttribute('check_rulebase_with_new_destination');
  }

  // color - computed: true, optional: false, required: false
  public get color() {
    return this.getStringAttribute('color');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // cvp - computed: true, optional: false, required: false
  private _cvp = new DataCheckpointManagementResourceSmtpCvpList(this, "cvp", false);
  public get cvp() {
    return this._cvp;
  }

  // deliver_messages_using_dns_mx_records - computed: true, optional: false, required: false
  public get deliverMessagesUsingDnsMxRecords() {
    return this.getBooleanAttribute('deliver_messages_using_dns_mx_records');
  }

  // error_check_rulebase_with_new_destination - computed: true, optional: false, required: false
  public get errorCheckRulebaseWithNewDestination() {
    return this.getBooleanAttribute('error_check_rulebase_with_new_destination');
  }

  // error_deliver_messages_using_dns_mx_records - computed: true, optional: false, required: false
  public get errorDeliverMessagesUsingDnsMxRecords() {
    return this.getBooleanAttribute('error_deliver_messages_using_dns_mx_records');
  }

  // error_mail_delivery_server - computed: true, optional: false, required: false
  public get errorMailDeliveryServer() {
    return this.getStringAttribute('error_mail_delivery_server');
  }

  // exception_track - computed: true, optional: false, required: false
  public get exceptionTrack() {
    return this.getStringAttribute('exception_track');
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

  // mail_delivery_server - computed: true, optional: false, required: false
  public get mailDeliveryServer() {
    return this.getStringAttribute('mail_delivery_server');
  }

  // match - computed: true, optional: false, required: false
  private _match = new cdktf.StringMap(this, "match");
  public get match() {
    return this._match;
  }

  // name - computed: false, optional: true, required: false
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

  // notify_sender_on_error - computed: true, optional: false, required: false
  public get notifySenderOnError() {
    return this.getBooleanAttribute('notify_sender_on_error');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uid: cdktf.stringToTerraform(this._uid),
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
      uid: {
        value: cdktf.stringToHclTerraform(this._uid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
