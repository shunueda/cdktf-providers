// https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SiteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Agent IP anonymization mode - "" (empty string) or 'EU'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#agent_anon_mode Site#agent_anon_mode}
  */
  readonly agentAnonMode?: string;
  /**
  * Agent action level - 'block', 'log' or 'off'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#agent_level Site#agent_level}
  */
  readonly agentLevel?: string;
  /**
  * Duration to block an IP in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#block_duration_seconds Site#block_duration_seconds}
  */
  readonly blockDurationSeconds?: number;
  /**
  * HTTP response code to send when traffic is being blocked
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#block_http_code Site#block_http_code}
  */
  readonly blockHttpCode?: number;
  /**
  * URL to redirect to when blocking with a '301' or '302' HTTP status code
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#block_redirect_url Site#block_redirect_url}
  */
  readonly blockRedirectUrl?: string;
  /**
  * Headers used for assigning client IPs to requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#client_ip_rules Site#client_ip_rules}
  */
  readonly clientIpRules?: string[];
  /**
  * Display name of the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#display_name Site#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#id Site#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Immediately block requests that contain attack signals
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#immediate_block Site#immediate_block}
  */
  readonly immediateBlock?: boolean | cdktf.IResolvable;
  /**
  * Identifying name of the site
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#short_name Site#short_name}
  */
  readonly shortName: string;
  /**
  * attack_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#attack_threshold Site#attack_threshold}
  */
  readonly attackThreshold?: SiteAttackThreshold[] | cdktf.IResolvable;
}
export interface SiteAttackThreshold {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#interval Site#interval}
  */
  readonly interval: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#threshold Site#threshold}
  */
  readonly threshold: number;
}

export function siteAttackThresholdToTerraform(struct?: SiteAttackThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function siteAttackThresholdToHclTerraform(struct?: SiteAttackThreshold | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SiteAttackThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): SiteAttackThreshold | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SiteAttackThreshold | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interval = undefined;
      this._threshold = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interval = value.interval;
      this._threshold = value.threshold;
    }
  }

  // interval - computed: false, optional: false, required: true
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}

