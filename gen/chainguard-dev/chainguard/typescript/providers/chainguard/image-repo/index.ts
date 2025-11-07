// https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageRepoConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of active tags for this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#active_tags ImageRepo#active_tags}
  */
  readonly activeTags?: string[];
  /**
  * Known aliases for a given image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#aliases ImageRepo#aliases}
  */
  readonly aliases?: string[];
  /**
  * List of bundles associated with this repo (valid ones: `application|base|byol|ai|ai-gpu|featured|fips`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#bundles ImageRepo#bundles}
  */
  readonly bundles?: string[];
  /**
  * The name of this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#name ImageRepo#name}
  */
  readonly name: string;
  /**
  * The group that owns the repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#parent_id ImageRepo#parent_id}
  */
  readonly parentId: string;
  /**
  * The README for this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#readme ImageRepo#readme}
  */
  readonly readme?: string;
  /**
  * Image tier associated with this repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#tier ImageRepo#tier}
  */
  readonly tier?: string;
  /**
  * sync_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#sync_config ImageRepo#sync_config}
  */
  readonly syncConfig?: ImageRepoSyncConfig;
}
export interface ImageRepoSyncConfig {
  /**
  * The Amazon repository under which to create a new repository with the same name as the source repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#amazon ImageRepo#amazon}
  */
  readonly amazon?: string;
  /**
  * A json-encoded APKO configuration to overlay on rebuilds of images being synced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#apko_overlay ImageRepo#apko_overlay}
  */
  readonly apkoOverlay?: string;
  /**
  * The Azure repository under which to create a new repository with the same name as the source repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#azure ImageRepo#azure}
  */
  readonly azure?: string;
  /**
  * The RFC3339 encoded date and time at which this entitlement will expire.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#expiration ImageRepo#expiration}
  */
  readonly expiration?: string;
  /**
  * The Google repository under which to create a new repository with the same name as the source repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#google ImageRepo#google}
  */
  readonly google?: string;
  /**
  * Controls whether the image grace period functionality is enabled or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#grace_period ImageRepo#grace_period}
  */
  readonly gracePeriod?: boolean | cdktf.IResolvable;
  /**
  * The UIDP of the repository to sync images from.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#source ImageRepo#source}
  */
  readonly source?: string;
}

export function imageRepoSyncConfigToTerraform(struct?: ImageRepoSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    amazon: cdktf.stringToTerraform(struct!.amazon),
    apko_overlay: cdktf.stringToTerraform(struct!.apkoOverlay),
    azure: cdktf.stringToTerraform(struct!.azure),
    expiration: cdktf.stringToTerraform(struct!.expiration),
    google: cdktf.stringToTerraform(struct!.google),
    grace_period: cdktf.booleanToTerraform(struct!.gracePeriod),
    source: cdktf.stringToTerraform(struct!.source),
  }
}


