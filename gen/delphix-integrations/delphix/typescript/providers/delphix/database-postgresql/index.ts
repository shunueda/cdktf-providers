// https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabasePostgresqlConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#engine_value DatabasePostgresql#engine_value}
  */
  readonly engineValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#environment_value DatabasePostgresql#environment_value}
  */
  readonly environmentValue?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#name DatabasePostgresql#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#repository_value DatabasePostgresql#repository_value}
  */
  readonly repositoryValue: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#tags DatabasePostgresql#tags}
  */
  readonly tags?: DatabasePostgresqlTags[] | cdktf.IResolvable;
}
export interface DatabasePostgresqlTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#key DatabasePostgresql#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#value DatabasePostgresql#value}
  */
  readonly value?: string;
}

export function databasePostgresqlTagsToTerraform(struct?: DatabasePostgresqlTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function databasePostgresqlTagsToHclTerraform(struct?: DatabasePostgresqlTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DatabasePostgresqlTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DatabasePostgresqlTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DatabasePostgresqlTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DatabasePostgresqlTagsList extends cdktf.ComplexList {
  public internalValue? : DatabasePostgresqlTags[] | cdktf.IResolvable

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
  public get(index: number): DatabasePostgresqlTagsOutputReference {
    return new DatabasePostgresqlTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql delphix_database_postgresql}
*/
export class DatabasePostgresql extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "delphix_database_postgresql";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatabasePostgresql resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatabasePostgresql to import
  * @param importFromId The id of the existing DatabasePostgresql that should be imported. Refer to the {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatabasePostgresql to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "delphix_database_postgresql", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/delphix-integrations/delphix/4.1.0/docs/resources/database_postgresql delphix_database_postgresql} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabasePostgresqlConfig
  */
  public constructor(scope: Construct, id: string, config: DatabasePostgresqlConfig) {
    super(scope, id, {
      terraformResourceType: 'delphix_database_postgresql',
      terraformGeneratorMetadata: {
        providerName: 'delphix',
        providerVersion: '4.1.0',
        providerVersionConstraint: '4.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._engineValue = config.engineValue;
    this._environmentValue = config.environmentValue;
    this._name = config.name;
    this._repositoryValue = config.repositoryValue;
    this._tags.internalValue = config.tags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // appdata_source_type - computed: true, optional: false, required: false
  public get appdataSourceType() {
    return this.getStringAttribute('appdata_source_type');
  }

  // data_uuid - computed: true, optional: false, required: false
  public get dataUuid() {
    return this.getStringAttribute('data_uuid');
  }

  // database_type - computed: true, optional: false, required: false
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }

  // database_version - computed: true, optional: false, required: false
  public get databaseVersion() {
    return this.getStringAttribute('database_version');
  }

  // engine_value - computed: false, optional: true, required: false
  private _engineValue?: string; 
  public get engineValue() {
    return this.getStringAttribute('engine_value');
  }
  public set engineValue(value: string) {
    this._engineValue = value;
  }
  public resetEngineValue() {
    this._engineValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get engineValueInput() {
    return this._engineValue;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }

  // environment_value - computed: false, optional: true, required: false
  private _environmentValue?: string; 
  public get environmentValue() {
    return this.getStringAttribute('environment_value');
  }
  public set environmentValue(value: string) {
    this._environmentValue = value;
  }
  public resetEnvironmentValue() {
    this._environmentValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentValueInput() {
    return this._environmentValue;
  }

  // fqdn - computed: true, optional: false, required: false
  public get fqdn() {
    return this.getStringAttribute('fqdn');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // is_dsource - computed: true, optional: false, required: false
  public get isDsource() {
    return this.getBooleanAttribute('is_dsource');
  }

  // is_replica - computed: true, optional: false, required: false
  public get isReplica() {
    return this.getBooleanAttribute('is_replica');
  }

  // jdbc_connection_string - computed: true, optional: false, required: false
  public get jdbcConnectionString() {
    return this.getStringAttribute('jdbc_connection_string');
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

  // namespace_id - computed: true, optional: false, required: false
  public get namespaceId() {
    return this.getStringAttribute('namespace_id');
  }

  // namespace_name - computed: true, optional: false, required: false
  public get namespaceName() {
    return this.getStringAttribute('namespace_name');
  }

  // plugin_version - computed: true, optional: false, required: false
  public get pluginVersion() {
    return this.getStringAttribute('plugin_version');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // repository_value - computed: false, optional: false, required: true
  private _repositoryValue?: string; 
  public get repositoryValue() {
    return this.getStringAttribute('repository_value');
  }
  public set repositoryValue(value: string) {
    this._repositoryValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryValueInput() {
    return this._repositoryValue;
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }

  // toolkit_id - computed: true, optional: false, required: false
  public get toolkitId() {
    return this.getStringAttribute('toolkit_id');
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DatabasePostgresqlTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DatabasePostgresqlTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      engine_value: cdktf.stringToTerraform(this._engineValue),
      environment_value: cdktf.stringToTerraform(this._environmentValue),
      name: cdktf.stringToTerraform(this._name),
      repository_value: cdktf.stringToTerraform(this._repositoryValue),
      tags: cdktf.listMapper(databasePostgresqlTagsToTerraform, true)(this._tags.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      engine_value: {
        value: cdktf.stringToHclTerraform(this._engineValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_value: {
        value: cdktf.stringToHclTerraform(this._environmentValue),
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
      repository_value: {
        value: cdktf.stringToHclTerraform(this._repositoryValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(databasePostgresqlTagsToHclTerraform, true)(this._tags.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DatabasePostgresqlTagsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
