// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MongodbNodeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#account_name MongodbNode#account_name}
  */
  readonly accountName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#account_password MongodbNode#account_password}
  */
  readonly accountPassword?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#auto_pay MongodbNode#auto_pay}
  */
  readonly autoPay?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#business_info MongodbNode#business_info}
  */
  readonly businessInfo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#db_instance_id MongodbNode#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#effective_time MongodbNode#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#from_app MongodbNode#from_app}
  */
  readonly fromApp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#id MongodbNode#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#node_class MongodbNode#node_class}
  */
  readonly nodeClass: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#node_storage MongodbNode#node_storage}
  */
  readonly nodeStorage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#node_type MongodbNode#node_type}
  */
  readonly nodeType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#order_type MongodbNode#order_type}
  */
  readonly orderType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#readonly_replicas MongodbNode#readonly_replicas}
  */
  readonly readonlyReplicas?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#shard_direct MongodbNode#shard_direct}
  */
  readonly shardDirect?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#switch_time MongodbNode#switch_time}
  */
  readonly switchTime?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#timeouts MongodbNode#timeouts}
  */
  readonly timeouts?: MongodbNodeTimeouts;
}
export interface MongodbNodeTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#create MongodbNode#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#delete MongodbNode#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#update MongodbNode#update}
  */
  readonly update?: string;
}

