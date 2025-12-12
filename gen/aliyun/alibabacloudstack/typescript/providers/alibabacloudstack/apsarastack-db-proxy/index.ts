// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackDbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#causal_consist_read ApsarastackDbProxy#causal_consist_read}
  */
  readonly causalConsistRead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#connection_persist ApsarastackDbProxy#connection_persist}
  */
  readonly connectionPersist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_instance_id ApsarastackDbProxy#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_connect_string ApsarastackDbProxy#db_proxy_connect_string}
  */
  readonly dbProxyConnectString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_connect_string_port ApsarastackDbProxy#db_proxy_connect_string_port}
  */
  readonly dbProxyConnectStringPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_endpoint_aliases ApsarastackDbProxy#db_proxy_endpoint_aliases}
  */
  readonly dbProxyEndpointAliases?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_endpoint_name ApsarastackDbProxy#db_proxy_endpoint_name}
  */
  readonly dbProxyEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_endpoint_type ApsarastackDbProxy#db_proxy_endpoint_type}
  */
  readonly dbProxyEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_instance_num ApsarastackDbProxy#db_proxy_instance_num}
  */
  readonly dbProxyInstanceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_instance_status ApsarastackDbProxy#db_proxy_instance_status}
  */
  readonly dbProxyInstanceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#db_proxy_read_write_mode ApsarastackDbProxy#db_proxy_read_write_mode}
  */
  readonly dbProxyReadWriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#effective_specific_time ApsarastackDbProxy#effective_specific_time}
  */
  readonly effectiveSpecificTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#effective_time ApsarastackDbProxy#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#id ApsarastackDbProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#timeouts ApsarastackDbProxy#timeouts}
  */
  readonly timeouts?: ApsarastackDbProxyTimeouts;
}
export interface ApsarastackDbProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#create ApsarastackDbProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#delete ApsarastackDbProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#update ApsarastackDbProxy#update}
  */
  readonly update?: string;
}

