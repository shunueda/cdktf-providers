// https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IpsecProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies descriptive text that identifies the IPsec interface tunnel profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile#description IpsecProfile#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile#id IpsecProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Displays the name of the IPsec interface tunnel profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile#name IpsecProfile#name}
  */
  readonly name: string;
  /**
  * Specifies the profile from which this profile inherits settings. The default is the system-supplied `/Common/ipsec` profile
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile#parent_profile IpsecProfile#parent_profile}
  */
  readonly parentProfile?: string;
  /**
  * Specifies the traffic selector for the IPsec interface tunnel to which the profile is applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile#traffic_selector IpsecProfile#traffic_selector}
  */
  readonly trafficSelector?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile bigip_ipsec_profile}
*/
export class IpsecProfile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigip_ipsec_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a IpsecProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the IpsecProfile to import
  * @param importFromId The id of the existing IpsecProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the IpsecProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigip_ipsec_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigip/1.24.1/docs/resources/ipsec_profile bigip_ipsec_profile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IpsecProfileConfig
  */
  public constructor(scope: Construct, id: string, config: IpsecProfileConfig) {
    super(scope, id, {
      terraformResourceType: 'bigip_ipsec_profile',
      terraformGeneratorMetadata: {
        providerName: 'bigip',
        providerVersion: '1.24.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._parentProfile = config.parentProfile;
    this._trafficSelector = config.trafficSelector;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // parent_profile - computed: false, optional: true, required: false
  private _parentProfile?: string; 
  public get parentProfile() {
    return this.getStringAttribute('parent_profile');
  }
  public set parentProfile(value: string) {
    this._parentProfile = value;
  }
  public resetParentProfile() {
    this._parentProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentProfileInput() {
    return this._parentProfile;
  }

  // traffic_selector - computed: true, optional: true, required: false
  private _trafficSelector?: string; 
  public get trafficSelector() {
    return this.getStringAttribute('traffic_selector');
  }
  public set trafficSelector(value: string) {
    this._trafficSelector = value;
  }
  public resetTrafficSelector() {
    this._trafficSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trafficSelectorInput() {
    return this._trafficSelector;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      parent_profile: cdktf.stringToTerraform(this._parentProfile),
      traffic_selector: cdktf.stringToTerraform(this._trafficSelector),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_profile: {
        value: cdktf.stringToHclTerraform(this._parentProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      traffic_selector: {
        value: cdktf.stringToHclTerraform(this._trafficSelector),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
