// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DmsAirflowConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#airflow_name DmsAirflow#airflow_name}
  */
  readonly airflowName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#app_spec DmsAirflow#app_spec}
  */
  readonly appSpec: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#dags_dir DmsAirflow#dags_dir}
  */
  readonly dagsDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#description DmsAirflow#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#id DmsAirflow#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#oss_bucket_name DmsAirflow#oss_bucket_name}
  */
  readonly ossBucketName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#oss_path DmsAirflow#oss_path}
  */
  readonly ossPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#plugins_dir DmsAirflow#plugins_dir}
  */
  readonly pluginsDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#requirement_file DmsAirflow#requirement_file}
  */
  readonly requirementFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#security_group_id DmsAirflow#security_group_id}
  */
  readonly securityGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#startup_file DmsAirflow#startup_file}
  */
  readonly startupFile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#vpc_id DmsAirflow#vpc_id}
  */
  readonly vpcId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#vswitch_id DmsAirflow#vswitch_id}
  */
  readonly vswitchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#worker_serverless_replicas DmsAirflow#worker_serverless_replicas}
  */
  readonly workerServerlessReplicas: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#workspace_id DmsAirflow#workspace_id}
  */
  readonly workspaceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#zone_id DmsAirflow#zone_id}
  */
  readonly zoneId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#timeouts DmsAirflow#timeouts}
  */
  readonly timeouts?: DmsAirflowTimeouts;
}
export interface DmsAirflowTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#create DmsAirflow#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#delete DmsAirflow#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#update DmsAirflow#update}
  */
  readonly update?: string;
}

