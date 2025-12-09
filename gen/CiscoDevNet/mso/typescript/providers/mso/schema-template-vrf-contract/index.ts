// https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SchemaTemplateVrfContractConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#contract_name SchemaTemplateVrfContract#contract_name}
  */
  readonly contractName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#contract_schema_id SchemaTemplateVrfContract#contract_schema_id}
  */
  readonly contractSchemaId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#contract_template_name SchemaTemplateVrfContract#contract_template_name}
  */
  readonly contractTemplateName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#id SchemaTemplateVrfContract#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#relationship_type SchemaTemplateVrfContract#relationship_type}
  */
  readonly relationshipType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#schema_id SchemaTemplateVrfContract#schema_id}
  */
  readonly schemaId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#template_name SchemaTemplateVrfContract#template_name}
  */
  readonly templateName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#vrf_name SchemaTemplateVrfContract#vrf_name}
  */
  readonly vrfName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract mso_schema_template_vrf_contract}
*/
export class SchemaTemplateVrfContract extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "mso_schema_template_vrf_contract";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SchemaTemplateVrfContract resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SchemaTemplateVrfContract to import
  * @param importFromId The id of the existing SchemaTemplateVrfContract that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SchemaTemplateVrfContract to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "mso_schema_template_vrf_contract", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/mso/1.7.0/docs/resources/schema_template_vrf_contract mso_schema_template_vrf_contract} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SchemaTemplateVrfContractConfig
  */
  public constructor(scope: Construct, id: string, config: SchemaTemplateVrfContractConfig) {
    super(scope, id, {
      terraformResourceType: 'mso_schema_template_vrf_contract',
      terraformGeneratorMetadata: {
        providerName: 'mso',
        providerVersion: '1.7.0',
        providerVersionConstraint: '1.7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contractName = config.contractName;
    this._contractSchemaId = config.contractSchemaId;
    this._contractTemplateName = config.contractTemplateName;
    this._id = config.id;
    this._relationshipType = config.relationshipType;
    this._schemaId = config.schemaId;
    this._templateName = config.templateName;
    this._vrfName = config.vrfName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contract_name - computed: false, optional: false, required: true
  private _contractName?: string; 
  public get contractName() {
    return this.getStringAttribute('contract_name');
  }
  public set contractName(value: string) {
    this._contractName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contractNameInput() {
    return this._contractName;
  }

  // contract_schema_id - computed: true, optional: true, required: false
  private _contractSchemaId?: string; 
  public get contractSchemaId() {
    return this.getStringAttribute('contract_schema_id');
  }
  public set contractSchemaId(value: string) {
    this._contractSchemaId = value;
  }
  public resetContractSchemaId() {
    this._contractSchemaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractSchemaIdInput() {
    return this._contractSchemaId;
  }

  // contract_template_name - computed: true, optional: true, required: false
  private _contractTemplateName?: string; 
  public get contractTemplateName() {
    return this.getStringAttribute('contract_template_name');
  }
  public set contractTemplateName(value: string) {
    this._contractTemplateName = value;
  }
  public resetContractTemplateName() {
    this._contractTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contractTemplateNameInput() {
    return this._contractTemplateName;
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

  // relationship_type - computed: false, optional: false, required: true
  private _relationshipType?: string; 
  public get relationshipType() {
    return this.getStringAttribute('relationship_type');
  }
  public set relationshipType(value: string) {
    this._relationshipType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get relationshipTypeInput() {
    return this._relationshipType;
  }

  // schema_id - computed: false, optional: false, required: true
  private _schemaId?: string; 
  public get schemaId() {
    return this.getStringAttribute('schema_id');
  }
  public set schemaId(value: string) {
    this._schemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaIdInput() {
    return this._schemaId;
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

  // vrf_name - computed: false, optional: false, required: true
  private _vrfName?: string; 
  public get vrfName() {
    return this.getStringAttribute('vrf_name');
  }
  public set vrfName(value: string) {
    this._vrfName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfNameInput() {
    return this._vrfName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contract_name: cdktf.stringToTerraform(this._contractName),
      contract_schema_id: cdktf.stringToTerraform(this._contractSchemaId),
      contract_template_name: cdktf.stringToTerraform(this._contractTemplateName),
      id: cdktf.stringToTerraform(this._id),
      relationship_type: cdktf.stringToTerraform(this._relationshipType),
      schema_id: cdktf.stringToTerraform(this._schemaId),
      template_name: cdktf.stringToTerraform(this._templateName),
      vrf_name: cdktf.stringToTerraform(this._vrfName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contract_name: {
        value: cdktf.stringToHclTerraform(this._contractName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_schema_id: {
        value: cdktf.stringToHclTerraform(this._contractSchemaId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      contract_template_name: {
        value: cdktf.stringToHclTerraform(this._contractTemplateName),
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
      relationship_type: {
        value: cdktf.stringToHclTerraform(this._relationshipType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema_id: {
        value: cdktf.stringToHclTerraform(this._schemaId),
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
      vrf_name: {
        value: cdktf.stringToHclTerraform(this._vrfName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
