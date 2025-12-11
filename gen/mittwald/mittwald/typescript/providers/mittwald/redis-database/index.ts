// https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RedisDatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#configuration RedisDatabase#configuration}
  */
  readonly configuration?: RedisDatabaseConfiguration;
  /**
  * Description for your redis_database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#description RedisDatabase#description}
  */
  readonly description: string;
  /**
  * The ID of the project the redis_database belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#project_id RedisDatabase#project_id}
  */
  readonly projectId: string;
  /**
  * Version of the database, e.g. `7.0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#version RedisDatabase#version}
  */
  readonly version: string;
}
export interface RedisDatabaseConfiguration {
  /**
  * Additional command-line flags that should be passed to the Redis container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#additional_flags RedisDatabase#additional_flags}
  */
  readonly additionalFlags?: string[];
  /**
  * The database's maximum memory in MiB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#max_memory_mb RedisDatabase#max_memory_mb}
  */
  readonly maxMemoryMb?: number;
  /**
  * The database's key eviction policy. See the Redis documentation on key evictions for more information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#max_memory_policy RedisDatabase#max_memory_policy}
  */
  readonly maxMemoryPolicy?: string;
  /**
  * Enable persistent storage for this database
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#persistent RedisDatabase#persistent}
  */
  readonly persistent?: boolean | cdktf.IResolvable;
}

export function redisDatabaseConfigurationToTerraform(struct?: RedisDatabaseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_flags: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.additionalFlags),
    max_memory_mb: cdktf.numberToTerraform(struct!.maxMemoryMb),
    max_memory_policy: cdktf.stringToTerraform(struct!.maxMemoryPolicy),
    persistent: cdktf.booleanToTerraform(struct!.persistent),
  }
}


export function redisDatabaseConfigurationToHclTerraform(struct?: RedisDatabaseConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_flags: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.additionalFlags),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_memory_mb: {
      value: cdktf.numberToHclTerraform(struct!.maxMemoryMb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory_policy: {
      value: cdktf.stringToHclTerraform(struct!.maxMemoryPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persistent: {
      value: cdktf.booleanToHclTerraform(struct!.persistent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RedisDatabaseConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RedisDatabaseConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalFlags = this._additionalFlags;
    }
    if (this._maxMemoryMb !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryMb = this._maxMemoryMb;
    }
    if (this._maxMemoryPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemoryPolicy = this._maxMemoryPolicy;
    }
    if (this._persistent !== undefined) {
      hasAnyValues = true;
      internalValueResult.persistent = this._persistent;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RedisDatabaseConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._additionalFlags = undefined;
      this._maxMemoryMb = undefined;
      this._maxMemoryPolicy = undefined;
      this._persistent = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._additionalFlags = value.additionalFlags;
      this._maxMemoryMb = value.maxMemoryMb;
      this._maxMemoryPolicy = value.maxMemoryPolicy;
      this._persistent = value.persistent;
    }
  }

  // additional_flags - computed: false, optional: true, required: false
  private _additionalFlags?: string[]; 
  public get additionalFlags() {
    return this.getListAttribute('additional_flags');
  }
  public set additionalFlags(value: string[]) {
    this._additionalFlags = value;
  }
  public resetAdditionalFlags() {
    this._additionalFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalFlagsInput() {
    return this._additionalFlags;
  }

  // max_memory_mb - computed: false, optional: true, required: false
  private _maxMemoryMb?: number; 
  public get maxMemoryMb() {
    return this.getNumberAttribute('max_memory_mb');
  }
  public set maxMemoryMb(value: number) {
    this._maxMemoryMb = value;
  }
  public resetMaxMemoryMb() {
    this._maxMemoryMb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryMbInput() {
    return this._maxMemoryMb;
  }

  // max_memory_policy - computed: false, optional: true, required: false
  private _maxMemoryPolicy?: string; 
  public get maxMemoryPolicy() {
    return this.getStringAttribute('max_memory_policy');
  }
  public set maxMemoryPolicy(value: string) {
    this._maxMemoryPolicy = value;
  }
  public resetMaxMemoryPolicy() {
    this._maxMemoryPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryPolicyInput() {
    return this._maxMemoryPolicy;
  }

  // persistent - computed: false, optional: true, required: false
  private _persistent?: boolean | cdktf.IResolvable; 
  public get persistent() {
    return this.getBooleanAttribute('persistent');
  }
  public set persistent(value: boolean | cdktf.IResolvable) {
    this._persistent = value;
  }
  public resetPersistent() {
    this._persistent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get persistentInput() {
    return this._persistent;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database mittwald_redis_database}
*/
export class RedisDatabase extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mittwald_redis_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RedisDatabase resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RedisDatabase to import
  * @param importFromId The id of the existing RedisDatabase that should be imported. Refer to the {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RedisDatabase to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mittwald_redis_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/mittwald/mittwald/1.5.0/docs/resources/redis_database mittwald_redis_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RedisDatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: RedisDatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'mittwald_redis_database',
      terraformGeneratorMetadata: {
        providerName: 'mittwald',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._configuration.internalValue = config.configuration;
    this._description = config.description;
    this._projectId = config.projectId;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // configuration - computed: false, optional: true, required: false
  private _configuration = new RedisDatabaseConfigurationOutputReference(this, "configuration");
  public get configuration() {
    return this._configuration;
  }
  public putConfiguration(value: RedisDatabaseConfiguration) {
    this._configuration.internalValue = value;
  }
  public resetConfiguration() {
    this._configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration.internalValue;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      configuration: redisDatabaseConfigurationToTerraform(this._configuration.internalValue),
      description: cdktf.stringToTerraform(this._description),
      project_id: cdktf.stringToTerraform(this._projectId),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      configuration: {
        value: redisDatabaseConfigurationToHclTerraform(this._configuration.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RedisDatabaseConfiguration",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
