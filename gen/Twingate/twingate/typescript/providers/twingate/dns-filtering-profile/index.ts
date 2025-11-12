// https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnsFilteringProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The DNS filtering profile's fallback method. One of "AUTO" or "STRICT". Defaults to "STRICT".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#fallback_method DnsFilteringProfile#fallback_method}
  */
  readonly fallbackMethod?: string;
  /**
  * A set of group IDs that have this as their DNS filtering profile. Defaults to an empty set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#groups DnsFilteringProfile#groups}
  */
  readonly groups?: string[];
  /**
  * The DNS filtering profile's name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#name DnsFilteringProfile#name}
  */
  readonly name: string;
  /**
  * A floating point number representing the profile's priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#priority DnsFilteringProfile#priority}
  */
  readonly priority: number;
  /**
  * allowed_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#allowed_domains DnsFilteringProfile#allowed_domains}
  */
  readonly allowedDomains?: DnsFilteringProfileAllowedDomains;
  /**
  * content_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#content_categories DnsFilteringProfile#content_categories}
  */
  readonly contentCategories?: DnsFilteringProfileContentCategories;
  /**
  * denied_domains block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#denied_domains DnsFilteringProfile#denied_domains}
  */
  readonly deniedDomains?: DnsFilteringProfileDeniedDomains;
  /**
  * privacy_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#privacy_categories DnsFilteringProfile#privacy_categories}
  */
  readonly privacyCategories?: DnsFilteringProfilePrivacyCategories;
  /**
  * security_categories block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#security_categories DnsFilteringProfile#security_categories}
  */
  readonly securityCategories?: DnsFilteringProfileSecurityCategories;
}
export interface DnsFilteringProfileAllowedDomains {
  /**
  * A set of allowed domains. Defaults to an empty set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#domains DnsFilteringProfile#domains}
  */
  readonly domains?: string[];
  /**
  * Whether Terraform should override changes made outside of Terraform. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#is_authoritative DnsFilteringProfile#is_authoritative}
  */
  readonly isAuthoritative?: boolean | cdktf.IResolvable;
}

export function dnsFilteringProfileAllowedDomainsToTerraform(struct?: DnsFilteringProfileAllowedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    is_authoritative: cdktf.booleanToTerraform(struct!.isAuthoritative),
  }
}


export function dnsFilteringProfileAllowedDomainsToHclTerraform(struct?: DnsFilteringProfileAllowedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_authoritative: {
      value: cdktf.booleanToHclTerraform(struct!.isAuthoritative),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsFilteringProfileAllowedDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsFilteringProfileAllowedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._isAuthoritative !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthoritative = this._isAuthoritative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsFilteringProfileAllowedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._isAuthoritative = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._isAuthoritative = value.isAuthoritative;
    }
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // is_authoritative - computed: true, optional: true, required: false
  private _isAuthoritative?: boolean | cdktf.IResolvable; 
  public get isAuthoritative() {
    return this.getBooleanAttribute('is_authoritative');
  }
  public set isAuthoritative(value: boolean | cdktf.IResolvable) {
    this._isAuthoritative = value;
  }
  public resetIsAuthoritative() {
    this._isAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthoritativeInput() {
    return this._isAuthoritative;
  }
}
export interface DnsFilteringProfileContentCategories {
  /**
  * Whether to block adult content. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_adult_content DnsFilteringProfile#block_adult_content}
  */
  readonly blockAdultContent?: boolean | cdktf.IResolvable;
  /**
  * Whether to block dating content. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_dating DnsFilteringProfile#block_dating}
  */
  readonly blockDating?: boolean | cdktf.IResolvable;
  /**
  * Whether to block gambling content. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_gambling DnsFilteringProfile#block_gambling}
  */
  readonly blockGambling?: boolean | cdktf.IResolvable;
  /**
  * Whether to block games. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_games DnsFilteringProfile#block_games}
  */
  readonly blockGames?: boolean | cdktf.IResolvable;
  /**
  * Whether to block piracy sites. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_piracy DnsFilteringProfile#block_piracy}
  */
  readonly blockPiracy?: boolean | cdktf.IResolvable;
  /**
  * Whether to block social media. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_social_media DnsFilteringProfile#block_social_media}
  */
  readonly blockSocialMedia?: boolean | cdktf.IResolvable;
  /**
  * Whether to block streaming content. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_streaming DnsFilteringProfile#block_streaming}
  */
  readonly blockStreaming?: boolean | cdktf.IResolvable;
  /**
  * Whether to force safe search. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#enable_safesearch DnsFilteringProfile#enable_safesearch}
  */
  readonly enableSafesearch?: boolean | cdktf.IResolvable;
  /**
  * Whether to force YouTube to use restricted mode. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#enable_youtube_restricted_mode DnsFilteringProfile#enable_youtube_restricted_mode}
  */
  readonly enableYoutubeRestrictedMode?: boolean | cdktf.IResolvable;
}

export function dnsFilteringProfileContentCategoriesToTerraform(struct?: DnsFilteringProfileContentCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_adult_content: cdktf.booleanToTerraform(struct!.blockAdultContent),
    block_dating: cdktf.booleanToTerraform(struct!.blockDating),
    block_gambling: cdktf.booleanToTerraform(struct!.blockGambling),
    block_games: cdktf.booleanToTerraform(struct!.blockGames),
    block_piracy: cdktf.booleanToTerraform(struct!.blockPiracy),
    block_social_media: cdktf.booleanToTerraform(struct!.blockSocialMedia),
    block_streaming: cdktf.booleanToTerraform(struct!.blockStreaming),
    enable_safesearch: cdktf.booleanToTerraform(struct!.enableSafesearch),
    enable_youtube_restricted_mode: cdktf.booleanToTerraform(struct!.enableYoutubeRestrictedMode),
  }
}


