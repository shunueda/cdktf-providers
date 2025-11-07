// https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GtmDomainConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#cname_coalescing_enabled GtmDomain#cname_coalescing_enabled}
  */
  readonly cnameCoalescingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#comment GtmDomain#comment}
  */
  readonly comment?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#contract GtmDomain#contract}
  */
  readonly contract?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#default_error_penalty GtmDomain#default_error_penalty}
  */
  readonly defaultErrorPenalty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#default_ssl_client_certificate GtmDomain#default_ssl_client_certificate}
  */
  readonly defaultSslClientCertificate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#default_ssl_client_private_key GtmDomain#default_ssl_client_private_key}
  */
  readonly defaultSslClientPrivateKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#default_timeout_penalty GtmDomain#default_timeout_penalty}
  */
  readonly defaultTimeoutPenalty?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#email_notification_list GtmDomain#email_notification_list}
  */
  readonly emailNotificationList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#end_user_mapping_enabled GtmDomain#end_user_mapping_enabled}
  */
  readonly endUserMappingEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#group GtmDomain#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#id GtmDomain#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#load_feedback GtmDomain#load_feedback}
  */
  readonly loadFeedback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#load_imbalance_percentage GtmDomain#load_imbalance_percentage}
  */
  readonly loadImbalancePercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#name GtmDomain#name}
  */
  readonly name: string;
  /**
  * If set (true) we will sign the domain's resource records so that they can be validated by a validating resolver.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#sign_and_serve GtmDomain#sign_and_serve}
  */
  readonly signAndServe?: boolean | cdktf.IResolvable;
  /**
  * The signing algorithm to use for signAndServe. One of the following values: RSA_SHA1, RSA_SHA256, RSA_SHA512, ECDSA_P256_SHA256, ECDSA_P384_SHA384, ED25519, ED448.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#sign_and_serve_algorithm GtmDomain#sign_and_serve_algorithm}
  */
  readonly signAndServeAlgorithm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#type GtmDomain#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#wait_on_complete GtmDomain#wait_on_complete}
  */
  readonly waitOnComplete?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain akamai_gtm_domain}
