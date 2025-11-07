// https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FeatureFlagsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#id FeatureFlags#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * feature_flags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#feature_flags FeatureFlags#feature_flags}
  */
  readonly featureFlags?: FeatureFlagsFeatureFlags;
}
export interface FeatureFlagsFeatureFlags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#app_bits_upload FeatureFlags#app_bits_upload}
  */
  readonly appBitsUpload?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#app_scaling FeatureFlags#app_scaling}
  */
  readonly appScaling?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#diego_docker FeatureFlags#diego_docker}
  */
  readonly diegoDocker?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#env_var_visibility FeatureFlags#env_var_visibility}
  */
  readonly envVarVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#hide_marketplace_from_unauthenticated_users FeatureFlags#hide_marketplace_from_unauthenticated_users}
  */
  readonly hideMarketplaceFromUnauthenticatedUsers?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#private_domain_creation FeatureFlags#private_domain_creation}
  */
  readonly privateDomainCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#resource_matching FeatureFlags#resource_matching}
  */
  readonly resourceMatching?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#route_creation FeatureFlags#route_creation}
  */
  readonly routeCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#service_instance_creation FeatureFlags#service_instance_creation}
  */
  readonly serviceInstanceCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#service_instance_sharing FeatureFlags#service_instance_sharing}
  */
  readonly serviceInstanceSharing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#set_roles_by_username FeatureFlags#set_roles_by_username}
  */
  readonly setRolesByUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#space_developer_env_var_visibility FeatureFlags#space_developer_env_var_visibility}
  */
  readonly spaceDeveloperEnvVarVisibility?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#space_scoped_private_broker_creation FeatureFlags#space_scoped_private_broker_creation}
  */
  readonly spaceScopedPrivateBrokerCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#task_creation FeatureFlags#task_creation}
  */
  readonly taskCreation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#unset_roles_by_username FeatureFlags#unset_roles_by_username}
  */
  readonly unsetRolesByUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#user_org_creation FeatureFlags#user_org_creation}
  */
  readonly userOrgCreation?: string;
}

export function featureFlagsFeatureFlagsToTerraform(struct?: FeatureFlagsFeatureFlagsOutputReference | FeatureFlagsFeatureFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_bits_upload: cdktf.stringToTerraform(struct!.appBitsUpload),
    app_scaling: cdktf.stringToTerraform(struct!.appScaling),
    diego_docker: cdktf.stringToTerraform(struct!.diegoDocker),
    env_var_visibility: cdktf.stringToTerraform(struct!.envVarVisibility),
    hide_marketplace_from_unauthenticated_users: cdktf.stringToTerraform(struct!.hideMarketplaceFromUnauthenticatedUsers),
    private_domain_creation: cdktf.stringToTerraform(struct!.privateDomainCreation),
    resource_matching: cdktf.stringToTerraform(struct!.resourceMatching),
    route_creation: cdktf.stringToTerraform(struct!.routeCreation),
    service_instance_creation: cdktf.stringToTerraform(struct!.serviceInstanceCreation),
    service_instance_sharing: cdktf.stringToTerraform(struct!.serviceInstanceSharing),
    set_roles_by_username: cdktf.stringToTerraform(struct!.setRolesByUsername),
    space_developer_env_var_visibility: cdktf.stringToTerraform(struct!.spaceDeveloperEnvVarVisibility),
    space_scoped_private_broker_creation: cdktf.stringToTerraform(struct!.spaceScopedPrivateBrokerCreation),
    task_creation: cdktf.stringToTerraform(struct!.taskCreation),
    unset_roles_by_username: cdktf.stringToTerraform(struct!.unsetRolesByUsername),
    user_org_creation: cdktf.stringToTerraform(struct!.userOrgCreation),
  }
}


