// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to take. Valid values are `Allow`, `DenySilent`, `DenyResetServer`, or `DenyResetBoth`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#action SecurityRule#action}
  */
  readonly action: string;
  /**
  * The list of applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#applications SecurityRule#applications}
  */
  readonly applications: string[];
  /**
  * The audit comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#audit_comment SecurityRule#audit_comment}
  */
  readonly auditComment?: string;
  /**
  * Decryption rule type. Valid values are `` or `SSLOutboundInspection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#decryption_rule_type SecurityRule#decryption_rule_type}
  */
  readonly decryptionRuleType?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#description SecurityRule#description}
  */
  readonly description?: string;
  /**
  * Set to false to disable this rule. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#enabled SecurityRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#id SecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Enable logging at end. Defaults to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#logging SecurityRule#logging}
  */
  readonly logging?: boolean | cdktf.IResolvable;
  /**
  * The name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#name SecurityRule#name}
  */
  readonly name: string;
  /**
  * Negate the destination definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#negate_destination SecurityRule#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Negate the source definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#negate_source SecurityRule#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * The rule priority.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#priority SecurityRule#priority}
  */
  readonly priority: number;
  /**
  * Protocol port list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#prot_port_list SecurityRule#prot_port_list}
  */
  readonly protPortList?: string[];
  /**
  * The protocol.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#protocol SecurityRule#protocol}
  */
  readonly protocol?: string;
  /**
  * The rulebase. Valid values are `PreRule`, `PostRule`, or `LocalRule`. Defaults to `PreRule`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#rule_list SecurityRule#rule_list}
  */
  readonly ruleList?: string;
  /**
  * The rulestack.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#rulestack SecurityRule#rulestack}
  */
  readonly rulestack: string;
  /**
  * The rulestack's scope. A local rulestack will require that you've retrieved a LRA JWT. A global rulestack will require that you've retrieved a GRA JWT. Valid values are `Local` or `Global`. Defaults to `Local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#scope SecurityRule#scope}
  */
  readonly scope?: string;
  /**
  * The tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#tags SecurityRule#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * category block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#category SecurityRule#category}
  */
  readonly category: SecurityRuleCategory;
  /**
  * destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#destination SecurityRule#destination}
  */
  readonly destination: SecurityRuleDestination;
  /**
  * source block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#source SecurityRule#source}
  */
  readonly source: SecurityRuleSource;
}
export interface SecurityRuleCategory {
  /**
  * List of feeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#feeds SecurityRule#feeds}
  */
  readonly feeds?: string[];
  /**
  * List of URL category names.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#url_category_names SecurityRule#url_category_names}
  */
  readonly urlCategoryNames?: string[];
}

export function securityRuleCategoryToTerraform(struct?: SecurityRuleCategoryOutputReference | SecurityRuleCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    feeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feeds),
    url_category_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.urlCategoryNames),
  }
}


export function securityRuleCategoryToHclTerraform(struct?: SecurityRuleCategoryOutputReference | SecurityRuleCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    feeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feeds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    url_category_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.urlCategoryNames),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleCategoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._feeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds;
    }
    if (this._urlCategoryNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlCategoryNames = this._urlCategoryNames;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._feeds = undefined;
      this._urlCategoryNames = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._feeds = value.feeds;
      this._urlCategoryNames = value.urlCategoryNames;
    }
  }

  // feeds - computed: false, optional: true, required: false
  private _feeds?: string[]; 
  public get feeds() {
    return cdktf.Fn.tolist(this.getListAttribute('feeds'));
  }
  public set feeds(value: string[]) {
    this._feeds = value;
  }
  public resetFeeds() {
    this._feeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds;
  }

  // url_category_names - computed: false, optional: true, required: false
  private _urlCategoryNames?: string[]; 
  public get urlCategoryNames() {
    return cdktf.Fn.tolist(this.getListAttribute('url_category_names'));
  }
  public set urlCategoryNames(value: string[]) {
    this._urlCategoryNames = value;
  }
  public resetUrlCategoryNames() {
    this._urlCategoryNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlCategoryNamesInput() {
    return this._urlCategoryNames;
  }
}
export interface SecurityRuleDestination {
  /**
  * List of CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#cidrs SecurityRule#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * List of countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#countries SecurityRule#countries}
  */
  readonly countries?: string[];
  /**
  * List of feeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#feeds SecurityRule#feeds}
  */
  readonly feeds?: string[];
  /**
  * List of FQDN lists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#fqdn_lists SecurityRule#fqdn_lists}
  */
  readonly fqdnLists?: string[];
  /**
  * List of prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#prefix_lists SecurityRule#prefix_lists}
  */
  readonly prefixLists?: string[];
}

