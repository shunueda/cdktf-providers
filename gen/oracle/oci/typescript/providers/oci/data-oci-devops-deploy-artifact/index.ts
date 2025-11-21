// https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/devops_deploy_artifact
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciDevopsDeployArtifactConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/devops_deploy_artifact#deploy_artifact_id DataOciDevopsDeployArtifact#deploy_artifact_id}
  */
  readonly deployArtifactId: string;
}
export interface DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource {
}

export function dataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceToTerraform(struct?: DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceToHclTerraform(struct?: DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // current_public_key - computed: true, optional: false, required: false
  public get currentPublicKey() {
    return this.getStringAttribute('current_public_key');
  }

  // previous_public_key - computed: true, optional: false, required: false
  public get previousPublicKey() {
    return this.getStringAttribute('previous_public_key');
  }

  // vault_secret_id - computed: true, optional: false, required: false
  public get vaultSecretId() {
    return this.getStringAttribute('vault_secret_id');
  }

  // verification_key_source_type - computed: true, optional: false, required: false
  public get verificationKeySourceType() {
    return this.getStringAttribute('verification_key_source_type');
  }
}

export class DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference {
    return new DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciDevopsDeployArtifactDeployArtifactSource {
}

export function dataOciDevopsDeployArtifactDeployArtifactSourceToTerraform(struct?: DataOciDevopsDeployArtifactDeployArtifactSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciDevopsDeployArtifactDeployArtifactSourceToHclTerraform(struct?: DataOciDevopsDeployArtifactDeployArtifactSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataOciDevopsDeployArtifactDeployArtifactSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciDevopsDeployArtifactDeployArtifactSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // base64encoded_content - computed: true, optional: false, required: false
  public get base64EncodedContent() {
    return this.getStringAttribute('base64encoded_content');
  }

  // chart_url - computed: true, optional: false, required: false
  public get chartUrl() {
    return this.getStringAttribute('chart_url');
  }

  // deploy_artifact_path - computed: true, optional: false, required: false
  public get deployArtifactPath() {
    return this.getStringAttribute('deploy_artifact_path');
  }

  // deploy_artifact_source_type - computed: true, optional: false, required: false
  public get deployArtifactSourceType() {
    return this.getStringAttribute('deploy_artifact_source_type');
  }

  // deploy_artifact_version - computed: true, optional: false, required: false
  public get deployArtifactVersion() {
    return this.getStringAttribute('deploy_artifact_version');
  }

  // helm_artifact_source_type - computed: true, optional: false, required: false
  public get helmArtifactSourceType() {
    return this.getStringAttribute('helm_artifact_source_type');
  }

  // helm_verification_key_source - computed: true, optional: false, required: false
  private _helmVerificationKeySource = new DataOciDevopsDeployArtifactDeployArtifactSourceHelmVerificationKeySourceList(this, "helm_verification_key_source", false);
  public get helmVerificationKeySource() {
    return this._helmVerificationKeySource;
  }

  // image_digest - computed: true, optional: false, required: false
  public get imageDigest() {
    return this.getStringAttribute('image_digest');
  }

  // image_uri - computed: true, optional: false, required: false
  public get imageUri() {
    return this.getStringAttribute('image_uri');
  }

  // repository_id - computed: true, optional: false, required: false
  public get repositoryId() {
    return this.getStringAttribute('repository_id');
  }
}

export class DataOciDevopsDeployArtifactDeployArtifactSourceList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference {
    return new DataOciDevopsDeployArtifactDeployArtifactSourceOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/devops_deploy_artifact oci_devops_deploy_artifact}
*/
export class DataOciDevopsDeployArtifact extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_devops_deploy_artifact";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciDevopsDeployArtifact resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciDevopsDeployArtifact to import
  * @param importFromId The id of the existing DataOciDevopsDeployArtifact that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/devops_deploy_artifact#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciDevopsDeployArtifact to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_devops_deploy_artifact", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.27.0/docs/data-sources/devops_deploy_artifact oci_devops_deploy_artifact} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciDevopsDeployArtifactConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciDevopsDeployArtifactConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_devops_deploy_artifact',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.27.0',
        providerVersionConstraint: '7.27.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deployArtifactId = config.deployArtifactId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // argument_substitution_mode - computed: true, optional: false, required: false
  public get argumentSubstitutionMode() {
    return this.getStringAttribute('argument_substitution_mode');
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // deploy_artifact_id - computed: false, optional: false, required: true
  private _deployArtifactId?: string; 
  public get deployArtifactId() {
    return this.getStringAttribute('deploy_artifact_id');
  }
  public set deployArtifactId(value: string) {
    this._deployArtifactId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deployArtifactIdInput() {
    return this._deployArtifactId;
  }

  // deploy_artifact_source - computed: true, optional: false, required: false
  private _deployArtifactSource = new DataOciDevopsDeployArtifactDeployArtifactSourceList(this, "deploy_artifact_source", false);
  public get deployArtifactSource() {
    return this._deployArtifactSource;
  }

  // deploy_artifact_type - computed: true, optional: false, required: false
  public get deployArtifactType() {
    return this.getStringAttribute('deploy_artifact_type');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy_artifact_id: cdktf.stringToTerraform(this._deployArtifactId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy_artifact_id: {
        value: cdktf.stringToHclTerraform(this._deployArtifactId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
