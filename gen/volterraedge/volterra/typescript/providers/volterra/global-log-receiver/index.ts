// generated from terraform resource schema

import { GlobalLogReceiverAwsCloudWatchReceiver, 
globalLogReceiverAwsCloudWatchReceiverToTerraform, 
globalLogReceiverAwsCloudWatchReceiverToHclTerraform, 
GlobalLogReceiverAwsCloudWatchReceiverOutputReference, 
GlobalLogReceiverAzureEventHubsReceiver, 
globalLogReceiverAzureEventHubsReceiverToTerraform, 
globalLogReceiverAzureEventHubsReceiverToHclTerraform, 
GlobalLogReceiverAzureEventHubsReceiverOutputReference, 
GlobalLogReceiverAzureReceiver, 
globalLogReceiverAzureReceiverToTerraform, 
globalLogReceiverAzureReceiverToHclTerraform, 
GlobalLogReceiverAzureReceiverOutputReference, 
GlobalLogReceiverDatadogReceiver, 
globalLogReceiverDatadogReceiverToTerraform, 
globalLogReceiverDatadogReceiverToHclTerraform, 
GlobalLogReceiverDatadogReceiverOutputReference, 
GlobalLogReceiverElasticReceiver, 
globalLogReceiverElasticReceiverToTerraform, 
globalLogReceiverElasticReceiverToHclTerraform, 
GlobalLogReceiverElasticReceiverOutputReference, 
GlobalLogReceiverGcpBucketReceiver, 
globalLogReceiverGcpBucketReceiverToTerraform, 
globalLogReceiverGcpBucketReceiverToHclTerraform, 
GlobalLogReceiverGcpBucketReceiverOutputReference, 
GlobalLogReceiverHttpReceiver, 
globalLogReceiverHttpReceiverToTerraform, 
globalLogReceiverHttpReceiverToHclTerraform, 
GlobalLogReceiverHttpReceiverOutputReference, 
GlobalLogReceiverKafkaReceiver, 
globalLogReceiverKafkaReceiverToTerraform, 
globalLogReceiverKafkaReceiverToHclTerraform, 
GlobalLogReceiverKafkaReceiverOutputReference, 
GlobalLogReceiverNewRelicReceiver, 
globalLogReceiverNewRelicReceiverToTerraform, 
globalLogReceiverNewRelicReceiverToHclTerraform, 
GlobalLogReceiverNewRelicReceiverOutputReference, 
GlobalLogReceiverNsListStruct, 
globalLogReceiverNsListStructToTerraform, 
globalLogReceiverNsListStructToHclTerraform, 
GlobalLogReceiverNsListStructOutputReference, 
GlobalLogReceiverQradarReceiver, 
globalLogReceiverQradarReceiverToTerraform, 
globalLogReceiverQradarReceiverToHclTerraform, 
GlobalLogReceiverQradarReceiverOutputReference, 
GlobalLogReceiverS3Receiver, 
globalLogReceiverS3ReceiverToTerraform, 
globalLogReceiverS3ReceiverToHclTerraform, 
GlobalLogReceiverS3ReceiverOutputReference, 
GlobalLogReceiverSplunkReceiver, 
globalLogReceiverSplunkReceiverToTerraform, 
globalLogReceiverSplunkReceiverToHclTerraform, 
GlobalLogReceiverSplunkReceiverOutputReference, 
GlobalLogReceiverSumoLogicReceiver, 
globalLogReceiverSumoLogicReceiverToTerraform, 
globalLogReceiverSumoLogicReceiverToHclTerraform, 
GlobalLogReceiverSumoLogicReceiverOutputReference} from './index-structs'
export * from './index-structs'
import { Construct } from 'constructs';
import * as cdktf from 'cdktf';
export interface GlobalLogReceiverConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#annotations GlobalLogReceiver#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#audit_logs GlobalLogReceiver#audit_logs}
  */
  readonly auditLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#description GlobalLogReceiver#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#disable GlobalLogReceiver#disable}
  */
  readonly disable?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#dns_logs GlobalLogReceiver#dns_logs}
  */
  readonly dnsLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#id GlobalLogReceiver#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#labels GlobalLogReceiver#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#name GlobalLogReceiver#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#namespace GlobalLogReceiver#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#ns_all GlobalLogReceiver#ns_all}
  */
  readonly nsAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#ns_current GlobalLogReceiver#ns_current}
  */
  readonly nsCurrent?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#ns_system GlobalLogReceiver#ns_system}
  */
  readonly nsSystem?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#request_logs GlobalLogReceiver#request_logs}
  */
  readonly requestLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#security_events GlobalLogReceiver#security_events}
  */
  readonly securityEvents?: boolean | cdktf.IResolvable;
  /**
  * aws_cloud_watch_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#aws_cloud_watch_receiver GlobalLogReceiver#aws_cloud_watch_receiver}
  */
  readonly awsCloudWatchReceiver?: GlobalLogReceiverAwsCloudWatchReceiver;
  /**
  * azure_event_hubs_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#azure_event_hubs_receiver GlobalLogReceiver#azure_event_hubs_receiver}
  */
  readonly azureEventHubsReceiver?: GlobalLogReceiverAzureEventHubsReceiver;
  /**
  * azure_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#azure_receiver GlobalLogReceiver#azure_receiver}
  */
  readonly azureReceiver?: GlobalLogReceiverAzureReceiver;
  /**
  * datadog_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#datadog_receiver GlobalLogReceiver#datadog_receiver}
  */
  readonly datadogReceiver?: GlobalLogReceiverDatadogReceiver;
  /**
  * elastic_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#elastic_receiver GlobalLogReceiver#elastic_receiver}
  */
  readonly elasticReceiver?: GlobalLogReceiverElasticReceiver;
  /**
  * gcp_bucket_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#gcp_bucket_receiver GlobalLogReceiver#gcp_bucket_receiver}
  */
  readonly gcpBucketReceiver?: GlobalLogReceiverGcpBucketReceiver;
  /**
  * http_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#http_receiver GlobalLogReceiver#http_receiver}
  */
  readonly httpReceiver?: GlobalLogReceiverHttpReceiver;
  /**
  * kafka_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#kafka_receiver GlobalLogReceiver#kafka_receiver}
  */
  readonly kafkaReceiver?: GlobalLogReceiverKafkaReceiver;
  /**
  * new_relic_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#new_relic_receiver GlobalLogReceiver#new_relic_receiver}
  */
  readonly newRelicReceiver?: GlobalLogReceiverNewRelicReceiver;
  /**
  * ns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#ns_list GlobalLogReceiver#ns_list}
  */
  readonly nsList?: GlobalLogReceiverNsListStruct;
  /**
  * qradar_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#qradar_receiver GlobalLogReceiver#qradar_receiver}
  */
  readonly qradarReceiver?: GlobalLogReceiverQradarReceiver;
  /**
  * s3_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#s3_receiver GlobalLogReceiver#s3_receiver}
  */
  readonly s3Receiver?: GlobalLogReceiverS3Receiver;
  /**
  * splunk_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#splunk_receiver GlobalLogReceiver#splunk_receiver}
  */
  readonly splunkReceiver?: GlobalLogReceiverSplunkReceiver;
  /**
  * sumo_logic_receiver block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#sumo_logic_receiver GlobalLogReceiver#sumo_logic_receiver}
  */
  readonly sumoLogicReceiver?: GlobalLogReceiverSumoLogicReceiver;
}

