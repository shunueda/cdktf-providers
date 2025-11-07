// https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceConfig extends cdktf.TerraformMetaArguments {
  /**
  * The namespace friendly description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#description Namespace#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#id Namespace#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#namespace_id Namespace#namespace_id}
  */
  readonly namespaceId: string;
  /**
  * Whether outputs are stored in internal storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#outputs_in_internal_storage Namespace#outputs_in_internal_storage}
  */
  readonly outputsInInternalStorage?: boolean | cdktf.IResolvable;
  /**
  * The namespace plugin defaults in yaml string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#plugin_defaults Namespace#plugin_defaults}
  */
  readonly pluginDefaults?: string;
  /**
  * The secret configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#secret_configuration Namespace#secret_configuration}
  */
  readonly secretConfiguration?: { [key: string]: string };
  /**
  * Whether secrets are read-only in this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#secret_read_only Namespace#secret_read_only}
  */
  readonly secretReadOnly?: boolean | cdktf.IResolvable;
  /**
  * The secret type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#secret_type Namespace#secret_type}
  */
  readonly secretType?: string;
  /**
  * The storage configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#storage_configuration Namespace#storage_configuration}
  */
  readonly storageConfiguration?: { [key: string]: string };
  /**
  * The storage type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#storage_type Namespace#storage_type}
  */
  readonly storageType?: string;
  /**
  * The namespace variables in yaml string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#variables Namespace#variables}
  */
  readonly variables?: string;
  /**
  * allowed_namespaces block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#allowed_namespaces Namespace#allowed_namespaces}
  */
  readonly allowedNamespaces?: NamespaceAllowedNamespaces[] | cdktf.IResolvable;
  /**
  * secret_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#secret_isolation Namespace#secret_isolation}
  */
  readonly secretIsolation?: NamespaceSecretIsolation;
  /**
  * storage_isolation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#storage_isolation Namespace#storage_isolation}
  */
  readonly storageIsolation?: NamespaceStorageIsolation;
  /**
  * worker_group block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#worker_group Namespace#worker_group}
  */
  readonly workerGroup?: NamespaceWorkerGroup;
}
export interface NamespaceAllowedNamespaces {
  /**
  * The namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#namespace Namespace#namespace}
  */
  readonly namespace: string;
}

export function namespaceAllowedNamespacesToTerraform(struct?: NamespaceAllowedNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function namespaceAllowedNamespacesToHclTerraform(struct?: NamespaceAllowedNamespaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NamespaceAllowedNamespacesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NamespaceAllowedNamespaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NamespaceAllowedNamespaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
    }
  }

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}

