// https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MksClusterV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#admission_controllers MksClusterV1#admission_controllers}
  */
  readonly admissionControllers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#enable_audit_logs MksClusterV1#enable_audit_logs}
  */
  readonly enableAuditLogs?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#enable_autorepair MksClusterV1#enable_autorepair}
  */
  readonly enableAutorepair?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#enable_patch_version_auto_upgrade MksClusterV1#enable_patch_version_auto_upgrade}
  */
  readonly enablePatchVersionAutoUpgrade?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#enable_pod_security_policy MksClusterV1#enable_pod_security_policy}
  */
  readonly enablePodSecurityPolicy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#feature_gates MksClusterV1#feature_gates}
  */
  readonly featureGates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#id MksClusterV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#kube_version MksClusterV1#kube_version}
  */
  readonly kubeVersion: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#maintenance_window_start MksClusterV1#maintenance_window_start}
  */
  readonly maintenanceWindowStart?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#name MksClusterV1#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#network_id MksClusterV1#network_id}
  */
  readonly networkId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#private_kube_api MksClusterV1#private_kube_api}
  */
  readonly privateKubeApi?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#project_id MksClusterV1#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#region MksClusterV1#region}
  */
  readonly region: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#subnet_id MksClusterV1#subnet_id}
  */
  readonly subnetId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#zonal MksClusterV1#zonal}
  */
  readonly zonal?: boolean | cdktf.IResolvable;
  /**
  * oidc block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#oidc MksClusterV1#oidc}
  */
  readonly oidc?: MksClusterV1Oidc;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#timeouts MksClusterV1#timeouts}
  */
  readonly timeouts?: MksClusterV1Timeouts;
}
export interface MksClusterV1Oidc {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#ca_certs MksClusterV1#ca_certs}
  */
  readonly caCerts?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#client_id MksClusterV1#client_id}
  */
  readonly clientId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#enabled MksClusterV1#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#groups_claim MksClusterV1#groups_claim}
  */
  readonly groupsClaim?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#issuer_url MksClusterV1#issuer_url}
  */
  readonly issuerUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#provider_name MksClusterV1#provider_name}
  */
  readonly providerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#username_claim MksClusterV1#username_claim}
  */
  readonly usernameClaim?: string;
}

export function mksClusterV1OidcToTerraform(struct?: MksClusterV1OidcOutputReference | MksClusterV1Oidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca_certs: cdktf.stringToTerraform(struct!.caCerts),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    groups_claim: cdktf.stringToTerraform(struct!.groupsClaim),
    issuer_url: cdktf.stringToTerraform(struct!.issuerUrl),
    provider_name: cdktf.stringToTerraform(struct!.providerName),
    username_claim: cdktf.stringToTerraform(struct!.usernameClaim),
  }
}


