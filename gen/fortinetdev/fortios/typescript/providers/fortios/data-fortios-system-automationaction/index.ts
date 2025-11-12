// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemAutomationactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction#id DataFortiosSystemAutomationaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction#name DataFortiosSystemAutomationaction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction#vdomparam DataFortiosSystemAutomationaction#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemAutomationactionEmailTo {
}

export function dataFortiosSystemAutomationactionEmailToToTerraform(struct?: DataFortiosSystemAutomationactionEmailTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAutomationactionEmailToToHclTerraform(struct?: DataFortiosSystemAutomationactionEmailTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAutomationactionEmailToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAutomationactionEmailTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAutomationactionEmailTo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemAutomationactionEmailToList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAutomationactionEmailToOutputReference {
    return new DataFortiosSystemAutomationactionEmailToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAutomationactionFormData {
}

export function dataFortiosSystemAutomationactionFormDataToTerraform(struct?: DataFortiosSystemAutomationactionFormData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAutomationactionFormDataToHclTerraform(struct?: DataFortiosSystemAutomationactionFormData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAutomationactionFormDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAutomationactionFormData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAutomationactionFormData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFortiosSystemAutomationactionFormDataList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAutomationactionFormDataOutputReference {
    return new DataFortiosSystemAutomationactionFormDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAutomationactionHeaders {
}

export function dataFortiosSystemAutomationactionHeadersToTerraform(struct?: DataFortiosSystemAutomationactionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAutomationactionHeadersToHclTerraform(struct?: DataFortiosSystemAutomationactionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAutomationactionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAutomationactionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAutomationactionHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // header - computed: true, optional: false, required: false
  public get header() {
    return this.getStringAttribute('header');
  }
}

export class DataFortiosSystemAutomationactionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAutomationactionHeadersOutputReference {
    return new DataFortiosSystemAutomationactionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAutomationactionHttpHeaders {
}

export function dataFortiosSystemAutomationactionHttpHeadersToTerraform(struct?: DataFortiosSystemAutomationactionHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAutomationactionHttpHeadersToHclTerraform(struct?: DataFortiosSystemAutomationactionHttpHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAutomationactionHttpHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAutomationactionHttpHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAutomationactionHttpHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataFortiosSystemAutomationactionHttpHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAutomationactionHttpHeadersOutputReference {
    return new DataFortiosSystemAutomationactionHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAutomationactionSdnConnector {
}

export function dataFortiosSystemAutomationactionSdnConnectorToTerraform(struct?: DataFortiosSystemAutomationactionSdnConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAutomationactionSdnConnectorToHclTerraform(struct?: DataFortiosSystemAutomationactionSdnConnector): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAutomationactionSdnConnectorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiosSystemAutomationactionSdnConnector | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAutomationactionSdnConnector | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataFortiosSystemAutomationactionSdnConnectorList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAutomationactionSdnConnectorOutputReference {
    return new DataFortiosSystemAutomationactionSdnConnectorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction fortios_system_automationaction}
*/
export class DataFortiosSystemAutomationaction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_automationaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemAutomationaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemAutomationaction to import
  * @param importFromId The id of the existing DataFortiosSystemAutomationaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemAutomationaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_automationaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_automationaction fortios_system_automationaction} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemAutomationactionConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemAutomationactionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_automationaction',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
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
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: false, required: false
  public get accprofile() {
    return this.getStringAttribute('accprofile');
  }

  // action_type - computed: true, optional: false, required: false
  public get actionType() {
    return this.getStringAttribute('action_type');
  }

  // alicloud_access_key_id - computed: true, optional: false, required: false
  public get alicloudAccessKeyId() {
    return this.getStringAttribute('alicloud_access_key_id');
  }

  // alicloud_access_key_secret - computed: true, optional: false, required: false
  public get alicloudAccessKeySecret() {
    return this.getStringAttribute('alicloud_access_key_secret');
  }

  // alicloud_account_id - computed: true, optional: false, required: false
  public get alicloudAccountId() {
    return this.getStringAttribute('alicloud_account_id');
  }

  // alicloud_function - computed: true, optional: false, required: false
  public get alicloudFunction() {
    return this.getStringAttribute('alicloud_function');
  }

  // alicloud_function_authorization - computed: true, optional: false, required: false
  public get alicloudFunctionAuthorization() {
    return this.getStringAttribute('alicloud_function_authorization');
  }

  // alicloud_function_domain - computed: true, optional: false, required: false
  public get alicloudFunctionDomain() {
    return this.getStringAttribute('alicloud_function_domain');
  }

  // alicloud_region - computed: true, optional: false, required: false
  public get alicloudRegion() {
    return this.getStringAttribute('alicloud_region');
  }

  // alicloud_service - computed: true, optional: false, required: false
  public get alicloudService() {
    return this.getStringAttribute('alicloud_service');
  }

  // alicloud_version - computed: true, optional: false, required: false
  public get alicloudVersion() {
    return this.getStringAttribute('alicloud_version');
  }

  // aws_api_id - computed: true, optional: false, required: false
  public get awsApiId() {
    return this.getStringAttribute('aws_api_id');
  }

  // aws_api_key - computed: true, optional: false, required: false
  public get awsApiKey() {
    return this.getStringAttribute('aws_api_key');
  }

  // aws_api_path - computed: true, optional: false, required: false
  public get awsApiPath() {
    return this.getStringAttribute('aws_api_path');
  }

  // aws_api_stage - computed: true, optional: false, required: false
  public get awsApiStage() {
    return this.getStringAttribute('aws_api_stage');
  }

  // aws_domain - computed: true, optional: false, required: false
  public get awsDomain() {
    return this.getStringAttribute('aws_domain');
  }

  // aws_region - computed: true, optional: false, required: false
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }

  // azure_api_key - computed: true, optional: false, required: false
  public get azureApiKey() {
    return this.getStringAttribute('azure_api_key');
  }

  // azure_app - computed: true, optional: false, required: false
  public get azureApp() {
    return this.getStringAttribute('azure_app');
  }

  // azure_domain - computed: true, optional: false, required: false
  public get azureDomain() {
    return this.getStringAttribute('azure_domain');
  }

  // azure_function - computed: true, optional: false, required: false
  public get azureFunction() {
    return this.getStringAttribute('azure_function');
  }

  // azure_function_authorization - computed: true, optional: false, required: false
  public get azureFunctionAuthorization() {
    return this.getStringAttribute('azure_function_authorization');
  }

  // delay - computed: true, optional: false, required: false
  public get delay() {
    return this.getNumberAttribute('delay');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // duration - computed: true, optional: false, required: false
  public get duration() {
    return this.getNumberAttribute('duration');
  }

  // email_body - computed: true, optional: false, required: false
  public get emailBody() {
    return this.getStringAttribute('email_body');
  }

  // email_from - computed: true, optional: false, required: false
  public get emailFrom() {
    return this.getStringAttribute('email_from');
  }

  // email_subject - computed: true, optional: false, required: false
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }

  // email_to - computed: true, optional: false, required: false
  private _emailTo = new DataFortiosSystemAutomationactionEmailToList(this, "email_to", false);
  public get emailTo() {
    return this._emailTo;
  }

  // execute_security_fabric - computed: true, optional: false, required: false
  public get executeSecurityFabric() {
    return this.getStringAttribute('execute_security_fabric');
  }

  // file_only - computed: true, optional: false, required: false
  public get fileOnly() {
    return this.getStringAttribute('file_only');
  }

  // form_data - computed: true, optional: false, required: false
  private _formData = new DataFortiosSystemAutomationactionFormDataList(this, "form_data", false);
  public get formData() {
    return this._formData;
  }

  // forticare_email - computed: true, optional: false, required: false
  public get forticareEmail() {
    return this.getStringAttribute('forticare_email');
  }

  // gcp_function - computed: true, optional: false, required: false
  public get gcpFunction() {
    return this.getStringAttribute('gcp_function');
  }

  // gcp_function_domain - computed: true, optional: false, required: false
  public get gcpFunctionDomain() {
    return this.getStringAttribute('gcp_function_domain');
  }

  // gcp_function_region - computed: true, optional: false, required: false
  public get gcpFunctionRegion() {
    return this.getStringAttribute('gcp_function_region');
  }

  // gcp_project - computed: true, optional: false, required: false
  public get gcpProject() {
    return this.getStringAttribute('gcp_project');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataFortiosSystemAutomationactionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }

  // http_headers - computed: true, optional: false, required: false
  private _httpHeaders = new DataFortiosSystemAutomationactionHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
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

  // log_debug_print - computed: true, optional: false, required: false
  public get logDebugPrint() {
    return this.getStringAttribute('log_debug_print');
  }

  // message - computed: true, optional: false, required: false
  public get message() {
    return this.getStringAttribute('message');
  }

  // message_type - computed: true, optional: false, required: false
  public get messageType() {
    return this.getStringAttribute('message_type');
  }

  // method - computed: true, optional: false, required: false
  public get method() {
    return this.getStringAttribute('method');
  }

  // minimum_interval - computed: true, optional: false, required: false
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
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

  // output_interval - computed: true, optional: false, required: false
  public get outputInterval() {
    return this.getNumberAttribute('output_interval');
  }

  // output_size - computed: true, optional: false, required: false
  public get outputSize() {
    return this.getNumberAttribute('output_size');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // regular_expression - computed: true, optional: false, required: false
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }

  // replacement_message - computed: true, optional: false, required: false
  public get replacementMessage() {
    return this.getStringAttribute('replacement_message');
  }

  // replacemsg_group - computed: true, optional: false, required: false
  public get replacemsgGroup() {
    return this.getStringAttribute('replacemsg_group');
  }

  // required - computed: true, optional: false, required: false
  public get required() {
    return this.getStringAttribute('required');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // sdn_connector - computed: true, optional: false, required: false
  private _sdnConnector = new DataFortiosSystemAutomationactionSdnConnectorList(this, "sdn_connector", false);
  public get sdnConnector() {
    return this._sdnConnector;
  }

  // security_tag - computed: true, optional: false, required: false
  public get securityTag() {
    return this.getStringAttribute('security_tag');
  }

  // system_action - computed: true, optional: false, required: false
  public get systemAction() {
    return this.getStringAttribute('system_action');
  }

  // timeout - computed: true, optional: false, required: false
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }

  // tls_certificate - computed: true, optional: false, required: false
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // verify_host_cert - computed: true, optional: false, required: false
  public get verifyHostCert() {
    return this.getStringAttribute('verify_host_cert');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
