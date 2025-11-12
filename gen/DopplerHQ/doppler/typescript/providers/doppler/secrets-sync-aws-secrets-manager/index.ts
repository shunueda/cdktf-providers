// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsSyncAwsSecretsManagerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#config SecretsSyncAwsSecretsManager#config}
  */
  readonly config: string;
  /**
  * The behavior to be performed on the secrets in the sync target when this resource is deleted or recreated. Either `leave_in_target` (default) or `delete_from_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#delete_behavior SecretsSyncAwsSecretsManager#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#id SecretsSyncAwsSecretsManager#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#integration SecretsSyncAwsSecretsManager#integration}
  */
  readonly integration: string;
  /**
  * The AWS KMS key used to encrypt the secret (ID, Alias, or ARN)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#kms_key_id SecretsSyncAwsSecretsManager#kms_key_id}
  */
  readonly kmsKeyId?: string;
  /**
  * An optional secret name transformer (e.g. DOPPLER_CONFIG in lower-kebab would be doppler-config). Valid transformers: none, camel, upper-camel, lower-snake, tf-var, dotnet, dotnet-env, lower-kebab
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#name_transform SecretsSyncAwsSecretsManager#name_transform}
  */
  readonly nameTransform?: string;
  /**
  * The path to the secret in AWS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#path SecretsSyncAwsSecretsManager#path}
  */
  readonly path: string;
  /**
  * The behavior to modify the provided path. Either `add_doppler_suffix` (default) which appends `doppler` to the provided path or `none` which leaves the path unchanged.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#path_behavior SecretsSyncAwsSecretsManager#path_behavior}
  */
  readonly pathBehavior?: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#project SecretsSyncAwsSecretsManager#project}
  */
  readonly project: string;
  /**
  * The AWS region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#region SecretsSyncAwsSecretsManager#region}
  */
  readonly region: string;
  /**
  * Determines whether secrets are synced to a single secret (`single-secret`) as a JSON object or multiple discrete secrets (`multi-secret`). Defaults to `single-secret` if unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#sync_strategy SecretsSyncAwsSecretsManager#sync_strategy}
  */
  readonly syncStrategy?: string;
  /**
  * AWS tags to attach to the secrets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#tags SecretsSyncAwsSecretsManager#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * If enabled, Doppler will update the AWS secret metadata (e.g. KMS key) during every sync. If disabled, Doppler will only set secret metadata for new AWS secrets.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#update_metadata SecretsSyncAwsSecretsManager#update_metadata}
  */
  readonly updateMetadata?: boolean | cdktf.IResolvable;
  /**
  * Behavior for AWS resource tags on updates (`never` update, `upsert` tags (leaving non-Doppler tags alone), `replace` tags (remove non-Doppler tags))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#update_resource_tags SecretsSyncAwsSecretsManager#update_resource_tags}
  */
  readonly updateResourceTags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager doppler_secrets_sync_aws_secrets_manager}
