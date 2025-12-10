// https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LblistenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of networks from which listener is accessible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#allowed_cidrs Lblistener#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * Number of simultaneous connections for this listener, between 1 and 1,000,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#connection_limit Lblistener#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#id Lblistener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Insert X-Forwarded headers for 'HTTP', 'HTTPS', 'TERMINATED_HTTPS' protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#insert_x_forwarded Lblistener#insert_x_forwarded}
  */
  readonly insertXForwarded?: boolean | cdktf.IResolvable;
  /**
  * ID of the target load balancer to attach newly created listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#loadbalancer_id Lblistener#loadbalancer_id}
  */
  readonly loadbalancerId: string;
  /**
  * Listener name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#name Lblistener#name}
  */
  readonly name: string;
  /**
  * ID of the desired project to create load balancer listener in. Alternative for `project_name`. One of them should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#project_id Lblistener#project_id}
  */
  readonly projectId?: number;
  /**
  * Name of the desired project to create load balancer listener in. Alternative for `project_id`. One of them should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#project_name Lblistener#project_name}
  */
  readonly projectName?: string;
  /**
  * Available values are 'HTTP', 'HTTPS', 'TCP', 'UDP', 'TERMINATED_HTTPS', 'PROMETHEUS'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#protocol Lblistener#protocol}
  */
  readonly protocol: string;
  /**
  * Port number to listen, between 1 and 65535.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#protocol_port Lblistener#protocol_port}
  */
  readonly protocolPort: number;
  /**
  * ID of the desired region to create load balancer listener in. Alternative for `region_name`. One of them should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#region_id Lblistener#region_id}
  */
  readonly regionId?: number;
  /**
  * Name of the desired region to create load balancer listener in. Alternative for `region_id`. One of them should be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#region_name Lblistener#region_name}
  */
  readonly regionName?: string;
  /**
  * Secret ID to use with 'TERMINATED_HTTPS' protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#secret_id Lblistener#secret_id}
  */
  readonly secretId?: string;
  /**
  * List of additional Secret IDs to use with 'TERMINATED_HTTPS' protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#sni_secret_id Lblistener#sni_secret_id}
  */
  readonly sniSecretId?: string[];
  /**
  * Frontend client inactivity timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#timeout_client_data Lblistener#timeout_client_data}
  */
  readonly timeoutClientData?: number;
  /**
  * Backend member connection timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#timeout_member_connect Lblistener#timeout_member_connect}
  */
  readonly timeoutMemberConnect?: number;
  /**
  * Backend member inactivity timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#timeout_member_data Lblistener#timeout_member_data}
  */
  readonly timeoutMemberData?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#timeouts Lblistener#timeouts}
  */
  readonly timeouts?: LblistenerTimeouts;
  /**
  * user_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#user_list Lblistener#user_list}
  */
  readonly userList?: LblistenerUserListStruct[] | cdktf.IResolvable;
}
export interface LblistenerTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#create Lblistener#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#delete Lblistener#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#update Lblistener#update}
  */
  readonly update?: string;
}

