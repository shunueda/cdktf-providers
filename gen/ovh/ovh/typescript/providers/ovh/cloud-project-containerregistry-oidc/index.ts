// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudProjectContainerregistryOidcConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#delete_users CloudProjectContainerregistryOidc#delete_users}
  */
  readonly deleteUsers?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#id CloudProjectContainerregistryOidc#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_admin_group CloudProjectContainerregistryOidc#oidc_admin_group}
  */
  readonly oidcAdminGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_auto_onboard CloudProjectContainerregistryOidc#oidc_auto_onboard}
  */
  readonly oidcAutoOnboard?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_client_id CloudProjectContainerregistryOidc#oidc_client_id}
  */
  readonly oidcClientId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_client_secret CloudProjectContainerregistryOidc#oidc_client_secret}
  */
  readonly oidcClientSecret: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_endpoint CloudProjectContainerregistryOidc#oidc_endpoint}
  */
  readonly oidcEndpoint: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_groups_claim CloudProjectContainerregistryOidc#oidc_groups_claim}
  */
  readonly oidcGroupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_name CloudProjectContainerregistryOidc#oidc_name}
  */
  readonly oidcName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_scope CloudProjectContainerregistryOidc#oidc_scope}
  */
  readonly oidcScope: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_user_claim CloudProjectContainerregistryOidc#oidc_user_claim}
  */
  readonly oidcUserClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#oidc_verify_cert CloudProjectContainerregistryOidc#oidc_verify_cert}
  */
  readonly oidcVerifyCert?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#registry_id CloudProjectContainerregistryOidc#registry_id}
  */
  readonly registryId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#service_name CloudProjectContainerregistryOidc#service_name}
  */
  readonly serviceName: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#timeouts CloudProjectContainerregistryOidc#timeouts}
  */
  readonly timeouts?: CloudProjectContainerregistryOidcTimeouts;
}
export interface CloudProjectContainerregistryOidcTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#create CloudProjectContainerregistryOidc#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#default CloudProjectContainerregistryOidc#default}
  */
  readonly default?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#delete CloudProjectContainerregistryOidc#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#read CloudProjectContainerregistryOidc#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#update CloudProjectContainerregistryOidc#update}
  */
  readonly update?: string;
}

