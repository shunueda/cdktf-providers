// https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface KibanaSecurityExceptionListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Describes the exception list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#description KibanaSecurityExceptionList#description}
  */
  readonly description: string;
  /**
  * The exception list's human readable string identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#list_id KibanaSecurityExceptionList#list_id}
  */
  readonly listId?: string;
  /**
  * Placeholder for metadata about the list container as JSON string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#meta KibanaSecurityExceptionList#meta}
  */
  readonly meta?: string;
  /**
  * The name of the exception list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#name KibanaSecurityExceptionList#name}
  */
  readonly name: string;
  /**
  * Determines whether the exception list is available in all Kibana spaces or just the space in which it is created. Can be `single` (default) or `agnostic`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#namespace_type KibanaSecurityExceptionList#namespace_type}
  */
  readonly namespaceType?: string;
  /**
  * Array of OS types for which the exceptions apply. Valid values: `linux`, `macos`, `windows`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#os_types KibanaSecurityExceptionList#os_types}
  */
  readonly osTypes?: string[];
  /**
  * An identifier for the space. If space_id is not provided, the default space is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#space_id KibanaSecurityExceptionList#space_id}
  */
  readonly spaceId?: string;
  /**
  * String array containing words and phrases to help categorize exception containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#tags KibanaSecurityExceptionList#tags}
  */
  readonly tags?: string[];
  /**
  * The type of exception list. Can be one of: `detection`, `endpoint`, `endpoint_trusted_apps`, `endpoint_events`, `endpoint_host_isolation_exceptions`, `endpoint_blocklists`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#type KibanaSecurityExceptionList#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list elasticstack_kibana_security_exception_list}
*/
export class KibanaSecurityExceptionList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "elasticstack_kibana_security_exception_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a KibanaSecurityExceptionList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the KibanaSecurityExceptionList to import
  * @param importFromId The id of the existing KibanaSecurityExceptionList that should be imported. Refer to the {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the KibanaSecurityExceptionList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "elasticstack_kibana_security_exception_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/elastic/elasticstack/0.13.0/docs/resources/kibana_security_exception_list elasticstack_kibana_security_exception_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options KibanaSecurityExceptionListConfig
  */
  public constructor(scope: Construct, id: string, config: KibanaSecurityExceptionListConfig) {
    super(scope, id, {
      terraformResourceType: 'elasticstack_kibana_security_exception_list',
      terraformGeneratorMetadata: {
        providerName: 'elasticstack',
        providerVersion: '0.13.0',
        providerVersionConstraint: '0.13.0'
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
    this._listId = config.listId;
    this._meta = config.meta;
    this._name = config.name;
    this._namespaceType = config.namespaceType;
    this._osTypes = config.osTypes;
    this._spaceId = config.spaceId;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // immutable - computed: true, optional: false, required: false
  public get immutable() {
    return this.getBooleanAttribute('immutable');
  }

  // list_id - computed: true, optional: true, required: false
  private _listId?: string; 
  public get listId() {
    return this.getStringAttribute('list_id');
  }
  public set listId(value: string) {
    this._listId = value;
  }
  public resetListId() {
    this._listId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listIdInput() {
    return this._listId;
  }

  // meta - computed: false, optional: true, required: false
  private _meta?: string; 
  public get meta() {
    return this.getStringAttribute('meta');
  }
  public set meta(value: string) {
    this._meta = value;
  }
  public resetMeta() {
    this._meta = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metaInput() {
    return this._meta;
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

  // namespace_type - computed: true, optional: true, required: false
  private _namespaceType?: string; 
  public get namespaceType() {
    return this.getStringAttribute('namespace_type');
  }
  public set namespaceType(value: string) {
    this._namespaceType = value;
  }
  public resetNamespaceType() {
    this._namespaceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceTypeInput() {
    return this._namespaceType;
  }

  // os_types - computed: false, optional: true, required: false
  private _osTypes?: string[]; 
  public get osTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('os_types'));
  }
  public set osTypes(value: string[]) {
    this._osTypes = value;
  }
  public resetOsTypes() {
    this._osTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypesInput() {
    return this._osTypes;
  }

  // space_id - computed: true, optional: true, required: false
  private _spaceId?: string; 
  public get spaceId() {
    return this.getStringAttribute('space_id');
  }
  public set spaceId(value: string) {
    this._spaceId = value;
  }
  public resetSpaceId() {
    this._spaceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spaceIdInput() {
    return this._spaceId;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // tie_breaker_id - computed: true, optional: false, required: false
  public get tieBreakerId() {
    return this.getStringAttribute('tie_breaker_id');
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

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      list_id: cdktf.stringToTerraform(this._listId),
      meta: cdktf.stringToTerraform(this._meta),
      name: cdktf.stringToTerraform(this._name),
      namespace_type: cdktf.stringToTerraform(this._namespaceType),
      os_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._osTypes),
      space_id: cdktf.stringToTerraform(this._spaceId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
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
      list_id: {
        value: cdktf.stringToHclTerraform(this._listId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      meta: {
        value: cdktf.stringToHclTerraform(this._meta),
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
      namespace_type: {
        value: cdktf.stringToHclTerraform(this._namespaceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      os_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._osTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      space_id: {
        value: cdktf.stringToHclTerraform(this._spaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
