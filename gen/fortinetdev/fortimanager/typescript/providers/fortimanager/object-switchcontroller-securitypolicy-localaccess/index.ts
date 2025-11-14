// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerSecuritypolicyLocalaccessConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#adom ObjectSwitchcontrollerSecuritypolicyLocalaccess#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#id ObjectSwitchcontrollerSecuritypolicyLocalaccess#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#internal_allowaccess ObjectSwitchcontrollerSecuritypolicyLocalaccess#internal_allowaccess}
  */
  readonly internalAllowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#mgmt_allowaccess ObjectSwitchcontrollerSecuritypolicyLocalaccess#mgmt_allowaccess}
  */
  readonly mgmtAllowaccess?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#name ObjectSwitchcontrollerSecuritypolicyLocalaccess#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#scopetype ObjectSwitchcontrollerSecuritypolicyLocalaccess#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess fortimanager_object_switchcontroller_securitypolicy_localaccess}
*/
export class ObjectSwitchcontrollerSecuritypolicyLocalaccess extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_securitypolicy_localaccess";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerSecuritypolicyLocalaccess resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerSecuritypolicyLocalaccess to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerSecuritypolicyLocalaccess that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerSecuritypolicyLocalaccess to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_securitypolicy_localaccess", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_switchcontroller_securitypolicy_localaccess fortimanager_object_switchcontroller_securitypolicy_localaccess} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerSecuritypolicyLocalaccessConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerSecuritypolicyLocalaccessConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_securitypolicy_localaccess',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._internalAllowaccess = config.internalAllowaccess;
    this._mgmtAllowaccess = config.mgmtAllowaccess;
    this._name = config.name;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // internal_allowaccess - computed: true, optional: true, required: false
  private _internalAllowaccess?: string[]; 
  public get internalAllowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('internal_allowaccess'));
  }
  public set internalAllowaccess(value: string[]) {
    this._internalAllowaccess = value;
  }
  public resetInternalAllowaccess() {
    this._internalAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get internalAllowaccessInput() {
    return this._internalAllowaccess;
  }

  // mgmt_allowaccess - computed: true, optional: true, required: false
  private _mgmtAllowaccess?: string[]; 
  public get mgmtAllowaccess() {
    return cdktf.Fn.tolist(this.getListAttribute('mgmt_allowaccess'));
  }
  public set mgmtAllowaccess(value: string[]) {
    this._mgmtAllowaccess = value;
  }
  public resetMgmtAllowaccess() {
    this._mgmtAllowaccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtAllowaccessInput() {
    return this._mgmtAllowaccess;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      internal_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._internalAllowaccess),
      mgmt_allowaccess: cdktf.listMapper(cdktf.stringToTerraform, false)(this._mgmtAllowaccess),
      name: cdktf.stringToTerraform(this._name),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      internal_allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._internalAllowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mgmt_allowaccess: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._mgmtAllowaccess),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
