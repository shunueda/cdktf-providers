// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BuiltinProcessMonitoringConfig extends cdktf.TerraformMetaArguments {
  /**
  * Rule id: 3 - Do monitor processes if ASP.NET Core application path exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#aspnetcore BuiltinProcessMonitoring#aspnetcore}
  */
  readonly aspnetcore?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 64 - Do not monitor processes if ASP.NET Core application DLL contains 'Agent.Listener'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#aspnetcore_agentlistener BuiltinProcessMonitoring#aspnetcore_agentlistener}
  */
  readonly aspnetcoreAgentlistener?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 62 - Do not monitor processes if ASP.NET Core application DLL contains 'Agent.Worker'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#aspnetcore_agentworker BuiltinProcessMonitoring#aspnetcore_agentworker}
  */
  readonly aspnetcoreAgentworker?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 37 - Do monitor processes if Cloud Foundry application exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#cf BuiltinProcessMonitoring#cf}
  */
  readonly cf?: boolean | cdktf.IResolvable;
  /**
  * Do not monitor processes if Cloud Foundry application begins with 'apps-manager-js'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#cf_appsmanagerjs BuiltinProcessMonitoring#cf_appsmanagerjs}
  */
  readonly cfAppsmanagerjs?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 84 - Do not monitor processes if command line arguments contain 'forever/bin/monitor'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#cmd_foreverbinmonitor BuiltinProcessMonitoring#cmd_foreverbinmonitor}
  */
  readonly cmdForeverbinmonitor?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 41 - Do monitor processes if container name exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#container BuiltinProcessMonitoring#container}
  */
  readonly container?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 39 - Do not monitor processes if Docker stripped image contains 'pause-amd64'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#docker_pauseamd64 BuiltinProcessMonitoring#docker_pauseamd64}
  */
  readonly dockerPauseamd64?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 7 - Do monitor processes if EXE name equals 'adapter'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_adapter BuiltinProcessMonitoring#exe_adapter}
  */
  readonly exeAdapter?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 63 - Do not monitor processes if EXE name contains 'Agent.Listener'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_agentlistener BuiltinProcessMonitoring#exe_agentlistener}
  */
  readonly exeAgentlistener?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 61 - Do not monitor processes if EXE name contains 'Agent.Worker'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_agentworker BuiltinProcessMonitoring#exe_agentworker}
  */
  readonly exeAgentworker?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 79 - Do not monitor processes if EXE name equals 'ansible'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_ansible BuiltinProcessMonitoring#exe_ansible}
  */
  readonly exeAnsible?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 8 - Do monitor processes if EXE name equals 'auctioneer'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_auctioneer BuiltinProcessMonitoring#exe_auctioneer}
  */
  readonly exeAuctioneer?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 52 - Do not monitor processes if EXE name equals 'auditbeat'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_auditbeat BuiltinProcessMonitoring#exe_auditbeat}
  */
  readonly exeAuditbeat?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 81 - Do not monitor processes if EXE name equals 'aws'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_aws BuiltinProcessMonitoring#exe_aws}
  */
  readonly exeAws?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 82 - Do not monitor processes if EXE name equals 'az'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_az BuiltinProcessMonitoring#exe_az}
  */
  readonly exeAz?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 9 - Do monitor processes if EXE name equals 'bbs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_bbs BuiltinProcessMonitoring#exe_bbs}
  */
  readonly exeBbs?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 5 - Do monitor processes if EXE name equals 'caddy'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_caddy BuiltinProcessMonitoring#exe_caddy}
  */
  readonly exeCaddy?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 58 - Do not monitor processes if EXE name equals 'calico-node'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_caliconode BuiltinProcessMonitoring#exe_caliconode}
  */
  readonly exeCaliconode?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 59 - Do not monitor processes if EXE name equals 'casclient.exe'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_casclient BuiltinProcessMonitoring#exe_casclient}
  */
  readonly exeCasclient?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 10 - Do monitor processes if EXE name equals 'cc-uploader'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_ccuploader BuiltinProcessMonitoring#exe_ccuploader}
  */
  readonly exeCcuploader?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 78 - Do not monitor processes if EXE name equals 'conda'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_conda BuiltinProcessMonitoring#exe_conda}
  */
  readonly exeConda?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 11 - Do monitor processes if EXE name equals 'doppler'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_doppler BuiltinProcessMonitoring#exe_doppler}
  */
  readonly exeDoppler?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 49 - Do not monitor processes if EXE name equals 'filebeat'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_filebeat BuiltinProcessMonitoring#exe_filebeat}
  */
  readonly exeFilebeat?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 65 - Do not monitor processes if EXE name equals 'FlexNetJobExecutorService'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_flexnetjobexecutorservice BuiltinProcessMonitoring#exe_flexnetjobexecutorservice}
  */
  readonly exeFlexnetjobexecutorservice?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 66 - Do not monitor processes if EXE name equals 'FlexNetMaintenanceRemotingService'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_flexnetmaintenanceremotingservice BuiltinProcessMonitoring#exe_flexnetmaintenanceremotingservice}
  */
  readonly exeFlexnetmaintenanceremotingservice?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 54 - Do not monitor processes if EXE name equals 'functionbeat'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_functionbeat BuiltinProcessMonitoring#exe_functionbeat}
  */
  readonly exeFunctionbeat?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 83 - Do not monitor processes if EXE name equals 'gcloud'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_gcloud BuiltinProcessMonitoring#exe_gcloud}
  */
  readonly exeGcloud?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 12 - Do monitor processes if EXE name equals 'gorouter'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_gorouter BuiltinProcessMonitoring#exe_gorouter}
  */
  readonly exeGorouter?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 55 - Do not monitor processes if EXE name equals 'grootfs'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_grootfs BuiltinProcessMonitoring#exe_grootfs}
  */
  readonly exeGrootfs?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 74 - Do not monitor processes if EXE name equals 'hatch'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_hatch BuiltinProcessMonitoring#exe_hatch}
  */
  readonly exeHatch?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 53 - Do not monitor processes if EXE name equals 'heartbeat'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_heartbeat BuiltinProcessMonitoring#exe_heartbeat}
  */
  readonly exeHeartbeat?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 6 - Do monitor processes if EXE name equals 'influxd'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_influxd BuiltinProcessMonitoring#exe_influxd}
  */
  readonly exeInfluxd?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 77 - Do not monitor processes if EXE name equals 'jupyter'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_jupyter BuiltinProcessMonitoring#exe_jupyter}
  */
  readonly exeJupyter?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 13 - Do monitor processes if EXE name equals 'locket'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_locket BuiltinProcessMonitoring#exe_locket}
  */
  readonly exeLocket?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 50 - Do not monitor processes if EXE name equals 'metricbeat'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_metricbeat BuiltinProcessMonitoring#exe_metricbeat}
  */
  readonly exeMetricbeat?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 14 - Do monitor processes if EXE name equals 'metron'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_metron BuiltinProcessMonitoring#exe_metron}
  */
  readonly exeMetron?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 48 - Do not monitor processes if EXE name begins with 'mqsi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_mqsi BuiltinProcessMonitoring#exe_mqsi}
  */
  readonly exeMqsi?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 44 - Do not monitor processes if EXE name equals 'oc'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_oc BuiltinProcessMonitoring#exe_oc}
  */
  readonly exeOc?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 71 - Do not monitor processes if EXE name equals 'openhandlecollector.exe'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_openhandlecollector BuiltinProcessMonitoring#exe_openhandlecollector}
  */
  readonly exeOpenhandlecollector?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 80 - Do not monitor processes if EXE name equals 'openstack'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_openstack BuiltinProcessMonitoring#exe_openstack}
  */
  readonly exeOpenstack?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 46 - Do not monitor processes if EXE path equals '/opt/cni/bin/host-local'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_optcnibinhostlocal BuiltinProcessMonitoring#exe_optcnibinhostlocal}
  */
  readonly exeOptcnibinhostlocal?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 51 - Do not monitor processes if EXE name equals 'packetbeat'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_packetbeat BuiltinProcessMonitoring#exe_packetbeat}
  */
  readonly exePacketbeat?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 2 - Do not monitor processes if EXE name equals 'php-cgi'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_phpcgi BuiltinProcessMonitoring#exe_phpcgi}
  */
  readonly exePhpcgi?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 73 - Do not monitor processes if EXE name equals 'pip'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_pip BuiltinProcessMonitoring#exe_pip}
  */
  readonly exePip?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 16 - Do monitor processes if EXE name equals 'rep'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_rep BuiltinProcessMonitoring#exe_rep}
  */
  readonly exeRep?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 17 - Do monitor processes if EXE name equals 'route-emitter'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_routeemitter BuiltinProcessMonitoring#exe_routeemitter}
  */
  readonly exeRouteemitter?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 18 - Do monitor processes if EXE name equals 'route-registrar'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_routeregistrar BuiltinProcessMonitoring#exe_routeregistrar}
  */
  readonly exeRouteregistrar?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 19 - Do monitor processes if EXE name equals 'routing-api'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_routingapi BuiltinProcessMonitoring#exe_routingapi}
  */
  readonly exeRoutingapi?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 20 - Do monitor processes if EXE name equals 'scheduler'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_schedular BuiltinProcessMonitoring#exe_schedular}
  */
  readonly exeSchedular?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 21 - Do monitor processes if EXE name equals 'silk-daemon'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_silkdaemon BuiltinProcessMonitoring#exe_silkdaemon}
  */
  readonly exeSilkdaemon?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 22 - Do monitor processes if EXE name equals 'switchboard'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_switchboard BuiltinProcessMonitoring#exe_switchboard}
  */
  readonly exeSwitchboard?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 23 - Do monitor processes if EXE name equals 'syslog_drain_binder'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_syslogdrainbinder BuiltinProcessMonitoring#exe_syslogdrainbinder}
  */
  readonly exeSyslogdrainbinder?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 56 - Do not monitor processes if EXE name equals 'tardis'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_tardis BuiltinProcessMonitoring#exe_tardis}
  */
  readonly exeTardis?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 43 - Do not monitor processes if EXE path begins with '/tmp/buildpacks/'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_tmpbuildpacks BuiltinProcessMonitoring#exe_tmpbuildpacks}
  */
  readonly exeTmpbuildpacks?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 24 - Do monitor processes if EXE name equals 'tps-watcher'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_tpswatcher BuiltinProcessMonitoring#exe_tpswatcher}
  */
  readonly exeTpswatcher?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 25 - Do monitor processes if EXE name equals 'trafficcontroller'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_trafficcontroller BuiltinProcessMonitoring#exe_trafficcontroller}
  */
  readonly exeTrafficcontroller?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 70 - Do not monitor processes if EXE name contains 'UiPath'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_uipath BuiltinProcessMonitoring#exe_uipath}
  */
  readonly exeUipath?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 67 - Do not monitor processes if EXE path equals '/usr/bin/piper'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_userbinpiper BuiltinProcessMonitoring#exe_userbinpiper}
  */
  readonly exeUserbinpiper?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 4 - Do monitor processes if EXE name equals 'w3wp.exe'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_w3wp BuiltinProcessMonitoring#exe_w3wp}
  */
  readonly exeW3Wp?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 75 - Do not monitor processes if EXE name equals 'wheel'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_wheel BuiltinProcessMonitoring#exe_wheel}
  */
  readonly exeWheel?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 72 - Do not monitor processes if EXE name equals 'yq'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_yq BuiltinProcessMonitoring#exe_yq}
  */
  readonly exeYq?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 76 - Do not monitor processes if EXE name equals 'yum'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#exe_yum BuiltinProcessMonitoring#exe_yum}
  */
  readonly exeYum?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 47 - Do not monitor processes if Go Binary Linkage equals 'static'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#go_static BuiltinProcessMonitoring#go_static}
  */
  readonly goStatic?: boolean | cdktf.IResolvable;
  /**
  * The scope of this settings. If the settings should cover the whole environment, just don't specify any scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#host_group_id BuiltinProcessMonitoring#host_group_id}
  */
  readonly hostGroupId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#id BuiltinProcessMonitoring#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Rule id: 60 - Do not monitor processes if JAR file name equals 'dynatrace_ibm_mq_connector.jar'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#jar_dtibmmqconnector BuiltinProcessMonitoring#jar_dtibmmqconnector}
  */
  readonly jarDtibmmqconnector?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 57 - Do not monitor processes if Java JAR file begins with 'org.eclipse.equinox.launcher'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#jar_eclipseequinox BuiltinProcessMonitoring#jar_eclipseequinox}
  */
  readonly jarEclipseequinox?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 69 - Do not monitor processes if Kubernetes container name equals 'cassandra-operator'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#k8s_cassandraoperator BuiltinProcessMonitoring#k8s_cassandraoperator}
  */
  readonly k8SCassandraoperator?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 38 - Do not monitor processes if Kubernetes container name equals 'POD'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#k8s_containerpod BuiltinProcessMonitoring#k8s_containerpod}
  */
  readonly k8SContainerpod?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 40 - Do monitor processes if Kubernetes namespace exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#k8s_namespace BuiltinProcessMonitoring#k8s_namespace}
  */
  readonly k8SNamespace?: boolean | cdktf.IResolvable;
  /**
  * Do not monitor processes if Node.js script equals 'bin/pm2'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_binpm2 BuiltinProcessMonitoring#node_binpm2}
  */
  readonly nodeBinpm2?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 68 - Do not monitor processes if Node.js application equals 'corepack'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_corepack BuiltinProcessMonitoring#node_corepack}
  */
  readonly nodeCorepack?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 28 - Do not monitor processes if Node.js application base directory ends with '/node_modules/grunt'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_grunt BuiltinProcessMonitoring#node_grunt}
  */
  readonly nodeGrunt?: boolean | cdktf.IResolvable;
  /**
  * Do not monitor processes if Node.js application base directory ends with '/node_modules/gulp-cli'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_gulpcli BuiltinProcessMonitoring#node_gulpcli}
  */
  readonly nodeGulpcli?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 33 - Do not monitor processes if Node.js application base directory ends with '/node_modules/node-gyp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_nodegyp BuiltinProcessMonitoring#node_nodegyp}
  */
  readonly nodeNodegyp?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 32 - Do not monitor processes if Node.js application base directory ends with '/node_modules/node-pre-gyp'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_nodepregyp BuiltinProcessMonitoring#node_nodepregyp}
  */
  readonly nodeNodepregyp?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 27 - Do not monitor processes if Node.js application base directory ends with '/node_modules/npm'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_npm BuiltinProcessMonitoring#node_npm}
  */
  readonly nodeNpm?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 26 - Do not monitor processes if Node.js application base directory ends with '/node_modules/prebuild-install'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_prebuildinstall BuiltinProcessMonitoring#node_prebuildinstall}
  */
  readonly nodePrebuildinstall?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 29 - Do not monitor processes if Node.js application base directory ends with '/node_modules/typescript'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_typescript BuiltinProcessMonitoring#node_typescript}
  */
  readonly nodeTypescript?: boolean | cdktf.IResolvable;
  /**
  * Rule id: 45 - Do not monitor processes if Node.js application equals 'yarn'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#node_yarn BuiltinProcessMonitoring#node_yarn}
  */
  readonly nodeYarn?: boolean | cdktf.IResolvable;
  /**
  * (v1.274) Rule id: 1 - Do not monitor processes if PHP script exists
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#php_script BuiltinProcessMonitoring#php_script}
  */
  readonly phpScript?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring dynatrace_builtin_process_monitoring}