export function lblistenerTimeoutsToTerraform(struct?: LblistenerTimeouts | cdktf.IResolvable): any {
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


export function lblistenerTimeoutsToHclTerraform(struct?: LblistenerTimeouts | cdktf.IResolvable): any {
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

export class LblistenerTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): LblistenerTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: LblistenerTimeouts | cdktf.IResolvable | undefined) {
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
export interface LblistenerUserListStruct {
  /**
  * Encrypted password (hash) to auth via Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#encrypted_password Lblistener#encrypted_password}
  */
  readonly encryptedPassword: string;
  /**
  * Username to auth via Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#username Lblistener#username}
  */
  readonly username: string;
}

export function lblistenerUserListStructToTerraform(struct?: LblistenerUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_password: cdktf.stringToTerraform(struct!.encryptedPassword),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function lblistenerUserListStructToHclTerraform(struct?: LblistenerUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encrypted_password: {
      value: cdktf.stringToHclTerraform(struct!.encryptedPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class LblistenerUserListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): LblistenerUserListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptedPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptedPassword = this._encryptedPassword;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: LblistenerUserListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptedPassword = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptedPassword = value.encryptedPassword;
      this._username = value.username;
    }
  }

  // encrypted_password - computed: false, optional: false, required: true
  private _encryptedPassword?: string; 
  public get encryptedPassword() {
    return this.getStringAttribute('encrypted_password');
  }
  public set encryptedPassword(value: string) {
    this._encryptedPassword = value;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptedPasswordInput() {
    return this._encryptedPassword;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

export class LblistenerUserListStructList extends cdktf.ComplexList {
  public internalValue? : LblistenerUserListStruct[] | cdktf.IResolvable

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
  public get(index: number): LblistenerUserListStructOutputReference {
    return new LblistenerUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener gcore_lblistener}
*/
export class Lblistener extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_lblistener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Lblistener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Lblistener to import
  * @param importFromId The id of the existing Lblistener that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Lblistener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_lblistener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.4/docs/resources/lblistener gcore_lblistener} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LblistenerConfig
  */
  public constructor(scope: Construct, id: string, config: LblistenerConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_lblistener',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.4',
        providerVersionConstraint: '0.32.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowedCidrs = config.allowedCidrs;
    this._connectionLimit = config.connectionLimit;
    this._id = config.id;
    this._insertXForwarded = config.insertXForwarded;
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._protocol = config.protocol;
    this._protocolPort = config.protocolPort;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._secretId = config.secretId;
    this._sniSecretId = config.sniSecretId;
    this._timeoutClientData = config.timeoutClientData;
    this._timeoutMemberConnect = config.timeoutMemberConnect;
    this._timeoutMemberData = config.timeoutMemberData;
    this._timeouts.internalValue = config.timeouts;
    this._userList.internalValue = config.userList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_cidrs - computed: false, optional: true, required: false
  private _allowedCidrs?: string[]; 
  public get allowedCidrs() {
    return this.getListAttribute('allowed_cidrs');
  }
  public set allowedCidrs(value: string[]) {
    this._allowedCidrs = value;
  }
  public resetAllowedCidrs() {
    this._allowedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedCidrsInput() {
    return this._allowedCidrs;
  }

  // connection_limit - computed: false, optional: true, required: false
  private _connectionLimit?: number; 
  public get connectionLimit() {
    return this.getNumberAttribute('connection_limit');
  }
  public set connectionLimit(value: number) {
    this._connectionLimit = value;
  }
  public resetConnectionLimit() {
    this._connectionLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionLimitInput() {
    return this._connectionLimit;
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

  // insert_x_forwarded - computed: false, optional: true, required: false
  private _insertXForwarded?: boolean | cdktf.IResolvable; 
  public get insertXForwarded() {
    return this.getBooleanAttribute('insert_x_forwarded');
  }
  public set insertXForwarded(value: boolean | cdktf.IResolvable) {
    this._insertXForwarded = value;
  }
  public resetInsertXForwarded() {
    this._insertXForwarded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insertXForwardedInput() {
    return this._insertXForwarded;
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // loadbalancer_id - computed: false, optional: false, required: true
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get loadbalancerIdInput() {
    return this._loadbalancerId;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operating_status - computed: true, optional: false, required: false
  public get operatingStatus() {
    return this.getStringAttribute('operating_status');
  }

  // pool_count - computed: true, optional: false, required: false
  public get poolCount() {
    return this.getNumberAttribute('pool_count');
  }

  // project_id - computed: false, optional: true, required: false
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // protocol_port - computed: false, optional: false, required: true
  private _protocolPort?: number; 
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
  }
  public set protocolPort(value: number) {
    this._protocolPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolPortInput() {
    return this._protocolPort;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // region_id - computed: false, optional: true, required: false
  private _regionId?: number; 
  public get regionId() {
    return this.getNumberAttribute('region_id');
  }
  public set regionId(value: number) {
    this._regionId = value;
  }
  public resetRegionId() {
    this._regionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionIdInput() {
    return this._regionId;
  }

  // region_name - computed: false, optional: true, required: false
  private _regionName?: string; 
  public get regionName() {
    return this.getStringAttribute('region_name');
  }
  public set regionName(value: string) {
    this._regionName = value;
  }
  public resetRegionName() {
    this._regionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionNameInput() {
    return this._regionName;
  }

  // secret_id - computed: false, optional: true, required: false
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  public resetSecretId() {
    this._secretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // sni_secret_id - computed: false, optional: true, required: false
  private _sniSecretId?: string[]; 
  public get sniSecretId() {
    return this.getListAttribute('sni_secret_id');
  }
  public set sniSecretId(value: string[]) {
    this._sniSecretId = value;
  }
  public resetSniSecretId() {
    this._sniSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sniSecretIdInput() {
    return this._sniSecretId;
  }

  // timeout_client_data - computed: false, optional: true, required: false
  private _timeoutClientData?: number; 
  public get timeoutClientData() {
    return this.getNumberAttribute('timeout_client_data');
  }
  public set timeoutClientData(value: number) {
    this._timeoutClientData = value;
  }
  public resetTimeoutClientData() {
    this._timeoutClientData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutClientDataInput() {
    return this._timeoutClientData;
  }

  // timeout_member_connect - computed: false, optional: true, required: false
  private _timeoutMemberConnect?: number; 
  public get timeoutMemberConnect() {
    return this.getNumberAttribute('timeout_member_connect');
  }
  public set timeoutMemberConnect(value: number) {
    this._timeoutMemberConnect = value;
  }
  public resetTimeoutMemberConnect() {
    this._timeoutMemberConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberConnectInput() {
    return this._timeoutMemberConnect;
  }

  // timeout_member_data - computed: false, optional: true, required: false
  private _timeoutMemberData?: number; 
  public get timeoutMemberData() {
    return this.getNumberAttribute('timeout_member_data');
  }
  public set timeoutMemberData(value: number) {
    this._timeoutMemberData = value;
  }
  public resetTimeoutMemberData() {
    this._timeoutMemberData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutMemberDataInput() {
    return this._timeoutMemberData;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new LblistenerTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: LblistenerTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_list - computed: false, optional: true, required: false
  private _userList = new LblistenerUserListStructList(this, "user_list", false);
  public get userList() {
    return this._userList;
  }
  public putUserList(value: LblistenerUserListStruct[] | cdktf.IResolvable) {
    this._userList.internalValue = value;
  }
  public resetUserList() {
    this._userList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userListInput() {
    return this._userList.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allowed_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._allowedCidrs),
      connection_limit: cdktf.numberToTerraform(this._connectionLimit),
      id: cdktf.stringToTerraform(this._id),
      insert_x_forwarded: cdktf.booleanToTerraform(this._insertXForwarded),
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      protocol: cdktf.stringToTerraform(this._protocol),
      protocol_port: cdktf.numberToTerraform(this._protocolPort),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      secret_id: cdktf.stringToTerraform(this._secretId),
      sni_secret_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniSecretId),
      timeout_client_data: cdktf.numberToTerraform(this._timeoutClientData),
      timeout_member_connect: cdktf.numberToTerraform(this._timeoutMemberConnect),
      timeout_member_data: cdktf.numberToTerraform(this._timeoutMemberData),
      timeouts: lblistenerTimeoutsToTerraform(this._timeouts.internalValue),
      user_list: cdktf.listMapper(lblistenerUserListStructToTerraform, true)(this._userList.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allowed_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._allowedCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      connection_limit: {
        value: cdktf.numberToHclTerraform(this._connectionLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      insert_x_forwarded: {
        value: cdktf.booleanToHclTerraform(this._insertXForwarded),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      loadbalancer_id: {
        value: cdktf.stringToHclTerraform(this._loadbalancerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol_port: {
        value: cdktf.numberToHclTerraform(this._protocolPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_id: {
        value: cdktf.numberToHclTerraform(this._regionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      region_name: {
        value: cdktf.stringToHclTerraform(this._regionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_id: {
        value: cdktf.stringToHclTerraform(this._secretId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sni_secret_id: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sniSecretId),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeout_client_data: {
        value: cdktf.numberToHclTerraform(this._timeoutClientData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_member_connect: {
        value: cdktf.numberToHclTerraform(this._timeoutMemberConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeout_member_data: {
        value: cdktf.numberToHclTerraform(this._timeoutMemberData),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: lblistenerTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "LblistenerTimeouts",
      },
      user_list: {
        value: cdktf.listMapperHcl(lblistenerUserListStructToHclTerraform, true)(this._userList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "LblistenerUserListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
