// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AaagroupVpnurlBindingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding#gotopriorityexpression AaagroupVpnurlBinding#gotopriorityexpression}
  */
  readonly gotopriorityexpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding#groupname AaagroupVpnurlBinding#groupname}
  */
  readonly groupname: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding#id AaagroupVpnurlBinding#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding#urlname AaagroupVpnurlBinding#urlname}
  */
  readonly urlname: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding citrixadc_aaagroup_vpnurl_binding}
*/
export class AaagroupVpnurlBinding extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_aaagroup_vpnurl_binding";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AaagroupVpnurlBinding resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AaagroupVpnurlBinding to import
  * @param importFromId The id of the existing AaagroupVpnurlBinding that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AaagroupVpnurlBinding to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_aaagroup_vpnurl_binding", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/aaagroup_vpnurl_binding citrixadc_aaagroup_vpnurl_binding} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AaagroupVpnurlBindingConfig
  */
  public constructor(scope: Construct, id: string, config: AaagroupVpnurlBindingConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_aaagroup_vpnurl_binding',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._gotopriorityexpression = config.gotopriorityexpression;
    this._groupname = config.groupname;
    this._id = config.id;
    this._urlname = config.urlname;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // gotopriorityexpression - computed: true, optional: true, required: false
  private _gotopriorityexpression?: string; 
  public get gotopriorityexpression() {
    return this.getStringAttribute('gotopriorityexpression');
  }
  public set gotopriorityexpression(value: string) {
    this._gotopriorityexpression = value;
  }
  public resetGotopriorityexpression() {
    this._gotopriorityexpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gotopriorityexpressionInput() {
    return this._gotopriorityexpression;
  }

  // groupname - computed: false, optional: false, required: true
  private _groupname?: string; 
  public get groupname() {
    return this.getStringAttribute('groupname');
  }
  public set groupname(value: string) {
    this._groupname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupnameInput() {
    return this._groupname;
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

  // urlname - computed: false, optional: false, required: true
  private _urlname?: string; 
  public get urlname() {
    return this.getStringAttribute('urlname');
  }
  public set urlname(value: string) {
    this._urlname = value;
  }
  // Temporarily expose input value. Use with caution.
  public get urlnameInput() {
    return this._urlname;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      gotopriorityexpression: cdktf.stringToTerraform(this._gotopriorityexpression),
      groupname: cdktf.stringToTerraform(this._groupname),
      id: cdktf.stringToTerraform(this._id),
      urlname: cdktf.stringToTerraform(this._urlname),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      gotopriorityexpression: {
        value: cdktf.stringToHclTerraform(this._gotopriorityexpression),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      groupname: {
        value: cdktf.stringToHclTerraform(this._groupname),
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
      urlname: {
        value: cdktf.stringToHclTerraform(this._urlname),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