export class NamespaceAllowedNamespacesList extends cdktf.ComplexList {
  public internalValue? : NamespaceAllowedNamespaces[] | cdktf.IResolvable

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
  public get(index: number): NamespaceAllowedNamespacesOutputReference {
    return new NamespaceAllowedNamespacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NamespaceSecretIsolation {
  /**
  * List of denied services for secret isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#denied_services Namespace#denied_services}
  */
  readonly deniedServices?: string[];
  /**
  * Enable secret isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#enabled Namespace#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function namespaceSecretIsolationToTerraform(struct?: NamespaceSecretIsolationOutputReference | NamespaceSecretIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedServices),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function namespaceSecretIsolationToHclTerraform(struct?: NamespaceSecretIsolationOutputReference | NamespaceSecretIsolation): any {
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

export class NamespaceSecretIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceSecretIsolation | undefined {
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

  public set internalValue(value: NamespaceSecretIsolation | undefined) {
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
export interface NamespaceStorageIsolation {
  /**
  * List of denied services for isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#denied_services Namespace#denied_services}
  */
  readonly deniedServices?: string[];
  /**
  * Enable storage isolation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#enabled Namespace#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function namespaceStorageIsolationToTerraform(struct?: NamespaceStorageIsolationOutputReference | NamespaceStorageIsolation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied_services: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.deniedServices),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function namespaceStorageIsolationToHclTerraform(struct?: NamespaceStorageIsolationOutputReference | NamespaceStorageIsolation): any {
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

export class NamespaceStorageIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceStorageIsolation | undefined {
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

  public set internalValue(value: NamespaceStorageIsolation | undefined) {
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
export interface NamespaceWorkerGroup {
  /**
  * The fallback strategy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#fallback Namespace#fallback}
  */
  readonly fallback?: string;
  /**
  * The worker group key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#key Namespace#key}
  */
  readonly key: string;
}

export function namespaceWorkerGroupToTerraform(struct?: NamespaceWorkerGroupOutputReference | NamespaceWorkerGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fallback: cdktf.stringToTerraform(struct!.fallback),
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function namespaceWorkerGroupToHclTerraform(struct?: NamespaceWorkerGroupOutputReference | NamespaceWorkerGroup): any {
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

export class NamespaceWorkerGroupOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NamespaceWorkerGroup | undefined {
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

  public set internalValue(value: NamespaceWorkerGroup | undefined) {
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

  // fallback - computed: false, optional: true, required: false
  private _fallback?: string; 
  public get fallback() {
    return this.getStringAttribute('fallback');
  }
  public set fallback(value: string) {
    this._fallback = value;
  }
  public resetFallback() {
    this._fallback = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace kestra_namespace}
*/
export class Namespace extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_namespace";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Namespace resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Namespace to import
  * @param importFromId The id of the existing Namespace that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Namespace to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_namespace", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace kestra_namespace} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_namespace',
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
    this._description = config.description;
    this._id = config.id;
    this._namespaceId = config.namespaceId;
    this._outputsInInternalStorage = config.outputsInInternalStorage;
    this._pluginDefaults = config.pluginDefaults;
    this._secretConfiguration = config.secretConfiguration;
    this._secretReadOnly = config.secretReadOnly;
    this._secretType = config.secretType;
    this._storageConfiguration = config.storageConfiguration;
    this._storageType = config.storageType;
    this._variables = config.variables;
    this._allowedNamespaces.internalValue = config.allowedNamespaces;
    this._secretIsolation.internalValue = config.secretIsolation;
    this._storageIsolation.internalValue = config.storageIsolation;
    this._workerGroup.internalValue = config.workerGroup;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // namespace_id - computed: false, optional: false, required: true
  private _namespaceId?: string; 
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }
  public set namespaceId(value: string) {
    this._namespaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceIdInput() {
    return this._namespaceId;
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

  // plugin_defaults - computed: false, optional: true, required: false
  private _pluginDefaults?: string; 
  public get pluginDefaults() {
    return this.getStringAttribute('plugin_defaults');
  }
  public set pluginDefaults(value: string) {
    this._pluginDefaults = value;
  }
  public resetPluginDefaults() {
    this._pluginDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginDefaultsInput() {
    return this._pluginDefaults;
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

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // variables - computed: false, optional: true, required: false
  private _variables?: string; 
  public get variables() {
    return this.getStringAttribute('variables');
  }
  public set variables(value: string) {
    this._variables = value;
  }
  public resetVariables() {
    this._variables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variablesInput() {
    return this._variables;
  }

  // allowed_namespaces - computed: false, optional: true, required: false
  private _allowedNamespaces = new NamespaceAllowedNamespacesList(this, "allowed_namespaces", false);
  public get allowedNamespaces() {
    return this._allowedNamespaces;
  }
  public putAllowedNamespaces(value: NamespaceAllowedNamespaces[] | cdktf.IResolvable) {
    this._allowedNamespaces.internalValue = value;
  }
  public resetAllowedNamespaces() {
    this._allowedNamespaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedNamespacesInput() {
    return this._allowedNamespaces.internalValue;
  }

  // secret_isolation - computed: false, optional: true, required: false
  private _secretIsolation = new NamespaceSecretIsolationOutputReference(this, "secret_isolation");
  public get secretIsolation() {
    return this._secretIsolation;
  }
  public putSecretIsolation(value: NamespaceSecretIsolation) {
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
  private _storageIsolation = new NamespaceStorageIsolationOutputReference(this, "storage_isolation");
  public get storageIsolation() {
    return this._storageIsolation;
  }
  public putStorageIsolation(value: NamespaceStorageIsolation) {
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
  private _workerGroup = new NamespaceWorkerGroupOutputReference(this, "worker_group");
  public get workerGroup() {
    return this._workerGroup;
  }
  public putWorkerGroup(value: NamespaceWorkerGroup) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      namespace_id: cdktf.stringToTerraform(this._namespaceId),
      outputs_in_internal_storage: cdktf.booleanToTerraform(this._outputsInInternalStorage),
      plugin_defaults: cdktf.stringToTerraform(this._pluginDefaults),
      secret_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._secretConfiguration),
      secret_read_only: cdktf.booleanToTerraform(this._secretReadOnly),
      secret_type: cdktf.stringToTerraform(this._secretType),
      storage_configuration: cdktf.hashMapper(cdktf.stringToTerraform)(this._storageConfiguration),
      storage_type: cdktf.stringToTerraform(this._storageType),
      variables: cdktf.stringToTerraform(this._variables),
      allowed_namespaces: cdktf.listMapper(namespaceAllowedNamespacesToTerraform, true)(this._allowedNamespaces.internalValue),
      secret_isolation: namespaceSecretIsolationToTerraform(this._secretIsolation.internalValue),
      storage_isolation: namespaceStorageIsolationToTerraform(this._storageIsolation.internalValue),
      worker_group: namespaceWorkerGroupToTerraform(this._workerGroup.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      namespace_id: {
        value: cdktf.stringToHclTerraform(this._namespaceId),
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
      plugin_defaults: {
        value: cdktf.stringToHclTerraform(this._pluginDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      variables: {
        value: cdktf.stringToHclTerraform(this._variables),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allowed_namespaces: {
        value: cdktf.listMapperHcl(namespaceAllowedNamespacesToHclTerraform, true)(this._allowedNamespaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceAllowedNamespacesList",
      },
      secret_isolation: {
        value: namespaceSecretIsolationToHclTerraform(this._secretIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceSecretIsolationList",
      },
      storage_isolation: {
        value: namespaceStorageIsolationToHclTerraform(this._storageIsolation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceStorageIsolationList",
      },
      worker_group: {
        value: namespaceWorkerGroupToHclTerraform(this._workerGroup.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NamespaceWorkerGroupList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
