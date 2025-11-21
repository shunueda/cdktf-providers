// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbrEcsBackupClientConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#data_network_type HbrEcsBackupClient#data_network_type}
  */
  readonly dataNetworkType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#data_proxy_setting HbrEcsBackupClient#data_proxy_setting}
  */
  readonly dataProxySetting?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#id HbrEcsBackupClient#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#instance_id HbrEcsBackupClient#instance_id}
  */
  readonly instanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#max_cpu_core HbrEcsBackupClient#max_cpu_core}
  */
  readonly maxCpuCore?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#max_worker HbrEcsBackupClient#max_worker}
  */
  readonly maxWorker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#proxy_host HbrEcsBackupClient#proxy_host}
  */
  readonly proxyHost?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#proxy_password HbrEcsBackupClient#proxy_password}
  */
  readonly proxyPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#proxy_port HbrEcsBackupClient#proxy_port}
  */
  readonly proxyPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#proxy_user HbrEcsBackupClient#proxy_user}
  */
  readonly proxyUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#status HbrEcsBackupClient#status}
  */
  readonly status?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#use_https HbrEcsBackupClient#use_https}
  */
  readonly useHttps?: boolean | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#timeouts HbrEcsBackupClient#timeouts}
  */
  readonly timeouts?: HbrEcsBackupClientTimeouts;
}
export interface HbrEcsBackupClientTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#create HbrEcsBackupClient#create}
  */
  readonly create?: string;
}

