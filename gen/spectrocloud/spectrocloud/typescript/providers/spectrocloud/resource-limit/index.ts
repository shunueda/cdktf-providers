// https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceLimitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The maximum number of alerts that can be created. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#alert ResourceLimit#alert}
  */
  readonly alert?: number;
  /**
  * The maximum number of API keys that can be generated. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#api_keys ResourceLimit#api_keys}
  */
  readonly apiKeys?: number;
  /**
  * The maximum number of appliances that can be managed. Must be between 1 and 50,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#appliance ResourceLimit#appliance}
  */
  readonly appliance?: number;
  /**
  * The maximum number of appliance tokens that can be issued. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#appliance_token ResourceLimit#appliance_token}
  */
  readonly applianceToken?: number;
  /**
  * The maximum number of application deployments allowed. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#application_deployment ResourceLimit#application_deployment}
  */
  readonly applicationDeployment?: number;
  /**
  * The maximum number of application profiles that can be configured. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#application_profile ResourceLimit#application_profile}
  */
  readonly applicationProfile?: number;
  /**
  * The maximum number of certificates that can be managed. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#certificate ResourceLimit#certificate}
  */
  readonly certificate?: number;
  /**
  * The maximum number of cloud accounts that can be added. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#cloud_account ResourceLimit#cloud_account}
  */
  readonly cloudAccount?: number;
  /**
  * The maximum number of clusters that can be created. Must be between 1 and 50,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#cluster ResourceLimit#cluster}
  */
  readonly cluster?: number;
  /**
  * The maximum number of cluster groups that can be created. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#cluster_group ResourceLimit#cluster_group}
  */
  readonly clusterGroup?: number;
  /**
  * The maximum number of cluster profiles that can be configured. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#cluster_profile ResourceLimit#cluster_profile}
  */
  readonly clusterProfile?: number;
  /**
  * The maximum number of filters that can be defined. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#filter ResourceLimit#filter}
  */
  readonly filter?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#id ResourceLimit#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The maximum number of locations that can be configured. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#location ResourceLimit#location}
  */
  readonly location?: number;
  /**
  * The maximum number of macros that can be created. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#macro ResourceLimit#macro}
  */
  readonly macro?: number;
  /**
  * The maximum number of private gateways that can be managed. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#private_gateway ResourceLimit#private_gateway}
  */
  readonly privateGateway?: number;
  /**
  * The maximum number of projects that can be created. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#project ResourceLimit#project}
  */
  readonly project?: number;
  /**
  * The maximum number of registries that can be configured. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#registry ResourceLimit#registry}
  */
  readonly registry?: number;
  /**
  * The maximum number of roles that can be assigned. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#role ResourceLimit#role}
  */
  readonly role?: number;
  /**
  * The maximum number of SSH keys that can be managed. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#ssh_key ResourceLimit#ssh_key}
  */
  readonly sshKey?: number;
  /**
  * The maximum number of teams that can be created. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#team ResourceLimit#team}
  */
  readonly team?: number;
  /**
  * The maximum number of users that can be added. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#user ResourceLimit#user}
  */
  readonly user?: number;
  /**
  * The maximum number of workspaces that can be created. Must be between 1 and 10,000.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#workspace ResourceLimit#workspace}
  */
  readonly workspace?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#timeouts ResourceLimit#timeouts}
  */
  readonly timeouts?: ResourceLimitTimeouts;
}
export interface ResourceLimitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#create ResourceLimit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#delete ResourceLimit#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#update ResourceLimit#update}
  */
  readonly update?: string;
}

