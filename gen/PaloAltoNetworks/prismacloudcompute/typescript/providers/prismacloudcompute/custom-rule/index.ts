// https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Attack techniques from the MITRE ATT&CK Framework that the rule is concerned with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#attack_techniques CustomRule#attack_techniques}
  */
  readonly attackTechniques?: string[];
  /**
  * Free-form text description of the custom rule.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#description CustomRule#description}
  */
  readonly description?: string;
  /**
  * Message to display for a custom rule event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#message CustomRule#message}
  */
  readonly message?: string;
  /**
  * Message to display for a custom rule event.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#min_version CustomRule#min_version}
  */
  readonly minVersion?: string;
  /**
  * Unique custom rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#name CustomRule#name}
  */
  readonly name: string;
  /**
  * Custom rule expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#script CustomRule#script}
  */
  readonly script?: string;
  /**
  * Custom rule type. Can be set to 'processes', 'filesystem', 'network-outgoing', 'kubernetes-audit', 'waas-request', or 'waas-response'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#type CustomRule#type}
  */
  readonly type: string;
  /**
  * List of vulnerability IDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#vuln_ids CustomRule#vuln_ids}
  */
  readonly vulnIds?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule prismacloudcompute_custom_rule}
*/
export class CustomRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "prismacloudcompute_custom_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomRule to import
  * @param importFromId The id of the existing CustomRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "prismacloudcompute_custom_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/prismacloudcompute/0.8.0/docs/resources/custom_rule prismacloudcompute_custom_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CustomRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'prismacloudcompute_custom_rule',
      terraformGeneratorMetadata: {
        providerName: 'prismacloudcompute',
        providerVersion: '0.8.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._attackTechniques = config.attackTechniques;
    this._description = config.description;
    this._message = config.message;
    this._minVersion = config.minVersion;
    this._name = config.name;
    this._script = config.script;
    this._type = config.type;
    this._vulnIds = config.vulnIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attack_techniques - computed: false, optional: true, required: false
  private _attackTechniques?: string[]; 
  public get attackTechniques() {
    return this.getListAttribute('attack_techniques');
  }
  public set attackTechniques(value: string[]) {
    this._attackTechniques = value;
  }
  public resetAttackTechniques() {
    this._attackTechniques = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attackTechniquesInput() {
    return this._attackTechniques;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // min_version - computed: false, optional: true, required: false
  private _minVersion?: string; 
  public get minVersion() {
    return this.getStringAttribute('min_version');
  }
  public set minVersion(value: string) {
    this._minVersion = value;
  }
  public resetMinVersion() {
    this._minVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minVersionInput() {
    return this._minVersion;
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

  // prisma_id - computed: true, optional: false, required: false
  public get prismaId() {
    return this.getNumberAttribute('prisma_id');
  }

  // script - computed: false, optional: true, required: false
  private _script?: string; 
  public get script() {
    return this.getStringAttribute('script');
  }
  public set script(value: string) {
    this._script = value;
  }
  public resetScript() {
    this._script = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scriptInput() {
    return this._script;
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

  // vuln_ids - computed: false, optional: true, required: false
  private _vulnIds?: string[]; 
  public get vulnIds() {
    return this.getListAttribute('vuln_ids');
  }
  public set vulnIds(value: string[]) {
    this._vulnIds = value;
  }
  public resetVulnIds() {
    this._vulnIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vulnIdsInput() {
    return this._vulnIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      attack_techniques: cdktf.listMapper(cdktf.stringToTerraform, false)(this._attackTechniques),
      description: cdktf.stringToTerraform(this._description),
      message: cdktf.stringToTerraform(this._message),
      min_version: cdktf.stringToTerraform(this._minVersion),
      name: cdktf.stringToTerraform(this._name),
      script: cdktf.stringToTerraform(this._script),
      type: cdktf.stringToTerraform(this._type),
      vuln_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vulnIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      attack_techniques: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._attackTechniques),
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
      message: {
        value: cdktf.stringToHclTerraform(this._message),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_version: {
        value: cdktf.stringToHclTerraform(this._minVersion),
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
      script: {
        value: cdktf.stringToHclTerraform(this._script),
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
      vuln_ids: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vulnIds),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
