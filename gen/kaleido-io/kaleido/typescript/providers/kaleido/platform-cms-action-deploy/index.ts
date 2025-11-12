// https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformCmsActionDeployConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#build PlatformCmsActionDeploy#build}
  */
  readonly buildAttribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#description PlatformCmsActionDeploy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#environment PlatformCmsActionDeploy#environment}
  */
  readonly environment: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#firefly_namespace PlatformCmsActionDeploy#firefly_namespace}
  */
  readonly fireflyNamespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#name PlatformCmsActionDeploy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#params_json PlatformCmsActionDeploy#params_json}
  */
  readonly paramsJson?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#service PlatformCmsActionDeploy#service}
  */
  readonly service: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#signing_key PlatformCmsActionDeploy#signing_key}
  */
  readonly signingKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#transaction_manager PlatformCmsActionDeploy#transaction_manager}
  */
  readonly transactionManager?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy kaleido_platform_cms_action_deploy}
*/
export class PlatformCmsActionDeploy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_cms_action_deploy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformCmsActionDeploy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformCmsActionDeploy to import
  * @param importFromId The id of the existing PlatformCmsActionDeploy that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformCmsActionDeploy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_cms_action_deploy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.1.2/docs/resources/platform_cms_action_deploy kaleido_platform_cms_action_deploy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformCmsActionDeployConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformCmsActionDeployConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_cms_action_deploy',
      terraformGeneratorMetadata: {
        providerName: 'kaleido',
        providerVersion: '1.1.2',
        providerVersionConstraint: '1.1.2'
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
    this._description = config.description;
    this._environment = config.environment;
    this._fireflyNamespace = config.fireflyNamespace;
    this._name = config.name;
    this._paramsJson = config.paramsJson;
    this._service = config.service;
    this._signingKey = config.signingKey;
    this._transactionManager = config.transactionManager;
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

  // contract_address - computed: true, optional: false, required: false
  public get contractAddress() {
    return this.getStringAttribute('contract_address');
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

  // firefly_namespace - computed: false, optional: true, required: false
  private _fireflyNamespace?: string; 
  public get fireflyNamespace() {
    return this.getStringAttribute('firefly_namespace');
  }
  public set fireflyNamespace(value: string) {
    this._fireflyNamespace = value;
  }
  public resetFireflyNamespace() {
    this._fireflyNamespace = undefined;
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

  // transaction_manager - computed: false, optional: true, required: false
  private _transactionManager?: string; 
  public get transactionManager() {
    return this.getStringAttribute('transaction_manager');
  }
  public set transactionManager(value: string) {
    this._transactionManager = value;
  }
  public resetTransactionManager() {
    this._transactionManager = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionManagerInput() {
    return this._transactionManager;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      build: cdktf.stringToTerraform(this._build),
      description: cdktf.stringToTerraform(this._description),
      environment: cdktf.stringToTerraform(this._environment),
      firefly_namespace: cdktf.stringToTerraform(this._fireflyNamespace),
      name: cdktf.stringToTerraform(this._name),
      params_json: cdktf.stringToTerraform(this._paramsJson),
      service: cdktf.stringToTerraform(this._service),
      signing_key: cdktf.stringToTerraform(this._signingKey),
      transaction_manager: cdktf.stringToTerraform(this._transactionManager),
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
      transaction_manager: {
        value: cdktf.stringToHclTerraform(this._transactionManager),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
