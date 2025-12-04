// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanRatesConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#___path___ CapsmanRates#___path___}
  */
  readonly path?: string;
  /**
  * List of basic rates. Client will connect to AP only if it supports all basic rates announced by the AP. AP will establish WDS link only if it supports all basic rates of the other AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#basic CapsmanRates#basic}
  */
  readonly basic?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#comment CapsmanRates#comment}
  */
  readonly comment?: string;
  /**
  * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#ht_basic_mcs CapsmanRates#ht_basic_mcs}
  */
  readonly htBasicMcs?: string[];
  /**
  * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#ht_supported_mcs CapsmanRates#ht_supported_mcs}
  */
  readonly htSupportedMcs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#id CapsmanRates#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Changing the name of this resource will force it to be recreated.
  * 	> The links of other configuration properties to this resource may be lost!
  * 	> Changing the name of the resource outside of a Terraform will result in a loss of control integrity for that resource!
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#name CapsmanRates#name}
  */
  readonly name: string;
  /**
  * List of supported rates. Two devices will communicate only using rates that are supported by both devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#supported CapsmanRates#supported}
  */
  readonly supported?: string[];
  /**
  * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You can set MCS interval for each of Spatial Stream
  *   * none - will not use selected
  *   * MCS 0-7 - client must support MCS-0 to MCS-7
  *   * MCS 0-8 - client must support MCS-0 to MCS-8
  *   * MCS 0-9 - client must support MCS-0 to MCS-9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#vht_basic_mcs CapsmanRates#vht_basic_mcs}
  */
  readonly vhtBasicMcs?: string;
  /**
  * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can set MCS interval for each of Spatial Stream
  *   * none - will not use selected
  *   * MCS 0-7 - devices will advertise as supported MCS-0 to MCS-7
  *   * MCS 0-8 - devices will advertise as supported MCS-0 to MCS-8
  *   * MCS 0-9 - devices will advertise as supported MCS-0 to MCS-9
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#vht_supported_mcs CapsmanRates#vht_supported_mcs}
  */
  readonly vhtSupportedMcs?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates routeros_capsman_rates}
*/
export class CapsmanRates extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_rates";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanRates resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanRates to import
  * @param importFromId The id of the existing CapsmanRates that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanRates to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_rates", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/capsman_rates routeros_capsman_rates} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanRatesConfig
  */
  public constructor(scope: Construct, id: string, config: CapsmanRatesConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_rates',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._basic = config.basic;
    this._comment = config.comment;
    this._htBasicMcs = config.htBasicMcs;
    this._htSupportedMcs = config.htSupportedMcs;
    this._id = config.id;
    this._name = config.name;
    this._supported = config.supported;
    this._vhtBasicMcs = config.vhtBasicMcs;
    this._vhtSupportedMcs = config.vhtSupportedMcs;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // basic - computed: false, optional: true, required: false
  private _basic?: string[]; 
  public get basic() {
    return cdktf.Fn.tolist(this.getListAttribute('basic'));
  }
  public set basic(value: string[]) {
    this._basic = value;
  }
  public resetBasic() {
    this._basic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // ht_basic_mcs - computed: true, optional: true, required: false
  private _htBasicMcs?: string[]; 
  public get htBasicMcs() {
    return cdktf.Fn.tolist(this.getListAttribute('ht_basic_mcs'));
  }
  public set htBasicMcs(value: string[]) {
    this._htBasicMcs = value;
  }
  public resetHtBasicMcs() {
    this._htBasicMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htBasicMcsInput() {
    return this._htBasicMcs;
  }

  // ht_supported_mcs - computed: true, optional: true, required: false
  private _htSupportedMcs?: string[]; 
  public get htSupportedMcs() {
    return cdktf.Fn.tolist(this.getListAttribute('ht_supported_mcs'));
  }
  public set htSupportedMcs(value: string[]) {
    this._htSupportedMcs = value;
  }
  public resetHtSupportedMcs() {
    this._htSupportedMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htSupportedMcsInput() {
    return this._htSupportedMcs;
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

  // supported - computed: false, optional: true, required: false
  private _supported?: string[]; 
  public get supported() {
    return cdktf.Fn.tolist(this.getListAttribute('supported'));
  }
  public set supported(value: string[]) {
    this._supported = value;
  }
  public resetSupported() {
    this._supported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedInput() {
    return this._supported;
  }

  // vht_basic_mcs - computed: true, optional: true, required: false
  private _vhtBasicMcs?: string; 
  public get vhtBasicMcs() {
    return this.getStringAttribute('vht_basic_mcs');
  }
  public set vhtBasicMcs(value: string) {
    this._vhtBasicMcs = value;
  }
  public resetVhtBasicMcs() {
    this._vhtBasicMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhtBasicMcsInput() {
    return this._vhtBasicMcs;
  }

  // vht_supported_mcs - computed: true, optional: true, required: false
  private _vhtSupportedMcs?: string; 
  public get vhtSupportedMcs() {
    return this.getStringAttribute('vht_supported_mcs');
  }
  public set vhtSupportedMcs(value: string) {
    this._vhtSupportedMcs = value;
  }
  public resetVhtSupportedMcs() {
    this._vhtSupportedMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhtSupportedMcsInput() {
    return this._vhtSupportedMcs;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      basic: cdktf.listMapper(cdktf.stringToTerraform, false)(this._basic),
      comment: cdktf.stringToTerraform(this._comment),
      ht_basic_mcs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._htBasicMcs),
      ht_supported_mcs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._htSupportedMcs),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      supported: cdktf.listMapper(cdktf.stringToTerraform, false)(this._supported),
      vht_basic_mcs: cdktf.stringToTerraform(this._vhtBasicMcs),
      vht_supported_mcs: cdktf.stringToTerraform(this._vhtSupportedMcs),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._basic),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ht_basic_mcs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._htBasicMcs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ht_supported_mcs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._htSupportedMcs),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._supported),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vht_basic_mcs: {
        value: cdktf.stringToHclTerraform(this._vhtBasicMcs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vht_supported_mcs: {
        value: cdktf.stringToHclTerraform(this._vhtSupportedMcs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
