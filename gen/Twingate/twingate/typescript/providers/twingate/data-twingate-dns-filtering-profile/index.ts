// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/dns_filtering_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataTwingateDnsFilteringProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS filtering profile's ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/dns_filtering_profile#id DataTwingateDnsFilteringProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
}
export interface DataTwingateDnsFilteringProfileAllowedDomains {
}

export function dataTwingateDnsFilteringProfileAllowedDomainsToTerraform(struct?: DataTwingateDnsFilteringProfileAllowedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateDnsFilteringProfileAllowedDomainsToHclTerraform(struct?: DataTwingateDnsFilteringProfileAllowedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateDnsFilteringProfileAllowedDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateDnsFilteringProfileAllowedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateDnsFilteringProfileAllowedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
}
export interface DataTwingateDnsFilteringProfileContentCategories {
}

export function dataTwingateDnsFilteringProfileContentCategoriesToTerraform(struct?: DataTwingateDnsFilteringProfileContentCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateDnsFilteringProfileContentCategoriesToHclTerraform(struct?: DataTwingateDnsFilteringProfileContentCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateDnsFilteringProfileContentCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateDnsFilteringProfileContentCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateDnsFilteringProfileContentCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // block_adult_content - computed: true, optional: false, required: false
  public get blockAdultContent() {
    return this.getBooleanAttribute('block_adult_content');
  }

  // block_dating - computed: true, optional: false, required: false
  public get blockDating() {
    return this.getBooleanAttribute('block_dating');
  }

  // block_gambling - computed: true, optional: false, required: false
  public get blockGambling() {
    return this.getBooleanAttribute('block_gambling');
  }

  // block_games - computed: true, optional: false, required: false
  public get blockGames() {
    return this.getBooleanAttribute('block_games');
  }

  // block_piracy - computed: true, optional: false, required: false
  public get blockPiracy() {
    return this.getBooleanAttribute('block_piracy');
  }

  // block_social_media - computed: true, optional: false, required: false
  public get blockSocialMedia() {
    return this.getBooleanAttribute('block_social_media');
  }

  // block_streaming - computed: true, optional: false, required: false
  public get blockStreaming() {
    return this.getBooleanAttribute('block_streaming');
  }

  // enable_safesearch - computed: true, optional: false, required: false
  public get enableSafesearch() {
    return this.getBooleanAttribute('enable_safesearch');
  }

  // enable_youtube_restricted_mode - computed: true, optional: false, required: false
  public get enableYoutubeRestrictedMode() {
    return this.getBooleanAttribute('enable_youtube_restricted_mode');
  }
}
export interface DataTwingateDnsFilteringProfileDeniedDomains {
}

export function dataTwingateDnsFilteringProfileDeniedDomainsToTerraform(struct?: DataTwingateDnsFilteringProfileDeniedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateDnsFilteringProfileDeniedDomainsToHclTerraform(struct?: DataTwingateDnsFilteringProfileDeniedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateDnsFilteringProfileDeniedDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateDnsFilteringProfileDeniedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateDnsFilteringProfileDeniedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // domains - computed: true, optional: false, required: false
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
}
export interface DataTwingateDnsFilteringProfilePrivacyCategories {
}

export function dataTwingateDnsFilteringProfilePrivacyCategoriesToTerraform(struct?: DataTwingateDnsFilteringProfilePrivacyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateDnsFilteringProfilePrivacyCategoriesToHclTerraform(struct?: DataTwingateDnsFilteringProfilePrivacyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateDnsFilteringProfilePrivacyCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateDnsFilteringProfilePrivacyCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateDnsFilteringProfilePrivacyCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // block_ads_and_trackers - computed: true, optional: false, required: false
  public get blockAdsAndTrackers() {
    return this.getBooleanAttribute('block_ads_and_trackers');
  }

  // block_affiliate_links - computed: true, optional: false, required: false
  public get blockAffiliateLinks() {
    return this.getBooleanAttribute('block_affiliate_links');
  }

  // block_disguised_trackers - computed: true, optional: false, required: false
  public get blockDisguisedTrackers() {
    return this.getBooleanAttribute('block_disguised_trackers');
  }
}
export interface DataTwingateDnsFilteringProfileSecurityCategories {
}

export function dataTwingateDnsFilteringProfileSecurityCategoriesToTerraform(struct?: DataTwingateDnsFilteringProfileSecurityCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataTwingateDnsFilteringProfileSecurityCategoriesToHclTerraform(struct?: DataTwingateDnsFilteringProfileSecurityCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataTwingateDnsFilteringProfileSecurityCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataTwingateDnsFilteringProfileSecurityCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataTwingateDnsFilteringProfileSecurityCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
    }
  }

  // block_cryptojacking - computed: true, optional: false, required: false
  public get blockCryptojacking() {
    return this.getBooleanAttribute('block_cryptojacking');
  }

  // block_dns_rebinding - computed: true, optional: false, required: false
  public get blockDnsRebinding() {
    return this.getBooleanAttribute('block_dns_rebinding');
  }

  // block_domain_generation_algorithms - computed: true, optional: false, required: false
  public get blockDomainGenerationAlgorithms() {
    return this.getBooleanAttribute('block_domain_generation_algorithms');
  }

  // block_idn_homoglyph - computed: true, optional: false, required: false
  public get blockIdnHomoglyph() {
    return this.getBooleanAttribute('block_idn_homoglyph');
  }

  // block_newly_registered_domains - computed: true, optional: false, required: false
  public get blockNewlyRegisteredDomains() {
    return this.getBooleanAttribute('block_newly_registered_domains');
  }

  // block_parked_domains - computed: true, optional: false, required: false
  public get blockParkedDomains() {
    return this.getBooleanAttribute('block_parked_domains');
  }

  // block_typosquatting - computed: true, optional: false, required: false
  public get blockTyposquatting() {
    return this.getBooleanAttribute('block_typosquatting');
  }

  // enable_google_safe_browsing - computed: true, optional: false, required: false
  public get enableGoogleSafeBrowsing() {
    return this.getBooleanAttribute('enable_google_safe_browsing');
  }

  // enable_threat_intelligence_feeds - computed: true, optional: false, required: false
  public get enableThreatIntelligenceFeeds() {
    return this.getBooleanAttribute('enable_threat_intelligence_feeds');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/dns_filtering_profile twingate_dns_filtering_profile}
*/
export class DataTwingateDnsFilteringProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_dns_filtering_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataTwingateDnsFilteringProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataTwingateDnsFilteringProfile to import
  * @param importFromId The id of the existing DataTwingateDnsFilteringProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/dns_filtering_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataTwingateDnsFilteringProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_dns_filtering_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/data-sources/dns_filtering_profile twingate_dns_filtering_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataTwingateDnsFilteringProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DataTwingateDnsFilteringProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_dns_filtering_profile',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0'
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
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fallback_method - computed: true, optional: false, required: false
  public get fallbackMethod() {
    return this.getStringAttribute('fallback_method');
  }

  // groups - computed: true, optional: false, required: false
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // allowed_domains - computed: false, optional: false, required: false
  private _allowedDomains = new DataTwingateDnsFilteringProfileAllowedDomainsOutputReference(this, "allowed_domains");
  public get allowedDomains() {
    return this._allowedDomains;
  }

  // content_categories - computed: false, optional: false, required: false
  private _contentCategories = new DataTwingateDnsFilteringProfileContentCategoriesOutputReference(this, "content_categories");
  public get contentCategories() {
    return this._contentCategories;
  }

  // denied_domains - computed: false, optional: false, required: false
  private _deniedDomains = new DataTwingateDnsFilteringProfileDeniedDomainsOutputReference(this, "denied_domains");
  public get deniedDomains() {
    return this._deniedDomains;
  }

  // privacy_categories - computed: false, optional: false, required: false
  private _privacyCategories = new DataTwingateDnsFilteringProfilePrivacyCategoriesOutputReference(this, "privacy_categories");
  public get privacyCategories() {
    return this._privacyCategories;
  }

  // security_categories - computed: false, optional: false, required: false
  private _securityCategories = new DataTwingateDnsFilteringProfileSecurityCategoriesOutputReference(this, "security_categories");
  public get securityCategories() {
    return this._securityCategories;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
