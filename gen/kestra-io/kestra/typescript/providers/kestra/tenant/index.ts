// https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#id Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The tenant name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#name Tenant#name}
  */
  readonly name?: string;
  /**
  * Whether outputs are stored in internal storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#outputs_in_internal_storage Tenant#outputs_in_internal_storage}
  */
  readonly outputsInInternalStorage?: boolean | cdktf.IResolvable;
  /**
  * Whether tenant requires an existing namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#require_existing_namespace Tenant#require_existing_namespace}
  */
  readonly requireExistingNamespace?: boolean | cdktf.IResolvable;
  /**
  * The secret configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#secret_configuration Tenant#secret_configuration}
  */
  readonly secretConfiguration?: { [key: string]: string };
  /**
  * Whether secrets are read-only in this tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#secret_read_only Tenant#secret_read_only}
  */
  readonly secretReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The secret type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#secret_type Tenant#secret_type}
  */
  readonly secretType?: string;
  /**
  * The storage configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#storage_configuration Tenant#storage_configuration}
  */
  readonly storageConfiguration?: { [key: string]: string };
  /**
  * The storage type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#storage_type Tenant#storage_type}
  */
  readonly storageType?: string;
  /**
  * The tenant id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#tenant_id Tenant#tenant_id}
  */
  readonly tenantId: string;
  /**
  * secret_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#secret_isolation Tenant#secret_isolation}
  */
  readonly secretIsolation?: TenantSecretIsolation;
  /**
  * storage_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#storage_isolation Tenant#storage_isolation}
  */
  readonly storageIsolation?: TenantStorageIsolation;
  /**
  * worker_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#worker_group Tenant#worker_group}
  */
  readonly workerGroup?: TenantWorkerGroup;
}
export interface TenantSecretIsolation {
  /**
  * List of denied services for secret isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#denied_services Tenant#denied_services}
  */
  readonly deniedServices?: string[];
  /**
  * Enable secret isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function tenantSecretIsolationToTerraform(struct?: TenantSecretIsolationOutputReference | TenantSecretIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedServices),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function tenantSecretIsolationToHclTerraform(struct?: TenantSecretIsolationOutputReference | TenantSecretIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantSecretIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantSecretIsolation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deniedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedServices = this._deniedServices;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantSecretIsolation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deniedServices = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deniedServices = value.deniedServices;
      this._enabled = value.enabled;
    }
  }

  // denied_services - computed: false, optional: true, required: false
  private _deniedServices?: string[]; 
  public get deniedServices() {
    return this.getListAttribute('denied_services');
  }
  public set deniedServices(value: string[]) {
    this._deniedServices = value;
  }
  public resetDeniedServices() {
    this._deniedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedServicesInput() {
    return this._deniedServices;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TenantStorageIsolation {
  /**
  * List of denied services for isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#denied_services Tenant#denied_services}
  */
  readonly deniedServices?: string[];
  /**
  * Enable storage isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function tenantStorageIsolationToTerraform(struct?: TenantStorageIsolationOutputReference | TenantStorageIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedServices),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function tenantStorageIsolationToHclTerraform(struct?: TenantStorageIsolationOutputReference | TenantStorageIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied_services: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.deniedServices),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantStorageIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantStorageIsolation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deniedServices !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedServices = this._deniedServices;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantStorageIsolation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deniedServices = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deniedServices = value.deniedServices;
      this._enabled = value.enabled;
    }
  }

  // denied_services - computed: false, optional: true, required: false
  private _deniedServices?: string[]; 
  public get deniedServices() {
    return this.getListAttribute('denied_services');
  }
  public set deniedServices(value: string[]) {
    this._deniedServices = value;
  }
  public resetDeniedServices() {
    this._deniedServices = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedServicesInput() {
    return this._deniedServices;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TenantWorkerGroup {
  /**
  * The fallback strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#fallback Tenant#fallback}
  */
  readonly fallback: string;
  /**
  * The worker group key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#key Tenant#key}
  */
  readonly key: string;
}

