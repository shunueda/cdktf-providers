// https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SmartagFlowLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#active_aging SmartagFlowLog#active_aging}
  */
  readonly activeAging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#description SmartagFlowLog#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#flow_log_name SmartagFlowLog#flow_log_name}
  */
  readonly flowLogName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#id SmartagFlowLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#inactive_aging SmartagFlowLog#inactive_aging}
  */
  readonly inactiveAging?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#logstore_name SmartagFlowLog#logstore_name}
  */
  readonly logstoreName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#netflow_server_ip SmartagFlowLog#netflow_server_ip}
  */
  readonly netflowServerIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#netflow_server_port SmartagFlowLog#netflow_server_port}
  */
  readonly netflowServerPort?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#netflow_version SmartagFlowLog#netflow_version}
  */
  readonly netflowVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#output_type SmartagFlowLog#output_type}
  */
  readonly outputType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#project_name SmartagFlowLog#project_name}
  */
  readonly projectName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#sls_region_id SmartagFlowLog#sls_region_id}
  */
  readonly slsRegionId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#status SmartagFlowLog#status}
  */
  readonly status?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#timeouts SmartagFlowLog#timeouts}
  */
  readonly timeouts?: SmartagFlowLogTimeouts;
}
export interface SmartagFlowLogTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#create SmartagFlowLog#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#delete SmartagFlowLog#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#update SmartagFlowLog#update}
  */
  readonly update?: string;
}

