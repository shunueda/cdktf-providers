// https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SidecarConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the log integration mapped to this sidecar, used for Cyral activity logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#activity_log_integration_id Sidecar#activity_log_integration_id}
  */
  readonly activityLogIntegrationId?: string;
  /**
  * This argument lets you specify how to handle the connection in the event of an error in the sidecar during a user’s session. Valid modes are: `always`, `failover` or `never`. Defaults to `failover`. If `always` is specified, the sidecar will run in [passthrough mode](https://cyral.com/docs/sidecars/manage#passthrough-mode). If `failover` is specified, the sidecar will run in [resiliency mode](https://cyral.com/docs/sidecars/manage#resilient-mode-of-sidecar-operation). If `never` is specified and there is an error in the sidecar, connections to bound repositories will fail.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#bypass_mode Sidecar#bypass_mode}
  */
  readonly bypassMode?: string;
  /**
  * Deployment method that will be used by this sidecar (valid values: `docker`, `cft-ec2`, `terraform`, `helm3`, `automated`, `custom`, `terraformGKE`, `linux`, and `singleContainer`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#deployment_method Sidecar#deployment_method}
  */
  readonly deploymentMethod: string;
  /**
  * ID of the log integration mapped to this sidecar, used for sidecar diagnostic logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#diagnostic_log_integration_id Sidecar#diagnostic_log_integration_id}
  */
  readonly diagnosticLogIntegrationId?: string;
  /**
  * Labels that can be attached to the sidecar and shown in the `Tags` field in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#labels Sidecar#labels}
  */
  readonly labels?: string[];
  /**
  * ID of the log integration mapped to this sidecar, used for Cyral activity logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#log_integration_id Sidecar#log_integration_id}
  */
  readonly logIntegrationId?: string;
  /**
  * Sidecar name that will be used internally in Control Plane (ex: `your_sidecar_name`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#name Sidecar#name}
  */
  readonly name: string;
  /**
  * User-defined endpoint (also referred as `alias`) that can be used to override the sidecar DNS endpoint shown in the UI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#user_endpoint Sidecar#user_endpoint}
  */
  readonly userEndpoint?: string;
  /**
  * ID of the HashiCorp Vault integration to associate to this sidecar to be used for database account authentication.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#vault_integration_id Sidecar#vault_integration_id}
  */
  readonly vaultIntegrationId?: string;
  /**
  * certificate_bundle_secrets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#certificate_bundle_secrets Sidecar#certificate_bundle_secrets}
  */
  readonly certificateBundleSecrets?: SidecarCertificateBundleSecrets;
}
export interface SidecarCertificateBundleSecretsSidecar {
  /**
  * Engine is the name of the engine used with the given secrets manager type, when applicable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#engine Sidecar#engine}
  */
  readonly engine?: string;
  /**
  * Secret ID is the identifier or location for the secret that holds the certificate bundle.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#secret_id Sidecar#secret_id}
  */
  readonly secretId: string;
  /**
  * Type identifies the secret manager used to store the secret. Valid values are: `aws` and `k8s`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#type Sidecar#type}
  */
  readonly type: string;
}

