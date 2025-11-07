// https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CredentialIssuanceRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Contains a list of actions, as key names, and the update method for each action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#automation CredentialIssuanceRule#automation}
  */
  readonly automation: CredentialIssuanceRuleAutomation;
  /**
  * Identifier (UUID) of the credential type with which this credential issuance rule is associated.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#credential_type_id CredentialIssuanceRule#credential_type_id}
  */
  readonly credentialTypeId: string;
  /**
  * Identifier (UUID) of the customer's Digital Wallet App that will interact with the user's Digital Wallet. If present, digital wallet pairing automatically starts when a user matches the credential issuance rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#digital_wallet_application_id CredentialIssuanceRule#digital_wallet_application_id}
  */
  readonly digitalWalletApplicationId?: string;
  /**
  * PingOne environment identifier (UUID) in which the credential issuance rule exists.  Must be a valid PingOne resource ID.  This field is immutable and will trigger a replace plan if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#environment_id CredentialIssuanceRule#environment_id}
  */
  readonly environmentId: string;
  /**
  * Contains one and only one filter (`group_ids`, `population_ids`, or `scim`) that selects the users to which the credential issuance rule applies. A filter must be defined if the issuance rule `status` is `ACTIVE`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#filter CredentialIssuanceRule#filter}
  */
  readonly filter?: CredentialIssuanceRuleFilter;
  /**
  * Contains notification information. When this property is supplied, the information within is used to create a custom notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#notification CredentialIssuanceRule#notification}
  */
  readonly notification?: CredentialIssuanceRuleNotification;
  /**
  * Status of the credential issuance rule. Can be `ACTIVE` or `DISABLED`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#status CredentialIssuanceRule#status}
  */
  readonly status: string;
}
export interface CredentialIssuanceRuleAutomation {
  /**
  * The method the service uses to issue credentials with the credential issuance rule. Can be `PERIODIC` or `ON_DEMAND`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#issue CredentialIssuanceRule#issue}
  */
  readonly issue: string;
  /**
  * The method the service uses to revoke credentials with the credential issuance rule. Can be `PERIODIC` or `ON_DEMAND`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#revoke CredentialIssuanceRule#revoke}
  */
  readonly revoke: string;
  /**
  * The method the service uses to update credentials with the credential issuance rule. Can be `PERIODIC` or `ON_DEMAND`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#update CredentialIssuanceRule#update}
  */
  readonly update: string;
}

