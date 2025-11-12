// https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_activity_log Group#access_activity_log}
  */
  readonly accessActivityLog?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage AiModelHub.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_ai_model_hub Group#access_and_manage_ai_model_hub}
  */
  readonly accessAndManageAiModelHub?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage ApiGateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_api_gateway Group#access_and_manage_api_gateway}
  */
  readonly accessAndManageApiGateway?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage Cdn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_cdn Group#access_and_manage_cdn}
  */
  readonly accessAndManageCdn?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage certificates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_certificates Group#access_and_manage_certificates}
  */
  readonly accessAndManageCertificates?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage dns records.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_dns Group#access_and_manage_dns}
  */
  readonly accessAndManageDns?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage IamResources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_iam_resources Group#access_and_manage_iam_resources}
  */
  readonly accessAndManageIamResources?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage Kaas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_kaas Group#access_and_manage_kaas}
  */
  readonly accessAndManageKaas?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_logging Group#access_and_manage_logging}
  */
  readonly accessAndManageLogging?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage monitoring related functionality (access metrics, CRUD on alarms, alarm-actions etc) using Monotoring-as-a-Service (MaaS).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_monitoring Group#access_and_manage_monitoring}
  */
  readonly accessAndManageMonitoring?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage NetworkFileStorage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_network_file_storage Group#access_and_manage_network_file_storage}
  */
  readonly accessAndManageNetworkFileStorage?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to access and manage Vpn.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#access_and_manage_vpn Group#access_and_manage_vpn}
  */
  readonly accessAndManageVpn?: boolean | cdktf.IResolvable;
  /**
  * Create backup unit privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_backup_unit Group#create_backup_unit}
  */
  readonly createBackupUnit?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_datacenter Group#create_datacenter}
  */
  readonly createDatacenter?: boolean | cdktf.IResolvable;
  /**
  * Create Flow Logs privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_flow_log Group#create_flow_log}
  */
  readonly createFlowLog?: boolean | cdktf.IResolvable;
  /**
  * Create internet access privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_internet_access Group#create_internet_access}
  */
  readonly createInternetAccess?: boolean | cdktf.IResolvable;
  /**
  * Create Kubernetes cluster privilege.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_k8s_cluster Group#create_k8s_cluster}
  */
  readonly createK8SCluster?: boolean | cdktf.IResolvable;
  /**
  * Create Network Security groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_network_security_groups Group#create_network_security_groups}
  */
  readonly createNetworkSecurityGroups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_pcc Group#create_pcc}
  */
  readonly createPcc?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create_snapshot Group#create_snapshot}
  */
  readonly createSnapshot?: boolean | cdktf.IResolvable;
  /**
  * When set to true, information about users will be stored in state
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#get_users_data Group#get_users_data}
  */
  readonly fetchUsersData?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#id Group#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Privilege for a group to access and manage the Data Platform.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#manage_dataplatform Group#manage_dataplatform}
  */
  readonly manageDataplatform?: boolean | cdktf.IResolvable;
  /**
  * Privilege for a group to manage DBaaS related functionality
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#manage_dbaas Group#manage_dbaas}
  */
  readonly manageDbaas?: boolean | cdktf.IResolvable;
  /**
  * Privilege for group accessing container registry related functionality.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#manage_registry Group#manage_registry}
  */
  readonly manageRegistry?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#name Group#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#reserve_ip Group#reserve_ip}
  */
  readonly reserveIp?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#s3_privilege Group#s3_privilege}
  */
  readonly s3Privilege?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#user_id Group#user_id}
  */
  readonly userId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#user_ids Group#user_ids}
  */
  readonly userIds?: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#timeouts Group#timeouts}
  */
  readonly timeouts?: GroupTimeouts;
}
export interface GroupUsers {
}

export function groupUsersToTerraform(struct?: GroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function groupUsersToHclTerraform(struct?: GroupUsers): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class GroupUsersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): GroupUsers | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GroupUsers | undefined) {
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

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getStringAttribute('password');
  }
}

