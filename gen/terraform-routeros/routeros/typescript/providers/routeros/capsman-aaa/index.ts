// https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CapsmanAaaConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#___path___ CapsmanAaa#___path___}
  */
  readonly path?: string;
  /**
  * Format of how the 'called-id' identifier will be passed to RADIUS. When configuring radius server clients, you can specify 'called-id' in order to separate multiple entires.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#called_format CapsmanAaa#called_format}
  */
  readonly calledFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#id CapsmanAaa#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * When RADIUS accounting is used, Access Point periodically sends accounting information updates to the RADIUS server. This property specifies the default update interval that can be overridden by the RADIUS server using the Acct-Interim-Interval attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#interim_update CapsmanAaa#interim_update}
  */
  readonly interimUpdate?: string;
  /**
  * If this value is set to a time interval, the Access Point will cache RADIUS MAC authentication responses for a specified time, and will not contact the RADIUS server if matching cache entry already exists. The value disabled will disable the cache, Access Point will always contact the RADIUS server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#mac_caching CapsmanAaa#mac_caching}
  */
  readonly macCaching?: string;
  /**
  * Controls how the MAC address of the client is encoded by Access Point in the User-Name attribute of the MAC authentication and MAC accounting RADIUS requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#mac_format CapsmanAaa#mac_format}
  */
  readonly macFormat?: string;
  /**
  * By default Access Point uses an empty password, when sending Access-Request during MAC authentication. When this property is set to as-username-and-password, Access Point will use the same value for the User-Password attribute as for the User-Name attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#mac_mode CapsmanAaa#mac_mode}
  */
  readonly macMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa routeros_capsman_aaa}
*/
export class CapsmanAaa extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_capsman_aaa";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CapsmanAaa resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CapsmanAaa to import
  * @param importFromId The id of the existing CapsmanAaa that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CapsmanAaa to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_capsman_aaa", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.98.0/docs/resources/capsman_aaa routeros_capsman_aaa} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CapsmanAaaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CapsmanAaaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_capsman_aaa',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.98.0',
        providerVersionConstraint: '1.98.0'
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
    this._calledFormat = config.calledFormat;
    this._id = config.id;
    this._interimUpdate = config.interimUpdate;
    this._macCaching = config.macCaching;
    this._macFormat = config.macFormat;
    this._macMode = config.macMode;
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

  // called_format - computed: false, optional: true, required: false
  private _calledFormat?: string; 
  public get calledFormat() {
    return this.getStringAttribute('called_format');
  }
  public set calledFormat(value: string) {
    this._calledFormat = value;
  }
  public resetCalledFormat() {
    this._calledFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get calledFormatInput() {
    return this._calledFormat;
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

  // interim_update - computed: true, optional: true, required: false
  private _interimUpdate?: string; 
  public get interimUpdate() {
    return this.getStringAttribute('interim_update');
  }
  public set interimUpdate(value: string) {
    this._interimUpdate = value;
  }
  public resetInterimUpdate() {
    this._interimUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interimUpdateInput() {
    return this._interimUpdate;
  }

  // mac_caching - computed: true, optional: true, required: false
  private _macCaching?: string; 
  public get macCaching() {
    return this.getStringAttribute('mac_caching');
  }
  public set macCaching(value: string) {
    this._macCaching = value;
  }
  public resetMacCaching() {
    this._macCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macCachingInput() {
    return this._macCaching;
  }

  // mac_format - computed: false, optional: true, required: false
  private _macFormat?: string; 
  public get macFormat() {
    return this.getStringAttribute('mac_format');
  }
  public set macFormat(value: string) {
    this._macFormat = value;
  }
  public resetMacFormat() {
    this._macFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macFormatInput() {
    return this._macFormat;
  }

  // mac_mode - computed: false, optional: true, required: false
  private _macMode?: string; 
  public get macMode() {
    return this.getStringAttribute('mac_mode');
  }
  public set macMode(value: string) {
    this._macMode = value;
  }
  public resetMacMode() {
    this._macMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macModeInput() {
    return this._macMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      called_format: cdktf.stringToTerraform(this._calledFormat),
      id: cdktf.stringToTerraform(this._id),
      interim_update: cdktf.stringToTerraform(this._interimUpdate),
      mac_caching: cdktf.stringToTerraform(this._macCaching),
      mac_format: cdktf.stringToTerraform(this._macFormat),
      mac_mode: cdktf.stringToTerraform(this._macMode),
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
      called_format: {
        value: cdktf.stringToHclTerraform(this._calledFormat),
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
      interim_update: {
        value: cdktf.stringToHclTerraform(this._interimUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_caching: {
        value: cdktf.stringToHclTerraform(this._macCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_format: {
        value: cdktf.stringToHclTerraform(this._macFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mac_mode: {
        value: cdktf.stringToHclTerraform(this._macMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