*/
export class BuiltinProcessMonitoring extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_builtin_process_monitoring";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BuiltinProcessMonitoring resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BuiltinProcessMonitoring to import
  * @param importFromId The id of the existing BuiltinProcessMonitoring that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BuiltinProcessMonitoring to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_builtin_process_monitoring", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.88.0/docs/resources/builtin_process_monitoring dynatrace_builtin_process_monitoring} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BuiltinProcessMonitoringConfig = {}
  */
  public constructor(scope: Construct, id: string, config: BuiltinProcessMonitoringConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_builtin_process_monitoring',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.88.0',
        providerVersionConstraint: '1.88.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aspnetcore = config.aspnetcore;
    this._aspnetcoreAgentlistener = config.aspnetcoreAgentlistener;
    this._aspnetcoreAgentworker = config.aspnetcoreAgentworker;
    this._cf = config.cf;
    this._cfAppsmanagerjs = config.cfAppsmanagerjs;
    this._cmdForeverbinmonitor = config.cmdForeverbinmonitor;
    this._container = config.container;
    this._dockerPauseamd64 = config.dockerPauseamd64;
    this._exeAdapter = config.exeAdapter;
    this._exeAgentlistener = config.exeAgentlistener;
    this._exeAgentworker = config.exeAgentworker;
    this._exeAnsible = config.exeAnsible;
    this._exeAuctioneer = config.exeAuctioneer;
    this._exeAuditbeat = config.exeAuditbeat;
    this._exeAws = config.exeAws;
    this._exeAz = config.exeAz;
    this._exeBbs = config.exeBbs;
    this._exeCaddy = config.exeCaddy;
    this._exeCaliconode = config.exeCaliconode;
    this._exeCasclient = config.exeCasclient;
    this._exeCcuploader = config.exeCcuploader;
    this._exeConda = config.exeConda;
    this._exeDoppler = config.exeDoppler;
    this._exeFilebeat = config.exeFilebeat;
    this._exeFlexnetjobexecutorservice = config.exeFlexnetjobexecutorservice;
    this._exeFlexnetmaintenanceremotingservice = config.exeFlexnetmaintenanceremotingservice;
    this._exeFunctionbeat = config.exeFunctionbeat;
    this._exeGcloud = config.exeGcloud;
    this._exeGorouter = config.exeGorouter;
    this._exeGrootfs = config.exeGrootfs;
    this._exeHatch = config.exeHatch;
    this._exeHeartbeat = config.exeHeartbeat;
    this._exeInfluxd = config.exeInfluxd;
    this._exeJupyter = config.exeJupyter;
    this._exeLocket = config.exeLocket;
    this._exeMetricbeat = config.exeMetricbeat;
    this._exeMetron = config.exeMetron;
    this._exeMqsi = config.exeMqsi;
    this._exeOc = config.exeOc;
    this._exeOpenhandlecollector = config.exeOpenhandlecollector;
    this._exeOpenstack = config.exeOpenstack;
    this._exeOptcnibinhostlocal = config.exeOptcnibinhostlocal;
    this._exePacketbeat = config.exePacketbeat;
    this._exePhpcgi = config.exePhpcgi;
    this._exePip = config.exePip;
    this._exeRep = config.exeRep;
    this._exeRouteemitter = config.exeRouteemitter;
    this._exeRouteregistrar = config.exeRouteregistrar;
    this._exeRoutingapi = config.exeRoutingapi;
    this._exeSchedular = config.exeSchedular;
    this._exeSilkdaemon = config.exeSilkdaemon;
    this._exeSwitchboard = config.exeSwitchboard;
    this._exeSyslogdrainbinder = config.exeSyslogdrainbinder;
    this._exeTardis = config.exeTardis;
    this._exeTmpbuildpacks = config.exeTmpbuildpacks;
    this._exeTpswatcher = config.exeTpswatcher;
    this._exeTrafficcontroller = config.exeTrafficcontroller;
    this._exeUipath = config.exeUipath;
    this._exeUserbinpiper = config.exeUserbinpiper;
    this._exeW3Wp = config.exeW3Wp;
    this._exeWheel = config.exeWheel;
    this._exeYq = config.exeYq;
    this._exeYum = config.exeYum;
    this._goStatic = config.goStatic;
    this._hostGroupId = config.hostGroupId;
    this._id = config.id;
    this._jarDtibmmqconnector = config.jarDtibmmqconnector;
    this._jarEclipseequinox = config.jarEclipseequinox;
    this._k8SCassandraoperator = config.k8SCassandraoperator;
    this._k8SContainerpod = config.k8SContainerpod;
    this._k8SNamespace = config.k8SNamespace;
    this._nodeBinpm2 = config.nodeBinpm2;
    this._nodeCorepack = config.nodeCorepack;
    this._nodeGrunt = config.nodeGrunt;
    this._nodeGulpcli = config.nodeGulpcli;
    this._nodeNodegyp = config.nodeNodegyp;
    this._nodeNodepregyp = config.nodeNodepregyp;
    this._nodeNpm = config.nodeNpm;
    this._nodePrebuildinstall = config.nodePrebuildinstall;
    this._nodeTypescript = config.nodeTypescript;
    this._nodeYarn = config.nodeYarn;
    this._phpScript = config.phpScript;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aspnetcore - computed: false, optional: true, required: false
  private _aspnetcore?: boolean | cdktf.IResolvable; 
  public get aspnetcore() {
    return this.getBooleanAttribute('aspnetcore');
  }
  public set aspnetcore(value: boolean | cdktf.IResolvable) {
    this._aspnetcore = value;
  }
  public resetAspnetcore() {
    this._aspnetcore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspnetcoreInput() {
    return this._aspnetcore;
  }

  // aspnetcore_agentlistener - computed: false, optional: true, required: false
  private _aspnetcoreAgentlistener?: boolean | cdktf.IResolvable; 
  public get aspnetcoreAgentlistener() {
    return this.getBooleanAttribute('aspnetcore_agentlistener');
  }
  public set aspnetcoreAgentlistener(value: boolean | cdktf.IResolvable) {
    this._aspnetcoreAgentlistener = value;
  }
  public resetAspnetcoreAgentlistener() {
    this._aspnetcoreAgentlistener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspnetcoreAgentlistenerInput() {
    return this._aspnetcoreAgentlistener;
  }

  // aspnetcore_agentworker - computed: false, optional: true, required: false
  private _aspnetcoreAgentworker?: boolean | cdktf.IResolvable; 
  public get aspnetcoreAgentworker() {
    return this.getBooleanAttribute('aspnetcore_agentworker');
  }
  public set aspnetcoreAgentworker(value: boolean | cdktf.IResolvable) {
    this._aspnetcoreAgentworker = value;
  }
  public resetAspnetcoreAgentworker() {
    this._aspnetcoreAgentworker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aspnetcoreAgentworkerInput() {
    return this._aspnetcoreAgentworker;
  }

  // cf - computed: false, optional: true, required: false
  private _cf?: boolean | cdktf.IResolvable; 
  public get cf() {
    return this.getBooleanAttribute('cf');
  }
  public set cf(value: boolean | cdktf.IResolvable) {
    this._cf = value;
  }
  public resetCf() {
    this._cf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfInput() {
    return this._cf;
  }

  // cf_appsmanagerjs - computed: false, optional: true, required: false
  private _cfAppsmanagerjs?: boolean | cdktf.IResolvable; 
  public get cfAppsmanagerjs() {
    return this.getBooleanAttribute('cf_appsmanagerjs');
  }
  public set cfAppsmanagerjs(value: boolean | cdktf.IResolvable) {
    this._cfAppsmanagerjs = value;
  }
  public resetCfAppsmanagerjs() {
    this._cfAppsmanagerjs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfAppsmanagerjsInput() {
    return this._cfAppsmanagerjs;
  }

  // cmd_foreverbinmonitor - computed: false, optional: true, required: false
  private _cmdForeverbinmonitor?: boolean | cdktf.IResolvable; 
  public get cmdForeverbinmonitor() {
    return this.getBooleanAttribute('cmd_foreverbinmonitor');
  }
  public set cmdForeverbinmonitor(value: boolean | cdktf.IResolvable) {
    this._cmdForeverbinmonitor = value;
  }
  public resetCmdForeverbinmonitor() {
    this._cmdForeverbinmonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cmdForeverbinmonitorInput() {
    return this._cmdForeverbinmonitor;
  }

  // container - computed: false, optional: true, required: false
  private _container?: boolean | cdktf.IResolvable; 
  public get container() {
    return this.getBooleanAttribute('container');
  }
  public set container(value: boolean | cdktf.IResolvable) {
    this._container = value;
  }
  public resetContainer() {
    this._container = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // docker_pauseamd64 - computed: false, optional: true, required: false
  private _dockerPauseamd64?: boolean | cdktf.IResolvable; 
  public get dockerPauseamd64() {
    return this.getBooleanAttribute('docker_pauseamd64');
  }
  public set dockerPauseamd64(value: boolean | cdktf.IResolvable) {
    this._dockerPauseamd64 = value;
  }
  public resetDockerPauseamd64() {
    this._dockerPauseamd64 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dockerPauseamd64Input() {
    return this._dockerPauseamd64;
  }

  // exe_adapter - computed: false, optional: true, required: false
  private _exeAdapter?: boolean | cdktf.IResolvable; 
  public get exeAdapter() {
    return this.getBooleanAttribute('exe_adapter');
  }
  public set exeAdapter(value: boolean | cdktf.IResolvable) {
    this._exeAdapter = value;
  }
  public resetExeAdapter() {
    this._exeAdapter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAdapterInput() {
    return this._exeAdapter;
  }

  // exe_agentlistener - computed: false, optional: true, required: false
  private _exeAgentlistener?: boolean | cdktf.IResolvable; 
  public get exeAgentlistener() {
    return this.getBooleanAttribute('exe_agentlistener');
  }
  public set exeAgentlistener(value: boolean | cdktf.IResolvable) {
    this._exeAgentlistener = value;
  }
  public resetExeAgentlistener() {
    this._exeAgentlistener = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAgentlistenerInput() {
    return this._exeAgentlistener;
  }

  // exe_agentworker - computed: false, optional: true, required: false
  private _exeAgentworker?: boolean | cdktf.IResolvable; 
  public get exeAgentworker() {
    return this.getBooleanAttribute('exe_agentworker');
  }
  public set exeAgentworker(value: boolean | cdktf.IResolvable) {
    this._exeAgentworker = value;
  }
  public resetExeAgentworker() {
    this._exeAgentworker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAgentworkerInput() {
    return this._exeAgentworker;
  }

  // exe_ansible - computed: false, optional: true, required: false
  private _exeAnsible?: boolean | cdktf.IResolvable; 
  public get exeAnsible() {
    return this.getBooleanAttribute('exe_ansible');
  }
  public set exeAnsible(value: boolean | cdktf.IResolvable) {
    this._exeAnsible = value;
  }
  public resetExeAnsible() {
    this._exeAnsible = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAnsibleInput() {
    return this._exeAnsible;
  }

  // exe_auctioneer - computed: false, optional: true, required: false
  private _exeAuctioneer?: boolean | cdktf.IResolvable; 
  public get exeAuctioneer() {
    return this.getBooleanAttribute('exe_auctioneer');
  }
  public set exeAuctioneer(value: boolean | cdktf.IResolvable) {
    this._exeAuctioneer = value;
  }
  public resetExeAuctioneer() {
    this._exeAuctioneer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAuctioneerInput() {
    return this._exeAuctioneer;
  }

  // exe_auditbeat - computed: false, optional: true, required: false
  private _exeAuditbeat?: boolean | cdktf.IResolvable; 
  public get exeAuditbeat() {
    return this.getBooleanAttribute('exe_auditbeat');
  }
  public set exeAuditbeat(value: boolean | cdktf.IResolvable) {
    this._exeAuditbeat = value;
  }
  public resetExeAuditbeat() {
    this._exeAuditbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAuditbeatInput() {
    return this._exeAuditbeat;
  }

  // exe_aws - computed: false, optional: true, required: false
  private _exeAws?: boolean | cdktf.IResolvable; 
  public get exeAws() {
    return this.getBooleanAttribute('exe_aws');
  }
  public set exeAws(value: boolean | cdktf.IResolvable) {
    this._exeAws = value;
  }
  public resetExeAws() {
    this._exeAws = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAwsInput() {
    return this._exeAws;
  }

  // exe_az - computed: false, optional: true, required: false
  private _exeAz?: boolean | cdktf.IResolvable; 
  public get exeAz() {
    return this.getBooleanAttribute('exe_az');
  }
  public set exeAz(value: boolean | cdktf.IResolvable) {
    this._exeAz = value;
  }
  public resetExeAz() {
    this._exeAz = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeAzInput() {
    return this._exeAz;
  }

  // exe_bbs - computed: false, optional: true, required: false
  private _exeBbs?: boolean | cdktf.IResolvable; 
  public get exeBbs() {
    return this.getBooleanAttribute('exe_bbs');
  }
  public set exeBbs(value: boolean | cdktf.IResolvable) {
    this._exeBbs = value;
  }
  public resetExeBbs() {
    this._exeBbs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeBbsInput() {
    return this._exeBbs;
  }

  // exe_caddy - computed: false, optional: true, required: false
  private _exeCaddy?: boolean | cdktf.IResolvable; 
  public get exeCaddy() {
    return this.getBooleanAttribute('exe_caddy');
  }
  public set exeCaddy(value: boolean | cdktf.IResolvable) {
    this._exeCaddy = value;
  }
  public resetExeCaddy() {
    this._exeCaddy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeCaddyInput() {
    return this._exeCaddy;
  }

  // exe_caliconode - computed: false, optional: true, required: false
  private _exeCaliconode?: boolean | cdktf.IResolvable; 
  public get exeCaliconode() {
    return this.getBooleanAttribute('exe_caliconode');
  }
  public set exeCaliconode(value: boolean | cdktf.IResolvable) {
    this._exeCaliconode = value;
  }
  public resetExeCaliconode() {
    this._exeCaliconode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeCaliconodeInput() {
    return this._exeCaliconode;
  }

  // exe_casclient - computed: false, optional: true, required: false
  private _exeCasclient?: boolean | cdktf.IResolvable; 
  public get exeCasclient() {
    return this.getBooleanAttribute('exe_casclient');
  }
  public set exeCasclient(value: boolean | cdktf.IResolvable) {
    this._exeCasclient = value;
  }
  public resetExeCasclient() {
    this._exeCasclient = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeCasclientInput() {
    return this._exeCasclient;
  }

  // exe_ccuploader - computed: false, optional: true, required: false
  private _exeCcuploader?: boolean | cdktf.IResolvable; 
  public get exeCcuploader() {
    return this.getBooleanAttribute('exe_ccuploader');
  }
  public set exeCcuploader(value: boolean | cdktf.IResolvable) {
    this._exeCcuploader = value;
  }
  public resetExeCcuploader() {
    this._exeCcuploader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeCcuploaderInput() {
    return this._exeCcuploader;
  }

  // exe_conda - computed: false, optional: true, required: false
  private _exeConda?: boolean | cdktf.IResolvable; 
  public get exeConda() {
    return this.getBooleanAttribute('exe_conda');
  }
  public set exeConda(value: boolean | cdktf.IResolvable) {
    this._exeConda = value;
  }
  public resetExeConda() {
    this._exeConda = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeCondaInput() {
    return this._exeConda;
  }

  // exe_doppler - computed: false, optional: true, required: false
  private _exeDoppler?: boolean | cdktf.IResolvable; 
  public get exeDoppler() {
    return this.getBooleanAttribute('exe_doppler');
  }
  public set exeDoppler(value: boolean | cdktf.IResolvable) {
    this._exeDoppler = value;
  }
  public resetExeDoppler() {
    this._exeDoppler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeDopplerInput() {
    return this._exeDoppler;
  }

  // exe_filebeat - computed: false, optional: true, required: false
  private _exeFilebeat?: boolean | cdktf.IResolvable; 
  public get exeFilebeat() {
    return this.getBooleanAttribute('exe_filebeat');
  }
  public set exeFilebeat(value: boolean | cdktf.IResolvable) {
    this._exeFilebeat = value;
  }
  public resetExeFilebeat() {
    this._exeFilebeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeFilebeatInput() {
    return this._exeFilebeat;
  }

  // exe_flexnetjobexecutorservice - computed: false, optional: true, required: false
  private _exeFlexnetjobexecutorservice?: boolean | cdktf.IResolvable; 
  public get exeFlexnetjobexecutorservice() {
    return this.getBooleanAttribute('exe_flexnetjobexecutorservice');
  }
  public set exeFlexnetjobexecutorservice(value: boolean | cdktf.IResolvable) {
    this._exeFlexnetjobexecutorservice = value;
  }
  public resetExeFlexnetjobexecutorservice() {
    this._exeFlexnetjobexecutorservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeFlexnetjobexecutorserviceInput() {
    return this._exeFlexnetjobexecutorservice;
  }

  // exe_flexnetmaintenanceremotingservice - computed: false, optional: true, required: false
  private _exeFlexnetmaintenanceremotingservice?: boolean | cdktf.IResolvable; 
  public get exeFlexnetmaintenanceremotingservice() {
    return this.getBooleanAttribute('exe_flexnetmaintenanceremotingservice');
  }
  public set exeFlexnetmaintenanceremotingservice(value: boolean | cdktf.IResolvable) {
    this._exeFlexnetmaintenanceremotingservice = value;
  }
  public resetExeFlexnetmaintenanceremotingservice() {
    this._exeFlexnetmaintenanceremotingservice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeFlexnetmaintenanceremotingserviceInput() {
    return this._exeFlexnetmaintenanceremotingservice;
  }

  // exe_functionbeat - computed: false, optional: true, required: false
  private _exeFunctionbeat?: boolean | cdktf.IResolvable; 
  public get exeFunctionbeat() {
    return this.getBooleanAttribute('exe_functionbeat');
  }
  public set exeFunctionbeat(value: boolean | cdktf.IResolvable) {
    this._exeFunctionbeat = value;
  }
  public resetExeFunctionbeat() {
    this._exeFunctionbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeFunctionbeatInput() {
    return this._exeFunctionbeat;
  }

  // exe_gcloud - computed: false, optional: true, required: false
  private _exeGcloud?: boolean | cdktf.IResolvable; 
  public get exeGcloud() {
    return this.getBooleanAttribute('exe_gcloud');
  }
  public set exeGcloud(value: boolean | cdktf.IResolvable) {
    this._exeGcloud = value;
  }
  public resetExeGcloud() {
    this._exeGcloud = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeGcloudInput() {
    return this._exeGcloud;
  }

  // exe_gorouter - computed: false, optional: true, required: false
  private _exeGorouter?: boolean | cdktf.IResolvable; 
  public get exeGorouter() {
    return this.getBooleanAttribute('exe_gorouter');
  }
  public set exeGorouter(value: boolean | cdktf.IResolvable) {
    this._exeGorouter = value;
  }
  public resetExeGorouter() {
    this._exeGorouter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeGorouterInput() {
    return this._exeGorouter;
  }

  // exe_grootfs - computed: false, optional: true, required: false
  private _exeGrootfs?: boolean | cdktf.IResolvable; 
  public get exeGrootfs() {
    return this.getBooleanAttribute('exe_grootfs');
  }
  public set exeGrootfs(value: boolean | cdktf.IResolvable) {
    this._exeGrootfs = value;
  }
  public resetExeGrootfs() {
    this._exeGrootfs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeGrootfsInput() {
    return this._exeGrootfs;
  }

  // exe_hatch - computed: false, optional: true, required: false
  private _exeHatch?: boolean | cdktf.IResolvable; 
  public get exeHatch() {
    return this.getBooleanAttribute('exe_hatch');
  }
  public set exeHatch(value: boolean | cdktf.IResolvable) {
    this._exeHatch = value;
  }
  public resetExeHatch() {
    this._exeHatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeHatchInput() {
    return this._exeHatch;
  }

  // exe_heartbeat - computed: false, optional: true, required: false
  private _exeHeartbeat?: boolean | cdktf.IResolvable; 
  public get exeHeartbeat() {
    return this.getBooleanAttribute('exe_heartbeat');
  }
  public set exeHeartbeat(value: boolean | cdktf.IResolvable) {
    this._exeHeartbeat = value;
  }
  public resetExeHeartbeat() {
    this._exeHeartbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeHeartbeatInput() {
    return this._exeHeartbeat;
  }

  // exe_influxd - computed: false, optional: true, required: false
  private _exeInfluxd?: boolean | cdktf.IResolvable; 
  public get exeInfluxd() {
    return this.getBooleanAttribute('exe_influxd');
  }
  public set exeInfluxd(value: boolean | cdktf.IResolvable) {
    this._exeInfluxd = value;
  }
  public resetExeInfluxd() {
    this._exeInfluxd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeInfluxdInput() {
    return this._exeInfluxd;
  }

  // exe_jupyter - computed: false, optional: true, required: false
  private _exeJupyter?: boolean | cdktf.IResolvable; 
  public get exeJupyter() {
    return this.getBooleanAttribute('exe_jupyter');
  }
  public set exeJupyter(value: boolean | cdktf.IResolvable) {
    this._exeJupyter = value;
  }
  public resetExeJupyter() {
    this._exeJupyter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeJupyterInput() {
    return this._exeJupyter;
  }

  // exe_locket - computed: false, optional: true, required: false
  private _exeLocket?: boolean | cdktf.IResolvable; 
  public get exeLocket() {
    return this.getBooleanAttribute('exe_locket');
  }
  public set exeLocket(value: boolean | cdktf.IResolvable) {
    this._exeLocket = value;
  }
  public resetExeLocket() {
    this._exeLocket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeLocketInput() {
    return this._exeLocket;
  }

  // exe_metricbeat - computed: false, optional: true, required: false
  private _exeMetricbeat?: boolean | cdktf.IResolvable; 
  public get exeMetricbeat() {
    return this.getBooleanAttribute('exe_metricbeat');
  }
  public set exeMetricbeat(value: boolean | cdktf.IResolvable) {
    this._exeMetricbeat = value;
  }
  public resetExeMetricbeat() {
    this._exeMetricbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeMetricbeatInput() {
    return this._exeMetricbeat;
  }

  // exe_metron - computed: false, optional: true, required: false
  private _exeMetron?: boolean | cdktf.IResolvable; 
  public get exeMetron() {
    return this.getBooleanAttribute('exe_metron');
  }
  public set exeMetron(value: boolean | cdktf.IResolvable) {
    this._exeMetron = value;
  }
  public resetExeMetron() {
    this._exeMetron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeMetronInput() {
    return this._exeMetron;
  }

  // exe_mqsi - computed: false, optional: true, required: false
  private _exeMqsi?: boolean | cdktf.IResolvable; 
  public get exeMqsi() {
    return this.getBooleanAttribute('exe_mqsi');
  }
  public set exeMqsi(value: boolean | cdktf.IResolvable) {
    this._exeMqsi = value;
  }
  public resetExeMqsi() {
    this._exeMqsi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeMqsiInput() {
    return this._exeMqsi;
  }

  // exe_oc - computed: false, optional: true, required: false
  private _exeOc?: boolean | cdktf.IResolvable; 
  public get exeOc() {
    return this.getBooleanAttribute('exe_oc');
  }
  public set exeOc(value: boolean | cdktf.IResolvable) {
    this._exeOc = value;
  }
  public resetExeOc() {
    this._exeOc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeOcInput() {
    return this._exeOc;
  }

  // exe_openhandlecollector - computed: false, optional: true, required: false
  private _exeOpenhandlecollector?: boolean | cdktf.IResolvable; 
  public get exeOpenhandlecollector() {
    return this.getBooleanAttribute('exe_openhandlecollector');
  }
  public set exeOpenhandlecollector(value: boolean | cdktf.IResolvable) {
    this._exeOpenhandlecollector = value;
  }
  public resetExeOpenhandlecollector() {
    this._exeOpenhandlecollector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeOpenhandlecollectorInput() {
    return this._exeOpenhandlecollector;
  }

  // exe_openstack - computed: false, optional: true, required: false
  private _exeOpenstack?: boolean | cdktf.IResolvable; 
  public get exeOpenstack() {
    return this.getBooleanAttribute('exe_openstack');
  }
  public set exeOpenstack(value: boolean | cdktf.IResolvable) {
    this._exeOpenstack = value;
  }
  public resetExeOpenstack() {
    this._exeOpenstack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeOpenstackInput() {
    return this._exeOpenstack;
  }

  // exe_optcnibinhostlocal - computed: false, optional: true, required: false
  private _exeOptcnibinhostlocal?: boolean | cdktf.IResolvable; 
  public get exeOptcnibinhostlocal() {
    return this.getBooleanAttribute('exe_optcnibinhostlocal');
  }
  public set exeOptcnibinhostlocal(value: boolean | cdktf.IResolvable) {
    this._exeOptcnibinhostlocal = value;
  }
  public resetExeOptcnibinhostlocal() {
    this._exeOptcnibinhostlocal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeOptcnibinhostlocalInput() {
    return this._exeOptcnibinhostlocal;
  }

  // exe_packetbeat - computed: false, optional: true, required: false
  private _exePacketbeat?: boolean | cdktf.IResolvable; 
  public get exePacketbeat() {
    return this.getBooleanAttribute('exe_packetbeat');
  }
  public set exePacketbeat(value: boolean | cdktf.IResolvable) {
    this._exePacketbeat = value;
  }
  public resetExePacketbeat() {
    this._exePacketbeat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exePacketbeatInput() {
    return this._exePacketbeat;
  }

  // exe_phpcgi - computed: false, optional: true, required: false
  private _exePhpcgi?: boolean | cdktf.IResolvable; 
  public get exePhpcgi() {
    return this.getBooleanAttribute('exe_phpcgi');
  }
  public set exePhpcgi(value: boolean | cdktf.IResolvable) {
    this._exePhpcgi = value;
  }
  public resetExePhpcgi() {
    this._exePhpcgi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exePhpcgiInput() {
    return this._exePhpcgi;
  }

  // exe_pip - computed: false, optional: true, required: false
  private _exePip?: boolean | cdktf.IResolvable; 
  public get exePip() {
    return this.getBooleanAttribute('exe_pip');
  }
  public set exePip(value: boolean | cdktf.IResolvable) {
    this._exePip = value;
  }
  public resetExePip() {
    this._exePip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exePipInput() {
    return this._exePip;
  }

  // exe_rep - computed: false, optional: true, required: false
  private _exeRep?: boolean | cdktf.IResolvable; 
  public get exeRep() {
    return this.getBooleanAttribute('exe_rep');
  }
  public set exeRep(value: boolean | cdktf.IResolvable) {
    this._exeRep = value;
  }
  public resetExeRep() {
    this._exeRep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeRepInput() {
    return this._exeRep;
  }

  // exe_routeemitter - computed: false, optional: true, required: false
  private _exeRouteemitter?: boolean | cdktf.IResolvable; 
  public get exeRouteemitter() {
    return this.getBooleanAttribute('exe_routeemitter');
  }
  public set exeRouteemitter(value: boolean | cdktf.IResolvable) {
    this._exeRouteemitter = value;
  }
  public resetExeRouteemitter() {
    this._exeRouteemitter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeRouteemitterInput() {
    return this._exeRouteemitter;
  }

  // exe_routeregistrar - computed: false, optional: true, required: false
  private _exeRouteregistrar?: boolean | cdktf.IResolvable; 
  public get exeRouteregistrar() {
    return this.getBooleanAttribute('exe_routeregistrar');
  }
  public set exeRouteregistrar(value: boolean | cdktf.IResolvable) {
    this._exeRouteregistrar = value;
  }
  public resetExeRouteregistrar() {
    this._exeRouteregistrar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeRouteregistrarInput() {
    return this._exeRouteregistrar;
  }

  // exe_routingapi - computed: false, optional: true, required: false
  private _exeRoutingapi?: boolean | cdktf.IResolvable; 
  public get exeRoutingapi() {
    return this.getBooleanAttribute('exe_routingapi');
  }
  public set exeRoutingapi(value: boolean | cdktf.IResolvable) {
    this._exeRoutingapi = value;
  }
  public resetExeRoutingapi() {
    this._exeRoutingapi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeRoutingapiInput() {
    return this._exeRoutingapi;
  }

  // exe_schedular - computed: false, optional: true, required: false
  private _exeSchedular?: boolean | cdktf.IResolvable; 
  public get exeSchedular() {
    return this.getBooleanAttribute('exe_schedular');
  }
  public set exeSchedular(value: boolean | cdktf.IResolvable) {
    this._exeSchedular = value;
  }
  public resetExeSchedular() {
    this._exeSchedular = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeSchedularInput() {
    return this._exeSchedular;
  }

  // exe_silkdaemon - computed: false, optional: true, required: false
  private _exeSilkdaemon?: boolean | cdktf.IResolvable; 
  public get exeSilkdaemon() {
    return this.getBooleanAttribute('exe_silkdaemon');
  }
  public set exeSilkdaemon(value: boolean | cdktf.IResolvable) {
    this._exeSilkdaemon = value;
  }
  public resetExeSilkdaemon() {
    this._exeSilkdaemon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeSilkdaemonInput() {
    return this._exeSilkdaemon;
  }

  // exe_switchboard - computed: false, optional: true, required: false
  private _exeSwitchboard?: boolean | cdktf.IResolvable; 
  public get exeSwitchboard() {
    return this.getBooleanAttribute('exe_switchboard');
  }
  public set exeSwitchboard(value: boolean | cdktf.IResolvable) {
    this._exeSwitchboard = value;
  }
  public resetExeSwitchboard() {
    this._exeSwitchboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeSwitchboardInput() {
    return this._exeSwitchboard;
  }

  // exe_syslogdrainbinder - computed: false, optional: true, required: false
  private _exeSyslogdrainbinder?: boolean | cdktf.IResolvable; 
  public get exeSyslogdrainbinder() {
    return this.getBooleanAttribute('exe_syslogdrainbinder');
  }
  public set exeSyslogdrainbinder(value: boolean | cdktf.IResolvable) {
    this._exeSyslogdrainbinder = value;
  }
  public resetExeSyslogdrainbinder() {
    this._exeSyslogdrainbinder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeSyslogdrainbinderInput() {
    return this._exeSyslogdrainbinder;
  }

  // exe_tardis - computed: false, optional: true, required: false
  private _exeTardis?: boolean | cdktf.IResolvable; 
  public get exeTardis() {
    return this.getBooleanAttribute('exe_tardis');
  }
  public set exeTardis(value: boolean | cdktf.IResolvable) {
    this._exeTardis = value;
  }
  public resetExeTardis() {
    this._exeTardis = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeTardisInput() {
    return this._exeTardis;
  }

  // exe_tmpbuildpacks - computed: false, optional: true, required: false
  private _exeTmpbuildpacks?: boolean | cdktf.IResolvable; 
  public get exeTmpbuildpacks() {
    return this.getBooleanAttribute('exe_tmpbuildpacks');
  }
  public set exeTmpbuildpacks(value: boolean | cdktf.IResolvable) {
    this._exeTmpbuildpacks = value;
  }
  public resetExeTmpbuildpacks() {
    this._exeTmpbuildpacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeTmpbuildpacksInput() {
    return this._exeTmpbuildpacks;
  }

  // exe_tpswatcher - computed: false, optional: true, required: false
  private _exeTpswatcher?: boolean | cdktf.IResolvable; 
  public get exeTpswatcher() {
    return this.getBooleanAttribute('exe_tpswatcher');
  }
  public set exeTpswatcher(value: boolean | cdktf.IResolvable) {
    this._exeTpswatcher = value;
  }
  public resetExeTpswatcher() {
    this._exeTpswatcher = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeTpswatcherInput() {
    return this._exeTpswatcher;
  }

  // exe_trafficcontroller - computed: false, optional: true, required: false
  private _exeTrafficcontroller?: boolean | cdktf.IResolvable; 
  public get exeTrafficcontroller() {
    return this.getBooleanAttribute('exe_trafficcontroller');
  }
  public set exeTrafficcontroller(value: boolean | cdktf.IResolvable) {
    this._exeTrafficcontroller = value;
  }
  public resetExeTrafficcontroller() {
    this._exeTrafficcontroller = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeTrafficcontrollerInput() {
    return this._exeTrafficcontroller;
  }

  // exe_uipath - computed: false, optional: true, required: false
  private _exeUipath?: boolean | cdktf.IResolvable; 
  public get exeUipath() {
    return this.getBooleanAttribute('exe_uipath');
  }
  public set exeUipath(value: boolean | cdktf.IResolvable) {
    this._exeUipath = value;
  }
  public resetExeUipath() {
    this._exeUipath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeUipathInput() {
    return this._exeUipath;
  }

  // exe_userbinpiper - computed: false, optional: true, required: false
  private _exeUserbinpiper?: boolean | cdktf.IResolvable; 
  public get exeUserbinpiper() {
    return this.getBooleanAttribute('exe_userbinpiper');
  }
  public set exeUserbinpiper(value: boolean | cdktf.IResolvable) {
    this._exeUserbinpiper = value;
  }
  public resetExeUserbinpiper() {
    this._exeUserbinpiper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeUserbinpiperInput() {
    return this._exeUserbinpiper;
  }

  // exe_w3wp - computed: false, optional: true, required: false
  private _exeW3Wp?: boolean | cdktf.IResolvable; 
  public get exeW3Wp() {
    return this.getBooleanAttribute('exe_w3wp');
  }
  public set exeW3Wp(value: boolean | cdktf.IResolvable) {
    this._exeW3Wp = value;
  }
  public resetExeW3Wp() {
    this._exeW3Wp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeW3WpInput() {
    return this._exeW3Wp;
  }

  // exe_wheel - computed: false, optional: true, required: false
  private _exeWheel?: boolean | cdktf.IResolvable; 
  public get exeWheel() {
    return this.getBooleanAttribute('exe_wheel');
  }
  public set exeWheel(value: boolean | cdktf.IResolvable) {
    this._exeWheel = value;
  }
  public resetExeWheel() {
    this._exeWheel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeWheelInput() {
    return this._exeWheel;
  }

  // exe_yq - computed: false, optional: true, required: false
  private _exeYq?: boolean | cdktf.IResolvable; 
  public get exeYq() {
    return this.getBooleanAttribute('exe_yq');
  }
  public set exeYq(value: boolean | cdktf.IResolvable) {
    this._exeYq = value;
  }
  public resetExeYq() {
    this._exeYq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeYqInput() {
    return this._exeYq;
  }

  // exe_yum - computed: false, optional: true, required: false
  private _exeYum?: boolean | cdktf.IResolvable; 
  public get exeYum() {
    return this.getBooleanAttribute('exe_yum');
  }
  public set exeYum(value: boolean | cdktf.IResolvable) {
    this._exeYum = value;
  }
  public resetExeYum() {
    this._exeYum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exeYumInput() {
    return this._exeYum;
  }

  // go_static - computed: false, optional: true, required: false
  private _goStatic?: boolean | cdktf.IResolvable; 
  public get goStatic() {
    return this.getBooleanAttribute('go_static');
  }
  public set goStatic(value: boolean | cdktf.IResolvable) {
    this._goStatic = value;
  }
  public resetGoStatic() {
    this._goStatic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goStaticInput() {
    return this._goStatic;
  }

  // host_group_id - computed: false, optional: true, required: false
  private _hostGroupId?: string; 
  public get hostGroupId() {
    return this.getStringAttribute('host_group_id');
  }
  public set hostGroupId(value: string) {
    this._hostGroupId = value;
  }
  public resetHostGroupId() {
    this._hostGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostGroupIdInput() {
    return this._hostGroupId;
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

  // jar_dtibmmqconnector - computed: false, optional: true, required: false
  private _jarDtibmmqconnector?: boolean | cdktf.IResolvable; 
  public get jarDtibmmqconnector() {
    return this.getBooleanAttribute('jar_dtibmmqconnector');
  }
  public set jarDtibmmqconnector(value: boolean | cdktf.IResolvable) {
    this._jarDtibmmqconnector = value;
  }
  public resetJarDtibmmqconnector() {
    this._jarDtibmmqconnector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarDtibmmqconnectorInput() {
    return this._jarDtibmmqconnector;
  }

  // jar_eclipseequinox - computed: false, optional: true, required: false
  private _jarEclipseequinox?: boolean | cdktf.IResolvable; 
  public get jarEclipseequinox() {
    return this.getBooleanAttribute('jar_eclipseequinox');
  }
  public set jarEclipseequinox(value: boolean | cdktf.IResolvable) {
    this._jarEclipseequinox = value;
  }
  public resetJarEclipseequinox() {
    this._jarEclipseequinox = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jarEclipseequinoxInput() {
    return this._jarEclipseequinox;
  }

  // k8s_cassandraoperator - computed: false, optional: true, required: false
  private _k8SCassandraoperator?: boolean | cdktf.IResolvable; 
  public get k8SCassandraoperator() {
    return this.getBooleanAttribute('k8s_cassandraoperator');
  }
  public set k8SCassandraoperator(value: boolean | cdktf.IResolvable) {
    this._k8SCassandraoperator = value;
  }
  public resetK8SCassandraoperator() {
    this._k8SCassandraoperator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SCassandraoperatorInput() {
    return this._k8SCassandraoperator;
  }

  // k8s_containerpod - computed: false, optional: true, required: false
  private _k8SContainerpod?: boolean | cdktf.IResolvable; 
  public get k8SContainerpod() {
    return this.getBooleanAttribute('k8s_containerpod');
  }
  public set k8SContainerpod(value: boolean | cdktf.IResolvable) {
    this._k8SContainerpod = value;
  }
  public resetK8SContainerpod() {
    this._k8SContainerpod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SContainerpodInput() {
    return this._k8SContainerpod;
  }

  // k8s_namespace - computed: false, optional: true, required: false
  private _k8SNamespace?: boolean | cdktf.IResolvable; 
  public get k8SNamespace() {
    return this.getBooleanAttribute('k8s_namespace');
  }
  public set k8SNamespace(value: boolean | cdktf.IResolvable) {
    this._k8SNamespace = value;
  }
  public resetK8SNamespace() {
    this._k8SNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get k8SNamespaceInput() {
    return this._k8SNamespace;
  }

  // node_binpm2 - computed: false, optional: true, required: false
  private _nodeBinpm2?: boolean | cdktf.IResolvable; 
  public get nodeBinpm2() {
    return this.getBooleanAttribute('node_binpm2');
  }
  public set nodeBinpm2(value: boolean | cdktf.IResolvable) {
    this._nodeBinpm2 = value;
  }
  public resetNodeBinpm2() {
    this._nodeBinpm2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeBinpm2Input() {
    return this._nodeBinpm2;
  }

  // node_corepack - computed: false, optional: true, required: false
  private _nodeCorepack?: boolean | cdktf.IResolvable; 
  public get nodeCorepack() {
    return this.getBooleanAttribute('node_corepack');
  }
  public set nodeCorepack(value: boolean | cdktf.IResolvable) {
    this._nodeCorepack = value;
  }
  public resetNodeCorepack() {
    this._nodeCorepack = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeCorepackInput() {
    return this._nodeCorepack;
  }

  // node_grunt - computed: false, optional: true, required: false
  private _nodeGrunt?: boolean | cdktf.IResolvable; 
  public get nodeGrunt() {
    return this.getBooleanAttribute('node_grunt');
  }
  public set nodeGrunt(value: boolean | cdktf.IResolvable) {
    this._nodeGrunt = value;
  }
  public resetNodeGrunt() {
    this._nodeGrunt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGruntInput() {
    return this._nodeGrunt;
  }

  // node_gulpcli - computed: false, optional: true, required: false
  private _nodeGulpcli?: boolean | cdktf.IResolvable; 
  public get nodeGulpcli() {
    return this.getBooleanAttribute('node_gulpcli');
  }
  public set nodeGulpcli(value: boolean | cdktf.IResolvable) {
    this._nodeGulpcli = value;
  }
  public resetNodeGulpcli() {
    this._nodeGulpcli = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGulpcliInput() {
    return this._nodeGulpcli;
  }

  // node_nodegyp - computed: false, optional: true, required: false
  private _nodeNodegyp?: boolean | cdktf.IResolvable; 
  public get nodeNodegyp() {
    return this.getBooleanAttribute('node_nodegyp');
  }
  public set nodeNodegyp(value: boolean | cdktf.IResolvable) {
    this._nodeNodegyp = value;
  }
  public resetNodeNodegyp() {
    this._nodeNodegyp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNodegypInput() {
    return this._nodeNodegyp;
  }

  // node_nodepregyp - computed: false, optional: true, required: false
  private _nodeNodepregyp?: boolean | cdktf.IResolvable; 
  public get nodeNodepregyp() {
    return this.getBooleanAttribute('node_nodepregyp');
  }
  public set nodeNodepregyp(value: boolean | cdktf.IResolvable) {
    this._nodeNodepregyp = value;
  }
  public resetNodeNodepregyp() {
    this._nodeNodepregyp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNodepregypInput() {
    return this._nodeNodepregyp;
  }

  // node_npm - computed: false, optional: true, required: false
  private _nodeNpm?: boolean | cdktf.IResolvable; 
  public get nodeNpm() {
    return this.getBooleanAttribute('node_npm');
  }
  public set nodeNpm(value: boolean | cdktf.IResolvable) {
    this._nodeNpm = value;
  }
  public resetNodeNpm() {
    this._nodeNpm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNpmInput() {
    return this._nodeNpm;
  }

  // node_prebuildinstall - computed: false, optional: true, required: false
  private _nodePrebuildinstall?: boolean | cdktf.IResolvable; 
  public get nodePrebuildinstall() {
    return this.getBooleanAttribute('node_prebuildinstall');
  }
  public set nodePrebuildinstall(value: boolean | cdktf.IResolvable) {
    this._nodePrebuildinstall = value;
  }
  public resetNodePrebuildinstall() {
    this._nodePrebuildinstall = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodePrebuildinstallInput() {
    return this._nodePrebuildinstall;
  }

  // node_typescript - computed: false, optional: true, required: false
  private _nodeTypescript?: boolean | cdktf.IResolvable; 
  public get nodeTypescript() {
    return this.getBooleanAttribute('node_typescript');
  }
  public set nodeTypescript(value: boolean | cdktf.IResolvable) {
    this._nodeTypescript = value;
  }
  public resetNodeTypescript() {
    this._nodeTypescript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypescriptInput() {
    return this._nodeTypescript;
  }

  // node_yarn - computed: false, optional: true, required: false
  private _nodeYarn?: boolean | cdktf.IResolvable; 
  public get nodeYarn() {
    return this.getBooleanAttribute('node_yarn');
  }
  public set nodeYarn(value: boolean | cdktf.IResolvable) {
    this._nodeYarn = value;
  }
  public resetNodeYarn() {
    this._nodeYarn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeYarnInput() {
    return this._nodeYarn;
  }

  // php_script - computed: false, optional: true, required: false
  private _phpScript?: boolean | cdktf.IResolvable; 
  public get phpScript() {
    return this.getBooleanAttribute('php_script');
  }
  public set phpScript(value: boolean | cdktf.IResolvable) {
    this._phpScript = value;
  }
  public resetPhpScript() {
    this._phpScript = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phpScriptInput() {
    return this._phpScript;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aspnetcore: cdktf.booleanToTerraform(this._aspnetcore),
      aspnetcore_agentlistener: cdktf.booleanToTerraform(this._aspnetcoreAgentlistener),
      aspnetcore_agentworker: cdktf.booleanToTerraform(this._aspnetcoreAgentworker),
      cf: cdktf.booleanToTerraform(this._cf),
      cf_appsmanagerjs: cdktf.booleanToTerraform(this._cfAppsmanagerjs),
      cmd_foreverbinmonitor: cdktf.booleanToTerraform(this._cmdForeverbinmonitor),
      container: cdktf.booleanToTerraform(this._container),
      docker_pauseamd64: cdktf.booleanToTerraform(this._dockerPauseamd64),
      exe_adapter: cdktf.booleanToTerraform(this._exeAdapter),
      exe_agentlistener: cdktf.booleanToTerraform(this._exeAgentlistener),
      exe_agentworker: cdktf.booleanToTerraform(this._exeAgentworker),
      exe_ansible: cdktf.booleanToTerraform(this._exeAnsible),
      exe_auctioneer: cdktf.booleanToTerraform(this._exeAuctioneer),
      exe_auditbeat: cdktf.booleanToTerraform(this._exeAuditbeat),
      exe_aws: cdktf.booleanToTerraform(this._exeAws),
      exe_az: cdktf.booleanToTerraform(this._exeAz),
      exe_bbs: cdktf.booleanToTerraform(this._exeBbs),
      exe_caddy: cdktf.booleanToTerraform(this._exeCaddy),
      exe_caliconode: cdktf.booleanToTerraform(this._exeCaliconode),
      exe_casclient: cdktf.booleanToTerraform(this._exeCasclient),
      exe_ccuploader: cdktf.booleanToTerraform(this._exeCcuploader),
      exe_conda: cdktf.booleanToTerraform(this._exeConda),
      exe_doppler: cdktf.booleanToTerraform(this._exeDoppler),
      exe_filebeat: cdktf.booleanToTerraform(this._exeFilebeat),
      exe_flexnetjobexecutorservice: cdktf.booleanToTerraform(this._exeFlexnetjobexecutorservice),
      exe_flexnetmaintenanceremotingservice: cdktf.booleanToTerraform(this._exeFlexnetmaintenanceremotingservice),
      exe_functionbeat: cdktf.booleanToTerraform(this._exeFunctionbeat),
      exe_gcloud: cdktf.booleanToTerraform(this._exeGcloud),
      exe_gorouter: cdktf.booleanToTerraform(this._exeGorouter),
      exe_grootfs: cdktf.booleanToTerraform(this._exeGrootfs),
      exe_hatch: cdktf.booleanToTerraform(this._exeHatch),
      exe_heartbeat: cdktf.booleanToTerraform(this._exeHeartbeat),
      exe_influxd: cdktf.booleanToTerraform(this._exeInfluxd),
      exe_jupyter: cdktf.booleanToTerraform(this._exeJupyter),
      exe_locket: cdktf.booleanToTerraform(this._exeLocket),
      exe_metricbeat: cdktf.booleanToTerraform(this._exeMetricbeat),
      exe_metron: cdktf.booleanToTerraform(this._exeMetron),
      exe_mqsi: cdktf.booleanToTerraform(this._exeMqsi),
      exe_oc: cdktf.booleanToTerraform(this._exeOc),
      exe_openhandlecollector: cdktf.booleanToTerraform(this._exeOpenhandlecollector),
      exe_openstack: cdktf.booleanToTerraform(this._exeOpenstack),
      exe_optcnibinhostlocal: cdktf.booleanToTerraform(this._exeOptcnibinhostlocal),
      exe_packetbeat: cdktf.booleanToTerraform(this._exePacketbeat),
      exe_phpcgi: cdktf.booleanToTerraform(this._exePhpcgi),
      exe_pip: cdktf.booleanToTerraform(this._exePip),
      exe_rep: cdktf.booleanToTerraform(this._exeRep),
      exe_routeemitter: cdktf.booleanToTerraform(this._exeRouteemitter),
      exe_routeregistrar: cdktf.booleanToTerraform(this._exeRouteregistrar),
      exe_routingapi: cdktf.booleanToTerraform(this._exeRoutingapi),
      exe_schedular: cdktf.booleanToTerraform(this._exeSchedular),
      exe_silkdaemon: cdktf.booleanToTerraform(this._exeSilkdaemon),
      exe_switchboard: cdktf.booleanToTerraform(this._exeSwitchboard),
      exe_syslogdrainbinder: cdktf.booleanToTerraform(this._exeSyslogdrainbinder),
      exe_tardis: cdktf.booleanToTerraform(this._exeTardis),
      exe_tmpbuildpacks: cdktf.booleanToTerraform(this._exeTmpbuildpacks),
      exe_tpswatcher: cdktf.booleanToTerraform(this._exeTpswatcher),
      exe_trafficcontroller: cdktf.booleanToTerraform(this._exeTrafficcontroller),
      exe_uipath: cdktf.booleanToTerraform(this._exeUipath),
      exe_userbinpiper: cdktf.booleanToTerraform(this._exeUserbinpiper),
      exe_w3wp: cdktf.booleanToTerraform(this._exeW3Wp),
      exe_wheel: cdktf.booleanToTerraform(this._exeWheel),
      exe_yq: cdktf.booleanToTerraform(this._exeYq),
      exe_yum: cdktf.booleanToTerraform(this._exeYum),
      go_static: cdktf.booleanToTerraform(this._goStatic),
      host_group_id: cdktf.stringToTerraform(this._hostGroupId),
      id: cdktf.stringToTerraform(this._id),
      jar_dtibmmqconnector: cdktf.booleanToTerraform(this._jarDtibmmqconnector),
      jar_eclipseequinox: cdktf.booleanToTerraform(this._jarEclipseequinox),
      k8s_cassandraoperator: cdktf.booleanToTerraform(this._k8SCassandraoperator),
      k8s_containerpod: cdktf.booleanToTerraform(this._k8SContainerpod),
      k8s_namespace: cdktf.booleanToTerraform(this._k8SNamespace),
      node_binpm2: cdktf.booleanToTerraform(this._nodeBinpm2),
      node_corepack: cdktf.booleanToTerraform(this._nodeCorepack),
      node_grunt: cdktf.booleanToTerraform(this._nodeGrunt),
      node_gulpcli: cdktf.booleanToTerraform(this._nodeGulpcli),
      node_nodegyp: cdktf.booleanToTerraform(this._nodeNodegyp),
      node_nodepregyp: cdktf.booleanToTerraform(this._nodeNodepregyp),
      node_npm: cdktf.booleanToTerraform(this._nodeNpm),
      node_prebuildinstall: cdktf.booleanToTerraform(this._nodePrebuildinstall),
      node_typescript: cdktf.booleanToTerraform(this._nodeTypescript),
      node_yarn: cdktf.booleanToTerraform(this._nodeYarn),
      php_script: cdktf.booleanToTerraform(this._phpScript),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aspnetcore: {
        value: cdktf.booleanToHclTerraform(this._aspnetcore),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aspnetcore_agentlistener: {
        value: cdktf.booleanToHclTerraform(this._aspnetcoreAgentlistener),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      aspnetcore_agentworker: {
        value: cdktf.booleanToHclTerraform(this._aspnetcoreAgentworker),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cf: {
        value: cdktf.booleanToHclTerraform(this._cf),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cf_appsmanagerjs: {
        value: cdktf.booleanToHclTerraform(this._cfAppsmanagerjs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cmd_foreverbinmonitor: {
        value: cdktf.booleanToHclTerraform(this._cmdForeverbinmonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      container: {
        value: cdktf.booleanToHclTerraform(this._container),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      docker_pauseamd64: {
        value: cdktf.booleanToHclTerraform(this._dockerPauseamd64),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_adapter: {
        value: cdktf.booleanToHclTerraform(this._exeAdapter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_agentlistener: {
        value: cdktf.booleanToHclTerraform(this._exeAgentlistener),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_agentworker: {
        value: cdktf.booleanToHclTerraform(this._exeAgentworker),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_ansible: {
        value: cdktf.booleanToHclTerraform(this._exeAnsible),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_auctioneer: {
        value: cdktf.booleanToHclTerraform(this._exeAuctioneer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_auditbeat: {
        value: cdktf.booleanToHclTerraform(this._exeAuditbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_aws: {
        value: cdktf.booleanToHclTerraform(this._exeAws),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_az: {
        value: cdktf.booleanToHclTerraform(this._exeAz),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_bbs: {
        value: cdktf.booleanToHclTerraform(this._exeBbs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_caddy: {
        value: cdktf.booleanToHclTerraform(this._exeCaddy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_caliconode: {
        value: cdktf.booleanToHclTerraform(this._exeCaliconode),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_casclient: {
        value: cdktf.booleanToHclTerraform(this._exeCasclient),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_ccuploader: {
        value: cdktf.booleanToHclTerraform(this._exeCcuploader),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_conda: {
        value: cdktf.booleanToHclTerraform(this._exeConda),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_doppler: {
        value: cdktf.booleanToHclTerraform(this._exeDoppler),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_filebeat: {
        value: cdktf.booleanToHclTerraform(this._exeFilebeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_flexnetjobexecutorservice: {
        value: cdktf.booleanToHclTerraform(this._exeFlexnetjobexecutorservice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_flexnetmaintenanceremotingservice: {
        value: cdktf.booleanToHclTerraform(this._exeFlexnetmaintenanceremotingservice),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_functionbeat: {
        value: cdktf.booleanToHclTerraform(this._exeFunctionbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_gcloud: {
        value: cdktf.booleanToHclTerraform(this._exeGcloud),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_gorouter: {
        value: cdktf.booleanToHclTerraform(this._exeGorouter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_grootfs: {
        value: cdktf.booleanToHclTerraform(this._exeGrootfs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_hatch: {
        value: cdktf.booleanToHclTerraform(this._exeHatch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_heartbeat: {
        value: cdktf.booleanToHclTerraform(this._exeHeartbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_influxd: {
        value: cdktf.booleanToHclTerraform(this._exeInfluxd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_jupyter: {
        value: cdktf.booleanToHclTerraform(this._exeJupyter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_locket: {
        value: cdktf.booleanToHclTerraform(this._exeLocket),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_metricbeat: {
        value: cdktf.booleanToHclTerraform(this._exeMetricbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_metron: {
        value: cdktf.booleanToHclTerraform(this._exeMetron),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_mqsi: {
        value: cdktf.booleanToHclTerraform(this._exeMqsi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_oc: {
        value: cdktf.booleanToHclTerraform(this._exeOc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_openhandlecollector: {
        value: cdktf.booleanToHclTerraform(this._exeOpenhandlecollector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_openstack: {
        value: cdktf.booleanToHclTerraform(this._exeOpenstack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_optcnibinhostlocal: {
        value: cdktf.booleanToHclTerraform(this._exeOptcnibinhostlocal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_packetbeat: {
        value: cdktf.booleanToHclTerraform(this._exePacketbeat),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_phpcgi: {
        value: cdktf.booleanToHclTerraform(this._exePhpcgi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_pip: {
        value: cdktf.booleanToHclTerraform(this._exePip),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_rep: {
        value: cdktf.booleanToHclTerraform(this._exeRep),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_routeemitter: {
        value: cdktf.booleanToHclTerraform(this._exeRouteemitter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_routeregistrar: {
        value: cdktf.booleanToHclTerraform(this._exeRouteregistrar),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_routingapi: {
        value: cdktf.booleanToHclTerraform(this._exeRoutingapi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_schedular: {
        value: cdktf.booleanToHclTerraform(this._exeSchedular),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_silkdaemon: {
        value: cdktf.booleanToHclTerraform(this._exeSilkdaemon),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_switchboard: {
        value: cdktf.booleanToHclTerraform(this._exeSwitchboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_syslogdrainbinder: {
        value: cdktf.booleanToHclTerraform(this._exeSyslogdrainbinder),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_tardis: {
        value: cdktf.booleanToHclTerraform(this._exeTardis),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_tmpbuildpacks: {
        value: cdktf.booleanToHclTerraform(this._exeTmpbuildpacks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_tpswatcher: {
        value: cdktf.booleanToHclTerraform(this._exeTpswatcher),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_trafficcontroller: {
        value: cdktf.booleanToHclTerraform(this._exeTrafficcontroller),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_uipath: {
        value: cdktf.booleanToHclTerraform(this._exeUipath),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_userbinpiper: {
        value: cdktf.booleanToHclTerraform(this._exeUserbinpiper),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_w3wp: {
        value: cdktf.booleanToHclTerraform(this._exeW3Wp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_wheel: {
        value: cdktf.booleanToHclTerraform(this._exeWheel),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_yq: {
        value: cdktf.booleanToHclTerraform(this._exeYq),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      exe_yum: {
        value: cdktf.booleanToHclTerraform(this._exeYum),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      go_static: {
        value: cdktf.booleanToHclTerraform(this._goStatic),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      host_group_id: {
        value: cdktf.stringToHclTerraform(this._hostGroupId),
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
      jar_dtibmmqconnector: {
        value: cdktf.booleanToHclTerraform(this._jarDtibmmqconnector),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jar_eclipseequinox: {
        value: cdktf.booleanToHclTerraform(this._jarEclipseequinox),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k8s_cassandraoperator: {
        value: cdktf.booleanToHclTerraform(this._k8SCassandraoperator),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k8s_containerpod: {
        value: cdktf.booleanToHclTerraform(this._k8SContainerpod),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      k8s_namespace: {
        value: cdktf.booleanToHclTerraform(this._k8SNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_binpm2: {
        value: cdktf.booleanToHclTerraform(this._nodeBinpm2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_corepack: {
        value: cdktf.booleanToHclTerraform(this._nodeCorepack),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_grunt: {
        value: cdktf.booleanToHclTerraform(this._nodeGrunt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_gulpcli: {
        value: cdktf.booleanToHclTerraform(this._nodeGulpcli),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_nodegyp: {
        value: cdktf.booleanToHclTerraform(this._nodeNodegyp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_nodepregyp: {
        value: cdktf.booleanToHclTerraform(this._nodeNodepregyp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_npm: {
        value: cdktf.booleanToHclTerraform(this._nodeNpm),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_prebuildinstall: {
        value: cdktf.booleanToHclTerraform(this._nodePrebuildinstall),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_typescript: {
        value: cdktf.booleanToHclTerraform(this._nodeTypescript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      node_yarn: {
        value: cdktf.booleanToHclTerraform(this._nodeYarn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      php_script: {
        value: cdktf.booleanToHclTerraform(this._phpScript),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
