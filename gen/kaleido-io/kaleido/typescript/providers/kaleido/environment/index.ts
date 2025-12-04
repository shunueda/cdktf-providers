// https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#block_period Environment#block_period}
  */
  readonly blockPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#chain_id Environment#chain_id}
  */
  readonly chainId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#consensus_type Environment#consensus_type}
  */
  readonly consensusType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#consortium_id Environment#consortium_id}
  */
  readonly consortiumId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#description Environment#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#env_type Environment#env_type}
  */
  readonly envType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#multi_region Environment#multi_region}
  */
  readonly multiRegion?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#prefunded_accounts Environment#prefunded_accounts}
  */
  readonly prefundedAccounts?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#release_id Environment#release_id}
  */
  readonly releaseId?: string;
  /**
  * The decentralized nature of Kaleido means an environment might be shared with other accounts. When true only create if name does not exist, and delete becomes a no-op.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#shared_deployment Environment#shared_deployment}
  */
  readonly sharedDeployment?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#test_features_json Environment#test_features_json}
  */
  readonly testFeaturesJson?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment kaleido_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kaleido_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kaleido_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kaleido-io/kaleido/1.2.0/docs/resources/environment kaleido_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'kaleido_environment',
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
    this._blockPeriod = config.blockPeriod;
    this._chainId = config.chainId;
    this._consensusType = config.consensusType;
    this._consortiumId = config.consortiumId;
    this._description = config.description;
    this._envType = config.envType;
    this._multiRegion = config.multiRegion;
    this._name = config.name;
    this._prefundedAccounts = config.prefundedAccounts;
    this._releaseId = config.releaseId;
    this._sharedDeployment = config.sharedDeployment;
    this._testFeaturesJson = config.testFeaturesJson;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // block_period - computed: false, optional: true, required: false
  private _blockPeriod?: number; 
  public get blockPeriod() {
    return this.getNumberAttribute('block_period');
  }
  public set blockPeriod(value: number) {
    this._blockPeriod = value;
  }
  public resetBlockPeriod() {
    this._blockPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPeriodInput() {
    return this._blockPeriod;
  }

  // chain_id - computed: true, optional: true, required: false
  private _chainId?: number; 
  public get chainId() {
    return this.getNumberAttribute('chain_id');
  }
  public set chainId(value: number) {
    this._chainId = value;
  }
  public resetChainId() {
    this._chainId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chainIdInput() {
    return this._chainId;
  }

  // consensus_type - computed: false, optional: false, required: true
  private _consensusType?: string; 
  public get consensusType() {
    return this.getStringAttribute('consensus_type');
  }
  public set consensusType(value: string) {
    this._consensusType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consensusTypeInput() {
    return this._consensusType;
  }

  // consortium_id - computed: false, optional: false, required: true
  private _consortiumId?: string; 
  public get consortiumId() {
    return this.getStringAttribute('consortium_id');
  }
  public set consortiumId(value: string) {
    this._consortiumId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consortiumIdInput() {
    return this._consortiumId;
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

  // env_type - computed: false, optional: false, required: true
  private _envType?: string; 
  public get envType() {
    return this.getStringAttribute('env_type');
  }
  public set envType(value: string) {
    this._envType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envTypeInput() {
    return this._envType;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // multi_region - computed: false, optional: true, required: false
  private _multiRegion?: boolean | cdktf.IResolvable; 
  public get multiRegion() {
    return this.getBooleanAttribute('multi_region');
  }
  public set multiRegion(value: boolean | cdktf.IResolvable) {
    this._multiRegion = value;
  }
  public resetMultiRegion() {
    this._multiRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiRegionInput() {
    return this._multiRegion;
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

  // prefunded_accounts - computed: true, optional: true, required: false
  private _prefundedAccounts?: { [key: string]: string }; 
  public get prefundedAccounts() {
    return this.getStringMapAttribute('prefunded_accounts');
  }
  public set prefundedAccounts(value: { [key: string]: string }) {
    this._prefundedAccounts = value;
  }
  public resetPrefundedAccounts() {
    this._prefundedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefundedAccountsInput() {
    return this._prefundedAccounts;
  }

  // release_id - computed: true, optional: true, required: false
  private _releaseId?: string; 
  public get releaseId() {
    return this.getStringAttribute('release_id');
  }
  public set releaseId(value: string) {
    this._releaseId = value;
  }
  public resetReleaseId() {
    this._releaseId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseIdInput() {
    return this._releaseId;
  }

  // shared_deployment - computed: true, optional: true, required: false
  private _sharedDeployment?: boolean | cdktf.IResolvable; 
  public get sharedDeployment() {
    return this.getBooleanAttribute('shared_deployment');
  }
  public set sharedDeployment(value: boolean | cdktf.IResolvable) {
    this._sharedDeployment = value;
  }
  public resetSharedDeployment() {
    this._sharedDeployment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedDeploymentInput() {
    return this._sharedDeployment;
  }

  // test_features_json - computed: false, optional: true, required: false
  private _testFeaturesJson?: string; 
  public get testFeaturesJson() {
    return this.getStringAttribute('test_features_json');
  }
  public set testFeaturesJson(value: string) {
    this._testFeaturesJson = value;
  }
  public resetTestFeaturesJson() {
    this._testFeaturesJson = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get testFeaturesJsonInput() {
    return this._testFeaturesJson;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      block_period: cdktf.numberToTerraform(this._blockPeriod),
      chain_id: cdktf.numberToTerraform(this._chainId),
      consensus_type: cdktf.stringToTerraform(this._consensusType),
      consortium_id: cdktf.stringToTerraform(this._consortiumId),
      description: cdktf.stringToTerraform(this._description),
      env_type: cdktf.stringToTerraform(this._envType),
      multi_region: cdktf.booleanToTerraform(this._multiRegion),
      name: cdktf.stringToTerraform(this._name),
      prefunded_accounts: cdktf.hashMapper(cdktf.stringToTerraform)(this._prefundedAccounts),
      release_id: cdktf.stringToTerraform(this._releaseId),
      shared_deployment: cdktf.booleanToTerraform(this._sharedDeployment),
      test_features_json: cdktf.stringToTerraform(this._testFeaturesJson),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      block_period: {
        value: cdktf.numberToHclTerraform(this._blockPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chain_id: {
        value: cdktf.numberToHclTerraform(this._chainId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      consensus_type: {
        value: cdktf.stringToHclTerraform(this._consensusType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      consortium_id: {
        value: cdktf.stringToHclTerraform(this._consortiumId),
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
      env_type: {
        value: cdktf.stringToHclTerraform(this._envType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_region: {
        value: cdktf.booleanToHclTerraform(this._multiRegion),
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
      prefunded_accounts: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._prefundedAccounts),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      release_id: {
        value: cdktf.stringToHclTerraform(this._releaseId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      shared_deployment: {
        value: cdktf.booleanToHclTerraform(this._sharedDeployment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      test_features_json: {
        value: cdktf.stringToHclTerraform(this._testFeaturesJson),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
