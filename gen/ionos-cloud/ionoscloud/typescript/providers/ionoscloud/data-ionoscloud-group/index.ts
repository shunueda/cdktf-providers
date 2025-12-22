// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIonoscloudGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * When set to true, information about users will be stored in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#get_users_data DataIonoscloudGroup#get_users_data}
  */
  readonly fetchUsersData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#id DataIonoscloudGroup#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#name DataIonoscloudGroup#name}
  */
  readonly name?: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#timeouts DataIonoscloudGroup#timeouts}
  */
  readonly timeouts?: DataIonoscloudGroupTimeouts;
}
export interface DataIonoscloudGroupUsers {
}

export function dataIonoscloudGroupUsersToTerraform(struct?: DataIonoscloudGroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataIonoscloudGroupUsersToHclTerraform(struct?: DataIonoscloudGroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataIonoscloudGroupUsersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataIonoscloudGroupUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataIonoscloudGroupUsers | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // administrator - computed: true, optional: false, required: false
  public get administrator() {
    return this.getBooleanAttribute('administrator');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // force_sec_auth - computed: true, optional: false, required: false
  public get forceSecAuth() {
    return this.getBooleanAttribute('force_sec_auth');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
}

export class DataIonoscloudGroupUsersList extends cdktf.ComplexList {

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
  public get(index: number): DataIonoscloudGroupUsersOutputReference {
    return new DataIonoscloudGroupUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataIonoscloudGroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#create DataIonoscloudGroup#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#default DataIonoscloudGroup#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#delete DataIonoscloudGroup#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#update DataIonoscloudGroup#update}
  */
  readonly update?: string;
}

export function dataIonoscloudGroupTimeoutsToTerraform(struct?: DataIonoscloudGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function dataIonoscloudGroupTimeoutsToHclTerraform(struct?: DataIonoscloudGroupTimeouts | cdktf.IResolvable): any {
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
    default: {
      value: cdktf.stringToHclTerraform(struct!.default),
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

export class DataIonoscloudGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataIonoscloudGroupTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
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

  public set internalValue(value: DataIonoscloudGroupTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
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
      this._default = value.default;
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

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group ionoscloud_group}
*/
export class DataIonoscloudGroup extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIonoscloudGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIonoscloudGroup to import
  * @param importFromId The id of the existing DataIonoscloudGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIonoscloudGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.21/docs/data-sources/group ionoscloud_group} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIonoscloudGroupConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIonoscloudGroupConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_group',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.21',
        providerVersionConstraint: '6.7.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._getUsersData = config.fetchUsersData;
    this._id = config.id;
    this._name = config.name;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_activity_log - computed: true, optional: false, required: false
  public get accessActivityLog() {
    return this.getBooleanAttribute('access_activity_log');
  }

  // access_and_manage_ai_model_hub - computed: true, optional: false, required: false
  public get accessAndManageAiModelHub() {
    return this.getBooleanAttribute('access_and_manage_ai_model_hub');
  }

  // access_and_manage_api_gateway - computed: true, optional: false, required: false
  public get accessAndManageApiGateway() {
    return this.getBooleanAttribute('access_and_manage_api_gateway');
  }

  // access_and_manage_cdn - computed: true, optional: false, required: false
  public get accessAndManageCdn() {
    return this.getBooleanAttribute('access_and_manage_cdn');
  }

  // access_and_manage_certificates - computed: true, optional: false, required: false
  public get accessAndManageCertificates() {
    return this.getBooleanAttribute('access_and_manage_certificates');
  }

  // access_and_manage_dns - computed: true, optional: false, required: false
  public get accessAndManageDns() {
    return this.getBooleanAttribute('access_and_manage_dns');
  }

  // access_and_manage_iam_resources - computed: true, optional: false, required: false
  public get accessAndManageIamResources() {
    return this.getBooleanAttribute('access_and_manage_iam_resources');
  }

  // access_and_manage_kaas - computed: true, optional: false, required: false
  public get accessAndManageKaas() {
    return this.getBooleanAttribute('access_and_manage_kaas');
  }

  // access_and_manage_logging - computed: true, optional: false, required: false
  public get accessAndManageLogging() {
    return this.getBooleanAttribute('access_and_manage_logging');
  }

  // access_and_manage_monitoring - computed: true, optional: false, required: false
  public get accessAndManageMonitoring() {
    return this.getBooleanAttribute('access_and_manage_monitoring');
  }

  // access_and_manage_network_file_storage - computed: true, optional: false, required: false
  public get accessAndManageNetworkFileStorage() {
    return this.getBooleanAttribute('access_and_manage_network_file_storage');
  }

  // access_and_manage_vpn - computed: true, optional: false, required: false
  public get accessAndManageVpn() {
    return this.getBooleanAttribute('access_and_manage_vpn');
  }

  // create_backup_unit - computed: true, optional: false, required: false
  public get createBackupUnit() {
    return this.getBooleanAttribute('create_backup_unit');
  }

  // create_datacenter - computed: true, optional: false, required: false
  public get createDatacenter() {
    return this.getBooleanAttribute('create_datacenter');
  }

  // create_flow_log - computed: true, optional: false, required: false
  public get createFlowLog() {
    return this.getBooleanAttribute('create_flow_log');
  }

  // create_internet_access - computed: true, optional: false, required: false
  public get createInternetAccess() {
    return this.getBooleanAttribute('create_internet_access');
  }

  // create_k8s_cluster - computed: true, optional: false, required: false
  public get createK8SCluster() {
    return this.getBooleanAttribute('create_k8s_cluster');
  }

  // create_network_security_groups - computed: true, optional: false, required: false
  public get createNetworkSecurityGroups() {
    return this.getBooleanAttribute('create_network_security_groups');
  }

  // create_pcc - computed: true, optional: false, required: false
  public get createPcc() {
    return this.getBooleanAttribute('create_pcc');
  }

  // create_snapshot - computed: true, optional: false, required: false
  public get createSnapshot() {
    return this.getBooleanAttribute('create_snapshot');
  }

  // get_users_data - computed: false, optional: true, required: false
  private _getUsersData?: boolean | cdktf.IResolvable; 
  public get fetchUsersData() {
    return this.getBooleanAttribute('get_users_data');
  }
  public set fetchUsersData(value: boolean | cdktf.IResolvable) {
    this._getUsersData = value;
  }
  public resetFetchUsersData() {
    this._getUsersData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchUsersDataInput() {
    return this._getUsersData;
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

  // manage_dataplatform - computed: true, optional: false, required: false
  public get manageDataplatform() {
    return this.getBooleanAttribute('manage_dataplatform');
  }

  // manage_dbaas - computed: true, optional: false, required: false
  public get manageDbaas() {
    return this.getBooleanAttribute('manage_dbaas');
  }

  // manage_registry - computed: true, optional: false, required: false
  public get manageRegistry() {
    return this.getBooleanAttribute('manage_registry');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // reserve_ip - computed: true, optional: false, required: false
  public get reserveIp() {
    return this.getBooleanAttribute('reserve_ip');
  }

  // s3_privilege - computed: true, optional: false, required: false
  public get s3Privilege() {
    return this.getBooleanAttribute('s3_privilege');
  }

  // users - computed: true, optional: false, required: false
  private _users = new DataIonoscloudGroupUsersList(this, "users", true);
  public get users() {
    return this._users;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataIonoscloudGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataIonoscloudGroupTimeouts) {
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
      get_users_data: cdktf.booleanToTerraform(this._getUsersData),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      timeouts: dataIonoscloudGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      get_users_data: {
        value: cdktf.booleanToHclTerraform(this._getUsersData),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      timeouts: {
        value: dataIonoscloudGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataIonoscloudGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
