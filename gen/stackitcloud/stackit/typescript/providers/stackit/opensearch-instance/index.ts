// https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OpensearchInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#name OpensearchInstance#name}
  */
  readonly name: string;
  /**
  * Configuration parameters. Please note that removing a previously configured field from your Terraform configuration won't replace its value in the API. To update a previously configured field, explicitly set a new value for it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#parameters OpensearchInstance#parameters}
  */
  readonly parameters?: OpensearchInstanceParameters;
  /**
  * The selected plan name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#plan_name OpensearchInstance#plan_name}
  */
  readonly planName: string;
  /**
  * STACKIT project ID to which the instance is associated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#project_id OpensearchInstance#project_id}
  */
  readonly projectId: string;
  /**
  * The service version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#version OpensearchInstance#version}
  */
  readonly version: string;
}
export interface OpensearchInstanceParameters {
  /**
  * Enable monitoring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#enable_monitoring OpensearchInstance#enable_monitoring}
  */
  readonly enableMonitoring?: boolean | cdktf.IResolvable;
  /**
  * If set, monitoring with Graphite will be enabled. Expects the host and port where the Graphite metrics should be sent to (host:port).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#graphite OpensearchInstance#graphite}
  */
  readonly graphite?: string;
  /**
  * The garbage collector to use for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#java_garbage_collector OpensearchInstance#java_garbage_collector}
  */
  readonly javaGarbageCollector?: string;
  /**
  * The amount of memory (in MB) allocated as heap by the JVM for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#java_heapspace OpensearchInstance#java_heapspace}
  */
  readonly javaHeapspace?: number;
  /**
  * The amount of memory (in MB) used by the JVM to store metadata for OpenSearch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#java_maxmetaspace OpensearchInstance#java_maxmetaspace}
  */
  readonly javaMaxmetaspace?: number;
  /**
  * The maximum disk threshold in MB. If the disk usage exceeds this threshold, the instance will be stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#max_disk_threshold OpensearchInstance#max_disk_threshold}
  */
  readonly maxDiskThreshold?: number;
  /**
  * The frequency in seconds at which metrics are emitted (in seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#metrics_frequency OpensearchInstance#metrics_frequency}
  */
  readonly metricsFrequency?: number;
  /**
  * The prefix for the metrics. Could be useful when using Graphite monitoring to prefix the metrics with a certain value, like an API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#metrics_prefix OpensearchInstance#metrics_prefix}
  */
  readonly metricsPrefix?: string;
  /**
  * The ID of the STACKIT monitoring instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#monitoring_instance_id OpensearchInstance#monitoring_instance_id}
  */
  readonly monitoringInstanceId?: string;
  /**
  * List of plugins to install. Must be a supported plugin name. The plugins `repository-s3` and `repository-azure` are enabled by default and cannot be disabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#plugins OpensearchInstance#plugins}
  */
  readonly plugins?: string[];
  /**
  * Comma separated list of IP networks in CIDR notation which are allowed to access this instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#sgw_acl OpensearchInstance#sgw_acl}
  */
  readonly sgwAcl?: string;
  /**
  * List of syslog servers to send logs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#syslog OpensearchInstance#syslog}
  */
  readonly syslog?: string[];
  /**
  * List of TLS ciphers to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#tls_ciphers OpensearchInstance#tls_ciphers}
  */
  readonly tlsCiphers?: string[];
  /**
  * The TLS protocol to use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#tls_protocols OpensearchInstance#tls_protocols}
  */
  readonly tlsProtocols?: string[];
}

