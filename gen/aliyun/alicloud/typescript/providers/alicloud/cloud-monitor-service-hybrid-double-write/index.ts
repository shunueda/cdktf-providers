// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudMonitorServiceHybridDoubleWriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#id CloudMonitorServiceHybridDoubleWrite#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#namespace CloudMonitorServiceHybridDoubleWrite#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#source_namespace CloudMonitorServiceHybridDoubleWrite#source_namespace}
  */
  readonly sourceNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#source_user_id CloudMonitorServiceHybridDoubleWrite#source_user_id}
  */
  readonly sourceUserId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#user_id CloudMonitorServiceHybridDoubleWrite#user_id}
  */
  readonly userId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#timeouts CloudMonitorServiceHybridDoubleWrite#timeouts}
  */
  readonly timeouts?: CloudMonitorServiceHybridDoubleWriteTimeouts;
}
export interface CloudMonitorServiceHybridDoubleWriteTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#create CloudMonitorServiceHybridDoubleWrite#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#delete CloudMonitorServiceHybridDoubleWrite#delete}
  */
  readonly delete?: string;
}

export function cloudMonitorServiceHybridDoubleWriteTimeoutsToTerraform(struct?: CloudMonitorServiceHybridDoubleWriteTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function cloudMonitorServiceHybridDoubleWriteTimeoutsToHclTerraform(struct?: CloudMonitorServiceHybridDoubleWriteTimeouts | cdktf.IResolvable): any {
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

export class CloudMonitorServiceHybridDoubleWriteTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudMonitorServiceHybridDoubleWriteTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CloudMonitorServiceHybridDoubleWriteTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write alicloud_cloud_monitor_service_hybrid_double_write}
*/
export class CloudMonitorServiceHybridDoubleWrite extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_monitor_service_hybrid_double_write";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudMonitorServiceHybridDoubleWrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudMonitorServiceHybridDoubleWrite to import
  * @param importFromId The id of the existing CloudMonitorServiceHybridDoubleWrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudMonitorServiceHybridDoubleWrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_monitor_service_hybrid_double_write", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_monitor_service_hybrid_double_write alicloud_cloud_monitor_service_hybrid_double_write} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudMonitorServiceHybridDoubleWriteConfig
  */
  public constructor(scope: Construct, id: string, config: CloudMonitorServiceHybridDoubleWriteConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_monitor_service_hybrid_double_write',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
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
    this._namespace = config.namespace;
    this._sourceNamespace = config.sourceNamespace;
    this._sourceUserId = config.sourceUserId;
    this._userId = config.userId;
    this._timeouts.internalValue = config.timeouts;
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

  // source_namespace - computed: false, optional: false, required: true
  private _sourceNamespace?: string; 
  public get sourceNamespace() {
    return this.getStringAttribute('source_namespace');
  }
  public set sourceNamespace(value: string) {
    this._sourceNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceNamespaceInput() {
    return this._sourceNamespace;
  }

  // source_user_id - computed: false, optional: false, required: true
  private _sourceUserId?: string; 
  public get sourceUserId() {
    return this.getStringAttribute('source_user_id');
  }
  public set sourceUserId(value: string) {
    this._sourceUserId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserIdInput() {
    return this._sourceUserId;
  }

  // user_id - computed: false, optional: false, required: true
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudMonitorServiceHybridDoubleWriteTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudMonitorServiceHybridDoubleWriteTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      source_namespace: cdktf.stringToTerraform(this._sourceNamespace),
      source_user_id: cdktf.stringToTerraform(this._sourceUserId),
      user_id: cdktf.stringToTerraform(this._userId),
      timeouts: cloudMonitorServiceHybridDoubleWriteTimeoutsToTerraform(this._timeouts.internalValue),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_namespace: {
        value: cdktf.stringToHclTerraform(this._sourceNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_user_id: {
        value: cdktf.stringToHclTerraform(this._sourceUserId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudMonitorServiceHybridDoubleWriteTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudMonitorServiceHybridDoubleWriteTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
