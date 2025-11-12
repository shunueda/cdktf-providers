// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DevopsDeployArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#argument_substitution_mode DevopsDeployArtifact#argument_substitution_mode}
  */
  readonly argumentSubstitutionMode: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#defined_tags DevopsDeployArtifact#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#deploy_artifact_type DevopsDeployArtifact#deploy_artifact_type}
  */
  readonly deployArtifactType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#description DevopsDeployArtifact#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#display_name DevopsDeployArtifact#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#freeform_tags DevopsDeployArtifact#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#id DevopsDeployArtifact#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#project_id DevopsDeployArtifact#project_id}
  */
  readonly projectId: string;
  /**
  * deploy_artifact_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#deploy_artifact_source DevopsDeployArtifact#deploy_artifact_source}
  */
  readonly deployArtifactSource: DevopsDeployArtifactDeployArtifactSource;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#timeouts DevopsDeployArtifact#timeouts}
  */
  readonly timeouts?: DevopsDeployArtifactTimeouts;
}
export interface DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#current_public_key DevopsDeployArtifact#current_public_key}
  */
  readonly currentPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#previous_public_key DevopsDeployArtifact#previous_public_key}
  */
  readonly previousPublicKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#vault_secret_id DevopsDeployArtifact#vault_secret_id}
  */
  readonly vaultSecretId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#verification_key_source_type DevopsDeployArtifact#verification_key_source_type}
  */
  readonly verificationKeySourceType: string;
}

export function devopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceToTerraform(struct?: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference | DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_public_key: cdktf.stringToTerraform(struct!.currentPublicKey),
    previous_public_key: cdktf.stringToTerraform(struct!.previousPublicKey),
    vault_secret_id: cdktf.stringToTerraform(struct!.vaultSecretId),
    verification_key_source_type: cdktf.stringToTerraform(struct!.verificationKeySourceType),
  }
}


