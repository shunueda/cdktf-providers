// https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RulestackConfig extends cdktf.TerraformMetaArguments {
  /**
  * Account group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#account_group Rulestack#account_group}
  */
  readonly accountGroup?: string;
  /**
  * The account ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#account_id Rulestack#account_id}
  */
  readonly accountId?: string;
  /**
  * The description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#description Rulestack#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#id Rulestack#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Lookup x forwarded for.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#lookup_x_forwarded_for Rulestack#lookup_x_forwarded_for}
  */
  readonly lookupXForwardedFor?: string;
  /**
  * Minimum App-ID version number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#minimum_app_id_version Rulestack#minimum_app_id_version}
  */
  readonly minimumAppIdVersion?: string;
  /**
  * The name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#name Rulestack#name}
  */
  readonly name: string;
  /**
  * The rulestack's scope. A local rulestack will require that you've retrieved a LRA JWT. A global rulestack will require that you've retrieved a GRA JWT. Valid values are `Local` or `Global`. Defaults to `Local`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#scope Rulestack#scope}
  */
  readonly scope?: string;
  /**
  * The tags.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#tags Rulestack#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * profile_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#profile_config Rulestack#profile_config}
  */
  readonly profileConfig: RulestackProfileConfig;
}
export interface RulestackProfileConfig {
  /**
  * Anti-spyware profile setting. Defaults to `BestPractice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#anti_spyware Rulestack#anti_spyware}
  */
  readonly antiSpyware?: string;
  /**
  * Anti-virus profile setting. Defaults to `BestPractice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#anti_virus Rulestack#anti_virus}
  */
  readonly antiVirus?: string;
  /**
  * File blocking profile setting. Defaults to `BestPractice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#file_blocking Rulestack#file_blocking}
  */
  readonly fileBlocking?: string;
  /**
  * Outbound trust certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#outbound_trust_certificate Rulestack#outbound_trust_certificate}
  */
  readonly outboundTrustCertificate?: string;
  /**
  * Outbound untrust certificate.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#outbound_untrust_certificate Rulestack#outbound_untrust_certificate}
  */
  readonly outboundUntrustCertificate?: string;
  /**
  * URL filtering profile setting. Defaults to `None`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#url_filtering Rulestack#url_filtering}
  */
  readonly urlFiltering?: string;
  /**
  * Vulnerability profile setting. Defaults to `BestPractice`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#vulnerability Rulestack#vulnerability}
  */
  readonly vulnerability?: string;
}

export function rulestackProfileConfigToTerraform(struct?: RulestackProfileConfigOutputReference | RulestackProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    anti_spyware: cdktf.stringToTerraform(struct!.antiSpyware),
    anti_virus: cdktf.stringToTerraform(struct!.antiVirus),
    file_blocking: cdktf.stringToTerraform(struct!.fileBlocking),
    outbound_trust_certificate: cdktf.stringToTerraform(struct!.outboundTrustCertificate),
    outbound_untrust_certificate: cdktf.stringToTerraform(struct!.outboundUntrustCertificate),
    url_filtering: cdktf.stringToTerraform(struct!.urlFiltering),
    vulnerability: cdktf.stringToTerraform(struct!.vulnerability),
  }
}


