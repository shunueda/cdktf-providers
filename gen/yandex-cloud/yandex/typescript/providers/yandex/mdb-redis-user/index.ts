// https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MdbRedisUserConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the cluster to which user belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#cluster_id MdbRedisUser#cluster_id}
  */
  readonly clusterId: string;
  /**
  * Is redis user enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#enabled MdbRedisUser#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#name MdbRedisUser#name}
  */
  readonly name: string;
  /**
  * Set of user passwords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#passwords MdbRedisUser#passwords}
  */
  readonly passwords: string[];
  /**
  * Set of permissions granted to the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#permissions MdbRedisUser#permissions}
  */
  readonly permissions?: MdbRedisUserPermissions;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#timeouts MdbRedisUser#timeouts}
  */
  readonly timeouts?: MdbRedisUserTimeouts;
}
export interface MdbRedisUserPermissions {
  /**
  * Command categories user has permissions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#categories MdbRedisUser#categories}
  */
  readonly categories?: string;
  /**
  * Commands user can execute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#commands MdbRedisUser#commands}
  */
  readonly commands?: string;
  /**
  * Keys patterns user has permission to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#patterns MdbRedisUser#patterns}
  */
  readonly patterns?: string;
  /**
  * Channel patterns user has permissions to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#pub_sub_channels MdbRedisUser#pub_sub_channels}
  */
  readonly pubSubChannels?: string;
  /**
  * SanitizePayload parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#sanitize_payload MdbRedisUser#sanitize_payload}
  */
  readonly sanitizePayload?: string;
}

export function mdbRedisUserPermissionsToTerraform(struct?: MdbRedisUserPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    categories: cdktf.stringToTerraform(struct!.categories),
    commands: cdktf.stringToTerraform(struct!.commands),
    patterns: cdktf.stringToTerraform(struct!.patterns),
    pub_sub_channels: cdktf.stringToTerraform(struct!.pubSubChannels),
    sanitize_payload: cdktf.stringToTerraform(struct!.sanitizePayload),
  }
}


