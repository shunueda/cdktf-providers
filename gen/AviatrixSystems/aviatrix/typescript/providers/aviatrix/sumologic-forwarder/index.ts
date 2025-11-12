// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SumologicForwarderConfig extends cdktf.TerraformMetaArguments {
  /**
  * Access ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#access_id SumologicForwarder#access_id}
  */
  readonly accessId: string;
  /**
  * Access key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#access_key SumologicForwarder#access_key}
  */
  readonly accessKey: string;
  /**
  * Custom configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#custom_configuration SumologicForwarder#custom_configuration}
  */
  readonly customConfiguration?: string;
  /**
  * List of excluded gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#excluded_gateways SumologicForwarder#excluded_gateways}
  */
  readonly excludedGateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#id SumologicForwarder#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Source category.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#source_category SumologicForwarder#source_category}
  */
  readonly sourceCategory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder aviatrix_sumologic_forwarder}
*/
export class SumologicForwarder extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_sumologic_forwarder";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SumologicForwarder resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SumologicForwarder to import
  * @param importFromId The id of the existing SumologicForwarder that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SumologicForwarder to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_sumologic_forwarder", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/sumologic_forwarder aviatrix_sumologic_forwarder} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SumologicForwarderConfig
  */
  public constructor(scope: Construct, id: string, config: SumologicForwarderConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_sumologic_forwarder',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessId = config.accessId;
    this._accessKey = config.accessKey;
    this._customConfiguration = config.customConfiguration;
    this._excludedGateways = config.excludedGateways;
    this._id = config.id;
    this._sourceCategory = config.sourceCategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: false, required: true
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_key - computed: false, optional: false, required: true
  private _accessKey?: string; 
  public get accessKey() {
    return this.getStringAttribute('access_key');
  }
  public set accessKey(value: string) {
    this._accessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyInput() {
    return this._accessKey;
  }

  // custom_configuration - computed: false, optional: true, required: false
  private _customConfiguration?: string; 
  public get customConfiguration() {
    return this.getStringAttribute('custom_configuration');
  }
  public set customConfiguration(value: string) {
    this._customConfiguration = value;
  }
  public resetCustomConfiguration() {
    this._customConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customConfigurationInput() {
    return this._customConfiguration;
  }

  // excluded_gateways - computed: false, optional: true, required: false
  private _excludedGateways?: string[]; 
  public get excludedGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_gateways'));
  }
  public set excludedGateways(value: string[]) {
    this._excludedGateways = value;
  }
  public resetExcludedGateways() {
    this._excludedGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGatewaysInput() {
    return this._excludedGateways;
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

  // source_category - computed: false, optional: true, required: false
  private _sourceCategory?: string; 
  public get sourceCategory() {
    return this.getStringAttribute('source_category');
  }
  public set sourceCategory(value: string) {
    this._sourceCategory = value;
  }
  public resetSourceCategory() {
    this._sourceCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceCategoryInput() {
    return this._sourceCategory;
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
      access_id: cdktf.stringToTerraform(this._accessId),
      access_key: cdktf.stringToTerraform(this._accessKey),
      custom_configuration: cdktf.stringToTerraform(this._customConfiguration),
      excluded_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedGateways),
      id: cdktf.stringToTerraform(this._id),
      source_category: cdktf.stringToTerraform(this._sourceCategory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_id: {
        value: cdktf.stringToHclTerraform(this._accessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_key: {
        value: cdktf.stringToHclTerraform(this._accessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_configuration: {
        value: cdktf.stringToHclTerraform(this._customConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedGateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_category: {
        value: cdktf.stringToHclTerraform(this._sourceCategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
