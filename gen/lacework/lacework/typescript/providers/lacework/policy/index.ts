// https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#description Policy#description}
  */
  readonly description: string;
  /**
  * The state of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#enabled Policy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The evaluation frequency must be either 'Hourly' or 'Daily'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#evaluation Policy#evaluation}
  */
  readonly evaluation?: string;
  /**
  * Set the number of records returned by the policy. Maximum value is 5000
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#limit Policy#limit}
  */
  readonly limit?: number;
  /**
  * The string appended to the end of the policy id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#policy_id_suffix Policy#policy_id_suffix}
  */
  readonly policyIdSuffix?: string;
  /**
  * The id of the query
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#query_id Policy#query_id}
  */
  readonly queryId: string;
  /**
  * The remediation message to display
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#remediation Policy#remediation}
  */
  readonly remediation: string;
  /**
  * The severity for the policy. Valid severities are: Critical, High, Medium, Low, Info
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#severity Policy#severity}
  */
  readonly severity: string;
  /**
  * A list of user specified policy tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#tags Policy#tags}
  */
  readonly tags?: string[];
  /**
  * The title of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#title Policy#title}
  */
  readonly title: string;
  /**
  * The policy type must be 'Violation'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#type Policy#type}
  */
  readonly type: string;
  /**
  * alerting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#alerting Policy#alerting}
  */
  readonly alerting?: PolicyAlerting;
}
export interface PolicyAlerting {
  /**
  * Whether alerting is enabled or disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#enabled Policy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The alerting profile id
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#profile Policy#profile}
  */
  readonly profile: string;
}

export function policyAlertingToTerraform(struct?: PolicyAlertingOutputReference | PolicyAlerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    profile: cdktf.stringToTerraform(struct!.profile),
  }
}


export function policyAlertingToHclTerraform(struct?: PolicyAlertingOutputReference | PolicyAlerting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile: {
      value: cdktf.stringToHclTerraform(struct!.profile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class PolicyAlertingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): PolicyAlerting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._profile !== undefined) {
      hasAnyValues = true;
      internalValueResult.profile = this._profile;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PolicyAlerting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._profile = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._profile = value.profile;
    }
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

  // profile - computed: false, optional: false, required: true
  private _profile?: string; 
  public get profile() {
    return this.getStringAttribute('profile');
  }
  public set profile(value: string) {
    this._profile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get profileInput() {
    return this._profile;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy lacework_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "lacework_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "lacework_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/lacework/lacework/2.0.11/docs/resources/policy lacework_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'lacework_policy',
      terraformGeneratorMetadata: {
        providerName: 'lacework',
        providerVersion: '2.0.11',
        providerVersionConstraint: '2.0.11'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._evaluation = config.evaluation;
    this._limit = config.limit;
    this._policyIdSuffix = config.policyIdSuffix;
    this._queryId = config.queryId;
    this._remediation = config.remediation;
    this._severity = config.severity;
    this._tags = config.tags;
    this._title = config.title;
    this._type = config.type;
    this._alerting.internalValue = config.alerting;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // computed_tags - computed: true, optional: false, required: false
  public get computedTags() {
    return this.getStringAttribute('computed_tags');
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

  // evaluation - computed: false, optional: true, required: false
  private _evaluation?: string; 
  public get evaluation() {
    return this.getStringAttribute('evaluation');
  }
  public set evaluation(value: string) {
    this._evaluation = value;
  }
  public resetEvaluation() {
    this._evaluation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationInput() {
    return this._evaluation;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // policy_id_suffix - computed: false, optional: true, required: false
  private _policyIdSuffix?: string; 
  public get policyIdSuffix() {
    return this.getStringAttribute('policy_id_suffix');
  }
  public set policyIdSuffix(value: string) {
    this._policyIdSuffix = value;
  }
  public resetPolicyIdSuffix() {
    this._policyIdSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyIdSuffixInput() {
    return this._policyIdSuffix;
  }

  // query_id - computed: false, optional: false, required: true
  private _queryId?: string; 
  public get queryId() {
    return this.getStringAttribute('query_id');
  }
  public set queryId(value: string) {
    this._queryId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryIdInput() {
    return this._queryId;
  }

  // remediation - computed: false, optional: false, required: true
  private _remediation?: string; 
  public get remediation() {
    return this.getStringAttribute('remediation');
  }
  public set remediation(value: string) {
    this._remediation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remediationInput() {
    return this._remediation;
  }

  // severity - computed: false, optional: false, required: true
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return cdktf.Fn.tolist(this.getListAttribute('tags'));
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // updated_time - computed: true, optional: false, required: false
  public get updatedTime() {
    return this.getStringAttribute('updated_time');
  }

  // alerting - computed: false, optional: true, required: false
  private _alerting = new PolicyAlertingOutputReference(this, "alerting");
  public get alerting() {
    return this._alerting;
  }
  public putAlerting(value: PolicyAlerting) {
    this._alerting.internalValue = value;
  }
  public resetAlerting() {
    this._alerting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get alertingInput() {
    return this._alerting.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      evaluation: cdktf.stringToTerraform(this._evaluation),
      limit: cdktf.numberToTerraform(this._limit),
      policy_id_suffix: cdktf.stringToTerraform(this._policyIdSuffix),
      query_id: cdktf.stringToTerraform(this._queryId),
      remediation: cdktf.stringToTerraform(this._remediation),
      severity: cdktf.stringToTerraform(this._severity),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      title: cdktf.stringToTerraform(this._title),
      type: cdktf.stringToTerraform(this._type),
      alerting: policyAlertingToTerraform(this._alerting.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      evaluation: {
        value: cdktf.stringToHclTerraform(this._evaluation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      policy_id_suffix: {
        value: cdktf.stringToHclTerraform(this._policyIdSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      query_id: {
        value: cdktf.stringToHclTerraform(this._queryId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remediation: {
        value: cdktf.stringToHclTerraform(this._remediation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      severity: {
        value: cdktf.stringToHclTerraform(this._severity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
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
      alerting: {
        value: policyAlertingToHclTerraform(this._alerting.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "PolicyAlertingList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
