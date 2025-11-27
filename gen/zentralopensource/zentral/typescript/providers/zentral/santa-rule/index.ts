// https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SantaRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * CEL expression. Only valid for `CEL` policy rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#cel_expr SantaRule#cel_expr}
  */
  readonly celExpr?: string;
  /**
  * `ID` of the Santa configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#configuration_id SantaRule#configuration_id}
  */
  readonly configurationId: number;
  /**
  * Custom message displayed in the popover when a binary is blocked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#custom_message SantaRule#custom_message}
  */
  readonly customMessage?: string;
  /**
  * Description of the rule. Only displayed in the Zentral GUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#description SantaRule#description}
  */
  readonly description?: string;
  /**
  * The excluded primary users used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#excluded_primary_users SantaRule#excluded_primary_users}
  */
  readonly excludedPrimaryUsers?: string[];
  /**
  * The excluded serial numbers used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#excluded_serial_numbers SantaRule#excluded_serial_numbers}
  */
  readonly excludedSerialNumbers?: string[];
  /**
  * The `ID`s of the excluded tags used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#excluded_tag_ids SantaRule#excluded_tag_ids}
  */
  readonly excludedTagIds?: number[];
  /**
  * Policy. Valid values are `ALLOWLIST`, `ALLOWLIST_COMPILER`, `BLOCKLIST`, `CEL`, and `SILENT_BLOCKLIST`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#policy SantaRule#policy}
  */
  readonly policy: string;
  /**
  * The primary users used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#primary_users SantaRule#primary_users}
  */
  readonly primaryUsers?: string[];
  /**
  * The serial numbers used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#serial_numbers SantaRule#serial_numbers}
  */
  readonly serialNumbers?: string[];
  /**
  * The `ID`s of the tags used to scope the rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#tag_ids SantaRule#tag_ids}
  */
  readonly tagIds?: number[];
  /**
  * Target identifier: binary, certificate sha256, signing ID or team ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#target_identifier SantaRule#target_identifier}
  */
  readonly targetIdentifier: string;
  /**
  * Target type. Valid values are `BINARY`, `CDHASH`, `CERTIFICATE`, `SIGNINGID` and `TEAMID`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#target_type SantaRule#target_type}
  */
  readonly targetType: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule zentral_santa_rule}
