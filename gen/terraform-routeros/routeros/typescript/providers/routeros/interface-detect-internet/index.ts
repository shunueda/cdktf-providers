// https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceDetectInternetConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#___path___ InterfaceDetectInternet#___path___}
  */
  readonly path?: string;
  /**
  * All interfaces in the list will be monitored by Detect Internet.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#detect_interface_list InterfaceDetectInternet#detect_interface_list}
  */
  readonly detectInterfaceList?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#id InterfaceDetectInternet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Interfaces with state Internet will be dynamically added to this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#internet_interface_list InterfaceDetectInternet#internet_interface_list}
  */
  readonly internetInterfaceList?: string;
  /**
  * Interfaces with state Lan will be dynamically added to this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#lan_interface_list InterfaceDetectInternet#lan_interface_list}
  */
  readonly lanInterfaceList?: string;
  /**
  * Interfaces with state Wan will be dynamically added to this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#wan_interface_list InterfaceDetectInternet#wan_interface_list}
  */
  readonly wanInterfaceList?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet routeros_interface_detect_internet}
*/
export class InterfaceDetectInternet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_detect_internet";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceDetectInternet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceDetectInternet to import
  * @param importFromId The id of the existing InterfaceDetectInternet that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceDetectInternet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_detect_internet", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.91.0/docs/resources/interface_detect_internet routeros_interface_detect_internet} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceDetectInternetConfig = {}
  */
  public constructor(scope: Construct, id: string, config: InterfaceDetectInternetConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_detect_internet',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.91.0',
        providerVersionConstraint: '1.91.0'
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
    this._detectInterfaceList = config.detectInterfaceList;
    this._id = config.id;
    this._internetInterfaceList = config.internetInterfaceList;
    this._lanInterfaceList = config.lanInterfaceList;
    this._wanInterfaceList = config.wanInterfaceList;
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

  // detect_interface_list - computed: false, optional: true, required: false
  private _detectInterfaceList?: string; 
  public get detectInterfaceList() {
    return this.getStringAttribute('detect_interface_list');
  }
  public set detectInterfaceList(value: string) {
    this._detectInterfaceList = value;
  }
  public resetDetectInterfaceList() {
    this._detectInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectInterfaceListInput() {
    return this._detectInterfaceList;
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

  // internet_interface_list - computed: false, optional: true, required: false
  private _internetInterfaceList?: string; 
  public get internetInterfaceList() {
    return this.getStringAttribute('internet_interface_list');
  }
  public set internetInterfaceList(value: string) {
    this._internetInterfaceList = value;
  }
  public resetInternetInterfaceList() {
    this._internetInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internetInterfaceListInput() {
    return this._internetInterfaceList;
  }

  // lan_interface_list - computed: false, optional: true, required: false
  private _lanInterfaceList?: string; 
  public get lanInterfaceList() {
    return this.getStringAttribute('lan_interface_list');
  }
  public set lanInterfaceList(value: string) {
    this._lanInterfaceList = value;
  }
  public resetLanInterfaceList() {
    this._lanInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lanInterfaceListInput() {
    return this._lanInterfaceList;
  }

  // wan_interface_list - computed: false, optional: true, required: false
  private _wanInterfaceList?: string; 
  public get wanInterfaceList() {
    return this.getStringAttribute('wan_interface_list');
  }
  public set wanInterfaceList(value: string) {
    this._wanInterfaceList = value;
  }
  public resetWanInterfaceList() {
    this._wanInterfaceList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanInterfaceListInput() {
    return this._wanInterfaceList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      detect_interface_list: cdktf.stringToTerraform(this._detectInterfaceList),
      id: cdktf.stringToTerraform(this._id),
      internet_interface_list: cdktf.stringToTerraform(this._internetInterfaceList),
      lan_interface_list: cdktf.stringToTerraform(this._lanInterfaceList),
      wan_interface_list: cdktf.stringToTerraform(this._wanInterfaceList),
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
      detect_interface_list: {
        value: cdktf.stringToHclTerraform(this._detectInterfaceList),
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
      internet_interface_list: {
        value: cdktf.stringToHclTerraform(this._internetInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lan_interface_list: {
        value: cdktf.stringToHclTerraform(this._lanInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wan_interface_list: {
        value: cdktf.stringToHclTerraform(this._wanInterfaceList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
