// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GlobalSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#artifact_directories GlobalSettings#artifact_directories}
  */
  readonly artifactDirectories?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#artifacts_domain_isolation GlobalSettings#artifacts_domain_isolation}
  */
  readonly artifactsDomainIsolation?: GlobalSettingsArtifactsDomainIsolation;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#default_execution_timeout GlobalSettings#default_execution_timeout}
  */
  readonly defaultExecutionTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#default_quiet_period GlobalSettings#default_quiet_period}
  */
  readonly defaultQuietPeriod?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#default_vcs_check_interval GlobalSettings#default_vcs_check_interval}
  */
  readonly defaultVcsCheckInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#encryption GlobalSettings#encryption}
  */
  readonly encryption?: GlobalSettingsEncryption;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#enforce_default_vcs_check_interval GlobalSettings#enforce_default_vcs_check_interval}
  */
  readonly enforceDefaultVcsCheckInterval?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#max_artifact_number GlobalSettings#max_artifact_number}
  */
  readonly maxArtifactNumber?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#max_artifact_size GlobalSettings#max_artifact_size}
  */
  readonly maxArtifactSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#root_url GlobalSettings#root_url}
  */
  readonly rootUrl?: string;
}
export interface GlobalSettingsArtifactsDomainIsolation {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#artifacts_url GlobalSettings#artifacts_url}
  */
  readonly artifactsUrl?: string;
  /**
  * Enabled by default, set false if it needs to be disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#enabled GlobalSettings#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function globalSettingsArtifactsDomainIsolationToTerraform(struct?: GlobalSettingsArtifactsDomainIsolation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifacts_url: cdktf.stringToTerraform(struct!.artifactsUrl),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function globalSettingsArtifactsDomainIsolationToHclTerraform(struct?: GlobalSettingsArtifactsDomainIsolation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifacts_url: {
      value: cdktf.stringToHclTerraform(struct!.artifactsUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalSettingsArtifactsDomainIsolationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalSettingsArtifactsDomainIsolation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactsUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactsUrl = this._artifactsUrl;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalSettingsArtifactsDomainIsolation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._artifactsUrl = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._artifactsUrl = value.artifactsUrl;
      this._enabled = value.enabled;
    }
  }

  // artifacts_url - computed: true, optional: true, required: false
  private _artifactsUrl?: string; 
  public get artifactsUrl() {
    return this.getStringAttribute('artifacts_url');
  }
  public set artifactsUrl(value: string) {
    this._artifactsUrl = value;
  }
  public resetArtifactsUrl() {
    this._artifactsUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsUrlInput() {
    return this._artifactsUrl;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface GlobalSettingsEncryption {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#key GlobalSettings#key}
  */
  readonly key: string;
}

export function globalSettingsEncryptionToTerraform(struct?: GlobalSettingsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
  }
}


export function globalSettingsEncryptionToHclTerraform(struct?: GlobalSettingsEncryption | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class GlobalSettingsEncryptionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): GlobalSettingsEncryption | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: GlobalSettingsEncryption | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
    }
  }

  // key - computed: true, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings teamcity_global_settings}
