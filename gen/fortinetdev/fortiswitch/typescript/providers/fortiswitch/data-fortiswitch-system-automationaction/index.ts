// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_automationaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemAutomationactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_automationaction#id DataFortiswitchSystemAutomationaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_automationaction#name DataFortiswitchSystemAutomationaction#name}
  */
  readonly name: string;
}
export interface DataFortiswitchSystemAutomationactionEmailTo {
}

export function dataFortiswitchSystemAutomationactionEmailToToTerraform(struct?: DataFortiswitchSystemAutomationactionEmailTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemAutomationactionEmailToToHclTerraform(struct?: DataFortiswitchSystemAutomationactionEmailTo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemAutomationactionEmailToOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchSystemAutomationactionEmailTo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemAutomationactionEmailTo | undefined) {
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

export class DataFortiswitchSystemAutomationactionEmailToList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemAutomationactionEmailToOutputReference {
    return new DataFortiswitchSystemAutomationactionEmailToOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiswitchSystemAutomationactionHeaders {
}

export function dataFortiswitchSystemAutomationactionHeadersToTerraform(struct?: DataFortiswitchSystemAutomationactionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemAutomationactionHeadersToHclTerraform(struct?: DataFortiswitchSystemAutomationactionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemAutomationactionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataFortiswitchSystemAutomationactionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemAutomationactionHeaders | undefined) {
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

export class DataFortiswitchSystemAutomationactionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiswitchSystemAutomationactionHeadersOutputReference {
    return new DataFortiswitchSystemAutomationactionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_automationaction fortiswitch_system_automationaction}
*/
export class DataFortiswitchSystemAutomationaction extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_automationaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemAutomationaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemAutomationaction to import
  * @param importFromId The id of the existing DataFortiswitchSystemAutomationaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_automationaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemAutomationaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_automationaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_automationaction fortiswitch_system_automationaction} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemAutomationactionConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemAutomationactionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_automationaction',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6',
        providerVersionConstraint: '1.1.6'
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
  private _emailTo = new DataFortiswitchSystemAutomationactionEmailToList(this, "email_to", false);
  public get emailTo() {
    return this._emailTo;
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
  private _headers = new DataFortiswitchSystemAutomationactionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_body - computed: true, optional: false, required: false
  public get httpBody() {
    return this.getStringAttribute('http_body');
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

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // script - computed: true, optional: false, required: false
  public get script() {
    return this.getStringAttribute('script');
  }

  // snmp_trap - computed: true, optional: false, required: false
  public get snmpTrap() {
    return this.getStringAttribute('snmp_trap');
  }

  // uri - computed: true, optional: false, required: false
  public get uri() {
    return this.getStringAttribute('uri');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