export function rulestackProfileConfigToHclTerraform(struct?: RulestackProfileConfigOutputReference | RulestackProfileConfig): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    anti_spyware: {
      value: cdktf.stringToHclTerraform(struct!.antiSpyware),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    anti_virus: {
      value: cdktf.stringToHclTerraform(struct!.antiVirus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_blocking: {
      value: cdktf.stringToHclTerraform(struct!.fileBlocking),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_trust_certificate: {
      value: cdktf.stringToHclTerraform(struct!.outboundTrustCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    outbound_untrust_certificate: {
      value: cdktf.stringToHclTerraform(struct!.outboundUntrustCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_filtering: {
      value: cdktf.stringToHclTerraform(struct!.urlFiltering),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    vulnerability: {
      value: cdktf.stringToHclTerraform(struct!.vulnerability),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RulestackProfileConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): RulestackProfileConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antiSpyware !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiSpyware = this._antiSpyware;
    }
    if (this._antiVirus !== undefined) {
      hasAnyValues = true;
      internalValueResult.antiVirus = this._antiVirus;
    }
    if (this._fileBlocking !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileBlocking = this._fileBlocking;
    }
    if (this._outboundTrustCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundTrustCertificate = this._outboundTrustCertificate;
    }
    if (this._outboundUntrustCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.outboundUntrustCertificate = this._outboundUntrustCertificate;
    }
    if (this._urlFiltering !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlFiltering = this._urlFiltering;
    }
    if (this._vulnerability !== undefined) {
      hasAnyValues = true;
      internalValueResult.vulnerability = this._vulnerability;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RulestackProfileConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antiSpyware = undefined;
      this._antiVirus = undefined;
      this._fileBlocking = undefined;
      this._outboundTrustCertificate = undefined;
      this._outboundUntrustCertificate = undefined;
      this._urlFiltering = undefined;
      this._vulnerability = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antiSpyware = value.antiSpyware;
      this._antiVirus = value.antiVirus;
      this._fileBlocking = value.fileBlocking;
      this._outboundTrustCertificate = value.outboundTrustCertificate;
      this._outboundUntrustCertificate = value.outboundUntrustCertificate;
      this._urlFiltering = value.urlFiltering;
      this._vulnerability = value.vulnerability;
    }
  }

  // anti_spyware - computed: false, optional: true, required: false
  private _antiSpyware?: string; 
  public get antiSpyware() {
    return this.getStringAttribute('anti_spyware');
  }
  public set antiSpyware(value: string) {
    this._antiSpyware = value;
  }
  public resetAntiSpyware() {
    this._antiSpyware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiSpywareInput() {
    return this._antiSpyware;
  }

  // anti_virus - computed: false, optional: true, required: false
  private _antiVirus?: string; 
  public get antiVirus() {
    return this.getStringAttribute('anti_virus');
  }
  public set antiVirus(value: string) {
    this._antiVirus = value;
  }
  public resetAntiVirus() {
    this._antiVirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antiVirusInput() {
    return this._antiVirus;
  }

  // file_blocking - computed: false, optional: true, required: false
  private _fileBlocking?: string; 
  public get fileBlocking() {
    return this.getStringAttribute('file_blocking');
  }
  public set fileBlocking(value: string) {
    this._fileBlocking = value;
  }
  public resetFileBlocking() {
    this._fileBlocking = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileBlockingInput() {
    return this._fileBlocking;
  }

  // outbound_trust_certificate - computed: false, optional: true, required: false
  private _outboundTrustCertificate?: string; 
  public get outboundTrustCertificate() {
    return this.getStringAttribute('outbound_trust_certificate');
  }
  public set outboundTrustCertificate(value: string) {
    this._outboundTrustCertificate = value;
  }
  public resetOutboundTrustCertificate() {
    this._outboundTrustCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundTrustCertificateInput() {
    return this._outboundTrustCertificate;
  }

  // outbound_untrust_certificate - computed: false, optional: true, required: false
  private _outboundUntrustCertificate?: string; 
  public get outboundUntrustCertificate() {
    return this.getStringAttribute('outbound_untrust_certificate');
  }
  public set outboundUntrustCertificate(value: string) {
    this._outboundUntrustCertificate = value;
  }
  public resetOutboundUntrustCertificate() {
    this._outboundUntrustCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outboundUntrustCertificateInput() {
    return this._outboundUntrustCertificate;
  }

  // url_filtering - computed: false, optional: true, required: false
  private _urlFiltering?: string; 
  public get urlFiltering() {
    return this.getStringAttribute('url_filtering');
  }
  public set urlFiltering(value: string) {
    this._urlFiltering = value;
  }
  public resetUrlFiltering() {
    this._urlFiltering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlFilteringInput() {
    return this._urlFiltering;
  }

  // vulnerability - computed: false, optional: true, required: false
  private _vulnerability?: string; 
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
  public set vulnerability(value: string) {
    this._vulnerability = value;
  }
  public resetVulnerability() {
    this._vulnerability = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnerabilityInput() {
    return this._vulnerability;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack cloudngfwaws_rulestack}
*/
export class Rulestack extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudngfwaws_rulestack";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Rulestack resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Rulestack to import
  * @param importFromId The id of the existing Rulestack that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Rulestack to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudngfwaws_rulestack", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/cloudngfwaws/3.0.4/docs/resources/rulestack cloudngfwaws_rulestack} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RulestackConfig
  */
  public constructor(scope: Construct, id: string, config: RulestackConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudngfwaws_rulestack',
      terraformGeneratorMetadata: {
        providerName: 'cloudngfwaws',
        providerVersion: '3.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountGroup = config.accountGroup;
    this._accountId = config.accountId;
    this._description = config.description;
    this._id = config.id;
    this._lookupXForwardedFor = config.lookupXForwardedFor;
    this._minimumAppIdVersion = config.minimumAppIdVersion;
    this._name = config.name;
    this._scope = config.scope;
    this._tags = config.tags;
    this._profileConfig.internalValue = config.profileConfig;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_group - computed: false, optional: true, required: false
  private _accountGroup?: string; 
  public get accountGroup() {
    return this.getStringAttribute('account_group');
  }
  public set accountGroup(value: string) {
    this._accountGroup = value;
  }
  public resetAccountGroup() {
    this._accountGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountGroupInput() {
    return this._accountGroup;
  }

  // account_id - computed: false, optional: true, required: false
  private _accountId?: string; 
  public get accountId() {
    return this.getStringAttribute('account_id');
  }
  public set accountId(value: string) {
    this._accountId = value;
  }
  public resetAccountId() {
    this._accountId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountIdInput() {
    return this._accountId;
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

  // lookup_x_forwarded_for - computed: true, optional: true, required: false
  private _lookupXForwardedFor?: string; 
  public get lookupXForwardedFor() {
    return this.getStringAttribute('lookup_x_forwarded_for');
  }
  public set lookupXForwardedFor(value: string) {
    this._lookupXForwardedFor = value;
  }
  public resetLookupXForwardedFor() {
    this._lookupXForwardedFor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lookupXForwardedForInput() {
    return this._lookupXForwardedFor;
  }

  // minimum_app_id_version - computed: true, optional: true, required: false
  private _minimumAppIdVersion?: string; 
  public get minimumAppIdVersion() {
    return this.getStringAttribute('minimum_app_id_version');
  }
  public set minimumAppIdVersion(value: string) {
    this._minimumAppIdVersion = value;
  }
  public resetMinimumAppIdVersion() {
    this._minimumAppIdVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumAppIdVersionInput() {
    return this._minimumAppIdVersion;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // profile_config - computed: false, optional: false, required: true
  private _profileConfig = new RulestackProfileConfigOutputReference(this, "profile_config");
  public get profileConfig() {
    return this._profileConfig;
  }
  public putProfileConfig(value: RulestackProfileConfig) {
    this._profileConfig.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileConfigInput() {
    return this._profileConfig.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_group: cdktf.stringToTerraform(this._accountGroup),
      account_id: cdktf.stringToTerraform(this._accountId),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      lookup_x_forwarded_for: cdktf.stringToTerraform(this._lookupXForwardedFor),
      minimum_app_id_version: cdktf.stringToTerraform(this._minimumAppIdVersion),
      name: cdktf.stringToTerraform(this._name),
      scope: cdktf.stringToTerraform(this._scope),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      profile_config: rulestackProfileConfigToTerraform(this._profileConfig.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_group: {
        value: cdktf.stringToHclTerraform(this._accountGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_id: {
        value: cdktf.stringToHclTerraform(this._accountId),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lookup_x_forwarded_for: {
        value: cdktf.stringToHclTerraform(this._lookupXForwardedFor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      minimum_app_id_version: {
        value: cdktf.stringToHclTerraform(this._minimumAppIdVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
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
      profile_config: {
        value: rulestackProfileConfigToHclTerraform(this._profileConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "RulestackProfileConfigList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