export function mdbRedisUserPermissionsToHclTerraform(struct?: MdbRedisUserPermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    categories: {
      value: cdktf.stringToHclTerraform(struct!.categories),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    commands: {
      value: cdktf.stringToHclTerraform(struct!.commands),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patterns: {
      value: cdktf.stringToHclTerraform(struct!.patterns),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pub_sub_channels: {
      value: cdktf.stringToHclTerraform(struct!.pubSubChannels),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sanitize_payload: {
      value: cdktf.stringToHclTerraform(struct!.sanitizePayload),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MdbRedisUserPermissionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisUserPermissions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._categories !== undefined) {
      hasAnyValues = true;
      internalValueResult.categories = this._categories;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._patterns !== undefined) {
      hasAnyValues = true;
      internalValueResult.patterns = this._patterns;
    }
    if (this._pubSubChannels !== undefined) {
      hasAnyValues = true;
      internalValueResult.pubSubChannels = this._pubSubChannels;
    }
    if (this._sanitizePayload !== undefined) {
      hasAnyValues = true;
      internalValueResult.sanitizePayload = this._sanitizePayload;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MdbRedisUserPermissions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._categories = undefined;
      this._commands = undefined;
      this._patterns = undefined;
      this._pubSubChannels = undefined;
      this._sanitizePayload = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._categories = value.categories;
      this._commands = value.commands;
      this._patterns = value.patterns;
      this._pubSubChannels = value.pubSubChannels;
      this._sanitizePayload = value.sanitizePayload;
    }
  }

  // categories - computed: true, optional: true, required: false
  private _categories?: string; 
  public get categories() {
    return this.getStringAttribute('categories');
  }
  public set categories(value: string) {
    this._categories = value;
  }
  public resetCategories() {
    this._categories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoriesInput() {
    return this._categories;
  }

  // commands - computed: true, optional: true, required: false
  private _commands?: string; 
  public get commands() {
    return this.getStringAttribute('commands');
  }
  public set commands(value: string) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // patterns - computed: true, optional: true, required: false
  private _patterns?: string; 
  public get patterns() {
    return this.getStringAttribute('patterns');
  }
  public set patterns(value: string) {
    this._patterns = value;
  }
  public resetPatterns() {
    this._patterns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patternsInput() {
    return this._patterns;
  }

  // pub_sub_channels - computed: true, optional: true, required: false
  private _pubSubChannels?: string; 
  public get pubSubChannels() {
    return this.getStringAttribute('pub_sub_channels');
  }
  public set pubSubChannels(value: string) {
    this._pubSubChannels = value;
  }
  public resetPubSubChannels() {
    this._pubSubChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pubSubChannelsInput() {
    return this._pubSubChannels;
  }

  // sanitize_payload - computed: true, optional: true, required: false
  private _sanitizePayload?: string; 
  public get sanitizePayload() {
    return this.getStringAttribute('sanitize_payload');
  }
  public set sanitizePayload(value: string) {
    this._sanitizePayload = value;
  }
  public resetSanitizePayload() {
    this._sanitizePayload = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sanitizePayloadInput() {
    return this._sanitizePayload;
  }
}
export interface MdbRedisUserTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#create MdbRedisUser#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#delete MdbRedisUser#delete}
  */
  readonly delete?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#update MdbRedisUser#update}
  */
  readonly update?: string;
}

export function mdbRedisUserTimeoutsToTerraform(struct?: MdbRedisUserTimeouts | cdktf.IResolvable): any {
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


export function mdbRedisUserTimeoutsToHclTerraform(struct?: MdbRedisUserTimeouts | cdktf.IResolvable): any {
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

export class MdbRedisUserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MdbRedisUserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: MdbRedisUserTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user yandex_mdb_redis_user}
*/
export class MdbRedisUser extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_mdb_redis_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MdbRedisUser resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MdbRedisUser to import
  * @param importFromId The id of the existing MdbRedisUser that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MdbRedisUser to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_mdb_redis_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.173.0/docs/resources/mdb_redis_user yandex_mdb_redis_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MdbRedisUserConfig
  */
  public constructor(scope: Construct, id: string, config: MdbRedisUserConfig) {
    super(scope, id, {
      terraformResourceType: 'yandex_mdb_redis_user',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.173.0',
        providerVersionConstraint: '0.173.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clusterId = config.clusterId;
    this._enabled = config.enabled;
    this._name = config.name;
    this._passwords = config.passwords;
    this._permissions.internalValue = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // acl_options - computed: true, optional: false, required: false
  public get aclOptions() {
    return this.getStringAttribute('acl_options');
  }

  // cluster_id - computed: false, optional: false, required: true
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // enabled - computed: true, optional: true, required: false
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // passwords - computed: false, optional: false, required: true
  private _passwords?: string[]; 
  public get passwords() {
    return cdktf.Fn.tolist(this.getListAttribute('passwords'));
  }
  public set passwords(value: string[]) {
    this._passwords = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordsInput() {
    return this._passwords;
  }

  // permissions - computed: true, optional: true, required: false
  private _permissions = new MdbRedisUserPermissionsOutputReference(this, "permissions");
  public get permissions() {
    return this._permissions;
  }
  public putPermissions(value: MdbRedisUserPermissions) {
    this._permissions.internalValue = value;
  }
  public resetPermissions() {
    this._permissions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new MdbRedisUserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: MdbRedisUserTimeouts) {
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
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      enabled: cdktf.booleanToTerraform(this._enabled),
      name: cdktf.stringToTerraform(this._name),
      passwords: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passwords),
      permissions: mdbRedisUserPermissionsToTerraform(this._permissions.internalValue),
      timeouts: mdbRedisUserTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      passwords: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passwords),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      permissions: {
        value: mdbRedisUserPermissionsToHclTerraform(this._permissions.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisUserPermissions",
      },
      timeouts: {
        value: mdbRedisUserTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MdbRedisUserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
