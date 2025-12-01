// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdasK8SApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#application_descriotion EdasK8SApplication#application_descriotion}
  */
  readonly applicationDescriotion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#application_name EdasK8SApplication#application_name}
  */
  readonly applicationName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#cluster_id EdasK8SApplication#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#command EdasK8SApplication#command}
  */
  readonly command?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#command_args EdasK8SApplication#command_args}
  */
  readonly commandArgs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#edas_container_version EdasK8SApplication#edas_container_version}
  */
  readonly edasContainerVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#envs EdasK8SApplication#envs}
  */
  readonly envs?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#id EdasK8SApplication#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#image_url EdasK8SApplication#image_url}
  */
  readonly imageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#internet_slb_id EdasK8SApplication#internet_slb_id}
  */
  readonly internetSlbId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#internet_slb_port EdasK8SApplication#internet_slb_port}
  */
  readonly internetSlbPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#internet_slb_protocol EdasK8SApplication#internet_slb_protocol}
  */
  readonly internetSlbProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#internet_target_port EdasK8SApplication#internet_target_port}
  */
  readonly internetTargetPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#jdk EdasK8SApplication#jdk}
  */
  readonly jdk?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#limit_m_cpu EdasK8SApplication#limit_m_cpu}
  */
  readonly limitMCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#limit_mem EdasK8SApplication#limit_mem}
  */
  readonly limitMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#liveness EdasK8SApplication#liveness}
  */
  readonly liveness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#local_volume EdasK8SApplication#local_volume}
  */
  readonly localVolume?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#logical_region_id EdasK8SApplication#logical_region_id}
  */
  readonly logicalRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#mount_descs EdasK8SApplication#mount_descs}
  */
  readonly mountDescs?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#namespace EdasK8SApplication#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#nas_id EdasK8SApplication#nas_id}
  */
  readonly nasId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#package_type EdasK8SApplication#package_type}
  */
  readonly packageType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#package_url EdasK8SApplication#package_url}
  */
  readonly packageUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#package_version EdasK8SApplication#package_version}
  */
  readonly packageVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#post_start EdasK8SApplication#post_start}
  */
  readonly postStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#pre_stop EdasK8SApplication#pre_stop}
  */
  readonly preStop?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#readiness EdasK8SApplication#readiness}
  */
  readonly readiness?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#replicas EdasK8SApplication#replicas}
  */
  readonly replicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#requests_m_cpu EdasK8SApplication#requests_m_cpu}
  */
  readonly requestsMCpu?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#requests_mem EdasK8SApplication#requests_mem}
  */
  readonly requestsMem?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#web_container EdasK8SApplication#web_container}
  */
  readonly webContainer?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#timeouts EdasK8SApplication#timeouts}
  */
  readonly timeouts?: EdasK8SApplicationTimeouts;
}
export interface EdasK8SApplicationTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#create EdasK8SApplication#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#delete EdasK8SApplication#delete}
  */
  readonly delete?: string;
}

