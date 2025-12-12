// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackSlbAccessLogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#id ApsarastackSlbAccessLog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#load_balancer_id ApsarastackSlbAccessLog#load_balancer_id}
  */
  readonly loadBalancerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#log_project ApsarastackSlbAccessLog#log_project}
  */
  readonly logProject?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#log_store ApsarastackSlbAccessLog#log_store}
  */
  readonly logStore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#log_type ApsarastackSlbAccessLog#log_type}
  */
  readonly logType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#role_name ApsarastackSlbAccessLog#role_name}
  */
  readonly roleName?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log apsarastack_slb_access_log}
*/
export class ApsarastackSlbAccessLog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_slb_access_log";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackSlbAccessLog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackSlbAccessLog to import
  * @param importFromId The id of the existing ApsarastackSlbAccessLog that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackSlbAccessLog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_slb_access_log", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_slb_access_log apsarastack_slb_access_log} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackSlbAccessLogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ApsarastackSlbAccessLogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_slb_access_log',
      terraformGeneratorMetadata: {
        providerName: 'alibabacloudstack',
        providerVersion: '3.18.21',
        providerVersionConstraint: '3.18.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._loadBalancerId = config.loadBalancerId;
    this._logProject = config.logProject;
    this._logStore = config.logStore;
    this._logType = config.logType;
    this._roleName = config.roleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // load_balancer_id - computed: false, optional: true, required: false
  private _loadBalancerId?: string; 
  public get loadBalancerId() {
    return this.getStringAttribute('load_balancer_id');
  }
  public set loadBalancerId(value: string) {
    this._loadBalancerId = value;
  }
  public resetLoadBalancerId() {
    this._loadBalancerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIdInput() {
    return this._loadBalancerId;
  }

  // log_project - computed: false, optional: true, required: false
  private _logProject?: string; 
  public get logProject() {
    return this.getStringAttribute('log_project');
  }
  public set logProject(value: string) {
    this._logProject = value;
  }
  public resetLogProject() {
    this._logProject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logProjectInput() {
    return this._logProject;
  }

  // log_store - computed: false, optional: true, required: false
  private _logStore?: string; 
  public get logStore() {
    return this.getStringAttribute('log_store');
  }
  public set logStore(value: string) {
    this._logStore = value;
  }
  public resetLogStore() {
    this._logStore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logStoreInput() {
    return this._logStore;
  }

  // log_type - computed: false, optional: true, required: false
  private _logType?: string; 
  public get logType() {
    return this.getStringAttribute('log_type');
  }
  public set logType(value: string) {
    this._logType = value;
  }
  public resetLogType() {
    this._logType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTypeInput() {
    return this._logType;
  }

  // role_name - computed: false, optional: true, required: false
  private _roleName?: string; 
  public get roleName() {
    return this.getStringAttribute('role_name');
  }
  public set roleName(value: string) {
    this._roleName = value;
  }
  public resetRoleName() {
    this._roleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleNameInput() {
    return this._roleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      load_balancer_id: cdktf.stringToTerraform(this._loadBalancerId),
      log_project: cdktf.stringToTerraform(this._logProject),
      log_store: cdktf.stringToTerraform(this._logStore),
      log_type: cdktf.stringToTerraform(this._logType),
      role_name: cdktf.stringToTerraform(this._roleName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      load_balancer_id: {
        value: cdktf.stringToHclTerraform(this._loadBalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_project: {
        value: cdktf.stringToHclTerraform(this._logProject),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_store: {
        value: cdktf.stringToHclTerraform(this._logStore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_type: {
        value: cdktf.stringToHclTerraform(this._logType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      role_name: {
        value: cdktf.stringToHclTerraform(this._roleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