*/
export class SecretsSyncAwsSecretsManager extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_secrets_sync_aws_secrets_manager";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsSyncAwsSecretsManager resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncAwsSecretsManager to import
  * @param importFromId The id of the existing SecretsSyncAwsSecretsManager that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncAwsSecretsManager to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_secrets_sync_aws_secrets_manager", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_aws_secrets_manager doppler_secrets_sync_aws_secrets_manager} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncAwsSecretsManagerConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncAwsSecretsManagerConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_secrets_sync_aws_secrets_manager',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._deleteBehavior = config.deleteBehavior;
    this._id = config.id;
    this._integration = config.integration;
    this._kmsKeyId = config.kmsKeyId;
    this._nameTransform = config.nameTransform;
    this._path = config.path;
    this._pathBehavior = config.pathBehavior;
    this._project = config.project;
    this._region = config.region;
    this._syncStrategy = config.syncStrategy;
    this._tags = config.tags;
    this._updateMetadata = config.updateMetadata;
    this._updateResourceTags = config.updateResourceTags;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // delete_behavior - computed: false, optional: true, required: false
  private _deleteBehavior?: string; 
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }
  public set deleteBehavior(value: string) {
    this._deleteBehavior = value;
  }
  public resetDeleteBehavior() {
    this._deleteBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBehaviorInput() {
    return this._deleteBehavior;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // kms_key_id - computed: false, optional: true, required: false
  private _kmsKeyId?: string; 
  public get kmsKeyId() {
    return this.getStringAttribute('kms_key_id');
  }
  public set kmsKeyId(value: string) {
    this._kmsKeyId = value;
  }
  public resetKmsKeyId() {
    this._kmsKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kmsKeyIdInput() {
    return this._kmsKeyId;
  }

  // name_transform - computed: false, optional: true, required: false
  private _nameTransform?: string; 
  public get nameTransform() {
    return this.getStringAttribute('name_transform');
  }
  public set nameTransform(value: string) {
    this._nameTransform = value;
  }
  public resetNameTransform() {
    this._nameTransform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTransformInput() {
    return this._nameTransform;
  }

  // path - computed: false, optional: false, required: true
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // path_behavior - computed: false, optional: true, required: false
  private _pathBehavior?: string; 
  public get pathBehavior() {
    return this.getStringAttribute('path_behavior');
  }
  public set pathBehavior(value: string) {
    this._pathBehavior = value;
  }
  public resetPathBehavior() {
    this._pathBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathBehaviorInput() {
    return this._pathBehavior;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // sync_strategy - computed: false, optional: true, required: false
  private _syncStrategy?: string; 
  public get syncStrategy() {
    return this.getStringAttribute('sync_strategy');
  }
  public set syncStrategy(value: string) {
    this._syncStrategy = value;
  }
  public resetSyncStrategy() {
    this._syncStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStrategyInput() {
    return this._syncStrategy;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_metadata - computed: false, optional: true, required: false
  private _updateMetadata?: boolean | cdktf.IResolvable; 
  public get updateMetadata() {
    return this.getBooleanAttribute('update_metadata');
  }
  public set updateMetadata(value: boolean | cdktf.IResolvable) {
    this._updateMetadata = value;
  }
  public resetUpdateMetadata() {
    this._updateMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateMetadataInput() {
    return this._updateMetadata;
  }

  // update_resource_tags - computed: false, optional: true, required: false
  private _updateResourceTags?: string; 
  public get updateResourceTags() {
    return this.getStringAttribute('update_resource_tags');
  }
  public set updateResourceTags(value: string) {
    this._updateResourceTags = value;
  }
  public resetUpdateResourceTags() {
    this._updateResourceTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateResourceTagsInput() {
    return this._updateResourceTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      delete_behavior: cdktf.stringToTerraform(this._deleteBehavior),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      kms_key_id: cdktf.stringToTerraform(this._kmsKeyId),
      name_transform: cdktf.stringToTerraform(this._nameTransform),
      path: cdktf.stringToTerraform(this._path),
      path_behavior: cdktf.stringToTerraform(this._pathBehavior),
      project: cdktf.stringToTerraform(this._project),
      region: cdktf.stringToTerraform(this._region),
      sync_strategy: cdktf.stringToTerraform(this._syncStrategy),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      update_metadata: cdktf.booleanToTerraform(this._updateMetadata),
      update_resource_tags: cdktf.stringToTerraform(this._updateResourceTags),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_behavior: {
        value: cdktf.stringToHclTerraform(this._deleteBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      kms_key_id: {
        value: cdktf.stringToHclTerraform(this._kmsKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_transform: {
        value: cdktf.stringToHclTerraform(this._nameTransform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      path_behavior: {
        value: cdktf.stringToHclTerraform(this._pathBehavior),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_strategy: {
        value: cdktf.stringToHclTerraform(this._syncStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      update_metadata: {
        value: cdktf.booleanToHclTerraform(this._updateMetadata),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      update_resource_tags: {
        value: cdktf.stringToHclTerraform(this._updateResourceTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
