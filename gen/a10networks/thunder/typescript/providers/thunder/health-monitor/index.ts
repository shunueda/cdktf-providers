// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HealthMonitorConfig extends cdktf.TerraformMetaArguments {
  /**
  * Initial health state will default to UP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#default_state_up HealthMonitor#default_state_up}
  */
  readonly defaultStateUp?: number;
  /**
  * Disable the target if health check failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#disable_after_down HealthMonitor#disable_after_down}
  */
  readonly disableAfterDown?: number;
  /**
  * 'enable': Enable health-check on dplane; 'disable': Disable health-check on dplane; 'auto': Auto select(default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dplane HealthMonitor#dplane}
  */
  readonly dplane?: string;
  /**
  * Enable strict L2dsr health-check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dsr_l2_strict HealthMonitor#dsr_l2_strict}
  */
  readonly dsrL2Strict?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#id HealthMonitor#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify the Healthcheck Interval (Interval Value, in seconds (default 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#interval HealthMonitor#interval}
  */
  readonly interval?: number;
  /**
  * Monitor Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#name HealthMonitor#name}
  */
  readonly name: string;
  /**
  * Override implicitly inherited IPv4 address from target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#override_ipv4 HealthMonitor#override_ipv4}
  */
  readonly overrideIpv4?: string;
  /**
  * Override implicitly inherited IPv6 address from target
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#override_ipv6 HealthMonitor#override_ipv6}
  */
  readonly overrideIpv6?: string;
  /**
  * Override implicitly inherited port from target (Port number (1-65534))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#override_port HealthMonitor#override_port}
  */
  readonly overridePort?: number;
  /**
  * Specify passive mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#passive HealthMonitor#passive}
  */
  readonly passive?: number;
  /**
  * Interval to do manual health checking while in passive mode (Specify value in seconds (Default is 10 s))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#passive_interval HealthMonitor#passive_interval}
  */
  readonly passiveInterval?: number;
  /**
  * Specify the Healthcheck Retries (Retry Count (default 3))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#retry HealthMonitor#retry}
  */
  readonly retry?: number;
  /**
  * Number of samples in one epoch above which passive HC is enabled. If below or equal to the threshold, passive HC is disabled (Specify number of samples in one second (Default is 50). If the number of samples is 0, no action is taken)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sample_threshold HealthMonitor#sample_threshold}
  */
  readonly sampleThreshold?: number;
  /**
  * Specify OpenSSL Cipher Suite name(s) for Health check (OpenSSL Cipher Suite(s) (Eg: AES128-SHA256), if the cipher is invalid, would give information at HM down reason)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ssl_ciphers HealthMonitor#ssl_ciphers}
  */
  readonly sslCiphers?: string;
  /**
  * Lower TLS/SSL version can be downgraded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ssl_dgversion HealthMonitor#ssl_dgversion}
  */
  readonly sslDgversion?: number;
  /**
  * Enable SSL-Ticket Session Resumption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ssl_ticket HealthMonitor#ssl_ticket}
  */
  readonly sslTicket?: number;
  /**
  * SSL-Ticket lifetime (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ssl_ticket_lifetime HealthMonitor#ssl_ticket_lifetime}
  */
  readonly sslTicketLifetime?: number;
  /**
  * TLS/SSL version (TLS/SSL version: 31-TLSv1.0, 32-TLSv1.1, 33-TLSv1.2 and 34-TLSv1.3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ssl_version HealthMonitor#ssl_version}
  */
  readonly sslVersion?: number;
  /**
  * 'status-code-2xx': Enable passive mode with 2xx http status code; 'status-code-non-5xx': Enable passive mode with non-5xx http status code;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#status_code HealthMonitor#status_code}
  */
  readonly statusCode?: string;
  /**
  * Require strictly retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#strict_retry_on_server_err_resp HealthMonitor#strict_retry_on_server_err_resp}
  */
  readonly strictRetryOnServerErrResp?: number;
  /**
  * Server side SSL template for health monitor (Server side SSL Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#template_server_ssl HealthMonitor#template_server_ssl}
  */
  readonly templateServerSsl?: string;
  /**
  * Threshold percentage above which passive mode is enabled (Specify percentage (Default is 75%))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#threshold HealthMonitor#threshold}
  */
  readonly threshold?: number;
  /**
  * Specify the Healthcheck Timeout (Timeout Value, in seconds(default 5), Timeout should be less than or equal to interval)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#timeout HealthMonitor#timeout}
  */
  readonly timeout?: number;
  /**
  * Specify the Healthcheck Retries before declaring target up (Up-retry count (default 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#up_retry HealthMonitor#up_retry}
  */
  readonly upRetry?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#user_tag HealthMonitor#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * header_insert block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#header_insert HealthMonitor#header_insert}
  */
  readonly headerInsert?: HealthMonitorHeaderInsert;
  /**
  * method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#method HealthMonitor#method}
  */
  readonly method?: HealthMonitorMethod;
  /**
  * proxy_header block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#proxy_header HealthMonitor#proxy_header}
  */
  readonly proxyHeader?: HealthMonitorProxyHeader;
}
export interface HealthMonitorHeaderInsertInsertListStruct {
  /**
  * Header Content (Format: "[name]:[value]")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#insert_content HealthMonitor#insert_content}
  */
  readonly insertContent?: string;
}

export function healthMonitorHeaderInsertInsertListStructToTerraform(struct?: HealthMonitorHeaderInsertInsertListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    insert_content: cdktf.stringToTerraform(struct!.insertContent),
  }
}


export function healthMonitorHeaderInsertInsertListStructToHclTerraform(struct?: HealthMonitorHeaderInsertInsertListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    insert_content: {
      value: cdktf.stringToHclTerraform(struct!.insertContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorHeaderInsertInsertListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): HealthMonitorHeaderInsertInsertListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._insertContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertContent = this._insertContent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorHeaderInsertInsertListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._insertContent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._insertContent = value.insertContent;
    }
  }

  // insert_content - computed: false, optional: true, required: false
  private _insertContent?: string; 
  public get insertContent() {
    return this.getStringAttribute('insert_content');
  }
  public set insertContent(value: string) {
    this._insertContent = value;
  }
  public resetInsertContent() {
    this._insertContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertContentInput() {
    return this._insertContent;
  }
}