export function sidecarCertificateBundleSecretsSidecarToTerraform(struct?: SidecarCertificateBundleSecretsSidecarOutputReference | SidecarCertificateBundleSecretsSidecar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    engine: cdktf.stringToTerraform(struct!.engine),
    secret_id: cdktf.stringToTerraform(struct!.secretId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function sidecarCertificateBundleSecretsSidecarToHclTerraform(struct?: SidecarCertificateBundleSecretsSidecarOutputReference | SidecarCertificateBundleSecretsSidecar): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    engine: {
      value: cdktf.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_id: {
      value: cdktf.stringToHclTerraform(struct!.secretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SidecarCertificateBundleSecretsSidecarOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarCertificateBundleSecretsSidecar | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    if (this._secretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretId = this._secretId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarCertificateBundleSecretsSidecar | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engine = undefined;
      this._secretId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engine = value.engine;
      this._secretId = value.secretId;
      this._type = value.type;
    }
  }

  // engine - computed: false, optional: true, required: false
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  public resetEngine() {
    this._engine = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }

  // secret_id - computed: false, optional: false, required: true
  private _secretId?: string; 
  public get secretId() {
    return this.getStringAttribute('secret_id');
  }
  public set secretId(value: string) {
    this._secretId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIdInput() {
    return this._secretId;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface SidecarCertificateBundleSecrets {
  /**
  * sidecar block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#sidecar Sidecar#sidecar}
  */
  readonly sidecar: SidecarCertificateBundleSecretsSidecar;
}

export function sidecarCertificateBundleSecretsToTerraform(struct?: SidecarCertificateBundleSecretsOutputReference | SidecarCertificateBundleSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sidecar: sidecarCertificateBundleSecretsSidecarToTerraform(struct!.sidecar),
  }
}


export function sidecarCertificateBundleSecretsToHclTerraform(struct?: SidecarCertificateBundleSecretsOutputReference | SidecarCertificateBundleSecrets): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sidecar: {
      value: sidecarCertificateBundleSecretsSidecarToHclTerraform(struct!.sidecar),
      isBlock: true,
      type: "set",
      storageClassType: "SidecarCertificateBundleSecretsSidecarList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SidecarCertificateBundleSecretsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SidecarCertificateBundleSecrets | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sidecar?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sidecar = this._sidecar?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SidecarCertificateBundleSecrets | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sidecar.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sidecar.internalValue = value.sidecar;
    }
  }

  // sidecar - computed: false, optional: false, required: true
  private _sidecar = new SidecarCertificateBundleSecretsSidecarOutputReference(this, "sidecar");
  public get sidecar() {
    return this._sidecar;
  }
  public putSidecar(value: SidecarCertificateBundleSecretsSidecar) {
    this._sidecar.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sidecarInput() {
    return this._sidecar.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar cyral_sidecar}
*/
export class Sidecar extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cyral_sidecar";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Sidecar resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Sidecar to import
  * @param importFromId The id of the existing Sidecar that should be imported. Refer to the {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Sidecar to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cyral_sidecar", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cyralinc/cyral/4.16.3/docs/resources/sidecar cyral_sidecar} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SidecarConfig
  */
  public constructor(scope: Construct, id: string, config: SidecarConfig) {
    super(scope, id, {
      terraformResourceType: 'cyral_sidecar',
      terraformGeneratorMetadata: {
        providerName: 'cyral',
        providerVersion: '4.16.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activityLogIntegrationId = config.activityLogIntegrationId;
    this._bypassMode = config.bypassMode;
    this._deploymentMethod = config.deploymentMethod;
    this._diagnosticLogIntegrationId = config.diagnosticLogIntegrationId;
    this._labels = config.labels;
    this._logIntegrationId = config.logIntegrationId;
    this._name = config.name;
    this._userEndpoint = config.userEndpoint;
    this._vaultIntegrationId = config.vaultIntegrationId;
    this._certificateBundleSecrets.internalValue = config.certificateBundleSecrets;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activity_log_integration_id - computed: false, optional: true, required: false
  private _activityLogIntegrationId?: string; 
  public get activityLogIntegrationId() {
    return this.getStringAttribute('activity_log_integration_id');
  }
  public set activityLogIntegrationId(value: string) {
    this._activityLogIntegrationId = value;
  }
  public resetActivityLogIntegrationId() {
    this._activityLogIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activityLogIntegrationIdInput() {
    return this._activityLogIntegrationId;
  }

  // bypass_mode - computed: false, optional: true, required: false
  private _bypassMode?: string; 
  public get bypassMode() {
    return this.getStringAttribute('bypass_mode');
  }
  public set bypassMode(value: string) {
    this._bypassMode = value;
  }
  public resetBypassMode() {
    this._bypassMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassModeInput() {
    return this._bypassMode;
  }

  // deployment_method - computed: false, optional: false, required: true
  private _deploymentMethod?: string; 
  public get deploymentMethod() {
    return this.getStringAttribute('deployment_method');
  }
  public set deploymentMethod(value: string) {
    this._deploymentMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentMethodInput() {
    return this._deploymentMethod;
  }

  // diagnostic_log_integration_id - computed: false, optional: true, required: false
  private _diagnosticLogIntegrationId?: string; 
  public get diagnosticLogIntegrationId() {
    return this.getStringAttribute('diagnostic_log_integration_id');
  }
  public set diagnosticLogIntegrationId(value: string) {
    this._diagnosticLogIntegrationId = value;
  }
  public resetDiagnosticLogIntegrationId() {
    this._diagnosticLogIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diagnosticLogIntegrationIdInput() {
    return this._diagnosticLogIntegrationId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // labels - computed: false, optional: true, required: false
  private _labels?: string[]; 
  public get labels() {
    return this.getListAttribute('labels');
  }
  public set labels(value: string[]) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
  }

  // log_integration_id - computed: false, optional: true, required: false
  private _logIntegrationId?: string; 
  public get logIntegrationId() {
    return this.getStringAttribute('log_integration_id');
  }
  public set logIntegrationId(value: string) {
    this._logIntegrationId = value;
  }
  public resetLogIntegrationId() {
    this._logIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logIntegrationIdInput() {
    return this._logIntegrationId;
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

  // user_endpoint - computed: false, optional: true, required: false
  private _userEndpoint?: string; 
  public get userEndpoint() {
    return this.getStringAttribute('user_endpoint');
  }
  public set userEndpoint(value: string) {
    this._userEndpoint = value;
  }
  public resetUserEndpoint() {
    this._userEndpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userEndpointInput() {
    return this._userEndpoint;
  }

  // vault_integration_id - computed: false, optional: true, required: false
  private _vaultIntegrationId?: string; 
  public get vaultIntegrationId() {
    return this.getStringAttribute('vault_integration_id');
  }
  public set vaultIntegrationId(value: string) {
    this._vaultIntegrationId = value;
  }
  public resetVaultIntegrationId() {
    this._vaultIntegrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultIntegrationIdInput() {
    return this._vaultIntegrationId;
  }

  // certificate_bundle_secrets - computed: false, optional: true, required: false
  private _certificateBundleSecrets = new SidecarCertificateBundleSecretsOutputReference(this, "certificate_bundle_secrets");
  public get certificateBundleSecrets() {
    return this._certificateBundleSecrets;
  }
  public putCertificateBundleSecrets(value: SidecarCertificateBundleSecrets) {
    this._certificateBundleSecrets.internalValue = value;
  }
  public resetCertificateBundleSecrets() {
    this._certificateBundleSecrets.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateBundleSecretsInput() {
    return this._certificateBundleSecrets.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      activity_log_integration_id: cdktf.stringToTerraform(this._activityLogIntegrationId),
      bypass_mode: cdktf.stringToTerraform(this._bypassMode),
      deployment_method: cdktf.stringToTerraform(this._deploymentMethod),
      diagnostic_log_integration_id: cdktf.stringToTerraform(this._diagnosticLogIntegrationId),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      log_integration_id: cdktf.stringToTerraform(this._logIntegrationId),
      name: cdktf.stringToTerraform(this._name),
      user_endpoint: cdktf.stringToTerraform(this._userEndpoint),
      vault_integration_id: cdktf.stringToTerraform(this._vaultIntegrationId),
      certificate_bundle_secrets: sidecarCertificateBundleSecretsToTerraform(this._certificateBundleSecrets.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      activity_log_integration_id: {
        value: cdktf.stringToHclTerraform(this._activityLogIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bypass_mode: {
        value: cdktf.stringToHclTerraform(this._bypassMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_method: {
        value: cdktf.stringToHclTerraform(this._deploymentMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      diagnostic_log_integration_id: {
        value: cdktf.stringToHclTerraform(this._diagnosticLogIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_integration_id: {
        value: cdktf.stringToHclTerraform(this._logIntegrationId),
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
      user_endpoint: {
        value: cdktf.stringToHclTerraform(this._userEndpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vault_integration_id: {
        value: cdktf.stringToHclTerraform(this._vaultIntegrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      certificate_bundle_secrets: {
        value: sidecarCertificateBundleSecretsToHclTerraform(this._certificateBundleSecrets.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SidecarCertificateBundleSecretsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