export function apsarastackDbProxyTimeoutsToTerraform(struct?: ApsarastackDbProxyTimeouts | cdktf.IResolvable): any {
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


export function apsarastackDbProxyTimeoutsToHclTerraform(struct?: ApsarastackDbProxyTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackDbProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackDbProxyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackDbProxyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy apsarastack_db_proxy}
*/
export class ApsarastackDbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_db_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackDbProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackDbProxy to import
  * @param importFromId The id of the existing ApsarastackDbProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackDbProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_db_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_db_proxy apsarastack_db_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackDbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackDbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_db_proxy',
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
    this._causalConsistRead = config.causalConsistRead;
    this._connectionPersist = config.connectionPersist;
    this._dbInstanceId = config.dbInstanceId;
    this._dbProxyConnectString = config.dbProxyConnectString;
    this._dbProxyConnectStringPort = config.dbProxyConnectStringPort;
    this._dbProxyEndpointAliases = config.dbProxyEndpointAliases;
    this._dbProxyEndpointName = config.dbProxyEndpointName;
    this._dbProxyEndpointType = config.dbProxyEndpointType;
    this._dbProxyInstanceNum = config.dbProxyInstanceNum;
    this._dbProxyInstanceStatus = config.dbProxyInstanceStatus;
    this._dbProxyReadWriteMode = config.dbProxyReadWriteMode;
    this._effectiveSpecificTime = config.effectiveSpecificTime;
    this._effectiveTime = config.effectiveTime;
    this._id = config.id;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // causal_consist_read - computed: true, optional: true, required: false
  private _causalConsistRead?: string; 
  public get causalConsistRead() {
    return this.getStringAttribute('causal_consist_read');
  }
  public set causalConsistRead(value: string) {
    this._causalConsistRead = value;
  }
  public resetCausalConsistRead() {
    this._causalConsistRead = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get causalConsistReadInput() {
    return this._causalConsistRead;
  }

  // connection_persist - computed: true, optional: true, required: false
  private _connectionPersist?: string; 
  public get connectionPersist() {
    return this.getStringAttribute('connection_persist');
  }
  public set connectionPersist(value: string) {
    this._connectionPersist = value;
  }
  public resetConnectionPersist() {
    this._connectionPersist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionPersistInput() {
    return this._connectionPersist;
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

  // db_proxy_connect_address - computed: true, optional: false, required: false
  public get dbProxyConnectAddress() {
    return this.getStringAttribute('db_proxy_connect_address');
  }

  // db_proxy_connect_string - computed: true, optional: true, required: false
  private _dbProxyConnectString?: string; 
  public get dbProxyConnectString() {
    return this.getStringAttribute('db_proxy_connect_string');
  }
  public set dbProxyConnectString(value: string) {
    this._dbProxyConnectString = value;
  }
  public resetDbProxyConnectString() {
    this._dbProxyConnectString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyConnectStringInput() {
    return this._dbProxyConnectString;
  }

  // db_proxy_connect_string_port - computed: true, optional: true, required: false
  private _dbProxyConnectStringPort?: string; 
  public get dbProxyConnectStringPort() {
    return this.getStringAttribute('db_proxy_connect_string_port');
  }
  public set dbProxyConnectStringPort(value: string) {
    this._dbProxyConnectStringPort = value;
  }
  public resetDbProxyConnectStringPort() {
    this._dbProxyConnectStringPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyConnectStringPortInput() {
    return this._dbProxyConnectStringPort;
  }

  // db_proxy_endpoint_aliases - computed: true, optional: true, required: false
  private _dbProxyEndpointAliases?: string; 
  public get dbProxyEndpointAliases() {
    return this.getStringAttribute('db_proxy_endpoint_aliases');
  }
  public set dbProxyEndpointAliases(value: string) {
    this._dbProxyEndpointAliases = value;
  }
  public resetDbProxyEndpointAliases() {
    this._dbProxyEndpointAliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointAliasesInput() {
    return this._dbProxyEndpointAliases;
  }

  // db_proxy_endpoint_name - computed: true, optional: true, required: false
  private _dbProxyEndpointName?: string; 
  public get dbProxyEndpointName() {
    return this.getStringAttribute('db_proxy_endpoint_name');
  }
  public set dbProxyEndpointName(value: string) {
    this._dbProxyEndpointName = value;
  }
  public resetDbProxyEndpointName() {
    this._dbProxyEndpointName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointNameInput() {
    return this._dbProxyEndpointName;
  }

  // db_proxy_endpoint_type - computed: true, optional: true, required: false
  private _dbProxyEndpointType?: string; 
  public get dbProxyEndpointType() {
    return this.getStringAttribute('db_proxy_endpoint_type');
  }
  public set dbProxyEndpointType(value: string) {
    this._dbProxyEndpointType = value;
  }
  public resetDbProxyEndpointType() {
    this._dbProxyEndpointType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyEndpointTypeInput() {
    return this._dbProxyEndpointType;
  }

  // db_proxy_instance_current_minor_version - computed: true, optional: false, required: false
  public get dbProxyInstanceCurrentMinorVersion() {
    return this.getStringAttribute('db_proxy_instance_current_minor_version');
  }

  // db_proxy_instance_latest_minor_version - computed: true, optional: false, required: false
  public get dbProxyInstanceLatestMinorVersion() {
    return this.getStringAttribute('db_proxy_instance_latest_minor_version');
  }

  // db_proxy_instance_num - computed: false, optional: true, required: false
  private _dbProxyInstanceNum?: number; 
  public get dbProxyInstanceNum() {
    return this.getNumberAttribute('db_proxy_instance_num');
  }
  public set dbProxyInstanceNum(value: number) {
    this._dbProxyInstanceNum = value;
  }
  public resetDbProxyInstanceNum() {
    this._dbProxyInstanceNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyInstanceNumInput() {
    return this._dbProxyInstanceNum;
  }

  // db_proxy_instance_status - computed: true, optional: true, required: false
  private _dbProxyInstanceStatus?: string; 
  public get dbProxyInstanceStatus() {
    return this.getStringAttribute('db_proxy_instance_status');
  }
  public set dbProxyInstanceStatus(value: string) {
    this._dbProxyInstanceStatus = value;
  }
  public resetDbProxyInstanceStatus() {
    this._dbProxyInstanceStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyInstanceStatusInput() {
    return this._dbProxyInstanceStatus;
  }

  // db_proxy_instance_type - computed: true, optional: false, required: false
  public get dbProxyInstanceType() {
    return this.getStringAttribute('db_proxy_instance_type');
  }

  // db_proxy_read_write_mode - computed: true, optional: true, required: false
  private _dbProxyReadWriteMode?: string; 
  public get dbProxyReadWriteMode() {
    return this.getStringAttribute('db_proxy_read_write_mode');
  }
  public set dbProxyReadWriteMode(value: string) {
    this._dbProxyReadWriteMode = value;
  }
  public resetDbProxyReadWriteMode() {
    this._dbProxyReadWriteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbProxyReadWriteModeInput() {
    return this._dbProxyReadWriteMode;
  }

  // db_proxy_service_status - computed: true, optional: false, required: false
  public get dbProxyServiceStatus() {
    return this.getStringAttribute('db_proxy_service_status');
  }

  // effective_specific_time - computed: false, optional: true, required: false
  private _effectiveSpecificTime?: string; 
  public get effectiveSpecificTime() {
    return this.getStringAttribute('effective_specific_time');
  }
  public set effectiveSpecificTime(value: string) {
    this._effectiveSpecificTime = value;
  }
  public resetEffectiveSpecificTime() {
    this._effectiveSpecificTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectiveSpecificTimeInput() {
    return this._effectiveSpecificTime;
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackDbProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackDbProxyTimeouts) {
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
      causal_consist_read: cdktf.stringToTerraform(this._causalConsistRead),
      connection_persist: cdktf.stringToTerraform(this._connectionPersist),
      db_instance_id: cdktf.stringToTerraform(this._dbInstanceId),
      db_proxy_connect_string: cdktf.stringToTerraform(this._dbProxyConnectString),
      db_proxy_connect_string_port: cdktf.stringToTerraform(this._dbProxyConnectStringPort),
      db_proxy_endpoint_aliases: cdktf.stringToTerraform(this._dbProxyEndpointAliases),
      db_proxy_endpoint_name: cdktf.stringToTerraform(this._dbProxyEndpointName),
      db_proxy_endpoint_type: cdktf.stringToTerraform(this._dbProxyEndpointType),
      db_proxy_instance_num: cdktf.numberToTerraform(this._dbProxyInstanceNum),
      db_proxy_instance_status: cdktf.stringToTerraform(this._dbProxyInstanceStatus),
      db_proxy_read_write_mode: cdktf.stringToTerraform(this._dbProxyReadWriteMode),
      effective_specific_time: cdktf.stringToTerraform(this._effectiveSpecificTime),
      effective_time: cdktf.stringToTerraform(this._effectiveTime),
      id: cdktf.stringToTerraform(this._id),
      timeouts: apsarastackDbProxyTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      causal_consist_read: {
        value: cdktf.stringToHclTerraform(this._causalConsistRead),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_persist: {
        value: cdktf.stringToHclTerraform(this._connectionPersist),
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
      db_proxy_connect_string: {
        value: cdktf.stringToHclTerraform(this._dbProxyConnectString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_connect_string_port: {
        value: cdktf.stringToHclTerraform(this._dbProxyConnectStringPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_endpoint_aliases: {
        value: cdktf.stringToHclTerraform(this._dbProxyEndpointAliases),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_endpoint_name: {
        value: cdktf.stringToHclTerraform(this._dbProxyEndpointName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_endpoint_type: {
        value: cdktf.stringToHclTerraform(this._dbProxyEndpointType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_instance_num: {
        value: cdktf.numberToHclTerraform(this._dbProxyInstanceNum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_proxy_instance_status: {
        value: cdktf.stringToHclTerraform(this._dbProxyInstanceStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      db_proxy_read_write_mode: {
        value: cdktf.stringToHclTerraform(this._dbProxyReadWriteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      effective_specific_time: {
        value: cdktf.stringToHclTerraform(this._effectiveSpecificTime),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: apsarastackDbProxyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackDbProxyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
