// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ContractSubjectFilterConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#action ContractSubjectFilter#action}
  */
  readonly action?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#annotation ContractSubjectFilter#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#contract_subject_dn ContractSubjectFilter#contract_subject_dn}
  */
  readonly contractSubjectDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#description ContractSubjectFilter#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#directives ContractSubjectFilter#directives}
  */
  readonly directives?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#filter_dn ContractSubjectFilter#filter_dn}
  */
  readonly filterDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#id ContractSubjectFilter#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#priority_override ContractSubjectFilter#priority_override}
  */
  readonly priorityOverride?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter aci_contract_subject_filter}
*/
export class ContractSubjectFilter extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_contract_subject_filter";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ContractSubjectFilter resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ContractSubjectFilter to import
  * @param importFromId The id of the existing ContractSubjectFilter that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ContractSubjectFilter to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_contract_subject_filter", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/contract_subject_filter aci_contract_subject_filter} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ContractSubjectFilterConfig
  */
  public constructor(scope: Construct, id: string, config: ContractSubjectFilterConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_contract_subject_filter',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0',
        providerVersionConstraint: '2.18.0'
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
    this._annotation = config.annotation;
    this._contractSubjectDn = config.contractSubjectDn;
    this._description = config.description;
    this._directives = config.directives;
    this._filterDn = config.filterDn;
    this._id = config.id;
    this._priorityOverride = config.priorityOverride;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // contract_subject_dn - computed: false, optional: false, required: true
  private _contractSubjectDn?: string; 
  public get contractSubjectDn() {
    return this.getStringAttribute('contract_subject_dn');
  }
  public set contractSubjectDn(value: string) {
    this._contractSubjectDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractSubjectDnInput() {
    return this._contractSubjectDn;
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

  // directives - computed: true, optional: true, required: false
  private _directives?: string[]; 
  public get directives() {
    return this.getListAttribute('directives');
  }
  public set directives(value: string[]) {
    this._directives = value;
  }
  public resetDirectives() {
    this._directives = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directivesInput() {
    return this._directives;
  }

  // filter_dn - computed: false, optional: false, required: true
  private _filterDn?: string; 
  public get filterDn() {
    return this.getStringAttribute('filter_dn');
  }
  public set filterDn(value: string) {
    this._filterDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDnInput() {
    return this._filterDn;
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

  // priority_override - computed: true, optional: true, required: false
  private _priorityOverride?: string; 
  public get priorityOverride() {
    return this.getStringAttribute('priority_override');
  }
  public set priorityOverride(value: string) {
    this._priorityOverride = value;
  }
  public resetPriorityOverride() {
    this._priorityOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityOverrideInput() {
    return this._priorityOverride;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      annotation: cdktf.stringToTerraform(this._annotation),
      contract_subject_dn: cdktf.stringToTerraform(this._contractSubjectDn),
      description: cdktf.stringToTerraform(this._description),
      directives: cdktf.listMapper(cdktf.stringToTerraform, false)(this._directives),
      filter_dn: cdktf.stringToTerraform(this._filterDn),
      id: cdktf.stringToTerraform(this._id),
      priority_override: cdktf.stringToTerraform(this._priorityOverride),
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
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_subject_dn: {
        value: cdktf.stringToHclTerraform(this._contractSubjectDn),
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
      directives: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._directives),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      filter_dn: {
        value: cdktf.stringToHclTerraform(this._filterDn),
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
      priority_override: {
        value: cdktf.stringToHclTerraform(this._priorityOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
