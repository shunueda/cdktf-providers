// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/gateway_setup_tokens
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamGatewaySetupTokensConfig extends cdktf.TerraformMetaArguments {
  /**
  * If defined, results only contain resources that include the specified value in the `name` field.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/gateway_setup_tokens#description_contains DataOktapamGatewaySetupTokens#description_contains}
  */
  readonly descriptionContains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/gateway_setup_tokens#id DataOktapamGatewaySetupTokens#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/gateway_setup_tokens oktapam_gateway_setup_tokens}
*/
export class DataOktapamGatewaySetupTokens extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_gateway_setup_tokens";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamGatewaySetupTokens resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamGatewaySetupTokens to import
  * @param importFromId The id of the existing DataOktapamGatewaySetupTokens that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/gateway_setup_tokens#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamGatewaySetupTokens to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_gateway_setup_tokens", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/gateway_setup_tokens oktapam_gateway_setup_tokens} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamGatewaySetupTokensConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOktapamGatewaySetupTokensConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'oktapam_gateway_setup_tokens',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2',
        providerVersionConstraint: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._descriptionContains = config.descriptionContains;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description_contains - computed: false, optional: true, required: false
  private _descriptionContains?: string; 
  public get descriptionContains() {
    return this.getStringAttribute('description_contains');
  }
  public set descriptionContains(value: string) {
    this._descriptionContains = value;
  }
  public resetDescriptionContains() {
    this._descriptionContains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionContainsInput() {
    return this._descriptionContains;
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

  // ids - computed: true, optional: false, required: false
  public get ids() {
    return this.getListAttribute('ids');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description_contains: cdktf.stringToTerraform(this._descriptionContains),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description_contains: {
        value: cdktf.stringToHclTerraform(this._descriptionContains),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
