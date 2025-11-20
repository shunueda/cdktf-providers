// https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the Network ACL is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#active NetworkAcl#active}
  */
  readonly active: boolean | cdktf.IResolvable;
  /**
  * The description of the Network ACL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#description NetworkAcl#description}
  */
  readonly description: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#id NetworkAcl#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The priority of the Network ACL. Must be unique between 1 and 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#priority NetworkAcl#priority}
  */
  readonly priority: number;
  /**
  * rule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#rule NetworkAcl#rule}
  */
  readonly rule: NetworkAclRule;
}
export interface NetworkAclRuleAction {
  /**
  * If true, allows the request. When using allow action, no other properties should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#allow NetworkAcl#allow}
  */
  readonly allow?: boolean | cdktf.IResolvable;
  /**
  * If true, blocks the request. When using block action, no other properties should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#block NetworkAcl#block}
  */
  readonly block?: boolean | cdktf.IResolvable;
  /**
  * If true, logs the request. When using log action, no other properties should be set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#log NetworkAcl#log}
  */
  readonly log?: boolean | cdktf.IResolvable;
  /**
  * If true, redirects the request. When using redirect action, redirect_uri must also be specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#redirect NetworkAcl#redirect}
  */
  readonly redirect?: boolean | cdktf.IResolvable;
  /**
  * The URI to redirect to when redirect is true. Required when redirect is true. Must be between 1 and 2000 characters.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#redirect_uri NetworkAcl#redirect_uri}
  */
  readonly redirectUri?: string;
}

export function networkAclRuleActionToTerraform(struct?: NetworkAclRuleActionOutputReference | NetworkAclRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow: cdktf.booleanToTerraform(struct!.allow),
    block: cdktf.booleanToTerraform(struct!.block),
    log: cdktf.booleanToTerraform(struct!.log),
    redirect: cdktf.booleanToTerraform(struct!.redirect),
    redirect_uri: cdktf.stringToTerraform(struct!.redirectUri),
  }
}