export function devopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceToHclTerraform(struct?: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference | DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_public_key: {
      value: cdktf.stringToHclTerraform(struct!.currentPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    previous_public_key: {
      value: cdktf.stringToHclTerraform(struct!.previousPublicKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vault_secret_id: {
      value: cdktf.stringToHclTerraform(struct!.vaultSecretId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_key_source_type: {
      value: cdktf.stringToHclTerraform(struct!.verificationKeySourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentPublicKey = this._currentPublicKey;
    }
    if (this._previousPublicKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.previousPublicKey = this._previousPublicKey;
    }
    if (this._vaultSecretId !== undefined) {
      hasAnyValues = true;
      internalValueResult.vaultSecretId = this._vaultSecretId;
    }
    if (this._verificationKeySourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationKeySourceType = this._verificationKeySourceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currentPublicKey = undefined;
      this._previousPublicKey = undefined;
      this._vaultSecretId = undefined;
      this._verificationKeySourceType = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currentPublicKey = value.currentPublicKey;
      this._previousPublicKey = value.previousPublicKey;
      this._vaultSecretId = value.vaultSecretId;
      this._verificationKeySourceType = value.verificationKeySourceType;
    }
  }

  // current_public_key - computed: false, optional: true, required: false
  private _currentPublicKey?: string; 
  public get currentPublicKey() {
    return this.getStringAttribute('current_public_key');
  }
  public set currentPublicKey(value: string) {
    this._currentPublicKey = value;
  }
  public resetCurrentPublicKey() {
    this._currentPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentPublicKeyInput() {
    return this._currentPublicKey;
  }

  // previous_public_key - computed: false, optional: true, required: false
  private _previousPublicKey?: string; 
  public get previousPublicKey() {
    return this.getStringAttribute('previous_public_key');
  }
  public set previousPublicKey(value: string) {
    this._previousPublicKey = value;
  }
  public resetPreviousPublicKey() {
    this._previousPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get previousPublicKeyInput() {
    return this._previousPublicKey;
  }

  // vault_secret_id - computed: false, optional: true, required: false
  private _vaultSecretId?: string; 
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }
  public set vaultSecretId(value: string) {
    this._vaultSecretId = value;
  }
  public resetVaultSecretId() {
    this._vaultSecretId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vaultSecretIdInput() {
    return this._vaultSecretId;
  }

  // verification_key_source_type - computed: false, optional: false, required: true
  private _verificationKeySourceType?: string; 
  public get verificationKeySourceType() {
    return this.getStringAttribute('verification_key_source_type');
  }
  public set verificationKeySourceType(value: string) {
    this._verificationKeySourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationKeySourceTypeInput() {
    return this._verificationKeySourceType;
  }
}
export interface DevopsDeployArtifactDeployArtifactSource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#base64encoded_content DevopsDeployArtifact#base64encoded_content}
  */
  readonly base64EncodedContent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#chart_url DevopsDeployArtifact#chart_url}
  */
  readonly chartUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#deploy_artifact_path DevopsDeployArtifact#deploy_artifact_path}
  */
  readonly deployArtifactPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#deploy_artifact_source_type DevopsDeployArtifact#deploy_artifact_source_type}
  */
  readonly deployArtifactSourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#deploy_artifact_version DevopsDeployArtifact#deploy_artifact_version}
  */
  readonly deployArtifactVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#helm_artifact_source_type DevopsDeployArtifact#helm_artifact_source_type}
  */
  readonly helmArtifactSourceType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#image_digest DevopsDeployArtifact#image_digest}
  */
  readonly imageDigest?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#image_uri DevopsDeployArtifact#image_uri}
  */
  readonly imageUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#repository_id DevopsDeployArtifact#repository_id}
  */
  readonly repositoryId?: string;
  /**
  * helm_verification_key_source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#helm_verification_key_source DevopsDeployArtifact#helm_verification_key_source}
  */
  readonly helmVerificationKeySource?: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource;
}

export function devopsDeployArtifactDeployArtifactSourceToTerraform(struct?: DevopsDeployArtifactDeployArtifactSourceOutputReference | DevopsDeployArtifactDeployArtifactSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    base64encoded_content: cdktf.stringToTerraform(struct!.base64EncodedContent),
    chart_url: cdktf.stringToTerraform(struct!.chartUrl),
    deploy_artifact_path: cdktf.stringToTerraform(struct!.deployArtifactPath),
    deploy_artifact_source_type: cdktf.stringToTerraform(struct!.deployArtifactSourceType),
    deploy_artifact_version: cdktf.stringToTerraform(struct!.deployArtifactVersion),
    helm_artifact_source_type: cdktf.stringToTerraform(struct!.helmArtifactSourceType),
    image_digest: cdktf.stringToTerraform(struct!.imageDigest),
    image_uri: cdktf.stringToTerraform(struct!.imageUri),
    repository_id: cdktf.stringToTerraform(struct!.repositoryId),
    helm_verification_key_source: devopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceToTerraform(struct!.helmVerificationKeySource),
  }
}


export function devopsDeployArtifactDeployArtifactSourceToHclTerraform(struct?: DevopsDeployArtifactDeployArtifactSourceOutputReference | DevopsDeployArtifactDeployArtifactSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    base64encoded_content: {
      value: cdktf.stringToHclTerraform(struct!.base64EncodedContent),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    chart_url: {
      value: cdktf.stringToHclTerraform(struct!.chartUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_artifact_path: {
      value: cdktf.stringToHclTerraform(struct!.deployArtifactPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_artifact_source_type: {
      value: cdktf.stringToHclTerraform(struct!.deployArtifactSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deploy_artifact_version: {
      value: cdktf.stringToHclTerraform(struct!.deployArtifactVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm_artifact_source_type: {
      value: cdktf.stringToHclTerraform(struct!.helmArtifactSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_digest: {
      value: cdktf.stringToHclTerraform(struct!.imageDigest),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_uri: {
      value: cdktf.stringToHclTerraform(struct!.imageUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_id: {
      value: cdktf.stringToHclTerraform(struct!.repositoryId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    helm_verification_key_source: {
      value: devopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceToHclTerraform(struct!.helmVerificationKeySource),
      isBlock: true,
      type: "list",
      storageClassType: "DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployArtifactDeployArtifactSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DevopsDeployArtifactDeployArtifactSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._base64EncodedContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.base64EncodedContent = this._base64EncodedContent;
    }
    if (this._chartUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartUrl = this._chartUrl;
    }
    if (this._deployArtifactPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployArtifactPath = this._deployArtifactPath;
    }
    if (this._deployArtifactSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployArtifactSourceType = this._deployArtifactSourceType;
    }
    if (this._deployArtifactVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.deployArtifactVersion = this._deployArtifactVersion;
    }
    if (this._helmArtifactSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmArtifactSourceType = this._helmArtifactSourceType;
    }
    if (this._imageDigest !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageDigest = this._imageDigest;
    }
    if (this._imageUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageUri = this._imageUri;
    }
    if (this._repositoryId !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryId = this._repositoryId;
    }
    if (this._helmVerificationKeySource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmVerificationKeySource = this._helmVerificationKeySource?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployArtifactDeployArtifactSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._base64EncodedContent = undefined;
      this._chartUrl = undefined;
      this._deployArtifactPath = undefined;
      this._deployArtifactSourceType = undefined;
      this._deployArtifactVersion = undefined;
      this._helmArtifactSourceType = undefined;
      this._imageDigest = undefined;
      this._imageUri = undefined;
      this._repositoryId = undefined;
      this._helmVerificationKeySource.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._base64EncodedContent = value.base64EncodedContent;
      this._chartUrl = value.chartUrl;
      this._deployArtifactPath = value.deployArtifactPath;
      this._deployArtifactSourceType = value.deployArtifactSourceType;
      this._deployArtifactVersion = value.deployArtifactVersion;
      this._helmArtifactSourceType = value.helmArtifactSourceType;
      this._imageDigest = value.imageDigest;
      this._imageUri = value.imageUri;
      this._repositoryId = value.repositoryId;
      this._helmVerificationKeySource.internalValue = value.helmVerificationKeySource;
    }
  }

  // base64encoded_content - computed: true, optional: true, required: false
  private _base64EncodedContent?: string; 
  public get base64EncodedContent() {
    return this.getStringAttribute('base64encoded_content');
  }
  public set base64EncodedContent(value: string) {
    this._base64EncodedContent = value;
  }
  public resetBase64EncodedContent() {
    this._base64EncodedContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get base64EncodedContentInput() {
    return this._base64EncodedContent;
  }

  // chart_url - computed: true, optional: true, required: false
  private _chartUrl?: string; 
  public get chartUrl() {
    return this.getStringAttribute('chart_url');
  }
  public set chartUrl(value: string) {
    this._chartUrl = value;
  }
  public resetChartUrl() {
    this._chartUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartUrlInput() {
    return this._chartUrl;
  }

  // deploy_artifact_path - computed: true, optional: true, required: false
  private _deployArtifactPath?: string; 
  public get deployArtifactPath() {
    return this.getStringAttribute('deploy_artifact_path');
  }
  public set deployArtifactPath(value: string) {
    this._deployArtifactPath = value;
  }
  public resetDeployArtifactPath() {
    this._deployArtifactPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactPathInput() {
    return this._deployArtifactPath;
  }

  // deploy_artifact_source_type - computed: false, optional: false, required: true
  private _deployArtifactSourceType?: string; 
  public get deployArtifactSourceType() {
    return this.getStringAttribute('deploy_artifact_source_type');
  }
  public set deployArtifactSourceType(value: string) {
    this._deployArtifactSourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactSourceTypeInput() {
    return this._deployArtifactSourceType;
  }

  // deploy_artifact_version - computed: true, optional: true, required: false
  private _deployArtifactVersion?: string; 
  public get deployArtifactVersion() {
    return this.getStringAttribute('deploy_artifact_version');
  }
  public set deployArtifactVersion(value: string) {
    this._deployArtifactVersion = value;
  }
  public resetDeployArtifactVersion() {
    this._deployArtifactVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactVersionInput() {
    return this._deployArtifactVersion;
  }

  // helm_artifact_source_type - computed: true, optional: true, required: false
  private _helmArtifactSourceType?: string; 
  public get helmArtifactSourceType() {
    return this.getStringAttribute('helm_artifact_source_type');
  }
  public set helmArtifactSourceType(value: string) {
    this._helmArtifactSourceType = value;
  }
  public resetHelmArtifactSourceType() {
    this._helmArtifactSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmArtifactSourceTypeInput() {
    return this._helmArtifactSourceType;
  }

  // image_digest - computed: true, optional: true, required: false
  private _imageDigest?: string; 
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }
  public set imageDigest(value: string) {
    this._imageDigest = value;
  }
  public resetImageDigest() {
    this._imageDigest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageDigestInput() {
    return this._imageDigest;
  }

  // image_uri - computed: true, optional: true, required: false
  private _imageUri?: string; 
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }
  public set imageUri(value: string) {
    this._imageUri = value;
  }
  public resetImageUri() {
    this._imageUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageUriInput() {
    return this._imageUri;
  }

  // repository_id - computed: true, optional: true, required: false
  private _repositoryId?: string; 
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
  public set repositoryId(value: string) {
    this._repositoryId = value;
  }
  public resetRepositoryId() {
    this._repositoryId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryIdInput() {
    return this._repositoryId;
  }

  // helm_verification_key_source - computed: false, optional: true, required: false
  private _helmVerificationKeySource = new DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(this, "helm_verification_key_source");
  public get helmVerificationKeySource() {
    return this._helmVerificationKeySource;
  }
  public putHelmVerificationKeySource(value: DevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource) {
    this._helmVerificationKeySource.internalValue = value;
  }
  public resetHelmVerificationKeySource() {
    this._helmVerificationKeySource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmVerificationKeySourceInput() {
    return this._helmVerificationKeySource.internalValue;
  }
}
export interface DevopsDeployArtifactTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#create DevopsDeployArtifact#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#delete DevopsDeployArtifact#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#update DevopsDeployArtifact#update}
  */
  readonly update?: string;
}

export function devopsDeployArtifactTimeoutsToTerraform(struct?: DevopsDeployArtifactTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function devopsDeployArtifactTimeoutsToHclTerraform(struct?: DevopsDeployArtifactTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DevopsDeployArtifactTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DevopsDeployArtifactTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DevopsDeployArtifactTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact oci_devops_deploy_artifact}
*/
export class DevopsDeployArtifact extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_deploy_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DevopsDeployArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DevopsDeployArtifact to import
  * @param importFromId The id of the existing DevopsDeployArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DevopsDeployArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_deploy_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/devops_deploy_artifact oci_devops_deploy_artifact} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DevopsDeployArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DevopsDeployArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_deploy_artifact',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0',
        providerVersionConstraint: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._argumentSubstitutionMode = config.argumentSubstitutionMode;
    this._definedTags = config.definedTags;
    this._deployArtifactType = config.deployArtifactType;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._projectId = config.projectId;
    this._deployArtifactSource.internalValue = config.deployArtifactSource;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argument_substitution_mode - computed: false, optional: false, required: true
  private _argumentSubstitutionMode?: string; 
  public get argumentSubstitutionMode() {
    return this.getStringAttribute('argument_substitution_mode');
  }
  public set argumentSubstitutionMode(value: string) {
    this._argumentSubstitutionMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get argumentSubstitutionModeInput() {
    return this._argumentSubstitutionMode;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

  // deploy_artifact_type - computed: false, optional: false, required: true
  private _deployArtifactType?: string; 
  public get deployArtifactType() {
    return this.getStringAttribute('deploy_artifact_type');
  }
  public set deployArtifactType(value: string) {
    this._deployArtifactType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactTypeInput() {
    return this._deployArtifactType;
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

  // display_name - computed: true, optional: true, required: false
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

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // deploy_artifact_source - computed: false, optional: false, required: true
  private _deployArtifactSource = new DevopsDeployArtifactDeployArtifactSourceOutputReference(this, "deploy_artifact_source");
  public get deployArtifactSource() {
    return this._deployArtifactSource;
  }
  public putDeployArtifactSource(value: DevopsDeployArtifactDeployArtifactSource) {
    this._deployArtifactSource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactSourceInput() {
    return this._deployArtifactSource.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DevopsDeployArtifactTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DevopsDeployArtifactTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      argument_substitution_mode: cdktf.stringToTerraform(this._argumentSubstitutionMode),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      deploy_artifact_type: cdktf.stringToTerraform(this._deployArtifactType),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      deploy_artifact_source: devopsDeployArtifactDeployArtifactSourceToTerraform(this._deployArtifactSource.internalValue),
      timeouts: devopsDeployArtifactTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      argument_substitution_mode: {
        value: cdktf.stringToHclTerraform(this._argumentSubstitutionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      deploy_artifact_type: {
        value: cdktf.stringToHclTerraform(this._deployArtifactType),
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
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deploy_artifact_source: {
        value: devopsDeployArtifactDeployArtifactSourceToHclTerraform(this._deployArtifactSource.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DevopsDeployArtifactDeployArtifactSourceList",
      },
      timeouts: {
        value: devopsDeployArtifactTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DevopsDeployArtifactTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
