// https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CollectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of accountIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#account_ids Collection#account_ids}
  */
  readonly accountIds?: string[];
  /**
  * List of appIDs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#app_ids Collection#app_ids}
  */
  readonly appIds?: string[];
  /**
  * List of Kubernetes clusters
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#clusters Collection#clusters}
  */
  readonly clusters?: string[];
  /**
  * Color code for the collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#color Collection#color}
  */
  readonly color?: string;
  /**
  * List of containers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#containers Collection#containers}
  */
  readonly containers?: string[];
  /**
  * Free-form text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#description Collection#description}
  */
  readonly description?: string;
  /**
  * List of functions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#functions Collection#functions}
  */
  readonly functions?: string[];
  /**
  * List of hosts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#hosts Collection#hosts}
  */
  readonly hosts?: string[];
  /**
  * List of images
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#images Collection#images}
  */
  readonly images?: string[];
  /**
  * List of labels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#labels Collection#labels}
  */
  readonly labels?: string[];
  /**
  * Datetime when the collection was last modified
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#modified Collection#modified}
  */
  readonly modified?: string;
  /**
  * Collection name. Must be unique
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#name Collection#name}
  */
  readonly name: string;
  /**
  * List of Kubernetes namespaces
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#namespaces Collection#namespaces}
  */
  readonly namespaces?: string[];
  /**
  * User who created or last modified the collection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#owner Collection#owner}
  */
  readonly owner?: string;
  /**
  * Indicates whether this collection originates from Prisma Cloud
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#prisma Collection#prisma}
  */
  readonly prisma?: boolean | cdktf.IResolvable;
  /**
  * Indicates the usage types required
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#required_types Collection#required_types}
  */
  readonly requiredTypes: string[];
  /**
  * Indicates the possible usage types the collection can support
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#supported_types Collection#supported_types}
  */
  readonly supportedTypes?: string[];
  /**
  * Indicates whether this collection was created by the system (i.e., a non user) (true) or a real user (false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#system Collection#system}
  */
  readonly systemAttribute?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection prismacloud-waas_collection}
