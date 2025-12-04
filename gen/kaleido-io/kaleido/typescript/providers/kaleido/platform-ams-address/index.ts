// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PlatformAmsAddressConfig extends cdktf.TerraformMetaArguments {
  /**
  * The blockchain address (will be converted to lowercase)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#address PlatformAmsAddress#address}
  */
  readonly address: string;
  /**
  * Whether this address represents a smart contract
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#contract PlatformAmsAddress#contract}
  */
  readonly contract?: boolean | cdktf.IResolvable;
  /**
  * Contract manager build UUID (only valid if contract=true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#contract_manager_build PlatformAmsAddress#contract_manager_build}
  */
  readonly contractManagerBuild?: string;
  /**
  * Contract manager service (only valid if contract=true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#contract_manager_service PlatformAmsAddress#contract_manager_service}
  */
  readonly contractManagerService?: string;
  /**
  * Description of the address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#description PlatformAmsAddress#description}
  */
  readonly description?: string;
  /**
  * Human-readable display name for the address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#display_name PlatformAmsAddress#display_name}
  */
  readonly displayName?: string;
  /**
  * The environment ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#environment PlatformAmsAddress#environment}
  */
  readonly environment: string;
  /**
  * FireFly API (only valid if contract=true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#firefly_api PlatformAmsAddress#firefly_api}
  */
  readonly fireflyApi?: string;
  /**
  * FireFly namespace (only valid if contract=true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#firefly_namespace PlatformAmsAddress#firefly_namespace}
  */
  readonly fireflyNamespace?: string;
  /**
  * Additional metadata as JSON string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#info_json PlatformAmsAddress#info_json}
  */
  readonly infoJson?: string;
  /**
  * The AMS service ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#service PlatformAmsAddress#service}
  */
  readonly service: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address kaleido_platform_ams_address}
*/
export class PlatformAmsAddress extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_platform_ams_address";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PlatformAmsAddress resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PlatformAmsAddress to import
  * @param importFromId The id of the existing PlatformAmsAddress that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PlatformAmsAddress to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_platform_ams_address", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/platform_ams_address kaleido_platform_ams_address} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PlatformAmsAddressConfig
  */
  public constructor(scope: Construct, id: string, config: PlatformAmsAddressConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_platform_ams_address',
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
    this._address = config.address;
    this._contract = config.contract;
    this._contractManagerBuild = config.contractManagerBuild;
    this._contractManagerService = config.contractManagerService;
    this._description = config.description;
    this._displayName = config.displayName;
    this._environment = config.environment;
    this._fireflyApi = config.fireflyApi;
    this._fireflyNamespace = config.fireflyNamespace;
    this._infoJson = config.infoJson;
    this._service = config.service;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: false, required: true
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // contract - computed: true, optional: true, required: false
  private _contract?: boolean | cdktf.IResolvable; 
  public get contract() {
    return this.getBooleanAttribute('contract');
  }
  public set contract(value: boolean | cdktf.IResolvable) {
    this._contract = value;
  }
  public resetContract() {
    this._contract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract;
  }

  // contract_manager_build - computed: false, optional: true, required: false
  private _contractManagerBuild?: string; 
  public get contractManagerBuild() {
    return this.getStringAttribute('contract_manager_build');
  }
  public set contractManagerBuild(value: string) {
    this._contractManagerBuild = value;
  }
  public resetContractManagerBuild() {
    this._contractManagerBuild = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractManagerBuildInput() {
    return this._contractManagerBuild;
  }

  // contract_manager_service - computed: false, optional: true, required: false
  private _contractManagerService?: string; 
  public get contractManagerService() {
    return this.getStringAttribute('contract_manager_service');
  }
  public set contractManagerService(value: string) {
    this._contractManagerService = value;
  }
  public resetContractManagerService() {
    this._contractManagerService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractManagerServiceInput() {
    return this._contractManagerService;
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
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

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // firefly_api - computed: false, optional: true, required: false
  private _fireflyApi?: string; 
  public get fireflyApi() {
    return this.getStringAttribute('firefly_api');
  }
  public set fireflyApi(value: string) {
    this._fireflyApi = value;
  }
  public resetFireflyApi() {
    this._fireflyApi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fireflyApiInput() {
    return this._fireflyApi;
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

  // info_json - computed: false, optional: true, required: false
  private _infoJson?: string; 
  public get infoJson() {
    return this.getStringAttribute('info_json');
  }
  public set infoJson(value: string) {
    this._infoJson = value;
  }
  public resetInfoJson() {
    this._infoJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoJsonInput() {
    return this._infoJson;
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

  // updated - computed: true, optional: false, required: false
  public get updated() {
    return this.getStringAttribute('updated');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      contract: cdktf.booleanToTerraform(this._contract),
      contract_manager_build: cdktf.stringToTerraform(this._contractManagerBuild),
      contract_manager_service: cdktf.stringToTerraform(this._contractManagerService),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      environment: cdktf.stringToTerraform(this._environment),
      firefly_api: cdktf.stringToTerraform(this._fireflyApi),
      firefly_namespace: cdktf.stringToTerraform(this._fireflyNamespace),
      info_json: cdktf.stringToTerraform(this._infoJson),
      service: cdktf.stringToTerraform(this._service),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract: {
        value: cdktf.booleanToHclTerraform(this._contract),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      contract_manager_build: {
        value: cdktf.stringToHclTerraform(this._contractManagerBuild),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_manager_service: {
        value: cdktf.stringToHclTerraform(this._contractManagerService),
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
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      firefly_api: {
        value: cdktf.stringToHclTerraform(this._fireflyApi),
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
      info_json: {
        value: cdktf.stringToHclTerraform(this._infoJson),
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
