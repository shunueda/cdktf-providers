// https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApsarastackPolardbProxyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#causal_consist_read ApsarastackPolardbProxy#causal_consist_read}
  */
  readonly causalConsistRead?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#connection_persist ApsarastackPolardbProxy#connection_persist}
  */
  readonly connectionPersist?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_instance_id ApsarastackPolardbProxy#db_instance_id}
  */
  readonly dbInstanceId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_connect_string ApsarastackPolardbProxy#db_proxy_connect_string}
  */
  readonly dbProxyConnectString?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_connect_string_port ApsarastackPolardbProxy#db_proxy_connect_string_port}
  */
  readonly dbProxyConnectStringPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_endpoint_aliases ApsarastackPolardbProxy#db_proxy_endpoint_aliases}
  */
  readonly dbProxyEndpointAliases?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_endpoint_name ApsarastackPolardbProxy#db_proxy_endpoint_name}
  */
  readonly dbProxyEndpointName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_endpoint_type ApsarastackPolardbProxy#db_proxy_endpoint_type}
  */
  readonly dbProxyEndpointType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_instance_num ApsarastackPolardbProxy#db_proxy_instance_num}
  */
  readonly dbProxyInstanceNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_instance_status ApsarastackPolardbProxy#db_proxy_instance_status}
  */
  readonly dbProxyInstanceStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_proxy_read_write_mode ApsarastackPolardbProxy#db_proxy_read_write_mode}
  */
  readonly dbProxyReadWriteMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#effective_specific_time ApsarastackPolardbProxy#effective_specific_time}
  */
  readonly effectiveSpecificTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#effective_time ApsarastackPolardbProxy#effective_time}
  */
  readonly effectiveTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#id ApsarastackPolardbProxy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#read_only_instance_max_delay_time ApsarastackPolardbProxy#read_only_instance_max_delay_time}
  */
  readonly readOnlyInstanceMaxDelayTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#read_write_spliting ApsarastackPolardbProxy#read_write_spliting}
  */
  readonly readWriteSpliting?: string;
  /**
  * read_only_instance_weight block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#read_only_instance_weight ApsarastackPolardbProxy#read_only_instance_weight}
  */
  readonly readOnlyInstanceWeight?: ApsarastackPolardbProxyReadOnlyInstanceWeight[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#timeouts ApsarastackPolardbProxy#timeouts}
  */
  readonly timeouts?: ApsarastackPolardbProxyTimeouts;
}
export interface ApsarastackPolardbProxyReadOnlyInstanceWeight {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#db_instance_id ApsarastackPolardbProxy#db_instance_id}
  */
  readonly dbInstanceId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#weight ApsarastackPolardbProxy#weight}
  */
  readonly weight?: number;
}

