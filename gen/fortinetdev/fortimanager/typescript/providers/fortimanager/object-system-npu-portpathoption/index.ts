// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSystemNpuPortpathoptionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption#adom ObjectSystemNpuPortpathoption#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption#id ObjectSystemNpuPortpathoption#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption#ports_using_npu ObjectSystemNpuPortpathoption#ports_using_npu}
  */
  readonly portsUsingNpu?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption#scopetype ObjectSystemNpuPortpathoption#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption fortimanager_object_system_npu_portpathoption}
*/
export class ObjectSystemNpuPortpathoption extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_system_npu_portpathoption";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSystemNpuPortpathoption resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSystemNpuPortpathoption to import
  * @param importFromId The id of the existing ObjectSystemNpuPortpathoption that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSystemNpuPortpathoption to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_system_npu_portpathoption", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_system_npu_portpathoption fortimanager_object_system_npu_portpathoption} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSystemNpuPortpathoptionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectSystemNpuPortpathoptionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_system_npu_portpathoption',
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
    this._adom = config.adom;
    this._id = config.id;
    this._portsUsingNpu = config.portsUsingNpu;
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

  // ports_using_npu - computed: true, optional: true, required: false
  private _portsUsingNpu?: string[]; 
  public get portsUsingNpu() {
    return cdktf.Fn.tolist(this.getListAttribute('ports_using_npu'));
  }
  public set portsUsingNpu(value: string[]) {
    this._portsUsingNpu = value;
  }
  public resetPortsUsingNpu() {
    this._portsUsingNpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portsUsingNpuInput() {
    return this._portsUsingNpu;
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
      ports_using_npu: cdktf.listMapper(cdktf.stringToTerraform, false)(this._portsUsingNpu),
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
      ports_using_npu: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._portsUsingNpu),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
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
