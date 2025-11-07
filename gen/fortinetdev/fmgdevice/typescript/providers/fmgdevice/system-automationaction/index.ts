// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAutomationactionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#accprofile SystemAutomationaction#accprofile}
  */
  readonly accprofile?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#action_type SystemAutomationaction#action_type}
  */
  readonly actionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_access_key_id SystemAutomationaction#alicloud_access_key_id}
  */
  readonly alicloudAccessKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_access_key_secret SystemAutomationaction#alicloud_access_key_secret}
  */
  readonly alicloudAccessKeySecret?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_account_id SystemAutomationaction#alicloud_account_id}
  */
  readonly alicloudAccountId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_function SystemAutomationaction#alicloud_function}
  */
  readonly alicloudFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_function_authorization SystemAutomationaction#alicloud_function_authorization}
  */
  readonly alicloudFunctionAuthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_function_domain SystemAutomationaction#alicloud_function_domain}
  */
  readonly alicloudFunctionDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_region SystemAutomationaction#alicloud_region}
  */
  readonly alicloudRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_service SystemAutomationaction#alicloud_service}
  */
  readonly alicloudService?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#alicloud_version SystemAutomationaction#alicloud_version}
  */
  readonly alicloudVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#aws_api_id SystemAutomationaction#aws_api_id}
  */
  readonly awsApiId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#aws_api_key SystemAutomationaction#aws_api_key}
  */
  readonly awsApiKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#aws_api_path SystemAutomationaction#aws_api_path}
  */
  readonly awsApiPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#aws_api_stage SystemAutomationaction#aws_api_stage}
  */
  readonly awsApiStage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#aws_domain SystemAutomationaction#aws_domain}
  */
  readonly awsDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#aws_region SystemAutomationaction#aws_region}
  */
  readonly awsRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#azure_api_key SystemAutomationaction#azure_api_key}
  */
  readonly azureApiKey?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#azure_app SystemAutomationaction#azure_app}
  */
  readonly azureApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#azure_domain SystemAutomationaction#azure_domain}
  */
  readonly azureDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#azure_function SystemAutomationaction#azure_function}
  */
  readonly azureFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#azure_function_authorization SystemAutomationaction#azure_function_authorization}
  */
  readonly azureFunctionAuthorization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#delay SystemAutomationaction#delay}
  */
  readonly delay?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#description SystemAutomationaction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#device_name SystemAutomationaction#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#duration SystemAutomationaction#duration}
  */
  readonly duration?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#dynamic_sort_subtable SystemAutomationaction#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#email_body SystemAutomationaction#email_body}
  */
  readonly emailBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#email_from SystemAutomationaction#email_from}
  */
  readonly emailFrom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#email_subject SystemAutomationaction#email_subject}
  */
  readonly emailSubject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#email_to SystemAutomationaction#email_to}
  */
  readonly emailTo?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#execute_security_fabric SystemAutomationaction#execute_security_fabric}
  */
  readonly executeSecurityFabric?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#forticare_email SystemAutomationaction#forticare_email}
  */
  readonly forticareEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#gcp_function SystemAutomationaction#gcp_function}
  */
  readonly gcpFunction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#gcp_function_domain SystemAutomationaction#gcp_function_domain}
  */
  readonly gcpFunctionDomain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#gcp_function_region SystemAutomationaction#gcp_function_region}
  */
  readonly gcpFunctionRegion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#gcp_project SystemAutomationaction#gcp_project}
  */
  readonly gcpProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#headers SystemAutomationaction#headers}
  */
  readonly headers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#http_body SystemAutomationaction#http_body}
  */
  readonly httpBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#id SystemAutomationaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#message SystemAutomationaction#message}
  */
  readonly message?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#message_type SystemAutomationaction#message_type}
  */
  readonly messageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#method SystemAutomationaction#method}
  */
  readonly method?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#minimum_interval SystemAutomationaction#minimum_interval}
  */
  readonly minimumInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#name SystemAutomationaction#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#output_size SystemAutomationaction#output_size}
  */
  readonly outputSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#port SystemAutomationaction#port}
  */
  readonly port?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#protocol SystemAutomationaction#protocol}
  */
  readonly protocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#regular_expression SystemAutomationaction#regular_expression}
  */
  readonly regularExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#replacement_message SystemAutomationaction#replacement_message}
  */
  readonly replacementMessage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#replacemsg_group SystemAutomationaction#replacemsg_group}
  */
  readonly replacemsgGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#required SystemAutomationaction#required}
  */
  readonly required?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#script SystemAutomationaction#script}
  */
  readonly script?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#sdn_connector SystemAutomationaction#sdn_connector}
  */
  readonly sdnConnector?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#security_tag SystemAutomationaction#security_tag}
  */
  readonly securityTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#system_action SystemAutomationaction#system_action}
  */
  readonly systemAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#timeout SystemAutomationaction#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#tls_certificate SystemAutomationaction#tls_certificate}
  */
  readonly tlsCertificate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#uri SystemAutomationaction#uri}
  */
  readonly uri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#verify_host_cert SystemAutomationaction#verify_host_cert}
  */
  readonly verifyHostCert?: string;
  /**
  * http_headers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#http_headers SystemAutomationaction#http_headers}
  */
  readonly httpHeaders?: SystemAutomationactionHttpHeaders[] | cdktf.IResolvable;
}
export interface SystemAutomationactionHttpHeaders {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#id SystemAutomationaction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#key SystemAutomationaction#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#value SystemAutomationaction#value}
  */
  readonly value?: string;
}

