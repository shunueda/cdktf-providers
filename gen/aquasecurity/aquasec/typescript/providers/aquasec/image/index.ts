// https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * If this field is set to true, the image will be whitelisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#allow_image Image#allow_image}
  */
  readonly allowImage?: boolean | cdktf.IResolvable;
  /**
  * If this field is set to true, the image will be blacklisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#block_image Image#block_image}
  */
  readonly blockImage?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#id Image#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * A comment on why the image was whitelisted or blacklisted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#permission_modification_comment Image#permission_modification_comment}
  */
  readonly permissionModificationComment?: string;
  /**
  * The name of the registry where the image is stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#registry Image#registry}
  */
  readonly registry: string;
  /**
  * The name of the image's repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#repository Image#repository}
  */
  readonly repository: string;
  /**
  * The tag of the image.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#tag Image#tag}
  */
  readonly tag: string;
}
export interface ImageAssuranceChecksPerformed {
}

export function imageAssuranceChecksPerformedToTerraform(struct?: ImageAssuranceChecksPerformed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageAssuranceChecksPerformedToHclTerraform(struct?: ImageAssuranceChecksPerformed): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageAssuranceChecksPerformedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageAssuranceChecksPerformed | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageAssuranceChecksPerformed | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // assurance_type - computed: true, optional: false, required: false
  public get assuranceType() {
    return this.getStringAttribute('assurance_type');
  }

  // blocking - computed: true, optional: false, required: false
  public get blocking() {
    return this.getBooleanAttribute('blocking');
  }

  // control - computed: true, optional: false, required: false
  public get control() {
    return this.getStringAttribute('control');
  }

  // dta_skipped - computed: true, optional: false, required: false
  public get dtaSkipped() {
    return this.getBooleanAttribute('dta_skipped');
  }

  // dta_skipped_reason - computed: true, optional: false, required: false
  public get dtaSkippedReason() {
    return this.getStringAttribute('dta_skipped_reason');
  }

  // failed - computed: true, optional: false, required: false
  public get failed() {
    return this.getBooleanAttribute('failed');
  }

  // policy_name - computed: true, optional: false, required: false
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
}

