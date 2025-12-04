// https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataHsdpConnectMdmPropositionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition#error_on_not_found DataHsdpConnectMdmProposition#error_on_not_found}
  */
  readonly errorOnNotFound?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition#id DataHsdpConnectMdmProposition#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition#name DataHsdpConnectMdmProposition#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition#organization_id DataHsdpConnectMdmProposition#organization_id}
  */
  readonly organizationId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition hsdp_connect_mdm_proposition}
*/
export class DataHsdpConnectMdmProposition extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "hsdp_connect_mdm_proposition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataHsdpConnectMdmProposition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataHsdpConnectMdmProposition to import
  * @param importFromId The id of the existing DataHsdpConnectMdmProposition that should be imported. Refer to the {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataHsdpConnectMdmProposition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "hsdp_connect_mdm_proposition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/philips-software/hsdp/1.0.0/docs/data-sources/connect_mdm_proposition hsdp_connect_mdm_proposition} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataHsdpConnectMdmPropositionConfig
  */
  public constructor(scope: Construct, id: string, config: DataHsdpConnectMdmPropositionConfig) {
    super(scope, id, {
      terraformResourceType: 'hsdp_connect_mdm_proposition',
      terraformGeneratorMetadata: {
        providerName: 'hsdp',
        providerVersion: '1.0.0',
        providerVersionConstraint: '1.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._errorOnNotFound = config.errorOnNotFound;
    this._id = config.id;
    this._name = config.name;
    this._organizationId = config.organizationId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // error_on_not_found - computed: false, optional: true, required: false
  private _errorOnNotFound?: boolean | cdktf.IResolvable; 
  public get errorOnNotFound() {
    return this.getBooleanAttribute('error_on_not_found');
  }
  public set errorOnNotFound(value: boolean | cdktf.IResolvable) {
    this._errorOnNotFound = value;
  }
  public resetErrorOnNotFound() {
    this._errorOnNotFound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnNotFoundInput() {
    return this._errorOnNotFound;
  }

  // found - computed: true, optional: false, required: false
  public get found() {
    return this.getBooleanAttribute('found');
  }

  // global_reference_id - computed: true, optional: false, required: false
  public get globalReferenceId() {
    return this.getStringAttribute('global_reference_id');
  }

  // guid - computed: true, optional: false, required: false
  public get guid() {
    return this.getStringAttribute('guid');
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

  // organization_id - computed: false, optional: false, required: true
  private _organizationId?: string; 
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }
  public set organizationId(value: string) {
    this._organizationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationIdInput() {
    return this._organizationId;
  }

  // proposition_guid - computed: true, optional: false, required: false
  public get propositionGuid() {
    return this.getStringAttribute('proposition_guid');
  }

  // proposition_id - computed: true, optional: false, required: false
  public get propositionId() {
    return this.getStringAttribute('proposition_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      error_on_not_found: cdktf.booleanToTerraform(this._errorOnNotFound),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      organization_id: cdktf.stringToTerraform(this._organizationId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      error_on_not_found: {
        value: cdktf.booleanToHclTerraform(this._errorOnNotFound),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      organization_id: {
        value: cdktf.stringToHclTerraform(this._organizationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
