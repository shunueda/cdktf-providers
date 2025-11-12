// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityWafThresholdBasedDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#attack_action SecurityWafThresholdBasedDetection#attack_action}
  */
  readonly attackAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#attack_detection_status SecurityWafThresholdBasedDetection#attack_detection_status}
  */
  readonly attackDetectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#attack_modules SecurityWafThresholdBasedDetection#attack_modules}
  */
  readonly attackModules?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#attack_occurrence_limit SecurityWafThresholdBasedDetection#attack_occurrence_limit}
  */
  readonly attackOccurrenceLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#attack_occurrence_within SecurityWafThresholdBasedDetection#attack_occurrence_within}
  */
  readonly attackOccurrenceWithin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#attack_severity SecurityWafThresholdBasedDetection#attack_severity}
  */
  readonly attackSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#comments SecurityWafThresholdBasedDetection#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#content_action SecurityWafThresholdBasedDetection#content_action}
  */
  readonly contentAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#content_occurrence_limit SecurityWafThresholdBasedDetection#content_occurrence_limit}
  */
  readonly contentOccurrenceLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#content_occurrence_within SecurityWafThresholdBasedDetection#content_occurrence_within}
  */
  readonly contentOccurrenceWithin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#content_scraping_status SecurityWafThresholdBasedDetection#content_scraping_status}
  */
  readonly contentScrapingStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#content_severity SecurityWafThresholdBasedDetection#content_severity}
  */
  readonly contentSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#content_type SecurityWafThresholdBasedDetection#content_type}
  */
  readonly contentType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#crawler_action SecurityWafThresholdBasedDetection#crawler_action}
  */
  readonly crawlerAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#crawler_occurrence_limit SecurityWafThresholdBasedDetection#crawler_occurrence_limit}
  */
  readonly crawlerOccurrenceLimit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#crawler_occurrence_within SecurityWafThresholdBasedDetection#crawler_occurrence_within}
  */
  readonly crawlerOccurrenceWithin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#crawler_severity SecurityWafThresholdBasedDetection#crawler_severity}
  */
  readonly crawlerSeverity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#crawler_status SecurityWafThresholdBasedDetection#crawler_status}
  */
  readonly crawlerStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#id SecurityWafThresholdBasedDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#mkey SecurityWafThresholdBasedDetection#mkey}
  */
  readonly mkey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#response_code SecurityWafThresholdBasedDetection#response_code}
  */
  readonly responseCode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#vdom SecurityWafThresholdBasedDetection#vdom}
  */
  readonly vdom?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection fortiadc_security_waf_threshold_based_detection}