export function credentialIssuanceRuleAutomationToTerraform(struct?: CredentialIssuanceRuleAutomation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    issue: cdktf.stringToTerraform(struct!.issue),
    revoke: cdktf.stringToTerraform(struct!.revoke),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function credentialIssuanceRuleAutomationToHclTerraform(struct?: CredentialIssuanceRuleAutomation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    issue: {
      value: cdktf.stringToHclTerraform(struct!.issue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revoke: {
      value: cdktf.stringToHclTerraform(struct!.revoke),
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

export class CredentialIssuanceRuleAutomationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialIssuanceRuleAutomation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._issue !== undefined) {
      hasAnyValues = true;
      internalValueResult.issue = this._issue;
    }
    if (this._revoke !== undefined) {
      hasAnyValues = true;
      internalValueResult.revoke = this._revoke;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialIssuanceRuleAutomation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._issue = undefined;
      this._revoke = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._issue = value.issue;
      this._revoke = value.revoke;
      this._update = value.update;
    }
  }

  // issue - computed: false, optional: false, required: true
  private _issue?: string; 
  public get issue() {
    return this.getStringAttribute('issue');
  }
  public set issue(value: string) {
    this._issue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issueInput() {
    return this._issue;
  }

  // revoke - computed: false, optional: false, required: true
  private _revoke?: string; 
  public get revoke() {
    return this.getStringAttribute('revoke');
  }
  public set revoke(value: string) {
    this._revoke = value;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeInput() {
    return this._revoke;
  }

  // update - computed: false, optional: false, required: true
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface CredentialIssuanceRuleFilter {
  /**
  * Array of one or more identifiers (UUIDs) of groups, any of which a user must belong for the credential issuance rule to apply.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#group_ids CredentialIssuanceRule#group_ids}
  */
  readonly groupIds?: string[];
  /**
  * Array of one or more identifiers (UUIDs) of populations, any of which a user must belong for the credential issuance rule to apply. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#population_ids CredentialIssuanceRule#population_ids}
  */
  readonly populationIds?: string[];
  /**
  * A SCIM query that selects users to which the credential issuance rule applies.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#scim CredentialIssuanceRule#scim}
  */
  readonly scim?: string;
}

export function credentialIssuanceRuleFilterToTerraform(struct?: CredentialIssuanceRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groupIds),
    population_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.populationIds),
    scim: cdktf.stringToTerraform(struct!.scim),
  }
}


export function credentialIssuanceRuleFilterToHclTerraform(struct?: CredentialIssuanceRuleFilter | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groupIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    population_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.populationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    scim: {
      value: cdktf.stringToHclTerraform(struct!.scim),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialIssuanceRuleFilterOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialIssuanceRuleFilter | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._groupIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupIds = this._groupIds;
    }
    if (this._populationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.populationIds = this._populationIds;
    }
    if (this._scim !== undefined) {
      hasAnyValues = true;
      internalValueResult.scim = this._scim;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialIssuanceRuleFilter | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._groupIds = undefined;
      this._populationIds = undefined;
      this._scim = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._groupIds = value.groupIds;
      this._populationIds = value.populationIds;
      this._scim = value.scim;
    }
  }

  // group_ids - computed: false, optional: true, required: false
  private _groupIds?: string[]; 
  public get groupIds() {
    return cdktf.Fn.tolist(this.getListAttribute('group_ids'));
  }
  public set groupIds(value: string[]) {
    this._groupIds = value;
  }
  public resetGroupIds() {
    this._groupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupIdsInput() {
    return this._groupIds;
  }

  // population_ids - computed: false, optional: true, required: false
  private _populationIds?: string[]; 
  public get populationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('population_ids'));
  }
  public set populationIds(value: string[]) {
    this._populationIds = value;
  }
  public resetPopulationIds() {
    this._populationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get populationIdsInput() {
    return this._populationIds;
  }

  // scim - computed: false, optional: true, required: false
  private _scim?: string; 
  public get scim() {
    return this.getStringAttribute('scim');
  }
  public set scim(value: string) {
    this._scim = value;
  }
  public resetScim() {
    this._scim = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimInput() {
    return this._scim;
  }
}
export interface CredentialIssuanceRuleNotificationTemplate {
  /**
  * A string that specifies the ISO language code used for the notification.  Options are `aa`, `ab`, `ae`, `af`, `af-ZA`, `ak`, `am`, `an`, `ar`, `ar-AE`, `ar-BH`, `ar-DZ`, `ar-EG`, `ar-IQ`, `ar-JO`, `ar-KW`, `ar-LB`, `ar-LY`, `ar-MA`, `ar-OM`, `ar-QA`, `ar-SA`, `ar-SY`, `ar-TN`, `ar-YE`, `as`, `av`, `ay`, `az`, `az-AZ`, `ba`, `be`, `be-BY`, `bg`, `bg-BG`, `bi`, `bm`, `bn`, `bo`, `br`, `bs`, `bs-BA`, `ca`, `ca-ES`, `ce`, `ch`, `cmn-CN`, `cmn-TW`, `co`, `cr`, `cs`, `cs-CZ`, `cu`, `cv`, `cy`, `cy-GB`, `da`, `da-DK`, `de`, `de-AT`, `de-CH`, `de-DE`, `de-LI`, `de-LU`, `dv`, `dv-MV`, `dz`, `ee`, `el`, `el-GR`, `en`, `en-AU`, `en-BZ`, `en-CA`, `en-CB`, `en-GB`, `en-GB-WLS`, `en-IE`, `en-IN`, `en-JM`, `en-NZ`, `en-PH`, `en-TT`, `en-US`, `en-ZA`, `en-ZW`, `eo`, `es`, `es-AR`, `es-BO`, `es-CL`, `es-CO`, `es-CR`, `es-DO`, `es-EC`, `es-ES`, `es-GT`, `es-HN`, `es-MX`, `es-NI`, `es-PA`, `es-PE`, `es-PR`, `es-PY`, `es-SV`, `es-US`, `es-UY`, `es-VE`, `et`, `et-EE`, `eu`, `eu-ES`, `fa`, `fa-IR`, `ff`, `fi`, `fi-FI`, `fj`, `fo`, `fo-FO`, `fr`, `fr-BE`, `fr-CA`, `fr-CH`, `fr-FR`, `fr-LU`, `fr-MC`, `fy`, `ga`, `gd`, `gl`, `gl-ES`, `gn`, `gu`, `gu-IN`, `gv`, `ha`, `he`, `he-IL`, `hi`, `hi-IN`, `ho`, `hr`, `hr-BA`, `hr-HR`, `ht`, `hu`, `hu-HU`, `hy`, `hy-AM`, `hz`, `ia`, `id`, `id-ID`, `ie`, `ig`, `ii`, `ik`, `io`, `is`, `is-IS`, `it`, `it-CH`, `it-IT`, `iu`, `ja`, `ja-JP`, `jv`, `ka`, `ka-GE`, `kg`, `ki`, `kj`, `kk`, `kk-KZ`, `kl`, `km`, `kn`, `kn-IN`, `ko`, `ko-KR`, `kok`, `kok-IN`, `kr`, `ks`, `ku`, `kv`, `kw`, `ky`, `ky-KG`, `la`, `lb`, `lg`, `li`, `ln`, `lo`, `lt`, `lt-LT`, `lu`, `lv`, `lv-LV`, `mg`, `mh`, `mi`, `mi-NZ`, `mk`, `mk-MK`, `ml`, `mn`, `mn-MN`, `mr`, `mr-IN`, `ms`, `ms-BN`, `ms-MY`, `mt`, `mt-MT`, `my`, `na`, `nb`, `nb-NO`, `nd`, `ne`, `ng`, `nl`, `nl-BE`, `nl-NL`, `nn`, `nn-NO`, `no`, `nr`, `ns`, `ns-ZA`, `nv`, `ny`, `oc`, `oj`, `om`, `or`, `os`, `pa`, `pa-IN`, `pi`, `pl`, `pl-PL`, `ps`, `ps-AR`, `pt`, `pt-BR`, `pt-PT`, `qu`, `qu-BO`, `qu-EC`, `qu-PE`, `rm`, `rn`, `ro`, `ro-RO`, `ru`, `ru-RU`, `rw`, `sa`, `sa-IN`, `sc`, `sd`, `se`, `se-FI`, `se-NO`, `se-SE`, `sg`, `si`, `sk`, `sk-SK`, `sl`, `sl-SI`, `sm`, `sn`, `so`, `sq`, `sq-AL`, `sr`, `sr-BA`, `sr-SP`, `ss`, `st`, `su`, `sv`, `sv-FI`, `sv-SE`, `sw`, `sw-KE`, `syr`, `syr-SY`, `ta`, `ta-IN`, `te`, `te-IN`, `tg`, `th`, `th-TH`, `ti`, `tk`, `tl`, `tl-PH`, `tn`, `tn-ZA`, `to`, `tr`, `tr-TR`, `ts`, `tt`, `tt-RU`, `tw`, `ty`, `ug`, `uk`, `uk-UA`, `ur`, `ur-PK`, `uz`, `uz-UZ`, `ve`, `vi`, `vi-VN`, `vo`, `wa`, `wo`, `xh`, `xh-ZA`, `yi`, `yo`, `yue-CN`, `za`, `zh`, `zh-CN`, `zh-HK`, `zh-MO`, `zh-SG`, `zh-TW`, `zu`, `zu-ZA`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#locale CredentialIssuanceRule#locale}
  */
  readonly locale: string;
  /**
  * The unique user-defined name for the content variant that contains the message text used for the notification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#variant CredentialIssuanceRule#variant}
  */
  readonly variant: string;
}

export function credentialIssuanceRuleNotificationTemplateToTerraform(struct?: CredentialIssuanceRuleNotificationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    locale: cdktf.stringToTerraform(struct!.locale),
    variant: cdktf.stringToTerraform(struct!.variant),
  }
}


export function credentialIssuanceRuleNotificationTemplateToHclTerraform(struct?: CredentialIssuanceRuleNotificationTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    locale: {
      value: cdktf.stringToHclTerraform(struct!.locale),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    variant: {
      value: cdktf.stringToHclTerraform(struct!.variant),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialIssuanceRuleNotificationTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialIssuanceRuleNotificationTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._locale !== undefined) {
      hasAnyValues = true;
      internalValueResult.locale = this._locale;
    }
    if (this._variant !== undefined) {
      hasAnyValues = true;
      internalValueResult.variant = this._variant;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialIssuanceRuleNotificationTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._locale = undefined;
      this._variant = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._locale = value.locale;
      this._variant = value.variant;
    }
  }

  // locale - computed: false, optional: false, required: true
  private _locale?: string; 
  public get locale() {
    return this.getStringAttribute('locale');
  }
  public set locale(value: string) {
    this._locale = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localeInput() {
    return this._locale;
  }

  // variant - computed: false, optional: false, required: true
  private _variant?: string; 
  public get variant() {
    return this.getStringAttribute('variant');
  }
  public set variant(value: string) {
    this._variant = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variantInput() {
    return this._variant;
  }
}
export interface CredentialIssuanceRuleNotification {
  /**
  * Array of methods for notifying the user; can be `EMAIL`, `SMS`, or both.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#methods CredentialIssuanceRule#methods}
  */
  readonly methods: string[];
  /**
  * Contains template parameters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#template CredentialIssuanceRule#template}
  */
  readonly template?: CredentialIssuanceRuleNotificationTemplate;
}

export function credentialIssuanceRuleNotificationToTerraform(struct?: CredentialIssuanceRuleNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    methods: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.methods),
    template: credentialIssuanceRuleNotificationTemplateToTerraform(struct!.template),
  }
}


export function credentialIssuanceRuleNotificationToHclTerraform(struct?: CredentialIssuanceRuleNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    methods: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.methods),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    template: {
      value: credentialIssuanceRuleNotificationTemplateToHclTerraform(struct!.template),
      isBlock: true,
      type: "struct",
      storageClassType: "CredentialIssuanceRuleNotificationTemplate",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CredentialIssuanceRuleNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CredentialIssuanceRuleNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._methods !== undefined) {
      hasAnyValues = true;
      internalValueResult.methods = this._methods;
    }
    if (this._template?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.template = this._template?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CredentialIssuanceRuleNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._methods = undefined;
      this._template.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._methods = value.methods;
      this._template.internalValue = value.template;
    }
  }

  // methods - computed: false, optional: false, required: true
  private _methods?: string[]; 
  public get methods() {
    return cdktf.Fn.tolist(this.getListAttribute('methods'));
  }
  public set methods(value: string[]) {
    this._methods = value;
  }
  // Temporarily expose input value. Use with caution.
  public get methodsInput() {
    return this._methods;
  }

  // template - computed: false, optional: true, required: false
  private _template = new CredentialIssuanceRuleNotificationTemplateOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: CredentialIssuanceRuleNotificationTemplate) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule pingone_credential_issuance_rule}