export function networkAclRuleActionToHclTerraform(struct?: NetworkAclRuleActionOutputReference | NetworkAclRuleAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow: {
      value: cdktf.booleanToHclTerraform(struct!.allow),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    block: {
      value: cdktf.booleanToHclTerraform(struct!.block),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    log: {
      value: cdktf.booleanToHclTerraform(struct!.log),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect: {
      value: cdktf.booleanToHclTerraform(struct!.redirect),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    redirect_uri: {
      value: cdktf.stringToHclTerraform(struct!.redirectUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAclRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAclRuleAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allow !== undefined) {
      hasAnyValues = true;
      internalValueResult.allow = this._allow;
    }
    if (this._block !== undefined) {
      hasAnyValues = true;
      internalValueResult.block = this._block;
    }
    if (this._log !== undefined) {
      hasAnyValues = true;
      internalValueResult.log = this._log;
    }
    if (this._redirect !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirect = this._redirect;
    }
    if (this._redirectUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectUri = this._redirectUri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclRuleAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allow = undefined;
      this._block = undefined;
      this._log = undefined;
      this._redirect = undefined;
      this._redirectUri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allow = value.allow;
      this._block = value.block;
      this._log = value.log;
      this._redirect = value.redirect;
      this._redirectUri = value.redirectUri;
    }
  }

  // allow - computed: false, optional: true, required: false
  private _allow?: boolean | cdktf.IResolvable; 
  public get allow() {
    return this.getBooleanAttribute('allow');
  }
  public set allow(value: boolean | cdktf.IResolvable) {
    this._allow = value;
  }
  public resetAllow() {
    this._allow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInput() {
    return this._allow;
  }

  // block - computed: false, optional: true, required: false
  private _block?: boolean | cdktf.IResolvable; 
  public get block() {
    return this.getBooleanAttribute('block');
  }
  public set block(value: boolean | cdktf.IResolvable) {
    this._block = value;
  }
  public resetBlock() {
    this._block = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockInput() {
    return this._block;
  }

  // log - computed: false, optional: true, required: false
  private _log?: boolean | cdktf.IResolvable; 
  public get log() {
    return this.getBooleanAttribute('log');
  }
  public set log(value: boolean | cdktf.IResolvable) {
    this._log = value;
  }
  public resetLog() {
    this._log = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logInput() {
    return this._log;
  }

  // redirect - computed: false, optional: true, required: false
  private _redirect?: boolean | cdktf.IResolvable; 
  public get redirect() {
    return this.getBooleanAttribute('redirect');
  }
  public set redirect(value: boolean | cdktf.IResolvable) {
    this._redirect = value;
  }
  public resetRedirect() {
    this._redirect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectInput() {
    return this._redirect;
  }

  // redirect_uri - computed: false, optional: true, required: false
  private _redirectUri?: string; 
  public get redirectUri() {
    return this.getStringAttribute('redirect_uri');
  }
  public set redirectUri(value: string) {
    this._redirectUri = value;
  }
  public resetRedirectUri() {
    this._redirectUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectUriInput() {
    return this._redirectUri;
  }
}
export interface NetworkAclRuleMatch {
  /**
  * ASNs. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#asns NetworkAcl#asns}
  */
  readonly asns?: number[];
  /**
  * Geo Country Codes. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#geo_country_codes NetworkAcl#geo_country_codes}
  */
  readonly geoCountryCodes?: string[];
  /**
  * Geo Subdivision Codes. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#geo_subdivision_codes NetworkAcl#geo_subdivision_codes}
  */
  readonly geoSubdivisionCodes?: string[];
  /**
  * IPv4 CIDRs. Must contain between 1 and 10 unique items. Can be IPv4 addresses or CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ipv4_cidrs NetworkAcl#ipv4_cidrs}
  */
  readonly ipv4Cidrs?: string[];
  /**
  * IPv6 CIDRs. Must contain between 1 and 10 unique items. Can be IPv6 addresses or CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ipv6_cidrs NetworkAcl#ipv6_cidrs}
  */
  readonly ipv6Cidrs?: string[];
  /**
  * JA3 Fingerprints. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ja3_fingerprints NetworkAcl#ja3_fingerprints}
  */
  readonly ja3Fingerprints?: string[];
  /**
  * JA4 Fingerprints. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ja4_fingerprints NetworkAcl#ja4_fingerprints}
  */
  readonly ja4Fingerprints?: string[];
  /**
  * User Agents. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#user_agents NetworkAcl#user_agents}
  */
  readonly userAgents?: string[];
}

export function networkAclRuleMatchToTerraform(struct?: NetworkAclRuleMatchOutputReference | NetworkAclRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asns),
    geo_country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoCountryCodes),
    geo_subdivision_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoSubdivisionCodes),
    ipv4_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Cidrs),
    ipv6_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Cidrs),
    ja3_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ja3Fingerprints),
    ja4_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ja4Fingerprints),
    user_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAgents),
  }
}