export function opensearchInstanceParametersToTerraform(struct?: OpensearchInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_monitoring: cdktf.booleanToTerraform(struct!.enableMonitoring),
    graphite: cdktf.stringToTerraform(struct!.graphite),
    java_garbage_collector: cdktf.stringToTerraform(struct!.javaGarbageCollector),
    java_heapspace: cdktf.numberToTerraform(struct!.javaHeapspace),
    java_maxmetaspace: cdktf.numberToTerraform(struct!.javaMaxmetaspace),
    max_disk_threshold: cdktf.numberToTerraform(struct!.maxDiskThreshold),
    metrics_frequency: cdktf.numberToTerraform(struct!.metricsFrequency),
    metrics_prefix: cdktf.stringToTerraform(struct!.metricsPrefix),
    monitoring_instance_id: cdktf.stringToTerraform(struct!.monitoringInstanceId),
    plugins: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.plugins),
    sgw_acl: cdktf.stringToTerraform(struct!.sgwAcl),
    syslog: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syslog),
    tls_ciphers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsCiphers),
    tls_protocols: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.tlsProtocols),
  }
}


export function opensearchInstanceParametersToHclTerraform(struct?: OpensearchInstanceParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_monitoring: {
      value: cdktf.booleanToHclTerraform(struct!.enableMonitoring),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    graphite: {
      value: cdktf.stringToHclTerraform(struct!.graphite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_garbage_collector: {
      value: cdktf.stringToHclTerraform(struct!.javaGarbageCollector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    java_heapspace: {
      value: cdktf.numberToHclTerraform(struct!.javaHeapspace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    java_maxmetaspace: {
      value: cdktf.numberToHclTerraform(struct!.javaMaxmetaspace),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_disk_threshold: {
      value: cdktf.numberToHclTerraform(struct!.maxDiskThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_frequency: {
      value: cdktf.numberToHclTerraform(struct!.metricsFrequency),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    metrics_prefix: {
      value: cdktf.stringToHclTerraform(struct!.metricsPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    monitoring_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.monitoringInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugins: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.plugins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sgw_acl: {
      value: cdktf.stringToHclTerraform(struct!.sgwAcl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    syslog: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syslog),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_ciphers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsCiphers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tls_protocols: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.tlsProtocols),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class OpensearchInstanceParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): OpensearchInstanceParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableMonitoring !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMonitoring = this._enableMonitoring;
    }
    if (this._graphite !== undefined) {
      hasAnyValues = true;
      internalValueResult.graphite = this._graphite;
    }
    if (this._javaGarbageCollector !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaGarbageCollector = this._javaGarbageCollector;
    }
    if (this._javaHeapspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaHeapspace = this._javaHeapspace;
    }
    if (this._javaMaxmetaspace !== undefined) {
      hasAnyValues = true;
      internalValueResult.javaMaxmetaspace = this._javaMaxmetaspace;
    }
    if (this._maxDiskThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDiskThreshold = this._maxDiskThreshold;
    }
    if (this._metricsFrequency !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsFrequency = this._metricsFrequency;
    }
    if (this._metricsPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.metricsPrefix = this._metricsPrefix;
    }
    if (this._monitoringInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringInstanceId = this._monitoringInstanceId;
    }
    if (this._plugins !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugins = this._plugins;
    }
    if (this._sgwAcl !== undefined) {
      hasAnyValues = true;
      internalValueResult.sgwAcl = this._sgwAcl;
    }
    if (this._syslog !== undefined) {
      hasAnyValues = true;
      internalValueResult.syslog = this._syslog;
    }
    if (this._tlsCiphers !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCiphers = this._tlsCiphers;
    }
    if (this._tlsProtocols !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsProtocols = this._tlsProtocols;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: OpensearchInstanceParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableMonitoring = undefined;
      this._graphite = undefined;
      this._javaGarbageCollector = undefined;
      this._javaHeapspace = undefined;
      this._javaMaxmetaspace = undefined;
      this._maxDiskThreshold = undefined;
      this._metricsFrequency = undefined;
      this._metricsPrefix = undefined;
      this._monitoringInstanceId = undefined;
      this._plugins = undefined;
      this._sgwAcl = undefined;
      this._syslog = undefined;
      this._tlsCiphers = undefined;
      this._tlsProtocols = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableMonitoring = value.enableMonitoring;
      this._graphite = value.graphite;
      this._javaGarbageCollector = value.javaGarbageCollector;
      this._javaHeapspace = value.javaHeapspace;
      this._javaMaxmetaspace = value.javaMaxmetaspace;
      this._maxDiskThreshold = value.maxDiskThreshold;
      this._metricsFrequency = value.metricsFrequency;
      this._metricsPrefix = value.metricsPrefix;
      this._monitoringInstanceId = value.monitoringInstanceId;
      this._plugins = value.plugins;
      this._sgwAcl = value.sgwAcl;
      this._syslog = value.syslog;
      this._tlsCiphers = value.tlsCiphers;
      this._tlsProtocols = value.tlsProtocols;
    }
  }

  // enable_monitoring - computed: true, optional: true, required: false
  private _enableMonitoring?: boolean | cdktf.IResolvable; 
  public get enableMonitoring() {
    return this.getBooleanAttribute('enable_monitoring');
  }
  public set enableMonitoring(value: boolean | cdktf.IResolvable) {
    this._enableMonitoring = value;
  }
  public resetEnableMonitoring() {
    this._enableMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMonitoringInput() {
    return this._enableMonitoring;
  }

  // graphite - computed: true, optional: true, required: false
  private _graphite?: string; 
  public get graphite() {
    return this.getStringAttribute('graphite');
  }
  public set graphite(value: string) {
    this._graphite = value;
  }
  public resetGraphite() {
    this._graphite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graphiteInput() {
    return this._graphite;
  }

  // java_garbage_collector - computed: true, optional: true, required: false
  private _javaGarbageCollector?: string; 
  public get javaGarbageCollector() {
    return this.getStringAttribute('java_garbage_collector');
  }
  public set javaGarbageCollector(value: string) {
    this._javaGarbageCollector = value;
  }
  public resetJavaGarbageCollector() {
    this._javaGarbageCollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaGarbageCollectorInput() {
    return this._javaGarbageCollector;
  }

  // java_heapspace - computed: true, optional: true, required: false
  private _javaHeapspace?: number; 
  public get javaHeapspace() {
    return this.getNumberAttribute('java_heapspace');
  }
  public set javaHeapspace(value: number) {
    this._javaHeapspace = value;
  }
  public resetJavaHeapspace() {
    this._javaHeapspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaHeapspaceInput() {
    return this._javaHeapspace;
  }

  // java_maxmetaspace - computed: true, optional: true, required: false
  private _javaMaxmetaspace?: number; 
  public get javaMaxmetaspace() {
    return this.getNumberAttribute('java_maxmetaspace');
  }
  public set javaMaxmetaspace(value: number) {
    this._javaMaxmetaspace = value;
  }
  public resetJavaMaxmetaspace() {
    this._javaMaxmetaspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get javaMaxmetaspaceInput() {
    return this._javaMaxmetaspace;
  }

  // max_disk_threshold - computed: true, optional: true, required: false
  private _maxDiskThreshold?: number; 
  public get maxDiskThreshold() {
    return this.getNumberAttribute('max_disk_threshold');
  }
  public set maxDiskThreshold(value: number) {
    this._maxDiskThreshold = value;
  }
  public resetMaxDiskThreshold() {
    this._maxDiskThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDiskThresholdInput() {
    return this._maxDiskThreshold;
  }

  // metrics_frequency - computed: true, optional: true, required: false
  private _metricsFrequency?: number; 
  public get metricsFrequency() {
    return this.getNumberAttribute('metrics_frequency');
  }
  public set metricsFrequency(value: number) {
    this._metricsFrequency = value;
  }
  public resetMetricsFrequency() {
    this._metricsFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsFrequencyInput() {
    return this._metricsFrequency;
  }

  // metrics_prefix - computed: true, optional: true, required: false
  private _metricsPrefix?: string; 
  public get metricsPrefix() {
    return this.getStringAttribute('metrics_prefix');
  }
  public set metricsPrefix(value: string) {
    this._metricsPrefix = value;
  }
  public resetMetricsPrefix() {
    this._metricsPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsPrefixInput() {
    return this._metricsPrefix;
  }

  // monitoring_instance_id - computed: true, optional: true, required: false
  private _monitoringInstanceId?: string; 
  public get monitoringInstanceId() {
    return this.getStringAttribute('monitoring_instance_id');
  }
  public set monitoringInstanceId(value: string) {
    this._monitoringInstanceId = value;
  }
  public resetMonitoringInstanceId() {
    this._monitoringInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringInstanceIdInput() {
    return this._monitoringInstanceId;
  }

  // plugins - computed: true, optional: true, required: false
  private _plugins?: string[]; 
  public get plugins() {
    return this.getListAttribute('plugins');
  }
  public set plugins(value: string[]) {
    this._plugins = value;
  }
  public resetPlugins() {
    this._plugins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsInput() {
    return this._plugins;
  }

  // sgw_acl - computed: true, optional: true, required: false
  private _sgwAcl?: string; 
  public get sgwAcl() {
    return this.getStringAttribute('sgw_acl');
  }
  public set sgwAcl(value: string) {
    this._sgwAcl = value;
  }
  public resetSgwAcl() {
    this._sgwAcl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sgwAclInput() {
    return this._sgwAcl;
  }

  // syslog - computed: true, optional: true, required: false
  private _syslog?: string[]; 
  public get syslog() {
    return this.getListAttribute('syslog');
  }
  public set syslog(value: string[]) {
    this._syslog = value;
  }
  public resetSyslog() {
    this._syslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogInput() {
    return this._syslog;
  }

  // tls_ciphers - computed: true, optional: true, required: false
  private _tlsCiphers?: string[]; 
  public get tlsCiphers() {
    return this.getListAttribute('tls_ciphers');
  }
  public set tlsCiphers(value: string[]) {
    this._tlsCiphers = value;
  }
  public resetTlsCiphers() {
    this._tlsCiphers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCiphersInput() {
    return this._tlsCiphers;
  }

  // tls_protocols - computed: true, optional: true, required: false
  private _tlsProtocols?: string[]; 
  public get tlsProtocols() {
    return this.getListAttribute('tls_protocols');
  }
  public set tlsProtocols(value: string[]) {
    this._tlsProtocols = value;
  }
  public resetTlsProtocols() {
    this._tlsProtocols = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsProtocolsInput() {
    return this._tlsProtocols;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance stackit_opensearch_instance}
*/
export class OpensearchInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_opensearch_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a OpensearchInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the OpensearchInstance to import
  * @param importFromId The id of the existing OpensearchInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the OpensearchInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_opensearch_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/stackitcloud/stackit/0.76.0/docs/resources/opensearch_instance stackit_opensearch_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OpensearchInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: OpensearchInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_opensearch_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '0.76.0',
        providerVersionConstraint: '0.76.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._parameters.internalValue = config.parameters;
    this._planName = config.planName;
    this._projectId = config.projectId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cf_guid - computed: true, optional: false, required: false
  public get cfGuid() {
    return this.getStringAttribute('cf_guid');
  }

  // cf_organization_guid - computed: true, optional: false, required: false
  public get cfOrganizationGuid() {
    return this.getStringAttribute('cf_organization_guid');
  }

  // cf_space_guid - computed: true, optional: false, required: false
  public get cfSpaceGuid() {
    return this.getStringAttribute('cf_space_guid');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // image_url - computed: true, optional: false, required: false
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getStringAttribute('instance_id');
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

  // parameters - computed: true, optional: true, required: false
  private _parameters = new OpensearchInstanceParametersOutputReference(this, "parameters");
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: OpensearchInstanceParameters) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // plan_name - computed: false, optional: false, required: true
  private _planName?: string; 
  public get planName() {
    return this.getStringAttribute('plan_name');
  }
  public set planName(value: string) {
    this._planName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planNameInput() {
    return this._planName;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      parameters: opensearchInstanceParametersToTerraform(this._parameters.internalValue),
      plan_name: cdktf.stringToTerraform(this._planName),
      project_id: cdktf.stringToTerraform(this._projectId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameters: {
        value: opensearchInstanceParametersToHclTerraform(this._parameters.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "OpensearchInstanceParameters",
      },
      plan_name: {
        value: cdktf.stringToHclTerraform(this._planName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