*/
export class GtmDomain extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akamai_gtm_domain";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GtmDomain resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GtmDomain to import
  * @param importFromId The id of the existing GtmDomain that should be imported. Refer to the {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GtmDomain to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akamai_gtm_domain", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akamai/akamai/9.1.0/docs/resources/gtm_domain akamai_gtm_domain} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GtmDomainConfig
  */
  public constructor(scope: Construct, id: string, config: GtmDomainConfig) {
    super(scope, id, {
      terraformResourceType: 'akamai_gtm_domain',
      terraformGeneratorMetadata: {
        providerName: 'akamai',
        providerVersion: '9.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cnameCoalescingEnabled = config.cnameCoalescingEnabled;
    this._comment = config.comment;
    this._contract = config.contract;
    this._defaultErrorPenalty = config.defaultErrorPenalty;
    this._defaultSslClientCertificate = config.defaultSslClientCertificate;
    this._defaultSslClientPrivateKey = config.defaultSslClientPrivateKey;
    this._defaultTimeoutPenalty = config.defaultTimeoutPenalty;
    this._emailNotificationList = config.emailNotificationList;
    this._endUserMappingEnabled = config.endUserMappingEnabled;
    this._group = config.group;
    this._id = config.id;
    this._loadFeedback = config.loadFeedback;
    this._loadImbalancePercentage = config.loadImbalancePercentage;
    this._name = config.name;
    this._signAndServe = config.signAndServe;
    this._signAndServeAlgorithm = config.signAndServeAlgorithm;
    this._type = config.type;
    this._waitOnComplete = config.waitOnComplete;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cname_coalescing_enabled - computed: false, optional: true, required: false
  private _cnameCoalescingEnabled?: boolean | cdktf.IResolvable; 
  public get cnameCoalescingEnabled() {
    return this.getBooleanAttribute('cname_coalescing_enabled');
  }
  public set cnameCoalescingEnabled(value: boolean | cdktf.IResolvable) {
    this._cnameCoalescingEnabled = value;
  }
  public resetCnameCoalescingEnabled() {
    this._cnameCoalescingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cnameCoalescingEnabledInput() {
    return this._cnameCoalescingEnabled;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // contract - computed: false, optional: true, required: false
  private _contract?: string; 
  public get contract() {
    return this.getStringAttribute('contract');
  }
  public set contract(value: string) {
    this._contract = value;
  }
  public resetContract() {
    this._contract = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractInput() {
    return this._contract;
  }

  // default_error_penalty - computed: false, optional: true, required: false
  private _defaultErrorPenalty?: number; 
  public get defaultErrorPenalty() {
    return this.getNumberAttribute('default_error_penalty');
  }
  public set defaultErrorPenalty(value: number) {
    this._defaultErrorPenalty = value;
  }
  public resetDefaultErrorPenalty() {
    this._defaultErrorPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultErrorPenaltyInput() {
    return this._defaultErrorPenalty;
  }

  // default_health_max - computed: true, optional: false, required: false
  public get defaultHealthMax() {
    return this.getNumberAttribute('default_health_max');
  }

  // default_health_multiplier - computed: true, optional: false, required: false
  public get defaultHealthMultiplier() {
    return this.getNumberAttribute('default_health_multiplier');
  }

  // default_health_threshold - computed: true, optional: false, required: false
  public get defaultHealthThreshold() {
    return this.getNumberAttribute('default_health_threshold');
  }

  // default_max_unreachable_penalty - computed: true, optional: false, required: false
  public get defaultMaxUnreachablePenalty() {
    return this.getNumberAttribute('default_max_unreachable_penalty');
  }

  // default_ssl_client_certificate - computed: false, optional: true, required: false
  private _defaultSslClientCertificate?: string; 
  public get defaultSslClientCertificate() {
    return this.getStringAttribute('default_ssl_client_certificate');
  }
  public set defaultSslClientCertificate(value: string) {
    this._defaultSslClientCertificate = value;
  }
  public resetDefaultSslClientCertificate() {
    this._defaultSslClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSslClientCertificateInput() {
    return this._defaultSslClientCertificate;
  }

  // default_ssl_client_private_key - computed: false, optional: true, required: false
  private _defaultSslClientPrivateKey?: string; 
  public get defaultSslClientPrivateKey() {
    return this.getStringAttribute('default_ssl_client_private_key');
  }
  public set defaultSslClientPrivateKey(value: string) {
    this._defaultSslClientPrivateKey = value;
  }
  public resetDefaultSslClientPrivateKey() {
    this._defaultSslClientPrivateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSslClientPrivateKeyInput() {
    return this._defaultSslClientPrivateKey;
  }

  // default_timeout_penalty - computed: false, optional: true, required: false
  private _defaultTimeoutPenalty?: number; 
  public get defaultTimeoutPenalty() {
    return this.getNumberAttribute('default_timeout_penalty');
  }
  public set defaultTimeoutPenalty(value: number) {
    this._defaultTimeoutPenalty = value;
  }
  public resetDefaultTimeoutPenalty() {
    this._defaultTimeoutPenalty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultTimeoutPenaltyInput() {
    return this._defaultTimeoutPenalty;
  }

  // default_unreachable_threshold - computed: true, optional: false, required: false
  public get defaultUnreachableThreshold() {
    return this.getNumberAttribute('default_unreachable_threshold');
  }

  // email_notification_list - computed: false, optional: true, required: false
  private _emailNotificationList?: string[]; 
  public get emailNotificationList() {
    return cdktf.Fn.tolist(this.getListAttribute('email_notification_list'));
  }
  public set emailNotificationList(value: string[]) {
    this._emailNotificationList = value;
  }
  public resetEmailNotificationList() {
    this._emailNotificationList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailNotificationListInput() {
    return this._emailNotificationList;
  }

  // end_user_mapping_enabled - computed: false, optional: true, required: false
  private _endUserMappingEnabled?: boolean | cdktf.IResolvable; 
  public get endUserMappingEnabled() {
    return this.getBooleanAttribute('end_user_mapping_enabled');
  }
  public set endUserMappingEnabled(value: boolean | cdktf.IResolvable) {
    this._endUserMappingEnabled = value;
  }
  public resetEndUserMappingEnabled() {
    this._endUserMappingEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endUserMappingEnabledInput() {
    return this._endUserMappingEnabled;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // load_feedback - computed: false, optional: true, required: false
  private _loadFeedback?: boolean | cdktf.IResolvable; 
  public get loadFeedback() {
    return this.getBooleanAttribute('load_feedback');
  }
  public set loadFeedback(value: boolean | cdktf.IResolvable) {
    this._loadFeedback = value;
  }
  public resetLoadFeedback() {
    this._loadFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadFeedbackInput() {
    return this._loadFeedback;
  }

  // load_imbalance_percentage - computed: false, optional: true, required: false
  private _loadImbalancePercentage?: number; 
  public get loadImbalancePercentage() {
    return this.getNumberAttribute('load_imbalance_percentage');
  }
  public set loadImbalancePercentage(value: number) {
    this._loadImbalancePercentage = value;
  }
  public resetLoadImbalancePercentage() {
    this._loadImbalancePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadImbalancePercentageInput() {
    return this._loadImbalancePercentage;
  }

  // map_update_interval - computed: true, optional: false, required: false
  public get mapUpdateInterval() {
    return this.getNumberAttribute('map_update_interval');
  }

  // max_properties - computed: true, optional: false, required: false
  public get maxProperties() {
    return this.getNumberAttribute('max_properties');
  }

  // max_resources - computed: true, optional: false, required: false
  public get maxResources() {
    return this.getNumberAttribute('max_resources');
  }

  // max_test_timeout - computed: true, optional: false, required: false
  public get maxTestTimeout() {
    return this.getNumberAttribute('max_test_timeout');
  }

  // max_ttl - computed: true, optional: false, required: false
  public get maxTtl() {
    return this.getNumberAttribute('max_ttl');
  }

  // min_pingable_region_fraction - computed: true, optional: false, required: false
  public get minPingableRegionFraction() {
    return this.getNumberAttribute('min_pingable_region_fraction');
  }

  // min_test_interval - computed: true, optional: false, required: false
  public get minTestInterval() {
    return this.getNumberAttribute('min_test_interval');
  }

  // min_ttl - computed: true, optional: false, required: false
  public get minTtl() {
    return this.getNumberAttribute('min_ttl');
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

  // ping_interval - computed: true, optional: false, required: false
  public get pingInterval() {
    return this.getNumberAttribute('ping_interval');
  }

  // ping_packet_size - computed: true, optional: false, required: false
  public get pingPacketSize() {
    return this.getNumberAttribute('ping_packet_size');
  }

  // round_robin_prefix - computed: true, optional: false, required: false
  public get roundRobinPrefix() {
    return this.getStringAttribute('round_robin_prefix');
  }

  // servermonitor_liveness_count - computed: true, optional: false, required: false
  public get servermonitorLivenessCount() {
    return this.getNumberAttribute('servermonitor_liveness_count');
  }

  // servermonitor_load_count - computed: true, optional: false, required: false
  public get servermonitorLoadCount() {
    return this.getNumberAttribute('servermonitor_load_count');
  }

  // servermonitor_pool - computed: true, optional: false, required: false
  public get servermonitorPool() {
    return this.getStringAttribute('servermonitor_pool');
  }

  // sign_and_serve - computed: false, optional: true, required: false
  private _signAndServe?: boolean | cdktf.IResolvable; 
  public get signAndServe() {
    return this.getBooleanAttribute('sign_and_serve');
  }
  public set signAndServe(value: boolean | cdktf.IResolvable) {
    this._signAndServe = value;
  }
  public resetSignAndServe() {
    this._signAndServe = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAndServeInput() {
    return this._signAndServe;
  }

  // sign_and_serve_algorithm - computed: false, optional: true, required: false
  private _signAndServeAlgorithm?: string; 
  public get signAndServeAlgorithm() {
    return this.getStringAttribute('sign_and_serve_algorithm');
  }
  public set signAndServeAlgorithm(value: string) {
    this._signAndServeAlgorithm = value;
  }
  public resetSignAndServeAlgorithm() {
    this._signAndServeAlgorithm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signAndServeAlgorithmInput() {
    return this._signAndServeAlgorithm;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // wait_on_complete - computed: false, optional: true, required: false
  private _waitOnComplete?: boolean | cdktf.IResolvable; 
  public get waitOnComplete() {
    return this.getBooleanAttribute('wait_on_complete');
  }
  public set waitOnComplete(value: boolean | cdktf.IResolvable) {
    this._waitOnComplete = value;
  }
  public resetWaitOnComplete() {
    this._waitOnComplete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get waitOnCompleteInput() {
    return this._waitOnComplete;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cname_coalescing_enabled: cdktf.booleanToTerraform(this._cnameCoalescingEnabled),
      comment: cdktf.stringToTerraform(this._comment),
      contract: cdktf.stringToTerraform(this._contract),
      default_error_penalty: cdktf.numberToTerraform(this._defaultErrorPenalty),
      default_ssl_client_certificate: cdktf.stringToTerraform(this._defaultSslClientCertificate),
      default_ssl_client_private_key: cdktf.stringToTerraform(this._defaultSslClientPrivateKey),
      default_timeout_penalty: cdktf.numberToTerraform(this._defaultTimeoutPenalty),
      email_notification_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._emailNotificationList),
      end_user_mapping_enabled: cdktf.booleanToTerraform(this._endUserMappingEnabled),
      group: cdktf.stringToTerraform(this._group),
      id: cdktf.stringToTerraform(this._id),
      load_feedback: cdktf.booleanToTerraform(this._loadFeedback),
      load_imbalance_percentage: cdktf.numberToTerraform(this._loadImbalancePercentage),
      name: cdktf.stringToTerraform(this._name),
      sign_and_serve: cdktf.booleanToTerraform(this._signAndServe),
      sign_and_serve_algorithm: cdktf.stringToTerraform(this._signAndServeAlgorithm),
      type: cdktf.stringToTerraform(this._type),
      wait_on_complete: cdktf.booleanToTerraform(this._waitOnComplete),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cname_coalescing_enabled: {
        value: cdktf.booleanToHclTerraform(this._cnameCoalescingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract: {
        value: cdktf.stringToHclTerraform(this._contract),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_error_penalty: {
        value: cdktf.numberToHclTerraform(this._defaultErrorPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_ssl_client_certificate: {
        value: cdktf.stringToHclTerraform(this._defaultSslClientCertificate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ssl_client_private_key: {
        value: cdktf.stringToHclTerraform(this._defaultSslClientPrivateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_timeout_penalty: {
        value: cdktf.numberToHclTerraform(this._defaultTimeoutPenalty),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      email_notification_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._emailNotificationList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      end_user_mapping_enabled: {
        value: cdktf.booleanToHclTerraform(this._endUserMappingEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
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
      load_feedback: {
        value: cdktf.booleanToHclTerraform(this._loadFeedback),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      load_imbalance_percentage: {
        value: cdktf.numberToHclTerraform(this._loadImbalancePercentage),
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
      sign_and_serve: {
        value: cdktf.booleanToHclTerraform(this._signAndServe),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sign_and_serve_algorithm: {
        value: cdktf.stringToHclTerraform(this._signAndServeAlgorithm),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wait_on_complete: {
        value: cdktf.booleanToHclTerraform(this._waitOnComplete),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
