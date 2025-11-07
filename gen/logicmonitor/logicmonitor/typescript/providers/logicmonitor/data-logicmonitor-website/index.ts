// https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogicmonitorWebsiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#alert_expr DataLogicmonitorWebsite#alert_expr}
  */
  readonly alertExpr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#description DataLogicmonitorWebsite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#disable_alerting DataLogicmonitorWebsite#disable_alerting}
  */
  readonly disableAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#domain DataLogicmonitorWebsite#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#filter DataLogicmonitorWebsite#filter}
  */
  readonly filter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#global_sm_alert_cond DataLogicmonitorWebsite#global_sm_alert_cond}
  */
  readonly globalSmAlertCond?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#group_id DataLogicmonitorWebsite#group_id}
  */
  readonly groupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#host DataLogicmonitorWebsite#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#id DataLogicmonitorWebsite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#ignore_s_s_l DataLogicmonitorWebsite#ignore_s_s_l}
  */
  readonly ignoreSSL?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#individual_alert_level DataLogicmonitorWebsite#individual_alert_level}
  */
  readonly individualAlertLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#individual_sm_alert_enable DataLogicmonitorWebsite#individual_sm_alert_enable}
  */
  readonly individualSmAlertEnable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#is_internal DataLogicmonitorWebsite#is_internal}
  */
  readonly isInternal?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#last_updated DataLogicmonitorWebsite#last_updated}
  */
  readonly lastUpdated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#name DataLogicmonitorWebsite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#overall_alert_level DataLogicmonitorWebsite#overall_alert_level}
  */
  readonly overallAlertLevel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#polling_interval DataLogicmonitorWebsite#polling_interval}
  */
  readonly pollingInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#schema DataLogicmonitorWebsite#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#status DataLogicmonitorWebsite#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#steps DataLogicmonitorWebsite#steps}
  */
  readonly steps?: DataLogicmonitorWebsiteSteps[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#stop_monitoring DataLogicmonitorWebsite#stop_monitoring}
  */
  readonly stopMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#stop_monitoring_by_folder DataLogicmonitorWebsite#stop_monitoring_by_folder}
  */
  readonly stopMonitoringByFolder?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#template DataLogicmonitorWebsite#template}
  */
  readonly template?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#transition DataLogicmonitorWebsite#transition}
  */
  readonly transition?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#trigger_s_s_l_expiration_alert DataLogicmonitorWebsite#trigger_s_s_l_expiration_alert}
  */
  readonly triggerSSLExpirationAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#trigger_s_s_l_status_alert DataLogicmonitorWebsite#trigger_s_s_l_status_alert}
  */
  readonly triggerSSLStatusAlert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#type DataLogicmonitorWebsite#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#use_default_alert_setting DataLogicmonitorWebsite#use_default_alert_setting}
  */
  readonly useDefaultAlertSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#use_default_location_setting DataLogicmonitorWebsite#use_default_location_setting}
  */
  readonly useDefaultLocationSetting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#user_permission DataLogicmonitorWebsite#user_permission}
  */
  readonly userPermission?: string;
  /**
  * test_location block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#test_location DataLogicmonitorWebsite#test_location}
  */
  readonly testLocation?: DataLogicmonitorWebsiteTestLocation[] | cdktf.IResolvable;
}
export interface DataLogicmonitorWebsiteStepsAuth {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#domain DataLogicmonitorWebsite#domain}
  */
  readonly domain?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#password DataLogicmonitorWebsite#password}
  */
  readonly password?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#type DataLogicmonitorWebsite#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#user_name DataLogicmonitorWebsite#user_name}
  */
  readonly userName?: string;
}

export function dataLogicmonitorWebsiteStepsAuthToTerraform(struct?: DataLogicmonitorWebsiteStepsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domain: cdktf.stringToTerraform(struct!.domain),
    password: cdktf.stringToTerraform(struct!.password),
    type: cdktf.stringToTerraform(struct!.type),
    user_name: cdktf.stringToTerraform(struct!.userName),
  }
}


