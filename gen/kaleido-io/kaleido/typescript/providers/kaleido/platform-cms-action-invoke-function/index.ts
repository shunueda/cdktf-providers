// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformCmsActionInvokeFunctionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#build PlatformCmsActionInvokeFunction#build}
  */
  readonly buildAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#contract_address PlatformCmsActionInvokeFunction#contract_address}
  */
  readonly contractAddress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#description PlatformCmsActionInvokeFunction#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#environment PlatformCmsActionInvokeFunction#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#firefly_namespace PlatformCmsActionInvokeFunction#firefly_namespace}
  */
  readonly fireflyNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#ignore_destroy PlatformCmsActionInvokeFunction#ignore_destroy}
  */
  readonly ignoreDestroy?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#method_path PlatformCmsActionInvokeFunction#method_path}
  */
  readonly methodPath: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#name PlatformCmsActionInvokeFunction#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#params_json PlatformCmsActionInvokeFunction#params_json}
  */
  readonly paramsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#service PlatformCmsActionInvokeFunction#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#signing_key PlatformCmsActionInvokeFunction#signing_key}
  */
  readonly signingKey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function kaleido_platform_cms_action_invoke_function}
*/
export class PlatformCmsActionInvokeFunction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_cms_action_invoke_function";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformCmsActionInvokeFunction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformCmsActionInvokeFunction to import
  * @param importFromId The id of the existing PlatformCmsActionInvokeFunction that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformCmsActionInvokeFunction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_cms_action_invoke_function", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_cms_action_invoke_function kaleido_platform_cms_action_invoke_function} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformCmsActionInvokeFunctionConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformCmsActionInvokeFunctionConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_cms_action_invoke_function',
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
    this._build = config.buildAttribute;
    this._contractAddress = config.contractAddress;
    this._description = config.description;
    this._environment = config.environment;
    this._fireflyNamespace = config.fireflyNamespace;
    this._ignoreDestroy = config.ignoreDestroy;
    this._methodPath = config.methodPath;
    this._name = config.name;
    this._paramsJson = config.paramsJson;
    this._service = config.service;
    this._signingKey = config.signingKey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_number - computed: true, optional: false, required: false
  public get blockNumber() {
    return this.getStringAttribute('block_number');
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

  // contract_address - computed: false, optional: false, required: true
  private _contractAddress?: string; 
  public get contractAddress() {
    return this.getStringAttribute('contract_address');
  }
  public set contractAddress(value: string) {
    this._contractAddress = value;
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

  // idempotency_key - computed: true, optional: false, required: false
  public get idempotencyKey() {
    return this.getStringAttribute('idempotency_key');
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

  // method_path - computed: false, optional: false, required: true
  private _methodPath?: string; 
  public get methodPath() {
    return this.getStringAttribute('method_path');
  }
  public set methodPath(value: string) {
    this._methodPath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodPathInput() {
    return this._methodPath;
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

  // operation_id - computed: true, optional: false, required: false
  public get operationId() {
    return this.getStringAttribute('operation_id');
  }

  // params_json - computed: false, optional: true, required: false
  private _paramsJson?: string; 
  public get paramsJson() {
    return this.getStringAttribute('params_json');
  }
  public set paramsJson(value: string) {
    this._paramsJson = value;
  }
  public resetParamsJson() {
    this._paramsJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get paramsJsonInput() {
    return this._paramsJson;
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

  // signing_key - computed: false, optional: false, required: true
  private _signingKey?: string; 
  public get signingKey() {
    return this.getStringAttribute('signing_key');
  }
  public set signingKey(value: string) {
    this._signingKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get signingKeyInput() {
    return this._signingKey;
  }

  // transaction_id - computed: true, optional: false, required: false
  public get transactionId() {
    return this.getStringAttribute('transaction_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build: cdktf.stringToTerraform(this._build),
      contract_address: cdktf.stringToTerraform(this._contractAddress),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      firefly_namespace: cdktf.stringToTerraform(this._fireflyNamespace),
      ignore_destroy: cdktf.booleanToTerraform(this._ignoreDestroy),
      method_path: cdktf.stringToTerraform(this._methodPath),
      name: cdktf.stringToTerraform(this._name),
      params_json: cdktf.stringToTerraform(this._paramsJson),
      service: cdktf.stringToTerraform(this._service),
      signing_key: cdktf.stringToTerraform(this._signingKey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      method_path: {
        value: cdktf.stringToHclTerraform(this._methodPath),
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
      params_json: {
        value: cdktf.stringToHclTerraform(this._paramsJson),
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
      signing_key: {
        value: cdktf.stringToHclTerraform(this._signingKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