export function networkAclRuleMatchToHclTerraform(struct?: NetworkAclRuleMatchOutputReference | NetworkAclRuleMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    geo_country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoCountryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    geo_subdivision_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoSubdivisionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ja3_fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ja3Fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ja4_fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ja4Fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_agents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAgents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAclRuleMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAclRuleMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asns !== undefined) {
      hasAnyValues = true;
      internalValueResult.asns = this._asns;
    }
    if (this._geoCountryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoCountryCodes = this._geoCountryCodes;
    }
    if (this._geoSubdivisionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoSubdivisionCodes = this._geoSubdivisionCodes;
    }
    if (this._ipv4Cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Cidrs = this._ipv4Cidrs;
    }
    if (this._ipv6Cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cidrs = this._ipv6Cidrs;
    }
    if (this._ja3Fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja3Fingerprints = this._ja3Fingerprints;
    }
    if (this._ja4Fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4Fingerprints = this._ja4Fingerprints;
    }
    if (this._userAgents !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgents = this._userAgents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclRuleMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asns = undefined;
      this._geoCountryCodes = undefined;
      this._geoSubdivisionCodes = undefined;
      this._ipv4Cidrs = undefined;
      this._ipv6Cidrs = undefined;
      this._ja3Fingerprints = undefined;
      this._ja4Fingerprints = undefined;
      this._userAgents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asns = value.asns;
      this._geoCountryCodes = value.geoCountryCodes;
      this._geoSubdivisionCodes = value.geoSubdivisionCodes;
      this._ipv4Cidrs = value.ipv4Cidrs;
      this._ipv6Cidrs = value.ipv6Cidrs;
      this._ja3Fingerprints = value.ja3Fingerprints;
      this._ja4Fingerprints = value.ja4Fingerprints;
      this._userAgents = value.userAgents;
    }
  }

  // asns - computed: false, optional: true, required: false
  private _asns?: number[]; 
  public get asns() {
    return this.getNumberListAttribute('asns');
  }
  public set asns(value: number[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // geo_country_codes - computed: false, optional: true, required: false
  private _geoCountryCodes?: string[]; 
  public get geoCountryCodes() {
    return this.getListAttribute('geo_country_codes');
  }
  public set geoCountryCodes(value: string[]) {
    this._geoCountryCodes = value;
  }
  public resetGeoCountryCodes() {
    this._geoCountryCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoCountryCodesInput() {
    return this._geoCountryCodes;
  }

  // geo_subdivision_codes - computed: false, optional: true, required: false
  private _geoSubdivisionCodes?: string[]; 
  public get geoSubdivisionCodes() {
    return this.getListAttribute('geo_subdivision_codes');
  }
  public set geoSubdivisionCodes(value: string[]) {
    this._geoSubdivisionCodes = value;
  }
  public resetGeoSubdivisionCodes() {
    this._geoSubdivisionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoSubdivisionCodesInput() {
    return this._geoSubdivisionCodes;
  }

  // ipv4_cidrs - computed: false, optional: true, required: false
  private _ipv4Cidrs?: string[]; 
  public get ipv4Cidrs() {
    return this.getListAttribute('ipv4_cidrs');
  }
  public set ipv4Cidrs(value: string[]) {
    this._ipv4Cidrs = value;
  }
  public resetIpv4Cidrs() {
    this._ipv4Cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrsInput() {
    return this._ipv4Cidrs;
  }

  // ipv6_cidrs - computed: false, optional: true, required: false
  private _ipv6Cidrs?: string[]; 
  public get ipv6Cidrs() {
    return this.getListAttribute('ipv6_cidrs');
  }
  public set ipv6Cidrs(value: string[]) {
    this._ipv6Cidrs = value;
  }
  public resetIpv6Cidrs() {
    this._ipv6Cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrsInput() {
    return this._ipv6Cidrs;
  }

  // ja3_fingerprints - computed: false, optional: true, required: false
  private _ja3Fingerprints?: string[]; 
  public get ja3Fingerprints() {
    return this.getListAttribute('ja3_fingerprints');
  }
  public set ja3Fingerprints(value: string[]) {
    this._ja3Fingerprints = value;
  }
  public resetJa3Fingerprints() {
    this._ja3Fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3FingerprintsInput() {
    return this._ja3Fingerprints;
  }

  // ja4_fingerprints - computed: false, optional: true, required: false
  private _ja4Fingerprints?: string[]; 
  public get ja4Fingerprints() {
    return this.getListAttribute('ja4_fingerprints');
  }
  public set ja4Fingerprints(value: string[]) {
    this._ja4Fingerprints = value;
  }
  public resetJa4Fingerprints() {
    this._ja4Fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4FingerprintsInput() {
    return this._ja4Fingerprints;
  }

  // user_agents - computed: false, optional: true, required: false
  private _userAgents?: string[]; 
  public get userAgents() {
    return this.getListAttribute('user_agents');
  }
  public set userAgents(value: string[]) {
    this._userAgents = value;
  }
  public resetUserAgents() {
    this._userAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentsInput() {
    return this._userAgents;
  }
}
export interface NetworkAclRuleNotMatch {
  /**
  * ASNs. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#asns NetworkAcl#asns}
  */
  readonly asns?: number[];
  /**
  * Geo Country Codes. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#geo_country_codes NetworkAcl#geo_country_codes}
  */
  readonly geoCountryCodes?: string[];
  /**
  * Geo Subdivision Codes. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#geo_subdivision_codes NetworkAcl#geo_subdivision_codes}
  */
  readonly geoSubdivisionCodes?: string[];
  /**
  * IPv4 CIDRs. Must contain between 1 and 10 unique items. Can be IPv4 addresses or CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ipv4_cidrs NetworkAcl#ipv4_cidrs}
  */
  readonly ipv4Cidrs?: string[];
  /**
  * IPv6 CIDRs. Must contain between 1 and 10 unique items. Can be IPv6 addresses or CIDR blocks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ipv6_cidrs NetworkAcl#ipv6_cidrs}
  */
  readonly ipv6Cidrs?: string[];
  /**
  * JA3 Fingerprints. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ja3_fingerprints NetworkAcl#ja3_fingerprints}
  */
  readonly ja3Fingerprints?: string[];
  /**
  * JA4 Fingerprints. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#ja4_fingerprints NetworkAcl#ja4_fingerprints}
  */
  readonly ja4Fingerprints?: string[];
  /**
  * User Agents. Must contain between 1 and 10 unique items.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#user_agents NetworkAcl#user_agents}
  */
  readonly userAgents?: string[];
}

export function networkAclRuleNotMatchToTerraform(struct?: NetworkAclRuleNotMatchOutputReference | NetworkAclRuleNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    asns: cdktf.listMapper(cdktf.numberToTerraform, false)(struct!.asns),
    geo_country_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoCountryCodes),
    geo_subdivision_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.geoSubdivisionCodes),
    ipv4_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv4Cidrs),
    ipv6_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ipv6Cidrs),
    ja3_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ja3Fingerprints),
    ja4_fingerprints: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.ja4Fingerprints),
    user_agents: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userAgents),
  }
}