export function hbrEcsBackupClientTimeoutsToTerraform(struct?: HbrEcsBackupClientTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function hbrEcsBackupClientTimeoutsToHclTerraform(struct?: HbrEcsBackupClientTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HbrEcsBackupClientTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): HbrEcsBackupClientTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HbrEcsBackupClientTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client alicloud_hbr_ecs_backup_client}
*/
export class HbrEcsBackupClient extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_hbr_ecs_backup_client";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbrEcsBackupClient resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbrEcsBackupClient to import
  * @param importFromId The id of the existing HbrEcsBackupClient that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbrEcsBackupClient to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_hbr_ecs_backup_client", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/hbr_ecs_backup_client alicloud_hbr_ecs_backup_client} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbrEcsBackupClientConfig
  */
  public constructor(scope: Construct, id: string, config: HbrEcsBackupClientConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_hbr_ecs_backup_client',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dataNetworkType = config.dataNetworkType;
    this._dataProxySetting = config.dataProxySetting;
    this._id = config.id;
    this._instanceId = config.instanceId;
    this._maxCpuCore = config.maxCpuCore;
    this._maxWorker = config.maxWorker;
    this._proxyHost = config.proxyHost;
    this._proxyPassword = config.proxyPassword;
    this._proxyPort = config.proxyPort;
    this._proxyUser = config.proxyUser;
    this._status = config.status;
    this._useHttps = config.useHttps;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data_network_type - computed: true, optional: true, required: false
  private _dataNetworkType?: string; 
  public get dataNetworkType() {
    return this.getStringAttribute('data_network_type');
  }
  public set dataNetworkType(value: string) {
    this._dataNetworkType = value;
  }
  public resetDataNetworkType() {
    this._dataNetworkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataNetworkTypeInput() {
    return this._dataNetworkType;
  }

  // data_proxy_setting - computed: true, optional: true, required: false
  private _dataProxySetting?: string; 
  public get dataProxySetting() {
    return this.getStringAttribute('data_proxy_setting');
  }
  public set dataProxySetting(value: string) {
    this._dataProxySetting = value;
  }
  public resetDataProxySetting() {
    this._dataProxySetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProxySettingInput() {
    return this._dataProxySetting;
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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // max_cpu_core - computed: true, optional: true, required: false
  private _maxCpuCore?: string; 
  public get maxCpuCore() {
    return this.getStringAttribute('max_cpu_core');
  }
  public set maxCpuCore(value: string) {
    this._maxCpuCore = value;
  }
  public resetMaxCpuCore() {
    this._maxCpuCore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuCoreInput() {
    return this._maxCpuCore;
  }

  // max_worker - computed: true, optional: true, required: false
  private _maxWorker?: string; 
  public get maxWorker() {
    return this.getStringAttribute('max_worker');
  }
  public set maxWorker(value: string) {
    this._maxWorker = value;
  }
  public resetMaxWorker() {
    this._maxWorker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxWorkerInput() {
    return this._maxWorker;
  }

  // proxy_host - computed: true, optional: true, required: false
  private _proxyHost?: string; 
  public get proxyHost() {
    return this.getStringAttribute('proxy_host');
  }
  public set proxyHost(value: string) {
    this._proxyHost = value;
  }
  public resetProxyHost() {
    this._proxyHost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyHostInput() {
    return this._proxyHost;
  }

  // proxy_password - computed: true, optional: true, required: false
  private _proxyPassword?: string; 
  public get proxyPassword() {
    return this.getStringAttribute('proxy_password');
  }
  public set proxyPassword(value: string) {
    this._proxyPassword = value;
  }
  public resetProxyPassword() {
    this._proxyPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPasswordInput() {
    return this._proxyPassword;
  }

  // proxy_port - computed: true, optional: true, required: false
  private _proxyPort?: string; 
  public get proxyPort() {
    return this.getStringAttribute('proxy_port');
  }
  public set proxyPort(value: string) {
    this._proxyPort = value;
  }
  public resetProxyPort() {
    this._proxyPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyPortInput() {
    return this._proxyPort;
  }

  // proxy_user - computed: true, optional: true, required: false
  private _proxyUser?: string; 
  public get proxyUser() {
    return this.getStringAttribute('proxy_user');
  }
  public set proxyUser(value: string) {
    this._proxyUser = value;
  }
  public resetProxyUser() {
    this._proxyUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyUserInput() {
    return this._proxyUser;
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

  // use_https - computed: true, optional: true, required: false
  private _useHttps?: boolean | cdktf.IResolvable; 
  public get useHttps() {
    return this.getBooleanAttribute('use_https');
  }
  public set useHttps(value: boolean | cdktf.IResolvable) {
    this._useHttps = value;
  }
  public resetUseHttps() {
    this._useHttps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useHttpsInput() {
    return this._useHttps;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new HbrEcsBackupClientTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: HbrEcsBackupClientTimeouts) {
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
      data_network_type: cdktf.stringToTerraform(this._dataNetworkType),
      data_proxy_setting: cdktf.stringToTerraform(this._dataProxySetting),
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      max_cpu_core: cdktf.stringToTerraform(this._maxCpuCore),
      max_worker: cdktf.stringToTerraform(this._maxWorker),
      proxy_host: cdktf.stringToTerraform(this._proxyHost),
      proxy_password: cdktf.stringToTerraform(this._proxyPassword),
      proxy_port: cdktf.stringToTerraform(this._proxyPort),
      proxy_user: cdktf.stringToTerraform(this._proxyUser),
      status: cdktf.stringToTerraform(this._status),
      use_https: cdktf.booleanToTerraform(this._useHttps),
      timeouts: hbrEcsBackupClientTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      data_network_type: {
        value: cdktf.stringToHclTerraform(this._dataNetworkType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_proxy_setting: {
        value: cdktf.stringToHclTerraform(this._dataProxySetting),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_cpu_core: {
        value: cdktf.stringToHclTerraform(this._maxCpuCore),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_worker: {
        value: cdktf.stringToHclTerraform(this._maxWorker),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_host: {
        value: cdktf.stringToHclTerraform(this._proxyHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_password: {
        value: cdktf.stringToHclTerraform(this._proxyPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_port: {
        value: cdktf.stringToHclTerraform(this._proxyPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proxy_user: {
        value: cdktf.stringToHclTerraform(this._proxyUser),
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
      use_https: {
        value: cdktf.booleanToHclTerraform(this._useHttps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timeouts: {
        value: hbrEcsBackupClientTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "HbrEcsBackupClientTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
