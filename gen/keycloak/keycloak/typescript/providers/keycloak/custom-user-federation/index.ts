// https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomUserFederationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#cache_policy CustomUserFederation#cache_policy}
  */
  readonly cachePolicy?: string;
  /**
  * How frequently Keycloak should sync changed users, in seconds. Omit this property to disable periodic changed users sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#changed_sync_period CustomUserFederation#changed_sync_period}
  */
  readonly changedSyncPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#config CustomUserFederation#config}
  */
  readonly config?: { [key: string]: string };
  /**
  * When false, this provider will not be used when performing queries for users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#enabled CustomUserFederation#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * How frequently Keycloak should sync all users, in seconds. Omit this property to disable periodic full sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#full_sync_period CustomUserFederation#full_sync_period}
  */
  readonly fullSyncPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#id CustomUserFederation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Display name of the provider when displayed in the console.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#name CustomUserFederation#name}
  */
  readonly name: string;
  /**
  * The parent_id of the generated component. will use realm_id if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#parent_id CustomUserFederation#parent_id}
  */
  readonly parentId?: string;
  /**
  * Priority of this provider when looking up users. Lower values are first.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#priority CustomUserFederation#priority}
  */
  readonly priority?: number;
  /**
  * The unique ID of the custom provider, specified in the `getId` implementation for the UserStorageProviderFactory interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#provider_id CustomUserFederation#provider_id}
  */
  readonly providerId: string;
  /**
  * The realm (name) this provider will provide user federation for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#realm_id CustomUserFederation#realm_id}
  */
  readonly realmId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation keycloak_custom_user_federation}
*/
export class CustomUserFederation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "keycloak_custom_user_federation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomUserFederation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomUserFederation to import
  * @param importFromId The id of the existing CustomUserFederation that should be imported. Refer to the {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomUserFederation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "keycloak_custom_user_federation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/keycloak/keycloak/5.5.0/docs/resources/custom_user_federation keycloak_custom_user_federation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomUserFederationConfig
  */
  public constructor(scope: Construct, id: string, config: CustomUserFederationConfig) {
    super(scope, id, {
      terraformResourceType: 'keycloak_custom_user_federation',
      terraformGeneratorMetadata: {
        providerName: 'keycloak',
        providerVersion: '5.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cachePolicy = config.cachePolicy;
    this._changedSyncPeriod = config.changedSyncPeriod;
    this._config = config.config;
    this._enabled = config.enabled;
    this._fullSyncPeriod = config.fullSyncPeriod;
    this._id = config.id;
    this._name = config.name;
    this._parentId = config.parentId;
    this._priority = config.priority;
    this._providerId = config.providerId;
    this._realmId = config.realmId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_policy - computed: false, optional: true, required: false
  private _cachePolicy?: string; 
  public get cachePolicy() {
    return this.getStringAttribute('cache_policy');
  }
  public set cachePolicy(value: string) {
    this._cachePolicy = value;
  }
  public resetCachePolicy() {
    this._cachePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cachePolicyInput() {
    return this._cachePolicy;
  }

  // changed_sync_period - computed: false, optional: true, required: false
  private _changedSyncPeriod?: number; 
  public get changedSyncPeriod() {
    return this.getNumberAttribute('changed_sync_period');
  }
  public set changedSyncPeriod(value: number) {
    this._changedSyncPeriod = value;
  }
  public resetChangedSyncPeriod() {
    this._changedSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changedSyncPeriodInput() {
    return this._changedSyncPeriod;
  }

  // config - computed: false, optional: true, required: false
  private _config?: { [key: string]: string }; 
  public get config() {
    return this.getStringMapAttribute('config');
  }
  public set config(value: { [key: string]: string }) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
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

  // full_sync_period - computed: false, optional: true, required: false
  private _fullSyncPeriod?: number; 
  public get fullSyncPeriod() {
    return this.getNumberAttribute('full_sync_period');
  }
  public set fullSyncPeriod(value: number) {
    this._fullSyncPeriod = value;
  }
  public resetFullSyncPeriod() {
    this._fullSyncPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullSyncPeriodInput() {
    return this._fullSyncPeriod;
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

  // parent_id - computed: true, optional: true, required: false
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  public resetParentId() {
    this._parentId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // provider_id - computed: false, optional: false, required: true
  private _providerId?: string; 
  public get providerId() {
    return this.getStringAttribute('provider_id');
  }
  public set providerId(value: string) {
    this._providerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerIdInput() {
    return this._providerId;
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_policy: cdktf.stringToTerraform(this._cachePolicy),
      changed_sync_period: cdktf.numberToTerraform(this._changedSyncPeriod),
      config: cdktf.hashMapper(cdktf.stringToTerraform)(this._config),
      enabled: cdktf.booleanToTerraform(this._enabled),
      full_sync_period: cdktf.numberToTerraform(this._fullSyncPeriod),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      priority: cdktf.numberToTerraform(this._priority),
      provider_id: cdktf.stringToTerraform(this._providerId),
      realm_id: cdktf.stringToTerraform(this._realmId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_policy: {
        value: cdktf.stringToHclTerraform(this._cachePolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      changed_sync_period: {
        value: cdktf.numberToHclTerraform(this._changedSyncPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._config),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      full_sync_period: {
        value: cdktf.numberToHclTerraform(this._fullSyncPeriod),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      provider_id: {
        value: cdktf.stringToHclTerraform(this._providerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