/**
* Represents a {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver volterra_global_log_receiver}
*/
export class GlobalLogReceiver extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "volterra_global_log_receiver";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalLogReceiver resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalLogReceiver to import
  * @param importFromId The id of the existing GlobalLogReceiver that should be imported. Refer to the {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalLogReceiver to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "volterra_global_log_receiver", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/volterraedge/volterra/0.11.46/docs/resources/global_log_receiver volterra_global_log_receiver} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalLogReceiverConfig
  */
  public constructor(scope: Construct, id: string, config: GlobalLogReceiverConfig) {
    super(scope, id, {
      terraformResourceType: 'volterra_global_log_receiver',
      terraformGeneratorMetadata: {
        providerName: 'volterra',
        providerVersion: '0.11.46',
        providerVersionConstraint: '0.11.46'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotations = config.annotations;
    this._auditLogs = config.auditLogs;
    this._description = config.description;
    this._disable = config.disable;
    this._dnsLogs = config.dnsLogs;
    this._id = config.id;
    this._labels = config.labels;
    this._name = config.name;
    this._namespace = config.namespace;
    this._nsAll = config.nsAll;
    this._nsCurrent = config.nsCurrent;
    this._nsSystem = config.nsSystem;
    this._requestLogs = config.requestLogs;
    this._securityEvents = config.securityEvents;
    this._awsCloudWatchReceiver.internalValue = config.awsCloudWatchReceiver;
    this._azureEventHubsReceiver.internalValue = config.azureEventHubsReceiver;
    this._azureReceiver.internalValue = config.azureReceiver;
    this._datadogReceiver.internalValue = config.datadogReceiver;
    this._elasticReceiver.internalValue = config.elasticReceiver;
    this._gcpBucketReceiver.internalValue = config.gcpBucketReceiver;
    this._httpReceiver.internalValue = config.httpReceiver;
    this._kafkaReceiver.internalValue = config.kafkaReceiver;
    this._newRelicReceiver.internalValue = config.newRelicReceiver;
    this._nsList.internalValue = config.nsList;
    this._qradarReceiver.internalValue = config.qradarReceiver;
    this._s3Receiver.internalValue = config.s3Receiver;
    this._splunkReceiver.internalValue = config.splunkReceiver;
    this._sumoLogicReceiver.internalValue = config.sumoLogicReceiver;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
  }

  // audit_logs - computed: false, optional: true, required: false
  private _auditLogs?: boolean | cdktf.IResolvable; 
  public get auditLogs() {
    return this.getBooleanAttribute('audit_logs');
  }
  public set auditLogs(value: boolean | cdktf.IResolvable) {
    this._auditLogs = value;
  }
  public resetAuditLogs() {
    this._auditLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditLogsInput() {
    return this._auditLogs;
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

  // disable - computed: false, optional: true, required: false
  private _disable?: boolean | cdktf.IResolvable; 
  public get disable() {
    return this.getBooleanAttribute('disable');
  }
  public set disable(value: boolean | cdktf.IResolvable) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
  }

  // dns_logs - computed: false, optional: true, required: false
  private _dnsLogs?: boolean | cdktf.IResolvable; 
  public get dnsLogs() {
    return this.getBooleanAttribute('dns_logs');
  }
  public set dnsLogs(value: boolean | cdktf.IResolvable) {
    this._dnsLogs = value;
  }
  public resetDnsLogs() {
    this._dnsLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsLogsInput() {
    return this._dnsLogs;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // ns_all - computed: false, optional: true, required: false
  private _nsAll?: boolean | cdktf.IResolvable; 
  public get nsAll() {
    return this.getBooleanAttribute('ns_all');
  }
  public set nsAll(value: boolean | cdktf.IResolvable) {
    this._nsAll = value;
  }
  public resetNsAll() {
    this._nsAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsAllInput() {
    return this._nsAll;
  }

  // ns_current - computed: false, optional: true, required: false
  private _nsCurrent?: boolean | cdktf.IResolvable; 
  public get nsCurrent() {
    return this.getBooleanAttribute('ns_current');
  }
  public set nsCurrent(value: boolean | cdktf.IResolvable) {
    this._nsCurrent = value;
  }
  public resetNsCurrent() {
    this._nsCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsCurrentInput() {
    return this._nsCurrent;
  }

  // ns_system - computed: false, optional: true, required: false
  private _nsSystem?: boolean | cdktf.IResolvable; 
  public get nsSystem() {
    return this.getBooleanAttribute('ns_system');
  }
  public set nsSystem(value: boolean | cdktf.IResolvable) {
    this._nsSystem = value;
  }
  public resetNsSystem() {
    this._nsSystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsSystemInput() {
    return this._nsSystem;
  }

  // request_logs - computed: false, optional: true, required: false
  private _requestLogs?: boolean | cdktf.IResolvable; 
  public get requestLogs() {
    return this.getBooleanAttribute('request_logs');
  }
  public set requestLogs(value: boolean | cdktf.IResolvable) {
    this._requestLogs = value;
  }
  public resetRequestLogs() {
    this._requestLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestLogsInput() {
    return this._requestLogs;
  }

  // security_events - computed: false, optional: true, required: false
  private _securityEvents?: boolean | cdktf.IResolvable; 
  public get securityEvents() {
    return this.getBooleanAttribute('security_events');
  }
  public set securityEvents(value: boolean | cdktf.IResolvable) {
    this._securityEvents = value;
  }
  public resetSecurityEvents() {
    this._securityEvents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityEventsInput() {
    return this._securityEvents;
  }

  // aws_cloud_watch_receiver - computed: false, optional: true, required: false
  private _awsCloudWatchReceiver = new GlobalLogReceiverAwsCloudWatchReceiverOutputReference(this, "aws_cloud_watch_receiver");
  public get awsCloudWatchReceiver() {
    return this._awsCloudWatchReceiver;
  }
  public putAwsCloudWatchReceiver(value: GlobalLogReceiverAwsCloudWatchReceiver) {
    this._awsCloudWatchReceiver.internalValue = value;
  }
  public resetAwsCloudWatchReceiver() {
    this._awsCloudWatchReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsCloudWatchReceiverInput() {
    return this._awsCloudWatchReceiver.internalValue;
  }

  // azure_event_hubs_receiver - computed: false, optional: true, required: false
  private _azureEventHubsReceiver = new GlobalLogReceiverAzureEventHubsReceiverOutputReference(this, "azure_event_hubs_receiver");
  public get azureEventHubsReceiver() {
    return this._azureEventHubsReceiver;
  }
  public putAzureEventHubsReceiver(value: GlobalLogReceiverAzureEventHubsReceiver) {
    this._azureEventHubsReceiver.internalValue = value;
  }
  public resetAzureEventHubsReceiver() {
    this._azureEventHubsReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureEventHubsReceiverInput() {
    return this._azureEventHubsReceiver.internalValue;
  }

  // azure_receiver - computed: false, optional: true, required: false
  private _azureReceiver = new GlobalLogReceiverAzureReceiverOutputReference(this, "azure_receiver");
  public get azureReceiver() {
    return this._azureReceiver;
  }
  public putAzureReceiver(value: GlobalLogReceiverAzureReceiver) {
    this._azureReceiver.internalValue = value;
  }
  public resetAzureReceiver() {
    this._azureReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureReceiverInput() {
    return this._azureReceiver.internalValue;
  }

  // datadog_receiver - computed: false, optional: true, required: false
  private _datadogReceiver = new GlobalLogReceiverDatadogReceiverOutputReference(this, "datadog_receiver");
  public get datadogReceiver() {
    return this._datadogReceiver;
  }
  public putDatadogReceiver(value: GlobalLogReceiverDatadogReceiver) {
    this._datadogReceiver.internalValue = value;
  }
  public resetDatadogReceiver() {
    this._datadogReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datadogReceiverInput() {
    return this._datadogReceiver.internalValue;
  }

  // elastic_receiver - computed: false, optional: true, required: false
  private _elasticReceiver = new GlobalLogReceiverElasticReceiverOutputReference(this, "elastic_receiver");
  public get elasticReceiver() {
    return this._elasticReceiver;
  }
  public putElasticReceiver(value: GlobalLogReceiverElasticReceiver) {
    this._elasticReceiver.internalValue = value;
  }
  public resetElasticReceiver() {
    this._elasticReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elasticReceiverInput() {
    return this._elasticReceiver.internalValue;
  }

  // gcp_bucket_receiver - computed: false, optional: true, required: false
  private _gcpBucketReceiver = new GlobalLogReceiverGcpBucketReceiverOutputReference(this, "gcp_bucket_receiver");
  public get gcpBucketReceiver() {
    return this._gcpBucketReceiver;
  }
  public putGcpBucketReceiver(value: GlobalLogReceiverGcpBucketReceiver) {
    this._gcpBucketReceiver.internalValue = value;
  }
  public resetGcpBucketReceiver() {
    this._gcpBucketReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpBucketReceiverInput() {
    return this._gcpBucketReceiver.internalValue;
  }

  // http_receiver - computed: false, optional: true, required: false
  private _httpReceiver = new GlobalLogReceiverHttpReceiverOutputReference(this, "http_receiver");
  public get httpReceiver() {
    return this._httpReceiver;
  }
  public putHttpReceiver(value: GlobalLogReceiverHttpReceiver) {
    this._httpReceiver.internalValue = value;
  }
  public resetHttpReceiver() {
    this._httpReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpReceiverInput() {
    return this._httpReceiver.internalValue;
  }

  // kafka_receiver - computed: false, optional: true, required: false
  private _kafkaReceiver = new GlobalLogReceiverKafkaReceiverOutputReference(this, "kafka_receiver");
  public get kafkaReceiver() {
    return this._kafkaReceiver;
  }
  public putKafkaReceiver(value: GlobalLogReceiverKafkaReceiver) {
    this._kafkaReceiver.internalValue = value;
  }
  public resetKafkaReceiver() {
    this._kafkaReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kafkaReceiverInput() {
    return this._kafkaReceiver.internalValue;
  }

  // new_relic_receiver - computed: false, optional: true, required: false
  private _newRelicReceiver = new GlobalLogReceiverNewRelicReceiverOutputReference(this, "new_relic_receiver");
  public get newRelicReceiver() {
    return this._newRelicReceiver;
  }
  public putNewRelicReceiver(value: GlobalLogReceiverNewRelicReceiver) {
    this._newRelicReceiver.internalValue = value;
  }
  public resetNewRelicReceiver() {
    this._newRelicReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newRelicReceiverInput() {
    return this._newRelicReceiver.internalValue;
  }

  // ns_list - computed: false, optional: true, required: false
  private _nsList = new GlobalLogReceiverNsListStructOutputReference(this, "ns_list");
  public get nsList() {
    return this._nsList;
  }
  public putNsList(value: GlobalLogReceiverNsListStruct) {
    this._nsList.internalValue = value;
  }
  public resetNsList() {
    this._nsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsListInput() {
    return this._nsList.internalValue;
  }

  // qradar_receiver - computed: false, optional: true, required: false
  private _qradarReceiver = new GlobalLogReceiverQradarReceiverOutputReference(this, "qradar_receiver");
  public get qradarReceiver() {
    return this._qradarReceiver;
  }
  public putQradarReceiver(value: GlobalLogReceiverQradarReceiver) {
    this._qradarReceiver.internalValue = value;
  }
  public resetQradarReceiver() {
    this._qradarReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qradarReceiverInput() {
    return this._qradarReceiver.internalValue;
  }

  // s3_receiver - computed: false, optional: true, required: false
  private _s3Receiver = new GlobalLogReceiverS3ReceiverOutputReference(this, "s3_receiver");
  public get s3Receiver() {
    return this._s3Receiver;
  }
  public putS3Receiver(value: GlobalLogReceiverS3Receiver) {
    this._s3Receiver.internalValue = value;
  }
  public resetS3Receiver() {
    this._s3Receiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3ReceiverInput() {
    return this._s3Receiver.internalValue;
  }

  // splunk_receiver - computed: false, optional: true, required: false
  private _splunkReceiver = new GlobalLogReceiverSplunkReceiverOutputReference(this, "splunk_receiver");
  public get splunkReceiver() {
    return this._splunkReceiver;
  }
  public putSplunkReceiver(value: GlobalLogReceiverSplunkReceiver) {
    this._splunkReceiver.internalValue = value;
  }
  public resetSplunkReceiver() {
    this._splunkReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splunkReceiverInput() {
    return this._splunkReceiver.internalValue;
  }

  // sumo_logic_receiver - computed: false, optional: true, required: false
  private _sumoLogicReceiver = new GlobalLogReceiverSumoLogicReceiverOutputReference(this, "sumo_logic_receiver");
  public get sumoLogicReceiver() {
    return this._sumoLogicReceiver;
  }
  public putSumoLogicReceiver(value: GlobalLogReceiverSumoLogicReceiver) {
    this._sumoLogicReceiver.internalValue = value;
  }
  public resetSumoLogicReceiver() {
    this._sumoLogicReceiver.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumoLogicReceiverInput() {
    return this._sumoLogicReceiver.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotations: cdktf.hashMapper(cdktf.stringToTerraform)(this._annotations),
      audit_logs: cdktf.booleanToTerraform(this._auditLogs),
      description: cdktf.stringToTerraform(this._description),
      disable: cdktf.booleanToTerraform(this._disable),
      dns_logs: cdktf.booleanToTerraform(this._dnsLogs),
      id: cdktf.stringToTerraform(this._id),
      labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._labels),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      ns_all: cdktf.booleanToTerraform(this._nsAll),
      ns_current: cdktf.booleanToTerraform(this._nsCurrent),
      ns_system: cdktf.booleanToTerraform(this._nsSystem),
      request_logs: cdktf.booleanToTerraform(this._requestLogs),
      security_events: cdktf.booleanToTerraform(this._securityEvents),
      aws_cloud_watch_receiver: globalLogReceiverAwsCloudWatchReceiverToTerraform(this._awsCloudWatchReceiver.internalValue),
      azure_event_hubs_receiver: globalLogReceiverAzureEventHubsReceiverToTerraform(this._azureEventHubsReceiver.internalValue),
      azure_receiver: globalLogReceiverAzureReceiverToTerraform(this._azureReceiver.internalValue),
      datadog_receiver: globalLogReceiverDatadogReceiverToTerraform(this._datadogReceiver.internalValue),
      elastic_receiver: globalLogReceiverElasticReceiverToTerraform(this._elasticReceiver.internalValue),
      gcp_bucket_receiver: globalLogReceiverGcpBucketReceiverToTerraform(this._gcpBucketReceiver.internalValue),
      http_receiver: globalLogReceiverHttpReceiverToTerraform(this._httpReceiver.internalValue),
      kafka_receiver: globalLogReceiverKafkaReceiverToTerraform(this._kafkaReceiver.internalValue),
      new_relic_receiver: globalLogReceiverNewRelicReceiverToTerraform(this._newRelicReceiver.internalValue),
      ns_list: globalLogReceiverNsListStructToTerraform(this._nsList.internalValue),
      qradar_receiver: globalLogReceiverQradarReceiverToTerraform(this._qradarReceiver.internalValue),
      s3_receiver: globalLogReceiverS3ReceiverToTerraform(this._s3Receiver.internalValue),
      splunk_receiver: globalLogReceiverSplunkReceiverToTerraform(this._splunkReceiver.internalValue),
      sumo_logic_receiver: globalLogReceiverSumoLogicReceiverToTerraform(this._sumoLogicReceiver.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotations: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._annotations),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      audit_logs: {
        value: cdktf.booleanToHclTerraform(this._auditLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable: {
        value: cdktf.booleanToHclTerraform(this._disable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dns_logs: {
        value: cdktf.booleanToHclTerraform(this._dnsLogs),
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
      labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._labels),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ns_all: {
        value: cdktf.booleanToHclTerraform(this._nsAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ns_current: {
        value: cdktf.booleanToHclTerraform(this._nsCurrent),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ns_system: {
        value: cdktf.booleanToHclTerraform(this._nsSystem),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      request_logs: {
        value: cdktf.booleanToHclTerraform(this._requestLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      security_events: {
        value: cdktf.booleanToHclTerraform(this._securityEvents),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aws_cloud_watch_receiver: {
        value: globalLogReceiverAwsCloudWatchReceiverToHclTerraform(this._awsCloudWatchReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverAwsCloudWatchReceiverList",
      },
      azure_event_hubs_receiver: {
        value: globalLogReceiverAzureEventHubsReceiverToHclTerraform(this._azureEventHubsReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverAzureEventHubsReceiverList",
      },
      azure_receiver: {
        value: globalLogReceiverAzureReceiverToHclTerraform(this._azureReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverAzureReceiverList",
      },
      datadog_receiver: {
        value: globalLogReceiverDatadogReceiverToHclTerraform(this._datadogReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverDatadogReceiverList",
      },
      elastic_receiver: {
        value: globalLogReceiverElasticReceiverToHclTerraform(this._elasticReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverElasticReceiverList",
      },
      gcp_bucket_receiver: {
        value: globalLogReceiverGcpBucketReceiverToHclTerraform(this._gcpBucketReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverGcpBucketReceiverList",
      },
      http_receiver: {
        value: globalLogReceiverHttpReceiverToHclTerraform(this._httpReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverHttpReceiverList",
      },
      kafka_receiver: {
        value: globalLogReceiverKafkaReceiverToHclTerraform(this._kafkaReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverKafkaReceiverList",
      },
      new_relic_receiver: {
        value: globalLogReceiverNewRelicReceiverToHclTerraform(this._newRelicReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverNewRelicReceiverList",
      },
      ns_list: {
        value: globalLogReceiverNsListStructToHclTerraform(this._nsList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverNsListStructList",
      },
      qradar_receiver: {
        value: globalLogReceiverQradarReceiverToHclTerraform(this._qradarReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverQradarReceiverList",
      },
      s3_receiver: {
        value: globalLogReceiverS3ReceiverToHclTerraform(this._s3Receiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverS3ReceiverList",
      },
      splunk_receiver: {
        value: globalLogReceiverSplunkReceiverToHclTerraform(this._splunkReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverSplunkReceiverList",
      },
      sumo_logic_receiver: {
        value: globalLogReceiverSumoLogicReceiverToHclTerraform(this._sumoLogicReceiver.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "GlobalLogReceiverSumoLogicReceiverList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
