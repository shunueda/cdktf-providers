// https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/risk_profiles
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZiaRiskProfilesConfig extends cdktf.TerraformMetaArguments {
  /**
  * Unique identifier for the risk profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/risk_profiles#id DataZiaRiskProfiles#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: number;
  /**
  * Cloud application risk profile name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/risk_profiles#name DataZiaRiskProfiles#name}
  */
  readonly name?: string;
}
export interface DataZiaRiskProfilesCustomTags {
}

export function dataZiaRiskProfilesCustomTagsToTerraform(struct?: DataZiaRiskProfilesCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaRiskProfilesCustomTagsToHclTerraform(struct?: DataZiaRiskProfilesCustomTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaRiskProfilesCustomTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaRiskProfilesCustomTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaRiskProfilesCustomTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaRiskProfilesCustomTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaRiskProfilesCustomTagsOutputReference {
    return new DataZiaRiskProfilesCustomTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZiaRiskProfilesLastModifiedBy {
}

export function dataZiaRiskProfilesLastModifiedByToTerraform(struct?: DataZiaRiskProfilesLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataZiaRiskProfilesLastModifiedByToHclTerraform(struct?: DataZiaRiskProfilesLastModifiedBy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataZiaRiskProfilesLastModifiedByOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZiaRiskProfilesLastModifiedBy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZiaRiskProfilesLastModifiedBy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // extensions - computed: true, optional: false, required: false
  private _extensions = new cdktf.StringMap(this, "extensions");
  public get extensions() {
    return this._extensions;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataZiaRiskProfilesLastModifiedByList extends cdktf.ComplexList {

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
  public get(index: number): DataZiaRiskProfilesLastModifiedByOutputReference {
    return new DataZiaRiskProfilesLastModifiedByOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/risk_profiles zia_risk_profiles}
*/
export class DataZiaRiskProfiles extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_risk_profiles";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZiaRiskProfiles resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZiaRiskProfiles to import
  * @param importFromId The id of the existing DataZiaRiskProfiles that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/risk_profiles#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZiaRiskProfiles to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_risk_profiles", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.5/docs/data-sources/risk_profiles zia_risk_profiles} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZiaRiskProfilesConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZiaRiskProfilesConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_risk_profiles',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.5',
        providerVersionConstraint: '4.6.5'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admin_audit_logs - computed: true, optional: false, required: false
  public get adminAuditLogs() {
    return this.getStringAttribute('admin_audit_logs');
  }

  // certifications - computed: true, optional: false, required: false
  public get certifications() {
    return cdktf.Fn.tolist(this.getListAttribute('certifications'));
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getNumberAttribute('create_time');
  }

  // custom_tags - computed: true, optional: false, required: false
  private _customTags = new DataZiaRiskProfilesCustomTagsList(this, "custom_tags", false);
  public get customTags() {
    return this._customTags;
  }

  // data_breach - computed: true, optional: false, required: false
  public get dataBreach() {
    return this.getStringAttribute('data_breach');
  }

  // data_encryption_in_transit - computed: true, optional: false, required: false
  public get dataEncryptionInTransit() {
    return cdktf.Fn.tolist(this.getListAttribute('data_encryption_in_transit'));
  }

  // dns_caa_policy - computed: true, optional: false, required: false
  public get dnsCaaPolicy() {
    return this.getStringAttribute('dns_caa_policy');
  }

  // domain_based_message_auth - computed: true, optional: false, required: false
  public get domainBasedMessageAuth() {
    return this.getStringAttribute('domain_based_message_auth');
  }

  // domain_keys_identified_mail - computed: true, optional: false, required: false
  public get domainKeysIdentifiedMail() {
    return this.getStringAttribute('domain_keys_identified_mail');
  }

  // evasive - computed: true, optional: false, required: false
  public get evasive() {
    return this.getStringAttribute('evasive');
  }

  // exclude_certificates - computed: true, optional: false, required: false
  public get excludeCertificates() {
    return this.getNumberAttribute('exclude_certificates');
  }

  // file_sharing - computed: true, optional: false, required: false
  public get fileSharing() {
    return this.getStringAttribute('file_sharing');
  }

  // http_security_headers - computed: true, optional: false, required: false
  public get httpSecurityHeaders() {
    return this.getStringAttribute('http_security_headers');
  }

  // id - computed: true, optional: true, required: false
  private _id?: number; 
  public get id() {
    return this.getNumberAttribute('id');
  }
  public set id(value: number) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // last_mod_time - computed: true, optional: false, required: false
  public get lastModTime() {
    return this.getNumberAttribute('last_mod_time');
  }

  // last_modified_by - computed: true, optional: false, required: false
  private _lastModifiedBy = new DataZiaRiskProfilesLastModifiedByList(this, "last_modified_by", false);
  public get lastModifiedBy() {
    return this._lastModifiedBy;
  }

  // malware_scanning_for_content - computed: true, optional: false, required: false
  public get malwareScanningForContent() {
    return this.getStringAttribute('malware_scanning_for_content');
  }

  // mfa_support - computed: true, optional: false, required: false
  public get mfaSupport() {
    return this.getStringAttribute('mfa_support');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // password_strength - computed: true, optional: false, required: false
  public get passwordStrength() {
    return this.getStringAttribute('password_strength');
  }

  // poor_items_of_service - computed: true, optional: false, required: false
  public get poorItemsOfService() {
    return this.getStringAttribute('poor_items_of_service');
  }

  // profile_type - computed: true, optional: false, required: false
  public get profileType() {
    return this.getStringAttribute('profile_type');
  }

  // remote_screen_sharing - computed: true, optional: false, required: false
  public get remoteScreenSharing() {
    return this.getStringAttribute('remote_screen_sharing');
  }

  // risk_index - computed: true, optional: false, required: false
  public get riskIndex() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('risk_index')));
  }

  // sender_policy_framework - computed: true, optional: false, required: false
  public get senderPolicyFramework() {
    return this.getStringAttribute('sender_policy_framework');
  }

  // source_ip_restrictions - computed: true, optional: false, required: false
  public get sourceIpRestrictions() {
    return this.getStringAttribute('source_ip_restrictions');
  }

  // ssl_cert_key_size - computed: true, optional: false, required: false
  public get sslCertKeySize() {
    return this.getStringAttribute('ssl_cert_key_size');
  }

  // ssl_cert_validity - computed: true, optional: false, required: false
  public get sslCertValidity() {
    return this.getStringAttribute('ssl_cert_validity');
  }

  // ssl_pinned - computed: true, optional: false, required: false
  public get sslPinned() {
    return this.getStringAttribute('ssl_pinned');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // support_for_waf - computed: true, optional: false, required: false
  public get supportForWaf() {
    return this.getStringAttribute('support_for_waf');
  }

  // vulnerability - computed: true, optional: false, required: false
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }

  // vulnerability_disclosure - computed: true, optional: false, required: false
  public get vulnerabilityDisclosure() {
    return this.getStringAttribute('vulnerability_disclosure');
  }

  // vulnerable_to_heart_bleed - computed: true, optional: false, required: false
  public get vulnerableToHeartBleed() {
    return this.getStringAttribute('vulnerable_to_heart_bleed');
  }

  // vulnerable_to_log_jam - computed: true, optional: false, required: false
  public get vulnerableToLogJam() {
    return this.getStringAttribute('vulnerable_to_log_jam');
  }

  // vulnerable_to_poodle - computed: true, optional: false, required: false
  public get vulnerableToPoodle() {
    return this.getStringAttribute('vulnerable_to_poodle');
  }

  // weak_cipher_support - computed: true, optional: false, required: false
  public get weakCipherSupport() {
    return this.getStringAttribute('weak_cipher_support');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.numberToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.numberToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