export function tenantWorkerGroupToTerraform(struct?: TenantWorkerGroupOutputReference | TenantWorkerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: cdktf.stringToTerraform(struct!.fallback),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function tenantWorkerGroupToHclTerraform(struct?: TenantWorkerGroupOutputReference | TenantWorkerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fallback: {
      value: cdktf.stringToHclTerraform(struct!.fallback),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantWorkerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantWorkerGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fallback !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallback = this._fallback;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantWorkerGroup | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fallback = undefined;
      this._key = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fallback = value.fallback;
      this._key = value.key;
    }
  }

  // fallback - computed: false, optional: false, required: true
  private _fallback?: string; 
  public get fallback() {
    return this.getStringAttribute('fallback');
  }
  public set fallback(value: string) {
    this._fallback = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackInput() {
    return this._fallback;
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant kestra_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/tenant kestra_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_tenant',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.2'
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
    this._name = config.name;
    this._outputsInInternalStorage = config.outputsInInternalStorage;
    this._requireExistingNamespace = config.requireExistingNamespace;
    this._secretConfiguration = config.secretConfiguration;
    this._secretReadOnly = config.secretReadOnly;
    this._secretType = config.secretType;
    this._storageConfiguration = config.storageConfiguration;
    this._storageType = config.storageType;
    this._tenantId = config.tenantId;
    this._secretIsolation.internalValue = config.secretIsolation;
    this._storageIsolation.internalValue = config.storageIsolation;
    this._workerGroup.internalValue = config.workerGroup;
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

  // name - computed: false, optional: true, required: false
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

  // outputs_in_internal_storage - computed: false, optional: true, required: false
  private _outputsInInternalStorage?: boolean | cdktf.IResolvable; 
  public get outputsInInternalStorage() {
    return this.getBooleanAttribute('outputs_in_internal_storage');
  }
  public set outputsInInternalStorage(value: boolean | cdktf.IResolvable) {
    this._outputsInInternalStorage = value;
  }
  public resetOutputsInInternalStorage() {
    this._outputsInInternalStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputsInInternalStorageInput() {
    return this._outputsInInternalStorage;
  }

  // require_existing_namespace - computed: false, optional: true, required: false
  private _requireExistingNamespace?: boolean | cdktf.IResolvable; 
  public get requireExistingNamespace() {
    return this.getBooleanAttribute('require_existing_namespace');
  }
  public set requireExistingNamespace(value: boolean | cdktf.IResolvable) {
    this._requireExistingNamespace = value;
  }
  public resetRequireExistingNamespace() {
    this._requireExistingNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireExistingNamespaceInput() {
    return this._requireExistingNamespace;
  }

  // secret_configuration - computed: false, optional: true, required: false
  private _secretConfiguration?: { [key: string]: string }; 
  public get secretConfiguration() {
    return this.getStringMapAttribute('secret_configuration');
  }
  public set secretConfiguration(value: { [key: string]: string }) {
    this._secretConfiguration = value;
  }
  public resetSecretConfiguration() {
    this._secretConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretConfigurationInput() {
    return this._secretConfiguration;
  }

  // secret_read_only - computed: false, optional: true, required: false
  private _secretReadOnly?: boolean | cdktf.IResolvable; 
  public get secretReadOnly() {
    return this.getBooleanAttribute('secret_read_only');
  }
  public set secretReadOnly(value: boolean | cdktf.IResolvable) {
    this._secretReadOnly = value;
  }
  public resetSecretReadOnly() {
    this._secretReadOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretReadOnlyInput() {
    return this._secretReadOnly;
  }

  // secret_type - computed: false, optional: true, required: false
  private _secretType?: string; 
  public get secretType() {
    return this.getStringAttribute('secret_type');
  }
  public set secretType(value: string) {
    this._secretType = value;
  }
  public resetSecretType() {
    this._secretType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTypeInput() {
    return this._secretType;
  }

  // storage_configuration - computed: false, optional: true, required: false
  private _storageConfiguration?: { [key: string]: string }; 
  public get storageConfiguration() {
    return this.getStringMapAttribute('storage_configuration');
  }
  public set storageConfiguration(value: { [key: string]: string }) {
    this._storageConfiguration = value;
  }
  public resetStorageConfiguration() {
    this._storageConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageConfigurationInput() {
    return this._storageConfiguration;
  }

  // storage_type - computed: false, optional: true, required: false
  private _storageType?: string; 
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }
  public set storageType(value: string) {
    this._storageType = value;
  }
  public resetStorageType() {
    this._storageType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageTypeInput() {
    return this._storageType;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // secret_isolation - computed: false, optional: true, required: false
  private _secretIsolation = new TenantSecretIsolationOutputReference(this, "secret_isolation");
  public get secretIsolation() {
    return this._secretIsolation;
  }
  public putSecretIsolation(value: TenantSecretIsolation) {
    this._secretIsolation.internalValue = value;
  }
  public resetSecretIsolation() {
    this._secretIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretIsolationInput() {
    return this._secretIsolation.internalValue;
  }

  // storage_isolation - computed: false, optional: true, required: false
  private _storageIsolation = new TenantStorageIsolationOutputReference(this, "storage_isolation");
  public get storageIsolation() {
    return this._storageIsolation;
  }
  public putStorageIsolation(value: TenantStorageIsolation) {
    this._storageIsolation.internalValue = value;
  }
  public resetStorageIsolation() {
    this._storageIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageIsolationInput() {
    return this._storageIsolation.internalValue;
  }

  // worker_group - computed: false, optional: true, required: false
  private _workerGroup = new TenantWorkerGroupOutputReference(this, "worker_group");
  public get workerGroup() {
    return this._workerGroup;
  }
  public putWorkerGroup(value: TenantWorkerGroup) {
    this._workerGroup.internalValue = value;
  }
  public resetWorkerGroup() {
    this._workerGroup.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workerGroupInput() {
    return this._workerGroup.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      outputs_in_internal_storage: cdktf.booleanToTerraform(this._outputsInInternalStorage),
      require_existing_namespace: cdktf.booleanToTerraform(this._requireExistingNamespace),
      secret_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._secretConfiguration),
      secret_read_only: cdktf.booleanToTerraform(this._secretReadOnly),
      secret_type: cdktf.stringToTerraform(this._secretType),
      storage_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageConfiguration),
      storage_type: cdktf.stringToTerraform(this._storageType),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      secret_isolation: tenantSecretIsolationToTerraform(this._secretIsolation.internalValue),
      storage_isolation: tenantStorageIsolationToTerraform(this._storageIsolation.internalValue),
      worker_group: tenantWorkerGroupToTerraform(this._workerGroup.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      outputs_in_internal_storage: {
        value: cdktf.booleanToHclTerraform(this._outputsInInternalStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_existing_namespace: {
        value: cdktf.booleanToHclTerraform(this._requireExistingNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secretConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secret_read_only: {
        value: cdktf.booleanToHclTerraform(this._secretReadOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      secret_type: {
        value: cdktf.stringToHclTerraform(this._secretType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_configuration: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._storageConfiguration),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      storage_type: {
        value: cdktf.stringToHclTerraform(this._storageType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_isolation: {
        value: tenantSecretIsolationToHclTerraform(this._secretIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantSecretIsolationList",
      },
      storage_isolation: {
        value: tenantStorageIsolationToHclTerraform(this._storageIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantStorageIsolationList",
      },
      worker_group: {
        value: tenantWorkerGroupToHclTerraform(this._workerGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantWorkerGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