export function cloudProjectContainerregistryOidcTimeoutsToTerraform(struct?: CloudProjectContainerregistryOidcTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    default: cdktf.stringToTerraform(struct!.default),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudProjectContainerregistryOidcTimeoutsToHclTerraform(struct?: CloudProjectContainerregistryOidcTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class CloudProjectContainerregistryOidcTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudProjectContainerregistryOidcTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudProjectContainerregistryOidcTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._default = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc ovh_cloud_project_containerregistry_oidc}
*/
export class CloudProjectContainerregistryOidc extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_cloud_project_containerregistry_oidc";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudProjectContainerregistryOidc resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudProjectContainerregistryOidc to import
  * @param importFromId The id of the existing CloudProjectContainerregistryOidc that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudProjectContainerregistryOidc to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_cloud_project_containerregistry_oidc", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/resources/cloud_project_containerregistry_oidc ovh_cloud_project_containerregistry_oidc} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudProjectContainerregistryOidcConfig
  */
  public constructor(scope: Construct, id: string, config: CloudProjectContainerregistryOidcConfig) {
    super(scope, id, {
      terraformResourceType: 'ovh_cloud_project_containerregistry_oidc',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deleteUsers = config.deleteUsers;
    this._id = config.id;
    this._oidcAdminGroup = config.oidcAdminGroup;
    this._oidcAutoOnboard = config.oidcAutoOnboard;
    this._oidcClientId = config.oidcClientId;
    this._oidcClientSecret = config.oidcClientSecret;
    this._oidcEndpoint = config.oidcEndpoint;
    this._oidcGroupsClaim = config.oidcGroupsClaim;
    this._oidcName = config.oidcName;
    this._oidcScope = config.oidcScope;
    this._oidcUserClaim = config.oidcUserClaim;
    this._oidcVerifyCert = config.oidcVerifyCert;
    this._registryId = config.registryId;
    this._serviceName = config.serviceName;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delete_users - computed: false, optional: true, required: false
  private _deleteUsers?: boolean | cdktf.IResolvable; 
  public get deleteUsers() {
    return this.getBooleanAttribute('delete_users');
  }
  public set deleteUsers(value: boolean | cdktf.IResolvable) {
    this._deleteUsers = value;
  }
  public resetDeleteUsers() {
    this._deleteUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteUsersInput() {
    return this._deleteUsers;
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

  // oidc_admin_group - computed: false, optional: true, required: false
  private _oidcAdminGroup?: string; 
  public get oidcAdminGroup() {
    return this.getStringAttribute('oidc_admin_group');
  }
  public set oidcAdminGroup(value: string) {
    this._oidcAdminGroup = value;
  }
  public resetOidcAdminGroup() {
    this._oidcAdminGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAdminGroupInput() {
    return this._oidcAdminGroup;
  }

  // oidc_auto_onboard - computed: false, optional: true, required: false
  private _oidcAutoOnboard?: boolean | cdktf.IResolvable; 
  public get oidcAutoOnboard() {
    return this.getBooleanAttribute('oidc_auto_onboard');
  }
  public set oidcAutoOnboard(value: boolean | cdktf.IResolvable) {
    this._oidcAutoOnboard = value;
  }
  public resetOidcAutoOnboard() {
    this._oidcAutoOnboard = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcAutoOnboardInput() {
    return this._oidcAutoOnboard;
  }

  // oidc_client_id - computed: false, optional: false, required: true
  private _oidcClientId?: string; 
  public get oidcClientId() {
    return this.getStringAttribute('oidc_client_id');
  }
  public set oidcClientId(value: string) {
    this._oidcClientId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientIdInput() {
    return this._oidcClientId;
  }

  // oidc_client_secret - computed: false, optional: false, required: true
  private _oidcClientSecret?: string; 
  public get oidcClientSecret() {
    return this.getStringAttribute('oidc_client_secret');
  }
  public set oidcClientSecret(value: string) {
    this._oidcClientSecret = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcClientSecretInput() {
    return this._oidcClientSecret;
  }

  // oidc_endpoint - computed: false, optional: false, required: true
  private _oidcEndpoint?: string; 
  public get oidcEndpoint() {
    return this.getStringAttribute('oidc_endpoint');
  }
  public set oidcEndpoint(value: string) {
    this._oidcEndpoint = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcEndpointInput() {
    return this._oidcEndpoint;
  }

  // oidc_groups_claim - computed: false, optional: true, required: false
  private _oidcGroupsClaim?: string; 
  public get oidcGroupsClaim() {
    return this.getStringAttribute('oidc_groups_claim');
  }
  public set oidcGroupsClaim(value: string) {
    this._oidcGroupsClaim = value;
  }
  public resetOidcGroupsClaim() {
    this._oidcGroupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcGroupsClaimInput() {
    return this._oidcGroupsClaim;
  }

  // oidc_name - computed: false, optional: false, required: true
  private _oidcName?: string; 
  public get oidcName() {
    return this.getStringAttribute('oidc_name');
  }
  public set oidcName(value: string) {
    this._oidcName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcNameInput() {
    return this._oidcName;
  }

  // oidc_scope - computed: false, optional: false, required: true
  private _oidcScope?: string; 
  public get oidcScope() {
    return this.getStringAttribute('oidc_scope');
  }
  public set oidcScope(value: string) {
    this._oidcScope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcScopeInput() {
    return this._oidcScope;
  }

  // oidc_user_claim - computed: false, optional: true, required: false
  private _oidcUserClaim?: string; 
  public get oidcUserClaim() {
    return this.getStringAttribute('oidc_user_claim');
  }
  public set oidcUserClaim(value: string) {
    this._oidcUserClaim = value;
  }
  public resetOidcUserClaim() {
    this._oidcUserClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcUserClaimInput() {
    return this._oidcUserClaim;
  }

  // oidc_verify_cert - computed: true, optional: true, required: false
  private _oidcVerifyCert?: boolean | cdktf.IResolvable; 
  public get oidcVerifyCert() {
    return this.getBooleanAttribute('oidc_verify_cert');
  }
  public set oidcVerifyCert(value: boolean | cdktf.IResolvable) {
    this._oidcVerifyCert = value;
  }
  public resetOidcVerifyCert() {
    this._oidcVerifyCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcVerifyCertInput() {
    return this._oidcVerifyCert;
  }

  // registry_id - computed: false, optional: false, required: true
  private _registryId?: string; 
  public get registryId() {
    return this.getStringAttribute('registry_id');
  }
  public set registryId(value: string) {
    this._registryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryIdInput() {
    return this._registryId;
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudProjectContainerregistryOidcTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudProjectContainerregistryOidcTimeouts) {
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
      delete_users: cdktf.booleanToTerraform(this._deleteUsers),
      id: cdktf.stringToTerraform(this._id),
      oidc_admin_group: cdktf.stringToTerraform(this._oidcAdminGroup),
      oidc_auto_onboard: cdktf.booleanToTerraform(this._oidcAutoOnboard),
      oidc_client_id: cdktf.stringToTerraform(this._oidcClientId),
      oidc_client_secret: cdktf.stringToTerraform(this._oidcClientSecret),
      oidc_endpoint: cdktf.stringToTerraform(this._oidcEndpoint),
      oidc_groups_claim: cdktf.stringToTerraform(this._oidcGroupsClaim),
      oidc_name: cdktf.stringToTerraform(this._oidcName),
      oidc_scope: cdktf.stringToTerraform(this._oidcScope),
      oidc_user_claim: cdktf.stringToTerraform(this._oidcUserClaim),
      oidc_verify_cert: cdktf.booleanToTerraform(this._oidcVerifyCert),
      registry_id: cdktf.stringToTerraform(this._registryId),
      service_name: cdktf.stringToTerraform(this._serviceName),
      timeouts: cloudProjectContainerregistryOidcTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delete_users: {
        value: cdktf.booleanToHclTerraform(this._deleteUsers),
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
      oidc_admin_group: {
        value: cdktf.stringToHclTerraform(this._oidcAdminGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_auto_onboard: {
        value: cdktf.booleanToHclTerraform(this._oidcAutoOnboard),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc_client_id: {
        value: cdktf.stringToHclTerraform(this._oidcClientId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_client_secret: {
        value: cdktf.stringToHclTerraform(this._oidcClientSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_endpoint: {
        value: cdktf.stringToHclTerraform(this._oidcEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_groups_claim: {
        value: cdktf.stringToHclTerraform(this._oidcGroupsClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_name: {
        value: cdktf.stringToHclTerraform(this._oidcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_scope: {
        value: cdktf.stringToHclTerraform(this._oidcScope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_user_claim: {
        value: cdktf.stringToHclTerraform(this._oidcUserClaim),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oidc_verify_cert: {
        value: cdktf.booleanToHclTerraform(this._oidcVerifyCert),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      registry_id: {
        value: cdktf.stringToHclTerraform(this._registryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cloudProjectContainerregistryOidcTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudProjectContainerregistryOidcTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
