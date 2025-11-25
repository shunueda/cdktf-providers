// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TdmqNamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The Dedicated Cluster Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#cluster_id TdmqNamespace#cluster_id}
  */
  readonly clusterId: string;
  /**
  * The name of namespace to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#environ_name TdmqNamespace#environ_name}
  */
  readonly environName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#id TdmqNamespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The expiration time of unconsumed message.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#msg_ttl TdmqNamespace#msg_ttl}
  */
  readonly msgTtl: number;
  /**
  * Description of the namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#remark TdmqNamespace#remark}
  */
  readonly remark?: string;
  /**
  * retention_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#retention_policy TdmqNamespace#retention_policy}
  */
  readonly retentionPolicy?: TdmqNamespaceRetentionPolicy;
}
export interface TdmqNamespaceRetentionPolicy {
  /**
  * the size of message to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#size_in_mb TdmqNamespace#size_in_mb}
  */
  readonly sizeInMb?: number;
  /**
  * the time of message to retain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#time_in_minutes TdmqNamespace#time_in_minutes}
  */
  readonly timeInMinutes?: number;
}

export function tdmqNamespaceRetentionPolicyToTerraform(struct?: TdmqNamespaceRetentionPolicyOutputReference | TdmqNamespaceRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    size_in_mb: cdktf.numberToTerraform(struct!.sizeInMb),
    time_in_minutes: cdktf.numberToTerraform(struct!.timeInMinutes),
  }
}


export function tdmqNamespaceRetentionPolicyToHclTerraform(struct?: TdmqNamespaceRetentionPolicyOutputReference | TdmqNamespaceRetentionPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    size_in_mb: {
      value: cdktf.numberToHclTerraform(struct!.sizeInMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.timeInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TdmqNamespaceRetentionPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TdmqNamespaceRetentionPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sizeInMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.sizeInMb = this._sizeInMb;
    }
    if (this._timeInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeInMinutes = this._timeInMinutes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TdmqNamespaceRetentionPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sizeInMb = undefined;
      this._timeInMinutes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sizeInMb = value.sizeInMb;
      this._timeInMinutes = value.timeInMinutes;
    }
  }

  // size_in_mb - computed: true, optional: true, required: false
  private _sizeInMb?: number; 
  public get sizeInMb() {
    return this.getNumberAttribute('size_in_mb');
  }
  public set sizeInMb(value: number) {
    this._sizeInMb = value;
  }
  public resetSizeInMb() {
    this._sizeInMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInMbInput() {
    return this._sizeInMb;
  }

  // time_in_minutes - computed: true, optional: true, required: false
  private _timeInMinutes?: number; 
  public get timeInMinutes() {
    return this.getNumberAttribute('time_in_minutes');
  }
  public set timeInMinutes(value: number) {
    this._timeInMinutes = value;
  }
  public resetTimeInMinutes() {
    this._timeInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInMinutesInput() {
    return this._timeInMinutes;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace tencentcloud_tdmq_namespace}
*/
export class TdmqNamespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_tdmq_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TdmqNamespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TdmqNamespace to import
  * @param importFromId The id of the existing TdmqNamespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TdmqNamespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_tdmq_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/tdmq_namespace tencentcloud_tdmq_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TdmqNamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: TdmqNamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_tdmq_namespace',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._environName = config.environName;
    this._id = config.id;
    this._msgTtl = config.msgTtl;
    this._remark = config.remark;
    this._retentionPolicy.internalValue = config.retentionPolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // environ_name - computed: false, optional: false, required: true
  private _environName?: string; 
  public get environName() {
    return this.getStringAttribute('environ_name');
  }
  public set environName(value: string) {
    this._environName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environNameInput() {
    return this._environName;
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

  // msg_ttl - computed: false, optional: false, required: true
  private _msgTtl?: number; 
  public get msgTtl() {
    return this.getNumberAttribute('msg_ttl');
  }
  public set msgTtl(value: number) {
    this._msgTtl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get msgTtlInput() {
    return this._msgTtl;
  }

  // remark - computed: false, optional: true, required: false
  private _remark?: string; 
  public get remark() {
    return this.getStringAttribute('remark');
  }
  public set remark(value: string) {
    this._remark = value;
  }
  public resetRemark() {
    this._remark = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remarkInput() {
    return this._remark;
  }

  // retention_policy - computed: false, optional: true, required: false
  private _retentionPolicy = new TdmqNamespaceRetentionPolicyOutputReference(this, "retention_policy");
  public get retentionPolicy() {
    return this._retentionPolicy;
  }
  public putRetentionPolicy(value: TdmqNamespaceRetentionPolicy) {
    this._retentionPolicy.internalValue = value;
  }
  public resetRetentionPolicy() {
    this._retentionPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionPolicyInput() {
    return this._retentionPolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      environ_name: cdktf.stringToTerraform(this._environName),
      id: cdktf.stringToTerraform(this._id),
      msg_ttl: cdktf.numberToTerraform(this._msgTtl),
      remark: cdktf.stringToTerraform(this._remark),
      retention_policy: tdmqNamespaceRetentionPolicyToTerraform(this._retentionPolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environ_name: {
        value: cdktf.stringToHclTerraform(this._environName),
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
      msg_ttl: {
        value: cdktf.numberToHclTerraform(this._msgTtl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remark: {
        value: cdktf.stringToHclTerraform(this._remark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retention_policy: {
        value: tdmqNamespaceRetentionPolicyToHclTerraform(this._retentionPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TdmqNamespaceRetentionPolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