export function systemAutomationactionHttpHeadersToTerraform(struct?: SystemAutomationactionHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.numberToTerraform(struct!.id),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function systemAutomationactionHttpHeadersToHclTerraform(struct?: SystemAutomationactionHttpHeaders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAutomationactionHttpHeadersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SystemAutomationactionHttpHeaders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAutomationactionHttpHeaders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // id - computed: false, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class SystemAutomationactionHttpHeadersList extends cdktf.ComplexList {
  public internalValue? : SystemAutomationactionHttpHeaders[] | cdktf.IResolvable

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
  public get(index: number): SystemAutomationactionHttpHeadersOutputReference {
    return new SystemAutomationactionHttpHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction fmgdevice_system_automationaction}
*/
export class SystemAutomationaction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_system_automationaction";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAutomationaction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAutomationaction to import
  * @param importFromId The id of the existing SystemAutomationaction that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAutomationaction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_system_automationaction", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/system_automationaction fmgdevice_system_automationaction} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAutomationactionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemAutomationactionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_system_automationaction',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accprofile = config.accprofile;
    this._actionType = config.actionType;
    this._alicloudAccessKeyId = config.alicloudAccessKeyId;
    this._alicloudAccessKeySecret = config.alicloudAccessKeySecret;
    this._alicloudAccountId = config.alicloudAccountId;
    this._alicloudFunction = config.alicloudFunction;
    this._alicloudFunctionAuthorization = config.alicloudFunctionAuthorization;
    this._alicloudFunctionDomain = config.alicloudFunctionDomain;
    this._alicloudRegion = config.alicloudRegion;
    this._alicloudService = config.alicloudService;
    this._alicloudVersion = config.alicloudVersion;
    this._awsApiId = config.awsApiId;
    this._awsApiKey = config.awsApiKey;
    this._awsApiPath = config.awsApiPath;
    this._awsApiStage = config.awsApiStage;
    this._awsDomain = config.awsDomain;
    this._awsRegion = config.awsRegion;
    this._azureApiKey = config.azureApiKey;
    this._azureApp = config.azureApp;
    this._azureDomain = config.azureDomain;
    this._azureFunction = config.azureFunction;
    this._azureFunctionAuthorization = config.azureFunctionAuthorization;
    this._delay = config.delay;
    this._description = config.description;
    this._deviceName = config.deviceName;
    this._duration = config.duration;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._emailBody = config.emailBody;
    this._emailFrom = config.emailFrom;
    this._emailSubject = config.emailSubject;
    this._emailTo = config.emailTo;
    this._executeSecurityFabric = config.executeSecurityFabric;
    this._forticareEmail = config.forticareEmail;
    this._gcpFunction = config.gcpFunction;
    this._gcpFunctionDomain = config.gcpFunctionDomain;
    this._gcpFunctionRegion = config.gcpFunctionRegion;
    this._gcpProject = config.gcpProject;
    this._headers = config.headers;
    this._httpBody = config.httpBody;
    this._id = config.id;
    this._message = config.message;
    this._messageType = config.messageType;
    this._method = config.method;
    this._minimumInterval = config.minimumInterval;
    this._name = config.name;
    this._outputSize = config.outputSize;
    this._port = config.port;
    this._protocol = config.protocol;
    this._regularExpression = config.regularExpression;
    this._replacementMessage = config.replacementMessage;
    this._replacemsgGroup = config.replacemsgGroup;
    this._required = config.required;
    this._script = config.script;
    this._sdnConnector = config.sdnConnector;
    this._securityTag = config.securityTag;
    this._systemAction = config.systemAction;
    this._timeout = config.timeout;
    this._tlsCertificate = config.tlsCertificate;
    this._uri = config.uri;
    this._verifyHostCert = config.verifyHostCert;
    this._httpHeaders.internalValue = config.httpHeaders;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accprofile - computed: true, optional: true, required: false
  private _accprofile?: string[]; 
  public get accprofile() {
    return cdktf.Fn.tolist(this.getListAttribute('accprofile'));
  }
  public set accprofile(value: string[]) {
    this._accprofile = value;
  }
  public resetAccprofile() {
    this._accprofile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accprofileInput() {
    return this._accprofile;
  }

  // action_type - computed: true, optional: true, required: false
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  public resetActionType() {
    this._actionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // alicloud_access_key_id - computed: false, optional: true, required: false
  private _alicloudAccessKeyId?: string; 
  public get alicloudAccessKeyId() {
    return this.getStringAttribute('alicloud_access_key_id');
  }
  public set alicloudAccessKeyId(value: string) {
    this._alicloudAccessKeyId = value;
  }
  public resetAlicloudAccessKeyId() {
    this._alicloudAccessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudAccessKeyIdInput() {
    return this._alicloudAccessKeyId;
  }

  // alicloud_access_key_secret - computed: true, optional: true, required: false
  private _alicloudAccessKeySecret?: string[]; 
  public get alicloudAccessKeySecret() {
    return cdktf.Fn.tolist(this.getListAttribute('alicloud_access_key_secret'));
  }
  public set alicloudAccessKeySecret(value: string[]) {
    this._alicloudAccessKeySecret = value;
  }
  public resetAlicloudAccessKeySecret() {
    this._alicloudAccessKeySecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudAccessKeySecretInput() {
    return this._alicloudAccessKeySecret;
  }

  // alicloud_account_id - computed: false, optional: true, required: false
  private _alicloudAccountId?: string; 
  public get alicloudAccountId() {
    return this.getStringAttribute('alicloud_account_id');
  }
  public set alicloudAccountId(value: string) {
    this._alicloudAccountId = value;
  }
  public resetAlicloudAccountId() {
    this._alicloudAccountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudAccountIdInput() {
    return this._alicloudAccountId;
  }

  // alicloud_function - computed: false, optional: true, required: false
  private _alicloudFunction?: string; 
  public get alicloudFunction() {
    return this.getStringAttribute('alicloud_function');
  }
  public set alicloudFunction(value: string) {
    this._alicloudFunction = value;
  }
  public resetAlicloudFunction() {
    this._alicloudFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudFunctionInput() {
    return this._alicloudFunction;
  }

  // alicloud_function_authorization - computed: true, optional: true, required: false
  private _alicloudFunctionAuthorization?: string; 
  public get alicloudFunctionAuthorization() {
    return this.getStringAttribute('alicloud_function_authorization');
  }
  public set alicloudFunctionAuthorization(value: string) {
    this._alicloudFunctionAuthorization = value;
  }
  public resetAlicloudFunctionAuthorization() {
    this._alicloudFunctionAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudFunctionAuthorizationInput() {
    return this._alicloudFunctionAuthorization;
  }

  // alicloud_function_domain - computed: false, optional: true, required: false
  private _alicloudFunctionDomain?: string; 
  public get alicloudFunctionDomain() {
    return this.getStringAttribute('alicloud_function_domain');
  }
  public set alicloudFunctionDomain(value: string) {
    this._alicloudFunctionDomain = value;
  }
  public resetAlicloudFunctionDomain() {
    this._alicloudFunctionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudFunctionDomainInput() {
    return this._alicloudFunctionDomain;
  }

  // alicloud_region - computed: false, optional: true, required: false
  private _alicloudRegion?: string; 
  public get alicloudRegion() {
    return this.getStringAttribute('alicloud_region');
  }
  public set alicloudRegion(value: string) {
    this._alicloudRegion = value;
  }
  public resetAlicloudRegion() {
    this._alicloudRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudRegionInput() {
    return this._alicloudRegion;
  }

  // alicloud_service - computed: false, optional: true, required: false
  private _alicloudService?: string; 
  public get alicloudService() {
    return this.getStringAttribute('alicloud_service');
  }
  public set alicloudService(value: string) {
    this._alicloudService = value;
  }
  public resetAlicloudService() {
    this._alicloudService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudServiceInput() {
    return this._alicloudService;
  }

  // alicloud_version - computed: false, optional: true, required: false
  private _alicloudVersion?: string; 
  public get alicloudVersion() {
    return this.getStringAttribute('alicloud_version');
  }
  public set alicloudVersion(value: string) {
    this._alicloudVersion = value;
  }
  public resetAlicloudVersion() {
    this._alicloudVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alicloudVersionInput() {
    return this._alicloudVersion;
  }

  // aws_api_id - computed: false, optional: true, required: false
  private _awsApiId?: string; 
  public get awsApiId() {
    return this.getStringAttribute('aws_api_id');
  }
  public set awsApiId(value: string) {
    this._awsApiId = value;
  }
  public resetAwsApiId() {
    this._awsApiId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiIdInput() {
    return this._awsApiId;
  }

  // aws_api_key - computed: true, optional: true, required: false
  private _awsApiKey?: string[]; 
  public get awsApiKey() {
    return cdktf.Fn.tolist(this.getListAttribute('aws_api_key'));
  }
  public set awsApiKey(value: string[]) {
    this._awsApiKey = value;
  }
  public resetAwsApiKey() {
    this._awsApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiKeyInput() {
    return this._awsApiKey;
  }

  // aws_api_path - computed: false, optional: true, required: false
  private _awsApiPath?: string; 
  public get awsApiPath() {
    return this.getStringAttribute('aws_api_path');
  }
  public set awsApiPath(value: string) {
    this._awsApiPath = value;
  }
  public resetAwsApiPath() {
    this._awsApiPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiPathInput() {
    return this._awsApiPath;
  }

  // aws_api_stage - computed: false, optional: true, required: false
  private _awsApiStage?: string; 
  public get awsApiStage() {
    return this.getStringAttribute('aws_api_stage');
  }
  public set awsApiStage(value: string) {
    this._awsApiStage = value;
  }
  public resetAwsApiStage() {
    this._awsApiStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsApiStageInput() {
    return this._awsApiStage;
  }

  // aws_domain - computed: false, optional: true, required: false
  private _awsDomain?: string; 
  public get awsDomain() {
    return this.getStringAttribute('aws_domain');
  }
  public set awsDomain(value: string) {
    this._awsDomain = value;
  }
  public resetAwsDomain() {
    this._awsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsDomainInput() {
    return this._awsDomain;
  }

  // aws_region - computed: false, optional: true, required: false
  private _awsRegion?: string; 
  public get awsRegion() {
    return this.getStringAttribute('aws_region');
  }
  public set awsRegion(value: string) {
    this._awsRegion = value;
  }
  public resetAwsRegion() {
    this._awsRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsRegionInput() {
    return this._awsRegion;
  }

  // azure_api_key - computed: true, optional: true, required: false
  private _azureApiKey?: string[]; 
  public get azureApiKey() {
    return cdktf.Fn.tolist(this.getListAttribute('azure_api_key'));
  }
  public set azureApiKey(value: string[]) {
    this._azureApiKey = value;
  }
  public resetAzureApiKey() {
    this._azureApiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureApiKeyInput() {
    return this._azureApiKey;
  }

  // azure_app - computed: false, optional: true, required: false
  private _azureApp?: string; 
  public get azureApp() {
    return this.getStringAttribute('azure_app');
  }
  public set azureApp(value: string) {
    this._azureApp = value;
  }
  public resetAzureApp() {
    this._azureApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureAppInput() {
    return this._azureApp;
  }

  // azure_domain - computed: false, optional: true, required: false
  private _azureDomain?: string; 
  public get azureDomain() {
    return this.getStringAttribute('azure_domain');
  }
  public set azureDomain(value: string) {
    this._azureDomain = value;
  }
  public resetAzureDomain() {
    this._azureDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureDomainInput() {
    return this._azureDomain;
  }

  // azure_function - computed: false, optional: true, required: false
  private _azureFunction?: string; 
  public get azureFunction() {
    return this.getStringAttribute('azure_function');
  }
  public set azureFunction(value: string) {
    this._azureFunction = value;
  }
  public resetAzureFunction() {
    this._azureFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionInput() {
    return this._azureFunction;
  }

  // azure_function_authorization - computed: true, optional: true, required: false
  private _azureFunctionAuthorization?: string; 
  public get azureFunctionAuthorization() {
    return this.getStringAttribute('azure_function_authorization');
  }
  public set azureFunctionAuthorization(value: string) {
    this._azureFunctionAuthorization = value;
  }
  public resetAzureFunctionAuthorization() {
    this._azureFunctionAuthorization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureFunctionAuthorizationInput() {
    return this._azureFunctionAuthorization;
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // duration - computed: true, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // email_body - computed: false, optional: true, required: false
  private _emailBody?: string; 
  public get emailBody() {
    return this.getStringAttribute('email_body');
  }
  public set emailBody(value: string) {
    this._emailBody = value;
  }
  public resetEmailBody() {
    this._emailBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailBodyInput() {
    return this._emailBody;
  }

  // email_from - computed: false, optional: true, required: false
  private _emailFrom?: string; 
  public get emailFrom() {
    return this.getStringAttribute('email_from');
  }
  public set emailFrom(value: string) {
    this._emailFrom = value;
  }
  public resetEmailFrom() {
    this._emailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailFromInput() {
    return this._emailFrom;
  }

  // email_subject - computed: false, optional: true, required: false
  private _emailSubject?: string; 
  public get emailSubject() {
    return this.getStringAttribute('email_subject');
  }
  public set emailSubject(value: string) {
    this._emailSubject = value;
  }
  public resetEmailSubject() {
    this._emailSubject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailSubjectInput() {
    return this._emailSubject;
  }

  // email_to - computed: true, optional: true, required: false
  private _emailTo?: string[]; 
  public get emailTo() {
    return cdktf.Fn.tolist(this.getListAttribute('email_to'));
  }
  public set emailTo(value: string[]) {
    this._emailTo = value;
  }
  public resetEmailTo() {
    this._emailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailToInput() {
    return this._emailTo;
  }

  // execute_security_fabric - computed: true, optional: true, required: false
  private _executeSecurityFabric?: string; 
  public get executeSecurityFabric() {
    return this.getStringAttribute('execute_security_fabric');
  }
  public set executeSecurityFabric(value: string) {
    this._executeSecurityFabric = value;
  }
  public resetExecuteSecurityFabric() {
    this._executeSecurityFabric = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeSecurityFabricInput() {
    return this._executeSecurityFabric;
  }

  // forticare_email - computed: true, optional: true, required: false
  private _forticareEmail?: string; 
  public get forticareEmail() {
    return this.getStringAttribute('forticare_email');
  }
  public set forticareEmail(value: string) {
    this._forticareEmail = value;
  }
  public resetForticareEmail() {
    this._forticareEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forticareEmailInput() {
    return this._forticareEmail;
  }

  // gcp_function - computed: false, optional: true, required: false
  private _gcpFunction?: string; 
  public get gcpFunction() {
    return this.getStringAttribute('gcp_function');
  }
  public set gcpFunction(value: string) {
    this._gcpFunction = value;
  }
  public resetGcpFunction() {
    this._gcpFunction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFunctionInput() {
    return this._gcpFunction;
  }

  // gcp_function_domain - computed: false, optional: true, required: false
  private _gcpFunctionDomain?: string; 
  public get gcpFunctionDomain() {
    return this.getStringAttribute('gcp_function_domain');
  }
  public set gcpFunctionDomain(value: string) {
    this._gcpFunctionDomain = value;
  }
  public resetGcpFunctionDomain() {
    this._gcpFunctionDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFunctionDomainInput() {
    return this._gcpFunctionDomain;
  }

  // gcp_function_region - computed: false, optional: true, required: false
  private _gcpFunctionRegion?: string; 
  public get gcpFunctionRegion() {
    return this.getStringAttribute('gcp_function_region');
  }
  public set gcpFunctionRegion(value: string) {
    this._gcpFunctionRegion = value;
  }
  public resetGcpFunctionRegion() {
    this._gcpFunctionRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpFunctionRegionInput() {
    return this._gcpFunctionRegion;
  }

  // gcp_project - computed: false, optional: true, required: false
  private _gcpProject?: string; 
  public get gcpProject() {
    return this.getStringAttribute('gcp_project');
  }
  public set gcpProject(value: string) {
    this._gcpProject = value;
  }
  public resetGcpProject() {
    this._gcpProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpProjectInput() {
    return this._gcpProject;
  }

  // headers - computed: true, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return cdktf.Fn.tolist(this.getListAttribute('headers'));
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // http_body - computed: false, optional: true, required: false
  private _httpBody?: string; 
  public get httpBody() {
    return this.getStringAttribute('http_body');
  }
  public set httpBody(value: string) {
    this._httpBody = value;
  }
  public resetHttpBody() {
    this._httpBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpBodyInput() {
    return this._httpBody;
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

  // message - computed: true, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // message_type - computed: true, optional: true, required: false
  private _messageType?: string; 
  public get messageType() {
    return this.getStringAttribute('message_type');
  }
  public set messageType(value: string) {
    this._messageType = value;
  }
  public resetMessageType() {
    this._messageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageTypeInput() {
    return this._messageType;
  }

  // method - computed: false, optional: true, required: false
  private _method?: string; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method;
  }

  // minimum_interval - computed: false, optional: true, required: false
  private _minimumInterval?: number; 
  public get minimumInterval() {
    return this.getNumberAttribute('minimum_interval');
  }
  public set minimumInterval(value: number) {
    this._minimumInterval = value;
  }
  public resetMinimumInterval() {
    this._minimumInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumIntervalInput() {
    return this._minimumInterval;
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

  // output_size - computed: true, optional: true, required: false
  private _outputSize?: number; 
  public get outputSize() {
    return this.getNumberAttribute('output_size');
  }
  public set outputSize(value: number) {
    this._outputSize = value;
  }
  public resetOutputSize() {
    this._outputSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputSizeInput() {
    return this._outputSize;
  }

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // regular_expression - computed: false, optional: true, required: false
  private _regularExpression?: string; 
  public get regularExpression() {
    return this.getStringAttribute('regular_expression');
  }
  public set regularExpression(value: string) {
    this._regularExpression = value;
  }
  public resetRegularExpression() {
    this._regularExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regularExpressionInput() {
    return this._regularExpression;
  }

  // replacement_message - computed: true, optional: true, required: false
  private _replacementMessage?: string; 
  public get replacementMessage() {
    return this.getStringAttribute('replacement_message');
  }
  public set replacementMessage(value: string) {
    this._replacementMessage = value;
  }
  public resetReplacementMessage() {
    this._replacementMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementMessageInput() {
    return this._replacementMessage;
  }

  // replacemsg_group - computed: true, optional: true, required: false
  private _replacemsgGroup?: string[]; 
  public get replacemsgGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('replacemsg_group'));
  }
  public set replacemsgGroup(value: string[]) {
    this._replacemsgGroup = value;
  }
  public resetReplacemsgGroup() {
    this._replacemsgGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacemsgGroupInput() {
    return this._replacemsgGroup;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string; 
  public get required() {
    return this.getStringAttribute('required');
  }
  public set required(value: string) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
  }

  // sdn_connector - computed: true, optional: true, required: false
  private _sdnConnector?: string[]; 
  public get sdnConnector() {
    return cdktf.Fn.tolist(this.getListAttribute('sdn_connector'));
  }
  public set sdnConnector(value: string[]) {
    this._sdnConnector = value;
  }
  public resetSdnConnector() {
    this._sdnConnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdnConnectorInput() {
    return this._sdnConnector;
  }

  // security_tag - computed: false, optional: true, required: false
  private _securityTag?: string; 
  public get securityTag() {
    return this.getStringAttribute('security_tag');
  }
  public set securityTag(value: string) {
    this._securityTag = value;
  }
  public resetSecurityTag() {
    this._securityTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityTagInput() {
    return this._securityTag;
  }

  // system_action - computed: false, optional: true, required: false
  private _systemAction?: string; 
  public get systemAction() {
    return this.getStringAttribute('system_action');
  }
  public set systemAction(value: string) {
    this._systemAction = value;
  }
  public resetSystemAction() {
    this._systemAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemActionInput() {
    return this._systemAction;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout;
  }

  // tls_certificate - computed: true, optional: true, required: false
  private _tlsCertificate?: string[]; 
  public get tlsCertificate() {
    return cdktf.Fn.tolist(this.getListAttribute('tls_certificate'));
  }
  public set tlsCertificate(value: string[]) {
    this._tlsCertificate = value;
  }
  public resetTlsCertificate() {
    this._tlsCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }

  // verify_host_cert - computed: true, optional: true, required: false
  private _verifyHostCert?: string; 
  public get verifyHostCert() {
    return this.getStringAttribute('verify_host_cert');
  }
  public set verifyHostCert(value: string) {
    this._verifyHostCert = value;
  }
  public resetVerifyHostCert() {
    this._verifyHostCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyHostCertInput() {
    return this._verifyHostCert;
  }

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders = new SystemAutomationactionHttpHeadersList(this, "http_headers", false);
  public get httpHeaders() {
    return this._httpHeaders;
  }
  public putHttpHeaders(value: SystemAutomationactionHttpHeaders[] | cdktf.IResolvable) {
    this._httpHeaders.internalValue = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      accprofile: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accprofile),
      action_type: cdktf.stringToTerraform(this._actionType),
      alicloud_access_key_id: cdktf.stringToTerraform(this._alicloudAccessKeyId),
      alicloud_access_key_secret: cdktf.listMapper(cdktf.stringToTerraform, false)(this._alicloudAccessKeySecret),
      alicloud_account_id: cdktf.stringToTerraform(this._alicloudAccountId),
      alicloud_function: cdktf.stringToTerraform(this._alicloudFunction),
      alicloud_function_authorization: cdktf.stringToTerraform(this._alicloudFunctionAuthorization),
      alicloud_function_domain: cdktf.stringToTerraform(this._alicloudFunctionDomain),
      alicloud_region: cdktf.stringToTerraform(this._alicloudRegion),
      alicloud_service: cdktf.stringToTerraform(this._alicloudService),
      alicloud_version: cdktf.stringToTerraform(this._alicloudVersion),
      aws_api_id: cdktf.stringToTerraform(this._awsApiId),
      aws_api_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._awsApiKey),
      aws_api_path: cdktf.stringToTerraform(this._awsApiPath),
      aws_api_stage: cdktf.stringToTerraform(this._awsApiStage),
      aws_domain: cdktf.stringToTerraform(this._awsDomain),
      aws_region: cdktf.stringToTerraform(this._awsRegion),
      azure_api_key: cdktf.listMapper(cdktf.stringToTerraform, false)(this._azureApiKey),
      azure_app: cdktf.stringToTerraform(this._azureApp),
      azure_domain: cdktf.stringToTerraform(this._azureDomain),
      azure_function: cdktf.stringToTerraform(this._azureFunction),
      azure_function_authorization: cdktf.stringToTerraform(this._azureFunctionAuthorization),
      delay: cdktf.numberToTerraform(this._delay),
      description: cdktf.stringToTerraform(this._description),
      device_name: cdktf.stringToTerraform(this._deviceName),
      duration: cdktf.numberToTerraform(this._duration),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      email_body: cdktf.stringToTerraform(this._emailBody),
      email_from: cdktf.stringToTerraform(this._emailFrom),
      email_subject: cdktf.stringToTerraform(this._emailSubject),
      email_to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailTo),
      execute_security_fabric: cdktf.stringToTerraform(this._executeSecurityFabric),
      forticare_email: cdktf.stringToTerraform(this._forticareEmail),
      gcp_function: cdktf.stringToTerraform(this._gcpFunction),
      gcp_function_domain: cdktf.stringToTerraform(this._gcpFunctionDomain),
      gcp_function_region: cdktf.stringToTerraform(this._gcpFunctionRegion),
      gcp_project: cdktf.stringToTerraform(this._gcpProject),
      headers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._headers),
      http_body: cdktf.stringToTerraform(this._httpBody),
      id: cdktf.stringToTerraform(this._id),
      message: cdktf.stringToTerraform(this._message),
      message_type: cdktf.stringToTerraform(this._messageType),
      method: cdktf.stringToTerraform(this._method),
      minimum_interval: cdktf.numberToTerraform(this._minimumInterval),
      name: cdktf.stringToTerraform(this._name),
      output_size: cdktf.numberToTerraform(this._outputSize),
      port: cdktf.numberToTerraform(this._port),
      protocol: cdktf.stringToTerraform(this._protocol),
      regular_expression: cdktf.stringToTerraform(this._regularExpression),
      replacement_message: cdktf.stringToTerraform(this._replacementMessage),
      replacemsg_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._replacemsgGroup),
      required: cdktf.stringToTerraform(this._required),
      script: cdktf.stringToTerraform(this._script),
      sdn_connector: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sdnConnector),
      security_tag: cdktf.stringToTerraform(this._securityTag),
      system_action: cdktf.stringToTerraform(this._systemAction),
      timeout: cdktf.numberToTerraform(this._timeout),
      tls_certificate: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tlsCertificate),
      uri: cdktf.stringToTerraform(this._uri),
      verify_host_cert: cdktf.stringToTerraform(this._verifyHostCert),
      http_headers: cdktf.listMapper(systemAutomationactionHttpHeadersToTerraform, true)(this._httpHeaders.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      accprofile: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accprofile),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      action_type: {
        value: cdktf.stringToHclTerraform(this._actionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_access_key_id: {
        value: cdktf.stringToHclTerraform(this._alicloudAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_access_key_secret: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._alicloudAccessKeySecret),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      alicloud_account_id: {
        value: cdktf.stringToHclTerraform(this._alicloudAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_function: {
        value: cdktf.stringToHclTerraform(this._alicloudFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_function_authorization: {
        value: cdktf.stringToHclTerraform(this._alicloudFunctionAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_function_domain: {
        value: cdktf.stringToHclTerraform(this._alicloudFunctionDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_region: {
        value: cdktf.stringToHclTerraform(this._alicloudRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_service: {
        value: cdktf.stringToHclTerraform(this._alicloudService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      alicloud_version: {
        value: cdktf.stringToHclTerraform(this._alicloudVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_api_id: {
        value: cdktf.stringToHclTerraform(this._awsApiId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_api_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._awsApiKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      aws_api_path: {
        value: cdktf.stringToHclTerraform(this._awsApiPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_api_stage: {
        value: cdktf.stringToHclTerraform(this._awsApiStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_domain: {
        value: cdktf.stringToHclTerraform(this._awsDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_region: {
        value: cdktf.stringToHclTerraform(this._awsRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_api_key: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._azureApiKey),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      azure_app: {
        value: cdktf.stringToHclTerraform(this._azureApp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_domain: {
        value: cdktf.stringToHclTerraform(this._azureDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_function: {
        value: cdktf.stringToHclTerraform(this._azureFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_function_authorization: {
        value: cdktf.stringToHclTerraform(this._azureFunctionAuthorization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delay: {
        value: cdktf.numberToHclTerraform(this._delay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_body: {
        value: cdktf.stringToHclTerraform(this._emailBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_from: {
        value: cdktf.stringToHclTerraform(this._emailFrom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_subject: {
        value: cdktf.stringToHclTerraform(this._emailSubject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email_to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailTo),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      execute_security_fabric: {
        value: cdktf.stringToHclTerraform(this._executeSecurityFabric),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      forticare_email: {
        value: cdktf.stringToHclTerraform(this._forticareEmail),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_function: {
        value: cdktf.stringToHclTerraform(this._gcpFunction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_function_domain: {
        value: cdktf.stringToHclTerraform(this._gcpFunctionDomain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_function_region: {
        value: cdktf.stringToHclTerraform(this._gcpFunctionRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_project: {
        value: cdktf.stringToHclTerraform(this._gcpProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      headers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._headers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      http_body: {
        value: cdktf.stringToHclTerraform(this._httpBody),
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
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      message_type: {
        value: cdktf.stringToHclTerraform(this._messageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      method: {
        value: cdktf.stringToHclTerraform(this._method),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_interval: {
        value: cdktf.numberToHclTerraform(this._minimumInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_size: {
        value: cdktf.numberToHclTerraform(this._outputSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regular_expression: {
        value: cdktf.stringToHclTerraform(this._regularExpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_message: {
        value: cdktf.stringToHclTerraform(this._replacementMessage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacemsg_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._replacemsgGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      required: {
        value: cdktf.stringToHclTerraform(this._required),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      script: {
        value: cdktf.stringToHclTerraform(this._script),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdn_connector: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sdnConnector),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      security_tag: {
        value: cdktf.stringToHclTerraform(this._securityTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_action: {
        value: cdktf.stringToHclTerraform(this._systemAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tls_certificate: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tlsCertificate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      uri: {
        value: cdktf.stringToHclTerraform(this._uri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_host_cert: {
        value: cdktf.stringToHclTerraform(this._verifyHostCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_headers: {
        value: cdktf.listMapperHcl(systemAutomationactionHttpHeadersToHclTerraform, true)(this._httpHeaders.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAutomationactionHttpHeadersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