export function edasK8SApplicationTimeoutsToTerraform(struct?: EdasK8SApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function edasK8SApplicationTimeoutsToHclTerraform(struct?: EdasK8SApplicationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EdasK8SApplicationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): EdasK8SApplicationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EdasK8SApplicationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application alicloud_edas_k8s_application}
*/
export class EdasK8SApplication extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_edas_k8s_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdasK8SApplication resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdasK8SApplication to import
  * @param importFromId The id of the existing EdasK8SApplication that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdasK8SApplication to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_edas_k8s_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/edas_k8s_application alicloud_edas_k8s_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdasK8SApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: EdasK8SApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_edas_k8s_application',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.264.0',
        providerVersionConstraint: '1.264.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._applicationDescriotion = config.applicationDescriotion;
    this._applicationName = config.applicationName;
    this._clusterId = config.clusterId;
    this._command = config.command;
    this._commandArgs = config.commandArgs;
    this._edasContainerVersion = config.edasContainerVersion;
    this._envs = config.envs;
    this._id = config.id;
    this._imageUrl = config.imageUrl;
    this._internetSlbId = config.internetSlbId;
    this._internetSlbPort = config.internetSlbPort;
    this._internetSlbProtocol = config.internetSlbProtocol;
    this._internetTargetPort = config.internetTargetPort;
    this._jdk = config.jdk;
    this._limitMCpu = config.limitMCpu;
    this._limitMem = config.limitMem;
    this._liveness = config.liveness;
    this._localVolume = config.localVolume;
    this._logicalRegionId = config.logicalRegionId;
    this._mountDescs = config.mountDescs;
    this._namespace = config.namespace;
    this._nasId = config.nasId;
    this._packageType = config.packageType;
    this._packageUrl = config.packageUrl;
    this._packageVersion = config.packageVersion;
    this._postStart = config.postStart;
    this._preStop = config.preStop;
    this._readiness = config.readiness;
    this._replicas = config.replicas;
    this._requestsMCpu = config.requestsMCpu;
    this._requestsMem = config.requestsMem;
    this._webContainer = config.webContainer;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // application_descriotion - computed: false, optional: true, required: false
  private _applicationDescriotion?: string; 
  public get applicationDescriotion() {
    return this.getStringAttribute('application_descriotion');
  }
  public set applicationDescriotion(value: string) {
    this._applicationDescriotion = value;
  }
  public resetApplicationDescriotion() {
    this._applicationDescriotion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDescriotionInput() {
    return this._applicationDescriotion;
  }

  // application_name - computed: false, optional: false, required: true
  private _applicationName?: string; 
  public get applicationName() {
    return this.getStringAttribute('application_name');
  }
  public set applicationName(value: string) {
    this._applicationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationNameInput() {
    return this._applicationName;
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // command - computed: false, optional: true, required: false
  private _command?: string; 
  public get command() {
    return this.getStringAttribute('command');
  }
  public set command(value: string) {
    this._command = value;
  }
  public resetCommand() {
    this._command = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandInput() {
    return this._command;
  }

  // command_args - computed: false, optional: true, required: false
  private _commandArgs?: string[]; 
  public get commandArgs() {
    return this.getListAttribute('command_args');
  }
  public set commandArgs(value: string[]) {
    this._commandArgs = value;
  }
  public resetCommandArgs() {
    this._commandArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandArgsInput() {
    return this._commandArgs;
  }

  // edas_container_version - computed: false, optional: true, required: false
  private _edasContainerVersion?: string; 
  public get edasContainerVersion() {
    return this.getStringAttribute('edas_container_version');
  }
  public set edasContainerVersion(value: string) {
    this._edasContainerVersion = value;
  }
  public resetEdasContainerVersion() {
    this._edasContainerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get edasContainerVersionInput() {
    return this._edasContainerVersion;
  }

  // envs - computed: false, optional: true, required: false
  private _envs?: { [key: string]: string }; 
  public get envs() {
    return this.getStringMapAttribute('envs');
  }
  public set envs(value: { [key: string]: string }) {
    this._envs = value;
  }
  public resetEnvs() {
    this._envs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envsInput() {
    return this._envs;
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

  // image_url - computed: false, optional: true, required: false
  private _imageUrl?: string; 
  public get imageUrl() {
    return this.getStringAttribute('image_url');
  }
  public set imageUrl(value: string) {
    this._imageUrl = value;
  }
  public resetImageUrl() {
    this._imageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUrlInput() {
    return this._imageUrl;
  }

  // internet_slb_id - computed: false, optional: true, required: false
  private _internetSlbId?: string; 
  public get internetSlbId() {
    return this.getStringAttribute('internet_slb_id');
  }
  public set internetSlbId(value: string) {
    this._internetSlbId = value;
  }
  public resetInternetSlbId() {
    this._internetSlbId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbIdInput() {
    return this._internetSlbId;
  }

  // internet_slb_port - computed: false, optional: true, required: false
  private _internetSlbPort?: number; 
  public get internetSlbPort() {
    return this.getNumberAttribute('internet_slb_port');
  }
  public set internetSlbPort(value: number) {
    this._internetSlbPort = value;
  }
  public resetInternetSlbPort() {
    this._internetSlbPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbPortInput() {
    return this._internetSlbPort;
  }

  // internet_slb_protocol - computed: false, optional: true, required: false
  private _internetSlbProtocol?: string; 
  public get internetSlbProtocol() {
    return this.getStringAttribute('internet_slb_protocol');
  }
  public set internetSlbProtocol(value: string) {
    this._internetSlbProtocol = value;
  }
  public resetInternetSlbProtocol() {
    this._internetSlbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetSlbProtocolInput() {
    return this._internetSlbProtocol;
  }

  // internet_target_port - computed: false, optional: true, required: false
  private _internetTargetPort?: number; 
  public get internetTargetPort() {
    return this.getNumberAttribute('internet_target_port');
  }
  public set internetTargetPort(value: number) {
    this._internetTargetPort = value;
  }
  public resetInternetTargetPort() {
    this._internetTargetPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetTargetPortInput() {
    return this._internetTargetPort;
  }

  // jdk - computed: false, optional: true, required: false
  private _jdk?: string; 
  public get jdk() {
    return this.getStringAttribute('jdk');
  }
  public set jdk(value: string) {
    this._jdk = value;
  }
  public resetJdk() {
    this._jdk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdkInput() {
    return this._jdk;
  }

  // limit_m_cpu - computed: false, optional: true, required: false
  private _limitMCpu?: number; 
  public get limitMCpu() {
    return this.getNumberAttribute('limit_m_cpu');
  }
  public set limitMCpu(value: number) {
    this._limitMCpu = value;
  }
  public resetLimitMCpu() {
    this._limitMCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMCpuInput() {
    return this._limitMCpu;
  }

  // limit_mem - computed: false, optional: true, required: false
  private _limitMem?: number; 
  public get limitMem() {
    return this.getNumberAttribute('limit_mem');
  }
  public set limitMem(value: number) {
    this._limitMem = value;
  }
  public resetLimitMem() {
    this._limitMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitMemInput() {
    return this._limitMem;
  }

  // liveness - computed: false, optional: true, required: false
  private _liveness?: string; 
  public get liveness() {
    return this.getStringAttribute('liveness');
  }
  public set liveness(value: string) {
    this._liveness = value;
  }
  public resetLiveness() {
    this._liveness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get livenessInput() {
    return this._liveness;
  }

  // local_volume - computed: false, optional: true, required: false
  private _localVolume?: string; 
  public get localVolume() {
    return this.getStringAttribute('local_volume');
  }
  public set localVolume(value: string) {
    this._localVolume = value;
  }
  public resetLocalVolume() {
    this._localVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localVolumeInput() {
    return this._localVolume;
  }

  // logical_region_id - computed: false, optional: true, required: false
  private _logicalRegionId?: string; 
  public get logicalRegionId() {
    return this.getStringAttribute('logical_region_id');
  }
  public set logicalRegionId(value: string) {
    this._logicalRegionId = value;
  }
  public resetLogicalRegionId() {
    this._logicalRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logicalRegionIdInput() {
    return this._logicalRegionId;
  }

  // mount_descs - computed: false, optional: true, required: false
  private _mountDescs?: string; 
  public get mountDescs() {
    return this.getStringAttribute('mount_descs');
  }
  public set mountDescs(value: string) {
    this._mountDescs = value;
  }
  public resetMountDescs() {
    this._mountDescs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountDescsInput() {
    return this._mountDescs;
  }

  // namespace - computed: false, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // nas_id - computed: false, optional: true, required: false
  private _nasId?: string; 
  public get nasId() {
    return this.getStringAttribute('nas_id');
  }
  public set nasId(value: string) {
    this._nasId = value;
  }
  public resetNasId() {
    this._nasId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nasIdInput() {
    return this._nasId;
  }

  // package_type - computed: false, optional: true, required: false
  private _packageType?: string; 
  public get packageType() {
    return this.getStringAttribute('package_type');
  }
  public set packageType(value: string) {
    this._packageType = value;
  }
  public resetPackageType() {
    this._packageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageTypeInput() {
    return this._packageType;
  }

  // package_url - computed: false, optional: true, required: false
  private _packageUrl?: string; 
  public get packageUrl() {
    return this.getStringAttribute('package_url');
  }
  public set packageUrl(value: string) {
    this._packageUrl = value;
  }
  public resetPackageUrl() {
    this._packageUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageUrlInput() {
    return this._packageUrl;
  }

  // package_version - computed: true, optional: true, required: false
  private _packageVersion?: string; 
  public get packageVersion() {
    return this.getStringAttribute('package_version');
  }
  public set packageVersion(value: string) {
    this._packageVersion = value;
  }
  public resetPackageVersion() {
    this._packageVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packageVersionInput() {
    return this._packageVersion;
  }

  // post_start - computed: false, optional: true, required: false
  private _postStart?: string; 
  public get postStart() {
    return this.getStringAttribute('post_start');
  }
  public set postStart(value: string) {
    this._postStart = value;
  }
  public resetPostStart() {
    this._postStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postStartInput() {
    return this._postStart;
  }

  // pre_stop - computed: false, optional: true, required: false
  private _preStop?: string; 
  public get preStop() {
    return this.getStringAttribute('pre_stop');
  }
  public set preStop(value: string) {
    this._preStop = value;
  }
  public resetPreStop() {
    this._preStop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preStopInput() {
    return this._preStop;
  }

  // readiness - computed: false, optional: true, required: false
  private _readiness?: string; 
  public get readiness() {
    return this.getStringAttribute('readiness');
  }
  public set readiness(value: string) {
    this._readiness = value;
  }
  public resetReadiness() {
    this._readiness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readinessInput() {
    return this._readiness;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // requests_m_cpu - computed: false, optional: true, required: false
  private _requestsMCpu?: number; 
  public get requestsMCpu() {
    return this.getNumberAttribute('requests_m_cpu');
  }
  public set requestsMCpu(value: number) {
    this._requestsMCpu = value;
  }
  public resetRequestsMCpu() {
    this._requestsMCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMCpuInput() {
    return this._requestsMCpu;
  }

  // requests_mem - computed: false, optional: true, required: false
  private _requestsMem?: number; 
  public get requestsMem() {
    return this.getNumberAttribute('requests_mem');
  }
  public set requestsMem(value: number) {
    this._requestsMem = value;
  }
  public resetRequestsMem() {
    this._requestsMem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsMemInput() {
    return this._requestsMem;
  }

  // web_container - computed: false, optional: true, required: false
  private _webContainer?: string; 
  public get webContainer() {
    return this.getStringAttribute('web_container');
  }
  public set webContainer(value: string) {
    this._webContainer = value;
  }
  public resetWebContainer() {
    this._webContainer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webContainerInput() {
    return this._webContainer;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new EdasK8SApplicationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: EdasK8SApplicationTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application_descriotion: cdktf.stringToTerraform(this._applicationDescriotion),
      application_name: cdktf.stringToTerraform(this._applicationName),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      command: cdktf.stringToTerraform(this._command),
      command_args: cdktf.listMapper(cdktf.stringToTerraform, false)(this._commandArgs),
      edas_container_version: cdktf.stringToTerraform(this._edasContainerVersion),
      envs: cdktf.hashMapper(cdktf.stringToTerraform)(this._envs),
      id: cdktf.stringToTerraform(this._id),
      image_url: cdktf.stringToTerraform(this._imageUrl),
      internet_slb_id: cdktf.stringToTerraform(this._internetSlbId),
      internet_slb_port: cdktf.numberToTerraform(this._internetSlbPort),
      internet_slb_protocol: cdktf.stringToTerraform(this._internetSlbProtocol),
      internet_target_port: cdktf.numberToTerraform(this._internetTargetPort),
      jdk: cdktf.stringToTerraform(this._jdk),
      limit_m_cpu: cdktf.numberToTerraform(this._limitMCpu),
      limit_mem: cdktf.numberToTerraform(this._limitMem),
      liveness: cdktf.stringToTerraform(this._liveness),
      local_volume: cdktf.stringToTerraform(this._localVolume),
      logical_region_id: cdktf.stringToTerraform(this._logicalRegionId),
      mount_descs: cdktf.stringToTerraform(this._mountDescs),
      namespace: cdktf.stringToTerraform(this._namespace),
      nas_id: cdktf.stringToTerraform(this._nasId),
      package_type: cdktf.stringToTerraform(this._packageType),
      package_url: cdktf.stringToTerraform(this._packageUrl),
      package_version: cdktf.stringToTerraform(this._packageVersion),
      post_start: cdktf.stringToTerraform(this._postStart),
      pre_stop: cdktf.stringToTerraform(this._preStop),
      readiness: cdktf.stringToTerraform(this._readiness),
      replicas: cdktf.numberToTerraform(this._replicas),
      requests_m_cpu: cdktf.numberToTerraform(this._requestsMCpu),
      requests_mem: cdktf.numberToTerraform(this._requestsMem),
      web_container: cdktf.stringToTerraform(this._webContainer),
      timeouts: edasK8SApplicationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application_descriotion: {
        value: cdktf.stringToHclTerraform(this._applicationDescriotion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_name: {
        value: cdktf.stringToHclTerraform(this._applicationName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command: {
        value: cdktf.stringToHclTerraform(this._command),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      command_args: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._commandArgs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      edas_container_version: {
        value: cdktf.stringToHclTerraform(this._edasContainerVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      envs: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._envs),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      image_url: {
        value: cdktf.stringToHclTerraform(this._imageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_slb_id: {
        value: cdktf.stringToHclTerraform(this._internetSlbId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_slb_port: {
        value: cdktf.numberToHclTerraform(this._internetSlbPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      internet_slb_protocol: {
        value: cdktf.stringToHclTerraform(this._internetSlbProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      internet_target_port: {
        value: cdktf.numberToHclTerraform(this._internetTargetPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      jdk: {
        value: cdktf.stringToHclTerraform(this._jdk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit_m_cpu: {
        value: cdktf.numberToHclTerraform(this._limitMCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      limit_mem: {
        value: cdktf.numberToHclTerraform(this._limitMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      liveness: {
        value: cdktf.stringToHclTerraform(this._liveness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_volume: {
        value: cdktf.stringToHclTerraform(this._localVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logical_region_id: {
        value: cdktf.stringToHclTerraform(this._logicalRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mount_descs: {
        value: cdktf.stringToHclTerraform(this._mountDescs),
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
      nas_id: {
        value: cdktf.stringToHclTerraform(this._nasId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_type: {
        value: cdktf.stringToHclTerraform(this._packageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_url: {
        value: cdktf.stringToHclTerraform(this._packageUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      package_version: {
        value: cdktf.stringToHclTerraform(this._packageVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      post_start: {
        value: cdktf.stringToHclTerraform(this._postStart),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_stop: {
        value: cdktf.stringToHclTerraform(this._preStop),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readiness: {
        value: cdktf.stringToHclTerraform(this._readiness),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replicas: {
        value: cdktf.numberToHclTerraform(this._replicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requests_m_cpu: {
        value: cdktf.numberToHclTerraform(this._requestsMCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      requests_mem: {
        value: cdktf.numberToHclTerraform(this._requestsMem),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      web_container: {
        value: cdktf.stringToHclTerraform(this._webContainer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: edasK8SApplicationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "EdasK8SApplicationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