export function securityRuleDestinationToTerraform(struct?: SecurityRuleDestinationOutputReference | SecurityRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    feeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feeds),
    fqdn_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.fqdnLists),
    prefix_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixLists),
  }
}


export function securityRuleDestinationToHclTerraform(struct?: SecurityRuleDestinationOutputReference | SecurityRuleDestination): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    feeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feeds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    fqdn_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.fqdnLists),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixLists),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._feeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds;
    }
    if (this._fqdnLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnLists = this._fqdnLists;
    }
    if (this._prefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLists = this._prefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
      this._countries = undefined;
      this._feeds = undefined;
      this._fqdnLists = undefined;
      this._prefixLists = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
      this._countries = value.countries;
      this._feeds = value.feeds;
      this._fqdnLists = value.fqdnLists;
      this._prefixLists = value.prefixLists;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // feeds - computed: false, optional: true, required: false
  private _feeds?: string[]; 
  public get feeds() {
    return cdktf.Fn.tolist(this.getListAttribute('feeds'));
  }
  public set feeds(value: string[]) {
    this._feeds = value;
  }
  public resetFeeds() {
    this._feeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds;
  }

  // fqdn_lists - computed: false, optional: true, required: false
  private _fqdnLists?: string[]; 
  public get fqdnLists() {
    return cdktf.Fn.tolist(this.getListAttribute('fqdn_lists'));
  }
  public set fqdnLists(value: string[]) {
    this._fqdnLists = value;
  }
  public resetFqdnLists() {
    this._fqdnLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnListsInput() {
    return this._fqdnLists;
  }

  // prefix_lists - computed: false, optional: true, required: false
  private _prefixLists?: string[]; 
  public get prefixLists() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_lists'));
  }
  public set prefixLists(value: string[]) {
    this._prefixLists = value;
  }
  public resetPrefixLists() {
    this._prefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListsInput() {
    return this._prefixLists;
  }
}
export interface SecurityRuleSource {
  /**
  * List of CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#cidrs SecurityRule#cidrs}
  */
  readonly cidrs?: string[];
  /**
  * List of countries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#countries SecurityRule#countries}
  */
  readonly countries?: string[];
  /**
  * List of feeds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#feeds SecurityRule#feeds}
  */
  readonly feeds?: string[];
  /**
  * List of prefix list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#prefix_lists SecurityRule#prefix_lists}
  */
  readonly prefixLists?: string[];
}

export function securityRuleSourceToTerraform(struct?: SecurityRuleSourceOutputReference | SecurityRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cidrs),
    countries: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.countries),
    feeds: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.feeds),
    prefix_lists: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.prefixLists),
  }
}


