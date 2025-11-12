// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectLogNpuserverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#adom ObjectLogNpuserver#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#dynamic_sort_subtable ObjectLogNpuserver#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#enforce_seq_order ObjectLogNpuserver#enforce_seq_order}
  */
  readonly enforceSeqOrder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#id ObjectLogNpuserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_processing ObjectLogNpuserver#log_processing}
  */
  readonly logProcessing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_processor ObjectLogNpuserver#log_processor}
  */
  readonly logProcessor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#netflow_ver ObjectLogNpuserver#netflow_ver}
  */
  readonly netflowVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#scopetype ObjectLogNpuserver#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#syslog_facility ObjectLogNpuserver#syslog_facility}
  */
  readonly syslogFacility?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#syslog_severity ObjectLogNpuserver#syslog_severity}
  */
  readonly syslogSeverity?: number;
  /**
  * server_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#server_group ObjectLogNpuserver#server_group}
  */
  readonly serverGroup?: ObjectLogNpuserverServerGroup[] | cdktf.IResolvable;
  /**
  * server_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#server_info ObjectLogNpuserver#server_info}
  */
  readonly serverInfo?: ObjectLogNpuserverServerInfo[] | cdktf.IResolvable;
}
export interface ObjectLogNpuserverServerGroup {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#group_name ObjectLogNpuserver#group_name}
  */
  readonly groupName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_format ObjectLogNpuserver#log_format}
  */
  readonly logFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_gen_event ObjectLogNpuserver#log_gen_event}
  */
  readonly logGenEvent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_mode ObjectLogNpuserver#log_mode}
  */
  readonly logMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_tx_mode ObjectLogNpuserver#log_tx_mode}
  */
  readonly logTxMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_user_info ObjectLogNpuserver#log_user_info}
  */
  readonly logUserInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#server_number ObjectLogNpuserver#server_number}
  */
  readonly serverNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#server_start_id ObjectLogNpuserver#server_start_id}
  */
  readonly serverStartId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#sw_log_flags ObjectLogNpuserver#sw_log_flags}
  */
  readonly swLogFlags?: string;
}

export function objectLogNpuserverServerGroupToTerraform(struct?: ObjectLogNpuserverServerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_name: cdktf.stringToTerraform(struct!.groupName),
    log_format: cdktf.stringToTerraform(struct!.logFormat),
    log_gen_event: cdktf.stringToTerraform(struct!.logGenEvent),
    log_mode: cdktf.stringToTerraform(struct!.logMode),
    log_tx_mode: cdktf.stringToTerraform(struct!.logTxMode),
    log_user_info: cdktf.stringToTerraform(struct!.logUserInfo),
    server_number: cdktf.numberToTerraform(struct!.serverNumber),
    server_start_id: cdktf.numberToTerraform(struct!.serverStartId),
    sw_log_flags: cdktf.stringToTerraform(struct!.swLogFlags),
  }
}