export function mksClusterV1OidcToHclTerraform(struct?: MksClusterV1OidcOutputReference | MksClusterV1Oidc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca_certs: {
      value: cdktf.stringToHclTerraform(struct!.caCerts),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    groups_claim: {
      value: cdktf.stringToHclTerraform(struct!.groupsClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    issuer_url: {
      value: cdktf.stringToHclTerraform(struct!.issuerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    provider_name: {
      value: cdktf.stringToHclTerraform(struct!.providerName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_claim: {
      value: cdktf.stringToHclTerraform(struct!.usernameClaim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MksClusterV1OidcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): MksClusterV1Oidc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._caCerts !== undefined) {
      hasAnyValues = true;
      internalValueResult.caCerts = this._caCerts;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._groupsClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupsClaim = this._groupsClaim;
    }
    if (this._issuerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuerUrl = this._issuerUrl;
    }
    if (this._providerName !== undefined) {
      hasAnyValues = true;
      internalValueResult.providerName = this._providerName;
    }
    if (this._usernameClaim !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameClaim = this._usernameClaim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MksClusterV1Oidc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._caCerts = undefined;
      this._clientId = undefined;
      this._enabled = undefined;
      this._groupsClaim = undefined;
      this._issuerUrl = undefined;
      this._providerName = undefined;
      this._usernameClaim = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._caCerts = value.caCerts;
      this._clientId = value.clientId;
      this._enabled = value.enabled;
      this._groupsClaim = value.groupsClaim;
      this._issuerUrl = value.issuerUrl;
      this._providerName = value.providerName;
      this._usernameClaim = value.usernameClaim;
    }
  }

  // ca_certs - computed: false, optional: true, required: false
  private _caCerts?: string; 
  public get caCerts() {
    return this.getStringAttribute('ca_certs');
  }
  public set caCerts(value: string) {
    this._caCerts = value;
  }
  public resetCaCerts() {
    this._caCerts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertsInput() {
    return this._caCerts;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // groups_claim - computed: false, optional: true, required: false
  private _groupsClaim?: string; 
  public get groupsClaim() {
    return this.getStringAttribute('groups_claim');
  }
  public set groupsClaim(value: string) {
    this._groupsClaim = value;
  }
  public resetGroupsClaim() {
    this._groupsClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsClaimInput() {
    return this._groupsClaim;
  }

  // issuer_url - computed: false, optional: true, required: false
  private _issuerUrl?: string; 
  public get issuerUrl() {
    return this.getStringAttribute('issuer_url');
  }
  public set issuerUrl(value: string) {
    this._issuerUrl = value;
  }
  public resetIssuerUrl() {
    this._issuerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerUrlInput() {
    return this._issuerUrl;
  }

  // provider_name - computed: false, optional: true, required: false
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  public resetProviderName() {
    this._providerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // username_claim - computed: false, optional: true, required: false
  private _usernameClaim?: string; 
  public get usernameClaim() {
    return this.getStringAttribute('username_claim');
  }
  public set usernameClaim(value: string) {
    this._usernameClaim = value;
  }
  public resetUsernameClaim() {
    this._usernameClaim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameClaimInput() {
    return this._usernameClaim;
  }
}
export interface MksClusterV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#create MksClusterV1#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#delete MksClusterV1#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#update MksClusterV1#update}
  */
  readonly update?: string;
}

export function mksClusterV1TimeoutsToTerraform(struct?: MksClusterV1Timeouts | cdktf.IResolvable): any {
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


export function mksClusterV1TimeoutsToHclTerraform(struct?: MksClusterV1Timeouts | cdktf.IResolvable): any {
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

export class MksClusterV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MksClusterV1Timeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MksClusterV1Timeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1 selectel_mks_cluster_v1}
*/
export class MksClusterV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "selectel_mks_cluster_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MksClusterV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MksClusterV1 to import
  * @param importFromId The id of the existing MksClusterV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MksClusterV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "selectel_mks_cluster_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/selectel/selectel/7.2.1/docs/resources/mks_cluster_v1 selectel_mks_cluster_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MksClusterV1Config
  */
  public constructor(scope: Construct, id: string, config: MksClusterV1Config) {
    super(scope, id, {
      terraformResourceType: 'selectel_mks_cluster_v1',
      terraformGeneratorMetadata: {
        providerName: 'selectel',
        providerVersion: '7.2.1',
        providerVersionConstraint: '7.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admissionControllers = config.admissionControllers;
    this._enableAuditLogs = config.enableAuditLogs;
    this._enableAutorepair = config.enableAutorepair;
    this._enablePatchVersionAutoUpgrade = config.enablePatchVersionAutoUpgrade;
    this._enablePodSecurityPolicy = config.enablePodSecurityPolicy;
    this._featureGates = config.featureGates;
    this._id = config.id;
    this._kubeVersion = config.kubeVersion;
    this._maintenanceWindowStart = config.maintenanceWindowStart;
    this._name = config.name;
    this._networkId = config.networkId;
    this._privateKubeApi = config.privateKubeApi;
    this._projectId = config.projectId;
    this._region = config.region;
    this._subnetId = config.subnetId;
    this._zonal = config.zonal;
    this._oidc.internalValue = config.oidc;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admission_controllers - computed: false, optional: true, required: false
  private _admissionControllers?: string[]; 
  public get admissionControllers() {
    return cdktf.Fn.tolist(this.getListAttribute('admission_controllers'));
  }
  public set admissionControllers(value: string[]) {
    this._admissionControllers = value;
  }
  public resetAdmissionControllers() {
    this._admissionControllers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionControllersInput() {
    return this._admissionControllers;
  }

  // enable_audit_logs - computed: false, optional: true, required: false
  private _enableAuditLogs?: boolean | cdktf.IResolvable; 
  public get enableAuditLogs() {
    return this.getBooleanAttribute('enable_audit_logs');
  }
  public set enableAuditLogs(value: boolean | cdktf.IResolvable) {
    this._enableAuditLogs = value;
  }
  public resetEnableAuditLogs() {
    this._enableAuditLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAuditLogsInput() {
    return this._enableAuditLogs;
  }

  // enable_autorepair - computed: false, optional: true, required: false
  private _enableAutorepair?: boolean | cdktf.IResolvable; 
  public get enableAutorepair() {
    return this.getBooleanAttribute('enable_autorepair');
  }
  public set enableAutorepair(value: boolean | cdktf.IResolvable) {
    this._enableAutorepair = value;
  }
  public resetEnableAutorepair() {
    this._enableAutorepair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutorepairInput() {
    return this._enableAutorepair;
  }

  // enable_patch_version_auto_upgrade - computed: false, optional: true, required: false
  private _enablePatchVersionAutoUpgrade?: boolean | cdktf.IResolvable; 
  public get enablePatchVersionAutoUpgrade() {
    return this.getBooleanAttribute('enable_patch_version_auto_upgrade');
  }
  public set enablePatchVersionAutoUpgrade(value: boolean | cdktf.IResolvable) {
    this._enablePatchVersionAutoUpgrade = value;
  }
  public resetEnablePatchVersionAutoUpgrade() {
    this._enablePatchVersionAutoUpgrade = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePatchVersionAutoUpgradeInput() {
    return this._enablePatchVersionAutoUpgrade;
  }

  // enable_pod_security_policy - computed: false, optional: true, required: false
  private _enablePodSecurityPolicy?: boolean | cdktf.IResolvable; 
  public get enablePodSecurityPolicy() {
    return this.getBooleanAttribute('enable_pod_security_policy');
  }
  public set enablePodSecurityPolicy(value: boolean | cdktf.IResolvable) {
    this._enablePodSecurityPolicy = value;
  }
  public resetEnablePodSecurityPolicy() {
    this._enablePodSecurityPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePodSecurityPolicyInput() {
    return this._enablePodSecurityPolicy;
  }

  // feature_gates - computed: false, optional: true, required: false
  private _featureGates?: string[]; 
  public get featureGates() {
    return cdktf.Fn.tolist(this.getListAttribute('feature_gates'));
  }
  public set featureGates(value: string[]) {
    this._featureGates = value;
  }
  public resetFeatureGates() {
    this._featureGates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureGatesInput() {
    return this._featureGates;
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

  // kube_api_ip - computed: true, optional: false, required: false
  public get kubeApiIp() {
    return this.getStringAttribute('kube_api_ip');
  }

  // kube_version - computed: false, optional: false, required: true
  private _kubeVersion?: string; 
  public get kubeVersion() {
    return this.getStringAttribute('kube_version');
  }
  public set kubeVersion(value: string) {
    this._kubeVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeVersionInput() {
    return this._kubeVersion;
  }

  // maintenance_window_end - computed: true, optional: false, required: false
  public get maintenanceWindowEnd() {
    return this.getStringAttribute('maintenance_window_end');
  }

  // maintenance_window_start - computed: true, optional: true, required: false
  private _maintenanceWindowStart?: string; 
  public get maintenanceWindowStart() {
    return this.getStringAttribute('maintenance_window_start');
  }
  public set maintenanceWindowStart(value: string) {
    this._maintenanceWindowStart = value;
  }
  public resetMaintenanceWindowStart() {
    this._maintenanceWindowStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maintenanceWindowStartInput() {
    return this._maintenanceWindowStart;
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

  // network_id - computed: true, optional: true, required: false
  private _networkId?: string; 
  public get networkId() {
    return this.getStringAttribute('network_id');
  }
  public set networkId(value: string) {
    this._networkId = value;
  }
  public resetNetworkId() {
    this._networkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkIdInput() {
    return this._networkId;
  }

  // private_kube_api - computed: false, optional: true, required: false
  private _privateKubeApi?: boolean | cdktf.IResolvable; 
  public get privateKubeApi() {
    return this.getBooleanAttribute('private_kube_api');
  }
  public set privateKubeApi(value: boolean | cdktf.IResolvable) {
    this._privateKubeApi = value;
  }
  public resetPrivateKubeApi() {
    this._privateKubeApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKubeApiInput() {
    return this._privateKubeApi;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // subnet_id - computed: true, optional: true, required: false
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  public resetSubnetId() {
    this._subnetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // zonal - computed: false, optional: true, required: false
  private _zonal?: boolean | cdktf.IResolvable; 
  public get zonal() {
    return this.getBooleanAttribute('zonal');
  }
  public set zonal(value: boolean | cdktf.IResolvable) {
    this._zonal = value;
  }
  public resetZonal() {
    this._zonal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zonalInput() {
    return this._zonal;
  }

  // oidc - computed: false, optional: true, required: false
  private _oidc = new MksClusterV1OidcOutputReference(this, "oidc");
  public get oidc() {
    return this._oidc;
  }
  public putOidc(value: MksClusterV1Oidc) {
    this._oidc.internalValue = value;
  }
  public resetOidc() {
    this._oidc.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidcInput() {
    return this._oidc.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MksClusterV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MksClusterV1Timeouts) {
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
      admission_controllers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._admissionControllers),
      enable_audit_logs: cdktf.booleanToTerraform(this._enableAuditLogs),
      enable_autorepair: cdktf.booleanToTerraform(this._enableAutorepair),
      enable_patch_version_auto_upgrade: cdktf.booleanToTerraform(this._enablePatchVersionAutoUpgrade),
      enable_pod_security_policy: cdktf.booleanToTerraform(this._enablePodSecurityPolicy),
      feature_gates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._featureGates),
      id: cdktf.stringToTerraform(this._id),
      kube_version: cdktf.stringToTerraform(this._kubeVersion),
      maintenance_window_start: cdktf.stringToTerraform(this._maintenanceWindowStart),
      name: cdktf.stringToTerraform(this._name),
      network_id: cdktf.stringToTerraform(this._networkId),
      private_kube_api: cdktf.booleanToTerraform(this._privateKubeApi),
      project_id: cdktf.stringToTerraform(this._projectId),
      region: cdktf.stringToTerraform(this._region),
      subnet_id: cdktf.stringToTerraform(this._subnetId),
      zonal: cdktf.booleanToTerraform(this._zonal),
      oidc: mksClusterV1OidcToTerraform(this._oidc.internalValue),
      timeouts: mksClusterV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admission_controllers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._admissionControllers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enable_audit_logs: {
        value: cdktf.booleanToHclTerraform(this._enableAuditLogs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_autorepair: {
        value: cdktf.booleanToHclTerraform(this._enableAutorepair),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_patch_version_auto_upgrade: {
        value: cdktf.booleanToHclTerraform(this._enablePatchVersionAutoUpgrade),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_pod_security_policy: {
        value: cdktf.booleanToHclTerraform(this._enablePodSecurityPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_gates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._featureGates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kube_version: {
        value: cdktf.stringToHclTerraform(this._kubeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      maintenance_window_start: {
        value: cdktf.stringToHclTerraform(this._maintenanceWindowStart),
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
      network_id: {
        value: cdktf.stringToHclTerraform(this._networkId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_kube_api: {
        value: cdktf.booleanToHclTerraform(this._privateKubeApi),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_id: {
        value: cdktf.stringToHclTerraform(this._subnetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zonal: {
        value: cdktf.booleanToHclTerraform(this._zonal),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      oidc: {
        value: mksClusterV1OidcToHclTerraform(this._oidc.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "MksClusterV1OidcList",
      },
      timeouts: {
        value: mksClusterV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MksClusterV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
