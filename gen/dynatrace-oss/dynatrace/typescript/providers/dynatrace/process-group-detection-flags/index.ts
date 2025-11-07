// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProcessGroupDetectionFlagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * In older versions, Node.js applications were distinguished based on their directory name, omitting the script name. Changing this setting may change the general handling of Node.js process groups. Leave unchanged if in doubt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#add_node_js_script_name ProcessGroupDetectionFlags#add_node_js_script_name}
  */
  readonly addNodeJsScriptName: boolean | cdktf.IResolvable;
  /**
  * Enabling this flag will detect separate Cassandra process groups based on the configured Cassandra cluster name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#auto_detect_cassandra_clusters ProcessGroupDetectionFlags#auto_detect_cassandra_clusters}
  */
  readonly autoDetectCassandraClusters: boolean | cdktf.IResolvable;
  /**
  * Enabling this flag will detect Spring Boot process groups based on command line and applications' configuration files.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#auto_detect_spring_boot ProcessGroupDetectionFlags#auto_detect_spring_boot}
  */
  readonly autoDetectSpringBoot: boolean | cdktf.IResolvable;
  /**
  * Enabling this flag will detect separate TIBCO BusinessWorks process groups per engine property file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#auto_detect_tibco_container_edition_engines ProcessGroupDetectionFlags#auto_detect_tibco_container_edition_engines}
  */
  readonly autoDetectTibcoContainerEditionEngines: boolean | cdktf.IResolvable;
  /**
  * Enabling this flag will detect separate TIBCO BusinessWorks process groups per engine property file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#auto_detect_tibco_engines ProcessGroupDetectionFlags#auto_detect_tibco_engines}
  */
  readonly autoDetectTibcoEngines: boolean | cdktf.IResolvable;
  /**
  * Enabling this flag will detect webMethods Integration Server including specific properties like install root and product name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#auto_detect_web_methods_integration_server ProcessGroupDetectionFlags#auto_detect_web_methods_integration_server}
  */
  readonly autoDetectWebMethodsIntegrationServer: boolean | cdktf.IResolvable;
  /**
  * Enabling this flag will detect separate WebSphere Liberty process groups based on java command line.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#auto_detect_web_sphere_liberty_application ProcessGroupDetectionFlags#auto_detect_web_sphere_liberty_application}
  */
  readonly autoDetectWebSphereLibertyApplication: boolean | cdktf.IResolvable;
  /**
  * Enable to group and separately analyze the processes of each IBM MQ Queue manager instance. Each process group receives a unique name based on the queue manager instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#group_ibmmqby_instance_name ProcessGroupDetectionFlags#group_ibmmqby_instance_name}
  */
  readonly groupIbmmqbyInstanceName: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#id ProcessGroupDetectionFlags#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enabling this flag will detect the JBoss server name from the system property jboss.server.name=<server-name>, only if -D[Server:<server-name>] is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#identify_jboss_server_by_system_property ProcessGroupDetectionFlags#identify_jboss_server_by_system_property}
  */
  readonly identifyJbossServerBySystemProperty: boolean | cdktf.IResolvable;
  /**
  * To determine the unique identity of each detected process, and to generate a unique name for each detected process, Dynatrace evaluates the name of the directory that each process binary is contained within. For application containers like Tomcat and JBoss, Dynatrace evaluates important directories like CATALINA_HOME and JBOSS_HOME for this information. In some automated deployment scenarios such directory names are updated automatically with new version numbers, build numbers, dates, or GUIDs. Enable this setting to ensure that automated directory name changes don't result in Dynatrace registering pre-existing processes as new processes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#ignore_unique_identifiers ProcessGroupDetectionFlags#ignore_unique_identifiers}
  */
  readonly ignoreUniqueIdentifiers: boolean | cdktf.IResolvable;
  /**
  * The scope of this setting (HOST, HOST_GROUP). Omit this property if you want to cover the whole environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#scope ProcessGroupDetectionFlags#scope}
  */
  readonly scope?: string;
  /**
  * This flag enables the detection of security software such as anti-malware protection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#security_software_detection_enabled ProcessGroupDetectionFlags#security_software_detection_enabled}
  */
  readonly securitySoftwareDetectionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable to monitor CPU and memory usage of short lived processes, otherwise being lost by traditional monitoring. Disabling this flag blocks passing data to cluster only, it does not stop data collection and has no effect on performance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#short_lived_processes_monitoring ProcessGroupDetectionFlags#short_lived_processes_monitoring}
  */
  readonly shortLivedProcessesMonitoring: boolean | cdktf.IResolvable;
  /**
  * Enable to group and separately analyze the processes of each DB2 Instance. Each process receives a unique name based on the DB2 Instance name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#split_db_2_grouping_by_instances ProcessGroupDetectionFlags#split_db_2_grouping_by_instances}
  */
  readonly splitDb2GroupingByInstances?: boolean | cdktf.IResolvable;
  /**
  * Enable to group and separately analyze the processes of each Oracle DB. Each process group receives a unique name based on the Oracle DB SID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#split_oracle_database_pg ProcessGroupDetectionFlags#split_oracle_database_pg}
  */
  readonly splitOracleDatabasePg: boolean | cdktf.IResolvable;
  /**
  * Enable to group and separately analyze the processes of each Oracle Listener. Each process group receives a unique name based on the Oracle Listener name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#split_oracle_listener_pg ProcessGroupDetectionFlags#split_oracle_listener_pg}
  */
  readonly splitOracleListenerPg: boolean | cdktf.IResolvable;
  /**
  * By default, Tomcat clusters are identified and named based on the CATALINA_HOME directory name. This setting results in the use of the CATALINA_BASE directory name to identify multiple Tomcat nodes within each Tomcat cluster. If this setting is not enabled, each CATALINA_HOME+CATALINA_BASE combination will be considered a separate Tomcat cluster. In other words, Tomcat clusters can't have multiple nodes on a single host.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#use_catalina_base ProcessGroupDetectionFlags#use_catalina_base}
  */
  readonly useCatalinaBase: boolean | cdktf.IResolvable;
  /**
  * By default, Dynatrace uses image names as identifiers for individual process groups, with one process-group instance per host. Normally Docker container names can't serve as stable identifiers of process group instances because they are variable and auto-generated. You can however manually assign proper container names to their Docker instances. Such manually-assigned container names can serve as reliable process-group instance identifiers. This flag instructs Dynatrace to use Docker-provided names to distinguish between multiple instances of the same image. If this flag is not applied and you run multiple containers of the same image on the same host, the resulting processes will be consolidated into a single process view. Use this flag with caution!
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#use_docker_container_name ProcessGroupDetectionFlags#use_docker_container_name}
  */
  readonly useDockerContainerName: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags dynatrace_process_group_detection_flags}
