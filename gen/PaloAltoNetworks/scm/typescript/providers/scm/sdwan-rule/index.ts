// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SdwanRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Action
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#action SdwanRule#action}
  */
  readonly action: SdwanRuleAction;
  /**
  * List of applications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#application SdwanRule#application}
  */
  readonly application: string[];
  /**
  * Rule description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#description SdwanRule#description}
  */
  readonly description?: string;
  /**
  * List of destination addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#destination SdwanRule#destination}
  */
  readonly destination: string[];
  /**
  * The device in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#device SdwanRule#device}
  */
  readonly device?: string;
  /**
  * Disable rule?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#disabled SdwanRule#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * Error correction profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#error_correction_profile SdwanRule#error_correction_profile}
  */
  readonly errorCorrectionProfile?: string;
  /**
  * The folder in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#folder SdwanRule#folder}
  */
  readonly folder?: string;
  /**
  * List of source zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#from SdwanRule#from}
  */
  readonly from: string[];
  /**
  * Rule name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#name SdwanRule#name}
  */
  readonly name: string;
  /**
  * Negate destination address(es)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#negate_destination SdwanRule#negate_destination}
  */
  readonly negateDestination?: boolean | cdktf.IResolvable;
  /**
  * Negate source address(es)?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#negate_source SdwanRule#negate_source}
  */
  readonly negateSource?: boolean | cdktf.IResolvable;
  /**
  * Path quality profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#path_quality_profile SdwanRule#path_quality_profile}
  */
  readonly pathQualityProfile: string;
  /**
  * Rule postion relative to device rules
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#position SdwanRule#position}
  */
  readonly position: string;
  /**
  * SaaS quality profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#saas_quality_profile SdwanRule#saas_quality_profile}
  */
  readonly saasQualityProfile?: string;
  /**
  * List of services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#service SdwanRule#service}
  */
  readonly service: string[];
  /**
  * The snippet in which the resource is defined
  * 
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#snippet SdwanRule#snippet}
  */
  readonly snippet?: string;
  /**
  * List of source addresses
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#source SdwanRule#source}
  */
  readonly source: string[];
  /**
  * List of source users
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#source_user SdwanRule#source_user}
  */
  readonly sourceUser: string[];
  /**
  * List of tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#tag SdwanRule#tag}
  */
  readonly tag?: string[];
  /**
  * List of destination zones
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#to SdwanRule#to}
  */
  readonly to: string[];
}
export interface SdwanRuleAction {
  /**
  * Traffic dstribution profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#traffic_distribution_profile SdwanRule#traffic_distribution_profile}
  */
  readonly trafficDistributionProfile: string;
}

export function sdwanRuleActionToTerraform(struct?: SdwanRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    traffic_distribution_profile: cdktf.stringToTerraform(struct!.trafficDistributionProfile),
  }
}


