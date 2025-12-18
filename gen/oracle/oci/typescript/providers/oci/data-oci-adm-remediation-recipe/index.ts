// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_recipe
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciAdmRemediationRecipeConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_recipe#remediation_recipe_id DataOciAdmRemediationRecipe#remediation_recipe_id}
  */
  readonly remediationRecipeId: string;
}
export interface DataOciAdmRemediationRecipeDetectConfiguration {
}

export function dataOciAdmRemediationRecipeDetectConfigurationToTerraform(struct?: DataOciAdmRemediationRecipeDetectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRecipeDetectConfigurationToHclTerraform(struct?: DataOciAdmRemediationRecipeDetectConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRecipeDetectConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRecipeDetectConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRecipeDetectConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclusions - computed: true, optional: false, required: false
  public get exclusions() {
    return this.getListAttribute('exclusions');
  }

  // max_permissible_cvss_v2score - computed: true, optional: false, required: false
  public get maxPermissibleCvssV2Score() {
    return this.getNumberAttribute('max_permissible_cvss_v2score');
  }

  // max_permissible_cvss_v3score - computed: true, optional: false, required: false
  public get maxPermissibleCvssV3Score() {
    return this.getNumberAttribute('max_permissible_cvss_v3score');
  }

  // max_permissible_severity - computed: true, optional: false, required: false
  public get maxPermissibleSeverity() {
    return this.getStringAttribute('max_permissible_severity');
  }

  // upgrade_policy - computed: true, optional: false, required: false
  public get upgradePolicy() {
    return this.getStringAttribute('upgrade_policy');
  }
}

export class DataOciAdmRemediationRecipeDetectConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRecipeDetectConfigurationOutputReference {
    return new DataOciAdmRemediationRecipeDetectConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAdmRemediationRecipeNetworkConfiguration {
}

export function dataOciAdmRemediationRecipeNetworkConfigurationToTerraform(struct?: DataOciAdmRemediationRecipeNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRecipeNetworkConfigurationToHclTerraform(struct?: DataOciAdmRemediationRecipeNetworkConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRecipeNetworkConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRecipeNetworkConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRecipeNetworkConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // nsg_ids - computed: true, optional: false, required: false
  public get nsgIds() {
    return this.getListAttribute('nsg_ids');
  }

  // subnet_id - computed: true, optional: false, required: false
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
}

export class DataOciAdmRemediationRecipeNetworkConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRecipeNetworkConfigurationOutputReference {
    return new DataOciAdmRemediationRecipeNetworkConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAdmRemediationRecipeScmConfiguration {
}

export function dataOciAdmRemediationRecipeScmConfigurationToTerraform(struct?: DataOciAdmRemediationRecipeScmConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRecipeScmConfigurationToHclTerraform(struct?: DataOciAdmRemediationRecipeScmConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRecipeScmConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRecipeScmConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRecipeScmConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // branch - computed: true, optional: false, required: false
  public get branch() {
    return this.getStringAttribute('branch');
  }

  // build_file_location - computed: true, optional: false, required: false
  public get buildFileLocation() {
    return this.getStringAttribute('build_file_location');
  }

  // external_scm_type - computed: true, optional: false, required: false
  public get externalScmType() {
    return this.getStringAttribute('external_scm_type');
  }

  // is_automerge_enabled - computed: true, optional: false, required: false
  public get isAutomergeEnabled() {
    return this.getBooleanAttribute('is_automerge_enabled');
  }

  // oci_code_repository_id - computed: true, optional: false, required: false
  public get ociCodeRepositoryId() {
    return this.getStringAttribute('oci_code_repository_id');
  }

  // pat_secret_id - computed: true, optional: false, required: false
  public get patSecretId() {
    return this.getStringAttribute('pat_secret_id');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // scm_type - computed: true, optional: false, required: false
  public get scmType() {
    return this.getStringAttribute('scm_type');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }
}

export class DataOciAdmRemediationRecipeScmConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRecipeScmConfigurationOutputReference {
    return new DataOciAdmRemediationRecipeScmConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciAdmRemediationRecipeVerifyConfiguration {
}

export function dataOciAdmRemediationRecipeVerifyConfigurationToTerraform(struct?: DataOciAdmRemediationRecipeVerifyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciAdmRemediationRecipeVerifyConfigurationToHclTerraform(struct?: DataOciAdmRemediationRecipeVerifyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciAdmRemediationRecipeVerifyConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciAdmRemediationRecipeVerifyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciAdmRemediationRecipeVerifyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_parameters - computed: true, optional: false, required: false
  private _additionalParameters = new cdktf.StringMap(this, "additional_parameters");
  public get additionalParameters() {
    return this._additionalParameters;
  }

  // build_service_type - computed: true, optional: false, required: false
  public get buildServiceType() {
    return this.getStringAttribute('build_service_type');
  }

  // jenkins_url - computed: true, optional: false, required: false
  public get jenkinsUrl() {
    return this.getStringAttribute('jenkins_url');
  }

  // job_name - computed: true, optional: false, required: false
  public get jobName() {
    return this.getStringAttribute('job_name');
  }

  // pat_secret_id - computed: true, optional: false, required: false
  public get patSecretId() {
    return this.getStringAttribute('pat_secret_id');
  }

  // pipeline_id - computed: true, optional: false, required: false
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }

  // repository_url - computed: true, optional: false, required: false
  public get repositoryUrl() {
    return this.getStringAttribute('repository_url');
  }

  // trigger_secret_id - computed: true, optional: false, required: false
  public get triggerSecretId() {
    return this.getStringAttribute('trigger_secret_id');
  }

  // username - computed: true, optional: false, required: false
  public get username() {
    return this.getStringAttribute('username');
  }

  // workflow_name - computed: true, optional: false, required: false
  public get workflowName() {
    return this.getStringAttribute('workflow_name');
  }
}

export class DataOciAdmRemediationRecipeVerifyConfigurationList extends cdktf.ComplexList {

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
  public get(index: number): DataOciAdmRemediationRecipeVerifyConfigurationOutputReference {
    return new DataOciAdmRemediationRecipeVerifyConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_recipe oci_adm_remediation_recipe}
*/
export class DataOciAdmRemediationRecipe extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_adm_remediation_recipe";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciAdmRemediationRecipe resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciAdmRemediationRecipe to import
  * @param importFromId The id of the existing DataOciAdmRemediationRecipe that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciAdmRemediationRecipe to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_adm_remediation_recipe", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/data-sources/adm_remediation_recipe oci_adm_remediation_recipe} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciAdmRemediationRecipeConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciAdmRemediationRecipeConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_adm_remediation_recipe',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._remediationRecipeId = config.remediationRecipeId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // detect_configuration - computed: true, optional: false, required: false
  private _detectConfiguration = new DataOciAdmRemediationRecipeDetectConfigurationList(this, "detect_configuration", false);
  public get detectConfiguration() {
    return this._detectConfiguration;
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

  // is_run_triggered_on_kb_change - computed: true, optional: false, required: false
  public get isRunTriggeredOnKbChange() {
    return this.getBooleanAttribute('is_run_triggered_on_kb_change');
  }

  // knowledge_base_id - computed: true, optional: false, required: false
  public get knowledgeBaseId() {
    return this.getStringAttribute('knowledge_base_id');
  }

  // network_configuration - computed: true, optional: false, required: false
  private _networkConfiguration = new DataOciAdmRemediationRecipeNetworkConfigurationList(this, "network_configuration", false);
  public get networkConfiguration() {
    return this._networkConfiguration;
  }

  // remediation_recipe_id - computed: false, optional: false, required: true
  private _remediationRecipeId?: string; 
  public get remediationRecipeId() {
    return this.getStringAttribute('remediation_recipe_id');
  }
  public set remediationRecipeId(value: string) {
    this._remediationRecipeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationRecipeIdInput() {
    return this._remediationRecipeId;
  }

  // scm_configuration - computed: true, optional: false, required: false
  private _scmConfiguration = new DataOciAdmRemediationRecipeScmConfigurationList(this, "scm_configuration", false);
  public get scmConfiguration() {
    return this._scmConfiguration;
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

  // verify_configuration - computed: true, optional: false, required: false
  private _verifyConfiguration = new DataOciAdmRemediationRecipeVerifyConfigurationList(this, "verify_configuration", false);
  public get verifyConfiguration() {
    return this._verifyConfiguration;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      remediation_recipe_id: cdktf.stringToTerraform(this._remediationRecipeId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      remediation_recipe_id: {
        value: cdktf.stringToHclTerraform(this._remediationRecipeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
