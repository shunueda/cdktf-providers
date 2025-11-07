// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LogForwarderConfig extends cdktf.TerraformMetaArguments {
  /**
  * connection id of log-forwarder connection (elasticsearch, loki, syslog).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#connection_id LogForwarder#connection_id}
  */
  readonly connectionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#id LogForwarder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Unique name of the Log Forwarder.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#name LogForwarder#name}
  */
  readonly name: string;
  /**
  * Type of the Log Forwarder
  * 
  * Options:
  * elasticsearch
  * loki
  * syslog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#type LogForwarder#type}
  */
  readonly type: string;
  /**
  * elasticsearch_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#elasticsearch_params LogForwarder#elasticsearch_params}
  */
  readonly elasticsearchParams?: LogForwarderElasticsearchParams[] | cdktf.IResolvable;
  /**
  * loki_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#loki_params LogForwarder#loki_params}
  */
  readonly lokiParams?: LogForwarderLokiParams[] | cdktf.IResolvable;
  /**
  * syslog_params block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#syslog_params LogForwarder#syslog_params}
  */
  readonly syslogParams?: LogForwarderSyslogParams[] | cdktf.IResolvable;
}
export interface LogForwarderElasticsearchParamsIndices {
  /**
  * Index to be used for entries coming from the KMIP activity log. Logs will not be forwarded if index is not provided. Consult Elasticsearch documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#activity_kmip LogForwarder#activity_kmip}
  */
  readonly activityKmip?: string;
  /**
  * Index to be used for entries coming from the NAE activity log. Logs will not be forwarded if index is not provided. Consult Elasticsearch documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#activity_nae LogForwarder#activity_nae}
  */
  readonly activityNae?: string;
  /**
  * Index to be used for entries coming from the client audit log. Logs will not be forwarded if index is not provided. Consult Elasticsearch documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#client_audit_records LogForwarder#client_audit_records}
  */
  readonly clientAuditRecords?: string;
  /**
  * Index to be used for entries coming from the server audit log. Logs will not be forwarded if index is not provided. Consult Elasticsearch documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#server_audit_records LogForwarder#server_audit_records}
  */
  readonly serverAuditRecords?: string;
}

export function logForwarderElasticsearchParamsIndicesToTerraform(struct?: LogForwarderElasticsearchParamsIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_kmip: cdktf.stringToTerraform(struct!.activityKmip),
    activity_nae: cdktf.stringToTerraform(struct!.activityNae),
    client_audit_records: cdktf.stringToTerraform(struct!.clientAuditRecords),
    server_audit_records: cdktf.stringToTerraform(struct!.serverAuditRecords),
  }
}


