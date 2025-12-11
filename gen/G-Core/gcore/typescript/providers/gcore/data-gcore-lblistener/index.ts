// https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataGcoreLblistenerConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of networks from which listener is accessible
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#allowed_cidrs DataGcoreLblistener#allowed_cidrs}
  */
  readonly allowedCidrs?: string[];
  /**
  * Number of simultaneous connections for this listener, between 1 and 1,000,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#connection_limit DataGcoreLblistener#connection_limit}
  */
  readonly connectionLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#id DataGcoreLblistener#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ID of the load balancer to which listener was attached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#loadbalancer_id DataGcoreLblistener#loadbalancer_id}
  */
  readonly loadbalancerId?: string;
  /**
  * Name of the load balancer listener.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#name DataGcoreLblistener#name}
  */
  readonly name: string;
  /**
  * ID of the project in which load balancer listener was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#project_id DataGcoreLblistener#project_id}
  */
  readonly projectId?: number;
  /**
  * Name of the project in which load balancer listener was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#project_name DataGcoreLblistener#project_name}
  */
  readonly projectName?: string;
  /**
  * ID of the region in which load balancer listener was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#region_id DataGcoreLblistener#region_id}
  */
  readonly regionId?: number;
  /**
  * Name of the region in which load balancer listener was created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#region_name DataGcoreLblistener#region_name}
  */
  readonly regionName?: string;
  /**
  * Secret ID to use with 'TERMINATED_HTTPS' protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#secret_id DataGcoreLblistener#secret_id}
  */
  readonly secretId?: string;
  /**
  * List of additional Secret IDs to use with 'TERMINATED_HTTPS' protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#sni_secret_id DataGcoreLblistener#sni_secret_id}
  */
  readonly sniSecretId?: string[];
  /**
  * Frontend client inactivity timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#timeout_client_data DataGcoreLblistener#timeout_client_data}
  */
  readonly timeoutClientData?: number;
  /**
  * Backend member connection timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#timeout_member_connect DataGcoreLblistener#timeout_member_connect}
  */
  readonly timeoutMemberConnect?: number;
  /**
  * Backend member inactivity timeout in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#timeout_member_data DataGcoreLblistener#timeout_member_data}
  */
  readonly timeoutMemberData?: number;
  /**
  * user_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#user_list DataGcoreLblistener#user_list}
  */
  readonly userList?: DataGcoreLblistenerUserListStruct[] | cdktf.IResolvable;
}
export interface DataGcoreLblistenerUserListStruct {
  /**
  * Encrypted password (hash) to auth via Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#encrypted_password DataGcoreLblistener#encrypted_password}
  */
  readonly encryptedPassword: string;
  /**
  * Username to auth via Basic Authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#username DataGcoreLblistener#username}
  */
  readonly username: string;
}

export function dataGcoreLblistenerUserListStructToTerraform(struct?: DataGcoreLblistenerUserListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encrypted_password: cdktf.stringToTerraform(struct!.encryptedPassword),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataGcoreLblistenerUserListStructToHclTerraform(struct?: DataGcoreLblistenerUserListStruct | cdktf.IResolvable): any {
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

export class DataGcoreLblistenerUserListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataGcoreLblistenerUserListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataGcoreLblistenerUserListStruct | cdktf.IResolvable | undefined) {
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

export class DataGcoreLblistenerUserListStructList extends cdktf.ComplexList {
  public internalValue? : DataGcoreLblistenerUserListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataGcoreLblistenerUserListStructOutputReference {
    return new DataGcoreLblistenerUserListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener gcore_lblistener}
*/
export class DataGcoreLblistener extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "gcore_lblistener";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataGcoreLblistener resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataGcoreLblistener to import
  * @param importFromId The id of the existing DataGcoreLblistener that should be imported. Refer to the {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataGcoreLblistener to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "gcore_lblistener", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/g-core/gcore/0.32.5/docs/data-sources/lblistener gcore_lblistener} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataGcoreLblistenerConfig
  */
  public constructor(scope: Construct, id: string, config: DataGcoreLblistenerConfig) {
    super(scope, id, {
      terraformResourceType: 'gcore_lblistener',
      terraformGeneratorMetadata: {
        providerName: 'gcore',
        providerVersion: '0.32.5',
        providerVersionConstraint: '0.32.5'
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
    this._loadbalancerId = config.loadbalancerId;
    this._name = config.name;
    this._projectId = config.projectId;
    this._projectName = config.projectName;
    this._regionId = config.regionId;
    this._regionName = config.regionName;
    this._secretId = config.secretId;
    this._sniSecretId = config.sniSecretId;
    this._timeoutClientData = config.timeoutClientData;
    this._timeoutMemberConnect = config.timeoutMemberConnect;
    this._timeoutMemberData = config.timeoutMemberData;
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

  // loadbalancer_id - computed: true, optional: true, required: false
  private _loadbalancerId?: string; 
  public get loadbalancerId() {
    return this.getStringAttribute('loadbalancer_id');
  }
  public set loadbalancerId(value: string) {
    this._loadbalancerId = value;
  }
  public resetLoadbalancerId() {
    this._loadbalancerId = undefined;
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

  // protocol - computed: true, optional: false, required: false
  public get protocol() {
    return this.getStringAttribute('protocol');
  }

  // protocol_port - computed: true, optional: false, required: false
  public get protocolPort() {
    return this.getNumberAttribute('protocol_port');
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

  // user_list - computed: false, optional: true, required: false
  private _userList = new DataGcoreLblistenerUserListStructList(this, "user_list", false);
  public get userList() {
    return this._userList;
  }
  public putUserList(value: DataGcoreLblistenerUserListStruct[] | cdktf.IResolvable) {
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
      loadbalancer_id: cdktf.stringToTerraform(this._loadbalancerId),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      project_name: cdktf.stringToTerraform(this._projectName),
      region_id: cdktf.numberToTerraform(this._regionId),
      region_name: cdktf.stringToTerraform(this._regionName),
      secret_id: cdktf.stringToTerraform(this._secretId),
      sni_secret_id: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sniSecretId),
      timeout_client_data: cdktf.numberToTerraform(this._timeoutClientData),
      timeout_member_connect: cdktf.numberToTerraform(this._timeoutMemberConnect),
      timeout_member_data: cdktf.numberToTerraform(this._timeoutMemberData),
      user_list: cdktf.listMapper(dataGcoreLblistenerUserListStructToTerraform, true)(this._userList.internalValue),
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
      user_list: {
        value: cdktf.listMapperHcl(dataGcoreLblistenerUserListStructToHclTerraform, true)(this._userList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataGcoreLblistenerUserListStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