*/
export class ProcessGroupDetectionFlags extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_process_group_detection_flags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProcessGroupDetectionFlags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProcessGroupDetectionFlags to import
  * @param importFromId The id of the existing ProcessGroupDetectionFlags that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProcessGroupDetectionFlags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_process_group_detection_flags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/process_group_detection_flags dynatrace_process_group_detection_flags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProcessGroupDetectionFlagsConfig
  */
  public constructor(scope: Construct, id: string, config: ProcessGroupDetectionFlagsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_process_group_detection_flags',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._addNodeJsScriptName = config.addNodeJsScriptName;
    this._autoDetectCassandraClusters = config.autoDetectCassandraClusters;
    this._autoDetectSpringBoot = config.autoDetectSpringBoot;
    this._autoDetectTibcoContainerEditionEngines = config.autoDetectTibcoContainerEditionEngines;
    this._autoDetectTibcoEngines = config.autoDetectTibcoEngines;
    this._autoDetectWebMethodsIntegrationServer = config.autoDetectWebMethodsIntegrationServer;
    this._autoDetectWebSphereLibertyApplication = config.autoDetectWebSphereLibertyApplication;
    this._groupIbmmqbyInstanceName = config.groupIbmmqbyInstanceName;
    this._id = config.id;
    this._identifyJbossServerBySystemProperty = config.identifyJbossServerBySystemProperty;
    this._ignoreUniqueIdentifiers = config.ignoreUniqueIdentifiers;
    this._scope = config.scope;
    this._securitySoftwareDetectionEnabled = config.securitySoftwareDetectionEnabled;
    this._shortLivedProcessesMonitoring = config.shortLivedProcessesMonitoring;
    this._splitDb2GroupingByInstances = config.splitDb2GroupingByInstances;
    this._splitOracleDatabasePg = config.splitOracleDatabasePg;
    this._splitOracleListenerPg = config.splitOracleListenerPg;
    this._useCatalinaBase = config.useCatalinaBase;
    this._useDockerContainerName = config.useDockerContainerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // add_node_js_script_name - computed: false, optional: false, required: true
  private _addNodeJsScriptName?: boolean | cdktf.IResolvable; 
  public get addNodeJsScriptName() {
    return this.getBooleanAttribute('add_node_js_script_name');
  }
  public set addNodeJsScriptName(value: boolean | cdktf.IResolvable) {
    this._addNodeJsScriptName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addNodeJsScriptNameInput() {
    return this._addNodeJsScriptName;
  }

  // auto_detect_cassandra_clusters - computed: false, optional: false, required: true
  private _autoDetectCassandraClusters?: boolean | cdktf.IResolvable; 
  public get autoDetectCassandraClusters() {
    return this.getBooleanAttribute('auto_detect_cassandra_clusters');
  }
  public set autoDetectCassandraClusters(value: boolean | cdktf.IResolvable) {
    this._autoDetectCassandraClusters = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectCassandraClustersInput() {
    return this._autoDetectCassandraClusters;
  }

  // auto_detect_spring_boot - computed: false, optional: false, required: true
  private _autoDetectSpringBoot?: boolean | cdktf.IResolvable; 
  public get autoDetectSpringBoot() {
    return this.getBooleanAttribute('auto_detect_spring_boot');
  }
  public set autoDetectSpringBoot(value: boolean | cdktf.IResolvable) {
    this._autoDetectSpringBoot = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectSpringBootInput() {
    return this._autoDetectSpringBoot;
  }

  // auto_detect_tibco_container_edition_engines - computed: false, optional: false, required: true
  private _autoDetectTibcoContainerEditionEngines?: boolean | cdktf.IResolvable; 
  public get autoDetectTibcoContainerEditionEngines() {
    return this.getBooleanAttribute('auto_detect_tibco_container_edition_engines');
  }
  public set autoDetectTibcoContainerEditionEngines(value: boolean | cdktf.IResolvable) {
    this._autoDetectTibcoContainerEditionEngines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectTibcoContainerEditionEnginesInput() {
    return this._autoDetectTibcoContainerEditionEngines;
  }

  // auto_detect_tibco_engines - computed: false, optional: false, required: true
  private _autoDetectTibcoEngines?: boolean | cdktf.IResolvable; 
  public get autoDetectTibcoEngines() {
    return this.getBooleanAttribute('auto_detect_tibco_engines');
  }
  public set autoDetectTibcoEngines(value: boolean | cdktf.IResolvable) {
    this._autoDetectTibcoEngines = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectTibcoEnginesInput() {
    return this._autoDetectTibcoEngines;
  }

  // auto_detect_web_methods_integration_server - computed: false, optional: false, required: true
  private _autoDetectWebMethodsIntegrationServer?: boolean | cdktf.IResolvable; 
  public get autoDetectWebMethodsIntegrationServer() {
    return this.getBooleanAttribute('auto_detect_web_methods_integration_server');
  }
  public set autoDetectWebMethodsIntegrationServer(value: boolean | cdktf.IResolvable) {
    this._autoDetectWebMethodsIntegrationServer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectWebMethodsIntegrationServerInput() {
    return this._autoDetectWebMethodsIntegrationServer;
  }

  // auto_detect_web_sphere_liberty_application - computed: false, optional: false, required: true
  private _autoDetectWebSphereLibertyApplication?: boolean | cdktf.IResolvable; 
  public get autoDetectWebSphereLibertyApplication() {
    return this.getBooleanAttribute('auto_detect_web_sphere_liberty_application');
  }
  public set autoDetectWebSphereLibertyApplication(value: boolean | cdktf.IResolvable) {
    this._autoDetectWebSphereLibertyApplication = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoDetectWebSphereLibertyApplicationInput() {
    return this._autoDetectWebSphereLibertyApplication;
  }

  // group_ibmmqby_instance_name - computed: false, optional: false, required: true
  private _groupIbmmqbyInstanceName?: boolean | cdktf.IResolvable; 
  public get groupIbmmqbyInstanceName() {
    return this.getBooleanAttribute('group_ibmmqby_instance_name');
  }
  public set groupIbmmqbyInstanceName(value: boolean | cdktf.IResolvable) {
    this._groupIbmmqbyInstanceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIbmmqbyInstanceNameInput() {
    return this._groupIbmmqbyInstanceName;
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

  // identify_jboss_server_by_system_property - computed: false, optional: false, required: true
  private _identifyJbossServerBySystemProperty?: boolean | cdktf.IResolvable; 
  public get identifyJbossServerBySystemProperty() {
    return this.getBooleanAttribute('identify_jboss_server_by_system_property');
  }
  public set identifyJbossServerBySystemProperty(value: boolean | cdktf.IResolvable) {
    this._identifyJbossServerBySystemProperty = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identifyJbossServerBySystemPropertyInput() {
    return this._identifyJbossServerBySystemProperty;
  }

  // ignore_unique_identifiers - computed: false, optional: false, required: true
  private _ignoreUniqueIdentifiers?: boolean | cdktf.IResolvable; 
  public get ignoreUniqueIdentifiers() {
    return this.getBooleanAttribute('ignore_unique_identifiers');
  }
  public set ignoreUniqueIdentifiers(value: boolean | cdktf.IResolvable) {
    this._ignoreUniqueIdentifiers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreUniqueIdentifiersInput() {
    return this._ignoreUniqueIdentifiers;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // security_software_detection_enabled - computed: false, optional: true, required: false
  private _securitySoftwareDetectionEnabled?: boolean | cdktf.IResolvable; 
  public get securitySoftwareDetectionEnabled() {
    return this.getBooleanAttribute('security_software_detection_enabled');
  }
  public set securitySoftwareDetectionEnabled(value: boolean | cdktf.IResolvable) {
    this._securitySoftwareDetectionEnabled = value;
  }
  public resetSecuritySoftwareDetectionEnabled() {
    this._securitySoftwareDetectionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySoftwareDetectionEnabledInput() {
    return this._securitySoftwareDetectionEnabled;
  }

  // short_lived_processes_monitoring - computed: false, optional: false, required: true
  private _shortLivedProcessesMonitoring?: boolean | cdktf.IResolvable; 
  public get shortLivedProcessesMonitoring() {
    return this.getBooleanAttribute('short_lived_processes_monitoring');
  }
  public set shortLivedProcessesMonitoring(value: boolean | cdktf.IResolvable) {
    this._shortLivedProcessesMonitoring = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortLivedProcessesMonitoringInput() {
    return this._shortLivedProcessesMonitoring;
  }

  // split_db_2_grouping_by_instances - computed: false, optional: true, required: false
  private _splitDb2GroupingByInstances?: boolean | cdktf.IResolvable; 
  public get splitDb2GroupingByInstances() {
    return this.getBooleanAttribute('split_db_2_grouping_by_instances');
  }
  public set splitDb2GroupingByInstances(value: boolean | cdktf.IResolvable) {
    this._splitDb2GroupingByInstances = value;
  }
  public resetSplitDb2GroupingByInstances() {
    this._splitDb2GroupingByInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitDb2GroupingByInstancesInput() {
    return this._splitDb2GroupingByInstances;
  }

  // split_oracle_database_pg - computed: false, optional: false, required: true
  private _splitOracleDatabasePg?: boolean | cdktf.IResolvable; 
  public get splitOracleDatabasePg() {
    return this.getBooleanAttribute('split_oracle_database_pg');
  }
  public set splitOracleDatabasePg(value: boolean | cdktf.IResolvable) {
    this._splitOracleDatabasePg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOracleDatabasePgInput() {
    return this._splitOracleDatabasePg;
  }

  // split_oracle_listener_pg - computed: false, optional: false, required: true
  private _splitOracleListenerPg?: boolean | cdktf.IResolvable; 
  public get splitOracleListenerPg() {
    return this.getBooleanAttribute('split_oracle_listener_pg');
  }
  public set splitOracleListenerPg(value: boolean | cdktf.IResolvable) {
    this._splitOracleListenerPg = value;
  }
  // Temporarily expose input value. Use with caution.
  public get splitOracleListenerPgInput() {
    return this._splitOracleListenerPg;
  }

  // use_catalina_base - computed: false, optional: false, required: true
  private _useCatalinaBase?: boolean | cdktf.IResolvable; 
  public get useCatalinaBase() {
    return this.getBooleanAttribute('use_catalina_base');
  }
  public set useCatalinaBase(value: boolean | cdktf.IResolvable) {
    this._useCatalinaBase = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useCatalinaBaseInput() {
    return this._useCatalinaBase;
  }

  // use_docker_container_name - computed: false, optional: false, required: true
  private _useDockerContainerName?: boolean | cdktf.IResolvable; 
  public get useDockerContainerName() {
    return this.getBooleanAttribute('use_docker_container_name');
  }
  public set useDockerContainerName(value: boolean | cdktf.IResolvable) {
    this._useDockerContainerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDockerContainerNameInput() {
    return this._useDockerContainerName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      add_node_js_script_name: cdktf.booleanToTerraform(this._addNodeJsScriptName),
      auto_detect_cassandra_clusters: cdktf.booleanToTerraform(this._autoDetectCassandraClusters),
      auto_detect_spring_boot: cdktf.booleanToTerraform(this._autoDetectSpringBoot),
      auto_detect_tibco_container_edition_engines: cdktf.booleanToTerraform(this._autoDetectTibcoContainerEditionEngines),
      auto_detect_tibco_engines: cdktf.booleanToTerraform(this._autoDetectTibcoEngines),
      auto_detect_web_methods_integration_server: cdktf.booleanToTerraform(this._autoDetectWebMethodsIntegrationServer),
      auto_detect_web_sphere_liberty_application: cdktf.booleanToTerraform(this._autoDetectWebSphereLibertyApplication),
      group_ibmmqby_instance_name: cdktf.booleanToTerraform(this._groupIbmmqbyInstanceName),
      id: cdktf.stringToTerraform(this._id),
      identify_jboss_server_by_system_property: cdktf.booleanToTerraform(this._identifyJbossServerBySystemProperty),
      ignore_unique_identifiers: cdktf.booleanToTerraform(this._ignoreUniqueIdentifiers),
      scope: cdktf.stringToTerraform(this._scope),
      security_software_detection_enabled: cdktf.booleanToTerraform(this._securitySoftwareDetectionEnabled),
      short_lived_processes_monitoring: cdktf.booleanToTerraform(this._shortLivedProcessesMonitoring),
      split_db_2_grouping_by_instances: cdktf.booleanToTerraform(this._splitDb2GroupingByInstances),
      split_oracle_database_pg: cdktf.booleanToTerraform(this._splitOracleDatabasePg),
      split_oracle_listener_pg: cdktf.booleanToTerraform(this._splitOracleListenerPg),
      use_catalina_base: cdktf.booleanToTerraform(this._useCatalinaBase),
      use_docker_container_name: cdktf.booleanToTerraform(this._useDockerContainerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      add_node_js_script_name: {
        value: cdktf.booleanToHclTerraform(this._addNodeJsScriptName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_cassandra_clusters: {
        value: cdktf.booleanToHclTerraform(this._autoDetectCassandraClusters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_spring_boot: {
        value: cdktf.booleanToHclTerraform(this._autoDetectSpringBoot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_tibco_container_edition_engines: {
        value: cdktf.booleanToHclTerraform(this._autoDetectTibcoContainerEditionEngines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_tibco_engines: {
        value: cdktf.booleanToHclTerraform(this._autoDetectTibcoEngines),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_web_methods_integration_server: {
        value: cdktf.booleanToHclTerraform(this._autoDetectWebMethodsIntegrationServer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_detect_web_sphere_liberty_application: {
        value: cdktf.booleanToHclTerraform(this._autoDetectWebSphereLibertyApplication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group_ibmmqby_instance_name: {
        value: cdktf.booleanToHclTerraform(this._groupIbmmqbyInstanceName),
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
      identify_jboss_server_by_system_property: {
        value: cdktf.booleanToHclTerraform(this._identifyJbossServerBySystemProperty),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ignore_unique_identifiers: {
        value: cdktf.booleanToHclTerraform(this._ignoreUniqueIdentifiers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_software_detection_enabled: {
        value: cdktf.booleanToHclTerraform(this._securitySoftwareDetectionEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      short_lived_processes_monitoring: {
        value: cdktf.booleanToHclTerraform(this._shortLivedProcessesMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      split_db_2_grouping_by_instances: {
        value: cdktf.booleanToHclTerraform(this._splitDb2GroupingByInstances),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      split_oracle_database_pg: {
        value: cdktf.booleanToHclTerraform(this._splitOracleDatabasePg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      split_oracle_listener_pg: {
        value: cdktf.booleanToHclTerraform(this._splitOracleListenerPg),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_catalina_base: {
        value: cdktf.booleanToHclTerraform(this._useCatalinaBase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      use_docker_container_name: {
        value: cdktf.booleanToHclTerraform(this._useDockerContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