export function logForwarderElasticsearchParamsIndicesToHclTerraform(struct?: LogForwarderElasticsearchParamsIndices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity_kmip: {
      value: cdktf.stringToHclTerraform(struct!.activityKmip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activity_nae: {
      value: cdktf.stringToHclTerraform(struct!.activityNae),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_audit_records: {
      value: cdktf.stringToHclTerraform(struct!.clientAuditRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_audit_records: {
      value: cdktf.stringToHclTerraform(struct!.serverAuditRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwarderElasticsearchParamsIndicesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwarderElasticsearchParamsIndices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityKmip !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityKmip = this._activityKmip;
    }
    if (this._activityNae !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityNae = this._activityNae;
    }
    if (this._clientAuditRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuditRecords = this._clientAuditRecords;
    }
    if (this._serverAuditRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuditRecords = this._serverAuditRecords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwarderElasticsearchParamsIndices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityKmip = undefined;
      this._activityNae = undefined;
      this._clientAuditRecords = undefined;
      this._serverAuditRecords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityKmip = value.activityKmip;
      this._activityNae = value.activityNae;
      this._clientAuditRecords = value.clientAuditRecords;
      this._serverAuditRecords = value.serverAuditRecords;
    }
  }

  // activity_kmip - computed: false, optional: true, required: false
  private _activityKmip?: string; 
  public get activityKmip() {
    return this.getStringAttribute('activity_kmip');
  }
  public set activityKmip(value: string) {
    this._activityKmip = value;
  }
  public resetActivityKmip() {
    this._activityKmip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityKmipInput() {
    return this._activityKmip;
  }

  // activity_nae - computed: false, optional: true, required: false
  private _activityNae?: string; 
  public get activityNae() {
    return this.getStringAttribute('activity_nae');
  }
  public set activityNae(value: string) {
    this._activityNae = value;
  }
  public resetActivityNae() {
    this._activityNae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityNaeInput() {
    return this._activityNae;
  }

  // client_audit_records - computed: false, optional: true, required: false
  private _clientAuditRecords?: string; 
  public get clientAuditRecords() {
    return this.getStringAttribute('client_audit_records');
  }
  public set clientAuditRecords(value: string) {
    this._clientAuditRecords = value;
  }
  public resetClientAuditRecords() {
    this._clientAuditRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuditRecordsInput() {
    return this._clientAuditRecords;
  }

  // server_audit_records - computed: false, optional: true, required: false
  private _serverAuditRecords?: string; 
  public get serverAuditRecords() {
    return this.getStringAttribute('server_audit_records');
  }
  public set serverAuditRecords(value: string) {
    this._serverAuditRecords = value;
  }
  public resetServerAuditRecords() {
    this._serverAuditRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuditRecordsInput() {
    return this._serverAuditRecords;
  }
}

export class LogForwarderElasticsearchParamsIndicesList extends cdktf.ComplexList {
  public internalValue? : LogForwarderElasticsearchParamsIndices[] | cdktf.IResolvable

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
  public get(index: number): LogForwarderElasticsearchParamsIndicesOutputReference {
    return new LogForwarderElasticsearchParamsIndicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogForwarderElasticsearchParams {
  /**
  * indices block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#indices LogForwarder#indices}
  */
  readonly indices?: LogForwarderElasticsearchParamsIndices[] | cdktf.IResolvable;
}

export function logForwarderElasticsearchParamsToTerraform(struct?: LogForwarderElasticsearchParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    indices: cdktf.listMapper(logForwarderElasticsearchParamsIndicesToTerraform, true)(struct!.indices),
  }
}


export function logForwarderElasticsearchParamsToHclTerraform(struct?: LogForwarderElasticsearchParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    indices: {
      value: cdktf.listMapperHcl(logForwarderElasticsearchParamsIndicesToHclTerraform, true)(struct!.indices),
      isBlock: true,
      type: "list",
      storageClassType: "LogForwarderElasticsearchParamsIndicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwarderElasticsearchParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwarderElasticsearchParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._indices?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.indices = this._indices?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwarderElasticsearchParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._indices.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._indices.internalValue = value.indices;
    }
  }

  // indices - computed: false, optional: true, required: false
  private _indices = new LogForwarderElasticsearchParamsIndicesList(this, "indices", false);
  public get indices() {
    return this._indices;
  }
  public putIndices(value: LogForwarderElasticsearchParamsIndices[] | cdktf.IResolvable) {
    this._indices.internalValue = value;
  }
  public resetIndices() {
    this._indices.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicesInput() {
    return this._indices.internalValue;
  }
}

export class LogForwarderElasticsearchParamsList extends cdktf.ComplexList {
  public internalValue? : LogForwarderElasticsearchParams[] | cdktf.IResolvable

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
  public get(index: number): LogForwarderElasticsearchParamsOutputReference {
    return new LogForwarderElasticsearchParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogForwarderLokiParamsLabels {
  /**
  * Label to be used for entries coming from the KMIP activity log. Logs will not be forwarded if label is not provided. Consult Loki documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#activity_kmip LogForwarder#activity_kmip}
  */
  readonly activityKmip?: string;
  /**
  * Label to be used for entries coming from the NAE activity log. Logs will not be forwarded if label is not provided. Consult Loki documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#activity_nae LogForwarder#activity_nae}
  */
  readonly activityNae?: string;
  /**
  * Label to be used for entries coming from the client audit log. Logs will not be forwarded if label is not provided. Consult Loki documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#client_audit_records LogForwarder#client_audit_records}
  */
  readonly clientAuditRecords?: string;
  /**
  * Label to be used for entries coming from the server audit log. Logs will not be forwarded if label is not provided. Consult Loki documentation for allowed characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#server_audit_records LogForwarder#server_audit_records}
  */
  readonly serverAuditRecords?: string;
}

export function logForwarderLokiParamsLabelsToTerraform(struct?: LogForwarderLokiParamsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_kmip: cdktf.stringToTerraform(struct!.activityKmip),
    activity_nae: cdktf.stringToTerraform(struct!.activityNae),
    client_audit_records: cdktf.stringToTerraform(struct!.clientAuditRecords),
    server_audit_records: cdktf.stringToTerraform(struct!.serverAuditRecords),
  }
}


export function logForwarderLokiParamsLabelsToHclTerraform(struct?: LogForwarderLokiParamsLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity_kmip: {
      value: cdktf.stringToHclTerraform(struct!.activityKmip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    activity_nae: {
      value: cdktf.stringToHclTerraform(struct!.activityNae),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_audit_records: {
      value: cdktf.stringToHclTerraform(struct!.clientAuditRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server_audit_records: {
      value: cdktf.stringToHclTerraform(struct!.serverAuditRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwarderLokiParamsLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwarderLokiParamsLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityKmip !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityKmip = this._activityKmip;
    }
    if (this._activityNae !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityNae = this._activityNae;
    }
    if (this._clientAuditRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuditRecords = this._clientAuditRecords;
    }
    if (this._serverAuditRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuditRecords = this._serverAuditRecords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwarderLokiParamsLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityKmip = undefined;
      this._activityNae = undefined;
      this._clientAuditRecords = undefined;
      this._serverAuditRecords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityKmip = value.activityKmip;
      this._activityNae = value.activityNae;
      this._clientAuditRecords = value.clientAuditRecords;
      this._serverAuditRecords = value.serverAuditRecords;
    }
  }

  // activity_kmip - computed: false, optional: true, required: false
  private _activityKmip?: string; 
  public get activityKmip() {
    return this.getStringAttribute('activity_kmip');
  }
  public set activityKmip(value: string) {
    this._activityKmip = value;
  }
  public resetActivityKmip() {
    this._activityKmip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityKmipInput() {
    return this._activityKmip;
  }

  // activity_nae - computed: false, optional: true, required: false
  private _activityNae?: string; 
  public get activityNae() {
    return this.getStringAttribute('activity_nae');
  }
  public set activityNae(value: string) {
    this._activityNae = value;
  }
  public resetActivityNae() {
    this._activityNae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityNaeInput() {
    return this._activityNae;
  }

  // client_audit_records - computed: false, optional: true, required: false
  private _clientAuditRecords?: string; 
  public get clientAuditRecords() {
    return this.getStringAttribute('client_audit_records');
  }
  public set clientAuditRecords(value: string) {
    this._clientAuditRecords = value;
  }
  public resetClientAuditRecords() {
    this._clientAuditRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuditRecordsInput() {
    return this._clientAuditRecords;
  }

  // server_audit_records - computed: false, optional: true, required: false
  private _serverAuditRecords?: string; 
  public get serverAuditRecords() {
    return this.getStringAttribute('server_audit_records');
  }
  public set serverAuditRecords(value: string) {
    this._serverAuditRecords = value;
  }
  public resetServerAuditRecords() {
    this._serverAuditRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuditRecordsInput() {
    return this._serverAuditRecords;
  }
}

export class LogForwarderLokiParamsLabelsList extends cdktf.ComplexList {
  public internalValue? : LogForwarderLokiParamsLabels[] | cdktf.IResolvable

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
  public get(index: number): LogForwarderLokiParamsLabelsOutputReference {
    return new LogForwarderLokiParamsLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogForwarderLokiParams {
  /**
  * labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#labels LogForwarder#labels}
  */
  readonly labels?: LogForwarderLokiParamsLabels[] | cdktf.IResolvable;
}

export function logForwarderLokiParamsToTerraform(struct?: LogForwarderLokiParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    labels: cdktf.listMapper(logForwarderLokiParamsLabelsToTerraform, true)(struct!.labels),
  }
}


export function logForwarderLokiParamsToHclTerraform(struct?: LogForwarderLokiParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    labels: {
      value: cdktf.listMapperHcl(logForwarderLokiParamsLabelsToHclTerraform, true)(struct!.labels),
      isBlock: true,
      type: "list",
      storageClassType: "LogForwarderLokiParamsLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwarderLokiParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwarderLokiParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._labels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwarderLokiParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._labels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._labels.internalValue = value.labels;
    }
  }

  // labels - computed: false, optional: true, required: false
  private _labels = new LogForwarderLokiParamsLabelsList(this, "labels", false);
  public get labels() {
    return this._labels;
  }
  public putLabels(value: LogForwarderLokiParamsLabels[] | cdktf.IResolvable) {
    this._labels.internalValue = value;
  }
  public resetLabels() {
    this._labels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels.internalValue;
  }
}

export class LogForwarderLokiParamsList extends cdktf.ComplexList {
  public internalValue? : LogForwarderLokiParams[] | cdktf.IResolvable

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
  public get(index: number): LogForwarderLokiParamsOutputReference {
    return new LogForwarderLokiParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogForwarderSyslogParamsForwardLogs {
  /**
  * When true, KMIP Activity logs will be forwarded. You need to enable KMIP Acitivity logs before forwarding them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#activity_kmip LogForwarder#activity_kmip}
  */
  readonly activityKmip?: boolean | cdktf.IResolvable;
  /**
  * When true, NAE Activity logs will be forwarded. You need to enable NAE Acitivity logs before forwarding them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#activity_nae LogForwarder#activity_nae}
  */
  readonly activityNae?: boolean | cdktf.IResolvable;
  /**
  * When true, client audit logs will be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#client_audit_records LogForwarder#client_audit_records}
  */
  readonly clientAuditRecords?: boolean | cdktf.IResolvable;
  /**
  * When true, server audit logs will be forwarded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#server_audit_records LogForwarder#server_audit_records}
  */
  readonly serverAuditRecords?: boolean | cdktf.IResolvable;
}

export function logForwarderSyslogParamsForwardLogsToTerraform(struct?: LogForwarderSyslogParamsForwardLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    activity_kmip: cdktf.booleanToTerraform(struct!.activityKmip),
    activity_nae: cdktf.booleanToTerraform(struct!.activityNae),
    client_audit_records: cdktf.booleanToTerraform(struct!.clientAuditRecords),
    server_audit_records: cdktf.booleanToTerraform(struct!.serverAuditRecords),
  }
}


export function logForwarderSyslogParamsForwardLogsToHclTerraform(struct?: LogForwarderSyslogParamsForwardLogs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    activity_kmip: {
      value: cdktf.booleanToHclTerraform(struct!.activityKmip),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    activity_nae: {
      value: cdktf.booleanToHclTerraform(struct!.activityNae),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    client_audit_records: {
      value: cdktf.booleanToHclTerraform(struct!.clientAuditRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    server_audit_records: {
      value: cdktf.booleanToHclTerraform(struct!.serverAuditRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwarderSyslogParamsForwardLogsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwarderSyslogParamsForwardLogs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activityKmip !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityKmip = this._activityKmip;
    }
    if (this._activityNae !== undefined) {
      hasAnyValues = true;
      internalValueResult.activityNae = this._activityNae;
    }
    if (this._clientAuditRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuditRecords = this._clientAuditRecords;
    }
    if (this._serverAuditRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.serverAuditRecords = this._serverAuditRecords;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwarderSyslogParamsForwardLogs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activityKmip = undefined;
      this._activityNae = undefined;
      this._clientAuditRecords = undefined;
      this._serverAuditRecords = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activityKmip = value.activityKmip;
      this._activityNae = value.activityNae;
      this._clientAuditRecords = value.clientAuditRecords;
      this._serverAuditRecords = value.serverAuditRecords;
    }
  }

  // activity_kmip - computed: false, optional: true, required: false
  private _activityKmip?: boolean | cdktf.IResolvable; 
  public get activityKmip() {
    return this.getBooleanAttribute('activity_kmip');
  }
  public set activityKmip(value: boolean | cdktf.IResolvable) {
    this._activityKmip = value;
  }
  public resetActivityKmip() {
    this._activityKmip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityKmipInput() {
    return this._activityKmip;
  }

  // activity_nae - computed: false, optional: true, required: false
  private _activityNae?: boolean | cdktf.IResolvable; 
  public get activityNae() {
    return this.getBooleanAttribute('activity_nae');
  }
  public set activityNae(value: boolean | cdktf.IResolvable) {
    this._activityNae = value;
  }
  public resetActivityNae() {
    this._activityNae = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityNaeInput() {
    return this._activityNae;
  }

  // client_audit_records - computed: false, optional: true, required: false
  private _clientAuditRecords?: boolean | cdktf.IResolvable; 
  public get clientAuditRecords() {
    return this.getBooleanAttribute('client_audit_records');
  }
  public set clientAuditRecords(value: boolean | cdktf.IResolvable) {
    this._clientAuditRecords = value;
  }
  public resetClientAuditRecords() {
    this._clientAuditRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuditRecordsInput() {
    return this._clientAuditRecords;
  }

  // server_audit_records - computed: false, optional: true, required: false
  private _serverAuditRecords?: boolean | cdktf.IResolvable; 
  public get serverAuditRecords() {
    return this.getBooleanAttribute('server_audit_records');
  }
  public set serverAuditRecords(value: boolean | cdktf.IResolvable) {
    this._serverAuditRecords = value;
  }
  public resetServerAuditRecords() {
    this._serverAuditRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverAuditRecordsInput() {
    return this._serverAuditRecords;
  }
}

export class LogForwarderSyslogParamsForwardLogsList extends cdktf.ComplexList {
  public internalValue? : LogForwarderSyslogParamsForwardLogs[] | cdktf.IResolvable

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
  public get(index: number): LogForwarderSyslogParamsForwardLogsOutputReference {
    return new LogForwarderSyslogParamsForwardLogsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface LogForwarderSyslogParams {
  /**
  * forward_logs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#forward_logs LogForwarder#forward_logs}
  */
  readonly forwardLogs?: LogForwarderSyslogParamsForwardLogs[] | cdktf.IResolvable;
}

export function logForwarderSyslogParamsToTerraform(struct?: LogForwarderSyslogParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forward_logs: cdktf.listMapper(logForwarderSyslogParamsForwardLogsToTerraform, true)(struct!.forwardLogs),
  }
}


export function logForwarderSyslogParamsToHclTerraform(struct?: LogForwarderSyslogParams | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forward_logs: {
      value: cdktf.listMapperHcl(logForwarderSyslogParamsForwardLogsToHclTerraform, true)(struct!.forwardLogs),
      isBlock: true,
      type: "list",
      storageClassType: "LogForwarderSyslogParamsForwardLogsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LogForwarderSyslogParamsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LogForwarderSyslogParams | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forwardLogs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forwardLogs = this._forwardLogs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LogForwarderSyslogParams | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forwardLogs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forwardLogs.internalValue = value.forwardLogs;
    }
  }

  // forward_logs - computed: false, optional: true, required: false
  private _forwardLogs = new LogForwarderSyslogParamsForwardLogsList(this, "forward_logs", false);
  public get forwardLogs() {
    return this._forwardLogs;
  }
  public putForwardLogs(value: LogForwarderSyslogParamsForwardLogs[] | cdktf.IResolvable) {
    this._forwardLogs.internalValue = value;
  }
  public resetForwardLogs() {
    this._forwardLogs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardLogsInput() {
    return this._forwardLogs.internalValue;
  }
}

export class LogForwarderSyslogParamsList extends cdktf.ComplexList {
  public internalValue? : LogForwarderSyslogParams[] | cdktf.IResolvable

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
  public get(index: number): LogForwarderSyslogParamsOutputReference {
    return new LogForwarderSyslogParamsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder ciphertrust_log_forwarder}
*/
export class LogForwarder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_log_forwarder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LogForwarder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LogForwarder to import
  * @param importFromId The id of the existing LogForwarder that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LogForwarder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_log_forwarder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/resources/log_forwarder ciphertrust_log_forwarder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LogForwarderConfig
  */
  public constructor(scope: Construct, id: string, config: LogForwarderConfig) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_log_forwarder',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._id = config.id;
    this._name = config.name;
    this._type = config.type;
    this._elasticsearchParams.internalValue = config.elasticsearchParams;
    this._lokiParams.internalValue = config.lokiParams;
    this._syslogParams.internalValue = config.syslogParams;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: false, optional: false, required: true
  private _connectionId?: string; 
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }
  public set connectionId(value: string) {
    this._connectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // elasticsearch_params - computed: false, optional: true, required: false
  private _elasticsearchParams = new LogForwarderElasticsearchParamsList(this, "elasticsearch_params", false);
  public get elasticsearchParams() {
    return this._elasticsearchParams;
  }
  public putElasticsearchParams(value: LogForwarderElasticsearchParams[] | cdktf.IResolvable) {
    this._elasticsearchParams.internalValue = value;
  }
  public resetElasticsearchParams() {
    this._elasticsearchParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticsearchParamsInput() {
    return this._elasticsearchParams.internalValue;
  }

  // loki_params - computed: false, optional: true, required: false
  private _lokiParams = new LogForwarderLokiParamsList(this, "loki_params", false);
  public get lokiParams() {
    return this._lokiParams;
  }
  public putLokiParams(value: LogForwarderLokiParams[] | cdktf.IResolvable) {
    this._lokiParams.internalValue = value;
  }
  public resetLokiParams() {
    this._lokiParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lokiParamsInput() {
    return this._lokiParams.internalValue;
  }

  // syslog_params - computed: false, optional: true, required: false
  private _syslogParams = new LogForwarderSyslogParamsList(this, "syslog_params", false);
  public get syslogParams() {
    return this._syslogParams;
  }
  public putSyslogParams(value: LogForwarderSyslogParams[] | cdktf.IResolvable) {
    this._syslogParams.internalValue = value;
  }
  public resetSyslogParams() {
    this._syslogParams.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogParamsInput() {
    return this._syslogParams.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.stringToTerraform(this._connectionId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      type: cdktf.stringToTerraform(this._type),
      elasticsearch_params: cdktf.listMapper(logForwarderElasticsearchParamsToTerraform, true)(this._elasticsearchParams.internalValue),
      loki_params: cdktf.listMapper(logForwarderLokiParamsToTerraform, true)(this._lokiParams.internalValue),
      syslog_params: cdktf.listMapper(logForwarderSyslogParamsToTerraform, true)(this._syslogParams.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.stringToHclTerraform(this._connectionId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      elasticsearch_params: {
        value: cdktf.listMapperHcl(logForwarderElasticsearchParamsToHclTerraform, true)(this._elasticsearchParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogForwarderElasticsearchParamsList",
      },
      loki_params: {
        value: cdktf.listMapperHcl(logForwarderLokiParamsToHclTerraform, true)(this._lokiParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogForwarderLokiParamsList",
      },
      syslog_params: {
        value: cdktf.listMapperHcl(logForwarderSyslogParamsToHclTerraform, true)(this._syslogParams.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LogForwarderSyslogParamsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
