// https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceRepositoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * The directory in the repository containing opslevel.yml.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#base_directory ServiceRepository#base_directory}
  */
  readonly baseDirectory?: string;
  /**
  * The name displayed in the UI for the service repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#name ServiceRepository#name}
  */
  readonly name?: string;
  /**
  * The id of the repository that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#repository ServiceRepository#repository}
  */
  readonly repository?: string;
  /**
  * The alias of the repository that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#repository_alias ServiceRepository#repository_alias}
  */
  readonly repositoryAlias?: string;
  /**
  * The id of the service that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#service ServiceRepository#service}
  */
  readonly service?: string;
  /**
  * The alias of the service that this will be added to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#service_alias ServiceRepository#service_alias}
  */
  readonly serviceAlias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository opslevel_service_repository}
*/
export class ServiceRepository extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opslevel_service_repository";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceRepository resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceRepository to import
  * @param importFromId The id of the existing ServiceRepository that should be imported. Refer to the {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceRepository to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opslevel_service_repository", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opslevel/opslevel/1.8.1/docs/resources/service_repository opslevel_service_repository} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceRepositoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceRepositoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'opslevel_service_repository',
      terraformGeneratorMetadata: {
        providerName: 'opslevel',
        providerVersion: '1.8.1',
        providerVersionConstraint: '1.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._baseDirectory = config.baseDirectory;
    this._name = config.name;
    this._repository = config.repository;
    this._repositoryAlias = config.repositoryAlias;
    this._service = config.service;
    this._serviceAlias = config.serviceAlias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // base_directory - computed: false, optional: true, required: false
  private _baseDirectory?: string; 
  public get baseDirectory() {
    return this.getStringAttribute('base_directory');
  }
  public set baseDirectory(value: string) {
    this._baseDirectory = value;
  }
  public resetBaseDirectory() {
    this._baseDirectory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseDirectoryInput() {
    return this._baseDirectory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // repository - computed: false, optional: true, required: false
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  public resetRepository() {
    this._repository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // repository_alias - computed: false, optional: true, required: false
  private _repositoryAlias?: string; 
  public get repositoryAlias() {
    return this.getStringAttribute('repository_alias');
  }
  public set repositoryAlias(value: string) {
    this._repositoryAlias = value;
  }
  public resetRepositoryAlias() {
    this._repositoryAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryAliasInput() {
    return this._repositoryAlias;
  }

  // service - computed: false, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // service_alias - computed: false, optional: true, required: false
  private _serviceAlias?: string; 
  public get serviceAlias() {
    return this.getStringAttribute('service_alias');
  }
  public set serviceAlias(value: string) {
    this._serviceAlias = value;
  }
  public resetServiceAlias() {
    this._serviceAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAliasInput() {
    return this._serviceAlias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      base_directory: cdktf.stringToTerraform(this._baseDirectory),
      name: cdktf.stringToTerraform(this._name),
      repository: cdktf.stringToTerraform(this._repository),
      repository_alias: cdktf.stringToTerraform(this._repositoryAlias),
      service: cdktf.stringToTerraform(this._service),
      service_alias: cdktf.stringToTerraform(this._serviceAlias),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      base_directory: {
        value: cdktf.stringToHclTerraform(this._baseDirectory),
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
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository_alias: {
        value: cdktf.stringToHclTerraform(this._repositoryAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.stringToHclTerraform(this._service),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_alias: {
        value: cdktf.stringToHclTerraform(this._serviceAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