export function resourceLimitTimeoutsToTerraform(struct?: ResourceLimitTimeouts | cdktf.IResolvable): any {
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


export function resourceLimitTimeoutsToHclTerraform(struct?: ResourceLimitTimeouts | cdktf.IResolvable): any {
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

export class ResourceLimitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceLimitTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceLimitTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit spectrocloud_resource_limit}
*/
export class ResourceLimit extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "spectrocloud_resource_limit";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceLimit resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceLimit to import
  * @param importFromId The id of the existing ResourceLimit that should be imported. Refer to the {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceLimit to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "spectrocloud_resource_limit", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/spectrocloud/spectrocloud/0.26.1/docs/resources/resource_limit spectrocloud_resource_limit} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceLimitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ResourceLimitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'spectrocloud_resource_limit',
      terraformGeneratorMetadata: {
        providerName: 'spectrocloud',
        providerVersion: '0.26.1',
        providerVersionConstraint: '0.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._alert = config.alert;
    this._apiKeys = config.apiKeys;
    this._appliance = config.appliance;
    this._applianceToken = config.applianceToken;
    this._applicationDeployment = config.applicationDeployment;
    this._applicationProfile = config.applicationProfile;
    this._certificate = config.certificate;
    this._cloudAccount = config.cloudAccount;
    this._cluster = config.cluster;
    this._clusterGroup = config.clusterGroup;
    this._clusterProfile = config.clusterProfile;
    this._filter = config.filter;
    this._id = config.id;
    this._location = config.location;
    this._macro = config.macro;
    this._privateGateway = config.privateGateway;
    this._project = config.project;
    this._registry = config.registry;
    this._role = config.role;
    this._sshKey = config.sshKey;
    this._team = config.team;
    this._user = config.user;
    this._workspace = config.workspace;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alert - computed: false, optional: true, required: false
  private _alert?: number; 
  public get alert() {
    return this.getNumberAttribute('alert');
  }
  public set alert(value: number) {
    this._alert = value;
  }
  public resetAlert() {
    this._alert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertInput() {
    return this._alert;
  }

  // api_keys - computed: false, optional: true, required: false
  private _apiKeys?: number; 
  public get apiKeys() {
    return this.getNumberAttribute('api_keys');
  }
  public set apiKeys(value: number) {
    this._apiKeys = value;
  }
  public resetApiKeys() {
    this._apiKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeysInput() {
    return this._apiKeys;
  }

  // appliance - computed: false, optional: true, required: false
  private _appliance?: number; 
  public get appliance() {
    return this.getNumberAttribute('appliance');
  }
  public set appliance(value: number) {
    this._appliance = value;
  }
  public resetAppliance() {
    this._appliance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceInput() {
    return this._appliance;
  }

  // appliance_token - computed: false, optional: true, required: false
  private _applianceToken?: number; 
  public get applianceToken() {
    return this.getNumberAttribute('appliance_token');
  }
  public set applianceToken(value: number) {
    this._applianceToken = value;
  }
  public resetApplianceToken() {
    this._applianceToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applianceTokenInput() {
    return this._applianceToken;
  }

  // application_deployment - computed: false, optional: true, required: false
  private _applicationDeployment?: number; 
  public get applicationDeployment() {
    return this.getNumberAttribute('application_deployment');
  }
  public set applicationDeployment(value: number) {
    this._applicationDeployment = value;
  }
  public resetApplicationDeployment() {
    this._applicationDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationDeploymentInput() {
    return this._applicationDeployment;
  }

  // application_profile - computed: false, optional: true, required: false
  private _applicationProfile?: number; 
  public get applicationProfile() {
    return this.getNumberAttribute('application_profile');
  }
  public set applicationProfile(value: number) {
    this._applicationProfile = value;
  }
  public resetApplicationProfile() {
    this._applicationProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationProfileInput() {
    return this._applicationProfile;
  }

  // certificate - computed: false, optional: true, required: false
  private _certificate?: number; 
  public get certificate() {
    return this.getNumberAttribute('certificate');
  }
  public set certificate(value: number) {
    this._certificate = value;
  }
  public resetCertificate() {
    this._certificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateInput() {
    return this._certificate;
  }

  // cloud_account - computed: false, optional: true, required: false
  private _cloudAccount?: number; 
  public get cloudAccount() {
    return this.getNumberAttribute('cloud_account');
  }
  public set cloudAccount(value: number) {
    this._cloudAccount = value;
  }
  public resetCloudAccount() {
    this._cloudAccount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudAccountInput() {
    return this._cloudAccount;
  }

  // cluster - computed: false, optional: true, required: false
  private _cluster?: number; 
  public get cluster() {
    return this.getNumberAttribute('cluster');
  }
  public set cluster(value: number) {
    this._cluster = value;
  }
  public resetCluster() {
    this._cluster = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // cluster_group - computed: false, optional: true, required: false
  private _clusterGroup?: number; 
  public get clusterGroup() {
    return this.getNumberAttribute('cluster_group');
  }
  public set clusterGroup(value: number) {
    this._clusterGroup = value;
  }
  public resetClusterGroup() {
    this._clusterGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterGroupInput() {
    return this._clusterGroup;
  }

  // cluster_profile - computed: false, optional: true, required: false
  private _clusterProfile?: number; 
  public get clusterProfile() {
    return this.getNumberAttribute('cluster_profile');
  }
  public set clusterProfile(value: number) {
    this._clusterProfile = value;
  }
  public resetClusterProfile() {
    this._clusterProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterProfileInput() {
    return this._clusterProfile;
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: number; 
  public get filter() {
    return this.getNumberAttribute('filter');
  }
  public set filter(value: number) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // location - computed: false, optional: true, required: false
  private _location?: number; 
  public get location() {
    return this.getNumberAttribute('location');
  }
  public set location(value: number) {
    this._location = value;
  }
  public resetLocation() {
    this._location = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // macro - computed: false, optional: true, required: false
  private _macro?: number; 
  public get macro() {
    return this.getNumberAttribute('macro');
  }
  public set macro(value: number) {
    this._macro = value;
  }
  public resetMacro() {
    this._macro = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macroInput() {
    return this._macro;
  }

  // private_gateway - computed: false, optional: true, required: false
  private _privateGateway?: number; 
  public get privateGateway() {
    return this.getNumberAttribute('private_gateway');
  }
  public set privateGateway(value: number) {
    this._privateGateway = value;
  }
  public resetPrivateGateway() {
    this._privateGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateGatewayInput() {
    return this._privateGateway;
  }

  // project - computed: false, optional: true, required: false
  private _project?: number; 
  public get project() {
    return this.getNumberAttribute('project');
  }
  public set project(value: number) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // registry - computed: false, optional: true, required: false
  private _registry?: number; 
  public get registry() {
    return this.getNumberAttribute('registry');
  }
  public set registry(value: number) {
    this._registry = value;
  }
  public resetRegistry() {
    this._registry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // role - computed: false, optional: true, required: false
  private _role?: number; 
  public get role() {
    return this.getNumberAttribute('role');
  }
  public set role(value: number) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // ssh_key - computed: false, optional: true, required: false
  private _sshKey?: number; 
  public get sshKey() {
    return this.getNumberAttribute('ssh_key');
  }
  public set sshKey(value: number) {
    this._sshKey = value;
  }
  public resetSshKey() {
    this._sshKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshKeyInput() {
    return this._sshKey;
  }

  // team - computed: false, optional: true, required: false
  private _team?: number; 
  public get team() {
    return this.getNumberAttribute('team');
  }
  public set team(value: number) {
    this._team = value;
  }
  public resetTeam() {
    this._team = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamInput() {
    return this._team;
  }

  // user - computed: false, optional: true, required: false
  private _user?: number; 
  public get user() {
    return this.getNumberAttribute('user');
  }
  public set user(value: number) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // workspace - computed: false, optional: true, required: false
  private _workspace?: number; 
  public get workspace() {
    return this.getNumberAttribute('workspace');
  }
  public set workspace(value: number) {
    this._workspace = value;
  }
  public resetWorkspace() {
    this._workspace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceLimitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceLimitTimeouts) {
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
      alert: cdktf.numberToTerraform(this._alert),
      api_keys: cdktf.numberToTerraform(this._apiKeys),
      appliance: cdktf.numberToTerraform(this._appliance),
      appliance_token: cdktf.numberToTerraform(this._applianceToken),
      application_deployment: cdktf.numberToTerraform(this._applicationDeployment),
      application_profile: cdktf.numberToTerraform(this._applicationProfile),
      certificate: cdktf.numberToTerraform(this._certificate),
      cloud_account: cdktf.numberToTerraform(this._cloudAccount),
      cluster: cdktf.numberToTerraform(this._cluster),
      cluster_group: cdktf.numberToTerraform(this._clusterGroup),
      cluster_profile: cdktf.numberToTerraform(this._clusterProfile),
      filter: cdktf.numberToTerraform(this._filter),
      id: cdktf.stringToTerraform(this._id),
      location: cdktf.numberToTerraform(this._location),
      macro: cdktf.numberToTerraform(this._macro),
      private_gateway: cdktf.numberToTerraform(this._privateGateway),
      project: cdktf.numberToTerraform(this._project),
      registry: cdktf.numberToTerraform(this._registry),
      role: cdktf.numberToTerraform(this._role),
      ssh_key: cdktf.numberToTerraform(this._sshKey),
      team: cdktf.numberToTerraform(this._team),
      user: cdktf.numberToTerraform(this._user),
      workspace: cdktf.numberToTerraform(this._workspace),
      timeouts: resourceLimitTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      alert: {
        value: cdktf.numberToHclTerraform(this._alert),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      api_keys: {
        value: cdktf.numberToHclTerraform(this._apiKeys),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      appliance: {
        value: cdktf.numberToHclTerraform(this._appliance),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      appliance_token: {
        value: cdktf.numberToHclTerraform(this._applianceToken),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_deployment: {
        value: cdktf.numberToHclTerraform(this._applicationDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      application_profile: {
        value: cdktf.numberToHclTerraform(this._applicationProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      certificate: {
        value: cdktf.numberToHclTerraform(this._certificate),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cloud_account: {
        value: cdktf.numberToHclTerraform(this._cloudAccount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster: {
        value: cdktf.numberToHclTerraform(this._cluster),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_group: {
        value: cdktf.numberToHclTerraform(this._clusterGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      cluster_profile: {
        value: cdktf.numberToHclTerraform(this._clusterProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      filter: {
        value: cdktf.numberToHclTerraform(this._filter),
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
      location: {
        value: cdktf.numberToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      macro: {
        value: cdktf.numberToHclTerraform(this._macro),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      private_gateway: {
        value: cdktf.numberToHclTerraform(this._privateGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project: {
        value: cdktf.numberToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      registry: {
        value: cdktf.numberToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      role: {
        value: cdktf.numberToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssh_key: {
        value: cdktf.numberToHclTerraform(this._sshKey),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      team: {
        value: cdktf.numberToHclTerraform(this._team),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.numberToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      workspace: {
        value: cdktf.numberToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      timeouts: {
        value: resourceLimitTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceLimitTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
