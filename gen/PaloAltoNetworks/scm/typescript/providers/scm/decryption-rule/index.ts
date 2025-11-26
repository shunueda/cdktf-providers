// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DecryptionRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The action to be taken
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#action DecryptionRule#action}
  */
  readonly action: string;
  /**
  * The destination URL category
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#category DecryptionRule#category}
  */
  readonly category: string[];
  /**
  * The description of the decryption rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#description DecryptionRule#description}
  */
  readonly description?: string;
  /**
  * The destination addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#destination DecryptionRule#destination}
  */
  readonly destination: string[];
  /**
  * The Host Integrity Profile of the destination host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#destination_hip DecryptionRule#destination_hip}
  */
  readonly destinationHip?: string[];
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#device DecryptionRule#device}
  */
  readonly device?: string;
  /**
  * Is the rule disabled?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#disabled DecryptionRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#folder DecryptionRule#folder}
  */
  readonly folder?: string;
  /**
  * The source security zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#from DecryptionRule#from}
  */
  readonly from: string[];
  /**
  * Log failed decryption events?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#log_fail DecryptionRule#log_fail}
  */
  readonly logFail?: boolean | cdktf.IResolvable;
  /**
  * The log settings of the decryption rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#log_setting DecryptionRule#log_setting}
  */
  readonly logSetting?: string;
  /**
  * Log successful decryption events?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#log_success DecryptionRule#log_success}
  */
  readonly logSuccess?: boolean | cdktf.IResolvable;
  /**
  * The name of the decryption rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#name DecryptionRule#name}
  */
  readonly name: string;
  /**
  * Negate the destination addresses?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#negate_destination DecryptionRule#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Negate the source addresses?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#negate_source DecryptionRule#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * The position of a security rule
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#position DecryptionRule#position}
  */
  readonly position?: string;
  /**
  * The decryption profile associated with the decryption rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#profile DecryptionRule#profile}
  */
  readonly profile?: string;
  /**
  * Relative positioning rule. String must be one of these: `"before"`, `"after"`, `"top"`, `"bottom"`. If not specified, rule is created at the bottom of the ruleset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#relative_position DecryptionRule#relative_position}
  */
  readonly relativePosition?: string;
  /**
  * The destination services and/or service groups
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#service DecryptionRule#service}
  */
  readonly service: string[];
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#snippet DecryptionRule#snippet}
  */
  readonly snippet?: string;
  /**
  * The source addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#source DecryptionRule#source}
  */
  readonly source: string[];
  /**
  * Source hip
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#source_hip DecryptionRule#source_hip}
  */
  readonly sourceHip?: string[];
  /**
  * List of source users and/or groups.  Reserved words include `any`, `pre-login`, `known-user`, and `unknown`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#source_user DecryptionRule#source_user}
  */
  readonly sourceUser: string[];
  /**
  * The tags associated with the decryption rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#tag DecryptionRule#tag}
  */
  readonly tag?: string[];
  /**
  * The name or UUID of the rule to position this rule relative to. Required when `relative_position` is `"before"` or `"after"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#target_rule DecryptionRule#target_rule}
  */
  readonly targetRule?: string;
  /**
  * The destination security zone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#to DecryptionRule#to}
  */
  readonly to: string[];
  /**
  * The type of decryption
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#type DecryptionRule#type}
  */
  readonly type?: DecryptionRuleType;
}
export interface DecryptionRuleTypeSslForwardProxy {
}

export function decryptionRuleTypeSslForwardProxyToTerraform(struct?: DecryptionRuleTypeSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function decryptionRuleTypeSslForwardProxyToHclTerraform(struct?: DecryptionRuleTypeSslForwardProxy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DecryptionRuleTypeSslForwardProxyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionRuleTypeSslForwardProxy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionRuleTypeSslForwardProxy | cdktf.IResolvable | undefined) {
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
}
export interface DecryptionRuleType {
  /**
  * Ssl forward proxy
  * 
  * > ℹ️ **Note:** You must specify exactly one of `ssl_forward_proxy` and `ssl_inbound_inspection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#ssl_forward_proxy DecryptionRule#ssl_forward_proxy}
  */
  readonly sslForwardProxy?: DecryptionRuleTypeSslForwardProxy;
  /**
  * add the certificate name for SSL inbound inspection
  * 
  * > ℹ️ **Note:** You must specify exactly one of `ssl_forward_proxy` and `ssl_inbound_inspection`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#ssl_inbound_inspection DecryptionRule#ssl_inbound_inspection}
  */
  readonly sslInboundInspection?: string;
}

export function decryptionRuleTypeToTerraform(struct?: DecryptionRuleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ssl_forward_proxy: decryptionRuleTypeSslForwardProxyToTerraform(struct!.sslForwardProxy),
    ssl_inbound_inspection: cdktf.stringToTerraform(struct!.sslInboundInspection),
  }
}