export function featureFlagsFeatureFlagsToHclTerraform(struct?: FeatureFlagsFeatureFlagsOutputReference | FeatureFlagsFeatureFlags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_bits_upload: {
      value: cdktf.stringToHclTerraform(struct!.appBitsUpload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_scaling: {
      value: cdktf.stringToHclTerraform(struct!.appScaling),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    diego_docker: {
      value: cdktf.stringToHclTerraform(struct!.diegoDocker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    env_var_visibility: {
      value: cdktf.stringToHclTerraform(struct!.envVarVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hide_marketplace_from_unauthenticated_users: {
      value: cdktf.stringToHclTerraform(struct!.hideMarketplaceFromUnauthenticatedUsers),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_domain_creation: {
      value: cdktf.stringToHclTerraform(struct!.privateDomainCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_matching: {
      value: cdktf.stringToHclTerraform(struct!.resourceMatching),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_creation: {
      value: cdktf.stringToHclTerraform(struct!.routeCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_instance_creation: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service_instance_sharing: {
      value: cdktf.stringToHclTerraform(struct!.serviceInstanceSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_roles_by_username: {
      value: cdktf.stringToHclTerraform(struct!.setRolesByUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_developer_env_var_visibility: {
      value: cdktf.stringToHclTerraform(struct!.spaceDeveloperEnvVarVisibility),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    space_scoped_private_broker_creation: {
      value: cdktf.stringToHclTerraform(struct!.spaceScopedPrivateBrokerCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_creation: {
      value: cdktf.stringToHclTerraform(struct!.taskCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unset_roles_by_username: {
      value: cdktf.stringToHclTerraform(struct!.unsetRolesByUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_org_creation: {
      value: cdktf.stringToHclTerraform(struct!.userOrgCreation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class FeatureFlagsFeatureFlagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): FeatureFlagsFeatureFlags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appBitsUpload !== undefined) {
      hasAnyValues = true;
      internalValueResult.appBitsUpload = this._appBitsUpload;
    }
    if (this._appScaling !== undefined) {
      hasAnyValues = true;
      internalValueResult.appScaling = this._appScaling;
    }
    if (this._diegoDocker !== undefined) {
      hasAnyValues = true;
      internalValueResult.diegoDocker = this._diegoDocker;
    }
    if (this._envVarVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.envVarVisibility = this._envVarVisibility;
    }
    if (this._hideMarketplaceFromUnauthenticatedUsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.hideMarketplaceFromUnauthenticatedUsers = this._hideMarketplaceFromUnauthenticatedUsers;
    }
    if (this._privateDomainCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateDomainCreation = this._privateDomainCreation;
    }
    if (this._resourceMatching !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceMatching = this._resourceMatching;
    }
    if (this._routeCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeCreation = this._routeCreation;
    }
    if (this._serviceInstanceCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceCreation = this._serviceInstanceCreation;
    }
    if (this._serviceInstanceSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceInstanceSharing = this._serviceInstanceSharing;
    }
    if (this._setRolesByUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.setRolesByUsername = this._setRolesByUsername;
    }
    if (this._spaceDeveloperEnvVarVisibility !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceDeveloperEnvVarVisibility = this._spaceDeveloperEnvVarVisibility;
    }
    if (this._spaceScopedPrivateBrokerCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.spaceScopedPrivateBrokerCreation = this._spaceScopedPrivateBrokerCreation;
    }
    if (this._taskCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskCreation = this._taskCreation;
    }
    if (this._unsetRolesByUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.unsetRolesByUsername = this._unsetRolesByUsername;
    }
    if (this._userOrgCreation !== undefined) {
      hasAnyValues = true;
      internalValueResult.userOrgCreation = this._userOrgCreation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: FeatureFlagsFeatureFlags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appBitsUpload = undefined;
      this._appScaling = undefined;
      this._diegoDocker = undefined;
      this._envVarVisibility = undefined;
      this._hideMarketplaceFromUnauthenticatedUsers = undefined;
      this._privateDomainCreation = undefined;
      this._resourceMatching = undefined;
      this._routeCreation = undefined;
      this._serviceInstanceCreation = undefined;
      this._serviceInstanceSharing = undefined;
      this._setRolesByUsername = undefined;
      this._spaceDeveloperEnvVarVisibility = undefined;
      this._spaceScopedPrivateBrokerCreation = undefined;
      this._taskCreation = undefined;
      this._unsetRolesByUsername = undefined;
      this._userOrgCreation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appBitsUpload = value.appBitsUpload;
      this._appScaling = value.appScaling;
      this._diegoDocker = value.diegoDocker;
      this._envVarVisibility = value.envVarVisibility;
      this._hideMarketplaceFromUnauthenticatedUsers = value.hideMarketplaceFromUnauthenticatedUsers;
      this._privateDomainCreation = value.privateDomainCreation;
      this._resourceMatching = value.resourceMatching;
      this._routeCreation = value.routeCreation;
      this._serviceInstanceCreation = value.serviceInstanceCreation;
      this._serviceInstanceSharing = value.serviceInstanceSharing;
      this._setRolesByUsername = value.setRolesByUsername;
      this._spaceDeveloperEnvVarVisibility = value.spaceDeveloperEnvVarVisibility;
      this._spaceScopedPrivateBrokerCreation = value.spaceScopedPrivateBrokerCreation;
      this._taskCreation = value.taskCreation;
      this._unsetRolesByUsername = value.unsetRolesByUsername;
      this._userOrgCreation = value.userOrgCreation;
    }
  }

  // app_bits_upload - computed: true, optional: true, required: false
  private _appBitsUpload?: string; 
  public get appBitsUpload() {
    return this.getStringAttribute('app_bits_upload');
  }
  public set appBitsUpload(value: string) {
    this._appBitsUpload = value;
  }
  public resetAppBitsUpload() {
    this._appBitsUpload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appBitsUploadInput() {
    return this._appBitsUpload;
  }

  // app_scaling - computed: true, optional: true, required: false
  private _appScaling?: string; 
  public get appScaling() {
    return this.getStringAttribute('app_scaling');
  }
  public set appScaling(value: string) {
    this._appScaling = value;
  }
  public resetAppScaling() {
    this._appScaling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appScalingInput() {
    return this._appScaling;
  }

  // diego_docker - computed: true, optional: true, required: false
  private _diegoDocker?: string; 
  public get diegoDocker() {
    return this.getStringAttribute('diego_docker');
  }
  public set diegoDocker(value: string) {
    this._diegoDocker = value;
  }
  public resetDiegoDocker() {
    this._diegoDocker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diegoDockerInput() {
    return this._diegoDocker;
  }

  // env_var_visibility - computed: true, optional: true, required: false
  private _envVarVisibility?: string; 
  public get envVarVisibility() {
    return this.getStringAttribute('env_var_visibility');
  }
  public set envVarVisibility(value: string) {
    this._envVarVisibility = value;
  }
  public resetEnvVarVisibility() {
    this._envVarVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envVarVisibilityInput() {
    return this._envVarVisibility;
  }

  // hide_marketplace_from_unauthenticated_users - computed: true, optional: true, required: false
  private _hideMarketplaceFromUnauthenticatedUsers?: string; 
  public get hideMarketplaceFromUnauthenticatedUsers() {
    return this.getStringAttribute('hide_marketplace_from_unauthenticated_users');
  }
  public set hideMarketplaceFromUnauthenticatedUsers(value: string) {
    this._hideMarketplaceFromUnauthenticatedUsers = value;
  }
  public resetHideMarketplaceFromUnauthenticatedUsers() {
    this._hideMarketplaceFromUnauthenticatedUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideMarketplaceFromUnauthenticatedUsersInput() {
    return this._hideMarketplaceFromUnauthenticatedUsers;
  }

  // private_domain_creation - computed: true, optional: true, required: false
  private _privateDomainCreation?: string; 
  public get privateDomainCreation() {
    return this.getStringAttribute('private_domain_creation');
  }
  public set privateDomainCreation(value: string) {
    this._privateDomainCreation = value;
  }
  public resetPrivateDomainCreation() {
    this._privateDomainCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateDomainCreationInput() {
    return this._privateDomainCreation;
  }

  // resource_matching - computed: true, optional: true, required: false
  private _resourceMatching?: string; 
  public get resourceMatching() {
    return this.getStringAttribute('resource_matching');
  }
  public set resourceMatching(value: string) {
    this._resourceMatching = value;
  }
  public resetResourceMatching() {
    this._resourceMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMatchingInput() {
    return this._resourceMatching;
  }

  // route_creation - computed: true, optional: true, required: false
  private _routeCreation?: string; 
  public get routeCreation() {
    return this.getStringAttribute('route_creation');
  }
  public set routeCreation(value: string) {
    this._routeCreation = value;
  }
  public resetRouteCreation() {
    this._routeCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeCreationInput() {
    return this._routeCreation;
  }

  // service_instance_creation - computed: true, optional: true, required: false
  private _serviceInstanceCreation?: string; 
  public get serviceInstanceCreation() {
    return this.getStringAttribute('service_instance_creation');
  }
  public set serviceInstanceCreation(value: string) {
    this._serviceInstanceCreation = value;
  }
  public resetServiceInstanceCreation() {
    this._serviceInstanceCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceCreationInput() {
    return this._serviceInstanceCreation;
  }

  // service_instance_sharing - computed: true, optional: true, required: false
  private _serviceInstanceSharing?: string; 
  public get serviceInstanceSharing() {
    return this.getStringAttribute('service_instance_sharing');
  }
  public set serviceInstanceSharing(value: string) {
    this._serviceInstanceSharing = value;
  }
  public resetServiceInstanceSharing() {
    this._serviceInstanceSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInstanceSharingInput() {
    return this._serviceInstanceSharing;
  }

  // set_roles_by_username - computed: true, optional: true, required: false
  private _setRolesByUsername?: string; 
  public get setRolesByUsername() {
    return this.getStringAttribute('set_roles_by_username');
  }
  public set setRolesByUsername(value: string) {
    this._setRolesByUsername = value;
  }
  public resetSetRolesByUsername() {
    this._setRolesByUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setRolesByUsernameInput() {
    return this._setRolesByUsername;
  }

  // space_developer_env_var_visibility - computed: true, optional: true, required: false
  private _spaceDeveloperEnvVarVisibility?: string; 
  public get spaceDeveloperEnvVarVisibility() {
    return this.getStringAttribute('space_developer_env_var_visibility');
  }
  public set spaceDeveloperEnvVarVisibility(value: string) {
    this._spaceDeveloperEnvVarVisibility = value;
  }
  public resetSpaceDeveloperEnvVarVisibility() {
    this._spaceDeveloperEnvVarVisibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceDeveloperEnvVarVisibilityInput() {
    return this._spaceDeveloperEnvVarVisibility;
  }

  // space_scoped_private_broker_creation - computed: true, optional: true, required: false
  private _spaceScopedPrivateBrokerCreation?: string; 
  public get spaceScopedPrivateBrokerCreation() {
    return this.getStringAttribute('space_scoped_private_broker_creation');
  }
  public set spaceScopedPrivateBrokerCreation(value: string) {
    this._spaceScopedPrivateBrokerCreation = value;
  }
  public resetSpaceScopedPrivateBrokerCreation() {
    this._spaceScopedPrivateBrokerCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceScopedPrivateBrokerCreationInput() {
    return this._spaceScopedPrivateBrokerCreation;
  }

  // task_creation - computed: true, optional: true, required: false
  private _taskCreation?: string; 
  public get taskCreation() {
    return this.getStringAttribute('task_creation');
  }
  public set taskCreation(value: string) {
    this._taskCreation = value;
  }
  public resetTaskCreation() {
    this._taskCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskCreationInput() {
    return this._taskCreation;
  }

  // unset_roles_by_username - computed: true, optional: true, required: false
  private _unsetRolesByUsername?: string; 
  public get unsetRolesByUsername() {
    return this.getStringAttribute('unset_roles_by_username');
  }
  public set unsetRolesByUsername(value: string) {
    this._unsetRolesByUsername = value;
  }
  public resetUnsetRolesByUsername() {
    this._unsetRolesByUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetRolesByUsernameInput() {
    return this._unsetRolesByUsername;
  }

  // user_org_creation - computed: true, optional: true, required: false
  private _userOrgCreation?: string; 
  public get userOrgCreation() {
    return this.getStringAttribute('user_org_creation');
  }
  public set userOrgCreation(value: string) {
    this._userOrgCreation = value;
  }
  public resetUserOrgCreation() {
    this._userOrgCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userOrgCreationInput() {
    return this._userOrgCreation;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags cloudfoundry_feature_flags}
*/
export class FeatureFlags extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudfoundry_feature_flags";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FeatureFlags resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FeatureFlags to import
  * @param importFromId The id of the existing FeatureFlags that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FeatureFlags to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudfoundry_feature_flags", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudfoundry-community/cloudfoundry/0.53.1/docs/resources/feature_flags cloudfoundry_feature_flags} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FeatureFlagsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: FeatureFlagsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'cloudfoundry_feature_flags',
      terraformGeneratorMetadata: {
        providerName: 'cloudfoundry',
        providerVersion: '0.53.1'
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
    this._featureFlags.internalValue = config.featureFlags;
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

  // feature_flags - computed: false, optional: true, required: false
  private _featureFlags = new FeatureFlagsFeatureFlagsOutputReference(this, "feature_flags");
  public get featureFlags() {
    return this._featureFlags;
  }
  public putFeatureFlags(value: FeatureFlagsFeatureFlags) {
    this._featureFlags.internalValue = value;
  }
  public resetFeatureFlags() {
    this._featureFlags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureFlagsInput() {
    return this._featureFlags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      feature_flags: featureFlagsFeatureFlagsToTerraform(this._featureFlags.internalValue),
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
      feature_flags: {
        value: featureFlagsFeatureFlagsToHclTerraform(this._featureFlags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "FeatureFlagsFeatureFlagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