*/
export class CredentialIssuanceRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingone_credential_issuance_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CredentialIssuanceRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CredentialIssuanceRule to import
  * @param importFromId The id of the existing CredentialIssuanceRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CredentialIssuanceRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingone_credential_issuance_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingone/1.14.0/docs/resources/credential_issuance_rule pingone_credential_issuance_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CredentialIssuanceRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CredentialIssuanceRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'pingone_credential_issuance_rule',
      terraformGeneratorMetadata: {
        providerName: 'pingone',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._automation.internalValue = config.automation;
    this._credentialTypeId = config.credentialTypeId;
    this._digitalWalletApplicationId = config.digitalWalletApplicationId;
    this._environmentId = config.environmentId;
    this._filter.internalValue = config.filter;
    this._notification.internalValue = config.notification;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // automation - computed: false, optional: false, required: true
  private _automation = new CredentialIssuanceRuleAutomationOutputReference(this, "automation");
  public get automation() {
    return this._automation;
  }
  public putAutomation(value: CredentialIssuanceRuleAutomation) {
    this._automation.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get automationInput() {
    return this._automation.internalValue;
  }

  // credential_type_id - computed: false, optional: false, required: true
  private _credentialTypeId?: string; 
  public get credentialTypeId() {
    return this.getStringAttribute('credential_type_id');
  }
  public set credentialTypeId(value: string) {
    this._credentialTypeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialTypeIdInput() {
    return this._credentialTypeId;
  }

  // digital_wallet_application_id - computed: false, optional: true, required: false
  private _digitalWalletApplicationId?: string; 
  public get digitalWalletApplicationId() {
    return this.getStringAttribute('digital_wallet_application_id');
  }
  public set digitalWalletApplicationId(value: string) {
    this._digitalWalletApplicationId = value;
  }
  public resetDigitalWalletApplicationId() {
    this._digitalWalletApplicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get digitalWalletApplicationIdInput() {
    return this._digitalWalletApplicationId;
  }

  // environment_id - computed: false, optional: false, required: true
  private _environmentId?: string; 
  public get environmentId() {
    return this.getStringAttribute('environment_id');
  }
  public set environmentId(value: string) {
    this._environmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentIdInput() {
    return this._environmentId;
  }

  // filter - computed: false, optional: true, required: false
  private _filter = new CredentialIssuanceRuleFilterOutputReference(this, "filter");
  public get filter() {
    return this._filter;
  }
  public putFilter(value: CredentialIssuanceRuleFilter) {
    this._filter.internalValue = value;
  }
  public resetFilter() {
    this._filter.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new CredentialIssuanceRuleNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: CredentialIssuanceRuleNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      automation: credentialIssuanceRuleAutomationToTerraform(this._automation.internalValue),
      credential_type_id: cdktf.stringToTerraform(this._credentialTypeId),
      digital_wallet_application_id: cdktf.stringToTerraform(this._digitalWalletApplicationId),
      environment_id: cdktf.stringToTerraform(this._environmentId),
      filter: credentialIssuanceRuleFilterToTerraform(this._filter.internalValue),
      notification: credentialIssuanceRuleNotificationToTerraform(this._notification.internalValue),
      status: cdktf.stringToTerraform(this._status),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      automation: {
        value: credentialIssuanceRuleAutomationToHclTerraform(this._automation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialIssuanceRuleAutomation",
      },
      credential_type_id: {
        value: cdktf.stringToHclTerraform(this._credentialTypeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      digital_wallet_application_id: {
        value: cdktf.stringToHclTerraform(this._digitalWalletApplicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      environment_id: {
        value: cdktf.stringToHclTerraform(this._environmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      filter: {
        value: credentialIssuanceRuleFilterToHclTerraform(this._filter.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialIssuanceRuleFilter",
      },
      notification: {
        value: credentialIssuanceRuleNotificationToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CredentialIssuanceRuleNotification",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
