// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface FqdnPassThroughConfig extends cdktf.TerraformMetaArguments {
  /**
  * Gateway to apply FQDN pass-through rules to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through#gw_name FqdnPassThrough#gw_name}
  */
  readonly gwName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through#id FqdnPassThrough#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * CIDRs to allow originating requests to ignore FQDN filtering rules.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through#pass_through_cidrs FqdnPassThrough#pass_through_cidrs}
  */
  readonly passThroughCidrs: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through aviatrix_fqdn_pass_through}
*/
export class FqdnPassThrough extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_fqdn_pass_through";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a FqdnPassThrough resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the FqdnPassThrough to import
  * @param importFromId The id of the existing FqdnPassThrough that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the FqdnPassThrough to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_fqdn_pass_through", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/fqdn_pass_through aviatrix_fqdn_pass_through} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options FqdnPassThroughConfig
  */
  public constructor(scope: Construct, id: string, config: FqdnPassThroughConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_fqdn_pass_through',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gwName = config.gwName;
    this._id = config.id;
    this._passThroughCidrs = config.passThroughCidrs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
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

  // pass_through_cidrs - computed: false, optional: false, required: true
  private _passThroughCidrs?: string[]; 
  public get passThroughCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('pass_through_cidrs'));
  }
  public set passThroughCidrs(value: string[]) {
    this._passThroughCidrs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passThroughCidrsInput() {
    return this._passThroughCidrs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gw_name: cdktf.stringToTerraform(this._gwName),
      id: cdktf.stringToTerraform(this._id),
      pass_through_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._passThroughCidrs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
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
      pass_through_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._passThroughCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