export function apsarastackPolardbProxyReadOnlyInstanceWeightToTerraform(struct?: ApsarastackPolardbProxyReadOnlyInstanceWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    db_instance_id: cdktf.stringToTerraform(struct!.dbInstanceId),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function apsarastackPolardbProxyReadOnlyInstanceWeightToHclTerraform(struct?: ApsarastackPolardbProxyReadOnlyInstanceWeight | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    db_instance_id: {
      value: cdktf.stringToHclTerraform(struct!.dbInstanceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApsarastackPolardbProxyReadOnlyInstanceWeightOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): ApsarastackPolardbProxyReadOnlyInstanceWeight | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dbInstanceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.dbInstanceId = this._dbInstanceId;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApsarastackPolardbProxyReadOnlyInstanceWeight | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dbInstanceId = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dbInstanceId = value.dbInstanceId;
      this._weight = value.weight;
    }
  }

  // db_instance_id - computed: true, optional: true, required: false
  private _dbInstanceId?: string; 
  public get dbInstanceId() {
    return this.getStringAttribute('db_instance_id');
  }
  public set dbInstanceId(value: string) {
    this._dbInstanceId = value;
  }
  public resetDbInstanceId() {
    this._dbInstanceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbInstanceIdInput() {
    return this._dbInstanceId;
  }

  // weight - computed: true, optional: true, required: false
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  public resetWeight() {
    this._weight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class ApsarastackPolardbProxyReadOnlyInstanceWeightList extends cdktf.ComplexList {
  public internalValue? : ApsarastackPolardbProxyReadOnlyInstanceWeight[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): ApsarastackPolardbProxyReadOnlyInstanceWeightOutputReference {
    return new ApsarastackPolardbProxyReadOnlyInstanceWeightOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApsarastackPolardbProxyTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#create ApsarastackPolardbProxy#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#delete ApsarastackPolardbProxy#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#update ApsarastackPolardbProxy#update}
  */
  readonly update?: string;
}

export function apsarastackPolardbProxyTimeoutsToTerraform(struct?: ApsarastackPolardbProxyTimeouts | cdktf.IResolvable): any {
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


export function apsarastackPolardbProxyTimeoutsToHclTerraform(struct?: ApsarastackPolardbProxyTimeouts | cdktf.IResolvable): any {
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

export class ApsarastackPolardbProxyTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ApsarastackPolardbProxyTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApsarastackPolardbProxyTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy apsarastack_polardb_proxy}
*/
export class ApsarastackPolardbProxy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apsarastack_polardb_proxy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApsarastackPolardbProxy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApsarastackPolardbProxy to import
  * @param importFromId The id of the existing ApsarastackPolardbProxy that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApsarastackPolardbProxy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apsarastack_polardb_proxy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alibabacloudstack/3.18.21/docs/resources/apsarastack_polardb_proxy apsarastack_polardb_proxy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApsarastackPolardbProxyConfig
  */
  public constructor(scope: Construct, id: string, config: ApsarastackPolardbProxyConfig) {
    super(scope, id, {
      terraformResourceType: 'apsarastack_polardb_proxy',
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
    this._readOnlyInstanceMaxDelayTime = config.readOnlyInstanceMaxDelayTime;
    this._readWriteSpliting = config.readWriteSpliting;
    this._readOnlyInstanceWeight.internalValue = config.readOnlyInstanceWeight;
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

  // read_only_instance_max_delay_time - computed: false, optional: true, required: false
  private _readOnlyInstanceMaxDelayTime?: string; 
  public get readOnlyInstanceMaxDelayTime() {
    return this.getStringAttribute('read_only_instance_max_delay_time');
  }
  public set readOnlyInstanceMaxDelayTime(value: string) {
    this._readOnlyInstanceMaxDelayTime = value;
  }
  public resetReadOnlyInstanceMaxDelayTime() {
    this._readOnlyInstanceMaxDelayTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInstanceMaxDelayTimeInput() {
    return this._readOnlyInstanceMaxDelayTime;
  }

  // read_write_spliting - computed: true, optional: true, required: false
  private _readWriteSpliting?: string; 
  public get readWriteSpliting() {
    return this.getStringAttribute('read_write_spliting');
  }
  public set readWriteSpliting(value: string) {
    this._readWriteSpliting = value;
  }
  public resetReadWriteSpliting() {
    this._readWriteSpliting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readWriteSplitingInput() {
    return this._readWriteSpliting;
  }

  // read_only_instance_weight - computed: false, optional: true, required: false
  private _readOnlyInstanceWeight = new ApsarastackPolardbProxyReadOnlyInstanceWeightList(this, "read_only_instance_weight", true);
  public get readOnlyInstanceWeight() {
    return this._readOnlyInstanceWeight;
  }
  public putReadOnlyInstanceWeight(value: ApsarastackPolardbProxyReadOnlyInstanceWeight[] | cdktf.IResolvable) {
    this._readOnlyInstanceWeight.internalValue = value;
  }
  public resetReadOnlyInstanceWeight() {
    this._readOnlyInstanceWeight.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyInstanceWeightInput() {
    return this._readOnlyInstanceWeight.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ApsarastackPolardbProxyTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ApsarastackPolardbProxyTimeouts) {
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
      read_only_instance_max_delay_time: cdktf.stringToTerraform(this._readOnlyInstanceMaxDelayTime),
      read_write_spliting: cdktf.stringToTerraform(this._readWriteSpliting),
      read_only_instance_weight: cdktf.listMapper(apsarastackPolardbProxyReadOnlyInstanceWeightToTerraform, true)(this._readOnlyInstanceWeight.internalValue),
      timeouts: apsarastackPolardbProxyTimeoutsToTerraform(this._timeouts.internalValue),
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
      read_only_instance_max_delay_time: {
        value: cdktf.stringToHclTerraform(this._readOnlyInstanceMaxDelayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_write_spliting: {
        value: cdktf.stringToHclTerraform(this._readWriteSpliting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      read_only_instance_weight: {
        value: cdktf.listMapperHcl(apsarastackPolardbProxyReadOnlyInstanceWeightToHclTerraform, true)(this._readOnlyInstanceWeight.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ApsarastackPolardbProxyReadOnlyInstanceWeightList",
      },
      timeouts: {
        value: apsarastackPolardbProxyTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ApsarastackPolardbProxyTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
