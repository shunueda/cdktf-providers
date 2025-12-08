// https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Deploy policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#deploy Policy#deploy}
  */
  readonly deploy?: boolean | cdktf.IResolvable;
  /**
  * Description of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#description Policy#description}
  */
  readonly description?: string;
  /**
  * Policy Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#entity_name Policy#entity_name}
  */
  readonly entityName: string;
  /**
  * Type of the entity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#entity_type Policy#entity_type}
  */
  readonly entityType: string;
  /**
  * Policy Group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#is_policy_group Policy#is_policy_group}
  */
  readonly isPolicyGroup?: boolean | cdktf.IResolvable;
  /**
  * List of name value pairs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#policy_parameters Policy#policy_parameters}
  */
  readonly policyParameters?: { [key: string]: string };
  /**
  * Priority of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#priority Policy#priority}
  */
  readonly priority?: number;
  /**
  * Serial numbers of the device. Use only one device for policy. Multiple devices can be in the list if this is a  policygroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#serial_numbers Policy#serial_numbers}
  */
  readonly serialNumbers: string[];
  /**
  * Source of the policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#source Policy#source}
  */
  readonly source?: string;
  /**
  * Name of the template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#template_name Policy#template_name}
  */
  readonly templateName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy ndfc_policy}
*/
export class Policy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ndfc_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Policy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Policy to import
  * @param importFromId The id of the existing Policy that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Policy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ndfc_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ndfc/0.2.1/docs/resources/policy ndfc_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PolicyConfig
  */
  public constructor(scope: Construct, id: string, config: PolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'ndfc_policy',
      terraformGeneratorMetadata: {
        providerName: 'ndfc',
        providerVersion: '0.2.1',
        providerVersionConstraint: '0.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deploy = config.deploy;
    this._description = config.description;
    this._entityName = config.entityName;
    this._entityType = config.entityType;
    this._isPolicyGroup = config.isPolicyGroup;
    this._policyParameters = config.policyParameters;
    this._priority = config.priority;
    this._serialNumbers = config.serialNumbers;
    this._source = config.source;
    this._templateName = config.templateName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_generated - computed: true, optional: false, required: false
  public get autoGenerated() {
    return this.getBooleanAttribute('auto_generated');
  }

  // computed_parameters - computed: true, optional: false, required: false
  private _computedParameters = new cdktf.StringMap(this, "computed_parameters");
  public get computedParameters() {
    return this._computedParameters;
  }

  // deploy - computed: true, optional: true, required: false
  private _deploy?: boolean | cdktf.IResolvable; 
  public get deploy() {
    return this.getBooleanAttribute('deploy');
  }
  public set deploy(value: boolean | cdktf.IResolvable) {
    this._deploy = value;
  }
  public resetDeploy() {
    this._deploy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deployInput() {
    return this._deploy;
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

  // entity_name - computed: false, optional: false, required: true
  private _entityName?: string; 
  public get entityName() {
    return this.getStringAttribute('entity_name');
  }
  public set entityName(value: string) {
    this._entityName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityNameInput() {
    return this._entityName;
  }

  // entity_type - computed: false, optional: false, required: true
  private _entityType?: string; 
  public get entityType() {
    return this.getStringAttribute('entity_type');
  }
  public set entityType(value: string) {
    this._entityType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get entityTypeInput() {
    return this._entityType;
  }

  // generated_config - computed: true, optional: false, required: false
  public get generatedConfig() {
    return this.getStringAttribute('generated_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // is_policy_group - computed: true, optional: true, required: false
  private _isPolicyGroup?: boolean | cdktf.IResolvable; 
  public get isPolicyGroup() {
    return this.getBooleanAttribute('is_policy_group');
  }
  public set isPolicyGroup(value: boolean | cdktf.IResolvable) {
    this._isPolicyGroup = value;
  }
  public resetIsPolicyGroup() {
    this._isPolicyGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isPolicyGroupInput() {
    return this._isPolicyGroup;
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_parameters - computed: false, optional: true, required: false
  private _policyParameters?: { [key: string]: string }; 
  public get policyParameters() {
    return this.getStringMapAttribute('policy_parameters');
  }
  public set policyParameters(value: { [key: string]: string }) {
    this._policyParameters = value;
  }
  public resetPolicyParameters() {
    this._policyParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyParametersInput() {
    return this._policyParameters;
  }

  // priority - computed: true, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // serial_numbers - computed: false, optional: false, required: true
  private _serialNumbers?: string[]; 
  public get serialNumbers() {
    return cdktf.Fn.tolist(this.getListAttribute('serial_numbers'));
  }
  public set serialNumbers(value: string[]) {
    this._serialNumbers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumbersInput() {
    return this._serialNumbers;
  }

  // source - computed: false, optional: true, required: false
  private _source?: string; 
  public get source() {
    return this.getStringAttribute('source');
  }
  public set source(value: string) {
    this._source = value;
  }
  public resetSource() {
    this._source = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source;
  }

  // template_name - computed: false, optional: false, required: true
  private _templateName?: string; 
  public get templateName() {
    return this.getStringAttribute('template_name');
  }
  public set templateName(value: string) {
    this._templateName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get templateNameInput() {
    return this._templateName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      deploy: cdktf.booleanToTerraform(this._deploy),
      description: cdktf.stringToTerraform(this._description),
      entity_name: cdktf.stringToTerraform(this._entityName),
      entity_type: cdktf.stringToTerraform(this._entityType),
      is_policy_group: cdktf.booleanToTerraform(this._isPolicyGroup),
      policy_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(this._policyParameters),
      priority: cdktf.numberToTerraform(this._priority),
      serial_numbers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._serialNumbers),
      source: cdktf.stringToTerraform(this._source),
      template_name: cdktf.stringToTerraform(this._templateName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      deploy: {
        value: cdktf.booleanToHclTerraform(this._deploy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_name: {
        value: cdktf.stringToHclTerraform(this._entityName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      entity_type: {
        value: cdktf.stringToHclTerraform(this._entityType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_policy_group: {
        value: cdktf.booleanToHclTerraform(this._isPolicyGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      policy_parameters: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._policyParameters),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      priority: {
        value: cdktf.numberToHclTerraform(this._priority),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial_numbers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._serialNumbers),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      source: {
        value: cdktf.stringToHclTerraform(this._source),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_name: {
        value: cdktf.stringToHclTerraform(this._templateName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