export class GroupUsersList extends cdktf.ComplexList {

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
  public get(index: number): GroupUsersOutputReference {
    return new GroupUsersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface GroupTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#create Group#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#default Group#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#delete Group#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#update Group#update}
  */
  readonly update?: string;
}

export function groupTimeoutsToTerraform(struct?: GroupTimeouts | cdktf.IResolvable): any {
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


export function groupTimeoutsToHclTerraform(struct?: GroupTimeouts | cdktf.IResolvable): any {
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

export class GroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: GroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group ionoscloud_group}
*/
export class Group extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ionoscloud_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Group resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Group to import
  * @param importFromId The id of the existing Group that should be imported. Refer to the {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Group to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ionoscloud_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ionos-cloud/ionoscloud/6.7.20/docs/resources/group ionoscloud_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupConfig
  */
  public constructor(scope: Construct, id: string, config: GroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ionoscloud_group',
      terraformGeneratorMetadata: {
        providerName: 'ionoscloud',
        providerVersion: '6.7.20',
        providerVersionConstraint: '6.7.20'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessActivityLog = config.accessActivityLog;
    this._accessAndManageAiModelHub = config.accessAndManageAiModelHub;
    this._accessAndManageApiGateway = config.accessAndManageApiGateway;
    this._accessAndManageCdn = config.accessAndManageCdn;
    this._accessAndManageCertificates = config.accessAndManageCertificates;
    this._accessAndManageDns = config.accessAndManageDns;
    this._accessAndManageIamResources = config.accessAndManageIamResources;
    this._accessAndManageKaas = config.accessAndManageKaas;
    this._accessAndManageLogging = config.accessAndManageLogging;
    this._accessAndManageMonitoring = config.accessAndManageMonitoring;
    this._accessAndManageNetworkFileStorage = config.accessAndManageNetworkFileStorage;
    this._accessAndManageVpn = config.accessAndManageVpn;
    this._createBackupUnit = config.createBackupUnit;
    this._createDatacenter = config.createDatacenter;
    this._createFlowLog = config.createFlowLog;
    this._createInternetAccess = config.createInternetAccess;
    this._createK8SCluster = config.createK8SCluster;
    this._createNetworkSecurityGroups = config.createNetworkSecurityGroups;
    this._createPcc = config.createPcc;
    this._createSnapshot = config.createSnapshot;
    this._getUsersData = config.fetchUsersData;
    this._id = config.id;
    this._manageDataplatform = config.manageDataplatform;
    this._manageDbaas = config.manageDbaas;
    this._manageRegistry = config.manageRegistry;
    this._name = config.name;
    this._reserveIp = config.reserveIp;
    this._s3Privilege = config.s3Privilege;
    this._userId = config.userId;
    this._userIds = config.userIds;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_activity_log - computed: false, optional: true, required: false
  private _accessActivityLog?: boolean | cdktf.IResolvable; 
  public get accessActivityLog() {
    return this.getBooleanAttribute('access_activity_log');
  }
  public set accessActivityLog(value: boolean | cdktf.IResolvable) {
    this._accessActivityLog = value;
  }
  public resetAccessActivityLog() {
    this._accessActivityLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessActivityLogInput() {
    return this._accessActivityLog;
  }

  // access_and_manage_ai_model_hub - computed: false, optional: true, required: false
  private _accessAndManageAiModelHub?: boolean | cdktf.IResolvable; 
  public get accessAndManageAiModelHub() {
    return this.getBooleanAttribute('access_and_manage_ai_model_hub');
  }
  public set accessAndManageAiModelHub(value: boolean | cdktf.IResolvable) {
    this._accessAndManageAiModelHub = value;
  }
  public resetAccessAndManageAiModelHub() {
    this._accessAndManageAiModelHub = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageAiModelHubInput() {
    return this._accessAndManageAiModelHub;
  }

  // access_and_manage_api_gateway - computed: false, optional: true, required: false
  private _accessAndManageApiGateway?: boolean | cdktf.IResolvable; 
  public get accessAndManageApiGateway() {
    return this.getBooleanAttribute('access_and_manage_api_gateway');
  }
  public set accessAndManageApiGateway(value: boolean | cdktf.IResolvable) {
    this._accessAndManageApiGateway = value;
  }
  public resetAccessAndManageApiGateway() {
    this._accessAndManageApiGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageApiGatewayInput() {
    return this._accessAndManageApiGateway;
  }

  // access_and_manage_cdn - computed: false, optional: true, required: false
  private _accessAndManageCdn?: boolean | cdktf.IResolvable; 
  public get accessAndManageCdn() {
    return this.getBooleanAttribute('access_and_manage_cdn');
  }
  public set accessAndManageCdn(value: boolean | cdktf.IResolvable) {
    this._accessAndManageCdn = value;
  }
  public resetAccessAndManageCdn() {
    this._accessAndManageCdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageCdnInput() {
    return this._accessAndManageCdn;
  }

  // access_and_manage_certificates - computed: false, optional: true, required: false
  private _accessAndManageCertificates?: boolean | cdktf.IResolvable; 
  public get accessAndManageCertificates() {
    return this.getBooleanAttribute('access_and_manage_certificates');
  }
  public set accessAndManageCertificates(value: boolean | cdktf.IResolvable) {
    this._accessAndManageCertificates = value;
  }
  public resetAccessAndManageCertificates() {
    this._accessAndManageCertificates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageCertificatesInput() {
    return this._accessAndManageCertificates;
  }

  // access_and_manage_dns - computed: false, optional: true, required: false
  private _accessAndManageDns?: boolean | cdktf.IResolvable; 
  public get accessAndManageDns() {
    return this.getBooleanAttribute('access_and_manage_dns');
  }
  public set accessAndManageDns(value: boolean | cdktf.IResolvable) {
    this._accessAndManageDns = value;
  }
  public resetAccessAndManageDns() {
    this._accessAndManageDns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageDnsInput() {
    return this._accessAndManageDns;
  }

  // access_and_manage_iam_resources - computed: false, optional: true, required: false
  private _accessAndManageIamResources?: boolean | cdktf.IResolvable; 
  public get accessAndManageIamResources() {
    return this.getBooleanAttribute('access_and_manage_iam_resources');
  }
  public set accessAndManageIamResources(value: boolean | cdktf.IResolvable) {
    this._accessAndManageIamResources = value;
  }
  public resetAccessAndManageIamResources() {
    this._accessAndManageIamResources = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageIamResourcesInput() {
    return this._accessAndManageIamResources;
  }

  // access_and_manage_kaas - computed: false, optional: true, required: false
  private _accessAndManageKaas?: boolean | cdktf.IResolvable; 
  public get accessAndManageKaas() {
    return this.getBooleanAttribute('access_and_manage_kaas');
  }
  public set accessAndManageKaas(value: boolean | cdktf.IResolvable) {
    this._accessAndManageKaas = value;
  }
  public resetAccessAndManageKaas() {
    this._accessAndManageKaas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageKaasInput() {
    return this._accessAndManageKaas;
  }

  // access_and_manage_logging - computed: false, optional: true, required: false
  private _accessAndManageLogging?: boolean | cdktf.IResolvable; 
  public get accessAndManageLogging() {
    return this.getBooleanAttribute('access_and_manage_logging');
  }
  public set accessAndManageLogging(value: boolean | cdktf.IResolvable) {
    this._accessAndManageLogging = value;
  }
  public resetAccessAndManageLogging() {
    this._accessAndManageLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageLoggingInput() {
    return this._accessAndManageLogging;
  }

  // access_and_manage_monitoring - computed: false, optional: true, required: false
  private _accessAndManageMonitoring?: boolean | cdktf.IResolvable; 
  public get accessAndManageMonitoring() {
    return this.getBooleanAttribute('access_and_manage_monitoring');
  }
  public set accessAndManageMonitoring(value: boolean | cdktf.IResolvable) {
    this._accessAndManageMonitoring = value;
  }
  public resetAccessAndManageMonitoring() {
    this._accessAndManageMonitoring = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageMonitoringInput() {
    return this._accessAndManageMonitoring;
  }

  // access_and_manage_network_file_storage - computed: false, optional: true, required: false
  private _accessAndManageNetworkFileStorage?: boolean | cdktf.IResolvable; 
  public get accessAndManageNetworkFileStorage() {
    return this.getBooleanAttribute('access_and_manage_network_file_storage');
  }
  public set accessAndManageNetworkFileStorage(value: boolean | cdktf.IResolvable) {
    this._accessAndManageNetworkFileStorage = value;
  }
  public resetAccessAndManageNetworkFileStorage() {
    this._accessAndManageNetworkFileStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageNetworkFileStorageInput() {
    return this._accessAndManageNetworkFileStorage;
  }

  // access_and_manage_vpn - computed: false, optional: true, required: false
  private _accessAndManageVpn?: boolean | cdktf.IResolvable; 
  public get accessAndManageVpn() {
    return this.getBooleanAttribute('access_and_manage_vpn');
  }
  public set accessAndManageVpn(value: boolean | cdktf.IResolvable) {
    this._accessAndManageVpn = value;
  }
  public resetAccessAndManageVpn() {
    this._accessAndManageVpn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessAndManageVpnInput() {
    return this._accessAndManageVpn;
  }

  // create_backup_unit - computed: false, optional: true, required: false
  private _createBackupUnit?: boolean | cdktf.IResolvable; 
  public get createBackupUnit() {
    return this.getBooleanAttribute('create_backup_unit');
  }
  public set createBackupUnit(value: boolean | cdktf.IResolvable) {
    this._createBackupUnit = value;
  }
  public resetCreateBackupUnit() {
    this._createBackupUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createBackupUnitInput() {
    return this._createBackupUnit;
  }

  // create_datacenter - computed: false, optional: true, required: false
  private _createDatacenter?: boolean | cdktf.IResolvable; 
  public get createDatacenter() {
    return this.getBooleanAttribute('create_datacenter');
  }
  public set createDatacenter(value: boolean | cdktf.IResolvable) {
    this._createDatacenter = value;
  }
  public resetCreateDatacenter() {
    this._createDatacenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createDatacenterInput() {
    return this._createDatacenter;
  }

  // create_flow_log - computed: false, optional: true, required: false
  private _createFlowLog?: boolean | cdktf.IResolvable; 
  public get createFlowLog() {
    return this.getBooleanAttribute('create_flow_log');
  }
  public set createFlowLog(value: boolean | cdktf.IResolvable) {
    this._createFlowLog = value;
  }
  public resetCreateFlowLog() {
    this._createFlowLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createFlowLogInput() {
    return this._createFlowLog;
  }

  // create_internet_access - computed: false, optional: true, required: false
  private _createInternetAccess?: boolean | cdktf.IResolvable; 
  public get createInternetAccess() {
    return this.getBooleanAttribute('create_internet_access');
  }
  public set createInternetAccess(value: boolean | cdktf.IResolvable) {
    this._createInternetAccess = value;
  }
  public resetCreateInternetAccess() {
    this._createInternetAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInternetAccessInput() {
    return this._createInternetAccess;
  }

  // create_k8s_cluster - computed: false, optional: true, required: false
  private _createK8SCluster?: boolean | cdktf.IResolvable; 
  public get createK8SCluster() {
    return this.getBooleanAttribute('create_k8s_cluster');
  }
  public set createK8SCluster(value: boolean | cdktf.IResolvable) {
    this._createK8SCluster = value;
  }
  public resetCreateK8SCluster() {
    this._createK8SCluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createK8SClusterInput() {
    return this._createK8SCluster;
  }

  // create_network_security_groups - computed: false, optional: true, required: false
  private _createNetworkSecurityGroups?: boolean | cdktf.IResolvable; 
  public get createNetworkSecurityGroups() {
    return this.getBooleanAttribute('create_network_security_groups');
  }
  public set createNetworkSecurityGroups(value: boolean | cdktf.IResolvable) {
    this._createNetworkSecurityGroups = value;
  }
  public resetCreateNetworkSecurityGroups() {
    this._createNetworkSecurityGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createNetworkSecurityGroupsInput() {
    return this._createNetworkSecurityGroups;
  }

  // create_pcc - computed: false, optional: true, required: false
  private _createPcc?: boolean | cdktf.IResolvable; 
  public get createPcc() {
    return this.getBooleanAttribute('create_pcc');
  }
  public set createPcc(value: boolean | cdktf.IResolvable) {
    this._createPcc = value;
  }
  public resetCreatePcc() {
    this._createPcc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createPccInput() {
    return this._createPcc;
  }

  // create_snapshot - computed: false, optional: true, required: false
  private _createSnapshot?: boolean | cdktf.IResolvable; 
  public get createSnapshot() {
    return this.getBooleanAttribute('create_snapshot');
  }
  public set createSnapshot(value: boolean | cdktf.IResolvable) {
    this._createSnapshot = value;
  }
  public resetCreateSnapshot() {
    this._createSnapshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createSnapshotInput() {
    return this._createSnapshot;
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

  // manage_dataplatform - computed: false, optional: true, required: false
  private _manageDataplatform?: boolean | cdktf.IResolvable; 
  public get manageDataplatform() {
    return this.getBooleanAttribute('manage_dataplatform');
  }
  public set manageDataplatform(value: boolean | cdktf.IResolvable) {
    this._manageDataplatform = value;
  }
  public resetManageDataplatform() {
    this._manageDataplatform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageDataplatformInput() {
    return this._manageDataplatform;
  }

  // manage_dbaas - computed: false, optional: true, required: false
  private _manageDbaas?: boolean | cdktf.IResolvable; 
  public get manageDbaas() {
    return this.getBooleanAttribute('manage_dbaas');
  }
  public set manageDbaas(value: boolean | cdktf.IResolvable) {
    this._manageDbaas = value;
  }
  public resetManageDbaas() {
    this._manageDbaas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageDbaasInput() {
    return this._manageDbaas;
  }

  // manage_registry - computed: false, optional: true, required: false
  private _manageRegistry?: boolean | cdktf.IResolvable; 
  public get manageRegistry() {
    return this.getBooleanAttribute('manage_registry');
  }
  public set manageRegistry(value: boolean | cdktf.IResolvable) {
    this._manageRegistry = value;
  }
  public resetManageRegistry() {
    this._manageRegistry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageRegistryInput() {
    return this._manageRegistry;
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

  // reserve_ip - computed: false, optional: true, required: false
  private _reserveIp?: boolean | cdktf.IResolvable; 
  public get reserveIp() {
    return this.getBooleanAttribute('reserve_ip');
  }
  public set reserveIp(value: boolean | cdktf.IResolvable) {
    this._reserveIp = value;
  }
  public resetReserveIp() {
    this._reserveIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reserveIpInput() {
    return this._reserveIp;
  }

  // s3_privilege - computed: false, optional: true, required: false
  private _s3Privilege?: boolean | cdktf.IResolvable; 
  public get s3Privilege() {
    return this.getBooleanAttribute('s3_privilege');
  }
  public set s3Privilege(value: boolean | cdktf.IResolvable) {
    this._s3Privilege = value;
  }
  public resetS3Privilege() {
    this._s3Privilege = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3PrivilegeInput() {
    return this._s3Privilege;
  }

  // user_id - computed: false, optional: true, required: false
  private _userId?: string; 
  public get userId() {
    return this.getStringAttribute('user_id');
  }
  public set userId(value: string) {
    this._userId = value;
  }
  public resetUserId() {
    this._userId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdInput() {
    return this._userId;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: string[]; 
  public get userIds() {
    return cdktf.Fn.tolist(this.getListAttribute('user_ids'));
  }
  public set userIds(value: string[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // users - computed: true, optional: false, required: false
  private _users = new GroupUsersList(this, "users", true);
  public get users() {
    return this._users;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new GroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: GroupTimeouts) {
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
      access_activity_log: cdktf.booleanToTerraform(this._accessActivityLog),
      access_and_manage_ai_model_hub: cdktf.booleanToTerraform(this._accessAndManageAiModelHub),
      access_and_manage_api_gateway: cdktf.booleanToTerraform(this._accessAndManageApiGateway),
      access_and_manage_cdn: cdktf.booleanToTerraform(this._accessAndManageCdn),
      access_and_manage_certificates: cdktf.booleanToTerraform(this._accessAndManageCertificates),
      access_and_manage_dns: cdktf.booleanToTerraform(this._accessAndManageDns),
      access_and_manage_iam_resources: cdktf.booleanToTerraform(this._accessAndManageIamResources),
      access_and_manage_kaas: cdktf.booleanToTerraform(this._accessAndManageKaas),
      access_and_manage_logging: cdktf.booleanToTerraform(this._accessAndManageLogging),
      access_and_manage_monitoring: cdktf.booleanToTerraform(this._accessAndManageMonitoring),
      access_and_manage_network_file_storage: cdktf.booleanToTerraform(this._accessAndManageNetworkFileStorage),
      access_and_manage_vpn: cdktf.booleanToTerraform(this._accessAndManageVpn),
      create_backup_unit: cdktf.booleanToTerraform(this._createBackupUnit),
      create_datacenter: cdktf.booleanToTerraform(this._createDatacenter),
      create_flow_log: cdktf.booleanToTerraform(this._createFlowLog),
      create_internet_access: cdktf.booleanToTerraform(this._createInternetAccess),
      create_k8s_cluster: cdktf.booleanToTerraform(this._createK8SCluster),
      create_network_security_groups: cdktf.booleanToTerraform(this._createNetworkSecurityGroups),
      create_pcc: cdktf.booleanToTerraform(this._createPcc),
      create_snapshot: cdktf.booleanToTerraform(this._createSnapshot),
      get_users_data: cdktf.booleanToTerraform(this._getUsersData),
      id: cdktf.stringToTerraform(this._id),
      manage_dataplatform: cdktf.booleanToTerraform(this._manageDataplatform),
      manage_dbaas: cdktf.booleanToTerraform(this._manageDbaas),
      manage_registry: cdktf.booleanToTerraform(this._manageRegistry),
      name: cdktf.stringToTerraform(this._name),
      reserve_ip: cdktf.booleanToTerraform(this._reserveIp),
      s3_privilege: cdktf.booleanToTerraform(this._s3Privilege),
      user_id: cdktf.stringToTerraform(this._userId),
      user_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._userIds),
      timeouts: groupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_activity_log: {
        value: cdktf.booleanToHclTerraform(this._accessActivityLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_ai_model_hub: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageAiModelHub),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_api_gateway: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageApiGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_cdn: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageCdn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_certificates: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageCertificates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_dns: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageDns),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_iam_resources: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageIamResources),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_kaas: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageKaas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_logging: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_monitoring: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageMonitoring),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_network_file_storage: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageNetworkFileStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      access_and_manage_vpn: {
        value: cdktf.booleanToHclTerraform(this._accessAndManageVpn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_backup_unit: {
        value: cdktf.booleanToHclTerraform(this._createBackupUnit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_datacenter: {
        value: cdktf.booleanToHclTerraform(this._createDatacenter),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_flow_log: {
        value: cdktf.booleanToHclTerraform(this._createFlowLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_internet_access: {
        value: cdktf.booleanToHclTerraform(this._createInternetAccess),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_k8s_cluster: {
        value: cdktf.booleanToHclTerraform(this._createK8SCluster),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_network_security_groups: {
        value: cdktf.booleanToHclTerraform(this._createNetworkSecurityGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_pcc: {
        value: cdktf.booleanToHclTerraform(this._createPcc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      create_snapshot: {
        value: cdktf.booleanToHclTerraform(this._createSnapshot),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      manage_dataplatform: {
        value: cdktf.booleanToHclTerraform(this._manageDataplatform),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_dbaas: {
        value: cdktf.booleanToHclTerraform(this._manageDbaas),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      manage_registry: {
        value: cdktf.booleanToHclTerraform(this._manageRegistry),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserve_ip: {
        value: cdktf.booleanToHclTerraform(this._reserveIp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      s3_privilege: {
        value: cdktf.booleanToHclTerraform(this._s3Privilege),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_id: {
        value: cdktf.stringToHclTerraform(this._userId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: groupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
