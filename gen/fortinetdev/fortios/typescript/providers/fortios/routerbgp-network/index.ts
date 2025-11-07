// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RouterbgpNetworkConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#backdoor RouterbgpNetwork#backdoor}
  */
  readonly backdoor?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#fosid RouterbgpNetwork#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#id RouterbgpNetwork#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#network_import_check RouterbgpNetwork#network_import_check}
  */
  readonly networkImportCheck?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#prefix RouterbgpNetwork#prefix}
  */
  readonly prefix: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#prefix_name RouterbgpNetwork#prefix_name}
  */
  readonly prefixName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#route_map RouterbgpNetwork#route_map}
  */
  readonly routeMap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#vdomparam RouterbgpNetwork#vdomparam}
  */
  readonly vdomparam?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network fortios_routerbgp_network}
*/
export class RouterbgpNetwork extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_routerbgp_network";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RouterbgpNetwork resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RouterbgpNetwork to import
  * @param importFromId The id of the existing RouterbgpNetwork that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RouterbgpNetwork to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_routerbgp_network", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/routerbgp_network fortios_routerbgp_network} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RouterbgpNetworkConfig
  */
  public constructor(scope: Construct, id: string, config: RouterbgpNetworkConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_routerbgp_network',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backdoor = config.backdoor;
    this._fosid = config.fosid;
    this._id = config.id;
    this._networkImportCheck = config.networkImportCheck;
    this._prefix = config.prefix;
    this._prefixName = config.prefixName;
    this._routeMap = config.routeMap;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backdoor - computed: true, optional: true, required: false
  private _backdoor?: string; 
  public get backdoor() {
    return this.getStringAttribute('backdoor');
  }
  public set backdoor(value: string) {
    this._backdoor = value;
  }
  public resetBackdoor() {
    this._backdoor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backdoorInput() {
    return this._backdoor;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // network_import_check - computed: true, optional: true, required: false
  private _networkImportCheck?: string; 
  public get networkImportCheck() {
    return this.getStringAttribute('network_import_check');
  }
  public set networkImportCheck(value: string) {
    this._networkImportCheck = value;
  }
  public resetNetworkImportCheck() {
    this._networkImportCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkImportCheckInput() {
    return this._networkImportCheck;
  }

  // prefix - computed: false, optional: false, required: true
  private _prefix?: string; 
  public get prefix() {
    return this.getStringAttribute('prefix');
  }
  public set prefix(value: string) {
    this._prefix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixInput() {
    return this._prefix;
  }

  // prefix_name - computed: false, optional: true, required: false
  private _prefixName?: string; 
  public get prefixName() {
    return this.getStringAttribute('prefix_name');
  }
  public set prefixName(value: string) {
    this._prefixName = value;
  }
  public resetPrefixName() {
    this._prefixName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixNameInput() {
    return this._prefixName;
  }

  // route_map - computed: false, optional: true, required: false
  private _routeMap?: string; 
  public get routeMap() {
    return this.getStringAttribute('route_map');
  }
  public set routeMap(value: string) {
    this._routeMap = value;
  }
  public resetRouteMap() {
    this._routeMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeMapInput() {
    return this._routeMap;
  }

  // vdomparam - computed: true, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      backdoor: cdktf.stringToTerraform(this._backdoor),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      network_import_check: cdktf.stringToTerraform(this._networkImportCheck),
      prefix: cdktf.stringToTerraform(this._prefix),
      prefix_name: cdktf.stringToTerraform(this._prefixName),
      route_map: cdktf.stringToTerraform(this._routeMap),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backdoor: {
        value: cdktf.stringToHclTerraform(this._backdoor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_import_check: {
        value: cdktf.stringToHclTerraform(this._networkImportCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix: {
        value: cdktf.stringToHclTerraform(this._prefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prefix_name: {
        value: cdktf.stringToHclTerraform(this._prefixName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_map: {
        value: cdktf.stringToHclTerraform(this._routeMap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