export function securityRuleSourceToHclTerraform(struct?: SecurityRuleSourceOutputReference | SecurityRuleSource): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cidrs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cidrs),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    countries: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.countries),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    feeds: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.feeds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    prefix_lists: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.prefixLists),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SecurityRuleSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SecurityRuleSource | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cidrs !== undefined) {
      hasAnyValues = true;
      internalValueResult.cidrs = this._cidrs;
    }
    if (this._countries !== undefined) {
      hasAnyValues = true;
      internalValueResult.countries = this._countries;
    }
    if (this._feeds !== undefined) {
      hasAnyValues = true;
      internalValueResult.feeds = this._feeds;
    }
    if (this._prefixLists !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixLists = this._prefixLists;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SecurityRuleSource | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cidrs = undefined;
      this._countries = undefined;
      this._feeds = undefined;
      this._prefixLists = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cidrs = value.cidrs;
      this._countries = value.countries;
      this._feeds = value.feeds;
      this._prefixLists = value.prefixLists;
    }
  }

  // cidrs - computed: false, optional: true, required: false
  private _cidrs?: string[]; 
  public get cidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('cidrs'));
  }
  public set cidrs(value: string[]) {
    this._cidrs = value;
  }
  public resetCidrs() {
    this._cidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cidrsInput() {
    return this._cidrs;
  }

  // countries - computed: false, optional: true, required: false
  private _countries?: string[]; 
  public get countries() {
    return cdktf.Fn.tolist(this.getListAttribute('countries'));
  }
  public set countries(value: string[]) {
    this._countries = value;
  }
  public resetCountries() {
    this._countries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countriesInput() {
    return this._countries;
  }

  // feeds - computed: false, optional: true, required: false
  private _feeds?: string[]; 
  public get feeds() {
    return cdktf.Fn.tolist(this.getListAttribute('feeds'));
  }
  public set feeds(value: string[]) {
    this._feeds = value;
  }
  public resetFeeds() {
    this._feeds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get feedsInput() {
    return this._feeds;
  }

  // prefix_lists - computed: false, optional: true, required: false
  private _prefixLists?: string[]; 
  public get prefixLists() {
    return cdktf.Fn.tolist(this.getListAttribute('prefix_lists'));
  }
  public set prefixLists(value: string[]) {
    this._prefixLists = value;
  }
  public resetPrefixLists() {
    this._prefixLists = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixListsInput() {
    return this._prefixLists;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule cloudngfwaws_security_rule}
*/
export class SecurityRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityRule to import
  * @param importFromId The id of the existing SecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/security_rule cloudngfwaws_security_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4',
        providerVersionConstraint: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._applications = config.applications;
    this._auditComment = config.auditComment;
    this._decryptionRuleType = config.decryptionRuleType;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._logging = config.logging;
    this._name = config.name;
    this._negateDestination = config.negateDestination;
    this._negateSource = config.negateSource;
    this._priority = config.priority;
    this._protPortList = config.protPortList;
    this._protocol = config.protocol;
    this._ruleList = config.ruleList;
    this._rulestack = config.rulestack;
    this._scope = config.scope;
    this._tags = config.tags;
    this._category.internalValue = config.category;
    this._destination.internalValue = config.destination;
    this._source.internalValue = config.source;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // applications - computed: false, optional: false, required: true
  private _applications?: string[]; 
  public get applications() {
    return cdktf.Fn.tolist(this.getListAttribute('applications'));
  }
  public set applications(value: string[]) {
    this._applications = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationsInput() {
    return this._applications;
  }

  // audit_comment - computed: false, optional: true, required: false
  private _auditComment?: string; 
  public get auditComment() {
    return this.getStringAttribute('audit_comment');
  }
  public set auditComment(value: string) {
    this._auditComment = value;
  }
  public resetAuditComment() {
    this._auditComment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get auditCommentInput() {
    return this._auditComment;
  }

  // decryption_rule_type - computed: false, optional: true, required: false
  private _decryptionRuleType?: string; 
  public get decryptionRuleType() {
    return this.getStringAttribute('decryption_rule_type');
  }
  public set decryptionRuleType(value: string) {
    this._decryptionRuleType = value;
  }
  public resetDecryptionRuleType() {
    this._decryptionRuleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get decryptionRuleTypeInput() {
    return this._decryptionRuleType;
  }

  // description - computed: false, optional: true, required: false
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

  // enabled - computed: false, optional: true, required: false
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

  // logging - computed: false, optional: true, required: false
  private _logging?: boolean | cdktf.IResolvable; 
  public get logging() {
    return this.getBooleanAttribute('logging');
  }
  public set logging(value: boolean | cdktf.IResolvable) {
    this._logging = value;
  }
  public resetLogging() {
    this._logging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingInput() {
    return this._logging;
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

  // negate_destination - computed: false, optional: true, required: false
  private _negateDestination?: boolean | cdktf.IResolvable; 
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }
  public set negateDestination(value: boolean | cdktf.IResolvable) {
    this._negateDestination = value;
  }
  public resetNegateDestination() {
    this._negateDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateDestinationInput() {
    return this._negateDestination;
  }

  // negate_source - computed: false, optional: true, required: false
  private _negateSource?: boolean | cdktf.IResolvable; 
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }
  public set negateSource(value: boolean | cdktf.IResolvable) {
    this._negateSource = value;
  }
  public resetNegateSource() {
    this._negateSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negateSourceInput() {
    return this._negateSource;
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

  // prot_port_list - computed: false, optional: true, required: false
  private _protPortList?: string[]; 
  public get protPortList() {
    return cdktf.Fn.tolist(this.getListAttribute('prot_port_list'));
  }
  public set protPortList(value: string[]) {
    this._protPortList = value;
  }
  public resetProtPortList() {
    this._protPortList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protPortListInput() {
    return this._protPortList;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // rule_list - computed: false, optional: true, required: false
  private _ruleList?: string; 
  public get ruleList() {
    return this.getStringAttribute('rule_list');
  }
  public set ruleList(value: string) {
    this._ruleList = value;
  }
  public resetRuleList() {
    this._ruleList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleListInput() {
    return this._ruleList;
  }

  // rulestack - computed: false, optional: false, required: true
  private _rulestack?: string; 
  public get rulestack() {
    return this.getStringAttribute('rulestack');
  }
  public set rulestack(value: string) {
    this._rulestack = value;
  }
  // Temporarily expose input value. Use with caution.
  public get rulestackInput() {
    return this._rulestack;
  }

  // scope - computed: false, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // update_token - computed: true, optional: false, required: false
  public get updateToken() {
    return this.getStringAttribute('update_token');
  }

  // category - computed: false, optional: false, required: true
  private _category = new SecurityRuleCategoryOutputReference(this, "category");
  public get category() {
    return this._category;
  }
  public putCategory(value: SecurityRuleCategory) {
    this._category.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category.internalValue;
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new SecurityRuleDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: SecurityRuleDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // source - computed: false, optional: false, required: true
  private _source = new SecurityRuleSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: SecurityRuleSource) {
    this._source.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      applications: cdktf.listMapper(cdktf.stringToTerraform, false)(this._applications),
      audit_comment: cdktf.stringToTerraform(this._auditComment),
      decryption_rule_type: cdktf.stringToTerraform(this._decryptionRuleType),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      logging: cdktf.booleanToTerraform(this._logging),
      name: cdktf.stringToTerraform(this._name),
      negate_destination: cdktf.booleanToTerraform(this._negateDestination),
      negate_source: cdktf.booleanToTerraform(this._negateSource),
      priority: cdktf.numberToTerraform(this._priority),
      prot_port_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._protPortList),
      protocol: cdktf.stringToTerraform(this._protocol),
      rule_list: cdktf.stringToTerraform(this._ruleList),
      rulestack: cdktf.stringToTerraform(this._rulestack),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      category: securityRuleCategoryToTerraform(this._category.internalValue),
      destination: securityRuleDestinationToTerraform(this._destination.internalValue),
      source: securityRuleSourceToTerraform(this._source.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      applications: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._applications),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      audit_comment: {
        value: cdktf.stringToHclTerraform(this._auditComment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      decryption_rule_type: {
        value: cdktf.stringToHclTerraform(this._decryptionRuleType),
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
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
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
      logging: {
        value: cdktf.booleanToHclTerraform(this._logging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negate_destination: {
        value: cdktf.booleanToHclTerraform(this._negateDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      negate_source: {
        value: cdktf.booleanToHclTerraform(this._negateSource),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prot_port_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._protPortList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rule_list: {
        value: cdktf.stringToHclTerraform(this._ruleList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rulestack: {
        value: cdktf.stringToHclTerraform(this._rulestack),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      category: {
        value: securityRuleCategoryToHclTerraform(this._category.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityRuleCategoryList",
      },
      destination: {
        value: securityRuleDestinationToHclTerraform(this._destination.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityRuleDestinationList",
      },
      source: {
        value: securityRuleSourceToHclTerraform(this._source.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SecurityRuleSourceList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