export class SiteAttackThresholdList extends cdktf.ComplexList {
  public internalValue? : SiteAttackThreshold[] | cdktf.IResolvable

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
  public get(index: number): SiteAttackThresholdOutputReference {
    return new SiteAttackThresholdOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site sigsci_site}
*/
export class Site extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sigsci_site";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site to import
  * @param importFromId The id of the existing Site that should be imported. Refer to the {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sigsci_site", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/signalsciences/sigsci/3.7.1/docs/resources/site sigsci_site} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SiteConfig
  */
  public constructor(scope: Construct, id: string, config: SiteConfig) {
    super(scope, id, {
      terraformResourceType: 'sigsci_site',
      terraformGeneratorMetadata: {
        providerName: 'sigsci',
        providerVersion: '3.7.1',
        providerVersionConstraint: '3.7.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._agentAnonMode = config.agentAnonMode;
    this._agentLevel = config.agentLevel;
    this._blockDurationSeconds = config.blockDurationSeconds;
    this._blockHttpCode = config.blockHttpCode;
    this._blockRedirectUrl = config.blockRedirectUrl;
    this._clientIpRules = config.clientIpRules;
    this._displayName = config.displayName;
    this._id = config.id;
    this._immediateBlock = config.immediateBlock;
    this._shortName = config.shortName;
    this._attackThreshold.internalValue = config.attackThreshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // agent_anon_mode - computed: false, optional: true, required: false
  private _agentAnonMode?: string; 
  public get agentAnonMode() {
    return this.getStringAttribute('agent_anon_mode');
  }
  public set agentAnonMode(value: string) {
    this._agentAnonMode = value;
  }
  public resetAgentAnonMode() {
    this._agentAnonMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentAnonModeInput() {
    return this._agentAnonMode;
  }

  // agent_level - computed: false, optional: true, required: false
  private _agentLevel?: string; 
  public get agentLevel() {
    return this.getStringAttribute('agent_level');
  }
  public set agentLevel(value: string) {
    this._agentLevel = value;
  }
  public resetAgentLevel() {
    this._agentLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentLevelInput() {
    return this._agentLevel;
  }

  // block_duration_seconds - computed: false, optional: true, required: false
  private _blockDurationSeconds?: number; 
  public get blockDurationSeconds() {
    return this.getNumberAttribute('block_duration_seconds');
  }
  public set blockDurationSeconds(value: number) {
    this._blockDurationSeconds = value;
  }
  public resetBlockDurationSeconds() {
    this._blockDurationSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockDurationSecondsInput() {
    return this._blockDurationSeconds;
  }

  // block_http_code - computed: false, optional: true, required: false
  private _blockHttpCode?: number; 
  public get blockHttpCode() {
    return this.getNumberAttribute('block_http_code');
  }
  public set blockHttpCode(value: number) {
    this._blockHttpCode = value;
  }
  public resetBlockHttpCode() {
    this._blockHttpCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockHttpCodeInput() {
    return this._blockHttpCode;
  }

  // block_redirect_url - computed: false, optional: true, required: false
  private _blockRedirectUrl?: string; 
  public get blockRedirectUrl() {
    return this.getStringAttribute('block_redirect_url');
  }
  public set blockRedirectUrl(value: string) {
    this._blockRedirectUrl = value;
  }
  public resetBlockRedirectUrl() {
    this._blockRedirectUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockRedirectUrlInput() {
    return this._blockRedirectUrl;
  }

  // client_ip_rules - computed: false, optional: true, required: false
  private _clientIpRules?: string[]; 
  public get clientIpRules() {
    return this.getListAttribute('client_ip_rules');
  }
  public set clientIpRules(value: string[]) {
    this._clientIpRules = value;
  }
  public resetClientIpRules() {
    this._clientIpRules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpRulesInput() {
    return this._clientIpRules;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // immediate_block - computed: false, optional: true, required: false
  private _immediateBlock?: boolean | cdktf.IResolvable; 
  public get immediateBlock() {
    return this.getBooleanAttribute('immediate_block');
  }
  public set immediateBlock(value: boolean | cdktf.IResolvable) {
    this._immediateBlock = value;
  }
  public resetImmediateBlock() {
    this._immediateBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get immediateBlockInput() {
    return this._immediateBlock;
  }

  // primary_agent_key - computed: true, optional: false, required: false
  private _primaryAgentKey = new cdktf.StringMap(this, "primary_agent_key");
  public get primaryAgentKey() {
    return this._primaryAgentKey;
  }

  // short_name - computed: false, optional: false, required: true
  private _shortName?: string; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string) {
    this._shortName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName;
  }

  // attack_threshold - computed: false, optional: true, required: false
  private _attackThreshold = new SiteAttackThresholdList(this, "attack_threshold", true);
  public get attackThreshold() {
    return this._attackThreshold;
  }
  public putAttackThreshold(value: SiteAttackThreshold[] | cdktf.IResolvable) {
    this._attackThreshold.internalValue = value;
  }
  public resetAttackThreshold() {
    this._attackThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackThresholdInput() {
    return this._attackThreshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_anon_mode: cdktf.stringToTerraform(this._agentAnonMode),
      agent_level: cdktf.stringToTerraform(this._agentLevel),
      block_duration_seconds: cdktf.numberToTerraform(this._blockDurationSeconds),
      block_http_code: cdktf.numberToTerraform(this._blockHttpCode),
      block_redirect_url: cdktf.stringToTerraform(this._blockRedirectUrl),
      client_ip_rules: cdktf.listMapper(cdktf.stringToTerraform, false)(this._clientIpRules),
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      immediate_block: cdktf.booleanToTerraform(this._immediateBlock),
      short_name: cdktf.stringToTerraform(this._shortName),
      attack_threshold: cdktf.listMapper(siteAttackThresholdToTerraform, true)(this._attackThreshold.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_anon_mode: {
        value: cdktf.stringToHclTerraform(this._agentAnonMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_level: {
        value: cdktf.stringToHclTerraform(this._agentLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      block_duration_seconds: {
        value: cdktf.numberToHclTerraform(this._blockDurationSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_http_code: {
        value: cdktf.numberToHclTerraform(this._blockHttpCode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      block_redirect_url: {
        value: cdktf.stringToHclTerraform(this._blockRedirectUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_ip_rules: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._clientIpRules),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      immediate_block: {
        value: cdktf.booleanToHclTerraform(this._immediateBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      short_name: {
        value: cdktf.stringToHclTerraform(this._shortName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      attack_threshold: {
        value: cdktf.listMapperHcl(siteAttackThresholdToHclTerraform, true)(this._attackThreshold.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "SiteAttackThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
