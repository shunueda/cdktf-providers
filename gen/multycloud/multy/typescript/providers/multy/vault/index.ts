// https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VaultConfig extends cdktf.TerraformMetaArguments {
  /**
  * Cloud provider to deploy resource into. Accepted values are `aws`, `azure` or `gcp`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault#cloud Vault#cloud}
  */
  readonly cloud: string;
  /**
  * GCP-specific attributes that will be set if this resource is deployed in GCP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault#gcp_overrides Vault#gcp_overrides}
  */
  readonly gcpOverrides?: VaultGcpOverrides;
  /**
  * Location to deploy resource into. Read more about regions in [documentation](https://docs.multy.dev/regions)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault#location Vault#location}
  */
  readonly location: string;
  /**
  * Name of vault resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault#name Vault#name}
  */
  readonly name: string;
}
export interface VaultAzure {
}

export function vaultAzureToTerraform(struct?: VaultAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function vaultAzureToHclTerraform(struct?: VaultAzure): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class VaultAzureOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultAzure | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultAzure | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }
}
export interface VaultGcpOverrides {
  /**
  * The project to use for this resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault#project Vault#project}
  */
  readonly project?: string;
}

export function vaultGcpOverridesToTerraform(struct?: VaultGcpOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function vaultGcpOverridesToHclTerraform(struct?: VaultGcpOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VaultGcpOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): VaultGcpOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VaultGcpOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._project = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._project = value.project;
    }
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault multy_vault}
*/
export class Vault extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "multy_vault";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Vault resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Vault to import
  * @param importFromId The id of the existing Vault that should be imported. Refer to the {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Vault to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "multy_vault", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/multycloud/multy/0.0.16/docs/resources/vault multy_vault} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VaultConfig
  */
  public constructor(scope: Construct, id: string, config: VaultConfig) {
    super(scope, id, {
      terraformResourceType: 'multy_vault',
      terraformGeneratorMetadata: {
        providerName: 'multy',
        providerVersion: '0.0.16'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cloud = config.cloud;
    this._gcpOverrides.internalValue = config.gcpOverrides;
    this._location = config.location;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure - computed: true, optional: false, required: false
  private _azure = new VaultAzureOutputReference(this, "azure");
  public get azure() {
    return this._azure;
  }

  // cloud - computed: false, optional: false, required: true
  private _cloud?: string; 
  public get cloud() {
    return this.getStringAttribute('cloud');
  }
  public set cloud(value: string) {
    this._cloud = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudInput() {
    return this._cloud;
  }

  // gcp_overrides - computed: true, optional: true, required: false
  private _gcpOverrides = new VaultGcpOverridesOutputReference(this, "gcp_overrides");
  public get gcpOverrides() {
    return this._gcpOverrides;
  }
  public putGcpOverrides(value: VaultGcpOverrides) {
    this._gcpOverrides.internalValue = value;
  }
  public resetGcpOverrides() {
    this._gcpOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcpOverridesInput() {
    return this._gcpOverrides.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
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

  // resource_group_id - computed: true, optional: false, required: false
  public get resourceGroupId() {
    return this.getStringAttribute('resource_group_id');
  }

  // resource_status - computed: true, optional: false, required: false
  private _resourceStatus = new cdktf.StringMap(this, "resource_status");
  public get resourceStatus() {
    return this._resourceStatus;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud: cdktf.stringToTerraform(this._cloud),
      gcp_overrides: vaultGcpOverridesToTerraform(this._gcpOverrides.internalValue),
      location: cdktf.stringToTerraform(this._location),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cloud: {
        value: cdktf.stringToHclTerraform(this._cloud),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      gcp_overrides: {
        value: vaultGcpOverridesToHclTerraform(this._gcpOverrides.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "VaultGcpOverrides",
      },
      location: {
        value: cdktf.stringToHclTerraform(this._location),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