export function dmsAirflowTimeoutsToTerraform(struct?: DmsAirflowTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dmsAirflowTimeoutsToHclTerraform(struct?: DmsAirflowTimeouts | cdktf.IResolvable): any {
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
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DmsAirflowTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DmsAirflowTimeouts | cdktf.IResolvable | undefined {
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
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DmsAirflowTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
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
      this._update = value.update;
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

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow alicloud_dms_airflow}
*/
export class DmsAirflow extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_dms_airflow";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DmsAirflow resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DmsAirflow to import
  * @param importFromId The id of the existing DmsAirflow that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DmsAirflow to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_dms_airflow", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/dms_airflow alicloud_dms_airflow} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DmsAirflowConfig
  */
  public constructor(scope: Construct, id: string, config: DmsAirflowConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_dms_airflow',
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
    this._airflowName = config.airflowName;
    this._appSpec = config.appSpec;
    this._dagsDir = config.dagsDir;
    this._description = config.description;
    this._id = config.id;
    this._ossBucketName = config.ossBucketName;
    this._ossPath = config.ossPath;
    this._pluginsDir = config.pluginsDir;
    this._requirementFile = config.requirementFile;
    this._securityGroupId = config.securityGroupId;
    this._startupFile = config.startupFile;
    this._vpcId = config.vpcId;
    this._vswitchId = config.vswitchId;
    this._workerServerlessReplicas = config.workerServerlessReplicas;
    this._workspaceId = config.workspaceId;
    this._zoneId = config.zoneId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // airflow_id - computed: true, optional: false, required: false
  public get airflowId() {
    return this.getStringAttribute('airflow_id');
  }

  // airflow_name - computed: false, optional: false, required: true
  private _airflowName?: string; 
  public get airflowName() {
    return this.getStringAttribute('airflow_name');
  }
  public set airflowName(value: string) {
    this._airflowName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get airflowNameInput() {
    return this._airflowName;
  }

  // app_spec - computed: false, optional: false, required: true
  private _appSpec?: string; 
  public get appSpec() {
    return this.getStringAttribute('app_spec');
  }
  public set appSpec(value: string) {
    this._appSpec = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appSpecInput() {
    return this._appSpec;
  }

  // dags_dir - computed: false, optional: true, required: false
  private _dagsDir?: string; 
  public get dagsDir() {
    return this.getStringAttribute('dags_dir');
  }
  public set dagsDir(value: string) {
    this._dagsDir = value;
  }
  public resetDagsDir() {
    this._dagsDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dagsDirInput() {
    return this._dagsDir;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // oss_bucket_name - computed: false, optional: false, required: true
  private _ossBucketName?: string; 
  public get ossBucketName() {
    return this.getStringAttribute('oss_bucket_name');
  }
  public set ossBucketName(value: string) {
    this._ossBucketName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ossBucketNameInput() {
    return this._ossBucketName;
  }

  // oss_path - computed: false, optional: false, required: true
  private _ossPath?: string; 
  public get ossPath() {
    return this.getStringAttribute('oss_path');
  }
  public set ossPath(value: string) {
    this._ossPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ossPathInput() {
    return this._ossPath;
  }

  // plugins_dir - computed: false, optional: true, required: false
  private _pluginsDir?: string; 
  public get pluginsDir() {
    return this.getStringAttribute('plugins_dir');
  }
  public set pluginsDir(value: string) {
    this._pluginsDir = value;
  }
  public resetPluginsDir() {
    this._pluginsDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginsDirInput() {
    return this._pluginsDir;
  }

  // region_id - computed: true, optional: false, required: false
  public get regionId() {
    return this.getStringAttribute('region_id');
  }

  // requirement_file - computed: false, optional: true, required: false
  private _requirementFile?: string; 
  public get requirementFile() {
    return this.getStringAttribute('requirement_file');
  }
  public set requirementFile(value: string) {
    this._requirementFile = value;
  }
  public resetRequirementFile() {
    this._requirementFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requirementFileInput() {
    return this._requirementFile;
  }

  // security_group_id - computed: false, optional: false, required: true
  private _securityGroupId?: string; 
  public get securityGroupId() {
    return this.getStringAttribute('security_group_id');
  }
  public set securityGroupId(value: string) {
    this._securityGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get securityGroupIdInput() {
    return this._securityGroupId;
  }

  // startup_file - computed: false, optional: true, required: false
  private _startupFile?: string; 
  public get startupFile() {
    return this.getStringAttribute('startup_file');
  }
  public set startupFile(value: string) {
    this._startupFile = value;
  }
  public resetStartupFile() {
    this._startupFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startupFileInput() {
    return this._startupFile;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // vswitch_id - computed: false, optional: false, required: true
  private _vswitchId?: string; 
  public get vswitchId() {
    return this.getStringAttribute('vswitch_id');
  }
  public set vswitchId(value: string) {
    this._vswitchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vswitchIdInput() {
    return this._vswitchId;
  }

  // worker_serverless_replicas - computed: false, optional: false, required: true
  private _workerServerlessReplicas?: number; 
  public get workerServerlessReplicas() {
    return this.getNumberAttribute('worker_serverless_replicas');
  }
  public set workerServerlessReplicas(value: number) {
    this._workerServerlessReplicas = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workerServerlessReplicasInput() {
    return this._workerServerlessReplicas;
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // zone_id - computed: false, optional: false, required: true
  private _zoneId?: string; 
  public get zoneId() {
    return this.getStringAttribute('zone_id');
  }
  public set zoneId(value: string) {
    this._zoneId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneIdInput() {
    return this._zoneId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DmsAirflowTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DmsAirflowTimeouts) {
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
      airflow_name: cdktf.stringToTerraform(this._airflowName),
      app_spec: cdktf.stringToTerraform(this._appSpec),
      dags_dir: cdktf.stringToTerraform(this._dagsDir),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      oss_bucket_name: cdktf.stringToTerraform(this._ossBucketName),
      oss_path: cdktf.stringToTerraform(this._ossPath),
      plugins_dir: cdktf.stringToTerraform(this._pluginsDir),
      requirement_file: cdktf.stringToTerraform(this._requirementFile),
      security_group_id: cdktf.stringToTerraform(this._securityGroupId),
      startup_file: cdktf.stringToTerraform(this._startupFile),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      vswitch_id: cdktf.stringToTerraform(this._vswitchId),
      worker_serverless_replicas: cdktf.numberToTerraform(this._workerServerlessReplicas),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
      zone_id: cdktf.stringToTerraform(this._zoneId),
      timeouts: dmsAirflowTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      airflow_name: {
        value: cdktf.stringToHclTerraform(this._airflowName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_spec: {
        value: cdktf.stringToHclTerraform(this._appSpec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dags_dir: {
        value: cdktf.stringToHclTerraform(this._dagsDir),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_bucket_name: {
        value: cdktf.stringToHclTerraform(this._ossBucketName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oss_path: {
        value: cdktf.stringToHclTerraform(this._ossPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plugins_dir: {
        value: cdktf.stringToHclTerraform(this._pluginsDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      requirement_file: {
        value: cdktf.stringToHclTerraform(this._requirementFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_group_id: {
        value: cdktf.stringToHclTerraform(this._securityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      startup_file: {
        value: cdktf.stringToHclTerraform(this._startupFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vswitch_id: {
        value: cdktf.stringToHclTerraform(this._vswitchId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      worker_serverless_replicas: {
        value: cdktf.numberToHclTerraform(this._workerServerlessReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_id: {
        value: cdktf.stringToHclTerraform(this._zoneId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: dmsAirflowTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DmsAirflowTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