*/
export class SantaRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zentral_santa_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SantaRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SantaRule to import
  * @param importFromId The id of the existing SantaRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SantaRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zentral_santa_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zentralopensource/zentral/0.1.65/docs/resources/santa_rule zentral_santa_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SantaRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SantaRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'zentral_santa_rule',
      terraformGeneratorMetadata: {
        providerName: 'zentral',
        providerVersion: '0.1.65',
        providerVersionConstraint: '0.1.65'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._celExpr = config.celExpr;
    this._configurationId = config.configurationId;
    this._customMessage = config.customMessage;
    this._description = config.description;
    this._excludedPrimaryUsers = config.excludedPrimaryUsers;
    this._excludedSerialNumbers = config.excludedSerialNumbers;
    this._excludedTagIds = config.excludedTagIds;
    this._policy = config.policy;
    this._primaryUsers = config.primaryUsers;
    this._serialNumbers = config.serialNumbers;
    this._tagIds = config.tagIds;
    this._targetIdentifier = config.targetIdentifier;
    this._targetType = config.targetType;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cel_expr - computed: true, optional: true, required: false
  private _celExpr?: string; 
  public get celExpr() {
    return this.getStringAttribute('cel_expr');
  }
  public set celExpr(value: string) {
    this._celExpr = value;
  }
  public resetCelExpr() {
    this._celExpr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get celExprInput() {
    return this._celExpr;
  }

  // configuration_id - computed: false, optional: false, required: true
  private _configurationId?: number; 
  public get configurationId() {
    return this.getNumberAttribute('configuration_id');
  }
  public set configurationId(value: number) {
    this._configurationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // custom_message - computed: true, optional: true, required: false
  private _customMessage?: string; 
  public get customMessage() {
    return this.getStringAttribute('custom_message');
  }
  public set customMessage(value: string) {
    this._customMessage = value;
  }
  public resetCustomMessage() {
    this._customMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMessageInput() {
    return this._customMessage;
  }

  // description - computed: true, optional: true, required: false
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

  // excluded_primary_users - computed: true, optional: true, required: false
  private _excludedPrimaryUsers?: string[]; 
  public get excludedPrimaryUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_primary_users'));
  }
  public set excludedPrimaryUsers(value: string[]) {
    this._excludedPrimaryUsers = value;
  }
  public resetExcludedPrimaryUsers() {
    this._excludedPrimaryUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedPrimaryUsersInput() {
    return this._excludedPrimaryUsers;
  }

  // excluded_serial_numbers - computed: true, optional: true, required: false
  private _excludedSerialNumbers?: string[]; 
  public get excludedSerialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_serial_numbers'));
  }
  public set excludedSerialNumbers(value: string[]) {
    this._excludedSerialNumbers = value;
  }
  public resetExcludedSerialNumbers() {
    this._excludedSerialNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedSerialNumbersInput() {
    return this._excludedSerialNumbers;
  }

  // excluded_tag_ids - computed: true, optional: true, required: false
  private _excludedTagIds?: number[]; 
  public get excludedTagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('excluded_tag_ids')));
  }
  public set excludedTagIds(value: number[]) {
    this._excludedTagIds = value;
  }
  public resetExcludedTagIds() {
    this._excludedTagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedTagIdsInput() {
    return this._excludedTagIds;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // primary_users - computed: true, optional: true, required: false
  private _primaryUsers?: string[]; 
  public get primaryUsers() {
    return cdktf.Fn.tolist(this.getListAttribute('primary_users'));
  }
  public set primaryUsers(value: string[]) {
    this._primaryUsers = value;
  }
  public resetPrimaryUsers() {
    this._primaryUsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryUsersInput() {
    return this._primaryUsers;
  }

  // ruleset_id - computed: true, optional: false, required: false
  public get rulesetId() {
    return this.getNumberAttribute('ruleset_id');
  }

  // serial_numbers - computed: true, optional: true, required: false
  private _serialNumbers?: string[]; 
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }
  public set serialNumbers(value: string[]) {
    this._serialNumbers = value;
  }
  public resetSerialNumbers() {
    this._serialNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumbersInput() {
    return this._serialNumbers;
  }

  // tag_ids - computed: true, optional: true, required: false
  private _tagIds?: number[]; 
  public get tagIds() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tag_ids')));
  }
  public set tagIds(value: number[]) {
    this._tagIds = value;
  }
  public resetTagIds() {
    this._tagIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagIdsInput() {
    return this._tagIds;
  }

  // target_identifier - computed: false, optional: false, required: true
  private _targetIdentifier?: string; 
  public get targetIdentifier() {
    return this.getStringAttribute('target_identifier');
  }
  public set targetIdentifier(value: string) {
    this._targetIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetIdentifierInput() {
    return this._targetIdentifier;
  }

  // target_type - computed: false, optional: false, required: true
  private _targetType?: string; 
  public get targetType() {
    return this.getStringAttribute('target_type');
  }
  public set targetType(value: string) {
    this._targetType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetTypeInput() {
    return this._targetType;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cel_expr: cdktf.stringToTerraform(this._celExpr),
      configuration_id: cdktf.numberToTerraform(this._configurationId),
      custom_message: cdktf.stringToTerraform(this._customMessage),
      description: cdktf.stringToTerraform(this._description),
      excluded_primary_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedPrimaryUsers),
      excluded_serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedSerialNumbers),
      excluded_tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._excludedTagIds),
      policy: cdktf.stringToTerraform(this._policy),
      primary_users: cdktf.listMapper(cdktf.stringToTerraform, false)(this._primaryUsers),
      serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumbers),
      tag_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._tagIds),
      target_identifier: cdktf.stringToTerraform(this._targetIdentifier),
      target_type: cdktf.stringToTerraform(this._targetType),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cel_expr: {
        value: cdktf.stringToHclTerraform(this._celExpr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_id: {
        value: cdktf.numberToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_message: {
        value: cdktf.stringToHclTerraform(this._customMessage),
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
      excluded_primary_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedPrimaryUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_serial_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedSerialNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      excluded_tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._excludedTagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      policy: {
        value: cdktf.stringToHclTerraform(this._policy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_users: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._primaryUsers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      serial_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tag_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._tagIds),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      target_identifier: {
        value: cdktf.stringToHclTerraform(this._targetIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target_type: {
        value: cdktf.stringToHclTerraform(this._targetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