export function objectLogNpuserverServerGroupToHclTerraform(struct?: ObjectLogNpuserverServerGroup | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_name: {
      value: cdktf.stringToHclTerraform(struct!.groupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_format: {
      value: cdktf.stringToHclTerraform(struct!.logFormat),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_gen_event: {
      value: cdktf.stringToHclTerraform(struct!.logGenEvent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_mode: {
      value: cdktf.stringToHclTerraform(struct!.logMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_tx_mode: {
      value: cdktf.stringToHclTerraform(struct!.logTxMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_user_info: {
      value: cdktf.stringToHclTerraform(struct!.logUserInfo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_number: {
      value: cdktf.numberToHclTerraform(struct!.serverNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    server_start_id: {
      value: cdktf.numberToHclTerraform(struct!.serverStartId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sw_log_flags: {
      value: cdktf.stringToHclTerraform(struct!.swLogFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectLogNpuserverServerGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectLogNpuserverServerGroup | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupName = this._groupName;
    }
    if (this._logFormat !== undefined) {
      hasAnyValues = true;
      internalValueResult.logFormat = this._logFormat;
    }
    if (this._logGenEvent !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGenEvent = this._logGenEvent;
    }
    if (this._logMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.logMode = this._logMode;
    }
    if (this._logTxMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTxMode = this._logTxMode;
    }
    if (this._logUserInfo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logUserInfo = this._logUserInfo;
    }
    if (this._serverNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverNumber = this._serverNumber;
    }
    if (this._serverStartId !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverStartId = this._serverStartId;
    }
    if (this._swLogFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.swLogFlags = this._swLogFlags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectLogNpuserverServerGroup | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupName = undefined;
      this._logFormat = undefined;
      this._logGenEvent = undefined;
      this._logMode = undefined;
      this._logTxMode = undefined;
      this._logUserInfo = undefined;
      this._serverNumber = undefined;
      this._serverStartId = undefined;
      this._swLogFlags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupName = value.groupName;
      this._logFormat = value.logFormat;
      this._logGenEvent = value.logGenEvent;
      this._logMode = value.logMode;
      this._logTxMode = value.logTxMode;
      this._logUserInfo = value.logUserInfo;
      this._serverNumber = value.serverNumber;
      this._serverStartId = value.serverStartId;
      this._swLogFlags = value.swLogFlags;
    }
  }

  // group_name - computed: false, optional: true, required: false
  private _groupName?: string; 
  public get groupName() {
    return this.getStringAttribute('group_name');
  }
  public set groupName(value: string) {
    this._groupName = value;
  }
  public resetGroupName() {
    this._groupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupNameInput() {
    return this._groupName;
  }

  // log_format - computed: true, optional: true, required: false
  private _logFormat?: string; 
  public get logFormat() {
    return this.getStringAttribute('log_format');
  }
  public set logFormat(value: string) {
    this._logFormat = value;
  }
  public resetLogFormat() {
    this._logFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFormatInput() {
    return this._logFormat;
  }

  // log_gen_event - computed: true, optional: true, required: false
  private _logGenEvent?: string; 
  public get logGenEvent() {
    return this.getStringAttribute('log_gen_event');
  }
  public set logGenEvent(value: string) {
    this._logGenEvent = value;
  }
  public resetLogGenEvent() {
    this._logGenEvent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logGenEventInput() {
    return this._logGenEvent;
  }

  // log_mode - computed: true, optional: true, required: false
  private _logMode?: string; 
  public get logMode() {
    return this.getStringAttribute('log_mode');
  }
  public set logMode(value: string) {
    this._logMode = value;
  }
  public resetLogMode() {
    this._logMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logModeInput() {
    return this._logMode;
  }

  // log_tx_mode - computed: true, optional: true, required: false
  private _logTxMode?: string; 
  public get logTxMode() {
    return this.getStringAttribute('log_tx_mode');
  }
  public set logTxMode(value: string) {
    this._logTxMode = value;
  }
  public resetLogTxMode() {
    this._logTxMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTxModeInput() {
    return this._logTxMode;
  }

  // log_user_info - computed: true, optional: true, required: false
  private _logUserInfo?: string; 
  public get logUserInfo() {
    return this.getStringAttribute('log_user_info');
  }
  public set logUserInfo(value: string) {
    this._logUserInfo = value;
  }
  public resetLogUserInfo() {
    this._logUserInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUserInfoInput() {
    return this._logUserInfo;
  }

  // server_number - computed: false, optional: true, required: false
  private _serverNumber?: number; 
  public get serverNumber() {
    return this.getNumberAttribute('server_number');
  }
  public set serverNumber(value: number) {
    this._serverNumber = value;
  }
  public resetServerNumber() {
    this._serverNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverNumberInput() {
    return this._serverNumber;
  }

  // server_start_id - computed: false, optional: true, required: false
  private _serverStartId?: number; 
  public get serverStartId() {
    return this.getNumberAttribute('server_start_id');
  }
  public set serverStartId(value: number) {
    this._serverStartId = value;
  }
  public resetServerStartId() {
    this._serverStartId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverStartIdInput() {
    return this._serverStartId;
  }

  // sw_log_flags - computed: true, optional: true, required: false
  private _swLogFlags?: string; 
  public get swLogFlags() {
    return this.getStringAttribute('sw_log_flags');
  }
  public set swLogFlags(value: string) {
    this._swLogFlags = value;
  }
  public resetSwLogFlags() {
    this._swLogFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get swLogFlagsInput() {
    return this._swLogFlags;
  }
}

export class ObjectLogNpuserverServerGroupList extends cdktf.ComplexList {
  public internalValue? : ObjectLogNpuserverServerGroup[] | cdktf.IResolvable

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
  public get(index: number): ObjectLogNpuserverServerGroupOutputReference {
    return new ObjectLogNpuserverServerGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ObjectLogNpuserverServerInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#dest_port ObjectLogNpuserver#dest_port}
  */
  readonly destPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#id ObjectLogNpuserver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#ip_family ObjectLogNpuserver#ip_family}
  */
  readonly ipFamily?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#ipv4_server ObjectLogNpuserver#ipv4_server}
  */
  readonly ipv4Server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#ipv6_server ObjectLogNpuserver#ipv6_server}
  */
  readonly ipv6Server?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#log_transport ObjectLogNpuserver#log_transport}
  */
  readonly logTransport?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#source_port ObjectLogNpuserver#source_port}
  */
  readonly sourcePort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#template_tx_timeout ObjectLogNpuserver#template_tx_timeout}
  */
  readonly templateTxTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#vdom ObjectLogNpuserver#vdom}
  */
  readonly vdom?: string;
}

export function objectLogNpuserverServerInfoToTerraform(struct?: ObjectLogNpuserverServerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dest_port: cdktf.numberToTerraform(struct!.destPort),
    id: cdktf.numberToTerraform(struct!.id),
    ip_family: cdktf.stringToTerraform(struct!.ipFamily),
    ipv4_server: cdktf.stringToTerraform(struct!.ipv4Server),
    ipv6_server: cdktf.stringToTerraform(struct!.ipv6Server),
    log_transport: cdktf.stringToTerraform(struct!.logTransport),
    source_port: cdktf.numberToTerraform(struct!.sourcePort),
    template_tx_timeout: cdktf.numberToTerraform(struct!.templateTxTimeout),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function objectLogNpuserverServerInfoToHclTerraform(struct?: ObjectLogNpuserverServerInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dest_port: {
      value: cdktf.numberToHclTerraform(struct!.destPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    id: {
      value: cdktf.numberToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_family: {
      value: cdktf.stringToHclTerraform(struct!.ipFamily),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_server: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv6_server: {
      value: cdktf.stringToHclTerraform(struct!.ipv6Server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_transport: {
      value: cdktf.stringToHclTerraform(struct!.logTransport),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_port: {
      value: cdktf.numberToHclTerraform(struct!.sourcePort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_tx_timeout: {
      value: cdktf.numberToHclTerraform(struct!.templateTxTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ObjectLogNpuserverServerInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ObjectLogNpuserverServerInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.destPort = this._destPort;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._ipFamily !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipFamily = this._ipFamily;
    }
    if (this._ipv4Server !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Server = this._ipv4Server;
    }
    if (this._ipv6Server !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Server = this._ipv6Server;
    }
    if (this._logTransport !== undefined) {
      hasAnyValues = true;
      internalValueResult.logTransport = this._logTransport;
    }
    if (this._sourcePort !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourcePort = this._sourcePort;
    }
    if (this._templateTxTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateTxTimeout = this._templateTxTimeout;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ObjectLogNpuserverServerInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destPort = undefined;
      this._id = undefined;
      this._ipFamily = undefined;
      this._ipv4Server = undefined;
      this._ipv6Server = undefined;
      this._logTransport = undefined;
      this._sourcePort = undefined;
      this._templateTxTimeout = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destPort = value.destPort;
      this._id = value.id;
      this._ipFamily = value.ipFamily;
      this._ipv4Server = value.ipv4Server;
      this._ipv6Server = value.ipv6Server;
      this._logTransport = value.logTransport;
      this._sourcePort = value.sourcePort;
      this._templateTxTimeout = value.templateTxTimeout;
      this._vdom = value.vdom;
    }
  }

  // dest_port - computed: false, optional: true, required: false
  private _destPort?: number; 
  public get destPort() {
    return this.getNumberAttribute('dest_port');
  }
  public set destPort(value: number) {
    this._destPort = value;
  }
  public resetDestPort() {
    this._destPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destPortInput() {
    return this._destPort;
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

  // ip_family - computed: true, optional: true, required: false
  private _ipFamily?: string; 
  public get ipFamily() {
    return this.getStringAttribute('ip_family');
  }
  public set ipFamily(value: string) {
    this._ipFamily = value;
  }
  public resetIpFamily() {
    this._ipFamily = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipFamilyInput() {
    return this._ipFamily;
  }

  // ipv4_server - computed: true, optional: true, required: false
  private _ipv4Server?: string; 
  public get ipv4Server() {
    return this.getStringAttribute('ipv4_server');
  }
  public set ipv4Server(value: string) {
    this._ipv4Server = value;
  }
  public resetIpv4Server() {
    this._ipv4Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ServerInput() {
    return this._ipv4Server;
  }

  // ipv6_server - computed: true, optional: true, required: false
  private _ipv6Server?: string; 
  public get ipv6Server() {
    return this.getStringAttribute('ipv6_server');
  }
  public set ipv6Server(value: string) {
    this._ipv6Server = value;
  }
  public resetIpv6Server() {
    this._ipv6Server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ServerInput() {
    return this._ipv6Server;
  }

  // log_transport - computed: true, optional: true, required: false
  private _logTransport?: string; 
  public get logTransport() {
    return this.getStringAttribute('log_transport');
  }
  public set logTransport(value: string) {
    this._logTransport = value;
  }
  public resetLogTransport() {
    this._logTransport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTransportInput() {
    return this._logTransport;
  }

  // source_port - computed: false, optional: true, required: false
  private _sourcePort?: number; 
  public get sourcePort() {
    return this.getNumberAttribute('source_port');
  }
  public set sourcePort(value: number) {
    this._sourcePort = value;
  }
  public resetSourcePort() {
    this._sourcePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcePortInput() {
    return this._sourcePort;
  }

  // template_tx_timeout - computed: true, optional: true, required: false
  private _templateTxTimeout?: number; 
  public get templateTxTimeout() {
    return this.getNumberAttribute('template_tx_timeout');
  }
  public set templateTxTimeout(value: number) {
    this._templateTxTimeout = value;
  }
  public resetTemplateTxTimeout() {
    this._templateTxTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateTxTimeoutInput() {
    return this._templateTxTimeout;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class ObjectLogNpuserverServerInfoList extends cdktf.ComplexList {
  public internalValue? : ObjectLogNpuserverServerInfo[] | cdktf.IResolvable

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
  public get(index: number): ObjectLogNpuserverServerInfoOutputReference {
    return new ObjectLogNpuserverServerInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver fortimanager_object_log_npuserver}
*/
export class ObjectLogNpuserver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_log_npuserver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectLogNpuserver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectLogNpuserver to import
  * @param importFromId The id of the existing ObjectLogNpuserver that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectLogNpuserver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_log_npuserver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_log_npuserver fortimanager_object_log_npuserver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectLogNpuserverConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectLogNpuserverConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_log_npuserver',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._enforceSeqOrder = config.enforceSeqOrder;
    this._id = config.id;
    this._logProcessing = config.logProcessing;
    this._logProcessor = config.logProcessor;
    this._netflowVer = config.netflowVer;
    this._scopetype = config.scopetype;
    this._syslogFacility = config.syslogFacility;
    this._syslogSeverity = config.syslogSeverity;
    this._serverGroup.internalValue = config.serverGroup;
    this._serverInfo.internalValue = config.serverInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // enforce_seq_order - computed: true, optional: true, required: false
  private _enforceSeqOrder?: string; 
  public get enforceSeqOrder() {
    return this.getStringAttribute('enforce_seq_order');
  }
  public set enforceSeqOrder(value: string) {
    this._enforceSeqOrder = value;
  }
  public resetEnforceSeqOrder() {
    this._enforceSeqOrder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceSeqOrderInput() {
    return this._enforceSeqOrder;
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

  // log_processing - computed: true, optional: true, required: false
  private _logProcessing?: string; 
  public get logProcessing() {
    return this.getStringAttribute('log_processing');
  }
  public set logProcessing(value: string) {
    this._logProcessing = value;
  }
  public resetLogProcessing() {
    this._logProcessing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProcessingInput() {
    return this._logProcessing;
  }

  // log_processor - computed: true, optional: true, required: false
  private _logProcessor?: string; 
  public get logProcessor() {
    return this.getStringAttribute('log_processor');
  }
  public set logProcessor(value: string) {
    this._logProcessor = value;
  }
  public resetLogProcessor() {
    this._logProcessor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProcessorInput() {
    return this._logProcessor;
  }

  // netflow_ver - computed: true, optional: true, required: false
  private _netflowVer?: string; 
  public get netflowVer() {
    return this.getStringAttribute('netflow_ver');
  }
  public set netflowVer(value: string) {
    this._netflowVer = value;
  }
  public resetNetflowVer() {
    this._netflowVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowVerInput() {
    return this._netflowVer;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // syslog_facility - computed: true, optional: true, required: false
  private _syslogFacility?: number; 
  public get syslogFacility() {
    return this.getNumberAttribute('syslog_facility');
  }
  public set syslogFacility(value: number) {
    this._syslogFacility = value;
  }
  public resetSyslogFacility() {
    this._syslogFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogFacilityInput() {
    return this._syslogFacility;
  }

  // syslog_severity - computed: true, optional: true, required: false
  private _syslogSeverity?: number; 
  public get syslogSeverity() {
    return this.getNumberAttribute('syslog_severity');
  }
  public set syslogSeverity(value: number) {
    this._syslogSeverity = value;
  }
  public resetSyslogSeverity() {
    this._syslogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSeverityInput() {
    return this._syslogSeverity;
  }

  // server_group - computed: false, optional: true, required: false
  private _serverGroup = new ObjectLogNpuserverServerGroupList(this, "server_group", false);
  public get serverGroup() {
    return this._serverGroup;
  }
  public putServerGroup(value: ObjectLogNpuserverServerGroup[] | cdktf.IResolvable) {
    this._serverGroup.internalValue = value;
  }
  public resetServerGroup() {
    this._serverGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverGroupInput() {
    return this._serverGroup.internalValue;
  }

  // server_info - computed: false, optional: true, required: false
  private _serverInfo = new ObjectLogNpuserverServerInfoList(this, "server_info", false);
  public get serverInfo() {
    return this._serverInfo;
  }
  public putServerInfo(value: ObjectLogNpuserverServerInfo[] | cdktf.IResolvable) {
    this._serverInfo.internalValue = value;
  }
  public resetServerInfo() {
    this._serverInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInfoInput() {
    return this._serverInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      enforce_seq_order: cdktf.stringToTerraform(this._enforceSeqOrder),
      id: cdktf.stringToTerraform(this._id),
      log_processing: cdktf.stringToTerraform(this._logProcessing),
      log_processor: cdktf.stringToTerraform(this._logProcessor),
      netflow_ver: cdktf.stringToTerraform(this._netflowVer),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      syslog_facility: cdktf.numberToTerraform(this._syslogFacility),
      syslog_severity: cdktf.numberToTerraform(this._syslogSeverity),
      server_group: cdktf.listMapper(objectLogNpuserverServerGroupToTerraform, true)(this._serverGroup.internalValue),
      server_info: cdktf.listMapper(objectLogNpuserverServerInfoToTerraform, true)(this._serverInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enforce_seq_order: {
        value: cdktf.stringToHclTerraform(this._enforceSeqOrder),
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
      log_processing: {
        value: cdktf.stringToHclTerraform(this._logProcessing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_processor: {
        value: cdktf.stringToHclTerraform(this._logProcessor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_ver: {
        value: cdktf.stringToHclTerraform(this._netflowVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_facility: {
        value: cdktf.numberToHclTerraform(this._syslogFacility),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      syslog_severity: {
        value: cdktf.numberToHclTerraform(this._syslogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      server_group: {
        value: cdktf.listMapperHcl(objectLogNpuserverServerGroupToHclTerraform, true)(this._serverGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectLogNpuserverServerGroupList",
      },
      server_info: {
        value: cdktf.listMapperHcl(objectLogNpuserverServerInfoToHclTerraform, true)(this._serverInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ObjectLogNpuserverServerInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