export function sdwanRuleActionToHclTerraform(struct?: SdwanRuleAction | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    traffic_distribution_profile: {
      value: cdktf.stringToHclTerraform(struct!.trafficDistributionProfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SdwanRuleActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): SdwanRuleAction | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._trafficDistributionProfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.trafficDistributionProfile = this._trafficDistributionProfile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SdwanRuleAction | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._trafficDistributionProfile = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._trafficDistributionProfile = value.trafficDistributionProfile;
    }
  }

  // traffic_distribution_profile - computed: false, optional: false, required: true
  private _trafficDistributionProfile?: string; 
  public get trafficDistributionProfile() {
    return this.getStringAttribute('traffic_distribution_profile');
  }
  public set trafficDistributionProfile(value: string) {
    this._trafficDistributionProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficDistributionProfileInput() {
    return this._trafficDistributionProfile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule scm_sdwan_rule}
*/
export class SdwanRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_sdwan_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SdwanRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SdwanRule to import
  * @param importFromId The id of the existing SdwanRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SdwanRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_sdwan_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/resources/sdwan_rule scm_sdwan_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SdwanRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SdwanRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_sdwan_rule',
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
    this._action.internalValue = config.action;
    this._application = config.application;
    this._description = config.description;
    this._destination = config.destination;
    this._device = config.device;
    this._disabled = config.disabled;
    this._errorCorrectionProfile = config.errorCorrectionProfile;
    this._folder = config.folder;
    this._from = config.from;
    this._name = config.name;
    this._negateDestination = config.negateDestination;
    this._negateSource = config.negateSource;
    this._pathQualityProfile = config.pathQualityProfile;
    this._position = config.position;
    this._saasQualityProfile = config.saasQualityProfile;
    this._service = config.service;
    this._snippet = config.snippet;
    this._source = config.source;
    this._sourceUser = config.sourceUser;
    this._tag = config.tag;
    this._to = config.to;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action = new SdwanRuleActionOutputReference(this, "action");
  public get action() {
    return this._action;
  }
  public putAction(value: SdwanRuleAction) {
    this._action.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action.internalValue;
  }

  // application - computed: false, optional: false, required: true
  private _application?: string[]; 
  public get application() {
    return this.getListAttribute('application');
  }
  public set application(value: string[]) {
    this._application = value;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
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

  // disabled - computed: true, optional: true, required: false
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

  // error_correction_profile - computed: false, optional: true, required: false
  private _errorCorrectionProfile?: string; 
  public get errorCorrectionProfile() {
    return this.getStringAttribute('error_correction_profile');
  }
  public set errorCorrectionProfile(value: string) {
    this._errorCorrectionProfile = value;
  }
  public resetErrorCorrectionProfile() {
    this._errorCorrectionProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorCorrectionProfileInput() {
    return this._errorCorrectionProfile;
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

  // negate_destination - computed: true, optional: true, required: false
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

  // negate_source - computed: true, optional: true, required: false
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

  // path_quality_profile - computed: false, optional: false, required: true
  private _pathQualityProfile?: string; 
  public get pathQualityProfile() {
    return this.getStringAttribute('path_quality_profile');
  }
  public set pathQualityProfile(value: string) {
    this._pathQualityProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pathQualityProfileInput() {
    return this._pathQualityProfile;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // saas_quality_profile - computed: false, optional: true, required: false
  private _saasQualityProfile?: string; 
  public get saasQualityProfile() {
    return this.getStringAttribute('saas_quality_profile');
  }
  public set saasQualityProfile(value: string) {
    this._saasQualityProfile = value;
  }
  public resetSaasQualityProfile() {
    this._saasQualityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saasQualityProfileInput() {
    return this._saasQualityProfile;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: sdwanRuleActionToTerraform(this._action.internalValue),
      application: cdktf.listMapper(cdktf.stringToTerraform, false)(this._application),
      description: cdktf.stringToTerraform(this._description),
      destination: cdktf.listMapper(cdktf.stringToTerraform, false)(this._destination),
      device: cdktf.stringToTerraform(this._device),
      disabled: cdktf.booleanToTerraform(this._disabled),
      error_correction_profile: cdktf.stringToTerraform(this._errorCorrectionProfile),
      folder: cdktf.stringToTerraform(this._folder),
      from: cdktf.listMapper(cdktf.stringToTerraform, false)(this._from),
      name: cdktf.stringToTerraform(this._name),
      negate_destination: cdktf.booleanToTerraform(this._negateDestination),
      negate_source: cdktf.booleanToTerraform(this._negateSource),
      path_quality_profile: cdktf.stringToTerraform(this._pathQualityProfile),
      position: cdktf.stringToTerraform(this._position),
      saas_quality_profile: cdktf.stringToTerraform(this._saasQualityProfile),
      service: cdktf.listMapper(cdktf.stringToTerraform, false)(this._service),
      snippet: cdktf.stringToTerraform(this._snippet),
      source: cdktf.listMapper(cdktf.stringToTerraform, false)(this._source),
      source_user: cdktf.listMapper(cdktf.stringToTerraform, false)(this._sourceUser),
      tag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tag),
      to: cdktf.listMapper(cdktf.stringToTerraform, false)(this._to),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: sdwanRuleActionToHclTerraform(this._action.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "SdwanRuleAction",
      },
      application: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._application),
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
      error_correction_profile: {
        value: cdktf.stringToHclTerraform(this._errorCorrectionProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      path_quality_profile: {
        value: cdktf.stringToHclTerraform(this._pathQualityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      saas_quality_profile: {
        value: cdktf.stringToHclTerraform(this._saasQualityProfile),
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
      to: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._to),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
