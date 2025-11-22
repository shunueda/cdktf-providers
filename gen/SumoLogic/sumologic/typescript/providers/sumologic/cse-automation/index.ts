// https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CseAutomationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#cse_resource_sub_types CseAutomation#cse_resource_sub_types}
  */
  readonly cseResourceSubTypes?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#cse_resource_type CseAutomation#cse_resource_type}
  */
  readonly cseResourceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#enabled CseAutomation#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#execution_types CseAutomation#execution_types}
  */
  readonly executionTypes: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#id CseAutomation#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#playbook_id CseAutomation#playbook_id}
  */
  readonly playbookId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation sumologic_cse_automation}
*/
export class CseAutomation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sumologic_cse_automation";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CseAutomation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CseAutomation to import
  * @param importFromId The id of the existing CseAutomation that should be imported. Refer to the {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CseAutomation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sumologic_cse_automation", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sumologic/sumologic/3.2.0/docs/resources/cse_automation sumologic_cse_automation} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CseAutomationConfig
  */
  public constructor(scope: Construct, id: string, config: CseAutomationConfig) {
    super(scope, id, {
      terraformResourceType: 'sumologic_cse_automation',
      terraformGeneratorMetadata: {
        providerName: 'sumologic',
        providerVersion: '3.2.0',
        providerVersionConstraint: '3.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cseResourceSubTypes = config.cseResourceSubTypes;
    this._cseResourceType = config.cseResourceType;
    this._enabled = config.enabled;
    this._executionTypes = config.executionTypes;
    this._id = config.id;
    this._playbookId = config.playbookId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cse_resource_sub_types - computed: false, optional: true, required: false
  private _cseResourceSubTypes?: string[]; 
  public get cseResourceSubTypes() {
    return this.getListAttribute('cse_resource_sub_types');
  }
  public set cseResourceSubTypes(value: string[]) {
    this._cseResourceSubTypes = value;
  }
  public resetCseResourceSubTypes() {
    this._cseResourceSubTypes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cseResourceSubTypesInput() {
    return this._cseResourceSubTypes;
  }

  // cse_resource_type - computed: false, optional: false, required: true
  private _cseResourceType?: string; 
  public get cseResourceType() {
    return this.getStringAttribute('cse_resource_type');
  }
  public set cseResourceType(value: string) {
    this._cseResourceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cseResourceTypeInput() {
    return this._cseResourceType;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // execution_types - computed: false, optional: false, required: true
  private _executionTypes?: string[]; 
  public get executionTypes() {
    return this.getListAttribute('execution_types');
  }
  public set executionTypes(value: string[]) {
    this._executionTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get executionTypesInput() {
    return this._executionTypes;
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // playbook_id - computed: false, optional: false, required: true
  private _playbookId?: string; 
  public get playbookId() {
    return this.getStringAttribute('playbook_id');
  }
  public set playbookId(value: string) {
    this._playbookId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get playbookIdInput() {
    return this._playbookId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cse_resource_sub_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cseResourceSubTypes),
      cse_resource_type: cdktf.stringToTerraform(this._cseResourceType),
      enabled: cdktf.booleanToTerraform(this._enabled),
      execution_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._executionTypes),
      id: cdktf.stringToTerraform(this._id),
      playbook_id: cdktf.stringToTerraform(this._playbookId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cse_resource_sub_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cseResourceSubTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      cse_resource_type: {
        value: cdktf.stringToHclTerraform(this._cseResourceType),
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
      execution_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._executionTypes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      playbook_id: {
        value: cdktf.stringToHclTerraform(this._playbookId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