export function networkAclRuleNotMatchToHclTerraform(struct?: NetworkAclRuleNotMatchOutputReference | NetworkAclRuleNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    asns: {
      value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(struct!.asns),
      isBlock: false,
      type: "list",
      storageClassType: "numberList",
    },
    geo_country_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoCountryCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    geo_subdivision_codes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.geoSubdivisionCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv4_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv4Cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ipv6_cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ipv6Cidrs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ja3_fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ja3Fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    ja4_fingerprints: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.ja4Fingerprints),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_agents: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userAgents),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAclRuleNotMatchOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAclRuleNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._asns !== undefined) {
      hasAnyValues = true;
      internalValueResult.asns = this._asns;
    }
    if (this._geoCountryCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoCountryCodes = this._geoCountryCodes;
    }
    if (this._geoSubdivisionCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.geoSubdivisionCodes = this._geoSubdivisionCodes;
    }
    if (this._ipv4Cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Cidrs = this._ipv4Cidrs;
    }
    if (this._ipv6Cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6Cidrs = this._ipv6Cidrs;
    }
    if (this._ja3Fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja3Fingerprints = this._ja3Fingerprints;
    }
    if (this._ja4Fingerprints !== undefined) {
      hasAnyValues = true;
      internalValueResult.ja4Fingerprints = this._ja4Fingerprints;
    }
    if (this._userAgents !== undefined) {
      hasAnyValues = true;
      internalValueResult.userAgents = this._userAgents;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclRuleNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._asns = undefined;
      this._geoCountryCodes = undefined;
      this._geoSubdivisionCodes = undefined;
      this._ipv4Cidrs = undefined;
      this._ipv6Cidrs = undefined;
      this._ja3Fingerprints = undefined;
      this._ja4Fingerprints = undefined;
      this._userAgents = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._asns = value.asns;
      this._geoCountryCodes = value.geoCountryCodes;
      this._geoSubdivisionCodes = value.geoSubdivisionCodes;
      this._ipv4Cidrs = value.ipv4Cidrs;
      this._ipv6Cidrs = value.ipv6Cidrs;
      this._ja3Fingerprints = value.ja3Fingerprints;
      this._ja4Fingerprints = value.ja4Fingerprints;
      this._userAgents = value.userAgents;
    }
  }

  // asns - computed: false, optional: true, required: false
  private _asns?: number[]; 
  public get asns() {
    return this.getNumberListAttribute('asns');
  }
  public set asns(value: number[]) {
    this._asns = value;
  }
  public resetAsns() {
    this._asns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get asnsInput() {
    return this._asns;
  }

  // geo_country_codes - computed: false, optional: true, required: false
  private _geoCountryCodes?: string[]; 
  public get geoCountryCodes() {
    return this.getListAttribute('geo_country_codes');
  }
  public set geoCountryCodes(value: string[]) {
    this._geoCountryCodes = value;
  }
  public resetGeoCountryCodes() {
    this._geoCountryCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoCountryCodesInput() {
    return this._geoCountryCodes;
  }

  // geo_subdivision_codes - computed: false, optional: true, required: false
  private _geoSubdivisionCodes?: string[]; 
  public get geoSubdivisionCodes() {
    return this.getListAttribute('geo_subdivision_codes');
  }
  public set geoSubdivisionCodes(value: string[]) {
    this._geoSubdivisionCodes = value;
  }
  public resetGeoSubdivisionCodes() {
    this._geoSubdivisionCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geoSubdivisionCodesInput() {
    return this._geoSubdivisionCodes;
  }

  // ipv4_cidrs - computed: false, optional: true, required: false
  private _ipv4Cidrs?: string[]; 
  public get ipv4Cidrs() {
    return this.getListAttribute('ipv4_cidrs');
  }
  public set ipv4Cidrs(value: string[]) {
    this._ipv4Cidrs = value;
  }
  public resetIpv4Cidrs() {
    this._ipv4Cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4CidrsInput() {
    return this._ipv4Cidrs;
  }

  // ipv6_cidrs - computed: false, optional: true, required: false
  private _ipv6Cidrs?: string[]; 
  public get ipv6Cidrs() {
    return this.getListAttribute('ipv6_cidrs');
  }
  public set ipv6Cidrs(value: string[]) {
    this._ipv6Cidrs = value;
  }
  public resetIpv6Cidrs() {
    this._ipv6Cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6CidrsInput() {
    return this._ipv6Cidrs;
  }

  // ja3_fingerprints - computed: false, optional: true, required: false
  private _ja3Fingerprints?: string[]; 
  public get ja3Fingerprints() {
    return this.getListAttribute('ja3_fingerprints');
  }
  public set ja3Fingerprints(value: string[]) {
    this._ja3Fingerprints = value;
  }
  public resetJa3Fingerprints() {
    this._ja3Fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja3FingerprintsInput() {
    return this._ja3Fingerprints;
  }

  // ja4_fingerprints - computed: false, optional: true, required: false
  private _ja4Fingerprints?: string[]; 
  public get ja4Fingerprints() {
    return this.getListAttribute('ja4_fingerprints');
  }
  public set ja4Fingerprints(value: string[]) {
    this._ja4Fingerprints = value;
  }
  public resetJa4Fingerprints() {
    this._ja4Fingerprints = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ja4FingerprintsInput() {
    return this._ja4Fingerprints;
  }

  // user_agents - computed: false, optional: true, required: false
  private _userAgents?: string[]; 
  public get userAgents() {
    return this.getListAttribute('user_agents');
  }
  public set userAgents(value: string[]) {
    this._userAgents = value;
  }
  public resetUserAgents() {
    this._userAgents = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userAgentsInput() {
    return this._userAgents;
  }
}
export interface NetworkAclRule {
  /**
  * The scope of the Network ACL Rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#scope NetworkAcl#scope}
  */
  readonly scope: string;
  /**
  * action block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#action NetworkAcl#action}
  */
  readonly action: NetworkAclRuleAction;
  /**
  * match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#match NetworkAcl#match}
  */
  readonly match?: NetworkAclRuleMatch;
  /**
  * not_match block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#not_match NetworkAcl#not_match}
  */
  readonly notMatch?: NetworkAclRuleNotMatch;
}

export function networkAclRuleToTerraform(struct?: NetworkAclRuleOutputReference | NetworkAclRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    scope: cdktf.stringToTerraform(struct!.scope),
    action: networkAclRuleActionToTerraform(struct!.action),
    match: networkAclRuleMatchToTerraform(struct!.match),
    not_match: networkAclRuleNotMatchToTerraform(struct!.notMatch),
  }
}


export function networkAclRuleToHclTerraform(struct?: NetworkAclRuleOutputReference | NetworkAclRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    scope: {
      value: cdktf.stringToHclTerraform(struct!.scope),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action: {
      value: networkAclRuleActionToHclTerraform(struct!.action),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAclRuleActionList",
    },
    match: {
      value: networkAclRuleMatchToHclTerraform(struct!.match),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAclRuleMatchList",
    },
    not_match: {
      value: networkAclRuleNotMatchToHclTerraform(struct!.notMatch),
      isBlock: true,
      type: "list",
      storageClassType: "NetworkAclRuleNotMatchList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkAclRuleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NetworkAclRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._scope !== undefined) {
      hasAnyValues = true;
      internalValueResult.scope = this._scope;
    }
    if (this._action?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action?.internalValue;
    }
    if (this._match?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.match = this._match?.internalValue;
    }
    if (this._notMatch?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notMatch = this._notMatch?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkAclRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._scope = undefined;
      this._action.internalValue = undefined;
      this._match.internalValue = undefined;
      this._notMatch.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._scope = value.scope;
      this._action.internalValue = value.action;
      this._match.internalValue = value.match;
      this._notMatch.internalValue = value.notMatch;
    }
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // action - computed: false, optional: false, required: true
  private _action = new NetworkAclRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: NetworkAclRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // match - computed: false, optional: true, required: false
  private _match = new NetworkAclRuleMatchOutputReference(this, "match");
  public get match() {
    return this._match;
  }
  public putMatch(value: NetworkAclRuleMatch) {
    this._match.internalValue = value;
  }
  public resetMatch() {
    this._match.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchInput() {
    return this._match.internalValue;
  }

  // not_match - computed: false, optional: true, required: false
  private _notMatch = new NetworkAclRuleNotMatchOutputReference(this, "not_match");
  public get notMatch() {
    return this._notMatch;
  }
  public putNotMatch(value: NetworkAclRuleNotMatch) {
    this._notMatch.internalValue = value;
  }
  public resetNotMatch() {
    this._notMatch.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notMatchInput() {
    return this._notMatch.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl auth0_network_acl}
*/
export class NetworkAcl extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "auth0_network_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkAcl to import
  * @param importFromId The id of the existing NetworkAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "auth0_network_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/auth0/auth0/1.36.0/docs/resources/network_acl auth0_network_acl} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkAclConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkAclConfig) {
    super(scope, id, {
      terraformResourceType: 'auth0_network_acl',
      terraformGeneratorMetadata: {
        providerName: 'auth0',
        providerVersion: '1.36.0',
        providerVersionConstraint: '1.36.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._active = config.active;
    this._description = config.description;
    this._id = config.id;
    this._priority = config.priority;
    this._rule.internalValue = config.rule;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // active - computed: false, optional: false, required: true
  private _active?: boolean | cdktf.IResolvable; 
  public get active() {
    return this.getBooleanAttribute('active');
  }
  public set active(value: boolean | cdktf.IResolvable) {
    this._active = value;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInput() {
    return this._active;
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // rule - computed: false, optional: false, required: true
  private _rule = new NetworkAclRuleOutputReference(this, "rule");
  public get rule() {
    return this._rule;
  }
  public putRule(value: NetworkAclRule) {
    this._rule.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      active: cdktf.booleanToTerraform(this._active),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      priority: cdktf.numberToTerraform(this._priority),
      rule: networkAclRuleToTerraform(this._rule.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      active: {
        value: cdktf.booleanToHclTerraform(this._active),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      rule: {
        value: networkAclRuleToHclTerraform(this._rule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkAclRuleList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