export class HealthMonitorHeaderInsertInsertListStructList extends cdktf.ComplexList {
  public internalValue? : HealthMonitorHeaderInsertInsertListStruct[] | cdktf.IResolvable

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
  public get(index: number): HealthMonitorHeaderInsertInsertListStructOutputReference {
    return new HealthMonitorHeaderInsertInsertListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface HealthMonitorHeaderInsert {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * insert_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#insert_list HealthMonitor#insert_list}
  */
  readonly insertList?: HealthMonitorHeaderInsertInsertListStruct[] | cdktf.IResolvable;
}

export function healthMonitorHeaderInsertToTerraform(struct?: HealthMonitorHeaderInsertOutputReference | HealthMonitorHeaderInsert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    insert_list: cdktf.listMapper(healthMonitorHeaderInsertInsertListStructToTerraform, true)(struct!.insertList),
  }
}


export function healthMonitorHeaderInsertToHclTerraform(struct?: HealthMonitorHeaderInsertOutputReference | HealthMonitorHeaderInsert): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    insert_list: {
      value: cdktf.listMapperHcl(healthMonitorHeaderInsertInsertListStructToHclTerraform, true)(struct!.insertList),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorHeaderInsertInsertListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorHeaderInsertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorHeaderInsert | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._insertList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.insertList = this._insertList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorHeaderInsert | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._insertList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._insertList.internalValue = value.insertList;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // insert_list - computed: false, optional: true, required: false
  private _insertList = new HealthMonitorHeaderInsertInsertListStructList(this, "insert_list", false);
  public get insertList() {
    return this._insertList;
  }
  public putInsertList(value: HealthMonitorHeaderInsertInsertListStruct[] | cdktf.IResolvable) {
    this._insertList.internalValue = value;
  }
  public resetInsertList() {
    this._insertList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertListInput() {
    return this._insertList.internalValue;
  }
}
export interface HealthMonitorMethodCompound {
  /**
  * Compound type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#compound HealthMonitor#compound}
  */
  readonly compound?: number;
  /**
  * Enter Reverse Polish Notation, example: sub hm1 sub hm2 and
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#rpn_string HealthMonitor#rpn_string}
  */
  readonly rpnString?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodCompoundToTerraform(struct?: HealthMonitorMethodCompoundOutputReference | HealthMonitorMethodCompound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compound: cdktf.numberToTerraform(struct!.compound),
    rpn_string: cdktf.stringToTerraform(struct!.rpnString),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodCompoundToHclTerraform(struct?: HealthMonitorMethodCompoundOutputReference | HealthMonitorMethodCompound): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compound: {
      value: cdktf.numberToHclTerraform(struct!.compound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rpn_string: {
      value: cdktf.stringToHclTerraform(struct!.rpnString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodCompoundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodCompound | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compound !== undefined) {
      hasAnyValues = true;
      internalValueResult.compound = this._compound;
    }
    if (this._rpnString !== undefined) {
      hasAnyValues = true;
      internalValueResult.rpnString = this._rpnString;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodCompound | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compound = undefined;
      this._rpnString = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compound = value.compound;
      this._rpnString = value.rpnString;
      this._uuid = value.uuid;
    }
  }

  // compound - computed: false, optional: true, required: false
  private _compound?: number; 
  public get compound() {
    return this.getNumberAttribute('compound');
  }
  public set compound(value: number) {
    this._compound = value;
  }
  public resetCompound() {
    this._compound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundInput() {
    return this._compound;
  }

  // rpn_string - computed: false, optional: true, required: false
  private _rpnString?: string; 
  public get rpnString() {
    return this.getStringAttribute('rpn_string');
  }
  public set rpnString(value: string) {
    this._rpnString = value;
  }
  public resetRpnString() {
    this._rpnString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rpnStringInput() {
    return this._rpnString;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodDatabase {
  /**
  * DATABASE type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#database HealthMonitor#database}
  */
  readonly database?: number;
  /**
  * 'mssql': Specify MSSQL database; 'mysql': Specify MySQL database; 'oracle': Specify Oracle database; 'postgresql': Specify PostgreSQL database;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#database_name HealthMonitor#database_name}
  */
  readonly databaseName?: string;
  /**
  * Specify the column number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_column HealthMonitor#db_column}
  */
  readonly dbColumn?: number;
  /**
  * Specify the column number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_column_integer HealthMonitor#db_column_integer}
  */
  readonly dbColumnInteger?: number;
  /**
  * Specify the database name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_name HealthMonitor#db_name}
  */
  readonly dbName?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_password HealthMonitor#db_password}
  */
  readonly dbPassword?: number;
  /**
  * Configure password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_password_str HealthMonitor#db_password_str}
  */
  readonly dbPasswordStr?: string;
  /**
  * Specify the response string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_receive HealthMonitor#db_receive}
  */
  readonly dbReceive?: string;
  /**
  * Specify the response integer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_receive_integer HealthMonitor#db_receive_integer}
  */
  readonly dbReceiveInteger?: number;
  /**
  * Specify the row number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_row HealthMonitor#db_row}
  */
  readonly dbRow?: number;
  /**
  * Specify the row number for receiving
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_row_integer HealthMonitor#db_row_integer}
  */
  readonly dbRowInteger?: number;
  /**
  * Specify the SQL query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_send HealthMonitor#db_send}
  */
  readonly dbSend?: string;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#db_username HealthMonitor#db_username}
  */
  readonly dbUsername?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodDatabaseToTerraform(struct?: HealthMonitorMethodDatabaseOutputReference | HealthMonitorMethodDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    database: cdktf.numberToTerraform(struct!.database),
    database_name: cdktf.stringToTerraform(struct!.databaseName),
    db_column: cdktf.numberToTerraform(struct!.dbColumn),
    db_column_integer: cdktf.numberToTerraform(struct!.dbColumnInteger),
    db_name: cdktf.stringToTerraform(struct!.dbName),
    db_password: cdktf.numberToTerraform(struct!.dbPassword),
    db_password_str: cdktf.stringToTerraform(struct!.dbPasswordStr),
    db_receive: cdktf.stringToTerraform(struct!.dbReceive),
    db_receive_integer: cdktf.numberToTerraform(struct!.dbReceiveInteger),
    db_row: cdktf.numberToTerraform(struct!.dbRow),
    db_row_integer: cdktf.numberToTerraform(struct!.dbRowInteger),
    db_send: cdktf.stringToTerraform(struct!.dbSend),
    db_username: cdktf.stringToTerraform(struct!.dbUsername),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodDatabaseToHclTerraform(struct?: HealthMonitorMethodDatabaseOutputReference | HealthMonitorMethodDatabase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    database: {
      value: cdktf.numberToHclTerraform(struct!.database),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    database_name: {
      value: cdktf.stringToHclTerraform(struct!.databaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_column: {
      value: cdktf.numberToHclTerraform(struct!.dbColumn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_column_integer: {
      value: cdktf.numberToHclTerraform(struct!.dbColumnInteger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_name: {
      value: cdktf.stringToHclTerraform(struct!.dbName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_password: {
      value: cdktf.numberToHclTerraform(struct!.dbPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_password_str: {
      value: cdktf.stringToHclTerraform(struct!.dbPasswordStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_receive: {
      value: cdktf.stringToHclTerraform(struct!.dbReceive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_receive_integer: {
      value: cdktf.numberToHclTerraform(struct!.dbReceiveInteger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_row: {
      value: cdktf.numberToHclTerraform(struct!.dbRow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_row_integer: {
      value: cdktf.numberToHclTerraform(struct!.dbRowInteger),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    db_send: {
      value: cdktf.stringToHclTerraform(struct!.dbSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    db_username: {
      value: cdktf.stringToHclTerraform(struct!.dbUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDatabaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDatabase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._database !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database;
    }
    if (this._databaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.databaseName = this._databaseName;
    }
    if (this._dbColumn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbColumn = this._dbColumn;
    }
    if (this._dbColumnInteger !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbColumnInteger = this._dbColumnInteger;
    }
    if (this._dbName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbName = this._dbName;
    }
    if (this._dbPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPassword = this._dbPassword;
    }
    if (this._dbPasswordStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbPasswordStr = this._dbPasswordStr;
    }
    if (this._dbReceive !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbReceive = this._dbReceive;
    }
    if (this._dbReceiveInteger !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbReceiveInteger = this._dbReceiveInteger;
    }
    if (this._dbRow !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRow = this._dbRow;
    }
    if (this._dbRowInteger !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbRowInteger = this._dbRowInteger;
    }
    if (this._dbSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbSend = this._dbSend;
    }
    if (this._dbUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbUsername = this._dbUsername;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDatabase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._database = undefined;
      this._databaseName = undefined;
      this._dbColumn = undefined;
      this._dbColumnInteger = undefined;
      this._dbName = undefined;
      this._dbPassword = undefined;
      this._dbPasswordStr = undefined;
      this._dbReceive = undefined;
      this._dbReceiveInteger = undefined;
      this._dbRow = undefined;
      this._dbRowInteger = undefined;
      this._dbSend = undefined;
      this._dbUsername = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._database = value.database;
      this._databaseName = value.databaseName;
      this._dbColumn = value.dbColumn;
      this._dbColumnInteger = value.dbColumnInteger;
      this._dbName = value.dbName;
      this._dbPassword = value.dbPassword;
      this._dbPasswordStr = value.dbPasswordStr;
      this._dbReceive = value.dbReceive;
      this._dbReceiveInteger = value.dbReceiveInteger;
      this._dbRow = value.dbRow;
      this._dbRowInteger = value.dbRowInteger;
      this._dbSend = value.dbSend;
      this._dbUsername = value.dbUsername;
      this._uuid = value.uuid;
    }
  }

  // database - computed: false, optional: true, required: false
  private _database?: number; 
  public get database() {
    return this.getNumberAttribute('database');
  }
  public set database(value: number) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // database_name - computed: false, optional: true, required: false
  private _databaseName?: string; 
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }
  public set databaseName(value: string) {
    this._databaseName = value;
  }
  public resetDatabaseName() {
    this._databaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseNameInput() {
    return this._databaseName;
  }

  // db_column - computed: false, optional: true, required: false
  private _dbColumn?: number; 
  public get dbColumn() {
    return this.getNumberAttribute('db_column');
  }
  public set dbColumn(value: number) {
    this._dbColumn = value;
  }
  public resetDbColumn() {
    this._dbColumn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbColumnInput() {
    return this._dbColumn;
  }

  // db_column_integer - computed: false, optional: true, required: false
  private _dbColumnInteger?: number; 
  public get dbColumnInteger() {
    return this.getNumberAttribute('db_column_integer');
  }
  public set dbColumnInteger(value: number) {
    this._dbColumnInteger = value;
  }
  public resetDbColumnInteger() {
    this._dbColumnInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbColumnIntegerInput() {
    return this._dbColumnInteger;
  }

  // db_name - computed: false, optional: true, required: false
  private _dbName?: string; 
  public get dbName() {
    return this.getStringAttribute('db_name');
  }
  public set dbName(value: string) {
    this._dbName = value;
  }
  public resetDbName() {
    this._dbName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbNameInput() {
    return this._dbName;
  }

  // db_password - computed: false, optional: true, required: false
  private _dbPassword?: number; 
  public get dbPassword() {
    return this.getNumberAttribute('db_password');
  }
  public set dbPassword(value: number) {
    this._dbPassword = value;
  }
  public resetDbPassword() {
    this._dbPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordInput() {
    return this._dbPassword;
  }

  // db_password_str - computed: false, optional: true, required: false
  private _dbPasswordStr?: string; 
  public get dbPasswordStr() {
    return this.getStringAttribute('db_password_str');
  }
  public set dbPasswordStr(value: string) {
    this._dbPasswordStr = value;
  }
  public resetDbPasswordStr() {
    this._dbPasswordStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbPasswordStrInput() {
    return this._dbPasswordStr;
  }

  // db_receive - computed: false, optional: true, required: false
  private _dbReceive?: string; 
  public get dbReceive() {
    return this.getStringAttribute('db_receive');
  }
  public set dbReceive(value: string) {
    this._dbReceive = value;
  }
  public resetDbReceive() {
    this._dbReceive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbReceiveInput() {
    return this._dbReceive;
  }

  // db_receive_integer - computed: false, optional: true, required: false
  private _dbReceiveInteger?: number; 
  public get dbReceiveInteger() {
    return this.getNumberAttribute('db_receive_integer');
  }
  public set dbReceiveInteger(value: number) {
    this._dbReceiveInteger = value;
  }
  public resetDbReceiveInteger() {
    this._dbReceiveInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbReceiveIntegerInput() {
    return this._dbReceiveInteger;
  }

  // db_row - computed: false, optional: true, required: false
  private _dbRow?: number; 
  public get dbRow() {
    return this.getNumberAttribute('db_row');
  }
  public set dbRow(value: number) {
    this._dbRow = value;
  }
  public resetDbRow() {
    this._dbRow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRowInput() {
    return this._dbRow;
  }

  // db_row_integer - computed: false, optional: true, required: false
  private _dbRowInteger?: number; 
  public get dbRowInteger() {
    return this.getNumberAttribute('db_row_integer');
  }
  public set dbRowInteger(value: number) {
    this._dbRowInteger = value;
  }
  public resetDbRowInteger() {
    this._dbRowInteger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbRowIntegerInput() {
    return this._dbRowInteger;
  }

  // db_send - computed: false, optional: true, required: false
  private _dbSend?: string; 
  public get dbSend() {
    return this.getStringAttribute('db_send');
  }
  public set dbSend(value: string) {
    this._dbSend = value;
  }
  public resetDbSend() {
    this._dbSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbSendInput() {
    return this._dbSend;
  }

  // db_username - computed: false, optional: true, required: false
  private _dbUsername?: string; 
  public get dbUsername() {
    return this.getStringAttribute('db_username');
  }
  public set dbUsername(value: string) {
    this._dbUsername = value;
  }
  public resetDbUsername() {
    this._dbUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbUsernameInput() {
    return this._dbUsername;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodDnsDnsDomainExpect {
  /**
  * Specify fully qualified domain name expected in DNS response answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_fqdn HealthMonitor#dns_domain_fqdn}
  */
  readonly dnsDomainFqdn?: string;
  /**
  * Specify expected resolved IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_ipv4 HealthMonitor#dns_domain_ipv4}
  */
  readonly dnsDomainIpv4?: string;
  /**
  * Specify expected resolved IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_ipv6 HealthMonitor#dns_domain_ipv6}
  */
  readonly dnsDomainIpv6?: string;
  /**
  * Specify response code range (e.g. 0,1-5) (Format is xx,xx-xx (xx between [0,15]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_response HealthMonitor#dns_domain_response}
  */
  readonly dnsDomainResponse?: string;
}

export function healthMonitorMethodDnsDnsDomainExpectToTerraform(struct?: HealthMonitorMethodDnsDnsDomainExpectOutputReference | HealthMonitorMethodDnsDnsDomainExpect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_domain_fqdn: cdktf.stringToTerraform(struct!.dnsDomainFqdn),
    dns_domain_ipv4: cdktf.stringToTerraform(struct!.dnsDomainIpv4),
    dns_domain_ipv6: cdktf.stringToTerraform(struct!.dnsDomainIpv6),
    dns_domain_response: cdktf.stringToTerraform(struct!.dnsDomainResponse),
  }
}


export function healthMonitorMethodDnsDnsDomainExpectToHclTerraform(struct?: HealthMonitorMethodDnsDnsDomainExpectOutputReference | HealthMonitorMethodDnsDnsDomainExpect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_domain_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_ipv4: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainIpv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_response: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainResponse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsDnsDomainExpectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDnsDnsDomainExpect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsDomainFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainFqdn = this._dnsDomainFqdn;
    }
    if (this._dnsDomainIpv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainIpv4 = this._dnsDomainIpv4;
    }
    if (this._dnsDomainIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainIpv6 = this._dnsDomainIpv6;
    }
    if (this._dnsDomainResponse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainResponse = this._dnsDomainResponse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDnsDnsDomainExpect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsDomainFqdn = undefined;
      this._dnsDomainIpv4 = undefined;
      this._dnsDomainIpv6 = undefined;
      this._dnsDomainResponse = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsDomainFqdn = value.dnsDomainFqdn;
      this._dnsDomainIpv4 = value.dnsDomainIpv4;
      this._dnsDomainIpv6 = value.dnsDomainIpv6;
      this._dnsDomainResponse = value.dnsDomainResponse;
    }
  }

  // dns_domain_fqdn - computed: false, optional: true, required: false
  private _dnsDomainFqdn?: string; 
  public get dnsDomainFqdn() {
    return this.getStringAttribute('dns_domain_fqdn');
  }
  public set dnsDomainFqdn(value: string) {
    this._dnsDomainFqdn = value;
  }
  public resetDnsDomainFqdn() {
    this._dnsDomainFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainFqdnInput() {
    return this._dnsDomainFqdn;
  }

  // dns_domain_ipv4 - computed: false, optional: true, required: false
  private _dnsDomainIpv4?: string; 
  public get dnsDomainIpv4() {
    return this.getStringAttribute('dns_domain_ipv4');
  }
  public set dnsDomainIpv4(value: string) {
    this._dnsDomainIpv4 = value;
  }
  public resetDnsDomainIpv4() {
    this._dnsDomainIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainIpv4Input() {
    return this._dnsDomainIpv4;
  }

  // dns_domain_ipv6 - computed: false, optional: true, required: false
  private _dnsDomainIpv6?: string; 
  public get dnsDomainIpv6() {
    return this.getStringAttribute('dns_domain_ipv6');
  }
  public set dnsDomainIpv6(value: string) {
    this._dnsDomainIpv6 = value;
  }
  public resetDnsDomainIpv6() {
    this._dnsDomainIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainIpv6Input() {
    return this._dnsDomainIpv6;
  }

  // dns_domain_response - computed: false, optional: true, required: false
  private _dnsDomainResponse?: string; 
  public get dnsDomainResponse() {
    return this.getStringAttribute('dns_domain_response');
  }
  public set dnsDomainResponse(value: string) {
    this._dnsDomainResponse = value;
  }
  public resetDnsDomainResponse() {
    this._dnsDomainResponse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainResponseInput() {
    return this._dnsDomainResponse;
  }
}
export interface HealthMonitorMethodDnsDnsIpv4Expect {
  /**
  * Specify fully qualified domain name expected in DNS response answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_fqdn HealthMonitor#dns_ipv4_fqdn}
  */
  readonly dnsIpv4Fqdn?: string;
  /**
  * Specify response code range (e.g. 0,1-5) (Format is xx,xx-xx (xx between [0,15]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_response HealthMonitor#dns_ipv4_response}
  */
  readonly dnsIpv4Response?: string;
}

export function healthMonitorMethodDnsDnsIpv4ExpectToTerraform(struct?: HealthMonitorMethodDnsDnsIpv4ExpectOutputReference | HealthMonitorMethodDnsDnsIpv4Expect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ipv4_fqdn: cdktf.stringToTerraform(struct!.dnsIpv4Fqdn),
    dns_ipv4_response: cdktf.stringToTerraform(struct!.dnsIpv4Response),
  }
}


export function healthMonitorMethodDnsDnsIpv4ExpectToHclTerraform(struct?: HealthMonitorMethodDnsDnsIpv4ExpectOutputReference | HealthMonitorMethodDnsDnsIpv4Expect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ipv4_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv4Fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv4_response: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv4Response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsDnsIpv4ExpectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDnsDnsIpv4Expect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIpv4Fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Fqdn = this._dnsIpv4Fqdn;
    }
    if (this._dnsIpv4Response !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Response = this._dnsIpv4Response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDnsDnsIpv4Expect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIpv4Fqdn = undefined;
      this._dnsIpv4Response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIpv4Fqdn = value.dnsIpv4Fqdn;
      this._dnsIpv4Response = value.dnsIpv4Response;
    }
  }

  // dns_ipv4_fqdn - computed: false, optional: true, required: false
  private _dnsIpv4Fqdn?: string; 
  public get dnsIpv4Fqdn() {
    return this.getStringAttribute('dns_ipv4_fqdn');
  }
  public set dnsIpv4Fqdn(value: string) {
    this._dnsIpv4Fqdn = value;
  }
  public resetDnsIpv4Fqdn() {
    this._dnsIpv4Fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4FqdnInput() {
    return this._dnsIpv4Fqdn;
  }

  // dns_ipv4_response - computed: false, optional: true, required: false
  private _dnsIpv4Response?: string; 
  public get dnsIpv4Response() {
    return this.getStringAttribute('dns_ipv4_response');
  }
  public set dnsIpv4Response(value: string) {
    this._dnsIpv4Response = value;
  }
  public resetDnsIpv4Response() {
    this._dnsIpv4Response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4ResponseInput() {
    return this._dnsIpv4Response;
  }
}
export interface HealthMonitorMethodDnsDnsIpv6Expect {
  /**
  * Specify fully qualified domain name expected in DNS response answer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_fqdn HealthMonitor#dns_ipv6_fqdn}
  */
  readonly dnsIpv6Fqdn?: string;
  /**
  * Specify response code range (e.g. 0,1-5) (Format is xx,xx-xx (xx between [0,15]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_response HealthMonitor#dns_ipv6_response}
  */
  readonly dnsIpv6Response?: string;
}

export function healthMonitorMethodDnsDnsIpv6ExpectToTerraform(struct?: HealthMonitorMethodDnsDnsIpv6ExpectOutputReference | HealthMonitorMethodDnsDnsIpv6Expect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns_ipv6_fqdn: cdktf.stringToTerraform(struct!.dnsIpv6Fqdn),
    dns_ipv6_response: cdktf.stringToTerraform(struct!.dnsIpv6Response),
  }
}


export function healthMonitorMethodDnsDnsIpv6ExpectToHclTerraform(struct?: HealthMonitorMethodDnsDnsIpv6ExpectOutputReference | HealthMonitorMethodDnsDnsIpv6Expect): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns_ipv6_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Fqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv6_response: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Response),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsDnsIpv6ExpectOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDnsDnsIpv6Expect | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dnsIpv6Fqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Fqdn = this._dnsIpv6Fqdn;
    }
    if (this._dnsIpv6Response !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Response = this._dnsIpv6Response;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDnsDnsIpv6Expect | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dnsIpv6Fqdn = undefined;
      this._dnsIpv6Response = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dnsIpv6Fqdn = value.dnsIpv6Fqdn;
      this._dnsIpv6Response = value.dnsIpv6Response;
    }
  }

  // dns_ipv6_fqdn - computed: false, optional: true, required: false
  private _dnsIpv6Fqdn?: string; 
  public get dnsIpv6Fqdn() {
    return this.getStringAttribute('dns_ipv6_fqdn');
  }
  public set dnsIpv6Fqdn(value: string) {
    this._dnsIpv6Fqdn = value;
  }
  public resetDnsIpv6Fqdn() {
    this._dnsIpv6Fqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6FqdnInput() {
    return this._dnsIpv6Fqdn;
  }

  // dns_ipv6_response - computed: false, optional: true, required: false
  private _dnsIpv6Response?: string; 
  public get dnsIpv6Response() {
    return this.getStringAttribute('dns_ipv6_response');
  }
  public set dnsIpv6Response(value: string) {
    this._dnsIpv6Response = value;
  }
  public resetDnsIpv6Response() {
    this._dnsIpv6Response = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6ResponseInput() {
    return this._dnsIpv6Response;
  }
}
export interface HealthMonitorMethodDns {
  /**
  * DNS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns HealthMonitor#dns}
  */
  readonly dns?: number;
  /**
  * Specify fully qualified domain name of the host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain HealthMonitor#dns_domain}
  */
  readonly dnsDomain?: string;
  /**
  * Specify DNS port, default is 53 (DNS Port(default 53))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_port HealthMonitor#dns_domain_port}
  */
  readonly dnsDomainPort?: number;
  /**
  * 'enabled': Set the recursion bit; 'disabled': Clear the recursion bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_recurse HealthMonitor#dns_domain_recurse}
  */
  readonly dnsDomainRecurse?: string;
  /**
  * Configure DNS transport over TCP, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_tcp HealthMonitor#dns_domain_tcp}
  */
  readonly dnsDomainTcp?: number;
  /**
  * 'A': Used for storing Ipv4 address (default); 'CNAME': Canonical name for a DNS alias; 'SOA': Start of authority; 'PTR': Domain name pointer; 'MX': Mail exchanger; 'TXT': Text string; 'AAAA': Used for storing Ipv6 128-bits address;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_type HealthMonitor#dns_domain_type}
  */
  readonly dnsDomainType?: string;
  /**
  * Reverse DNS lookup (Specify IPv4 or IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ip_key HealthMonitor#dns_ip_key}
  */
  readonly dnsIpKey?: number;
  /**
  * Specify IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_addr HealthMonitor#dns_ipv4_addr}
  */
  readonly dnsIpv4Addr?: string;
  /**
  * Specify DNS port, default is 53 (DNS Port(default 53))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_port HealthMonitor#dns_ipv4_port}
  */
  readonly dnsIpv4Port?: number;
  /**
  * 'enabled': Set the recursion bit; 'disabled': Clear the recursion bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_recurse HealthMonitor#dns_ipv4_recurse}
  */
  readonly dnsIpv4Recurse?: string;
  /**
  * Configure DNS transport over TCP, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_tcp HealthMonitor#dns_ipv4_tcp}
  */
  readonly dnsIpv4Tcp?: number;
  /**
  * Specify IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_addr HealthMonitor#dns_ipv6_addr}
  */
  readonly dnsIpv6Addr?: string;
  /**
  * Specify DNS port, default is 53 (DNS Port(default 53))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_port HealthMonitor#dns_ipv6_port}
  */
  readonly dnsIpv6Port?: number;
  /**
  * 'enabled': Set the recursion bit; 'disabled': Clear the recursion bit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_recurse HealthMonitor#dns_ipv6_recurse}
  */
  readonly dnsIpv6Recurse?: string;
  /**
  * Configure DNS transport over TCP, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_tcp HealthMonitor#dns_ipv6_tcp}
  */
  readonly dnsIpv6Tcp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * dns_domain_expect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_domain_expect HealthMonitor#dns_domain_expect}
  */
  readonly dnsDomainExpect?: HealthMonitorMethodDnsDnsDomainExpect;
  /**
  * dns_ipv4_expect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv4_expect HealthMonitor#dns_ipv4_expect}
  */
  readonly dnsIpv4Expect?: HealthMonitorMethodDnsDnsIpv4Expect;
  /**
  * dns_ipv6_expect block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns_ipv6_expect HealthMonitor#dns_ipv6_expect}
  */
  readonly dnsIpv6Expect?: HealthMonitorMethodDnsDnsIpv6Expect;
}

export function healthMonitorMethodDnsToTerraform(struct?: HealthMonitorMethodDnsOutputReference | HealthMonitorMethodDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dns: cdktf.numberToTerraform(struct!.dns),
    dns_domain: cdktf.stringToTerraform(struct!.dnsDomain),
    dns_domain_port: cdktf.numberToTerraform(struct!.dnsDomainPort),
    dns_domain_recurse: cdktf.stringToTerraform(struct!.dnsDomainRecurse),
    dns_domain_tcp: cdktf.numberToTerraform(struct!.dnsDomainTcp),
    dns_domain_type: cdktf.stringToTerraform(struct!.dnsDomainType),
    dns_ip_key: cdktf.numberToTerraform(struct!.dnsIpKey),
    dns_ipv4_addr: cdktf.stringToTerraform(struct!.dnsIpv4Addr),
    dns_ipv4_port: cdktf.numberToTerraform(struct!.dnsIpv4Port),
    dns_ipv4_recurse: cdktf.stringToTerraform(struct!.dnsIpv4Recurse),
    dns_ipv4_tcp: cdktf.numberToTerraform(struct!.dnsIpv4Tcp),
    dns_ipv6_addr: cdktf.stringToTerraform(struct!.dnsIpv6Addr),
    dns_ipv6_port: cdktf.numberToTerraform(struct!.dnsIpv6Port),
    dns_ipv6_recurse: cdktf.stringToTerraform(struct!.dnsIpv6Recurse),
    dns_ipv6_tcp: cdktf.numberToTerraform(struct!.dnsIpv6Tcp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    dns_domain_expect: healthMonitorMethodDnsDnsDomainExpectToTerraform(struct!.dnsDomainExpect),
    dns_ipv4_expect: healthMonitorMethodDnsDnsIpv4ExpectToTerraform(struct!.dnsIpv4Expect),
    dns_ipv6_expect: healthMonitorMethodDnsDnsIpv6ExpectToTerraform(struct!.dnsIpv6Expect),
  }
}


export function healthMonitorMethodDnsToHclTerraform(struct?: HealthMonitorMethodDnsOutputReference | HealthMonitorMethodDns): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dns: {
      value: cdktf.numberToHclTerraform(struct!.dns),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_domain: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_port: {
      value: cdktf.numberToHclTerraform(struct!.dnsDomainPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_domain_recurse: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainRecurse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_tcp: {
      value: cdktf.numberToHclTerraform(struct!.dnsDomainTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_domain_type: {
      value: cdktf.stringToHclTerraform(struct!.dnsDomainType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ip_key: {
      value: cdktf.numberToHclTerraform(struct!.dnsIpKey),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_ipv4_addr: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv4_port: {
      value: cdktf.numberToHclTerraform(struct!.dnsIpv4Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_ipv4_recurse: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv4Recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv4_tcp: {
      value: cdktf.numberToHclTerraform(struct!.dnsIpv4Tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv6_port: {
      value: cdktf.numberToHclTerraform(struct!.dnsIpv6Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dns_ipv6_recurse: {
      value: cdktf.stringToHclTerraform(struct!.dnsIpv6Recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_ipv6_tcp: {
      value: cdktf.numberToHclTerraform(struct!.dnsIpv6Tcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dns_domain_expect: {
      value: healthMonitorMethodDnsDnsDomainExpectToHclTerraform(struct!.dnsDomainExpect),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodDnsDnsDomainExpectList",
    },
    dns_ipv4_expect: {
      value: healthMonitorMethodDnsDnsIpv4ExpectToHclTerraform(struct!.dnsIpv4Expect),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodDnsDnsIpv4ExpectList",
    },
    dns_ipv6_expect: {
      value: healthMonitorMethodDnsDnsIpv6ExpectToHclTerraform(struct!.dnsIpv6Expect),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodDnsDnsIpv6ExpectList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodDnsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodDns | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dns !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns;
    }
    if (this._dnsDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomain = this._dnsDomain;
    }
    if (this._dnsDomainPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainPort = this._dnsDomainPort;
    }
    if (this._dnsDomainRecurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainRecurse = this._dnsDomainRecurse;
    }
    if (this._dnsDomainTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainTcp = this._dnsDomainTcp;
    }
    if (this._dnsDomainType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainType = this._dnsDomainType;
    }
    if (this._dnsIpKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpKey = this._dnsIpKey;
    }
    if (this._dnsIpv4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Addr = this._dnsIpv4Addr;
    }
    if (this._dnsIpv4Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Port = this._dnsIpv4Port;
    }
    if (this._dnsIpv4Recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Recurse = this._dnsIpv4Recurse;
    }
    if (this._dnsIpv4Tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Tcp = this._dnsIpv4Tcp;
    }
    if (this._dnsIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Addr = this._dnsIpv6Addr;
    }
    if (this._dnsIpv6Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Port = this._dnsIpv6Port;
    }
    if (this._dnsIpv6Recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Recurse = this._dnsIpv6Recurse;
    }
    if (this._dnsIpv6Tcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Tcp = this._dnsIpv6Tcp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._dnsDomainExpect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsDomainExpect = this._dnsDomainExpect?.internalValue;
    }
    if (this._dnsIpv4Expect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv4Expect = this._dnsIpv4Expect?.internalValue;
    }
    if (this._dnsIpv6Expect?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsIpv6Expect = this._dnsIpv6Expect?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodDns | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dns = undefined;
      this._dnsDomain = undefined;
      this._dnsDomainPort = undefined;
      this._dnsDomainRecurse = undefined;
      this._dnsDomainTcp = undefined;
      this._dnsDomainType = undefined;
      this._dnsIpKey = undefined;
      this._dnsIpv4Addr = undefined;
      this._dnsIpv4Port = undefined;
      this._dnsIpv4Recurse = undefined;
      this._dnsIpv4Tcp = undefined;
      this._dnsIpv6Addr = undefined;
      this._dnsIpv6Port = undefined;
      this._dnsIpv6Recurse = undefined;
      this._dnsIpv6Tcp = undefined;
      this._uuid = undefined;
      this._dnsDomainExpect.internalValue = undefined;
      this._dnsIpv4Expect.internalValue = undefined;
      this._dnsIpv6Expect.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dns = value.dns;
      this._dnsDomain = value.dnsDomain;
      this._dnsDomainPort = value.dnsDomainPort;
      this._dnsDomainRecurse = value.dnsDomainRecurse;
      this._dnsDomainTcp = value.dnsDomainTcp;
      this._dnsDomainType = value.dnsDomainType;
      this._dnsIpKey = value.dnsIpKey;
      this._dnsIpv4Addr = value.dnsIpv4Addr;
      this._dnsIpv4Port = value.dnsIpv4Port;
      this._dnsIpv4Recurse = value.dnsIpv4Recurse;
      this._dnsIpv4Tcp = value.dnsIpv4Tcp;
      this._dnsIpv6Addr = value.dnsIpv6Addr;
      this._dnsIpv6Port = value.dnsIpv6Port;
      this._dnsIpv6Recurse = value.dnsIpv6Recurse;
      this._dnsIpv6Tcp = value.dnsIpv6Tcp;
      this._uuid = value.uuid;
      this._dnsDomainExpect.internalValue = value.dnsDomainExpect;
      this._dnsIpv4Expect.internalValue = value.dnsIpv4Expect;
      this._dnsIpv6Expect.internalValue = value.dnsIpv6Expect;
    }
  }

  // dns - computed: false, optional: true, required: false
  private _dns?: number; 
  public get dns() {
    return this.getNumberAttribute('dns');
  }
  public set dns(value: number) {
    this._dns = value;
  }
  public resetDns() {
    this._dns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns;
  }

  // dns_domain - computed: false, optional: true, required: false
  private _dnsDomain?: string; 
  public get dnsDomain() {
    return this.getStringAttribute('dns_domain');
  }
  public set dnsDomain(value: string) {
    this._dnsDomain = value;
  }
  public resetDnsDomain() {
    this._dnsDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainInput() {
    return this._dnsDomain;
  }

  // dns_domain_port - computed: false, optional: true, required: false
  private _dnsDomainPort?: number; 
  public get dnsDomainPort() {
    return this.getNumberAttribute('dns_domain_port');
  }
  public set dnsDomainPort(value: number) {
    this._dnsDomainPort = value;
  }
  public resetDnsDomainPort() {
    this._dnsDomainPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainPortInput() {
    return this._dnsDomainPort;
  }

  // dns_domain_recurse - computed: false, optional: true, required: false
  private _dnsDomainRecurse?: string; 
  public get dnsDomainRecurse() {
    return this.getStringAttribute('dns_domain_recurse');
  }
  public set dnsDomainRecurse(value: string) {
    this._dnsDomainRecurse = value;
  }
  public resetDnsDomainRecurse() {
    this._dnsDomainRecurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainRecurseInput() {
    return this._dnsDomainRecurse;
  }

  // dns_domain_tcp - computed: false, optional: true, required: false
  private _dnsDomainTcp?: number; 
  public get dnsDomainTcp() {
    return this.getNumberAttribute('dns_domain_tcp');
  }
  public set dnsDomainTcp(value: number) {
    this._dnsDomainTcp = value;
  }
  public resetDnsDomainTcp() {
    this._dnsDomainTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainTcpInput() {
    return this._dnsDomainTcp;
  }

  // dns_domain_type - computed: false, optional: true, required: false
  private _dnsDomainType?: string; 
  public get dnsDomainType() {
    return this.getStringAttribute('dns_domain_type');
  }
  public set dnsDomainType(value: string) {
    this._dnsDomainType = value;
  }
  public resetDnsDomainType() {
    this._dnsDomainType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainTypeInput() {
    return this._dnsDomainType;
  }

  // dns_ip_key - computed: false, optional: true, required: false
  private _dnsIpKey?: number; 
  public get dnsIpKey() {
    return this.getNumberAttribute('dns_ip_key');
  }
  public set dnsIpKey(value: number) {
    this._dnsIpKey = value;
  }
  public resetDnsIpKey() {
    this._dnsIpKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpKeyInput() {
    return this._dnsIpKey;
  }

  // dns_ipv4_addr - computed: false, optional: true, required: false
  private _dnsIpv4Addr?: string; 
  public get dnsIpv4Addr() {
    return this.getStringAttribute('dns_ipv4_addr');
  }
  public set dnsIpv4Addr(value: string) {
    this._dnsIpv4Addr = value;
  }
  public resetDnsIpv4Addr() {
    this._dnsIpv4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4AddrInput() {
    return this._dnsIpv4Addr;
  }

  // dns_ipv4_port - computed: false, optional: true, required: false
  private _dnsIpv4Port?: number; 
  public get dnsIpv4Port() {
    return this.getNumberAttribute('dns_ipv4_port');
  }
  public set dnsIpv4Port(value: number) {
    this._dnsIpv4Port = value;
  }
  public resetDnsIpv4Port() {
    this._dnsIpv4Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4PortInput() {
    return this._dnsIpv4Port;
  }

  // dns_ipv4_recurse - computed: false, optional: true, required: false
  private _dnsIpv4Recurse?: string; 
  public get dnsIpv4Recurse() {
    return this.getStringAttribute('dns_ipv4_recurse');
  }
  public set dnsIpv4Recurse(value: string) {
    this._dnsIpv4Recurse = value;
  }
  public resetDnsIpv4Recurse() {
    this._dnsIpv4Recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4RecurseInput() {
    return this._dnsIpv4Recurse;
  }

  // dns_ipv4_tcp - computed: false, optional: true, required: false
  private _dnsIpv4Tcp?: number; 
  public get dnsIpv4Tcp() {
    return this.getNumberAttribute('dns_ipv4_tcp');
  }
  public set dnsIpv4Tcp(value: number) {
    this._dnsIpv4Tcp = value;
  }
  public resetDnsIpv4Tcp() {
    this._dnsIpv4Tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4TcpInput() {
    return this._dnsIpv4Tcp;
  }

  // dns_ipv6_addr - computed: false, optional: true, required: false
  private _dnsIpv6Addr?: string; 
  public get dnsIpv6Addr() {
    return this.getStringAttribute('dns_ipv6_addr');
  }
  public set dnsIpv6Addr(value: string) {
    this._dnsIpv6Addr = value;
  }
  public resetDnsIpv6Addr() {
    this._dnsIpv6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6AddrInput() {
    return this._dnsIpv6Addr;
  }

  // dns_ipv6_port - computed: false, optional: true, required: false
  private _dnsIpv6Port?: number; 
  public get dnsIpv6Port() {
    return this.getNumberAttribute('dns_ipv6_port');
  }
  public set dnsIpv6Port(value: number) {
    this._dnsIpv6Port = value;
  }
  public resetDnsIpv6Port() {
    this._dnsIpv6Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6PortInput() {
    return this._dnsIpv6Port;
  }

  // dns_ipv6_recurse - computed: false, optional: true, required: false
  private _dnsIpv6Recurse?: string; 
  public get dnsIpv6Recurse() {
    return this.getStringAttribute('dns_ipv6_recurse');
  }
  public set dnsIpv6Recurse(value: string) {
    this._dnsIpv6Recurse = value;
  }
  public resetDnsIpv6Recurse() {
    this._dnsIpv6Recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6RecurseInput() {
    return this._dnsIpv6Recurse;
  }

  // dns_ipv6_tcp - computed: false, optional: true, required: false
  private _dnsIpv6Tcp?: number; 
  public get dnsIpv6Tcp() {
    return this.getNumberAttribute('dns_ipv6_tcp');
  }
  public set dnsIpv6Tcp(value: number) {
    this._dnsIpv6Tcp = value;
  }
  public resetDnsIpv6Tcp() {
    this._dnsIpv6Tcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6TcpInput() {
    return this._dnsIpv6Tcp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // dns_domain_expect - computed: false, optional: true, required: false
  private _dnsDomainExpect = new HealthMonitorMethodDnsDnsDomainExpectOutputReference(this, "dns_domain_expect");
  public get dnsDomainExpect() {
    return this._dnsDomainExpect;
  }
  public putDnsDomainExpect(value: HealthMonitorMethodDnsDnsDomainExpect) {
    this._dnsDomainExpect.internalValue = value;
  }
  public resetDnsDomainExpect() {
    this._dnsDomainExpect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsDomainExpectInput() {
    return this._dnsDomainExpect.internalValue;
  }

  // dns_ipv4_expect - computed: false, optional: true, required: false
  private _dnsIpv4Expect = new HealthMonitorMethodDnsDnsIpv4ExpectOutputReference(this, "dns_ipv4_expect");
  public get dnsIpv4Expect() {
    return this._dnsIpv4Expect;
  }
  public putDnsIpv4Expect(value: HealthMonitorMethodDnsDnsIpv4Expect) {
    this._dnsIpv4Expect.internalValue = value;
  }
  public resetDnsIpv4Expect() {
    this._dnsIpv4Expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv4ExpectInput() {
    return this._dnsIpv4Expect.internalValue;
  }

  // dns_ipv6_expect - computed: false, optional: true, required: false
  private _dnsIpv6Expect = new HealthMonitorMethodDnsDnsIpv6ExpectOutputReference(this, "dns_ipv6_expect");
  public get dnsIpv6Expect() {
    return this._dnsIpv6Expect;
  }
  public putDnsIpv6Expect(value: HealthMonitorMethodDnsDnsIpv6Expect) {
    this._dnsIpv6Expect.internalValue = value;
  }
  public resetDnsIpv6Expect() {
    this._dnsIpv6Expect.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsIpv6ExpectInput() {
    return this._dnsIpv6Expect.internalValue;
  }
}
export interface HealthMonitorMethodExternal {
  /**
  * Specify external application's arguments (Application arguments)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ext_arguments HealthMonitor#ext_arguments}
  */
  readonly extArguments?: string;
  /**
  * Specify the server port (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ext_port HealthMonitor#ext_port}
  */
  readonly extPort?: number;
  /**
  * Get server's perference
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ext_preference HealthMonitor#ext_preference}
  */
  readonly extPreference?: number;
  /**
  * Specify external application (Program name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ext_program HealthMonitor#ext_program}
  */
  readonly extProgram?: string;
  /**
  * Specify external application (Program name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ext_program_shared HealthMonitor#ext_program_shared}
  */
  readonly extProgramShared?: string;
  /**
  * Enable root-shell environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ext_root_shell HealthMonitor#ext_root_shell}
  */
  readonly extRootShell?: number;
  /**
  * EXTERNAL type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#external HealthMonitor#external}
  */
  readonly external?: number;
  /**
  * external application from shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#shared_partition_program HealthMonitor#shared_partition_program}
  */
  readonly sharedPartitionProgram?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodExternalToTerraform(struct?: HealthMonitorMethodExternalOutputReference | HealthMonitorMethodExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_arguments: cdktf.stringToTerraform(struct!.extArguments),
    ext_port: cdktf.numberToTerraform(struct!.extPort),
    ext_preference: cdktf.numberToTerraform(struct!.extPreference),
    ext_program: cdktf.stringToTerraform(struct!.extProgram),
    ext_program_shared: cdktf.stringToTerraform(struct!.extProgramShared),
    ext_root_shell: cdktf.numberToTerraform(struct!.extRootShell),
    external: cdktf.numberToTerraform(struct!.external),
    shared_partition_program: cdktf.numberToTerraform(struct!.sharedPartitionProgram),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodExternalToHclTerraform(struct?: HealthMonitorMethodExternalOutputReference | HealthMonitorMethodExternal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_arguments: {
      value: cdktf.stringToHclTerraform(struct!.extArguments),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_port: {
      value: cdktf.numberToHclTerraform(struct!.extPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ext_preference: {
      value: cdktf.numberToHclTerraform(struct!.extPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ext_program: {
      value: cdktf.stringToHclTerraform(struct!.extProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_program_shared: {
      value: cdktf.stringToHclTerraform(struct!.extProgramShared),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_root_shell: {
      value: cdktf.numberToHclTerraform(struct!.extRootShell),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external: {
      value: cdktf.numberToHclTerraform(struct!.external),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shared_partition_program: {
      value: cdktf.numberToHclTerraform(struct!.sharedPartitionProgram),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodExternalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodExternal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extArguments !== undefined) {
      hasAnyValues = true;
      internalValueResult.extArguments = this._extArguments;
    }
    if (this._extPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.extPort = this._extPort;
    }
    if (this._extPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.extPreference = this._extPreference;
    }
    if (this._extProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.extProgram = this._extProgram;
    }
    if (this._extProgramShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.extProgramShared = this._extProgramShared;
    }
    if (this._extRootShell !== undefined) {
      hasAnyValues = true;
      internalValueResult.extRootShell = this._extRootShell;
    }
    if (this._external !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external;
    }
    if (this._sharedPartitionProgram !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedPartitionProgram = this._sharedPartitionProgram;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodExternal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._extArguments = undefined;
      this._extPort = undefined;
      this._extPreference = undefined;
      this._extProgram = undefined;
      this._extProgramShared = undefined;
      this._extRootShell = undefined;
      this._external = undefined;
      this._sharedPartitionProgram = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._extArguments = value.extArguments;
      this._extPort = value.extPort;
      this._extPreference = value.extPreference;
      this._extProgram = value.extProgram;
      this._extProgramShared = value.extProgramShared;
      this._extRootShell = value.extRootShell;
      this._external = value.external;
      this._sharedPartitionProgram = value.sharedPartitionProgram;
      this._uuid = value.uuid;
    }
  }

  // ext_arguments - computed: false, optional: true, required: false
  private _extArguments?: string; 
  public get extArguments() {
    return this.getStringAttribute('ext_arguments');
  }
  public set extArguments(value: string) {
    this._extArguments = value;
  }
  public resetExtArguments() {
    this._extArguments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extArgumentsInput() {
    return this._extArguments;
  }

  // ext_port - computed: false, optional: true, required: false
  private _extPort?: number; 
  public get extPort() {
    return this.getNumberAttribute('ext_port');
  }
  public set extPort(value: number) {
    this._extPort = value;
  }
  public resetExtPort() {
    this._extPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPortInput() {
    return this._extPort;
  }

  // ext_preference - computed: false, optional: true, required: false
  private _extPreference?: number; 
  public get extPreference() {
    return this.getNumberAttribute('ext_preference');
  }
  public set extPreference(value: number) {
    this._extPreference = value;
  }
  public resetExtPreference() {
    this._extPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extPreferenceInput() {
    return this._extPreference;
  }

  // ext_program - computed: false, optional: true, required: false
  private _extProgram?: string; 
  public get extProgram() {
    return this.getStringAttribute('ext_program');
  }
  public set extProgram(value: string) {
    this._extProgram = value;
  }
  public resetExtProgram() {
    this._extProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProgramInput() {
    return this._extProgram;
  }

  // ext_program_shared - computed: false, optional: true, required: false
  private _extProgramShared?: string; 
  public get extProgramShared() {
    return this.getStringAttribute('ext_program_shared');
  }
  public set extProgramShared(value: string) {
    this._extProgramShared = value;
  }
  public resetExtProgramShared() {
    this._extProgramShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extProgramSharedInput() {
    return this._extProgramShared;
  }

  // ext_root_shell - computed: false, optional: true, required: false
  private _extRootShell?: number; 
  public get extRootShell() {
    return this.getNumberAttribute('ext_root_shell');
  }
  public set extRootShell(value: number) {
    this._extRootShell = value;
  }
  public resetExtRootShell() {
    this._extRootShell = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extRootShellInput() {
    return this._extRootShell;
  }

  // external - computed: false, optional: true, required: false
  private _external?: number; 
  public get external() {
    return this.getNumberAttribute('external');
  }
  public set external(value: number) {
    this._external = value;
  }
  public resetExternal() {
    this._external = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external;
  }

  // shared_partition_program - computed: false, optional: true, required: false
  private _sharedPartitionProgram?: number; 
  public get sharedPartitionProgram() {
    return this.getNumberAttribute('shared_partition_program');
  }
  public set sharedPartitionProgram(value: number) {
    this._sharedPartitionProgram = value;
  }
  public resetSharedPartitionProgram() {
    this._sharedPartitionProgram = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedPartitionProgramInput() {
    return this._sharedPartitionProgram;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodFtp {
  /**
  * FTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ftp HealthMonitor#ftp}
  */
  readonly ftp?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ftp_password HealthMonitor#ftp_password}
  */
  readonly ftpPassword?: number;
  /**
  * Specify the user password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ftp_password_string HealthMonitor#ftp_password_string}
  */
  readonly ftpPasswordString?: string;
  /**
  * Specify FTP port (Specify port number, default is 21)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ftp_port HealthMonitor#ftp_port}
  */
  readonly ftpPort?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ftp_username HealthMonitor#ftp_username}
  */
  readonly ftpUsername?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodFtpToTerraform(struct?: HealthMonitorMethodFtpOutputReference | HealthMonitorMethodFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ftp: cdktf.numberToTerraform(struct!.ftp),
    ftp_password: cdktf.numberToTerraform(struct!.ftpPassword),
    ftp_password_string: cdktf.stringToTerraform(struct!.ftpPasswordString),
    ftp_port: cdktf.numberToTerraform(struct!.ftpPort),
    ftp_username: cdktf.stringToTerraform(struct!.ftpUsername),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodFtpToHclTerraform(struct?: HealthMonitorMethodFtpOutputReference | HealthMonitorMethodFtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ftp: {
      value: cdktf.numberToHclTerraform(struct!.ftp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ftp_password: {
      value: cdktf.numberToHclTerraform(struct!.ftpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ftp_password_string: {
      value: cdktf.stringToHclTerraform(struct!.ftpPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ftp_port: {
      value: cdktf.numberToHclTerraform(struct!.ftpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ftp_username: {
      value: cdktf.stringToHclTerraform(struct!.ftpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodFtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodFtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ftp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp;
    }
    if (this._ftpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpPassword = this._ftpPassword;
    }
    if (this._ftpPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpPasswordString = this._ftpPasswordString;
    }
    if (this._ftpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpPort = this._ftpPort;
    }
    if (this._ftpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftpUsername = this._ftpUsername;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodFtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ftp = undefined;
      this._ftpPassword = undefined;
      this._ftpPasswordString = undefined;
      this._ftpPort = undefined;
      this._ftpUsername = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ftp = value.ftp;
      this._ftpPassword = value.ftpPassword;
      this._ftpPasswordString = value.ftpPasswordString;
      this._ftpPort = value.ftpPort;
      this._ftpUsername = value.ftpUsername;
      this._uuid = value.uuid;
    }
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp?: number; 
  public get ftp() {
    return this.getNumberAttribute('ftp');
  }
  public set ftp(value: number) {
    this._ftp = value;
  }
  public resetFtp() {
    this._ftp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp;
  }

  // ftp_password - computed: false, optional: true, required: false
  private _ftpPassword?: number; 
  public get ftpPassword() {
    return this.getNumberAttribute('ftp_password');
  }
  public set ftpPassword(value: number) {
    this._ftpPassword = value;
  }
  public resetFtpPassword() {
    this._ftpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPasswordInput() {
    return this._ftpPassword;
  }

  // ftp_password_string - computed: false, optional: true, required: false
  private _ftpPasswordString?: string; 
  public get ftpPasswordString() {
    return this.getStringAttribute('ftp_password_string');
  }
  public set ftpPasswordString(value: string) {
    this._ftpPasswordString = value;
  }
  public resetFtpPasswordString() {
    this._ftpPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPasswordStringInput() {
    return this._ftpPasswordString;
  }

  // ftp_port - computed: false, optional: true, required: false
  private _ftpPort?: number; 
  public get ftpPort() {
    return this.getNumberAttribute('ftp_port');
  }
  public set ftpPort(value: number) {
    this._ftpPort = value;
  }
  public resetFtpPort() {
    this._ftpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpPortInput() {
    return this._ftpPort;
  }

  // ftp_username - computed: false, optional: true, required: false
  private _ftpUsername?: string; 
  public get ftpUsername() {
    return this.getStringAttribute('ftp_username');
  }
  public set ftpUsername(value: string) {
    this._ftpUsername = value;
  }
  public resetFtpUsername() {
    this._ftpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpUsernameInput() {
    return this._ftpUsername;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodHttpHttpKerberosKdc {
  /**
  * Kdc's hostname(length:1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_hostip HealthMonitor#http_kerberos_hostip}
  */
  readonly httpKerberosHostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_hostipv6 HealthMonitor#http_kerberos_hostipv6}
  */
  readonly httpKerberosHostipv6?: string;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_port HealthMonitor#http_kerberos_port}
  */
  readonly httpKerberosPort?: number;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_portv6 HealthMonitor#http_kerberos_portv6}
  */
  readonly httpKerberosPortv6?: number;
}

export function healthMonitorMethodHttpHttpKerberosKdcToTerraform(struct?: HealthMonitorMethodHttpHttpKerberosKdcOutputReference | HealthMonitorMethodHttpHttpKerberosKdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http_kerberos_hostip: cdktf.stringToTerraform(struct!.httpKerberosHostip),
    http_kerberos_hostipv6: cdktf.stringToTerraform(struct!.httpKerberosHostipv6),
    http_kerberos_port: cdktf.numberToTerraform(struct!.httpKerberosPort),
    http_kerberos_portv6: cdktf.numberToTerraform(struct!.httpKerberosPortv6),
  }
}


export function healthMonitorMethodHttpHttpKerberosKdcToHclTerraform(struct?: HealthMonitorMethodHttpHttpKerberosKdcOutputReference | HealthMonitorMethodHttpHttpKerberosKdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http_kerberos_hostip: {
      value: cdktf.stringToHclTerraform(struct!.httpKerberosHostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_kerberos_hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.httpKerberosHostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.httpKerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_kerberos_portv6: {
      value: cdktf.numberToHclTerraform(struct!.httpKerberosPortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodHttpHttpKerberosKdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodHttpHttpKerberosKdc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpKerberosHostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosHostip = this._httpKerberosHostip;
    }
    if (this._httpKerberosHostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosHostipv6 = this._httpKerberosHostipv6;
    }
    if (this._httpKerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosPort = this._httpKerberosPort;
    }
    if (this._httpKerberosPortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosPortv6 = this._httpKerberosPortv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodHttpHttpKerberosKdc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpKerberosHostip = undefined;
      this._httpKerberosHostipv6 = undefined;
      this._httpKerberosPort = undefined;
      this._httpKerberosPortv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpKerberosHostip = value.httpKerberosHostip;
      this._httpKerberosHostipv6 = value.httpKerberosHostipv6;
      this._httpKerberosPort = value.httpKerberosPort;
      this._httpKerberosPortv6 = value.httpKerberosPortv6;
    }
  }

  // http_kerberos_hostip - computed: false, optional: true, required: false
  private _httpKerberosHostip?: string; 
  public get httpKerberosHostip() {
    return this.getStringAttribute('http_kerberos_hostip');
  }
  public set httpKerberosHostip(value: string) {
    this._httpKerberosHostip = value;
  }
  public resetHttpKerberosHostip() {
    this._httpKerberosHostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosHostipInput() {
    return this._httpKerberosHostip;
  }

  // http_kerberos_hostipv6 - computed: false, optional: true, required: false
  private _httpKerberosHostipv6?: string; 
  public get httpKerberosHostipv6() {
    return this.getStringAttribute('http_kerberos_hostipv6');
  }
  public set httpKerberosHostipv6(value: string) {
    this._httpKerberosHostipv6 = value;
  }
  public resetHttpKerberosHostipv6() {
    this._httpKerberosHostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosHostipv6Input() {
    return this._httpKerberosHostipv6;
  }

  // http_kerberos_port - computed: false, optional: true, required: false
  private _httpKerberosPort?: number; 
  public get httpKerberosPort() {
    return this.getNumberAttribute('http_kerberos_port');
  }
  public set httpKerberosPort(value: number) {
    this._httpKerberosPort = value;
  }
  public resetHttpKerberosPort() {
    this._httpKerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosPortInput() {
    return this._httpKerberosPort;
  }

  // http_kerberos_portv6 - computed: false, optional: true, required: false
  private _httpKerberosPortv6?: number; 
  public get httpKerberosPortv6() {
    return this.getNumberAttribute('http_kerberos_portv6');
  }
  public set httpKerberosPortv6(value: number) {
    this._httpKerberosPortv6 = value;
  }
  public resetHttpKerberosPortv6() {
    this._httpKerberosPortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosPortv6Input() {
    return this._httpKerberosPortv6;
  }
}
export interface HealthMonitorMethodHttp {
  /**
  * HTTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http HealthMonitor#http}
  */
  readonly http?: number;
  /**
  * Specify what you expect from the response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_expect HealthMonitor#http_expect}
  */
  readonly httpExpect?: number;
  /**
  * Specify "Host:" header used in request (enclose IPv6 address in [])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_host HealthMonitor#http_host}
  */
  readonly httpHost?: string;
  /**
  * Http Kerberos Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_auth HealthMonitor#http_kerberos_auth}
  */
  readonly httpKerberosAuth?: number;
  /**
  * Specify realm of Kerberos server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_realm HealthMonitor#http_kerberos_realm}
  */
  readonly httpKerberosRealm?: string;
  /**
  * Specify response code for maintenance (Format is xx,xx-xx (xx between [100, 899]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_maintenance_code HealthMonitor#http_maintenance_code}
  */
  readonly httpMaintenanceCode?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_password HealthMonitor#http_password}
  */
  readonly httpPassword?: number;
  /**
  * Specify password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_password_string HealthMonitor#http_password_string}
  */
  readonly httpPasswordString?: string;
  /**
  * Specify HTTP Port (Specify port number (default 80))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_port HealthMonitor#http_port}
  */
  readonly httpPort?: number;
  /**
  * Specify the HTTP post data (Input post data here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_postdata HealthMonitor#http_postdata}
  */
  readonly httpPostdata?: string;
  /**
  * Specify the HTTP post data (Input post data file name here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_postfile HealthMonitor#http_postfile}
  */
  readonly httpPostfile?: string;
  /**
  * Specify response code range (e.g. 200,400-430) (Format is xx,xx-xx (xx between [100, 899]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_response_code HealthMonitor#http_response_code}
  */
  readonly httpResponseCode?: string;
  /**
  * Specify text expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_text HealthMonitor#http_text}
  */
  readonly httpText?: string;
  /**
  * Specify URL string, default is GET /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_url HealthMonitor#http_url}
  */
  readonly httpUrl?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_username HealthMonitor#http_username}
  */
  readonly httpUsername?: string;
  /**
  * Specify response text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance HealthMonitor#maintenance}
  */
  readonly maintenance?: number;
  /**
  * Specify text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance_text HealthMonitor#maintenance_text}
  */
  readonly maintenanceText?: string;
  /**
  * Specify Regex text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance_text_regex HealthMonitor#maintenance_text_regex}
  */
  readonly maintenanceTextRegex?: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#post_path HealthMonitor#post_path}
  */
  readonly postPath?: string;
  /**
  * 'postdata': Specify the HTTP post data; 'postfile': Specify the HTTP post data;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#post_type HealthMonitor#post_type}
  */
  readonly postType?: string;
  /**
  * Specify response code range with Regex (code with Regex, such as [2-5][0-9][0-9])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#response_code_regex HealthMonitor#response_code_regex}
  */
  readonly responseCodeRegex?: string;
  /**
  * Specify text expected  with Regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#text_regex HealthMonitor#text_regex}
  */
  readonly textRegex?: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#url_path HealthMonitor#url_path}
  */
  readonly urlPath?: string;
  /**
  * 'GET': HTTP GET method; 'POST': HTTP POST method; 'HEAD': HTTP HEAD method;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#url_type HealthMonitor#url_type}
  */
  readonly urlType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify HTTP version2 (Specify http version 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#version2 HealthMonitor#version2}
  */
  readonly version2?: number;
  /**
  * http_kerberos_kdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_kerberos_kdc HealthMonitor#http_kerberos_kdc}
  */
  readonly httpKerberosKdc?: HealthMonitorMethodHttpHttpKerberosKdc;
}

export function healthMonitorMethodHttpToTerraform(struct?: HealthMonitorMethodHttpOutputReference | HealthMonitorMethodHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    http: cdktf.numberToTerraform(struct!.http),
    http_expect: cdktf.numberToTerraform(struct!.httpExpect),
    http_host: cdktf.stringToTerraform(struct!.httpHost),
    http_kerberos_auth: cdktf.numberToTerraform(struct!.httpKerberosAuth),
    http_kerberos_realm: cdktf.stringToTerraform(struct!.httpKerberosRealm),
    http_maintenance_code: cdktf.stringToTerraform(struct!.httpMaintenanceCode),
    http_password: cdktf.numberToTerraform(struct!.httpPassword),
    http_password_string: cdktf.stringToTerraform(struct!.httpPasswordString),
    http_port: cdktf.numberToTerraform(struct!.httpPort),
    http_postdata: cdktf.stringToTerraform(struct!.httpPostdata),
    http_postfile: cdktf.stringToTerraform(struct!.httpPostfile),
    http_response_code: cdktf.stringToTerraform(struct!.httpResponseCode),
    http_text: cdktf.stringToTerraform(struct!.httpText),
    http_url: cdktf.numberToTerraform(struct!.httpUrl),
    http_username: cdktf.stringToTerraform(struct!.httpUsername),
    maintenance: cdktf.numberToTerraform(struct!.maintenance),
    maintenance_text: cdktf.stringToTerraform(struct!.maintenanceText),
    maintenance_text_regex: cdktf.stringToTerraform(struct!.maintenanceTextRegex),
    post_path: cdktf.stringToTerraform(struct!.postPath),
    post_type: cdktf.stringToTerraform(struct!.postType),
    response_code_regex: cdktf.stringToTerraform(struct!.responseCodeRegex),
    text_regex: cdktf.stringToTerraform(struct!.textRegex),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
    url_type: cdktf.stringToTerraform(struct!.urlType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    version2: cdktf.numberToTerraform(struct!.version2),
    http_kerberos_kdc: healthMonitorMethodHttpHttpKerberosKdcToTerraform(struct!.httpKerberosKdc),
  }
}


export function healthMonitorMethodHttpToHclTerraform(struct?: HealthMonitorMethodHttpOutputReference | HealthMonitorMethodHttp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    http: {
      value: cdktf.numberToHclTerraform(struct!.http),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_expect: {
      value: cdktf.numberToHclTerraform(struct!.httpExpect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_host: {
      value: cdktf.stringToHclTerraform(struct!.httpHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_kerberos_auth: {
      value: cdktf.numberToHclTerraform(struct!.httpKerberosAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_kerberos_realm: {
      value: cdktf.stringToHclTerraform(struct!.httpKerberosRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_maintenance_code: {
      value: cdktf.stringToHclTerraform(struct!.httpMaintenanceCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_password: {
      value: cdktf.numberToHclTerraform(struct!.httpPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_password_string: {
      value: cdktf.stringToHclTerraform(struct!.httpPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_port: {
      value: cdktf.numberToHclTerraform(struct!.httpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_postdata: {
      value: cdktf.stringToHclTerraform(struct!.httpPostdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_postfile: {
      value: cdktf.stringToHclTerraform(struct!.httpPostfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_response_code: {
      value: cdktf.stringToHclTerraform(struct!.httpResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_text: {
      value: cdktf.stringToHclTerraform(struct!.httpText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    http_url: {
      value: cdktf.numberToHclTerraform(struct!.httpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_username: {
      value: cdktf.stringToHclTerraform(struct!.httpUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance: {
      value: cdktf.numberToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance_text: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_text_regex: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceTextRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_path: {
      value: cdktf.stringToHclTerraform(struct!.postPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_type: {
      value: cdktf.stringToHclTerraform(struct!.postType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code_regex: {
      value: cdktf.stringToHclTerraform(struct!.responseCodeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    text_regex: {
      value: cdktf.stringToHclTerraform(struct!.textRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_type: {
      value: cdktf.stringToHclTerraform(struct!.urlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    version2: {
      value: cdktf.numberToHclTerraform(struct!.version2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_kerberos_kdc: {
      value: healthMonitorMethodHttpHttpKerberosKdcToHclTerraform(struct!.httpKerberosKdc),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodHttpHttpKerberosKdcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodHttpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodHttp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._http !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http;
    }
    if (this._httpExpect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpExpect = this._httpExpect;
    }
    if (this._httpHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpHost = this._httpHost;
    }
    if (this._httpKerberosAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosAuth = this._httpKerberosAuth;
    }
    if (this._httpKerberosRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosRealm = this._httpKerberosRealm;
    }
    if (this._httpMaintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpMaintenanceCode = this._httpMaintenanceCode;
    }
    if (this._httpPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPassword = this._httpPassword;
    }
    if (this._httpPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPasswordString = this._httpPasswordString;
    }
    if (this._httpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPort = this._httpPort;
    }
    if (this._httpPostdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPostdata = this._httpPostdata;
    }
    if (this._httpPostfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpPostfile = this._httpPostfile;
    }
    if (this._httpResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpResponseCode = this._httpResponseCode;
    }
    if (this._httpText !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpText = this._httpText;
    }
    if (this._httpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUrl = this._httpUrl;
    }
    if (this._httpUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpUsername = this._httpUsername;
    }
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    if (this._maintenanceText !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceText = this._maintenanceText;
    }
    if (this._maintenanceTextRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceTextRegex = this._maintenanceTextRegex;
    }
    if (this._postPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.postPath = this._postPath;
    }
    if (this._postType !== undefined) {
      hasAnyValues = true;
      internalValueResult.postType = this._postType;
    }
    if (this._responseCodeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeRegex = this._responseCodeRegex;
    }
    if (this._textRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.textRegex = this._textRegex;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    if (this._urlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlType = this._urlType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._version2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.version2 = this._version2;
    }
    if (this._httpKerberosKdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpKerberosKdc = this._httpKerberosKdc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodHttp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._http = undefined;
      this._httpExpect = undefined;
      this._httpHost = undefined;
      this._httpKerberosAuth = undefined;
      this._httpKerberosRealm = undefined;
      this._httpMaintenanceCode = undefined;
      this._httpPassword = undefined;
      this._httpPasswordString = undefined;
      this._httpPort = undefined;
      this._httpPostdata = undefined;
      this._httpPostfile = undefined;
      this._httpResponseCode = undefined;
      this._httpText = undefined;
      this._httpUrl = undefined;
      this._httpUsername = undefined;
      this._maintenance = undefined;
      this._maintenanceText = undefined;
      this._maintenanceTextRegex = undefined;
      this._postPath = undefined;
      this._postType = undefined;
      this._responseCodeRegex = undefined;
      this._textRegex = undefined;
      this._urlPath = undefined;
      this._urlType = undefined;
      this._uuid = undefined;
      this._version2 = undefined;
      this._httpKerberosKdc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._http = value.http;
      this._httpExpect = value.httpExpect;
      this._httpHost = value.httpHost;
      this._httpKerberosAuth = value.httpKerberosAuth;
      this._httpKerberosRealm = value.httpKerberosRealm;
      this._httpMaintenanceCode = value.httpMaintenanceCode;
      this._httpPassword = value.httpPassword;
      this._httpPasswordString = value.httpPasswordString;
      this._httpPort = value.httpPort;
      this._httpPostdata = value.httpPostdata;
      this._httpPostfile = value.httpPostfile;
      this._httpResponseCode = value.httpResponseCode;
      this._httpText = value.httpText;
      this._httpUrl = value.httpUrl;
      this._httpUsername = value.httpUsername;
      this._maintenance = value.maintenance;
      this._maintenanceText = value.maintenanceText;
      this._maintenanceTextRegex = value.maintenanceTextRegex;
      this._postPath = value.postPath;
      this._postType = value.postType;
      this._responseCodeRegex = value.responseCodeRegex;
      this._textRegex = value.textRegex;
      this._urlPath = value.urlPath;
      this._urlType = value.urlType;
      this._uuid = value.uuid;
      this._version2 = value.version2;
      this._httpKerberosKdc.internalValue = value.httpKerberosKdc;
    }
  }

  // http - computed: false, optional: true, required: false
  private _http?: number; 
  public get http() {
    return this.getNumberAttribute('http');
  }
  public set http(value: number) {
    this._http = value;
  }
  public resetHttp() {
    this._http = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http;
  }

  // http_expect - computed: false, optional: true, required: false
  private _httpExpect?: number; 
  public get httpExpect() {
    return this.getNumberAttribute('http_expect');
  }
  public set httpExpect(value: number) {
    this._httpExpect = value;
  }
  public resetHttpExpect() {
    this._httpExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpExpectInput() {
    return this._httpExpect;
  }

  // http_host - computed: false, optional: true, required: false
  private _httpHost?: string; 
  public get httpHost() {
    return this.getStringAttribute('http_host');
  }
  public set httpHost(value: string) {
    this._httpHost = value;
  }
  public resetHttpHost() {
    this._httpHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpHostInput() {
    return this._httpHost;
  }

  // http_kerberos_auth - computed: false, optional: true, required: false
  private _httpKerberosAuth?: number; 
  public get httpKerberosAuth() {
    return this.getNumberAttribute('http_kerberos_auth');
  }
  public set httpKerberosAuth(value: number) {
    this._httpKerberosAuth = value;
  }
  public resetHttpKerberosAuth() {
    this._httpKerberosAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosAuthInput() {
    return this._httpKerberosAuth;
  }

  // http_kerberos_realm - computed: false, optional: true, required: false
  private _httpKerberosRealm?: string; 
  public get httpKerberosRealm() {
    return this.getStringAttribute('http_kerberos_realm');
  }
  public set httpKerberosRealm(value: string) {
    this._httpKerberosRealm = value;
  }
  public resetHttpKerberosRealm() {
    this._httpKerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosRealmInput() {
    return this._httpKerberosRealm;
  }

  // http_maintenance_code - computed: false, optional: true, required: false
  private _httpMaintenanceCode?: string; 
  public get httpMaintenanceCode() {
    return this.getStringAttribute('http_maintenance_code');
  }
  public set httpMaintenanceCode(value: string) {
    this._httpMaintenanceCode = value;
  }
  public resetHttpMaintenanceCode() {
    this._httpMaintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpMaintenanceCodeInput() {
    return this._httpMaintenanceCode;
  }

  // http_password - computed: false, optional: true, required: false
  private _httpPassword?: number; 
  public get httpPassword() {
    return this.getNumberAttribute('http_password');
  }
  public set httpPassword(value: number) {
    this._httpPassword = value;
  }
  public resetHttpPassword() {
    this._httpPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordInput() {
    return this._httpPassword;
  }

  // http_password_string - computed: false, optional: true, required: false
  private _httpPasswordString?: string; 
  public get httpPasswordString() {
    return this.getStringAttribute('http_password_string');
  }
  public set httpPasswordString(value: string) {
    this._httpPasswordString = value;
  }
  public resetHttpPasswordString() {
    this._httpPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPasswordStringInput() {
    return this._httpPasswordString;
  }

  // http_port - computed: false, optional: true, required: false
  private _httpPort?: number; 
  public get httpPort() {
    return this.getNumberAttribute('http_port');
  }
  public set httpPort(value: number) {
    this._httpPort = value;
  }
  public resetHttpPort() {
    this._httpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPortInput() {
    return this._httpPort;
  }

  // http_postdata - computed: false, optional: true, required: false
  private _httpPostdata?: string; 
  public get httpPostdata() {
    return this.getStringAttribute('http_postdata');
  }
  public set httpPostdata(value: string) {
    this._httpPostdata = value;
  }
  public resetHttpPostdata() {
    this._httpPostdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostdataInput() {
    return this._httpPostdata;
  }

  // http_postfile - computed: false, optional: true, required: false
  private _httpPostfile?: string; 
  public get httpPostfile() {
    return this.getStringAttribute('http_postfile');
  }
  public set httpPostfile(value: string) {
    this._httpPostfile = value;
  }
  public resetHttpPostfile() {
    this._httpPostfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpPostfileInput() {
    return this._httpPostfile;
  }

  // http_response_code - computed: false, optional: true, required: false
  private _httpResponseCode?: string; 
  public get httpResponseCode() {
    return this.getStringAttribute('http_response_code');
  }
  public set httpResponseCode(value: string) {
    this._httpResponseCode = value;
  }
  public resetHttpResponseCode() {
    this._httpResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpResponseCodeInput() {
    return this._httpResponseCode;
  }

  // http_text - computed: false, optional: true, required: false
  private _httpText?: string; 
  public get httpText() {
    return this.getStringAttribute('http_text');
  }
  public set httpText(value: string) {
    this._httpText = value;
  }
  public resetHttpText() {
    this._httpText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpTextInput() {
    return this._httpText;
  }

  // http_url - computed: false, optional: true, required: false
  private _httpUrl?: number; 
  public get httpUrl() {
    return this.getNumberAttribute('http_url');
  }
  public set httpUrl(value: number) {
    this._httpUrl = value;
  }
  public resetHttpUrl() {
    this._httpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUrlInput() {
    return this._httpUrl;
  }

  // http_username - computed: false, optional: true, required: false
  private _httpUsername?: string; 
  public get httpUsername() {
    return this.getStringAttribute('http_username');
  }
  public set httpUsername(value: string) {
    this._httpUsername = value;
  }
  public resetHttpUsername() {
    this._httpUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpUsernameInput() {
    return this._httpUsername;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: number; 
  public get maintenance() {
    return this.getNumberAttribute('maintenance');
  }
  public set maintenance(value: number) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // maintenance_text - computed: false, optional: true, required: false
  private _maintenanceText?: string; 
  public get maintenanceText() {
    return this.getStringAttribute('maintenance_text');
  }
  public set maintenanceText(value: string) {
    this._maintenanceText = value;
  }
  public resetMaintenanceText() {
    this._maintenanceText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextInput() {
    return this._maintenanceText;
  }

  // maintenance_text_regex - computed: false, optional: true, required: false
  private _maintenanceTextRegex?: string; 
  public get maintenanceTextRegex() {
    return this.getStringAttribute('maintenance_text_regex');
  }
  public set maintenanceTextRegex(value: string) {
    this._maintenanceTextRegex = value;
  }
  public resetMaintenanceTextRegex() {
    this._maintenanceTextRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextRegexInput() {
    return this._maintenanceTextRegex;
  }

  // post_path - computed: false, optional: true, required: false
  private _postPath?: string; 
  public get postPath() {
    return this.getStringAttribute('post_path');
  }
  public set postPath(value: string) {
    this._postPath = value;
  }
  public resetPostPath() {
    this._postPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postPathInput() {
    return this._postPath;
  }

  // post_type - computed: false, optional: true, required: false
  private _postType?: string; 
  public get postType() {
    return this.getStringAttribute('post_type');
  }
  public set postType(value: string) {
    this._postType = value;
  }
  public resetPostType() {
    this._postType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTypeInput() {
    return this._postType;
  }

  // response_code_regex - computed: false, optional: true, required: false
  private _responseCodeRegex?: string; 
  public get responseCodeRegex() {
    return this.getStringAttribute('response_code_regex');
  }
  public set responseCodeRegex(value: string) {
    this._responseCodeRegex = value;
  }
  public resetResponseCodeRegex() {
    this._responseCodeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRegexInput() {
    return this._responseCodeRegex;
  }

  // text_regex - computed: false, optional: true, required: false
  private _textRegex?: string; 
  public get textRegex() {
    return this.getStringAttribute('text_regex');
  }
  public set textRegex(value: string) {
    this._textRegex = value;
  }
  public resetTextRegex() {
    this._textRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textRegexInput() {
    return this._textRegex;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // url_type - computed: false, optional: true, required: false
  private _urlType?: string; 
  public get urlType() {
    return this.getStringAttribute('url_type');
  }
  public set urlType(value: string) {
    this._urlType = value;
  }
  public resetUrlType() {
    this._urlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTypeInput() {
    return this._urlType;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // version2 - computed: false, optional: true, required: false
  private _version2?: number; 
  public get version2() {
    return this.getNumberAttribute('version2');
  }
  public set version2(value: number) {
    this._version2 = value;
  }
  public resetVersion2() {
    this._version2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get version2Input() {
    return this._version2;
  }

  // http_kerberos_kdc - computed: false, optional: true, required: false
  private _httpKerberosKdc = new HealthMonitorMethodHttpHttpKerberosKdcOutputReference(this, "http_kerberos_kdc");
  public get httpKerberosKdc() {
    return this._httpKerberosKdc;
  }
  public putHttpKerberosKdc(value: HealthMonitorMethodHttpHttpKerberosKdc) {
    this._httpKerberosKdc.internalValue = value;
  }
  public resetHttpKerberosKdc() {
    this._httpKerberosKdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpKerberosKdcInput() {
    return this._httpKerberosKdc.internalValue;
  }
}
export interface HealthMonitorMethodHttpsHttpsKerberosKdc {
  /**
  * Kdc's hostname(length:1-31) or IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_hostip HealthMonitor#https_kerberos_hostip}
  */
  readonly httpsKerberosHostip?: string;
  /**
  * Server's IPV6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_hostipv6 HealthMonitor#https_kerberos_hostipv6}
  */
  readonly httpsKerberosHostipv6?: string;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_port HealthMonitor#https_kerberos_port}
  */
  readonly httpsKerberosPort?: number;
  /**
  * Specify the kdc port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_portv6 HealthMonitor#https_kerberos_portv6}
  */
  readonly httpsKerberosPortv6?: number;
}

export function healthMonitorMethodHttpsHttpsKerberosKdcToTerraform(struct?: HealthMonitorMethodHttpsHttpsKerberosKdcOutputReference | HealthMonitorMethodHttpsHttpsKerberosKdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    https_kerberos_hostip: cdktf.stringToTerraform(struct!.httpsKerberosHostip),
    https_kerberos_hostipv6: cdktf.stringToTerraform(struct!.httpsKerberosHostipv6),
    https_kerberos_port: cdktf.numberToTerraform(struct!.httpsKerberosPort),
    https_kerberos_portv6: cdktf.numberToTerraform(struct!.httpsKerberosPortv6),
  }
}


export function healthMonitorMethodHttpsHttpsKerberosKdcToHclTerraform(struct?: HealthMonitorMethodHttpsHttpsKerberosKdcOutputReference | HealthMonitorMethodHttpsHttpsKerberosKdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    https_kerberos_hostip: {
      value: cdktf.stringToHclTerraform(struct!.httpsKerberosHostip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_kerberos_hostipv6: {
      value: cdktf.stringToHclTerraform(struct!.httpsKerberosHostipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_kerberos_port: {
      value: cdktf.numberToHclTerraform(struct!.httpsKerberosPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_kerberos_portv6: {
      value: cdktf.numberToHclTerraform(struct!.httpsKerberosPortv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodHttpsHttpsKerberosKdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodHttpsHttpsKerberosKdc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._httpsKerberosHostip !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosHostip = this._httpsKerberosHostip;
    }
    if (this._httpsKerberosHostipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosHostipv6 = this._httpsKerberosHostipv6;
    }
    if (this._httpsKerberosPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosPort = this._httpsKerberosPort;
    }
    if (this._httpsKerberosPortv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosPortv6 = this._httpsKerberosPortv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodHttpsHttpsKerberosKdc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._httpsKerberosHostip = undefined;
      this._httpsKerberosHostipv6 = undefined;
      this._httpsKerberosPort = undefined;
      this._httpsKerberosPortv6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._httpsKerberosHostip = value.httpsKerberosHostip;
      this._httpsKerberosHostipv6 = value.httpsKerberosHostipv6;
      this._httpsKerberosPort = value.httpsKerberosPort;
      this._httpsKerberosPortv6 = value.httpsKerberosPortv6;
    }
  }

  // https_kerberos_hostip - computed: false, optional: true, required: false
  private _httpsKerberosHostip?: string; 
  public get httpsKerberosHostip() {
    return this.getStringAttribute('https_kerberos_hostip');
  }
  public set httpsKerberosHostip(value: string) {
    this._httpsKerberosHostip = value;
  }
  public resetHttpsKerberosHostip() {
    this._httpsKerberosHostip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosHostipInput() {
    return this._httpsKerberosHostip;
  }

  // https_kerberos_hostipv6 - computed: false, optional: true, required: false
  private _httpsKerberosHostipv6?: string; 
  public get httpsKerberosHostipv6() {
    return this.getStringAttribute('https_kerberos_hostipv6');
  }
  public set httpsKerberosHostipv6(value: string) {
    this._httpsKerberosHostipv6 = value;
  }
  public resetHttpsKerberosHostipv6() {
    this._httpsKerberosHostipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosHostipv6Input() {
    return this._httpsKerberosHostipv6;
  }

  // https_kerberos_port - computed: false, optional: true, required: false
  private _httpsKerberosPort?: number; 
  public get httpsKerberosPort() {
    return this.getNumberAttribute('https_kerberos_port');
  }
  public set httpsKerberosPort(value: number) {
    this._httpsKerberosPort = value;
  }
  public resetHttpsKerberosPort() {
    this._httpsKerberosPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosPortInput() {
    return this._httpsKerberosPort;
  }

  // https_kerberos_portv6 - computed: false, optional: true, required: false
  private _httpsKerberosPortv6?: number; 
  public get httpsKerberosPortv6() {
    return this.getNumberAttribute('https_kerberos_portv6');
  }
  public set httpsKerberosPortv6(value: number) {
    this._httpsKerberosPortv6 = value;
  }
  public resetHttpsKerberosPortv6() {
    this._httpsKerberosPortv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosPortv6Input() {
    return this._httpsKerberosPortv6;
  }
}
export interface HealthMonitorMethodHttps {
  /**
  * Specify client certificate (Certificate name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#cert HealthMonitor#cert}
  */
  readonly cert?: string;
  /**
  * Select shared partition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#cert_key_shared HealthMonitor#cert_key_shared}
  */
  readonly certKeyShared?: number;
  /**
  * Disable SSLv2Hello for HTTPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#disable_sslv2hello HealthMonitor#disable_sslv2hello}
  */
  readonly disableSslv2Hello?: number;
  /**
  * 'http-version2': HTTP version 2 for HTTPs; 'http-version3': HTTP version 3 for HTTPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http_version HealthMonitor#http_version}
  */
  readonly httpVersion?: string;
  /**
  * HTTPS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https HealthMonitor#https}
  */
  readonly https?: number;
  /**
  * Specify what you expect from the response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_expect HealthMonitor#https_expect}
  */
  readonly httpsExpect?: number;
  /**
  * Specify "Host:" header used in request (enclose IPv6 address in [])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_host HealthMonitor#https_host}
  */
  readonly httpsHost?: string;
  /**
  * Https Kerberos Auth
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_auth HealthMonitor#https_kerberos_auth}
  */
  readonly httpsKerberosAuth?: number;
  /**
  * Specify realm of Kerberos server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_realm HealthMonitor#https_kerberos_realm}
  */
  readonly httpsKerberosRealm?: string;
  /**
  * Specify response code for maintenance (Format is xx,xx-xx (xx between [100, 899])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_maintenance_code HealthMonitor#https_maintenance_code}
  */
  readonly httpsMaintenanceCode?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_password HealthMonitor#https_password}
  */
  readonly httpsPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_password_string HealthMonitor#https_password_string}
  */
  readonly httpsPasswordString?: string;
  /**
  * Specify the HTTP post data (Input post data here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_postdata HealthMonitor#https_postdata}
  */
  readonly httpsPostdata?: string;
  /**
  * Specify the HTTP post data (Input post data file name here)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_postfile HealthMonitor#https_postfile}
  */
  readonly httpsPostfile?: string;
  /**
  * Specify response code range (e.g. 200,400-430) (Format is xx,xx-xx (xx between [100, 899])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_response_code HealthMonitor#https_response_code}
  */
  readonly httpsResponseCode?: string;
  /**
  * Expect Server Cert commonName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_server_cert_name HealthMonitor#https_server_cert_name}
  */
  readonly httpsServerCertName?: string;
  /**
  * Specify text expected
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_text HealthMonitor#https_text}
  */
  readonly httpsText?: string;
  /**
  * Specify URL string, default is GET /
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_url HealthMonitor#https_url}
  */
  readonly httpsUrl?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_username HealthMonitor#https_username}
  */
  readonly httpsUsername?: string;
  /**
  * Specify client private key (Key name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#key HealthMonitor#key}
  */
  readonly key?: string;
  /**
  * Client private key password phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#key_pass_phrase HealthMonitor#key_pass_phrase}
  */
  readonly keyPassPhrase?: number;
  /**
  * Password Phrase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#key_phrase HealthMonitor#key_phrase}
  */
  readonly keyPhrase?: string;
  /**
  * Specify response text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance HealthMonitor#maintenance}
  */
  readonly maintenance?: number;
  /**
  * Specify text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance_text HealthMonitor#maintenance_text}
  */
  readonly maintenanceText?: string;
  /**
  * Specify Regex text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance_text_regex HealthMonitor#maintenance_text_regex}
  */
  readonly maintenanceTextRegex?: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#post_path HealthMonitor#post_path}
  */
  readonly postPath?: string;
  /**
  * 'postdata': Specify the HTTP post data; 'postfile': Specify the HTTP post data;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#post_type HealthMonitor#post_type}
  */
  readonly postType?: string;
  /**
  * Specify response code range with Regex (code with Regex, such as [2-5][0-9][0-9])
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#response_code_regex HealthMonitor#response_code_regex}
  */
  readonly responseCodeRegex?: string;
  /**
  * Server Name Indication for HTTPs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sni HealthMonitor#sni}
  */
  readonly sni?: number;
  /**
  * Specify text expected  with Regex
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#text_regex HealthMonitor#text_regex}
  */
  readonly textRegex?: string;
  /**
  * Specify URL path, default is "/"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#url_path HealthMonitor#url_path}
  */
  readonly urlPath?: string;
  /**
  * 'GET': HTTP GET method; 'POST': HTTP POST method; 'HEAD': HTTP HEAD method;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#url_type HealthMonitor#url_type}
  */
  readonly urlType?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * Specify HTTPS port (Port Number (default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#web_port HealthMonitor#web_port}
  */
  readonly webPort?: number;
  /**
  * https_kerberos_kdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https_kerberos_kdc HealthMonitor#https_kerberos_kdc}
  */
  readonly httpsKerberosKdc?: HealthMonitorMethodHttpsHttpsKerberosKdc;
}

export function healthMonitorMethodHttpsToTerraform(struct?: HealthMonitorMethodHttpsOutputReference | HealthMonitorMethodHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: cdktf.stringToTerraform(struct!.cert),
    cert_key_shared: cdktf.numberToTerraform(struct!.certKeyShared),
    disable_sslv2hello: cdktf.numberToTerraform(struct!.disableSslv2Hello),
    http_version: cdktf.stringToTerraform(struct!.httpVersion),
    https: cdktf.numberToTerraform(struct!.https),
    https_expect: cdktf.numberToTerraform(struct!.httpsExpect),
    https_host: cdktf.stringToTerraform(struct!.httpsHost),
    https_kerberos_auth: cdktf.numberToTerraform(struct!.httpsKerberosAuth),
    https_kerberos_realm: cdktf.stringToTerraform(struct!.httpsKerberosRealm),
    https_maintenance_code: cdktf.stringToTerraform(struct!.httpsMaintenanceCode),
    https_password: cdktf.numberToTerraform(struct!.httpsPassword),
    https_password_string: cdktf.stringToTerraform(struct!.httpsPasswordString),
    https_postdata: cdktf.stringToTerraform(struct!.httpsPostdata),
    https_postfile: cdktf.stringToTerraform(struct!.httpsPostfile),
    https_response_code: cdktf.stringToTerraform(struct!.httpsResponseCode),
    https_server_cert_name: cdktf.stringToTerraform(struct!.httpsServerCertName),
    https_text: cdktf.stringToTerraform(struct!.httpsText),
    https_url: cdktf.numberToTerraform(struct!.httpsUrl),
    https_username: cdktf.stringToTerraform(struct!.httpsUsername),
    key: cdktf.stringToTerraform(struct!.key),
    key_pass_phrase: cdktf.numberToTerraform(struct!.keyPassPhrase),
    key_phrase: cdktf.stringToTerraform(struct!.keyPhrase),
    maintenance: cdktf.numberToTerraform(struct!.maintenance),
    maintenance_text: cdktf.stringToTerraform(struct!.maintenanceText),
    maintenance_text_regex: cdktf.stringToTerraform(struct!.maintenanceTextRegex),
    post_path: cdktf.stringToTerraform(struct!.postPath),
    post_type: cdktf.stringToTerraform(struct!.postType),
    response_code_regex: cdktf.stringToTerraform(struct!.responseCodeRegex),
    sni: cdktf.numberToTerraform(struct!.sni),
    text_regex: cdktf.stringToTerraform(struct!.textRegex),
    url_path: cdktf.stringToTerraform(struct!.urlPath),
    url_type: cdktf.stringToTerraform(struct!.urlType),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    web_port: cdktf.numberToTerraform(struct!.webPort),
    https_kerberos_kdc: healthMonitorMethodHttpsHttpsKerberosKdcToTerraform(struct!.httpsKerberosKdc),
  }
}


export function healthMonitorMethodHttpsToHclTerraform(struct?: HealthMonitorMethodHttpsOutputReference | HealthMonitorMethodHttps): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cert: {
      value: cdktf.stringToHclTerraform(struct!.cert),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cert_key_shared: {
      value: cdktf.numberToHclTerraform(struct!.certKeyShared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    disable_sslv2hello: {
      value: cdktf.numberToHclTerraform(struct!.disableSslv2Hello),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    http_version: {
      value: cdktf.stringToHclTerraform(struct!.httpVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https: {
      value: cdktf.numberToHclTerraform(struct!.https),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_expect: {
      value: cdktf.numberToHclTerraform(struct!.httpsExpect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_host: {
      value: cdktf.stringToHclTerraform(struct!.httpsHost),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_kerberos_auth: {
      value: cdktf.numberToHclTerraform(struct!.httpsKerberosAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_kerberos_realm: {
      value: cdktf.stringToHclTerraform(struct!.httpsKerberosRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_maintenance_code: {
      value: cdktf.stringToHclTerraform(struct!.httpsMaintenanceCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_password: {
      value: cdktf.numberToHclTerraform(struct!.httpsPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_password_string: {
      value: cdktf.stringToHclTerraform(struct!.httpsPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_postdata: {
      value: cdktf.stringToHclTerraform(struct!.httpsPostdata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_postfile: {
      value: cdktf.stringToHclTerraform(struct!.httpsPostfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_response_code: {
      value: cdktf.stringToHclTerraform(struct!.httpsResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_server_cert_name: {
      value: cdktf.stringToHclTerraform(struct!.httpsServerCertName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_text: {
      value: cdktf.stringToHclTerraform(struct!.httpsText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    https_url: {
      value: cdktf.numberToHclTerraform(struct!.httpsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_username: {
      value: cdktf.stringToHclTerraform(struct!.httpsUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_pass_phrase: {
      value: cdktf.numberToHclTerraform(struct!.keyPassPhrase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    key_phrase: {
      value: cdktf.stringToHclTerraform(struct!.keyPhrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance: {
      value: cdktf.numberToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance_text: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maintenance_text_regex: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceTextRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_path: {
      value: cdktf.stringToHclTerraform(struct!.postPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_type: {
      value: cdktf.stringToHclTerraform(struct!.postType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    response_code_regex: {
      value: cdktf.stringToHclTerraform(struct!.responseCodeRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sni: {
      value: cdktf.numberToHclTerraform(struct!.sni),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    text_regex: {
      value: cdktf.stringToHclTerraform(struct!.textRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_path: {
      value: cdktf.stringToHclTerraform(struct!.urlPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_type: {
      value: cdktf.stringToHclTerraform(struct!.urlType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_port: {
      value: cdktf.numberToHclTerraform(struct!.webPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    https_kerberos_kdc: {
      value: healthMonitorMethodHttpsHttpsKerberosKdcToHclTerraform(struct!.httpsKerberosKdc),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodHttpsHttpsKerberosKdcList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodHttpsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodHttps | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cert !== undefined) {
      hasAnyValues = true;
      internalValueResult.cert = this._cert;
    }
    if (this._certKeyShared !== undefined) {
      hasAnyValues = true;
      internalValueResult.certKeyShared = this._certKeyShared;
    }
    if (this._disableSslv2Hello !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableSslv2Hello = this._disableSslv2Hello;
    }
    if (this._httpVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpVersion = this._httpVersion;
    }
    if (this._https !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https;
    }
    if (this._httpsExpect !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsExpect = this._httpsExpect;
    }
    if (this._httpsHost !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsHost = this._httpsHost;
    }
    if (this._httpsKerberosAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosAuth = this._httpsKerberosAuth;
    }
    if (this._httpsKerberosRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosRealm = this._httpsKerberosRealm;
    }
    if (this._httpsMaintenanceCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsMaintenanceCode = this._httpsMaintenanceCode;
    }
    if (this._httpsPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPassword = this._httpsPassword;
    }
    if (this._httpsPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPasswordString = this._httpsPasswordString;
    }
    if (this._httpsPostdata !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPostdata = this._httpsPostdata;
    }
    if (this._httpsPostfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsPostfile = this._httpsPostfile;
    }
    if (this._httpsResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsResponseCode = this._httpsResponseCode;
    }
    if (this._httpsServerCertName !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsServerCertName = this._httpsServerCertName;
    }
    if (this._httpsText !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsText = this._httpsText;
    }
    if (this._httpsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsUrl = this._httpsUrl;
    }
    if (this._httpsUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsUsername = this._httpsUsername;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._keyPassPhrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPassPhrase = this._keyPassPhrase;
    }
    if (this._keyPhrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyPhrase = this._keyPhrase;
    }
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    if (this._maintenanceText !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceText = this._maintenanceText;
    }
    if (this._maintenanceTextRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceTextRegex = this._maintenanceTextRegex;
    }
    if (this._postPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.postPath = this._postPath;
    }
    if (this._postType !== undefined) {
      hasAnyValues = true;
      internalValueResult.postType = this._postType;
    }
    if (this._responseCodeRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.responseCodeRegex = this._responseCodeRegex;
    }
    if (this._sni !== undefined) {
      hasAnyValues = true;
      internalValueResult.sni = this._sni;
    }
    if (this._textRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.textRegex = this._textRegex;
    }
    if (this._urlPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlPath = this._urlPath;
    }
    if (this._urlType !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlType = this._urlType;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._webPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.webPort = this._webPort;
    }
    if (this._httpsKerberosKdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.httpsKerberosKdc = this._httpsKerberosKdc?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodHttps | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cert = undefined;
      this._certKeyShared = undefined;
      this._disableSslv2Hello = undefined;
      this._httpVersion = undefined;
      this._https = undefined;
      this._httpsExpect = undefined;
      this._httpsHost = undefined;
      this._httpsKerberosAuth = undefined;
      this._httpsKerberosRealm = undefined;
      this._httpsMaintenanceCode = undefined;
      this._httpsPassword = undefined;
      this._httpsPasswordString = undefined;
      this._httpsPostdata = undefined;
      this._httpsPostfile = undefined;
      this._httpsResponseCode = undefined;
      this._httpsServerCertName = undefined;
      this._httpsText = undefined;
      this._httpsUrl = undefined;
      this._httpsUsername = undefined;
      this._key = undefined;
      this._keyPassPhrase = undefined;
      this._keyPhrase = undefined;
      this._maintenance = undefined;
      this._maintenanceText = undefined;
      this._maintenanceTextRegex = undefined;
      this._postPath = undefined;
      this._postType = undefined;
      this._responseCodeRegex = undefined;
      this._sni = undefined;
      this._textRegex = undefined;
      this._urlPath = undefined;
      this._urlType = undefined;
      this._uuid = undefined;
      this._webPort = undefined;
      this._httpsKerberosKdc.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cert = value.cert;
      this._certKeyShared = value.certKeyShared;
      this._disableSslv2Hello = value.disableSslv2Hello;
      this._httpVersion = value.httpVersion;
      this._https = value.https;
      this._httpsExpect = value.httpsExpect;
      this._httpsHost = value.httpsHost;
      this._httpsKerberosAuth = value.httpsKerberosAuth;
      this._httpsKerberosRealm = value.httpsKerberosRealm;
      this._httpsMaintenanceCode = value.httpsMaintenanceCode;
      this._httpsPassword = value.httpsPassword;
      this._httpsPasswordString = value.httpsPasswordString;
      this._httpsPostdata = value.httpsPostdata;
      this._httpsPostfile = value.httpsPostfile;
      this._httpsResponseCode = value.httpsResponseCode;
      this._httpsServerCertName = value.httpsServerCertName;
      this._httpsText = value.httpsText;
      this._httpsUrl = value.httpsUrl;
      this._httpsUsername = value.httpsUsername;
      this._key = value.key;
      this._keyPassPhrase = value.keyPassPhrase;
      this._keyPhrase = value.keyPhrase;
      this._maintenance = value.maintenance;
      this._maintenanceText = value.maintenanceText;
      this._maintenanceTextRegex = value.maintenanceTextRegex;
      this._postPath = value.postPath;
      this._postType = value.postType;
      this._responseCodeRegex = value.responseCodeRegex;
      this._sni = value.sni;
      this._textRegex = value.textRegex;
      this._urlPath = value.urlPath;
      this._urlType = value.urlType;
      this._uuid = value.uuid;
      this._webPort = value.webPort;
      this._httpsKerberosKdc.internalValue = value.httpsKerberosKdc;
    }
  }

  // cert - computed: false, optional: true, required: false
  private _cert?: string; 
  public get cert() {
    return this.getStringAttribute('cert');
  }
  public set cert(value: string) {
    this._cert = value;
  }
  public resetCert() {
    this._cert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert;
  }

  // cert_key_shared - computed: false, optional: true, required: false
  private _certKeyShared?: number; 
  public get certKeyShared() {
    return this.getNumberAttribute('cert_key_shared');
  }
  public set certKeyShared(value: number) {
    this._certKeyShared = value;
  }
  public resetCertKeyShared() {
    this._certKeyShared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certKeySharedInput() {
    return this._certKeyShared;
  }

  // disable_sslv2hello - computed: false, optional: true, required: false
  private _disableSslv2Hello?: number; 
  public get disableSslv2Hello() {
    return this.getNumberAttribute('disable_sslv2hello');
  }
  public set disableSslv2Hello(value: number) {
    this._disableSslv2Hello = value;
  }
  public resetDisableSslv2Hello() {
    this._disableSslv2Hello = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableSslv2HelloInput() {
    return this._disableSslv2Hello;
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

  // https - computed: false, optional: true, required: false
  private _https?: number; 
  public get https() {
    return this.getNumberAttribute('https');
  }
  public set https(value: number) {
    this._https = value;
  }
  public resetHttps() {
    this._https = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https;
  }

  // https_expect - computed: false, optional: true, required: false
  private _httpsExpect?: number; 
  public get httpsExpect() {
    return this.getNumberAttribute('https_expect');
  }
  public set httpsExpect(value: number) {
    this._httpsExpect = value;
  }
  public resetHttpsExpect() {
    this._httpsExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsExpectInput() {
    return this._httpsExpect;
  }

  // https_host - computed: false, optional: true, required: false
  private _httpsHost?: string; 
  public get httpsHost() {
    return this.getStringAttribute('https_host');
  }
  public set httpsHost(value: string) {
    this._httpsHost = value;
  }
  public resetHttpsHost() {
    this._httpsHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsHostInput() {
    return this._httpsHost;
  }

  // https_kerberos_auth - computed: false, optional: true, required: false
  private _httpsKerberosAuth?: number; 
  public get httpsKerberosAuth() {
    return this.getNumberAttribute('https_kerberos_auth');
  }
  public set httpsKerberosAuth(value: number) {
    this._httpsKerberosAuth = value;
  }
  public resetHttpsKerberosAuth() {
    this._httpsKerberosAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosAuthInput() {
    return this._httpsKerberosAuth;
  }

  // https_kerberos_realm - computed: false, optional: true, required: false
  private _httpsKerberosRealm?: string; 
  public get httpsKerberosRealm() {
    return this.getStringAttribute('https_kerberos_realm');
  }
  public set httpsKerberosRealm(value: string) {
    this._httpsKerberosRealm = value;
  }
  public resetHttpsKerberosRealm() {
    this._httpsKerberosRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosRealmInput() {
    return this._httpsKerberosRealm;
  }

  // https_maintenance_code - computed: false, optional: true, required: false
  private _httpsMaintenanceCode?: string; 
  public get httpsMaintenanceCode() {
    return this.getStringAttribute('https_maintenance_code');
  }
  public set httpsMaintenanceCode(value: string) {
    this._httpsMaintenanceCode = value;
  }
  public resetHttpsMaintenanceCode() {
    this._httpsMaintenanceCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsMaintenanceCodeInput() {
    return this._httpsMaintenanceCode;
  }

  // https_password - computed: false, optional: true, required: false
  private _httpsPassword?: number; 
  public get httpsPassword() {
    return this.getNumberAttribute('https_password');
  }
  public set httpsPassword(value: number) {
    this._httpsPassword = value;
  }
  public resetHttpsPassword() {
    this._httpsPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPasswordInput() {
    return this._httpsPassword;
  }

  // https_password_string - computed: false, optional: true, required: false
  private _httpsPasswordString?: string; 
  public get httpsPasswordString() {
    return this.getStringAttribute('https_password_string');
  }
  public set httpsPasswordString(value: string) {
    this._httpsPasswordString = value;
  }
  public resetHttpsPasswordString() {
    this._httpsPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPasswordStringInput() {
    return this._httpsPasswordString;
  }

  // https_postdata - computed: false, optional: true, required: false
  private _httpsPostdata?: string; 
  public get httpsPostdata() {
    return this.getStringAttribute('https_postdata');
  }
  public set httpsPostdata(value: string) {
    this._httpsPostdata = value;
  }
  public resetHttpsPostdata() {
    this._httpsPostdata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPostdataInput() {
    return this._httpsPostdata;
  }

  // https_postfile - computed: false, optional: true, required: false
  private _httpsPostfile?: string; 
  public get httpsPostfile() {
    return this.getStringAttribute('https_postfile');
  }
  public set httpsPostfile(value: string) {
    this._httpsPostfile = value;
  }
  public resetHttpsPostfile() {
    this._httpsPostfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsPostfileInput() {
    return this._httpsPostfile;
  }

  // https_response_code - computed: false, optional: true, required: false
  private _httpsResponseCode?: string; 
  public get httpsResponseCode() {
    return this.getStringAttribute('https_response_code');
  }
  public set httpsResponseCode(value: string) {
    this._httpsResponseCode = value;
  }
  public resetHttpsResponseCode() {
    this._httpsResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsResponseCodeInput() {
    return this._httpsResponseCode;
  }

  // https_server_cert_name - computed: false, optional: true, required: false
  private _httpsServerCertName?: string; 
  public get httpsServerCertName() {
    return this.getStringAttribute('https_server_cert_name');
  }
  public set httpsServerCertName(value: string) {
    this._httpsServerCertName = value;
  }
  public resetHttpsServerCertName() {
    this._httpsServerCertName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsServerCertNameInput() {
    return this._httpsServerCertName;
  }

  // https_text - computed: false, optional: true, required: false
  private _httpsText?: string; 
  public get httpsText() {
    return this.getStringAttribute('https_text');
  }
  public set httpsText(value: string) {
    this._httpsText = value;
  }
  public resetHttpsText() {
    this._httpsText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsTextInput() {
    return this._httpsText;
  }

  // https_url - computed: false, optional: true, required: false
  private _httpsUrl?: number; 
  public get httpsUrl() {
    return this.getNumberAttribute('https_url');
  }
  public set httpsUrl(value: number) {
    this._httpsUrl = value;
  }
  public resetHttpsUrl() {
    this._httpsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsUrlInput() {
    return this._httpsUrl;
  }

  // https_username - computed: false, optional: true, required: false
  private _httpsUsername?: string; 
  public get httpsUsername() {
    return this.getStringAttribute('https_username');
  }
  public set httpsUsername(value: string) {
    this._httpsUsername = value;
  }
  public resetHttpsUsername() {
    this._httpsUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsUsernameInput() {
    return this._httpsUsername;
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

  // key_pass_phrase - computed: false, optional: true, required: false
  private _keyPassPhrase?: number; 
  public get keyPassPhrase() {
    return this.getNumberAttribute('key_pass_phrase');
  }
  public set keyPassPhrase(value: number) {
    this._keyPassPhrase = value;
  }
  public resetKeyPassPhrase() {
    this._keyPassPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPassPhraseInput() {
    return this._keyPassPhrase;
  }

  // key_phrase - computed: false, optional: true, required: false
  private _keyPhrase?: string; 
  public get keyPhrase() {
    return this.getStringAttribute('key_phrase');
  }
  public set keyPhrase(value: string) {
    this._keyPhrase = value;
  }
  public resetKeyPhrase() {
    this._keyPhrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyPhraseInput() {
    return this._keyPhrase;
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: number; 
  public get maintenance() {
    return this.getNumberAttribute('maintenance');
  }
  public set maintenance(value: number) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // maintenance_text - computed: false, optional: true, required: false
  private _maintenanceText?: string; 
  public get maintenanceText() {
    return this.getStringAttribute('maintenance_text');
  }
  public set maintenanceText(value: string) {
    this._maintenanceText = value;
  }
  public resetMaintenanceText() {
    this._maintenanceText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextInput() {
    return this._maintenanceText;
  }

  // maintenance_text_regex - computed: false, optional: true, required: false
  private _maintenanceTextRegex?: string; 
  public get maintenanceTextRegex() {
    return this.getStringAttribute('maintenance_text_regex');
  }
  public set maintenanceTextRegex(value: string) {
    this._maintenanceTextRegex = value;
  }
  public resetMaintenanceTextRegex() {
    this._maintenanceTextRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextRegexInput() {
    return this._maintenanceTextRegex;
  }

  // post_path - computed: false, optional: true, required: false
  private _postPath?: string; 
  public get postPath() {
    return this.getStringAttribute('post_path');
  }
  public set postPath(value: string) {
    this._postPath = value;
  }
  public resetPostPath() {
    this._postPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postPathInput() {
    return this._postPath;
  }

  // post_type - computed: false, optional: true, required: false
  private _postType?: string; 
  public get postType() {
    return this.getStringAttribute('post_type');
  }
  public set postType(value: string) {
    this._postType = value;
  }
  public resetPostType() {
    this._postType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postTypeInput() {
    return this._postType;
  }

  // response_code_regex - computed: false, optional: true, required: false
  private _responseCodeRegex?: string; 
  public get responseCodeRegex() {
    return this.getStringAttribute('response_code_regex');
  }
  public set responseCodeRegex(value: string) {
    this._responseCodeRegex = value;
  }
  public resetResponseCodeRegex() {
    this._responseCodeRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeRegexInput() {
    return this._responseCodeRegex;
  }

  // sni - computed: false, optional: true, required: false
  private _sni?: number; 
  public get sni() {
    return this.getNumberAttribute('sni');
  }
  public set sni(value: number) {
    this._sni = value;
  }
  public resetSni() {
    this._sni = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniInput() {
    return this._sni;
  }

  // text_regex - computed: false, optional: true, required: false
  private _textRegex?: string; 
  public get textRegex() {
    return this.getStringAttribute('text_regex');
  }
  public set textRegex(value: string) {
    this._textRegex = value;
  }
  public resetTextRegex() {
    this._textRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textRegexInput() {
    return this._textRegex;
  }

  // url_path - computed: false, optional: true, required: false
  private _urlPath?: string; 
  public get urlPath() {
    return this.getStringAttribute('url_path');
  }
  public set urlPath(value: string) {
    this._urlPath = value;
  }
  public resetUrlPath() {
    this._urlPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlPathInput() {
    return this._urlPath;
  }

  // url_type - computed: false, optional: true, required: false
  private _urlType?: string; 
  public get urlType() {
    return this.getStringAttribute('url_type');
  }
  public set urlType(value: string) {
    this._urlType = value;
  }
  public resetUrlType() {
    this._urlType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlTypeInput() {
    return this._urlType;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // web_port - computed: false, optional: true, required: false
  private _webPort?: number; 
  public get webPort() {
    return this.getNumberAttribute('web_port');
  }
  public set webPort(value: number) {
    this._webPort = value;
  }
  public resetWebPort() {
    this._webPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webPortInput() {
    return this._webPort;
  }

  // https_kerberos_kdc - computed: false, optional: true, required: false
  private _httpsKerberosKdc = new HealthMonitorMethodHttpsHttpsKerberosKdcOutputReference(this, "https_kerberos_kdc");
  public get httpsKerberosKdc() {
    return this._httpsKerberosKdc;
  }
  public putHttpsKerberosKdc(value: HealthMonitorMethodHttpsHttpsKerberosKdc) {
    this._httpsKerberosKdc.internalValue = value;
  }
  public resetHttpsKerberosKdc() {
    this._httpsKerberosKdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsKerberosKdcInput() {
    return this._httpsKerberosKdc.internalValue;
  }
}
export interface HealthMonitorMethodIcmp {
  /**
  * ICMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#icmp HealthMonitor#icmp}
  */
  readonly icmp?: number;
  /**
  * Specify IPv4 address of destination behind monitored node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ip HealthMonitor#ip}
  */
  readonly ip?: string;
  /**
  * Specify IPv6 address of destination behind monitored node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ipv6 HealthMonitor#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Apply transparent mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#transparent HealthMonitor#transparent}
  */
  readonly transparent?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodIcmpToTerraform(struct?: HealthMonitorMethodIcmpOutputReference | HealthMonitorMethodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    icmp: cdktf.numberToTerraform(struct!.icmp),
    ip: cdktf.stringToTerraform(struct!.ip),
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    transparent: cdktf.numberToTerraform(struct!.transparent),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodIcmpToHclTerraform(struct?: HealthMonitorMethodIcmpOutputReference | HealthMonitorMethodIcmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    icmp: {
      value: cdktf.numberToHclTerraform(struct!.icmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transparent: {
      value: cdktf.numberToHclTerraform(struct!.transparent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodIcmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodIcmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._icmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._transparent !== undefined) {
      hasAnyValues = true;
      internalValueResult.transparent = this._transparent;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodIcmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._icmp = undefined;
      this._ip = undefined;
      this._ipv6 = undefined;
      this._transparent = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._icmp = value.icmp;
      this._ip = value.ip;
      this._ipv6 = value.ipv6;
      this._transparent = value.transparent;
      this._uuid = value.uuid;
    }
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp?: number; 
  public get icmp() {
    return this.getNumberAttribute('icmp');
  }
  public set icmp(value: number) {
    this._icmp = value;
  }
  public resetIcmp() {
    this._icmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // ipv6 - computed: false, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // transparent - computed: false, optional: true, required: false
  private _transparent?: number; 
  public get transparent() {
    return this.getNumberAttribute('transparent');
  }
  public set transparent(value: number) {
    this._transparent = value;
  }
  public resetTransparent() {
    this._transparent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transparentInput() {
    return this._transparent;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodImap {
  /**
  * IMAP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap HealthMonitor#imap}
  */
  readonly imap?: number;
  /**
  * Challenge-response authentication mechanism
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_cram_md5 HealthMonitor#imap_cram_md5}
  */
  readonly imapCramMd5?: number;
  /**
  * Simple login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_login HealthMonitor#imap_login}
  */
  readonly imapLogin?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_password HealthMonitor#imap_password}
  */
  readonly imapPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_password_string HealthMonitor#imap_password_string}
  */
  readonly imapPasswordString?: string;
  /**
  * Plain text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_plain HealthMonitor#imap_plain}
  */
  readonly imapPlain?: number;
  /**
  * Specify the IMAP port, default is 143 (Port Number (default 143))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_port HealthMonitor#imap_port}
  */
  readonly imapPort?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap_username HealthMonitor#imap_username}
  */
  readonly imapUsername?: string;
  /**
  * Specify the Authentication method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pwd_auth HealthMonitor#pwd_auth}
  */
  readonly pwdAuth?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodImapToTerraform(struct?: HealthMonitorMethodImapOutputReference | HealthMonitorMethodImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    imap: cdktf.numberToTerraform(struct!.imap),
    imap_cram_md5: cdktf.numberToTerraform(struct!.imapCramMd5),
    imap_login: cdktf.numberToTerraform(struct!.imapLogin),
    imap_password: cdktf.numberToTerraform(struct!.imapPassword),
    imap_password_string: cdktf.stringToTerraform(struct!.imapPasswordString),
    imap_plain: cdktf.numberToTerraform(struct!.imapPlain),
    imap_port: cdktf.numberToTerraform(struct!.imapPort),
    imap_username: cdktf.stringToTerraform(struct!.imapUsername),
    pwd_auth: cdktf.numberToTerraform(struct!.pwdAuth),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodImapToHclTerraform(struct?: HealthMonitorMethodImapOutputReference | HealthMonitorMethodImap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    imap: {
      value: cdktf.numberToHclTerraform(struct!.imap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_cram_md5: {
      value: cdktf.numberToHclTerraform(struct!.imapCramMd5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_login: {
      value: cdktf.numberToHclTerraform(struct!.imapLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_password: {
      value: cdktf.numberToHclTerraform(struct!.imapPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_password_string: {
      value: cdktf.stringToHclTerraform(struct!.imapPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    imap_plain: {
      value: cdktf.numberToHclTerraform(struct!.imapPlain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_port: {
      value: cdktf.numberToHclTerraform(struct!.imapPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    imap_username: {
      value: cdktf.stringToHclTerraform(struct!.imapUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pwd_auth: {
      value: cdktf.numberToHclTerraform(struct!.pwdAuth),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodImapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodImap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imap !== undefined) {
      hasAnyValues = true;
      internalValueResult.imap = this._imap;
    }
    if (this._imapCramMd5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapCramMd5 = this._imapCramMd5;
    }
    if (this._imapLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapLogin = this._imapLogin;
    }
    if (this._imapPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapPassword = this._imapPassword;
    }
    if (this._imapPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapPasswordString = this._imapPasswordString;
    }
    if (this._imapPlain !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapPlain = this._imapPlain;
    }
    if (this._imapPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapPort = this._imapPort;
    }
    if (this._imapUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.imapUsername = this._imapUsername;
    }
    if (this._pwdAuth !== undefined) {
      hasAnyValues = true;
      internalValueResult.pwdAuth = this._pwdAuth;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodImap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._imap = undefined;
      this._imapCramMd5 = undefined;
      this._imapLogin = undefined;
      this._imapPassword = undefined;
      this._imapPasswordString = undefined;
      this._imapPlain = undefined;
      this._imapPort = undefined;
      this._imapUsername = undefined;
      this._pwdAuth = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._imap = value.imap;
      this._imapCramMd5 = value.imapCramMd5;
      this._imapLogin = value.imapLogin;
      this._imapPassword = value.imapPassword;
      this._imapPasswordString = value.imapPasswordString;
      this._imapPlain = value.imapPlain;
      this._imapPort = value.imapPort;
      this._imapUsername = value.imapUsername;
      this._pwdAuth = value.pwdAuth;
      this._uuid = value.uuid;
    }
  }

  // imap - computed: false, optional: true, required: false
  private _imap?: number; 
  public get imap() {
    return this.getNumberAttribute('imap');
  }
  public set imap(value: number) {
    this._imap = value;
  }
  public resetImap() {
    this._imap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap;
  }

  // imap_cram_md5 - computed: false, optional: true, required: false
  private _imapCramMd5?: number; 
  public get imapCramMd5() {
    return this.getNumberAttribute('imap_cram_md5');
  }
  public set imapCramMd5(value: number) {
    this._imapCramMd5 = value;
  }
  public resetImapCramMd5() {
    this._imapCramMd5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapCramMd5Input() {
    return this._imapCramMd5;
  }

  // imap_login - computed: false, optional: true, required: false
  private _imapLogin?: number; 
  public get imapLogin() {
    return this.getNumberAttribute('imap_login');
  }
  public set imapLogin(value: number) {
    this._imapLogin = value;
  }
  public resetImapLogin() {
    this._imapLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapLoginInput() {
    return this._imapLogin;
  }

  // imap_password - computed: false, optional: true, required: false
  private _imapPassword?: number; 
  public get imapPassword() {
    return this.getNumberAttribute('imap_password');
  }
  public set imapPassword(value: number) {
    this._imapPassword = value;
  }
  public resetImapPassword() {
    this._imapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPasswordInput() {
    return this._imapPassword;
  }

  // imap_password_string - computed: false, optional: true, required: false
  private _imapPasswordString?: string; 
  public get imapPasswordString() {
    return this.getStringAttribute('imap_password_string');
  }
  public set imapPasswordString(value: string) {
    this._imapPasswordString = value;
  }
  public resetImapPasswordString() {
    this._imapPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPasswordStringInput() {
    return this._imapPasswordString;
  }

  // imap_plain - computed: false, optional: true, required: false
  private _imapPlain?: number; 
  public get imapPlain() {
    return this.getNumberAttribute('imap_plain');
  }
  public set imapPlain(value: number) {
    this._imapPlain = value;
  }
  public resetImapPlain() {
    this._imapPlain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPlainInput() {
    return this._imapPlain;
  }

  // imap_port - computed: false, optional: true, required: false
  private _imapPort?: number; 
  public get imapPort() {
    return this.getNumberAttribute('imap_port');
  }
  public set imapPort(value: number) {
    this._imapPort = value;
  }
  public resetImapPort() {
    this._imapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapPortInput() {
    return this._imapPort;
  }

  // imap_username - computed: false, optional: true, required: false
  private _imapUsername?: string; 
  public get imapUsername() {
    return this.getStringAttribute('imap_username');
  }
  public set imapUsername(value: string) {
    this._imapUsername = value;
  }
  public resetImapUsername() {
    this._imapUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapUsernameInput() {
    return this._imapUsername;
  }

  // pwd_auth - computed: false, optional: true, required: false
  private _pwdAuth?: number; 
  public get pwdAuth() {
    return this.getNumberAttribute('pwd_auth');
  }
  public set pwdAuth(value: number) {
    this._pwdAuth = value;
  }
  public resetPwdAuth() {
    this._pwdAuth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pwdAuthInput() {
    return this._pwdAuth;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodKerberosKdcKerberosCfg {
  /**
  * Kerberos admin
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kadmin HealthMonitor#kadmin}
  */
  readonly kadmin?: number;
  /**
  * Specify the kdc server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kadmin_kdc HealthMonitor#kadmin_kdc}
  */
  readonly kadminKdc?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kadmin_password HealthMonitor#kadmin_password}
  */
  readonly kadminPassword?: string;
  /**
  * Specify the principal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kadmin_pricipal_name HealthMonitor#kadmin_pricipal_name}
  */
  readonly kadminPricipalName?: string;
  /**
  * Specify the realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kadmin_realm HealthMonitor#kadmin_realm}
  */
  readonly kadminRealm?: string;
  /**
  * Specify the admin server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kadmin_server HealthMonitor#kadmin_server}
  */
  readonly kadminServer?: string;
  /**
  * Kerberos KDC
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kinit HealthMonitor#kinit}
  */
  readonly kinit?: number;
  /**
  * Specify the kdc server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kinit_kdc HealthMonitor#kinit_kdc}
  */
  readonly kinitKdc?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kinit_password HealthMonitor#kinit_password}
  */
  readonly kinitPassword?: string;
  /**
  * Specify the principal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kinit_pricipal_name HealthMonitor#kinit_pricipal_name}
  */
  readonly kinitPricipalName?: string;
  /**
  * Kerberos change passwd
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kpasswd HealthMonitor#kpasswd}
  */
  readonly kpasswd?: number;
  /**
  * Specify the kdc server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kpasswd_kdc HealthMonitor#kpasswd_kdc}
  */
  readonly kpasswdKdc?: string;
  /**
  * Password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kpasswd_password HealthMonitor#kpasswd_password}
  */
  readonly kpasswdPassword?: string;
  /**
  * Specify the principal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kpasswd_pricipal_name HealthMonitor#kpasswd_pricipal_name}
  */
  readonly kpasswdPricipalName?: string;
  /**
  * Specify the Kerberos password server, host|ip [:port]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kpasswd_server HealthMonitor#kpasswd_server}
  */
  readonly kpasswdServer?: string;
  /**
  * Specify the kerberos tcp only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tcp_only HealthMonitor#tcp_only}
  */
  readonly tcpOnly?: number;
}

export function healthMonitorMethodKerberosKdcKerberosCfgToTerraform(struct?: HealthMonitorMethodKerberosKdcKerberosCfgOutputReference | HealthMonitorMethodKerberosKdcKerberosCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    kadmin: cdktf.numberToTerraform(struct!.kadmin),
    kadmin_kdc: cdktf.stringToTerraform(struct!.kadminKdc),
    kadmin_password: cdktf.stringToTerraform(struct!.kadminPassword),
    kadmin_pricipal_name: cdktf.stringToTerraform(struct!.kadminPricipalName),
    kadmin_realm: cdktf.stringToTerraform(struct!.kadminRealm),
    kadmin_server: cdktf.stringToTerraform(struct!.kadminServer),
    kinit: cdktf.numberToTerraform(struct!.kinit),
    kinit_kdc: cdktf.stringToTerraform(struct!.kinitKdc),
    kinit_password: cdktf.stringToTerraform(struct!.kinitPassword),
    kinit_pricipal_name: cdktf.stringToTerraform(struct!.kinitPricipalName),
    kpasswd: cdktf.numberToTerraform(struct!.kpasswd),
    kpasswd_kdc: cdktf.stringToTerraform(struct!.kpasswdKdc),
    kpasswd_password: cdktf.stringToTerraform(struct!.kpasswdPassword),
    kpasswd_pricipal_name: cdktf.stringToTerraform(struct!.kpasswdPricipalName),
    kpasswd_server: cdktf.stringToTerraform(struct!.kpasswdServer),
    tcp_only: cdktf.numberToTerraform(struct!.tcpOnly),
  }
}


export function healthMonitorMethodKerberosKdcKerberosCfgToHclTerraform(struct?: HealthMonitorMethodKerberosKdcKerberosCfgOutputReference | HealthMonitorMethodKerberosKdcKerberosCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    kadmin: {
      value: cdktf.numberToHclTerraform(struct!.kadmin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kadmin_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kadminKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_password: {
      value: cdktf.stringToHclTerraform(struct!.kadminPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_pricipal_name: {
      value: cdktf.stringToHclTerraform(struct!.kadminPricipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_realm: {
      value: cdktf.stringToHclTerraform(struct!.kadminRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kadmin_server: {
      value: cdktf.stringToHclTerraform(struct!.kadminServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinit: {
      value: cdktf.numberToHclTerraform(struct!.kinit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kinit_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kinitKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinit_password: {
      value: cdktf.stringToHclTerraform(struct!.kinitPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kinit_pricipal_name: {
      value: cdktf.stringToHclTerraform(struct!.kinitPricipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd: {
      value: cdktf.numberToHclTerraform(struct!.kpasswd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    kpasswd_kdc: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdKdc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd_password: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd_pricipal_name: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdPricipalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kpasswd_server: {
      value: cdktf.stringToHclTerraform(struct!.kpasswdServer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_only: {
      value: cdktf.numberToHclTerraform(struct!.tcpOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodKerberosKdcKerberosCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodKerberosKdcKerberosCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._kadmin !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadmin = this._kadmin;
    }
    if (this._kadminKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminKdc = this._kadminKdc;
    }
    if (this._kadminPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminPassword = this._kadminPassword;
    }
    if (this._kadminPricipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminPricipalName = this._kadminPricipalName;
    }
    if (this._kadminRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminRealm = this._kadminRealm;
    }
    if (this._kadminServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kadminServer = this._kadminServer;
    }
    if (this._kinit !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinit = this._kinit;
    }
    if (this._kinitKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinitKdc = this._kinitKdc;
    }
    if (this._kinitPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinitPassword = this._kinitPassword;
    }
    if (this._kinitPricipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kinitPricipalName = this._kinitPricipalName;
    }
    if (this._kpasswd !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswd = this._kpasswd;
    }
    if (this._kpasswdKdc !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdKdc = this._kpasswdKdc;
    }
    if (this._kpasswdPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdPassword = this._kpasswdPassword;
    }
    if (this._kpasswdPricipalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdPricipalName = this._kpasswdPricipalName;
    }
    if (this._kpasswdServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.kpasswdServer = this._kpasswdServer;
    }
    if (this._tcpOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpOnly = this._tcpOnly;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodKerberosKdcKerberosCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._kadmin = undefined;
      this._kadminKdc = undefined;
      this._kadminPassword = undefined;
      this._kadminPricipalName = undefined;
      this._kadminRealm = undefined;
      this._kadminServer = undefined;
      this._kinit = undefined;
      this._kinitKdc = undefined;
      this._kinitPassword = undefined;
      this._kinitPricipalName = undefined;
      this._kpasswd = undefined;
      this._kpasswdKdc = undefined;
      this._kpasswdPassword = undefined;
      this._kpasswdPricipalName = undefined;
      this._kpasswdServer = undefined;
      this._tcpOnly = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._kadmin = value.kadmin;
      this._kadminKdc = value.kadminKdc;
      this._kadminPassword = value.kadminPassword;
      this._kadminPricipalName = value.kadminPricipalName;
      this._kadminRealm = value.kadminRealm;
      this._kadminServer = value.kadminServer;
      this._kinit = value.kinit;
      this._kinitKdc = value.kinitKdc;
      this._kinitPassword = value.kinitPassword;
      this._kinitPricipalName = value.kinitPricipalName;
      this._kpasswd = value.kpasswd;
      this._kpasswdKdc = value.kpasswdKdc;
      this._kpasswdPassword = value.kpasswdPassword;
      this._kpasswdPricipalName = value.kpasswdPricipalName;
      this._kpasswdServer = value.kpasswdServer;
      this._tcpOnly = value.tcpOnly;
    }
  }

  // kadmin - computed: false, optional: true, required: false
  private _kadmin?: number; 
  public get kadmin() {
    return this.getNumberAttribute('kadmin');
  }
  public set kadmin(value: number) {
    this._kadmin = value;
  }
  public resetKadmin() {
    this._kadmin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminInput() {
    return this._kadmin;
  }

  // kadmin_kdc - computed: false, optional: true, required: false
  private _kadminKdc?: string; 
  public get kadminKdc() {
    return this.getStringAttribute('kadmin_kdc');
  }
  public set kadminKdc(value: string) {
    this._kadminKdc = value;
  }
  public resetKadminKdc() {
    this._kadminKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminKdcInput() {
    return this._kadminKdc;
  }

  // kadmin_password - computed: false, optional: true, required: false
  private _kadminPassword?: string; 
  public get kadminPassword() {
    return this.getStringAttribute('kadmin_password');
  }
  public set kadminPassword(value: string) {
    this._kadminPassword = value;
  }
  public resetKadminPassword() {
    this._kadminPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminPasswordInput() {
    return this._kadminPassword;
  }

  // kadmin_pricipal_name - computed: false, optional: true, required: false
  private _kadminPricipalName?: string; 
  public get kadminPricipalName() {
    return this.getStringAttribute('kadmin_pricipal_name');
  }
  public set kadminPricipalName(value: string) {
    this._kadminPricipalName = value;
  }
  public resetKadminPricipalName() {
    this._kadminPricipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminPricipalNameInput() {
    return this._kadminPricipalName;
  }

  // kadmin_realm - computed: false, optional: true, required: false
  private _kadminRealm?: string; 
  public get kadminRealm() {
    return this.getStringAttribute('kadmin_realm');
  }
  public set kadminRealm(value: string) {
    this._kadminRealm = value;
  }
  public resetKadminRealm() {
    this._kadminRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminRealmInput() {
    return this._kadminRealm;
  }

  // kadmin_server - computed: false, optional: true, required: false
  private _kadminServer?: string; 
  public get kadminServer() {
    return this.getStringAttribute('kadmin_server');
  }
  public set kadminServer(value: string) {
    this._kadminServer = value;
  }
  public resetKadminServer() {
    this._kadminServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kadminServerInput() {
    return this._kadminServer;
  }

  // kinit - computed: false, optional: true, required: false
  private _kinit?: number; 
  public get kinit() {
    return this.getNumberAttribute('kinit');
  }
  public set kinit(value: number) {
    this._kinit = value;
  }
  public resetKinit() {
    this._kinit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitInput() {
    return this._kinit;
  }

  // kinit_kdc - computed: false, optional: true, required: false
  private _kinitKdc?: string; 
  public get kinitKdc() {
    return this.getStringAttribute('kinit_kdc');
  }
  public set kinitKdc(value: string) {
    this._kinitKdc = value;
  }
  public resetKinitKdc() {
    this._kinitKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitKdcInput() {
    return this._kinitKdc;
  }

  // kinit_password - computed: false, optional: true, required: false
  private _kinitPassword?: string; 
  public get kinitPassword() {
    return this.getStringAttribute('kinit_password');
  }
  public set kinitPassword(value: string) {
    this._kinitPassword = value;
  }
  public resetKinitPassword() {
    this._kinitPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitPasswordInput() {
    return this._kinitPassword;
  }

  // kinit_pricipal_name - computed: false, optional: true, required: false
  private _kinitPricipalName?: string; 
  public get kinitPricipalName() {
    return this.getStringAttribute('kinit_pricipal_name');
  }
  public set kinitPricipalName(value: string) {
    this._kinitPricipalName = value;
  }
  public resetKinitPricipalName() {
    this._kinitPricipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kinitPricipalNameInput() {
    return this._kinitPricipalName;
  }

  // kpasswd - computed: false, optional: true, required: false
  private _kpasswd?: number; 
  public get kpasswd() {
    return this.getNumberAttribute('kpasswd');
  }
  public set kpasswd(value: number) {
    this._kpasswd = value;
  }
  public resetKpasswd() {
    this._kpasswd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdInput() {
    return this._kpasswd;
  }

  // kpasswd_kdc - computed: false, optional: true, required: false
  private _kpasswdKdc?: string; 
  public get kpasswdKdc() {
    return this.getStringAttribute('kpasswd_kdc');
  }
  public set kpasswdKdc(value: string) {
    this._kpasswdKdc = value;
  }
  public resetKpasswdKdc() {
    this._kpasswdKdc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdKdcInput() {
    return this._kpasswdKdc;
  }

  // kpasswd_password - computed: false, optional: true, required: false
  private _kpasswdPassword?: string; 
  public get kpasswdPassword() {
    return this.getStringAttribute('kpasswd_password');
  }
  public set kpasswdPassword(value: string) {
    this._kpasswdPassword = value;
  }
  public resetKpasswdPassword() {
    this._kpasswdPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdPasswordInput() {
    return this._kpasswdPassword;
  }

  // kpasswd_pricipal_name - computed: false, optional: true, required: false
  private _kpasswdPricipalName?: string; 
  public get kpasswdPricipalName() {
    return this.getStringAttribute('kpasswd_pricipal_name');
  }
  public set kpasswdPricipalName(value: string) {
    this._kpasswdPricipalName = value;
  }
  public resetKpasswdPricipalName() {
    this._kpasswdPricipalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdPricipalNameInput() {
    return this._kpasswdPricipalName;
  }

  // kpasswd_server - computed: false, optional: true, required: false
  private _kpasswdServer?: string; 
  public get kpasswdServer() {
    return this.getStringAttribute('kpasswd_server');
  }
  public set kpasswdServer(value: string) {
    this._kpasswdServer = value;
  }
  public resetKpasswdServer() {
    this._kpasswdServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kpasswdServerInput() {
    return this._kpasswdServer;
  }

  // tcp_only - computed: false, optional: true, required: false
  private _tcpOnly?: number; 
  public get tcpOnly() {
    return this.getNumberAttribute('tcp_only');
  }
  public set tcpOnly(value: number) {
    this._tcpOnly = value;
  }
  public resetTcpOnly() {
    this._tcpOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpOnlyInput() {
    return this._tcpOnly;
  }
}
export interface HealthMonitorMethodKerberosKdc {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * kerberos_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kerberos_cfg HealthMonitor#kerberos_cfg}
  */
  readonly kerberosCfg?: HealthMonitorMethodKerberosKdcKerberosCfg;
}

export function healthMonitorMethodKerberosKdcToTerraform(struct?: HealthMonitorMethodKerberosKdcOutputReference | HealthMonitorMethodKerberosKdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    kerberos_cfg: healthMonitorMethodKerberosKdcKerberosCfgToTerraform(struct!.kerberosCfg),
  }
}


export function healthMonitorMethodKerberosKdcToHclTerraform(struct?: HealthMonitorMethodKerberosKdcOutputReference | HealthMonitorMethodKerberosKdc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kerberos_cfg: {
      value: healthMonitorMethodKerberosKdcKerberosCfgToHclTerraform(struct!.kerberosCfg),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodKerberosKdcKerberosCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodKerberosKdcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodKerberosKdc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._kerberosCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosCfg = this._kerberosCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodKerberosKdc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._kerberosCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._kerberosCfg.internalValue = value.kerberosCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // kerberos_cfg - computed: false, optional: true, required: false
  private _kerberosCfg = new HealthMonitorMethodKerberosKdcKerberosCfgOutputReference(this, "kerberos_cfg");
  public get kerberosCfg() {
    return this._kerberosCfg;
  }
  public putKerberosCfg(value: HealthMonitorMethodKerberosKdcKerberosCfg) {
    this._kerberosCfg.internalValue = value;
  }
  public resetKerberosCfg() {
    this._kerberosCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosCfgInput() {
    return this._kerberosCfg.internalValue;
  }
}
export interface HealthMonitorMethodLdap {
  /**
  * Mark server up on receiving a not-found response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#acceptnotfound HealthMonitor#acceptnotfound}
  */
  readonly acceptnotfound?: number;
  /**
  * Mark server up on receiving a search result reference response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#acceptresref HealthMonitor#acceptresref}
  */
  readonly acceptresref?: number;
  /**
  * Specify LDAP DN distinguished name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#basedn HealthMonitor#basedn}
  */
  readonly basedn?: string;
  /**
  * LDAP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap HealthMonitor#ldap}
  */
  readonly ldap?: number;
  /**
  * Specify the distinguished name for bindRequest (LDAP DN distinguished name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_binddn HealthMonitor#ldap_binddn}
  */
  readonly ldapBinddn?: string;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_password HealthMonitor#ldap_password}
  */
  readonly ldapPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_password_string HealthMonitor#ldap_password_string}
  */
  readonly ldapPasswordString?: string;
  /**
  * Specify the LDAP port (Speciry port number, default is 389, or 636 if LDAP over SSL)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_port HealthMonitor#ldap_port}
  */
  readonly ldapPort?: number;
  /**
  * LDAP query to be excuted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_query HealthMonitor#ldap_query}
  */
  readonly ldapQuery?: string;
  /**
  * Specify a query to be executed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_run_search HealthMonitor#ldap_run_search}
  */
  readonly ldapRunSearch?: number;
  /**
  * 'overssl': Set LDAP over SSL; 'StartTLS': LDAP switch to TLS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap_security HealthMonitor#ldap_security}
  */
  readonly ldapSecurity?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodLdapToTerraform(struct?: HealthMonitorMethodLdapOutputReference | HealthMonitorMethodLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    acceptnotfound: cdktf.numberToTerraform(struct!.acceptnotfound),
    acceptresref: cdktf.numberToTerraform(struct!.acceptresref),
    basedn: cdktf.stringToTerraform(struct!.basedn),
    ldap: cdktf.numberToTerraform(struct!.ldap),
    ldap_binddn: cdktf.stringToTerraform(struct!.ldapBinddn),
    ldap_password: cdktf.numberToTerraform(struct!.ldapPassword),
    ldap_password_string: cdktf.stringToTerraform(struct!.ldapPasswordString),
    ldap_port: cdktf.numberToTerraform(struct!.ldapPort),
    ldap_query: cdktf.stringToTerraform(struct!.ldapQuery),
    ldap_run_search: cdktf.numberToTerraform(struct!.ldapRunSearch),
    ldap_security: cdktf.stringToTerraform(struct!.ldapSecurity),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodLdapToHclTerraform(struct?: HealthMonitorMethodLdapOutputReference | HealthMonitorMethodLdap): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    acceptnotfound: {
      value: cdktf.numberToHclTerraform(struct!.acceptnotfound),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    acceptresref: {
      value: cdktf.numberToHclTerraform(struct!.acceptresref),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    basedn: {
      value: cdktf.stringToHclTerraform(struct!.basedn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap: {
      value: cdktf.numberToHclTerraform(struct!.ldap),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_binddn: {
      value: cdktf.stringToHclTerraform(struct!.ldapBinddn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_password: {
      value: cdktf.numberToHclTerraform(struct!.ldapPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_password_string: {
      value: cdktf.stringToHclTerraform(struct!.ldapPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_port: {
      value: cdktf.numberToHclTerraform(struct!.ldapPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_query: {
      value: cdktf.stringToHclTerraform(struct!.ldapQuery),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ldap_run_search: {
      value: cdktf.numberToHclTerraform(struct!.ldapRunSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ldap_security: {
      value: cdktf.stringToHclTerraform(struct!.ldapSecurity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodLdap | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._acceptnotfound !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptnotfound = this._acceptnotfound;
    }
    if (this._acceptresref !== undefined) {
      hasAnyValues = true;
      internalValueResult.acceptresref = this._acceptresref;
    }
    if (this._basedn !== undefined) {
      hasAnyValues = true;
      internalValueResult.basedn = this._basedn;
    }
    if (this._ldap !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap;
    }
    if (this._ldapBinddn !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapBinddn = this._ldapBinddn;
    }
    if (this._ldapPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapPassword = this._ldapPassword;
    }
    if (this._ldapPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapPasswordString = this._ldapPasswordString;
    }
    if (this._ldapPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapPort = this._ldapPort;
    }
    if (this._ldapQuery !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapQuery = this._ldapQuery;
    }
    if (this._ldapRunSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapRunSearch = this._ldapRunSearch;
    }
    if (this._ldapSecurity !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldapSecurity = this._ldapSecurity;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodLdap | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._acceptnotfound = undefined;
      this._acceptresref = undefined;
      this._basedn = undefined;
      this._ldap = undefined;
      this._ldapBinddn = undefined;
      this._ldapPassword = undefined;
      this._ldapPasswordString = undefined;
      this._ldapPort = undefined;
      this._ldapQuery = undefined;
      this._ldapRunSearch = undefined;
      this._ldapSecurity = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._acceptnotfound = value.acceptnotfound;
      this._acceptresref = value.acceptresref;
      this._basedn = value.basedn;
      this._ldap = value.ldap;
      this._ldapBinddn = value.ldapBinddn;
      this._ldapPassword = value.ldapPassword;
      this._ldapPasswordString = value.ldapPasswordString;
      this._ldapPort = value.ldapPort;
      this._ldapQuery = value.ldapQuery;
      this._ldapRunSearch = value.ldapRunSearch;
      this._ldapSecurity = value.ldapSecurity;
      this._uuid = value.uuid;
    }
  }

  // acceptnotfound - computed: false, optional: true, required: false
  private _acceptnotfound?: number; 
  public get acceptnotfound() {
    return this.getNumberAttribute('acceptnotfound');
  }
  public set acceptnotfound(value: number) {
    this._acceptnotfound = value;
  }
  public resetAcceptnotfound() {
    this._acceptnotfound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptnotfoundInput() {
    return this._acceptnotfound;
  }

  // acceptresref - computed: false, optional: true, required: false
  private _acceptresref?: number; 
  public get acceptresref() {
    return this.getNumberAttribute('acceptresref');
  }
  public set acceptresref(value: number) {
    this._acceptresref = value;
  }
  public resetAcceptresref() {
    this._acceptresref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptresrefInput() {
    return this._acceptresref;
  }

  // basedn - computed: false, optional: true, required: false
  private _basedn?: string; 
  public get basedn() {
    return this.getStringAttribute('basedn');
  }
  public set basedn(value: string) {
    this._basedn = value;
  }
  public resetBasedn() {
    this._basedn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basednInput() {
    return this._basedn;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap?: number; 
  public get ldap() {
    return this.getNumberAttribute('ldap');
  }
  public set ldap(value: number) {
    this._ldap = value;
  }
  public resetLdap() {
    this._ldap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap;
  }

  // ldap_binddn - computed: false, optional: true, required: false
  private _ldapBinddn?: string; 
  public get ldapBinddn() {
    return this.getStringAttribute('ldap_binddn');
  }
  public set ldapBinddn(value: string) {
    this._ldapBinddn = value;
  }
  public resetLdapBinddn() {
    this._ldapBinddn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapBinddnInput() {
    return this._ldapBinddn;
  }

  // ldap_password - computed: false, optional: true, required: false
  private _ldapPassword?: number; 
  public get ldapPassword() {
    return this.getNumberAttribute('ldap_password');
  }
  public set ldapPassword(value: number) {
    this._ldapPassword = value;
  }
  public resetLdapPassword() {
    this._ldapPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordInput() {
    return this._ldapPassword;
  }

  // ldap_password_string - computed: false, optional: true, required: false
  private _ldapPasswordString?: string; 
  public get ldapPasswordString() {
    return this.getStringAttribute('ldap_password_string');
  }
  public set ldapPasswordString(value: string) {
    this._ldapPasswordString = value;
  }
  public resetLdapPasswordString() {
    this._ldapPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPasswordStringInput() {
    return this._ldapPasswordString;
  }

  // ldap_port - computed: false, optional: true, required: false
  private _ldapPort?: number; 
  public get ldapPort() {
    return this.getNumberAttribute('ldap_port');
  }
  public set ldapPort(value: number) {
    this._ldapPort = value;
  }
  public resetLdapPort() {
    this._ldapPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapPortInput() {
    return this._ldapPort;
  }

  // ldap_query - computed: false, optional: true, required: false
  private _ldapQuery?: string; 
  public get ldapQuery() {
    return this.getStringAttribute('ldap_query');
  }
  public set ldapQuery(value: string) {
    this._ldapQuery = value;
  }
  public resetLdapQuery() {
    this._ldapQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapQueryInput() {
    return this._ldapQuery;
  }

  // ldap_run_search - computed: false, optional: true, required: false
  private _ldapRunSearch?: number; 
  public get ldapRunSearch() {
    return this.getNumberAttribute('ldap_run_search');
  }
  public set ldapRunSearch(value: number) {
    this._ldapRunSearch = value;
  }
  public resetLdapRunSearch() {
    this._ldapRunSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapRunSearchInput() {
    return this._ldapRunSearch;
  }

  // ldap_security - computed: false, optional: true, required: false
  private _ldapSecurity?: string; 
  public get ldapSecurity() {
    return this.getStringAttribute('ldap_security');
  }
  public set ldapSecurity(value: string) {
    this._ldapSecurity = value;
  }
  public resetLdapSecurity() {
    this._ldapSecurity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapSecurityInput() {
    return this._ldapSecurity;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodNtp {
  /**
  * NTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ntp HealthMonitor#ntp}
  */
  readonly ntp?: number;
  /**
  * Specify the NTP port, default is 123 (Port Number (default 123))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ntp_port HealthMonitor#ntp_port}
  */
  readonly ntpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodNtpToTerraform(struct?: HealthMonitorMethodNtpOutputReference | HealthMonitorMethodNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntp: cdktf.numberToTerraform(struct!.ntp),
    ntp_port: cdktf.numberToTerraform(struct!.ntpPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodNtpToHclTerraform(struct?: HealthMonitorMethodNtpOutputReference | HealthMonitorMethodNtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntp: {
      value: cdktf.numberToHclTerraform(struct!.ntp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ntp_port: {
      value: cdktf.numberToHclTerraform(struct!.ntpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodNtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodNtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntp !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp;
    }
    if (this._ntpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntpPort = this._ntpPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodNtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntp = undefined;
      this._ntpPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntp = value.ntp;
      this._ntpPort = value.ntpPort;
      this._uuid = value.uuid;
    }
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp?: number; 
  public get ntp() {
    return this.getNumberAttribute('ntp');
  }
  public set ntp(value: number) {
    this._ntp = value;
  }
  public resetNtp() {
    this._ntp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp;
  }

  // ntp_port - computed: false, optional: true, required: false
  private _ntpPort?: number; 
  public get ntpPort() {
    return this.getNumberAttribute('ntp_port');
  }
  public set ntpPort(value: number) {
    this._ntpPort = value;
  }
  public resetNtpPort() {
    this._ntpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpPortInput() {
    return this._ntpPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodPop3 {
  /**
  * POP3 type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pop3 HealthMonitor#pop3}
  */
  readonly pop3?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pop3_password HealthMonitor#pop3_password}
  */
  readonly pop3Password?: number;
  /**
  * Specify the user password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pop3_password_string HealthMonitor#pop3_password_string}
  */
  readonly pop3PasswordString?: string;
  /**
  * Specify the POP3 port, default is 110 (Port Number (default 110))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pop3_port HealthMonitor#pop3_port}
  */
  readonly pop3Port?: number;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pop3_username HealthMonitor#pop3_username}
  */
  readonly pop3Username?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodPop3ToTerraform(struct?: HealthMonitorMethodPop3OutputReference | HealthMonitorMethodPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pop3: cdktf.numberToTerraform(struct!.pop3),
    pop3_password: cdktf.numberToTerraform(struct!.pop3Password),
    pop3_password_string: cdktf.stringToTerraform(struct!.pop3PasswordString),
    pop3_port: cdktf.numberToTerraform(struct!.pop3Port),
    pop3_username: cdktf.stringToTerraform(struct!.pop3Username),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodPop3ToHclTerraform(struct?: HealthMonitorMethodPop3OutputReference | HealthMonitorMethodPop3): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pop3: {
      value: cdktf.numberToHclTerraform(struct!.pop3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pop3_password: {
      value: cdktf.numberToHclTerraform(struct!.pop3Password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pop3_password_string: {
      value: cdktf.stringToHclTerraform(struct!.pop3PasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pop3_port: {
      value: cdktf.numberToHclTerraform(struct!.pop3Port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pop3_username: {
      value: cdktf.stringToHclTerraform(struct!.pop3Username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodPop3OutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodPop3 | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._pop3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3 = this._pop3;
    }
    if (this._pop3Password !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3Password = this._pop3Password;
    }
    if (this._pop3PasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3PasswordString = this._pop3PasswordString;
    }
    if (this._pop3Port !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3Port = this._pop3Port;
    }
    if (this._pop3Username !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3Username = this._pop3Username;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodPop3 | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._pop3 = undefined;
      this._pop3Password = undefined;
      this._pop3PasswordString = undefined;
      this._pop3Port = undefined;
      this._pop3Username = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._pop3 = value.pop3;
      this._pop3Password = value.pop3Password;
      this._pop3PasswordString = value.pop3PasswordString;
      this._pop3Port = value.pop3Port;
      this._pop3Username = value.pop3Username;
      this._uuid = value.uuid;
    }
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3?: number; 
  public get pop3() {
    return this.getNumberAttribute('pop3');
  }
  public set pop3(value: number) {
    this._pop3 = value;
  }
  public resetPop3() {
    this._pop3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3;
  }

  // pop3_password - computed: false, optional: true, required: false
  private _pop3Password?: number; 
  public get pop3Password() {
    return this.getNumberAttribute('pop3_password');
  }
  public set pop3Password(value: number) {
    this._pop3Password = value;
  }
  public resetPop3Password() {
    this._pop3Password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3PasswordInput() {
    return this._pop3Password;
  }

  // pop3_password_string - computed: false, optional: true, required: false
  private _pop3PasswordString?: string; 
  public get pop3PasswordString() {
    return this.getStringAttribute('pop3_password_string');
  }
  public set pop3PasswordString(value: string) {
    this._pop3PasswordString = value;
  }
  public resetPop3PasswordString() {
    this._pop3PasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3PasswordStringInput() {
    return this._pop3PasswordString;
  }

  // pop3_port - computed: false, optional: true, required: false
  private _pop3Port?: number; 
  public get pop3Port() {
    return this.getNumberAttribute('pop3_port');
  }
  public set pop3Port(value: number) {
    this._pop3Port = value;
  }
  public resetPop3Port() {
    this._pop3Port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3PortInput() {
    return this._pop3Port;
  }

  // pop3_username - computed: false, optional: true, required: false
  private _pop3Username?: string; 
  public get pop3Username() {
    return this.getStringAttribute('pop3_username');
  }
  public set pop3Username(value: string) {
    this._pop3Username = value;
  }
  public resetPop3Username() {
    this._pop3Username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3UsernameInput() {
    return this._pop3Username;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodQuic {
  /**
  * QUIC type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#quic HealthMonitor#quic}
  */
  readonly quic?: number;
  /**
  * Specify QUIC port (Port Number (default 443))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#quic_port HealthMonitor#quic_port}
  */
  readonly quicPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodQuicToTerraform(struct?: HealthMonitorMethodQuicOutputReference | HealthMonitorMethodQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    quic: cdktf.numberToTerraform(struct!.quic),
    quic_port: cdktf.numberToTerraform(struct!.quicPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodQuicToHclTerraform(struct?: HealthMonitorMethodQuicOutputReference | HealthMonitorMethodQuic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    quic: {
      value: cdktf.numberToHclTerraform(struct!.quic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    quic_port: {
      value: cdktf.numberToHclTerraform(struct!.quicPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodQuicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodQuic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._quic !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic;
    }
    if (this._quicPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.quicPort = this._quicPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodQuic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._quic = undefined;
      this._quicPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._quic = value.quic;
      this._quicPort = value.quicPort;
      this._uuid = value.uuid;
    }
  }

  // quic - computed: false, optional: true, required: false
  private _quic?: number; 
  public get quic() {
    return this.getNumberAttribute('quic');
  }
  public set quic(value: number) {
    this._quic = value;
  }
  public resetQuic() {
    this._quic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic;
  }

  // quic_port - computed: false, optional: true, required: false
  private _quicPort?: number; 
  public get quicPort() {
    return this.getNumberAttribute('quic_port');
  }
  public set quicPort(value: number) {
    this._quicPort = value;
  }
  public resetQuicPort() {
    this._quicPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicPortInput() {
    return this._quicPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodRadius {
  /**
  * RADIUS type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius HealthMonitor#radius}
  */
  readonly radius?: number;
  /**
  * Specify what you expect from the response message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_expect HealthMonitor#radius_expect}
  */
  readonly radiusExpect?: number;
  /**
  * message-authenticator type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_message_authenticator HealthMonitor#radius_message_authenticator}
  */
  readonly radiusMessageAuthenticator?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_password_string HealthMonitor#radius_password_string}
  */
  readonly radiusPasswordString?: string;
  /**
  * Specify the RADIUS port, default is 1812 (Port number (default 1812))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_port HealthMonitor#radius_port}
  */
  readonly radiusPort?: number;
  /**
  * Specify response code range (e.g. 2,4-7) (Format is xx,xx-xx (xx between [1, 13]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_response_code HealthMonitor#radius_response_code}
  */
  readonly radiusResponseCode?: string;
  /**
  * Configure shared secret of RADIUS server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_secret HealthMonitor#radius_secret}
  */
  readonly radiusSecret?: string;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius_username HealthMonitor#radius_username}
  */
  readonly radiusUsername?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodRadiusToTerraform(struct?: HealthMonitorMethodRadiusOutputReference | HealthMonitorMethodRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    radius: cdktf.numberToTerraform(struct!.radius),
    radius_expect: cdktf.numberToTerraform(struct!.radiusExpect),
    radius_message_authenticator: cdktf.numberToTerraform(struct!.radiusMessageAuthenticator),
    radius_password_string: cdktf.stringToTerraform(struct!.radiusPasswordString),
    radius_port: cdktf.numberToTerraform(struct!.radiusPort),
    radius_response_code: cdktf.stringToTerraform(struct!.radiusResponseCode),
    radius_secret: cdktf.stringToTerraform(struct!.radiusSecret),
    radius_username: cdktf.stringToTerraform(struct!.radiusUsername),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodRadiusToHclTerraform(struct?: HealthMonitorMethodRadiusOutputReference | HealthMonitorMethodRadius): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    radius: {
      value: cdktf.numberToHclTerraform(struct!.radius),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_expect: {
      value: cdktf.numberToHclTerraform(struct!.radiusExpect),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_message_authenticator: {
      value: cdktf.numberToHclTerraform(struct!.radiusMessageAuthenticator),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_password_string: {
      value: cdktf.stringToHclTerraform(struct!.radiusPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_port: {
      value: cdktf.numberToHclTerraform(struct!.radiusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    radius_response_code: {
      value: cdktf.stringToHclTerraform(struct!.radiusResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_secret: {
      value: cdktf.stringToHclTerraform(struct!.radiusSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    radius_username: {
      value: cdktf.stringToHclTerraform(struct!.radiusUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodRadiusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodRadius | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._radius !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius;
    }
    if (this._radiusExpect !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusExpect = this._radiusExpect;
    }
    if (this._radiusMessageAuthenticator !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusMessageAuthenticator = this._radiusMessageAuthenticator;
    }
    if (this._radiusPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusPasswordString = this._radiusPasswordString;
    }
    if (this._radiusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusPort = this._radiusPort;
    }
    if (this._radiusResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusResponseCode = this._radiusResponseCode;
    }
    if (this._radiusSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusSecret = this._radiusSecret;
    }
    if (this._radiusUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.radiusUsername = this._radiusUsername;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodRadius | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._radius = undefined;
      this._radiusExpect = undefined;
      this._radiusMessageAuthenticator = undefined;
      this._radiusPasswordString = undefined;
      this._radiusPort = undefined;
      this._radiusResponseCode = undefined;
      this._radiusSecret = undefined;
      this._radiusUsername = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._radius = value.radius;
      this._radiusExpect = value.radiusExpect;
      this._radiusMessageAuthenticator = value.radiusMessageAuthenticator;
      this._radiusPasswordString = value.radiusPasswordString;
      this._radiusPort = value.radiusPort;
      this._radiusResponseCode = value.radiusResponseCode;
      this._radiusSecret = value.radiusSecret;
      this._radiusUsername = value.radiusUsername;
      this._uuid = value.uuid;
    }
  }

  // radius - computed: false, optional: true, required: false
  private _radius?: number; 
  public get radius() {
    return this.getNumberAttribute('radius');
  }
  public set radius(value: number) {
    this._radius = value;
  }
  public resetRadius() {
    this._radius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius;
  }

  // radius_expect - computed: false, optional: true, required: false
  private _radiusExpect?: number; 
  public get radiusExpect() {
    return this.getNumberAttribute('radius_expect');
  }
  public set radiusExpect(value: number) {
    this._radiusExpect = value;
  }
  public resetRadiusExpect() {
    this._radiusExpect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusExpectInput() {
    return this._radiusExpect;
  }

  // radius_message_authenticator - computed: false, optional: true, required: false
  private _radiusMessageAuthenticator?: number; 
  public get radiusMessageAuthenticator() {
    return this.getNumberAttribute('radius_message_authenticator');
  }
  public set radiusMessageAuthenticator(value: number) {
    this._radiusMessageAuthenticator = value;
  }
  public resetRadiusMessageAuthenticator() {
    this._radiusMessageAuthenticator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusMessageAuthenticatorInput() {
    return this._radiusMessageAuthenticator;
  }

  // radius_password_string - computed: false, optional: true, required: false
  private _radiusPasswordString?: string; 
  public get radiusPasswordString() {
    return this.getStringAttribute('radius_password_string');
  }
  public set radiusPasswordString(value: string) {
    this._radiusPasswordString = value;
  }
  public resetRadiusPasswordString() {
    this._radiusPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPasswordStringInput() {
    return this._radiusPasswordString;
  }

  // radius_port - computed: false, optional: true, required: false
  private _radiusPort?: number; 
  public get radiusPort() {
    return this.getNumberAttribute('radius_port');
  }
  public set radiusPort(value: number) {
    this._radiusPort = value;
  }
  public resetRadiusPort() {
    this._radiusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusPortInput() {
    return this._radiusPort;
  }

  // radius_response_code - computed: false, optional: true, required: false
  private _radiusResponseCode?: string; 
  public get radiusResponseCode() {
    return this.getStringAttribute('radius_response_code');
  }
  public set radiusResponseCode(value: string) {
    this._radiusResponseCode = value;
  }
  public resetRadiusResponseCode() {
    this._radiusResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusResponseCodeInput() {
    return this._radiusResponseCode;
  }

  // radius_secret - computed: false, optional: true, required: false
  private _radiusSecret?: string; 
  public get radiusSecret() {
    return this.getStringAttribute('radius_secret');
  }
  public set radiusSecret(value: string) {
    this._radiusSecret = value;
  }
  public resetRadiusSecret() {
    this._radiusSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusSecretInput() {
    return this._radiusSecret;
  }

  // radius_username - computed: false, optional: true, required: false
  private _radiusUsername?: string; 
  public get radiusUsername() {
    return this.getStringAttribute('radius_username');
  }
  public set radiusUsername(value: string) {
    this._radiusUsername = value;
  }
  public resetRadiusUsername() {
    this._radiusUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusUsernameInput() {
    return this._radiusUsername;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodRtsp {
  /**
  * RTSP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#rtsp HealthMonitor#rtsp}
  */
  readonly rtsp?: number;
  /**
  * Specify RTSP port, default is 554 (Port Number (default 554))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#rtsp_port HealthMonitor#rtsp_port}
  */
  readonly rtspPort?: number;
  /**
  * Specify URL string (Specify the path on the server)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#rtspurl HealthMonitor#rtspurl}
  */
  readonly rtspurl?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodRtspToTerraform(struct?: HealthMonitorMethodRtspOutputReference | HealthMonitorMethodRtsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    rtsp: cdktf.numberToTerraform(struct!.rtsp),
    rtsp_port: cdktf.numberToTerraform(struct!.rtspPort),
    rtspurl: cdktf.stringToTerraform(struct!.rtspurl),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodRtspToHclTerraform(struct?: HealthMonitorMethodRtspOutputReference | HealthMonitorMethodRtsp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    rtsp: {
      value: cdktf.numberToHclTerraform(struct!.rtsp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtsp_port: {
      value: cdktf.numberToHclTerraform(struct!.rtspPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rtspurl: {
      value: cdktf.stringToHclTerraform(struct!.rtspurl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodRtspOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodRtsp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._rtsp !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtsp = this._rtsp;
    }
    if (this._rtspPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtspPort = this._rtspPort;
    }
    if (this._rtspurl !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtspurl = this._rtspurl;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodRtsp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._rtsp = undefined;
      this._rtspPort = undefined;
      this._rtspurl = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._rtsp = value.rtsp;
      this._rtspPort = value.rtspPort;
      this._rtspurl = value.rtspurl;
      this._uuid = value.uuid;
    }
  }

  // rtsp - computed: false, optional: true, required: false
  private _rtsp?: number; 
  public get rtsp() {
    return this.getNumberAttribute('rtsp');
  }
  public set rtsp(value: number) {
    this._rtsp = value;
  }
  public resetRtsp() {
    this._rtsp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspInput() {
    return this._rtsp;
  }

  // rtsp_port - computed: false, optional: true, required: false
  private _rtspPort?: number; 
  public get rtspPort() {
    return this.getNumberAttribute('rtsp_port');
  }
  public set rtspPort(value: number) {
    this._rtspPort = value;
  }
  public resetRtspPort() {
    this._rtspPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspPortInput() {
    return this._rtspPort;
  }

  // rtspurl - computed: false, optional: true, required: false
  private _rtspurl?: string; 
  public get rtspurl() {
    return this.getStringAttribute('rtspurl');
  }
  public set rtspurl(value: string) {
    this._rtspurl = value;
  }
  public resetRtspurl() {
    this._rtspurl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspurlInput() {
    return this._rtspurl;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodSip {
  /**
  * Specify accepted response codes (e.g. 200, 400-430, any) (Format is xxx,xxx-xxx,any (xxx between [100,899]))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#expect_response_code HealthMonitor#expect_response_code}
  */
  readonly expectResponseCode?: string;
  /**
  * Send SIP REGISTER message, default is to send OPTION message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#register HealthMonitor#register}
  */
  readonly register?: number;
  /**
  * SIP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sip HealthMonitor#sip}
  */
  readonly sip?: number;
  /**
  * Specify the SIP hostname that used in request
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sip_hostname HealthMonitor#sip_hostname}
  */
  readonly sipHostname?: string;
  /**
  * Specify the SIP port, default is 5060 (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sip_port HealthMonitor#sip_port}
  */
  readonly sipPort?: number;
  /**
  * Use TCP for transmission, default is UDP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sip_tcp HealthMonitor#sip_tcp}
  */
  readonly sipTcp?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodSipToTerraform(struct?: HealthMonitorMethodSipOutputReference | HealthMonitorMethodSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expect_response_code: cdktf.stringToTerraform(struct!.expectResponseCode),
    register: cdktf.numberToTerraform(struct!.register),
    sip: cdktf.numberToTerraform(struct!.sip),
    sip_hostname: cdktf.stringToTerraform(struct!.sipHostname),
    sip_port: cdktf.numberToTerraform(struct!.sipPort),
    sip_tcp: cdktf.numberToTerraform(struct!.sipTcp),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodSipToHclTerraform(struct?: HealthMonitorMethodSipOutputReference | HealthMonitorMethodSip): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expect_response_code: {
      value: cdktf.stringToHclTerraform(struct!.expectResponseCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register: {
      value: cdktf.numberToHclTerraform(struct!.register),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip: {
      value: cdktf.numberToHclTerraform(struct!.sip),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_hostname: {
      value: cdktf.stringToHclTerraform(struct!.sipHostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sip_port: {
      value: cdktf.numberToHclTerraform(struct!.sipPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sip_tcp: {
      value: cdktf.numberToHclTerraform(struct!.sipTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSipOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSip | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectResponseCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectResponseCode = this._expectResponseCode;
    }
    if (this._register !== undefined) {
      hasAnyValues = true;
      internalValueResult.register = this._register;
    }
    if (this._sip !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip;
    }
    if (this._sipHostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipHostname = this._sipHostname;
    }
    if (this._sipPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipPort = this._sipPort;
    }
    if (this._sipTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.sipTcp = this._sipTcp;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSip | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectResponseCode = undefined;
      this._register = undefined;
      this._sip = undefined;
      this._sipHostname = undefined;
      this._sipPort = undefined;
      this._sipTcp = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectResponseCode = value.expectResponseCode;
      this._register = value.register;
      this._sip = value.sip;
      this._sipHostname = value.sipHostname;
      this._sipPort = value.sipPort;
      this._sipTcp = value.sipTcp;
      this._uuid = value.uuid;
    }
  }

  // expect_response_code - computed: false, optional: true, required: false
  private _expectResponseCode?: string; 
  public get expectResponseCode() {
    return this.getStringAttribute('expect_response_code');
  }
  public set expectResponseCode(value: string) {
    this._expectResponseCode = value;
  }
  public resetExpectResponseCode() {
    this._expectResponseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectResponseCodeInput() {
    return this._expectResponseCode;
  }

  // register - computed: false, optional: true, required: false
  private _register?: number; 
  public get register() {
    return this.getNumberAttribute('register');
  }
  public set register(value: number) {
    this._register = value;
  }
  public resetRegister() {
    this._register = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerInput() {
    return this._register;
  }

  // sip - computed: false, optional: true, required: false
  private _sip?: number; 
  public get sip() {
    return this.getNumberAttribute('sip');
  }
  public set sip(value: number) {
    this._sip = value;
  }
  public resetSip() {
    this._sip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip;
  }

  // sip_hostname - computed: false, optional: true, required: false
  private _sipHostname?: string; 
  public get sipHostname() {
    return this.getStringAttribute('sip_hostname');
  }
  public set sipHostname(value: string) {
    this._sipHostname = value;
  }
  public resetSipHostname() {
    this._sipHostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipHostnameInput() {
    return this._sipHostname;
  }

  // sip_port - computed: false, optional: true, required: false
  private _sipPort?: number; 
  public get sipPort() {
    return this.getNumberAttribute('sip_port');
  }
  public set sipPort(value: number) {
    this._sipPort = value;
  }
  public resetSipPort() {
    this._sipPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipPortInput() {
    return this._sipPort;
  }

  // sip_tcp - computed: false, optional: true, required: false
  private _sipTcp?: number; 
  public get sipTcp() {
    return this.getNumberAttribute('sip_tcp');
  }
  public set sipTcp(value: number) {
    this._sipTcp = value;
  }
  public resetSipTcp() {
    this._sipTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipTcpInput() {
    return this._sipTcp;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodSmtp {
  /**
  * Specify SMTP Sender
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#mail_from HealthMonitor#mail_from}
  */
  readonly mailFrom?: string;
  /**
  * Specify SMTP Receiver
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#rcpt_to HealthMonitor#rcpt_to}
  */
  readonly rcptTo?: string;
  /**
  * SMTP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#smtp HealthMonitor#smtp}
  */
  readonly smtp?: number;
  /**
  * Specify domain name of 'helo' command
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#smtp_domain HealthMonitor#smtp_domain}
  */
  readonly smtpDomain?: string;
  /**
  * Specify SMTP port, default is 25 (Port Number (default 25))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#smtp_port HealthMonitor#smtp_port}
  */
  readonly smtpPort?: number;
  /**
  * Check the STARTTLS support at helo response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#smtp_starttls HealthMonitor#smtp_starttls}
  */
  readonly smtpStarttls?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodSmtpToTerraform(struct?: HealthMonitorMethodSmtpOutputReference | HealthMonitorMethodSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mail_from: cdktf.stringToTerraform(struct!.mailFrom),
    rcpt_to: cdktf.stringToTerraform(struct!.rcptTo),
    smtp: cdktf.numberToTerraform(struct!.smtp),
    smtp_domain: cdktf.stringToTerraform(struct!.smtpDomain),
    smtp_port: cdktf.numberToTerraform(struct!.smtpPort),
    smtp_starttls: cdktf.numberToTerraform(struct!.smtpStarttls),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodSmtpToHclTerraform(struct?: HealthMonitorMethodSmtpOutputReference | HealthMonitorMethodSmtp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mail_from: {
      value: cdktf.stringToHclTerraform(struct!.mailFrom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rcpt_to: {
      value: cdktf.stringToHclTerraform(struct!.rcptTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp: {
      value: cdktf.numberToHclTerraform(struct!.smtp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smtp_domain: {
      value: cdktf.stringToHclTerraform(struct!.smtpDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    smtp_port: {
      value: cdktf.numberToHclTerraform(struct!.smtpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    smtp_starttls: {
      value: cdktf.numberToHclTerraform(struct!.smtpStarttls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSmtpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSmtp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mailFrom !== undefined) {
      hasAnyValues = true;
      internalValueResult.mailFrom = this._mailFrom;
    }
    if (this._rcptTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.rcptTo = this._rcptTo;
    }
    if (this._smtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtp = this._smtp;
    }
    if (this._smtpDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpDomain = this._smtpDomain;
    }
    if (this._smtpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpPort = this._smtpPort;
    }
    if (this._smtpStarttls !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtpStarttls = this._smtpStarttls;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSmtp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mailFrom = undefined;
      this._rcptTo = undefined;
      this._smtp = undefined;
      this._smtpDomain = undefined;
      this._smtpPort = undefined;
      this._smtpStarttls = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mailFrom = value.mailFrom;
      this._rcptTo = value.rcptTo;
      this._smtp = value.smtp;
      this._smtpDomain = value.smtpDomain;
      this._smtpPort = value.smtpPort;
      this._smtpStarttls = value.smtpStarttls;
      this._uuid = value.uuid;
    }
  }

  // mail_from - computed: false, optional: true, required: false
  private _mailFrom?: string; 
  public get mailFrom() {
    return this.getStringAttribute('mail_from');
  }
  public set mailFrom(value: string) {
    this._mailFrom = value;
  }
  public resetMailFrom() {
    this._mailFrom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mailFromInput() {
    return this._mailFrom;
  }

  // rcpt_to - computed: false, optional: true, required: false
  private _rcptTo?: string; 
  public get rcptTo() {
    return this.getStringAttribute('rcpt_to');
  }
  public set rcptTo(value: string) {
    this._rcptTo = value;
  }
  public resetRcptTo() {
    this._rcptTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rcptToInput() {
    return this._rcptTo;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp?: number; 
  public get smtp() {
    return this.getNumberAttribute('smtp');
  }
  public set smtp(value: number) {
    this._smtp = value;
  }
  public resetSmtp() {
    this._smtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp;
  }

  // smtp_domain - computed: false, optional: true, required: false
  private _smtpDomain?: string; 
  public get smtpDomain() {
    return this.getStringAttribute('smtp_domain');
  }
  public set smtpDomain(value: string) {
    this._smtpDomain = value;
  }
  public resetSmtpDomain() {
    this._smtpDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpDomainInput() {
    return this._smtpDomain;
  }

  // smtp_port - computed: false, optional: true, required: false
  private _smtpPort?: number; 
  public get smtpPort() {
    return this.getNumberAttribute('smtp_port');
  }
  public set smtpPort(value: number) {
    this._smtpPort = value;
  }
  public resetSmtpPort() {
    this._smtpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpPortInput() {
    return this._smtpPort;
  }

  // smtp_starttls - computed: false, optional: true, required: false
  private _smtpStarttls?: number; 
  public get smtpStarttls() {
    return this.getNumberAttribute('smtp_starttls');
  }
  public set smtpStarttls(value: number) {
    this._smtpStarttls = value;
  }
  public resetSmtpStarttls() {
    this._smtpStarttls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpStarttlsInput() {
    return this._smtpStarttls;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodSnmpOid {
  /**
  * Specify the format in ASN.1 style
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#asn HealthMonitor#asn}
  */
  readonly asn?: string;
  /**
  * 'sysDescr': The MIB-2 OID of system description, 1.1.0; 'sysUpTime': The MIB-2 OID of system up time, 1.3.0; 'sysName': The MIB-2 OID of system nume, 1.5.0;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#mib HealthMonitor#mib}
  */
  readonly mib?: string;
}

export function healthMonitorMethodSnmpOidToTerraform(struct?: HealthMonitorMethodSnmpOidOutputReference | HealthMonitorMethodSnmpOid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asn: cdktf.stringToTerraform(struct!.asn),
    mib: cdktf.stringToTerraform(struct!.mib),
  }
}


export function healthMonitorMethodSnmpOidToHclTerraform(struct?: HealthMonitorMethodSnmpOidOutputReference | HealthMonitorMethodSnmpOid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asn: {
      value: cdktf.stringToHclTerraform(struct!.asn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mib: {
      value: cdktf.stringToHclTerraform(struct!.mib),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSnmpOidOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSnmpOid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asn !== undefined) {
      hasAnyValues = true;
      internalValueResult.asn = this._asn;
    }
    if (this._mib !== undefined) {
      hasAnyValues = true;
      internalValueResult.mib = this._mib;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSnmpOid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asn = undefined;
      this._mib = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asn = value.asn;
      this._mib = value.mib;
    }
  }

  // asn - computed: false, optional: true, required: false
  private _asn?: string; 
  public get asn() {
    return this.getStringAttribute('asn');
  }
  public set asn(value: string) {
    this._asn = value;
  }
  public resetAsn() {
    this._asn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnInput() {
    return this._asn;
  }

  // mib - computed: false, optional: true, required: false
  private _mib?: string; 
  public get mib() {
    return this.getStringAttribute('mib');
  }
  public set mib(value: string) {
    this._mib = value;
  }
  public resetMib() {
    this._mib = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mibInput() {
    return this._mib;
  }
}
export interface HealthMonitorMethodSnmpOperation {
  /**
  * 'getnext': Get-Next-Request command; 'get': Get-Request command;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#oper_type HealthMonitor#oper_type}
  */
  readonly operType?: string;
}

export function healthMonitorMethodSnmpOperationToTerraform(struct?: HealthMonitorMethodSnmpOperationOutputReference | HealthMonitorMethodSnmpOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper_type: cdktf.stringToTerraform(struct!.operType),
  }
}


export function healthMonitorMethodSnmpOperationToHclTerraform(struct?: HealthMonitorMethodSnmpOperationOutputReference | HealthMonitorMethodSnmpOperation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper_type: {
      value: cdktf.stringToHclTerraform(struct!.operType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSnmpOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSnmpOperation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operType !== undefined) {
      hasAnyValues = true;
      internalValueResult.operType = this._operType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSnmpOperation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._operType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._operType = value.operType;
    }
  }

  // oper_type - computed: false, optional: true, required: false
  private _operType?: string; 
  public get operType() {
    return this.getStringAttribute('oper_type');
  }
  public set operType(value: string) {
    this._operType = value;
  }
  public resetOperType() {
    this._operType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operTypeInput() {
    return this._operType;
  }
}
export interface HealthMonitorMethodSnmp {
  /**
  * Specify SNMP community, default is "public" (Community String)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#community HealthMonitor#community}
  */
  readonly community?: string;
  /**
  * SNMP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#snmp HealthMonitor#snmp}
  */
  readonly snmp?: number;
  /**
  * Specify SNMP port, default is 161 (Port Number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#snmp_port HealthMonitor#snmp_port}
  */
  readonly snmpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * oid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#oid HealthMonitor#oid}
  */
  readonly oid?: HealthMonitorMethodSnmpOid;
  /**
  * operation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#operation HealthMonitor#operation}
  */
  readonly operation?: HealthMonitorMethodSnmpOperation;
}

export function healthMonitorMethodSnmpToTerraform(struct?: HealthMonitorMethodSnmpOutputReference | HealthMonitorMethodSnmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    community: cdktf.stringToTerraform(struct!.community),
    snmp: cdktf.numberToTerraform(struct!.snmp),
    snmp_port: cdktf.numberToTerraform(struct!.snmpPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    oid: healthMonitorMethodSnmpOidToTerraform(struct!.oid),
    operation: healthMonitorMethodSnmpOperationToTerraform(struct!.operation),
  }
}


export function healthMonitorMethodSnmpToHclTerraform(struct?: HealthMonitorMethodSnmpOutputReference | HealthMonitorMethodSnmp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    community: {
      value: cdktf.stringToHclTerraform(struct!.community),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    snmp: {
      value: cdktf.numberToHclTerraform(struct!.snmp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    snmp_port: {
      value: cdktf.numberToHclTerraform(struct!.snmpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oid: {
      value: healthMonitorMethodSnmpOidToHclTerraform(struct!.oid),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodSnmpOidList",
    },
    operation: {
      value: healthMonitorMethodSnmpOperationToHclTerraform(struct!.operation),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodSnmpOperationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodSnmpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodSnmp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._community !== undefined) {
      hasAnyValues = true;
      internalValueResult.community = this._community;
    }
    if (this._snmp !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp = this._snmp;
    }
    if (this._snmpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmpPort = this._snmpPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._oid?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oid = this._oid?.internalValue;
    }
    if (this._operation?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodSnmp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._community = undefined;
      this._snmp = undefined;
      this._snmpPort = undefined;
      this._uuid = undefined;
      this._oid.internalValue = undefined;
      this._operation.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._community = value.community;
      this._snmp = value.snmp;
      this._snmpPort = value.snmpPort;
      this._uuid = value.uuid;
      this._oid.internalValue = value.oid;
      this._operation.internalValue = value.operation;
    }
  }

  // community - computed: false, optional: true, required: false
  private _community?: string; 
  public get community() {
    return this.getStringAttribute('community');
  }
  public set community(value: string) {
    this._community = value;
  }
  public resetCommunity() {
    this._community = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get communityInput() {
    return this._community;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp?: number; 
  public get snmp() {
    return this.getNumberAttribute('snmp');
  }
  public set snmp(value: number) {
    this._snmp = value;
  }
  public resetSnmp() {
    this._snmp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp;
  }

  // snmp_port - computed: false, optional: true, required: false
  private _snmpPort?: number; 
  public get snmpPort() {
    return this.getNumberAttribute('snmp_port');
  }
  public set snmpPort(value: number) {
    this._snmpPort = value;
  }
  public resetSnmpPort() {
    this._snmpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpPortInput() {
    return this._snmpPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // oid - computed: false, optional: true, required: false
  private _oid = new HealthMonitorMethodSnmpOidOutputReference(this, "oid");
  public get oid() {
    return this._oid;
  }
  public putOid(value: HealthMonitorMethodSnmpOid) {
    this._oid.internalValue = value;
  }
  public resetOid() {
    this._oid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidInput() {
    return this._oid.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new HealthMonitorMethodSnmpOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: HealthMonitorMethodSnmpOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }
}
export interface HealthMonitorMethodTacplus {
  /**
  * TACACS+ type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus HealthMonitor#tacplus}
  */
  readonly tacplus?: number;
  /**
  * Specify the user password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_password HealthMonitor#tacplus_password}
  */
  readonly tacplusPassword?: number;
  /**
  * Configure password, '' means empty password
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_password_string HealthMonitor#tacplus_password_string}
  */
  readonly tacplusPasswordString?: string;
  /**
  * Specify the TACACS+ port, default 49 (Port number (default 49))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_port HealthMonitor#tacplus_port}
  */
  readonly tacplusPort?: number;
  /**
  * Specify the shared secret of TACACS+ server
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_secret HealthMonitor#tacplus_secret}
  */
  readonly tacplusSecret?: number;
  /**
  * Shared Crypto Key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_secret_string HealthMonitor#tacplus_secret_string}
  */
  readonly tacplusSecretString?: string;
  /**
  * 'inbound-ascii-login': Specify Inbound ASCII Login type;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_type HealthMonitor#tacplus_type}
  */
  readonly tacplusType?: string;
  /**
  * Specify the username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus_username HealthMonitor#tacplus_username}
  */
  readonly tacplusUsername?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodTacplusToTerraform(struct?: HealthMonitorMethodTacplusOutputReference | HealthMonitorMethodTacplus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tacplus: cdktf.numberToTerraform(struct!.tacplus),
    tacplus_password: cdktf.numberToTerraform(struct!.tacplusPassword),
    tacplus_password_string: cdktf.stringToTerraform(struct!.tacplusPasswordString),
    tacplus_port: cdktf.numberToTerraform(struct!.tacplusPort),
    tacplus_secret: cdktf.numberToTerraform(struct!.tacplusSecret),
    tacplus_secret_string: cdktf.stringToTerraform(struct!.tacplusSecretString),
    tacplus_type: cdktf.stringToTerraform(struct!.tacplusType),
    tacplus_username: cdktf.stringToTerraform(struct!.tacplusUsername),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodTacplusToHclTerraform(struct?: HealthMonitorMethodTacplusOutputReference | HealthMonitorMethodTacplus): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tacplus: {
      value: cdktf.numberToHclTerraform(struct!.tacplus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tacplus_password: {
      value: cdktf.numberToHclTerraform(struct!.tacplusPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tacplus_password_string: {
      value: cdktf.stringToHclTerraform(struct!.tacplusPasswordString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacplus_port: {
      value: cdktf.numberToHclTerraform(struct!.tacplusPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tacplus_secret: {
      value: cdktf.numberToHclTerraform(struct!.tacplusSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tacplus_secret_string: {
      value: cdktf.stringToHclTerraform(struct!.tacplusSecretString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacplus_type: {
      value: cdktf.stringToHclTerraform(struct!.tacplusType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tacplus_username: {
      value: cdktf.stringToHclTerraform(struct!.tacplusUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodTacplusOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodTacplus | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tacplus !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus;
    }
    if (this._tacplusPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusPassword = this._tacplusPassword;
    }
    if (this._tacplusPasswordString !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusPasswordString = this._tacplusPasswordString;
    }
    if (this._tacplusPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusPort = this._tacplusPort;
    }
    if (this._tacplusSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusSecret = this._tacplusSecret;
    }
    if (this._tacplusSecretString !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusSecretString = this._tacplusSecretString;
    }
    if (this._tacplusType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusType = this._tacplusType;
    }
    if (this._tacplusUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplusUsername = this._tacplusUsername;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodTacplus | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._tacplus = undefined;
      this._tacplusPassword = undefined;
      this._tacplusPasswordString = undefined;
      this._tacplusPort = undefined;
      this._tacplusSecret = undefined;
      this._tacplusSecretString = undefined;
      this._tacplusType = undefined;
      this._tacplusUsername = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._tacplus = value.tacplus;
      this._tacplusPassword = value.tacplusPassword;
      this._tacplusPasswordString = value.tacplusPasswordString;
      this._tacplusPort = value.tacplusPort;
      this._tacplusSecret = value.tacplusSecret;
      this._tacplusSecretString = value.tacplusSecretString;
      this._tacplusType = value.tacplusType;
      this._tacplusUsername = value.tacplusUsername;
      this._uuid = value.uuid;
    }
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus?: number; 
  public get tacplus() {
    return this.getNumberAttribute('tacplus');
  }
  public set tacplus(value: number) {
    this._tacplus = value;
  }
  public resetTacplus() {
    this._tacplus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus;
  }

  // tacplus_password - computed: false, optional: true, required: false
  private _tacplusPassword?: number; 
  public get tacplusPassword() {
    return this.getNumberAttribute('tacplus_password');
  }
  public set tacplusPassword(value: number) {
    this._tacplusPassword = value;
  }
  public resetTacplusPassword() {
    this._tacplusPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusPasswordInput() {
    return this._tacplusPassword;
  }

  // tacplus_password_string - computed: false, optional: true, required: false
  private _tacplusPasswordString?: string; 
  public get tacplusPasswordString() {
    return this.getStringAttribute('tacplus_password_string');
  }
  public set tacplusPasswordString(value: string) {
    this._tacplusPasswordString = value;
  }
  public resetTacplusPasswordString() {
    this._tacplusPasswordString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusPasswordStringInput() {
    return this._tacplusPasswordString;
  }

  // tacplus_port - computed: false, optional: true, required: false
  private _tacplusPort?: number; 
  public get tacplusPort() {
    return this.getNumberAttribute('tacplus_port');
  }
  public set tacplusPort(value: number) {
    this._tacplusPort = value;
  }
  public resetTacplusPort() {
    this._tacplusPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusPortInput() {
    return this._tacplusPort;
  }

  // tacplus_secret - computed: false, optional: true, required: false
  private _tacplusSecret?: number; 
  public get tacplusSecret() {
    return this.getNumberAttribute('tacplus_secret');
  }
  public set tacplusSecret(value: number) {
    this._tacplusSecret = value;
  }
  public resetTacplusSecret() {
    this._tacplusSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusSecretInput() {
    return this._tacplusSecret;
  }

  // tacplus_secret_string - computed: false, optional: true, required: false
  private _tacplusSecretString?: string; 
  public get tacplusSecretString() {
    return this.getStringAttribute('tacplus_secret_string');
  }
  public set tacplusSecretString(value: string) {
    this._tacplusSecretString = value;
  }
  public resetTacplusSecretString() {
    this._tacplusSecretString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusSecretStringInput() {
    return this._tacplusSecretString;
  }

  // tacplus_type - computed: false, optional: true, required: false
  private _tacplusType?: string; 
  public get tacplusType() {
    return this.getStringAttribute('tacplus_type');
  }
  public set tacplusType(value: string) {
    this._tacplusType = value;
  }
  public resetTacplusType() {
    this._tacplusType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusTypeInput() {
    return this._tacplusType;
  }

  // tacplus_username - computed: false, optional: true, required: false
  private _tacplusUsername?: string; 
  public get tacplusUsername() {
    return this.getStringAttribute('tacplus_username');
  }
  public set tacplusUsername(value: string) {
    this._tacplusUsername = value;
  }
  public resetTacplusUsername() {
    this._tacplusUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusUsernameInput() {
    return this._tacplusUsername;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethodTcpPortResp {
  /**
  * Mark server up if response string contains string (Specify the string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#port_contains HealthMonitor#port_contains}
  */
  readonly portContains?: string;
}

export function healthMonitorMethodTcpPortRespToTerraform(struct?: HealthMonitorMethodTcpPortRespOutputReference | HealthMonitorMethodTcpPortResp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_contains: cdktf.stringToTerraform(struct!.portContains),
  }
}


export function healthMonitorMethodTcpPortRespToHclTerraform(struct?: HealthMonitorMethodTcpPortRespOutputReference | HealthMonitorMethodTcpPortResp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_contains: {
      value: cdktf.stringToHclTerraform(struct!.portContains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodTcpPortRespOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodTcpPortResp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portContains !== undefined) {
      hasAnyValues = true;
      internalValueResult.portContains = this._portContains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodTcpPortResp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._portContains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._portContains = value.portContains;
    }
  }

  // port_contains - computed: false, optional: true, required: false
  private _portContains?: string; 
  public get portContains() {
    return this.getStringAttribute('port_contains');
  }
  public set portContains(value: string) {
    this._portContains = value;
  }
  public resetPortContains() {
    this._portContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portContainsInput() {
    return this._portContains;
  }
}
export interface HealthMonitorMethodTcp {
  /**
  * Specify response text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance HealthMonitor#maintenance}
  */
  readonly maintenance?: number;
  /**
  * Specify text for maintenance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#maintenance_text HealthMonitor#maintenance_text}
  */
  readonly maintenanceText?: string;
  /**
  * TCP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#method_tcp HealthMonitor#method_tcp}
  */
  readonly methodTcp?: number;
  /**
  * Set TCP SYN check
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#port_halfopen HealthMonitor#port_halfopen}
  */
  readonly portHalfopen?: number;
  /**
  * Send a string to server (Specify the string)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#port_send HealthMonitor#port_send}
  */
  readonly portSend?: string;
  /**
  * Specify TCP port (Specify port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tcp_port HealthMonitor#tcp_port}
  */
  readonly tcpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
  /**
  * port_resp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#port_resp HealthMonitor#port_resp}
  */
  readonly portResp?: HealthMonitorMethodTcpPortResp;
}

export function healthMonitorMethodTcpToTerraform(struct?: HealthMonitorMethodTcpOutputReference | HealthMonitorMethodTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    maintenance: cdktf.numberToTerraform(struct!.maintenance),
    maintenance_text: cdktf.stringToTerraform(struct!.maintenanceText),
    method_tcp: cdktf.numberToTerraform(struct!.methodTcp),
    port_halfopen: cdktf.numberToTerraform(struct!.portHalfopen),
    port_send: cdktf.stringToTerraform(struct!.portSend),
    tcp_port: cdktf.numberToTerraform(struct!.tcpPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    port_resp: healthMonitorMethodTcpPortRespToTerraform(struct!.portResp),
  }
}


export function healthMonitorMethodTcpToHclTerraform(struct?: HealthMonitorMethodTcpOutputReference | HealthMonitorMethodTcp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    maintenance: {
      value: cdktf.numberToHclTerraform(struct!.maintenance),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    maintenance_text: {
      value: cdktf.stringToHclTerraform(struct!.maintenanceText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    method_tcp: {
      value: cdktf.numberToHclTerraform(struct!.methodTcp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_halfopen: {
      value: cdktf.numberToHclTerraform(struct!.portHalfopen),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_send: {
      value: cdktf.stringToHclTerraform(struct!.portSend),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_port: {
      value: cdktf.numberToHclTerraform(struct!.tcpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_resp: {
      value: healthMonitorMethodTcpPortRespToHclTerraform(struct!.portResp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodTcpPortRespList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodTcpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodTcp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maintenance !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenance = this._maintenance;
    }
    if (this._maintenanceText !== undefined) {
      hasAnyValues = true;
      internalValueResult.maintenanceText = this._maintenanceText;
    }
    if (this._methodTcp !== undefined) {
      hasAnyValues = true;
      internalValueResult.methodTcp = this._methodTcp;
    }
    if (this._portHalfopen !== undefined) {
      hasAnyValues = true;
      internalValueResult.portHalfopen = this._portHalfopen;
    }
    if (this._portSend !== undefined) {
      hasAnyValues = true;
      internalValueResult.portSend = this._portSend;
    }
    if (this._tcpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpPort = this._tcpPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._portResp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portResp = this._portResp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodTcp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maintenance = undefined;
      this._maintenanceText = undefined;
      this._methodTcp = undefined;
      this._portHalfopen = undefined;
      this._portSend = undefined;
      this._tcpPort = undefined;
      this._uuid = undefined;
      this._portResp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maintenance = value.maintenance;
      this._maintenanceText = value.maintenanceText;
      this._methodTcp = value.methodTcp;
      this._portHalfopen = value.portHalfopen;
      this._portSend = value.portSend;
      this._tcpPort = value.tcpPort;
      this._uuid = value.uuid;
      this._portResp.internalValue = value.portResp;
    }
  }

  // maintenance - computed: false, optional: true, required: false
  private _maintenance?: number; 
  public get maintenance() {
    return this.getNumberAttribute('maintenance');
  }
  public set maintenance(value: number) {
    this._maintenance = value;
  }
  public resetMaintenance() {
    this._maintenance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceInput() {
    return this._maintenance;
  }

  // maintenance_text - computed: false, optional: true, required: false
  private _maintenanceText?: string; 
  public get maintenanceText() {
    return this.getStringAttribute('maintenance_text');
  }
  public set maintenanceText(value: string) {
    this._maintenanceText = value;
  }
  public resetMaintenanceText() {
    this._maintenanceText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceTextInput() {
    return this._maintenanceText;
  }

  // method_tcp - computed: false, optional: true, required: false
  private _methodTcp?: number; 
  public get methodTcp() {
    return this.getNumberAttribute('method_tcp');
  }
  public set methodTcp(value: number) {
    this._methodTcp = value;
  }
  public resetMethodTcp() {
    this._methodTcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodTcpInput() {
    return this._methodTcp;
  }

  // port_halfopen - computed: false, optional: true, required: false
  private _portHalfopen?: number; 
  public get portHalfopen() {
    return this.getNumberAttribute('port_halfopen');
  }
  public set portHalfopen(value: number) {
    this._portHalfopen = value;
  }
  public resetPortHalfopen() {
    this._portHalfopen = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portHalfopenInput() {
    return this._portHalfopen;
  }

  // port_send - computed: false, optional: true, required: false
  private _portSend?: string; 
  public get portSend() {
    return this.getStringAttribute('port_send');
  }
  public set portSend(value: string) {
    this._portSend = value;
  }
  public resetPortSend() {
    this._portSend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portSendInput() {
    return this._portSend;
  }

  // tcp_port - computed: false, optional: true, required: false
  private _tcpPort?: number; 
  public get tcpPort() {
    return this.getNumberAttribute('tcp_port');
  }
  public set tcpPort(value: number) {
    this._tcpPort = value;
  }
  public resetTcpPort() {
    this._tcpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpPortInput() {
    return this._tcpPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // port_resp - computed: false, optional: true, required: false
  private _portResp = new HealthMonitorMethodTcpPortRespOutputReference(this, "port_resp");
  public get portResp() {
    return this._portResp;
  }
  public putPortResp(value: HealthMonitorMethodTcpPortResp) {
    this._portResp.internalValue = value;
  }
  public resetPortResp() {
    this._portResp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portRespInput() {
    return this._portResp.internalValue;
  }
}
export interface HealthMonitorMethodUdp {
  /**
  * Force Up with no response at the first time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#force_up_with_single_healthcheck HealthMonitor#force_up_with_single_healthcheck}
  */
  readonly forceUpWithSingleHealthcheck?: number;
  /**
  * UDP type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#udp HealthMonitor#udp}
  */
  readonly udp?: number;
  /**
  * Specify UDP port (Specify port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#udp_port HealthMonitor#udp_port}
  */
  readonly udpPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorMethodUdpToTerraform(struct?: HealthMonitorMethodUdpOutputReference | HealthMonitorMethodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_up_with_single_healthcheck: cdktf.numberToTerraform(struct!.forceUpWithSingleHealthcheck),
    udp: cdktf.numberToTerraform(struct!.udp),
    udp_port: cdktf.numberToTerraform(struct!.udpPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorMethodUdpToHclTerraform(struct?: HealthMonitorMethodUdpOutputReference | HealthMonitorMethodUdp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_up_with_single_healthcheck: {
      value: cdktf.numberToHclTerraform(struct!.forceUpWithSingleHealthcheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp: {
      value: cdktf.numberToHclTerraform(struct!.udp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    udp_port: {
      value: cdktf.numberToHclTerraform(struct!.udpPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodUdpOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethodUdp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceUpWithSingleHealthcheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceUpWithSingleHealthcheck = this._forceUpWithSingleHealthcheck;
    }
    if (this._udp !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp;
    }
    if (this._udpPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.udpPort = this._udpPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethodUdp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._forceUpWithSingleHealthcheck = undefined;
      this._udp = undefined;
      this._udpPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._forceUpWithSingleHealthcheck = value.forceUpWithSingleHealthcheck;
      this._udp = value.udp;
      this._udpPort = value.udpPort;
      this._uuid = value.uuid;
    }
  }

  // force_up_with_single_healthcheck - computed: false, optional: true, required: false
  private _forceUpWithSingleHealthcheck?: number; 
  public get forceUpWithSingleHealthcheck() {
    return this.getNumberAttribute('force_up_with_single_healthcheck');
  }
  public set forceUpWithSingleHealthcheck(value: number) {
    this._forceUpWithSingleHealthcheck = value;
  }
  public resetForceUpWithSingleHealthcheck() {
    this._forceUpWithSingleHealthcheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceUpWithSingleHealthcheckInput() {
    return this._forceUpWithSingleHealthcheck;
  }

  // udp - computed: false, optional: true, required: false
  private _udp?: number; 
  public get udp() {
    return this.getNumberAttribute('udp');
  }
  public set udp(value: number) {
    this._udp = value;
  }
  public resetUdp() {
    this._udp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp;
  }

  // udp_port - computed: false, optional: true, required: false
  private _udpPort?: number; 
  public get udpPort() {
    return this.getNumberAttribute('udp_port');
  }
  public set udpPort(value: number) {
    this._udpPort = value;
  }
  public resetUdpPort() {
    this._udpPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpPortInput() {
    return this._udpPort;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}
export interface HealthMonitorMethod {
  /**
  * compound block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#compound HealthMonitor#compound}
  */
  readonly compound?: HealthMonitorMethodCompound;
  /**
  * database block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#database HealthMonitor#database}
  */
  readonly database?: HealthMonitorMethodDatabase;
  /**
  * dns block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#dns HealthMonitor#dns}
  */
  readonly dns?: HealthMonitorMethodDns;
  /**
  * external block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#external HealthMonitor#external}
  */
  readonly external?: HealthMonitorMethodExternal;
  /**
  * ftp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ftp HealthMonitor#ftp}
  */
  readonly ftp?: HealthMonitorMethodFtp;
  /**
  * http block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#http HealthMonitor#http}
  */
  readonly http?: HealthMonitorMethodHttp;
  /**
  * https block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#https HealthMonitor#https}
  */
  readonly https?: HealthMonitorMethodHttps;
  /**
  * icmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#icmp HealthMonitor#icmp}
  */
  readonly icmp?: HealthMonitorMethodIcmp;
  /**
  * imap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#imap HealthMonitor#imap}
  */
  readonly imap?: HealthMonitorMethodImap;
  /**
  * kerberos_kdc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#kerberos_kdc HealthMonitor#kerberos_kdc}
  */
  readonly kerberosKdc?: HealthMonitorMethodKerberosKdc;
  /**
  * ldap block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ldap HealthMonitor#ldap}
  */
  readonly ldap?: HealthMonitorMethodLdap;
  /**
  * ntp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#ntp HealthMonitor#ntp}
  */
  readonly ntp?: HealthMonitorMethodNtp;
  /**
  * pop3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#pop3 HealthMonitor#pop3}
  */
  readonly pop3?: HealthMonitorMethodPop3;
  /**
  * quic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#quic HealthMonitor#quic}
  */
  readonly quic?: HealthMonitorMethodQuic;
  /**
  * radius block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#radius HealthMonitor#radius}
  */
  readonly radius?: HealthMonitorMethodRadius;
  /**
  * rtsp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#rtsp HealthMonitor#rtsp}
  */
  readonly rtsp?: HealthMonitorMethodRtsp;
  /**
  * sip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#sip HealthMonitor#sip}
  */
  readonly sip?: HealthMonitorMethodSip;
  /**
  * smtp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#smtp HealthMonitor#smtp}
  */
  readonly smtp?: HealthMonitorMethodSmtp;
  /**
  * snmp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#snmp HealthMonitor#snmp}
  */
  readonly snmp?: HealthMonitorMethodSnmp;
  /**
  * tacplus block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tacplus HealthMonitor#tacplus}
  */
  readonly tacplus?: HealthMonitorMethodTacplus;
  /**
  * tcp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#tcp HealthMonitor#tcp}
  */
  readonly tcp?: HealthMonitorMethodTcp;
  /**
  * udp block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#udp HealthMonitor#udp}
  */
  readonly udp?: HealthMonitorMethodUdp;
}

export function healthMonitorMethodToTerraform(struct?: HealthMonitorMethodOutputReference | HealthMonitorMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    compound: healthMonitorMethodCompoundToTerraform(struct!.compound),
    database: healthMonitorMethodDatabaseToTerraform(struct!.database),
    dns: healthMonitorMethodDnsToTerraform(struct!.dns),
    external: healthMonitorMethodExternalToTerraform(struct!.external),
    ftp: healthMonitorMethodFtpToTerraform(struct!.ftp),
    http: healthMonitorMethodHttpToTerraform(struct!.http),
    https: healthMonitorMethodHttpsToTerraform(struct!.https),
    icmp: healthMonitorMethodIcmpToTerraform(struct!.icmp),
    imap: healthMonitorMethodImapToTerraform(struct!.imap),
    kerberos_kdc: healthMonitorMethodKerberosKdcToTerraform(struct!.kerberosKdc),
    ldap: healthMonitorMethodLdapToTerraform(struct!.ldap),
    ntp: healthMonitorMethodNtpToTerraform(struct!.ntp),
    pop3: healthMonitorMethodPop3ToTerraform(struct!.pop3),
    quic: healthMonitorMethodQuicToTerraform(struct!.quic),
    radius: healthMonitorMethodRadiusToTerraform(struct!.radius),
    rtsp: healthMonitorMethodRtspToTerraform(struct!.rtsp),
    sip: healthMonitorMethodSipToTerraform(struct!.sip),
    smtp: healthMonitorMethodSmtpToTerraform(struct!.smtp),
    snmp: healthMonitorMethodSnmpToTerraform(struct!.snmp),
    tacplus: healthMonitorMethodTacplusToTerraform(struct!.tacplus),
    tcp: healthMonitorMethodTcpToTerraform(struct!.tcp),
    udp: healthMonitorMethodUdpToTerraform(struct!.udp),
  }
}


export function healthMonitorMethodToHclTerraform(struct?: HealthMonitorMethodOutputReference | HealthMonitorMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    compound: {
      value: healthMonitorMethodCompoundToHclTerraform(struct!.compound),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodCompoundList",
    },
    database: {
      value: healthMonitorMethodDatabaseToHclTerraform(struct!.database),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodDatabaseList",
    },
    dns: {
      value: healthMonitorMethodDnsToHclTerraform(struct!.dns),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodDnsList",
    },
    external: {
      value: healthMonitorMethodExternalToHclTerraform(struct!.external),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodExternalList",
    },
    ftp: {
      value: healthMonitorMethodFtpToHclTerraform(struct!.ftp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodFtpList",
    },
    http: {
      value: healthMonitorMethodHttpToHclTerraform(struct!.http),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodHttpList",
    },
    https: {
      value: healthMonitorMethodHttpsToHclTerraform(struct!.https),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodHttpsList",
    },
    icmp: {
      value: healthMonitorMethodIcmpToHclTerraform(struct!.icmp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodIcmpList",
    },
    imap: {
      value: healthMonitorMethodImapToHclTerraform(struct!.imap),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodImapList",
    },
    kerberos_kdc: {
      value: healthMonitorMethodKerberosKdcToHclTerraform(struct!.kerberosKdc),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodKerberosKdcList",
    },
    ldap: {
      value: healthMonitorMethodLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodLdapList",
    },
    ntp: {
      value: healthMonitorMethodNtpToHclTerraform(struct!.ntp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodNtpList",
    },
    pop3: {
      value: healthMonitorMethodPop3ToHclTerraform(struct!.pop3),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodPop3List",
    },
    quic: {
      value: healthMonitorMethodQuicToHclTerraform(struct!.quic),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodQuicList",
    },
    radius: {
      value: healthMonitorMethodRadiusToHclTerraform(struct!.radius),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodRadiusList",
    },
    rtsp: {
      value: healthMonitorMethodRtspToHclTerraform(struct!.rtsp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodRtspList",
    },
    sip: {
      value: healthMonitorMethodSipToHclTerraform(struct!.sip),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodSipList",
    },
    smtp: {
      value: healthMonitorMethodSmtpToHclTerraform(struct!.smtp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodSmtpList",
    },
    snmp: {
      value: healthMonitorMethodSnmpToHclTerraform(struct!.snmp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodSnmpList",
    },
    tacplus: {
      value: healthMonitorMethodTacplusToHclTerraform(struct!.tacplus),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodTacplusList",
    },
    tcp: {
      value: healthMonitorMethodTcpToHclTerraform(struct!.tcp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodTcpList",
    },
    udp: {
      value: healthMonitorMethodUdpToHclTerraform(struct!.udp),
      isBlock: true,
      type: "list",
      storageClassType: "HealthMonitorMethodUdpList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compound?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.compound = this._compound?.internalValue;
    }
    if (this._database?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.database = this._database?.internalValue;
    }
    if (this._dns?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dns = this._dns?.internalValue;
    }
    if (this._external?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.external = this._external?.internalValue;
    }
    if (this._ftp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ftp = this._ftp?.internalValue;
    }
    if (this._http?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.http = this._http?.internalValue;
    }
    if (this._https?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.https = this._https?.internalValue;
    }
    if (this._icmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.icmp = this._icmp?.internalValue;
    }
    if (this._imap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.imap = this._imap?.internalValue;
    }
    if (this._kerberosKdc?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kerberosKdc = this._kerberosKdc?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._ntp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntp = this._ntp?.internalValue;
    }
    if (this._pop3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pop3 = this._pop3?.internalValue;
    }
    if (this._quic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.quic = this._quic?.internalValue;
    }
    if (this._radius?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.radius = this._radius?.internalValue;
    }
    if (this._rtsp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rtsp = this._rtsp?.internalValue;
    }
    if (this._sip?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sip = this._sip?.internalValue;
    }
    if (this._smtp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.smtp = this._smtp?.internalValue;
    }
    if (this._snmp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.snmp = this._snmp?.internalValue;
    }
    if (this._tacplus?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tacplus = this._tacplus?.internalValue;
    }
    if (this._tcp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcp = this._tcp?.internalValue;
    }
    if (this._udp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.udp = this._udp?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._compound.internalValue = undefined;
      this._database.internalValue = undefined;
      this._dns.internalValue = undefined;
      this._external.internalValue = undefined;
      this._ftp.internalValue = undefined;
      this._http.internalValue = undefined;
      this._https.internalValue = undefined;
      this._icmp.internalValue = undefined;
      this._imap.internalValue = undefined;
      this._kerberosKdc.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._ntp.internalValue = undefined;
      this._pop3.internalValue = undefined;
      this._quic.internalValue = undefined;
      this._radius.internalValue = undefined;
      this._rtsp.internalValue = undefined;
      this._sip.internalValue = undefined;
      this._smtp.internalValue = undefined;
      this._snmp.internalValue = undefined;
      this._tacplus.internalValue = undefined;
      this._tcp.internalValue = undefined;
      this._udp.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._compound.internalValue = value.compound;
      this._database.internalValue = value.database;
      this._dns.internalValue = value.dns;
      this._external.internalValue = value.external;
      this._ftp.internalValue = value.ftp;
      this._http.internalValue = value.http;
      this._https.internalValue = value.https;
      this._icmp.internalValue = value.icmp;
      this._imap.internalValue = value.imap;
      this._kerberosKdc.internalValue = value.kerberosKdc;
      this._ldap.internalValue = value.ldap;
      this._ntp.internalValue = value.ntp;
      this._pop3.internalValue = value.pop3;
      this._quic.internalValue = value.quic;
      this._radius.internalValue = value.radius;
      this._rtsp.internalValue = value.rtsp;
      this._sip.internalValue = value.sip;
      this._smtp.internalValue = value.smtp;
      this._snmp.internalValue = value.snmp;
      this._tacplus.internalValue = value.tacplus;
      this._tcp.internalValue = value.tcp;
      this._udp.internalValue = value.udp;
    }
  }

  // compound - computed: false, optional: true, required: false
  private _compound = new HealthMonitorMethodCompoundOutputReference(this, "compound");
  public get compound() {
    return this._compound;
  }
  public putCompound(value: HealthMonitorMethodCompound) {
    this._compound.internalValue = value;
  }
  public resetCompound() {
    this._compound.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compoundInput() {
    return this._compound.internalValue;
  }

  // database - computed: false, optional: true, required: false
  private _database = new HealthMonitorMethodDatabaseOutputReference(this, "database");
  public get database() {
    return this._database;
  }
  public putDatabase(value: HealthMonitorMethodDatabase) {
    this._database.internalValue = value;
  }
  public resetDatabase() {
    this._database.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database.internalValue;
  }

  // dns - computed: false, optional: true, required: false
  private _dns = new HealthMonitorMethodDnsOutputReference(this, "dns");
  public get dns() {
    return this._dns;
  }
  public putDns(value: HealthMonitorMethodDns) {
    this._dns.internalValue = value;
  }
  public resetDns() {
    this._dns.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsInput() {
    return this._dns.internalValue;
  }

  // external - computed: false, optional: true, required: false
  private _external = new HealthMonitorMethodExternalOutputReference(this, "external");
  public get external() {
    return this._external;
  }
  public putExternal(value: HealthMonitorMethodExternal) {
    this._external.internalValue = value;
  }
  public resetExternal() {
    this._external.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalInput() {
    return this._external.internalValue;
  }

  // ftp - computed: false, optional: true, required: false
  private _ftp = new HealthMonitorMethodFtpOutputReference(this, "ftp");
  public get ftp() {
    return this._ftp;
  }
  public putFtp(value: HealthMonitorMethodFtp) {
    this._ftp.internalValue = value;
  }
  public resetFtp() {
    this._ftp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftpInput() {
    return this._ftp.internalValue;
  }

  // http - computed: false, optional: true, required: false
  private _http = new HealthMonitorMethodHttpOutputReference(this, "http");
  public get http() {
    return this._http;
  }
  public putHttp(value: HealthMonitorMethodHttp) {
    this._http.internalValue = value;
  }
  public resetHttp() {
    this._http.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpInput() {
    return this._http.internalValue;
  }

  // https - computed: false, optional: true, required: false
  private _https = new HealthMonitorMethodHttpsOutputReference(this, "https");
  public get https() {
    return this._https;
  }
  public putHttps(value: HealthMonitorMethodHttps) {
    this._https.internalValue = value;
  }
  public resetHttps() {
    this._https.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpsInput() {
    return this._https.internalValue;
  }

  // icmp - computed: false, optional: true, required: false
  private _icmp = new HealthMonitorMethodIcmpOutputReference(this, "icmp");
  public get icmp() {
    return this._icmp;
  }
  public putIcmp(value: HealthMonitorMethodIcmp) {
    this._icmp.internalValue = value;
  }
  public resetIcmp() {
    this._icmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icmpInput() {
    return this._icmp.internalValue;
  }

  // imap - computed: false, optional: true, required: false
  private _imap = new HealthMonitorMethodImapOutputReference(this, "imap");
  public get imap() {
    return this._imap;
  }
  public putImap(value: HealthMonitorMethodImap) {
    this._imap.internalValue = value;
  }
  public resetImap() {
    this._imap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imapInput() {
    return this._imap.internalValue;
  }

  // kerberos_kdc - computed: false, optional: true, required: false
  private _kerberosKdc = new HealthMonitorMethodKerberosKdcOutputReference(this, "kerberos_kdc");
  public get kerberosKdc() {
    return this._kerberosKdc;
  }
  public putKerberosKdc(value: HealthMonitorMethodKerberosKdc) {
    this._kerberosKdc.internalValue = value;
  }
  public resetKerberosKdc() {
    this._kerberosKdc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kerberosKdcInput() {
    return this._kerberosKdc.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new HealthMonitorMethodLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: HealthMonitorMethodLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // ntp - computed: false, optional: true, required: false
  private _ntp = new HealthMonitorMethodNtpOutputReference(this, "ntp");
  public get ntp() {
    return this._ntp;
  }
  public putNtp(value: HealthMonitorMethodNtp) {
    this._ntp.internalValue = value;
  }
  public resetNtp() {
    this._ntp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntpInput() {
    return this._ntp.internalValue;
  }

  // pop3 - computed: false, optional: true, required: false
  private _pop3 = new HealthMonitorMethodPop3OutputReference(this, "pop3");
  public get pop3() {
    return this._pop3;
  }
  public putPop3(value: HealthMonitorMethodPop3) {
    this._pop3.internalValue = value;
  }
  public resetPop3() {
    this._pop3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pop3Input() {
    return this._pop3.internalValue;
  }

  // quic - computed: false, optional: true, required: false
  private _quic = new HealthMonitorMethodQuicOutputReference(this, "quic");
  public get quic() {
    return this._quic;
  }
  public putQuic(value: HealthMonitorMethodQuic) {
    this._quic.internalValue = value;
  }
  public resetQuic() {
    this._quic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quicInput() {
    return this._quic.internalValue;
  }

  // radius - computed: false, optional: true, required: false
  private _radius = new HealthMonitorMethodRadiusOutputReference(this, "radius");
  public get radius() {
    return this._radius;
  }
  public putRadius(value: HealthMonitorMethodRadius) {
    this._radius.internalValue = value;
  }
  public resetRadius() {
    this._radius.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get radiusInput() {
    return this._radius.internalValue;
  }

  // rtsp - computed: false, optional: true, required: false
  private _rtsp = new HealthMonitorMethodRtspOutputReference(this, "rtsp");
  public get rtsp() {
    return this._rtsp;
  }
  public putRtsp(value: HealthMonitorMethodRtsp) {
    this._rtsp.internalValue = value;
  }
  public resetRtsp() {
    this._rtsp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rtspInput() {
    return this._rtsp.internalValue;
  }

  // sip - computed: false, optional: true, required: false
  private _sip = new HealthMonitorMethodSipOutputReference(this, "sip");
  public get sip() {
    return this._sip;
  }
  public putSip(value: HealthMonitorMethodSip) {
    this._sip.internalValue = value;
  }
  public resetSip() {
    this._sip.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sipInput() {
    return this._sip.internalValue;
  }

  // smtp - computed: false, optional: true, required: false
  private _smtp = new HealthMonitorMethodSmtpOutputReference(this, "smtp");
  public get smtp() {
    return this._smtp;
  }
  public putSmtp(value: HealthMonitorMethodSmtp) {
    this._smtp.internalValue = value;
  }
  public resetSmtp() {
    this._smtp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smtpInput() {
    return this._smtp.internalValue;
  }

  // snmp - computed: false, optional: true, required: false
  private _snmp = new HealthMonitorMethodSnmpOutputReference(this, "snmp");
  public get snmp() {
    return this._snmp;
  }
  public putSnmp(value: HealthMonitorMethodSnmp) {
    this._snmp.internalValue = value;
  }
  public resetSnmp() {
    this._snmp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snmpInput() {
    return this._snmp.internalValue;
  }

  // tacplus - computed: false, optional: true, required: false
  private _tacplus = new HealthMonitorMethodTacplusOutputReference(this, "tacplus");
  public get tacplus() {
    return this._tacplus;
  }
  public putTacplus(value: HealthMonitorMethodTacplus) {
    this._tacplus.internalValue = value;
  }
  public resetTacplus() {
    this._tacplus.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tacplusInput() {
    return this._tacplus.internalValue;
  }

  // tcp - computed: false, optional: true, required: false
  private _tcp = new HealthMonitorMethodTcpOutputReference(this, "tcp");
  public get tcp() {
    return this._tcp;
  }
  public putTcp(value: HealthMonitorMethodTcp) {
    this._tcp.internalValue = value;
  }
  public resetTcp() {
    this._tcp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpInput() {
    return this._tcp.internalValue;
  }

  // udp - computed: false, optional: true, required: false
  private _udp = new HealthMonitorMethodUdpOutputReference(this, "udp");
  public get udp() {
    return this._udp;
  }
  public putUdp(value: HealthMonitorMethodUdp) {
    this._udp.internalValue = value;
  }
  public resetUdp() {
    this._udp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get udpInput() {
    return this._udp.internalValue;
  }
}
export interface HealthMonitorProxyHeader {
  /**
  * 'v1': version 1; 'v2': version 2;  (version number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#proxy_header_ver HealthMonitor#proxy_header_ver}
  */
  readonly proxyHeaderVer?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#uuid HealthMonitor#uuid}
  */
  readonly uuid?: string;
}

export function healthMonitorProxyHeaderToTerraform(struct?: HealthMonitorProxyHeaderOutputReference | HealthMonitorProxyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    proxy_header_ver: cdktf.stringToTerraform(struct!.proxyHeaderVer),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function healthMonitorProxyHeaderToHclTerraform(struct?: HealthMonitorProxyHeaderOutputReference | HealthMonitorProxyHeader): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    proxy_header_ver: {
      value: cdktf.stringToHclTerraform(struct!.proxyHeaderVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HealthMonitorProxyHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HealthMonitorProxyHeader | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._proxyHeaderVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.proxyHeaderVer = this._proxyHeaderVer;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HealthMonitorProxyHeader | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._proxyHeaderVer = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._proxyHeaderVer = value.proxyHeaderVer;
      this._uuid = value.uuid;
    }
  }

  // proxy_header_ver - computed: false, optional: true, required: false
  private _proxyHeaderVer?: string; 
  public get proxyHeaderVer() {
    return this.getStringAttribute('proxy_header_ver');
  }
  public set proxyHeaderVer(value: string) {
    this._proxyHeaderVer = value;
  }
  public resetProxyHeaderVer() {
    this._proxyHeaderVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderVerInput() {
    return this._proxyHeaderVer;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor thunder_health_monitor}
*/
export class HealthMonitor extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_health_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HealthMonitor resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HealthMonitor to import
  * @param importFromId The id of the existing HealthMonitor that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HealthMonitor to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_health_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/health_monitor thunder_health_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HealthMonitorConfig
  */
  public constructor(scope: Construct, id: string, config: HealthMonitorConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_health_monitor',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultStateUp = config.defaultStateUp;
    this._disableAfterDown = config.disableAfterDown;
    this._dplane = config.dplane;
    this._dsrL2Strict = config.dsrL2Strict;
    this._id = config.id;
    this._interval = config.interval;
    this._name = config.name;
    this._overrideIpv4 = config.overrideIpv4;
    this._overrideIpv6 = config.overrideIpv6;
    this._overridePort = config.overridePort;
    this._passive = config.passive;
    this._passiveInterval = config.passiveInterval;
    this._retry = config.retry;
    this._sampleThreshold = config.sampleThreshold;
    this._sslCiphers = config.sslCiphers;
    this._sslDgversion = config.sslDgversion;
    this._sslTicket = config.sslTicket;
    this._sslTicketLifetime = config.sslTicketLifetime;
    this._sslVersion = config.sslVersion;
    this._statusCode = config.statusCode;
    this._strictRetryOnServerErrResp = config.strictRetryOnServerErrResp;
    this._templateServerSsl = config.templateServerSsl;
    this._threshold = config.threshold;
    this._timeout = config.timeout;
    this._upRetry = config.upRetry;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._headerInsert.internalValue = config.headerInsert;
    this._method.internalValue = config.method;
    this._proxyHeader.internalValue = config.proxyHeader;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_state_up - computed: false, optional: true, required: false
  private _defaultStateUp?: number; 
  public get defaultStateUp() {
    return this.getNumberAttribute('default_state_up');
  }
  public set defaultStateUp(value: number) {
    this._defaultStateUp = value;
  }
  public resetDefaultStateUp() {
    this._defaultStateUp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStateUpInput() {
    return this._defaultStateUp;
  }

  // disable_after_down - computed: false, optional: true, required: false
  private _disableAfterDown?: number; 
  public get disableAfterDown() {
    return this.getNumberAttribute('disable_after_down');
  }
  public set disableAfterDown(value: number) {
    this._disableAfterDown = value;
  }
  public resetDisableAfterDown() {
    this._disableAfterDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableAfterDownInput() {
    return this._disableAfterDown;
  }

  // dplane - computed: false, optional: true, required: false
  private _dplane?: string; 
  public get dplane() {
    return this.getStringAttribute('dplane');
  }
  public set dplane(value: string) {
    this._dplane = value;
  }
  public resetDplane() {
    this._dplane = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dplaneInput() {
    return this._dplane;
  }

  // dsr_l2_strict - computed: false, optional: true, required: false
  private _dsrL2Strict?: number; 
  public get dsrL2Strict() {
    return this.getNumberAttribute('dsr_l2_strict');
  }
  public set dsrL2Strict(value: number) {
    this._dsrL2Strict = value;
  }
  public resetDsrL2Strict() {
    this._dsrL2Strict = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dsrL2StrictInput() {
    return this._dsrL2Strict;
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

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
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

  // override_ipv4 - computed: false, optional: true, required: false
  private _overrideIpv4?: string; 
  public get overrideIpv4() {
    return this.getStringAttribute('override_ipv4');
  }
  public set overrideIpv4(value: string) {
    this._overrideIpv4 = value;
  }
  public resetOverrideIpv4() {
    this._overrideIpv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIpv4Input() {
    return this._overrideIpv4;
  }

  // override_ipv6 - computed: false, optional: true, required: false
  private _overrideIpv6?: string; 
  public get overrideIpv6() {
    return this.getStringAttribute('override_ipv6');
  }
  public set overrideIpv6(value: string) {
    this._overrideIpv6 = value;
  }
  public resetOverrideIpv6() {
    this._overrideIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideIpv6Input() {
    return this._overrideIpv6;
  }

  // override_port - computed: false, optional: true, required: false
  private _overridePort?: number; 
  public get overridePort() {
    return this.getNumberAttribute('override_port');
  }
  public set overridePort(value: number) {
    this._overridePort = value;
  }
  public resetOverridePort() {
    this._overridePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridePortInput() {
    return this._overridePort;
  }

  // passive - computed: false, optional: true, required: false
  private _passive?: number; 
  public get passive() {
    return this.getNumberAttribute('passive');
  }
  public set passive(value: number) {
    this._passive = value;
  }
  public resetPassive() {
    this._passive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveInput() {
    return this._passive;
  }

  // passive_interval - computed: false, optional: true, required: false
  private _passiveInterval?: number; 
  public get passiveInterval() {
    return this.getNumberAttribute('passive_interval');
  }
  public set passiveInterval(value: number) {
    this._passiveInterval = value;
  }
  public resetPassiveInterval() {
    this._passiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passiveIntervalInput() {
    return this._passiveInterval;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // sample_threshold - computed: false, optional: true, required: false
  private _sampleThreshold?: number; 
  public get sampleThreshold() {
    return this.getNumberAttribute('sample_threshold');
  }
  public set sampleThreshold(value: number) {
    this._sampleThreshold = value;
  }
  public resetSampleThreshold() {
    this._sampleThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sampleThresholdInput() {
    return this._sampleThreshold;
  }

  // ssl_ciphers - computed: false, optional: true, required: false
  private _sslCiphers?: string; 
  public get sslCiphers() {
    return this.getStringAttribute('ssl_ciphers');
  }
  public set sslCiphers(value: string) {
    this._sslCiphers = value;
  }
  public resetSslCiphers() {
    this._sslCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCiphersInput() {
    return this._sslCiphers;
  }

  // ssl_dgversion - computed: false, optional: true, required: false
  private _sslDgversion?: number; 
  public get sslDgversion() {
    return this.getNumberAttribute('ssl_dgversion');
  }
  public set sslDgversion(value: number) {
    this._sslDgversion = value;
  }
  public resetSslDgversion() {
    this._sslDgversion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslDgversionInput() {
    return this._sslDgversion;
  }

  // ssl_ticket - computed: false, optional: true, required: false
  private _sslTicket?: number; 
  public get sslTicket() {
    return this.getNumberAttribute('ssl_ticket');
  }
  public set sslTicket(value: number) {
    this._sslTicket = value;
  }
  public resetSslTicket() {
    this._sslTicket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTicketInput() {
    return this._sslTicket;
  }

  // ssl_ticket_lifetime - computed: false, optional: true, required: false
  private _sslTicketLifetime?: number; 
  public get sslTicketLifetime() {
    return this.getNumberAttribute('ssl_ticket_lifetime');
  }
  public set sslTicketLifetime(value: number) {
    this._sslTicketLifetime = value;
  }
  public resetSslTicketLifetime() {
    this._sslTicketLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslTicketLifetimeInput() {
    return this._sslTicketLifetime;
  }

  // ssl_version - computed: false, optional: true, required: false
  private _sslVersion?: number; 
  public get sslVersion() {
    return this.getNumberAttribute('ssl_version');
  }
  public set sslVersion(value: number) {
    this._sslVersion = value;
  }
  public resetSslVersion() {
    this._sslVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslVersionInput() {
    return this._sslVersion;
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

  // strict_retry_on_server_err_resp - computed: false, optional: true, required: false
  private _strictRetryOnServerErrResp?: number; 
  public get strictRetryOnServerErrResp() {
    return this.getNumberAttribute('strict_retry_on_server_err_resp');
  }
  public set strictRetryOnServerErrResp(value: number) {
    this._strictRetryOnServerErrResp = value;
  }
  public resetStrictRetryOnServerErrResp() {
    this._strictRetryOnServerErrResp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictRetryOnServerErrRespInput() {
    return this._strictRetryOnServerErrResp;
  }

  // template_server_ssl - computed: false, optional: true, required: false
  private _templateServerSsl?: string; 
  public get templateServerSsl() {
    return this.getStringAttribute('template_server_ssl');
  }
  public set templateServerSsl(value: string) {
    this._templateServerSsl = value;
  }
  public resetTemplateServerSsl() {
    this._templateServerSsl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateServerSslInput() {
    return this._templateServerSsl;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
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

  // up_retry - computed: false, optional: true, required: false
  private _upRetry?: number; 
  public get upRetry() {
    return this.getNumberAttribute('up_retry');
  }
  public set upRetry(value: number) {
    this._upRetry = value;
  }
  public resetUpRetry() {
    this._upRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get upRetryInput() {
    return this._upRetry;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // header_insert - computed: false, optional: true, required: false
  private _headerInsert = new HealthMonitorHeaderInsertOutputReference(this, "header_insert");
  public get headerInsert() {
    return this._headerInsert;
  }
  public putHeaderInsert(value: HealthMonitorHeaderInsert) {
    this._headerInsert.internalValue = value;
  }
  public resetHeaderInsert() {
    this._headerInsert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headerInsertInput() {
    return this._headerInsert.internalValue;
  }

  // method - computed: false, optional: true, required: false
  private _method = new HealthMonitorMethodOutputReference(this, "method");
  public get method() {
    return this._method;
  }
  public putMethod(value: HealthMonitorMethod) {
    this._method.internalValue = value;
  }
  public resetMethod() {
    this._method.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method.internalValue;
  }

  // proxy_header - computed: false, optional: true, required: false
  private _proxyHeader = new HealthMonitorProxyHeaderOutputReference(this, "proxy_header");
  public get proxyHeader() {
    return this._proxyHeader;
  }
  public putProxyHeader(value: HealthMonitorProxyHeader) {
    this._proxyHeader.internalValue = value;
  }
  public resetProxyHeader() {
    this._proxyHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHeaderInput() {
    return this._proxyHeader.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_state_up: cdktf.numberToTerraform(this._defaultStateUp),
      disable_after_down: cdktf.numberToTerraform(this._disableAfterDown),
      dplane: cdktf.stringToTerraform(this._dplane),
      dsr_l2_strict: cdktf.numberToTerraform(this._dsrL2Strict),
      id: cdktf.stringToTerraform(this._id),
      interval: cdktf.numberToTerraform(this._interval),
      name: cdktf.stringToTerraform(this._name),
      override_ipv4: cdktf.stringToTerraform(this._overrideIpv4),
      override_ipv6: cdktf.stringToTerraform(this._overrideIpv6),
      override_port: cdktf.numberToTerraform(this._overridePort),
      passive: cdktf.numberToTerraform(this._passive),
      passive_interval: cdktf.numberToTerraform(this._passiveInterval),
      retry: cdktf.numberToTerraform(this._retry),
      sample_threshold: cdktf.numberToTerraform(this._sampleThreshold),
      ssl_ciphers: cdktf.stringToTerraform(this._sslCiphers),
      ssl_dgversion: cdktf.numberToTerraform(this._sslDgversion),
      ssl_ticket: cdktf.numberToTerraform(this._sslTicket),
      ssl_ticket_lifetime: cdktf.numberToTerraform(this._sslTicketLifetime),
      ssl_version: cdktf.numberToTerraform(this._sslVersion),
      status_code: cdktf.stringToTerraform(this._statusCode),
      strict_retry_on_server_err_resp: cdktf.numberToTerraform(this._strictRetryOnServerErrResp),
      template_server_ssl: cdktf.stringToTerraform(this._templateServerSsl),
      threshold: cdktf.numberToTerraform(this._threshold),
      timeout: cdktf.numberToTerraform(this._timeout),
      up_retry: cdktf.numberToTerraform(this._upRetry),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      header_insert: healthMonitorHeaderInsertToTerraform(this._headerInsert.internalValue),
      method: healthMonitorMethodToTerraform(this._method.internalValue),
      proxy_header: healthMonitorProxyHeaderToTerraform(this._proxyHeader.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_state_up: {
        value: cdktf.numberToHclTerraform(this._defaultStateUp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_after_down: {
        value: cdktf.numberToHclTerraform(this._disableAfterDown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dplane: {
        value: cdktf.stringToHclTerraform(this._dplane),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dsr_l2_strict: {
        value: cdktf.numberToHclTerraform(this._dsrL2Strict),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interval: {
        value: cdktf.numberToHclTerraform(this._interval),
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
      override_ipv4: {
        value: cdktf.stringToHclTerraform(this._overrideIpv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_ipv6: {
        value: cdktf.stringToHclTerraform(this._overrideIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_port: {
        value: cdktf.numberToHclTerraform(this._overridePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive: {
        value: cdktf.numberToHclTerraform(this._passive),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      passive_interval: {
        value: cdktf.numberToHclTerraform(this._passiveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      sample_threshold: {
        value: cdktf.numberToHclTerraform(this._sampleThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_ciphers: {
        value: cdktf.stringToHclTerraform(this._sslCiphers),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_dgversion: {
        value: cdktf.numberToHclTerraform(this._sslDgversion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_ticket: {
        value: cdktf.numberToHclTerraform(this._sslTicket),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_ticket_lifetime: {
        value: cdktf.numberToHclTerraform(this._sslTicketLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_version: {
        value: cdktf.numberToHclTerraform(this._sslVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      status_code: {
        value: cdktf.stringToHclTerraform(this._statusCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      strict_retry_on_server_err_resp: {
        value: cdktf.numberToHclTerraform(this._strictRetryOnServerErrResp),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      template_server_ssl: {
        value: cdktf.stringToHclTerraform(this._templateServerSsl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout: {
        value: cdktf.numberToHclTerraform(this._timeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      up_retry: {
        value: cdktf.numberToHclTerraform(this._upRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      header_insert: {
        value: healthMonitorHeaderInsertToHclTerraform(this._headerInsert.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorHeaderInsertList",
      },
      method: {
        value: healthMonitorMethodToHclTerraform(this._method.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorMethodList",
      },
      proxy_header: {
        value: healthMonitorProxyHeaderToHclTerraform(this._proxyHeader.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HealthMonitorProxyHeaderList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