export function dnsFilteringProfileContentCategoriesToHclTerraform(struct?: DnsFilteringProfileContentCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_adult_content: {
      value: cdktf.booleanToHclTerraform(struct!.blockAdultContent),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_dating: {
      value: cdktf.booleanToHclTerraform(struct!.blockDating),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_gambling: {
      value: cdktf.booleanToHclTerraform(struct!.blockGambling),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_games: {
      value: cdktf.booleanToHclTerraform(struct!.blockGames),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_piracy: {
      value: cdktf.booleanToHclTerraform(struct!.blockPiracy),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_social_media: {
      value: cdktf.booleanToHclTerraform(struct!.blockSocialMedia),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_streaming: {
      value: cdktf.booleanToHclTerraform(struct!.blockStreaming),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_safesearch: {
      value: cdktf.booleanToHclTerraform(struct!.enableSafesearch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_youtube_restricted_mode: {
      value: cdktf.booleanToHclTerraform(struct!.enableYoutubeRestrictedMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsFilteringProfileContentCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsFilteringProfileContentCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAdultContent !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAdultContent = this._blockAdultContent;
    }
    if (this._blockDating !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDating = this._blockDating;
    }
    if (this._blockGambling !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockGambling = this._blockGambling;
    }
    if (this._blockGames !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockGames = this._blockGames;
    }
    if (this._blockPiracy !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockPiracy = this._blockPiracy;
    }
    if (this._blockSocialMedia !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockSocialMedia = this._blockSocialMedia;
    }
    if (this._blockStreaming !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockStreaming = this._blockStreaming;
    }
    if (this._enableSafesearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSafesearch = this._enableSafesearch;
    }
    if (this._enableYoutubeRestrictedMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableYoutubeRestrictedMode = this._enableYoutubeRestrictedMode;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsFilteringProfileContentCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockAdultContent = undefined;
      this._blockDating = undefined;
      this._blockGambling = undefined;
      this._blockGames = undefined;
      this._blockPiracy = undefined;
      this._blockSocialMedia = undefined;
      this._blockStreaming = undefined;
      this._enableSafesearch = undefined;
      this._enableYoutubeRestrictedMode = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockAdultContent = value.blockAdultContent;
      this._blockDating = value.blockDating;
      this._blockGambling = value.blockGambling;
      this._blockGames = value.blockGames;
      this._blockPiracy = value.blockPiracy;
      this._blockSocialMedia = value.blockSocialMedia;
      this._blockStreaming = value.blockStreaming;
      this._enableSafesearch = value.enableSafesearch;
      this._enableYoutubeRestrictedMode = value.enableYoutubeRestrictedMode;
    }
  }

  // block_adult_content - computed: true, optional: true, required: false
  private _blockAdultContent?: boolean | cdktf.IResolvable; 
  public get blockAdultContent() {
    return this.getBooleanAttribute('block_adult_content');
  }
  public set blockAdultContent(value: boolean | cdktf.IResolvable) {
    this._blockAdultContent = value;
  }
  public resetBlockAdultContent() {
    this._blockAdultContent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAdultContentInput() {
    return this._blockAdultContent;
  }

  // block_dating - computed: true, optional: true, required: false
  private _blockDating?: boolean | cdktf.IResolvable; 
  public get blockDating() {
    return this.getBooleanAttribute('block_dating');
  }
  public set blockDating(value: boolean | cdktf.IResolvable) {
    this._blockDating = value;
  }
  public resetBlockDating() {
    this._blockDating = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDatingInput() {
    return this._blockDating;
  }

  // block_gambling - computed: true, optional: true, required: false
  private _blockGambling?: boolean | cdktf.IResolvable; 
  public get blockGambling() {
    return this.getBooleanAttribute('block_gambling');
  }
  public set blockGambling(value: boolean | cdktf.IResolvable) {
    this._blockGambling = value;
  }
  public resetBlockGambling() {
    this._blockGambling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockGamblingInput() {
    return this._blockGambling;
  }

  // block_games - computed: true, optional: true, required: false
  private _blockGames?: boolean | cdktf.IResolvable; 
  public get blockGames() {
    return this.getBooleanAttribute('block_games');
  }
  public set blockGames(value: boolean | cdktf.IResolvable) {
    this._blockGames = value;
  }
  public resetBlockGames() {
    this._blockGames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockGamesInput() {
    return this._blockGames;
  }

  // block_piracy - computed: true, optional: true, required: false
  private _blockPiracy?: boolean | cdktf.IResolvable; 
  public get blockPiracy() {
    return this.getBooleanAttribute('block_piracy');
  }
  public set blockPiracy(value: boolean | cdktf.IResolvable) {
    this._blockPiracy = value;
  }
  public resetBlockPiracy() {
    this._blockPiracy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockPiracyInput() {
    return this._blockPiracy;
  }

  // block_social_media - computed: true, optional: true, required: false
  private _blockSocialMedia?: boolean | cdktf.IResolvable; 
  public get blockSocialMedia() {
    return this.getBooleanAttribute('block_social_media');
  }
  public set blockSocialMedia(value: boolean | cdktf.IResolvable) {
    this._blockSocialMedia = value;
  }
  public resetBlockSocialMedia() {
    this._blockSocialMedia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockSocialMediaInput() {
    return this._blockSocialMedia;
  }

  // block_streaming - computed: true, optional: true, required: false
  private _blockStreaming?: boolean | cdktf.IResolvable; 
  public get blockStreaming() {
    return this.getBooleanAttribute('block_streaming');
  }
  public set blockStreaming(value: boolean | cdktf.IResolvable) {
    this._blockStreaming = value;
  }
  public resetBlockStreaming() {
    this._blockStreaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockStreamingInput() {
    return this._blockStreaming;
  }

  // enable_safesearch - computed: true, optional: true, required: false
  private _enableSafesearch?: boolean | cdktf.IResolvable; 
  public get enableSafesearch() {
    return this.getBooleanAttribute('enable_safesearch');
  }
  public set enableSafesearch(value: boolean | cdktf.IResolvable) {
    this._enableSafesearch = value;
  }
  public resetEnableSafesearch() {
    this._enableSafesearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSafesearchInput() {
    return this._enableSafesearch;
  }

  // enable_youtube_restricted_mode - computed: true, optional: true, required: false
  private _enableYoutubeRestrictedMode?: boolean | cdktf.IResolvable; 
  public get enableYoutubeRestrictedMode() {
    return this.getBooleanAttribute('enable_youtube_restricted_mode');
  }
  public set enableYoutubeRestrictedMode(value: boolean | cdktf.IResolvable) {
    this._enableYoutubeRestrictedMode = value;
  }
  public resetEnableYoutubeRestrictedMode() {
    this._enableYoutubeRestrictedMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableYoutubeRestrictedModeInput() {
    return this._enableYoutubeRestrictedMode;
  }
}
export interface DnsFilteringProfileDeniedDomains {
  /**
  * A set of denied domains. Defaults to an empty set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#domains DnsFilteringProfile#domains}
  */
  readonly domains?: string[];
  /**
  * Whether Terraform should override changes made outside of Terraform. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#is_authoritative DnsFilteringProfile#is_authoritative}
  */
  readonly isAuthoritative?: boolean | cdktf.IResolvable;
}

export function dnsFilteringProfileDeniedDomainsToTerraform(struct?: DnsFilteringProfileDeniedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    is_authoritative: cdktf.booleanToTerraform(struct!.isAuthoritative),
  }
}


export function dnsFilteringProfileDeniedDomainsToHclTerraform(struct?: DnsFilteringProfileDeniedDomains | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    is_authoritative: {
      value: cdktf.booleanToHclTerraform(struct!.isAuthoritative),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsFilteringProfileDeniedDomainsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsFilteringProfileDeniedDomains | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._isAuthoritative !== undefined) {
      hasAnyValues = true;
      internalValueResult.isAuthoritative = this._isAuthoritative;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsFilteringProfileDeniedDomains | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._domains = undefined;
      this._isAuthoritative = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._domains = value.domains;
      this._isAuthoritative = value.isAuthoritative;
    }
  }

  // domains - computed: true, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // is_authoritative - computed: true, optional: true, required: false
  private _isAuthoritative?: boolean | cdktf.IResolvable; 
  public get isAuthoritative() {
    return this.getBooleanAttribute('is_authoritative');
  }
  public set isAuthoritative(value: boolean | cdktf.IResolvable) {
    this._isAuthoritative = value;
  }
  public resetIsAuthoritative() {
    this._isAuthoritative = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isAuthoritativeInput() {
    return this._isAuthoritative;
  }
}
export interface DnsFilteringProfilePrivacyCategories {
  /**
  * Whether to block ads and trackers. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_ads_and_trackers DnsFilteringProfile#block_ads_and_trackers}
  */
  readonly blockAdsAndTrackers?: boolean | cdktf.IResolvable;
  /**
  * Whether to block affiliate links. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_affiliate_links DnsFilteringProfile#block_affiliate_links}
  */
  readonly blockAffiliateLinks?: boolean | cdktf.IResolvable;
  /**
  * Whether to block disguised third party trackers. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_disguised_trackers DnsFilteringProfile#block_disguised_trackers}
  */
  readonly blockDisguisedTrackers?: boolean | cdktf.IResolvable;
}

export function dnsFilteringProfilePrivacyCategoriesToTerraform(struct?: DnsFilteringProfilePrivacyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_ads_and_trackers: cdktf.booleanToTerraform(struct!.blockAdsAndTrackers),
    block_affiliate_links: cdktf.booleanToTerraform(struct!.blockAffiliateLinks),
    block_disguised_trackers: cdktf.booleanToTerraform(struct!.blockDisguisedTrackers),
  }
}


export function dnsFilteringProfilePrivacyCategoriesToHclTerraform(struct?: DnsFilteringProfilePrivacyCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_ads_and_trackers: {
      value: cdktf.booleanToHclTerraform(struct!.blockAdsAndTrackers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_affiliate_links: {
      value: cdktf.booleanToHclTerraform(struct!.blockAffiliateLinks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_disguised_trackers: {
      value: cdktf.booleanToHclTerraform(struct!.blockDisguisedTrackers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsFilteringProfilePrivacyCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsFilteringProfilePrivacyCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockAdsAndTrackers !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAdsAndTrackers = this._blockAdsAndTrackers;
    }
    if (this._blockAffiliateLinks !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockAffiliateLinks = this._blockAffiliateLinks;
    }
    if (this._blockDisguisedTrackers !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDisguisedTrackers = this._blockDisguisedTrackers;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsFilteringProfilePrivacyCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockAdsAndTrackers = undefined;
      this._blockAffiliateLinks = undefined;
      this._blockDisguisedTrackers = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockAdsAndTrackers = value.blockAdsAndTrackers;
      this._blockAffiliateLinks = value.blockAffiliateLinks;
      this._blockDisguisedTrackers = value.blockDisguisedTrackers;
    }
  }

  // block_ads_and_trackers - computed: true, optional: true, required: false
  private _blockAdsAndTrackers?: boolean | cdktf.IResolvable; 
  public get blockAdsAndTrackers() {
    return this.getBooleanAttribute('block_ads_and_trackers');
  }
  public set blockAdsAndTrackers(value: boolean | cdktf.IResolvable) {
    this._blockAdsAndTrackers = value;
  }
  public resetBlockAdsAndTrackers() {
    this._blockAdsAndTrackers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAdsAndTrackersInput() {
    return this._blockAdsAndTrackers;
  }

  // block_affiliate_links - computed: true, optional: true, required: false
  private _blockAffiliateLinks?: boolean | cdktf.IResolvable; 
  public get blockAffiliateLinks() {
    return this.getBooleanAttribute('block_affiliate_links');
  }
  public set blockAffiliateLinks(value: boolean | cdktf.IResolvable) {
    this._blockAffiliateLinks = value;
  }
  public resetBlockAffiliateLinks() {
    this._blockAffiliateLinks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockAffiliateLinksInput() {
    return this._blockAffiliateLinks;
  }

  // block_disguised_trackers - computed: true, optional: true, required: false
  private _blockDisguisedTrackers?: boolean | cdktf.IResolvable; 
  public get blockDisguisedTrackers() {
    return this.getBooleanAttribute('block_disguised_trackers');
  }
  public set blockDisguisedTrackers(value: boolean | cdktf.IResolvable) {
    this._blockDisguisedTrackers = value;
  }
  public resetBlockDisguisedTrackers() {
    this._blockDisguisedTrackers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDisguisedTrackersInput() {
    return this._blockDisguisedTrackers;
  }
}
export interface DnsFilteringProfileSecurityCategories {
  /**
  * Whether to block cryptojacking sites. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_cryptojacking DnsFilteringProfile#block_cryptojacking}
  */
  readonly blockCryptojacking?: boolean | cdktf.IResolvable;
  /**
  * Blocks public DNS entries from returning private IP addresses. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_dns_rebinding DnsFilteringProfile#block_dns_rebinding}
  */
  readonly blockDnsRebinding?: boolean | cdktf.IResolvable;
  /**
  * Blocks DGA domains. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_domain_generation_algorithms DnsFilteringProfile#block_domain_generation_algorithms}
  */
  readonly blockDomainGenerationAlgorithms?: boolean | cdktf.IResolvable;
  /**
  * Whether to block homoglyph attacks. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_idn_homoglyph DnsFilteringProfile#block_idn_homoglyph}
  */
  readonly blockIdnHomoglyph?: boolean | cdktf.IResolvable;
  /**
  * Blocks newly registered domains. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_newly_registered_domains DnsFilteringProfile#block_newly_registered_domains}
  */
  readonly blockNewlyRegisteredDomains?: boolean | cdktf.IResolvable;
  /**
  * Block parked domains. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_parked_domains DnsFilteringProfile#block_parked_domains}
  */
  readonly blockParkedDomains?: boolean | cdktf.IResolvable;
  /**
  * Blocks typosquatted domains. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#block_typosquatting DnsFilteringProfile#block_typosquatting}
  */
  readonly blockTyposquatting?: boolean | cdktf.IResolvable;
  /**
  * Whether to use Google Safe browsing lists to block content. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#enable_google_safe_browsing DnsFilteringProfile#enable_google_safe_browsing}
  */
  readonly enableGoogleSafeBrowsing?: boolean | cdktf.IResolvable;
  /**
  * Whether to filter content using threat intelligence feeds. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#enable_threat_intelligence_feeds DnsFilteringProfile#enable_threat_intelligence_feeds}
  */
  readonly enableThreatIntelligenceFeeds?: boolean | cdktf.IResolvable;
}

export function dnsFilteringProfileSecurityCategoriesToTerraform(struct?: DnsFilteringProfileSecurityCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    block_cryptojacking: cdktf.booleanToTerraform(struct!.blockCryptojacking),
    block_dns_rebinding: cdktf.booleanToTerraform(struct!.blockDnsRebinding),
    block_domain_generation_algorithms: cdktf.booleanToTerraform(struct!.blockDomainGenerationAlgorithms),
    block_idn_homoglyph: cdktf.booleanToTerraform(struct!.blockIdnHomoglyph),
    block_newly_registered_domains: cdktf.booleanToTerraform(struct!.blockNewlyRegisteredDomains),
    block_parked_domains: cdktf.booleanToTerraform(struct!.blockParkedDomains),
    block_typosquatting: cdktf.booleanToTerraform(struct!.blockTyposquatting),
    enable_google_safe_browsing: cdktf.booleanToTerraform(struct!.enableGoogleSafeBrowsing),
    enable_threat_intelligence_feeds: cdktf.booleanToTerraform(struct!.enableThreatIntelligenceFeeds),
  }
}


export function dnsFilteringProfileSecurityCategoriesToHclTerraform(struct?: DnsFilteringProfileSecurityCategories | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    block_cryptojacking: {
      value: cdktf.booleanToHclTerraform(struct!.blockCryptojacking),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_dns_rebinding: {
      value: cdktf.booleanToHclTerraform(struct!.blockDnsRebinding),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_domain_generation_algorithms: {
      value: cdktf.booleanToHclTerraform(struct!.blockDomainGenerationAlgorithms),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_idn_homoglyph: {
      value: cdktf.booleanToHclTerraform(struct!.blockIdnHomoglyph),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_newly_registered_domains: {
      value: cdktf.booleanToHclTerraform(struct!.blockNewlyRegisteredDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_parked_domains: {
      value: cdktf.booleanToHclTerraform(struct!.blockParkedDomains),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block_typosquatting: {
      value: cdktf.booleanToHclTerraform(struct!.blockTyposquatting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_google_safe_browsing: {
      value: cdktf.booleanToHclTerraform(struct!.enableGoogleSafeBrowsing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_threat_intelligence_feeds: {
      value: cdktf.booleanToHclTerraform(struct!.enableThreatIntelligenceFeeds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DnsFilteringProfileSecurityCategoriesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DnsFilteringProfileSecurityCategories | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockCryptojacking !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockCryptojacking = this._blockCryptojacking;
    }
    if (this._blockDnsRebinding !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDnsRebinding = this._blockDnsRebinding;
    }
    if (this._blockDomainGenerationAlgorithms !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockDomainGenerationAlgorithms = this._blockDomainGenerationAlgorithms;
    }
    if (this._blockIdnHomoglyph !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockIdnHomoglyph = this._blockIdnHomoglyph;
    }
    if (this._blockNewlyRegisteredDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockNewlyRegisteredDomains = this._blockNewlyRegisteredDomains;
    }
    if (this._blockParkedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockParkedDomains = this._blockParkedDomains;
    }
    if (this._blockTyposquatting !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockTyposquatting = this._blockTyposquatting;
    }
    if (this._enableGoogleSafeBrowsing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableGoogleSafeBrowsing = this._enableGoogleSafeBrowsing;
    }
    if (this._enableThreatIntelligenceFeeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableThreatIntelligenceFeeds = this._enableThreatIntelligenceFeeds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DnsFilteringProfileSecurityCategories | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._blockCryptojacking = undefined;
      this._blockDnsRebinding = undefined;
      this._blockDomainGenerationAlgorithms = undefined;
      this._blockIdnHomoglyph = undefined;
      this._blockNewlyRegisteredDomains = undefined;
      this._blockParkedDomains = undefined;
      this._blockTyposquatting = undefined;
      this._enableGoogleSafeBrowsing = undefined;
      this._enableThreatIntelligenceFeeds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._blockCryptojacking = value.blockCryptojacking;
      this._blockDnsRebinding = value.blockDnsRebinding;
      this._blockDomainGenerationAlgorithms = value.blockDomainGenerationAlgorithms;
      this._blockIdnHomoglyph = value.blockIdnHomoglyph;
      this._blockNewlyRegisteredDomains = value.blockNewlyRegisteredDomains;
      this._blockParkedDomains = value.blockParkedDomains;
      this._blockTyposquatting = value.blockTyposquatting;
      this._enableGoogleSafeBrowsing = value.enableGoogleSafeBrowsing;
      this._enableThreatIntelligenceFeeds = value.enableThreatIntelligenceFeeds;
    }
  }

  // block_cryptojacking - computed: true, optional: true, required: false
  private _blockCryptojacking?: boolean | cdktf.IResolvable; 
  public get blockCryptojacking() {
    return this.getBooleanAttribute('block_cryptojacking');
  }
  public set blockCryptojacking(value: boolean | cdktf.IResolvable) {
    this._blockCryptojacking = value;
  }
  public resetBlockCryptojacking() {
    this._blockCryptojacking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockCryptojackingInput() {
    return this._blockCryptojacking;
  }

  // block_dns_rebinding - computed: true, optional: true, required: false
  private _blockDnsRebinding?: boolean | cdktf.IResolvable; 
  public get blockDnsRebinding() {
    return this.getBooleanAttribute('block_dns_rebinding');
  }
  public set blockDnsRebinding(value: boolean | cdktf.IResolvable) {
    this._blockDnsRebinding = value;
  }
  public resetBlockDnsRebinding() {
    this._blockDnsRebinding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDnsRebindingInput() {
    return this._blockDnsRebinding;
  }

  // block_domain_generation_algorithms - computed: true, optional: true, required: false
  private _blockDomainGenerationAlgorithms?: boolean | cdktf.IResolvable; 
  public get blockDomainGenerationAlgorithms() {
    return this.getBooleanAttribute('block_domain_generation_algorithms');
  }
  public set blockDomainGenerationAlgorithms(value: boolean | cdktf.IResolvable) {
    this._blockDomainGenerationAlgorithms = value;
  }
  public resetBlockDomainGenerationAlgorithms() {
    this._blockDomainGenerationAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDomainGenerationAlgorithmsInput() {
    return this._blockDomainGenerationAlgorithms;
  }

  // block_idn_homoglyph - computed: true, optional: true, required: false
  private _blockIdnHomoglyph?: boolean | cdktf.IResolvable; 
  public get blockIdnHomoglyph() {
    return this.getBooleanAttribute('block_idn_homoglyph');
  }
  public set blockIdnHomoglyph(value: boolean | cdktf.IResolvable) {
    this._blockIdnHomoglyph = value;
  }
  public resetBlockIdnHomoglyph() {
    this._blockIdnHomoglyph = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockIdnHomoglyphInput() {
    return this._blockIdnHomoglyph;
  }

  // block_newly_registered_domains - computed: true, optional: true, required: false
  private _blockNewlyRegisteredDomains?: boolean | cdktf.IResolvable; 
  public get blockNewlyRegisteredDomains() {
    return this.getBooleanAttribute('block_newly_registered_domains');
  }
  public set blockNewlyRegisteredDomains(value: boolean | cdktf.IResolvable) {
    this._blockNewlyRegisteredDomains = value;
  }
  public resetBlockNewlyRegisteredDomains() {
    this._blockNewlyRegisteredDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockNewlyRegisteredDomainsInput() {
    return this._blockNewlyRegisteredDomains;
  }

  // block_parked_domains - computed: true, optional: true, required: false
  private _blockParkedDomains?: boolean | cdktf.IResolvable; 
  public get blockParkedDomains() {
    return this.getBooleanAttribute('block_parked_domains');
  }
  public set blockParkedDomains(value: boolean | cdktf.IResolvable) {
    this._blockParkedDomains = value;
  }
  public resetBlockParkedDomains() {
    this._blockParkedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockParkedDomainsInput() {
    return this._blockParkedDomains;
  }

  // block_typosquatting - computed: true, optional: true, required: false
  private _blockTyposquatting?: boolean | cdktf.IResolvable; 
  public get blockTyposquatting() {
    return this.getBooleanAttribute('block_typosquatting');
  }
  public set blockTyposquatting(value: boolean | cdktf.IResolvable) {
    this._blockTyposquatting = value;
  }
  public resetBlockTyposquatting() {
    this._blockTyposquatting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockTyposquattingInput() {
    return this._blockTyposquatting;
  }

  // enable_google_safe_browsing - computed: true, optional: true, required: false
  private _enableGoogleSafeBrowsing?: boolean | cdktf.IResolvable; 
  public get enableGoogleSafeBrowsing() {
    return this.getBooleanAttribute('enable_google_safe_browsing');
  }
  public set enableGoogleSafeBrowsing(value: boolean | cdktf.IResolvable) {
    this._enableGoogleSafeBrowsing = value;
  }
  public resetEnableGoogleSafeBrowsing() {
    this._enableGoogleSafeBrowsing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableGoogleSafeBrowsingInput() {
    return this._enableGoogleSafeBrowsing;
  }

  // enable_threat_intelligence_feeds - computed: true, optional: true, required: false
  private _enableThreatIntelligenceFeeds?: boolean | cdktf.IResolvable; 
  public get enableThreatIntelligenceFeeds() {
    return this.getBooleanAttribute('enable_threat_intelligence_feeds');
  }
  public set enableThreatIntelligenceFeeds(value: boolean | cdktf.IResolvable) {
    this._enableThreatIntelligenceFeeds = value;
  }
  public resetEnableThreatIntelligenceFeeds() {
    this._enableThreatIntelligenceFeeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableThreatIntelligenceFeedsInput() {
    return this._enableThreatIntelligenceFeeds;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile twingate_dns_filtering_profile}
*/
export class DnsFilteringProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "twingate_dns_filtering_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnsFilteringProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnsFilteringProfile to import
  * @param importFromId The id of the existing DnsFilteringProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnsFilteringProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "twingate_dns_filtering_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/twingate/twingate/3.5.0/docs/resources/dns_filtering_profile twingate_dns_filtering_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnsFilteringProfileConfig
  */
  public constructor(scope: Construct, id: string, config: DnsFilteringProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'twingate_dns_filtering_profile',
      terraformGeneratorMetadata: {
        providerName: 'twingate',
        providerVersion: '3.5.0',
        providerVersionConstraint: '3.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._fallbackMethod = config.fallbackMethod;
    this._groups = config.groups;
    this._name = config.name;
    this._priority = config.priority;
    this._allowedDomains.internalValue = config.allowedDomains;
    this._contentCategories.internalValue = config.contentCategories;
    this._deniedDomains.internalValue = config.deniedDomains;
    this._privacyCategories.internalValue = config.privacyCategories;
    this._securityCategories.internalValue = config.securityCategories;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // fallback_method - computed: true, optional: true, required: false
  private _fallbackMethod?: string; 
  public get fallbackMethod() {
    return this.getStringAttribute('fallback_method');
  }
  public set fallbackMethod(value: string) {
    this._fallbackMethod = value;
  }
  public resetFallbackMethod() {
    this._fallbackMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackMethodInput() {
    return this._fallbackMethod;
  }

  // groups - computed: true, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return cdktf.Fn.tolist(this.getListAttribute('groups'));
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
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

  // priority - computed: false, optional: false, required: true
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // allowed_domains - computed: false, optional: true, required: false
  private _allowedDomains = new DnsFilteringProfileAllowedDomainsOutputReference(this, "allowed_domains");
  public get allowedDomains() {
    return this._allowedDomains;
  }
  public putAllowedDomains(value: DnsFilteringProfileAllowedDomains) {
    this._allowedDomains.internalValue = value;
  }
  public resetAllowedDomains() {
    this._allowedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedDomainsInput() {
    return this._allowedDomains.internalValue;
  }

  // content_categories - computed: false, optional: true, required: false
  private _contentCategories = new DnsFilteringProfileContentCategoriesOutputReference(this, "content_categories");
  public get contentCategories() {
    return this._contentCategories;
  }
  public putContentCategories(value: DnsFilteringProfileContentCategories) {
    this._contentCategories.internalValue = value;
  }
  public resetContentCategories() {
    this._contentCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentCategoriesInput() {
    return this._contentCategories.internalValue;
  }

  // denied_domains - computed: false, optional: true, required: false
  private _deniedDomains = new DnsFilteringProfileDeniedDomainsOutputReference(this, "denied_domains");
  public get deniedDomains() {
    return this._deniedDomains;
  }
  public putDeniedDomains(value: DnsFilteringProfileDeniedDomains) {
    this._deniedDomains.internalValue = value;
  }
  public resetDeniedDomains() {
    this._deniedDomains.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedDomainsInput() {
    return this._deniedDomains.internalValue;
  }

  // privacy_categories - computed: false, optional: true, required: false
  private _privacyCategories = new DnsFilteringProfilePrivacyCategoriesOutputReference(this, "privacy_categories");
  public get privacyCategories() {
    return this._privacyCategories;
  }
  public putPrivacyCategories(value: DnsFilteringProfilePrivacyCategories) {
    this._privacyCategories.internalValue = value;
  }
  public resetPrivacyCategories() {
    this._privacyCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyCategoriesInput() {
    return this._privacyCategories.internalValue;
  }

  // security_categories - computed: false, optional: true, required: false
  private _securityCategories = new DnsFilteringProfileSecurityCategoriesOutputReference(this, "security_categories");
  public get securityCategories() {
    return this._securityCategories;
  }
  public putSecurityCategories(value: DnsFilteringProfileSecurityCategories) {
    this._securityCategories.internalValue = value;
  }
  public resetSecurityCategories() {
    this._securityCategories.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityCategoriesInput() {
    return this._securityCategories.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      fallback_method: cdktf.stringToTerraform(this._fallbackMethod),
      groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._groups),
      name: cdktf.stringToTerraform(this._name),
      priority: cdktf.numberToTerraform(this._priority),
      allowed_domains: dnsFilteringProfileAllowedDomainsToTerraform(this._allowedDomains.internalValue),
      content_categories: dnsFilteringProfileContentCategoriesToTerraform(this._contentCategories.internalValue),
      denied_domains: dnsFilteringProfileDeniedDomainsToTerraform(this._deniedDomains.internalValue),
      privacy_categories: dnsFilteringProfilePrivacyCategoriesToTerraform(this._privacyCategories.internalValue),
      security_categories: dnsFilteringProfileSecurityCategoriesToTerraform(this._securityCategories.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      fallback_method: {
        value: cdktf.stringToHclTerraform(this._fallbackMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._groups),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      allowed_domains: {
        value: dnsFilteringProfileAllowedDomainsToHclTerraform(this._allowedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsFilteringProfileAllowedDomains",
      },
      content_categories: {
        value: dnsFilteringProfileContentCategoriesToHclTerraform(this._contentCategories.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsFilteringProfileContentCategories",
      },
      denied_domains: {
        value: dnsFilteringProfileDeniedDomainsToHclTerraform(this._deniedDomains.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsFilteringProfileDeniedDomains",
      },
      privacy_categories: {
        value: dnsFilteringProfilePrivacyCategoriesToHclTerraform(this._privacyCategories.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsFilteringProfilePrivacyCategories",
      },
      security_categories: {
        value: dnsFilteringProfileSecurityCategoriesToHclTerraform(this._securityCategories.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DnsFilteringProfileSecurityCategories",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