export class ImageAssuranceChecksPerformedList extends cdktf.ComplexList {

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
  public get(index: number): ImageAssuranceChecksPerformedOutputReference {
    return new ImageAssuranceChecksPerformedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageHistory {
}

export function imageHistoryToTerraform(struct?: ImageHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageHistoryToHclTerraform(struct?: ImageHistory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageHistoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageHistory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageHistory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // size - computed: true, optional: false, required: false
  public get size() {
    return this.getNumberAttribute('size');
  }
}

export class ImageHistoryList extends cdktf.ComplexList {

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
  public get(index: number): ImageHistoryOutputReference {
    return new ImageHistoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ImageVulnerabilities {
}

export function imageVulnerabilitiesToTerraform(struct?: ImageVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function imageVulnerabilitiesToHclTerraform(struct?: ImageVulnerabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class ImageVulnerabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ImageVulnerabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageVulnerabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ack_author - computed: true, optional: false, required: false
  public get ackAuthor() {
    return this.getStringAttribute('ack_author');
  }

  // ack_comment - computed: true, optional: false, required: false
  public get ackComment() {
    return this.getStringAttribute('ack_comment');
  }

  // ack_expiration_configured_at - computed: true, optional: false, required: false
  public get ackExpirationConfiguredAt() {
    return this.getStringAttribute('ack_expiration_configured_at');
  }

  // ack_expiration_configured_by - computed: true, optional: false, required: false
  public get ackExpirationConfiguredBy() {
    return this.getStringAttribute('ack_expiration_configured_by');
  }

  // ack_expiration_days - computed: true, optional: false, required: false
  public get ackExpirationDays() {
    return this.getNumberAttribute('ack_expiration_days');
  }

  // ack_scope - computed: true, optional: false, required: false
  public get ackScope() {
    return this.getStringAttribute('ack_scope');
  }

  // acknowledge_date - computed: true, optional: false, required: false
  public get acknowledgeDate() {
    return this.getStringAttribute('acknowledge_date');
  }

  // ancestor_pkg - computed: true, optional: false, required: false
  public get ancestorPkg() {
    return this.getStringAttribute('ancestor_pkg');
  }

  // aqua_score - computed: true, optional: false, required: false
  public get aquaScore() {
    return this.getNumberAttribute('aqua_score');
  }

  // aqua_score_classification - computed: true, optional: false, required: false
  public get aquaScoreClassification() {
    return this.getStringAttribute('aqua_score_classification');
  }

  // aqua_scoring_system - computed: true, optional: false, required: false
  public get aquaScoringSystem() {
    return this.getStringAttribute('aqua_scoring_system');
  }

  // aqua_severity - computed: true, optional: false, required: false
  public get aquaSeverity() {
    return this.getStringAttribute('aqua_severity');
  }

  // aqua_severity_classification - computed: true, optional: false, required: false
  public get aquaSeverityClassification() {
    return this.getStringAttribute('aqua_severity_classification');
  }

  // aqua_vectors - computed: true, optional: false, required: false
  public get aquaVectors() {
    return this.getStringAttribute('aqua_vectors');
  }

  // audit_events_count - computed: true, optional: false, required: false
  public get auditEventsCount() {
    return this.getNumberAttribute('audit_events_count');
  }

  // block_events_count - computed: true, optional: false, required: false
  public get blockEventsCount() {
    return this.getNumberAttribute('block_events_count');
  }

  // classification - computed: true, optional: false, required: false
  public get classification() {
    return this.getStringAttribute('classification');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // exploit_reference - computed: true, optional: false, required: false
  public get exploitReference() {
    return this.getStringAttribute('exploit_reference');
  }

  // exploit_type - computed: true, optional: false, required: false
  public get exploitType() {
    return this.getStringAttribute('exploit_type');
  }

  // first_found_date - computed: true, optional: false, required: false
  public get firstFoundDate() {
    return this.getStringAttribute('first_found_date');
  }

  // fix_version - computed: true, optional: false, required: false
  public get fixVersion() {
    return this.getStringAttribute('fix_version');
  }

  // image_name - computed: true, optional: false, required: false
  public get imageName() {
    return this.getStringAttribute('image_name');
  }

  // last_found_date - computed: true, optional: false, required: false
  public get lastFoundDate() {
    return this.getStringAttribute('last_found_date');
  }

  // modification_date - computed: true, optional: false, required: false
  public get modificationDate() {
    return this.getStringAttribute('modification_date');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // nvd_cvss2_score - computed: true, optional: false, required: false
  public get nvdCvss2Score() {
    return this.getNumberAttribute('nvd_cvss2_score');
  }

  // nvd_cvss2_vectors - computed: true, optional: false, required: false
  public get nvdCvss2Vectors() {
    return this.getStringAttribute('nvd_cvss2_vectors');
  }

  // nvd_cvss3_score - computed: true, optional: false, required: false
  public get nvdCvss3Score() {
    return this.getNumberAttribute('nvd_cvss3_score');
  }

  // nvd_cvss3_severity - computed: true, optional: false, required: false
  public get nvdCvss3Severity() {
    return this.getStringAttribute('nvd_cvss3_severity');
  }

  // nvd_cvss3_vectors - computed: true, optional: false, required: false
  public get nvdCvss3Vectors() {
    return this.getStringAttribute('nvd_cvss3_vectors');
  }

  // nvd_severity - computed: true, optional: false, required: false
  public get nvdSeverity() {
    return this.getStringAttribute('nvd_severity');
  }

  // nvd_url - computed: true, optional: false, required: false
  public get nvdUrl() {
    return this.getStringAttribute('nvd_url');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // publish_date - computed: true, optional: false, required: false
  public get publishDate() {
    return this.getStringAttribute('publish_date');
  }

  // registry - computed: true, optional: false, required: false
  public get registry() {
    return this.getStringAttribute('registry');
  }

  // repository - computed: true, optional: false, required: false
  public get repository() {
    return this.getStringAttribute('repository');
  }

  // resource_architecture - computed: true, optional: false, required: false
  public get resourceArchitecture() {
    return this.getStringAttribute('resource_architecture');
  }

  // resource_cpe - computed: true, optional: false, required: false
  public get resourceCpe() {
    return this.getStringAttribute('resource_cpe');
  }

  // resource_format - computed: true, optional: false, required: false
  public get resourceFormat() {
    return this.getStringAttribute('resource_format');
  }

  // resource_hash - computed: true, optional: false, required: false
  public get resourceHash() {
    return this.getStringAttribute('resource_hash');
  }

  // resource_licenses - computed: true, optional: false, required: false
  public get resourceLicenses() {
    return this.getListAttribute('resource_licenses');
  }

  // resource_name - computed: true, optional: false, required: false
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }

  // resource_path - computed: true, optional: false, required: false
  public get resourcePath() {
    return this.getStringAttribute('resource_path');
  }

  // resource_type - computed: true, optional: false, required: false
  public get resourceType() {
    return this.getStringAttribute('resource_type');
  }

  // resource_version - computed: true, optional: false, required: false
  public get resourceVersion() {
    return this.getStringAttribute('resource_version');
  }

  // severity_classification - computed: true, optional: false, required: false
  public get severityClassification() {
    return this.getStringAttribute('severity_classification');
  }

  // solution - computed: true, optional: false, required: false
  public get solution() {
    return this.getStringAttribute('solution');
  }

  // temporal_vector - computed: true, optional: false, required: false
  public get temporalVector() {
    return this.getStringAttribute('temporal_vector');
  }

  // v_patch_applied_by - computed: true, optional: false, required: false
  public get vPatchAppliedBy() {
    return this.getStringAttribute('v_patch_applied_by');
  }

  // v_patch_applied_on - computed: true, optional: false, required: false
  public get vPatchAppliedOn() {
    return this.getStringAttribute('v_patch_applied_on');
  }

  // v_patch_enforced_by - computed: true, optional: false, required: false
  public get vPatchEnforcedBy() {
    return this.getStringAttribute('v_patch_enforced_by');
  }

  // v_patch_enforced_on - computed: true, optional: false, required: false
  public get vPatchEnforcedOn() {
    return this.getStringAttribute('v_patch_enforced_on');
  }

  // v_patch_policy_enforce - computed: true, optional: false, required: false
  public get vPatchPolicyEnforce() {
    return this.getBooleanAttribute('v_patch_policy_enforce');
  }

  // v_patch_policy_name - computed: true, optional: false, required: false
  public get vPatchPolicyName() {
    return this.getStringAttribute('v_patch_policy_name');
  }

  // v_patch_reverted_by - computed: true, optional: false, required: false
  public get vPatchRevertedBy() {
    return this.getStringAttribute('v_patch_reverted_by');
  }

  // v_patch_reverted_on - computed: true, optional: false, required: false
  public get vPatchRevertedOn() {
    return this.getStringAttribute('v_patch_reverted_on');
  }

  // v_patch_status - computed: true, optional: false, required: false
  public get vPatchStatus() {
    return this.getStringAttribute('v_patch_status');
  }

  // vendor_cvss2_score - computed: true, optional: false, required: false
  public get vendorCvss2Score() {
    return this.getNumberAttribute('vendor_cvss2_score');
  }

  // vendor_cvss2_vectors - computed: true, optional: false, required: false
  public get vendorCvss2Vectors() {
    return this.getStringAttribute('vendor_cvss2_vectors');
  }

  // vendor_severity - computed: true, optional: false, required: false
  public get vendorSeverity() {
    return this.getStringAttribute('vendor_severity');
  }

  // vendor_statement - computed: true, optional: false, required: false
  public get vendorStatement() {
    return this.getStringAttribute('vendor_statement');
  }

  // vendor_url - computed: true, optional: false, required: false
  public get vendorUrl() {
    return this.getStringAttribute('vendor_url');
  }
}

export class ImageVulnerabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): ImageVulnerabilitiesOutputReference {
    return new ImageVulnerabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image aquasec_image}
*/
export class Image extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aquasec_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Image resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Image to import
  * @param importFromId The id of the existing Image that should be imported. Refer to the {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Image to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aquasec_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aquasecurity/aquasec/0.11.0/docs/resources/image aquasec_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageConfig
  */
  public constructor(scope: Construct, id: string, config: ImageConfig) {
    super(scope, id, {
      terraformResourceType: 'aquasec_image',
      terraformGeneratorMetadata: {
        providerName: 'aquasec',
        providerVersion: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowImage = config.allowImage;
    this._blockImage = config.blockImage;
    this._id = config.id;
    this._permissionModificationComment = config.permissionModificationComment;
    this._registry = config.registry;
    this._repository = config.repository;
    this._tag = config.tag;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_image - computed: false, optional: true, required: false
  private _allowImage?: boolean | cdktf.IResolvable; 
  public get allowImage() {
    return this.getBooleanAttribute('allow_image');
  }
  public set allowImage(value: boolean | cdktf.IResolvable) {
    this._allowImage = value;
  }
  public resetAllowImage() {
    this._allowImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowImageInput() {
    return this._allowImage;
  }

  // architecture - computed: true, optional: false, required: false
  public get architecture() {
    return this.getStringAttribute('architecture');
  }

  // assurance_checks_performed - computed: true, optional: false, required: false
  private _assuranceChecksPerformed = new ImageAssuranceChecksPerformedList(this, "assurance_checks_performed", false);
  public get assuranceChecksPerformed() {
    return this._assuranceChecksPerformed;
  }

  // author - computed: true, optional: false, required: false
  public get author() {
    return this.getStringAttribute('author');
  }

  // blacklisted - computed: true, optional: false, required: false
  public get blacklisted() {
    return this.getBooleanAttribute('blacklisted');
  }

  // block_image - computed: false, optional: true, required: false
  private _blockImage?: boolean | cdktf.IResolvable; 
  public get blockImage() {
    return this.getBooleanAttribute('block_image');
  }
  public set blockImage(value: boolean | cdktf.IResolvable) {
    this._blockImage = value;
  }
  public resetBlockImage() {
    this._blockImage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockImageInput() {
    return this._blockImage;
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created - computed: true, optional: false, required: false
  public get created() {
    return this.getStringAttribute('created');
  }

  // critical_vulnerabilities - computed: true, optional: false, required: false
  public get criticalVulnerabilities() {
    return this.getNumberAttribute('critical_vulnerabilities');
  }

  // default_user - computed: true, optional: false, required: false
  public get defaultUser() {
    return this.getStringAttribute('default_user');
  }

  // digest - computed: true, optional: false, required: false
  public get digest() {
    return this.getStringAttribute('digest');
  }

  // disallowed - computed: true, optional: false, required: false
  public get disallowed() {
    return this.getBooleanAttribute('disallowed');
  }

  // disallowed_by_assurance_checks - computed: true, optional: false, required: false
  public get disallowedByAssuranceChecks() {
    return this.getBooleanAttribute('disallowed_by_assurance_checks');
  }

  // docker_id - computed: true, optional: false, required: false
  public get dockerId() {
    return this.getStringAttribute('docker_id');
  }

  // docker_labels - computed: true, optional: false, required: false
  public get dockerLabels() {
    return this.getListAttribute('docker_labels');
  }

  // docker_version - computed: true, optional: false, required: false
  public get dockerVersion() {
    return this.getStringAttribute('docker_version');
  }

  // dta_severity_score - computed: true, optional: false, required: false
  public get dtaSeverityScore() {
    return this.getStringAttribute('dta_severity_score');
  }

  // dta_skipped - computed: true, optional: false, required: false
  public get dtaSkipped() {
    return this.getBooleanAttribute('dta_skipped');
  }

  // dta_skipped_reason - computed: true, optional: false, required: false
  public get dtaSkippedReason() {
    return this.getStringAttribute('dta_skipped_reason');
  }

  // environment_variables - computed: true, optional: false, required: false
  public get environmentVariables() {
    return this.getListAttribute('environment_variables');
  }

  // high_vulnerabilities - computed: true, optional: false, required: false
  public get highVulnerabilities() {
    return this.getNumberAttribute('high_vulnerabilities');
  }

  // history - computed: true, optional: false, required: false
  private _history = new ImageHistoryList(this, "history", false);
  public get history() {
    return this._history;
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

  // image_size - computed: true, optional: false, required: false
  public get imageSize() {
    return this.getNumberAttribute('image_size');
  }

  // image_type - computed: true, optional: false, required: false
  public get imageType() {
    return this.getStringAttribute('image_type');
  }

  // labels - computed: true, optional: false, required: false
  public get labels() {
    return this.getListAttribute('labels');
  }

  // low_vulnerabilities - computed: true, optional: false, required: false
  public get lowVulnerabilities() {
    return this.getNumberAttribute('low_vulnerabilities');
  }

  // malware - computed: true, optional: false, required: false
  public get malware() {
    return this.getNumberAttribute('malware');
  }

  // medium_vulnerabilities - computed: true, optional: false, required: false
  public get mediumVulnerabilities() {
    return this.getNumberAttribute('medium_vulnerabilities');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // negligible_vulnerabilities - computed: true, optional: false, required: false
  public get negligibleVulnerabilities() {
    return this.getNumberAttribute('negligible_vulnerabilities');
  }

  // newer_image_exists - computed: true, optional: false, required: false
  public get newerImageExists() {
    return this.getBooleanAttribute('newer_image_exists');
  }

  // os - computed: true, optional: false, required: false
  public get os() {
    return this.getStringAttribute('os');
  }

  // os_version - computed: true, optional: false, required: false
  public get osVersion() {
    return this.getStringAttribute('os_version');
  }

  // parent - computed: true, optional: false, required: false
  public get parent() {
    return this.getStringAttribute('parent');
  }

  // partial_results - computed: true, optional: false, required: false
  public get partialResults() {
    return this.getBooleanAttribute('partial_results');
  }

  // pending_disallowed - computed: true, optional: false, required: false
  public get pendingDisallowed() {
    return this.getBooleanAttribute('pending_disallowed');
  }

  // permission - computed: true, optional: false, required: false
  public get permission() {
    return this.getStringAttribute('permission');
  }

  // permission_author - computed: true, optional: false, required: false
  public get permissionAuthor() {
    return this.getStringAttribute('permission_author');
  }

  // permission_comment - computed: true, optional: false, required: false
  public get permissionComment() {
    return this.getStringAttribute('permission_comment');
  }

  // permission_modification_comment - computed: false, optional: true, required: false
  private _permissionModificationComment?: string; 
  public get permissionModificationComment() {
    return this.getStringAttribute('permission_modification_comment');
  }
  public set permissionModificationComment(value: string) {
    this._permissionModificationComment = value;
  }
  public resetPermissionModificationComment() {
    this._permissionModificationComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionModificationCommentInput() {
    return this._permissionModificationComment;
  }

  // registry - computed: false, optional: false, required: true
  private _registry?: string; 
  public get registry() {
    return this.getStringAttribute('registry');
  }
  public set registry(value: string) {
    this._registry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registryInput() {
    return this._registry;
  }

  // registry_type - computed: true, optional: false, required: false
  public get registryType() {
    return this.getStringAttribute('registry_type');
  }

  // repo_digests - computed: true, optional: false, required: false
  public get repoDigests() {
    return this.getListAttribute('repo_digests');
  }

  // repository - computed: false, optional: false, required: true
  private _repository?: string; 
  public get repository() {
    return this.getStringAttribute('repository');
  }
  public set repository(value: string) {
    this._repository = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryInput() {
    return this._repository;
  }

  // scan_date - computed: true, optional: false, required: false
  public get scanDate() {
    return this.getStringAttribute('scan_date');
  }

  // scan_error - computed: true, optional: false, required: false
  public get scanError() {
    return this.getStringAttribute('scan_error');
  }

  // scan_status - computed: true, optional: false, required: false
  public get scanStatus() {
    return this.getStringAttribute('scan_status');
  }

  // sensitive_data - computed: true, optional: false, required: false
  public get sensitiveData() {
    return this.getNumberAttribute('sensitive_data');
  }

  // tag - computed: false, optional: false, required: true
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // total_vulnerabilities - computed: true, optional: false, required: false
  public get totalVulnerabilities() {
    return this.getNumberAttribute('total_vulnerabilities');
  }

  // virtual_size - computed: true, optional: false, required: false
  public get virtualSize() {
    return this.getNumberAttribute('virtual_size');
  }

  // vulnerabilities - computed: true, optional: false, required: false
  private _vulnerabilities = new ImageVulnerabilitiesList(this, "vulnerabilities", false);
  public get vulnerabilities() {
    return this._vulnerabilities;
  }

  // whitelisted - computed: true, optional: false, required: false
  public get whitelisted() {
    return this.getBooleanAttribute('whitelisted');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_image: cdktf.booleanToTerraform(this._allowImage),
      block_image: cdktf.booleanToTerraform(this._blockImage),
      id: cdktf.stringToTerraform(this._id),
      permission_modification_comment: cdktf.stringToTerraform(this._permissionModificationComment),
      registry: cdktf.stringToTerraform(this._registry),
      repository: cdktf.stringToTerraform(this._repository),
      tag: cdktf.stringToTerraform(this._tag),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_image: {
        value: cdktf.booleanToHclTerraform(this._allowImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      block_image: {
        value: cdktf.booleanToHclTerraform(this._blockImage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      permission_modification_comment: {
        value: cdktf.stringToHclTerraform(this._permissionModificationComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      registry: {
        value: cdktf.stringToHclTerraform(this._registry),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      repository: {
        value: cdktf.stringToHclTerraform(this._repository),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tag: {
        value: cdktf.stringToHclTerraform(this._tag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
