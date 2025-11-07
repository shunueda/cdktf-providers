// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityconsolePackageMoveConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#dst_name SecurityconsolePackageMove#dst_name}
  */
  readonly dstName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#dst_parent SecurityconsolePackageMove#dst_parent}
  */
  readonly dstParent?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#fmgadom SecurityconsolePackageMove#fmgadom}
  */
  readonly fmgadom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#force_recreate SecurityconsolePackageMove#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#id SecurityconsolePackageMove#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#pkg SecurityconsolePackageMove#pkg}
  */
  readonly pkg?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move fortimanager_securityconsole_package_move}
*/
export class SecurityconsolePackageMove extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_securityconsole_package_move";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecurityconsolePackageMove resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecurityconsolePackageMove to import
  * @param importFromId The id of the existing SecurityconsolePackageMove that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecurityconsolePackageMove to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_securityconsole_package_move", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/securityconsole_package_move fortimanager_securityconsole_package_move} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityconsolePackageMoveConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SecurityconsolePackageMoveConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_securityconsole_package_move',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dstName = config.dstName;
    this._dstParent = config.dstParent;
    this._fmgadom = config.fmgadom;
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
    this._pkg = config.pkg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dst_name - computed: false, optional: true, required: false
  private _dstName?: string; 
  public get dstName() {
    return this.getStringAttribute('dst_name');
  }
  public set dstName(value: string) {
    this._dstName = value;
  }
  public resetDstName() {
    this._dstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstNameInput() {
    return this._dstName;
  }

  // dst_parent - computed: false, optional: true, required: false
  private _dstParent?: string; 
  public get dstParent() {
    return this.getStringAttribute('dst_parent');
  }
  public set dstParent(value: string) {
    this._dstParent = value;
  }
  public resetDstParent() {
    this._dstParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstParentInput() {
    return this._dstParent;
  }

  // fmgadom - computed: true, optional: true, required: false
  private _fmgadom?: string; 
  public get fmgadom() {
    return this.getStringAttribute('fmgadom');
  }
  public set fmgadom(value: string) {
    this._fmgadom = value;
  }
  public resetFmgadom() {
    this._fmgadom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgadomInput() {
    return this._fmgadom;
  }

  // force_recreate - computed: true, optional: true, required: false
  private _forceRecreate?: string; 
  public get forceRecreate() {
    return this.getStringAttribute('force_recreate');
  }
  public set forceRecreate(value: string) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
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

  // pkg - computed: false, optional: true, required: false
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  public resetPkg() {
    this._pkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dst_name: cdktf.stringToTerraform(this._dstName),
      dst_parent: cdktf.stringToTerraform(this._dstParent),
      fmgadom: cdktf.stringToTerraform(this._fmgadom),
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
      pkg: cdktf.stringToTerraform(this._pkg),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dst_name: {
        value: cdktf.stringToHclTerraform(this._dstName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_parent: {
        value: cdktf.stringToHclTerraform(this._dstParent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fmgadom: {
        value: cdktf.stringToHclTerraform(this._fmgadom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_recreate: {
        value: cdktf.stringToHclTerraform(this._forceRecreate),
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
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