export function mongodbNodeTimeoutsToTerraform(struct?: MongodbNodeTimeouts | cdktf.IResolvable): any {
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


export function mongodbNodeTimeoutsToHclTerraform(struct?: MongodbNodeTimeouts | cdktf.IResolvable): any {
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

export class MongodbNodeTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MongodbNodeTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MongodbNodeTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node alicloud_mongodb_node}
*/
export class MongodbNode extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_mongodb_node";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MongodbNode resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MongodbNode to import
  * @param importFromId The id of the existing MongodbNode that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MongodbNode to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_mongodb_node", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/mongodb_node alicloud_mongodb_node} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MongodbNodeConfig
  */
  public constructor(scope: Construct, id: string, config: MongodbNodeConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_mongodb_node',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountName = config.accountName;
    this._accountPassword = config.accountPassword;
    this._autoPay = config.autoPay;
    this._businessInfo = config.businessInfo;
    this._dbInstanceId = config.dbInstanceId;
    this._effectiveTime = config.effectiveTime;
    this._fromApp = config.fromApp;
    this._id = config.id;
    this._nodeClass = config.nodeClass;
    this._nodeStorage = config.nodeStorage;
    this._nodeType = config.nodeType;
    this._orderType = config.orderType;
    this._readonlyReplicas = config.readonlyReplicas;
    this._shardDirect = config.shardDirect;
    this._switchTime = config.switchTime;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // account_password - computed: false, optional: true, required: false
  private _accountPassword?: string; 
  public get accountPassword() {
    return this.getStringAttribute('account_password');
  }
  public set accountPassword(value: string) {
    this._accountPassword = value;
  }
  public resetAccountPassword() {
    this._accountPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountPasswordInput() {
    return this._accountPassword;
  }

  // auto_pay - computed: false, optional: true, required: false
  private _autoPay?: boolean | cdktf.IResolvable; 
  public get autoPay() {
    return this.getBooleanAttribute('auto_pay');
  }
  public set autoPay(value: boolean | cdktf.IResolvable) {
    this._autoPay = value;
  }
  public resetAutoPay() {
    this._autoPay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoPayInput() {
    return this._autoPay;
  }

  // business_info - computed: false, optional: true, required: false
  private _businessInfo?: string; 
  public get businessInfo() {
    return this.getStringAttribute('business_info');
  }
  public set businessInfo(value: string) {
    this._businessInfo = value;
  }
  public resetBusinessInfo() {
    this._businessInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get businessInfoInput() {
    return this._businessInfo;
  }

  // db_instance_id - computed: false, optional: false, required: true
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // effective_time - computed: false, optional: true, required: false
  private _effectiveTime?: string; 
  public get effectiveTime() {
    return this.getStringAttribute('effective_time');
  }
  public set effectiveTime(value: string) {
    this._effectiveTime = value;
  }
  public resetEffectiveTime() {
    this._effectiveTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveTimeInput() {
    return this._effectiveTime;
  }

  // from_app - computed: false, optional: true, required: false
  private _fromApp?: string; 
  public get fromApp() {
    return this.getStringAttribute('from_app');
  }
  public set fromApp(value: string) {
    this._fromApp = value;
  }
  public resetFromApp() {
    this._fromApp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fromAppInput() {
    return this._fromApp;
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

  // node_class - computed: false, optional: false, required: true
  private _nodeClass?: string; 
  public get nodeClass() {
    return this.getStringAttribute('node_class');
  }
  public set nodeClass(value: string) {
    this._nodeClass = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeClassInput() {
    return this._nodeClass;
  }

  // node_id - computed: true, optional: false, required: false
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }

  // node_storage - computed: false, optional: true, required: false
  private _nodeStorage?: number; 
  public get nodeStorage() {
    return this.getNumberAttribute('node_storage');
  }
  public set nodeStorage(value: number) {
    this._nodeStorage = value;
  }
  public resetNodeStorage() {
    this._nodeStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeStorageInput() {
    return this._nodeStorage;
  }

  // node_type - computed: false, optional: false, required: true
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
  }

  // order_type - computed: false, optional: true, required: false
  private _orderType?: string; 
  public get orderType() {
    return this.getStringAttribute('order_type');
  }
  public set orderType(value: string) {
    this._orderType = value;
  }
  public resetOrderType() {
    this._orderType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderTypeInput() {
    return this._orderType;
  }

  // readonly_replicas - computed: true, optional: true, required: false
  private _readonlyReplicas?: number; 
  public get readonlyReplicas() {
    return this.getNumberAttribute('readonly_replicas');
  }
  public set readonlyReplicas(value: number) {
    this._readonlyReplicas = value;
  }
  public resetReadonlyReplicas() {
    this._readonlyReplicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readonlyReplicasInput() {
    return this._readonlyReplicas;
  }

  // shard_direct - computed: false, optional: true, required: false
  private _shardDirect?: boolean | cdktf.IResolvable; 
  public get shardDirect() {
    return this.getBooleanAttribute('shard_direct');
  }
  public set shardDirect(value: boolean | cdktf.IResolvable) {
    this._shardDirect = value;
  }
  public resetShardDirect() {
    this._shardDirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardDirectInput() {
    return this._shardDirect;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // switch_time - computed: false, optional: true, required: false
  private _switchTime?: string; 
  public get switchTime() {
    return this.getStringAttribute('switch_time');
  }
  public set switchTime(value: string) {
    this._switchTime = value;
  }
  public resetSwitchTime() {
    this._switchTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchTimeInput() {
    return this._switchTime;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MongodbNodeTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MongodbNodeTimeouts) {
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
      account_name: cdktf.stringToTerraform(this._accountName),
      account_password: cdktf.stringToTerraform(this._accountPassword),
      auto_pay: cdktf.booleanToTerraform(this._autoPay),
      business_info: cdktf.stringToTerraform(this._businessInfo),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      from_app: cdktf.stringToTerraform(this._fromApp),
      id: cdktf.stringToTerraform(this._id),
      node_class: cdktf.stringToTerraform(this._nodeClass),
      node_storage: cdktf.numberToTerraform(this._nodeStorage),
      node_type: cdktf.stringToTerraform(this._nodeType),
      order_type: cdktf.stringToTerraform(this._orderType),
      readonly_replicas: cdktf.numberToTerraform(this._readonlyReplicas),
      shard_direct: cdktf.booleanToTerraform(this._shardDirect),
      switch_time: cdktf.stringToTerraform(this._switchTime),
      timeouts: mongodbNodeTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_password: {
        value: cdktf.stringToHclTerraform(this._accountPassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auto_pay: {
        value: cdktf.booleanToHclTerraform(this._autoPay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      business_info: {
        value: cdktf.stringToHclTerraform(this._businessInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_instance_id: {
        value: cdktf.stringToHclTerraform(this._dbInstanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_time: {
        value: cdktf.stringToHclTerraform(this._effectiveTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from_app: {
        value: cdktf.stringToHclTerraform(this._fromApp),
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
      node_class: {
        value: cdktf.stringToHclTerraform(this._nodeClass),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      node_storage: {
        value: cdktf.numberToHclTerraform(this._nodeStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      node_type: {
        value: cdktf.stringToHclTerraform(this._nodeType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      order_type: {
        value: cdktf.stringToHclTerraform(this._orderType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readonly_replicas: {
        value: cdktf.numberToHclTerraform(this._readonlyReplicas),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      shard_direct: {
        value: cdktf.booleanToHclTerraform(this._shardDirect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      switch_time: {
        value: cdktf.stringToHclTerraform(this._switchTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: mongodbNodeTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MongodbNodeTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