*/
export class SecurityWafThresholdBasedDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_security_waf_threshold_based_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityWafThresholdBasedDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityWafThresholdBasedDetection to import
  * @param importFromId The id of the existing SecurityWafThresholdBasedDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityWafThresholdBasedDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_security_waf_threshold_based_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/security_waf_threshold_based_detection fortiadc_security_waf_threshold_based_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityWafThresholdBasedDetectionConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityWafThresholdBasedDetectionConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_security_waf_threshold_based_detection',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attackAction = config.attackAction;
    this._attackDetectionStatus = config.attackDetectionStatus;
    this._attackModules = config.attackModules;
    this._attackOccurrenceLimit = config.attackOccurrenceLimit;
    this._attackOccurrenceWithin = config.attackOccurrenceWithin;
    this._attackSeverity = config.attackSeverity;
    this._comments = config.comments;
    this._contentAction = config.contentAction;
    this._contentOccurrenceLimit = config.contentOccurrenceLimit;
    this._contentOccurrenceWithin = config.contentOccurrenceWithin;
    this._contentScrapingStatus = config.contentScrapingStatus;
    this._contentSeverity = config.contentSeverity;
    this._contentType = config.contentType;
    this._crawlerAction = config.crawlerAction;
    this._crawlerOccurrenceLimit = config.crawlerOccurrenceLimit;
    this._crawlerOccurrenceWithin = config.crawlerOccurrenceWithin;
    this._crawlerSeverity = config.crawlerSeverity;
    this._crawlerStatus = config.crawlerStatus;
    this._id = config.id;
    this._mkey = config.mkey;
    this._responseCode = config.responseCode;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_action - computed: true, optional: true, required: false
  private _attackAction?: string; 
  public get attackAction() {
    return this.getStringAttribute('attack_action');
  }
  public set attackAction(value: string) {
    this._attackAction = value;
  }
  public resetAttackAction() {
    this._attackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackActionInput() {
    return this._attackAction;
  }

  // attack_detection_status - computed: true, optional: true, required: false
  private _attackDetectionStatus?: string; 
  public get attackDetectionStatus() {
    return this.getStringAttribute('attack_detection_status');
  }
  public set attackDetectionStatus(value: string) {
    this._attackDetectionStatus = value;
  }
  public resetAttackDetectionStatus() {
    this._attackDetectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackDetectionStatusInput() {
    return this._attackDetectionStatus;
  }

  // attack_modules - computed: true, optional: true, required: false
  private _attackModules?: string; 
  public get attackModules() {
    return this.getStringAttribute('attack_modules');
  }
  public set attackModules(value: string) {
    this._attackModules = value;
  }
  public resetAttackModules() {
    this._attackModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackModulesInput() {
    return this._attackModules;
  }

  // attack_occurrence_limit - computed: true, optional: true, required: false
  private _attackOccurrenceLimit?: string; 
  public get attackOccurrenceLimit() {
    return this.getStringAttribute('attack_occurrence_limit');
  }
  public set attackOccurrenceLimit(value: string) {
    this._attackOccurrenceLimit = value;
  }
  public resetAttackOccurrenceLimit() {
    this._attackOccurrenceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackOccurrenceLimitInput() {
    return this._attackOccurrenceLimit;
  }

  // attack_occurrence_within - computed: true, optional: true, required: false
  private _attackOccurrenceWithin?: string; 
  public get attackOccurrenceWithin() {
    return this.getStringAttribute('attack_occurrence_within');
  }
  public set attackOccurrenceWithin(value: string) {
    this._attackOccurrenceWithin = value;
  }
  public resetAttackOccurrenceWithin() {
    this._attackOccurrenceWithin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackOccurrenceWithinInput() {
    return this._attackOccurrenceWithin;
  }

  // attack_severity - computed: true, optional: true, required: false
  private _attackSeverity?: string; 
  public get attackSeverity() {
    return this.getStringAttribute('attack_severity');
  }
  public set attackSeverity(value: string) {
    this._attackSeverity = value;
  }
  public resetAttackSeverity() {
    this._attackSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackSeverityInput() {
    return this._attackSeverity;
  }

  // comments - computed: true, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // content_action - computed: true, optional: true, required: false
  private _contentAction?: string; 
  public get contentAction() {
    return this.getStringAttribute('content_action');
  }
  public set contentAction(value: string) {
    this._contentAction = value;
  }
  public resetContentAction() {
    this._contentAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentActionInput() {
    return this._contentAction;
  }

  // content_occurrence_limit - computed: true, optional: true, required: false
  private _contentOccurrenceLimit?: string; 
  public get contentOccurrenceLimit() {
    return this.getStringAttribute('content_occurrence_limit');
  }
  public set contentOccurrenceLimit(value: string) {
    this._contentOccurrenceLimit = value;
  }
  public resetContentOccurrenceLimit() {
    this._contentOccurrenceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOccurrenceLimitInput() {
    return this._contentOccurrenceLimit;
  }

  // content_occurrence_within - computed: true, optional: true, required: false
  private _contentOccurrenceWithin?: string; 
  public get contentOccurrenceWithin() {
    return this.getStringAttribute('content_occurrence_within');
  }
  public set contentOccurrenceWithin(value: string) {
    this._contentOccurrenceWithin = value;
  }
  public resetContentOccurrenceWithin() {
    this._contentOccurrenceWithin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentOccurrenceWithinInput() {
    return this._contentOccurrenceWithin;
  }

  // content_scraping_status - computed: true, optional: true, required: false
  private _contentScrapingStatus?: string; 
  public get contentScrapingStatus() {
    return this.getStringAttribute('content_scraping_status');
  }
  public set contentScrapingStatus(value: string) {
    this._contentScrapingStatus = value;
  }
  public resetContentScrapingStatus() {
    this._contentScrapingStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentScrapingStatusInput() {
    return this._contentScrapingStatus;
  }

  // content_severity - computed: true, optional: true, required: false
  private _contentSeverity?: string; 
  public get contentSeverity() {
    return this.getStringAttribute('content_severity');
  }
  public set contentSeverity(value: string) {
    this._contentSeverity = value;
  }
  public resetContentSeverity() {
    this._contentSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSeverityInput() {
    return this._contentSeverity;
  }

  // content_type - computed: true, optional: true, required: false
  private _contentType?: string; 
  public get contentType() {
    return this.getStringAttribute('content_type');
  }
  public set contentType(value: string) {
    this._contentType = value;
  }
  public resetContentType() {
    this._contentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentTypeInput() {
    return this._contentType;
  }

  // crawler_action - computed: true, optional: true, required: false
  private _crawlerAction?: string; 
  public get crawlerAction() {
    return this.getStringAttribute('crawler_action');
  }
  public set crawlerAction(value: string) {
    this._crawlerAction = value;
  }
  public resetCrawlerAction() {
    this._crawlerAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerActionInput() {
    return this._crawlerAction;
  }

  // crawler_occurrence_limit - computed: true, optional: true, required: false
  private _crawlerOccurrenceLimit?: string; 
  public get crawlerOccurrenceLimit() {
    return this.getStringAttribute('crawler_occurrence_limit');
  }
  public set crawlerOccurrenceLimit(value: string) {
    this._crawlerOccurrenceLimit = value;
  }
  public resetCrawlerOccurrenceLimit() {
    this._crawlerOccurrenceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerOccurrenceLimitInput() {
    return this._crawlerOccurrenceLimit;
  }

  // crawler_occurrence_within - computed: true, optional: true, required: false
  private _crawlerOccurrenceWithin?: string; 
  public get crawlerOccurrenceWithin() {
    return this.getStringAttribute('crawler_occurrence_within');
  }
  public set crawlerOccurrenceWithin(value: string) {
    this._crawlerOccurrenceWithin = value;
  }
  public resetCrawlerOccurrenceWithin() {
    this._crawlerOccurrenceWithin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerOccurrenceWithinInput() {
    return this._crawlerOccurrenceWithin;
  }

  // crawler_severity - computed: true, optional: true, required: false
  private _crawlerSeverity?: string; 
  public get crawlerSeverity() {
    return this.getStringAttribute('crawler_severity');
  }
  public set crawlerSeverity(value: string) {
    this._crawlerSeverity = value;
  }
  public resetCrawlerSeverity() {
    this._crawlerSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerSeverityInput() {
    return this._crawlerSeverity;
  }

  // crawler_status - computed: true, optional: true, required: false
  private _crawlerStatus?: string; 
  public get crawlerStatus() {
    return this.getStringAttribute('crawler_status');
  }
  public set crawlerStatus(value: string) {
    this._crawlerStatus = value;
  }
  public resetCrawlerStatus() {
    this._crawlerStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crawlerStatusInput() {
    return this._crawlerStatus;
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

  // mkey - computed: false, optional: false, required: true
  private _mkey?: string; 
  public get mkey() {
    return this.getStringAttribute('mkey');
  }
  public set mkey(value: string) {
    this._mkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mkeyInput() {
    return this._mkey;
  }

  // response_code - computed: true, optional: true, required: false
  private _responseCode?: string; 
  public get responseCode() {
    return this.getStringAttribute('response_code');
  }
  public set responseCode(value: string) {
    this._responseCode = value;
  }
  public resetResponseCode() {
    this._responseCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get responseCodeInput() {
    return this._responseCode;
  }

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_action: cdktf.stringToTerraform(this._attackAction),
      attack_detection_status: cdktf.stringToTerraform(this._attackDetectionStatus),
      attack_modules: cdktf.stringToTerraform(this._attackModules),
      attack_occurrence_limit: cdktf.stringToTerraform(this._attackOccurrenceLimit),
      attack_occurrence_within: cdktf.stringToTerraform(this._attackOccurrenceWithin),
      attack_severity: cdktf.stringToTerraform(this._attackSeverity),
      comments: cdktf.stringToTerraform(this._comments),
      content_action: cdktf.stringToTerraform(this._contentAction),
      content_occurrence_limit: cdktf.stringToTerraform(this._contentOccurrenceLimit),
      content_occurrence_within: cdktf.stringToTerraform(this._contentOccurrenceWithin),
      content_scraping_status: cdktf.stringToTerraform(this._contentScrapingStatus),
      content_severity: cdktf.stringToTerraform(this._contentSeverity),
      content_type: cdktf.stringToTerraform(this._contentType),
      crawler_action: cdktf.stringToTerraform(this._crawlerAction),
      crawler_occurrence_limit: cdktf.stringToTerraform(this._crawlerOccurrenceLimit),
      crawler_occurrence_within: cdktf.stringToTerraform(this._crawlerOccurrenceWithin),
      crawler_severity: cdktf.stringToTerraform(this._crawlerSeverity),
      crawler_status: cdktf.stringToTerraform(this._crawlerStatus),
      id: cdktf.stringToTerraform(this._id),
      mkey: cdktf.stringToTerraform(this._mkey),
      response_code: cdktf.stringToTerraform(this._responseCode),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_action: {
        value: cdktf.stringToHclTerraform(this._attackAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_detection_status: {
        value: cdktf.stringToHclTerraform(this._attackDetectionStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_modules: {
        value: cdktf.stringToHclTerraform(this._attackModules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_occurrence_limit: {
        value: cdktf.stringToHclTerraform(this._attackOccurrenceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_occurrence_within: {
        value: cdktf.stringToHclTerraform(this._attackOccurrenceWithin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_severity: {
        value: cdktf.stringToHclTerraform(this._attackSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_action: {
        value: cdktf.stringToHclTerraform(this._contentAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_occurrence_limit: {
        value: cdktf.stringToHclTerraform(this._contentOccurrenceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_occurrence_within: {
        value: cdktf.stringToHclTerraform(this._contentOccurrenceWithin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_scraping_status: {
        value: cdktf.stringToHclTerraform(this._contentScrapingStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_severity: {
        value: cdktf.stringToHclTerraform(this._contentSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_type: {
        value: cdktf.stringToHclTerraform(this._contentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_action: {
        value: cdktf.stringToHclTerraform(this._crawlerAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_occurrence_limit: {
        value: cdktf.stringToHclTerraform(this._crawlerOccurrenceLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_occurrence_within: {
        value: cdktf.stringToHclTerraform(this._crawlerOccurrenceWithin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_severity: {
        value: cdktf.stringToHclTerraform(this._crawlerSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      crawler_status: {
        value: cdktf.stringToHclTerraform(this._crawlerStatus),
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
      mkey: {
        value: cdktf.stringToHclTerraform(this._mkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      response_code: {
        value: cdktf.stringToHclTerraform(this._responseCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