export function imageRepoSyncConfigToHclTerraform(struct?: ImageRepoSyncConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    amazon: {
      value: cdktf.stringToHclTerraform(struct!.amazon),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    apko_overlay: {
      value: cdktf.stringToHclTerraform(struct!.apkoOverlay),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    azure: {
      value: cdktf.stringToHclTerraform(struct!.azure),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expiration: {
      value: cdktf.stringToHclTerraform(struct!.expiration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    google: {
      value: cdktf.stringToHclTerraform(struct!.google),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    grace_period: {
      value: cdktf.booleanToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    source: {
      value: cdktf.stringToHclTerraform(struct!.source),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageRepoSyncConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageRepoSyncConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._amazon !== undefined) {
      hasAnyValues = true;
      internalValueResult.amazon = this._amazon;
    }
    if (this._apkoOverlay !== undefined) {
      hasAnyValues = true;
      internalValueResult.apkoOverlay = this._apkoOverlay;
    }
    if (this._azure !== undefined) {
      hasAnyValues = true;
      internalValueResult.azure = this._azure;
    }
    if (this._expiration !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiration = this._expiration;
    }
    if (this._google !== undefined) {
      hasAnyValues = true;
      internalValueResult.google = this._google;
    }
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._source !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageRepoSyncConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._amazon = undefined;
      this._apkoOverlay = undefined;
      this._azure = undefined;
      this._expiration = undefined;
      this._google = undefined;
      this._gracePeriod = undefined;
      this._source = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._amazon = value.amazon;
      this._apkoOverlay = value.apkoOverlay;
      this._azure = value.azure;
      this._expiration = value.expiration;
      this._google = value.google;
      this._gracePeriod = value.gracePeriod;
      this._source = value.source;
    }
  }

  // amazon - computed: false, optional: true, required: false
  private _amazon?: string; 
  public get amazon() {
    return this.getStringAttribute('amazon');
  }
  public set amazon(value: string) {
    this._amazon = value;
  }
  public resetAmazon() {
    this._amazon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amazonInput() {
    return this._amazon;
  }

  // apko_overlay - computed: false, optional: true, required: false
  private _apkoOverlay?: string; 
  public get apkoOverlay() {
    return this.getStringAttribute('apko_overlay');
  }
  public set apkoOverlay(value: string) {
    this._apkoOverlay = value;
  }
  public resetApkoOverlay() {
    this._apkoOverlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apkoOverlayInput() {
    return this._apkoOverlay;
  }

  // azure - computed: false, optional: true, required: false
  private _azure?: string; 
  public get azure() {
    return this.getStringAttribute('azure');
  }
  public set azure(value: string) {
    this._azure = value;
  }
  public resetAzure() {
    this._azure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureInput() {
    return this._azure;
  }

  // expiration - computed: false, optional: true, required: false
  private _expiration?: string; 
  public get expiration() {
    return this.getStringAttribute('expiration');
  }
  public set expiration(value: string) {
    this._expiration = value;
  }
  public resetExpiration() {
    this._expiration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expirationInput() {
    return this._expiration;
  }

  // google - computed: false, optional: true, required: false
  private _google?: string; 
  public get google() {
    return this.getStringAttribute('google');
  }
  public set google(value: string) {
    this._google = value;
  }
  public resetGoogle() {
    this._google = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google;
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: boolean | cdktf.IResolvable; 
  public get gracePeriod() {
    return this.getBooleanAttribute('grace_period');
  }
  public set gracePeriod(value: boolean | cdktf.IResolvable) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // unique_tags - computed: true, optional: false, required: false
  public get uniqueTags() {
    return this.getBooleanAttribute('unique_tags');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo chainguard_image_repo}
*/
export class ImageRepo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "chainguard_image_repo";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageRepo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageRepo to import
  * @param importFromId The id of the existing ImageRepo that should be imported. Refer to the {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageRepo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "chainguard_image_repo", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/chainguard-dev/chainguard/0.1.37/docs/resources/image_repo chainguard_image_repo} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageRepoConfig
  */
  public constructor(scope: Construct, id: string, config: ImageRepoConfig) {
    super(scope, id, {
      terraformResourceType: 'chainguard_image_repo',
      terraformGeneratorMetadata: {
        providerName: 'chainguard',
        providerVersion: '0.1.37'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._activeTags = config.activeTags;
    this._aliases = config.aliases;
    this._bundles = config.bundles;
    this._name = config.name;
    this._parentId = config.parentId;
    this._readme = config.readme;
    this._tier = config.tier;
    this._syncConfig.internalValue = config.syncConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active_tags - computed: false, optional: true, required: false
  private _activeTags?: string[]; 
  public get activeTags() {
    return this.getListAttribute('active_tags');
  }
  public set activeTags(value: string[]) {
    this._activeTags = value;
  }
  public resetActiveTags() {
    this._activeTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTagsInput() {
    return this._activeTags;
  }

  // aliases - computed: false, optional: true, required: false
  private _aliases?: string[]; 
  public get aliases() {
    return this.getListAttribute('aliases');
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

  // bundles - computed: false, optional: true, required: false
  private _bundles?: string[]; 
  public get bundles() {
    return this.getListAttribute('bundles');
  }
  public set bundles(value: string[]) {
    this._bundles = value;
  }
  public resetBundles() {
    this._bundles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bundlesInput() {
    return this._bundles;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // parent_id - computed: false, optional: false, required: true
  private _parentId?: string; 
  public get parentId() {
    return this.getStringAttribute('parent_id');
  }
  public set parentId(value: string) {
    this._parentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parentIdInput() {
    return this._parentId;
  }

  // readme - computed: false, optional: true, required: false
  private _readme?: string; 
  public get readme() {
    return this.getStringAttribute('readme');
  }
  public set readme(value: string) {
    this._readme = value;
  }
  public resetReadme() {
    this._readme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readmeInput() {
    return this._readme;
  }

  // tier - computed: false, optional: true, required: false
  private _tier?: string; 
  public get tier() {
    return this.getStringAttribute('tier');
  }
  public set tier(value: string) {
    this._tier = value;
  }
  public resetTier() {
    this._tier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tierInput() {
    return this._tier;
  }

  // sync_config - computed: false, optional: true, required: false
  private _syncConfig = new ImageRepoSyncConfigOutputReference(this, "sync_config");
  public get syncConfig() {
    return this._syncConfig;
  }
  public putSyncConfig(value: ImageRepoSyncConfig) {
    this._syncConfig.internalValue = value;
  }
  public resetSyncConfig() {
    this._syncConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncConfigInput() {
    return this._syncConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active_tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._activeTags),
      aliases: cdktf.listMapper(cdktf.stringToTerraform, false)(this._aliases),
      bundles: cdktf.listMapper(cdktf.stringToTerraform, false)(this._bundles),
      name: cdktf.stringToTerraform(this._name),
      parent_id: cdktf.stringToTerraform(this._parentId),
      readme: cdktf.stringToTerraform(this._readme),
      tier: cdktf.stringToTerraform(this._tier),
      sync_config: imageRepoSyncConfigToTerraform(this._syncConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active_tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._activeTags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      aliases: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._aliases),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      bundles: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._bundles),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_id: {
        value: cdktf.stringToHclTerraform(this._parentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      readme: {
        value: cdktf.stringToHclTerraform(this._readme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tier: {
        value: cdktf.stringToHclTerraform(this._tier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_config: {
        value: imageRepoSyncConfigToHclTerraform(this._syncConfig.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageRepoSyncConfig",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