*/
export class Collection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloud-waas_collection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Collection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Collection to import
  * @param importFromId The id of the existing Collection that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Collection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloud-waas_collection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloud-waas/1.0.4/docs/resources/collection prismacloud-waas_collection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CollectionConfig
  */
  public constructor(scope: Construct, id: string, config: CollectionConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloud-waas_collection',
      terraformGeneratorMetadata: {
        providerName: 'prismacloud-waas',
        providerVersion: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountIds = config.accountIds;
    this._appIds = config.appIds;
    this._clusters = config.clusters;
    this._color = config.color;
    this._containers = config.containers;
    this._description = config.description;
    this._functions = config.functions;
    this._hosts = config.hosts;
    this._images = config.images;
    this._labels = config.labels;
    this._modified = config.modified;
    this._name = config.name;
    this._namespaces = config.namespaces;
    this._owner = config.owner;
    this._prisma = config.prisma;
    this._requiredTypes = config.requiredTypes;
    this._supportedTypes = config.supportedTypes;
    this._system = config.systemAttribute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_ids - computed: false, optional: true, required: false
  private _accountIds?: string[]; 
  public get accountIds() {
    return this.getListAttribute('account_ids');
  }
  public set accountIds(value: string[]) {
    this._accountIds = value;
  }
  public resetAccountIds() {
    this._accountIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdsInput() {
    return this._accountIds;
  }

  // app_ids - computed: false, optional: true, required: false
  private _appIds?: string[]; 
  public get appIds() {
    return this.getListAttribute('app_ids');
  }
  public set appIds(value: string[]) {
    this._appIds = value;
  }
  public resetAppIds() {
    this._appIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdsInput() {
    return this._appIds;
  }

  // clusters - computed: false, optional: true, required: false
  private _clusters?: string[]; 
  public get clusters() {
    return this.getListAttribute('clusters');
  }
  public set clusters(value: string[]) {
    this._clusters = value;
  }
  public resetClusters() {
    this._clusters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clustersInput() {
    return this._clusters;
  }

  // color - computed: true, optional: true, required: false
  private _color?: string; 
  public get color() {
    return this.getStringAttribute('color');
  }
  public set color(value: string) {
    this._color = value;
  }
  public resetColor() {
    this._color = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get colorInput() {
    return this._color;
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: string[]; 
  public get containers() {
    return this.getListAttribute('containers');
  }
  public set containers(value: string[]) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // description - computed: true, optional: true, required: false
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

  // functions - computed: false, optional: true, required: false
  private _functions?: string[]; 
  public get functions() {
    return this.getListAttribute('functions');
  }
  public set functions(value: string[]) {
    this._functions = value;
  }
  public resetFunctions() {
    this._functions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get functionsInput() {
    return this._functions;
  }

  // hosts - computed: false, optional: true, required: false
  private _hosts?: string[]; 
  public get hosts() {
    return this.getListAttribute('hosts');
  }
  public set hosts(value: string[]) {
    this._hosts = value;
  }
  public resetHosts() {
    this._hosts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsInput() {
    return this._hosts;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
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

  // modified - computed: true, optional: true, required: false
  private _modified?: string; 
  public get modified() {
    return this.getStringAttribute('modified');
  }
  public set modified(value: string) {
    this._modified = value;
  }
  public resetModified() {
    this._modified = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiedInput() {
    return this._modified;
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

  // namespaces - computed: false, optional: true, required: false
  private _namespaces?: string[]; 
  public get namespaces() {
    return this.getListAttribute('namespaces');
  }
  public set namespaces(value: string[]) {
    this._namespaces = value;
  }
  public resetNamespaces() {
    this._namespaces = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespacesInput() {
    return this._namespaces;
  }

  // owner - computed: true, optional: true, required: false
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

  // prisma - computed: true, optional: true, required: false
  private _prisma?: boolean | cdktf.IResolvable; 
  public get prisma() {
    return this.getBooleanAttribute('prisma');
  }
  public set prisma(value: boolean | cdktf.IResolvable) {
    this._prisma = value;
  }
  public resetPrisma() {
    this._prisma = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prismaInput() {
    return this._prisma;
  }

  // required_types - computed: false, optional: false, required: true
  private _requiredTypes?: string[]; 
  public get requiredTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('required_types'));
  }
  public set requiredTypes(value: string[]) {
    this._requiredTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredTypesInput() {
    return this._requiredTypes;
  }

  // supported_types - computed: true, optional: true, required: false
  private _supportedTypes?: string[]; 
  public get supportedTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('supported_types'));
  }
  public set supportedTypes(value: string[]) {
    this._supportedTypes = value;
  }
  public resetSupportedTypes() {
    this._supportedTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedTypesInput() {
    return this._supportedTypes;
  }

  // system - computed: true, optional: true, required: false
  private _system?: boolean | cdktf.IResolvable; 
  public get systemAttribute() {
    return this.getBooleanAttribute('system');
  }
  public set systemAttribute(value: boolean | cdktf.IResolvable) {
    this._system = value;
  }
  public resetSystemAttribute() {
    this._system = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAttributeInput() {
    return this._system;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._accountIds),
      app_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._appIds),
      clusters: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clusters),
      color: cdktf.stringToTerraform(this._color),
      containers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._containers),
      description: cdktf.stringToTerraform(this._description),
      functions: cdktf.listMapper(cdktf.stringToTerraform, false)(this._functions),
      hosts: cdktf.listMapper(cdktf.stringToTerraform, false)(this._hosts),
      images: cdktf.listMapper(cdktf.stringToTerraform, false)(this._images),
      labels: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labels),
      modified: cdktf.stringToTerraform(this._modified),
      name: cdktf.stringToTerraform(this._name),
      namespaces: cdktf.listMapper(cdktf.stringToTerraform, false)(this._namespaces),
      owner: cdktf.stringToTerraform(this._owner),
      prisma: cdktf.booleanToTerraform(this._prisma),
      required_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._requiredTypes),
      supported_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supportedTypes),
      system: cdktf.booleanToTerraform(this._system),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._accountIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      app_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._appIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      clusters: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clusters),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      color: {
        value: cdktf.stringToHclTerraform(this._color),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      containers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._containers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      functions: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._functions),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      hosts: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._hosts),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      images: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._images),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      labels: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labels),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      modified: {
        value: cdktf.stringToHclTerraform(this._modified),
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
      namespaces: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._namespaces),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      owner: {
        value: cdktf.stringToHclTerraform(this._owner),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prisma: {
        value: cdktf.booleanToHclTerraform(this._prisma),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      required_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._requiredTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      supported_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supportedTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      system: {
        value: cdktf.booleanToHclTerraform(this._system),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
