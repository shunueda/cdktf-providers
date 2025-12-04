// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformCmsActionCreateapiConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#api_name PlatformCmsActionCreateapi#api_name}
  */
  readonly apiName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#build PlatformCmsActionCreateapi#build}
  */
  readonly buildAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#contract_address PlatformCmsActionCreateapi#contract_address}
  */
  readonly contractAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#description PlatformCmsActionCreateapi#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#environment PlatformCmsActionCreateapi#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#firefly_namespace PlatformCmsActionCreateapi#firefly_namespace}
  */
  readonly fireflyNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#ignore_destroy PlatformCmsActionCreateapi#ignore_destroy}
  */
  readonly ignoreDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#name PlatformCmsActionCreateapi#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#publish PlatformCmsActionCreateapi#publish}
  */
  readonly publish?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#service PlatformCmsActionCreateapi#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi kaleido_platform_cms_action_createapi}
*/
export class PlatformCmsActionCreateapi extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_cms_action_createapi";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformCmsActionCreateapi resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformCmsActionCreateapi to import
  * @param importFromId The id of the existing PlatformCmsActionCreateapi that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformCmsActionCreateapi to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_cms_action_createapi", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_createapi kaleido_platform_cms_action_createapi} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformCmsActionCreateapiConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformCmsActionCreateapiConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_cms_action_createapi',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.2.0',
        providerVersionConstraint: '1.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiName = config.apiName;
    this._build = config.buildAttribute;
    this._contractAddress = config.contractAddress;
    this._description = config.description;
    this._environment = config.environment;
    this._fireflyNamespace = config.fireflyNamespace;
    this._ignoreDestroy = config.ignoreDestroy;
    this._name = config.name;
    this._publish = config.publish;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_id - computed: true, optional: false, required: false
  public get apiId() {
    return this.getStringAttribute('api_id');
  }

  // api_name - computed: false, optional: false, required: true
  private _apiName?: string; 
  public get apiName() {
    return this.getStringAttribute('api_name');
  }
  public set apiName(value: string) {
    this._apiName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiNameInput() {
    return this._apiName;
  }

  // build - computed: false, optional: false, required: true
  private _build?: string; 
  public get buildAttribute() {
    return this.getStringAttribute('build');
  }
  public set buildAttribute(value: string) {
    this._build = value;
  }
  // Temporarily expose input value. Use with caution.
  public get buildAttributeInput() {
    return this._build;
  }

  // contract_address - computed: false, optional: true, required: false
  private _contractAddress?: string; 
  public get contractAddress() {
    return this.getStringAttribute('contract_address');
  }
  public set contractAddress(value: string) {
    this._contractAddress = value;
  }
  public resetContractAddress() {
    this._contractAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractAddressInput() {
    return this._contractAddress;
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

  // environment - computed: false, optional: false, required: true
  private _environment?: string; 
  public get environment() {
    return this.getStringAttribute('environment');
  }
  public set environment(value: string) {
    this._environment = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentInput() {
    return this._environment;
  }

  // firefly_namespace - computed: false, optional: false, required: true
  private _fireflyNamespace?: string; 
  public get fireflyNamespace() {
    return this.getStringAttribute('firefly_namespace');
  }
  public set fireflyNamespace(value: string) {
    this._fireflyNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fireflyNamespaceInput() {
    return this._fireflyNamespace;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ignore_destroy - computed: false, optional: true, required: false
  private _ignoreDestroy?: boolean | cdktf.IResolvable; 
  public get ignoreDestroy() {
    return this.getBooleanAttribute('ignore_destroy');
  }
  public set ignoreDestroy(value: boolean | cdktf.IResolvable) {
    this._ignoreDestroy = value;
  }
  public resetIgnoreDestroy() {
    this._ignoreDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDestroyInput() {
    return this._ignoreDestroy;
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

  // publish - computed: false, optional: true, required: false
  private _publish?: string; 
  public get publish() {
    return this.getStringAttribute('publish');
  }
  public set publish(value: string) {
    this._publish = value;
  }
  public resetPublish() {
    this._publish = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publishInput() {
    return this._publish;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_name: cdktf.stringToTerraform(this._apiName),
      build: cdktf.stringToTerraform(this._build),
      contract_address: cdktf.stringToTerraform(this._contractAddress),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      firefly_namespace: cdktf.stringToTerraform(this._fireflyNamespace),
      ignore_destroy: cdktf.booleanToTerraform(this._ignoreDestroy),
      name: cdktf.stringToTerraform(this._name),
      publish: cdktf.stringToTerraform(this._publish),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_name: {
        value: cdktf.stringToHclTerraform(this._apiName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      build: {
        value: cdktf.stringToHclTerraform(this._build),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_address: {
        value: cdktf.stringToHclTerraform(this._contractAddress),
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
      environment: {
        value: cdktf.stringToHclTerraform(this._environment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      firefly_namespace: {
        value: cdktf.stringToHclTerraform(this._fireflyNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ignore_destroy: {
        value: cdktf.booleanToHclTerraform(this._ignoreDestroy),
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
      publish: {
        value: cdktf.stringToHclTerraform(this._publish),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