export function decryptionRuleTypeToHclTerraform(struct?: DecryptionRuleType | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ssl_forward_proxy: {
      value: decryptionRuleTypeSslForwardProxyToHclTerraform(struct!.sslForwardProxy),
      isBlock: true,
      type: "struct",
      storageClassType: "DecryptionRuleTypeSslForwardProxy",
    },
    ssl_inbound_inspection: {
      value: cdktf.stringToHclTerraform(struct!.sslInboundInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DecryptionRuleTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DecryptionRuleType | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sslForwardProxy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslForwardProxy = this._sslForwardProxy?.internalValue;
    }
    if (this._sslInboundInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslInboundInspection = this._sslInboundInspection;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DecryptionRuleType | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sslForwardProxy.internalValue = undefined;
      this._sslInboundInspection = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sslForwardProxy.internalValue = value.sslForwardProxy;
      this._sslInboundInspection = value.sslInboundInspection;
    }
  }

  // ssl_forward_proxy - computed: false, optional: true, required: false
  private _sslForwardProxy = new DecryptionRuleTypeSslForwardProxyOutputReference(this, "ssl_forward_proxy");
  public get sslForwardProxy() {
    return this._sslForwardProxy;
  }
  public putSslForwardProxy(value: DecryptionRuleTypeSslForwardProxy) {
    this._sslForwardProxy.internalValue = value;
  }
  public resetSslForwardProxy() {
    this._sslForwardProxy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslForwardProxyInput() {
    return this._sslForwardProxy.internalValue;
  }

  // ssl_inbound_inspection - computed: false, optional: true, required: false
  private _sslInboundInspection?: string; 
  public get sslInboundInspection() {
    return this.getStringAttribute('ssl_inbound_inspection');
  }
  public set sslInboundInspection(value: string) {
    this._sslInboundInspection = value;
  }
  public resetSslInboundInspection() {
    this._sslInboundInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslInboundInspectionInput() {
    return this._sslInboundInspection;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule scm_decryption_rule}
*/
export class DecryptionRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_decryption_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DecryptionRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DecryptionRule to import
  * @param importFromId The id of the existing DecryptionRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DecryptionRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_decryption_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/decryption_rule scm_decryption_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DecryptionRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DecryptionRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_decryption_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._category = config.category;
    this._description = config.description;
    this._destination = config.destination;
    this._destinationHip = config.destinationHip;
    this._device = config.device;
    this._disabled = config.disabled;
    this._folder = config.folder;
    this._from = config.from;
    this._logFail = config.logFail;
    this._logSetting = config.logSetting;
    this._logSuccess = config.logSuccess;
    this._name = config.name;
    this._negateDestination = config.negateDestination;
    this._negateSource = config.negateSource;
    this._position = config.position;
    this._profile = config.profile;
    this._relativePosition = config.relativePosition;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceHip = config.sourceHip;
    this._sourceUser = config.sourceUser;
    this._tag = config.tag;
    this._targetRule = config.targetRule;
    this._to = config.to;
    this._type.internalValue = config.type;
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

  // category - computed: false, optional: false, required: true
  private _category?: string[]; 
  public get category() {
    return this.getListAttribute('category');
  }
  public set category(value: string[]) {
    this._category = value;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
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

  // destination - computed: false, optional: false, required: true
  private _destination?: string[]; 
  public get destination() {
    return this.getListAttribute('destination');
  }
  public set destination(value: string[]) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_hip - computed: false, optional: true, required: false
  private _destinationHip?: string[]; 
  public get destinationHip() {
    return this.getListAttribute('destination_hip');
  }
  public set destinationHip(value: string[]) {
    this._destinationHip = value;
  }
  public resetDestinationHip() {
    this._destinationHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationHipInput() {
    return this._destinationHip;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // from - computed: false, optional: false, required: true
  private _from?: string[]; 
  public get from() {
    return this.getListAttribute('from');
  }
  public set from(value: string[]) {
    this._from = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fromInput() {
    return this._from;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_fail - computed: false, optional: true, required: false
  private _logFail?: boolean | cdktf.IResolvable; 
  public get logFail() {
    return this.getBooleanAttribute('log_fail');
  }
  public set logFail(value: boolean | cdktf.IResolvable) {
    this._logFail = value;
  }
  public resetLogFail() {
    this._logFail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logFailInput() {
    return this._logFail;
  }

  // log_setting - computed: false, optional: true, required: false
  private _logSetting?: string; 
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }
  public set logSetting(value: string) {
    this._logSetting = value;
  }
  public resetLogSetting() {
    this._logSetting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSettingInput() {
    return this._logSetting;
  }

  // log_success - computed: false, optional: true, required: false
  private _logSuccess?: boolean | cdktf.IResolvable; 
  public get logSuccess() {
    return this.getBooleanAttribute('log_success');
  }
  public set logSuccess(value: boolean | cdktf.IResolvable) {
    this._logSuccess = value;
  }
  public resetLogSuccess() {
    this._logSuccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSuccessInput() {
    return this._logSuccess;
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

  // position - computed: true, optional: true, required: false
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  public resetPosition() {
    this._position = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // profile - computed: false, optional: true, required: false
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  public resetProfile() {
    this._profile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }

  // relative_position - computed: false, optional: true, required: false
  private _relativePosition?: string; 
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }
  public set relativePosition(value: string) {
    this._relativePosition = value;
  }
  public resetRelativePosition() {
    this._relativePosition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePositionInput() {
    return this._relativePosition;
  }

  // service - computed: false, optional: false, required: true
  private _service?: string[]; 
  public get service() {
    return this.getListAttribute('service');
  }
  public set service(value: string[]) {
    this._service = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // source - computed: false, optional: false, required: true
  private _source?: string[]; 
  public get source() {
    return this.getListAttribute('source');
  }
  public set source(value: string[]) {
    this._source = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // source_hip - computed: false, optional: true, required: false
  private _sourceHip?: string[]; 
  public get sourceHip() {
    return this.getListAttribute('source_hip');
  }
  public set sourceHip(value: string[]) {
    this._sourceHip = value;
  }
  public resetSourceHip() {
    this._sourceHip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceHipInput() {
    return this._sourceHip;
  }

  // source_user - computed: false, optional: false, required: true
  private _sourceUser?: string[]; 
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }
  public set sourceUser(value: string[]) {
    this._sourceUser = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceUserInput() {
    return this._sourceUser;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string[]; 
  public get tag() {
    return this.getListAttribute('tag');
  }
  public set tag(value: string[]) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }

  // target_rule - computed: false, optional: true, required: false
  private _targetRule?: string; 
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }
  public set targetRule(value: string) {
    this._targetRule = value;
  }
  public resetTargetRule() {
    this._targetRule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRuleInput() {
    return this._targetRule;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: false, optional: false, required: true
  private _to?: string[]; 
  public get to() {
    return this.getListAttribute('to');
  }
  public set to(value: string[]) {
    this._to = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toInput() {
    return this._to;
  }

  // type - computed: false, optional: true, required: false
  private _type = new DecryptionRuleTypeOutputReference(this, "type");
  public get type() {
    return this._type;
  }
  public putType(value: DecryptionRuleType) {
    this._type.internalValue = value;
  }
  public resetType() {
    this._type.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._category),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      destination_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destinationHip),
      device: cdktf.stringToTerraform(this._device),
      disabled: cdktf.booleanToTerraform(this._disabled),
      folder: cdktf.stringToTerraform(this._folder),
      from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._from),
      log_fail: cdktf.booleanToTerraform(this._logFail),
      log_setting: cdktf.stringToTerraform(this._logSetting),
      log_success: cdktf.booleanToTerraform(this._logSuccess),
      name: cdktf.stringToTerraform(this._name),
      negate_destination: cdktf.booleanToTerraform(this._negateDestination),
      negate_source: cdktf.booleanToTerraform(this._negateSource),
      position: cdktf.stringToTerraform(this._position),
      profile: cdktf.stringToTerraform(this._profile),
      relative_position: cdktf.stringToTerraform(this._relativePosition),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_hip: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceHip),
      source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUser),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      target_rule: cdktf.stringToTerraform(this._targetRule),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
      type: decryptionRuleTypeToTerraform(this._type.internalValue),
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
      category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._category),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destination),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      destination_hip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._destinationHip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      from: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._from),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      log_fail: {
        value: cdktf.booleanToHclTerraform(this._logFail),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_setting: {
        value: cdktf.stringToHclTerraform(this._logSetting),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_success: {
        value: cdktf.booleanToHclTerraform(this._logSuccess),
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
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      profile: {
        value: cdktf.stringToHclTerraform(this._profile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relative_position: {
        value: cdktf.stringToHclTerraform(this._relativePosition),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._service),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._source),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_hip: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceHip),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      source_user: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._sourceUser),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      tag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tag),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      target_rule: {
        value: cdktf.stringToHclTerraform(this._targetRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: decryptionRuleTypeToHclTerraform(this._type.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DecryptionRuleType",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