export function smartagFlowLogTimeoutsToTerraform(struct?: SmartagFlowLogTimeouts | cdktf.IResolvable): any {
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


export function smartagFlowLogTimeoutsToHclTerraform(struct?: SmartagFlowLogTimeouts | cdktf.IResolvable): any {
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

export class SmartagFlowLogTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SmartagFlowLogTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: SmartagFlowLogTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log alicloud_smartag_flow_log}
*/
export class SmartagFlowLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_smartag_flow_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SmartagFlowLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SmartagFlowLog to import
  * @param importFromId The id of the existing SmartagFlowLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SmartagFlowLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_smartag_flow_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.264.0/docs/resources/smartag_flow_log alicloud_smartag_flow_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SmartagFlowLogConfig
  */
  public constructor(scope: Construct, id: string, config: SmartagFlowLogConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_smartag_flow_log',
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
    this._activeAging = config.activeAging;
    this._description = config.description;
    this._flowLogName = config.flowLogName;
    this._id = config.id;
    this._inactiveAging = config.inactiveAging;
    this._logstoreName = config.logstoreName;
    this._netflowServerIp = config.netflowServerIp;
    this._netflowServerPort = config.netflowServerPort;
    this._netflowVersion = config.netflowVersion;
    this._outputType = config.outputType;
    this._projectName = config.projectName;
    this._slsRegionId = config.slsRegionId;
    this._status = config.status;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_aging - computed: true, optional: true, required: false
  private _activeAging?: number; 
  public get activeAging() {
    return this.getNumberAttribute('active_aging');
  }
  public set activeAging(value: number) {
    this._activeAging = value;
  }
  public resetActiveAging() {
    this._activeAging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeAgingInput() {
    return this._activeAging;
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

  // flow_log_name - computed: false, optional: true, required: false
  private _flowLogName?: string; 
  public get flowLogName() {
    return this.getStringAttribute('flow_log_name');
  }
  public set flowLogName(value: string) {
    this._flowLogName = value;
  }
  public resetFlowLogName() {
    this._flowLogName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flowLogNameInput() {
    return this._flowLogName;
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

  // inactive_aging - computed: true, optional: true, required: false
  private _inactiveAging?: number; 
  public get inactiveAging() {
    return this.getNumberAttribute('inactive_aging');
  }
  public set inactiveAging(value: number) {
    this._inactiveAging = value;
  }
  public resetInactiveAging() {
    this._inactiveAging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveAgingInput() {
    return this._inactiveAging;
  }

  // logstore_name - computed: false, optional: true, required: false
  private _logstoreName?: string; 
  public get logstoreName() {
    return this.getStringAttribute('logstore_name');
  }
  public set logstoreName(value: string) {
    this._logstoreName = value;
  }
  public resetLogstoreName() {
    this._logstoreName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logstoreNameInput() {
    return this._logstoreName;
  }

  // netflow_server_ip - computed: false, optional: true, required: false
  private _netflowServerIp?: string; 
  public get netflowServerIp() {
    return this.getStringAttribute('netflow_server_ip');
  }
  public set netflowServerIp(value: string) {
    this._netflowServerIp = value;
  }
  public resetNetflowServerIp() {
    this._netflowServerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowServerIpInput() {
    return this._netflowServerIp;
  }

  // netflow_server_port - computed: true, optional: true, required: false
  private _netflowServerPort?: number; 
  public get netflowServerPort() {
    return this.getNumberAttribute('netflow_server_port');
  }
  public set netflowServerPort(value: number) {
    this._netflowServerPort = value;
  }
  public resetNetflowServerPort() {
    this._netflowServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowServerPortInput() {
    return this._netflowServerPort;
  }

  // netflow_version - computed: true, optional: true, required: false
  private _netflowVersion?: string; 
  public get netflowVersion() {
    return this.getStringAttribute('netflow_version');
  }
  public set netflowVersion(value: string) {
    this._netflowVersion = value;
  }
  public resetNetflowVersion() {
    this._netflowVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowVersionInput() {
    return this._netflowVersion;
  }

  // output_type - computed: false, optional: false, required: true
  private _outputType?: string; 
  public get outputType() {
    return this.getStringAttribute('output_type');
  }
  public set outputType(value: string) {
    this._outputType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get outputTypeInput() {
    return this._outputType;
  }

  // project_name - computed: false, optional: true, required: false
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  public resetProjectName() {
    this._projectName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // sls_region_id - computed: false, optional: true, required: false
  private _slsRegionId?: string; 
  public get slsRegionId() {
    return this.getStringAttribute('sls_region_id');
  }
  public set slsRegionId(value: string) {
    this._slsRegionId = value;
  }
  public resetSlsRegionId() {
    this._slsRegionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slsRegionIdInput() {
    return this._slsRegionId;
  }

  // status - computed: true, optional: true, required: false
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new SmartagFlowLogTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: SmartagFlowLogTimeouts) {
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
      active_aging: cdktf.numberToTerraform(this._activeAging),
      description: cdktf.stringToTerraform(this._description),
      flow_log_name: cdktf.stringToTerraform(this._flowLogName),
      id: cdktf.stringToTerraform(this._id),
      inactive_aging: cdktf.numberToTerraform(this._inactiveAging),
      logstore_name: cdktf.stringToTerraform(this._logstoreName),
      netflow_server_ip: cdktf.stringToTerraform(this._netflowServerIp),
      netflow_server_port: cdktf.numberToTerraform(this._netflowServerPort),
      netflow_version: cdktf.stringToTerraform(this._netflowVersion),
      output_type: cdktf.stringToTerraform(this._outputType),
      project_name: cdktf.stringToTerraform(this._projectName),
      sls_region_id: cdktf.stringToTerraform(this._slsRegionId),
      status: cdktf.stringToTerraform(this._status),
      timeouts: smartagFlowLogTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_aging: {
        value: cdktf.numberToHclTerraform(this._activeAging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flow_log_name: {
        value: cdktf.stringToHclTerraform(this._flowLogName),
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
      inactive_aging: {
        value: cdktf.numberToHclTerraform(this._inactiveAging),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      logstore_name: {
        value: cdktf.stringToHclTerraform(this._logstoreName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_server_ip: {
        value: cdktf.stringToHclTerraform(this._netflowServerIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow_server_port: {
        value: cdktf.numberToHclTerraform(this._netflowServerPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      netflow_version: {
        value: cdktf.stringToHclTerraform(this._netflowVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_type: {
        value: cdktf.stringToHclTerraform(this._outputType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sls_region_id: {
        value: cdktf.stringToHclTerraform(this._slsRegionId),
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
      timeouts: {
        value: smartagFlowLogTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SmartagFlowLogTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