export function dataLogicmonitorWebsiteStepsAuthToHclTerraform(struct?: DataLogicmonitorWebsiteStepsAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domain: {
      value: cdktf.stringToHclTerraform(struct!.domain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name: {
      value: cdktf.stringToHclTerraform(struct!.userName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorWebsiteStepsAuthOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorWebsiteStepsAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domain !== undefined) {
      hasAnyValues = true;
      internalValueResult.domain = this._domain;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._userName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userName = this._userName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorWebsiteStepsAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domain = undefined;
      this._password = undefined;
      this._type = undefined;
      this._userName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domain = value.domain;
      this._password = value.password;
      this._type = value.type;
      this._userName = value.userName;
    }
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // user_name - computed: false, optional: true, required: false
  private _userName?: string; 
  public get userName() {
    return this.getStringAttribute('user_name');
  }
  public set userName(value: string) {
    this._userName = value;
  }
  public resetUserName() {
    this._userName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameInput() {
    return this._userName;
  }
}

export class DataLogicmonitorWebsiteStepsAuthList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorWebsiteStepsAuth[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorWebsiteStepsAuthOutputReference {
    return new DataLogicmonitorWebsiteStepsAuthOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorWebsiteSteps {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#auth DataLogicmonitorWebsite#auth}
  */
  readonly auth?: DataLogicmonitorWebsiteStepsAuth[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#description DataLogicmonitorWebsite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#enable DataLogicmonitorWebsite#enable}
  */
  readonly enable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#follow_redirection DataLogicmonitorWebsite#follow_redirection}
  */
  readonly followRedirection?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#fullpage_load DataLogicmonitorWebsite#fullpage_load}
  */
  readonly fullpageLoad?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#http_body DataLogicmonitorWebsite#http_body}
  */
  readonly httpBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#http_headers DataLogicmonitorWebsite#http_headers}
  */
  readonly httpHeaders?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#http_method DataLogicmonitorWebsite#http_method}
  */
  readonly httpMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#http_version DataLogicmonitorWebsite#http_version}
  */
  readonly httpVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#invert_match DataLogicmonitorWebsite#invert_match}
  */
  readonly invertMatch?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#keyword DataLogicmonitorWebsite#keyword}
  */
  readonly keyword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#label DataLogicmonitorWebsite#label}
  */
  readonly label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#match_type DataLogicmonitorWebsite#match_type}
  */
  readonly matchType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#name DataLogicmonitorWebsite#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#path DataLogicmonitorWebsite#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#post_data_edit_type DataLogicmonitorWebsite#post_data_edit_type}
  */
  readonly postDataEditType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#req_script DataLogicmonitorWebsite#req_script}
  */
  readonly reqScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#req_type DataLogicmonitorWebsite#req_type}
  */
  readonly reqType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#require_auth DataLogicmonitorWebsite#require_auth}
  */
  readonly requireAuth?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#resp_script DataLogicmonitorWebsite#resp_script}
  */
  readonly respScript?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#resp_type DataLogicmonitorWebsite#resp_type}
  */
  readonly respType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#schema DataLogicmonitorWebsite#schema}
  */
  readonly schema?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#status_code DataLogicmonitorWebsite#status_code}
  */
  readonly statusCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#timeout DataLogicmonitorWebsite#timeout}
  */
  readonly timeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#type DataLogicmonitorWebsite#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#url DataLogicmonitorWebsite#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#use_default_root DataLogicmonitorWebsite#use_default_root}
  */
  readonly useDefaultRoot?: boolean | cdktf.IResolvable;
}

export function dataLogicmonitorWebsiteStepsToTerraform(struct?: DataLogicmonitorWebsiteSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auth: cdktf.listMapper(dataLogicmonitorWebsiteStepsAuthToTerraform, false)(struct!.auth),
    description: cdktf.stringToTerraform(struct!.description),
    enable: cdktf.booleanToTerraform(struct!.enable),
    follow_redirection: cdktf.booleanToTerraform(struct!.followRedirection),
    fullpage_load: cdktf.booleanToTerraform(struct!.fullpageLoad),
    http_body: cdktf.stringToTerraform(struct!.httpBody),
    http_headers: cdktf.stringToTerraform(struct!.httpHeaders),
    http_method: cdktf.stringToTerraform(struct!.httpMethod),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    invert_match: cdktf.booleanToTerraform(struct!.invertMatch),
    keyword: cdktf.stringToTerraform(struct!.keyword),
    label: cdktf.stringToTerraform(struct!.label),
    match_type: cdktf.stringToTerraform(struct!.matchType),
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
    post_data_edit_type: cdktf.stringToTerraform(struct!.postDataEditType),
    req_script: cdktf.stringToTerraform(struct!.reqScript),
    req_type: cdktf.stringToTerraform(struct!.reqType),
    require_auth: cdktf.booleanToTerraform(struct!.requireAuth),
    resp_script: cdktf.stringToTerraform(struct!.respScript),
    resp_type: cdktf.stringToTerraform(struct!.respType),
    schema: cdktf.stringToTerraform(struct!.schema),
    status_code: cdktf.stringToTerraform(struct!.statusCode),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    url: cdktf.stringToTerraform(struct!.url),
    use_default_root: cdktf.booleanToTerraform(struct!.useDefaultRoot),
  }
}


export function dataLogicmonitorWebsiteStepsToHclTerraform(struct?: DataLogicmonitorWebsiteSteps | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auth: {
      value: cdktf.listMapperHcl(dataLogicmonitorWebsiteStepsAuthToHclTerraform, false)(struct!.auth),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorWebsiteStepsAuthList",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.booleanToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    follow_redirection: {
      value: cdktf.booleanToHclTerraform(struct!.followRedirection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fullpage_load: {
      value: cdktf.booleanToHclTerraform(struct!.fullpageLoad),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    http_body: {
      value: cdktf.stringToHclTerraform(struct!.httpBody),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_headers: {
      value: cdktf.stringToHclTerraform(struct!.httpHeaders),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_method: {
      value: cdktf.stringToHclTerraform(struct!.httpMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_version: {
      value: cdktf.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    invert_match: {
      value: cdktf.booleanToHclTerraform(struct!.invertMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    keyword: {
      value: cdktf.stringToHclTerraform(struct!.keyword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label: {
      value: cdktf.stringToHclTerraform(struct!.label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    match_type: {
      value: cdktf.stringToHclTerraform(struct!.matchType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_data_edit_type: {
      value: cdktf.stringToHclTerraform(struct!.postDataEditType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    req_script: {
      value: cdktf.stringToHclTerraform(struct!.reqScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    req_type: {
      value: cdktf.stringToHclTerraform(struct!.reqType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_auth: {
      value: cdktf.booleanToHclTerraform(struct!.requireAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resp_script: {
      value: cdktf.stringToHclTerraform(struct!.respScript),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resp_type: {
      value: cdktf.stringToHclTerraform(struct!.respType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cdktf.stringToHclTerraform(struct!.schema),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status_code: {
      value: cdktf.stringToHclTerraform(struct!.statusCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    timeout: {
      value: cdktf.numberToHclTerraform(struct!.timeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_default_root: {
      value: cdktf.booleanToHclTerraform(struct!.useDefaultRoot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorWebsiteStepsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorWebsiteSteps | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._auth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.auth = this._auth?.internalValue;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._followRedirection !== undefined) {
      hasAnyValues = true;
      internalValueResult.followRedirection = this._followRedirection;
    }
    if (this._fullpageLoad !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullpageLoad = this._fullpageLoad;
    }
    if (this._httpBody !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpBody = this._httpBody;
    }
    if (this._httpHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHeaders = this._httpHeaders;
    }
    if (this._httpMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMethod = this._httpMethod;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._invertMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.invertMatch = this._invertMatch;
    }
    if (this._keyword !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyword = this._keyword;
    }
    if (this._label !== undefined) {
      hasAnyValues = true;
      internalValueResult.label = this._label;
    }
    if (this._matchType !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchType = this._matchType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._postDataEditType !== undefined) {
      hasAnyValues = true;
      internalValueResult.postDataEditType = this._postDataEditType;
    }
    if (this._reqScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqScript = this._reqScript;
    }
    if (this._reqType !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqType = this._reqType;
    }
    if (this._requireAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAuth = this._requireAuth;
    }
    if (this._respScript !== undefined) {
      hasAnyValues = true;
      internalValueResult.respScript = this._respScript;
    }
    if (this._respType !== undefined) {
      hasAnyValues = true;
      internalValueResult.respType = this._respType;
    }
    if (this._schema !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema;
    }
    if (this._statusCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.statusCode = this._statusCode;
    }
    if (this._timeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeout = this._timeout;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._useDefaultRoot !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefaultRoot = this._useDefaultRoot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorWebsiteSteps | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._auth.internalValue = undefined;
      this._description = undefined;
      this._enable = undefined;
      this._followRedirection = undefined;
      this._fullpageLoad = undefined;
      this._httpBody = undefined;
      this._httpHeaders = undefined;
      this._httpMethod = undefined;
      this._httpVersion = undefined;
      this._invertMatch = undefined;
      this._keyword = undefined;
      this._label = undefined;
      this._matchType = undefined;
      this._name = undefined;
      this._path = undefined;
      this._postDataEditType = undefined;
      this._reqScript = undefined;
      this._reqType = undefined;
      this._requireAuth = undefined;
      this._respScript = undefined;
      this._respType = undefined;
      this._schema = undefined;
      this._statusCode = undefined;
      this._timeout = undefined;
      this._type = undefined;
      this._url = undefined;
      this._useDefaultRoot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._auth.internalValue = value.auth;
      this._description = value.description;
      this._enable = value.enable;
      this._followRedirection = value.followRedirection;
      this._fullpageLoad = value.fullpageLoad;
      this._httpBody = value.httpBody;
      this._httpHeaders = value.httpHeaders;
      this._httpMethod = value.httpMethod;
      this._httpVersion = value.httpVersion;
      this._invertMatch = value.invertMatch;
      this._keyword = value.keyword;
      this._label = value.label;
      this._matchType = value.matchType;
      this._name = value.name;
      this._path = value.path;
      this._postDataEditType = value.postDataEditType;
      this._reqScript = value.reqScript;
      this._reqType = value.reqType;
      this._requireAuth = value.requireAuth;
      this._respScript = value.respScript;
      this._respType = value.respType;
      this._schema = value.schema;
      this._statusCode = value.statusCode;
      this._timeout = value.timeout;
      this._type = value.type;
      this._url = value.url;
      this._useDefaultRoot = value.useDefaultRoot;
    }
  }

  // auth - computed: false, optional: true, required: false
  private _auth = new DataLogicmonitorWebsiteStepsAuthList(this, "auth", false);
  public get auth() {
    return this._auth;
  }
  public putAuth(value: DataLogicmonitorWebsiteStepsAuth[] | cdktf.IResolvable) {
    this._auth.internalValue = value;
  }
  public resetAuth() {
    this._auth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authInput() {
    return this._auth.internalValue;
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

  // enable - computed: false, optional: true, required: false
  private _enable?: boolean | cdktf.IResolvable; 
  public get enable() {
    return this.getBooleanAttribute('enable');
  }
  public set enable(value: boolean | cdktf.IResolvable) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // follow_redirection - computed: false, optional: true, required: false
  private _followRedirection?: boolean | cdktf.IResolvable; 
  public get followRedirection() {
    return this.getBooleanAttribute('follow_redirection');
  }
  public set followRedirection(value: boolean | cdktf.IResolvable) {
    this._followRedirection = value;
  }
  public resetFollowRedirection() {
    this._followRedirection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectionInput() {
    return this._followRedirection;
  }

  // fullpage_load - computed: false, optional: true, required: false
  private _fullpageLoad?: boolean | cdktf.IResolvable; 
  public get fullpageLoad() {
    return this.getBooleanAttribute('fullpage_load');
  }
  public set fullpageLoad(value: boolean | cdktf.IResolvable) {
    this._fullpageLoad = value;
  }
  public resetFullpageLoad() {
    this._fullpageLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullpageLoadInput() {
    return this._fullpageLoad;
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

  // http_headers - computed: false, optional: true, required: false
  private _httpHeaders?: string; 
  public get httpHeaders() {
    return this.getStringAttribute('http_headers');
  }
  public set httpHeaders(value: string) {
    this._httpHeaders = value;
  }
  public resetHttpHeaders() {
    this._httpHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHeadersInput() {
    return this._httpHeaders;
  }

  // http_method - computed: false, optional: true, required: false
  private _httpMethod?: string; 
  public get httpMethod() {
    return this.getStringAttribute('http_method');
  }
  public set httpMethod(value: string) {
    this._httpMethod = value;
  }
  public resetHttpMethod() {
    this._httpMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMethodInput() {
    return this._httpMethod;
  }

  // http_version - computed: false, optional: true, required: false
  private _httpVersion?: string; 
  public get httpVersion() {
    return this.getStringAttribute('http_version');
  }
  public set httpVersion(value: string) {
    this._httpVersion = value;
  }
  public resetHttpVersion() {
    this._httpVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpVersionInput() {
    return this._httpVersion;
  }

  // invert_match - computed: false, optional: true, required: false
  private _invertMatch?: boolean | cdktf.IResolvable; 
  public get invertMatch() {
    return this.getBooleanAttribute('invert_match');
  }
  public set invertMatch(value: boolean | cdktf.IResolvable) {
    this._invertMatch = value;
  }
  public resetInvertMatch() {
    this._invertMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get invertMatchInput() {
    return this._invertMatch;
  }

  // keyword - computed: false, optional: true, required: false
  private _keyword?: string; 
  public get keyword() {
    return this.getStringAttribute('keyword');
  }
  public set keyword(value: string) {
    this._keyword = value;
  }
  public resetKeyword() {
    this._keyword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keywordInput() {
    return this._keyword;
  }

  // label - computed: false, optional: true, required: false
  private _label?: string; 
  public get label() {
    return this.getStringAttribute('label');
  }
  public set label(value: string) {
    this._label = value;
  }
  public resetLabel() {
    this._label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelInput() {
    return this._label;
  }

  // match_type - computed: false, optional: true, required: false
  private _matchType?: string; 
  public get matchType() {
    return this.getStringAttribute('match_type');
  }
  public set matchType(value: string) {
    this._matchType = value;
  }
  public resetMatchType() {
    this._matchType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchTypeInput() {
    return this._matchType;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // post_data_edit_type - computed: false, optional: true, required: false
  private _postDataEditType?: string; 
  public get postDataEditType() {
    return this.getStringAttribute('post_data_edit_type');
  }
  public set postDataEditType(value: string) {
    this._postDataEditType = value;
  }
  public resetPostDataEditType() {
    this._postDataEditType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postDataEditTypeInput() {
    return this._postDataEditType;
  }

  // req_script - computed: false, optional: true, required: false
  private _reqScript?: string; 
  public get reqScript() {
    return this.getStringAttribute('req_script');
  }
  public set reqScript(value: string) {
    this._reqScript = value;
  }
  public resetReqScript() {
    this._reqScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqScriptInput() {
    return this._reqScript;
  }

  // req_type - computed: false, optional: true, required: false
  private _reqType?: string; 
  public get reqType() {
    return this.getStringAttribute('req_type');
  }
  public set reqType(value: string) {
    this._reqType = value;
  }
  public resetReqType() {
    this._reqType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqTypeInput() {
    return this._reqType;
  }

  // require_auth - computed: false, optional: true, required: false
  private _requireAuth?: boolean | cdktf.IResolvable; 
  public get requireAuth() {
    return this.getBooleanAttribute('require_auth');
  }
  public set requireAuth(value: boolean | cdktf.IResolvable) {
    this._requireAuth = value;
  }
  public resetRequireAuth() {
    this._requireAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthInput() {
    return this._requireAuth;
  }

  // resp_script - computed: false, optional: true, required: false
  private _respScript?: string; 
  public get respScript() {
    return this.getStringAttribute('resp_script');
  }
  public set respScript(value: string) {
    this._respScript = value;
  }
  public resetRespScript() {
    this._respScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respScriptInput() {
    return this._respScript;
  }

  // resp_type - computed: false, optional: true, required: false
  private _respType?: string; 
  public get respType() {
    return this.getStringAttribute('resp_type');
  }
  public set respType(value: string) {
    this._respType = value;
  }
  public resetRespType() {
    this._respType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get respTypeInput() {
    return this._respType;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // status_code - computed: false, optional: true, required: false
  private _statusCode?: string; 
  public get statusCode() {
    return this.getStringAttribute('status_code');
  }
  public set statusCode(value: string) {
    this._statusCode = value;
  }
  public resetStatusCode() {
    this._statusCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusCodeInput() {
    return this._statusCode;
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

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // use_default_root - computed: false, optional: true, required: false
  private _useDefaultRoot?: boolean | cdktf.IResolvable; 
  public get useDefaultRoot() {
    return this.getBooleanAttribute('use_default_root');
  }
  public set useDefaultRoot(value: boolean | cdktf.IResolvable) {
    this._useDefaultRoot = value;
  }
  public resetUseDefaultRoot() {
    this._useDefaultRoot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultRootInput() {
    return this._useDefaultRoot;
  }
}

export class DataLogicmonitorWebsiteStepsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorWebsiteSteps[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorWebsiteStepsOutputReference {
    return new DataLogicmonitorWebsiteStepsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorWebsiteTestLocationCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#collector_group_id DataLogicmonitorWebsite#collector_group_id}
  */
  readonly collectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#collector_group_name DataLogicmonitorWebsite#collector_group_name}
  */
  readonly collectorGroupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#description DataLogicmonitorWebsite#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#hostname DataLogicmonitorWebsite#hostname}
  */
  readonly hostname?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#id DataLogicmonitorWebsite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#status DataLogicmonitorWebsite#status}
  */
  readonly status?: string;
}

export function dataLogicmonitorWebsiteTestLocationCollectorsToTerraform(struct?: DataLogicmonitorWebsiteTestLocationCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collector_group_id: cdktf.numberToTerraform(struct!.collectorGroupId),
    collector_group_name: cdktf.stringToTerraform(struct!.collectorGroupName),
    description: cdktf.stringToTerraform(struct!.description),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    id: cdktf.numberToTerraform(struct!.id),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataLogicmonitorWebsiteTestLocationCollectorsToHclTerraform(struct?: DataLogicmonitorWebsiteTestLocationCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_group_name: {
      value: cdktf.stringToHclTerraform(struct!.collectorGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorWebsiteTestLocationCollectorsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorWebsiteTestLocationCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorGroupId = this._collectorGroupId;
    }
    if (this._collectorGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorGroupName = this._collectorGroupName;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorWebsiteTestLocationCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectorGroupId = undefined;
      this._collectorGroupName = undefined;
      this._description = undefined;
      this._hostname = undefined;
      this._id = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectorGroupId = value.collectorGroupId;
      this._collectorGroupName = value.collectorGroupName;
      this._description = value.description;
      this._hostname = value.hostname;
      this._id = value.id;
      this._status = value.status;
    }
  }

  // collector_group_id - computed: false, optional: true, required: false
  private _collectorGroupId?: number; 
  public get collectorGroupId() {
    return this.getNumberAttribute('collector_group_id');
  }
  public set collectorGroupId(value: number) {
    this._collectorGroupId = value;
  }
  public resetCollectorGroupId() {
    this._collectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupIdInput() {
    return this._collectorGroupId;
  }

  // collector_group_name - computed: false, optional: true, required: false
  private _collectorGroupName?: string; 
  public get collectorGroupName() {
    return this.getStringAttribute('collector_group_name');
  }
  public set collectorGroupName(value: string) {
    this._collectorGroupName = value;
  }
  public resetCollectorGroupName() {
    this._collectorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorGroupNameInput() {
    return this._collectorGroupName;
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

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
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

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataLogicmonitorWebsiteTestLocationCollectorsList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorWebsiteTestLocationCollectors[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorWebsiteTestLocationCollectorsOutputReference {
    return new DataLogicmonitorWebsiteTestLocationCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataLogicmonitorWebsiteTestLocation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#all DataLogicmonitorWebsite#all}
  */
  readonly all?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#collector_ids DataLogicmonitorWebsite#collector_ids}
  */
  readonly collectorIds?: number[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#collectors DataLogicmonitorWebsite#collectors}
  */
  readonly collectors?: DataLogicmonitorWebsiteTestLocationCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#smg_ids DataLogicmonitorWebsite#smg_ids}
  */
  readonly smgIds?: number[];
}

export function dataLogicmonitorWebsiteTestLocationToTerraform(struct?: DataLogicmonitorWebsiteTestLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all: cdktf.booleanToTerraform(struct!.all),
    collector_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.collectorIds),
    collectors: cdktf.listMapper(dataLogicmonitorWebsiteTestLocationCollectorsToTerraform, false)(struct!.collectors),
    smg_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.smgIds),
  }
}


export function dataLogicmonitorWebsiteTestLocationToHclTerraform(struct?: DataLogicmonitorWebsiteTestLocation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all: {
      value: cdktf.booleanToHclTerraform(struct!.all),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    collector_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.collectorIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    collectors: {
      value: cdktf.listMapperHcl(dataLogicmonitorWebsiteTestLocationCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DataLogicmonitorWebsiteTestLocationCollectorsList",
    },
    smg_ids: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.smgIds),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataLogicmonitorWebsiteTestLocationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataLogicmonitorWebsiteTestLocation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._all !== undefined) {
      hasAnyValues = true;
      internalValueResult.all = this._all;
    }
    if (this._collectorIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorIds = this._collectorIds;
    }
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._smgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.smgIds = this._smgIds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataLogicmonitorWebsiteTestLocation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._all = undefined;
      this._collectorIds = undefined;
      this._collectors.internalValue = undefined;
      this._smgIds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._all = value.all;
      this._collectorIds = value.collectorIds;
      this._collectors.internalValue = value.collectors;
      this._smgIds = value.smgIds;
    }
  }

  // all - computed: false, optional: true, required: false
  private _all?: boolean | cdktf.IResolvable; 
  public get all() {
    return this.getBooleanAttribute('all');
  }
  public set all(value: boolean | cdktf.IResolvable) {
    this._all = value;
  }
  public resetAll() {
    this._all = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allInput() {
    return this._all;
  }

  // collector_ids - computed: false, optional: true, required: false
  private _collectorIds?: number[]; 
  public get collectorIds() {
    return this.getNumberListAttribute('collector_ids');
  }
  public set collectorIds(value: number[]) {
    this._collectorIds = value;
  }
  public resetCollectorIds() {
    this._collectorIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdsInput() {
    return this._collectorIds;
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DataLogicmonitorWebsiteTestLocationCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DataLogicmonitorWebsiteTestLocationCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // smg_ids - computed: false, optional: true, required: false
  private _smgIds?: number[]; 
  public get smgIds() {
    return this.getNumberListAttribute('smg_ids');
  }
  public set smgIds(value: number[]) {
    this._smgIds = value;
  }
  public resetSmgIds() {
    this._smgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smgIdsInput() {
    return this._smgIds;
  }
}

export class DataLogicmonitorWebsiteTestLocationList extends cdktf.ComplexList {
  public internalValue? : DataLogicmonitorWebsiteTestLocation[] | cdktf.IResolvable

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
  public get(index: number): DataLogicmonitorWebsiteTestLocationOutputReference {
    return new DataLogicmonitorWebsiteTestLocationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website logicmonitor_website}
*/
export class DataLogicmonitorWebsite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logicmonitor_website";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogicmonitorWebsite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogicmonitorWebsite to import
  * @param importFromId The id of the existing DataLogicmonitorWebsite that should be imported. Refer to the {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogicmonitorWebsite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logicmonitor_website", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/data-sources/website logicmonitor_website} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogicmonitorWebsiteConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogicmonitorWebsiteConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logicmonitor_website',
      terraformGeneratorMetadata: {
        providerName: 'logicmonitor',
        providerVersion: '2.0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alertExpr = config.alertExpr;
    this._description = config.description;
    this._disableAlerting = config.disableAlerting;
    this._domain = config.domain;
    this._filter = config.filter;
    this._globalSmAlertCond = config.globalSmAlertCond;
    this._groupId = config.groupId;
    this._host = config.host;
    this._id = config.id;
    this._ignoreSSL = config.ignoreSSL;
    this._individualAlertLevel = config.individualAlertLevel;
    this._individualSmAlertEnable = config.individualSmAlertEnable;
    this._isInternal = config.isInternal;
    this._lastUpdated = config.lastUpdated;
    this._name = config.name;
    this._overallAlertLevel = config.overallAlertLevel;
    this._pollingInterval = config.pollingInterval;
    this._schema = config.schema;
    this._status = config.status;
    this._steps.internalValue = config.steps;
    this._stopMonitoring = config.stopMonitoring;
    this._stopMonitoringByFolder = config.stopMonitoringByFolder;
    this._template = config.template;
    this._transition = config.transition;
    this._triggerSSLExpirationAlert = config.triggerSSLExpirationAlert;
    this._triggerSSLStatusAlert = config.triggerSSLStatusAlert;
    this._type = config.type;
    this._useDefaultAlertSetting = config.useDefaultAlertSetting;
    this._useDefaultLocationSetting = config.useDefaultLocationSetting;
    this._userPermission = config.userPermission;
    this._testLocation.internalValue = config.testLocation;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert_expr - computed: false, optional: true, required: false
  private _alertExpr?: string; 
  public get alertExpr() {
    return this.getStringAttribute('alert_expr');
  }
  public set alertExpr(value: string) {
    this._alertExpr = value;
  }
  public resetAlertExpr() {
    this._alertExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertExprInput() {
    return this._alertExpr;
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

  // disable_alerting - computed: false, optional: true, required: false
  private _disableAlerting?: boolean | cdktf.IResolvable; 
  public get disableAlerting() {
    return this.getBooleanAttribute('disable_alerting');
  }
  public set disableAlerting(value: boolean | cdktf.IResolvable) {
    this._disableAlerting = value;
  }
  public resetDisableAlerting() {
    this._disableAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAlertingInput() {
    return this._disableAlerting;
  }

  // domain - computed: false, optional: true, required: false
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  public resetDomain() {
    this._domain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
  }

  // global_sm_alert_cond - computed: false, optional: true, required: false
  private _globalSmAlertCond?: number; 
  public get globalSmAlertCond() {
    return this.getNumberAttribute('global_sm_alert_cond');
  }
  public set globalSmAlertCond(value: number) {
    this._globalSmAlertCond = value;
  }
  public resetGlobalSmAlertCond() {
    this._globalSmAlertCond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalSmAlertCondInput() {
    return this._globalSmAlertCond;
  }

  // group_id - computed: false, optional: true, required: false
  private _groupId?: number; 
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }
  public set groupId(value: number) {
    this._groupId = value;
  }
  public resetGroupId() {
    this._groupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdInput() {
    return this._groupId;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // id - computed: true, optional: true, required: false
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

  // ignore_s_s_l - computed: false, optional: true, required: false
  private _ignoreSSL?: boolean | cdktf.IResolvable; 
  public get ignoreSSL() {
    return this.getBooleanAttribute('ignore_s_s_l');
  }
  public set ignoreSSL(value: boolean | cdktf.IResolvable) {
    this._ignoreSSL = value;
  }
  public resetIgnoreSSL() {
    this._ignoreSSL = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreSSLInput() {
    return this._ignoreSSL;
  }

  // individual_alert_level - computed: false, optional: true, required: false
  private _individualAlertLevel?: string; 
  public get individualAlertLevel() {
    return this.getStringAttribute('individual_alert_level');
  }
  public set individualAlertLevel(value: string) {
    this._individualAlertLevel = value;
  }
  public resetIndividualAlertLevel() {
    this._individualAlertLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualAlertLevelInput() {
    return this._individualAlertLevel;
  }

  // individual_sm_alert_enable - computed: false, optional: true, required: false
  private _individualSmAlertEnable?: boolean | cdktf.IResolvable; 
  public get individualSmAlertEnable() {
    return this.getBooleanAttribute('individual_sm_alert_enable');
  }
  public set individualSmAlertEnable(value: boolean | cdktf.IResolvable) {
    this._individualSmAlertEnable = value;
  }
  public resetIndividualSmAlertEnable() {
    this._individualSmAlertEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get individualSmAlertEnableInput() {
    return this._individualSmAlertEnable;
  }

  // is_internal - computed: false, optional: true, required: false
  private _isInternal?: boolean | cdktf.IResolvable; 
  public get isInternal() {
    return this.getBooleanAttribute('is_internal');
  }
  public set isInternal(value: boolean | cdktf.IResolvable) {
    this._isInternal = value;
  }
  public resetIsInternal() {
    this._isInternal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isInternalInput() {
    return this._isInternal;
  }

  // last_updated - computed: false, optional: true, required: false
  private _lastUpdated?: number; 
  public get lastUpdated() {
    return this.getNumberAttribute('last_updated');
  }
  public set lastUpdated(value: number) {
    this._lastUpdated = value;
  }
  public resetLastUpdated() {
    this._lastUpdated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastUpdatedInput() {
    return this._lastUpdated;
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

  // overall_alert_level - computed: false, optional: true, required: false
  private _overallAlertLevel?: string; 
  public get overallAlertLevel() {
    return this.getStringAttribute('overall_alert_level');
  }
  public set overallAlertLevel(value: string) {
    this._overallAlertLevel = value;
  }
  public resetOverallAlertLevel() {
    this._overallAlertLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallAlertLevelInput() {
    return this._overallAlertLevel;
  }

  // polling_interval - computed: false, optional: true, required: false
  private _pollingInterval?: number; 
  public get pollingInterval() {
    return this.getNumberAttribute('polling_interval');
  }
  public set pollingInterval(value: number) {
    this._pollingInterval = value;
  }
  public resetPollingInterval() {
    this._pollingInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pollingIntervalInput() {
    return this._pollingInterval;
  }

  // schema - computed: false, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // steps - computed: false, optional: true, required: false
  private _steps = new DataLogicmonitorWebsiteStepsList(this, "steps", false);
  public get steps() {
    return this._steps;
  }
  public putSteps(value: DataLogicmonitorWebsiteSteps[] | cdktf.IResolvable) {
    this._steps.internalValue = value;
  }
  public resetSteps() {
    this._steps.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stepsInput() {
    return this._steps.internalValue;
  }

  // stop_monitoring - computed: false, optional: true, required: false
  private _stopMonitoring?: boolean | cdktf.IResolvable; 
  public get stopMonitoring() {
    return this.getBooleanAttribute('stop_monitoring');
  }
  public set stopMonitoring(value: boolean | cdktf.IResolvable) {
    this._stopMonitoring = value;
  }
  public resetStopMonitoring() {
    this._stopMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopMonitoringInput() {
    return this._stopMonitoring;
  }

  // stop_monitoring_by_folder - computed: false, optional: true, required: false
  private _stopMonitoringByFolder?: boolean | cdktf.IResolvable; 
  public get stopMonitoringByFolder() {
    return this.getBooleanAttribute('stop_monitoring_by_folder');
  }
  public set stopMonitoringByFolder(value: boolean | cdktf.IResolvable) {
    this._stopMonitoringByFolder = value;
  }
  public resetStopMonitoringByFolder() {
    this._stopMonitoringByFolder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopMonitoringByFolderInput() {
    return this._stopMonitoringByFolder;
  }

  // template - computed: false, optional: true, required: false
  private _template?: { [key: string]: string }; 
  public get template() {
    return this.getStringMapAttribute('template');
  }
  public set template(value: { [key: string]: string }) {
    this._template = value;
  }
  public resetTemplate() {
    this._template = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template;
  }

  // transition - computed: false, optional: true, required: false
  private _transition?: number; 
  public get transition() {
    return this.getNumberAttribute('transition');
  }
  public set transition(value: number) {
    this._transition = value;
  }
  public resetTransition() {
    this._transition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transitionInput() {
    return this._transition;
  }

  // trigger_s_s_l_expiration_alert - computed: false, optional: true, required: false
  private _triggerSSLExpirationAlert?: boolean | cdktf.IResolvable; 
  public get triggerSSLExpirationAlert() {
    return this.getBooleanAttribute('trigger_s_s_l_expiration_alert');
  }
  public set triggerSSLExpirationAlert(value: boolean | cdktf.IResolvable) {
    this._triggerSSLExpirationAlert = value;
  }
  public resetTriggerSSLExpirationAlert() {
    this._triggerSSLExpirationAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSSLExpirationAlertInput() {
    return this._triggerSSLExpirationAlert;
  }

  // trigger_s_s_l_status_alert - computed: false, optional: true, required: false
  private _triggerSSLStatusAlert?: boolean | cdktf.IResolvable; 
  public get triggerSSLStatusAlert() {
    return this.getBooleanAttribute('trigger_s_s_l_status_alert');
  }
  public set triggerSSLStatusAlert(value: boolean | cdktf.IResolvable) {
    this._triggerSSLStatusAlert = value;
  }
  public resetTriggerSSLStatusAlert() {
    this._triggerSSLStatusAlert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get triggerSSLStatusAlertInput() {
    return this._triggerSSLStatusAlert;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // use_default_alert_setting - computed: false, optional: true, required: false
  private _useDefaultAlertSetting?: boolean | cdktf.IResolvable; 
  public get useDefaultAlertSetting() {
    return this.getBooleanAttribute('use_default_alert_setting');
  }
  public set useDefaultAlertSetting(value: boolean | cdktf.IResolvable) {
    this._useDefaultAlertSetting = value;
  }
  public resetUseDefaultAlertSetting() {
    this._useDefaultAlertSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultAlertSettingInput() {
    return this._useDefaultAlertSetting;
  }

  // use_default_location_setting - computed: false, optional: true, required: false
  private _useDefaultLocationSetting?: boolean | cdktf.IResolvable; 
  public get useDefaultLocationSetting() {
    return this.getBooleanAttribute('use_default_location_setting');
  }
  public set useDefaultLocationSetting(value: boolean | cdktf.IResolvable) {
    this._useDefaultLocationSetting = value;
  }
  public resetUseDefaultLocationSetting() {
    this._useDefaultLocationSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultLocationSettingInput() {
    return this._useDefaultLocationSetting;
  }

  // user_permission - computed: false, optional: true, required: false
  private _userPermission?: string; 
  public get userPermission() {
    return this.getStringAttribute('user_permission');
  }
  public set userPermission(value: string) {
    this._userPermission = value;
  }
  public resetUserPermission() {
    this._userPermission = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userPermissionInput() {
    return this._userPermission;
  }

  // test_location - computed: false, optional: true, required: false
  private _testLocation = new DataLogicmonitorWebsiteTestLocationList(this, "test_location", false);
  public get testLocation() {
    return this._testLocation;
  }
  public putTestLocation(value: DataLogicmonitorWebsiteTestLocation[] | cdktf.IResolvable) {
    this._testLocation.internalValue = value;
  }
  public resetTestLocation() {
    this._testLocation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testLocationInput() {
    return this._testLocation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      alert_expr: cdktf.stringToTerraform(this._alertExpr),
      description: cdktf.stringToTerraform(this._description),
      disable_alerting: cdktf.booleanToTerraform(this._disableAlerting),
      domain: cdktf.stringToTerraform(this._domain),
      filter: cdktf.stringToTerraform(this._filter),
      global_sm_alert_cond: cdktf.numberToTerraform(this._globalSmAlertCond),
      group_id: cdktf.numberToTerraform(this._groupId),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.numberToTerraform(this._id),
      ignore_s_s_l: cdktf.booleanToTerraform(this._ignoreSSL),
      individual_alert_level: cdktf.stringToTerraform(this._individualAlertLevel),
      individual_sm_alert_enable: cdktf.booleanToTerraform(this._individualSmAlertEnable),
      is_internal: cdktf.booleanToTerraform(this._isInternal),
      last_updated: cdktf.numberToTerraform(this._lastUpdated),
      name: cdktf.stringToTerraform(this._name),
      overall_alert_level: cdktf.stringToTerraform(this._overallAlertLevel),
      polling_interval: cdktf.numberToTerraform(this._pollingInterval),
      schema: cdktf.stringToTerraform(this._schema),
      status: cdktf.stringToTerraform(this._status),
      steps: cdktf.listMapper(dataLogicmonitorWebsiteStepsToTerraform, false)(this._steps.internalValue),
      stop_monitoring: cdktf.booleanToTerraform(this._stopMonitoring),
      stop_monitoring_by_folder: cdktf.booleanToTerraform(this._stopMonitoringByFolder),
      template: cdktf.hashMapper(cdktf.stringToTerraform)(this._template),
      transition: cdktf.numberToTerraform(this._transition),
      trigger_s_s_l_expiration_alert: cdktf.booleanToTerraform(this._triggerSSLExpirationAlert),
      trigger_s_s_l_status_alert: cdktf.booleanToTerraform(this._triggerSSLStatusAlert),
      type: cdktf.stringToTerraform(this._type),
      use_default_alert_setting: cdktf.booleanToTerraform(this._useDefaultAlertSetting),
      use_default_location_setting: cdktf.booleanToTerraform(this._useDefaultLocationSetting),
      user_permission: cdktf.stringToTerraform(this._userPermission),
      test_location: cdktf.listMapper(dataLogicmonitorWebsiteTestLocationToTerraform, true)(this._testLocation.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert_expr: {
        value: cdktf.stringToHclTerraform(this._alertExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_alerting: {
        value: cdktf.booleanToHclTerraform(this._disableAlerting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      global_sm_alert_cond: {
        value: cdktf.numberToHclTerraform(this._globalSmAlertCond),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      group_id: {
        value: cdktf.numberToHclTerraform(this._groupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ignore_s_s_l: {
        value: cdktf.booleanToHclTerraform(this._ignoreSSL),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      individual_alert_level: {
        value: cdktf.stringToHclTerraform(this._individualAlertLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      individual_sm_alert_enable: {
        value: cdktf.booleanToHclTerraform(this._individualSmAlertEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_internal: {
        value: cdktf.booleanToHclTerraform(this._isInternal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      last_updated: {
        value: cdktf.numberToHclTerraform(this._lastUpdated),
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
      overall_alert_level: {
        value: cdktf.stringToHclTerraform(this._overallAlertLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      polling_interval: {
        value: cdktf.numberToHclTerraform(this._pollingInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      steps: {
        value: cdktf.listMapperHcl(dataLogicmonitorWebsiteStepsToHclTerraform, false)(this._steps.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorWebsiteStepsList",
      },
      stop_monitoring: {
        value: cdktf.booleanToHclTerraform(this._stopMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stop_monitoring_by_folder: {
        value: cdktf.booleanToHclTerraform(this._stopMonitoringByFolder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      template: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._template),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      transition: {
        value: cdktf.numberToHclTerraform(this._transition),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      trigger_s_s_l_expiration_alert: {
        value: cdktf.booleanToHclTerraform(this._triggerSSLExpirationAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trigger_s_s_l_status_alert: {
        value: cdktf.booleanToHclTerraform(this._triggerSSLStatusAlert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_default_alert_setting: {
        value: cdktf.booleanToHclTerraform(this._useDefaultAlertSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_default_location_setting: {
        value: cdktf.booleanToHclTerraform(this._useDefaultLocationSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_permission: {
        value: cdktf.stringToHclTerraform(this._userPermission),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      test_location: {
        value: cdktf.listMapperHcl(dataLogicmonitorWebsiteTestLocationToHclTerraform, true)(this._testLocation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataLogicmonitorWebsiteTestLocationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