*/
export class GlobalSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_global_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GlobalSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GlobalSettings to import
  * @param importFromId The id of the existing GlobalSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GlobalSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_global_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.86/docs/resources/global_settings teamcity_global_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GlobalSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GlobalSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'teamcity_global_settings',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.86',
        providerVersionConstraint: '0.0.86'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._artifactDirectories = config.artifactDirectories;
    this._artifactsDomainIsolation.internalValue = config.artifactsDomainIsolation;
    this._defaultExecutionTimeout = config.defaultExecutionTimeout;
    this._defaultQuietPeriod = config.defaultQuietPeriod;
    this._defaultVcsCheckInterval = config.defaultVcsCheckInterval;
    this._encryption.internalValue = config.encryption;
    this._enforceDefaultVcsCheckInterval = config.enforceDefaultVcsCheckInterval;
    this._maxArtifactNumber = config.maxArtifactNumber;
    this._maxArtifactSize = config.maxArtifactSize;
    this._rootUrl = config.rootUrl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // artifact_directories - computed: true, optional: true, required: false
  private _artifactDirectories?: string; 
  public get artifactDirectories() {
    return this.getStringAttribute('artifact_directories');
  }
  public set artifactDirectories(value: string) {
    this._artifactDirectories = value;
  }
  public resetArtifactDirectories() {
    this._artifactDirectories = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactDirectoriesInput() {
    return this._artifactDirectories;
  }

  // artifacts_domain_isolation - computed: true, optional: true, required: false
  private _artifactsDomainIsolation = new GlobalSettingsArtifactsDomainIsolationOutputReference(this, "artifacts_domain_isolation");
  public get artifactsDomainIsolation() {
    return this._artifactsDomainIsolation;
  }
  public putArtifactsDomainIsolation(value: GlobalSettingsArtifactsDomainIsolation) {
    this._artifactsDomainIsolation.internalValue = value;
  }
  public resetArtifactsDomainIsolation() {
    this._artifactsDomainIsolation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactsDomainIsolationInput() {
    return this._artifactsDomainIsolation.internalValue;
  }

  // default_execution_timeout - computed: true, optional: true, required: false
  private _defaultExecutionTimeout?: number; 
  public get defaultExecutionTimeout() {
    return this.getNumberAttribute('default_execution_timeout');
  }
  public set defaultExecutionTimeout(value: number) {
    this._defaultExecutionTimeout = value;
  }
  public resetDefaultExecutionTimeout() {
    this._defaultExecutionTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultExecutionTimeoutInput() {
    return this._defaultExecutionTimeout;
  }

  // default_quiet_period - computed: true, optional: true, required: false
  private _defaultQuietPeriod?: number; 
  public get defaultQuietPeriod() {
    return this.getNumberAttribute('default_quiet_period');
  }
  public set defaultQuietPeriod(value: number) {
    this._defaultQuietPeriod = value;
  }
  public resetDefaultQuietPeriod() {
    this._defaultQuietPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultQuietPeriodInput() {
    return this._defaultQuietPeriod;
  }

  // default_vcs_check_interval - computed: true, optional: true, required: false
  private _defaultVcsCheckInterval?: number; 
  public get defaultVcsCheckInterval() {
    return this.getNumberAttribute('default_vcs_check_interval');
  }
  public set defaultVcsCheckInterval(value: number) {
    this._defaultVcsCheckInterval = value;
  }
  public resetDefaultVcsCheckInterval() {
    this._defaultVcsCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVcsCheckIntervalInput() {
    return this._defaultVcsCheckInterval;
  }

  // encryption - computed: true, optional: true, required: false
  private _encryption = new GlobalSettingsEncryptionOutputReference(this, "encryption");
  public get encryption() {
    return this._encryption;
  }
  public putEncryption(value: GlobalSettingsEncryption) {
    this._encryption.internalValue = value;
  }
  public resetEncryption() {
    this._encryption.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionInput() {
    return this._encryption.internalValue;
  }

  // enforce_default_vcs_check_interval - computed: true, optional: true, required: false
  private _enforceDefaultVcsCheckInterval?: boolean | cdktf.IResolvable; 
  public get enforceDefaultVcsCheckInterval() {
    return this.getBooleanAttribute('enforce_default_vcs_check_interval');
  }
  public set enforceDefaultVcsCheckInterval(value: boolean | cdktf.IResolvable) {
    this._enforceDefaultVcsCheckInterval = value;
  }
  public resetEnforceDefaultVcsCheckInterval() {
    this._enforceDefaultVcsCheckInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDefaultVcsCheckIntervalInput() {
    return this._enforceDefaultVcsCheckInterval;
  }

  // max_artifact_number - computed: true, optional: true, required: false
  private _maxArtifactNumber?: number; 
  public get maxArtifactNumber() {
    return this.getNumberAttribute('max_artifact_number');
  }
  public set maxArtifactNumber(value: number) {
    this._maxArtifactNumber = value;
  }
  public resetMaxArtifactNumber() {
    this._maxArtifactNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArtifactNumberInput() {
    return this._maxArtifactNumber;
  }

  // max_artifact_size - computed: true, optional: true, required: false
  private _maxArtifactSize?: number; 
  public get maxArtifactSize() {
    return this.getNumberAttribute('max_artifact_size');
  }
  public set maxArtifactSize(value: number) {
    this._maxArtifactSize = value;
  }
  public resetMaxArtifactSize() {
    this._maxArtifactSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxArtifactSizeInput() {
    return this._maxArtifactSize;
  }

  // root_url - computed: true, optional: true, required: false
  private _rootUrl?: string; 
  public get rootUrl() {
    return this.getStringAttribute('root_url');
  }
  public set rootUrl(value: string) {
    this._rootUrl = value;
  }
  public resetRootUrl() {
    this._rootUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootUrlInput() {
    return this._rootUrl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      artifact_directories: cdktf.stringToTerraform(this._artifactDirectories),
      artifacts_domain_isolation: globalSettingsArtifactsDomainIsolationToTerraform(this._artifactsDomainIsolation.internalValue),
      default_execution_timeout: cdktf.numberToTerraform(this._defaultExecutionTimeout),
      default_quiet_period: cdktf.numberToTerraform(this._defaultQuietPeriod),
      default_vcs_check_interval: cdktf.numberToTerraform(this._defaultVcsCheckInterval),
      encryption: globalSettingsEncryptionToTerraform(this._encryption.internalValue),
      enforce_default_vcs_check_interval: cdktf.booleanToTerraform(this._enforceDefaultVcsCheckInterval),
      max_artifact_number: cdktf.numberToTerraform(this._maxArtifactNumber),
      max_artifact_size: cdktf.numberToTerraform(this._maxArtifactSize),
      root_url: cdktf.stringToTerraform(this._rootUrl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      artifact_directories: {
        value: cdktf.stringToHclTerraform(this._artifactDirectories),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      artifacts_domain_isolation: {
        value: globalSettingsArtifactsDomainIsolationToHclTerraform(this._artifactsDomainIsolation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalSettingsArtifactsDomainIsolation",
      },
      default_execution_timeout: {
        value: cdktf.numberToHclTerraform(this._defaultExecutionTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_quiet_period: {
        value: cdktf.numberToHclTerraform(this._defaultQuietPeriod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_vcs_check_interval: {
        value: cdktf.numberToHclTerraform(this._defaultVcsCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      encryption: {
        value: globalSettingsEncryptionToHclTerraform(this._encryption.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "GlobalSettingsEncryption",
      },
      enforce_default_vcs_check_interval: {
        value: cdktf.booleanToHclTerraform(this._enforceDefaultVcsCheckInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      max_artifact_number: {
        value: cdktf.numberToHclTerraform(this._maxArtifactNumber),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_artifact_size: {
        value: cdktf.numberToHclTerraform(this._maxArtifactSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      root_url: {
        value: cdktf.stringToHclTerraform(this._rootUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
