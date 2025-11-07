// https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of human-friendly, unique identifiers for the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#aliases Service#aliases}
  */
  readonly aliases?: string[];
  /**
  * The relative path from which to fetch the API document. If null, the API document is fetched from the account's default path.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#api_document_path Service#api_document_path}
  */
  readonly apiDocumentPath?: string;
  /**
  * A brief description of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#description Service#description}
  */
  readonly description?: string;
  /**
  * The primary software development framework that the service uses.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#framework Service#framework}
  */
  readonly framework?: string;
  /**
  * The primary programming language that the service is written in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#language Service#language}
  */
  readonly language?: string;
  /**
  * The lifecycle stage of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#lifecycle_alias Service#lifecycle_alias}
  */
  readonly lifecycleAlias?: string;
  /**
  * The display name of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#name Service#name}
  */
  readonly name: string;
  /**
  * Additional information about the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#note Service#note}
  */
  readonly note?: string;
  /**
  * The team that owns the service. ID or Alias may be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#owner Service#owner}
  */
  readonly owner?: string;
  /**
  * The id or alias of the parent system of this service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#parent Service#parent}
  */
  readonly parent?: string;
  /**
  * The API document source (PULL or PUSH) used to determine the displayed document. If null, defaults to PUSH.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#preferred_api_document_source Service#preferred_api_document_source}
  */
  readonly preferredApiDocumentSource?: string;
  /**
  * A product is an application that your end user interacts with. Multiple services can work together to power a single product.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#product Service#product}
  */
  readonly product?: string;
  /**
  * A list of tags applied to the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#tags Service#tags}
  */
  readonly tags?: string[];
  /**
  * The software tier that the service belongs to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#tier_alias Service#tier_alias}
  */
  readonly tierAlias?: string;
  /**
  * The component type of the service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#type Service#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service opslevel_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.6.3/docs/resources/service opslevel_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig) {
    super(scope, id, {
      terraformResourceType: 'opslevel_service',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.6.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aliases = config.aliases;
    this._apiDocumentPath = config.apiDocumentPath;
    this._description = config.description;
    this._framework = config.framework;
    this._language = config.language;
    this._lifecycleAlias = config.lifecycleAlias;
    this._name = config.name;
    this._note = config.note;
    this._owner = config.owner;
    this._parent = config.parent;
    this._preferredApiDocumentSource = config.preferredApiDocumentSource;
    this._product = config.product;
    this._tags = config.tags;
    this._tierAlias = config.tierAlias;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return cdktf.Fn.tolist(this.getListAttribute('aliases'));
  }
  public set aliases(value: string[]) {
    this._aliases = value;
  }
  public resetAliases() {
    this._aliases = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasesInput() {
    return this._aliases;
  }

  // api_document_path - computed: false, optional: true, required: false
  private _apiDocumentPath?: string; 
  public get apiDocumentPath() {
    return this.getStringAttribute('api_document_path');
  }
  public set apiDocumentPath(value: string) {
    this._apiDocumentPath = value;
  }
  public resetApiDocumentPath() {
    this._apiDocumentPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiDocumentPathInput() {
    return this._apiDocumentPath;
  }

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

  // framework - computed: false, optional: true, required: false
  private _framework?: string; 
  public get framework() {
    return this.getStringAttribute('framework');
  }
  public set framework(value: string) {
    this._framework = value;
  }
  public resetFramework() {
    this._framework = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameworkInput() {
    return this._framework;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // lifecycle_alias - computed: false, optional: true, required: false
  private _lifecycleAlias?: string; 
  public get lifecycleAlias() {
    return this.getStringAttribute('lifecycle_alias');
  }
  public set lifecycleAlias(value: string) {
    this._lifecycleAlias = value;
  }
  public resetLifecycleAlias() {
    this._lifecycleAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lifecycleAliasInput() {
    return this._lifecycleAlias;
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

  // note - computed: false, optional: true, required: false
  private _note?: string; 
  public get note() {
    return this.getStringAttribute('note');
  }
  public set note(value: string) {
    this._note = value;
  }
  public resetNote() {
    this._note = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noteInput() {
    return this._note;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // parent - computed: false, optional: true, required: false
  private _parent?: string; 
  public get parent() {
    return this.getStringAttribute('parent');
  }
  public set parent(value: string) {
    this._parent = value;
  }
  public resetParent() {
    this._parent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentInput() {
    return this._parent;
  }

  // preferred_api_document_source - computed: false, optional: true, required: false
  private _preferredApiDocumentSource?: string; 
  public get preferredApiDocumentSource() {
    return this.getStringAttribute('preferred_api_document_source');
  }
  public set preferredApiDocumentSource(value: string) {
    this._preferredApiDocumentSource = value;
  }
  public resetPreferredApiDocumentSource() {
    this._preferredApiDocumentSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredApiDocumentSourceInput() {
    return this._preferredApiDocumentSource;
  }

  // product - computed: false, optional: true, required: false
  private _product?: string; 
  public get product() {
    return this.getStringAttribute('product');
  }
  public set product(value: string) {
    this._product = value;
  }
  public resetProduct() {
    this._product = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get productInput() {
    return this._product;
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

  // tier_alias - computed: false, optional: true, required: false
  private _tierAlias?: string; 
  public get tierAlias() {
    return this.getStringAttribute('tier_alias');
  }
  public set tierAlias(value: string) {
    this._tierAlias = value;
  }
  public resetTierAlias() {
    this._tierAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierAliasInput() {
    return this._tierAlias;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      api_document_path: cdktf.stringToTerraform(this._apiDocumentPath),
      description: cdktf.stringToTerraform(this._description),
      framework: cdktf.stringToTerraform(this._framework),
      language: cdktf.stringToTerraform(this._language),
      lifecycle_alias: cdktf.stringToTerraform(this._lifecycleAlias),
      name: cdktf.stringToTerraform(this._name),
      note: cdktf.stringToTerraform(this._note),
      owner: cdktf.stringToTerraform(this._owner),
      parent: cdktf.stringToTerraform(this._parent),
      preferred_api_document_source: cdktf.stringToTerraform(this._preferredApiDocumentSource),
      product: cdktf.stringToTerraform(this._product),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      tier_alias: cdktf.stringToTerraform(this._tierAlias),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      api_document_path: {
        value: cdktf.stringToHclTerraform(this._apiDocumentPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      framework: {
        value: cdktf.stringToHclTerraform(this._framework),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lifecycle_alias: {
        value: cdktf.stringToHclTerraform(this._lifecycleAlias),
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
      note: {
        value: cdktf.stringToHclTerraform(this._note),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent: {
        value: cdktf.stringToHclTerraform(this._parent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      preferred_api_document_source: {
        value: cdktf.stringToHclTerraform(this._preferredApiDocumentSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      product: {
        value: cdktf.stringToHclTerraform(this._product),
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
      tier_alias: {
        value: cdktf.stringToHclTerraform(this._tierAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
